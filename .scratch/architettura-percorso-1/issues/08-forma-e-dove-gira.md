# Com'è fatta la piattaforma e dove gira

Type: grilling
Status: open
Blocked by: 01, 03, 13
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Con chi costruisce e mantiene ([ticket](01-chi-costruisce-e-mantiene.md)) e i fatti della [ricerca](03-ricerca-dove-gira-e-dati.md), si sceglie con l'utente la **forma** della piattaforma e il **posto** in cui gira. È la scelta più difficile da invertire della mappa: probabilmente vale un ADR.

1. **Forma:** servizio gestito «tutto in uno», applicazione unica su un servizio che la esegue, oppure server proprio. Le alternative sono quelle della ricerca, non di più.
2. **Dove e con chi:** fornitore, regione nell'UE, contratto sui dati.
3. **Backup e ripristino** adeguati ai dati del pilota (docs/rules/BACKEND.md): quanto spesso, per quanto tempo, chi prova il ripristino e quando. Ambiente di prova separato da quello vero, con soli dati inventati (§7.12, §10.9).
4. **Web ora, app iPhone dopo:** se la stessa forma serve l'app iPhone sullo stesso servizio senza rifare tutto (§11), senza costruire nulla per l'app ora.
5. **Uscita:** come si portano via dati e file se si cambia fornitore.

Limiti: nessun account o servizio creato senza l'autorizzazione dell'utente. Scelta in ARCHITECTURE.md («Confini», «Decisioni confermate»), ADR in `docs/adr/` se serve.
