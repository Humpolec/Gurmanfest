# Gurmánfest – evidence projektových rozhodnutí

**Projekt:** Gurmánfest – Web Design 2026/2027  
**Období:** říjen 2026  
**Účel dokumentu:** Stručně zaznamenat klíčová rozhodnutí týmu, jejich odůvodnění a dopady na návrh a realizaci webu. Dokument se průběžně aktualizuje při změnách projektu.

> Festival, jeho program, areál i provozní informace jsou fiktivní a slouží výhradně pro semestrální projekt. Záznamy níže zachycují aktuální podobu návrhu, nikoli potvrzené rezervace či skutečnou událost.

## Přijatá rozhodnutí

### DEC-001 – Koncept festivalu
- **Stav:** Přijato
- **Rozhodnutí:** Vytvořit web třídenního festivalu **Gurmánfest**, který propojuje regionální vína a sýry pocházející ze stejné geografické oblasti s živou hudbou.
- **Důvod:** Koncept umožňuje propojit gastronomický katalog, program koncertů a interaktivní doporučování do jednoho smysluplného webu.
- **Dopad:** V návrhu je nutné propojit regiony, vína, sýry, párování, účinkující a programové události.

### DEC-002 – Termín a místo konání
- **Stav:** Přijato
- **Rozhodnutí:** Festival je navržen na **16.–18. července 2027** v Mikulově. Pro účely projektu vznikl fiktivní dočasný areál **Gurmánfest Park Mikulov**.
- **Důvod:** Jednotný časový a prostorový rámec umožňuje sestavit program a praktické informace pro návštěvníky.
- **Dopad:** Web bude uvádět, že jde o modelový areál, nikoli o skutečné místo konání.

### DEC-003 – Uspořádání areálu a scén
- **Stav:** Přijato
- **Rozhodnutí:** Zahrnout dvě scény: **Hlavní hudební scénu** v západní části areálu a zastřešenou **Degustační scénu** ve východní části. Model dále obsahuje deset regionálních gastro stánků, odpočinkovou zónu, informační stánek, toalety, první pomoc a návštěvnické parkoviště.
- **Důvod:** Dvě scény oddělují hlavní koncertní program od ochutnávek a zjednodušují navigaci v programu.
- **Dopad:** Programové položky budou navázány na ID scény; web nabídne přehled modelového rozmístění.

### DEC-004 – Struktura programu
- **Stav:** Přijato
- **Rozhodnutí:** Připravit **3 dny, 2 scény, 60 účinkujících a 60 programových položek** (30 koncertů a 30 degustací se živou hudbou). Každé vystoupení trvá 45 minut a na stejné scéně následuje 15minutová přestávka.
- **Důvod:** Program splňuje minimální rozsah datového zadání a umožňuje filtrování podle dne, scény a typu akce.
- **Dopad:** Festivalový program probíhá denně od 12:00 do 21:45; jednotlivé scénické události se časově nepřekrývají.

### DEC-005 – Formát a uložení dat
- **Stav:** Přijato
- **Rozhodnutí:** Použít **JSON** jako společný zdroj festivalových dat v kořenovém souboru `data.json`.
- **Důvod:** JSON lze přímo zpracovávat v JavaScriptu a umožňuje přehledně uchovávat strukturovaná data bez backendu.
- **Dopad:** Web bude načítat data ze souboru; propojení entit bude zajištěno jednoznačnými identifikátory (`regionId`, `scenaId`, `parovaniId`, `ucinkujiciIds` atd.). Aktuální verze dat při tomto zápisu je **1.5.0**.

### DEC-006 – Regionální párování
- **Stav:** Přijato
- **Rozhodnutí:** Evidovat **10 regionů, 10 vín, 10 sýrů a 10 párování**. Každé párování propojí víno a sýr ze stejného regionu.
- **Důvod:** Geografická vazba je základní odlišující vlastností festivalu.
- **Dopad:** Sekce „Degustace a regiony“ bude zobrazovat stručné charakteristiky regionů, produkty a související programové události.

### DEC-007 – Cílové skupiny a informační architektura
- **Stav:** Přijato
- **Rozhodnutí:** Návrh webu zaměřit na čtyři skupiny: milovníky gastronomie, fanoušky hudby, návštěvníky kombinující obě oblasti a mladé dospělé se zájmem o moderní hudbu. Web bude mít úvodní stránku a hlavní sekce **Program, Účinkující, Degustace a regiony, Scény, Praktické informace, Můj program** a **Co si dát k poslechu?**
- **Důvod:** Rozdělení odpovídá hlavním potřebám a uživatelským scénářům.
- **Dopad:** Navigace a obsah budou navrženy tak, aby bylo možné snadno přecházet mezi programem, účinkujícími a gastronomickými položkami.

### DEC-008 – Hlavní interaktivní funkce
- **Stav:** Přijato
- **Rozhodnutí:** Implementovat tři hlavní interaktivní funkce: **filtrování programu**, **osobní program** a **doporučovač „Co si dát k poslechu?“**.
- **Důvod:** Funkce řeší konkrétní potřeby návštěvníků a podporují klíčové uživatelské scénáře.
- **Dopad:** Web musí umožnit vybírat události podle relevantních filtrů, ukládat a odebírat je z osobního programu a zobrazovat předpřipravená gastronomicko-hudební doporučení.

### DEC-009 – Osobní program bez registrace
- **Stav:** Přijato
- **Rozhodnutí:** Ukládat výběr festivalových událostí do **`localStorage`** v prohlížeči uživatele.
- **Důvod:** Jde o jednoduché řešení bez potřeby účtu či serverové databáze.
- **Dopad:** Uložené události budou dostupné v daném prohlížeči, dokud uživatel nesmaže lokální data; synchronizace mezi zařízeními se neplánuje.

### DEC-010 – Doporučovač s pevně připravenými tipy
- **Stav:** Přijato
- **Rozhodnutí:** Doporučovač použije **20 předpřipravených tipů** v `data.json`. Podle nálady, hudebního žánru, typu nápoje a cílové skupiny nabídne párování, degustaci a pozdější koncert ve stejný den.
- **Důvod:** Předpřipravené vazby umožní předvídatelné a ověřitelné výsledky bez náhodného generování.
- **Dopad:** Tipy odkazují na existující ID párování a programových událostí; nealkoholická volba je uvedena jako možnost, nikoli jako garantovaný konkrétní produkt.

### DEC-011 – Technologické a přístupnostní zásady
- **Stav:** Přijato
- **Rozhodnutí:** Web vytvořit v **HTML, CSS a JavaScriptu**, bez backendu a bez povinného build procesu; postupovat **mobile-first** a při implementaci zohlednit sémantické HTML, ovládání klávesnicí, **WCAG 2.0 AA** a základní SEO.
- **Důvod:** Řešení odpovídá rozsahu a technickým podmínkám semestrálního projektu.
- **Dopad:** Funkcionalita a přístupnost budou ověřovány při tvorbě prototypu a následně hotového webu; jejich splnění zatím nelze považovat za otestované.

### DEC-012 – Fiktivní provozní a kontaktní údaje
- **Stav:** Přijato
- **Rozhodnutí:** Uvést modelové vstupné, otevírací dobu, dopravu, přístupnost, bezpečnostní pravidla a kontakt **`info@gurmanfest.example`**. Alkoholické degustace jsou určeny osobám od 18 let.
- **Důvod:** Praktické informace doplňují věrohodný obsah školního návrhu webu.
- **Dopad:** Web musí zřetelně označovat fiktivní charakter akce; adresa `.example` slouží jen jako ukázka a není skutečným funkčním kontaktem.

## DEC-013 – Vizuální styl Gurmánfestu

- **Datum:** 27. 10. 2026 (datum evidence; vlastní volba vznikla v rámci přípravy návrhu)
- **Stav:** pracovní rozhodnutí
- **Rozhodnutí:** Preferovat elegantní gastro-festivalový vzhled kombinující vínovou `#63263F`, krémovou `#F7F1E7`, zlatý akcent `#E9B75D` a tmavé texty.
- **Důvod:** Design má komunikovat vinařství a regionální gastronomii, ale zároveň nabídnout prostor české hudební části a oslovit širší cílové skupiny.
- **Dopad:** Společný základ vzhledu všech stránek; při implementaci ověřit kontrast, čitelnost, konzistenci a použitelnost.

## DEC-014 – Mobile-first a jedna vizuální předloha pro tým

- **Datum:** 27. 10. 2026
- **Stav:** pracovní rozhodnutí
- **Rozhodnutí:** Vytvořit společný mobilní a desktopový mockup homepage a textový wireframe. Mobil je primární návrhová varianta.
- **Důvod:** Návaznost na zadání cvičení 3 a prevence nekonzistentních samostatných řešení jednotlivými členy týmu.
- **Dopad:** Podklady ukládat do `prototype/`, implementaci řešit následně v souladu s plánovanou strukturou projektu.

## DEC-015 – Interaktivita prototypu

- **Datum:** 27. 10. 2026
- **Stav:** navrženo, dosud neimplementováno
- **Rozhodnutí:** Prioritní funkce: filtr programu podle dne/scény/typu, vyhledávání účinkujících a osobní program.
- **Důvod:** Odpovídají potřebám návštěvníka najít relevantní akce a naplánovat návštěvu.
- **Dopad:** Budoucí prototyp musí nabídnout alespoň dvě průchozí klíčové uživatelské cesty. Interaktivita nebyla zatím technicky ani uživatelsky ověřena.

## DEC-016 – Oddělení návrhového obsahu od festivalových dat

- **Datum:** 27. 10. 2026
- **Stav:** přijato jako pravidlo zpracování návrhu
- **Rozhodnutí:** Jména účinkujících, termíny vystoupení, názvy degustací a ceny v obrazovém mockupu chápat pouze jako ilustrační.
- **Důvod:** Generovaný vizuál nelze považovat za zdroj pravdivých festivalových dat.
- **Dopad:** Před implementací a odevzdáním sjednotit zobrazená fakta s `data.json` a `project-specification.md`; neuvádět ilustrační částky jako schválené ceny.

## Rozhodnutí implementačního týmu – převzato z jeho podkladů

> Následující položky DEC-017 až DEC-023 byly redakčně převedeny z dokumentu `decisions.md` dodaného implementačním týmem. Jde o jeho popis učiněných technických voleb, nikoli o osobní rozhodnutí koordinátora. Původní podklad neuvádí přesné datum ani jména jednotlivých autorů rozhodnutí. Koordinátor odpovídá pouze za sjednocení evidence. Technické výroky, které vyžadují ověření, jsou takto označeny.

### DEC-017 – Implementace bez frameworků
- **Původ:** implementační tým (pracovní `decisions.md`)
- **Stav:** implementováno dle vyjádření týmu
- **Rozhodnutí:** Vytvořit HTML stránky, styly a interakce v čistém HTML, CSS a JavaScriptu bez frameworků a povinného build procesu. Opakovanou hlavičku a patičku tým vložil do jednotlivých HTML souborů.
- **Důvod:** Jednoduchá struktura odpovídá technickému zadání a nevyžaduje sestavovací nástroje.
- **Dopad:** Opakované prvky je třeba při změnách upravovat na více stránkách. Pro plnou funkčnost načítání JSON přes `fetch()` nelze bez ověření tvrdit, že vše funguje dvojklikem bez serveru; běžná varianta vyžaduje HTTP.

### DEC-018 – Dynamické načítání dat
- **Původ:** implementační tým (pracovní `decisions.md`)
- **Stav:** implementováno dle vyjádření týmu
- **Rozhodnutí:** Festivalové údaje o programu a účinkujících vykreslovat dynamicky z `data.json` načítaného přes `fetch()`; v HTML ponechat statické texty a strukturu.
- **Důvod:** Omezit ruční duplicity dat mezi jednotlivými stránkami.
- **Dopad:** Změny dat mají být prováděny v centrálním JSON. Po sjednocení adresářů bude nutné ověřit relativní cesty a odstranit případné nadbytečné kopie souboru.

### DEC-019 – Rozsah funkčních stránek a odložených částí
- **Původ:** implementační tým (pracovní `decisions.md`)
- **Stav:** popis rozpracovaného prototypu
- **Rozhodnutí:** V této fázi zprovoznit Úvod, Program s filtrem, Můj program a Doporučovač. Zatím nedokončené samostatné sekce Účinkující, Degustace a regiony a Scény směrovat na stránku `pripravujeme.html` a označovat „BRZY“.
- **Důvod:** Upřednostnit funkční jádro prototypu a hlavní interaktivní scénáře.
- **Dopad:** Detaily interpretů a regionů zůstávají otevřené pro další milník. Nejde o doklad dokončení všech funkcí finálního webu.

### DEC-020 – Responzivní uspořádání a navigace
- **Původ:** implementační tým (pracovní `decisions.md`)
- **Stav:** implementováno dle vyjádření týmu, výsledky testů doplnit
- **Rozhodnutí:** Použít mobile-first rozložení, mobilní uspořádání obsahu pod sebe a hamburger menu pro šířky pod 1200 px. Pro velmi velké monitory tým uvádí použití CSS zoomu.
- **Důvod:** Udržet čitelnost a použitelnost na odlišných šířkách obrazovky.
- **Dopad:** Ověřit konkrétní breakpointy, chování navigace a účinek zoomu na přístupnost a rozvržení; samotné tvrzení týmu nenahrazuje výsledky testů.

### DEC-021 – Chování programu, osobního programu a doporučovače
- **Původ:** implementační tým (pracovní `decisions.md`)
- **Stav:** implementováno dle vyjádření týmu, formální testování zbývá
- **Rozhodnutí:** Umožnit filtrování programu a vyhledávání podle názvů, účinkujících i regionů; ukládat události do `localStorage` pod klíčem `mujProgram`; doporučovat kombinace na základě filtrů a existujících vazeb v `data.json` bez náhodného výběru.
- **Důvod:** Podpořit vyhledávání událostí a osobní plánování s konzistentními festivalovými daty.
- **Dopad:** V `docs/testing.md` ověřit filtry, stálost uložených událostí, odebrání položky a správnost doporučení.

### DEC-022 – Ilustrační obrázky a záložní zobrazení
- **Původ:** implementační tým (pracovní `decisions.md`)
- **Stav:** implementováno dle vyjádření týmu
- **Rozhodnutí:** Obrázky optimalizovat a u vybraných účinkujících je pojmenovat podle ID v JSON (například `artist-01.jpg`); při nedostupnosti souboru použít CSS gradient.
- **Důvod:** Udržet vazbu obrázků na datové záznamy a zachovat vzhled při jejich výpadku.
- **Dopad:** Obrázky interpretů jsou podle týmu ilustrační, ne autentické; v dokumentaci a veřejné prezentaci to musí být zřejmé. Je vhodné doložit původ a oprávnění k použití obrazových podkladů.

### DEC-023 – Odchylky od původního wireframu
- **Původ:** implementační tým (pracovní `decisions.md`)
- **Stav:** změny implementované dle vyjádření týmu
- **Rozhodnutí:** Vynechat tlačítko „Koupit vstupenky“ v hlavičce, protože prototyp neobsahuje e-shop; odstranit interpreta Kryštof, který není v `data.json`; místo ilustrační sekce Masterclass zobrazovat skutečné modelové události uvedené v JSON.
- **Důvod:** Přizpůsobit implementaci datové základně a aktuálnímu funkčnímu rozsahu.
- **Dopad:** Implementace se v těchto bodech liší od grafického mockupu. Obsahové údaje musí vycházet z JSON a výběr vstupenek se nesmí vydávat za skutečný online prodej.

### DEC-024 – Samostatný offline export pro odevzdání
- **Datum:** 03. 11. 2026
- **Původ:** koordinace odevzdání; technická úprava exportní kopie za pomoci ChatGPT
- **Stav:** export vytvořen, automatické kontroly provedeny; manuální test `file://` čeká na potvrzení
- **Rozhodnutí:** Zachovat původní vývojový `prototype/` s načítáním přes `fetch()` a vytvořit samostatný `web/` pro otevření dvojklikem bez HTTP serveru. Data exportu poskytuje `web/js/data-offline.js` (vygenerovaná kopie zdrojového `data.json`); kořenový `index.html` přesměruje na `web/index.html`.
- **Důvod:** Požadavek na odevzdání spustitelné bez instalace a bez lokálního serveru; při protokolu `file://` může `fetch()` lokálních dat selhávat.
- **Dopad:** Původní JSON zůstává zachován, exportní datový JS se musí při každé změně JSON znovu vygenerovat. Offline export používá systémové fallback fonty namísto vzdáleného Google Fonts. Připravený export není dokladem úplného manuálního ověření; `localStorage` na `file://` může mít rozdílné chování podle prohlížeče.
- **Evidence ověření:** `docs/export-testing.md`; spouštěcí postup v `README.md` a `docs/progress-02.md`.

## Rozhodnutí pro třetí milník – 13. 11. 2026

### DEC-025 – Oddělení prototypu, vývojového webu a exportu
- **Datum:** 13. 11. 2026
- **Stav:** Přijato; pracovní kopie již připravena ve `web/`
- **Rozhodnutí:** `prototype/` ponechat jako neměnný výstup 2. milníku. Aktuální vývoj od 3. milníku pokračuje v `web/`, který používá `fetch()` a spouští se přes Live Server. Offline export se bude pořizovat odděleně z aktuální verze pro odevzdání; nebude zdrojovou vývojovou složkou.
- **Důvod:** Zachovat reprodukovatelnou historickou podobu 2. milníku, čistý vývojový adresář a oddělit omezení protokolu `file://` od běžného vývoje.
- **Dopad:** Původní popis umístění offline `web/` v DEC-024 platí pouze pro tehdejší export. Ověřit relativní cesty a načítání JSON po kopírování; běžný `web/` se nespouští dvojklikem.

### DEC-026 – Vymezení rozsahu třetího milníku
- **Datum:** 13. 11. 2026
- **Stav:** Přijato pro plán práce
- **Rozhodnutí:** Ve 3. milníku upřednostnit funkční úvodní stránku, alespoň jednu obsahově odlišnou stránku, navigaci, interaktivitu, responzivitu, sémantiku, kontrolu přístupnosti a povinný `docs/progress-03.md`. Dokončení všech profilových/katalogových stránek účinkujících, degustací, regionů a scén je plánováno do review-ready fáze.
- **Důvod:** Odpovídá minimálnímu rozsahu zadání cvičení 4 a zabraňuje nedokončeným rozpracovaným částem na úkor testovatelnosti.
- **Dopad:** Je nutno ověřit existenci skutečně obsahově odlišné stránky a v dokumentaci pravdivě uvést dosud nedokončené části.

### DEC-027 – Úpravy uživatelského rozhraní pro třetí milník
- **Datum:** 13. 11. 2026
- **Stav:** Schválený návrh; implementace a nové testy dosud neprovedeny
- **Rozhodnutí:** (1) Správně zvýraznit aktivní položku hlavního menu také při přechodu na kotvu praktických/obecných informací z jiné stránky; (2) odstranit nadbytečné potvrzovací tlačítko doporučovače a ponechat reset filtrů, protože doporučení reagují na změny průběžně; (3) vizuálně odlišit přidání/odebrání koncertu či degustace do oblíbených; (4) zobrazit u „Můj program“ srdce s aktuálním počtem uložených událostí pouze tehdy, když je počet alespoň jedna.
- **Důvod:** Zpřehlednění stavu navigace, odstranění zbytečného kroku a okamžitá srozumitelná vizuální odezva.
- **Dopad:** Zachovat synchronizaci oblíbených mezi stránkami a perzistenci `localStorage`. Ověřit reakce po přidání/odebrání, přechodech a obnovení stránky; počet odvozovat ze skutečně uložených unikátních událostí.

### DEC-028 – Organizace práce a dokumentace třetího milníku
- **Datum:** 13. 11. 2026
- **Stav:** Přijato jako pracovní rozdělení
- **Rozhodnutí:** Hlavní `README.md` ponechat s původní strukturou a pouze aktualizovat skutečnosti. Operativní plán a úkoly třetího milníku soustředit do `web/README.md` místo duplicitního samostatného plánovacího souboru. Filip Talián a Vladislav Zahrabailau společně implementují a dolaďují web; Josef Kovář připravuje testovací a milníkovou dokumentaci; Daniel Bartoníček koordinuje integraci a odevzdání.
- **Důvod:** Jeden zdroj aktuálního zadání pro implementační tým, srozumitelné odpovědnosti a méně rozcházejících se dokumentů.
- **Dopad:** Vytvořit `docs/progress-03.md` se skutečným stavem implementace, použitými UX/designovými postupy, odchylkami od prototypu, testy a využitím AI. Zůstává týmové PR review dle hlavního README.

## Doplnění evidence po porovnání implementace – 17. 11. 2026

### DEC-029 – Realizace dříve schválených UX změn
- **Datum evidence:** 17. 11. 2026 (datum samotné implementace z porovnaných ZIP nelze určit)
- **Původ:** porovnání předané verze webu s verzí 2. milníku; věcně navazuje na DEC-027
- **Stav:** změny jsou přítomné ve zdrojovém kódu, nové ruční testy nebyly součástí této kontroly
- **Rozhodnutí / realizace:** Potvrzovací tlačítko „Doporučit“ bylo odstraněno a doporučovač zůstal průběžně reagující na změny výběru. Navigace dynamicky označuje aktivní stránku či kotvu praktických informací. U událostí je doplněno kontrastní zvýraznění uloženého srdíčka a navigace zobrazuje počet položek v „Můj program“ se změnou vzhledu při nenulovém počtu.
- **Důvod:** Realizace již zaznamenaných požadavků DEC-027, přehlednější navigace a viditelnější odezva na uložení.
- **Dopad:** Potřeba regresně ověřit správnost zvýraznění při scrollování a změně URL, synchronizaci srdíček a počtu oblíbených mezi stránkami a chování na mobilu. Nejde o nové koncepční rozhodnutí oproti DEC-027.

### DEC-030 – Přístupnější ovládání a sémantika webu
- **Datum evidence:** 17. 11. 2026
- **Původ:** změny zjištěné porovnáním HTML, CSS a JS ve dvou předaných ZIP
- **Stav:** implementováno v kódu, bez potvrzeného auditu přístupnosti
- **Rozhodnutí:** Doplnit odkaz pro přeskočení navigace na obsah, viditelný fokus pro klávesnici, reakci na `prefers-reduced-motion`, ovládání mobilního menu s `aria-expanded` a uzavřením klávesou Escape, významové značky `nav`/`main`/`time`, dostupnější popisky a minimální rozměry vybraných ovládacích prvků 44 px. Neaktivní sociální profily ponechat jako označené ikony bez nefunkčních odkazů.
- **Důvod:** Zlepšit orientaci, klávesnicové ovládání a srozumitelnost pro asistivní technologie a odstranit falešné prokliky.
- **Dopad:** Vyžaduje ověření v prohlížeči, na mobilních šířkách a při ovládání klávesnicí; úpravy samotné neprokazují plný soulad s WCAG 2.0 AA.

### DEC-031 – Směrování dosud nedokončených sekcí na konkrétní kotvy
- **Datum evidence:** 17. 11. 2026
- **Původ:** porovnání odkazů v HTML stránkách předané implementace
- **Stav:** implementováno v kódu, bez samostatných ručních testů
- **Rozhodnutí:** Odkazy na dosud rozpracované sekce „Účinkující“, „Degustace a regiony“ a „Scény“ nadále vedou na společnou stránku `pripravujeme.html`, ale nově na příslušné kotvy `#ucinkujici`, `#degustace` a `#sceny`.
- **Důvod:** Zachovat informaci o nedokončených sekcích a současně návštěvníkovi ukázat, kterou sekci hledal.
- **Dopad:** Jde o zpřesnění původního řešení DEC-019, nikoli o dokončení samostatných obsahových stránek.

### DEC-032 – Zachování nastavení filtrů programu a doporučovače
- **Datum:** 17. 11. 2026
- **Stav:** Implementováno ve zdrojových souborech; funkční testování v prohlížeči zatím neprovedeno
- **Rozhodnutí:** Ukládat zvolené hodnoty filtrů do `localStorage`, odděleně pro program (`gurmanfest-filtr-program`) a doporučovač (`gurmanfest-filtr-doporucovac`). V programu uchovávat den, scénu, typ, žánr a vyhledávaný text; v doporučovači náladu, žánr, nápoj a cílovou skupinu. Po načtení stránky hodnoty obnovit, při změně automaticky uložit a při resetu uložit výchozí nastavení.
- **Důvod:** Uživatel při přechodu mezi stránkami ani po obnovení stránky nemusí znovu nastavovat výběr. Oddělené klíče zabraňují vzájemnému přepisování filtrů.
- **Dopad:** Úpravy pouze v `web/js/program.js` a `web/js/doporucovac.js`, bez zásahu do `prototype/` a ukládání oblíbených událostí. Parametr `hledat` v URL programu přepisuje uložený vyhledávací text. Neplatné uložené volby se ignorují; při nedostupném úložišti zůstává filtrování funkční. Funkční testy provede člen týmu samostatně.

## Pravidla další evidence

Při významné změně konceptu, datového modelu, navigace nebo funkce přidat nový záznam s ID `DEC-013` a dále. Původní rozhodnutí nemažte: při jeho nahrazení změňte stav na **Nahrazeno** a uveďte ID nového rozhodnutí.

**Související soubory:** `project-specification.md`, `data.json`, `README.md`.
