# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

Il **design del percorso 1** ([docs/METODO.md](docs/METODO.md), passo 6) ha una mappa: [Design del percorso 1](.scratch/design-percorso-1/map.md). Approvati il 23/10/2026:
- direzione **«Terracotta»** con il chiaro in vetrina;
- spazio dell'operatore;
- schermate del proprietario e dell'inquilino (le ricevute dell'inquilino a mesi a pillola sono provvisorie, in attesa del collaboratore di ƎE);
- **accesso, tessera digitale e situazioni comuni**: accesso con un codice, pagina d'accesso con la tessera di rame, benvenuto animato, scheda «Tessera», disdetta da soli.

Voce al «tu» anche per i clienti ([DESIGN.md](DESIGN.md)). Nome di lavoro **Connetto**, simbolo **C–Legame** ([assets/marchio/](assets/marchio/README.md)); il parere sul marchio è chiesto subito e il suo esito va nel ticket «Parere di un consulente in marchi sul nome Connetto».

**Prima della prossima sessione:** unire in `main` la PR del branch `claude/blissful-pasteur-9poend` (promemoria sulle librerie di componenti). Se non è ancora unita, la sessione deve partire da quel branch.

**Rifinitura estetica delle schermate interne.** Messaggio:

---

/wayfinder .scratch/design-percorso-1/map.md — ticket «Rifinitura estetica delle schermate interne» (.scratch/design-percorso-1/issues/13-rifinitura-estetica.md)

Leggi AGENTS.md, STATUS.md, la mappa e il ticket. Poi DESIGN.md: «Indicazioni dell'utente», «Punti fermi del percorso 1», «Direzione del percorso 1», «Spazio dell'operatore (percorso 1)» per le larghezze, «Schermate del proprietario (percorso 1)», «Schermate dell'inquilino (percorso 1)» e «Accesso, tessera e situazioni comuni (percorso 1)». Leggi anche il ticket chiuso «Accesso, adesione e situazioni comuni», soprattutto gli ultimi commenti. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti. Il simbolo in assets/marchio/ e le immagini della stanza e della tessera di rame sono materiali dell'utente e fanno parte del progetto.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Lavora solo su questo ticket, con la skill `prototype` (ramo UI); per le scelte, `grilling`; per la rifinitura, `emil-design-eng` e `apple-design`.
- Le funzioni mi convincono, l'estetica meno: voglio le schermate interne all'altezza della pagina d'accesso. Parti dalla casa dell'inquilino e da quella del proprietario, su telefono e desktop, con «prima» e «dopo» dietro un selettore.
- Per restare coerente leggi con lo strumento Artifact (azione «read») il prototipo dell'accesso, https://claude.ai/artifact/3LkcGCmp2P4SNpVAFbP92s, e quelli di inquilino e proprietario: i link sono in STATUS.md, «Prototipi pubblicati». Le immagini della stanza e della tessera sono pubblicate con il prototipo dell'accesso (leggile con l'azione «read» e `path`).
- Le scelte me le fai una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione. Un cambio delle regole già approvate me lo porti come scelta e va in DESIGN.md come cambiato, non cancellato.
- Prototipo usa e getta, fuori dal repository, solo dati inventati e importi come «9.876,54 €». Chiaro per primo, poi scuro, con il tasto per nascondere i comandi.
- Prima di mostrarmelo controllalo nel browser disponibile: a 360, 390, 768, 900, 1024, 1180 e 1366 px; che nessun pulsante esca dal suo riquadro; che la pagina non scorra di lato. Ricarica la pagina per ogni schermata e verifica che sia quella giusta (STATUS.md, lezione del 23/10). Nessuno stack scelto, nessun codice applicativo.
- Le librerie Animate UI e Watermelon UI si valutano all'architettura (ARCHITECTURE.md, «Da valutare al passo 7»): non installarle e non copiarne il codice. Se ti mando un link di Watermelon, usalo solo come idea da ridisegnare nello stile di Connetto.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

In qualsiasi momento, con un messaggio simile cambiando nome e file: «Prova su iPhone: la piattaforma aggiunta alla schermata Home» (.scratch/design-percorso-1/issues/06-prova-iphone-schermata-home.md). Ora conviene provare anche la pagina d'accesso del prototipo, il codice proposto sopra la tastiera e l'animazione del benvenuto.

**Il collaboratore di ƎE guarda lo spazio dell'operatore.** Il ticket è rivendicato: il messaggio con le cinque domande è pronto nel ticket, sotto «Commenti»; la quinta riguarda le ricevute dell'inquilino. L'utente condivide dal menu «Condividi» due pagine: il prototipo dell'operatore (https://claude.ai/artifact/8uYkEqTXrp27KWmc698JK9) e quello dell'inquilino (https://claude.ai/artifact/PB8wRY5NZT2jgYndnJLn2v). Le manda con il messaggio e, quando arrivano le risposte, incolla:

/wayfinder .scratch/design-percorso-1/map.md — ticket «Il collaboratore di ƎE guarda lo spazio dell'operatore» (.scratch/design-percorso-1/issues/05-collaboratore-guarda-operatore.md): le risposte del collaboratore sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa, il ticket e, in DESIGN.md, «Spazio dell'operatore (percorso 1)», «Schermate dell'inquilino (percorso 1)» e «Voce». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Registra le risposte in sintesi, senza nomi, abbinate al numero della domanda; se non si capisce a quale appartengono, chiedimelo.
- La risposta 5 decide le ricevute dell'inquilino: mesi a pillola (scelta provvisoria) o elenco semplice. Me la porti come scelta da confermare e la registri in DESIGN.md, «Schermate dell'inquilino (percorso 1)», e nel ticket «Schermate dell'inquilino».
- Le correzioni che ne escono me le porti una alla volta, in parole semplici, con una raccomandazione; un cambio di regole va in DESIGN.md con data e motivo. Chiudi il ticket quando le correzioni sono decise.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Risposte del collaboratore:

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

## Prima dell'architettura: Vista 3D indicativa

Decisa come prova a condizione il 23/10/2026 (PRODUCT.md §12); non blocca il design del percorso 1. Messaggio per la ricerca (la prova, ticket 15, viene dopo):

/wayfinder .scratch/controllo-a/map.md — ticket «Ricerca: dalla planimetria catastale alla vista 3D indicativa» (.scratch/controllo-a/issues/14-ricerca-vista-3d.md)

Leggi AGENTS.md, STATUS.md, la mappa (sezione «Dopo la destinazione») e il ticket, poi la decisione «Vista 3D indicativa» in PRODUCT.md §12. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Fai la ricerca con la skill `research`, su fonti primarie con la data di lettura, in docs/ricerca/vista-3d.md.
- Nessun servizio, account o caricamento di planimetrie vere senza la mia autorizzazione. Le decisioni che emergono me le porti una alla volta, in parole semplici.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

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

## Prima del pilota: Ricerca sulle tessere fisiche

Chiesta dall'utente il 22/10/2026; non blocca il design. Messaggio:

/wayfinder .scratch/controllo-a/map.md — ticket «Ricerca: tessere fisiche, fornitori, personalizzazione, ordini e spedizioni» (.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md)

Leggi AGENTS.md, STATUS.md, la mappa e il ticket, poi PRODUCT.md §5.6 e la decisione «Tessera (T6)» in §12. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Fai la ricerca con la skill `research`, su fonti primarie con la data di lettura, in docs/ricerca/tessere.md: fornitori, costi per piccole tirature, personalizzazione su richiesta, ordini e scorte, consegna al banco, ordine dalla piattaforma con spedizione a pagamento, blocco e sostituzione.
- Nessun ordine, preventivo chiesto, account o contatto con fornitori senza la mia autorizzazione. Le decisioni che emergono me le porti una alla volta, in parole semplici.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

**Riprendere in generale:** «Leggi AGENTS.md e STATUS.md e riprendi dal prossimo passo indicato».
