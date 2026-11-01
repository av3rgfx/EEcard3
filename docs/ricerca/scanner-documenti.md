# Scanner di documenti al caricamento

Ricerca del 1 novembre 2026, svolta da un agente (skill `research`) su fonti primarie, con la data di lettura per ogni fonte. Le letture le ha fatte l'agente stesso, in sequenza, senza altri agenti. Risponde al ticket [15 «Ricerca: scanner di documenti già pronti»](../../.scratch/architettura-percorso-1/issues/15-ricerca-scanner-documenti.md) e serve al ticket [12 «Documenti, foto e ricevute in PDF»](../../.scratch/architettura-percorso-1/issues/12-documenti-foto-ricevute.md).

**Non è una scelta.** Confronta le strade; la decisione resta all'utente. Nessun programma installato, nessun account, nessuna immagine inviata a servizi esterni, nessuna app smontata. Il comportamento di Safari e di Chrome è letto nel loro **codice sorgente pubblico** (WebKit e Chromium) e nella documentazione; le librerie sono lette su npm e GitHub in sola lettura. Nessuna prova in un browser e nessuna prova su un telefono vero: dove conta, è segnato **Da verificare**.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Sul web nessun browser del telefono offre lo scanner di sistema dentro la pagina.** Safari su iPhone mostra tre voci: «Libreria foto», «Scatta foto», «Scegli file». Chrome su Android mostra la fotocamera e il selettore dei file di Android. Nessuna delle due trova i bordi del foglio [5][13].
- **Lo scanner del telefono c'è, ma fuori dalla pagina.** Su iPhone si scansiona con File, Note o Anteprima e si ottiene un PDF, che poi si sceglie con «Scegli file» [11][12]. Su Android lo fa Google Drive, ma salva la scansione nel Drive dell'utente, cioè sui server di Google [14].
- **Nel browser si può fare uno scanner nostro**, tutto dentro il telefono. La libreria più leggera trovata è **scanic** (MIT): circa 42 KB compressa, trova i quattro angoli, raddrizza e ha un editor degli angoli usabile a tocco e da tastiera [18]. **OpenCV.js** (Apache-2.0) fa lo stesso ma pesa circa 11 MB, 3,5 MB compresso [15]; **jscanify** (MIT) si appoggia a OpenCV.js [17].
- **«Schiarire» non lo fa nessuna delle librerie lette**: va scritto a parte, con poche righe sui pixel. Il `filter` del Canvas non si può usare su iPhone: in Safari è ancora dietro un'opzione sperimentale [4].
- **Le foto di iPhone:** dalla fotocamera di Safari arriva un JPEG; dalla libreria foto, per impostazione predefinita, la versione «più compatibile» [5][6][7]. Un file HEIC può arrivare da «Scegli file». sharp, sul server, non legge l'HEIC con i pacchetti già pronti [19].
- **App iPhone (dopo):** VisionKit ha la fotocamera per documenti da iOS 13. Trova il foglio, lo ritaglia, raddrizza la prospettiva, uniforma la luce e restituisce le pagine come immagini; il PDF lo fa l'app [21][23].
- **Android:** lo scanner di ML Kit fa tutto (bordi, filtri, ombre, macchie, più pagine, JPEG e PDF) e lavora sul telefono. Funziona solo nelle **app native** con i servizi Google Play, non nel web [24][25]. ML Kit invia a Google i dati d'uso, non le immagini [26][27].
- **Ricerca allargata e prova (§10):** fra una decina di strumenti trovati su npm, GitHub e Hacker News, scanic resta il più adatto, e dalla 1.7.0 lavora anche sul video della fotocamera. Nella prova con fogli inventati trova il foglio in 9 scene su 12, anche su un tavolo chiaro dove jscanify fallisce; quando sbaglia, la sua fiducia scende. Il suo rilevatore con l'intelligenza artificiale è addestrato anche su immagini «solo per ricerca»: resta spento. Nessuno strumento libero e maturo fa insieme fotocamera nella pagina, guida e schiarimento: quella parte si scrive noi.
- **Accessibilità:** il campo per scegliere un file è già l'alternativa senza fotocamera. Trascinare gli angoli richiede anche un modo **senza trascinare** (WCAG 2.2, criterio 2.5.7, livello AA) [29]. Nessuna fonte Apple o Google letta descrive una guida a voce per inquadrare il foglio: **Da verificare** sui telefoni.

## 1. Il web sul telefono

### 1.1 Cosa dicono le specifiche

- **Fonte (WHATWG HTML):** `accept` è un «suggerimento» sui tipi di file accettati. Con `image/*` il browser «potrebbe offrire» la fotocamera o la raccolta di foto [2].
- **Fonte (W3C, HTML Media Capture, Raccomandazione del 1/2/2018):** `capture` chiede di usare direttamente la fotocamera; `user` indica quella frontale, `environment` quella posteriore. Se il valore manca o non è valido, decide il browser. Se `accept` non ha un tipo che si può catturare, `capture` si ignora. La pagina riceve un normale elenco di file (`FileList`) [1].
- **Fonte (MDN, dati di compatibilità):** `capture` funziona da Safari iOS 10 e da Chrome Android 25; sul computer non c'è [3][4].
- **Inferenza.** `accept` non è un controllo di sicurezza: il server deve comunque verificare tipo e grandezza del file (docs/rules/BACKEND.md).

### 1.2 Safari su iPhone

Letto nel sorgente di WebKit, il motore di Safari: file `WKFileUploadPanel.mm`, ramo principale al commit `464bc663` [5]. La versione dentro iOS può essere un po' diversa da quella del ramo principale.

- **Fonte [5]: le voci del menu.** Se `accept` comprende immagini, il menu ha tre voci: «Libreria foto», «Scatta foto» (oppure «Scatta foto o video») e «Scegli file». La terza diventa «Scegli più file» con `multiple`. Se il telefono non ha la fotocamera, «Scatta foto» non c'è. Se `accept` non comprende immagini (per esempio solo `application/pdf`), Safari apre subito il selettore dei file. Nel codice non c'è una voce «Scansiona documenti».
- **Fonte [5]: con `capture`.** Se `capture` è presente e c'è una fotocamera, Safari apre subito la fotocamera, senza il menu.
- **Fonte [5]: cosa arriva alla pagina.**
  - *Scatta foto:* la fotocamera normale di iOS, senza ricerca dei bordi. La foto arriva come JPEG con qualità 0,8 e nome `image.jpg`. Un commento nel codice si chiede se conservare i dati EXIF.
  - *Libreria foto:* il selettore di sistema delle foto. Safari chiede la versione «compatibile» della foto, a meno che un'impostazione interna di WebKit dica il contrario; quell'impostazione vale «no» [5][6]. **Fonte (Apple):** la modalità `compatible` «usa la rappresentazione più compatibile» della foto [7].
  - *Scegli file:* il selettore di File di iOS, che consegna il file così com'è (anche PDF).
- **Inferenza.** Dalla libreria foto arriva di solito un JPEG anche se la foto è HEIC. La conversione la decide iOS: **Da verificare** su un iPhone vero.
- **Lo scanner di sistema, fuori dalla pagina.** **Fonte (Apple):** in File si tocca «Altro», poi «Scansiona documenti». Lo scatto è automatico (oppure manuale); poi si regolano gli angoli e si sceglie dove salvare. Lo stesso si fa in Note; da iOS 26 ci sono anche il flash e i filtri [11]. In Anteprima su iPhone, «Scansiona documenti» crea un **PDF**: più pagine, ritaglio, rotazione e colore [12].
- **Inferenza.** Su iPhone la strada già pronta è in due passi: scansionare in File o Anteprima, poi scegliere il PDF con «Scegli file». Funziona oggi, ma chiede di sapere che si può fare: la pagina deve dirlo in una riga.
- **Da verificare** su un iPhone vero:
  - se il selettore di File aperto da Safari ha anch'esso «Scansiona documenti» (il codice di WebKit apre il selettore di sistema, la cui interfaccia è di iOS);
  - da quale versione di iOS c'è la scansione in File: la pagina Apple letta non lo dice [11].

### 1.3 Chrome su Android

Letto nel sorgente di Chromium: file `SelectFileDialog.java`, ramo principale al commit `0ecc1f8e` [13].

- **Fonte [13]: con `capture`** e un tipo immagine, Chrome apre subito l'app fotocamera di Android.
- **Fonte [13]: con solo immagini** in `accept` e senza `capture`, Chrome apre un **selettore di foto** (quello di Android, o uno fornito da Chrome stesso).
- **Fonte [13]: con immagini e PDF** (`image/*,application/pdf`), Chrome apre la scelta di Android: il selettore dei file con il filtro sui tipi, più la fotocamera come voce in più. Un commento nel codice spiega che Chrome aggiunge un tipo inesistente perché il selettore di foto non si prenda la richiesta: così restano i file anche «nel cloud».
- **Inferenza.** Nel selettore dei file si vedono anche le app che offrono file, per esempio Google Drive: una scansione già salvata in Drive si può scegliere. Quali voci compaiono dipende dal telefono e dalle app installate: **Da verificare** su due o tre telefoni Android.
- **Fonte (Google):** Google Drive su Android ha la scansione dal pulsante della fotocamera: linea blu sul bordo del foglio, scatto automatico o manuale, ritaglio, filtri e scala di grigi, «Pulisci» per macchie e dita, più pagine, salvataggio in PDF o JPG **nel Drive** [14].
- **Inferenza.** La scansione di Drive passa dai server di Google per scelta dell'utente, non nostra. Possiamo accettare il file che ne esce, ma indicarla come strada nella pagina urterebbe con la scelta del 20/10/2026 sui dati.

### 1.4 Fotocamera dentro la pagina

- **Fonte (MDN, dati di compatibilità):** `getUserMedia` funziona da Safari iOS 11 e da Chrome Android 53. Serve una pagina HTTPS e il permesso della persona [4]. `ImageCapture` (scatto a piena risoluzione) c'è in Chrome da 59; in Safari `takePhoto` c'è da 18.4 e `grabFrame` da 26 [4].
- **Inferenza.** Una fotocamera nostra dentro la pagina permette il riquadro sul foglio in tempo reale, come fanno le app. Il costo è alto: permessi, schermo intero, luce, messa a fuoco, batteria, e una guida per chi non vede tutta da costruire. Per il pilota il campo file con la fotocamera di sistema dà lo stesso scatto con meno lavoro.

### 1.5 Il formato HEIC

- **Fonte (WebKit):** Safari 17 legge le immagini HEIC [8]. Il 8/4/2026 Safari Technology Preview ha corretto un difetto: le HEIC trascinate in una pagina venivano convertite in JPEG [9].
- **Fonte (Apple):** condivise con AirDrop, Messaggi o email, le foto HEIF «potrebbero» passare in automatico a un formato più compatibile come JPEG [10].
- **Fonte (sharp):** l'HEIC con compressione HEVC, coperta da brevetti, richiede una libvips compilata a parte con libheif, libde265 e x265; i pacchetti già pronti non la comprendono [19].
- **Fonte (npm):** per convertire nel browser esistono `heic-to` (1.6.7 del 27/10/2026) e `libheif-js` (1.23.5), entrambe **LGPL-3.0**; `heic2any` (MIT) è ferma alla 0.0.4 del 2023 [20].
- **Inferenza.** Su iPhone l'HEIC arriva soprattutto da «Scegli file». Lo scanner nel browser di iPhone può ridisegnare l'HEIC su un Canvas e salvarlo in JPEG. Che Chrome su Android sappia leggere l'HEIC: **Da verificare**. Se non lo sa, le strade sono una libreria LGPL nel browser, una libvips compilata sul server oppure il rifiuto con un messaggio chiaro.

## 2. Librerie che lavorano nel browser

Tutte lavorano sull'immagine dentro il telefono. Il codice si deve servire **dal nostro sito**: gli esempi nei README caricano da CDN di terzi (jsDelivr, unpkg, docs.opencv.org), che vedrebbero l'indirizzo IP di chi carica [15][17][18].

### 2.1 OpenCV.js

- **Fonte:** il file ufficiale `opencv.js` 4.13.0 pesa 10.964.323 byte; compresso in rete, 3.543.990 byte (lettura con `curl`, data del file 4/6/2026) [15]. Il WebAssembly è dentro il file in base64. Con l'opzione `--disable_single_file` il WebAssembly finisce in un file `.wasm` a parte, più piccolo [15].
- **Fonte:** la licenza del ramo 4.x è Apache 2.0 [15]. Esistono anche le versioni 4.14.0 e 5.0.0 (tag del repository) [15]. Il pacchetto npm più scaricato, `@techstark/opencv-js` 5.0.0-release.1 (Apache-2.0, circa 344.000 scaricamenti in una settimana), è un riconfezionamento di terzi, non di OpenCV [16][28].
- **Inferenza.** Fa tutto quello che serve (bordi, prospettiva, contrasto adattivo), ma 3,5 MB su una rete mobile per una sola schermata sono tanti; si scarica solo quando si apre lo scanner. Ricostruirlo con i soli moduli necessari è possibile ma richiede la catena di compilazione Emscripten.

### 2.2 jscanify

- **Fonte:** MIT, versione 1.4.3 del 20/7/2026, circa 91.000 scaricamenti in una settimana, 1.800 stelle su GitHub; si appoggia a OpenCV.js [17][28]. Nel pacchetto c'è una copia di `opencv.js` di 8.980.607 byte, usata dalla versione per Node (che dipende da `canvas` e `jsdom`). Nel browser OpenCV.js va caricato a parte [17].
- **Fonte (codice 1.4.3):** trova i bordi (Canny, sfocatura, soglia di Otsu), sceglie il contorno più grande, ne ricava quattro angoli e raddrizza con `warpPerspective`. `extractPaper` accetta anche angoli dati a mano [17].
- **Fonte (README):** il foglio si riconosce meglio su una superficie piana con lo sfondo di un solo colore [17].
- **Da verificare.** Il README annuncia, dalla 1.3.0, la riduzione dei riflessi e i fogli colorati, ma nel file per il browser della 1.4.3 non si è trovato codice che li faccia. Di schiarire il foglio non parla.

### 2.3 scanic

- **Fonte:** MIT, versione 1.7.1 del 15/10/2026, primo rilascio 10/7/2025, 21 versioni, circa 32.000 scaricamenti in una settimana, 79 stelle; nessuna dipendenza [18][28]. Il nucleo è in Rust compilato in WebAssembly: sfocatura, bordi, dilatazione, poi raddrizzamento della prospettiva [18].
- **Fonte (codice `dist/scanic.js`):** 106.662 byte, 42.300 compressi (misurati). L'unico indirizzo esterno è nel rilevatore facoltativo con l'intelligenza artificiale: `cdn.jsdelivr.net/npm/scanic-ml@0.2.0` [18].
- **Fonte (guida):** il rilevatore con l'intelligenza artificiale (`detector: 'ml'`) è facoltativo. Al primo uso scarica circa 2 MB (modello e motore ONNX) da un CDN; si può servire dal nostro sito con `ml.assetBaseUrl`. Il modello ha 456.000 parametri e la licenza del modello non è scritta nella pagina [18].
- **Fonte (guida dell'editor degli angoli):** si usa a tocco e con il mouse, con un'area di tocco di 44 px e una lente. Da tastiera: Tab per passare agli angoli, le frecce per spostarli, Invio per confermare, Esc per annullare. C'è anche un pannello di pulsanti per spostare l'angolo di un passo, nascosto per impostazione predefinita [18].
- **Fonte (codice):** gli angoli sono pulsanti con un nome in inglese, per esempio «Top-left corner». Non c'è una funzione per schiarire: la scala di grigi serve solo a trovare i bordi [18].
- **Inferenza.** È la più adatta al pilota per peso e licenza, e ha già l'editor degli angoli. Il rischio è la manutenzione: un solo autore, progetto giovane. Il codice è piccolo e si può tenere noi se l'autore smette. Nomi degli angoli in italiano e annunci allo screen reader: **Da verificare** se si possono cambiare dalle opzioni.

### 2.4 La via più semplice: niente rilevamento

- **Fonte (MDN, dati di compatibilità):** Canvas 2D con `drawImage` e `getImageData` funziona ovunque; `OffscreenCanvas` da Safari 16.4. Il `filter` del Canvas c'è in Chrome da 52, ma in Safari 18 è dietro un'opzione sperimentale [4].
- **Inferenza.** Si può fare senza librerie:
  - la persona tocca o regola i quattro angoli;
  - il codice raddrizza con una trasformazione di prospettiva scritta a mano, qualche decina di righe;
  - un pulsante ruota di 90°;
  - «Schiarisci» stira i grigi sui pixel, perché il `filter` non funziona su iPhone.
  Costa più codice nostro di scanic, ma niente dipendenze. Senza rilevamento automatico, ogni foto chiede quattro tocchi.

### 2.5 Sul server

- **Fonte (sharp 0.35.5, Apache-2.0):** sa ruotare secondo l'orientamento EXIF (`autoOrient`), stirare il contrasto (`normalise`, dal 1% al 99%), applicare il contrasto adattivo (`clahe`), passare in scala di grigi e applicare una soglia. Le trasformazioni sono solo affini, da una matrice 2×2: niente prospettiva [19]. Al salvataggio **toglie tutti i metadati**, compreso l'orientamento, salvo richiesta [19]. Richiede Node.js 20.9 o più; su Linux con glibc consiglia un altro allocatore di memoria (jemalloc) per i processi lunghi [19].
- **Inferenza.** Il server non è il posto per trovare i bordi: sharp non raddrizza la prospettiva, e OpenCV in Node chiede pacchetti nativi pesanti sui contenitori da 512 MiB. sharp è utile in ogni caso dopo lo scanner: riduce la foto (già deciso), toglie luogo e ora (DESIGN.md, regola della facciata) e dà un contrasto di base anche alle foto caricate senza scanner.

## 3. App iPhone (dopo): VisionKit

- **Fonte (Apple):** `VNDocumentCameraViewController`, da iOS 13, mostra la fotocamera che aiuta a scansionare documenti pagina per pagina. Restituisce un `VNDocumentCameraScan` con il numero di pagine, un titolo e l'immagine di ogni pagina (`imageOfPage(at:)`). Con quelle immagini l'app può creare un PDF [21]. `isSupported` dice se il telefono lo permette [21].
- **Fonte (WWDC 2019, sessione 234):** la fotocamera per documenti è la stessa di Note. Trova il documento, lo ritaglia, corregge la prospettiva e uniforma la luce; più documenti tornano come pagine. Nella stessa sessione Apple dice che il riconoscimento del testo «avviene tutto sul dispositivo» [23].
- **Fonte (Apple, Vision):** `VNDetectDocumentSegmentationRequest` (da iOS 15) e `DetectDocumentSegmentationRequest` (da iOS 18) trovano i quattro angoli di un documento in una foto già fatta. `RecognizeDocumentsRequest` (da iOS 26) legge la struttura del documento: testo, righe, paragrafi, tabelle, elenchi, codici a barre [22]. `DataScannerViewController` (da iOS 16) legge testo e codici dal video, non scansiona pagine [22].
- **Inferenza.** Nell'app la fotocamera per documenti di VisionKit sostituisce scanic: meno codice e il comportamento che le persone conoscono da Note. Il PDF si fa nell'app o sul server con le stesse immagini. Che la fotocamera per documenti lavori tutta sul telefono è molto probabile: nessuna pagina di VisionKit parla di rete, e la frase di Apple riguarda il riconoscimento del testo. **Da verificare** nelle note sulla privacy di Apple, se servirà.
- **Da verificare.** Nessuna pagina Apple letta descrive come la fotocamera per documenti si usa con VoiceOver (annunci, scatto automatico). Va provato su un iPhone con VoiceOver prima di affidarsi a lei.

## 4. Android: scanner di ML Kit

- **Fonte (Google):** lo scanner di documenti di ML Kit offre l'intera interfaccia. Trova i bordi; la persona ritaglia, applica filtri, toglie ombre e macchie; si può limitare il numero di pagine e permettere le foto della galleria. Tre livelli: `SCANNER_MODE_BASE`, `SCANNER_MODE_BASE_WITH_FILTER`, `SCANNER_MODE_FULL` (predefinito) [24].
- **Fonte (Google): requisiti.** Android 5.0 (API 21) o più, almeno 1,7 GB di RAM, altrimenti errore `UNSUPPORTED`. Servono i servizi Google Play, che scaricano modelli, logica e interfaccia; la prima volta può servire un'attesa [24][25].
- **Fonte (Google): risultato.** Restituisce gli indirizzi locali delle immagini JPEG e del PDF [25].
- **Fonte (Google): permessi e dati.**
  - Non serve il permesso della fotocamera, perché usa quello dei servizi Google Play [24].
  - «L'intero flusso dello scanner funziona sul dispositivo» [24].
  - Le condizioni di ML Kit dicono che immagini e risultati non vanno ai server di Google. ML Kit però invia metriche d'uso e di prestazione, e l'app deve informarne le persone [26].
  - I dati inviati sono dispositivo, app, tempi di risposta, configurazione (formato e risoluzione dell'immagine), grandezza di ingresso e uscita [27].
- **Fonte (Google):** le condizioni vietano di smontare ML Kit [26].
- **Inferenza.** È un componente per app Android native; dal web non si può usare. Con Android solo web per ora, oggi non serve; se un giorno ci sarà un'app Android, è la scelta naturale. Le metriche verso Google vanno scritte nell'informativa.

## 5. Per tutti

### 5.1 Più pagine in un PDF

- **Fonte (npm):** `pdf-lib` (MIT) funziona nel browser e in Node e incorpora JPEG e PNG. È molto usato (circa 27,6 milioni di scaricamenti in una settimana), ma l'ultima versione, la 1.17.1, è del 6/11/2021 [28]. Ne esistono continuazioni curate da altri, per esempio `@cantoo/pdf-lib` 2.11.1 del 15/9/2026, MIT [28]. `jsPDF` 4.2.1 del 17/3/2026 è MIT [28]. PDFKit 0.20.2, MIT, incorpora JPEG e PNG e di base ruota secondo l'orientamento EXIF [28]; per le ricevute è già in [pdf-ricevute.md](pdf-ricevute.md).
- **Inferenza.** Due strade:
  - *PDF nel telefono:* si carica un solo file, ma serve una libreria in più nella pagina.
  - *Pagine caricate come immagini e unite sul server:* ogni pagina si controlla e si riduce con sharp, e un caricamento interrotto perde una pagina sola.
  Se per le ricevute si sceglie una libreria che incorpora immagini, conviene la stessa sul server. Il PDF che arriva già fatto (da Anteprima o File su iPhone, da Drive) si accetta così com'è, con i controlli sul tipo e sulla grandezza.
- **Inferenza.** Una pagina fotografata è un'immagine muta per lo screen reader (lo dice già DESIGN.md per la ricevuta firmata). Per l'operatore che usa lo screen reader contano i dati scritti accanto al file (importo, data, numero dell'operazione). Il riconoscimento del testo (sul telefono con Vision nell'app; nel browser con librerie apposite) non è stato studiato qui.

### 5.2 Accessibilità

- **Fonte (W3C):** il criterio 2.5.7 «Movimenti di trascinamento» (WCAG 2.2, AA) chiede che ciò che si fa trascinando si possa fare anche con un solo tocco, senza trascinare. La tastiera da sola non basta: servono comandi che si toccano. Esempio del W3C: per un rettangolo di selezione, si tocca un angolo e poi quello opposto [29].
- **Inferenza.** Cosa serve allo scanner del web:
  - *alternativa senza fotocamera:* «Scegli file» c'è già in Safari e in Chrome (§1.2, §1.3), quindi non usare `capture`, che salta il menu;
  - *angoli:* oltre al trascinamento, toccare un angolo e poi il punto dove va, oppure i pulsanti di spostamento (scanic li ha, nascosti per impostazione predefinita, §2.3); nomi in italiano;
  - *salto dello scanner:* un pulsante «Usa la foto così com'è», perché il rilevamento sbaglia (fogli su fondo chiaro, pieghe);
  - *annunci* con `aria-live`: «Foglio trovato», «Angoli regolati», «Pagina 2 di 3 aggiunta»;
  - *movimento ridotto:* niente animazioni del riquadro (DESIGN.md, «Interazioni e stati»).
- **Da verificare.** Una guida a voce per inquadrare il foglio («avvicina», «sposta a sinistra») non è descritta in nessuna fonte Apple o Google letta, né per VisionKit né per ML Kit. Sul web ci sarebbe solo con una fotocamera nostra dentro la pagina (§1.4).

### 5.3 Nessuna immagine fuori

| Strada | Dove va l'immagine | Fonte |
| --- | --- | --- |
| Campo file con fotocamera, libreria o file | Telefono → nostro server | [1][5][13] |
| scanic, jscanify, OpenCV.js, Canvas | Solo nel telefono; il codice va servito dal nostro sito | [15][17][18] |
| scanic con rilevatore IA | Nel telefono; modello da CDN, salvo servirlo noi | [18] |
| sharp sul server | Solo sul nostro server | [19] |
| Scanner di File, Note, Anteprima su iPhone | Nel telefono, poi caricato da noi | [11][12] |
| Scansione di Google Drive | **Nel Drive dell'utente, su Google** | [14] |
| VisionKit (app iPhone) | Nel telefono (molto probabile, §3) | [21][23] |
| ML Kit (app Android) | Nel telefono; metriche d'uso a Google | [24][26][27] |

## 6. Confronto delle strade per il pilota sul web

| | A. Solo campo file | B. Campo file + ritocco nostro | C. B + scanic | D. B + jscanify / OpenCV.js |
| --- | --- | --- | --- | --- |
| Trova i bordi | No (sì se la persona usa lo scanner di iPhone prima) | No: quattro tocchi | Sì, con editor degli angoli | Sì |
| Raddrizza | No | Sì (codice nostro) | Sì | Sì |
| Schiarisce | Sul server con sharp | Sì (codice nostro) | Codice nostro | OpenCV lo sa fare; da scrivere |
| Più pagine in PDF | Un PDF già fatto, oppure più foto | Più foto, unite | Più foto, unite | Più foto, unite |
| Peso nella pagina | Nessuno | Pochi KB | ~42 KB compressi | ~3,5 MB compressi |
| Licenza | — | Nostra | MIT | MIT + Apache-2.0 |
| Manutenzione | Browser | Nostra | Un autore, attivo (ottobre 2026) | jscanify luglio 2026; OpenCV grande progetto |
| Accessibilità | Già data dal sistema | Tutta da fare | Tastiera già fatta; tocco senza trascinare da completare | Tutta da fare |
| Immagini fuori | No | No | No (rilevatore IA spento o servito da noi) | No |

Dopo il web: **E. VisionKit** nell'app iPhone (§3). **F. ML Kit** solo se un giorno ci sarà un'app Android (§4).

## 7. Parere dell'agente

*Aggiornato dal §10 (ricerca allargata): la scelta di scanic resta; il §10 aggiunge la fotocamera dentro la pagina come passo successivo e tiene spento il rilevatore IA.*

*Parere, non decisione.* Seguendo l'ordine «prima il telefono, poi le librerie, poi il codice nostro»:

1. **Sempre**, per tutti i caricamenti: campo file con `accept="image/*,application/pdf"` e `multiple`, **senza** `capture`. Così il menu di sistema offre fotocamera, foto e file, e chi non usa la fotocamera ha già la sua strada. Una riga d'aiuto: «Su iPhone puoi anche scansionare il foglio con l'app File e scegliere il PDF». Sul server: sharp riduce la foto, la ruota per il verso giusto, toglie luogo e ora, controlla tipo e grandezza.
2. **Nel pilota**, solo per le foto di fogli (contabili, ricevute, documenti del fascicolo), non per le foto della facciata: un passo «Controlla il foglio» con scanic servito dal nostro sito, rilevatore IA spento. Contiene gli angoli trovati da soli e regolabili (a tocco senza trascinare e da tastiera), «Ruota», «Schiarisci» (codice nostro sui pixel), «Usa così com'è», «Aggiungi pagina». Le pagine si uniscono in un PDF sul server.
3. **Nell'app iPhone**: la fotocamera per documenti di VisionKit al posto di scanic, provata prima con VoiceOver.
4. **Da non fare ora:** fotocamera nostra dentro la pagina, OpenCV.js (3,5 MB), ML Kit (niente app Android), suggerire la scansione di Drive.

*Perché:* il punto 1 serve comunque e costa quasi nulla. Il punto 2 è l'unica strada che dà «trova i bordi e raddrizza» nel browser senza mandare immagini fuori, a un peso accettabile sul telefono. Se scanic delude con fogli veri, si scende alla via B, cioè gli stessi schermi senza rilevamento, perdendo solo i quattro tocchi risparmiati.

## 8. Dove serve un parere professionale

- **Privacy:** contabili e documenti contengono dati personali di terzi (nomi, IBAN, indirizzi). Il trattamento sul telefono e sul nostro server rientra nel parere privacy già previsto. Con un'app Android con ML Kit andrebbero scritte nell'informativa le metriche inviate a Google [26]. Questa ricerca non dà un parere legale.
- **Licenze del modello IA:** solo se un giorno si accendesse il rilevatore IA di scanic, addestrato anche su immagini «solo per ricerca» (§10.3) [40].
- **Licenze:** solo se si scegliesse una libreria LGPL per l'HEIC nel browser (`heic-to`, `libheif-js`) o una libvips con x265 sul server (brevetti HEVC) [19][20].

## 9. Cosa resta all'utente

Sei domande per il ticket [Documenti, foto e ricevute in PDF](../../.scratch/architettura-percorso-1/issues/12-documenti-foto-ricevute.md):

1. **Quali caricamenti** passano dallo scanner: contabili, ricevute, documenti del fascicolo? Le foto della facciata no (proposta del §7).
2. **Nel pilota o dopo:** nel pilota solo il campo file con il ritocco sul server (A), oppure anche «Controlla il foglio» con il rilevamento dei bordi (C)?
3. **Più pagine:** un PDF unico per documento, unito sul server, oppure pagine separate?
4. **HEIC che non si legge:** convertirlo (libreria LGPL o server compilato a parte) oppure chiedere una foto in JPEG con un messaggio chiaro?
5. **Fotocamera dentro la pagina** (§10.6): nel pilota, oppure in un secondo tempo, dopo una prova su un iPhone vero?
6. **Prove con telefoni veri:** su quali iPhone e Android, con VoiceOver e TalkBack, e con fogli inventati?

## 10. Ricerca allargata: strumenti per uno scanner nella pagina

Risponde al ticket [17 «Ricerca: strumenti per uno scanner nostro dentro la pagina»](../../.scratch/architettura-percorso-1/issues/17-ricerca-scanner-nella-pagina.md), aperto il 1/11/2026 su richiesta dell'utente, a cui piace l'idea di uno scanner nostro dentro la pagina. Letture fatte in sequenza dalla sessione principale: l'agente in background non ha avuto il permesso.

### 10.1 Metodo

- **Dove si è cercato:** registro npm (ricerca per parole e conteggi settimanali dal 23 al 29/10/2026) [30]; GitHub (README, licenze, elenchi delle segnalazioni, ultimo commit con `git ls-remote`) [31]–[37]; Hacker News con la sua interfaccia pubblica [38]; motore di ricerca con domande su Reddit e sui forum [39].
- **Reddit:** nessuna discussione trovata. Le ricerche limitate a reddit.com non hanno dato risultati, e il sito dal contenitore risponde 403 (già visto il 30/10/2026 in [skill-sicurezza-sviluppo.md](skill-sicurezza-sviluppo.md), §0). Le opinioni degli sviluppatori vengono quindi dalle segnalazioni su GitHub e da Hacker News, e valgono come **indizi**, non come fonti.
- **Prova pratica:** prima negata dal sistema dei permessi, poi autorizzata dall'utente e fatta con fogli inventati (§10.7). Nel §10.2–10.6 i numeri sono quelli dichiarati dagli autori; quelli misurati da noi sono nel §10.7.

### 10.2 Candidati trovati

| Strumento | Cos'è | Licenza | Peso, dipendenze | Attività | Esito |
| --- | --- | --- | --- | --- | --- |
| **scanic** [32] | Libreria: bordi, raddrizzamento, editor degli angoli; dalla 1.7.0 (13/10/2026) anche sul video della fotocamera e in un Web Worker | MIT | ~42 KB compressi, nessuna | 21 versioni in 15 mesi, prove su foto vere a ogni rilascio, 5 segnalazioni tutte chiuse | **Il migliore** |
| scanic-ml [33] | Rilevatore IA facoltativo di scanic (modello DocCornerNet) | MIT il codice; dati di addestramento in parte «solo per ricerca» | ~2 MB | come scanic | Spento (§10.3) |
| jscanify [34] | Libreria sopra OpenCV.js | MIT | ~3,5 MB compressi con OpenCV.js | 31 segnalazioni chiuse; ultima versione luglio 2026 | Pesante; blocco su iPhone mai risolto (§10.4) |
| opencv-document-scanner [35] | Libreria sopra OpenCV.js | MIT | come OpenCV.js | ~1.100 scaricamenti in una settimana, ultima versione 9/2025; l'autore lavora per Dynamsoft, gli esempi rimandano al suo visore commerciale | Non aggiunge nulla a jscanify |
| @jg-stevan/scanner-core [36] | Motore completo: fotocamera, bordi (OpenCV 4.5.5 in un worker), scatto automatico, schiarimento, PDF, testo | MIT | richiede OpenCV, zustand, jspdf, heic2any; legato a una variabile di Next.js | Nato il 15/10/2026, 564 scaricamenti in una settimana | Troppo giovane e legato; utile da leggere per lo schiarimento |
| docuSnap [37] | Fotocamera con riquadro in tempo reale, controlli di nitidezza, luce e riflessi, consigli («avvicinati», «stai fermo»), scatto automatico | **Contraddittoria:** il README dice «valutazione o commerciale, contattare l'autore», il file LICENSE è MIT di un altro autore | Un file, nessuna dipendenza; scarica pico.js da un CDN | Non su npm | Scartato per la licenza; l'idea della guida è buona |
| docscan (pncolvr) [31] | App completa nel browser: OpenCV.js, pdf-lib, modo colore e bianco e nero, PDF di più pagine | MIT | come OpenCV.js | App, non libreria | Solo riferimento |
| Doxa [31] | Soglie adattive per fogli (Sauvola, Bradley e altre) in C++, compilabili in WebAssembly | CC0 | va compilato noi | Nessun pacchetto npm pronto | Non serve: lo schiarimento è poche decine di righe |
| image-js [30] | Elaborazione d'immagini in JavaScript | MIT | ~11 MB non compresso | 71.000 scaricamenti in una settimana | Generica, nessun aiuto sui bordi del foglio |
| OpenDocScan, Scanicle [39] | App nel browser segnalate da elenchi di prodotti | Scanicle chiusa; OpenDocScan «MIT o Apache» secondo l'elenco | — | Sorgente non trovato | Non verificabili |

Scartati senza leggerli oltre, perché commerciali o con chiave di licenza: Dynamsoft, Genius Scan Web SDK, Scanbot, Microblink [30]. Anche i molti pacchetti per React Native, Capacitor o Cordova non servono: avvolgono VisionKit e ML Kit nelle app (§3, §4).

### 10.3 Il rilevatore IA di scanic

- **Fonte:** il modello è DocCornerNet, MIT [33]. È addestrato sul DocCornerDataset, che secondo la sua scheda ha licenza «altro»: MIDV-500, MIDV-2019 e SmartDoc «solo per uso di ricerca», COCO in CC BY 4.0, dataset Roboflow con licenze diverse [40].
- **Inferenza.** Usare in un servizio commerciale un modello addestrato su immagini «solo per ricerca» è una questione legale aperta. Il rilevatore resta spento, come già proposto nel §7. Se un giorno servisse, prima un parere sulle licenze.

### 10.4 Cosa dicono gli sviluppatori (indizi)

- **jscanify su iPhone:** la fotocamera si blocca subito nei browser di iPhone e su Android no. Il manutentore non trova la causa; la segnalazione è chiusa a gennaio 2024 senza conferma della soluzione [34].
- **jscanify in generale:** segnalazioni chiuse su ricevute non trovate, sfondi pieni di oggetti, qualità scarsa [34]. Nel lancio su Hacker News (aprile 2023, 51 punti) le domande erano su una prova con la fotocamera e sui fogli curvi [38].
- **scanic:** una segnalazione su «precisione bassa» (giugno 2026). Il manutentore corregge in giornata un errore di caricamento e chiede immagini d'esempio per la precisione [32].
- **OpenCV.js:** la memoria si libera a mano, oggetto per oggetto. Un oggetto dimenticato basta a far cadere una pagina sul telefono (guida citata in [39]; **Inferenza**).
- **Scanicle:** l'autore, nella presentazione del prodotto, dice che la parte più lunga è stata far funzionare la fotocamera su Safari di iPhone senza superarne i limiti né farlo cadere [39].
- **Inferenza.** La parte difficile non è trovare i bordi, ma la fotocamera dentro la pagina su iPhone: memoria, permessi, calore. Va provata su un iPhone vero prima di prometterla.

### 10.5 Cosa resta da scrivere a noi

- **Schiarimento («effetto documento»).** Nessuna libreria matura lo offre da sola. Gli algoritmi sono noti e pubblici: soglia locale di Bradley-Roth o di Sauvola con l'immagine integrale; stima dell'ombra con una chiusura morfologica su un'immagine ridotta, poi divisione; stiramento del bianco. scanner-core li scrive in circa 700 righe MIT, leggibili come esempio [36]. Si scrivono noi, con una prova su fogli inventati.
- **Guida e scatto automatico.** docuSnap mostra l'idea: nitidezza, luce, riflessi e grandezza del foglio controllati a ogni fotogramma, con consigli come «avvicinati» e «stai fermo» [37]. Si scrive noi, sui bordi trovati da scanic. Sarebbe anche la **guida a voce** che manca nelle fonti Apple e Google (§5.2): gli stessi consigli letti dallo screen reader.

### 10.6 Parere aggiornato dell'agente

*Parere, non decisione.*

1. **Il cuore resta scanic**, servito dal nostro sito, con il rilevatore IA spento: è l'unico strumento libero, leggero, attivo e con le prove su foto vere.
2. **Scanner nella pagina in due tempi:**
   - *primo tempo, pilota:* la foto si scatta con la fotocamera di sistema dal campo file, poi «Controlla il foglio» con scanic (§7, punto 2);
   - *secondo tempo:* la **fotocamera dentro la pagina**, con il riquadro del foglio in tempo reale, consigli a voce e scatto automatico. scanic legge già il video. Si aggiunge solo dopo una prova su un iPhone vero: memoria, calore, permessi, VoiceOver.
3. **Scritti da noi:** schiarimento e guida, piccoli e provati con fogli inventati.
4. **Da non usare:** docuSnap (licenza contraddittoria), scanner-core come dipendenza (troppo giovane), OpenCV.js e jscanify (peso; blocco su iPhone).
5. **Prova:** fatta su fogli inventati (§10.7), con esito buono e due regole in più; resta quella su un iPhone e un Android veri.

*Perché in due tempi:* il primo dà subito bordi e raddrizzamento con poco rischio. Il secondo è quello che l'utente immagina, ma le fonti dicono che su Safari di iPhone è la parte fragile.

### 10.7 Prova con fogli inventati

Autorizzata dall'utente il 1/11/2026. Gli script sono in [.scratch/architettura-percorso-1/prove/scanner/](../../.scratch/architettura-percorso-1/prove/scanner/README.md), con i numeri in `risultati.json`.

**Metodo**
- La prova crea da sé una **contabile di prova** A4 e uno **scontrino di prova**, con testo inventato. Li posa in prospettiva su sfondi diversi, con luce non uniforme, rumore e una leggera sfocatura, come in una foto. Gli angoli veri sono quindi noti.
- **Dodici scene:** legno scuro con prospettiva leggera e forte; tavolo chiaro quasi bianco; tessuto a righe; ombra di una mano sul foglio; scontrino color avorio; foglio piegato a metà; scrivania con telefono, busta e tazza; foglio girato di 15° su legno e su tavolo chiaro; foglio girato di 45°; un angolo fuori dall'inquadratura.
- **Due misure:** 1500×2000 e 3000×4000 pixel, cioè 12 megapixel come un telefono.
- **Due librerie:** scanic 1.7.1 e jscanify 1.4.3 con il suo OpenCV.js. Pacchetti scaricati dal registro npm ed estratti in una cartella a parte, fuori dal progetto; niente `npm install`, nessuno script d'installazione eseguito.
- **Dove:** Chromium 153 senza schermo, su un computer, non su un telefono. Ogni richiesta non locale era bloccata e registrata: **nessuna**. scanic non ha chiesto nulla oltre al suo file.
- **Errore** = distanza fra gli angoli trovati e quelli veri, in percentuale della diagonale della foto, sull'angolo peggiore. Sotto l'1% il ritaglio è a occhio perfetto; verso il 3–5% un angolo è visibilmente fuori.
- **Un errore nostro corretto durante la prova:** la prima versione delle scene aveva una cornice scura ai bordi, dovuta alla sfocatura, e metà delle righe trasparenti. Ha falsato il primo giro, che è stato rifatto.

**Risultati** (errore sull'angolo peggiore; per scanic con la foto rimpicciolita da noi a 1000 px sul lato lungo, vedi sotto)

| Scena | scanic, 1500×2000 | scanic, 12 MP | Fiducia di scanic | jscanify, 1500×2000 |
| --- | --- | --- | --- | --- |
| Legno, prospettiva leggera | 0,5% | 0,6% | 0,93 | 0,1% |
| Legno, prospettiva forte | 0,5% | 0,5% | 0,87 | 0,1% |
| Tavolo chiaro | 0,4% | 0,4% | 0,92 | **49%** |
| Tessuto a righe | 2,7% | **47%** | 0,90 / **0,65** | **48%** |
| Ombra di una mano | 4,0% | 4,1% | 0,91 | 0,1% |
| Scontrino avorio | 0,5% | 0,3% | 0,79 | 0,3% |
| Foglio piegato | 0,5% | 0,5% | 0,93 | 0,1% |
| Scrivania con oggetti | 0,5% | 0,5% | 0,85 | 0,1% |
| Girato di 15°, legno | 0,4% | 0,9% | 0,89 | 0,1% |
| Girato di 15°, tavolo chiaro | 1,7% | 1,7% | 0,89 | **48%** |
| Girato di 45° | **74%** | **75%** | **0,18** | **34%** |
| Angolo fuori inquadratura | 9,9% | 4,8% | 0,90–0,95 | **61%** |

- **Fonte (prova): scanic** trova bene il foglio in 9 scene su 12, anche sul tavolo chiaro, con l'ombra e con la piega. Sbaglia con il foglio a 45° e con il tessuto a righe a 12 MP; in questi due casi la sua **fiducia** scende (0,18 e 0,65), mentre nei casi giusti resta fra 0,79 e 0,95. Nell'angolo fuori inquadratura il ritaglio comprende un po' di sfondo, come ci si aspetta.
- **Fonte (prova): foto grandi.** Passando la foto da 12 MP così com'è, scanic ha sbagliato anche il legno con prospettiva leggera (13%), scambiando le venature per il bordo. Rimpicciolita da noi a 1000 px prima della ricerca, con gli angoli riportati alla misura vera, l'errore torna allo 0,6%. Il tempo di ricerca è di 30–180 ms; il raddrizzamento di una foto da 12 MP di 0,2–0,6 s.
- **Fonte (prova): jscanify** è più preciso quando il foglio stacca bene dallo sfondo (0,1%). Ma perde il foglio sul tavolo chiaro, sul tessuto, con un angolo fuori e a 45°: sceglie un altro contorno e non dà alcuna fiducia per accorgersene. Ricerca in circa 130–180 ms, più 3,5 MB da scaricare.
- **Fonte (prova): video.** Su un video 1080×1440 creato dalla scena con l'ombra, che si muove un poco, scanic ha trovato il foglio in 30 fotogrammi su 30, con 54 ms a fotogramma (massimo 111). Al ritmo di 10 ricerche al secondo, come nell'esempio dell'autore, resta margine, ma su un computer: su iPhone **Da verificare**.
- **Fonte (prova): schiarimento nostro.** Circa 25 righe: si stima la luce della carta su riquadri di 16 px, si ammorbidisce, si divide e si porta il fondo a bianco. Toglie l'ombra della mano e uniforma la metà scura del foglio piegato, in 80–125 ms su un foglio da 1500×2000 circa. La linea della piega resta visibile, come è giusto.
- **Fonte (prova): editor degli angoli.**
  - I quattro angoli sono pulsanti, con un nome **in inglese** («Top-left corner»). I nomi sono scritti nel codice e non si cambiano dalle opzioni, a differenza di quelli dei pulsanti della barra («Reset», «Cancel», «Apply»).
  - Con la tastiera le frecce spostano l'angolo (5 pressioni, 5 px).
  - I pulsanti per spostare senza trascinare ci sono, ma nascosti finché non si accende «Precision nudge».
  - Non c'è nessun annuncio per lo screen reader (`aria-live`).
  - I pallini degli angoli si vedono di 20×20 px; secondo la guida l'area di tocco è di 44 px [18], da misurare su telefono.
- **Inferenza.**
  - **Regole per noi:** rimpicciolire sempre la foto a circa 1000 px prima della ricerca; sotto una fiducia di circa 0,75 non fidarsi del ritaglio e aprire subito l'editor, con un messaggio. La soglia è da tarare su foto vere.
  - **Editor:** i nomi italiani e gli annunci li mettiamo noi, oppure scriviamo il nostro editor sopra `extractDocument`. L'editor di scanic è piccolo; il nostro sarebbe di poche decine di righe e rispetterebbe meglio DESIGN.md e il criterio 2.5.7.
  - **Nessuna combinazione con jscanify:** dove scanic sbaglia, sbaglia anche jscanify; dove jscanify è più preciso, scanic lo è abbastanza.
- **Limiti:** immagini sintetiche, più pulite delle foto vere (niente riflessi, mossi, dita, fogli curvi); un browser da computer, non Safari su iPhone; nessuna prova di memoria o di calore. La prova dice che la strada regge, non che regge sul telefono.

**Parere aggiornato dell'agente, dopo la prova** (*parere, non decisione*): la scelta di scanic esce rafforzata, con due regole nostre: foto rimpicciolita e soglia di fiducia. Insieme a scanic si scrivono noi tre cose: schiarimento (provato qui), consigli a voce, ed eventualmente l'editor. La fotocamera dentro la pagina resta per il secondo tempo, dopo la prova su un iPhone vero, partendo dalla stessa pagina di prova.

## Fonti

Tutte lette il 1/11/2026.

1. W3C, «HTML Media Capture», Raccomandazione del 1/2/2018: https://www.w3.org/TR/html-media-capture/ — `capture`, valori, ripiego, privacy, `FileList`.
2. WHATWG, HTML Living Standard, elemento `input`, attributo `accept`: https://html.spec.whatwg.org/multipage/input.html — `accept` come suggerimento, fotocamera o raccolta di foto con `image/*`.
3. MDN, «HTML attribute: capture»: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/capture — valori `user` ed `environment`, disponibilità limitata.
4. MDN, browser-compat-data, ramo principale: https://github.com/mdn/browser-compat-data — file `html/elements/input.json` (`capture`: Safari iOS 10, Chrome Android 25), `api/MediaDevices.json` (`getUserMedia`: Safari iOS 11, Chrome Android 53), `api/ImageCapture.json` (Chrome 59, Safari 18.4, `grabFrame` Safari 26), `api/CanvasRenderingContext2D.json` (`filter`: Chrome 52, Safari 18 dietro opzione), `api/OffscreenCanvas.json` (Safari 16.4).
5. WebKit, `Source/WebKit/UIProcess/ios/forms/WKFileUploadPanel.mm`, commit `464bc663e6271b897cb7ebf592bef44a1f8d6b42`: https://github.com/WebKit/WebKit/blob/main/Source/WebKit/UIProcess/ios/forms/WKFileUploadPanel.mm — voci del menu, `capture`, JPEG 0,8, selettore di foto e di file.
6. WebKit, `Source/WebKit/UIProcess/ios/WKContentViewInteraction.mm` e `Source/WTF/Scripts/Preferences/UnifiedWebPreferences.yaml`, stesso commit: https://github.com/WebKit/WebKit/blob/main/Source/WTF/Scripts/Preferences/UnifiedWebPreferences.yaml — `PhotoPickerPrefersOriginalImageFormat`, interna, predefinita `false`.
7. Apple Developer, `PHPickerConfigurationAssetRepresentationMode` e `.compatible`: https://developer.apple.com/documentation/photosui/phpickerconfigurationassetrepresentationmode — «usa la rappresentazione più compatibile», da iOS 14.
8. WebKit blog, «WebKit Features in Safari 17.0»: https://webkit.org/blog/14445/webkit-features-in-safari-17-0/ — HEIC in Safari, Safari View Controller e WKWebView.
9. WebKit blog, «Release Notes for Safari Technology Preview 241», 8/4/2026: https://webkit.org/blog/17917/release-notes-for-safari-technology-preview-241/ — HEIC convertite in JPEG nel trascinamento, corretto.
10. Apple Support, «Using HEIF or HEVC media on Apple devices»: https://support.apple.com/en-us/116944 — conversione a JPEG nella condivisione.
11. Apple Support, «How to scan documents on your iPhone or iPad»: https://support.apple.com/en-us/108963 — scansione in Note e File, scatto automatico, angoli, flash e filtri in iOS 26.
12. Apple, Manuale utente di iPhone, «Scan text and documents in Preview on iPhone»: https://support.apple.com/guide/iphone/scan-text-and-documents-iphd81075862/ios — PDF, più pagine, ritaglio, rotazione, colore.
13. Chromium, `ui/android/java/src/org/chromium/ui/base/SelectFileDialog.java`, commit `0ecc1f8e42ab290dc253e6d7ddce16506db58e6e`: https://chromium.googlesource.com/chromium/src/+/main/ui/android/java/src/org/chromium/ui/base/SelectFileDialog.java — `capture`, selettore di foto, scelta di Android con la fotocamera.
14. Guida di Google Drive, «Scan documents with Google Drive» (Android): https://support.google.com/drive/answer/3145835 — scansione, filtri, «Pulisci», più pagine, PDF o JPG nel Drive.
15. OpenCV: file `opencv.js` 4.13.0, https://docs.opencv.org/4.13.0/opencv.js (grandezza e data lette con `curl`); licenza del ramo 4.x, https://github.com/opencv/opencv/blob/4.x/LICENSE; guida alla compilazione, https://github.com/opencv/opencv/blob/4.x/doc/js_tutorials/js_setup/js_setup/js_setup.markdown (file unico, `--disable_single_file`); tag 4.14.0 e 5.0.0 con `git ls-remote`.
16. npm, `@techstark/opencv-js`: https://www.npmjs.com/package/@techstark/opencv-js — 5.0.0-release.1, Apache-2.0.
17. jscanify: repository https://github.com/puffinsoft/jscanify (commit `954863b`, README, 1.800 stelle); pacchetto npm 1.4.3, https://www.npmjs.com/package/jscanify; file `src/jscanify.js`, `src/jscanify-node.js` e `src/opencv.js` letti su https://unpkg.com/jscanify@1.4.3/.
18. scanic: repository https://github.com/marquaye/scanic (commit `dec0cd0`, README, licenza MIT, 79 stelle); pacchetto npm 1.7.1, https://www.npmjs.com/package/scanic; guide https://marquaye.github.io/scanic/guide/corner-editor e https://marquaye.github.io/scanic/guide/ml-detection; codice `dist/scanic.js` e `dist/scanic-mlDetector.js` letto su https://unpkg.com/scanic@1.7.1/.
19. sharp: https://sharp.pixelplumbing.com/install (formati, Node.js 20.9, allocatore); documentazione delle operazioni e dell'uscita nel repository, https://github.com/lovell/sharp/tree/main/docs/src/content/docs (`autoOrient`, `normalise`, `clahe`, `affine`, `heif`, metadati tolti); npm 0.35.5 del 27/9/2026, Apache-2.0.
20. npm: `heic-to` https://www.npmjs.com/package/heic-to (1.6.7, LGPL-3.0); `libheif-js` https://www.npmjs.com/package/libheif-js (1.23.5, LGPL-3.0); `heic2any` https://www.npmjs.com/package/heic2any (0.0.4 del 29/3/2023, MIT).
21. Apple Developer, VisionKit: https://developer.apple.com/documentation/visionkit, https://developer.apple.com/documentation/visionkit/vndocumentcameraviewcontroller, https://developer.apple.com/documentation/visionkit/vndocumentcamerascan — da iOS 13, pagine come immagini, esportazione in PDF, `isSupported`.
22. Apple Developer, Vision: https://developer.apple.com/documentation/vision/vndetectdocumentsegmentationrequest (iOS 15), https://developer.apple.com/documentation/vision/detectdocumentsegmentationrequest (iOS 18), https://developer.apple.com/documentation/vision/recognizedocumentsrequest (iOS 26); VisionKit, https://developer.apple.com/documentation/visionkit/datascannerviewcontroller (iOS 16).
23. Apple, WWDC 2019, sessione 234 «Text Recognition in Vision Framework»: https://developer.apple.com/videos/play/wwdc2019/234/ — fotocamera per documenti, prospettiva, luce, pagine, «sul dispositivo».
24. Google, ML Kit, «Document scanner»: https://developers.google.com/ml-kit/vision/doc-scanner — funzioni, livelli, nessun permesso della fotocamera, flusso sul dispositivo (pagina aggiornata il 30/9/2025).
25. Google, ML Kit, «Document scanner with ML Kit on Android»: https://developers.google.com/ml-kit/vision/doc-scanner/android — API 21, 1,7 GB di RAM, `play-services-mlkit-document-scanner:16.0.0`, JPEG e PDF (aggiornata il 28/10/2026).
26. Google, «ML Kit Terms»: https://developers.google.com/ml-kit/terms — dati elaborati sul dispositivo, metriche a Google, obbligo di informare, divieto di smontare (14/5/2025).
27. Google, ML Kit, «Android data disclosure»: https://developers.google.com/ml-kit/android-data-disclosure — dati raccolti in tutte le funzioni.
28. Registro npm e conteggi settimanali (23–29/10/2026): https://registry.npmjs.org/ e https://api.npmjs.org/downloads/point/last-week/ per `pdf-lib`, `@cantoo/pdf-lib`, `jspdf`, `pdfkit`, `jscanify`, `scanic`, `@techstark/opencv-js`; README di pdf-lib, https://github.com/Hopding/pdf-lib (`embedJpg`, `embedPng`, Node e browser); guida di PDFKit alle immagini, https://github.com/foliojs/pdfkit/blob/master/docs/images.md (JPEG, PNG, orientamento EXIF).
29. W3C, «Understanding Success Criterion 2.5.7: Dragging Movements» (WCAG 2.2): https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html.
30. Registro npm, ricerca per parole («document scanner», «document edge detection», «perspective crop», «document detection wasm», «scanner opencv», `keywords:document-scanner`): https://registry.npmjs.org/-/v1/search; conteggi settimanali 23–29/10/2026: https://api.npmjs.org/downloads/point/last-week/ per `scanic`, `scanic-ml`, `jscanify`, `opencv-document-scanner`, `@jg-stevan/scanner-core`, `@mha/scan-edit-lib`, `document_crop`, `image-js`.
31. GitHub, progetti letti in sola lettura: pncolvr/docscan (README, LICENSE MIT, commit `ee74651`), https://github.com/pncolvr/docscan; brandonmpetty/Doxa (README, LICENSE CC0, commit `f95c0c0`), https://github.com/brandonmpetty/Doxa.
32. scanic: CHANGELOG (1.5.0–1.7.1), https://github.com/marquaye/scanic/blob/main/CHANGELOG.md; elenco delle segnalazioni, https://github.com/marquaye/scanic/issues?q=is%3Aissue; segnalazione 7, https://github.com/marquaye/scanic/issues/7; README, commit `dec0cd0`.
33. scanic-ml 0.2.0: https://www.npmjs.com/package/scanic-ml; scheda del modello, https://unpkg.com/scanic-ml@0.2.0/MODEL_CARD.md; DocCornerNet-CoordClass (LICENSE MIT), https://github.com/mapo80/DocCornerNet-CoordClass.
34. jscanify: elenco delle segnalazioni, https://github.com/puffinsoft/jscanify/issues?q=is%3Aissue; segnalazione 17 «IOS Compatibility», https://github.com/puffinsoft/jscanify/issues/17.
35. opencv-document-scanner 1.2.2: https://www.npmjs.com/package/opencv-document-scanner; README e LICENSE MIT, https://github.com/tony-xlh/opencvjs-document-scanner (commit `4122ab6`).
36. @jg-stevan/scanner-core 0.4.1: https://www.npmjs.com/package/@jg-stevan/scanner-core; README e codice `dist/image-modes.js`, `dist/ocr.js` su https://unpkg.com/@jg-stevan/scanner-core@0.4.1/; repository https://github.com/Jg-Stevan/web-scanner (LICENSE MIT, commit `feba267`).
37. docuSnap: README (licenza «Evaluation / Commercial») e LICENSE (MIT, «Copyright (c) 2023 ColonelParrot»), https://github.com/petermartis/docuSnap (commit `1b43ee6`).
38. Hacker News, interfaccia pubblica: «Show HN: Scan documents and convert them to PDF with just JavaScript» (jscanify, 15/4/2023), https://news.ycombinator.com/item?id=35576827; ricerche su https://hn.algolia.com/api/v1/search.
39. Motore di ricerca, risultati letti come indizi: presentazione di Scanicle, https://www.producthunt.com/p/scanicle/scanicle; scheda di OpenDocScan, https://alternativeto.net/software/opendocscan/about/; guida Dynamsoft a OpenCV.js nel browser, https://dynamsoft.com/codepool/web-document-scanner-with-opencvjs.html.
40. Hugging Face, scheda del DocCornerDataset: https://huggingface.co/datasets/mapo80/DocCornerDataset — licenza «other», fonti e loro licenze.

## Fonti non raggiunte

- **docs.opencv.org**, pagine della guida (per esempio `tutorial_js_setup.html`) e **opencv.org/license**: risposta 403 o pagina di controllo anti-robot. Si sono lette le stesse guide nel repository di OpenCV [15]. La data del passaggio ad Apache 2.0 non è stata letta su una fonte ufficiale.
- **API di GitHub** per rilasci e date dei commit (WebKit, OpenCV, jscanify, scanic): non abilitata in questa sessione. I commit sono letti con `git ls-remote`, le versioni e le date da npm.
- **Accessibilità della fotocamera per documenti** di Apple e dello scanner di ML Kit: nessuna pagina ufficiale trovata che ne parli.
- **Non eseguiti:** prove su iPhone o su Android. La prova nel browser di un computer, con fogli inventati, è nel §10.7.
- **Reddit:** nessuna discussione trovata con il motore di ricerca; il sito risponde 403 dal contenitore (§10.1).
- **Sorgente di OpenDocScan e di Scanicle:** non trovato.
