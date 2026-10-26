# Pacchetto per il controllo B

Type: grilling
Status: claimed
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Cosa guarda l'utente per confermare la direzione di design insieme all'architettura, al controllo B ([docs/METODO.md](../../../docs/METODO.md), passi 6 e 7)?
- quali schermate e situazioni del percorso 1 si mostrano, per operatore di ƎE, proprietario e inquilino, su telefono e desktop;
- l'elenco dei componenti e dei token che servono davvero al percorso, da registrare in [DESIGN.md](../../../DESIGN.md), «Componenti e token»;
- cosa resta aperto e aspetta pareri o persone: collaboratore di ƎE, pareri su marchio, legale, fiscale e privacy, tessere;
- in che forma l'utente vede il pacchetto (per esempio una pagina privata che raccoglie i prototipi approvati).

Contesto: voce «Pacchetto per il controllo B» del «Non ancora specificato» della mappa, diventata ticket il 26/10/2026 su richiesta dell'utente. Assorbe la parte della voce «Componenti e token» che restava aperta (l'elenco per il controllo B). La promessa è la riga «Controllo A» di [PRODUCT.md](../../../PRODUCT.md) §12; le misure del pilota in §13.

Come si lavora (HITL): skill `grilling` e `domain-modeling`; le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata e, quando serve, un confronto affiancato in un'immagine. Le regole decise vanno in DESIGN.md con data e motivo. Solo dati inventati.

## Commenti (Comments)

**26/10/2026, scelte dell'utente, una alla volta.**
1. *Forma del pacchetto:* **A, una pagina nuova «Connetto, percorso 1»** (consigliata), che ridisegna le schermate scelte con le regole di oggi, tutte nello stesso stato, con selettore dei ruoli, telefono e computer, chiaro e scuro, e accanto a ogni schermata le regole che applica. Le 12 pagine di prova restano come archivio. La pagina si costruisce in un ticket successivo. *Scartate:* B, una pagina indice con i link alle prove e l'elenco di cosa è cambiato dopo (le prime prove mostrano testi e regole superati: le differenze andrebbero ricostruite a mente); C, solo un documento con alcune immagini (non si prova sul telefono). *Motivo:* al controllo B si conferma una cosa sola, coerente, che serve anche da riferimento a chi costruirà.
2. *Quante schermate:* **A, tutte le schermate decise** (consigliata), circa 45 (operatore 11, proprietario 10, inquilino 11, accesso e situazioni comuni 9 gruppi, le 2 ricevute stampate, la gestione delle foto), con le varianti e i casi difficili dietro un interruttore «Situazioni». Email, SMS e scritta del nome compaiono come posti segnati «in attesa del parere». La costruzione si divide in due sessioni: prima operatore e ricevute, poi clienti, accesso e situazioni comuni. *Scartata:* B, circa 15 momenti chiave (le altre 30 schermate resterebbero confermate solo sulle prove vecchie). *Motivo:* la meta della mappa è ogni schermata e situazione del percorso 1; una pagina parziale lascerebbe due fonti in disaccordo.
3. *Come ci si muove nella pagina:* **A, il mese di una casa con l'indice per ruolo** (consigliata). Si segue una casa inventata per circa 14 tappe, dall'attivazione alla fine della locazione; a ogni tappa le schermate di chi è coinvolto, affiancate sul computer e una sotto l'altra sul telefono; un tocco apre la schermata grande. Un menu «Per ruolo» porta a ogni schermata, anche a quelle fuori dalla storia (profilo, disdetta, «Oggi»). *Scartata:* B, per ruolo come le prove di finora (per vedere l'effetto di un'azione sugli altri bisogna cambiare ruolo e cercare). *Motivo:* il controllo B conferma design e architettura insieme, e l'architettura deve reggere il passaggio dei fatti del denaro fra le persone (PRODUCT.md §7). Confronto affiancato mostrato in un'immagine (schizzo con dati inventati, nella cartella temporanea della sessione).

**26/10/2026, bozza dell'agente per la domanda 4 (componenti e token).** Ricavata da DESIGN.md e dal foglio di stile dell'ultima prova approvata (Foto e illustrazione della casa, letta con lo strumento Artifact). È un'osservazione sulle prove, non ancora una regola.
- *Valori usati nelle prove ma non scritti in DESIGN.md:* verde degli stati #1f7a45 su #eaf5ee (scuro #86e0a8 su #12261a); ambra #8a4f00 su #fdf3e2 (scuro #ffbf5a su #2a2112); fondo dei pulsanti secondari #f3efea (scuro #242424); fondo tenue dei riquadri interni #faf6f3 (scuro #1b1b1b); linea leggera fra le righe #f3efea (scuro #232323), linea dello scuro #2c2c2c.
- *Grandezze del testo:* nell'ultima prova ce ne sono dodici (12, 12,5, 13, 13,5, 14, 14,5, 15, 15,5, 16, 17, 19, 28 e 42 px); i pesi sono 450, 550–650, 560 e 620. Gli angoli sono di nove misure (6–34 px, più la pillola).
- *Componenti che il percorso usa davvero* (circa 35), raggruppati:
  - telaio: pannello con barra laterale; intestazione con schede in basso; elenco e dettaglio dell'operatore; «Indietro»;
  - casa: riquadro in cima; immagine della casa (foto o disegno, etichetta dell'indirizzo, pulsante delle foto); miniatura (56, 44 e 34 px); visore; griglia delle foto; disegno nei tre tipi;
  - testi: occhiello di rame; titolo del mese; importo grande;
  - elenchi: titolo di sezione; riga nome e valore; riga che porta altrove; riga della coda; scheda della casa e interruttore schede/righe; «Da fare»;
  - azioni: pulsante principale, secondario e a testo; pulsante spento con il perché; attesa nel pulsante; «Copia»;
  - stati: etichetta di stato (parola e icona); mesi a pillola con l'anno; linea del tempo del mese; conferma al suo posto con «Annulla»; errore al suo posto; fascia senza rete e «Di nuovo in linea»; segnaposto che respira; vuoto;
  - moduli: campo; campo del codice di 6 cifre; caricamento di un file con anteprima e barra; spunta;
  - fogli: foglio dal basso sul telefono e finestra sul computer;
  - tessera: tessera di rame (fronte, retro, targhetta); tessera piccola nella barra laterale; tessera arancione di «Al banco»;
  - marchio: simbolo C–Legame; logo di ƎE (nelle frasi e `ee.svg`);
  - operatore: tre numeri del giorno; avanzamento «6 di 10»; anteprima della ricevuta accanto al modulo;
  - accesso: pagina con la stanza;
  - documenti: ricevuta A4 e PDF.

4. *Come si registrano componenti e token:* **A, tabelle brevi più un elenco di nomi** (consigliata). Una tabella dei token in chiaro e in scuro, con i valori mancanti presi dall'ultima prova; grandezze del testo e angoli ridotti a una scala corta; i circa 35 componenti, una riga ciascuno con il rimando alla sezione che li descrive. La pagina del pacchetto usa esattamente questi valori e lì si rimisurano i contrasti. *Scartate:* B, una scheda completa per componente (ripete le sezioni: un fatto in due posti); C, solo i nomi (verde, ambra e scala resterebbero solo nelle prove). *Motivo:* fissa ciò che manca senza duplicare le regole; per l'architettura i token sono una lista sola.
