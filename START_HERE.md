# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

---

/wayfinder .scratch/controllo-a/map.md — ticket «Fatti dall'agenzia ƎE» (.scratch/controllo-a/issues/06-fatti-agenzia.md)

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket «Fatti dall'agenzia ƎE», poi le risposte delle ricerche che lo bloccavano (ticket 01 e 03) e, solo per le parti che servono, docs/ricerca/incasso-canoni.md e docs/ricerca/privacy-dati.md. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. È un compito: lavora solo su questo ticket.
- Prepara l'elenco di domande per ƎE, partendo da quelle del ticket. Raggruppale per tema (clienti e compensi, case gestite e numeri, canone al banco e ricevute, consegna al proprietario, persone e ore, tecnici). Usa risposte chiuse o numeri dove si può. Per ogni domanda indica a quale ticket serve. Scrivilo in fondo al ticket, sotto «Commenti (Comments)», pronto da copiare per il mio collaboratore. Niente nomi, indirizzi o importi riconducibili a una persona: chiedi solo numeri aggregati e prassi.
- Prima di consegnarlo, mostrami l'elenco e chiedimi solo le decisioni (per esempio se una domanda è troppo delicata da fare); i fatti non chiederli a me, sono il contenuto dell'elenco.
- Se le risposte arrivano in questa sessione, registrale in forma aggregata sotto «Risposta (Answer)», chiudi il ticket (`Status: resolved`), aggiungi una riga in «Decisioni finora» della mappa e segnala se un fatto contraddice una decisione di PRODUCT.md §12. Se non arrivano, lascia il ticket `claimed` e scrivi in STATUS.md che si attende la risposta dell'agenzia.
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e questo file con il messaggio per la sessione successiva, poi fai commit e push sul branch della sessione.

---

## Sessioni successive
- **Ticket in parallelo:** oggi si possono lavorare in sessioni separate anche «Prova sulle bollette» e «Chi fornisce la piattaforma e chi vende l'adesione nel pilota»: scrivere `/wayfinder .scratch/controllo-a/map.md` seguito dal nome del ticket.
- **Dopo i fatti dall'agenzia:** il primo ticket libero sarà «Materiali per i colloqui».
- **Riprendere in generale:** «Leggi AGENTS.md e STATUS.md e riprendi dal prossimo passo indicato».
