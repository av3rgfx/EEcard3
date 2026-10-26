# Marchi

Due segni: il simbolo C–Legame di Connetto e il logo dell'agenzia ƎE.

## Simbolo C–Legame

Simbolo di Connetto, scelto e fornito dall'utente il 23/10/2026 ([DESIGN.md](../../DESIGN.md), «Identità»). Due elementi a forma di C che si agganciano: la connessione, il legame.

| File | Uso |
| --- | --- |
| `legame-regular.svg` | da 32 px in su |
| `legame-small.svg` | fra 16 e 31 px, disegnata per restare leggibile; sotto i 16 px non si usa |

Regole d'uso, indicate dall'utente:
- Intorno al segno restano libere almeno 12 unità su 96.
- Un solo colore pieno: i file usano `currentColor`, quindi il segno prende il colore del testo intorno. I colori non sono decisi.
- Il segno non si ruota, non si specchia e non si deforma; i due elementi non si uniscono. Niente gradienti, ombre o contorni. Sulle foto va su un fondo uniforme.
- Eccezione decisa dall'utente il 23/10/2026: sulla tessera di rame, vista come oggetto, il segno può essere inciso nel materiale, con rilievo e ombre del materiale, la forma identica e senza ruotarlo rispetto alla tessera. Ovunque altro valgono le regole sopra ([DESIGN.md](../../DESIGN.md), «Accesso, tessera e situazioni comuni»).
- «Legame» è il nome del disegno; il prodotto si chiama Connetto. La scritta del nome (wordmark) non esiste ancora.
- Non è stata fatta una ricerca di marchi simili già registrati e il marchio non è registrato: prima di registrarlo o di usarlo in pubblico serve un parere professionale.

## Logo di ƎE

Logo dell'agenzia: due E che si danno la schiena, una E specchiata seguita da una E normale. È stato ridisegnato da noi il 26/10/2026, perché l'agenzia non ha più il file originale ([DESIGN.md](../../DESIGN.md), «Identità»; [ticket](../../.scratch/design-percorso-1/issues/18-logo-ee-svg.md)). **Il disegno va ancora mostrato all'agenzia**, perché è il suo marchio.

| File | Uso |
| --- | --- |
| `ee.svg` | ƎE da solo, come marchio: tessera di rame, ricevute stampate e PDF, file da mostrare all'agenzia. Almeno 10 px di altezza. |

Come è fatto:
- è la «E» di Manrope 4.505 al peso 700, ripetuta e specchiata a sinistra. I contorni vengono dal file `Manrope[wght].ttf` di Google Fonts (sha256 `3ae11c49…9d6ae6`), letto con fontTools. La licenza OFL 1.1 permette di usare il carattere in un logo; il logo resta nostro e non diventa OFL ([ricerca](../../docs/ricerca/licenze-grafiche.md), §1.2);
- fra le due aste c'è lo spazio normale fra due lettere di Manrope: 0,14 volte la grandezza del testo, cioè 280 unità su 1440 di altezza nel file;
- il riquadro del file stringe le lettere, senza margini: 2140 × 1440 unità.

Regole d'uso (decise dall'utente il 26/10/2026, una scelta alla volta):
- **Nelle frasi delle schermate non si usa il file.** «Chiama ƎE» si scrive con due «E» di Manrope, la prima girata come in uno specchio. Così il logo prende da solo peso, grandezza e colore del testo e poggia sulla sua linea. Manrope non ha la «Ǝ», ma la «E» c'è. Esempio della struttura:
  ```html
  <span class="ee"><span class="vh">Enrico Erca</span><span aria-hidden="true" class="ee-segno"><span class="ee-specchio">E</span>E</span></span>
  ```
  `.ee-specchio` ha `display: inline-block` e `transform: scaleX(-1)`. `.vh` è il testo nascosto alla vista ma letto dallo screen reader. `.ee-segno` ha `user-select: none` e `white-space: nowrap`.
- **Lo screen reader dice «Enrico Erca»**, di seguito alla frase («Chiama Enrico Erca», «Ricevuto da Enrico Erca in agenzia»). Non dice «immagine» e non dice la «Ǝ», che alcuni telefoni leggono come una lettera strana. Lo stesso vale quando si usa il file: testo nascosto «Enrico Erca» e disegno con `aria-hidden="true"`. Nelle frasi la parola «agenzia» si scrive solo quando serve al senso, così non si ripete.
- Un solo colore pieno: il file usa `currentColor` e prende il colore del testo intorno. Non si ruota e non si deforma; le due E non si uniscono e non cambiano distanza. Niente gradienti, ombre o contorni.
- Intorno al logo da solo resta libero almeno metà della sua altezza (proposta dell'agente, da mostrare all'agenzia).
- **Eccezione, come per il simbolo:** sulla tessera di rame, vista come oggetto, ƎE è inciso nel metallo, scuro e con un filo di luce sotto, con la forma identica. Sul rame del prototipo il contrasto è fra circa 4,2:1 e 5,3:1. I loghi non hanno un minimo di contrasto in WCAG (criterio 1.4.3), ma qui resta sopra 3:1.
- Nelle email e negli SMS ƎE resta in lettere, perché un disegno non sempre si vede.
- Non è stata fatta una ricerca di marchi simili e il marchio non è registrato: è dell'agenzia, che decide se e come tutelarlo.

## Controllo d'integrità

`sha256sum`:
```
b8a61e1cc8363740bfc46d7ad0afdbb138bc73b4d71667cf925b3ab170f59f07  legame-regular.svg
9ae2d996bf7b39fe4abb9864b7d6cbcaf563cfe8df9115ad3e19e51189ef2474  legame-small.svg
01cccc97600869ae4f5e2cb2590bb97fa5526890e2f1293486df2b1e3b33569c  ee.svg
```
