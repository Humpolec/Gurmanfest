# Gurmánfest – web (3. milník a další vývoj)

**Stav:** Pracovní funkční implementace; UX úpravy a technický audit jsou plánované, nikoli již dokončené.

## 1. Účel složky

`web/` je od 3. milníku **jediné místo pro aktivní úpravy webu**. Vzniklo jako kopie dokončeného prototypu 2. milníku. Původní `../prototype/` ponecháváme jako historickou, dále neupravovanou verzi.

## 2. Spuštění ve VS Code

1. Otevřít **kořen projektu** ve VS Code.
2. Spustit **Live Server** nebo jiný lokální HTTP server.
3. Otevřít `/web/index.html` na adrese serveru.
4. V konzoli (F12) zkontrolovat případné chyby načítání dat a skriptů.

`file://` není podporovaný způsob testování vývojové verze. Offline balíček se připravuje zvlášť, až z ověřeného zdrojového webu.

## 3. Orientace v souborech

| Soubor / adresář | Popis |
|---|---|
| `index.html` | úvodní stránka, sekce `#info` |
| `program.html` | festivalový program a filtrování |
| `muj-program.html` | osobní program návštěvníka |
| `doporucovac.html` | doporučování vína, sýra a hudebního programu |
| `pripravujeme.html` | zástupná stránka nedokončených sekcí |
| `css/style.css` | společné styly a responzivita |
| `js/script.js` | sdílená navigace, práce s daty a oblíbenými (ověřit při zásahu do kódu) |
| `js/home.js`, `program.js`, `muj-program.js`, `doporucovac.js` | skripty příslušných stránek |
| `images/` | obrázky a ikony |
| `data.json` | pracovní datová kopie při zachování současného `fetch('data.json')` |

Zdrojovou autoritou pro festivalová data je `../data.json`. Existující kód prototypu využíval i lokální `prototype/data.json`, proto při kopírování do `web/` ověřit přítomnost `web/data.json` a jeho **shodu s kořenovým souborem**. Při každé změně dat obě místa synchronizovat; případné odstranění duplicity vyžaduje cílenou změnu cest a opětovné otestování.

## 4. UX úpravy pro třetí milník

- [ ] **UX-003 – Aktivní navigace / kotva:** po otevření `index.html#info` z jakékoli stránky je zvýrazněno „Praktické info“; ostatní nesprávná aktivní označení se odeberou. Ověřit také načtení přímo přes URL a navigaci zpět/vpřed.
- [ ] **UX-004 – Automatický doporučovač:** odstranit tlačítko pro ruční spuštění doporučení; výsledky se aktualizují při změně filtrů. Ponechat ovládání pro reset/odstranění filtrů a správné prázdné stavy.
- [ ] **UX-005 – Vizuální oblíbené:** srdíčko u každé události zřetelně odlišuje uložené a neuložené. Aktualizovat přístupný název tlačítka a `aria-pressed`; nezáviset jen na barvě.
- [ ] **UX-006 – Počítadlo v menu:** u odkazu „Můj program“ se při 1+ uložených položkách zobrazí srdce s přesným počtem, při nule se indikátor skryje. Změna se propsuje po přidání, odebrání i načtení jiné stránky / F5.

## 5. Technické zásady

- Zachovat jednu konzistentní práci se seznamem uložených událostí v `localStorage` napříč stránkami.
- Zpracovat chybějící / poškozená uložená data bezpečně; nezobrazovat chybné hodnoty počítadla.
- Kliknutí na srdíčko musí fungovat myší i klávesnicí; fokus musí být vidět.
- Nevložit duplicitní ID události opakovaným klikáním. Počítadlo ukazuje počet **unikátních uložených událostí**, nikoli počet kliknutí.
- Při testování měnit data jen řízeně a nepovažovat fiktivní údaje o festivalu za skutečné.
- Neprovádět změny uvnitř `../prototype/`.

## 6. Ověření funkčnosti před dokončením

1. **Navigace:** `index.html → program.html → index.html#info`; ověřit aktivní položku na každé stránce i přímý odkaz.
2. **Doporučovač:** měnit více filtrů za sebou, resetovat, ověřit výsledky bez dalšího kliknutí.
3. **Oblíbené:** přidat degustaci a koncert na různých stránkách, ověřit oba stavy srdíček i počítadlo `2`.
4. **Perzistence:** F5, přechod na `muj-program.html`, odebrání jedné a pak poslední události; indikátor při nule zmizí.
5. **Responzivita:** šířky alespoň 320, 375, 390, 768 a 1024 px; zkontrolovat mobilní navigaci a přetékání.
6. **Přístupnost:** klávesnice, focus, popisky tlačítek, kontrast, sémantika a základní orientace čtečky.
7. **Regrese:** znovu projít scénáře TEST-001 a TEST-002 z `../docs/testing.md`.

Výsledky a případné chyby zapisovat do `../docs/testing.md`. U změn využívajících AI doplňovat `../docs/ai-usage.md`, u důležitých rozhodnutí `../docs/decisions.md`.

## 7. Třetí milník – rozdělení práce

**Cíl:** dokončit první funkční implementaci v `web/` a připravit podklady pro cvičení 4. Níže uvedené rozdělení je pracovní dohoda pro třetí milník. Stav úkolů se aktualizuje průběžně; žádný nedokončený úkol se neoznačuje za hotový bez funkčního ověření.

| Část práce | Odpovědný | Stav |
|---|---|---|
| Udržovat oddělený `prototype/` a vývojový `web/`, koordinovat integraci a odevzdání | Daniel | Probíhá |
| Opravit zvýraznění navigace a kotvy `#info` (UX-003) | Filip + Vladislav | K realizaci |
| Odebrat tlačítko spuštění doporučení, zachovat automatické přepočty a reset (UX-004) | Filip + Vladislav | K realizaci |
| Zvýraznit aktivní/neaktivní srdíčka událostí (UX-005) | Filip + Vladislav | K realizaci |
| Doplnit srdíčko s počtem událostí u „Můj program“ (UX-006) | Filip + Vladislav | K realizaci |
| Doladit responzivitu, sémantiku HTML, CSS a ovládání klávesnicí | Filip + Vladislav | K realizaci |
| Zapsat výsledky testů a případné nalezené chyby do `docs/testing.md` | Josef | K realizaci |
| Připravit `docs/progress-03.md`, aktualizovat evidenci AI a rozhodnutí | Josef | K realizaci |
| Sjednotit změny, zajistit podklady pro ukázku mobilu a desktopu a odevzdání | Daniel | K realizaci |

## 8. Postup prací

1. **Příprava:** Daniel ověří spuštění `web/` v Live Serveru a zachování `prototype/`.
2. **Vývoj UX:** Filip a Vladislav společně implementují UX-003 až UX-006 a související úpravy responzivity a přístupnosti. Změny ve společných JS/CSS souborech koordinují mezi sebou.
3. **Testování a dokumentace:** Josef zaznamená výsledky ověření, připraví `progress-03.md` a doplní příslušné záznamy. Technické podklady k implementaci dodají autoři změn.
4. **Integrace a předvedení:** Daniel zajistí sjednocení změn do `develop` a připraví demonstraci navigace, interaktivity a mobilního i desktopového zobrazení.

## 9. Povinný výstup `progress-03.md`

- Co je skutečně implementováno (stránky, funkce, data).
- **Aktuální best practices a trendy UX/designu a jak byly skutečně implementovány** (u každého bodu konkrétní součást webu, přínos a způsob ověření). Nezaměňovat plánovanou funkci za implementovanou.
- Co se změnilo oproti prototypu 2. milníku a proč.
- Jaké testy proběhly a s jakými výsledky.
- Jak byla využita AI, co bylo převzato/upraveno a **jak byly ověřeny její výstupy**.

Dokument průběžně vzniká jako `../docs/progress-03.md`; pro odevzdání na cvičení 4 se předá spolu se složkou `web/` a případným souborem prezentace podle pokynů vyučujícího.

## 10. Minimální požadavky ze zadání cvičení 4

Před odevzdáním musí být v `web/` **skutečně funkční** úvodní stránka, alespoň jedna obsahově odlišná stránka, hlavní navigace, responzivní mobile-first zobrazení, smysluplná interaktivita, sémantické HTML a odpovídající CSS/JavaScript. Na cvičení musí jít předvést mobil i desktop, navigaci a interaktivní funkce.

**Kritéria předání podle odpovědnosti:**

- **Filip + Vladislav:** dodat funkční UX-003 až UX-006 (viz oddíl 4), projít kontrolní scénáře z oddílu 6, upravit chyby, doložit provedené úpravy a testy Josefovi. Zkontrolovat nadpisovou hierarchii, významové HTML prvky, ovládání klávesnicí, focus, kontrast, popisky ovládacích prvků a zobrazení na mobilu i desktopu.
- **Josef:** doplnit ke každému testu výsledek do `../docs/testing.md` včetně problémů a oprav; připravit všech pět povinných částí `../docs/progress-03.md`, konkrétně zdokumentovat implementované UX/designové postupy a ověření AI; nepřisuzovat funkcím stav „hotovo“ bez podkladů.
- **Daniel:** sladit práci týmu, zajistit integraci na `develop`, ověřit přítomnost požadovaných souborů a připravit předvedení v rozsahu zadání. Zkontrolovat, že `prototype/` zůstal beze změn.

**Předání úkolu:** k Pull Requestu uvést stručně *co se změnilo, jak to spustit, co bylo otestováno a zda zbývá chyba*. Významné změny zapsat do `../docs/decisions.md`, případné použití AI do `../docs/ai-usage.md`. Testování patří do povinností všech autorů změn; Josef sjednocuje záznamy.

## 11. Pravidla spolupráce

Vývoj probíhá na větvích `feature/*` nebo `fix/*` založených z `develop`. Hotové změny se předávají přes Pull Request s krátkým popisem. `prototype/` zůstává nedotčený; offline export vznikne samostatně až z ověřené verze `web/`. Stav projektu sledujeme také v [hlavním README](../README.md).
