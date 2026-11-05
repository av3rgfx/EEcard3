# Integrazione con il sito di ƎE: contratto delle valutazioni e della rete

Type: grilling
Status: open
Blocked by: 05, 08
Mappa: [Proposte del collaboratore di ƎE del 4/11/2026](../map.md)

## Domanda (Question)

Aperto il 5/11/2026 dopo la consegna del sito di ƎE (repository separato `av3rgfx/Conneto-Sito`, che da qui non si modifica). Il contratto proposto è in [docs/integrazione-sito.md](../../../docs/integrazione-sito.md): elenco delle valutazioni pubblicate (campi decisi il 3/11/2026, formato proposto) ed eventuale elenco dei professionisti della rete ƎE con il loro sì al sito. Nessun endpoint esiste.

Da decidere con l'utente, una domanda alla volta, quando i ticket 05 e 08 hanno detto se e quando Connetto tiene il registro della rete: le voci di «Decisioni e pareri aperti» del documento (§9), cioè l'elenco dei professionisti e la sua fase, la latenza massima di ritiro dal sito (T_ritiro), cosa fa il sito se Connetto non risponde, zona, tipi e metri quadri, campi e testo del sì dei professionisti, invio dei dati di un visitatore a un professionista. Le scelte tecniche (limite di richieste, rotazione, formato) si confermano al controllo B; quelle confermate vanno in ARCHITECTURE.md, quelle di prodotto in PRODUCT.md §12.

Per ogni domanda si porta all'utente, in parole semplici: cosa si chiede, perché conta, le alternative con le conseguenze e una raccomandazione motivata. Non si simulano risposte.

## Risposta (Answer)

## Commenti (Comments)

**Consegne ricevute dal sito.** Una riga per consegna: cosa è stato recepito e cosa realizzato in Connetto. Il registro del sito (`AGGIORNAMENTI-CONNETTO.md` nel suo repository) non si legge né si modifica da qui.

- **5/11/2026, consegna del 5/11/2026** (prima del registro del sito; letta per intero, comprese le note dopo la PR #4 e la PR #5, l'accesso dell'operatore e la verifica delle passkey del sito). *Recepito:* aste escluse (ticket 02 superato, proposta 6 scartata); sito solo vendita per la parte immobiliare; rete di professionisti per la compravendita con contatti mediati dall'agenzia; ruoli complementari fra sito e Connetto con una sola gestione della rete; automazione e inserimento unico; preferenza per software proprio in TypeScript; sezione pubblica delle valutazioni decisa; contatti dal sito gestiti sul sito, senza seconda coda in Connetto (PRODUCT.md §12, 5/11/2026). *Solo annotato, non cambia Connetto:* annunci autonomi e ciclo degli annunci del sito, stack e servizi candidati del sito (R2, SES, Better Auth), accesso dell'operatore del sito con passkey verificato in locale. *Realizzato:* solo documenti, il contratto proposto [docs/integrazione-sito.md](../../../docs/integrazione-sito.md) e l'aggiornamento di mappa, ticket, STATUS.md e START_HERE.md. Nessun codice, endpoint, chiave o servizio. *Conflitti segnalati all'utente:* la decisione del 3/11/2026 «il sito legge da Connetto solo le valutazioni» contro una gestione unica della rete (si decide nei ticket 05 e 08); la parola «Richiesta», riservata in Connetto alla domanda d'aiuto per una casa, contro le «richieste» del sito (qui «contatti dal sito»); «Tecnico» nel glossario non comprende notai e altri professionisti della compravendita (parola nuova da fissare nel ticket 08).
- *Evidenze per il sito, nel normale passaggio:* nessuno stack installato e nessun servizio attivo in Connetto al 5/11/2026 (EEcard3 a `fe429ab` più questo lavoro); stack documentato in ARCHITECTURE.md.
