# Ricerca: trovare l'importo nel documento caricato

Type: research
Status: open
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Il collaboratore di ƎE propone, e l'utente riferisce il 1/11/2026, che quando l'inquilino carica un documento la piattaforma cerchi **la cifra dell'affitto** e, se non c'è, avvisi che il file potrebbe essere sbagliato, lasciando comunque caricare ([PRODUCT.md](../../../PRODUCT.md) §12, 1/11/2026). Come si legge il testo di un documento caricato, senza mandarlo a servizi esterni?

1. **PDF con il testo dentro** (le contabili scaricate dalla banca di solito lo sono): leggerlo nel browser o sul server; librerie libere, peso, licenza.
2. **Foto e PDF fatti di sole immagini:** riconoscimento del testo nel telefono (per esempio Tesseract.js con l'italiano: peso, tempi, precisione sulle cifre) o sul nostro server; nell'app iPhone il riconoscimento del testo di Vision, sul dispositivo.
3. **Trovare la cifra:** i modi in cui un importo compare in una contabile («650,00», «650.00», «EUR 650,00», «€ 650»), canone e oneri separati o insieme, pagamenti parziali o di più mesi; quanto spesso si avrebbero falsi allarmi.
4. **Condividere da un'altra app:** come un file arriva alla piattaforma con «Condividi» da un'altra app, sul web (Safari su iPhone, Chrome su Android) e nell'app iPhone.

Limiti: nessuna installazione nel progetto, nessun account, nessun documento a servizi esterni; fonti ufficiali con la data di lettura, risultati in `docs/ricerca/`. Una prova con **contabili inventate** solo se serve a rispondere, con l'autorizzazione dell'utente per il codice di altri. Serve al ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md).
