# Interazioni e stati del percorso 1

Type: prototype
Status: resolved
Blocked by: 13, 14, 15
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come si comportano le schermate approvate del percorso 1 nei momenti che cambiano lo stato, con e senza movimento ridotto, e cosa sente chi usa lo screen reader? Cosa si registra in [DESIGN.md](../../../DESIGN.md), «Interazioni e stati», per successo e disabilitato, che mancano?

I momenti: «Ricevuto» del proprietario, contabile inviata dall'inquilino, incasso registrato dall'operatore, disdetta dell'adesione, pulsanti spenti, caricamento, errore e ritorno della rete. Per ciascuno: cosa cambia sullo schermo, con quale movimento e quanto dura, cosa succede con il movimento ridotto, cosa viene annunciato allo screen reader e dove va il fuoco.

Come si lavora:
- skill `prototype` (ramo UI), `emil-design-eng` e `apple-design`; `accessibility-audit` per il movimento ridotto e gli annunci;
- si leggono con lo strumento Artifact la pagina dei dati limite (con «Proposta») e la prova su iPhone; si prepara una pagina usa e getta con i momenti, ognuno con e senza movimento ridotto, solo dati inventati;
- verifica nel browser a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, ricaricando per ogni schermata;
- le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata. Un cambio delle regole già approvate va in DESIGN.md come cambiato, non cancellato.

Applica i testi di «Testi dell'interfaccia (percorso 1)» («Conferme», «Errore», «Senza rete», «Caricamento») e il movimento di «Rifinitura delle schermate interne» e del «Benvenuto». Lo spazio dell'operatore entra solo per l'incasso registrato.

## Risposta (Answer)

Chiuso il 26/10/2026. Sei scelte dell'utente, una alla volta, tutte sull'opzione consigliata:
- la conferma compare al suo posto, dove c'era il pulsante, e resta;
- il «Ricevuto» ha «Annulla» per 8 secondi prima di partire;
- i pulsanti spenti restano leggibili, si raggiungono con Tab e dicono sempre perché sono spenti;
- con il movimento ridotto restano solo dissolvenze brevi, in tutto il percorso;
- quando torna la rete, la fascia dice «Di nuovo in linea» per 4 secondi e si chiude;
- otto dettagli approvati insieme: segnaposto che respira solo dopo 300 ms, attesa nel pulsante senza doppio invio, fuoco e annunci, errore al suo posto in ambra, esito incerto controllato dalla piattaforma, tempi del movimento, avviso dei contanti non letto come allarme.

Regole in [DESIGN.md](../../../DESIGN.md), nuova sezione «Interazioni e stati (percorso 1)», con i segni di cambio nelle regole toccate («Incasso al banco», «Movimento» della rifinitura) e i rimandi in «Benvenuto», «Stati comuni» e «Interazioni e stati». Contrasti dei colori nuovi misurati, tutti sopra 4,5:1.

Restano da fare sulla prima versione: ascoltare gli annunci con VoiceOver e NVDA veri e provare il movimento su un iPhone vero.

## Commenti (Comments)

- 26/10/2026: aperto dal «Non ancora specificato» della mappa («Rifinitura e revisione») e rivendicato nella stessa sessione.

### Pagina di prova (26/10/2026)

https://claude.ai/artifact/MvrdhkTegSQ5eUUGC4XzeY (privata, usa e getta, solo dati inventati). Comandi in cima: momento, chiaro o scuro, movimento («Normale», «Ridotto · dissolvenze», «Ridotto · fermo»), le varianti del momento e «Rigioca». Sotto, un registro mostra cosa annuncerebbe lo screen reader e dove va il fuoco.

- *Base:* letti con lo strumento Artifact la pagina dei dati limite (con «Proposta», cioè le correzioni decise) e la prova su iPhone. Stile, facciata e testi sono quelli approvati; le immagini sono copiate dalla pagina dei dati limite.
- *Otto momenti:* «Ricevuto» della consegna (proprietaria), contabile inviata (inquilino), incasso registrato (operatore), disdetta dell'adesione, pulsanti spenti (contanti oltre il limite e senza rete), caricamento, errore (non partito, esito incerto, pagina) e ritorno della rete.
- *Varianti:* conferma «Al suo posto», «Avviso in basso» o «Pagina di conferma»; «Annulla» per 8 secondi sul «Ricevuto»; pulsanti spenti «Con il perché», «Come oggi», «Mai spenti»; segnaposto «Respiro», «Riflesso», «Fermo»; ritorno della rete «Breve conferma», «Sparisce e basta», «Resta finché la chiudi».
- *Valori proposti:* pressione 0,97 in 160 ms (già decisa); attesa nel pulsante solo dopo 300 ms, larghezza del pulsante ferma e secondo tocco ignorato; cambio di contenuto con uscita in 140 ms (dissolvenza e sfocatura di 2 px) ed entrata in 240 ms (dissolvenza e 6 px dal basso); spunta che si disegna in 360 ms; fascia della rete che si apre in 220 ms. Con «Ridotto · dissolvenze» restano solo dissolvenze fino a 150 ms e l'attesa a tre puntini; con «Ridotto · fermo» nulla si muove.
- *Verifiche in Chromium:* 308 controlli, con la pagina ricaricata ogni volta: 8 momenti a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, prima e dopo l'azione principale; i due livelli di movimento ridotto a 390 e 1366 px. Nessuno scorrimento orizzontale, nessun pulsante o stato fuori dal suo riquadro, nessun testo tagliato, nessun errore nella console. Le schermate sono state guardate anche a occhio (telefono e computer, chiaro e scuro).
- *Percorsi provati:* ogni momento premuto fino alla fine; il secondo tocco durante l'attesa viene ignorato; «Annulla» riporta al «Ricevuto» e dopo 8 secondi il «Ricevuto» parte; l'esito incerto controlla da solo senza far riprovare; con «Con il perché» il pulsante spento si raggiunge con il tasto Tab, con «Come oggi» no.

### Scelte dell'utente (26/10/2026, una alla volta)

1. *Conferma dopo un'azione:* **«Al suo posto»** (consigliata). La riga del pulsante diventa un riquadro con la spunta e la frase, che resta finché si lascia la pagina; titolo e stato cambiano insieme. Scartate: «Avviso in basso» (sparisce dopo 5 secondi, si può perdere) e «Pagina di conferma» (un tocco in più e lontano dalla casa). L'operatore tiene la pagina «Incasso registrato», già approvata.
2. *«Ricevuto» premuto per sbaglio:* **«Annulla» per 8 secondi** (consigliata). Il «Ricevuto» parte dopo 8 secondi; intanto accanto alla conferma c'è «Annulla» con una linea sottile che si accorcia (senza linea con il movimento ridotto). Vale anche per il «Ricevuto» della contabile. Dopo l'invio la correzione resta quella della specifica (ƎE o contestazione). Scartate: nessun annulla (uno sbaglio di dito diventa una telefonata) e la domanda «Hai visto l'importo sul tuo conto?» prima dell'invio (un passaggio in più ogni mese, che si impara a saltare). Nella domanda all'utente il nome «ƎE» è uscito storpiato in «E» per un errore di scrittura dell'agente; il senso non cambia.
3. *Pulsanti spenti:* **«Con il perché»** (consigliata). Grigio leggibile (fondo dei pulsanti secondari, testo secondario, contorno sottile), motivo sempre scritto sotto e collegato al pulsante, raggiungibile con Tab; toccarlo richiama il motivo e lo fa leggere. Si spegne un pulsante solo quando c'è un motivo da dire. Cambia la regola dell'incasso al banco (prima: pulsante trasparente). Scartate: «Come oggi» (trasparente e saltato dallo screen reader) e «Mai spenti» (il blocco si scopre solo dopo aver premuto).
4. *Movimento ridotto:* **«Solo dissolvenze»** (consigliata). Con «Riduci movimento» restano solo dissolvenze fino a 150 ms e i cambi di colore; niente spostamenti, ingrandimenti, sfocature, spunta che si disegna né linea di «Annulla»; l'attesa è fatta di tre puntini che si accendono. Una sola regola per tutto il percorso, benvenuto compreso. Cambia la regola «non si anima nulla» della rifinitura. Scartate: «Fermo» (i cambi di stato sembrano salti) e le due regole diverse di oggi.
5. *Ritorno della rete:* **«Breve conferma»** (consigliata). La fascia diventa verde, «Di nuovo in linea. Dati aggiornati alle 9:14.», per 4 secondi, poi si chiude; lo screen reader la legge una volta e i pulsanti si riaccendono da soli. Scartate: «Sparisce e basta» (chi usa lo screen reader non sa che i dati sono di nuovo aggiornati) e «Resta finché la chiudi» (una cosa in più da togliere).
6. *Dettagli tecnici:* **approvati tutti insieme** (consigliato), con il segnaposto «Respiro». Segnaposto solo dopo 300 ms e fermo con il movimento ridotto; «La casa si sta caricando» solo dopo 1 secondo; attesa nel pulsante dopo 300 ms, larghezza ferma, secondo tocco ignorato; fuoco sulla conferma, conferme lette con calma ed errori subito; errore al suo posto in ambra, senza scosse; esito incerto controllato dalla piattaforma; tempi 140, 240, 360 e 220 ms; avviso dei contanti non letto come allarme. Scartati: «Riflesso» e la discussione uno alla volta.

- 26/10/2026: pagina di prova aggiornata alle scelte (versione 2: «Annulla» attivo all'apertura, segnaposto fermo con il movimento ridotto) e ricontrollata a 390 e 1366 px, senza errori. Contrasti misurati con la formula WCAG: pulsante spento 6,39:1 e 7,22:1, testo secondario nella conferma 6,47:1 e 7,39:1, icona della fascia verde 4,68:1 e 9,55:1, spunta 5,35:1 e 11,62:1 (chiaro e scuro).
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).
