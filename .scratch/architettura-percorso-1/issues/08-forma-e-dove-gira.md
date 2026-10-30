# Com'è fatta la piattaforma e dove gira

Type: grilling
Status: resolved
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

## Risposta (Answer)

Decisa dall'utente il 30/10/2026, quattro domande una alla volta (dettaglio sotto «Commenti»). ADR: [0001 «Applicazione unica su Scalingo, con i file nel database»](../../../docs/adr/0001-applicazione-unica-su-scalingo.md).

1. **Forma:** applicazione unica scritta da noi su **Scalingo**, con PostgreSQL gestito. Codice via email o SMS e passkey li dà una libreria matura dentro l'applicazione; la libreria si sceglie con il linguaggio ([ticket 09](09-linguaggio-framework-componenti.md)).
2. **Dove e con chi:** regione Parigi normale; dati, file e copie in Francia. Account e contratto sui dati a nome di ƎE, che paga, accettati online; la lettura del contratto va al parere sui contratti standard dei fornitori. Circa 14–22 € al mese per ospitare; email e SMS nel [ticket 11](11-servizi-esterni.md).
3. **Copie e ripristino:** copie di Scalingo più una copia cifrata al mese su un disco di ƎE (ultime 12), prova di ripristino prima del pilota e ogni 3 mesi, annotata. File dentro il database, quindi una sola prova copre tutto; oltre circa 5 GB i file passano a un archivio a parte. Sviluppo e prove sul computer, con dati inventati; seconda applicazione su Scalingo solo per i giorni della prova delle passkey su iPhone.
4. **App iPhone dopo:** parla con la stessa applicazione e usa le stesse passkey, con il dominio dichiarato; nulla si costruisce ora.
5. **Uscita:** PostgreSQL esportato per intero, file compresi; codice nostro; la copia mensile è già una via d'uscita.

Registrata in [ARCHITECTURE.md](../../../ARCHITECTURE.md) («Confini», «Decisioni confermate», «Verifica operativa») e in [PRODUCT.md](../../../PRODUCT.md) §10.10 (parere sul contratto del fornitore e sulle copie tenute da ƎE). Fatti nuovi in [docs/ricerca/piattaforma-dati.md](../../../docs/ricerca/piattaforma-dati.md), «Aggiunta del 30/10/2026».

## Commenti (Comments)

**30/10/2026, da [Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md).** Vincoli decisi: **servizi gestiti** (il server da curare a mano è scartato); circa **20 € al mese** nel pilota, compresi i servizi esterni, di più solo se il prezzo dell'adesione lo copre; ambiente di prova sul computer o con piani gratuiti; servizi a nome di ƎE; l'utente scrive con gli agenti e non legge il codice, quindi conta quanto la forma è diffusa e quanto gli agenti la conoscono.

**30/10/2026, sessione di grilling** (skill `grilling`, `domain-modeling`, `ponytail`). Domande una alla volta. Fatti nuovi letti lo stesso giorno, in [docs/ricerca/piattaforma-dati.md](../../../docs/ricerca/piattaforma-dati.md), «Aggiunta del 30/10/2026».

1. **Forma.** Domanda: servizio «tutto in uno» (Supabase) oppure applicazione unica su Scalingo; Firebase escluso perché l'accesso gira solo negli Stati Uniti, server virtuale già scartato (ticket 01), Clever Cloud più debole perché listino e contratto sui dati non sono leggibili. Domanda dell'utente: vale per la produzione o per lo sviluppo? Risposta: per il pilota vero; sviluppo e prove sul computer, gratis, con lo stesso tipo di database; una prova online serve solo per le passkey su un iPhone vero (con Scalingo una seconda applicazione accesa per i giorni della prova, circa 14 € al mese). Risposta dell'utente: **B, applicazione unica su Scalingo** (consigliato): dati e backup in Francia, un solo sub-responsabile francese per i dati ospitati, ripristino a un momento preciso di 7 giorni già nel piano più piccolo, circa 14–22 € al mese. Codice via email o SMS e passkey li dà una libreria matura dentro l'applicazione, non il fornitore: più codice delicato, coperto dalla lista di controllo dell'accesso. Scartato Supabase: passkey ancora in prova («experimental», 28/5/2026) e obbligatorie per l'operatore, circa 21–23 € prima di email e SMS, file fuori dai backup, contratto con una società di Singapore e sub-responsabili quasi tutti statunitensi.
2. **Documenti e foto.** Domanda: un archivio a parte per i file (Outscale OOS, consigliato da Scalingo, circa 0,025 € al GB) oppure i file dentro il database. Regione proposta in apertura: Parigi normale, non quella SecNumCloud (su richiesta, più cara, per settori regolati), da confermare nel riepilogo. Risposta dell'utente: **i file nel database per il pilota** (consigliato): un solo posto, nessun fornitore né contratto in più, i file entrano nei backup e nel ripristino a un momento preciso, una sola prova di ripristino copre tutto; foto ridotte al caricamento; oltre circa 5 GB i file passano all'archivio a parte. Scartato per ora l'archivio a parte: un fornitore in più e copie dei file da fare e provare a mano.
3. **Copie e prova di ripristino.** Domanda: solo le copie di Scalingo (7 giornaliere, 4 settimanali, ritorno a un momento degli ultimi 7 giorni, cifrate in tre zone di Parigi) oppure in più una copia al mese fuori da Scalingo. Risposta dell'utente: **in più una copia cifrata al mese** (consigliato), scaricata dall'utente e tenuta su un disco cifrato di ƎE in agenzia, ultime 12 copie, chiave tenuta da ƎE e dall'utente e non sullo stesso disco; circa 15 minuti al mese; protegge anche dalla perdita dell'account. Prova di ripristino fatta dall'utente prima del pilota e poi ogni 3 mesi, su una copia temporanea dentro Scalingo, annotata con data ed esito; la procedura esatta di Scalingo si verifica quando si prepara la prova. Scartato: solo le copie di Scalingo (account perso, dati e copie persi insieme).
4. **Riepilogo.** Regione Parigi normale, contratto a nome di ƎE, costo, file, copie, sviluppo sul computer, app iPhone sulla stessa applicazione, uscita con PostgreSQL, ADR. Confermato dall'utente prima di registrare.
