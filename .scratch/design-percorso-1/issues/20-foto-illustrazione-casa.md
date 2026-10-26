# Foto e illustrazione della casa

Type: prototype
Status: claimed
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come entrano nelle schermate le foto della facciata (una o più, facoltative, caricate o scattate dall'agenzia o dal proprietario) e come resta il disegno per le case senza foto?
- quale foto va in copertina e come si cambia;
- chi carica, toglie e vede le foto: operatore, proprietario, inquilino di quella casa; mai l'ex inquilino;
- come si scatta o si carica in agenzia e dal telefono, con l'anteprima;
- come appaiono nel riquadro in cima, nelle schede e nelle righe, e nella barra laterale;
- se nelle email resta il disegno (proposta già fatta in [DESIGN.md](../../../DESIGN.md), «Illustrazione della casa»);
- lo stile del disegno adatto alle case di ƎE.

Le foto interne restano fuori (dopo la prima versione; mappa, «Fuori ambito»).

Contesto: voce «Componenti e token» del «Non ancora specificato» della mappa, diventata ticket il 26/10/2026 su richiesta dell'utente, dopo la decisione «Foto della casa» ([PRODUCT.md](../../../PRODUCT.md) §12, 26/10/2026).

Come si lavora (HITL):
- skill `prototype` (ramo UI): una pagina usa e getta, privata, con solo dati e immagini inventati, niente foto di case o persone vere. Varianti davvero diverse dietro un selettore e i casi limite: nessuna foto, una, molte, foto verticale o scura, caricamento lento o fallito, più case dello stesso proprietario senza foto;
- applica §7, §10.2, §10.7 e §10.8 di PRODUCT.md; in DESIGN.md «Direzione del percorso 1», «Spazio dell'operatore», le schermate di proprietario e inquilino, «Rifinitura», «Testi», «Dati limite e accessibilità», «Interazioni e stati», «Componenti e token»; la [ricerca sulla forma di email e SMS](../../../docs/ricerca/email-sms-forma.md) per le immagini nelle email;
- verifica in Chromium a 360, 390, 768, 1024 e 1366 px, in chiaro e in scuro, e il testo alternativo delle foto per lo screen reader;
- le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata e, quando serve, un confronto affiancato in un'immagine; le regole decise in DESIGN.md con data e motivo, segnalando dove serve un parere professionale (privacy: persone o targhe nelle foto, conservazione).

## Risposta (Answer)

## Commenti (Comments)

- 26/10/2026: aperto dal «Non ancora specificato» della mappa («Componenti e token») e rivendicato nella stessa sessione.
