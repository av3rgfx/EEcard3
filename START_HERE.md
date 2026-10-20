# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

L'elenco da consegnare all'agenzia è in [.scratch/controllo-a/issues/06-fatti-agenzia.md](.scratch/controllo-a/issues/06-fatti-agenzia.md), sotto «Commenti (Comments)»: dal titolo «Domande per ƎE» fino alla domanda 29.

**Quando arrivano le risposte dell'agenzia**, incollare questo messaggio e, subito sotto, le risposte del collaboratore (testo, foto o PDF dell'elenco compilato):

---

/wayfinder .scratch/controllo-a/map.md — ticket «Fatti dall'agenzia ƎE» (.scratch/controllo-a/issues/06-fatti-agenzia.md): sono arrivate le risposte dell'agenzia, le trovi in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket; l'elenco delle domande è sotto «Commenti (Comments)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Il ticket è già `claimed` dalla sessione che ha preparato l'elenco: continua tu. Lavora solo su questo ticket.
- Registra le risposte sotto «Risposta (Answer)», seguendo i numeri delle domande, solo in forma aggregata: niente nomi, indirizzi o importi di una singola persona o casa; un numero di 1 o 2 che fa riconoscere qualcuno diventa «meno di 3». Le domande senza risposta restano segnate come tali, senza riempirle con stime tue. Non salvare nel repository i documenti allegati (modelli di incarico, ricevute, informative, foto o PDF dell'elenco): riassumine solo il contenuto.
- Controlla i punti «Da controllare quando arrivano le risposte» del ticket. Un fatto che contraddice una decisione di PRODUCT.md §12 si segnala nel ticket «Specifica del percorso 1: attivazione e canone del mese» e me lo dici in parole semplici.
- Con le risposte 5 e 6 controlla anche i punti «Da ricontrollare» del ticket chiuso «Chi fornisce la piattaforma e chi vende l'adesione nel pilota» (.scratch/controllo-a/issues/11-chi-fornisce-la-piattaforma.md): annota l'esito nel ticket della specifica e dimmi se serve un parere prima del pilota.
- Se una risposta è ambigua o manca un dato che serve davvero a un ticket, prepara una domanda di chiarimento breve per il collaboratore, invece di supporre.
- Chiudi il ticket (`Status: resolved`) e aggiungi una riga in «Decisioni finora» della mappa. Le decisioni che i fatti fanno emergere vanno nei ticket aperti: qui non si prendono. Alla fine dimmi quali ticket sono diventati liberi e quale consigli per primo.
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md con il messaggio per la sessione successiva, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Risposte dell'agenzia:

---

## Se le risposte non sono ancora arrivate

L'unico ticket libero è «Prova sulle bollette», che richiede fondatori e personale di ƎE volontari. Messaggio:

/wayfinder .scratch/controllo-a/map.md — ticket «Prova sulle bollette» (.scratch/controllo-a/issues/08-prova-bollette.md)

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket, poi la decisione «Prova sulle bollette con bollette reali» in PRODUCT.md §12 e, solo per le parti che servono, docs/ricerca/bollette.md §4 e docs/ricerca/privacy-dati.md sezione 10 (punto sulla prova). Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Lavora solo su questo ticket: «Fatti dall'agenzia ƎE» resta in attesa delle risposte del collaboratore e non va toccato.
- Come prima cosa chiedimi di confermare cosa si oscura nelle bollette dei volontari (proposta del ticket: anche codice cliente, POD o PDR, IBAN e QR; lettura del QR su avvisi inventati; consenso scritto dei volontari). Una domanda alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione.
- Poi prepara l'elenco da compilare per il conteggio (parte 1) e il testo del consenso per i volontari, pronti da copiare. Nessun dato personale nel repository: solo conteggi e metodo, in una sezione nuova di docs/ricerca/bollette.md.
- La misura della lettura (parte 3) si fa solo quando i volontari hanno caricato le bollette oscurate nella sessione; se non ci sono, il ticket resta `claimed` e lo annoti sotto «Commenti (Comments)».
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate. La prova della parte 3, se si fa, è usa e getta (skill `prototype`) e non resta nel repository.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md con il messaggio per la sessione successiva, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

**Riprendere in generale:** «Leggi AGENTS.md e STATUS.md e riprendi dal prossimo passo indicato».
