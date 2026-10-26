# Stato del progetto

## Punto di ripresa (26 ottobre 2026, logo di ƎE disegnato)
**Fase: design del percorso 1** ([docs/METODO.md](docs/METODO.md), passo 6), nella mappa [Design del percorso 1](.scratch/design-percorso-1/map.md). Approvati:
- la direzione **«Terracotta»**, con il chiaro in vetrina;
- lo spazio dell'operatore;
- le schermate del proprietario e quelle dell'inquilino (le ricevute dell'inquilino a mesi a pillola sono provvisorie);
- **accesso, tessera digitale e situazioni comuni** (23/10): accesso con un codice, pagina d'accesso con la tessera di rame, benvenuto animato, scheda «Tessera», disdetta da soli;
- dal 24/10 la **rifinitura estetica delle schermate interne dei clienti**, la «via di mezzo». Pannello bianco, un solo riquadro in cima con la casa ridisegnata e i dettagli del mese, sotto elenchi puliti; caratteri più leggeri e il rame come accento;
- dal 25/10 i **testi dell'interfaccia** ([DESIGN.md](DESIGN.md), «Testi dell'interfaccia (percorso 1)»): «in agenzia», «tu» anche nei titoli, frasi senza genere, «entro» per il canone, «Spese», titolo «Mese: il fatto»;
- dal 26/10 i **dati limite e l'accessibilità** ([DESIGN.md](DESIGN.md), «Dati limite e accessibilità (percorso 1)»): più mesi aperti con elenco e totale, targhetta satinata sulla tessera, icone nei mesi a pillola, contorno dei campi a 3:1, testo che segue il telefono e altre cinque correzioni.
- dal 26/10 anche le **interazioni e gli stati** ([DESIGN.md](DESIGN.md), «Interazioni e stati (percorso 1)»): conferma al suo posto, «Annulla» per 8 secondi sul «Ricevuto», pulsanti spenti con il perché, movimento ridotto fatto solo di dissolvenze, «Di nuovo in linea» per 4 secondi.
- dal 26/10, dopo la [ricerca sulle licenze](docs/ricerca/licenze-grafiche.md), anche **carattere, icone, logo di ƎE e immagini** ([DESIGN.md](DESIGN.md), «Componenti e token»): Manrope dal nostro sito, icone Lucide a tratto 1,6, «ƎE» come disegno ovunque nelle schermate (lo ridisegniamo noi), immagini ChatGPT solo nei prototipi fino al parere.
- dal 26/10 il **disegno del logo di ƎE** ([DESIGN.md](DESIGN.md), «Identità»; [assets/marchio/](assets/marchio/README.md)): la «E» di Manrope ripetuta e specchiata. Nelle frasi due «E» del testo, la prima girata; da solo il disegno fisso `ee.svg` al peso 700, inciso sulla tessera. Lo screen reader dice «Enrico Erca». Approvato dall'utente insieme al collaboratore di ƎE.

Dal 25/10 è decisa anche la **tessera fisica del pilota** ([PRODUCT.md](PRODUCT.md) §12): plastica con lamina arancione, chip DESFire EV3 spento, solo un codice suo, consegna in agenzia.

La voce è al **«tu»** anche per i clienti ([DESIGN.md](DESIGN.md)).

Prossimi passi:
- **Prossima sessione, proposta:** come si genera l'illustrazione di ogni casa, oppure il pacchetto per il controllo B (mappa, «Non ancora specificato»). I messaggi sono in START_HERE.md.
- **Parere unico prima del lancio:** al parere sul nome Connetto si aggiungono sei domande su immagini ChatGPT, AI Act, scritta del nome e logo di ƎE ([ticket](.scratch/design-percorso-1/issues/08-parere-nome-connetto.md)). Le condizioni OpenAI per Plus/Italia e le policy sono state lette il 26/10/2026 ([ricerca](docs/ricerca/licenze-grafiche.md), §3, con date e distinzione delle Usage Policies efficaci dal 20/11/2026). Restano la ricerca per immagini simili alla stanza e alla tessera, il parere su diritti, trasparenza e modifiche dei segnali di provenienza, e il ricontrollo delle policy prima del lancio. Immagini solo nei prototipi fino al parere, come già deciso.
- **Preventivo delle tessere:** la richiesta è pronta nel ticket [Ricerca: tessere fisiche](.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md); la manda l'utente o ƎE. Con le risposte si decidono quantità, lamina e campione.
- **Collaboratore di ƎE:** ticket rivendicato, con cinque domande pronte; si aspettano le risposte. L'utente incontra il collaboratore la sera del 25/10/2026: porta le cinque domande e i sei chiarimenti di ƎE, e chiede una piantina per la vista 3D.
- **Prova su iPhone:** ticket rivendicato, pagina di prova pubblicata (https://claude.ai/artifact/5ousKXbFpFsGqd5mrtcH7t) con l'elenco dei controlli nel ticket. Primo riscontro: «sembra andare bene», ma la barra delle schede finisce sotto lo schermo dentro la cornice di claude.ai. Scelta dell'utente (A): la pagina resta com'è. Schede sopra l'area sicura, colore in alto, schermata Home e gesto dal bordo si verificano sulla prima versione della piattaforma. In pausa dal 24/10/2026 per scelta dell'utente («ci penseremo poi»): restano gli altri controlli, la versione di iOS e la diagnosi.
- **Vista 3D indicativa:**
  - due ricerche chiuse, [come si ricava](docs/ricerca/vista-3d.md) e [come si rende](docs/ricerca/vista-3d-resa.md);
  - [prova con piante inventate](.scratch/controllo-a/issues/15-prova-vista-3d.md) chiusa il 25/10/2026 dopo tre versioni (la terza: https://claude.ai/artifact/C2aRNbV3h59zmdQKs8z93q). Stile isometrico illustrato, in DESIGN.md; arredi d'esempio con l'interruttore. Le decisioni sono in PRODUCT.md §12;
  - esito buono, ma la vista entra nella prima versione solo dopo la [prova su una planimetria vera dei fondatori](.scratch/controllo-a/issues/17-prova-planimetria-fondatori.md), che aspetta il caricamento con il loro consenso scritto. In pausa dal 25/10/2026: l'utente chiede una piantina al collaboratore di ƎE; deve essere di una casa dei fondatori o del collaboratore, non di un cliente. Il messaggio è in START_HERE.md.
- Facoltativo, solo se l'utente lo chiede: rivedere lo spazio dell'operatore con le regole della rifinitura (mappa, «Non ancora specificato»).
- Promemoria dell'utente (23/10/2026): Animate UI e Watermelon UI si valutano all'architettura, in [ARCHITECTURE.md](ARCHITECTURE.md), «Da valutare al passo 7»; nessuna installazione prima.
- Dopo: email e SMS (aspettano il parere sul nome), ricevute stampate, componenti, pacchetto per il controllo B (mappa, «Non ancora specificato»). Il totem in agenzia, con wallet e pagamenti, resta dopo la prima versione.

**Prototipi pubblicati** (pagine private dell'utente, usa e getta). Il sorgente sta nella cartella temporanea della sessione e si perde; una sessione nuova può leggerli con lo strumento Artifact, azione «read». Servono come riferimento di stile e non entrano nel repository.
- Direzioni, primo giro: https://claude.ai/artifact/3qFHoy8XyHydtvetDPosmU
- Atmosfere, secondo e terzo giro (Terracotta scelta): https://claude.ai/artifact/DpHYhxDoru6CeV2i14Ztmg
- Spazio dell'operatore: https://claude.ai/artifact/8uYkEqTXrp27KWmc698JK9
- Schermate del proprietario: https://claude.ai/artifact/4iSZ4Mpb8k691WVQwnrUVR
- Schermate dell'inquilino: https://claude.ai/artifact/PB8wRY5NZT2jgYndnJLn2v
- Accesso, tessera e situazioni comuni (versione 5): https://claude.ai/artifact/3LkcGCmp2P4SNpVAFbP92s. Le immagini della stanza e della tessera, generate dall'utente con ChatGPT, sono pubblicate con la pagina in WebP; gli originali sono nelle cartelle Drive dell'utente.
- Prova su iPhone (versione 1): https://claude.ai/artifact/5ousKXbFpFsGqd5mrtcH7t. Accesso con il codice, benvenuto animato, casa rifinita con le cinque schede, viste di secondo livello con «Indietro», diagnosi del telefono.
- Rifinitura delle case di inquilino e proprietario (versione 2, «via di mezzo» approvata): https://claude.ai/artifact/9CQ4BtLZxYXJRBKiEfpZGj. Con «Prima», i due «dopo» scartati e la «via di mezzo»; il livello delle ombre di foglie è ricavato dalla stanza dell'accesso.
- Titolo del mese e date, «Prima / Dopo» (25/10/2026, «Dopo» scelto): https://claude.ai/artifact/2A1w9suz98aQk9YDkTCsNv. I prototipi precedenti mostrano ancora i testi di prima: valgono le regole di DESIGN.md.
- Dati limite e accessibilità (26/10/2026): https://claude.ai/artifact/RtwaFRWDmVNnrr5XQnJTh9. Dieci schermate con «Dati d'esempio / Caso peggiore» e «Com'è / Proposta / Alternativa»; con «Proposta» si vedono le correzioni decise.
- Interazioni e stati (26/10/2026, versione 2): https://claude.ai/artifact/MvrdhkTegSQ5eUUGC4XzeY. Otto momenti che cambiano lo stato, con le varianti, tre livelli di movimento e il registro di cosa sente lo screen reader; all'apertura mostra le scelte fatte.
- Logo di ƎE (26/10/2026, versione 2): https://claude.ai/artifact/GRs9QZVLmBR7q6yx5VS2xQ. Tre metodi dietro il selettore, pesi, distanze, nome letto dallo screen reader, tessera e barra laterale in chiaro e in scuro; all'apertura mostra le scelte fatte.

Prodotto: **Connetto**, nome di lavoro in attesa del parere sul marchio. Non c'è codice applicativo; architettura e stack non sono decisi.

## Fatto (26 ottobre 2026, logo di ƎE)
- Ticket [Logo di ƎE ridisegnato in SVG](.scratch/design-percorso-1/issues/18-logo-ee-svg.md) rivendicato e chiuso con la skill `prototype` (ramo UI). Precisazione dell'utente: niente foto, il logo è «ƎE», una E specchiata seguita da una E normale. Annotata la conferma del collaboratore di ƎE al ridisegno (riferita dall'utente).
- Manrope 4.505 scaricato da Google Fonts solo nella sessione, per leggere la «E» con fontTools: è fatta di rettangoli e le misure cambiano in modo lineare col peso. Il file del carattere non entra nel repository.
- Prototipo con tre metodi (SVG fisso, E specchiata nel testo, misto) e i comandi per peso, distanza, lettura, tema e testo. Verificato in Chromium:
  - 60 combinazioni a 360, 390, 768, 1024 e 1366 px, in chiaro e in scuro, con il testo al 100 e al 200%, senza scorrimento orizzontale né errori, dopo una correzione della barra laterale;
  - nell'albero di accessibilità la frase si legge intera, per esempio «Chiama Enrico Erca».
- Scelte dell'utente, una alla volta: metodo misto, peso 700, distanza come nel testo, «Enrico Erca» per lo screen reader (proposta dell'utente, rifinita), inciso sulla tessera. File `ee.svg` e regole in [assets/marchio/](assets/marchio/README.md); regola in [DESIGN.md](DESIGN.md), «Identità».
- Correzione: in una domanda l'agente ha detto «contrasto circa 5:1» per ƎE sul rame; misurato è fra 4,2:1 e 5,3:1. Per un logo WCAG non chiede un minimo, e resta sopra 3:1.
- Dopo la chiusura: l'utente ha confermato il disegno insieme al collaboratore di ƎE, che lo approva per l'agenzia (riferito dall'utente). Tolte le note «va mostrato all'agenzia».
- Non fatte: prove con screen reader veri e su iPhone (con la prima versione); revisione OCR (non c'è codice applicativo e il programma `ocr` non è nell'ambiente).

## Fatto (26 ottobre 2026, licenze di carattere, icone e immagini)
- Ticket [Ricerca: licenze di icone, carattere e immagini](.scratch/design-percorso-1/issues/17-ricerca-licenze-grafiche.md) aperto dal «Non ancora specificato» della mappa, rivendicato e chiuso. Ricerca svolta da un agente in background con la skill `research`, in [docs/ricerca/licenze-grafiche.md](docs/ricerca/licenze-grafiche.md); stile delle icone del prototipo letto con lo strumento Artifact.
- Controllo a campione della sessione principale, tutto confermato:
  - file della licenza di Manrope e file del carattere riletto: versione 4.505, «Ǝ» assente, `tnum` presente;
  - licenza di Lucide;
  - AI Act, art. 50, sull'AI Act Service Desk della Commissione;
  - legge 132/2025, art. 25, in Gazzetta Ufficiale.
- **Non letto:** le condizioni e le policy di OpenAI rispondono 403 a ogni lettura automatica, anche alla sessione principale. Il §3.2–3.6 della ricerca viene dagli estratti del motore di ricerca ed è segnato «Da verificare». Nessun aggiramento dei controlli anti-bot.
- Cinque scelte dell'utente, una alla volta: Manrope dal nostro sito; icone Lucide; «ƎE» come disegno ovunque nelle schermate, ridisegnato da noi perché l'agenzia non ha più il file (lo ha confermato il collaboratore, riferisce l'utente); immagini ChatGPT solo nei prototipi fino al parere (piano usato: Plus); parere insieme a quello sul nome. Regole in [DESIGN.md](DESIGN.md); nuovo ticket [Logo di ƎE ridisegnato in SVG](.scratch/design-percorso-1/issues/18-logo-ee-svg.md); domande in più nel ticket del parere.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (26 ottobre 2026, interazioni e stati)
- Ticket [Interazioni e stati del percorso 1](.scratch/design-percorso-1/issues/16-interazioni-stati.md) aperto dal «Non ancora specificato» della mappa, rivendicato e chiuso, con le skill `prototype` (ramo UI), `emil-design-eng`, `apple-design` e `accessibility-audit`.
- Lette con lo strumento Artifact la pagina dei dati limite (con «Proposta») e la prova su iPhone. Pagina usa e getta, privata, solo dati inventati: https://claude.ai/artifact/MvrdhkTegSQ5eUUGC4XzeY.
  - Otto momenti: «Ricevuto», contabile inviata, incasso registrato, disdetta, pulsanti spenti, caricamento, errore ed esito incerto, ritorno della rete.
  - Movimento normale, ridotto con sole dissolvenze e ridotto fermo; un registro mostra annunci allo screen reader e spostamenti del fuoco.
- Verifiche nel Chromium disponibile, pagina ricaricata ogni volta:
  - 308 controlli: 8 momenti a 7 larghezze, in chiaro e in scuro, prima e dopo l'azione principale, più i due livelli di movimento ridotto a 390 e 1366 px;
  - nessuno scorrimento orizzontale, niente fuori dai riquadri, nessun testo tagliato, nessun errore; schermate guardate anche a occhio;
  - percorsi provati: secondo tocco ignorato, «Annulla» e invio dopo 8 secondi, esito incerto senza nuovo invio, Tab sui pulsanti spenti;
  - contrasti dei colori nuovi misurati con la formula WCAG, tutti sopra 4,5:1.
- Sei scelte dell'utente, una alla volta, tutte sull'opzione consigliata; l'ultima raccoglie otto dettagli tecnici. Regole in [DESIGN.md](DESIGN.md), nuova sezione «Interazioni e stati (percorso 1)». Regole segnate come cambiate: «Incasso al banco» (pulsante spento) e «Movimento» della rifinitura (movimento ridotto); rimandi in «Benvenuto», «Stati comuni» e «Interazioni e stati».
- Pagina di prova aggiornata alle scelte (versione 2) e ricontrollata.
- Errore dell'agente: in una domanda all'utente il nome «ƎE» è uscito come «E» per un carattere sbagliato; il senso non cambiava ed è annotato nel ticket.
- Non fatto: ascolto con screen reader veri (VoiceOver, NVDA) e prova del movimento su un iPhone vero. Vanno fatte sulla prima versione.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (26 ottobre 2026, dati limite e accessibilità)
- Ticket [Dati limite e accessibilità del percorso 1](.scratch/design-percorso-1/issues/15-dati-limite-accessibilita.md) aperto dal «Non ancora specificato» della mappa, rivendicato e chiuso, con le skill `break-ui`, `accessibility-audit` e `prototype`.
- Letti con lo strumento Artifact i prototipi della rifinitura, della prova su iPhone e dell'accesso. Pagina usa e getta, privata, solo dati inventati: https://claude.ai/artifact/RtwaFRWDmVNnrr5XQnJTh9.
  - Dieci schermate con i testi del 25/10/2026.
  - Caso peggiore: nomi lunghi e con accenti, email di 64 caratteri, 14 case, 9 cose da fare, 7 mesi arretrati per 77.777,70 €, anni dal 2019, 115 voci in coda, contanti oltre la soglia.
- Verifiche nel Chromium disponibile, pagina ricaricata e schermata verificata ogni volta:
  - 308 combinazioni (7 larghezze, chiaro e scuro, due insiemi di dati), più zoom al 200%, 320 px, spaziatura del testo di WCAG 1.4.12 e tastiera;
  - contrasti misurati sui pixel del fondo, comprese la tessera di rame e la stanza.
  - Trovati 11 problemi veri; i falsi allarmi sono scartati guardando le schermate e annotati nel ticket.
  - I più gravi:
    - l'inquilino con più mesi arretrati vedeva solo il mese più vecchio;
    - i dati incisi sulla tessera erano fra 2,2:1 e 3,4:1;
    - un nome lungo copriva la scritta «Connetto» della tessera;
    - il pulsante «Entra» spariva sotto la sfumatura con il nuovo messaggio d'errore;
    - lo stato dei mesi a pillola si vedeva solo dal colore.
- Dieci scelte dell'utente, una alla volta, tutte sull'opzione consigliata; l'ultima raccoglie otto piccole correzioni tecniche. Regole in [DESIGN.md](DESIGN.md), nuova sezione «Dati limite e accessibilità (percorso 1)». Le regole toccate sono segnate come cambiate: «Tessera digitale», «Mesi passati», «Lavoro in coda», «Contrasti misurati». Il testo che segue il telefono è anche in [ARCHITECTURE.md](ARCHITECTURE.md), «Cosa vincolerà la scelta».
- Controllo rifatto con le correzioni attive, sulle stesse combinazioni: restano solo i falsi allarmi già spiegati.
- Non fatto: prove con screen reader veri (VoiceOver, NVDA), su un iPhone vero e con persone. Vanno fatte sulla prima versione.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (25 ottobre 2026, testi dell'interfaccia e tessere fisiche)
- Ticket [Testi dell'interfaccia del percorso 1](.scratch/design-percorso-1/issues/14-testi-interfaccia.md) rivendicato e chiuso, con le skill `ux-writing`, `grilling` e `domain-modeling`.
  - Inventario: letti con lo strumento Artifact i cinque prototipi approvati; ogni schermata e variante aperta nel browser e il testo raccolto, con le etichette per lo screen reader (44 schermate). Dieci punti trovati, elencati nel ticket.
  - Nove scelte dell'utente, una alla volta, tutte sull'opzione consigliata: «in agenzia» invece di «al banco» per i clienti; frasi senza genere, con ruolo e saluti nella forma scelta dalla persona in agenzia; il servizio dà del «tu» anche nei titoli («Le tue case», «Chiedi il codice»); «entro» per il canone, «scadenza» solo per la locazione; «Spese» per gli oneri accessori; titolo del mese «Mese: il fatto» e date per intero, scelto dopo un confronto «Prima / Dopo» (https://claude.ai/artifact/2A1w9suz98aQk9YDkTCsNv); stati fissi della consegna con «Consegnata»; «Case dove abitavi»; «conferma della disdetta».
  - Correzioni dell'agente, elencate in DESIGN.md: «Ti aiutiamo» (prima persona), «dal ottobre 2026», «il conto finale lo fa ƎE» (non è nella specifica).
  - Registrato in [DESIGN.md](DESIGN.md), nuova sezione «Testi dell'interfaccia (percorso 1)», con i segni di cambio nelle righe toccate; [GLOSSARY.md](GLOSSARY.md): «Consegna» con gli stati, nuovi «Oneri accessori», «Contabile», «Ricevuta»; [PRODUCT.md](PRODUCT.md) §12: la forma con cui rivolgersi alla persona.
- Ticket [Ricerca: tessere fisiche](.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md) rivendicato; ricerca con la skill `research`, affidata a un agente in background: [docs/ricerca/tessere.md](docs/ricerca/tessere.md). Nessun ordine, preventivo, account o contatto con fornitori.
  - Controllo a campione sulle fonti originali (GCARD, Metaliccards, Posta Ordinaria, art. 59 del Codice del consumo): tutto confermato.
  - Decisioni dell'utente: tessera fisica nel pilota per proprietari e inquilini (consigliata); in plastica con **lamina metallica arancione**, «rame stampato assolutamente no» (era consigliato dall'agente); se la lamina costa troppo, altre soluzioni come la plastica a colore fisso. In PRODUCT.md §12.
  - Alla terza domanda (nome o solo codice) l'utente ha chiesto la funzione contactless fin da subito, per un futuro totem in agenzia aperto 24 ore su 24, e uno studio prima di cercare fornitori. Aperto il ticket [Ricerca: tessera contactless, wallet e totem in agenzia](.scratch/controllo-a/issues/18-ricerca-tessera-contactless-totem.md), con un agente in background. Conflitto segnalato all'utente: la tessera che apre i dati da sola e i pagamenti al totem toccano tre decisioni confermate (§5.6, T6, Controllo A); il chip da solo no.
  - Ricerca [contactless, wallet e totem](docs/ricerca/tessera-contactless.md), affidata a un secondo agente. Controllo a campione: NXP su MIFARE Classic, Apple sui pass NFC, foglio LIS Pay dei tabaccai confermati; il prezzo Carteplastiche della DESFire EV1 2K è incoerente nella pagina (310 € o 160 € per 100), annotato come da verificare.
  - Altre decisioni, una alla volta: chip contactless sicuro spento nel pilota; MIFARE DESFire EV3; niente chip a contatto né lettore che trattiene la tessera; come si paga al totem, secondo passaggio e wallet rimandati al totem; solo il codice, niente nome né ruolo, stampa del fornitore a lotti; un codice per tessera, diverso dalla digitale; niente spedizione nel pilota; quantità col preventivo. Tutte sull'opzione consigliata, salvo il materiale e due rinvii scelti dall'utente (come si paga al totem, quantità).
  - Due ticket chiusi; richiesta di preventivo pronta da copiare nel ticket 12. Aggiornati PRODUCT.md §12 («Tessera fisica nel pilota»), GLOSSARY.md («Tessera»: un codice per tessera), DESIGN.md (riga della tessera fisica nella scheda «Tessera» e «Collega una tessera» per l'operatore, scelta ragionevole dell'agente), la mappa del controllo A.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (25 ottobre 2026, chiusura della prova della vista 3D)
- Terza versione corretta su riscontro dell'utente:
  - zoom e movimento tornati come nella seconda versione;
  - la sfumatura ora è più leggera;
  - centro di rotazione iniziale riportato al centro della casa, verificato misurando la posizione della casa prima e dopo una rotazione.
- Decisioni dell'utente: niente scorrimento con due dita; arredi d'esempio accesi con l'interruttore; esito buono, conferma dopo una planimetria vera dei fondatori. Registrate in PRODUCT.md §12 e DESIGN.md.
- Ticket «Prova: vista 3D da una planimetria» chiuso; aperto «Prova: la vista 3D su una planimetria vera dei fondatori».

## Fatto (24 ottobre 2026, prova della vista 3D e ricerca sulla resa)
- Ticket [Prova: vista 3D da una planimetria](.scratch/controllo-a/issues/15-prova-vista-3d.md) rivendicato, con la skill `prototype`. Due pagine usa e getta, private, solo dati inventati; metodo, verifiche ed esiti sono nel ticket.
- **Prima versione** (https://claude.ai/artifact/Uwav9qpKCBQNkSskEWF5nZ):
  - tre piante inventate in stile catastale, in sette versioni, dalla buona alla rovinata;
  - ricalco e riconoscimento automatico con anteprima, fatto con visione artificiale classica, quindi senza modelli allenati né licenze da chiarire;
  - controlli di qualità, vista del proprietario;
  - esiti sulle piante inventate: nelle versioni buone, anche a mano, muri al 100% e porte 14 su 14; 6 buone su 6 passano, 15 rovinate su 15 vengono fermate o mandate al controllo;
  - giudizio dell'utente: «per come è fatto ora non sembra utile, è ancora grezzo».
- Ticket [Ricerca: come le altre piattaforme rendono belle e chiare le case in 3D](.scratch/controllo-a/issues/16-ricerca-resa-vista-3d.md), chiesto dall'utente, aperto e chiuso:
  - circa 60 fonti in [docs/ricerca/vista-3d-resa.md](docs/ricerca/vista-3d-resa.md); controllo a campione su Poly Haven, three.js e RoomSketcher, tutto confermato;
  - sei decisioni dell'utente, tutte sull'opzione consigliata: tre stili affiancati; arredi d'esempio accanto alla versione vuota; solo i nomi delle stanze; nord e luce da sud; viste pronte con trascinamento limitato; immagine fissa dopo la scelta dello stile.
- **Seconda versione** (https://claude.ai/artifact/3XGpiR7CyEKeYAgTz91Vjr):
  - la stessa casa in tre stili: pianta dall'alto, casa delle bambole, isometrica illustrata;
  - nomi delle stanze, ingresso, nord, pianta 2D, arredi facoltativi;
  - verificata in Chromium a 7 larghezze, in chiaro e in scuro, con tutti i pulsanti: nessuno scorrimento orizzontale, nessun errore; quattro difetti trovati e corretti;
  - giudizio dell'utente: sceglie l'isometrica illustrata e chiede la trasparenza da vicino. Lo stile è in DESIGN.md.
- **Terza versione** (https://claude.ai/artifact/C2aRNbV3h59zmdQKs8z93q):
  - solo l'isometrica, con i muri che coprono la stanza semitrasparenti da vicino;
  - provati e tolti su richiesta dell'utente lo zoom verso il punto indicato e i nomi delle stanze da toccare: spostavano il centro di rotazione e la sfumatura andava a scatti. Ora lo zoom va verso il centro e la sfumatura è più leggera;
  - verificata in Chromium (tre case, 5 larghezze, chiaro e scuro, movimento ridotto): nessun errore.
- Non è una prova su planimetrie vere. La planimetria dei fondatori arriva solo se l'utente la carica, con il loro consenso scritto.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (24 ottobre 2026, ricerca sulla vista 3D)
- Ticket [Ricerca: dalla planimetria catastale alla vista 3D indicativa](.scratch/controllo-a/issues/14-ricerca-vista-3d.md) rivendicato e chiuso. Ricerca con la skill `research`, affidata a un agente in background: circa 45 fonti primarie lette il 24/10/2026, in [docs/ricerca/vista-3d.md](docs/ricerca/vista-3d.md).
- Fonti non raggiungibili o lette in copia non ufficiale: sono annotate nel file (sito di CubiCasa, articoli del regolamento del 1949 su Normattiva, allegato tecnico della circolare 9/2001).
- Controllo a campione della sessione principale sulle fonti originali: comunicato dell'Agenzia del 12/7/2023 sulla delega agli agenti, scheda sulla planimetria, licenza di CubiCasa5K, privacy di Planner 5D. Tutto confermato.
- Fatti principali:
  - la planimetria catastale è un disegno a fini fiscali, di norma 1:200; ƎE può scaricarla gratis con la delega online del proprietario;
  - nessuno studio sul riconoscimento delle planimetrie catastali italiane;
  - i servizi esterni escludono i disegni a mano e hanno condizioni sui dati lontane dalla decisione del 20/10/2026.
- Decisioni dell'utente, una alla volta, registrate in PRODUCT.md §12:
  - ricalco e riconoscimento automatico fin da subito, sceglie l'operatore; l'automatico mostra un'anteprima da correggere o confermare. Era consigliato prima il solo ricalco: l'utente ha voluto tutte e due;
  - il riconoscimento gira dentro la piattaforma, senza servizi esterni;
  - conferma la vista solo l'operatore;
  - altezza letta sulla planimetria, oppure un valore fisso dichiarato;
  - avvertenza sempre visibile, con il testo scritto dal progetto senza parere legale. Era consigliato il legale: l'utente ha scelto di non chiederlo. Si può aggiungere, se si vuole, al parere già previsto prima del pilota;
  - si parte dalla planimetria del fascicolo; la copia nuova si chiede solo se non si legge;
  - nella prova, prima le piante inventate, poi una sola planimetria dei fondatori con il loro consenso.
- Aggiornati:
  - la [prova](.scratch/controllo-a/issues/15-prova-vista-3d.md), ora libera, con le due strade e il controllo delle licenze dei modelli;
  - la mappa, sezione «Dopo la destinazione»;
  - ARCHITECTURE.md, «Cosa vincolerà la scelta».
- Nessun servizio, account o planimetria vera usati. Nessun termine nuovo nel glossario.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (24 ottobre 2026, prova su iPhone)
- Ticket [Prova su iPhone: la piattaforma aggiunta alla schermata Home](.scratch/design-percorso-1/issues/06-prova-iphone-schermata-home.md) rivendicato, con la skill `mobile-native`. Letti con lo strumento Artifact i prototipi dell'accesso e della rifinitura, con le immagini.
- Pagina di prova usa e getta, privata, solo dati inventati: https://claude.ai/artifact/5ousKXbFpFsGqd5mrtcH7t. Contiene:
  - accesso con il campo del codice: non parte nessun messaggio;
  - benvenuto animato;
  - casa nella «via di mezzo» con le cinque schede fisse in basso;
  - viste di secondo livello con «Indietro», che entrano nella cronologia del browser per provare il gesto dal bordo;
  - una diagnosi che misura il telefono e si copia con un tocco.
- Limite annotato nel ticket: la pagina privata gira dentro una cornice di claude.ai. Barra di stato, colore in alto, aggiunta alla schermata Home e gesto dal bordo possono dipendere da claude.ai. La diagnosi lo dirà; un indirizzo tutto della pagina richiederebbe un servizio esterno e quindi l'autorizzazione dell'utente.
- Passi per la schermata Home presi dal manuale Apple in italiano (letto il 24/10/2026), aggiunti in [docs/ricerca/hig-web.md](docs/ricerca/hig-web.md) §15.
- Verifiche:
  - Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, con 11 schermate: 154 combinazioni, pagina ricaricata e schermata verificata ogni volta. Nessun elemento fuori dal riquadro o dalla finestra, nessuno scorrimento orizzontale, nessun errore;
  - il controllo, provato su una copia rotta apposta, trova i difetti;
  - percorsi completi con e senza movimento ridotto (codice, benvenuto, volo nella scheda, «Indietro», ritorno del browser). Corretto un difetto: titolo del benvenuto visibile durante il volo.
- Non è ancora una prova su iPhone: l'esito arriva dall'utente. Nessuna regola di DESIGN.md cambiata.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (24 ottobre 2026, rifinitura estetica)
- Ticket [Rifinitura estetica delle schermate interne](.scratch/design-percorso-1/issues/13-rifinitura-estetica.md) rivendicato e chiuso, con le skill `prototype` (ramo UI), `grilling`, `emil-design-eng` e `apple-design`, in due giri. Letti con lo strumento Artifact i prototipi di accesso, inquilino e proprietario. Le case approvate sono state fotografate nel browser per avere il «prima».
- Decisioni dell'utente, una alla volta:
  - *in cima alla casa:* consigliata la casa ridisegnata. L'utente ha voluto provare anche la «stanza in cima» e ha guardato tutte e due;
  - *riscontro sul primo giro:* la casa ridisegnata è «veramente carina e bella», ma ha troppe cose che distraggono chi ha poca familiarità con il computer. Il chiaro era più scuro di prima e i dettagli del canone erano finiti in disparte. L'utente ha chiesto una via di mezzo con la scheda del «prima»;
  - *via di mezzo* approvata: «così va bene, perfetto»;
  - *tre regole che cambiano*, confermate insieme sull'opzione consigliata: dettagli del mese nel riquadro in cima, icone senza cerchi, fatti senza riquadri. Valgono per tutte le schermate interne dei clienti.
- Verifiche:
  - nel Chromium disponibile a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, con due schermate e tutte le versioni (84 combinazioni al primo giro, 112 al secondo). La pagina è stata ricaricata ogni volta e la schermata aperta verificata. Nessun pulsante fuori dal riquadro, nessuno scorrimento orizzontale, nessun errore;
  - il controllo ha trovato un difetto vero (righe toccabili 12 px oltre il loro elenco), poi corretto. Su copie rotte apposta trova pulsanti fuori riquadro, scorrimento laterale e schermata sbagliata;
  - contrasti misurati con la formula WCAG, tutti sopra 4,5:1. Il rame sulle ombre della stanza era a 3,8:1 ed è stato scurito.
  - Lezione: il livello delle foglie dentro il disegno usciva dai bordi del disegno senza essere visibile, perché ritagliato. Il controllo ora ignora gli elementi interni ai disegni, che sono ritagliati, e continua a controllare i loro contenitori.
- Regole in [DESIGN.md](DESIGN.md): nuova sezione «Rifinitura delle schermate interne (percorso 1)». Cambiate, non cancellate: «La casa in cima», «Illustrazione della casa» e le icone in «Forme». Aggiunta un'indicazione dell'utente: la bellezza non deve mettere in disparte le informazioni. Rimandi nelle sezioni di proprietario e inquilino.
- Mappa: la decisione è in «Decisioni finora». Lo spazio dell'operatore con le stesse regole resta nel «Non ancora specificato», solo se l'utente lo chiede.
- Nessun termine nuovo nel glossario. Nessun conflitto con la specifica né con i punti fermi: cambia l'aspetto, non i contenuti.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (23 ottobre 2026, accesso e tessera)
- Ticket [Accesso, adesione e situazioni comuni](.scratch/design-percorso-1/issues/12-accesso-e-situazioni-comuni.md) rivendicato e chiuso nella stessa sessione, con le skill `prototype` e `grilling`, in cinque giri. Si è partiti dal prototipo dell'inquilino.
- Decisioni dell'utente, una alla volta:
  - **accesso** con un codice di verifica via email o SMS, per tutti, senza password (consigliato);
  - **primo accesso:** prima la casa con una carta di benvenuto; poi l'utente l'ha cambiata con la **tessera a tutto schermo**. Lo stesso giorno sono arrivati la **scheda «Tessera»** (quinta scheda dei clienti), i **soli dati essenziali** sulla tessera e la **tessera di rame per tutti**, con la personalizzazione dopo la prima versione;
  - **disdetta dell'adesione:** consigliata la richiesta a ƎE. L'utente ha proposto una disdetta da soli, ricordando le nuove regole sulla disdetta online; scelta la sua idea con due ritocchi dell'agente (niente codice in più; «non rinnovare» per primo, «chiudi subito» solo se le condizioni lo prevedono);
  - **eccezione alle regole del simbolo:** inciso solo sulla tessera vista come oggetto;
  - **pagina d'accesso uguale ai riferimenti** che l'utente ha generato con ChatGPT.
- Lavoro con le immagini generate dall'utente:
  - l'agente ha scritto le richieste e preparato gli allegati: il simbolo in PNG e lo schema della tessera, fuori dal repository;
  - l'utente ha generato le immagini e le ha condivise su Drive. L'agente le ha scaricate e guardate una per una, poi le ha compresse (da 19 MB a circa mezzo MB);
  - dopo il riscontro «non sono uguali», l'utente ha generato livelli separati (stanza, tessera in posa, ombra) che combaciano con i riferimenti;
  - la pagina è stata tarata riga per riga sulle misure dei riferimenti, con scarti di 1–3 px.
- Animazione del benvenuto rifatta dopo il riscontro «sembra grezza»:
  - la tessera si distende dalla sua posa con una prospettiva vera, calcolata dai quattro angoli misurati;
  - incisione lettera per lettera, riflesso, volo nella scheda «Tessera»;
  - con il movimento ridotto c'è solo una dissolvenza.
- Verifiche:
  - a ogni giro, Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, con la pagina ricaricata e la schermata verificata ogni volta (fino a 476 combinazioni). Nessun pulsante fuori dal riquadro, nessuno scorrimento orizzontale, nessun errore;
  - il controllo è stato provato su una copia rotta apposta: trova i difetti;
  - fotogrammi delle animazioni guardati uno per uno, su telefono e computer.
- Regole in [DESIGN.md](DESIGN.md), nella nuova sezione «Accesso, tessera e situazioni comuni (percorso 1)»; aggiornati «Identità», «Organizzazione» (cinque schede) e «Interazioni e stati». Eccezione del simbolo in [assets/marchio/](assets/marchio/README.md). Decisione di prodotto in [PRODUCT.md](PRODUCT.md) §12; parere legale in più in §10.10.
- Mappa:
  - la decisione è in «Decisioni finora»;
  - ticket nuovo [Rifinitura estetica delle schermate interne](.scratch/design-percorso-1/issues/13-rifinitura-estetica.md), dalla diagnosi accolta dall'utente;
  - «Tessera digitale» tolta dal «Non ancora specificato»;
  - personalizzazione della tessera in «Fuori ambito».
- Annotato in [Prezzo e condizioni dell'adesione](.scratch/controllo-a/issues/10-prezzo-condizioni-adesione.md) cosa resta da decidere sulla disdetta: rimborso, periodicità e condizioni.
- Nessun termine nuovo nel glossario. Nessun conflitto con la specifica: l'account creato dall'operatore e la disdetta da soli precisano §10.2 e §10.8 senza cambiarle.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (23 ottobre 2026, inquilino)
- Ticket [Schermate dell'inquilino](.scratch/design-percorso-1/issues/11-schermate-inquilino.md) rivendicato e chiuso nella stessa sessione, con le skill `prototype` e `grilling`, in un giro, partendo dal prototipo del proprietario.
- Non si sono richieste le cose già decise nei punti fermi: il prossimo pagamento per primo con le coordinate del bonifico, la scadenza passata detta con calma, le locazioni passate, il doppio ruolo.
- Decisioni dell'utente:
  - **contabile:** prima l'anteprima, poi «Invia al proprietario», senza altre conferme (consigliato);
  - **ricevute:** mesi a pillola come il proprietario, **in forma provvisoria**. L'utente aspetta il parere del collaboratore di ƎE, quinta domanda del suo ticket; l'alternativa ancora aperta è l'elenco semplice.
- Scelte ragionevoli dell'agente, mostrate e approvate con il resto:
  - la contabile si può sostituire finché non è confermata;
  - un posto tratteggiato per lo spazio delle bollette;
  - fuori orario c'è solo «Scrivi a ƎE»;
  - «Chiama» si apre come foglio dal basso sul telefono.
- Verifiche: Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, con tutte le varianti, in chiaro e in scuro (266 combinazioni). Nessun pulsante, importo o titolo fuori dal suo riquadro, nessuno scorrimento orizzontale, nessun errore.
  - Lezione: il primo controllo cambiava solo il segno «#» dell'indirizzo, che non ricarica la pagina, e provava sempre la stessa schermata. Ora ricarica e verifica quale schermata è aperta.
  - Al secondo controllo un importo usciva di 3 px a 360 px; corretto.
- Regole in [DESIGN.md](DESIGN.md), «Schermate dell'inquilino (percorso 1)»; decisione nella mappa. Nessun conflitto con la specifica né con i punti fermi; nessun termine nuovo nel glossario.
- Non applicabili: build, test e revisione OCR (non c'è codice applicativo; il programma `ocr` non è nell'ambiente).

## Fatto (23 ottobre 2026, proprietario e voce)
- Ticket [Schermate del proprietario](.scratch/design-percorso-1/issues/10-schermate-proprietario.md) rivendicato e chiuso nella stessa sessione, su richiesta dell'utente, con le skill `prototype` e `grilling`, in tre giri.
- Decisioni dell'utente:
  - le case a schede, con un interruttore a icone per passare alle righe (sua proposta);
  - i mesi passati come fila di mesi a pillola con il nome, scelta dell'anno e linea del tempo del mese, sul modello di due suoi esempi. Striscia e calendario a griglia sono stati scartati; i numeri «26» nelle pillole erano un difetto, corretto.
  - la **voce al «tu»** anche per proprietari e inquilini. È un cambio del punto fermo del 23/10, registrato in DESIGN.md «Voce» come cambiato e non cancellato.
- Il «Non lo chiedo» accanto ad «Approva» per il nuovo canone è una scelta ragionevole dell'agente, mostrata nel prototipo e approvata con il resto.
- Verifiche: a ogni giro, Chromium a sette larghezze in chiaro e in scuro; nessun pulsante fuori dal riquadro (salvo le pillole nascoste nella fila che si scorre, come previsto), nessuno scorrimento orizzontale, nessun errore. Provati il cambio d'anno e di mese.
- Regole in [DESIGN.md](DESIGN.md), «Schermate del proprietario (percorso 1)»; decisione nella mappa.
- Ticket 05 rivendicato: messaggio e quattro domande per il collaboratore, pronti da copiare.
  - Fra le domande c'è come date del tu o del Lei al banco, per verificare la nuova voce.
  - Il link al prototipo va condiviso dall'utente, perché la pagina è privata.

## Fatto (23 ottobre 2026, spazio dell'operatore)
- Ticket [Schermate dell'operatore di ƎE](.scratch/design-percorso-1/issues/09-schermate-operatore.md) rivendicato e chiuso nella stessa sessione della direzione, su richiesta dell'utente, con le skill `prototype` e `grilling`.
- Tre decisioni dell'utente, una alla volta, tutte sull'opzione consigliata:
  - la scheda della casa che si riempie un po' alla volta;
  - l'incasso con l'anteprima della ricevuta accanto e nessuna conferma;
  - la pagina «Al banco» per la persona.
- Prototipo usa e getta con undici schermate e i casi dell'incasso (più mesi, parziale, contanti oltre soglia), mostrato come pagina privata. L'utente l'ha approvato, segnalando pulsanti che uscivano dai riquadri.
- Correzione: pulsanti ed etichette vanno a capo e le due colonne compaiono solo da 1120 px.
- Verifiche eseguite:
  - un controllo automatico su ogni pulsante a sette larghezze, da 360 a 1366 px, ha trovato 19 difetti, poi corretti;
  - al ricontrollo nessun elemento è fuori dal suo riquadro, la pagina non scorre di lato e non dà errori, in chiaro e in scuro.
  - Lezione per i prossimi prototipi: il controllo della sola pagina non bastava, e non si erano provate le larghezze intermedie.
- Regole in [DESIGN.md](DESIGN.md), «Spazio dell'operatore (percorso 1)»; decisione nella mappa.
- Aperto: nella pagina «Al banco» la tessera fisica è indicata come «arriva con l'adesione». È un testo del prototipo, non una decisione: la tessera fisica dipende dalla ricerca e dal costo (§10.2, D8).

## Fatto (23 ottobre 2026, direzione)
- Ticket [Direzione del percorso 1](.scratch/design-percorso-1/issues/04-prototipo-direzione.md) rivendicato e chiuso con le skill `prototype` (ramo UI) e `grilling`. Domande una alla volta; ogni giro è stato mostrato come pagina privata, con il sorgente nella cartella temporanea della sessione (fuori dal repository) e un controllo nel browser prima della consegna.
  - *Primo giro:* tre direzioni con organizzazioni diverse (schede, pagina casa, elenco e dettaglio). Per l'utente erano funzionali ma non belle.
  - *Riferimenti dell'utente:* tre immagini di interfacce altrui, usate come atmosfera e non copiate.
  - *Secondo giro:* tre atmosfere («Luce calda», «Cielo», «Terracotta») sulla stessa organizzazione, con le case illustrate.
  - *Terzo giro:* le tre atmosfere riviste. Terracotta con tutti i pulsanti a pillola e lo scuro neutro; Cielo senza elementi giocosi; Luce calda con titoli più sobri.
  - Su richiesta dell'utente, un tasto per nascondere i comandi del prototipo sul telefono.
- **Decisioni dell'utente** (dettagli e alternative scartate nel ticket):
  - tre direzioni, poi tre atmosfere;
  - il **chiaro in vetrina** al posto dello scuro: è un cambio di un punto fermo del 23/10, portato come conflitto;
  - la **casa illustrata**, non fotografata, senza cambiare la specifica;
  - la direzione **«Terracotta»**.
- [DESIGN.md](DESIGN.md): nuova sezione «Direzione del percorso 1» con organizzazione, la casa in cima, illustrazione, colori chiaro e scuro, stati, caratteri, forme ed email. Aggiornati «Stato», «Identità» e «Tema»; la vetrina scura è segnata come cambiata, non cancellata.
- Verifiche eseguite:
  - Ogni giro è stato reso con il Chromium disponibile, in tutte le combinazioni (3 versioni × 6 schermate × chiaro e scuro, a 390 px e a 1366 px): nessuno scorrimento orizzontale e nessun errore nella pagina.
  - Contrasti dei colori di Terracotta misurati con la formula WCAG: tutti sopra 4,5:1. I valori sono in DESIGN.md.
  - Non è una revisione dell'accessibilità: quella ha il suo passaggio nella mappa.
- Mappa: la decisione è in «Decisioni finora». Le schermate per ruolo passano dal «Non ancora specificato» a quattro ticket: [Schermate dell'operatore di ƎE](.scratch/design-percorso-1/issues/09-schermate-operatore.md), [Schermate del proprietario](.scratch/design-percorso-1/issues/10-schermate-proprietario.md), [Schermate dell'inquilino](.scratch/design-percorso-1/issues/11-schermate-inquilino.md) e [Accesso, adesione e situazioni comuni](.scratch/design-percorso-1/issues/12-accesso-e-situazioni-comuni.md). «Il collaboratore di ƎE guarda lo spazio dell'operatore» ora aspetta anche le schermate dell'operatore.
- Problemi aperti:
  - Nel prototipo la facciata era un palazzo con i portici, ma la città delle case di ƎE non è registrata: lo stile si adatta, da verificare.
  - La licenza di Manrope e un set di icone con licenza libera vanno letti e scelti prima dell'uso nel prodotto.
  - Chi genera l'illustrazione di ogni casa, e come, è una domanda dell'architettura.
- Lavoro sul branch `claude/design-direzione-percorso-1`, creato da `main` perché la sessione non ne indicava uno.

## Fatto (23 ottobre 2026, cosa vede per primo)
- Ticket [Cosa vede per primo ciascuno e come parla il servizio](.scratch/design-percorso-1/issues/03-cosa-vede-per-primo.md) rivendicato e chiuso con le skill `grilling` e `domain-modeling`: dieci decisioni dell'utente, una alla volta, tutte sull'opzione raccomandata. Nel ticket, sotto «Commenti», ci sono le alternative scartate e i motivi.
  - *Proprietario:* per primo il mese in corso, con canone e consegna in due righe distinte; sopra, la cosa da fare. Con più case, un elenco con i due stati per casa, senza somme di importi.
  - *Inquilino:* per primo il prossimo pagamento; la scadenza passata è detta con calma, senza allarme. Le locazioni finite sono in sola lettura, un tocco più in là.
  - *Operatore:* il lavoro in coda in ordine fisso, dalle consegne in ritardo alle scadenze, con «Trova cliente o casa» sempre in alto.
  - *Due ruoli nella stessa persona:* un elenco «Le mie case» diviso per ruolo.
  - *Voce:* «Lei» a proprietari e inquilini, «tu» all'operatore, nessuno parla in prima persona; ogni fatto del denaro dice chi l'ha confermato.
  - *Tema:* segue il dispositivo; lo scuro, nero e grigi neutri, è la vetrina.
- Registrate in [DESIGN.md](DESIGN.md), nella nuova sezione «Punti fermi del percorso 1», con data e motivo. Riconfermata come vetrina la preferenza per il tema scuro.
- Nessun conflitto con la specifica (PRODUCT.md §10 invariato) e nessun termine nuovo nel glossario: «Le mie case» e «Locazioni passate» sono etichette, passeranno da `ux-writing`.
- Ipotesi da confermare con ƎE: al banco i clienti ricevono del «Lei»; se così non fosse, la scelta della voce si riapre.
- Mappa: la decisione è in «Decisioni finora». Nel ticket «Direzione del percorso 1» il tema non è più una proposta di ciascuna direzione: ognuna si disegna in chiaro e in scuro.
- Lavoro sul branch `claude/design-cosa-vede-per-primo`, creato da `main` perché la sessione non ne indicava uno.

## Fatto (23 ottobre 2026, design)
- Nuova mappa Wayfinder [Design del percorso 1](.scratch/design-percorso-1/map.md), con le skill `grilling` e `domain-modeling`, una domanda alla volta.
- **Destinazione** scelta dall'utente (opzione B): la direzione più il percorso intero, per proprietario, inquilino e operatore, su telefono e desktop, con testi, email, SMS e revisione dell'accessibilità. Scartate «solo la direzione» e «direzione e schermate principali».
- **Persone vere:** il collaboratore di ƎE guarda lo spazio dell'operatore prima del controllo B (opzione A), con dati inventati e poche domande precise; nessun proprietario o inquilino vero.
- Ticket della mappa (sei all'apertura, otto a fine sessione):
  - due ricerche chiuse;
  - «Cosa vede per primo ciascuno e come parla il servizio», libero;
  - «Direzione del percorso 1», prototipo con selettore, aspetta il ticket precedente;
  - «Il collaboratore di ƎE guarda lo spazio dell'operatore», aspetta la direzione;
  - «Prova su iPhone: la piattaforma aggiunta alla schermata Home», libero.

  Il resto è nel «Non ancora specificato»: schermate per ruolo, email e SMS, tessera digitale, ricevute stampate, testi, componenti, rifinitura, pacchetto per il controllo B. Fuori: vista 3D, prezzo e condizioni dell'adesione, tessere fisiche, bollette, percorsi 2–4, architettura, testi legali, logo nella casella.
- Ricerche chiuse da due agenti in parallelo (skill `research`):
  - [HIG per il web](docs/ricerca/hig-web.md): le HIG valgono come grammatica. Vetro solo sulle barre e con versione opaca; niente San Francisco incorporato né SF Symbols (licenza non leggibile). Dalla schermata Home la pagina deve offrire il suo «Indietro». Il tema segue il sistema: decisione aperta per l'utente.
  - [Forma di email e SMS](docs/ricerca/email-sms-forma.md): nelle email il fatto in testo vero, tema scuro come caso normale, niente pixel di tracciamento (linee guida del Garante dal 29/10/2026). Negli SMS solo l'alfabeto GSM-7, altrimenti si scende da 160 a 70 caratteri. L'alias del mittente si registra presso AGCOM e non riceve risposte. Il codice d'accesso ha l'ultima riga `@dominio #codice`.
- **Nome e simbolo, decisi e forniti dall'utente:**
  - **Connetto**, registrato in [PRODUCT.md](PRODUCT.md) §1 e §12 con il motivo: la connessione, il legame, con tutto ciò che riguarda la casa;
  - **C–Legame**, in [assets/marchio/](assets/marchio/README.md), due SVG con regole d'uso, registrato in [DESIGN.md](DESIGN.md) «Identità».

- **Ricerca preliminare sul nome**, chiesta dall'utente e svolta da un agente: [docs/ricerca/nome-connetto.md](docs/ricerca/nome-connetto.md).
  - Marchio: rosso. «Connetto» è già un marchio UE registrato fino al 2033, con «Software» in classe 9; ci sono anche «Connecto» per software e SaaS e la domanda «CONNETTA».
  - Domini: giallo. `.it` e `.com` sono di altri, `.app` e `.casa` liberi.
  - Altri che usano il nome: giallo. Nessuno nel settore casa.
  - Significato e alias SMS: verde.
- **Decisione dell'utente (opzione A):** Connetto resta nome di lavoro e il parere di un consulente in marchi si chiede subito, prima di email, SMS e scritta del nome e prima del controllo B. Registrata in PRODUCT.md §12; nuovo ticket «Parere di un consulente in marchi sul nome Connetto». Scartati: cambiare subito, accordo con il titolare.

## Fatto (23 ottobre 2026)
- Ticket [Controllo A e passaggio al design](.scratch/controllo-a/issues/13-controllo-a.md) rivendicato e chiuso con le skill `grilling` e `domain-modeling`, una voce alla volta, ciascuna con decisione, sostegno, mancanze e raccomandazione; conferme dell'utente annotate nel ticket.
- Voce 1: primo cliente invariato; **promessa del percorso 1 scritta in una frase** per proprietario e inquilino. Voce 2: specifica di §10 confermata così com'è. Voce 4: operatore di ƎE dentro le 1–1,5 ore al giorno. Voce 5: il denaro non passa dalla piattaforma; adesione e pratiche si pagano a ƎE fuori dalla piattaforma.
- Voce 3, con due cambi: lista unica di cosa resta fuori in §12; **notifiche sul telefono fuori dal percorso 1** (email, o SMS per chi non ha l'email; si riconsiderano con l'app iPhone). Precisate in §12 «Canale principale» e «Cosa resta fuori» (19/10), segnate e non cancellate.
- Proposta dell'utente accolta: **vista 3D indicativa** della casa dalla planimetria nella prima versione, come prova a condizione (§12, 23/10; §5.5; §10.10): solo planimetrie leggibili, messaggio per quelle di bassa qualità, scritta «indicativa, non è una misura», visibile a proprietario e operatore, ipotesi di modifica fuori. Ticket nuovi [Ricerca: dalla planimetria catastale alla vista 3D indicativa](.scratch/controllo-a/issues/14-ricerca-vista-3d.md) e [Prova: vista 3D da una planimetria](.scratch/controllo-a/issues/15-prova-vista-3d.md), prima dell'architettura. Prima lettura (non una ricerca): esistono studi sul riconoscimento delle piante, non sulle planimetrie catastali italiane.
- [GLOSSARY.md](GLOSSARY.md): nuovo termine «vista 3D indicativa». Mappa chiusa, con la sezione «Dopo la destinazione» per i ticket aperti. [docs/STUDIO.md](docs/STUDIO.md): destinazione raggiunta, T5 e T7 aggiornate.

## Fatto (22 ottobre 2026, seconda sessione)
- Ticket «Specifica del percorso 1» rivendicato e chiuso con le skill `grilling` e `domain-modeling` (`ux-strategy` per le misure): ventinove decisioni dell'utente, una alla volta, nel ticket sotto «Commenti», ciascuna con alternative scartate e motivo. Partenza dai due contrasti parziali: l'attivazione la fa l'operatore di ƎE dentro le 1–1,5 ore al giorno, le case entrano un po' alla volta e si misura il tempo; le case con bonifico al proprietario entrano con un percorso più corto, confermato dal proprietario.
- Specifica scritta in [PRODUCT.md](PRODUCT.md) §10 (chi fa cosa, attivazione, canone del mese, importo e scadenze, messaggi, casi limite, cosa vede ciascuno, fine dei rapporti, prove, cosa resta da fare) e confermata nell'insieme. In §12 quattro righe del 22/10; precisate «Chi è nel pilota» e «Fascicolo all'attivazione», cambiata in parte «Cosa resta fuori dalla prima versione» (gli SMS entrano, solo per chi non ha l'email). In §13 le misure: principale «i proprietari sanno del canone senza chiedere all'agenzia», con le telefonate contate da ƎE già prima del pilota; nessun valore inventato, obiettivi dopo i primi dati.
- Proposte dell'utente accolte: accesso anche con il cellulare (codice e messaggi via SMS); ISTAT semi-automatico con controllo e approvazione; tasto «Chiama» accanto a canone e consegna, con la chiamata registrata come avviata e l'esito scritto dall'operatore; prove di funzionamento solo dell'utente, con sub-agenti e dati inventati, e numeri delle misure visti solo da lui.
- Richieste dell'utente annotate per dopo: ticket nuovo [Ricerca: tessere fisiche, fornitori, personalizzazione, ordini e spedizioni](.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md); IMU, TARI e impianti nello scadenzario più avanti e adesione a pagamento per l'ex inquilino con un periodo gratuito (mappa, «Fuori ambito»; PRODUCT.md §5.6).
- [GLOSSARY.md](GLOSSARY.md): nuovi attivazione, incarico di gestione, canone del mese, consegna, contestazione; incasso verificato passa da PRODUCT.md §8 al glossario con il significato deciso (conferma di chi ha ricevuto il denaro).
- Mappa: la specifica in «Decisioni finora»; «Controllo A e passaggio al design» passa dal «Non ancora specificato» al [ticket](.scratch/controllo-a/issues/13-controllo-a.md). Aggiornato [Prezzo e condizioni dell'adesione](.scratch/controllo-a/issues/10-prezzo-condizioni-adesione.md) con i punti della specifica che lo toccano.
- Stima dell'utente: circa 100–200 case gestite (non un dato di ƎE); i numeri sui tipi di contratto non servono.

## Fatto (22 ottobre 2026)
- Ticket «Materiali per i colloqui» rivendicato, poi chiuso fuori ambito senza materiali preparati: alla prima domanda (quanti colloqui per gruppo) l'utente ha deciso di non fare né i colloqui né la pre-adesione e di passare al design dopo la specifica e il controllo A. Decisione in [PRODUCT.md](PRODUCT.md) §12 con il motivo; segnate come sostituite, non cancellate, «Evidenze con persone vere» (18/10), «Destinazione dello studio» e «Pre-adesione in un secondo momento» (19/10). In §13 una frase: le prime evidenze con le persone arrivano dal pilota.
- Mappa ridisegnata: nuova destinazione e titolo «Dalla specifica del percorso 1 al design»; in «Fuori ambito» i materiali per i colloqui, lo svolgimento e le sintesi, la conferma delle decisioni con le sintesi, l'esito della pre-adesione e, su scelta dell'utente, la decisione sul secondo gruppo (fascicolo per la vendita), rinviata a dopo il pilota. In «Non ancora specificato» resta solo «Controllo A e passaggio al design».
- «Proposta di pre-adesione» diventa [Prezzo e condizioni dell'adesione](.scratch/controllo-a/issues/10-prezzo-condizioni-adesione.md): prezzo, periodicità, cosa include e trattenuta dal canone, decisi dall'utente prima del pilota; non blocca nulla. «Prova sulle bollette»: tolta la parte sui colloqui, non blocca il design del percorso 1. Dalla Specifica tolto il blocco dei colloqui.
- [docs/STUDIO.md](docs/STUDIO.md): nuova destinazione e tre criteri di arrivo (ricerche chiuse, specifica, controllo A); le domande «Persone» si misurano nel pilota. [docs/METODO.md](docs/METODO.md): il passo 4 si salta in EECard3; l'ordine resta specifica, controllo A, design, architettura, controllo B, codice.

## Fatto (21 ottobre 2026)
- Ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md) chiuso con le risposte alle 29 domande, arrivate in un PDF mandato dall'utente; la pagina «Domande per ƎE» era vuota e non è stata toccata. Risposte registrate in forma aggregata, con i numeri delle domande; il PDF non è nel repository. Senza risposta le domande 8, 9, 10, 13, 21 e 23 e parti di altre.
- In sintesi: il servizio da 600 € di ƎE (in media, IVA esclusa, fatturato ogni anno) comprende gestione con incasso, pratiche, assistenza e consulenza; per decisione dell'utente non fa parte del prodotto e serve a capire come lavora oggi l'agenzia (PRODUCT.md §12). Incarico di gestione non scritto; informativa e registro dei trattamenti sì, consulente per la privacy no; meno di 3 persone in agenzia e 1–1,5 ore al giorno confermate; canone consegnato ogni mese con ricevuta firmata dal proprietario; quarto mestiere dei tecnici: caldaie e climatizzazione.
- Controllati i punti «Da controllare»: nessuna decisione di [PRODUCT.md](PRODUCT.md) §12 smentita del tutto. Due contrasti parziali segnalati nella [Specifica del percorso 1](.scratch/controllo-a/issues/09-specifica-percorso-1.md): la «segreteria di ƎE» con meno di 3 persone; bonifici al proprietario, contro «Chi è nel pilota», da misurare. Un terzo, sulla consulenza già compresa nel servizio da 600 €, è stato tolto dopo il chiarimento dell'utente.
- Ricontrollati i punti delle domande 5 e 6 del ticket «Chi fornisce la piattaforma e chi vende l'adesione nel pilota»: le decisioni del 20/10 reggono; si aggiungono l'incarico di gestione e incasso scritto e l'aggiornamento di informativa e registro; serve un parere prima del pilota (legale, privacy con un professionista esterno, servizi di pagamento). Esito nella Specifica.
- Sei chiarimenti per ƎE, pronti da copiare, nel ticket sotto «Commenti»: compenso trattenuto o no, incarico, canoni per mezzo di pagamento e consegna, numeri ed email, proprietari in agenzia, chi fa le ore del pilota.
- Fatti utili annotati nei ticket aperti: Specifica del percorso 1, Materiali per i colloqui, Proposta di pre-adesione. In PRODUCT.md aggiornate le due righe rimaste in attesa (§5.4 quarto mestiere, §6 servizio da 600 €) e registrata in §12 la decisione dell'utente sul servizio da 600 €.

## Fatto (20 ottobre 2026)
- Ticket [Chi fornisce la piattaforma e chi vende l'adesione nel pilota](.scratch/controllo-a/issues/11-chi-fornisce-la-piattaforma.md) chiuso con le skill `grilling` e `domain-modeling`, una domanda alla volta. Decisioni dell'utente in [PRODUCT.md](PRODUCT.md) §12 (20/10/2026): nel pilota la piattaforma è di ƎE, che risponde di tutti i dati con un'informativa sola; società distinta solo con la seconda agenzia; ƎE vende l'adesione del proprietario con un foglio separato dall'incarico di gestione; l'inquilino ha un'adesione gratuita con tessera, che comprende lo spazio delle bollette, servizio di ƎE che l'agenzia non guarda.
- «Adesione» passa da PRODUCT.md §8 al [GLOSSARY.md](GLOSSARY.md): a pagamento per il proprietario, gratuita per l'inquilino.
- Aggiornati i ticket della specifica del percorso 1 (documenti all'attivazione, ruoli, due casi limite), della pre-adesione (propone e incassa ƎE) e dei materiali per i colloqui (titolare ƎE; fiducia degli inquilini nello spazio delle bollette).
- Le risposte di ƎE alle domande 5 e 6 (incarico scritto, privacy) non c'erano: cosa ricontrollare quando arrivano è nel ticket chiuso, sotto «Da ricontrollare».
- Su richiesta dell'utente, pagina interattiva «Domande per ƎE» per far rispondere il collaboratore dal telefono: le 29 domande dell'elenco, salvataggio automatico, tasto «Copia le risposte» come alternativa. Le risposte si leggono solo da chi può compilare la pagina, non da chi la guarda soltanto. Il sorgente non è nel repository: è uno strumento per raccogliere le risposte, non codice del prodotto.

## Fatto (19 ottobre 2026)
- Mappa Wayfinder (tracker Local Markdown, solo nel repository): destinazione, note, decisioni finora, «Non ancora specificato» e «Fuori ambito» con ciò che PRODUCT.md §12 esclude dalla prima versione. Undici ticket, collegati con i loro blocchi.
- Decisioni dell'utente sull'impianto: proposta di pre-adesione dopo i colloqui e la specifica; prova sulle bollette con bollette reali di volontari, con limiti (entrambe in PRODUCT.md §12); ticket aggiunto «Fatti dall'agenzia ƎE»; pareri professionali fuori dalla mappa salvo blocchi del percorso 1.
- Ricerche chiuse, svolte da cinque agenti in parallelo con la skill `research`, ciascuna con fonti, date e pareri da chiedere: [incasso dei canoni al banco](docs/ricerca/incasso-canoni.md), [adempimenti della locazione](docs/ricerca/adempimenti-locazione.md), [titolarità e privacy dei dati](docs/ricerca/privacy-dati.md), [alternative sul mercato](docs/ricerca/mercato.md), [email di servizio](docs/ricerca/email.md). Il succo di ciascuna è nella mappa; le decisioni che hanno fatto emergere sono nei ticket aperti, non prese.
- Ticket nuovo emerso dalla ricerca sulla privacy: «Chi fornisce la piattaforma e chi vende l'adesione nel pilota», da cui dipendono i ruoli sui dati; blocca la specifica e la proposta.
- Elenco di 29 domande per ƎE, in sei temi, con caselle e numeri e il ticket a cui serve ciascuna, nel ticket «Fatti dall'agenzia ƎE» sotto «Commenti»: pronto da copiare per il collaboratore dell'utente. Decisioni dell'utente: tolte le domande su marca da bollo, contanti da 5.000 € in su e custodia del denaro (potrebbero mettere per iscritto una pratica non in regola; servono al parere prima del pilota, non alla specifica); fasce d'età dei proprietari e lingue degli inquilini chieste in forma aggregata.
- Regola nuova in [AGENTS.md](AGENTS.md), chiesta dall'utente: le domande all'utente si fanno in parole semplici, spiegando cosa comporta ogni opzione.

## Verificato
- 23/10/2026, design: impronte `sha256sum` dei due SVG uguali a quelle indicate dall'utente. Anteprima usa e getta del simbolo a 128, 48, 32, 24 e 16 px, su fondo chiaro e scuro, aperta in Chromium headless e guardata come immagine; fuori dal repository. Le affermazioni delle tre ricerche non sono state ricontrollate una per una sulle fonti; il marchio UE «Connetto» non si è potuto riaprire da qui (TMview risponde «Forbidden» all'ambiente).
- `python3 tools/check_setup.py` e link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, STUDIO.md, mappa e ticket: vedi «Ultima verifica» (23/10/2026).
- `python3 tools/check_setup.py`: integrità OK (22/10/2026, sera). Link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, STUDIO.md, METODO.md, mappa e ticket: nessuno rotto. Frontiera calcolata dai file dei ticket: liberi «Prova sulle bollette», «Prezzo e condizioni dell'adesione», «Ricerca: tessere fisiche» e «Controllo A e passaggio al design».
- `python3 tools/check_setup.py`: integrità OK (22/10/2026).
- Link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, STUDIO.md, METODO.md, mappa e ticket: nessuno rotto dopo il cambio di nome del ticket 10 (22/10/2026). Frontiera calcolata dai file dei ticket: liberi «Prova sulle bollette», «Specifica del percorso 1» e «Prezzo e condizioni dell'adesione».
- Risposte di ƎE (21/10/2026): testo estratto dal PDF (4 pagine, solo testo, nessuna immagine) e confrontato domanda per domanda con l'elenco; nessun nome, indirizzo o importo individuale nel repository.
- Pagina «Domande per ƎE» (20/10/2026): sintassi dello script controllata; aperta in Chromium a larghezza di telefono, senza errori né scorrimento laterale; avanzamento, scelta tolta al secondo tocco e testo da copiare provati una volta. Dopo la pubblicazione, un documento di prova nel suo database: invisibile a chi può solo guardare, visibile a chi può compilare; poi cancellato. Non provati: l'invito del collaboratore e il salvataggio dal suo account.
- Link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, mappa e ticket: nessuno rotto (21/10/2026). Frontiera calcolata dai file dei ticket: liberi «Materiali per i colloqui» e «Prova sulle bollette».
- Due affermazioni delle ricerche controllate sulla fonte (19/10/2026): DMARC è RFC 9989 (maggio 2026); la consultazione EDPB sulle linee guida 02/2026 esiste.
- Non verificato: l'abrogazione dell'obbligo di pagare i canoni senza contanti (L. 208/2015) è riportata da Normattiva secondo la ricerca, ma Normattiva e Gazzetta Ufficiale non rispondevano al controllo; il comma viene da fonte secondaria.
- Non applicabili: build, test, revisione OCR e verifiche dell'interfaccia (non c'è codice).

## Problemi aperti
- **Dalla specifica (22/10/2026), prima del pilota:** pareri su testo dell'incarico, della ricevuta e della comunicazione del luogo del pagamento, durate di accesso dell'ex inquilino (5 anni) e dello spazio delle bollette, numero del proprietario mostrato all'inquilino, frazionamento dei contanti; valori che fissa ƎE (anticipo dei promemoria, giorni prima di avvisare il proprietario); approvazione da parte di ƎE della tabella «chi vede cosa»; conteggio delle telefonate sul canone da avviare alcune settimane prima del pilota. Elenco in PRODUCT.md §10.10.
- **Si attendono i sei chiarimenti di ƎE** (ticket «Fatti dall'agenzia ƎE», sotto «Commenti»). Non bloccano ticket; possono riaprire una decisione della specifica (bonifici al proprietario, se sono la maggioranza) e servono a «Prezzo e condizioni dell'adesione».
- Normattiva ed EUR-Lex hanno rifiutato molte connessioni: alcune norme sono state lette da fonti secondarie o solo in parte; l'elenco è in fondo a ogni ricerca.
- Dal 1/1/2027 registro, cedolare secca, IVA e termini fiscali passano a nuovi testi unici: le ricerche su adempimenti, incasso e privacy vanno riverificate a gennaio 2027.
- Pareri professionali segnalati (legale, fiscale, privacy, servizi di pagamento, antiriciclaggio): fuori dalla mappa, prima del pilota; senza colloqui (22/10) cade il parere sull'informativa dei colloqui. Dal 20/10 se ne aggiunge uno su ruoli e documenti del pilota: condizioni delle due adesioni, contratto sui dati con chi costruisce la piattaforma, accordo su marchio e software fra fondatori e ƎE. Dal 21/10: l'incarico di gestione e incasso oggi non è scritto e va scritto; ƎE non ha un consulente per la privacy, quindi informativa e registro si aggiornano con un professionista esterno. Dal 23/10: chi è il mittente degli SMS e il suo alias nel Registro AGCOM; deposito di nome e simbolo. Il parere sul nome Connetto si chiede subito (ticket della mappa del design).

- **Dal 23/10/2026 (accesso e tessera):** parere legale sulla disdetta online dell'adesione e sull'art. 54-bis del Codice del consumo (PRODUCT.md §10.10); condizioni d'uso delle immagini generate con ChatGPT prima dell'uso nel prodotto; contrasto dei dati incisi sulla tessera, da misurare nella revisione dell'accessibilità; il passaggio animato e l'accesso con link vanno provati sull'iPhone (ticket «Prova su iPhone»). La legge sulla disdetta è stata letta solo da fonti secondarie: EUR-Lex non ha restituito il testo.

## Da chiarire con l'utente
Le domande aperte sono nei ticket della mappa; prezzo, periodicità e trattenuta della quota dal canone in «Prezzo e condizioni dell'adesione». I fatti che conosce solo l'agenzia sono nel ticket «Fatti dall'agenzia ƎE»; i dubbi rimasti sono nei sei chiarimenti da mandare al collaboratore.

## Prossimo passo
1. **Il collaboratore di ƎE** risponde alle cinque domande (ticket rivendicato); la quinta decide le ricevute dell'inquilino. Messaggio in [START_HERE.md](START_HERE.md).
2. **Parere sul nome Connetto**, prima di email, SMS e scritta del nome.
3. Quando l'utente vuole: «Prova su iPhone», anche sulla pagina d'accesso, sul codice proposto sopra la tastiera, sull'animazione del benvenuto e ora sulla casa rifinita.
4. Prima del pilota: «Prezzo e condizioni dell'adesione», con rimborso e periodicità della disdetta; i pareri di PRODUCT.md §10.10.

Messaggi per le prossime sessioni in [START_HERE.md](START_HERE.md).

## Ultima verifica
24/10/2026, rifinitura estetica: `python3 tools/check_setup.py` dà integrità OK. Link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, DESIGN.md, della mappa del design e dei suoi ticket: nessuno rotto. Frontiera calcolata dai file dei ticket: liberi «Prova su iPhone» e «Parere di un consulente in marchi sul nome Connetto» (compito per l'utente); «Il collaboratore di ƎE guarda lo spazio dell'operatore» è rivendicato. Prototipo controllato in Chromium (vedi «Fatto (24 ottobre 2026, rifinitura estetica)»). Non applicabili: build, test, revisione OCR (non c'è codice applicativo). Programmi facoltativi assenti nell'ambiente cloud: `ocr`, `playwright-cli`; Chromium c'è.
