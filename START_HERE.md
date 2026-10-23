# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

Lo studio è chiuso: il controllo A è superato (23/10/2026, [PRODUCT.md](PRODUCT.md) §12, riga «Controllo A») e la mappa [Dalla specifica del percorso 1 al design](.scratch/controllo-a/map.md) ha raggiunto la destinazione. Il prossimo passo è il **design del percorso 1** ([docs/METODO.md](docs/METODO.md), passo 6). Il design ha più scelte che dipendono l'una dall'altra (direzione, tre spazi, telefono e desktop, email e SMS): il messaggio apre una mappa nuova. Messaggio:

---

/wayfinder Design del percorso 1: attivazione e canone del mese (METODO.md, passo 6). Nuova mappa in .scratch/design-percorso-1/.

Leggi AGENTS.md, STATUS.md, DESIGN.md e docs/rules/APPLE_DESIGN.md; poi PRODUCT.md §10 (la specifica), la riga «Controllo A» di §12 (promessa, cosa resta fuori) e §13; GLOSSARY.md per le parole. La mappa chiusa .scratch/controllo-a/map.md e il ticket «Controllo A e passaggio al design» solo per le parti che servono. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Prima la destinazione, da confermare con me (skill `grilling` e `domain-modeling`); proposta: una direzione di design del percorso 1 scelta da me e registrata in DESIGN.md, per proprietario, inquilino e operatore di ƎE, su telefono e desktop, con email e SMS, pronta per il controllo B insieme all'architettura.
- Poi la mappa, in ampiezza, con i ticket che si possono già scrivere e il resto in «Non ancora specificato». Riferimento principale le Apple Human Interface Guidelines; le indicazioni di DESIGN.md valgono come orientamento. Le domande me le fai una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione.
- Prototipi solo usa e getta (skill `prototype`), con direzioni davvero diverse dietro un selettore e solo dati inventati; nessuno stack scelto, nessun codice applicativo. Le scelte visive si registrano in DESIGN.md con data e motivo.
- Restano fuori dalla mappa, salvo mia richiesta: la vista 3D indicativa (prima la ricerca e la prova nei ticket 14 e 15 della mappa chiusa), prezzo e condizioni dell'adesione, tessere fisiche, bollette.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

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
