/* DOPORUCOVAC */
let data = null;

let formular = document.getElementById('doporucovac');
let volbaNalada = document.getElementById('volba-nalada');
let volbaZanr = document.getElementById('volba-zanr');
let volbaNapoj = document.getElementById('volba-napoj');
let volbaSkupina = document.getElementById('volba-skupina');
let vysledky = document.getElementById('vysledky');
let pocet = document.getElementById('pocet');

let nazvyNapoju = {
  bile: 'Bílé víno',
  cervene: 'Červené víno',
  sumive: 'Šumivé víno',
  nealko: 'Nealkoholická varianta'
};


/* NACTENI */
nactiData().then(function (d) {
  data = d;
  naplnVolby();
  document.getElementById('upozorneni').textContent = data.doporucovac.upozorneni;
  vykresli();
}).catch(function () {
  vysledky.innerHTML = '<ul>' + chybaDat() + '</ul>';
});


/* MOZNOSTI */
function naplnVolby() {
  let filtry = data.doporucovac.filtry;

  for (let i = 0; i < filtry.nalady.length; i++) {
    volbaNalada.innerHTML += '<option value="' + filtry.nalady[i].id + '">' + filtry.nalady[i].nazev + '</option>';
  }
  for (let i = 0; i < filtry.hudebniZanry.length; i++) {
    volbaZanr.innerHTML += '<option value="' + filtry.hudebniZanry[i] + '">' + filtry.hudebniZanry[i] + '</option>';
  }
  for (let i = 0; i < filtry.napoje.length; i++) {
    volbaNapoj.innerHTML += '<option value="' + filtry.napoje[i] + '">' + nazvyNapoju[filtry.napoje[i]] + '</option>';
  }
  for (let i = 0; i < filtry.ciloveSkupiny.length; i++) {
    let skupina = najdi(data.ciloveSkupiny, filtry.ciloveSkupiny[i]);
    volbaSkupina.innerHTML += '<option value="' + skupina.id + '">' + skupina.popis.split(' – ')[0] + '</option>';
  }
}

volbaNalada.onchange = vykresli;
volbaZanr.onchange = vykresli;
volbaNapoj.onchange = vykresli;
volbaSkupina.onchange = vykresli;

formular.onsubmit = function (e) {
  e.preventDefault();
  vykresli();
};

formular.onreset = function () {
  setTimeout(vykresli, 0);
};


/* KONTROLA TIPU */
function sediTip(tip) {
  if (volbaNalada.value != '' && !tip.nalady.includes(volbaNalada.value)) return false;
  if (volbaZanr.value != '' && !tip.hudebniZanry.includes(volbaZanr.value)) return false;
  if (volbaNapoj.value != '' && !tip.napoje.includes(volbaNapoj.value)) return false;
  if (volbaSkupina.value != '' && !tip.ciloveSkupiny.includes(volbaSkupina.value)) return false;
  return true;
}


/* VYPIS TIPU */
function vykresli() {
  if (data == null) return;

  let tipy = data.doporucovac.doporuceni;
  let html = '';
  let nalezeno = 0;

  for (let i = 0; i < tipy.length; i++) {
    let tip = tipy[i];
    if (!sediTip(tip)) continue;
    nalezeno++;

    let parovani = najdi(data.parovani, tip.parovaniId);
    let region = najdi(data.regiony, parovani.regionId);
    let vino = najdi(data.vina, parovani.vinoId);
    let syr = najdi(data.syry, parovani.syrId);
    let degustace = najdi(data.program, tip.degustaceEventId);
    let koncert = najdi(data.program, tip.koncertEventId);

    html += '<article class="tip">';
    html += '<h3>' + tip.nazev + '</h3>';
    html += '<p class="tip-proc">' + tip.proc + '</p>';
    html += '<div class="tip-parovani">';
    html += '<strong>' + region.nazev + ' (' + region.zeme + ')</strong>';
    html += vino.nazev + ' (' + vino.odruda + ') + ' + syr.nazev + '<br>';
    html += parovani.procFunguje;
    html += '</div>';
    html += '<ul class="akce-seznam">';
    html += htmlAkce(data, degustace, 'ulozit');
    html += htmlAkce(data, koncert, 'ulozit');
    html += '</ul>';
    html += '</article>';
  }

  if (nalezeno == 0) {
    html = '<p class="zprava">Nic jsme nenašli. Zkus vybrat méně věcí, třeba jen náladu.</p>';
  }

  vysledky.innerHTML = html;
  pocet.textContent = 'Našli jsme ' + nalezeno + ' ' + slovoTip(nalezeno);
  nastavSrdicka();
}

/* SKLONOVANI */
function slovoTip(n) {
  if (n == 1) return 'tip';
  if (n >= 2 && n <= 4) return 'tipy';
  return 'tipů';
}
