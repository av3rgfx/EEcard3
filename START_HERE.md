# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

Il **design del percorso 1** ([docs/METODO.md](docs/METODO.md), passo 6) ha una mappa: [Design del percorso 1](.scratch/design-percorso-1/map.md). Approvati il 23/10/2026:
- direzione **«Terracotta»** con il chiaro in vetrina;
- spazio dell'operatore;
- schermate del proprietario e dell'inquilino (le ricevute dell'inquilino a mesi a pillola sono provvisorie, in attesa del collaboratore di ƎE);
- **accesso, tessera digitale e situazioni comuni**: accesso con un codice, pagina d'accesso con la tessera di rame, benvenuto animato, scheda «Tessera», disdetta da soli.

Il 24/10/2026 è approvata anche la **rifinitura estetica delle schermate interne dei clienti**, la «via di mezzo» ([DESIGN.md](DESIGN.md), «Rifinitura delle schermate interne (percorso 1)»). Il 25/10/2026 sono decisi i **testi dell'interfaccia** ([DESIGN.md](DESIGN.md), «Testi dell'interfaccia (percorso 1)»: «in agenzia», «tu» anche nei titoli, frasi senza genere, «entro» per il canone, «Spese», titolo «Mese: il fatto») e la **tessera fisica del pilota** ([PRODUCT.md](PRODUCT.md) §12: lamina arancione, chip DESFire EV3 spento, solo un codice suo, consegna in agenzia).

Voce al «tu» anche per i clienti. Nome di lavoro **Connetto**, simbolo **C–Legame** ([assets/marchio/](assets/marchio/README.md)); il parere sul marchio è chiesto subito e il suo esito va nel ticket «Parere di un consulente in marchi sul nome Connetto».

Il 26/10/2026 sono decisi i **dati limite e l'accessibilità** ([DESIGN.md](DESIGN.md), «Dati limite e accessibilità (percorso 1)»): più mesi aperti con elenco e totale, targhetta satinata sulla tessera, icone nei mesi a pillola, contorno dei campi a 3:1, testo che segue il telefono e altre cinque correzioni. Pagina di prova: https://claude.ai/artifact/RtwaFRWDmVNnrr5XQnJTh9.

Il 26/10/2026 sono decisi anche le **interazioni e gli stati** ([DESIGN.md](DESIGN.md), «Interazioni e stati (percorso 1)»): conferma al suo posto, «Annulla» per 8 secondi sul «Ricevuto», pulsanti spenti con il perché, movimento ridotto fatto solo di dissolvenze, «Di nuovo in linea» per 4 secondi e otto dettagli su attesa, errori e annunci. Pagina di prova: https://claude.ai/artifact/MvrdhkTegSQ5eUUGC4XzeY.

Il 26/10/2026, dopo la [ricerca sulle licenze](docs/ricerca/licenze-grafiche.md), sono fissati anche **carattere, icone, logo di ƎE e immagini** ([DESIGN.md](DESIGN.md), «Componenti e token»):
- Manrope arriva dal nostro sito, non da Google;
- icone Lucide a tratto 1,6;
- «ƎE» diventa un disegno ovunque nelle schermate, e lo ridisegniamo noi perché l'agenzia non ha più il file;
- le immagini fatte con ChatGPT restano nei prototipi fino al parere, chiesto insieme a quello sul nome.

Il 26/10/2026 è deciso anche il **disegno del logo di ƎE** ([DESIGN.md](DESIGN.md), «Identità»; [assets/marchio/](assets/marchio/README.md)). È la «E» di Manrope ripetuta e specchiata. Nelle frasi si usano due «E» del testo, la prima girata; da solo c'è il disegno fisso `ee.svg` al peso 700, inciso sulla tessera. Lo screen reader dice «Enrico Erca». Approvato dall'utente insieme al collaboratore di ƎE. Pagina di prova: https://claude.ai/artifact/GRs9QZVLmBR7q6yx5VS2xQ.

Il 26/10/2026 sono decise anche le **ricevute stampate** del canone e della consegna ([DESIGN.md](DESIGN.md), «Ricevute stampate (percorso 1)»): una lettera su un foglio A4, uguale nel PDF; ƎE in testa e Connetto piccolo in fondo; un'annullata con fascia ambra e timbro; il PDF fatto dai dati, che si legge con lo screen reader. Il testo legale aspetta il parere; le domande per i pareri legale e fiscale sono nella stessa sezione. Pagina di prova: https://claude.ai/artifact/EoCKVfNQG4mXr1bXNJzn1g.

Il 26/10/2026 sono decise anche le **foto e l'illustrazione della casa** ([DESIGN.md](DESIGN.md), «Foto e illustrazione della casa (percorso 1)»): in cima una copertina scelta e le altre foto nel visore; operatore e proprietari aggiungono e tolgono qualsiasi foto (togliere cancella, con «Annulla»); l'ex inquilino vede solo il disegno; anteprima con inquadratura e promemoria su persone e targhe; nelle email sempre il disegno; il disegno ha tre tipi di casa scelti dall'operatore. Pagina di prova: https://claude.ai/artifact/7VdfMJoY6897vcnoyw17qP.

Il 26/10/2026 sono decisi anche il **pacchetto per il controllo B** e **componenti e token** ([DESIGN.md](DESIGN.md), «Pacchetto per il controllo B (percorso 1)» e «Componenti e token»):
- il pacchetto è una pagina nuova, «Connetto, percorso 1». Contiene tutte le schermate decise, ridisegnate con le regole di oggi;
- ci si muove seguendo il mese di una casa in circa 14 tappe, con un indice per ruolo;
- lo spazio dell'operatore resta com'è approvato;
- la scala è corta: 6 grandezze del testo e 4 angoli; i valori mancanti sono presi dalle prove;
- prima del controllo B serve solo il collaboratore di ƎE; email e SMS vengono dopo il parere sul nome, prima del pilota.

La pagina si costruisce in due parti, circa tre sessioni: durante la costruzione si fa anche una revisione dell'esperienza, tappa per tappa, con proposte «prima e dopo» (scelta dell'utente del 26/10/2026).

Il 27/10/2026, in due sessioni, è stata costruita e chiusa la **prima metà della pagina** «Connetto, percorso 1» ([ticket](.scratch/design-percorso-1/issues/22-pacchetto-operatore-ricevute.md)): il telaio con la storia di Via dei Tigli 14 in 14 tappe, tutte le schermate dell'operatore (tappe 1, 2, 5, 6, 8, 9, 10 e 11, coda vuota e «Oggi») e le ricevute stampate, comprese l'annullata e quella che la sostituisce: https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF (versione 6). Dalla revisione dell'esperienza sono uscite le scelte dell'utente, tutte sull'opzione consigliata, scritte in DESIGN.md, «Spazio dell'operatore (percorso 1)», e gli **spazi fra gli elementi** (4, 8, 12, 16, 24, 32, 48 px, «Componenti e token»).

Il 27/10/2026, nella prima sessione del ticket [Pagina del pacchetto: clienti, accesso e situazioni comuni](.scratch/design-percorso-1/issues/23-pacchetto-clienti-situazioni.md), sono fatte le **schermate dei clienti delle tappe 2–9** (versione 9 della pagina). Dalla revisione dell'esperienza sedici scelte dell'utente, scritte in DESIGN.md nelle sezioni delle schermate; fra queste l'invito senza indirizzo, il denaro del mese detto per intero, «Vedi la contabile» accanto ai due «Ricevuto». Su segnalazione dell'utente la **tessera di rame non ha più la targhetta chiara**: i dati sono incisi sul rame e ripetuti in testo sotto la tessera.

Il 30/10/2026, nella seconda sessione dello stesso ticket, sono fatte le **schermate dei clienti delle tappe 10–14 e fuori dalla storia** (versione 11 della pagina). Dalla revisione dell'esperienza dodici scelte dell'utente, scritte in DESIGN.md: si contesta dalla voce, con i conti; l'esito «corretto» con i conti prima e dopo; il nuovo canone con le scelte spiegate e l'ISTAT in parole semplici; chi vede ogni documento; la disdetta che dice quali case tocca; il deposito a fine locazione. Due regole di prodotto precisate in PRODUCT.md §12: la casa che esce non toglie l'adesione per le altre case; con più proprietari il nuovo canone lo approva chi è nell'incarico.

**Prossima sessione, proposta dall'agente:** la terza e ultima sessione dello stesso ticket, con la sezione «Cosa resta aperto» e il controllo di accessibilità sull'intera pagina; poi il ticket si chiude e la pagina è il pacchetto per il controllo B.

Messaggio:

/wayfinder .scratch/design-percorso-1/map.md — ticket «Pagina del pacchetto: clienti, accesso e situazioni comuni» (.scratch/design-percorso-1/issues/23-pacchetto-clienti-situazioni.md), terza sessione

Leggi AGENTS.md, STATUS.md, la mappa e il ticket, con i «Commenti» delle sessioni 1 e 2. In DESIGN.md leggi «Pacchetto per il controllo B (percorso 1)», «Componenti e token», «Dati limite e accessibilità (percorso 1)» e «Interazioni e stati (percorso 1)»; per «Cosa resta aperto» anche le voci aperte di STATUS.md («Prossimi passi»), PRODUCT.md §10.10 e i pareri elencati in DESIGN.md (ricevute, foto, accesso). Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Il ticket è già `claimed`: lavora solo su quello, con la skill `prototype` (ramo UI). Solo dati inventati; pagina privata, sorgente fuori dal repository.
- Riprendi il sorgente della pagina con lo strumento Artifact, azione «read» (https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF), e pubblica gli aggiornamenti sullo stesso indirizzo, con le immagini che la pagina ha già. Il sorgente letto è avvolto in uno scheletro `<!doctype html>…<body>`: per pubblicare togli quell'involucro, per provare in Chromium tienilo.
- In questa sessione: la sezione **«Cosa resta aperto»** della pagina (al posto di «Poi, nella seconda parte» nell'indice delle tappe): per ogni voce chi la aspetta, cosa tocca nella pagina e cosa ferma (pilota, lancio, niente), senza ripetere i dettagli che stanno nei documenti. Portami prima la forma della sezione come «prima e dopo» in un'immagine, una proposta alla volta, in parole semplici e con una raccomandazione motivata.
- Poi il controllo **`accessibility-audit`** (WCAG 2.2 AA) sull'intera pagina: contrasti misurati, tastiera, fuoco, nomi per lo screen reader, testo ingrandito al 200%, spaziatura del testo, movimento ridotto. Le correzioni che cambiano una regola di DESIGN.md me le porti una alla volta; le altre le applichi e me le dici.
- Controlla la pagina in Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, ricaricando per ogni schermata, su una copia con `<!doctype html>` come la pagina pubblicata; guarda a occhio l'interno delle cornici.
- Se ti carico lo ZIP delle immagini consegnate (sezione «Immagini dell'accesso: consegnate, da integrare» di START_HERE.md): mettile nella pagina, con le notturne per lo scuro al posto del velo, le misure giuste per ogni schermo (`srcset`/`image-set`) e le posizioni di tessera e ombra ricontrollate; mostrami la pagina d'accesso in scuro, prima e dopo, e misura i contrasti del modulo sopra la stanza.
- Alla fine chiudi il ticket con la risposta, aggiorna la mappa (Decisioni finora) e DESIGN.md, «Pacchetto per il controllo B».

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.


---

## Immagini dell'accesso: consegnate, da integrare

Il lavoro di generazione è terminato il 30/10/2026. La scelta visiva è in DESIGN.md, «Accesso, tessera e situazioni comuni»; consegna, verifiche e limiti sono in STATUS.md, «Immagini dell'accesso».

**Prima della terza sessione in Claude:** scarica dalla conversazione Codex e allega `Connetto-immagini-A-complete.zip`. Il repository non contiene le immagini e il percorso dell'ambiente Codex non è accessibile automaticamente da Claude.

Messaggio da aggiungere alla terza sessione del ticket sopra:

«Allego lo ZIP delle immagini di Connetto. Usa i file in `finali/`; leggi `Consegna.md`, `Elenco-file.csv` e `Verifiche.txt` nello ZIP e confronta i fogli in `confronti-finali/`. Mantieni le immagini fuori dal repository.

Sostituisci le immagini diurne e usa quelle con `-notte` nell'accesso in scuro al posto del velo. Mantieni le coordinate dei livelli e controlla visivamente ritaglio, angolo, allineamento di tessera e ombra e i segni C–Legame, Connetto e ƎE: il generatore non ha garantito identità pixel per pixel. Usa le risoluzioni corrette per computer e telefono (`srcset`/`image-set`).

Mostrami l'accesso in scuro prima e dopo. Misura nuovamente il contrasto sul modulo renderizzato, anche per il testo secondario: le misure sulle sole immagini non bastano dopo ritagli o ridimensionamenti nella pagina. Per `stanza-computer-notte`, verifica prima la collocazione nelle schermate interne rispetto a DESIGN.md, «Rifinitura», che finora esclude la stanza in scuro; non cambiare automaticamente pannelli o carte.

Le immagini restano solo nei prototipi fino al parere. Prosegui poi con «Cosa resta aperto» e il controllo di accessibilità previsti dalla sessione 3.»


---

**In pausa: la vista 3D su una planimetria vera.** La prova con piante inventate è chiusa (stile isometrico, arredi d'esempio con l'interruttore). La vista entra nella prima versione solo se regge su una planimetria vera. L'utente chiede una piantina al collaboratore di ƎE (25/10/2026). Deve essere di una casa dei fondatori o del collaboratore, con il consenso scritto; mai quella di un cliente. Quando la planimetria c'è, caricala nella sessione con questo messaggio:

/wayfinder .scratch/controllo-a/map.md — ticket «Prova: la vista 3D su una planimetria vera dei fondatori» (.scratch/controllo-a/issues/17-prova-planimetria-fondatori.md): allego la planimetria; il consenso scritto dei fondatori c'è.

Leggi AGENTS.md, STATUS.md, la mappa (sezione «Dopo la destinazione») e il ticket, poi in PRODUCT.md §12 le righe «Vista 3D indicativa» (23, 24 e 25/10/2026) e in DESIGN.md «Vista 3D indicativa (stile)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) e lavora solo su questo, con la skill `prototype`. Il codice delle prove precedenti si recupera con lo strumento Artifact, azione «read»:
  - la lettura dalla prima versione, https://claude.ai/artifact/Uwav9qpKCBQNkSskEWF5nZ;
  - la vista dalla terza, https://claude.ai/artifact/C2aRNbV3h59zmdQKs8z93q.
- La planimetria si lavora solo nella sessione: niente repository, commit o pagine pubblicate con la planimetria o con dati che la riconoscono; niente servizi esterni. Nel ticket solo metodo, numeri ed esito.
- Mostrami il risultato (ricalco, automatico, controlli e vista isometrica) e portami la decisione in parole semplici: la vista entra o no nella prima versione.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

**Il collaboratore di ƎE guarda lo spazio dell'operatore.** Il ticket è rivendicato: il messaggio con le cinque domande è pronto nel ticket, sotto «Commenti»; la quinta riguarda le ricevute dell'inquilino. L'utente condivide dal menu «Condividi» due pagine: il prototipo dell'operatore (https://claude.ai/artifact/8uYkEqTXrp27KWmc698JK9) e quello dell'inquilino (https://claude.ai/artifact/PB8wRY5NZT2jgYndnJLn2v). Le manda con il messaggio e, quando arrivano le risposte, incolla:

/wayfinder .scratch/design-percorso-1/map.md — ticket «Il collaboratore di ƎE guarda lo spazio dell'operatore» (.scratch/design-percorso-1/issues/05-collaboratore-guarda-operatore.md): le risposte del collaboratore sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa, il ticket e, in DESIGN.md, «Spazio dell'operatore (percorso 1)», «Schermate dell'inquilino (percorso 1)» e «Voce». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Registra le risposte in sintesi, senza nomi, abbinate al numero della domanda; se non si capisce a quale appartengono, chiedimelo.
- La risposta 5 decide le ricevute dell'inquilino: mesi a pillola (scelta provvisoria) o elenco semplice. Me la porti come scelta da confermare e la registri in DESIGN.md, «Schermate dell'inquilino (percorso 1)», e nel ticket «Schermate dell'inquilino».
- Le correzioni che ne escono me le porti una alla volta, in parole semplici, con una raccomandazione; un cambio di regole va in DESIGN.md con data e motivo. Chiudi il ticket quando le correzioni sono decise.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Risposte del collaboratore:

---

## Solo se l'utente lo chiede: rifinitura dello spazio dell'operatore

Le regole della rifinitura valgono per proprietari e inquilini; lo spazio dell'operatore resta com'era. Per rivederlo, prima si apre un ticket nella mappa (è nel «Non ancora specificato»). Messaggio:

/wayfinder .scratch/design-percorso-1/map.md — apri e lavora un ticket «Rifinitura dello spazio dell'operatore» dal «Non ancora specificato».

Leggi AGENTS.md, STATUS.md, la mappa e, in DESIGN.md, «Indicazioni dell'utente», «Spazio dell'operatore (percorso 1)» e «Rifinitura delle schermate interne (percorso 1)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Crea il ticket (tipo `prototype`), rivendicalo e lavora solo su quello, con le skill `prototype` (ramo UI) e `grilling`.
- Leggi con lo strumento Artifact il prototipo dell'operatore (https://claude.ai/artifact/8uYkEqTXrp27KWmc698JK9) e quello della rifinitura (https://claude.ai/artifact/9CQ4BtLZxYXJRBKiEfpZGj). Prima e dopo dietro un selettore, partendo dalla coda e da «Al banco».
- Le scelte me le fai una alla volta, in parole semplici, con una raccomandazione motivata. Un cambio delle regole già approvate va in DESIGN.md come cambiato, non cancellato.
- Prototipo usa e getta, fuori dal repository, solo dati inventati. Controllalo nel browser a 360, 390, 768, 900, 1024, 1180 e 1366 px, ricaricando la pagina per ogni schermata.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## Quando arriva il parere sul nome Connetto

Incollare questo messaggio e aggiungere l'esito subito sotto, in parole proprie (senza costi né dati del professionista):

/wayfinder .scratch/design-percorso-1/map.md — ticket «Parere di un consulente in marchi sul nome Connetto» (.scratch/design-percorso-1/issues/08-parere-nome-connetto.md): l'esito del parere è in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa, il ticket e docs/ricerca/nome-connetto.md. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`), registra l'esito in sintesi e chiudilo.
- Se il parere chiede di cambiare il nome o di usarne una forma diversa, le scelte me le fai una alla volta, in parole semplici, con una raccomandazione motivata; per i nomi candidati fai prima la stessa ricerca preliminare (skill `research`). Nessuna registrazione di domini o marchi.
- Aggiorna PRODUCT.md §1 e §12, DESIGN.md e la mappa.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Esito del parere:

---

## In pausa: Prova su iPhone

Messa da parte dall'utente il 24/10/2026 («ci penseremo poi»). Il ticket è rivendicato e la pagina di prova è pubblicata: https://claude.ai/artifact/5ousKXbFpFsGqd5mrtcH7t. L'elenco dei controlli è nel ticket, sotto «Commenti». Per scelta dell'utente (24/10/2026) bastano i controlli in Safari: schede in basso, colore in alto, schermata Home e gesto dal bordo si verificano sulla prima versione della piattaforma. Fatti i controlli rimasti, incollare:

/wayfinder .scratch/design-percorso-1/map.md — ticket «Prova su iPhone: la piattaforma aggiunta alla schermata Home» (.scratch/design-percorso-1/issues/06-prova-iphone-schermata-home.md): cosa ho visto, la versione di iOS e il testo della diagnosi sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa e il ticket, poi docs/ricerca/hig-web.md (§15 e §17) e, in DESIGN.md, «Accesso, tessera e situazioni comuni (percorso 1)» («Dalla schermata Home») e «Rifinitura delle schermate interne (percorso 1)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Registra l'esito nel ticket, punto per punto, distinguendo ciò che dipende dalla cornice di claude.ai da ciò che dipende dalla pagina (la diagnosi dice se la pagina era in una cornice). Aggiorna §17 della ricerca con ciò che è verificato.
- Le correzioni che ne escono me le porti una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione. Un cambio delle regole già approvate va in DESIGN.md come cambiato, non cancellato. Se per i punti legati alla cornice serve un indirizzo tutto della pagina, chiedimelo: è un servizio esterno.
- Lavora con la skill `mobile-native`; per le scelte, `grilling`. Se rifai la pagina, controllala a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, ricaricando per ogni schermata. Nessun SMS vero, nessun account o servizio reale senza la mia autorizzazione.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Cosa ho visto, versione di iOS e diagnosi:

---

## Quando arrivano i chiarimenti di ƎE

I chiarimenti sono nel ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md), sotto «Commenti (Comments)», dal titolo «Chiarimenti per ƎE» fino alla domanda 6: vanno mandati al collaboratore. Quando tornano, incollare questo messaggio e aggiungere le risposte subito sotto:

/wayfinder .scratch/controllo-a/map.md — chiarimenti del ticket chiuso «Fatti dall'agenzia ƎE» (.scratch/controllo-a/issues/06-fatti-agenzia.md): le risposte di ƎE sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket; i chiarimenti sono in fondo, sotto «Commenti (Comments)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Abbina ogni risposta al numero del chiarimento; se non si capisce a quale appartiene, chiedimelo invece di supporre.
- Registrale sotto «Risposta (Answer)», in una parte «Chiarimenti», senza riaprire il ticket: solo forma aggregata, un numero di 1 o 2 che fa riconoscere qualcuno diventa «meno di 3», niente allegati nel repository.
- Ripeti i controlli dei punti che toccano, compresi quelli «Da ricontrollare» nella risposta del ticket chiuso «Specifica del percorso 1» (.scratch/controllo-a/issues/09-specifica-percorso-1.md), e aggiorna le note nei ticket aperti che li aspettano (Prezzo e condizioni dell'adesione). Un contrasto con PRODUCT.md §10 o §12 me lo dici in parole semplici. Le decisioni non si prendono qui.
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Risposte di ƎE ai chiarimenti:

---

## Quando si vuole: Prezzo e condizioni dell'adesione

Non blocca il design; va chiuso prima del pilota. Messaggio:

/wayfinder .scratch/controllo-a/map.md — ticket «Prezzo e condizioni dell'adesione» (.scratch/controllo-a/issues/10-prezzo-condizioni-adesione.md)

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket, compresi i «Commenti (Comments)». Poi, solo per le parti che servono, PRODUCT.md §6 e §12 e docs/ricerca/mercato.md. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Lavora solo su questo ticket, con le skill `grilling` e `domain-modeling`.
- Le decisioni (prezzo e periodicità, cosa include, rapporto con il compenso di gestione e trattenuta dal canone) chiedimele una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione.
- Registra le decisioni in PRODUCT.md §12 e aggiorna §6. Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## In alternativa: Prova sulle bollette

Resta libera, richiede fondatori e personale di ƎE volontari e non blocca il design del percorso 1. Messaggio:

/wayfinder .scratch/controllo-a/map.md — ticket «Prova sulle bollette» (.scratch/controllo-a/issues/08-prova-bollette.md)

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket, poi la decisione «Prova sulle bollette con bollette reali» in PRODUCT.md §12 e, solo per le parti che servono, docs/ricerca/bollette.md §4 e docs/ricerca/privacy-dati.md sezione 10 (punto sulla prova). Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Lavora solo su questo ticket.
- Come prima cosa chiedimi di confermare cosa si oscura nelle bollette dei volontari (proposta del ticket: anche codice cliente, POD o PDR, IBAN e QR; lettura del QR su avvisi inventati; consenso scritto dei volontari). Una domanda alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione.
- Poi prepara l'elenco da compilare per il conteggio (parte 1) e il testo del consenso per i volontari, pronti da copiare. Nessun dato personale nel repository: solo conteggi e metodo, in una sezione nuova di docs/ricerca/bollette.md.
- La misura della lettura (parte 3) si fa solo quando i volontari hanno caricato le bollette oscurate nella sessione; se non ci sono, il ticket resta `claimed` e lo annoti sotto «Commenti (Comments)».
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate. La prova della parte 3, se si fa, è usa e getta (skill `prototype`) e non resta nel repository.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md con il messaggio per la sessione successiva, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## Quando arrivano i preventivi delle tessere

La richiesta è pronta nel ticket [Ricerca: tessere fisiche](.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md), sotto «Richiesta di preventivo»; la manda l'utente o ƎE. Quando arrivano le risposte, incollare questo messaggio con le risposte in sintesi (senza dati del fornitore che non servono):

/wayfinder .scratch/controllo-a/map.md — preventivi delle tessere fisiche, ticket chiuso «Ricerca: tessere fisiche, fornitori, personalizzazione, ordini e spedizioni» (.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md): le risposte dei fornitori sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, il ticket, docs/ricerca/tessere.md e docs/ricerca/tessera-contactless.md (sezione 5) e in PRODUCT.md §12 la riga «Tessera fisica nel pilota». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Confronta i preventivi con i requisiti della richiesta (chip DESFire EV3 originale, lamina arancione e antenna, codice da file, chiavi, campione) e segnala cosa manca.
- Portami una alla volta, con una raccomandazione: fornitore, quantità (era consigliato 250), lamina o plastica a colore fisso se la lamina costa troppo, campione da ordinare. Nessun ordine o pagamento senza la mia autorizzazione esplicita.
- Registra le decisioni in PRODUCT.md §12 e nel ticket.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Risposte dei fornitori:

---

**Riprendere in generale:** «Leggi AGENTS.md e STATUS.md e riprendi dal prossimo passo indicato».
