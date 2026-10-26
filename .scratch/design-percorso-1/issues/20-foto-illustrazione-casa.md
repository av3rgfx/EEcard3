# Foto e illustrazione della casa

Type: prototype
Status: resolved
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come entrano nelle schermate le foto della facciata (una o più, facoltative, caricate o scattate dall'agenzia o dal proprietario) e come resta il disegno per le case senza foto?
- quale foto va in copertina e come si cambia;
- chi carica, toglie e vede le foto: operatore, proprietario, inquilino di quella casa; mai l'ex inquilino;
- come si scatta o si carica in agenzia e dal telefono, con l'anteprima;
- come appaiono nel riquadro in cima, nelle schede e nelle righe, e nella barra laterale;
- se nelle email resta il disegno (proposta già fatta in [DESIGN.md](../../../DESIGN.md), «Illustrazione della casa»);
- lo stile del disegno adatto alle case di ƎE.

Le foto interne restano fuori (dopo la prima versione; mappa, «Fuori ambito»).

Contesto: voce «Componenti e token» del «Non ancora specificato» della mappa, diventata ticket il 26/10/2026 su richiesta dell'utente, dopo la decisione «Foto della casa» ([PRODUCT.md](../../../PRODUCT.md) §12, 26/10/2026).

Come si lavora (HITL):
- skill `prototype` (ramo UI): una pagina usa e getta, privata, con solo dati e immagini inventati, niente foto di case o persone vere. Varianti davvero diverse dietro un selettore e i casi limite: nessuna foto, una, molte, foto verticale o scura, caricamento lento o fallito, più case dello stesso proprietario senza foto;
- applica §7, §10.2, §10.7 e §10.8 di PRODUCT.md; in DESIGN.md «Direzione del percorso 1», «Spazio dell'operatore», le schermate di proprietario e inquilino, «Rifinitura», «Testi», «Dati limite e accessibilità», «Interazioni e stati», «Componenti e token»; la [ricerca sulla forma di email e SMS](../../../docs/ricerca/email-sms-forma.md) per le immagini nelle email;
- verifica in Chromium a 360, 390, 768, 1024 e 1366 px, in chiaro e in scuro, e il testo alternativo delle foto per lo screen reader;
- le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata e, quando serve, un confronto affiancato in un'immagine; le regole decise in DESIGN.md con data e motivo, segnalando dove serve un parere professionale (privacy: persone o targhe nelle foto, conservazione).

## Risposta (Answer)

Chiuso il 26/10/2026. Sei scelte dell'utente, tutte sull'opzione consigliata:
- **copertina scelta:** in cima una foto sola, ferma; le altre nel visore, con il pulsante in basso a destra della foto;
- **chi toglie:** operatore e ogni proprietario tolgono qualsiasi foto; togliere vuol dire cancellare, con «Annulla» per 8 secondi, e resta solo chi l'ha tolta e quando. Le vedono anche l'inquilino finché dura la locazione, che può chiedere a ƎE di toglierne una; l'ex inquilino vede solo il disegno;
- **aggiungere:** menu del telefono, anteprima con l'inquadratura, promemoria su persone, targhe e interni, un solo pulsante; in agenzia si trascina o si sceglie il file; luogo e ora dello scatto si tolgono dalla foto;
- **aspetto:** la copertina prende il posto del disegno ovunque compare la casa; la foto verticale si taglia; con il caricamento fallito i clienti vedono il disegno; testi alternativi decisi;
- **email:** sempre il disegno, anche con le foto;
- **stile del disegno:** tre tipi di casa nello stile dipinto approvato (palazzo con portico, condominio, palazzina o villetta), scelti dall'operatore nella scheda della casa.

Regole in [DESIGN.md](../../../DESIGN.md), nuova sezione «Foto e illustrazione della casa (percorso 1)», con le domande per i pareri privacy e legale; cambiano due righe di «Direzione del percorso 1» («Illustrazione della casa» ed «Email»). Restano da fare sulla prima versione: fotocamera e foto HEIC su un iPhone vero, screen reader veri.

## Commenti (Comments)

- 26/10/2026: aperto dal «Non ancora specificato» della mappa («Componenti e token») e rivendicato nella stessa sessione.

### Pagina di prova (26/10/2026)
Prototipo (skill `prototype`, ramo UI; pagina privata, usa e getta): https://claude.ai/artifact/7VdfMJoY6897vcnoyw17qP. Il sorgente è nella cartella temporanea della sessione e non entra nel repository.
- Le «foto» sono scene disegnate al computer e rese come fotografie (prospettiva, grana, vignettatura): nessuna casa, persona o targa vera. La targa «FX 482 KT» è inventata.
- Comandi: dieci schermate (casa dell'inquilino, le tue case, foto della casa della proprietaria, aggiungere una foto dal telefono, scheda della casa dell'operatore, coda e «Al banco», email «canone pagato», case dove abitavi dell'ex inquilino, stile del disegno, chi carica, toglie e vede); variante delle foto (A copertina scelta, B sfoglia nel riquadro, C la più recente); stile del disegno (A palazzo con portico, quello approvato il 24/10; B tre tipi di casa dipinti; C tre tipi incisi a tratto); immagine nell'email (disegno, foto, nessuna, immagini bloccate); tema; larghezza; «Cosa legge lo screen reader».
- Casi: nessuna foto, una, molte (8), verticale in copertina, scura in copertina, persona e targa, caricamento lento, caricamento fallito, più case senza foto.
- Si possono provare davvero: visore delle foto, scelta della copertina, «Togli la foto» con «Annulla» per 8 secondi, ordine, inquadratura trascinando, invio con barra, errore, e una foto propria (resta nel dispositivo).
- Controllo automatico in Chromium: 3.260 combinazioni a 360, 390, 768, 1024 e 1366 px, in chiaro e in scuro, senza errori e senza scorrimento orizzontale. Trovato e corretto: nel riquadro stretto di «Al banco» a 1366 px l'indirizzo finiva sotto il pulsante delle foto (28 casi); ora va a capo. Ricontrollate le schermate toccate (264 combinazioni, nessun problema).

### Scelte dell'utente
Per ogni scelta un confronto affiancato in un'immagine, mandato prima della domanda.
1. **Copertina:** A, copertina scelta (consigliata). Il riquadro resta calmo e la copertina la sceglie una persona. *Scartate:* B, le foto da sfogliare nel riquadro, con frecce e contatore che fanno concorrenza al canone; C, la foto più recente sempre in copertina, che nel caso «molte foto» metteva in cima quella con una persona e un'auto.
2. **Chi toglie:** A, tutti tolgono e si cancella (consigliata). *Scartate:* B, ognuno toglie solo le sue; C, tolta ma conservata da ƎE.
3. **Aggiungere:** A, anteprima e promemoria (consigliata), come la contabile. *Scartate:* B, con una casella «Ho controllato» da spuntare ogni volta; C, subito senza anteprima.
4. **Aspetto:** A, la proposta con la foto verticale tagliata (consigliata). *Scartata:* B, verticale intera con i lati sfocati.
5. **Email:** A, sempre il disegno (consigliata), come proposto il 26/10. *Scartate:* B, la copertina; C, nessuna immagine.
6. **Stile del disegno:** B, tre tipi di casa dipinti (consigliata). Nel confronto con nove case della stessa proprietaria il palazzo con portico da solo (A) le rendeva quasi uguali; l'incisione a tratto (C) si perdeva in piccolo. L'utente non ha indicato che tipo di case gestisce ƎE: la domanda passa al collaboratore di ƎE.

### Verifiche e correzioni (26/10/2026, Chromium)
- Correzioni dell'agente trovate guardando i confronti: nelle schede delle case il pulsante delle foto stava dentro un link e copriva l'indirizzo (tolto, e tolta l'etichetta doppia); nella gestione B, sul telefono, i pulsanti schiacciavano il testo (ora vanno a capo); le frecce del visore quasi non si vedevano sulla foto (fondo scuro e bordo); nella conferma «ƎE» andava a capo da solo; nel caricamento lento comparivano l'icona dell'immagine rotta e il testo alternativo (ora la foto resta invisibile finché arriva); nell'email «ƎE» era un disegno, mentre la regola lo vuole in lettere.
- Albero di accessibilità letto con Playwright: riquadro in cima («Foto della facciata» o «Disegno della facciata», poi l'indirizzo e «Vedi tutte le foto della facciata, 8»), visore, schede, barra laterale, gestione, coda, email, «Case dove abitavi» e anteprima. Le foto delle schede ripetevano l'indirizzo già scritto: ora sono decorative.
- Controllo finale sulla pagina con le scelte fatte: 3.260 combinazioni a 360, 390, 768, 1024 e 1366 px, in chiaro e in scuro, senza errori, senza scorrimento orizzontale, senza pulsanti fuori dal loro riquadro e senza immagini prive di testo alternativo; dopo l'ultima correzione (foto delle schede decorative) ricontrollata la schermata delle case (324 combinazioni, nessun problema).
- **Revisione:** nessun codice applicativo. Il programma `ocr` non è nell'ambiente, quindi niente revisione OCR; revisione diretta del prototipo.
- Il carattere Manrope (sottoinsieme latino, licenza OFL) è incorporato nella pagina di prova, non preso da Google. Le foto inventate sono fatte nella sessione con Chromium; non entrano nel repository.
