# Ricevute stampate: canone e consegna

Type: prototype
Status: resolved
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come sono fatte la ricevuta del canone e quella della consegna, sia sul foglio A4 stampato in agenzia sia nel PDF che proprietario e inquilino scaricano? Impaginazione, campi di [PRODUCT.md](../../../PRODUCT.md) §10.3, dove stanno ƎE e Connetto, firma e bollo quando servono, e come appare una ricevuta annullata o sostituita.

Contesto: voce «Documenti stampati dalla piattaforma» del «Non ancora specificato» della mappa, diventata ticket il 26/10/2026 su richiesta dell'utente, ora che il logo di ƎE è disegnato ([ticket](18-logo-ee-svg.md)).

Come si lavora (HITL):
- skill `prototype` (ramo UI): una pagina usa e getta, privata, con solo dati inventati, le varianti davvero diverse dietro un selettore e i casi limite: più mesi in una ricevuta sola, pagamento parziale, contanti, nomi e indirizzi lunghi, più proprietari, ricevuta annullata e sostituita;
- applica §7 (versioni conservate, passaggi del denaro distinti), §10.3 e §10.6 di PRODUCT.md; in DESIGN.md «Identità», «Caratteri», «Spazio dell'operatore (percorso 1)», le sezioni dei clienti dove si apre una ricevuta, «Testi dell'interfaccia (percorso 1)» e «Dati limite e accessibilità (percorso 1)»; [assets/marchio/](../../../assets/marchio/README.md); la [ricerca sull'incasso dei canoni](../../../docs/ricerca/incasso-canoni.md), §3;
- **il testo legale non si scrive**: aspetta il parere (§10.10). Il prototipo ne lascia il posto, segnato chiaramente;
- verifica in Chromium a 360, 390, 768, 1024 e 1366 px e nell'anteprima di stampa A4; contrasto; lettura del PDF con le tecnologie assistive (struttura, ordine di lettura, lingua, titolo);
- le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata; le regole decise in DESIGN.md con data e motivo, segnalando dove serve un parere professionale.

## Risposta (Answer)

Chiuso il 26/10/2026. Quattro scelte dell'utente e un gruppo di dettagli approvati insieme, tutti sull'opzione consigliata:
- **impaginazione a lettera:** una ricevuta per foglio A4, uguale sul foglio e nel PDF;
- **ƎE in testa e Connetto piccolo in fondo**, con «Preparata con Connetto»;
- **ricevuta annullata** con una fascia ambra in cima e il timbro «Annullata» di traverso; la nuova ha una fascia grigia «Sostituisce la ricevuta n. …»;
- **PDF fatto dai dati**, con il fatto scritto al posto della firma e della marca;
- **dettagli:** campi del canone e della consegna, due numerazioni, bollo del canone sopra 77,47 € e «Bollo?» sulla consegna, piede con chi ha registrato, regole per leggere il PDF con lo screen reader, foglio sempre bianco.

Il testo legale non è scritto: resta il suo posto, segnato. Regole in [DESIGN.md](../../../DESIGN.md), nuova sezione «Ricevute stampate (percorso 1)», con un rimando in «Spazio dell'operatore» («Correzione di una ricevuta»). Nella stessa sezione ci sono le domande per i pareri legale e fiscale e quelle per il collaboratore di ƎE.

Restano da fare sulla prima versione: la lettura del PDF con screen reader veri e una stampa su una stampante vera.

## Commenti (Comments)

- 26/10/2026: aperto dal «Non ancora specificato» della mappa («Documenti stampati dalla piattaforma») e rivendicato nella stessa sessione.

### Pagina di prova (26/10/2026)
Prototipo (skill `prototype`, ramo UI; pagina privata, usa e getta, dati inventati): https://claude.ai/artifact/EoCKVfNQG4mXr1bXNJzn1g. Il sorgente è nella cartella temporanea della sessione e non entra nel repository.
- Comandi: documento (canone, consegna), impaginazione (A Lettera, B Modulo a riquadri, C Due copie sul foglio), caso, uscita (foglio da stampare, PDF con i dati, PDF con la scansione), posto di Connetto, segno dell'annullamento, tema della pagina, grandezza del foglio.
- Casi del canone: un mese in contanti, più mesi con carta, pagamento parziale, bonifico sul conto di ƎE con importo alto (9.876,54 €), nomi e indirizzi lunghi su tre mesi, più proprietari, annullata, sostituisce. Della consegna: contanti con la firma del proprietario, bonifico con «Ricevuto», più mesi, più proprietari senza compenso, nomi lunghi su tre mesi, annullata, sostituisce.
- Il posto del testo legale è un riquadro giallo a righe con «Posto del testo legale · in attesa del parere legale»: nessun testo provvisorio.
- Controllo automatico in Chromium: 675 combinazioni a 360, 390, 768, 1024 e 1366 px, in chiaro e in scuro, senza errori, senza scorrimento orizzontale e senza contenuto fuori dal foglio. Nella variante C le consegne annullate o sostituite non stanno nel mezzo foglio.

### Scelte dell'utente
1. **Impaginazione:** A, la lettera (consigliata), dopo un confronto affiancato chiesto dall'utente («posso vedere la differenza visivamente prima di decidere?»). Una ricevuta per foglio, da leggere dall'alto in basso. *Scartate:* B, il modulo a riquadri, più fitto con i nomi lunghi; C, due copie sul foglio, con metà dello spazio, dove le consegne annullate o sostituite non stanno già senza testo legale.
2. **Dove vanno ƎE e Connetto:** ƎE in testa, Connetto piccolo in fondo, «Preparata con [simbolo] Connetto» (consigliata). La ricevuta è di ƎE, che riceve il denaro e firma; il nome Connetto aspetta il parere sul marchio e in fondo si toglie facilmente. *Scartate:* Connetto in testa accanto a ƎE, che su un documento del denaro può far pensare che a ricevere sia Connetto; Connetto assente.
3. **Ricevuta annullata:** fascia ambra in cima e timbro «Annullata» di traverso (consigliata). La fascia dice data, ora, chi l'ha annullata, il motivo e il numero della nuova, ed è la prima cosa letta dallo screen reader; il timbro è solo da vedere e riprende quello già approvato nello spazio dell'operatore. La nuova ricevuta ha in cima una fascia grigia «Sostituisce la ricevuta n. …». *Scartate:* solo la fascia, che si nota meno; fascia e importi barrati, che rende difficile leggere le cifre sbagliate.
4. **Il PDF da scaricare:** fatto dai dati, con la stessa impaginazione del foglio; al posto delle firme e della marca c'è il fatto scritto («Firmata in agenzia da Giulia Neri per ƎE il 23 ottobre 2026», «Bollo 2,00 € applicato sull'originale») (consigliata). Si legge con lo screen reader e non chiede lavoro in più al banco. *Scartate:* la scansione del foglio firmato, che è un'immagine muta per lo screen reader e chiede una scansione per ricevuta; tutte e due, con lo stesso lavoro in più. Da rivedere dopo il parere legale su quanto vale il PDF senza firma a penna.
5. **Dettagli proposti dall'agente**, approvati tutti insieme («Approvo tutto»): campi del canone e della consegna; due copie della consegna in contanti, una firmata resta in agenzia; due numerazioni, con un numero nuovo per la ricevuta che sostituisce; bollo del canone solo sopra 77,47 € e «Bollo?» sulla consegna fino al parere fiscale; piede con chi ha registrato, «Preparata con Connetto», numero e pagina; regole per il PDF con lo screen reader; timbro al 65%; foglio sempre bianco.

### Verifiche (26/10/2026, Chromium)
- 675 combinazioni della pagina (2 documenti, 3 impaginazioni, tutti i casi, 3 uscite, a 360, 390, 768, 1024 e 1366 px, in chiaro e in scuro). Nessun errore, nessuno scorrimento orizzontale, nessun contenuto fuori dal foglio. Due volte: prima della pubblicazione e dopo le correzioni.
- **Anteprima di stampa A4:** 20 PDF generati con la stampa di Chromium (10 casi della lettera, foglio e PDF). Tutti su una pagina A4 (595 × 842 punti), con i margini del foglio; guardati a occhio il caso annullato e quello dei nomi lunghi.
- **PDF e screen reader**, controllati sulla struttura:
  - il PDF è etichettato, con la lingua `it`, il titolo del documento mostrato al posto del nome del file, il titolo principale e la tabella con le intestazioni;
  - l'ordine di lettura, ricostruito seguendo i tag, è giusto e completo: fascia dell'annullamento, agenzia, titolo, persone e casa, tabella, totali, mezzo, posto del testo legale, bollo, firme, piede;
  - le coppie etichetta e valore sono blocchi generici, non un elenco: regola per la costruzione.
  - Non fatte: prove con VoiceOver, NVDA o un lettore PDF vero, e una stampa su carta.
- **Correzioni dell'agente** trovate con le verifiche:
  - nella prima versione «Enrico Erca» non arrivava nel PDF, perché il testo nascosto con il ritaglio non viene stampato, e si leggeva «Per E E». Provate tre alternative: con il disegno e il nome alternativo si sente «immagine», che la regola del logo esclude. Scelto il testo trasparente;
  - le lettere del timbro finivano sparse nel testo estratto («A … N N U L …»). Ora il timbro è un disegno: le lettere di Manrope 800, ricavate dal file del carattere con fontTools solo nella sessione;
  - il timbro al 50% aveva un contrasto di 2,3:1, ora al 65% ha 3,1:1;
  - con il bonifico non ancora confermato compariva la spunta verde: ora c'è l'icona dell'attesa;
  - la frase della firma nel PDF si spezzava intorno a «ƎE»;
  - sotto la firma c'era «in nome e per conto di …», che anticipava una formula legale: ora c'è il nome con «operatrice».
- Contrasti in DESIGN.md, «Ricevute stampate (percorso 1)».
- **Revisione:** nessun codice applicativo. Il programma `ocr` non è nell'ambiente, quindi niente revisione OCR; revisione diretta del prototipo e dei PDF.
- Il carattere Manrope (sottoinsieme latino, licenza OFL) è incorporato nella pagina di prova, non preso da Google al caricamento. Il file non entra nel repository.
