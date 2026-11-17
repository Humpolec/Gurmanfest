/* PROGRAM */
let data = null;

let filtr = document.getElementById('filtr');
let filtrDen = document.getElementById('filtr-den');
let filtrScena = document.getElementById('filtr-scena');
let filtrTyp = document.getElementById('filtr-typ');
let filtrZanr = document.getElementById('filtr-zanr');
let filtrHledat = document.getElementById('filtr-hledat');
let seznam = document.getElementById('program-seznam');
let pocet = document.getElementById('pocet');


/* NACTENI */
nactiData().then(function (d) {
  data = d;
  document.getElementById('format-programu').textContent = data.festival.formatProgramu;
  naplnFiltry();
  obnovFiltr();

  let hledat = new URLSearchParams(location.search).get('hledat');
  if (hledat) {
    filtrHledat.value = hledat;
    ulozFiltr();
  }

  vykresli();
}).catch(function () {
  seznam.innerHTML = '<ul>' + chybaDat() + '</ul>';
});


/* MOZNOSTI FILTRU */
function naplnFiltry() {
  for (let i = 0; i < data.dny.length; i++) {
    let den = data.dny[i];
    filtrDen.innerHTML += '<option value="' + den.datum + '">' + hezkyDen(den.datum) + ' – ' + den.nazev.split(' – ')[1] + '</option>';
  }

  for (let i = 0; i < data.sceny.length; i++) {
    filtrScena.innerHTML += '<option value="' + data.sceny[i].id + '">' + data.sceny[i].nazev + '</option>';
  }

  let zanry = [];
  for (let i = 0; i < data.ucinkujici.length; i++) {
    let zanr = data.ucinkujici[i].zanr;
    if (!zanry.includes(zanr)) {
      zanry.push(zanr);
    }
  }
  zanry.sort(function (a, b) {
    return a.localeCompare(b, 'cs');
  });
  for (let i = 0; i < zanry.length; i++) {
    filtrZanr.innerHTML += '<option value="' + zanry[i] + '">' + zanry[i] + '</option>';
  }
}

/* ULOZENI A OBNOVENI FILTRU */
const KLIC_FILTRU = 'gurmanfest-filtr-program';
const polickaFiltru = [filtrDen, filtrScena, filtrTyp, filtrZanr, filtrHledat];

function ulozFiltr() {
  const stav = {};
  for (const pole of polickaFiltru) stav[pole.id] = pole.value;
  try {
    localStorage.setItem(KLIC_FILTRU, JSON.stringify(stav));
  } catch (e) {
    // Kdyz je uloziste nedostupne, filtrovani dal funguje.
  }
}

function obnovFiltr() {
  try {
    const stav = JSON.parse(localStorage.getItem(KLIC_FILTRU));
    if (!stav || typeof stav !== 'object') return;
    for (const pole of polickaFiltru) {
      const hodnota = stav[pole.id];
      if (typeof hodnota !== 'string') continue;
      if (pole.tagName === 'SELECT' && !Array.from(pole.options).some(o => o.value === hodnota)) continue;
      pole.value = hodnota;
    }
  } catch (e) {
    // Chybna nebo nedostupna ulozena data ignorujeme.
  }
}

/* FILTR */
function aktualizujFiltr() {
  ulozFiltr();
  vykresli();
}

filtrDen.onchange = aktualizujFiltr;
filtrScena.onchange = aktualizujFiltr;
filtrTyp.onchange = aktualizujFiltr;
filtrZanr.onchange = aktualizujFiltr;
filtrHledat.oninput = aktualizujFiltr;

filtr.onsubmit = function (e) {
  e.preventDefault();
};

filtr.onreset = function () {
  setTimeout(aktualizujFiltr, 0);
};


/* KONTROLA FILTRU */
function odpovidaFiltru(akce) {
  if (filtrDen.value != '' && akce.den != filtrDen.value) return false;
  if (filtrScena.value != '' && akce.scenaId != filtrScena.value) return false;
  if (filtrTyp.value != '' && akce.typ != filtrTyp.value) return false;

  let text = akce.nazev;
  let maZanr = false;
  for (let i = 0; i < akce.ucinkujiciIds.length; i++) {
    let u = najdi(data.ucinkujici, akce.ucinkujiciIds[i]);
    text += ' ' + u.nazev;
    if (u.zanr == filtrZanr.value) maZanr = true;
  }
  if (filtrZanr.value != '' && !maZanr) return false;

  if (akce.parovaniId && akce.typ != 'koncert') {
    let parovani = najdi(data.parovani, akce.parovaniId);
    text += ' ' + najdi(data.regiony, parovani.regionId).nazev;
    text += ' ' + najdi(data.vina, parovani.vinoId).nazev;
    text += ' ' + najdi(data.syry, parovani.syrId).nazev;
  }

  let hledam = filtrHledat.value.trim().toLowerCase();
  if (hledam != '' && !text.toLowerCase().includes(hledam)) return false;

  return true;
}


/* VYPIS */
function vykresli() {
  if (data == null) return;

  let html = '';
  let celkem = 0;

  for (let i = 0; i < data.dny.length; i++) {
    let den = data.dny[i];

    let akceDne = [];
    for (let j = 0; j < data.program.length; j++) {
      let akce = data.program[j];
      if (akce.den == den.datum && odpovidaFiltru(akce)) {
        akceDne.push(akce);
      }
    }
    if (akceDne.length == 0) continue;

    seradAkce(akceDne);
    celkem += akceDne.length;

    html += '<h2 class="den-nadpis">' + den.nazev + '<span>' + hezkyDen(den.datum) + ' 2027</span></h2>';
    html += '<ul class="akce-seznam">';
    for (let j = 0; j < akceDne.length; j++) {
      html += htmlAkce(data, akceDne[j], 'ulozit');
    }
    html += '</ul>';
  }

  if (celkem == 0) {
    html = '<p class="zprava">Nic jsme nenašli. Zkus zrušit některý filtr.</p>';
  }

  seznam.innerHTML = html;
  pocet.textContent = 'Nalezeno: ' + celkem + ' ' + slovoUdalost(celkem);
  nastavSrdicka();
}

/* SKLONOVANI */
function slovoUdalost(n) {
  if (n == 1) return 'událost';
  if (n >= 2 && n <= 4) return 'události';
  return 'událostí';
}
