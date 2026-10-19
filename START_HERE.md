# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

---

/wayfinder

Leggi AGENTS.md, STATUS.md, GLOSSARY.md, PRODUCT.md (in particolare §10, §12 e §13) e docs/STUDIO.md, partendo dalla destinazione in cima. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

Costruisci la mappa delle decisioni verso la destinazione confermata il 19/10/2026: **superare il controllo A con le evidenze**, arrivando alla specifica del primo percorso completo, attivazione e canone del mese per le case gestite da ƎE, sostenuta da colloqui con persone vere, da una prova di pre-adesione con un prezzo e dalle ricerche che potrebbero cambiarla. I criteri di arrivo sono in docs/STUDIO.md.

- Usa il tracker Local Markdown già configurato: mappa e ticket in `.scratch/`, nessun ticket, commento o branch remoto.
- Trasforma in ticket solo le domande già precise: ricerche (obblighi dell'agenzia che incassa i canoni al banco, adempimenti della locazione, titolarità e privacy dei dati, alternative sul mercato, email che non sembrano spam); materiali per i colloqui e per la pre-adesione (skill `ux-research`); prova sulle bollette; specifica del percorso 1. Il resto va in «Non ancora specificato»; ciò che PRODUCT.md §12 dichiara fuori dalla prima versione va in «Fuori ambito».
- Le domande ancora aperte con l'utente sono in STATUS.md: chiedi solo decisioni, i fatti cercali tu.
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e questo file con il messaggio per la sessione successiva, poi fai commit e push sul branch della sessione.

---

## Sessioni successive
- **Lavorare sulla mappa:** scrivere `/wayfinder` con il percorso della mappa (`.scratch/<nome>/map.md`); l'agente prende il primo ticket libero.
- **Riprendere in generale:** «Leggi AGENTS.md e STATUS.md e riprendi dal prossimo passo indicato».
