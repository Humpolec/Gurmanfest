# Dokumentace 3. milníku projektu: První funkční implementace webu Gurmánfest (`progress-03.md`)

**Soubor:** `docs/progress-03.md`  
**Projekt:** Webová prezentace festivalu Gurmánfest  
**Fáze:** Cvičení 4 – První funkční implementace, UX úpravy a technická kontrola  
**Datum:** Listopad 2026  

---

## 1. Co je skutečně implementováno

Od třetího milníku probíhá veškerý aktivní vývoj výhradně ve složce `web/`, která vznikla jako kopie funkčního prototypu z druhého milníku (`prototype/`). Původní složka `prototype/` zůstává uzamčena beze změn jako historická referenční verze (`DEC-024`).

### 1.1 Implementované stránky a datová vrstva (`web/`)
**`index.html`:** Úvodní stránka festivalu včetně kotvové sekce `#info` (*Praktické info*), přehledu hlavních bodů akce a dynamicky vykreslovaných ukázek programu (`js/home.js`).
**`program.html`:** Kompletní přehled festivalového programu (60 událostí napříč 3 dny a 2 scénami) s živým filtrováním podle festivalového dne, fulltextovým vyhledáváním a ukládáním akcí do oblíbených (`js/program.js`).
**`muj-program.html`:** Osobní harmonogram návštěvníka načítaný z klientského úložiště (`localStorage`), umožňující kontrolu uloženého výběru a odebírání položek (`js/muj-program.js`).
**`doporucovac.html`:** Interaktivní gastronomicko-hudební průvodce *„Co si dát k poslechu?“*, který páruje degustace vín a regionální kuchyně s hudebním programem podle preferencí návštěvníka (`js/doporucovac.js`).
**`pripravujeme.html`:** Zástupná stránka pro podsekce plánované do další fáze vývoje (*Účinkující*, *Degustace a regiony*, *Scény*), zachovávající integritu navigace.
**`data.json`:** Centrální datový zdroj synchronizovaný s kořenovým `data.json` (60 účinkujících, 60 programových položek, 20 logických vazeb pro doporučovač).

### 1.2 Implementované interaktivní funkce a UX úpravy (`UX-003` až `UX-006`)
1. **Kontextová navigace s podporou URL kotev (`UX-003`, `js/script.js`):** Při přechodu na `index.html#info` z libovolné podstránky (i při přímém zadání URL či použití tlačítek *Zpět/Vpřed* v prohlížeči) se v hlavní navigaci zvýrazní výhradně položka *Praktické info* a odebere se aktivní označení z položky *Úvod*.
2. **Automatický gastro-hudební doporučovač (`UX-004`, `doporucovac.html`, `js/doporucovac.js`):** Ze stránky bylo odstraněno ruční spouštěcí tlačítko. Doporučené kombinace se přepočítávají automaticky okamžitě po změně kteréhokoli filtru (nálada, žánr, nápoj, cílová skupina). Zachováno zůstalo ovládání pro reset filtrů i srozumitelné hlášení při nulovém počtu výsledků.
3. **Vizuálně i přístupnostně odlišená oblíbená srdíčka (`UX-005`, `js/program.js`, `js/doporucovac.js`, `js/home.js`, `css/style.css`):** Tlačítko pro uložení události zřetelně odlišuje uložený a neuložený stav ikonou (`heart.svg` vs. `heart-full.svg`), nikoli pouze barvou. Zároveň dynamicky aktualizuje přístupný název tlačítka (`aria-label`) a stavový atribut `aria-pressed`.
4. **Živé počítadlo uložených událostí v navigaci (`UX-006`, `js/script.js`, všechny HTML hlavičky):** U odkazu *Můj program* v hlavní navigaci se při 1 a více uložených událostech zobrazuje ikona bílého srdíčka (`images/icons/heart-white.svg`) s přesným počtem unikátních uložených akcí. Při nulovém počtu se indikátor skryje. Změna se okamžitě propisuje po přidání, odebrání i po obnovení stránky (`F5`).

---

## 2. Aktuální best practices a trendy UX/designu a jejich implementace

V rámci třetího milníku byly do implementace ve složce `web/` zapracovány následující ověřené postupy moderního webdesignu a UX:

| Princip / Best Practice | Konkrétní součást webu | Přínos pro uživatele | Způsob ověření |
| :--- | :--- | :--- | :--- |
| **1. Mobile-first responzivní layout** | `css/style.css`, responzivní navigace ve všech HTML souborech | Plnohodnotná čitelnost a ovládání na malých displejích od šířky `320 px` i na desktopu bez vodorovného posouvání. | Emulace šířek `320`, `375`, `390`, `768` a `1024 px` i desktopu `931 px` v DevTools; kontrola `scrollWidth <= innerWidth`. |
| **2. Okamžitá zpětná vazba (Reactive Live Filtering)** | `doporucovac.html`, `js/doporucovac.js` (`UX-004`) | Odstranění zbytečného potvrzovacího kroku zkracuje cestu k výsledku; uživatel vidí dopad každé volby okamžitě při změně filtru. | Manuální test postupné změny filtrů, ověření živého překreslení karet, funkce resetu i zobrazení hlášky při 0 tipech. |
| **3. Přístupnost (WAI-ARIA, ovládání klávesnicí, ne-pouze-barevné rozlišení)** | Tlačítka oblíbených (`UX-005`), sémantické HTML5 prvky, styly `:focus` v `css/style.css` | Web lze ovládat bez myši (`Tab` + `Enter`/`Mezerník`), čtečky obrazovky rozpoznají stav tlačítka (`aria-pressed`) a uložený stav je odlišen tvarem/výplní ikony, nejen barvou. | Konzolový audit DOM (kontrola přístupných názvů u všech `<button>` a atributů `aria-pressed`) a průchod stránkou pouze klávesnicí. |
| **4. Kontextová navigace s podporou kotev (Hash-aware Navigation)** | Sdílená navigační logika v `js/script.js`, odkaz `index.html#info` (`UX-003`) | Návštěvník má vždy přesnou vizuální orientaci, ve které sekci webu se nachází, i při přechodu na kotvu úvodní stránky z podstránek. | Průchod `index.html` $\rightarrow$ `program.html` $\rightarrow$ `index.html#info`, přímé otevření URL s `#info` a test tlačítek *Zpět/Vpřed*. |
| **5. Neinvazivní stavový indikátor (Badge / Counter)** | Odkaz *Můj program* v hlavičce (`js/script.js`, `images/icons/heart-white.svg`, `UX-006`) | Návštěvník má okamžitý přehled o počtu uložených akcí z jakékoliv stránky webu; při prázdném výběru indikátor neruší rozhraní. | Přidávání a odebírání událostí na různých stránkách, ověření synchronizace po `F5` a skrytí indikátoru při nule. |
| **6. Defenzivní zpracování klientských dat** | `js/script.js`, `js/muj-program.js` (práce s `localStorage` pod klíčem `mujProgram`) | Aplikace nespadne ani při poškozených datech v úložišti prohlížeče a zabraňuje vzniku duplicit při opakovaném klikání na stejnou událost. | Simulace nevalidního JSONu (`{poškozený_json`) v klíči `mujProgram` přes konzoli prohlížeče a opakované klikání na srdíčko. |
| **7. Oddělení prezentační a datové vrstvy** | Všechny HTML šablony a `web/data.json` načítaný přes `fetch()` | Čistá sémantická struktura HTML5 a centrální správa 60 festivalových položek bez duplikování obsahu v kódu stránek. | Kontrola asynchronního načtení `data.json` v záložce Console/Network prohlížeče bez chyb `404` či parsovacích výjimek. |

---

## 3. Co se změnilo oproti prototypu 2. milníku (`prototype/`) a proč

| Oblast / Soubor | Stav ve 2. milníku (`prototype/`) | Změna ve 3. milníku (`web/`) | Důvod změny |
| :--- | :--- | :--- | :--- |
| **Adresářová struktura** | Vývoj probíhal přímo ve složce `prototype/`. | Vytvořena samostatná složka `web/` pro aktivní vývoj; `prototype/` ponechán beze změn (`DEC-024`). | Zachování srovnatelného stavu z cvičení 3 a čisté oddělení vývojové verze pro cvičení 4. |
| **Navigace a kotva `#info` (`js/script.js`)** | Při přechodu na `index.html#info` zůstávala aktivní položka *Úvod*. | Rozšířena logika zvýraznění aktivní položky o vyhodnocení `window.location.hash` (`UX-003`). | Odstranění matoucí zpětné vazby v hlavní navigaci při přechodu na *Praktické info*. |
| **Doporučovač (`doporucovac.html`, `js/doporucovac.js`)** | Výsledky se zobrazovaly až po kliknutí na potvrzovací tlačítko. | Tlačítko odstraněno; doporučení se aktualizují automaticky při změně filtrů (`UX-004`). | Rychlejší a přirozenější interakce při výběru gastro-hudebních kombinací. |
| **Srdíčka oblíbených (`js/program.js`, `js/doporucovac.js`, `js/home.js`, `css/style.css`)** | Základní přepínání stavu bez úplné ARIA sémantiky. | Doplněno výraznější odlišení stavů ikonou, přístupný popisek a atribut `aria-pressed` (`UX-005`). | Splnění požadavků přístupnosti (WCAG) a jednoznačná čitelnost stavu pro uživatele i čtečky. |
| **Počítadlo v menu (`js/script.js`, `heart-white.svg`, HTML hlavičky)** | Počet uložených položek nebyl v navigaci vidět. | Doplněno srdíčko s počtem unikátních uložených položek u odkazu *Můj program*, skryté při `0` (`UX-006`). | Okamžitá kontrola stavu osobního výběru bez nutnosti otevírat stránku *Můj program*. |

---

## 4. Jaké testy a kontroly proběhly a s jakými výsledky

Testování proběhlo v prostředí **VS Code Live Server** (`http://127.0.0.1:5500/web/index.html`) kombinací automatizovaného diagnostického skriptu v konzoli DevTools (`F12`), emulace mobilních šířek a manuálního ověření všech scénářů z oddílu 6 v `web/README.md`.

### Souhrn výsledků ověření (`docs/testing.md`)
**`TEST-003` – Navigace a kotva `#info` (`UX-003`):** **OK** – Ověřen průchod `index.html` $\rightarrow$ `program.html` $\rightarrow$ `index.html#info`, přímé načtení URL s kotvou i pohyb *Zpět/Vpřed*. Zvýrazní se pouze *Praktické info*.
**`TEST-004` – Automatický doporučovač (`UX-004`):** **OK** – Potvrzeno odstranění spouštěcího tlačítka, okamžité přepočítávání tipů při změně filtrů, funkční reset i zobrazení prázdného stavu.
**`TEST-005` – Oblíbené položky a počítadlo v menu (`UX-005`, `UX-006`):** **OK** – Ověřeno přidání koncertu i degustace na různých stránkách, odlišení stavů srdíček (včetně `aria-pressed`), aktualizace počítadla u *Můj program* i jeho skrytí při `0`.
**`TEST-006` – Perzistence a odolnost `localStorage`:** **OK** – Ověřeno zachování výběru i počítadla po `F5`, ochrana proti duplicitám při opakovaném kliknutí a stabilita skriptů při simulaci nevalidního JSONu v `localStorage`.
**`TEST-007` – Responzivita (`320–1024 px`), přístupnost a integrita repozitáře:** **OK** – Bez vodorovného přetékání na šířkách `320`, `375`, `390`, `768`, `931` a `1024 px`, funkční mobilní menu, průchod klávesnicí (`Tab`, `Enter`/`Mezerník`) s viditelným focusem, `0` tlačítek bez popisku a bezchybné načtení `data.json` (60 položek).
**`TEST-008` – Regrese scénářů 2. milníku (`TEST-001`, `TEST-002`):** **OK** – Opakovaný průchod filtrováním programu, vyhledáváním interpreta a ukládáním položek do osobního programu potvrdil zachování všech dosavadních funkcí.

---

## 5. Využití AI a ověření jejích výstupů

Využití nástrojů umělé inteligence je průběžně evidováno v `docs/ai-usage.md` (`AI-019`, `AI-020`):

**Použité nástroje a účel:** Nástroj ChatGPT / Gemini byl využit při testování a dokumentaci třetího milníku (Josef) k návrhu strukturovaného testovacího postupu pro úkoly `UX-003` až `UX-006`, vygenerování diagnostického JavaScriptového skriptu pro kontrolu DOM a `localStorage` v konzoli prohlížeče a k sestavení dokumentů `docs/progress-03.md`, `docs/testing.md` a `docs/decisions.md`.
**Co bylo převzato a upraveno:** Převzat byl konzolový auditní skript (kontrola šířky `scrollWidth`, přístupných názvů tlačítek `<button>`, dostupnosti `data.json` a odolnosti `localStorage`) a tabulková struktura dokumentace. Texty byly upraveny podle skutečného stavu ověřeného v prohlížeči a porovnány se skutečnou strukturou souborů ve složce `web/` bez domýšlení neimplementovaných funkcí.
**Způsob ověření AI výstupů:** Diagnostický skript byl spuštěn přímo v konzoli prohlížeče (`F12`) nad aplikací běžící přes VS Code Live Server a všechny uživatelské i přístupnostní kroky (navigace, doporučovač, srdíčka, počítadlo, klávesnice, responzivita) byly fyzicky otestovány člověkem v prohlížeči.