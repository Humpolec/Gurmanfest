/* MENU */
let header = document.querySelector('.header');
let burger = document.querySelector('.burger');

burger.onclick = function () {
  header.classList.toggle('open');
};

let menuLinks = document.querySelectorAll('.menu a');
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].onclick = function () {
    header.classList.remove('open');
  };
}


/* NACTENI DAT */
function nactiData() {
  return Promise.resolve(window.GURMANFEST_DATA);
}

function chybaDat() {
  return '<li class="zprava">Data se nepodařilo načíst.</li>';
}

/* HLEDANI PODLE ID */
function najdi(seznam, id) {
  for (let i = 0; i < seznam.length; i++) {
    if (seznam[i].id == id) {
      return seznam[i];
    }
  }
  return null;
}


/* DATUM */
let zkratkyDnu = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'];

function hezkyDen(datum) {
  let d = new Date(datum + 'T12:00');
  return zkratkyDnu[d.getDay()] + ' ' + d.getDate() + '. ' + (d.getMonth() + 1) + '.';
}

/* RAZENI AKCI */
function seradAkce(akce) {
  akce.sort(function (a, b) {
    let prvni = a.den + a.zacatek + a.scenaId;
    let druha = b.den + b.zacatek + b.scenaId;
    if (prvni < druha) return -1;
    if (prvni > druha) return 1;
    return 0;
  });
  return akce;
}


/* MUJ PROGRAM */
function nactiMujProgram() {
  let ulozeno = localStorage.getItem('mujProgram');
  if (ulozeno == null) {
    return [];
  }
  return JSON.parse(ulozeno);
}

function ulozMujProgram(seznam) {
  localStorage.setItem('mujProgram', JSON.stringify(seznam));
}

function jeVProgramu(id) {
  return nactiMujProgram().includes(id);
}

function prepniVProgramu(id) {
  let seznam = nactiMujProgram();
  let index = seznam.indexOf(id);
  if (index == -1) {
    seznam.push(id);
  } else {
    seznam.splice(index, 1);
  }
  ulozMujProgram(seznam);
}


/* SRDICKA */
function prekresliSrdicko(tlacitko) {
  let img = tlacitko.querySelector('img');
  let text = tlacitko.querySelector('span');
  if (jeVProgramu(tlacitko.dataset.id)) {
    img.src = 'images/icons/heart-full.svg';
    tlacitko.setAttribute('aria-label', 'Odebrat z mého programu');
    if (text) text.textContent = 'V mém programu';
  } else {
    img.src = 'images/icons/heart.svg';
    tlacitko.setAttribute('aria-label', 'Přidat do mého programu');
    if (text) text.textContent = 'Do mého programu';
  }
}

function nastavSrdicka() {
  let srdicka = document.querySelectorAll('.heart');
  for (let i = 0; i < srdicka.length; i++) {
    prekresliSrdicko(srdicka[i]);
    srdicka[i].onclick = function () {
      prepniVProgramu(this.dataset.id);
      let stejna = document.querySelectorAll('.heart[data-id="' + this.dataset.id + '"]');
      for (let j = 0; j < stejna.length; j++) {
        prekresliSrdicko(stejna[j]);
      }
    };
  }
}


/* KARTA AKCE */
function htmlAkce(data, akce, tlacitko) {
  let scena = najdi(data.sceny, akce.scenaId);
  let html = '';

  if (akce.typ == 'koncert') {
    html += '<li class="akce">';
  } else {
    html += '<li class="akce degustace">';
  }

  html += '<div class="akce-cas"><strong>' + akce.zacatek + '</strong><span>' + hezkyDen(akce.den) + '<br>do ' + akce.konec + '</span></div>';
  html += '<div class="akce-text">';

  let ucinkujici = [];
  for (let i = 0; i < akce.ucinkujiciIds.length; i++) {
    let u = najdi(data.ucinkujici, akce.ucinkujiciIds[i]);
    ucinkujici.push(u.nazev + ' (' + u.zanr + ')');
  }

  if (akce.typ == 'koncert') {
    html += '<span class="label label-red">Koncert</span>';
    html += '<h3>' + akce.nazev.replace('Koncert: ', '') + '</h3>';
    html += '<p>' + scena.nazev + ' · ' + ucinkujici.join(', ') + '</p>';
  } else {
    let parovani = najdi(data.parovani, akce.parovaniId);
    let region = najdi(data.regiony, parovani.regionId);
    let vino = najdi(data.vina, parovani.vinoId);
    let syr = najdi(data.syry, parovani.syrId);
    html += '<span class="label label-gold">Degustace</span>';
    html += '<h3>' + region.nazev + ' (' + region.zeme + ')</h3>';
    html += '<p>' + vino.nazev + ' + ' + syr.nazev + '</p>';
    html += '<p>' + scena.nazev + ' · hraje ' + ucinkujici.join(', ') + '</p>';
  }
  html += '</div>';

  if (tlacitko == 'odebrat') {
    html += '<button class="odebrat" data-id="' + akce.id + '">Odebrat</button>';
  } else {
    html += '<button class="heart heart-text" data-id="' + akce.id + '"><img src="images/icons/heart.svg" alt=""><span>Do mého programu</span></button>';
  }

  html += '</li>';
  return html;
}
