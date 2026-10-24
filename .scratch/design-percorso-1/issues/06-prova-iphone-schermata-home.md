# Prova su iPhone: la piattaforma aggiunta alla schermata Home

Type: task
Status: claimed
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come si comporta davvero una pagina web aggiunta alla schermata Home di un iPhone con iOS 26 o 27? La [ricerca sulle HIG per il web](01-ricerca-hig-web.md) non ha trovato fonti primarie su questi punti (docs/ricerca/hig-web.md, §17):
- gesto indietro dal bordo nella web app;
- barra di stato e colore della parte alta (`theme-color`, `apple-mobile-web-app-status-bar-style`);
- una barra fissa in basso, in Safari e nella web app, con l'area sicura;
- «Testo più grande» di iOS sul testo della pagina;
- movimento ridotto e trasparenza ridotta;
- il codice ricevuto via SMS proposto sopra la tastiera.

Compito con l'utente (HITL): l'agente prepara una pagina di prova usa e getta, pubblicata come pagina privata con dati inventati, e un elenco di controlli da spuntare. L'utente la apre in Safari, la aggiunge alla schermata Home e riporta cosa vede, con la versione di iOS. Per il codice via SMS non si manda un SMS vero: si prova solo il campo, salvo autorizzazione dell'utente. L'esito serve alla rifinitura sul telefono (skill `mobile-native`) e alle schermate per ruolo; non blocca la scelta della direzione.

## Commenti (Comments)

**24/10/2026, rivendicato e pagina di prova pronta** (skill `mobile-native`; `grilling` per le scelte che ne usciranno). Letti con lo strumento Artifact il prototipo dell'accesso (versione 5) e quello della rifinitura (versione 2), con le loro immagini.

*Pagina di prova:* https://claude.ai/artifact/5ousKXbFpFsGqd5mrtcH7t (privata, usa e getta, solo dati inventati; il sorgente sta nella cartella temporanea della sessione, fuori dal repository). Contiene:
- la pagina d'accesso uguale ai riferimenti, con il campo «Email o numero di cellulare» e poi il campo del codice (`autocomplete="one-time-code"`, tastiera numerica, 16 px o più). Non parte nessun messaggio: si scrivono 6 cifre qualsiasi;
- il benvenuto animato: la tessera si distende dalla posa, il nome si incide, la tessera vola nella scheda «Tessera»; con il movimento ridotto solo una dissolvenza;
- la casa dell'inquilino nella «via di mezzo», con le cinque schede fisse in basso sopra l'area sicura e la riga «Metti Connetto sulla schermata Home»;
- viste di secondo livello con il loro «Indietro»: la ricevuta di un mese (dalla casa o da Ricevute), la guida alla schermata Home e la diagnosi (dal Profilo). Ogni vista di secondo livello entra nella cronologia del browser, così il gesto dal bordo si può provare;
- una **diagnosi** che misura da sola il telefono e si copia con un tocco: versione di iOS, se la pagina è dentro una cornice, se è aperta dalla schermata Home, area sicura, tema, movimento ridotto, trasparenza ridotta, contrasto, misura del testo di sistema (per «Testo più grande»), quanto copre la tastiera, come è arrivato il codice nel campo, gli ultimi spostamenti con il tipo di ritorno (Indietro della pagina o gesto del browser);
- un pulsante giallo «Prova» per saltare a ogni schermata.
- Accorgimenti della skill `mobile-native`: `viewport-fit=cover` con i margini `env(safe-area-inset-*)`, `theme-color` per chiaro e scuro, nessun lampo grigio al tocco, `touch-action: manipulation`, campi a 16 px, effetti al passaggio del mouse solo dove c'è un mouse, testo dei comandi non selezionabile.

*Limite da tenere presente (osservazione sul contratto delle pagine Artifact, non ancora misurata sul telefono):* la pagina privata gira dentro una cornice di claude.ai. Barra di stato, colore in alto, aggiunta alla schermata Home e gesto dal bordo possono quindi dipendere da claude.ai e non dalla pagina. La diagnosi lo dice («Pagina dentro una cornice»). Sono invece della pagina: campo del codice e tastiera, «Testo più grande», movimento e trasparenza ridotti, animazione del benvenuto, posizione delle schede rispetto al fondo dello schermo dentro la cornice. Se i punti legati a claude.ai non bastano, serve un indirizzo tutto della pagina: è un servizio esterno, quindi solo con l'autorizzazione dell'utente (da decidere dopo l'esito).

*Guida per la schermata Home:* passi presi dal manuale Apple in italiano, letto il 24/10/2026 ([ricerca](../../../docs/ricerca/hig-web.md), §15, «Passi in italiano»).

*Verifiche prima della consegna:*
- Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, con 11 schermate: 154 combinazioni, ciascuna con la pagina ricaricata e la schermata aperta verificata. Nessun elemento fuori dal suo riquadro o dalla finestra, nessuno scorrimento orizzontale, nessun errore; le cinque schede ci sono e stanno in fondo sotto i 860 px, spariscono sul computer; ogni vista di secondo livello ha il suo «Indietro»; importi nel formato «1.275,00 €»; campi a 16 px o più.
- Il controllo, provato su una copia rotta apposta, trova il pulsante troppo largo, lo scorrimento laterale, la schermata sbagliata e l'«Indietro» mancante.
- Percorsi a 390, 1024 e 1366 px, con e senza movimento ridotto: email → codice (il fuoco va nel campo; senza 6 cifre compare l'errore) → benvenuto → la tessera vola nella scheda, che lampeggia → casa. Ricevuta → ritorno del browser → casa; Ricevuta → «Indietro» → casa; Profilo → guida → «Indietro» → Profilo. Fotogrammi del volo guardati uno per uno: corretto un difetto (titolo e frase del benvenuto visibili durante il volo).
- Nessuna di queste è una prova su iPhone: sono le cose che il browser del computer non può mostrare a essere l'oggetto del ticket.

*Elenco dei controlli dato all'utente* (uno per riga, da spuntare in Safari e poi dalla schermata Home): versione di iOS; il campo email non ingrandisce la pagina; tastiera numerica e codice proposto sopra la tastiera; animazione del benvenuto fluida; schede sopra la linea in fondo e non coperte dalla barra di Safari; colore della fascia con l'ora e ora leggibile; gesto dal bordo nella ricevuta e «‹ Casa»; «Testo più grande» al massimo (riga A e resto della pagina); «Riduci movimento» (solo dissolvenza); «Riduci trasparenza» (schede piene); tema scuro; diagnosi copiata, in Safari e dalla schermata Home.

*Esito:* in attesa del riscontro completo, con la versione di iOS e il testo della diagnosi.

**24/10/2026, primo riscontro dell'utente** (iPhone, Safari, con una foto dello schermo della casa; versione di iOS non ancora indicata). «Sembra andare bene.» Un problema: la barra delle schede in basso non si vede, perché la pagina risulta troppo lunga.
- *Osservazione dalla foto:* sotto la barra di stato c'è la barra di claude.ai («Chatta», «Condividi»), quindi la pagina è dentro la cornice. La fascia in alto ha il colore di claude.ai, non quello della pagina. In fondo alla foto si vede appena il bordo superiore della barra delle schede, tagliato dal fondo dello schermo.
- *Inferenza dell'agente, da confermare con la diagnosi:* dentro la cornice la «finestra» della pagina è più alta della parte visibile. Le schede sono fissate al fondo di quella finestra e finiscono fuori dallo schermo. La misura «Finestra» della diagnosi, confrontata con «Schermo», lo conferma o lo smentisce. Nella piattaforma vera, aperta senza cornice, la finestra coincide con la parte visibile: questo problema non dice ancora nulla sulla piattaforma.
- Posta all'utente la scelta su cosa fare della barra (prima correzione), con la raccomandazione di non toccare la pagina e di chiudere la prova con gli altri controlli.

**24/10/2026, prima scelta dell'utente: A, la pagina resta com'è.** La prova si chiude con i controlli che dipendono dalla pagina: campo del codice e tastiera, benvenuto animato, «Indietro», «Testo più grande», movimento ridotto e diagnosi. Quattro punti dipendono dalla cornice di claude.ai: barra delle schede sopra l'area sicura, colore in alto, aggiunta alla schermata Home e gesto dal bordo. Restano **da verificare sulla prima versione della piattaforma, con un indirizzo suo**.
- *Scartate:* «B», ritoccare la pagina per adattarla alla cornice, perché misurerebbe claude.ai e non la piattaforma; «C», un indirizzo temporaneo su un servizio esterno, perché richiede un account esterno e rende la pagina raggiungibile da chiunque abbia l'indirizzo.
- *Motivo:* nessun costo e nessun servizio esterno ora. Le regole di DESIGN.md non cambiano, cambia solo quando si verificano.
- Si aspettano gli altri controlli dell'utente, con la versione di iOS e la diagnosi.

