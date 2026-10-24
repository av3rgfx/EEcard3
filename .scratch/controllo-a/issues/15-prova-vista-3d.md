# Prova: vista 3D da una planimetria

Type: prototype
Status: claimed
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
