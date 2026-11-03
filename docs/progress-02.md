# Dokumentace 2. milníku projektu: Funkční prototyp Gurmánfest
**Soubor:** `docs/progress-02.md`  
**Projekt:** Webová prezentace festivalu Gurmánfest  
**Fáze:** Cvičení 3 – UX návrh, funkční prototyp a interaktivní funkce  
**Datum:** Listopad 2026  

---

## 1. Přehled a cíle 2. milníku

Druhý milník navazuje na schválenou projektovou specifikaci a posouvá projekt od konceptuálních návrhů a wireframů k funkčnímu prototypu klíčových částí webu.

### Hlavní cíle etapy:
* **Mobile-first přístup:** Návrh a realizace rozhraní primárně pro mobilní zařízení s plynulým přechodem do desktopového zobrazení (DEC-014, DEC-020).
* **Interaktivní funkce:** Implementace minimálně tří smysluplných interaktivních komponent řešících reálné uživatelské potřeby.
* **Separace dat a logiky:** Důsledné oddělení obsahu od prezentační vrstvy. Festivalová data (3 dny, 2 scény, 60 účinkujících, 60 programových událostí) jsou dynamicky distribuována z centrálního `data.json` (DEC-016, DEC-018).
* **Ověření klíčových scénářů:** Zajištění plné průchodnosti dvou hlavních uživatelských cest v reálném prohlížeči (TEST-001, TEST-002).
* **Architektura bez závislostí:** Vývoj v čistém HTML5, CSS3 a JavaScriptu bez externích frameworků a bez nutnosti kompilace či složitého sestavovacího procesu (DEC-017).

---

## 2. Navržené interaktivní funkce a vazba na uživatelské potřeby

V souladu se zadáním cvičení 3 web není pouhou statickou prezentací obsahu. Do prototypu byly zapracovány tři plnohodnotné interaktivní funkce:

| ID | Funkce | Implementace | Popis chování | Vazba na uživatelskou potřebu |
| :--- | :--- | :--- | :--- | :--- |
| **F-01** | **Filtrování a fulltextové vyhledávání v programu** | `prototype/js/program.js` | Umožňuje filtrování událostí podle festivalového dne a scény v kombinaci s fulltextovým vyhledáváním (např. interpretů či regionů). Vyhledávání je nezávislé na velikosti písmen (case-insensitive). Seznam se dynamicky přerendrovává přímo ze souboru `data.json`. | Návštěvník se potřebuje rychle zorientovat v rozsáhlé nabídce 60 akcí a najít konkrétního interpreta bez nutnosti procházet celý víkendový harmonogram. |
| **F-02** | **Osobní festivalový program („Můj program“)** | `prototype/js/muj-program.js`, `prototype/js/script.js` | Umožňuje ukládat a odebírat jednotlivé události pomocí ikon srdíček. Stav je perzistentně uchováván na straně klienta v `window.localStorage` (klíč `mujProgram`). Zajišťuje stálost dat po obnovení stránky (F5), ošetřuje prázdný stav a brání vzniku duplicitních položek. | Návštěvník si chce sestavit vlastní časový plán návštěvy festivalu a spolehnout se, že o svůj výběr nepřijde při přechodu mezi podstránkami nebo po zavření prohlížeče. |
| **F-03** | **Chytrý doporučovač chutí a hudby („Co si dát k poslechu?“)** | `prototype/js/doporucovac.js` | Vícekriteriální interaktivní průvodce párující degustace vín a regionální gastronomii s hudebním programem na základě nálady, žánru, preferovaného nápoje a cílové skupiny. Využívá 20 logicky definovaných vazeb v datové základně. Umožňuje reset voleb a přímé uložení doporučených položek do osobního programu. | Pomáhá nerozhodným návštěvníkům či nováčkům objevit autentické gastronomicko-hudební kombinace odpovídající jejich aktuálnímu vkusu a náladě. |

*Poznámka: Responzivní navigační prvky (např. hamburger menu v `prototype/js/script.js`) a rozbalovací sekce jsou součástí uživatelského rozhraní, ale nejsou započítávány mezi tři klíčové datové interakce.*

---

## 3. Průchod klíčovými uživatelskými scénáři

Funkční prototyp umožňuje kompletní průchod dvěma klíčovými scénáři definovanými v projektové specifikaci:

### Scénář 1: Sestavení a správa osobního festivalového programu
1. Návštěvník vstoupí na stránku **Program** a zvolí festivalový den (pátek 16. 7. 2027).
2. Do vyhledávání zadá jméno interpreta (např. „Jelen“); systém okamžitě zobrazí odpovídající událost s časem a scénou.
3. Kliknutím na ikonu srdíčka událost uloží do svého výběru (ikona změní vizuální stav).
4. Vyhledá vinařský region „Burgundsko“ a přidá k hudebnímu vystoupení odpovídající degustaci.
5. Přejde do sekce **Můj program**, kde vidí personalizovaný harmonogram, z něhož může události libovolně odebírat nebo kontrolovat jejich časy.

### Scénář 2: Objevení gastro-hudebního párování přes doporučovač
1. Návštěvník otevře nástroj **Co si dát k poslechu?**.
2. Ve formuláři zadá preference: nálada *Klid a pohoda*, žánr *pop*.
3. Rozhraní vyhodnotí relace a nabídne doporučené kombinace (např. degustace *Údolí Loiry* ve 12:00 a koncert *Ben Cristovao* v 18:00).
4. Návštěvník přímo z karty doporučení uloží vybranou degustaci i koncert do svého osobního programu.

---

## 4. Uživatelské rozhraní, UX a odchylky od wireframu

* **Barevná paleta a vizuální identita (DEC-013):** Prototyp implementuje elegantní vizuální směr komunikující vinařskou tradici a moderní festivalovou gastronomii. Hlavní barvy tvoří vínová (`#63263F`), krémové pozadí (`#F7F1E7`), doplňkový zlatý akcent (`#E9B75D`) a tmavé texty splňující požadavky na kontrast a čitelnost.
* **Responzivní uspořádání (DEC-014, DEC-020):** Výchozí rozvržení je postaveno na mobile-first principu s jednosloupcovým řazením prvků. Pro zobrazení na zařízeních pod 1200 px je implementována mobilní navigace (hamburger menu).
* **Zpracování obrazových podkladů (DEC-022):** Obrázky interpretů a gastronomie jsou provázány s ID v datovém souboru (např. `artist-01.jpg`). V kódu je ošetřen záložní stav – při nedostupnosti souboru se aktivuje neutrální CSS gradient. Všechny obrázky jsou v této fázi deklarovány jako ilustrační.
* **Zdokumentované odchylky od původního wireframu (DEC-023):**
  * Z hlavičky bylo odstraněno tlačítko „Koupit vstupenky“, jelikož prototyp v tomto milníku neobsahuje e-shopovou transakční část; cílem bylo vyhnout se matoucím prvkům.
  * Z ilustračního wireframu byl vyřazen interpret Kryštof, který neodpovídal finálnímu složení programu v `data.json`.
  * Generická sekce Masterclass byla nahrazena konkrétními modelovými degustacemi ze strukturovaných dat.
* **Rozpracované sekce (DEC-019):** Odkazy na sekce *Účinkující*, *Degustace a regiony* a *Scény* jsou dočasně přesměrovány na zástupnou stránku `pripravujeme.html` s označením „BRZY“, aby byla zachována integrita navržené informační architektury.

---

## 5. Technická architektura a struktura repozitáře

Projekt je strukturován s důrazem na modularitu a čisté oddělení prezentační, stylové a logické vrstvy:

```text
Gurmanfest/
├── data.json                   # Centrální datový zdroj (program, účinkující, doporučení)
├── project-specification.md    # Schválená specifikace projektu
├── docs/
│   ├── progress-02.md          # Tato zpráva k 2. milníku
│   ├── testing.md              # Podrobný protokol uživatelského testování
│   ├── decisions.md            # Evidovaná architektonická a návrhová rozhodnutí (DEC)
│   └── ai-usage.md             # Transparentní deník využití AI nástrojů
└── prototype/                  # Funkční prototyp (spustitelný bez instalace)
    ├── index.html              # Úvodní stránka festivalu
    ├── program.html            # Přehled programu s filtry a vyhledáváním
    ├── muj-program.html        # Uživatelský výběr událostí
    ├── doporucovac.html        # Párovací formulář „Co si dát k poslechu?“
    ├── pripravujeme.html       # Zástupná stránka pro rozpracované podsekce
    ├── css/                    # Stylové předpisy (layout, komponenty, responzivita)
    ├── js/                     # Klientská JavaScriptová logika
    │   ├── script.js           # Globální obsluha UI a mobilní navigace
    │   ├── home.js             # Skripty úvodní stránky
    │   ├── program.js          # Logika filtrů, vyhledávání a dynamického vykreslování
    │   ├── muj-program.js      # Práce s localStorage a správa osobního harmonogramu
    │   └── doporucovac.js      # Vyhodnocování preferencí a doporučovací algoritmus
    └── images/                 # Optimalizované ilustrační podklady
```

### Technické principy implementace:
* **Asynchronní načítání dat (DEC-018):** Veškerá festivalová data jsou načítána klientským voláním `fetch('../data.json')`. HTML šablony obsahují pouze sémantické kostry, což eliminuje redundanci a zjednodušuje správu obsahu.
* **Klientské úložiště (DEC-021):** Osobní program nevyžaduje backendovou databázi – ukládá se do `window.localStorage` jako serializované JSON pole identifikátorů událostí (`mujProgram`).

---

## 6. Protokol z testování a ověření funkčnosti

Ověření funkčnosti prototypu proběhlo formou strukturovaného manuálního testování ve webovém prohlížeči. Testování se zaměřilo na reakci filtrů, perzistenci dat, chování při hraničních stavech a synchronizaci komponent.

### 6.1 Souhrn výsledků testovacích scénářů

| Identifikátor | Testovaný scénář | Počet kroků | Úspěšnost | Stav | Zjištěné UX poznatky |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TEST-001** | Sestavení a správa osobního festivalového programu | 8 / 8 | 100 % | **Úspěšný (OK)** | UX-001 |
| **TEST-002** | Doporučovač „Co si dát k poslechu?“ | 6 / 6 | 100 % | **Úspěšný (OK)** | UX-002 |
| **Celkem** | **2 klíčové scénáře** | **14 / 14** | **100 %** | **Všechny kroky OK** | **2 neblokující poznatky** |

### 6.2 Průběh a zjištěné poznatky

* **TEST-001:** Prověřil filtrování dne (pátek), fulltextové vyhledání („Jelen“ – ověřena i funkčnost pro varianty `JELEN` a `jELEN`), uložení degustace Burgundsko, obnovení stránky (F5) i opětovné otevření prohlížeče. Stav v `localStorage` zůstal zachován, duplicity nevznikaly a odebírání položek fungovalo bez chyb.
* **TEST-002:** Prověřil správnost doporučovacího formuláře. Kombinace *„Klid a pohoda / pop / Nezáleží / Nezáleží“* vrátila 7 doporučení, u nichž byla detailně ověřena shoda vazeb s reálným programem (Dan Bárta ve 12:00, Ben Cristovao v 18:00). Byla ověřena reakce na nulový výsledek, kdy rozhraní srozumitelně vyzve k uvolnění filtrů.

### 6.3 Zaznamenané UX poznatky k další iteraci

| ID | Oblast | Pozorované chování | Závažnost | Doporučení pro další fázi |
| :--- | :--- | :--- | :--- | :--- |
| **UX-001** | Program | Po odchodu z Programu do Osobního programu a návratu zpět se aktivní filtry a hledaný výraz resetují do výchozího stavu. | Nízká (neblokující) | Ukládat stav filtrů do URL parametrů (query string) nebo `sessionStorage`. |
| **UX-002** | Doporučovač | Po opuštění stránky doporučovače se zadané preference resetují. Tlačítko „Zrušit výběr“ funguje správně. | Nízká (neblokující) | Uchovávat poslední zadané volby v rámci relace pro usnadnění návratu. |

---

## 7. Evidence a zhodnocení využití AI

Využití AI nástrojů probíhalo v souladu s etickými zásadami a pravidly předmětu. Každý krok byl evidován v `docs/ai-usage.md`. Všechny návrhy a výstupy generované AI prošly lidskou kontrolou a manuálním testováním.

### Přehled zapojení nástrojů:
* **ChatGPT (OpenAI) – záznamy AI-009 až AI-012, AI-017, AI-018:**
  * Analýza zadání cvičení 3 a návrh dekompozice požadavků na prototyp (`AI-009`).
  * Návrh barevné palety a typografie pro elegantní gastro identitu (`AI-010`).
  * Generování orientačního vizuálního mockupu úvodní stránky a textového wireframu (`AI-011`, `AI-012`).
  * Příprava metodiky testování, strukturování testovacích kroků a redakční sjednocení dokumentace (`AI-017`, `AI-018`).
* **Gemini (Google) – záznamy AI-013 až AI-016 (implementační tým):**
  * Konzultace asynchronního načítání přes `fetch()` pro eliminaci duplicit v HTML (`AI-014`).
  * Konzultace JavaScriptové logiky pro vícestavové filtrování a ukládání do `localStorage` (`AI-015`).
  * Doporučení pravidel pro responzivní layout pomocí CSS Grid a Flexbox (`AI-016`).
  * Generování ilustračních podkladů k interpretům a gastronomii (`AI-013`).

### Způsob verifikace výstupů AI:
Žádný vygenerovaný kód ani obsah nebyl převzat nekriticky. Veškeré ilustrační a generované texty z mockupů byly nahrazeny reálnými údaji z centrálního `data.json`. Všech 14 testovacích kroků bylo osobně vykonáno a ověřeno člověkem v prostředí webového prohlížeče.

---

## 8. Pokyny ke spuštění prototypu

Vzhledem k tomu, že prototyp načítá festivalová data asynchronně přes JavaScriptové rozhraní `fetch('../data.json')`, může přímé otevření souborů z disku protokolem `file://` selhat z důvodu bezpečnostní politiky prohlížečů (CORS).

Pro bezproblémové spuštění prototypu doporučujeme použít lokální HTTP server:

### Možnost A: Visual Studio Code (Live Server)
1. Otevřete kořenovou složku projektu ve VS Code.
2. Klikněte pravým tlačítkem na soubor `prototype/index.html`.
3. Zvolte **Open with Live Server**.

### Možnost B: Python (univerzální)
V kořenovém adresáři projektu spusťte příkaz:
```bash
python -m http.server 8000
```
Následně otevřete v prohlížeči adresu: `http://localhost:8000/prototype/`

### Možnost C: Node.js
V kořenovém adresáři spusťte:
```bash
npx serve prototype
```