# Logo di ƎE ridisegnato in SVG

Type: prototype
Status: open
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come si ridisegna fedelmente il logo dell'agenzia ƎE (le due E, una rovesciata) in un SVG pulito, e come sta dentro le frasi, sulla tessera, nelle intestazioni e nel prototipo?

Contesto: decisione dell'utente del 26/10/2026 nel ticket [Ricerca: licenze di icone, carattere e immagini](17-ricerca-licenze-grafiche.md). Manrope non ha la «Ǝ», quindi «ƎE» diventa un disegno ovunque, anche dentro le frasi; nelle email e negli SMS resta in lettere. L'agenzia non ha più il file originale. Secondo l'utente, il collaboratore di ƎE ha confermato che lo ridisegniamo noi.

Come si lavora (HITL):
- serve un riferimento del logo attuale dato dall'utente: foto dell'insegna, carta intestata, biglietto o sito. L'agente non lo cerca altrove;
- skill `prototype` (ramo UI): il ridisegno in un solo colore (`currentColor`) e una pagina usa e getta che lo mostra nelle frasi a varie grandezze, in chiaro e in scuro, sulla tessera di rame e nella barra laterale, con il testo ingrandito;
- accessibilità: il disegno è letto «ƎE» (`role="img"` con `aria-label`), si allinea alla linea del testo e segue la grandezza del testo; contrasto come il testo intorno;
- il disegno finale va approvato dall'agenzia, perché è il suo marchio. File e regole d'uso in `assets/marchio/`, come per il simbolo C–Legame, con la conferma dell'agenzia annotata qui.
