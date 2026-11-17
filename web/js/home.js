/* CO SE UKAZUJE NA UVODU */
let vybraneAkce = ['event-01', 'event-15', 'event-23', 'event-51'];
let vybraneRegiony = ['morava', 'bourgogne', 'toscana', 'champagne'];
let vybraniUcinkujici = ['artist-01', 'artist-23', 'artist-50'];

/* PLACEHOLDER – barvy misto fotek */
let barvyRegionu = ['grad-cheese', 'grad-wine', 'grad-landscape', 'grad-craft'];
let barvyKapel = ['grad-concert', 'grad-concert2', 'grad-concert3'];

/* IKONY VSTUPNEHO */
let ikonyVstupneho = {
  denni: 'ticket',
  festivalova: 'tickets',
  student: 'student',
  dite: 'family'
};


/* NACTENI */
nactiData().then(function (data) {
  vypisFestival(data);
  vypisPocty(data);
  vypisAkce(data);
  vypisRegiony(data);
  vypisUcinkujici(data);
  vypisVstupne(data);
  vypisInfo(data);
  nastavSrdicka();
  skocNaKotvu();
}).catch(function () {
  document.getElementById('vybrane-akce').innerHTML = chybaDat();
  document.getElementById('regiony').innerHTML = chybaDat();
  document.getElementById('ucinkujici-seznam').innerHTML = chybaDat();
  document.getElementById('vstupne').innerHTML = chybaDat();
  document.getElementById('info-seznam').innerHTML = chybaDat();
});


/* DATUM A MISTO */
let mesice = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];

function vypisFestival(data) {
  let od = new Date(data.festival.datumOd + 'T12:00');
  let konec = new Date(data.festival.datumDo + 'T12:00');
  document.getElementById('festival-datum').textContent =
    od.getDate() + '.–' + konec.getDate() + '. ' + mesice[konec.getMonth()] + ' ' + konec.getFullYear();

  let areal = data.festival.provozniInformace.areal.nazev;
  document.getElementById('festival-misto').textContent = areal;
  document.getElementById('areal-nazev').textContent = areal;
}


/* SKOK NA KOTVU */
function skocNaKotvu() {
  if (location.hash == '') return;
  let cil = document.querySelector(location.hash);
  if (cil) {
    cil.scrollIntoView();
  }
}


/* CO VAS CEKA */
function vypisPocty(data) {
  let koncerty = 0;
  let degustace = 0;
  for (let i = 0; i < data.program.length; i++) {
    if (data.program[i].typ == 'koncert') {
      koncerty++;
    } else {
      degustace++;
    }
  }
  document.getElementById('pocet-koncertu').textContent = koncerty;
  document.getElementById('pocet-degustaci').textContent = degustace;
  document.getElementById('pocet-regionu').textContent = data.regiony.length;
  document.getElementById('pocet-dnu').textContent = data.dny.length;
  document.getElementById('pocet-scen').textContent = data.sceny.length;
}


/* VYBRANE AKCE */
function vypisAkce(data) {
  let html = '';

  for (let i = 0; i < vybraneAkce.length; i++) {
    let akce = najdi(data.program, vybraneAkce[i]);
    let scena = najdi(data.sceny, akce.scenaId);
    let umelec = najdi(data.ucinkujici, akce.ucinkujiciIds[0]);

    html += '<li class="event">';

    if (akce.typ == 'koncert') {
      html += '<div class="event-photo grad-concert">';
    } else {
      html += '<div class="event-photo grad-wine">';
    }
    html += '<img class="foto" src="images/' + akce.id + '.jpg" alt="" onerror="this.remove()"></div>';

    html += '<div class="event-text">';
    if (akce.typ == 'koncert') {
      html += '<span class="label label-red">Koncert</span>';
      html += '<h3>' + umelec.nazev + '</h3>';
    } else {
      let parovani = najdi(data.parovani, akce.parovaniId);
      let region = najdi(data.regiony, parovani.regionId);
      html += '<span class="label label-gold">Degustace</span>';
      html += '<h3>' + region.nazev + '</h3>';
    }

    html += '<ul class="event-info">';
    html += '<li><img src="images/icons/calendar.svg" alt="">' + hezkyDen(akce.den) + ' · ' + akce.zacatek + '–' + akce.konec + '</li>';
    html += '<li><img src="images/icons/pin.svg" alt="">' + scena.nazev + '</li>';
    if (akce.typ == 'koncert') {
      html += '<li><img src="images/icons/music.svg" alt="">' + umelec.zanr + '</li>';
    } else {
      let parovani = najdi(data.parovani, akce.parovaniId);
      let vino = najdi(data.vina, parovani.vinoId);
      let syr = najdi(data.syry, parovani.syrId);
      html += '<li><img src="images/icons/wine.svg" alt="">' + vino.nazev + ' + ' + syr.nazev + '</li>';
      html += '<li><img src="images/icons/music.svg" alt="">hraje ' + umelec.nazev + '</li>';
    }
    html += '</ul>';

    let nazevAkce = umelec.nazev;
    if (akce.typ != 'koncert') {
      nazevAkce = 'degustace ' + najdi(data.regiony, najdi(data.parovani, akce.parovaniId).regionId).nazev;
    }
    html += '<button type="button" class="heart" data-id="' + akce.id + '" aria-label="Uložit do mého programu: ' + nazevAkce + '"><img src="images/icons/heart.svg" alt=""></button>';
    html += '</div>';
    html += '</li>';
  }

  document.getElementById('vybrane-akce').innerHTML = html;
}


/* REGIONY */
function vypisRegiony(data) {
  let html = '';

  for (let i = 0; i < vybraneRegiony.length; i++) {
    let region = najdi(data.regiony, vybraneRegiony[i]);

    let vino = '';
    let syr = '';
    for (let j = 0; j < data.vina.length; j++) {
      if (data.vina[j].regionId == region.id) vino = data.vina[j].nazev;
    }
    for (let j = 0; j < data.syry.length; j++) {
      if (data.syry[j].regionId == region.id) syr = data.syry[j].nazev;
    }

    html += '<li><a href="program.html?hledat=' + region.nazev + '" class="tile ' + barvyRegionu[i] + '">';
    html += '<img class="foto" src="images/region-' + region.id + '.jpg" alt="" onerror="this.remove()">';
    html += '<span class="tile-text"><strong>' + region.nazev + '</strong>';
    html += '<span>' + vino + ' + ' + syr + '</span></span>';
    html += '</a></li>';
  }

  document.getElementById('regiony').innerHTML = html;
}


/* UCINKUJICI */
function vypisUcinkujici(data) {
  let html = '';

  for (let i = 0; i < vybraniUcinkujici.length; i++) {
    let umelec = najdi(data.ucinkujici, vybraniUcinkujici[i]);

    let koncert = null;
    for (let j = 0; j < data.program.length; j++) {
      if (data.program[j].ucinkujiciIds.includes(umelec.id)) {
        koncert = data.program[j];
      }
    }
    let scena = najdi(data.sceny, koncert.scenaId);

    html += '<li><a href="program.html?hledat=' + umelec.nazev + '" class="tile artist ' + barvyKapel[i] + '">';
    html += '<img class="foto" src="images/' + umelec.id + '.jpg" alt="" onerror="this.remove()">';
    html += '<span class="tile-text"><strong>' + umelec.nazev + '</strong>';
    html += '<span>' + hezkyDen(koncert.den) + ' · ' + koncert.zacatek + ' · ' + scena.nazev + '</span>';
    html += '<span>' + umelec.zanr + '</span></span>';
    html += '</a></li>';
  }

  document.getElementById('ucinkujici-seznam').innerHTML = html;
}


/* VSTUPNE */
function vypisVstupne(data) {
  let vstupenky = data.festival.provozniInformace.vstupenky;
  let html = '';

  for (let i = 0; i < vstupenky.varianty.length; i++) {
    let v = vstupenky.varianty[i];

    let cena = v.cena.toLocaleString('cs-CZ') + ' Kč';
    if (v.cena == 0) {
      cena = 'zdarma';
    }

    let popis = 'Platí 1 den.';
    if (v.platiDni > 1) {
      popis = 'Platí ' + v.platiDni + ' dny.';
    }
    if (v.podminky) {
      popis += ' ' + v.podminky;
    }

    html += '<li class="ticket">';
    html += '<img class="ticket-icon" src="images/icons/' + ikonyVstupneho[v.id] + '.svg" alt="">';
    html += '<div>';
    html += '<h3>' + v.nazev + '</h3>';
    html += '<p class="price">' + cena + '</p>';
    html += '<p class="ticket-desc">' + popis + '</p>';
    html += '</div>';
    html += '</li>';
  }

  document.getElementById('vstupne').innerHTML = html;

  document.getElementById('vstupne-poznamka').textContent =
    vstupenky.obsahuje + ' Degustační blok stojí ' + vstupenky.degustace.cenaZaBlok + ' Kč. ' +
    vstupenky.degustace.podminky + ' Ceny jsou fiktivní, online prodej připravujeme.';
}


/* PRAKTICKE INFO */
function vypisInfo(data) {
  let info = data.festival.provozniInformace;
  let areal = info.areal;

  let zony = [];
  for (let i = 0; i < areal.zony.length; i++) {
    zony.push(areal.zony[i].nazev + ' (' + areal.zony[i].umisteni + ')');
  }

  let html = '';
  html += polozkaInfa('pin-gold', 'Kde se koná', areal.nazev + ', ' + areal.lokalita + '. Je to ' + areal.typ + '. ' + areal.vstup + '.');
  html += polozkaInfa('car', 'Jak se tam dostat', 'Do Mikulova: ' + info.doprava.moznosti.join(', ') + '. ' + info.doprava.parkovani + ' ' + info.doprava.kola);
  html += polozkaInfa('clock', 'Otevírací doba', 'Denně ' + info.oteviraciDoba.od + '–' + info.oteviraciDoba.do + '. ' + info.oteviraciDoba.poznamka);
  html += polozkaInfa('map', 'V areálu', zony.join(', ') + '.');
  html += polozkaInfa('info', 'Pro návštěvníky', 'Bezbariérový přístup ' + info.pristupnostArealu.bezbarierovyPristup + '. ' + info.bezpecnost.alkohol + ' ' + info.bezpecnost.odvoz);
  html += polozkaInfa('mail', 'Kontakt', info.kontakt.poradatel + '<br><a href="mailto:' + info.kontakt.email + '">' + info.kontakt.email + '</a> (ukázková adresa, e-maily se nedoručují)');

  document.getElementById('info-seznam').innerHTML = html;
}

function polozkaInfa(ikona, nadpis, text) {
  return '<li class="info-item"><img class="info-icon" src="images/icons/' + ikona + '.svg" alt="">' +
         '<div><h3>' + nadpis + '</h3><p>' + text + '</p></div></li>';
}
