# Prova usa e getta: l'importo nel documento caricato (1/11/2026)

Prova del ticket [Ricerca: trovare l'importo nel documento caricato](../../issues/18-ricerca-importo-nel-documento.md); esito in [docs/ricerca/importo-documento.md](../../../../docs/ricerca/importo-documento.md), §6.

- `importo.js` è la regola che trova gli importi in un testo; `test-importo.js` la controlla (`node test-importo.js`).
- `genera.js` crea con Chromium 15 documenti **inventati**: contabili in PDF con il testo, in PDF fatto di immagini, come schermata e come foto; documenti sbagliati (bolletta, referto, biglietto); un pagamento parziale e uno di due mesi.
- `prova.html` legge il testo con pdf.js o con tesseract.js (italiano) e cerca gli importi attesi; `esegui.js` la esegue in Chromium senza schermo e blocca ogni richiesta non locale; `risultati.json` contiene i numeri.
- Le librerie **non sono nel repository**: `pdfjs-dist-6.5.438`, `tesseract.js-7.0.0`, `tesseract.js-core-7.0.0` e `@tesseract.js-data/ita-1.0.0` si scaricano dal registro npm e si estraggono in `pkg/` accanto a `script/`; poi `python3 -m http.server 8766 --bind 127.0.0.1` nella cartella che le contiene. Niente `npm install`.
- Limiti: documenti sintetici, un browser da computer, non un telefono.
