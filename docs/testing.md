# Gurmánfest – testování funkčního prototypu (milník 2)

**Projekt:** Gurmánfest – Web Design 2026/2027  
**Datum evidence:** 1. 11. 2026  
**Testovaná část:** funkční web v `prototype/`  
**Typ testování:** manuální průchod dvěma uživatelskými scénáři  
**Provedení:** koordinátor projektu, průběžné zaznamenání skutečných výsledků a konzultace postupu s ChatGPT (OpenAI)  
**Podklady:** pozorování při ovládání prototypu a snímky obrazovky doporučovače

## 1. Cíl a rozsah

Ověřit, zda návštěvník dokáže:

1. vyhledat programovou událost, sestavit osobní program a následně jej upravovat;
2. získat gastronomicko-hudební doporučení podle preferencí a přenést zvolené události do osobního programu.

Testování se zaměřilo na filtrování a vyhledávání programu, práci s uloženými událostmi, zachování stavu po obnovení stránky, změny preferencí doporučovače a návaznost doporučení na program. Po přesunu implementace do `prototype/` bylo samostatně pozorováno, že se načítají obrázky a doporučovač funguje.

**Metoda:** Kroky vykonal uživatel ručně ve webovém prohlížeči. Výsledky uváděné jako „OK“ vycházejí z jeho potvrzení, nikoli z automatizovaných testů nebo nezávislého auditu zdrojového kódu. Přesná verze prohlížeče, operační systém a způsob spuštění nebyly v záznamu výslovně potvrzeny.

## 2. Souhrn výsledků

| ID | Scénář | Výsledek | Poznámka |
|---|---|---|---|
| TEST-001 | Sestavení a správa osobního festivalového programu | **8/8 kroků OK** | Zjištěn UX-001 |
| TEST-002 | Doporučovač „Co si dát k poslechu?“ | **6/6 kroků OK** | Zjištěn UX-002 |
| **Celkem** | **2 uživatelské scénáře** | **14/14 kroků OK** | **2 neblokující UX poznatky** |

V provedených krocích nebyla nahlášena funkční chyba bránící dokončení scénáře. Výsledek nelze vykládat jako úplné otestování webu, všech jeho dat ani splnění přístupnostních kritérií.

## 3. TEST-001 – Sestavení osobního festivalového programu

**Cíl:** Najít koncert a degustaci, uložit je, ověřit trvalost uložení, zabránit duplicitám a umožnit odebrání událostí.  
**Výchozí stav:** Osobní program vyprázdněný před zahájením testu.  
**Výsledek:** **Úspěšný – 8/8 kroků.**

| Krok | Akce / testovaná funkce | Skutečně pozorovaný výsledek | Stav |
|---|---|---|---|
| 1 | Filtrovat Program na pátek 16. 7. 2027 | Zobrazen správný páteční program. | OK |
| 2 | Vyhledat interpreta Jelen | Nalezena správná událost a odpovídající datum, čas a scéna. Hledání fungovalo i pro `JELEN` a `jELEN`. | OK |
| 3 | Uložit koncert Jelen pomocí srdíčka | Srdíčko změnilo stav a koncert se objevil v „Můj program“. | OK |
| 4 | Vyhledat Burgundsko a přidat degustaci | Nalezena degustace; v osobním programu byly koncert Jelen i degustace Burgundsko. Při návratu do Programu se resetoval filtr (viz UX-001). | OK |
| 5 | Obnovit stránku (F5), zavřít a znovu otevřít web | Obě uložené události zůstaly dostupné. | OK |
| 6 | Odebrat koncert Jelen | Jelen zmizel, degustace Burgundsko zůstala; stav přetrval po F5. | OK |
| 7 | Opakovaně přepnout srdíčko Jelena | Přepínání mezi uložením a odebráním fungovalo; v osobním programu byly právě dvě různé události bez duplicit i po F5. | OK |
| 8 | Odebrat obě události a zkontrolovat prázdný stav | Program byl prázdný, zobrazila se informační zpráva, po F5 zůstal prázdný a srdíčka v Programu byla neaktivní. | OK |

**Závěr TEST-001:** Návštěvník v testovaném postupu dokázal vybrat, uložit, zachovat a odebrat koncert i degustaci. Práce s osobním programem byla funkční také po obnovení stránky a opětovném otevření webu ve stejném prostředí.

## 4. TEST-002 – Doporučovač „Co si dát k poslechu?“

**Cíl:** Ověřit použitelnost formuláře, filtrování doporučení, správnost vybraných vazeb na program a synchronizaci s osobním programem.  
**Výsledek:** **Úspěšný – 6/6 kroků.**

| Krok | Akce / testovaná funkce | Skutečně pozorovaný výsledek | Stav |
|---|---|---|---|
| 1 | Otevřít doporučovač a ovládat jeho nabídky | Všechny nabídky se zobrazily a bylo možné s nimi pracovat. | OK |
| 2 | Zadat preference a spustit doporučení | Doporučení se zobrazila. Následný snímek obrazovky doložil kombinaci „Klid a pohoda / pop / Nezáleží / Nezáleží“ se **7 tipy**. | OK |
| 3 | Porovnat vybrané doporučené události s Programem | Potvrzena shoda čtyř událostí: degustace Údolí Loiry ve 12:00, koncert Ben Cristovao v 18:00, degustace Toskánsko ve 14:00 a koncert Mirai v 17:00 (pátek 16. 7. 2027). | OK |
| 4 | Resetovat formulář a změnit preference | Reset fungoval; při dvou dalších kombinacích se zobrazil **1 tip** a **0 tipů**. Prázdný výsledek byl srozumitelně oznámen. Po návratu na stránku se volby resetují (viz UX-002). | OK |
| 5 | Z doporučovače uložit degustaci Údolí Loiry 12:00 a koncert Bena Cristovaa 18:00 | Do „Můj program“ se uložily správné dvě události a přetrvaly po F5. Nezaměnily se s druhou degustací Údolí Loiry v 21:00. | OK |
| 6 | Zkontrolovat uložený stav v doporučovači a odebrat koncert | Srdíčka odpovídala uloženému stavu. Ben Cristovao byl odebrán, degustace Údolí Loiry zůstala a změna přetrvala po F5. | OK |

### 4.1 Konkrétní ověřené doporučené vazby

**Testovaná volba:** nálada „Klid a pohoda“, žánr „pop“, nápoj „Nezáleží“, cílová skupina „Nezáleží“. Rozhraní vrátilo **7 tipů**; detailně byly vůči Programu ověřeny následující dvě kombinace:

| Doporučení | Regionální párování | Degustace | Následný koncert | Ověření |
|---|---|---|---|---|
| Jazz Loiry a večerní R&B | Údolí Loiry: Sancerre blanc + Crottin de Chavignol | Údolí Loiry, pá 16. 7., **12:00–12:45**, Dan Bárta | Ben Cristovao, pá 16. 7., **18:00–18:45** | Události a časy odpovídají Programu. |
| Toskánsko s akustikou a popem | Toskánsko: Chianti Classico + Pecorino Toscano | Toskánsko, pá 16. 7., **14:00–14:45**, Iva Bittová | Mirai, pá 16. 7., **17:00–17:45** | Události a časy odpovídají Programu. |

**Doplňující test kombinací:**

- „Chci se bavit / folk / Bílé víno / Dospělí návštěvníci“ → **1 tip**, „Moravský pátek a pop“ (Jižní Morava, degustace 15:00; Mirai, koncert 17:00).
- „Chci se bavit / folk / Bílé víno / Starší publikum“ → **0 tipů**, zobrazeno sdělení: „Nic jsme nenašli. Zkus vybrat méně věcí, třeba jen náladu.“

Tyto dvě kombinace dokládají reakci rozhraní na změnu jedné preference. Neprokazují vyčerpávající správnost všech kombinací v `data.json`.

### 4.2 Poznámka k opakovanému názvu regionu

Při vyhledávání **Údolí Loiry** v Programu byly nalezeny **dvě různé degustace**, jedna se začátkem **12:00**, druhá **21:00**. Samotná shoda názvu regionu není důkazem duplicitního datového záznamu. Test kroku 5 potvrdil, že doporučovač ukládá správnou konkrétní událost ve 12:00; nedošlo k záměně za večerní položku.

**Závěr TEST-002:** V provedených krocích doporučovač reagoval na preference, zobrazoval relevantní tipy nebo informační hlášení o nulovém výsledku a umožnil správné uložení i odebrání konkrétních programových položek.

## 5. Zjištěné nedostatky a UX poznatky

| ID | Oblast | Pozorování | Závažnost | Doporučení |
|---|---|---|---|---|
| UX-001 | Program | Po opuštění stránky „Program“ a návratu z „Můj program“ se zvolené filtry a hledání vrátí do výchozího stavu. | Nízká; neblokuje scénář | Zvážit uchovávání filtrů při navigaci, např. v parametrech URL nebo `sessionStorage`; ověřit očekávané chování. |
| UX-002 | Doporučovač | Po opuštění stránky doporučovače a návratu se nastavené preference resetují. Tlačítko „Zrušit výběr“ přitom funguje správně. | Nízká; neblokuje scénář | Zvážit uchovávání preferencí a posledního výsledku při návratu; odlišit záměrný reset tlačítkem od nové návštěvy stránky. |

**Status:** Oba poznatky jsou doporučení pro další iteraci, nikoli chyby znemožňující dokončení testovaných scénářů.

## 6. Omezení testování a další kontrola

- Testování provedl jeden člen projektu; neproběhl samostatný test s externími uživateli.
- Nebyly doloženy automatizované testy ani úplná kontrola všech doporučení, všech 60 programových položek nebo všech kombinací filtrů.
- Nebyla v rámci těchto scénářů provedena kompletní kontrola WCAG 2.0 AA, ovládání klávesnicí, kontrastu, sémantiky HTML, SEO ani všech šířek obrazovek.
- Není tímto protokolem potvrzeno, že web funguje při přímém otevření přes `file://` bez HTTP serveru. Pro odevzdání je vhodné ověřit konkrétní způsob spuštění uvedený v `prototype/README.md`.
- Způsob uchování osobního programu byl ověřen z hlediska chování rozhraní; přímá kontrola obsahu `localStorage` ve vývojářských nástrojích nebyla součástí protokolu.

## 7. Celkové vyhodnocení

Dva plánované průchody funkčním prototypem Gurmánfestu byly **úspěšně dokončeny (14/14 kroků)**. Testy podložily základní použitelnost programu, osobního programu a doporučovače a jejich vzájemné propojení. Dva zjištěné UX poznatky nebránily dokončení scénářů.

**Doporučený další postup:** doplnit tento protokol do repozitáře jako `docs/testing.md`, použít stručné výsledky v `progress-02.md` a před odevzdáním samostatně ověřit požadovaný způsob spuštění prototypu a základní responzivitu/přístupnost.

## 8. Evidence využití AI při testování

ChatGPT (OpenAI) byl použit k návrhu struktury dvou scénářů, postupnému předkládání testovacích kroků, formulaci očekávaných výsledků a redakčnímu sestavení tohoto protokolu. **Vlastní interakce s webem a potvrzení skutečných výsledků provedl uživatel.** AI sama web nespouštěla a výsledky funkčních kroků nezávisle neověřovala.

Pro úplnost evidence lze tento krok doplnit také jako nový záznam do `docs/ai-usage.md`.

## 9. Testování 3. milníku – Implementace `web/` a UX úpravy (průběžný protokol)

### 9.1 Prostředí a metoda ověření
**Testovaná verze:** Složka `web/` spuštěná přes lokální HTTP server (VS Code Live Server, `http://127.0.0.1:5500/web/index.html`).
**Metoda:** Kombinace diagnostického auditního skriptu spuštěného v konzoli DevTools (`F12`), emulace mobilních šířek (`Ctrl + Shift + M`) a manuálního průchodu scénáři (myš i klávesnice).
**Tester:** Josef.

### 9.2 Přehled dosud provedených testovacích případů (17. 11. 2026)

| ID | Oblast / Úkol | Ověřované chování | Výsledek |
| :--- | :--- | :--- | :--- |
| **TEST-003** | Navigace a kotva `#info` (`UX-003`) | Průchod `index.html` $\rightarrow$ `program.html` $\rightarrow$ `index.html#info`; zvýraznění položky *Praktické info* a odebrání aktivního stavu z *Úvodu*. | **OK** |
| **TEST-004** | Automatický doporučovač (`UX-004`) | Odstranění potvrzovacího tlačítka, živý přepočet doporučení při změně filtrů, funkční reset a zobrazení hlášky při 0 tipech. | **OK** |
| **TEST-005** | Srdíčka oblíbených a počítadlo v menu (`UX-005`, `UX-006`) | Přidávání a odebírání událostí na `program.html` a `doporucovac.html`, zřetelné odlišení stavu srdíček, aktualizace počítadla u *Můj program* a jeho skrytí při `0`. | **OK** |
| **TEST-006** | Konzolový audit, perzistence (`F5`), responzivita (`320–931 px`) a klávesnice | Načtení 60 položek z `data.json`, popisky tlačítek, odolnost při nevalidním JSONu v `localStorage`, zachování dat po `F5`, šířky `320 px` / `375 px` / `931 px` bez přetékání a ovládání klávesnicí (`Tab`, `Enter`/`Mezerník`) s viditelným focusem. | **OK** |

### 9.3 Výstup diagnostického auditu z konzole prohlížeče (`F12` na `index.html`)
```text
=== AUDIT ===
1. Vodorovné přetékání (931px): OK
2. Tlačítka bez popisku: OK (0)
   Srdíčka s aria-pressed: nalezeno 4
3. Načtení data.json: OK (položek: 60)
4. Odolnost při poškozeném localStorage: OK
```

### 9.4 Průběžný stav ověření 3. milníku
Dosud otestované UX úpravy (`UX-003` až `UX-006`), responzivní zobrazení, ovládání klávesnicí i regrese funkcí z předchozího milníku prošly ověřením bez chyb. 