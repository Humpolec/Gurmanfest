# Gurmánfest – offline export třetího milníku

Po rozbalení spusťte `index.html` dvojklikem bez webového serveru. Veškerá programová data se načítají ze souboru `js/data-inline.js` namísto `fetch()` (blokovaného při `file://`).

Vývojová verze projektu není součástí exportního ZIPu. `data.json` zůstává přiložený jako zdroj dat. Uložení uživatelských voleb používá `localStorage`, jehož chování při `file://` se může lišit podle prohlížeče.
