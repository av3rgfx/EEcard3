# Come si divide la costruzione: fondamenta e tappe

Type: grilling
Status: resolved
Blocked by:
Mappa: [Costruzione del percorso 1: il piano](../map.md)

## Domanda (Question)

Il percorso 1 si costruisce «un percorso intero alla volta» (docs/METODO.md, principio 5), ma è grande: circa 45 schermate in circa 14 tappe della storia di una casa (DESIGN.md, «Pacchetto per il controllo B»), più accesso, guardiano, quaderno dei fatti, ricevute, lavoro notturno e controlli automatici. Come si taglia in pezzi?

- **Fondamenta, poi una tappa alla volta:** un primo pezzo senza schermate dei clienti (progetto, controlli in GitHub, ambiente di prova con i dati inventati, guardiano, quaderno dei fatti, accesso dell'operatore e dei clienti), poi le tappe della storia, ciascuna completa (schermate, server, dati, permessi, errori, test).
- **Tappe complete fin dall'inizio:** la prima tappa (attivazione) porta con sé solo il pezzo di fondamenta che le serve; ogni tappa aggiunge il resto.
- **Per ruolo:** prima tutto l'operatore, poi proprietario e inquilino.

Da decidere anche: quanto è grande un pezzo (una sessione, una PR), e cosa si può vedere e provare alla fine di ciascuno. Scelta complessa: si prepara una pagina interattiva e visiva con le tre forme affiancate, con dati inventati.

## Risposta (Answer)

Confermata dall'utente il 27/11/2026, tre domande una alla volta, tutte sull'opzione consigliata, e il riepilogo confermato. Pagina della decisione: https://claude.ai/artifact/F5zn77inajPNERNutSbUjS (privata, solo dati inventati).

1. **Pezzo 0, prove usa e getta dei punti incerti**, comuni a ogni forma: Better Auth con React Router 8, DSS che verifica la firma di un PDF inventato, memoria usata dall'app; gratis sul computer. Il codice non resta nel progetto: restano gli esiti, in ARCHITECTURE.md. Se una non regge si riapre solo quel pezzo, con un confronto mirato. Le prove su Scalingo aspettano l'autorizzazione dell'utente (ticket [Verifiche su Scalingo](07-verifiche-su-scalingo.md)).
2. **Pezzo 1, fondamenta sottili:** progetto e controlli in GitHub; ambiente di prova con Via dei Tigli 14 e le 7 persone; tema con i token di DESIGN.md; accesso (passkey per l'operatore, codice per i clienti) con le pagine d'accesso già nel design approvato e la loro revisione dell'esperienza; guardiano; quaderno dei fatti. Dentro l'app solo una pagina provvisoria «cosa vedi» per ogni persona. Fuori: denaro, documenti, ricevute e lavoro notturno, che arrivano con la prima tappa che li usa.
3. **Poi una tappa alla volta**, ciascuna completa (revisione dell'esperienza, schermate, server, dati, permessi, errori, test); l'ordine nel ticket [Ordine delle tappe](06-ordine-delle-tappe.md).
4. **Un pezzo è una tappa, o le fondamenta, diviso in più sessioni brevi**, indicativamente sotto il 30–35% del contesto durante lo sviluppo (vincolo dell'utente); ogni sessione ha un obiettivo piccolo, si chiude con i controlli verdi e il lavoro salvato e lascia il messaggio di ripresa.
5. **Il traguardo di ogni pezzo sono 1–3 storie di prova**, scritte prima in parole semplici con i dati inventati e approvate dall'utente; diventano prove automatiche nel browser che girano a ogni modifica; il pezzo è finito quando passano.

*Proposta dell'agente, reversibile, da fissare nel ticket [Riepilogo del piano e conferma](10-riepilogo-piano.md):* fondamenta in tre sessioni: (a) progetto, controlli e ambiente di prova; (b) accesso con le sue pagine e la revisione dell'esperienza; (c) guardiano, quaderno e la storia delle 7 persone.

*Scartate:* tappe complete fin dall'inizio e per ruolo (domanda 1); un pezzo per sessione e più tappe insieme (domanda 2); solo i controlli tecnici e storie provate a mano (domanda 3). I motivi sono nei commenti.

Nessuna scelta tecnica nuova in ARCHITECTURE.md: le prove nel browser con Playwright sono già decise («Verifica operativa»). Nessun termine nuovo in GLOSSARY.md: pezzo, tappa e storia di prova sono parole del lavoro, non del prodotto.

## Commenti (Comments)

- 27/11/2026, scelta dell'utente sulla raccomandazione: **non si rifà il controllo dell'architettura e dei linguaggi** (scelte di quattro settimane prima, con alternative confrontate, confermate al controllo B e ricontrollate dalle ricerche [01](01-ricerca-piattaforma-servizi.md) e [02](02-ricerca-strumenti-lavoro.md)). Al suo posto il piano mette presto le **prove pratiche dei punti incerti**, soprattutto DSS nella memoria di Scalingo e Better Auth con React Router 8; se una non regge si riapre solo quel pezzo, con un confronto mirato. Da tenere presente nel decidere come si divide la costruzione.
- 27/11/2026, pagina della decisione (prototipo usa e getta, solo dati inventati): https://claude.ai/artifact/F5zn77inajPNERNutSbUjS. Le tre forme affiancate con un cursore «dopo il pezzo 1…6» (chi entra, chi vede cosa provato su 7 persone, tappe finite su 14, denaro provato fra le persone), le prove dei punti incerti comuni a tutte e tre, cosa comporta ciascuna; raccomandazione: A con fondamenta sottili. In attesa della risposta dell'utente.
- 27/11/2026, **domanda 1, forma della divisione: A, fondamenta poi una tappa alla volta** (scelta dell'utente, sulla raccomandazione «A con fondamenta sottili»). Prima, comuni, le prove usa e getta dei punti incerti. *Scartate:* B, tappe complete fin dall'inizio (primo pezzo il più pesante; clienti solo alla tappa 3, con le pagine delle tappe 1 e 2 da riprovare; accesso dei clienti mescolato alla revisione dell'esperienza); C, per ruolo (il passaggio del denaro fra le persone si prova solo alla fine; nessuna tappa finita finché non arrivano i clienti; contro la scelta del pacchetto di seguire la storia della casa).
- 27/11/2026, **domanda 2, grandezza di un pezzo: un pezzo è una tappa (o le fondamenta), divisa in più sessioni** (scelta dell'utente, sulla raccomandazione). La tappa è finita, e si prova come storia, solo quando è tutta fatta; ogni sessione intermedia si chiude con i controlli verdi e il lavoro salvato. *Vincolo aggiunto dall'utente:* sessioni brevi, per non degradare la qualità con un contesto troppo pieno, **indicativamente non oltre il 30–35% del contesto**; quindi ogni sessione ha un obiettivo piccolo e preciso e un messaggio di ripresa pronto. L'agente non legge il livello esatto del contesto: lo stima e si ferma prima, salvando; l'utente può controllarlo dove l'app lo mostra. *Scartate:* un pezzo per sessione (a volte un mezzo passo della storia che da solo dice poco); più tappe insieme (pezzi lunghi, errori scoperti tardi).
- 27/11/2026, **domanda 3, traguardo di un pezzo: storie di prova** (scelta dell'utente, sulla raccomandazione). Prima di costruire, 1–3 storie brevi in parole semplici con i dati inventati; diventano prove automatiche nel browser che girano a ogni modifica; il pezzo è finito quando passano, e l'utente vede le schermate di quelle storie. *Scartati:* solo i controlli tecnici (nessuna frase che dica cosa ora funziona); storie provate a mano una volta (una modifica dopo può romperle senza che si veda). *Scelta dell'utente sulla sessione:* le domande possono superare di poco la soglia del 30–35%; durante lo sviluppo il contesto resta basso.
