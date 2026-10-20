# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

---

/wayfinder .scratch/controllo-a/map.md — ticket «Chi fornisce la piattaforma e chi vende l'adesione nel pilota» (.scratch/controllo-a/issues/11-chi-fornisce-la-piattaforma.md)

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket, poi la risposta della «Ricerca: titolarità e privacy dei dati» (ticket 03) e, solo per le parti che servono, docs/ricerca/privacy-dati.md (sezioni 2 e 13). Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Lavora solo su questo ticket: «Fatti dall'agenzia ƎE» resta in attesa delle risposte del collaboratore e non va toccato.
- Sono decisioni mie: usa le skill `grilling` e `domain-modeling`, una domanda alla volta, in parole semplici, ciascuna con una raccomandazione motivata e con le conseguenze di ogni opzione.
- Le domande 5 e 6 dell'elenco per ƎE (incarico scritto e privacy) servono anche qui. Se le risposte non ci sono ancora, decidi senza e annota nel ticket cosa ricontrollare quando arrivano.
- Registra le decisioni in PRODUCT.md §12 con data e motivo; la discussione resta nel ticket sotto «Risposta (Answer)». Chiudi il ticket (`Status: resolved`) e aggiungi una riga in «Decisioni finora» della mappa. Se la decisione cambia altri ticket (ruoli dei dati nella specifica, chi incassa la quota nella pre-adesione), aggiornali.
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e questo file con il messaggio per la sessione successiva, poi fai commit e push sul branch della sessione.

---

## Sessioni successive

**Quando arrivano le risposte dell'agenzia**, incollare questo messaggio seguito dalle risposte del collaboratore:

/wayfinder .scratch/controllo-a/map.md — ticket «Fatti dall'agenzia ƎE» (.scratch/controllo-a/issues/06-fatti-agenzia.md): sono arrivate le risposte dell'agenzia, le trovi qui sotto.

Leggi AGENTS.md, STATUS.md, la mappa e il ticket; l'elenco delle domande è sotto «Commenti (Comments)».

- Il ticket è già `claimed` dalla sessione che ha preparato l'elenco: continua tu.
- Registra le risposte sotto «Risposta (Answer)», solo in forma aggregata: niente nomi, indirizzi o importi di una singola persona o casa; un numero di 1 o 2 che fa riconoscere qualcuno diventa «meno di 3». Non salvare nel repository i documenti allegati (modelli di incarico, ricevute, informative): riassumine solo il contenuto.
- Controlla i punti «Da controllare quando arrivano le risposte» del ticket. Un fatto che contraddice una decisione di PRODUCT.md §12 si segnala nel ticket «Specifica del percorso 1: attivazione e canone del mese» e me lo dici in parole semplici.
- Chiudi il ticket (`Status: resolved`) e aggiungi una riga in «Decisioni finora» della mappa. Le decisioni che i fatti fanno emergere vanno nei ticket aperti: qui non si prendono.
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione.

**Altro ticket libero:** «Prova sulle bollette» (richiede i volontari di ƎE): scrivere `/wayfinder .scratch/controllo-a/map.md` seguito dal nome del ticket.

**Riprendere in generale:** «Leggi AGENTS.md e STATUS.md e riprendi dal prossimo passo indicato».
