# Com'è fatta la piattaforma e dove gira

Type: grilling
Status: claimed
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

## Commenti (Comments)

**30/10/2026, da [Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md).** Vincoli decisi: **servizi gestiti** (il server da curare a mano è scartato); circa **20 € al mese** nel pilota, compresi i servizi esterni, di più solo se il prezzo dell'adesione lo copre; ambiente di prova sul computer o con piani gratuiti; servizi a nome di ƎE; l'utente scrive con gli agenti e non legge il codice, quindi conta quanto la forma è diffusa e quanto gli agenti la conoscono.

**30/10/2026, sessione di grilling** (skill `grilling`, `domain-modeling`, `ponytail`). Domande una alla volta. Fatti nuovi letti lo stesso giorno, in [docs/ricerca/piattaforma-dati.md](../../../docs/ricerca/piattaforma-dati.md), «Aggiunta del 30/10/2026».

1. **Forma.** Domanda: servizio «tutto in uno» (Supabase) oppure applicazione unica su Scalingo; Firebase escluso perché l'accesso gira solo negli Stati Uniti, server virtuale già scartato (ticket 01), Clever Cloud più debole perché listino e contratto sui dati non sono leggibili. Domanda dell'utente: vale per la produzione o per lo sviluppo? Risposta: per il pilota vero; sviluppo e prove sul computer, gratis, con lo stesso tipo di database; una prova online serve solo per le passkey su un iPhone vero (con Scalingo una seconda applicazione accesa per i giorni della prova, circa 14 € al mese). Risposta dell'utente: **B, applicazione unica su Scalingo** (consigliato): dati e backup in Francia, un solo sub-responsabile francese per i dati ospitati, ripristino a un momento preciso di 7 giorni già nel piano più piccolo, circa 14–22 € al mese. Codice via email o SMS e passkey li dà una libreria matura dentro l'applicazione, non il fornitore: più codice delicato, coperto dalla lista di controllo dell'accesso. Scartato Supabase: passkey ancora in prova («experimental», 28/5/2026) e obbligatorie per l'operatore, circa 21–23 € prima di email e SMS, file fuori dai backup, contratto con una società di Singapore e sub-responsabili quasi tutti statunitensi.
