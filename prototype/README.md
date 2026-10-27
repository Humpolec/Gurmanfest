# Gurmánfest – prototyp (milník 2)

## Stav

Rozpracovaný návrh pro cvičení 3. Obsahuje obrazový mockup a popis struktury homepage pro mobil a desktop. **Nejde o funkční HTML prototyp ani o ověřený průchod scénáři.**

## Obsah

- `mockup-homepage.png` – ilustrativní vizuální mockup mobilní a desktopové homepage.
- `wireframe.md` – textový wireframe, obsahová hierarchie a chování při změně velikosti obrazovky.

## Vizuální směr

Elegantní gastronomicko-hudební festival: vínová `#63263F`, krémová `#F7F1E7`, zlatý akcent `#E9B75D`, tmavý text `#1F1A17`. Návrhové fonty Outfit (nadpisy) a Inter (text); při implementaci může tým upravit podle čitelnosti a výsledku testů.

## Omezení a další postup

- Obsah mockupu je **ilustrační**, zejména jména účinkujících, časy, regiony, ceny a některé popisy; údaje převzít a ověřit podle `data.json` a `project-specification.md`.
- Texty uvnitř generovaného obrázku mohou obsahovat nepřesnosti; pro implementaci je závaznější textová specifikace a projektová data než nápisy v obrázku.
- Mobilní varianta je výchozí; následně rozšířit layout pro desktop.
- V další fázi dodat funkční navigaci a minimálně 3 smysluplné interaktivní funkce, navrhnout a prověřit průchod alespoň 2 scénáři.
- Interakce jako otevření mobilního menu nebo obyčejné navigační odkazy se samostatně nezapočítávají mezi požadované 3 funkce.

## Navržené interaktivní funkce

1. Filtrování programu podle dne, scény a typu akce.
2. Vyhledávání účinkujících.
3. Osobní program (výběr událostí, později případně `localStorage`).

## Stav ověření

Prozatím proběhla pouze koncepční kontrola souladu s požadavky zadání. Není doložené testování funkčního prototypu s uživateli ani kontrola proti úplnému souboru `data.json`.
