
# Gurmánfest – Web Design

**Semestrální projekt | Akademický rok 2026/2027**

Webové stránky fiktivního gastronomického a hudebního festivalu zaměřeného na degustaci vín a sýrů pocházejících ze stejných geografických regionů, doplněného o koncerty českých hudebních skupin.

## Spuštění odevzdávací offline verze (03. 11. 2026)

**Pro kontrolu odevzdání:** rozbalte kompletní archiv a v kořenové složce `Gurmanfest/` otevřete dvojklikem soubor **`index.html`**. Ten přesměruje na `web/index.html`. Není potřeba VS Code, Live Server, Python, Node.js ani internetové připojení.

- `web/` – samostatná offline varianta interaktivních stránek; načítá data z `web/js/data-offline.js`.
- `data.json` – původní zdrojová data; `web/data.json` je jejich kopie pro přehlednost. Při změně dat je nutno znovu vygenerovat i `web/js/data-offline.js`.
- `prototype/` – původní vývojová verze používající `fetch()`; při jejím spuštění je nadále potřeba HTTP server (například Live Server z kořene projektu).
- `docs/export-testing.md` – technické kontroly exportu a seznam manuálních testů.

**Stav ověření:** kontrola syntaxe JS, relativních odkazů a shody dat proběhla. Otevření přes `file://` v reálném prohlížeči včetně ukládání oblíbených po F5 ještě vyžaduje manuální potvrzení. Chování `localStorage` u lokálních souborů závisí na prohlížeči. Nedokončené sekce projektu zůstávají nedokončené i v exportu.

---

## 1. O projektu

| Položka | Hodnota |
|---|---|
| Typ projektu | Semestrální týmový projekt |
| Počet členů | 4 |
| Lokalita festivalu | Mikulov |
| Termín festivalu | 16.–18. 7. 2027 |
| Zaměření | Degustace vín a sýrů, česká hudba |
| Technologie | HTML, CSS, JavaScript, JSON |
| Verzování | Git + GitHub |

### Hlavní funkce webu

- Kompletní festivalový program.
- Filtrování podle dne, scény a typu události.
- Seznam účinkujících a jejich profily.
- Přehled degustací podle geografických regionů.
- Informace o vínech a sýrech.
- Přehled festivalových scén.
- Osobní program s ukládáním vybraných událostí.
- Praktické informace pro návštěvníky.

## 2. Členové týmu

| Člen | Jméno a příjmení | GitHub | Odpovědnost |
|---|---|---|---|
| Člen 1 | Daniel Bartoníček | [@Humpolec](https://github.com/Humpolec) | Koordinace projektu, konzultace nápadů a připomínek, vše co vás napadne :d, rád pomůžu |
| Člen 2 | Filip Talián | [@TalosF](https://github.com/TalosF) | Vytvoření funkčního prototypu společně s [@Polearp] |
| Člen 3 | Vladislav Zahrabailau | [@Polearp](https://github.com/Polearp) | Vytvoření funkčního prototypu společně s [@TalosF]|
| Člen 4 | Josef Kovář | [@PePa24](https://github.com/PePa24)| Důkladná spolupráce se všemi a závěrečné vytvoření dokumentace podle zadání v moodle|

Konkrétní úkoly a odpovědnosti jednotlivých členů týmu budou rozdělovány podle aktuálních milníků prostřednictvím GitHub Issues.
Za koordinaci projektu, kontrolu plnění milníků a organizaci týmové spolupráce odpovídá Daniel Bartoníček.

## 3. Harmonogram projektu

Projekt bude postupně realizován podle milníků stanovených v zadání předmětu.

| Milník | Hlavní výstup | Stav |
|---|---|---|
| Cvičení 2 | Projektová specifikace a datová základna | Hotovo |
| Cvičení 3 | Interaktivní prototyp | Rozpracováno |
| Cvičení 4 | Implementace webu | Čeká |
| Cvičení 5 | Review-ready verze | Čeká |
| Cross-review | Oponentura a vyhodnocení | Čeká |
| Finální odevzdání | Web a závěrečná dokumentace | Čeká |

Přesné termíny odevzdání se řídí oficiálním zadáním a pokyny vyučujícího.

## 4. Aktuální stav projektu

### Milník 1 – Projektová specifikace a data

- [x] Koncept festivalu.
- [x] Účel webu.
- [x] Definice cílových skupin.
- [x] Informační architektura.
- [x] Uživatelské scénáře.
- [x] Schválení názvu festivalu.
- [x] Dokončení `data.json`.
- [x] Kontrola konzistence dat.
- [x] Týmová kontrola specifikace.
- [x] Příprava prezentace.
- [x] Odevzdání prvního milníku.

### Milník 2 - Projektová Specifikace 

- [x] Návrh vzhledu a struktury.
- [x] Prototyp klíčových stránek.
- [x] Tři interaktivní funkce .
- [x] Průchod dvěma scénáři.
- [x] Testování.
- [] Dokumentace.
- [x] Týmová konzultace nápadů a připomínek .
- [] Příprava prezentace.
- [] Odevzdání druhého milníku.

## 5. Struktura projektu

Pracovní repozitář bude obsahovat povinné výstupy i pomocnou dokumentaci.

```text
Gurmánfest/
├── README.md
├── project-specification.md
├── data.json
├── documentation.md
│
├── prototype/
├── web/
├── review/
│
├── docs/
│   ├── ai-log.md
│   ├── decisions.md
│   └── testing.md
│
└── .github/
```

Soubory a složky budou postupně vytvářeny podle aktuální fáze projektu.

## 6. GitHub workflow

Projekt používá následující systém větví:

| Větev | Účel |
|---|---|
| `main` | Čistá verze povinných výstupů |
| `develop` | Hlavní pracovní větev projektu |
| `feature/*` | Samostatné větve pro jednotlivé úkoly |
| `fix/*` | Opravy chyb |

### Postup práce

1. Vybrat nebo vytvořit GitHub Issue.
2. Vytvořit vlastní větev z `develop`.
3. Zpracovat přidělený úkol.
4. Průběžně dokumentovat práci, použití AI a důležitá rozhodnutí.
5. Provést commit se smysluplným popisem změn.
6. Vytvořit Pull Request do `develop`.
7. Nechat změny zkontrolovat jiným členem týmu.
8. Po schválení sloučit změny do `develop`.

Autor Pull Requestu nesmí být jediným kontrolorem svých vlastních změn.

Za koordinaci a dohled nad plněním milníků odpovídá koordinátor projektu.

Větev `main` slouží pouze pro připravené odevzdávané výstupy. Ty se do ní přenášejí výběrově, nikoliv automatickým sloučením celé pracovní větve.

## 7. Dokumentace a používání AI

Všichni členové týmu jsou povinni průběžně zaznamenávat použití AI a důležitá projektová rozhodnutí.

Dokumentace musí vznikat současně s řešením jednotlivých úkolů, nikoliv až zpětně před odevzdáním milníku.

### Evidence AI – `docs/ai-log.md`

U každého významného použití AI zaznamenat:

- Datum a autora.
- Použitý AI nástroj.
- Účel použití.
- Přesné znění promptu.
- Shrnutí získaného výstupu.
- Co bylo převzato, upraveno nebo odmítnuto.
- Způsob ověření výsledku.

### Projektová rozhodnutí – `docs/decisions.md`

Zaznamenávat zejména:

- Změny návrhu a architektury.
- Důvody jednotlivých rozhodnutí.
- Výsledky konzultací a testování.
- Dopady změn na další části projektu.

### Testování – `docs/testing.md`

Zapisovat průběh testů, nalezené problémy, provedené opravy a výsledky ověření.

## 8. Pravidla dokončení úkolu

Úkol lze označit jako dokončený, pokud:

- [ ] Odpovídá požadavkům zadání.
- [ ] Jeho výstup je dokončený.
- [ ] Byl zkontrolován nebo otestován.
- [ ] Použití AI bylo zdokumentováno, pokud byla AI použita.
- [ ] Důležitá rozhodnutí a změny jsou zaznamenány.
- [ ] Změny jsou uložené v Gitu.
- [ ] Pull Request byl zkontrolován jiným členem týmu.

## 9. Odevzdávání projektu

Povinné výstupy se odevzdávají podle aktuálního milníku a oficiálního zadání.

**GitHub `develop`:** Kompletní pracovní projekt včetně pomocných souborů.

**GitHub `main`:** Pouze soubory určené k odevzdání.

**Moodle:** Požadované výstupy konkrétního milníku.

Pomocné soubory v pracovním repozitáři nejsou automaticky součástí finálního odevzdání.
