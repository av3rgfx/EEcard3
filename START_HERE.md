# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

Le risposte dell'agenzia sono registrate e il ticket «Fatti dall'agenzia ƎE» è chiuso. Il prossimo ticket consigliato è **«Materiali per i colloqui»**, ora libero. Messaggio:

---

/wayfinder .scratch/controllo-a/map.md — ticket «Materiali per i colloqui» (.scratch/controllo-a/issues/07-materiali-colloqui.md)

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket, compresi i fatti dell'agenzia sotto «Commenti (Comments)». Poi, solo per le parti che servono, la «Risposta (Answer)» del ticket «Fatti dall'agenzia ƎE» (.scratch/controllo-a/issues/06-fatti-agenzia.md) e docs/ricerca/privacy-dati.md sezione 10 (colloqui dello studio). Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Lavora solo su questo ticket, con la skill `ux-research`.
- Le scelte che spettano a me (quanti colloqui per gruppo, chi li conduce, eventuale ringraziamento ai partecipanti, registrazione dell'audio, verifica di informativa e consenso da parte di un professionista, dove salvare i materiali) chiedimele una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione.
- Il piano deve stare nei limiti indicati da ƎE: meno di 3 persone per condurre, 8 ore in tutto, in agenzia o al telefono. ƎE non ha un consulente per la privacy.
- Poi prepara piano, criteri di selezione e invito, guide per gruppo, informativa e consenso e scheda di sintesi anonima, pronti da usare. Nessun dato personale nel repository; mai partecipanti, citazioni o risultati inventati.
- Se il lavoro non sta in una sessione, il ticket resta `claimed` e annoti a che punto sei sotto «Commenti (Comments)».
- Alla chiusura, «Svolgimento dei colloqui e sintesi anonime» passa dal «Non ancora specificato» della mappa a uno o più ticket, da aggiungere fra i blocchi della «Specifica del percorso 1: attivazione e canone del mese».
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md con il messaggio per la sessione successiva, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## Quando arrivano i chiarimenti di ƎE

I chiarimenti sono nel ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md), sotto «Commenti (Comments)», dal titolo «Chiarimenti per ƎE» fino alla domanda 8: vanno mandati al collaboratore. Quando tornano, incollare questo messaggio e aggiungere le risposte subito sotto:

/wayfinder .scratch/controllo-a/map.md — chiarimenti del ticket chiuso «Fatti dall'agenzia ƎE» (.scratch/controllo-a/issues/06-fatti-agenzia.md): le risposte di ƎE sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket; i chiarimenti sono in fondo, sotto «Commenti (Comments)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Abbina ogni risposta al numero del chiarimento; se non si capisce a quale appartiene, chiedimelo invece di supporre.
- Registrale sotto «Risposta (Answer)», in una parte «Chiarimenti», senza riaprire il ticket: solo forma aggregata, un numero di 1 o 2 che fa riconoscere qualcuno diventa «meno di 3», niente allegati nel repository.
- Ripeti i controlli dei punti che toccano e aggiorna le note nei ticket aperti che li aspettano (Specifica del percorso 1, Proposta di pre-adesione, Materiali per i colloqui). Un contrasto con PRODUCT.md §12 si segnala nella Specifica e me lo dici in parole semplici. Le decisioni non si prendono qui.
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Risposte di ƎE ai chiarimenti:

---

## In alternativa: Prova sulle bollette

Resta libera e richiede fondatori e personale di ƎE volontari. Messaggio:

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
