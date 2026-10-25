# Prova: la vista 3D su una planimetria vera dei fondatori

Type: prototype
Status: open
Blocked by: 15 (chiuso); serve che l'utente carichi la planimetria con il consenso scritto dei fondatori
Mappa: [Dalla specifica del percorso 1 al design](../map.md)

## Domanda (Question)

La lettura della pianta e la vista isometrica reggono su una planimetria catastale vera? È la condizione decisa il 25/10/2026 ([PRODUCT.md](../../../PRODUCT.md) §12, «Vista 3D indicativa: esito della prova con piante inventate») per far entrare la vista 3D nella prima versione.

Come si fa:
- **Prima:** l'utente carica nella sessione una sola planimetria di una casa dei fondatori, in PDF o immagine, con il loro consenso scritto. Può essere quella del fascicolo o una copia scaricata dal catasto.
- **Durante:**
  - si legge la planimetria con il ricalco e con il riconoscimento automatico della [prima versione della prova](15-prova-vista-3d.md);
  - si misurano tempo, correzioni ed esito dei controlli di qualità;
  - si mostra la casa nella vista isometrica scelta, con nomi delle stanze, arredi d'esempio e avvertenza.
- **Regole:**
  - la planimetria si lavora solo nella sessione e non entra nel repository, nei commit o in pagine pubblicate;
  - niente servizi esterni;
  - nel ticket si annotano solo metodo, numeri ed esito, senza indirizzo, dati catastali o immagini.
- **Decisione dell'utente:** se regge, la vista entra nella prima versione e si costruisce dopo il percorso 1; se no, torna fuori senza toccare il resto. Va chiusa prima dell'architettura ([docs/METODO.md](../../../docs/METODO.md), passo 7).

Pareri utili (ricerca, §8): privacy per la planimetria come dato personale; legale sul diritto d'autore del tecnico che l'ha disegnata.

## Commenti (Comments)
**25/10/2026, in pausa:** l'utente chiederà una piantina reale al collaboratore di ƎE la sera stessa. Promemoria: deve essere la planimetria di una casa dei fondatori, o del collaboratore stesso, con il consenso scritto. Quella di un cliente di ƎE è esclusa dalla decisione del 24/10/2026 (PRODUCT.md §12, «Vista 3D indicativa: come si ricava»): servirebbero una base giuridica e il parere del DPO.
