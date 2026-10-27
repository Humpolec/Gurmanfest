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

## Pravidla další evidence

Při významné změně konceptu, datového modelu, navigace nebo funkce přidat nový záznam s ID `DEC-013` a dále. Původní rozhodnutí nemažte: při jeho nahrazení změňte stav na **Nahrazeno** a uveďte ID nového rozhodnutí.

**Související soubory:** `project-specification.md`, `data.json`, `README.md`.
