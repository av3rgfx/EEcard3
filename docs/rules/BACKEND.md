# Backend: regole essenziali

Applicare i controlli pertinenti al prodotto; non inventare un'infrastruttura completa prima dei requisiti.

- Autenticazione e autorizzazione sono controlli distinti. Verificare permessi lato server per ogni risorsa protetta.
- Se esistono organizzazioni o tenant, verificare l'isolamento tra loro anche su query, file e operazioni indirette.
- Validare gli input ai confini; non fidarsi di valori inviati dal client.
- Non includere segreti nel repository, nel client o nei log. Documentare solo nomi e modalità di configurazione.
- Gestire esplicitamente errori e fallimenti parziali; preservare i dati dell'utente.
- Usare vincoli e transazioni quando servono a mantenere coerenti i dati.
- Per importi usare rappresentazioni esatte coerenti con valuta e contratto; evitare arrotondamenti impliciti.
- Per operazioni ripetibili sensibili valutare idempotenza e duplicati.
- Se integrati, verificare autenticità dei webhook e registrare lo stato confermato dal provider.
- Non trattare il ritorno del browser dopo un pagamento come unica prova di pagamento riuscito.
- Pianificare migrazioni e ripristino adeguati ai dati effettivamente conservati.
- Per documenti e upload verificare tipo, dimensione, accesso e conservazione.
- Non esporre stack trace o dati sensibili agli utenti; rendere diagnosticabili i fallimenti.
- Riutilizzare lo stack esistente; non scegliere servizi, microservizi o code soltanto per ipotetica scala futura.
- Se il progetto tratta dati reali, verificare concretamente backup e recupero prima dell'uso in produzione.
