# Prova: vista 3D da una planimetria

Type: prototype
Status: resolved
Blocked by: 14, 16 (chiusi)
Mappa: [Dalla specifica del percorso 1 al design](../map.md)

## Domanda (Question)

Una planimetria di buona qualità, nello stile catastale italiano, diventa una [vista 3D indicativa](../../../GLOSSARY.md) credibile per il proprietario? E il controllo della qualità riconosce le piante che non si leggono abbastanza?

Prova usa e getta (skill `prototype`), dopo la [ricerca sulla vista 3D](14-ricerca-vista-3d.md): poche piante **inventate** in stile catastale, di qualità buona e cattiva; per quelle buone una vista 3D approssimativa con la scritta «indicativa, non è una misura»; per quelle cattive il messaggio che invita a caricare una versione migliore o a parlarne con l'agenzia. Una planimetria vera, anche dei fondatori, solo con l'autorizzazione dell'utente.

**Dopo la ricerca** (decisioni del 24/10/2026, [PRODUCT.md](../../../PRODUCT.md) §12, «Vista 3D indicativa: come si ricava»). La prova mostra le due strade che l'operatore sceglie:
- il **ricalco** sopra la planimetria;
- il **riconoscimento automatico**, dentro la piattaforma, con un'anteprima da correggere o confermare.

Dentro la prova:
- conferma solo l'operatore;
- altezza letta sulla planimetria, oppure un valore fisso dichiarato se manca;
- avvertenza sempre visibile;
- piante inventate secondo la [ricerca](../../../docs/ricerca/vista-3d.md), §6, con le versioni cattive.

La planimetria vera dei fondatori arriva solo dopo, se le inventate vanno bene. Serve il loro consenso scritto, la si lavora solo nella sessione e non si salva nel repository.

Per l'automatico ci sono due vie:
- *Visione artificiale classica:* nessuna licenza da chiarire.
- *Modello di ricerca già allenato:* le licenze sono da leggere prima (CubiCasa5K è non commerciale; ricerca, §2.3). Se non sono chiare, si resta sulla visione classica e lo si annota.

Da misurare:
- il tempo del ricalco;
- quanto l'anteprima automatica va corretta;
- se i controlli di qualità scartano le piante cattive senza scartare le buone.

L'utente guarda il risultato e decide. Se la prova va male, la vista 3D torna fuori dalla prima versione senza toccare il resto; se va bene, si specifica e si progetta come parte del fascicolo e si costruisce dopo il percorso 1. Va chiusa prima dell'architettura (METODO.md, passo 7); non blocca il design del percorso 1. La prova non resta nel repository: si annotano solo domanda, metodo ed esito.

## Risposta (Answer)

**Sulle piante inventate la prova va bene; la conferma arriva con una planimetria vera** (decisioni dell'utente del 24–25/10/2026, in [PRODUCT.md](../../../PRODUCT.md) §12, righe «Vista 3D indicativa», e in [DESIGN.md](../../../DESIGN.md), «Vista 3D indicativa (stile)»).
- *Lettura:* ricalco e riconoscimento automatico dentro la piattaforma. Sulle versioni buone, anche a mano: muri al 100%, porte 14 su 14; il controllo di qualità ferma o manda al controllo tutte le 15 versioni rovinate.
- *Resa:* la prima versione era «ancora grezza». Dopo la [ricerca sulla resa](16-ricerca-resa-vista-3d.md) l'utente ha scelto l'isometrica illustrata fra tre stili; da vicino i muri che coprono la stanza al centro diventano trasparenti. Zoom e rotazione restano attorno alla casa: lo zoom verso il punto indicato è stato provato e tolto, niente scorrimento con due dita.
- *Arredi d'esempio:* sì, accesi, con l'interruttore.
- *Prossimo passo:* [Prova: la vista 3D su una planimetria vera dei fondatori](17-prova-planimetria-fondatori.md).

Pagine usa e getta: prima https://claude.ai/artifact/Uwav9qpKCBQNkSskEWF5nZ, seconda https://claude.ai/artifact/3XGpiR7CyEKeYAgTz91Vjr, terza https://claude.ai/artifact/C2aRNbV3h59zmdQKs8z93q.

## Commenti (Comments)

**24/10/2026, prova costruita** (skill `prototype`; pagina usa e getta, privata, fuori dal repository): https://claude.ai/artifact/Uwav9qpKCBQNkSskEWF5nZ. Il sorgente è nella cartella temporanea della sessione e si perde; si rilegge con lo strumento Artifact, azione «read».

*Cosa contiene*
- Tre piante inventate in stile catastale (bilocale; trilocale con un muro obliquo; casa a L con «H media»), disegnate come le planimetrie Docfa: scala 1:200, 200 DPI, muri vuoti senza campitura, finestre a tre linee, porte con l'anta, freccia del nord, intestazione inventata. Visura inventata con la superficie.
- Sette versioni per pianta: scansione pulita, disegno a mano su carta millimetrata, copia a 72 DPI, fotocopia sbiadita, scansione storta di 3°, strappo e macchia di caffè, copia rimpicciolita (scala falsata).
- Due strade, scelte dall'operatore:
  - il ricalco, con muri esterni, tramezzi, porte e finestre e l'aggancio agli angoli;
  - l'automatico, con un'anteprima da correggere: seleziona, cambia tipo, elimina, annulla.
- Vista 3D (three.js) con l'avvertenza sempre visibile e «Perché?».
- Altezza letta dall'operatore, oppure «Non si legge: usa 2,70 m» con la nota sulla vista.
- Conferma solo con i controlli non rossi e l'altezza indicata; altrimenti «Non si legge abbastanza».
- Due schede di consultazione:
  - «Proprietario»: la vista confermata, oppure il messaggio con «Carica una copia migliore» e «Parlane con l'agenzia», inerti nella prova;
  - «Tutte le piante»: il controllo su 21 versioni.
- Scheda «Risultati»: tempo, azioni e correzioni, da copiare.

*Metodo dell'automatico*
- Visione artificiale classica, senza modelli già allenati e quindi senza licenze da chiarire.
- Passaggi, nell'ordine:
  1. soglia sul canale rosso, che cancella la griglia della carta millimetrata;
  2. raddrizzamento se la pianta è storta;
  3. riempimento dei muri vuoti;
  4. apertura direzionale di 33 cm per i muri dritti;
  5. scalette regolari per gli obliqui;
  6. porte cercate dalle estremità libere dei muri;
  7. finestre riconosciute dalle strisce sottili affiancate.
- Controlli di qualità: risoluzione rispetto alla scala, contrasto, puntini, allineamento, superficie ricostruita contro visura (oltre il 6% da controllare, oltre il 15% non va), estremità di muro non collegate.

*Esiti misurati* (Chromium, solo piante inventate; il confronto usa la pianta vera, che nella realtà non si conosce)
- Versioni buone, cioè pulita e a mano, sulle tre piante:
  - muri ritrovati 100%;
  - porte 14 su 14, sia nelle pulite sia nelle versioni a mano; in queste ultime c'è una porta in più che non esiste, nella casa a L;
  - finestre 15 su 17 nelle pulite e 14 su 17 nelle versioni a mano. Manca sempre quella sul muro obliquo; ne manca anche qualcun'altra.
- Controllo di qualità: 6 versioni buone su 6 passano; 15 rovinate su 15 non arrivano al proprietario senza un controllo.
  - Esito «non va»: la bassa risoluzione, lo strappo e la scala falsata, grazie allo scarto di superficie dalla visura.
  - Esito «da controllare»: la fotocopia sbiadita e la pianta storta. In tutte e due il riconoscimento resta buono (muri 95–100%).
- Ricalco del perimetro con un tramezzo, una porta e una finestra: 7 azioni, superficie 53,0 m² contro 53 in visura. Il tempo vero si misura con l'utente.
- Verifiche:
  - 7 larghezze (360–1366 px), in chiaro e in scuro, con 3 schede ciascuna: nessuno scorrimento orizzontale, nessun elemento fuori dalla finestra, nessun errore;
  - percorso completo: anteprima, selezione ed eliminazione, annulla, conferma, vista del proprietario, ricalco, versione rovinata, segnalazione, risultati.

*Limiti*
- Le piante inventate non hanno la varietà delle planimetrie vere: timbri, cancellature, scritte sopra i muri, muri curvi, obliqui ripidi, più piani nella stessa scheda.
- Le soglie sono tarate su queste 21 versioni.
- Le finestre sugli obliqui non si riconoscono.
- Un esito buono dice che il metodo è credibile, non che regge sul pilota. Il passo successivo è la planimetria vera dei fondatori, quando l'utente la carica con il loro consenso scritto.

**24/10/2026, esito della prima versione (utente):** «Ho controllato e per come è fatto ora non sembra utile. È ancora grezzo.» L'utente chiede una ricerca su altre piattaforme e servizi di piante 3D: cosa offrono per renderle speciali, e come rendere la vista più bella, piacevole e chiara. Aperta la [ricerca sulla resa](16-ricerca-resa-vista-3d.md); la seconda versione della prova parte dai suoi risultati. Il ticket resta rivendicato; se la vista resta nella prima versione non è ancora deciso.

**Seconda versione, da fare** (decisioni del 24/10/2026, [ricerca sulla resa](../../../docs/ricerca/vista-3d-resa.md) §6):
- la stessa casa in tre stili affiancati: pianta 3D dall'alto, casa delle bambole luminosa, isometrica illustrata «Terracotta»;
- in ogni stile l'interruttore degli arredi semplici;
- nomi delle stanze senza metri quadri, ingresso indicato, nord e luce da sud;
- viste pronte («Dall'alto», «Di lato», «Gira», «Pianta 2D») con trascinamento limitato;
- avvertenza sempre visibile; movimento ridotto rispettato.

**24/10/2026, seconda versione costruita** (pagina usa e getta, privata): https://claude.ai/artifact/3XGpiR7CyEKeYAgTz91Vjr. La prima versione resta a https://claude.ai/artifact/Uwav9qpKCBQNkSskEWF5nZ.

*Contenuto:*
- le tre case lette in automatico dalle versioni pulite, cioè ciò che l'operatore conferma, in tre stili affiancati:
  - A, pianta 3D dall'alto: muri a 1,10 m con la cima color rame;
  - B, casa delle bambole: muri a tutta altezza, sole da sud con ombre morbide; i muri esterni verso chi guarda si abbassano a 1 m;
  - C, isometrica illustrata: telecamera senza prospettiva, colori pieni, contorni sottili, quarti di giro;
- pavimenti in quattro tinte per zona, nomi delle stanze senza metri quadri, freccia e «Ingresso», bussola con il nord;
- finestre con il vetro;
- arredi d'esempio facoltativi, scelti dal tipo di stanza e messi solo dove ci stanno e lontano dalle porte, con «Gli arredi sono solo un esempio»;
- in ogni vetrina «Dall'alto», «Di lato», «Gira» e «Pianta 2D», con trascinamento entro limiti;
- avvertenza sempre visibile con «Perché?»;
- three.js r170 con luce d'ambiente RoomEnvironment e tone mapping Neutral, nessun asset esterno.

*Nomi e ingresso:* nella prova i nomi delle stanze vengono dalle scritte delle piante inventate, al posto della conferma dell'operatore. L'ingresso è la porta che dà verso l'esterno.

*Verifiche (Chromium):*
- tre case in chiaro e in scuro;
- tutti i pulsanti delle tre vetrine, «Perché?», interruttore degli arredi, trascinamento, movimento ridotto;
- larghezze 360, 390, 768, 900, 1024, 1180 e 1366 px: nessuno scorrimento orizzontale, nessun errore;
- difetti trovati e corretti:
  - mobili della cucina scartati per un tramezzo vicino;
  - nomi della vista 3D sopra la pianta 2D;
  - «Dall'alto» storto nella casa delle bambole;
  - etichetta «Ingresso» tagliata.

Si aspetta il giudizio dell'utente: quale stile, con o senza arredi, se la vista resta nella prima versione.

**24/10/2026, giudizio sulla seconda versione (utente):** «Mi piace isometrica illustrata. Però volevo aggiungere che quando si zooma tanto su una stanza le cose vicino alla telecamera che coprono troppa vista diventino semi trasparenti.»
- Stile registrato in DESIGN.md, «Vista 3D indicativa (stile)».
- Terza versione: solo l'isometrica, con i muri che coprono la stanza semitrasparenti da vicino. Per avvicinarsi si tocca il nome della stanza, oppure si ingrandisce con la rotella o con due dita verso il punto indicato.
- Ancora aperti: arredi d'esempio sì o no; se la vista resta nella prima versione; la planimetria dei fondatori.

**24/10/2026, terza versione costruita** (pagina usa e getta, privata): https://claude.ai/artifact/C2aRNbV3h59zmdQKs8z93q. La seconda resta per confronto.
- Solo l'isometrica illustrata, più grande; arredi d'esempio facoltativi come prima.
- I nomi delle stanze sono pulsanti: toccandone uno ci si avvicina alla stanza. In più c'è «Tutta la casa», e la rotella o le due dita ingrandiscono verso il punto indicato.
- Trasparenza da vicino: oltre un certo ingrandimento si individua la stanza al centro della vista. I muri, le loro cime e i vetri che stanno tra chi guarda e quella stanza sfumano al 20% (i vetri al 12%). I muri dietro la stanza e gli arredi restano pieni; con il movimento ridotto la sfumatura è istantanea.
- Verifiche (Chromium):
  - avvicinamento a letto, cucina e bagno nelle tre case, ingrandimento con la rotella, pianta 2D, «Gira»;
  - 360, 390, 768, 1024 e 1366 px, in chiaro e in scuro, e il telefono con il movimento ridotto;
  - nessuno scorrimento orizzontale, nessun errore.

**24/10/2026, riscontro sulla terza versione (utente):** «Come mai lo zoom è così strano e si bugga tutto, insieme al movimento. Rimettilo come era prima.»
- *Cause trovate:*
  - l'ingrandimento verso il punto indicato spostava anche il centro di rotazione, per cui dopo uno zoom la casa girava attorno a un punto sbagliato;
  - la sfumatura dei muri ricompilava i materiali a ogni fotogramma e la vista andava a scatti.
- *Corretto nella stessa pagina* (versione 2 dell'artifact):
  - zoom e movimento come nella seconda versione: si ingrandisce verso il centro e si gira attorno alla casa;
  - i nomi delle stanze tornano semplici etichette;
  - la trasparenza resta per la stanza al centro della vista, con i materiali cambiati solo quando serve e meno raggi.
- Verificato in Chromium: zoom con la rotella in un angolo, rotazione dopo lo zoom, «Tutta la casa», 390 e 1024 px; nessun errore.

**25/10/2026, secondo riscontro sulla terza versione (utente):**
- Con una schermata: all'apertura il centro di rotazione era su un angolo, non al centro della casa, e girando la vista veniva tutta storta.
- Domanda: sul telefono lo zoom con due dita c'è già; cosa si intendeva con «trascinare con due dita»?

*Causa:* nella terza versione la prima inquadratura prendeva il centro di rotazione dal punto di partenza dei comandi, l'origine della pianta, invece che dal centro della casa. La seconda versione non aveva il difetto.

*Corretto* (versione 3 dell'artifact): la prima inquadratura parte dal centro della casa. Verificato in Chromium sulle tre case, in scuro a 1366 px e a 390 px: la casa resta al centro del riquadro prima e dopo una rotazione (fra 0,43 e 0,55 della larghezza).

*Risposta alla domanda:* «trascinare con due dita» voleva dire spostare la vista di lato, per avvicinarsi a una stanza che non è al centro. Non è stato aggiunto.

**25/10/2026, decisione dell'utente:** niente scorrimento con due dita («no, non aggiungere lo scorrimento con 2 dita, andiamo avanti»). Si guarda da vicino la stanza al centro; zoom e rotazione restano attorno alla casa.

**25/10/2026, decisioni dell'utente:** arredi d'esempio sì, con l'interruttore; esito buono, conferma dopo una planimetria vera dei fondatori. Ticket chiuso.
