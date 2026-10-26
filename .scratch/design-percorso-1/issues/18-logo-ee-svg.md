# Logo di ƎE ridisegnato in SVG

Type: prototype
Status: claimed
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come si ridisegna fedelmente il logo dell'agenzia ƎE (le due E, una rovesciata) in un SVG pulito, e come sta dentro le frasi, sulla tessera, nelle intestazioni e nel prototipo?

Contesto: decisione dell'utente del 26/10/2026 nel ticket [Ricerca: licenze di icone, carattere e immagini](17-ricerca-licenze-grafiche.md). Manrope non ha la «Ǝ», quindi «ƎE» diventa un disegno ovunque, anche dentro le frasi; nelle email e negli SMS resta in lettere. L'agenzia non ha più il file originale. Secondo l'utente, il collaboratore di ƎE ha confermato che lo ridisegniamo noi.

Come si lavora (HITL):
- *Precisato dall'utente il 26/10/2026, al posto del riferimento prima richiesto:* non serve una foto. Il logo dell'agenzia è semplicemente «ƎE», due E che si danno la schiena: una E specchiata seguita da una E normale. Si disegna partendo dalla «E» di Manrope (licenza OFL 1.1, che lo permette; [ricerca](../../../docs/ricerca/licenze-grafiche.md), §1). L'agente non cerca il logo altrove;
- skill `prototype` (ramo UI): il ridisegno in un solo colore (`currentColor`) e una pagina usa e getta che lo mostra nelle frasi a varie grandezze, in chiaro e in scuro, sulla tessera di rame e nella barra laterale, con il testo ingrandito;
- accessibilità: il disegno è letto «ƎE» (`role="img"` con `aria-label`), si allinea alla linea del testo e segue la grandezza del testo; contrasto come il testo intorno;
- il disegno finale va approvato dall'agenzia, perché è il suo marchio. File e regole d'uso in `assets/marchio/`, come per il simbolo C–Legame, con la conferma dell'agenzia annotata qui.
