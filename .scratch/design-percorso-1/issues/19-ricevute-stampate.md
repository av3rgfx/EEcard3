# Ricevute stampate: canone e consegna

Type: prototype
Status: claimed
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come sono fatte la ricevuta del canone e quella della consegna, sia sul foglio A4 stampato in agenzia sia nel PDF che proprietario e inquilino scaricano? Impaginazione, campi di [PRODUCT.md](../../../PRODUCT.md) §10.3, dove stanno ƎE e Connetto, firma e bollo quando servono, e come appare una ricevuta annullata o sostituita.

Contesto: voce «Documenti stampati dalla piattaforma» del «Non ancora specificato» della mappa, diventata ticket il 26/10/2026 su richiesta dell'utente, ora che il logo di ƎE è disegnato ([ticket](18-logo-ee-svg.md)).

Come si lavora (HITL):
- skill `prototype` (ramo UI): una pagina usa e getta, privata, con solo dati inventati, le varianti davvero diverse dietro un selettore e i casi limite: più mesi in una ricevuta sola, pagamento parziale, contanti, nomi e indirizzi lunghi, più proprietari, ricevuta annullata e sostituita;
- applica §7 (versioni conservate, passaggi del denaro distinti), §10.3 e §10.6 di PRODUCT.md; in DESIGN.md «Identità», «Caratteri», «Spazio dell'operatore (percorso 1)», le sezioni dei clienti dove si apre una ricevuta, «Testi dell'interfaccia (percorso 1)» e «Dati limite e accessibilità (percorso 1)»; [assets/marchio/](../../../assets/marchio/README.md); la [ricerca sull'incasso dei canoni](../../../docs/ricerca/incasso-canoni.md), §3;
- **il testo legale non si scrive**: aspetta il parere (§10.10). Il prototipo ne lascia il posto, segnato chiaramente;
- verifica in Chromium a 360, 390, 768, 1024 e 1366 px e nell'anteprima di stampa A4; contrasto; lettura del PDF con le tecnologie assistive (struttura, ordine di lettura, lingua, titolo);
- le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata; le regole decise in DESIGN.md con data e motivo, segnalando dove serve un parere professionale.

## Risposta (Answer)

## Commenti (Comments)

- 26/10/2026: aperto dal «Non ancora specificato» della mappa («Documenti stampati dalla piattaforma») e rivendicato nella stessa sessione.
