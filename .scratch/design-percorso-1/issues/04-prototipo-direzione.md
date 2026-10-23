# Direzione del percorso 1

Type: prototype
Status: resolved
Blocked by: 01, 03
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Quale direzione di design sceglie l'utente per il percorso 1, guardando direzioni **davvero diverse** sulle stesse schermate e con gli stessi dati inventati?

Prototipo usa e getta (skill `prototype`, ramo UI), con un selettore fra le direzioni (tre è il punto di partenza; il numero si conferma con l'utente). Ogni direzione cambia un asse vero ([docs/rules/WORKFLOW.md](../../../docs/rules/WORKFLOW.md)): struttura e navigazione, gerarchia, densità; e porta la sua proposta d'identità (colori, caratteri, icone), in chiaro e in scuro: il tema segue il dispositivo e lo scuro si mostra per primo ([DESIGN.md](../../../DESIGN.md), «Punti fermi del percorso 1», 23/10/2026). Tutte restano dentro le Apple Human Interface Guidelines lette nella [ricerca](01-ricerca-hig-web.md) e rispettano i punti fermi di [Cosa vede per primo ciascuno](03-cosa-vede-per-primo.md).

Schermate campione, su telefono e desktop: la casa vista dal proprietario con il canone del mese e la consegna; la stessa vista dall'inquilino, con dove e quanto pagare e le ricevute; il lavoro in coda dell'operatore e la registrazione di un incasso al banco; una situazione difficile (contestazione o consegna in ritardo); un'email di servizio. Solo dati inventati, importi nel formato «9.876,54 €».

Il prototipo si mostra all'utente come pagina privata da aprire su telefono e desktop; non entra nel repository. Nel ticket restano domanda, direzioni mostrate in breve, scelta e motivo; la direzione scelta va in [DESIGN.md](../../../DESIGN.md) con data e motivo. L'utente può scegliere una direzione, combinarne due con una regola chiara o chiederne altre.

## Risposta (Answer)

**Direzione scelta dall'utente il 23/10/2026: «Terracotta»**, nella versione del terzo giro, dopo tre giri di prototipo (dettaglio sotto «Commenti»). Regole in [DESIGN.md](../../../DESIGN.md), «Direzione del percorso 1».
- *Organizzazione:* barra laterale sul desktop dentro un grande pannello, schede in basso sul telefono; per l'operatore elenco e dettaglio.
- *Aspetto:* fondo neutro caldo, pannello bianco e ordinato. In cima alla pagina della casa c'è la sua illustrazione in grande, come in un annuncio, con le caratteristiche in etichette e la cosa da fare con un solo pulsante arancio a pillola. I fatti stanno in riquadri con icone arancio; carattere Manrope.
- *Scuro:* neri e grigi neutri, con l'arancio solo come accento.
- *Motivo:* è la versione che l'utente preferisce fra tre atmosfere ispirate ai suoi riferimenti: è gradevole e attira l'attenzione restando ordinata e professionale.
- *Due decisioni prese lungo la strada:* **il chiaro in vetrina** al posto dello scuro, un cambio del punto fermo del 23/10 portato come conflitto, e **la casa illustrata**, non fotografata, senza cambiare la specifica.
- *Scartate:* le direzioni del primo giro (A · Schede, B · Pagina casa, C · Elenco e dettaglio), funzionali ma non belle; «Luce calda» (d'impatto, ma con titoli troppo giocosi nel secondo giro) e «Cielo» (bella, ma con un riquadro troppo giocoso nel secondo giro), riviste nel terzo giro e non scelte.
- *Prototipo:* usa e getta, fuori dal repository. È stato mostrato come pagina privata ed è rimasto nella cartella temporanea della sessione, senza branch di prova (regola del progetto: niente branch remoti oltre a quello di lavoro).

## Commenti (Comments)

**23/10/2026, primo giro (skill `prototype`, ramo UI; `grilling` per le scelte).**
- Domande prima di costruire, una alla volta. *Quante direzioni:* tre (consigliato; scartate due, rischio di estremi, e quattro, differenze più sottili). *Su cosa differiscono:* ciascuna un modo diverso di organizzare il servizio fra i tre compatibili con le HIG ([ricerca](../../../docs/ricerca/hig-web.md) §16), con densità e identità proprie (consigliato; scartate «stessa organizzazione» e «solo l'aspetto»).
- Mostrato come pagina privata, sorgente nella cartella temporanea della sessione, controllato prima nel browser (telefono 390 px e desktop 1366 px, scuro e chiaro, nessuno scorrimento orizzontale, nessun errore). Sei schermate: proprietario, inquilino, coda dell'operatore, incasso al banco, consegna in ritardo, email «canone pagato».
  - *A · Schede:* schede in basso e barra laterale; densità media; caratteri di sistema; accento azzurro.
  - *B · Pagina casa:* una frase sul mese, ricerca in vista, dettagli in fila; poca informazione, testo grande, titoli in Literata; accento salvia.
  - *C · Elenco e dettaglio:* elenco e dettaglio affiancati sul desktop, in fila sul telefono; densità alta, IBM Plex Sans; accento indaco.
- Raccomandazione dell'agente: B per proprietari e inquilini, C per l'operatore, con un'identità sola.
- **Risposta dell'utente:** nessuna convince, soprattutto per l'estetica. Sembrano funzionali; l'utente vuole qualcosa di più gradevole e bello, che attiri l'attenzione anche di chi ha poco interesse: facile **e** bello da vedere. C può andare per l'operatore, ma va migliorata. Riferimenti visivi in arrivo dall'utente (foto). Si rifà il giro.

**23/10/2026, riferimenti dell'utente e domande per il secondo giro.**
- L'utente ha mandato tre immagini di interfacce altrui come riferimento d'atmosfera, non da copiare: un pannello traslucido su un tramonto con riquadro dorato e titoli con grazie; un'app chiara su sfondo azzurro-lilla con illustrazione ed etichette sospese; una scheda immobiliare chiara con accento arancio e immagini della casa. Hanno in comune un momento visivo in cima, la casa che si vede, un fondo d'atmosfera, molta aria e caratteri curati.
- *Vetrina:* **il chiaro in vetrina** (consigliato), perché le immagini scelte sono chiare. È un cambio del punto fermo del 23/10 («lo scuro si mostra per primo»), segnalato come conflitto e deciso dall'utente. Scartati «lo scuro resta vetrina» e «chiaro e scuro affiancati». Da registrare in DESIGN.md alla chiusura.
- *Volto della casa:* **illustrazioni** (consigliato): un disegno per ogni casa, senza cambiare la specifica, senza lavoro in più per ƎE e senza mostrare interni. Scartate «foto della facciata», che avrebbero cambiato §10.2 e §12, e «solo sfumature».
- *Secondo giro:* **tre atmosfere** (consigliato): «Luce calda», «Cielo» e «Terracotta», sulla stessa organizzazione (barra laterale sul desktop, schede in basso sul telefono); per l'operatore elenco e dettaglio, rifinito nella stessa atmosfera. Scartate «due atmosfere» e «un'atmosfera, tre organizzazioni».

**23/10/2026, secondo giro mostrato** (pagina privata, sorgente nella cartella temporanea della sessione; controllato nel browser su telefono e desktop, in chiaro e in scuro, senza scorrimento orizzontale né errori). Tre atmosfere sulla stessa organizzazione, con le case illustrate (facciate con i portici, generate per ogni casa):
- *Luce calda:* tramonto, pannello traslucido, riquadro dorato, titoli Instrument Serif.
- *Cielo:* azzurro e lilla, casa disegnata a linea su una tessera inclinata, etichette sospese, Figtree.
- *Terracotta:* fondo neutro e pannello bianco, casa grande come in un annuncio, fatti con icone arancio, Manrope.

**Risposta dell'utente:** preferisce **Terracotta**, ma vuole i pulsanti ben arrotondati delle altre due e non vuole lo scuro dai toni arancio scuro. *Cielo* è molto bella, ma il riquadro in cima è troppo giocoso: deve restare professionale. *Luce calda* è molto d'impatto, ma il carattere dei titoli è troppo giocoso. Chiede di rifare tutte e tre migliorate e di riconfrontarle.

**23/10/2026, terzo giro mostrato** (stessa pagina privata, aggiornata; stessi controlli nel browser, superati):
- *Luce calda:* titoli in Source Serif 4, un carattere con grazie classico e sobrio, senza corsivo; il nome Connetto nei caratteri di sistema.
- *Cielo:* niente quadretti né inclinazioni; la casa sta in una cornice dritta e gli stati del mese in etichette sobrie con icona colorata.
- *Terracotta:* tutti i pulsanti a pillola; lo scuro su neri e grigi neutri, con l'arancio solo come accento e la facciata di sera con le finestre accese.

**23/10/2026, chiusura.** Aggiunto alla pagina un tasto per nascondere i comandi del prototipo, che sul telefono occupavano troppo spazio (richiesta dell'utente). **Scelta dell'utente: Terracotta.** Registrata in DESIGN.md con data e motivo; la mappa passa ai ticket delle schermate per ruolo.
