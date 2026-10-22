# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

Il 22/10/2026 l'utente ha deciso: niente colloqui né pre-adesione; dopo la specifica del percorso 1 e il controllo A si passa al design. Il prossimo ticket è **«Specifica del percorso 1: attivazione e canone del mese»**, ora libero. Messaggio:

---

/wayfinder .scratch/controllo-a/map.md — ticket «Specifica del percorso 1: attivazione e canone del mese» (.scratch/controllo-a/issues/09-specifica-percorso-1.md)

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket, compresi i «Commenti (Comments)». Poi PRODUCT.md §7, §12 e §13, GLOSSARY.md e, solo per le parti che servono, le «Risposte (Answer)» dei ticket chiusi e le ricerche in docs/ricerca/ che il ticket cita. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Lavora solo su questo ticket, con le skill `grilling` e `domain-modeling`; `ux-strategy` per le misure di successo del pilota, senza valori inventati.
- Comincia dai due contrasti parziali sotto «Commenti» (chi fa l'attivazione con meno di 3 persone in ƎE; canoni pagati con bonifico al proprietario), poi l'attivazione, poi il canone del mese.
- Le decisioni chiedimele una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione. Prezzo, periodicità e trattenuta della quota non si decidono qui: sono in «Prezzo e condizioni dell'adesione».
- Registra la specifica in PRODUCT.md §10, le misure in §13, le decisioni in §12, i termini decisi in GLOSSARY.md. Se non sta in una sessione, dividi il ticket in «attivazione» e «canone del mese»: il ticket resta `claimed` e annoti a che punto sei sotto «Commenti (Comments)».
- Alla chiusura, «Controllo A e passaggio al design» passa dal «Non ancora specificato» della mappa a un ticket.
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md con il messaggio per la sessione successiva, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## Quando arrivano i chiarimenti di ƎE

I chiarimenti sono nel ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md), sotto «Commenti (Comments)», dal titolo «Chiarimenti per ƎE» fino alla domanda 6: vanno mandati al collaboratore. Quando tornano, incollare questo messaggio e aggiungere le risposte subito sotto:

/wayfinder .scratch/controllo-a/map.md — chiarimenti del ticket chiuso «Fatti dall'agenzia ƎE» (.scratch/controllo-a/issues/06-fatti-agenzia.md): le risposte di ƎE sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket; i chiarimenti sono in fondo, sotto «Commenti (Comments)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Abbina ogni risposta al numero del chiarimento; se non si capisce a quale appartiene, chiedimelo invece di supporre.
- Registrale sotto «Risposta (Answer)», in una parte «Chiarimenti», senza riaprire il ticket: solo forma aggregata, un numero di 1 o 2 che fa riconoscere qualcuno diventa «meno di 3», niente allegati nel repository.
- Ripeti i controlli dei punti che toccano e aggiorna le note nei ticket aperti che li aspettano (Specifica del percorso 1, Prezzo e condizioni dell'adesione). Un contrasto con PRODUCT.md §12 si segnala nella Specifica e me lo dici in parole semplici. Le decisioni non si prendono qui.
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

**Riprendere in generale:** «Leggi AGENTS.md e STATUS.md e riprendi dal prossimo passo indicato».
