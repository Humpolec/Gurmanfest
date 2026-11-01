# Gurmánfest – funkční prototyp (milník 2)

**Projekt:** Gurmánfest – Web Design 2026/2027  
**Fáze:** Druhý milník – UX návrh a funkční prototyp  
**Stav:** Funkční části implementovány, testování uživatelských scénářů a příprava odevzdávaného exportu probíhají.

## 1. Účel prototypu

Prototyp převádí původní mobile-first návrh do HTML, CSS a JavaScriptu. Předvádí hlavní informační hierarchii festivalového webu a funkce, které pomáhají návštěvníkům vyhledat program, vytvořit vlastní plán a získat gastronomicko-hudební doporučení.

Festival, areál, program a provozní údaje jsou **fiktivní** a slouží pouze pro semestrální projekt.

## 2. Obsah složky `prototype/`

| Soubor / složka | Účel |
|---|---|
| `README.md` | Tento návod a postup ověření prototypu |
| `wireframe.md` | Původní textový wireframe, hierarchie a chování pro mobil a desktop |
| `mockup-homepage.png` | Ilustrační vizuální předloha homepage |
| `index.html` | Úvodní stránka festivalu |
| `program.html` | Program s vyhledáváním a filtrováním |
| `muj-program.html` | Přehled vybraných festivalových událostí |
| `doporucovac.html` | Funkce „Co si dát k poslechu?“ |
| `pripravujeme.html` | Dočasná stránka pro zatím nedokončené části |
| `css/` | Styly, responzivní rozložení |
| `js/` | Načítání dat a interaktivní funkce |
| `images/` | Obrazové a grafické podklady |

Hlavní zdroj festivalových dat je **`../data.json`** v kořeni repozitáře. Nepřepisovat jej ručně do jednotlivých HTML stránek ani nevytvářet nezávislé kopie.

## 3. Spuštění

### Vývojová a testovací verze

Pro načítání dat přes `fetch()` otevřete **kořenovou složku repozitáře** v editoru VS Code a spusťte ji přes lokální HTTP server (např. rozšíření Live Server). Poté otevřete stránku `prototype/index.html` přes adresu poskytnutou serverem.

Důležité: nespouštějte server pouze z izolované složky `prototype/`, pokud by pak nebyl dostupný kořenový `data.json`.

Samotný dvojklik na `index.html` (`file://`) **nemusí fungovat**, protože prohlížeč může zablokovat `fetch()` lokálního JSON. Pro odevzdání bez lokálního serveru se připraví a samostatně otestuje export. Dokud není ověřen, není tato varianta označena jako hotová.

### Kontrola mobilního vzhledu

V Chromu otevřete vývojářské nástroje klávesou `F12` a režim zařízení pomocí `Ctrl + Shift + M`. Ověřte alespoň šířky **320, 375, 390, 768 a 1024 px**. Sledujte zalamování textů, pořadí karet, použitelnost tlačítek, mobilní menu a případné vodorovné přetékání.

## 4. Návrh a vizuální směr

Původní návrh používá elegantní gastronomicko-hudební směr: vínová `#63263F`, krémová `#F7F1E7`, zlatý akcent `#E9B75D` a tmavý text `#1F1A17`. V mockupu byly navrženy fonty Outfit a Inter. Implementační tým může použít jiné typografické řešení, pokud zachová čitelnost a změnu zdokumentuje.

Původní mockup je **ilustrační**, nikoli závazný zdroj údajů: jména, ceny, termíny, regiony a časy se řídí `data.json` a `project-specification.md`. Skutečná implementace se proto může od nápisů v mockupu lišit.

## 5. Implementované interaktivní funkce

1. **Program a filtrování:** zobrazení událostí a jejich hledání či filtrování podle dostupných parametrů (zejména den, scéna, typ/žánr). Údaje o událostech se načítají z JSON.
2. **Můj program:** přidávání a odebírání vybraných událostí; výběr se ukládá lokálně v prohlížeči (`localStorage`) bez účtu a bez synchronizace mezi zařízeními.
3. **Doporučovač „Co si dát k poslechu?“:** výběr podle preferencí, který propojuje regionální víno a sýr, příslušnou degustaci a koncert na základě předpřipravených vazeb v JSON.

Otevření hamburger menu či běžná navigace nejsou samostatnými požadovanými interaktivními funkcemi.

## 6. Uživatelské scénáře k otestování

Následující postupy jsou **testovací scénáře**, ne potvrzení úspěšného testu. Skutečné výsledky se zapisují do `docs/testing.md`.

### Scénář A – Sestavení osobního festivalového programu

**Uživatel:** návštěvník, který chce navštívit koncert a degustaci.  
**Cíl:** vyhledat události, uložit je a později je znovu zobrazit.

**Postup:**

1. Otevřít `index.html` a přejít do sekce **Program**.
2. Vybrat den **16. 7. 2027**; případně použít další dostupné filtry.
3. Najít koncert **Jelen** (v datovém souboru pátek 12:00, hlavní scéna) a přidat jej do osobního programu.
4. Najít libovolnou degustaci zobrazenou v programu, zaznamenat její název/čas a rovněž ji uložit.
5. Otevřít **Můj program** a ověřit přítomnost obou položek a správnost jejich údajů.
6. Obnovit stránku a ověřit, že položky zůstaly uložené.
7. Jednu položku odebrat a ověřit, že zmizela z přehledu.

**Očekávaný výsledek:** správné filtrování; zobrazení obou vybraných událostí; udržení výběru po obnovení stránky; funkční odebrání. Před testem je vhodné vyčistit již uložený osobní program, aby byl výsledek jednoznačný.

### Scénář B – Doporučení vína, sýra a koncertu

**Uživatel:** návštěvník hledající kombinaci gastronomického a hudebního zážitku.  
**Cíl:** získat doporučení podle preferencí a uložit si související akce.

**Postup:**

1. Otevřít sekci **Co si dát k poslechu?**.
2. Nastavit náladu **Chci se bavit** a typ nápoje **Červené víno** (ostatní volby ponechat bez omezení, pokud je formulář nabízí).
3. Ověřit, že se zobrazí odpovídající doporučení z `data.json`.
4. U vybraného doporučení ověřit, že víno a sýr mají stejný region a že degustace časově předchází koncertu ve stejný den.
5. Pokud rozhraní nabízí uložení obou událostí, přidat je do **Mého programu** a tam ověřit jejich zobrazení.
6. Změnit filtr a ověřit, že se výsledek podle zadání změní nebo se korektně zobrazí prázdný stav.

**Očekávaný výsledek:** doporučení odpovídající filtrům a správně propojeným ID z JSON; srozumitelné zobrazení degustace, koncertu a regionálního párování; fungující navazující akce, pokud jsou v aktuální verzi dostupné.

## 7. Stav kontroly a známá omezení

- **Předběžně vizuálně zkontrolováno:** homepage na mobilních šířkách 320 px a 375 px (na základě prohlídky v Chromu).
- **Předběžně ručně ověřeno:** po přesunu do `prototype/` se načítají obrázky a doporučovač se zobrazuje a reaguje.
- **K dokončení:** formální průchod scénáři A a B, výsledky testů, případné opravy a opakované testování.
- **Nedokončené sekce:** samostatné stránky Účinkující, Degustace a Scény mohou být v této fázi označené jako „připravujeme“.
- **Vstupenky:** pouze modelové ceny a informace; prototyp nezajišťuje skutečné platby ani prodej.
- **Spuštění dvojklikem:** export bez lokálního serveru zatím není ověřený.

## 8. Související dokumentace

- `../project-specification.md` – požadavky, informační architektura a uživatelské scénáře.
- `../data.json` – zdroj festivalových dat.
- `../docs/decisions.md` – projektová rozhodnutí včetně implementace.
- `../docs/ai-usage.md` – evidence využití AI.
- `../docs/testing.md` – protokoly praktického testování (doplní se po provedení).
- `../progress-02.md` – shrnutí druhého milníku (doplní se).

**Poznámka:** Dokument se aktualizuje podle skutečného stavu prototypu. Záměr, implementace a ověřená funkčnost jsou odlišné věci; neprovedené testy se nevydávají za úspěšné.
