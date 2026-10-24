# Ricerca: come le altre piattaforme rendono belle e chiare le case in 3D

Type: research
Status: resolved
Blocked by: —
Mappa: [Dalla specifica del percorso 1 al design](../map.md)

## Domanda (Question)

Chiesta dall'utente il 24/10/2026, dopo aver visto la [prova della vista 3D](15-prova-vista-3d.md): «per come è fatto ora non sembra utile, è ancora grezzo». La lettura della pianta e i controlli funzionano sulle piante inventate; la resa no. Prima di rifare la prova servono i fatti:
- **Chi offre oggi case e piante in 3D** (servizi per agenzie e portali immobiliari, programmi di arredo, scansioni con il telefono, anche i portali italiani): cosa mostrano e come.
- **Cosa le rende speciali:** vista «casa delle bambole», arredi, materiali, luce e ore del giorno, nomi e superfici delle stanze, passaggio fra 2D e 3D, giro dentro la casa, realtà aumentata, arredo con l'intelligenza artificiale, altro.
- **Come rendere la vista più bella e più chiara:** tecniche di resa (luce morbida, ombre, occlusione ambientale, inquadratura, muri tagliati a mezza altezza, colori per stanza, nomi in 3D, ingresso e nord), con le fonti ufficiali delle librerie.
- **Cosa conta per chi guarda:** cosa rende chiara la casa a chi ha poca familiarità con il computer; evidenze pubblicate, se esistono.
- **Costi, licenze e dati** di ciò che servirebbe, se si va oltre quanto già letto nella [prima ricerca](14-ricerca-vista-3d.md).

Fonti primarie con la data di lettura, in `docs/ricerca/vista-3d-resa.md` (skill `research`). Nessun servizio, account o caricamento di planimetrie. Serve alla seconda versione della [prova](15-prova-vista-3d.md).

## Risposta (Answer)

**Ricerca in [docs/ricerca/vista-3d-resa.md](../../../docs/ricerca/vista-3d-resa.md)** (24/10/2026, agente in background con la skill `research`, circa 60 fonti; controllo a campione della sessione principale su Poly Haven, three.js e RoomSketcher, tutto confermato). In sintesi:
- quasi tutti i servizi famosi partono da una scansione, non da una pianta; la resa più vicina alla nostra è la «pianta 3D» di RoomSketcher (muri tagliati con la cima colorata, nomi, freccia d'ingresso, arredi facoltativi, vista inclinata);
- la bellezza si ottiene con tecniche gratuite e documentate (luce d'ambiente, tone mapping Neutral, ombre leggere, telecamera ortografica, etichette); arredi e ambienti CC0 disponibili (Poly Haven, Kenney);
- gli studi sulle persone comuni sono pochi e indiretti: l'orientamento non si capisce dalla sola pianta; le viste ferme o guidate si capiscono meglio della rotazione libera; nessuno studio indipendente sulle piante 3D di case;
- incompatibili con le nostre regole: misure per stanza, arredo o render di servizi esterni, scansione LiDAR, giri a 360°, link pubblici.

**Decisioni dell'utente** (24/10/2026, una alla volta, tutte sull'opzione consigliata; registrate in [PRODUCT.md](../../../PRODUCT.md) §12, «Vista 3D indicativa: resa da provare»):
1. *Stile:* tre stili affiancati nella seconda prova (pianta dall'alto, casa delle bambole, isometrica illustrata).
2. *Arredi:* forme semplici provate accanto alla versione vuota, con «Gli arredi sono solo un esempio».
3. *Stanze:* solo i nomi, niente metri quadri.
4. *Orientamento:* nord e luce da sud, senza orari.
5. *Movimento:* viste pronte e trascinamento limitato.
6. *Immagine fissa:* sì, dopo la scelta dello stile.

## Commenti (Comments)
