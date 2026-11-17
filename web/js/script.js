/* MENU */
let header = document.querySelector('.header');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');

function otevriMenu(otevrit) {
  if (otevrit) {
    header.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Zavřít menu');
  } else {
    header.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Otevřít menu');
  }
}

burger.onclick = function () {
  otevriMenu(!header.classList.contains('open'));
};

let menuLinks = document.querySelectorAll('.menu a');
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function () {
    otevriMenu(false);
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && header.classList.contains('open')) {
    otevriMenu(false);
    burger.focus();
  }
});


/* ZVYRAZNENI MENU */
function zvyrazniMenu(kotva) {
  let stranka = location.pathname.split('/').pop();
  if (stranka == '') {
    stranka = 'index.html';
  }

  let aktivni = null;
  for (let i = 0; i < menuLinks.length; i++) {
    let casti = menuLinks[i].getAttribute('href').split('#');
    let soubor = casti[0];
    let odkazKotva = '';
    if (casti[1]) {
      odkazKotva = '#' + casti[1];
    }
    if (soubor != stranka) continue;

    if (odkazKotva == kotva) {
      aktivni = menuLinks[i];
    } else if (odkazKotva == '' && aktivni == null) {
      aktivni = menuLinks[i];
    }
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.remove('active');
    menuLinks[i].removeAttribute('aria-current');
  }
  if (aktivni) {
    aktivni.classList.add('active');
    aktivni.setAttribute('aria-current', 'page');
  }
}

zvyrazniMenu(location.hash);

window.addEventListener('hashchange', function () {
  zvyrazniMenu(location.hash);
});

/* PRAKTICKE INFO PRI SCROLLOVANI */
let sekceInfo = document.getElementById('info');
if (sekceInfo) {
  window.addEventListener('scroll', function () {
    let horni = sekceInfo.getBoundingClientRect().top;
    if (horni < window.innerHeight / 2) {
      zvyrazniMenu('#info');
    } else {
      zvyrazniMenu('');
    }
  });
}


/* NACTENI DAT */
function nactiData() {
  return fetch('data.json').then(function (odpoved) {
    return odpoved.json();
  });
}

function chybaDat() {
  return '<li class="zprava">Data se nepodařilo načíst. Spusť web přes Live Server.</li>';
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
  try {
    const ulozeno = localStorage.getItem('mujProgram');
    if (ulozeno == null) return [];
    const seznam = JSON.parse(ulozeno);
    // Vracime pouze jednoznacne identifikatory, aby se nezobrazovaly duplicity.
    if (!Array.isArray(seznam)) return [];
    return [...new Set(seznam.filter(id => typeof id === 'string'))];
  } catch (chyba) {
    // Pri poskozenem zaznamu nebo nedostupnem ulozisti zustane aplikace funkcni.
    return [];
  }
}

function ulozMujProgram(seznam) {
  try {
    localStorage.setItem('mujProgram', JSON.stringify([...new Set(seznam)]));
  } catch (chyba) {
    // Prohlizec muze ukladani omezit, napr. v soukromem rezimu.
  }
  ukazPocet();
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


/* POCET V MENU */
function ukazPocet() {
  let pocet = nactiMujProgram().length;
  let odznaky = document.querySelectorAll('.pocet-programu');
  for (let i = 0; i < odznaky.length; i++) {
    odznaky[i].querySelector('.pocet-cislo').textContent = pocet;
    if (pocet > 0) {
      odznaky[i].classList.add('plny');
      odznaky[i].querySelector('img').src = 'images/icons/heart-white.svg';
    } else {
      odznaky[i].classList.remove('plny');
      odznaky[i].querySelector('img').src = 'images/icons/heart.svg';
    }
  }
}

ukazPocet();

window.addEventListener('storage', function () {
  ukazPocet();
  nastavSrdicka();
});


/* SRDICKA */
function prekresliSrdicko(tlacitko) {
  let img = tlacitko.querySelector('img');
  let text = tlacitko.querySelector('span');
  let ulozeno = jeVProgramu(tlacitko.dataset.id);

  if (ulozeno) {
    tlacitko.classList.add('aktivni');
    img.src = 'images/icons/heart-white.svg';
  } else {
    tlacitko.classList.remove('aktivni');
    img.src = 'images/icons/heart.svg';
  }

  if (text && ulozeno) {
    text.textContent = 'V mém programu';
  } else if (text) {
    text.textContent = 'Do mého programu';
  } else if (ulozeno) {
    tlacitko.setAttribute('aria-pressed', 'true');
  } else {
    tlacitko.setAttribute('aria-pressed', 'false');
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

  html += '<div class="akce-cas"><strong><time datetime="' + akce.den + 'T' + akce.zacatek + '">' + akce.zacatek + '</time></strong>';
  html += '<span>' + hezkyDen(akce.den) + '<br>do ' + akce.konec + '</span></div>';
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
    html += '<button type="button" class="odebrat" data-id="' + akce.id + '">Odebrat</button>';
  } else {
    html += '<button type="button" class="heart heart-text" data-id="' + akce.id + '"><img src="images/icons/heart.svg" alt=""><span>Do mého programu</span></button>';
  }

  html += '</li>';
  return html;
}
