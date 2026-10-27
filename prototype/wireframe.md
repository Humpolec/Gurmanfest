# Wireframe úvodní stránky – Gurmánfest

**Fáze:** návrh pro cvičení 3 (milník 2)  
**Přístup:** mobile-first + desktop  
**Typ:** textový low-fidelity wireframe, doplněný obrázkem `mockup-homepage.png`

## Informační hierarchie

1. Header a hlavní navigace
2. Hero – charakter festivalu, místo a datum, hlavní akce
3. Stručný přehled festivalu
4. Vybrané body programu
5. Degustace podle regionů
6. Účinkující / hudební část
7. Vstupenky
8. Praktické informace
9. Závěrečná výzva k akci
10. Footer

## Mobil – výchozí rozložení (přibližně 375 px)

```text
┌──────────────────────────────┐
│ GURMÁNFEST               [≡] │
├──────────────────────────────┤
│ HERO FOTO / ÚVOD             │
│ Chuť, která má rytmus.       │
│ 16.–18. 7. 2027 · Mikulov    │
│ [Prozkoumat program]         │
│ [Koupit vstupenky]           │
├──────────────────────────────┤
│ CO VÁS ČEKÁ                  │
│ Víno a sýry                  │
│ Česká hudba                  │
│ Mikulov                      │
├──────────────────────────────┤
│ VYBRANÉ BODY PROGRAMU        │
│ [Karta události]             │
│ [Karta události]             │
│ [Celý program]               │
├──────────────────────────────┤
│ REGIONÁLNÍ DEGUSTACE         │
│ [Karta regionu]              │
│ [Karta regionu]              │
├──────────────────────────────┤
│ VEČERY PATŘÍ HUDBĚ           │
│ [Karta interpreta]           │
│ [Karta interpreta]           │
├──────────────────────────────┤
│ VSTUPENKY                    │
│ [Varianty vstupenek]         │
├──────────────────────────────┤
│ PRAKTICKÉ INFORMACE          │
├──────────────────────────────┤
│ [Program] [Vstupenky]        │
│ FOOTER                       │
└──────────────────────────────┘
```

Hlavní obsah v jednom sloupci, CTA čitelná a dostatečně velká pro dotykové ovládání. Menu po otevření zobrazí Program, Degustace, Účinkující, Vstupenky, Praktické informace.

## Desktop – rozšířené rozložení

```text
┌─────────────────────────────────────────────────────────┐
│ LOGO   Program  Degustace  Účinkující  Info  [Vstupenky]│
├─────────────────────────────────────────────────────────┤
│ HERO TEXT / CTA          │ HERO FOTOGRAFIE              │
├─────────────────────────────────────────────────────────┤
│ CO VÁS ČEKÁ – informační bloky vedle sebe               │
├─────────────────────────────────────────────────────────┤
│ PROGRAM – karty vedle sebe + odkaz na celý program      │
├─────────────────────────────────────────────────────────┤
│ DEGUSTACE – mřížka regionů                              │
├─────────────────────────────────────────────────────────┤
│ HUDBA – mřížka vybraných účinkujících                   │
├─────────────────────────────────────────────────────────┤
│ VSTUPENKY – přehled variant vedle sebe                  │
├─────────────────────────────────────────────────────────┤
│ PRAKTICKÉ INFORMACE – sloupce                           │
├─────────────────────────────────────────────────────────┤
│ ZÁVĚREČNÉ CTA                                           │
│ FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
```

## Scénáře, které má budoucí prototyp umožnit

**Scénář A – najít událost:** homepage → Program → vybrat den/scénu/typ nebo vyhledat účinkujícího → detail události → případně přidat do osobního programu.

**Scénář B – vybrat vstupenku:** homepage → Vstupenky → vybrat variantu → zobrazit souhrn výběru. Neimplementovat skutečnou platbu bez odpovídajícího zadání.

## Interaktivní prvky a funkce

**Požadované funkce k implementaci:** filtr programu, vyhledávání účinkujících, osobní program. Navigace a otevření menu jsou podpůrné ovládání, nikoliv samostatné požadované funkce.

## Texty pro homepage (návrh)

- Hlavní claim: **Chuť, která má rytmus.**
- Perex: „Tři dny regionálních vín, výběrových sýrů a české hudby v srdci Mikulova.“
- Metadata: **16.–18. července 2027 · Mikulov**
- Primární CTA: **Prozkoumat program**
- Sekundární CTA: **Koupit vstupenky**

## Poznámka k datům

Mockup je vizuální ilustrace, nikoliv schválený festivalový program. Skutečné názvy kapel, časy, druhy degustací, vstupenky a ceny budou doplněny až po ověření zdrojových dat a specifikace.
