# Ricerca: verifiche d'inizio sulla piattaforma e sui servizi

Type: research
Status: open
Blocked by:
Mappa: [Costruzione del percorso 1: il piano](../map.md)

## Domanda (Question)

Per mettere in ordine i pezzi serve sapere quali verifiche «da fare all'inizio della costruzione» si risolvono **leggendo le fonti ufficiali** e quali chiedono una **prova vera** (sul computer, nella sessione cloud, oppure su Scalingo o con un fornitore, quindi con l'autorizzazione dell'utente). Per ciascuna: cosa dicono oggi le fonti primarie, con data di lettura e link; cosa resta da provare e dove; cosa costa; cosa cambia se la risposta è negativa. Nessun account aperto, nessuna richiesta a servizi reali oltre alla lettura delle pagine pubbliche.

Voci da ARCHITECTURE.md:
1. **Better Auth con React Router 8:** la guida è scritta per React Router 7; compatibilità attuale dei plugin codice via email, codice via SMS e passkey, e dell'adattatore Drizzle («Linguaggio, framework e componenti»).
2. **Better Auth, «Ferma l'accesso»:** il punto in cui si può rifiutare la creazione di ogni sessione, per ogni modo di entrare, passkey comprese («Richieste del collaboratore di ƎE»).
3. **Better Auth dietro un proxy:** come si legge l'indirizzo vero (`trustedProxies`) e cosa documenta Scalingo sugli header del suo router («Accesso»).
4. **Memoria:** cosa dicono Scalingo e Node.js sulla memoria di un contenitore S o M e sui contenitori del lavoro notturno (512 MiB); un solo processo Node.js («Linguaggio, framework e componenti»).
5. **Typst su Scalingo:** come metterlo (buildpack, binario nel repository o altro), licenza, peso; se PDF/UA-1 e PDF/A-2a si dichiarano insieme («Documenti, foto e ricevute»).
6. **Java accanto a Node.js su Scalingo per DSS:** più buildpack nella stessa app, peso dell'immagine e limiti di Scalingo, memoria e durata di DSS nel lavoro notturno («Documento da firmare»).
7. **Pagina d'errore fissa:** se e come Scalingo mostra una pagina d'errore personalizzata a piattaforma ferma («Verifica operativa», «Piano carta»).
8. **«Invia» con Web Share:** supporto attuale della condivisione di file in Safari, Chrome, Edge e Firefox, su telefono e computer («Richieste del collaboratore di ƎE»).
9. **Drizzle 1.0:** è uscita stabile? Cosa cambia per l'adattatore di Better Auth («Verifica operativa», «Database»).
10. **Skebby:** come si attiva la modalità di prova; testo pubblico del contratto sui dati e sede dei dati («Servizi esterni»).
11. **Amazon SES:** gli indirizzi simulati coprono tutti gli esiti previsti (recapitato, non recapitato, spam) e cosa serve per usarli (account, regione Milano) («Servizi esterni»).
12. **IstatData:** si può provare il calcolo con una lettura salvata una volta, senza chiamare il servizio nei test? Condizioni d'uso per letture dai controlli automatici («Servizi esterni», «ISTAT»).

## Risposta (Answer)
