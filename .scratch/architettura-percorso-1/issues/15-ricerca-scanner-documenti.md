# Ricerca: scanner di documenti già pronti

Type: research
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

L'utente vuole uno **scanner automatico** quando si carica un file o un documento, come Adobe Scan sul telefono ([PRODUCT.md](../../../PRODUCT.md) §12, 30/10/2026). Quali strumenti già pronti lo fanno, senza smontare app di altri?

1. **Web sul telefono:** cosa offrono Safari su iPhone e Chrome su Android quando si sceglie un file o si scatta una foto da una pagina; librerie libere che trovano i bordi del foglio, raddrizzano e schiariscono. Licenza, peso, manutenzione, se lavorano tutto dentro il telefono.
2. **App iPhone (dopo, §11):** la fotocamera per documenti di VisionKit. Cosa fa, da quale versione di iOS.
3. **Android:** lo scanner di documenti di ML Kit. Cosa fa, cosa richiede (servizi Google), dove vanno le immagini.
4. **Per tutti:** più pagine in un PDF, accessibilità (guida a voce, alternativa senza fotocamera), nessuna immagine a servizi esterni (scelta del 20/10/2026 sui dati).

Limiti: nessuna installazione e nessun account; fonti ufficiali con la data di lettura, risultati in `docs/ricerca/`. Prova con fogli inventati solo se serve a rispondere. Serve al ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md).

## Risposta (Answer)

Ricerca del 1/11/2026 in [docs/ricerca/scanner-documenti.md](../../../docs/ricerca/scanner-documenti.md), su fonti ufficiali e sul sorgente pubblico di WebKit e Chromium. Nessuna installazione, nessun account, nessuna prova su telefoni veri, nessuna immagine a servizi esterni, nessuna app smontata.

- **Web sul telefono:** nessun browser offre lo scanner di sistema dentro la pagina. Safari su iPhone mostra «Libreria foto», «Scatta foto» e «Scegli file»; Chrome su Android la fotocamera, le foto o i file, secondo `accept` e `capture`. Con `capture` il menu salta, e con lui la strada senza fotocamera.
- **Scanner già pronti fuori dalla pagina:** su iPhone File, Note e Anteprima scansionano in PDF, che poi si sceglie con «Scegli file». Su Android lo fa Google Drive, ma salva su Google: non va suggerito (scelta del 20/10/2026 sui dati).
- **Librerie nel browser, tutto nel telefono:** scanic (MIT, circa 42 KB compressa, bordi, raddrizzamento ed editor degli angoli da tastiera; un solo autore); OpenCV.js (Apache-2.0, circa 3,5 MB compresso); jscanify (MIT, sopra OpenCV.js). Nessuna schiarisce il foglio: poche righe nostre. Il codice si serve dal nostro sito.
- **Server:** sharp riduce, gira, alza il contrasto e toglie luogo e ora; non raddrizza la prospettiva e, nei pacchetti pronti, non legge l'HEIC.
- **App iPhone (dopo):** VisionKit, da iOS 13: bordi, prospettiva, luce, più pagine; il PDF lo fa l'app. **Android:** ML Kit fa tutto sul telefono, ma solo nelle app native con i servizi Google Play, e manda a Google metriche d'uso.
- **Accessibilità:** il campo file è già l'alternativa senza fotocamera; gli angoli si devono poter spostare senza trascinare (WCAG 2.2, 2.5.7). Nessuna fonte descrive una guida a voce per inquadrare.

*Parere dell'agente, non decisione:* sempre il campo file con foto e PDF, senza `capture`, più sharp sul server; nel pilota, solo per i fogli, un passo «Controlla il foglio» con scanic e le pagine unite in PDF sul server; VisionKit nell'app iPhone. Cinque domande per il ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md) nella ricerca, §9; i punti da verificare su telefoni veri nei §1–5.

Controllo a campione della sessione principale (1/11/2026): versione, licenza e dipendenze di scanic su npm; voci del menu e qualità 0,8 nel sorgente di WebKit; la frase «l'intero flusso funziona sul dispositivo» nella pagina di ML Kit. Corrispondono.
