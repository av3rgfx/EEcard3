# Prova usa e getta: scanner su fogli inventati (1/11/2026)

Prova del ticket [Ricerca: strumenti per uno scanner nostro dentro la pagina](../../issues/17-ricerca-scanner-nella-pagina.md); esito in [docs/ricerca/scanner-documenti.md](../../../../docs/ricerca/scanner-documenti.md), §10.7.

- `prova.html` genera fogli inventati (contabile e scontrino di prova, nessun dato vero) in prospettiva su sfondi diversi, li fa leggere a scanic 1.7.1 e a jscanify 1.4.3 e misura l'errore sugli angoli; prova anche il video e l'editor degli angoli e uno schiarimento scritto da noi.
- `esegui.js` e `extra.js` la eseguono con Playwright in Chromium senza schermo e bloccano ogni richiesta non locale; `risultati.json` contiene i numeri.
- Le librerie **non sono nel repository**: si scaricano a parte (`scanic-1.7.1.tgz`, `jscanify-1.4.3.tgz` dal registro npm), si estraggono in `pkg/` accanto a `script/` e si serve la cartella con `python3 -m http.server 8765 --bind 127.0.0.1`. Niente `npm install`.
- Limiti: immagini sintetiche, browser di un computer, non un telefono. Non sostituisce la prova su iPhone e Android veri.
