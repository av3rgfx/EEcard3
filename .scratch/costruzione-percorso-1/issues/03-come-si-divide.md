# Come si divide la costruzione: fondamenta e tappe

Type: grilling
Status: claimed
Blocked by:
Mappa: [Costruzione del percorso 1: il piano](../map.md)

## Domanda (Question)

Il percorso 1 si costruisce «un percorso intero alla volta» (docs/METODO.md, principio 5), ma è grande: circa 45 schermate in circa 14 tappe della storia di una casa (DESIGN.md, «Pacchetto per il controllo B»), più accesso, guardiano, quaderno dei fatti, ricevute, lavoro notturno e controlli automatici. Come si taglia in pezzi?

- **Fondamenta, poi una tappa alla volta:** un primo pezzo senza schermate dei clienti (progetto, controlli in GitHub, ambiente di prova con i dati inventati, guardiano, quaderno dei fatti, accesso dell'operatore e dei clienti), poi le tappe della storia, ciascuna completa (schermate, server, dati, permessi, errori, test).
- **Tappe complete fin dall'inizio:** la prima tappa (attivazione) porta con sé solo il pezzo di fondamenta che le serve; ogni tappa aggiunge il resto.
- **Per ruolo:** prima tutto l'operatore, poi proprietario e inquilino.

Da decidere anche: quanto è grande un pezzo (una sessione, una PR), e cosa si può vedere e provare alla fine di ciascuno. Scelta complessa: si prepara una pagina interattiva e visiva con le tre forme affiancate, con dati inventati.

## Risposta (Answer)

## Commenti (Comments)

- 27/11/2026, scelta dell'utente sulla raccomandazione: **non si rifà il controllo dell'architettura e dei linguaggi** (scelte di quattro settimane prima, con alternative confrontate, confermate al controllo B e ricontrollate dalle ricerche [01](01-ricerca-piattaforma-servizi.md) e [02](02-ricerca-strumenti-lavoro.md)). Al suo posto il piano mette presto le **prove pratiche dei punti incerti**, soprattutto DSS nella memoria di Scalingo e Better Auth con React Router 8; se una non regge si riapre solo quel pezzo, con un confronto mirato. Da tenere presente nel decidere come si divide la costruzione.
- 27/11/2026, pagina della decisione (prototipo usa e getta, solo dati inventati): https://claude.ai/artifact/F5zn77inajPNERNutSbUjS. Le tre forme affiancate con un cursore «dopo il pezzo 1…6» (chi entra, chi vede cosa provato su 7 persone, tappe finite su 14, denaro provato fra le persone), le prove dei punti incerti comuni a tutte e tre, cosa comporta ciascuna; raccomandazione: A con fondamenta sottili. In attesa della risposta dell'utente.
