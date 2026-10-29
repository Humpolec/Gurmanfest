Technologie

Všechno jsme psali v čistém HTML, CSS a JavaScriptu, bez jakýchkoliv frameworků nebo knihoven. Běží to kdekoliv bez instalace, ale protože nemáme žádný build skript, museli jsme hlavičku a patičku ručně zkopírovat do všech HTML souborů.

Načítání dat (data.json)

Všechna data o programu a účinkujících načítáme z data.json přes fetch(). V HTML máme natvrdo jen nadpisy a statické texty.

Co je hotové a co chybí

Funguje úvodní stránka, Program s filtrem, Můj program a Doporučovač. Stránky Účinkující, Degustace a Scény zatím vedou na pripravujeme.html a v menu mají značku „brzy“. Detaily kapel/regionů a online prodej lístků chybí (ceny jsou jen fiktivní, prodej zadání nevyžadovalo).

Layout a mobilní verze

Stavěli jsme to od mobilu (mobile-first), takže na malém displeji se nic neschovává a všechno je pod sebou v jednom sloupci. Menu má 8 položek a pod 1200 px se balí do hamburgeru. Pro obří 4K monitory jsme přidali CSS zoom, aby texty nebyly moc mrňavé.

Jak fungují funkce

V Programu jde hned filtrovat podle dne, scény a žánru, a vyhledávání bere názvy, kapely i regiony. Můj program si pamatuje vybrané akce v localStorage pod klíčem `mujProgram` (ukládá se to přímo do prohlížeče bez přihlášení). Doporučovač kombinuje filtry podle nálady, žánru a pití přesně podle dat, žádná náhoda.

Obrázky

Fotky jsme zmenšili a pojmenovali podle ID z JSONu (třeba artist-01.jpg). Kdyby se fotka nenenačetla, je pod ní nastavený CSS gradient jako záloha. Fotky kapel jsou jen ilustrační.

Změny oproti wireframu

Vyhodili jsme tlačítko „Koupit vstupenky“ z hlavičky, protože e-shop neděláme. Skupinu Kryštof jsme smazali, protože nebyla v data.json (časy a kapely teď sedí 100% podle dat). Sekci Masterclass jsme nahradili reálnými akcemi z JSONu.