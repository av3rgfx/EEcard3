# L'importo nel documento caricato

Ricerca del 1 novembre 2026, fatta in sequenza dalla sessione principale (skill `research`), con la data di lettura per ogni fonte e una prova con documenti inventati. Risponde al ticket [18 «Ricerca: trovare l'importo nel documento caricato»](../../.scratch/architettura-percorso-1/issues/18-ricerca-importo-nel-documento.md) e serve al ticket [12 «Documenti, foto e ricevute in PDF»](../../.scratch/architettura-percorso-1/issues/12-documenti-foto-ricevute.md). La proposta da cui nasce è in [PRODUCT.md](../../PRODUCT.md) §12, riga del 1/11/2026 «Controllo dell'importo nel documento caricato».

**Non è una scelta.** Nessun programma installato nel progetto, nessun account, nessun documento a servizi esterni. La prova usa solo documenti generati per l'occasione, con l'autorizzazione dell'utente per il codice delle librerie (1/11/2026).

Legenda: **Fonte** = ciò che dice la fonte o ciò che la prova ha misurato; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Si può fare tutto dentro il telefono**, prima che il file parta: così un documento sbagliato non arriva a nessuno finché la persona non conferma.
- **PDF con il testo dentro** (come quelli scaricati dalla banca): pdf.js legge il testo in circa 0,1–0,2 s; pesa circa 0,5 MB compressi [1].
- **Foto, schermate e PDF fatti di immagini:** tesseract.js con l'italiano riconosce il testo in circa 0,5–2 s; pesa circa 3,2 MB compressi, da scaricare una volta, e solo quando serve [2][3][4].
- **Prova con 15 documenti inventati:** 13 risultati giusti su 15, compresi tutti i documenti sbagliati, il pagamento parziale e quello di due mesi. Non hanno letto l'importo solo due foto in cui il testo, alto pochi pixel, non si legge nemmeno a occhio (§6).
- **La regola** cerca solo gli importi attesi: canone, oneri, canone più oneri. Un intero senza centesimi conta solo se c'è accanto € o EUR, così «650 km» o «posto 730» non ingannano (§5).
- **App:** sull'iPhone il riconoscimento del testo di Vision, da iOS 13, lavora sul dispositivo [5][6]; ML Kit fa lo stesso su Android [7].
- **«Condividi» da un'altra app:** su Android funziona solo con il sito installato sulla schermata Home, con Chrome; su iPhone, con Safari, no: serve l'app, con un'estensione di condivisione [8][9][10][11].

## 1. PDF con il testo dentro: pdf.js

- **Fonte:** `pdfjs-dist` 6.5.438 (1/11/2026), licenza Apache-2.0, di Mozilla, circa 50 milioni di scaricamenti in una settimana [1]. Nel browser servono `pdf.min.mjs` (136 KB compressi) e `pdf.worker.min.mjs` (379 KB compressi), misurati sui file del pacchetto [1].
- **Fonte (prova):** `getTextContent()` restituisce il testo di ogni pagina; sulle contabili inventate in PDF ci vogliono 0,1–0,2 s (§6).
- **Fonte (prova):** un PDF fatto di sola immagine, come una scansione, non ha testo; pdf.js però sa disegnare la pagina su un'immagine, che poi passa al riconoscimento del testo (§2): 1,4 s nella prova.
- **Inferenza.** Sul server si potrebbe usare lo stesso pdf.js in Node, ma allora il file sarebbe già partito. Il posto giusto è il telefono, con il file ancora in mano alla persona.

## 2. Foto e schermate: tesseract.js

- **Fonte:** `tesseract.js` 7.0.0 (15/12/2025, Apache-2.0) chiede `tesseract.js-core` ^7.0.0. Attenzione: sul registro npm la versione indicata come «ultima» del motore è ancora la 6.1.2, che con la 7.0.0 non funziona (errore nella prova) [2][3].
- **Fonte:** per impostazione predefinita tesseract.js scarica il motore e le lingue da CDN di terzi (jsDelivr). Con `workerPath`, `corePath` e `langPath` si serve tutto dal proprio sito [2].
- **Fonte (prova):** con i tre percorsi impostati sul nostro indirizzo, **nessuna richiesta** è partita verso l'esterno. Il motore lascia nel registro un avviso innocuo, «failed to load ./ita.special-words».
- **Fonte (misure sui pacchetti):** cosa si scarica, compresso:
  - API, circa 10 KB, e worker, circa 34 KB [2];
  - motore WebAssembly, circa 1,47 MB [3];
  - modello dell'italiano «best_int», circa 1,66 MB [4].

  In tutto circa 3,2 MB, da scaricare una sola volta e solo quando serve il riconoscimento.
- **Fonte (prova):** avvio del motore 0,3–0,5 s; riconoscimento di una schermata di telefono circa 0,5 s; di una foto da 1500 px circa 1–2 s. Misure su un computer.
- **Inferenza.** Il testo si legge **dopo lo scanner** (ARCHITECTURE.md, «Scanner dei documenti»): foglio raddrizzato e schiarito, quindi più leggibile delle foto della prova, che erano storte e in ombra.
- *Scartato:* Scribe.js, licenza AGPL-3.0 [12].

## 3. App iPhone e Android (dopo)

- **Fonte (Apple):** `VNRecognizeTextRequest` da iOS 13; `RecognizeTextRequest` da iOS 18. Riconoscono il testo in un'immagine; le lingue si possono limitare [5]. Il riconoscimento del testo di Vision «avviene tutto sul dispositivo» (WWDC 2019) [6].
- **Da verificare:** se l'italiano è fra le lingue riconosciute nella versione di iOS scelta, con `supportedRecognitionLanguages`. La pagina Apple letta non dà l'elenco.
- **Fonte (Google):** ML Kit Text Recognition v2 riconosce l'alfabeto latino. Il modello si mette nell'app (circa 4 MB) oppure arriva dai servizi Google Play (circa 260 KB nell'app); API 21 o 23, la pagina si contraddice [7]. Le condizioni di ML Kit sono già lette nella ricerca sullo scanner: immagini sul dispositivo, metriche d'uso a Google ([scanner-documenti.md](scanner-documenti.md), §4).

## 4. «Condividi» da un'altra app

- **Fonte (MDN):** il membro `share_target` del manifesto permette a un sito **installato** di comparire fra le app a cui condividere. È sperimentale: Chrome per Android dalla 76, Chrome sul computer dalla 89, Safari no [8][9].
- **Fonte (Chrome):** i file arrivano con un invio `POST` `multipart/form-data`, che il service worker intercetta. Da lì li passa alla pagina oppure al server [10].
- **Fonte (Apple):** nelle app iPhone l'**estensione di condivisione** fa comparire l'app nel foglio «Condividi» [11]. La guida è nell'archivio di Apple (aggiornata nel 2017); le regole sui tipi accettati (`NSExtensionActivationRule`) sono **Da verificare** sulla documentazione attuale.
- **Inferenza.**
  - Sul web dell'iPhone il caso del collaboratore, il tocco sbagliato mentre si condivide, non può accadere: un file arriva solo scegliendolo dalla pagina. Lì però si può sbagliare file nella stessa maniera, e il controllo serve uguale.
  - Su Android, con il sito installato, il service worker può tenere il file nel telefono finché non è controllato: niente parte prima della conferma.
  - Nell'app iPhone, l'estensione di condivisione fa il controllo prima dell'invio.
- **Aggiunta del 1/11/2026** (ticket [19 «Condividere un file verso Connetto da un'altra app»](../../.scratch/architettura-percorso-1/issues/19-condividere-verso-connetto.md)):
  - **Fonte (StatCounter):** in Italia, a ottobre 2026, il 61,95 % delle visite web da telefono viene da Android e il 38,04 % da iPhone [14]. Sono visite, non persone, e non i clienti di ƎE: il dato di ƎE manca.
  - **Da verificare (solo guide di terzi):** su iPhone un documento ricevuto su WhatsApp si salva toccandolo, poi «Condividi» e «Salva in File»; finisce in iCloud Drive o «Sul mio iPhone», e dalla pagina si ritrova con «Scegli file» [15][16]. Le pagine ufficiali di Apple e WhatsApp non sono state raggiunte; va provato su un iPhone vero.

## 5. Trovare la cifra

La regola scritta per la prova (`importo.js`, con un controllo di 11 casi) [13]:

- **Normalizza** le confusioni tipiche del riconoscimento dentro i numeri (O al posto di 0, l o I al posto di 1) e gli spazi spuri prima dei centesimi.
- **Conta come importo** un numero con i centesimi («730,00», «730.00», «1.460,00»), oppure un intero accanto a «€» o «EUR» («€ 730», «730 EUR»).
- **Confronta** con gli importi attesi del mese: canone, oneri e la loro somma. Le commissioni («EUR 1,00») e gli altri numeri non contano.
- **Inferenza.**
  - Un pagamento **parziale** o di **più mesi** oggi fa partire l'avviso, anche se il documento è quello giusto: va deciso se tra gli importi attesi entrano gli arretrati, i multipli o il «da pagare» del momento.
  - Una cifra uguale per caso in un documento sbagliato non si può escludere. Il controllo riduce gli errori, non li elimina; per questo resta un avviso e non un blocco, come propone il collaboratore.

## 6. Prova con documenti inventati

Autorizzata dall'utente il 1/11/2026. Script e numeri in [.scratch/architettura-percorso-1/prove/importo/](../../.scratch/architettura-percorso-1/prove/importo/README.md).

**Metodo**
- Importi attesi: canone 650,00 €, oneri 80,00 €, totale 730,00 €.
- Documenti generati con Chromium:
  - una contabile di una «Banca di Prova» e una ricevuta di un'«app di prova», con nomi, IBAN e numeri inventati;
  - una bolletta, un referto e un biglietto del treno inventati, come documenti sbagliati.
- Librerie scaricate dal registro npm in una cartella temporanea, fuori dal progetto, senza `npm install`.
- Chromium 153 senza schermo, su un computer; ogni richiesta non locale bloccata e registrata: **nessuna**.

| Documento | Come si legge | Tempo | Importi letti | Esito |
| --- | --- | --- | --- | --- |
| Contabile in PDF, «EUR 730,00» | testo del PDF | 0,13 s | 730,00; 1,00 | giusto: totale |
| Ricevuta dell'app in PDF, «650,00 €» | testo del PDF | 0,15 s | 650,00; 0,00 | giusto: canone |
| Contabile in PDF, «€ 730.00» | testo del PDF | 0,15 s | 730,00; 1,00 | giusto: totale |
| Contabile scansionata (PDF di sola immagine) | pagina disegnata + riconoscimento | 1,4 s | 730,00; 1,00 | giusto: totale |
| Schermata dell'app (PNG, 390 px a doppia densità) | riconoscimento | 0,5 s | 650,00; 0,00 | giusto: canone |
| Foto della contabile (1500 px, storta di 2,5°, ombra) | riconoscimento | 2,1 s | 730,00; 1,00 | giusto: totale |
| Foto più difficile (900 px, 4°, ombra forte) | riconoscimento | 1,0 s | 730,00; 1,00 | giusto: totale |
| Foto pessima (700 px, 8°, ombra fortissima, sfocata) | riconoscimento, due giri | 2,0 s | nessuno | **avviso sbagliato** |
| Foto da lontano (450 px) | riconoscimento, due giri | 2,2 s | nessuno | **avviso sbagliato** |
| Referto fotografato (sbagliato) | riconoscimento | 1,8 s | 36,15 | giusto: avviso |
| Bolletta in PDF (sbagliata, «650 kWh», «65,00 €») | testo del PDF | 0,12 s | 48,20; 9,30; 65,00 | giusto: avviso |
| Referto come immagine (sbagliato) | riconoscimento | 1,0 s | nessuno | giusto: avviso |
| Biglietto del treno in PDF («650 km», «posto 730», «73,50 €») | testo del PDF | 0,17 s | 73,50 | giusto: avviso |
| Contabile di 300,00 € (parziale) | testo del PDF | 0,13 s | 300,00; 1,00 | avviso (§5) |
| Contabile di 1.460,00 € (due mesi) | testo del PDF | 0,15 s | 1.460,00; 1,00 | avviso (§5) |

- **Fonte (prova):** tutti i PDF con il testo, la scansione, la schermata e le due foto leggibili danno l'importo giusto. Tutti i documenti sbagliati fanno partire l'avviso, compresi quelli con «650» o «730» fuori da un importo.
- **Fonte (prova):** le due foto fallite hanno un testo alto pochi pixel, non leggibile nemmeno a occhio. Un secondo giro, con la foto ingrandita e schiarita, non le recupera.
- **Inferenza.**
  - Conviene distinguere due avvisi: «non troviamo l'importo» quando il testo si legge, e «la foto non si legge bene, rifalla» quando il testo non si legge. Il motore restituisce anche un indice di fiducia, da provare per questo.
  - Lo scanner prima del riconoscimento (foglio raddrizzato e schiarito) dovrebbe ridurre i casi illeggibili: da provare insieme, su foto vere.
- **Limiti:** documenti sintetici, puliti e con caratteri chiari; un solo modello di contabile; un computer, non un telefono. Le contabili vere delle banche italiane hanno impaginazioni diverse, da provare con documenti veri **solo** con il consenso di chi li fornisce, oppure con contabili inventate più varie.

## 7. Parere dell'agente

*Parere, non decisione.*

1. **Dove:** nel telefono, prima dell'invio. Il PDF con il testo si legge con pdf.js; il resto con tesseract.js e l'italiano, scaricati dal nostro sito solo quando servono. Nell'app iPhone, Vision.
2. **Cosa cercare:** canone, oneri e la loro somma del mese. Pagamento parziale, arretrati e più mesi sono da decidere nel ticket 12.
3. **Due avvisi:** «Non troviamo l'importo dell'affitto» se il testo si legge; «La foto non si legge bene» se il testo non si legge. In tutti e due i casi resta «Carica comunque», come propone il collaboratore.
4. **Dove vale:** per i documenti che caricano inquilino e proprietario come prova di un pagamento (la contabile del bonifico al proprietario). Non per i documenti del fascicolo, dove non c'è un importo atteso.
5. **Nel pilota o dopo:** costa poco per i PDF (0,5 MB). Per le foto aggiunge 3,2 MB e 1–2 s, da misurare su iPhone; si può partire dai soli PDF e aggiungere le foto dopo la prova sul telefono.

## 8. Dove serve un parere professionale

- **Privacy:** leggere il testo di un documento nel telefono, senza conservarlo e senza inviarlo, è il trattamento più leggero. Va comunque detto nell'informativa che il servizio controlla il documento prima dell'invio: domanda per il parere privacy già previsto (PRODUCT.md §10.10). Questa ricerca non dà un parere legale.

## 9. Cosa resta all'utente

Domande per il ticket [Documenti, foto e ricevute in PDF](../../.scratch/architettura-percorso-1/issues/12-documenti-foto-ricevute.md):

1. **Su quali caricamenti** vale il controllo: solo la contabile del bonifico, o anche altri?
2. **Quali importi** bastano per non avvisare: canone, oneri, la loro somma; e un pagamento parziale, gli arretrati, più mesi?
3. **Due avvisi o uno:** «non troviamo l'importo» e «la foto non si legge bene», oppure uno solo?
4. **Nel pilota:** PDF e foto insieme, oppure prima i soli PDF?
5. **Testo** dei messaggi, senza genere: nel design, con chi vede davvero il documento.

## Fonti

Tutte lette il 1/11/2026.

1. npm, `pdfjs-dist` 6.5.438 (Apache-2.0), https://www.npmjs.com/package/pdfjs-dist; file `build/pdf.min.mjs` e `build/pdf.worker.min.mjs` del pacchetto (grandezze misurate); repository https://github.com/mozilla/pdf.js (commit `6a12ce7`).
2. tesseract.js: npm 7.0.0 (Apache-2.0, dipendenze), https://www.npmjs.com/package/tesseract.js; README e guida «Local Installation», https://github.com/naptha/tesseract.js/blob/master/docs/local-installation.md (CDN predefiniti, `workerPath`, `corePath`, `langPath`); commit `a1ca80d`.
3. npm, `tesseract.js-core` 7.0.0 del 15/12/2025 (Apache-2.0) e 6.1.2 («latest»), https://www.npmjs.com/package/tesseract.js-core; grandezze misurate sui file del pacchetto.
4. npm, `@tesseract.js-data/ita` 1.0.0 (MIT), https://www.npmjs.com/package/@tesseract.js-data/ita; file `4.0.0_best_int/ita.traineddata.gz`.
5. Apple Developer, `VNRecognizeTextRequest` (iOS 13), https://developer.apple.com/documentation/vision/vnrecognizetextrequest; `RecognizeTextRequest` (iOS 18), https://developer.apple.com/documentation/vision/recognizetextrequest (lette dall'interfaccia JSON della documentazione).
6. Apple, WWDC 2019, sessione 234 «Text Recognition in Vision Framework», https://developer.apple.com/videos/play/wwdc2019/234/ (già in [scanner-documenti.md](scanner-documenti.md), fonte 23).
7. Google, ML Kit, «Text recognition v2» e «Recognize text in images with ML Kit on Android», https://developers.google.com/ml-kit/vision/text-recognition/v2 e https://developers.google.com/ml-kit/vision/text-recognition/v2/android (aggiornata il 28/10/2026).
8. MDN, «share_target», https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/share_target (sorgente in https://github.com/mdn/content).
9. MDN browser-compat-data, `manifests/webapp/share_target.json`, https://github.com/mdn/browser-compat-data — Chrome 89, Chrome Android 76, Safari no.
10. Chrome for Developers, «Receiving shared data with the Web Share Target API», https://developer.chrome.com/docs/capabilities/web-apis/web-share-target (aggiornata l'8/11/2019).
11. Apple, App Extension Programming Guide, «Share», https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/Share.html (archivio, 2017).
12. npm, `scribe.js-ocr` 0.17.0 (AGPL-3.0), https://www.npmjs.com/package/scribe.js-ocr.
13. Prova di questa ricerca: [.scratch/architettura-percorso-1/prove/importo/](../../.scratch/architettura-percorso-1/prove/importo/README.md).
14. StatCounter Global Stats, «Mobile Operating System Market Share Italy», https://gs.statcounter.com/os-market-share/mobile/italy (ottobre 2026).
15. Guiding Tech, «Where are WhatsApp documents or images stored», https://www.guidingtech.com/where-are-whatsapp-documents-or-images-stored/ (fonte secondaria).
16. iPhone Life, «How to save items to the Files app», https://cdn.iphonelife.com/content/how-to-save-items-to-files-app-iphone (fonte secondaria).

## Fonti non raggiunte

- Le pagine della documentazione Apple si leggono solo dall'interfaccia JSON; l'elenco delle lingue di Vision non c'è.
- La pagina attuale di Apple sulle estensioni di condivisione non è stata trovata; letta la guida d'archivio.
- Le guide ufficiali di Apple (app File, «Recenti») e di WhatsApp (salvare un documento su iPhone) non sono uscite dalle ricerche del 1/11/2026; usate solo fonti secondarie [15][16].
- **Non eseguiti:** prove su iPhone e Android; prove con contabili vere.
