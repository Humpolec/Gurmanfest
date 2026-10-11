# Projektová specifikace

## 1. Identita festivalu

| Položka | Hodnota |
|---|---|
| Název festivalu | Gurmánfest |
| Ročník | 1. ročník (2027) |
| Lokalita | Mikulov, Česká republika |
| Datum konání | 16.–18. července 2027 |
| Charakter festivalu | Třídenní gastronomický a hudební festival |
| Hlavní témata | Degustace regionálních vín a sýrů, párování produktů ze stejných geografických oblastí, koncerty českých hudebních skupin |

## 2. Účel webu

### 2.1 Hlavní účel

Účelem webových stránek je poskytovat návštěvníkům přehledné informace o gastronomickém a hudebním festivalu zaměřeném na degustaci vín a sýrů pocházejících ze stejných geografických regionů.

Web bude sloužit jako hlavní informační platforma festivalu. Návštěvníci zde naleznou informace o jednotlivých degustacích, nabízených vínech a sýrech, hudebních vystoupeních, programu festivalu a jeho organizačním zajištění.

### 2.2 Hlavní cíle webu

- **Prezentace festivalu** – představit jeho zaměření, lokalitu, termín konání a jednotlivé programové části.
- **Přehled festivalového programu** – umožnit návštěvníkům zobrazovat program podle dnů, scén a typu události.
- **Představení regionálních specialit** – poskytovat informace o degustovaných vínech, sýrech a jejich geografickém původu.
- **Představení účinkujících** – zobrazovat informace o hudebních skupinách a dalších účinkujících festivalu.
- **Usnadnění orientace** – zpřístupnit informace o jednotlivých scénách, dopravě a dalších praktických záležitostech.
- **Personalizace programu** – umožnit návštěvníkům sestavit si vlastní přehled vybraných vystoupení a degustací.

### 2.3 Důležité akce uživatelů

Návštěvníci budou moci prostřednictvím webu:

1. Prohlížet kompletní program festivalu.
2. Filtrovat program podle dne, scény a typu události.
3. Vyhledávat konkrétní hudební skupiny a další účinkující.
4. Zobrazovat podrobnosti o jednotlivých účinkujících a jejich vystoupeních.
5. Procházet nabídku degustací podle geografických regionů.
6. Získávat informace o původu a charakteristice nabízených vín a sýrů.
7. Přidávat vybrané události do vlastního festivalového programu.
8. Vyhledávat praktické informace o festivalu, jeho lokalitě a dostupnosti.

## 3. Cílové skupiny

Webové stránky festivalu jsou určeny především dospělým návštěvníkům se zájmem o gastronomii, regionální speciality a českou hudební scénu. Cílové skupiny jsou rozděleny podle zájmů, potřeb a způsobu využívání webu.

Uvedená věková rozmezí jsou orientační a představují předpokládané návštěvníky festivalu.

### 3.1 Milovníci vína a gastronomie

**Předpokládaný věk:** 25–60 let

**Charakteristika:** Návštěvníci se zájmem o vinařství, sýrařství, regionální gastronomii a poznávání nových chutí.

**Potřeby a očekávání:**

- Přehled nabízených degustací a workshopů.
- Informace o vínech, sýrech a jejich geografickém původu.
- Možnost vyhledávat degustace podle regionu.
- Informace o čase a místě konání jednotlivých degustací.

**Požadované funkce webu:**

- Přehled degustací s možností filtrování.
- Detail degustace s informacemi o víně a sýru.
- Program rozdělený podle dnů a scén.

### 3.2 Fanoušci české hudby

**Předpokládaný věk:** 18–50 let

**Charakteristika:** Návštěvníci, jejichž hlavním důvodem účasti je hudební program a vystoupení českých interpretů.

**Potřeby a očekávání:**

- Přehled vystupujících hudebních skupin.
- Informace o časech a místech koncertů.
- Možnost rychle vyhledat konkrétního interpreta.
- Přehledný harmonogram hudebního programu.

**Požadované funkce webu:**

- Seznam hudebních skupin a jejich detailní profily.
- Vyhledávání účinkujících.
- Filtrování programu podle dne a scény.

### 3.3 Návštěvníci kombinující gastronomický a hudební program

**Předpokládaný věk:** 18–65 let

**Charakteristika:** Návštěvníci, kteří chtějí během festivalu absolvovat degustace, navštívit workshopy a současně se zúčastnit hudebních vystoupení.

**Potřeby a očekávání:**

- Kompletní přehled všech festivalových událostí.
- Možnost plánovat návštěvu více programových částí.
- Informace o jednotlivých scénách a jejich umístění.
- Snadná orientace v časovém harmonogramu.

**Požadované funkce webu:**

- Společný program degustací, workshopů a koncertů.
- Filtrování podle dne, scény a typu události.
- Možnost ukládat vybrané události do osobního programu.
- Praktické informace o festivalu, dopravě a lokalitě.

## 4. Informační architektura

Informační architektura webu je navržena s důrazem na přehlednost, jednoduchou navigaci a rychlý přístup k informacím o festivalu. Struktura zohledňuje potřeby všech tří cílových skupin a umožňuje návštěvníkům snadno vyhledávat degustace, hudební vystoupení a praktické informace.

Web bude obsahovat šest hlavních obsahových a funkčních sekcí dostupných z úvodní stránky.

### 4.1 Struktura webu (sitemap)

```text
Úvodní stránka
│
├── Program
│   ├── Kompletní program festivalu
│   ├── Filtrování podle dne, scény a typu události
│   └── Detail programové události
│
├── Účinkující
│   ├── Seznam účinkujících
│   └── Detail účinkujícího
│       └── Související vystoupení
│
├── Degustace a regiony
│   ├── Přehled geografických regionů
│   ├── Detail regionu
│   │   ├── Charakteristika regionu
│   │   ├── Regionální vína a sýry
│   │   └── Související degustace
│   └── Detail degustace
│
├── Scény
│   ├── Hudební scéna
│   ├── Degustační scéna
│   └── Workshopová zóna
│
├── Praktické informace
│   ├── Lokalita a doprava
│   ├── Pravidla festivalu
│   └── Kontakt
│
└── Můj program
    └── Přehled uložených událostí
```

Jednotlivé části nemusí vždy představovat samostatné HTML stránky. Některé funkce, například filtrování programu, budou součástí příslušné stránky.

### 4.2 Hlavní navigace

Hlavní navigace bude dostupná na všech hlavních stránkách webu a bude obsahovat následující položky:

1. **Úvod** – návrat na hlavní stránku festivalu.
2. **Program** – přístup ke kompletnímu harmonogramu událostí.
3. **Účinkující** – přehled hudebních skupin a dalších účinkujících.
4. **Degustace a regiony** – informace o regionálních specialitách a degustacích.
5. **Scény** – informace o jednotlivých programových prostorech.
6. **Praktické informace** – organizační a návštěvnické informace.
7. **Můj program** – přehled událostí uložených uživatelem.

Na mobilních zařízeních bude navigace přizpůsobena menší šířce obrazovky. Všechny hlavní sekce musí zůstat dostupné i při mobilním zobrazení.

### 4.3 Účel jednotlivých sekcí

#### 4.3.1 Úvodní stránka

Úvodní stránka představí festival, jeho charakter, místo a termín konání. Poskytne základní přehled programu a odkazy na nejdůležitější části webu.

**Hlavní obsah:**

- Název a vizuální identita festivalu.
- Datum a lokalita konání.
- Stručné představení gastronomického a hudebního programu.
- Odkazy na program, degustace a účinkující.

#### 4.3.2 Program

Sekce bude obsahovat kompletní harmonogram festivalových událostí včetně koncertů, řízených degustací a workshopů.

**Hlavní funkce:**

- Zobrazení programu podle jednotlivých dnů.
- Filtrování podle dne, scény a typu události.
- Zobrazení času, místa a názvu události.
- Přístup k detailu události.
- Možnost přidat událost do osobního programu.

Detail události bude obsahovat její popis, datum, čas, místo konání a související účinkující. U degustací budou uvedeny také informace o příslušném regionu.

#### 4.3.3 Účinkující

Sekce představí hudební skupiny a další osoby vystupující v programu festivalu, například someliéry nebo odborníky vedoucí workshopy.

**Hlavní funkce:**

- Zobrazení seznamu účinkujících.
- Vyhledávání podle názvu nebo jména.
- Zobrazení detailního profilu účinkujícího.
- Odkazy na související události v programu.

Profil účinkujícího bude obsahovat základní informace, jeho zaměření a přehled naplánovaných vystoupení nebo aktivit.

#### 4.3.4 Degustace a regiony

Tato sekce bude představovat hlavní gastronomické zaměření festivalu. Návštěvníci zde budou moci poznávat geografické regiony a jejich typické vinařské a sýrařské produkty.

**Hlavní funkce:**

- Zobrazení přehledu zastoupených regionů.
- Výběr regionu a zobrazení jeho detailu.
- Informace o vínech a sýrech pocházejících z daného regionu.
- Přehled souvisejících degustací.
- Přístup k detailu degustace a její programové položce.

Jednotlivé regiony budou sloužit jako společný prvek propojující nabízená vína, sýry a související degustace.

#### 4.3.5 Scény

Sekce poskytne informace o třech hlavních programových prostorech festivalu:

- **Hudební scéna** – prostor určený pro koncerty českých hudebních skupin.
- **Degustační scéna** – prostor pro řízené degustace vín a sýrů.
- **Workshopová zóna** – prostor pro přednášky, ukázky a vzdělávací aktivity.

Každá scéna bude mít vlastní přehled s popisem, umístěním a souvisejícími programovými událostmi.

#### 4.3.6 Praktické informace

Sekce bude návštěvníkům poskytovat organizační informace potřebné před návštěvou festivalu i během jeho konání.

**Hlavní obsah:**

- Místo konání festivalu.
- Možnosti dopravy.
- Základní pravidla festivalu.
- Kontaktní informace.

#### 4.3.7 Můj program

Sekce umožní návštěvníkům vytvořit vlastní přehled zajímavých festivalových událostí.

**Hlavní funkce:**

- Přidávání koncertů, degustací a workshopů do osobního programu.
- Zobrazení uložených událostí.
- Seřazení uložených událostí podle data a času.
- Odebrání událostí z osobního programu.

Uložené události budou uchovávány lokálně v prohlížeči uživatele bez nutnosti registrace.

### 4.4 Vztahy mezi jednotlivými sekcemi

Jednotlivé sekce budou vzájemně propojené, aby návštěvníci nemuseli opakovaně vyhledávat stejné informace.

| Výchozí sekce | Cílová sekce | Účel propojení |
|---|---|---|
| Úvodní stránka | Program | Rychlý přístup k harmonogramu festivalu |
| Program | Účinkující | Zobrazení detailu osoby nebo skupiny spojené s událostí |
| Účinkující | Program | Zobrazení konkrétního vystoupení a jeho času |
| Program | Scény | Zjištění informací o místě konání události |
| Scény | Program | Zobrazení událostí pořádaných na dané scéně |
| Degustace a regiony | Program | Zobrazení času a místa vybrané degustace |
| Program | Degustace a regiony | Zjištění informací o regionálních produktech |
| Program | Můj program | Uložení vybrané události |
| Můj program | Program | Návrat k detailu uložené události |
| Úvodní stránka | Praktické informace | Rychlý přístup k informacím o návštěvě festivalu |

### 4.5 Zásady navigace a orientace

Při návrhu webu budou dodržovány následující zásady:

- **Konzistentní navigace** – hlavní navigační nabídka bude mít na jednotlivých stránkách stejné uspořádání.
- **Přehledná hierarchie** – obsah bude členěn do logických sekcí a podsekcí.
- **Vzájemné propojení** – uživatel bude moci snadno přecházet mezi účinkujícími, programem, degustacemi a scénami.
- **Responzivní přístup** – struktura navigace bude použitelná na mobilních zařízeních i počítačích.
- **Zřetelná orientace** – uživatel bude mít možnost rozpoznat, v jaké sekci webu se nachází.
- **Snadný návrat** – z detailních stránek bude umožněn návrat na nadřazenou sekci.

## 5. Uživatelské scénáře

Uživatelské scénáře popisují konkrétní situace, ve kterých budou návštěvníci využívat webové stránky festivalu. Vycházejí z definovaných cílových skupin a navržené informační architektury.

Pro další fáze projektu byly vybrány tři klíčové scénáře, které reprezentují hlavní funkce webu: vyhledávání degustací, vyhledávání hudebních vystoupení a sestavení osobního festivalového programu.

### 5.1 Scénář 1 – Vyhledání degustace podle regionu

**Typ uživatele:** Návštěvník se zájmem o víno, sýry a regionální gastronomii.

**Výchozí situace:** Uživatel plánuje návštěvu festivalu a má zájem ochutnat víno a sýr pocházející ze stejného geografického regionu. Zajímá ho například degustace specialit z francouzského Burgundska.

**Cíl uživatele:** Najít degustaci podle vybraného regionu a zjistit, jaké produkty budou nabízeny, kdy degustace proběhne a na které scéně se uskuteční.

**Postup uživatele:**

1. Uživatel otevře úvodní stránku festivalu.
2. V hlavní navigaci vybere sekci **Degustace a regiony**.
3. V přehledu geografických regionů vyhledá a zvolí Burgundsko.
4. Zobrazí detail regionu s informacemi o charakteristických vínech a sýrech.
5. Vybere související degustaci a otevře její detail.
6. Zjistí datum, čas a místo jejího konání.

**Očekávaný výsledek:** Uživatel úspěšně nalezne požadovanou degustaci, získá informace o regionálních produktech a zjistí, kdy a kde se degustace uskuteční.

**Využité sekce webu:** Úvodní stránka → Degustace a regiony → Detail regionu → Detail degustace.

### 5.2 Scénář 2 – Vyhledání vystoupení hudební skupiny

**Typ uživatele:** Fanoušek české hudby.

**Výchozí situace:** Uživatel se dozvěděl o festivalu a chce zjistit, zda na něm vystupuje jeho oblíbená česká hudební skupina, například Kabát. Pokud ano, zajímá ho datum, čas a místo koncertu.

**Cíl uživatele:** Vyhledat konkrétní hudební skupinu a získat podrobnosti o jejím vystoupení.

**Postup uživatele:**

1. Uživatel otevře webové stránky festivalu.
2. V hlavní navigaci vybere sekci **Účinkující**.
3. Pomocí vyhledávání zadá název požadované skupiny.
4. Ze seznamu výsledků vybere skupinu Kabát.
5. Otevře detail skupiny a zobrazí její základní informace.
6. Přejde na související vystoupení v programu.
7. Zjistí datum, čas a scénu, na které koncert proběhne.

**Očekávaný výsledek:** Uživatel nalezne hledanou hudební skupinu a získá informace o jejím plánovaném vystoupení.

**Využité sekce webu:** Úvodní stránka → Účinkující → Detail účinkujícího → Program → Detail události.

### 5.3 Scénář 3 – Sestavení osobního festivalového programu

**Typ uživatele:** Návštěvník se zájmem o gastronomický i hudební program.

**Výchozí situace:** Uživatel plánuje strávit na festivalu celý den. Chce navštívit několik degustací, případně workshop, a současně se zúčastnit koncertů vybraných českých hudebních skupin. Potřebuje si vytvořit přehled událostí, které ho zajímají.

**Cíl uživatele:** Vybrat a uložit několik festivalových událostí do vlastního programu a zobrazit jejich časový přehled.

**Postup uživatele:**

1. Uživatel otevře sekci **Program**.
2. Pomocí filtru vybere požadovaný den festivalu.
3. Prohlédne si nabídku koncertů, degustací a workshopů.
4. Otevře detail vybrané události.
5. Přidá událost do sekce **Můj program**.
6. Stejným způsobem uloží další zajímavé události.
7. V hlavní navigaci otevře sekci **Můj program**.
8. Zobrazí přehled uložených událostí seřazených podle data a času.
9. V případě potřeby některou z událostí ze svého programu odebere.

**Očekávaný výsledek:** Uživatel vytvoří osobní přehled vybraných festivalových událostí, který mu usnadní plánování návštěvy. Uložené události zůstanou dostupné při opětovném otevření webu ve stejném prohlížeči, pokud nedojde k odstranění lokálně uložených dat.

**Využité sekce webu:** Program → Detail události → Můj program.

### 5.4 Návaznost scénářů na cílové skupiny a funkce webu

| Scénář | Cílová skupina | Hlavní funkce | Související sekce |
|---|---|---|---|
| 1. Vyhledání degustace | Milovníci vína a gastronomie | Procházení regionů a degustací | Degustace a regiony, Program |
| 2. Vyhledání hudební skupiny | Fanoušci české hudby | Vyhledávání účinkujících | Účinkující, Program |
| 3. Osobní festivalový program | Návštěvníci kombinující oba programy | Filtrování a ukládání událostí | Program, Můj program |

Tyto tři scénáře budou sloužit jako základ pro návrh prototypu, implementaci interaktivních funkcí a následné uživatelské testování.

