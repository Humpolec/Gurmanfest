/* MUJ PROGRAM */
let data = null;
let seznam = document.getElementById('muj-seznam');
let pocet = document.getElementById('pocet');


/* NACTENI */
nactiData().then(function (d) {
  data = d;
  vykresli();
}).catch(function () {
  seznam.innerHTML = '<ul>' + chybaDat() + '</ul>';
});


/* VYPIS */
function vykresli() {
  let ulozene = nactiMujProgram();

  let akce = [];
  for (let i = 0; i < data.program.length; i++) {
    if (ulozene.includes(data.program[i].id)) {
      akce.push(data.program[i]);
    }
  }
  seradAkce(akce);

  if (akce.length == 0) {
    seznam.innerHTML = '<p class="zprava">Zatím tu nic není. Přidej si koncerty a degustace v <a href="program.html">Programu</a> nebo v doporučovači <a href="doporucovac.html">Co si dát k poslechu?</a></p>';
    pocet.textContent = '';
    return;
  }

  pocet.textContent = 'Uloženo: ' + akce.length;

  let html = '';
  for (let i = 0; i < data.dny.length; i++) {
    let den = data.dny[i];
    let akceDne = [];
    for (let j = 0; j < akce.length; j++) {
      if (akce[j].den == den.datum) {
        akceDne.push(akce[j]);
      }
    }
    if (akceDne.length == 0) continue;

    html += '<h2 class="den-nadpis">' + den.nazev + '<span>' + hezkyDen(den.datum) + ' 2027</span></h2>';
    html += '<ul class="akce-seznam">';
    for (let j = 0; j < akceDne.length; j++) {
      html += htmlAkce(data, akceDne[j], 'odebrat');
    }
    html += '</ul>';
  }
  seznam.innerHTML = html;

  /* ODEBRAT */
  let tlacitka = document.querySelectorAll('.odebrat');
  for (let i = 0; i < tlacitka.length; i++) {
    tlacitka[i].onclick = function () {
      prepniVProgramu(this.dataset.id);
      vykresli();
    };
  }
}
