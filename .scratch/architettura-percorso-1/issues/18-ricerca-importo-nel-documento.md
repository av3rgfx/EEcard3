# Ricerca: trovare l'importo nel documento caricato

Type: research
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Il collaboratore di ƎE propone, e l'utente riferisce il 1/11/2026, che quando l'inquilino carica un documento la piattaforma cerchi **la cifra dell'affitto** e, se non c'è, avvisi che il file potrebbe essere sbagliato, lasciando comunque caricare ([PRODUCT.md](../../../PRODUCT.md) §12, 1/11/2026). Come si legge il testo di un documento caricato, senza mandarlo a servizi esterni?

1. **PDF con il testo dentro** (le contabili scaricate dalla banca di solito lo sono): leggerlo nel browser o sul server; librerie libere, peso, licenza.
2. **Foto e PDF fatti di sole immagini:** riconoscimento del testo nel telefono (per esempio Tesseract.js con l'italiano: peso, tempi, precisione sulle cifre) o sul nostro server; nell'app iPhone il riconoscimento del testo di Vision, sul dispositivo.
3. **Trovare la cifra:** i modi in cui un importo compare in una contabile («650,00», «650.00», «EUR 650,00», «€ 650»), canone e oneri separati o insieme, pagamenti parziali o di più mesi; quanto spesso si avrebbero falsi allarmi.
4. **Condividere da un'altra app:** come un file arriva alla piattaforma con «Condividi» da un'altra app, sul web (Safari su iPhone, Chrome su Android) e nell'app iPhone.

Limiti: nessuna installazione nel progetto, nessun account, nessun documento a servizi esterni; fonti ufficiali con la data di lettura, risultati in `docs/ricerca/`. Una prova con **contabili inventate** solo se serve a rispondere, con l'autorizzazione dell'utente per il codice di altri. Serve al ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md).

## Risposta (Answer)

Ricerca del 1/11/2026 in [docs/ricerca/importo-documento.md](../../../docs/ricerca/importo-documento.md), fatta in sequenza dalla sessione principale. Prova con 15 documenti inventati autorizzata dall'utente; script in [prove/importo/](../prove/importo/README.md). Nessuna installazione nel progetto, nessun account, nessuna richiesta esterna nella prova.

- **Si fa nel telefono, prima dell'invio.** I PDF con il testo si leggono con pdf.js (Apache-2.0, circa 0,5 MB compressi, 0,1–0,2 s). Foto, schermate e PDF di immagini passano da tesseract.js con l'italiano (Apache-2.0, circa 3,2 MB compressi da scaricare una volta, 0,5–2 s). Tutto si serve dal nostro sito, perché tesseract.js altrimenti scarica da un CDN.
- **Prova:** 13 risultati giusti su 15. Tutti i PDF, la scansione, la schermata e le foto leggibili danno l'importo; tutti i documenti sbagliati avvisano, anche con «650 km» o «posto 730». Falliscono solo due foto con il testo alto pochi pixel, illeggibile anche a occhio.
- **Regola:** cerca canone, oneri e la loro somma; conta come importo un numero con i centesimi, oppure un intero accanto a € o EUR. Pagamenti parziali e di più mesi oggi avvisano: da decidere.
- **App:** Vision sull'iPhone (da iOS 13, sul dispositivo; l'italiano è da verificare); ML Kit su Android.
- **«Condividi» da un'altra app:** su Android solo con il sito installato e Chrome; su iPhone serve l'app con un'estensione di condivisione. Sul web dell'iPhone il file si sceglie dalla pagina, e si può sbagliare file nello stesso modo.

*Parere dell'agente, non decisione:*
- controllo nel telefono, solo per i documenti che provano un pagamento;
- due avvisi: «non troviamo l'importo» e «la foto non si legge bene»;
- si può partire dai PDF e aggiungere le foto dopo la prova su iPhone.

Cinque domande per il ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md) nella ricerca, §9.
