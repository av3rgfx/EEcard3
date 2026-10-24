# Vista 3D indicativa: dalla planimetria catastale a una casa da guardare

Ricerca del 24 ottobre 2026, svolta da un agente in background (skill research) su fonti primarie, con la data di lettura per ogni fonte. Risponde al ticket [14 «Ricerca: dalla planimetria catastale alla vista 3D indicativa»](../../.scratch/controllo-a/issues/14-ricerca-vista-3d.md) e prepara la [prova del ticket 15](../../.scratch/controllo-a/issues/15-prova-vista-3d.md).

**Decisione di riferimento** ([PRODUCT.md](../../PRODUCT.md) §12, 23/10/2026, «Vista 3D indicativa»): prova a condizione; la vista si mostra solo quando la planimetria si legge abbastanza, con la scritta «indicativa, non è una misura» (§9); la vedono proprietario e operatore; planimetrie vere solo con l'autorizzazione dell'utente. Se la planimetria esce da ƎE serve un contratto sui dati (§12, 20/10/2026).

**Controllo a campione** della sessione principale (24/10/2026), sulle fonti originali: comunicato dell'Agenzia del 12/7/2023 (delega agli agenti iscritti al REA, 30 giorni, conservazione 5 anni), scheda «Che cos'è» (scala 1:200, gratuita per titolari e delegati, aggiornata l'8/1/2026), licenza CC BY-NC 4.0 di CubiCasa5K e privacy di Planner 5D del 14/11/2024 (contenuti anonimizzati usati per addestrare i suoi algoritmi). Tutti confermati.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **La planimetria catastale è un disegno, non un rilievo.** Di norma in scala 1:200, deve riportare scala, altezza dei locali (arrotondata ai 5 cm), freccia del nord, piano, destinazione di cucina e accessori e spessore dei muri; non deve riportare arredi né quote (**Fonte**: regolamento del 1949, art. 57; linee guida Docfa dell'Agenzia). Serve a identificare l'unità e a calcolarne la consistenza ai fini fiscali.
- **Si ottiene gratis, anche da ƎE.** Gli intestatari la scaricano in PDF dall'area riservata; dal 12/7/2023 possono delegare online un agente immobiliare iscritto al REA, che la scarica con il servizio «Consulta Planimetrie». Si pagano solo le copie cartacee conformi (**Fonte**: Agenzia delle Entrate).
- **Quante sono disegnate a mano non si sa.** Nessuna fonte ufficiale letta separa le planimetrie scansionate da quelle Docfa. Al 31/12/2018, su 62,2 milioni di unità ordinarie, circa 2 milioni (3,2%) non avevano la planimetria nel sistema informatizzato e alcune planimetrie dei primi anni non permettono di calcolare la superficie (**Fonte**: audizione del Direttore dell'Agenzia). Prima del 1994 si disegnava a inchiostro su carta millimetrata; Docfa nasce dal DM 701/1994 e accetta file raster o vettoriali dal 2002 (**Fonte**).
- **I modelli pubblicati funzionano sulle piante su cui sono addestrati.** CubiCasa5K (5.000 piante quasi tutte finlandesi) e R2V (piante giapponesi, ipotesi di muri solo orizzontali e verticali) riportano buoni risultati sul proprio test. Sulle piante di un'altra regione serve un riaddestramento con esempi annotati di quella regione (**Fonte**: MitUNet, 2025). **Nessuno studio trovato sulle planimetrie catastali italiane.**
- **I modelli generalisti non leggono ancora bene i disegni.** Nel conteggio di porte e finestre su 120 planimetrie l'accuratezza dei modelli multimodali sta spesso fra 0,40 e 0,55 (**Fonte**: AECV-Bench, 2026).
- **I servizi esistenti escludono proprio le piante più simili alle catastali vecchie.** Planner 5D sconsiglia gli schizzi a mano, RoomSketcher limita la conversione automatica alle piante fatte al computer, Archilogic accetta le scansioni ma non gli schizzi poco puliti. Planner 5D usa i contenuti anonimizzati per addestrare i propri algoritmi; RoomSketcher conserva i dati in Norvegia, Stati Uniti o altri paesi; Archilogic converte con persone, a 329 dollari a pianta nel piano gratuito (**Fonte**: pagine dei fornitori).
- **La strada più semplice e sicura per la prova è il ricalco** da parte dell'operatore, con l'estrusione dei muri all'altezza scritta sulla planimetria. Il riconoscimento automatico resta un esperimento separato (**Inferenza**).
- **Il controllo di qualità più solido è la coerenza con i dati catastali**: superficie ricostruita rispetto alla superficie in visura (dal 9/11/2015), stanze chiuse, muri connessi, scala leggibile. La sola confidenza dei modelli non basta: le reti moderne sono spesso troppo sicure di sé (**Fonte**: Guo et al., 2017; **Inferenza**).

## 1. La planimetria catastale

### 1.1 Come si ottiene

| Canale | Chi | Costo | Formato | Fonte |
| --- | --- | --- | --- | --- |
| Area riservata, «Visure, planimetrie e ispezioni ipotecarie dei propri immobili» | Titolari di diritti reali risultanti in catasto, con SPID, CIE, CNS o Fisconline | Gratis, «in esenzione da tributi» | PDF, stampa A4 o A3; resta scaricabile 10 giorni | **Fonte**: Agenzia, schede e assistenza |
| «Consulta Planimetrie» con delega online | Agente immobiliare iscritto al REA, delegato dall'intestatario; delega valida 30 giorni dalla firma, da conservare 5 anni | Non indicato nel comunicato; la scheda dice gratuita per titolari e delegati | Email al delegante e al delegato quando il documento è pronto | **Fonte**: comunicato del 12/7/2023; scheda «Che cos'è» |
| Sister | Professionisti e pubblici ufficiali abilitati, indicando l'intestatario | — | — | **Fonte**: Agenzia, scheda online per cittadini e imprese |
| Sportello (Ufficio provinciale - Territorio, sportelli decentrati) | Titolari o delegati | Gratis; le copie cartacee conformi pagano tasse ipotecarie e catastali e bollo | — | **Fonte**: Agenzia, schede |

- **Riservatezza** (**Fonte**: Agenzia). Visure e mappe sono pubbliche; le planimetrie no: le vedono solo chi ha diritti sull'immobile, i delegati e chi è legittimato. Non sono online le categorie B/3, D/5, E/5 e i siti sensibili per la sicurezza dello Stato. Il servizio non rilascia la planimetria se il richiedente non è intestatario o se il suo codice fiscale non è validato; gli eredi passano da un professionista. Trento e Bolzano hanno un catasto proprio.
- **Planimetrie solo cartacee** (**Fonte**: Agenzia). Se la planimetria è stata presentata ma non informatizzata, se ne chiede l'inserimento con un'istanza. Per stati superati o unità soppresse si chiede una copia conforme con richiesta motivata, in differita, pagando tributo speciale e bollo. Gli importi dei tributi non sono stati letti su fonte ufficiale (**Da verificare**).
- **Inferenza.** ƎE, se iscritta al REA, può ottenere da sé la copia aggiornata con la delega del proprietario, senza tributi. La decisione del 19/10/2026 la tratta come pratica a pagamento per il cliente: è una scelta di prezzo di ƎE, non un costo del catasto.

### 1.2 Cosa contiene

**Regolamento del 1949** (DPR 1142/1949, art. 57, testo consolidato al 5/1/2024; **Fonte**)
- Disegno a inchiostro in scala 1:200 su carta millimetrata stampata dallo Stato; tollerate 1:100 e 1:50; «regole correnti dei disegni edili».
- Indicazioni: numero della scheda, Comune, via e civico, ditta proprietaria, **altezza media di ciascun vano**, destinazione dei locali accessori, piano, confini.
- Firmata da ingegnere, architetto, perito edile o geometra; per i fabbricati esistenti al 13/4/1939 bastava la firma dell'obbligato.
- Una modifica del 2024 al regolamento è segnalata da una banca dati professionale: **Da verificare** se tocca l'art. 57.

**Linee guida Docfa** (Agenzia, Direzione regionale della Toscana, versione 1.2020; **Fonte**)
- Scala 1:200, oppure 1:100 o 1:50 per unità piccole, 1:500 per ville e unità speciali; una sola scala per scheda.
- A pena di mancata accettazione: scala; altezza dei locali in metri arrotondata ai 5 cm (o al centimetro); per vani ad altezza variabile minima e massima, con la parte sotto 1,50 m tratteggiata; freccia del nord fuori dal disegno, di preferenza in basso a destra; piano; accessi con tratto sottile; destinazione di cucina («cucina» o «K») e accessori («bagno», «w.c.», «ripostiglio», «cantina»…); **spessore di tutti i muri**.
- I muri in comune di spessore ignoto si possono stimare.
- Non devono comparire retinature, arredi, nomi dei confinanti, campiture di muri e pilastri; nell'elaborato planimetrico (la pianta dell'intero fabbricato) niente quote.
- Porte e finestre non sono citate espressamente nei testi letti: rientrano nelle «regole correnti dei disegni edili» (**Inferenza**; **Da verificare** con un geometra).

**Superficie e vani** (**Fonte**)
- La superficie catastale (DPR 138/1998, allegato C) conta per intero muri interni e perimetrali fino a 50 cm, i muri in comune al 50% fino a 25 cm, esclude le parti sotto 1,50 m di altezza e si arrotonda al metro quadrato.
- La visura riporta la superficie totale e quella senza aree scoperte dal 9/11/2015 (guida dell'Agenzia, ottobre 2022).
- La consistenza delle abitazioni si misura in **vani catastali**: la cucina vale un vano; gli accessori valgono un terzo o un quarto di vano, salvo usi locali; vani grandi possono valere più di uno; arrotondamento al mezzo vano (DPR 1142/1949, artt. 45–52). Il numero di vani in visura non è il numero di stanze (**Inferenza**).

### 1.3 Vecchie e disegnate a mano, oppure Docfa

| Periodo | Come nasce la planimetria | Fonte |
| --- | --- | --- |
| Dal 1939 (primo impianto del catasto urbano) | A inchiostro su carta millimetrata, 1:200 | **Fonte**: DPR 1142/1949, art. 57 |
| Dal 1994 | Procedure automatizzate di aggiornamento (DM 701/1994, Docfa) | **Fonte**: linee guida Docfa, elenco normativo |
| Dal 29/12/2000 e dal 2002 | Circolare 242/T e Docfa 3.0 (circolare 9/2001, operativa dal 1/1/2002): planimetria come immagine raster o vettoriale | **Fonte**: linee guida Docfa; testo della circolare letto in copia non ufficiale |
| Specifiche Docfa per le immagini | Raster a 200 DPI «tassativi», bianco e nero al tratto, A4 o A3, riquadro fisso; vettoriali DXF, DWG, DGN e altri, 1 unità = 1 metro | **Fonte**: circolare 9/2001, allegato tecnico 2, letto su una riproduzione di un produttore di software (**Da verificare** sul testo ufficiale) |

- **Numeri** (**Fonte**: audizione del Direttore dell'Agenzia, 20/3/2019). Superficie in visura per circa 57 milioni di unità con planimetria. Al 31/12/2018, su circa 62,2 milioni di unità dei gruppi A, B e C, a circa 2,7 milioni mancava la superficie e a circa 2 milioni (3,2%) mancava la planimetria nel sistema informatizzato. Alcune planimetrie dei primi anni non permettono il calcolo della superficie.
- **Cosa manca.** Nessuna fonte ufficiale letta dice quante planimetrie in banca dati siano scansioni di disegni a mano e quante file Docfa. Non risulta nemmeno se il PDF rilasciato conservi il disegno vettoriale o sia sempre un'immagine (**Da verificare**).
- **Inferenza.** Un'abitazione non modificata dal primo impianto ha con buona probabilità una scansione di un disegno a mano. Ogni compravendita dal 2010 richiede la conformità della planimetria allo stato di fatto (sezione 5) e spinge verso planimetrie Docfa più recenti. Le case in affitto del pilota possono avere planimetrie di ogni epoca.

### 1.4 Una copia nuova può essere migliore?

- **Inferenza.** Il catasto conserva un'immagine sola per planimetria: una copia nuova non migliora un disegno nato male. Migliora quasi sempre rispetto a una fotocopia, un fax o una foto nel fascicolo di ƎE, perché è la prima generazione digitale. Per le planimetrie Docfa recenti la differenza può essere grande.
- **Inferenza.** Con una planimetria non aggiornata la copia nuova non serve: serve un nuovo Docfa del tecnico, che è un'altra pratica.

## 2. Riconoscere muri, aperture e stanze

### 2.1 Dataset e risultati pubblicati

| Lavoro | Piante | Risultato riportato | Licenza | Fonte |
| --- | --- | --- | --- | --- |
| **Raster-to-Vector** (Liu, Wu, Kohli, Furukawa; ICCV 2017) | 870 piante annotate dal dataset LIFULL HOME'S (giapponese, 5 milioni di immagini); prova su 100.000 non annotate | Circa 90% di precisione e richiamo; muri solo orizzontali e verticali; genera un modello 3D «a comparsa» | Codice MIT; le immagini LIFULL non sono ridistribuite | **Fonte**: articolo e repository |
| **Deep Floor Plan** (Zeng, Li, Yu, Fu; ICCV 2019) | R2V (815 immagini) e R3D (232, forme irregolari e muri di spessore variabile) | Accuratezza muri 0,98 su R3D e 0,89 su R2V; mIoU 0,63 su R3D e 0,74 su R2V | Codice GPL-3.0 | **Fonte**: articolo e repository |
| **CubiCasa5K** (Kalervo et al., 2019) | 5.000 piante su 15.000 «per lo più finlandesi», da scansioni di materiale immobiliare; annotazioni SVG a mano, 5–120 minuti per pianta | Sul test: stanze mIoU 57,5% (49,3% dopo la trasformazione in poligoni), oggetti 55,7% (41,6%) | **CC BY-NC 4.0**, uso non commerciale; pesi addestrati scaricabili | **Fonte**: articolo e repository |
| **MitUNet** (Parashchuk et al., 2025–2026) | Preaddestramento su CubiCasa5K, poi 500 piante di annunci di Russia e paesi CSI | Solo muri: dopo il riaddestramento mIoU circa 88%, precisione circa 95% | Codice MIT; dataset CC BY 4.0 | **Fonte**: articolo, repository, Zenodo |
| **ResPlan** (2025–2026) | 17.000 piante vettoriali con grafo delle stanze | Utile per generazione e analisi, non per leggere immagini | Licenza del dataset non letta (**Da verificare**) | **Fonte**: arXiv |
| **RPLAN** (Wu et al., 2019) | Oltre 80.000 piante raster | Dataset per generare piante | Pagina degli autori non raggiungibile (**Da verificare**) | **Fonte** indiretta: ResPlan |
| **AECV-Bench** (2026) | 120 planimetrie, modelli multimodali generalisti | Conteggio di porte e finestre spesso fra 0,40 e 0,55; testo e OCR fino a 0,95 | — | **Fonte**: arXiv |

**Inferenza.** Le metriche non sono confrontabili fra loro (accuratezza per pixel, IoU, precisione sulle giunzioni). Nessuna dice quante piante escono senza errori visibili in 3D, che è la domanda della prova. Il passaggio a poligoni chiusi fa perdere 8–14 punti in CubiCasa5K: se manca una giunzione la stanza non si chiude (**Fonte**: Kalervo et al.).

### 2.2 Quanto reggono su piante diverse

- **Fonte (MitUNet).** Le piante della regione CSI distinguono i materiali con campiture e tratteggi e hanno muri obliqui o curvi; i modelli addestrati su dataset occidentali scambiano le campiture per rumore. Il risultato buono arriva solo con il riaddestramento su esempi annotati della regione.
- **Fonte (Raster-to-Vector).** Per l'ipotesi di muri orizzontali e verticali il metodo non vede i muri obliqui e a volte inventa un muro.
- **Fonte (FGSSNet, 2025).** Gli autori dichiarano come obiettivo la generalizzazione a piante reali; l'abstract non dà numeri.
- **Fonte (fornitori).** Planner 5D chiede viste dall'alto ad alto contrasto, senza schizzi a mano; RoomSketcher limita la conversione automatica alle piante fatte al computer; Archilogic rifiuta gli schizzi poco puliti e le piante senza scala.
- **Piante italiane e catastali.** Nessuno studio trovato. L'unico lavoro italiano trovato con visione artificiale sul catasto riguarda le **mappe** (i fogli di mappa), non le planimetrie (CSI Piemonte, FOSS4G-IT 2020).
- **Inferenza.** La planimetria catastale differisce dalle piante dei dataset: scala 1:200 (muri sottili in pochi pixel), carta millimetrata nelle vecchie, scritte a mano, timbri e intestazioni, nessun arredo, bianco e nero a 200 DPI. Ci si deve aspettare un calo marcato senza un riaddestramento su planimetrie catastali annotate, che oggi non esistono pubbliche e non si possono creare senza planimetrie vere.

### 2.3 Cosa si può fare senza servizi esterni

| Strada | Come | Pro | Contro |
| --- | --- | --- | --- |
| **Ricalco dell'operatore** | L'operatore traccia muri, porte e finestre sopra l'immagine, fissa la scala su una misura nota e legge l'altezza scritta | Nessun dato esce da ƎE; funziona anche sulle piante a mano; l'operatore vede subito se la pianta non si legge | Tempo dell'operatore da misurare; le 1–1,5 ore al giorno del pilota sono già occupate |
| **Visione artificiale classica** | Binarizzazione, pulizia, ricerca di linee e regioni chiuse | Nessun modello da addestrare né licenza di dati | Fragile con carta millimetrata, scritte e scansioni rumorose |
| **Modelli di ricerca in locale** | Per esempio Deep Floor Plan (GPL-3.0) o MitUNet (MIT) | Gira su un computer di ƎE o della piattaforma | Pesi addestrati su dati con licenze non commerciali o non chiare; nessuna prova sulle catastali |
| **Misto** | Il modello propone, l'operatore corregge e conferma | Meno tempo dell'operatore se il modello è buono | Va costruito; utile solo se il modello regge |

- **Fonte.** Il ricalco su un'immagine di sfondo è una funzione comune: RoomSketcher la offre come «import a blueprint to trace over».
- **Fonte.** I pesi di CubiCasa5K sono distribuiti con il dataset sotto CC BY-NC 4.0. MitUNet è preaddestrato su CubiCasa5K.
- **Inferenza.** Se pesi derivati da un dataset non commerciale si possano usare in un prodotto di ƎE, anche per una prova, è una domanda legale (sezione «Pareri da chiedere»).

### 2.4 Dalla pianta vettoriale al 3D

- **Fonte (three.js, licenza MIT).** `ExtrudeGeometry` «crea una geometria estrusa da una forma»: un poligono 2D diventa un solido con la profondità indicata. È un fatto, non una scelta di stack.
- **Inferenza.** Il passaggio è semplice: ogni muro è un poligono con il suo spessore, estruso all'altezza del locale; porte e finestre sono tagli con altezze convenzionali; il pavimento è il contorno delle stanze. L'altezza c'è nella planimetria (obbligatoria in Docfa, «altezza media» nel 1949), ma va letta da una scritta. Senza altezza leggibile serve un valore convenzionale dichiarato. La parte difficile non è il 3D: è ottenere una pianta vettoriale corretta.

## 3. Servizi che convertono piante in 3D

| Servizio | Cosa fa | Persone o automatico | Prezzo pubblicato | Dati | Fonte |
| --- | --- | --- | --- | --- | --- |
| **Planner 5D** (UAB Planner5D, Vilnius) | Carica una pianta (18 formati, PDF e DWG compresi) e ne ricava un progetto 2D/3D | Automatico; da 10 minuti a 24 ore; riconosce solo arredi di base | Solo piani a pagamento: Premium 19,99 $/mese o 59,99 $/anno; Professional 49,99 $/mese o 399,99 $/anno | Titolare per gli utenti; **responsabile con DPA** (dal 14/11/2024) per uso aziendale, clausole tipo UE 2021/914. **I contenuti, anonimizzati, possono servire ad addestrare i suoi algoritmi.** Trasferimenti fuori dallo SEE con adeguatezza o clausole tipo; paesi non elencati | **Fonte**: aiuto, prezzi, privacy e DPA |
| **RoomSketcher** (RoomSketcher AS, Norvegia) | «AI Convert»: carica una pianta fatta al computer (JPG, PNG, PDF) e ne ricava muri, porte e finestre; «Order Floor Plans»: ridisegno da progetti e schizzi; ricalco manuale | AI Convert automatico; ridisegno da «illustratori esperti» entro il giorno lavorativo successivo | AI Convert 20 $ a piano; ridisegno 38 $ a piano (da 18 $ con abbonamento); Pro 24 $/mese o 144 $/anno; Team 70 $/mese o 420 $/anno | Dati conservati e trattati «in Norvegia, negli Stati Uniti o in qualsiasi altro paese» dove ha strutture; licenza ampia e irrevocabile sui contenuti caricati, limitata al servizio. **Nessun DPA trovato** | **Fonte**: prezzi, scheda prodotti, privacy (26/11/2025), condizioni (5/8/2026) |
| **Archilogic** (Archilogic AG, Zurigo) | Conversione di piante (JPG, PNG, PDF, DWG, DXF) in modelli per la gestione degli spazi aziendali | Con persone («white-glove»); consegna entro due giorni lavorativi secondo la pagina degli ordini, letta solo nell'estratto del motore di ricerca | Starter gratuito fino a 5 piante più 329 $ a conversione; Plus 24,90 $ a pianta al mese, pacchetti annuali da 10 | Privacy del 21/9/2023: contenuti usati per migliorare i servizi; trasferimenti con adeguatezza o clausole tipo; **DPA non menzionato**; hosting negli USA citato per Enterprise | **Fonte**: requisiti, prezzi, privacy |
| **Floorplanner** | Editor per disegnare piante 2D/3D; nessuna conversione da immagine trovata; elenco di partner terzi che ridisegnano | Partner indipendenti (Paesi Bassi, Italia e altri) | Crediti da 8,15 $ per 5; partner con prezzi propri | Rapporto diretto con ogni partner, condizioni non descritte | **Fonte**: prezzi e partner |
| **CubiCasa** | Scansione della casa con il telefono; in origine conversione in parte manuale di piante esistenti | — | — | — | Sito non raggiungibile (errore 403); **Fonte** solo l'articolo del 2019 |
| **Kaedim** | Modelli 3D di oggetti da immagini e schizzi; non converte piante | Non dichiarato | Su richiesta | — | **Fonte**: sito |

**Inferenza**
- Nessun servizio letto è pensato per le planimetrie catastali italiane; due escludono gli schizzi a mano.
- Con la decisione del 20/10/2026 (contratto sui dati, nessun uso proprio) Planner 5D andrebbe bene solo se il contratto escludesse l'addestramento: la sua privacy lo prevede. RoomSketcher e Archilogic non pubblicano un DPA: andrebbe chiesto, il che significa contattarli (non fatto, come da regole).
- I trasferimenti fuori dall'UE e il contratto dell'art. 28 sono già trattati in [privacy-dati.md](privacy-dati.md), sezioni 5 e 8.
- Una planimetria nel fascicolo è legata a un proprietario identificato e a un indirizzo: con buona probabilità è un dato personale (GDPR, art. 4) (**Da verificare** con il DPO).

## 4. Qualità: quando la pianta non si legge abbastanza

### 4.1 Segnali prima del riconoscimento

| Segnale | Perché conta | Base |
| --- | --- | --- |
| **Risoluzione rispetto alla scala** | A 200 DPI un pixel è 0,127 mm su carta, cioè circa 2,5 cm reali a 1:200; un tramezzo di 8–10 cm è 3–4 pixel. Una copia a 72 DPI lo riduce a 1–1,5 pixel | **Inferenza** (calcolo dell'agente) sulle specifiche Docfa |
| **Contrasto e sfondo** | Planner 5D chiede muri scuri su fondo chiaro; le vecchie planimetrie sono su carta millimetrata | **Fonte**: Planner 5D; DPR 1142/1949 |
| **Scala leggibile** | Senza scala Archilogic non garantisce il modello e rifiuta l'ordine | **Fonte**: Archilogic |
| **Foto invece di scansione** | Pieghe e prospettiva sono escluse da Archilogic e Planner 5D | **Fonte** |
| **Una sola unità e un solo piano per immagine** | Richiesto da Planner 5D e Archilogic; la scheda catastale può avere più piani | **Fonte**; **Inferenza** |

### 4.2 Segnali dopo il riconoscimento o il ricalco

- **Coerenza geometrica** (**Fonte**: Raster-to-Vector). Il metodo impone vincoli: stanze come anelli chiusi di muri, nessuna apertura senza muro. Gli stessi vincoli servono da controllo: stanze aperte o muri scollegati indicano una pianta letta male (**Inferenza**).
- **Superficie** (**Inferenza**). Si calcola la superficie ricostruita con le regole del DPR 138/1998 e la si confronta con quella della visura. Uno scarto grande indica scala sbagliata, pezzi mancanti o planimetria non aggiornata. La soglia va decisa con la prova; nessuna fonte la fissa.
- **Vani** (**Inferenza**). Il confronto con i vani della visura è debole: accessori a frazione di vano e arrotondamenti (sezione 1.2).
- **Altezza** (**Inferenza**). Altezza mancante o fuori dall'intervallo abituale fa usare un valore convenzionale, da dichiarare.
- **Confidenza dei modelli** (**Fonte**). Le reti moderne sono spesso mal calibrate (Guo et al., 2017). La probabilità massima del modello è una base semplice per riconoscere errori e casi fuori distribuzione (Hendrycks e Gimpel, 2017). Un classificatore può rifiutare i casi incerti per garantire un rischio scelto, rinunciando a una parte dei casi (Geifman ed El-Yaniv, 2017). L'incertezza dovuta al rumore dei dati e quella dovuta al modello si stimano in modi diversi (Kendall e Gal, 2017). Nella segmentazione medica, sotto cambi di distribuzione, l'accordo fra più modelli è stato una base semplice e robusta per rilevare i fallimenti (Zenk et al., 2024).
- **Inferenza.** Per la vista 3D conviene sommare segnali indipendenti (immagine, geometria, confronto con la visura) e una conferma dell'operatore, più che fidarsi di un numero di confidenza. Le soglie si tarano solo su esempi: nella prova con piante inventate, poi, con autorizzazione, su poche planimetrie vere.

## 5. Avvertenze: perché la vista non sembri una misura

- **Fonte (L. 52/1985, art. 29, c. 1-bis, introdotto dal DL 78/2010).** Gli atti fra vivi su fabbricati esistenti contengono, a pena di nullità, l'identificazione catastale, il riferimento alle planimetrie depositate e la dichiarazione degli intestatari di conformità allo stato di fatto, sostituibile da un'attestazione di un tecnico. La planimetria ha quindi un peso negli atti, ma la conformità la dichiarano le persone o un tecnico, non il disegno.
- **Fonte (Agenzia).** La planimetria è «il disegno tecnico, di norma in scala 1:200» da cui si ricavano contorni, suddivisione, destinazione dei locali e dati metrici; serve all'identificazione e alla consistenza catastale. Le altezze sono arrotondate ai 5 cm; i muri in comune possono essere stimati.
- **Fonte (audizione 2019).** Una superficie «convenzionale» non rappresenterebbe «l'esatta misura»: l'Agenzia stessa distingue fra dato catastale e misura effettiva.
- Nessuna fonte ufficiale letta indica una tolleranza della planimetria rispetto alla realtà (**Da verificare** con un geometra).

**Proposta di testo** (**Inferenza**, da rivedere con ux-writing e con il legale)
- Sulla vista, sempre visibile: «Vista indicativa, non è una misura. È ricavata dalla planimetria catastale e può contenere errori.»
- Nel dettaglio: «La planimetria catastale è un disegno a fini fiscali, non un rilievo. Questa vista la interpreta: misure, altezze, porte e finestre sono approssimative. Per misure, lavori o una compravendita rivolgiti a un tecnico.»
- Se l'altezza è convenzionale: «Altezza non leggibile sulla planimetria: la vista usa 2,70 m.» (il valore è un esempio).
- Se la planimetria non si legge: «Questa planimetria non si legge abbastanza per la vista 3D. Puoi caricarne una copia migliore o parlarne con l'agenzia.»
- Glossario: evitare «rilievo» e «modello 3D» ([GLOSSARY.md](../../GLOSSARY.md)).

## 6. Cosa significa per la prova (inferenza dell'agente)

**Piante inventate in stile catastale**
- Disegnarle in vettoriale nel riquadro Docfa (A4: 19,5 × 23,5 cm, a 1:200 pari a 39 × 47 m) con muri di spessore reale (30 cm esterni, 10 cm tramezzi), porte e finestre, scritte «cucina» o «K», «bagno», «H = 2,70», freccia del nord in basso a destra, «Scala 1:200», intestazione con Comune e via inventati e nessun dato personale.
- Tre o quattro tipi: bilocale rettangolare; trilocale con corridoio e muro obliquo; unità su due piani con cantina; una con altezza variabile e tratteggio sotto 1,50 m.
- Tenere per ciascuna una «verità» (pianta vettoriale e superficie con le regole del DPR 138/1998) e una visura inventata con superficie e vani.

**Versioni cattive generate dalle buone**
- Raster a 200 DPI bianco e nero (la versione «buona» di una scansione), poi ridotta a 72 DPI, compressa in JPEG, ruotata di 2–3 gradi, con rumore e macchie, contrasto basso, una piega o un timbro sopra un muro, scala tagliata, foto inclinata.
- Una versione «a mano»: tratti tremolanti, scritte corsive, griglia millimetrata sullo sfondo.

**Cosa provare**
1. Il ricalco: quanto tempo serve all'operatore per pianta e quanti errori fa rispetto alla verità.
2. L'estrusione: il 3D dalla pianta ricalcata, con l'avvertenza; il proprietario lo trova credibile e utile?
3. I controlli di qualità: risoluzione stimata dalla scala, contrasto, stanze chiuse, scarto di superficie; riconoscono le versioni cattive senza scartare le buone?
4. Facoltativo e separato: un riconoscimento automatico in locale sulle sole piante inventate, solo dopo il parere sulle licenze dei pesi, per vedere quanto cala sullo stile catastale.

**Limite della prova.** Le piante inventate non riproducono la varietà delle planimetrie vere. Un esito buono dice che il metodo è credibile, non che regge sul pilota.

## 7. Decisioni che emergono

Spettano all'utente; qui solo le opzioni e la raccomandazione dell'agente.

1. **Come si ricava la pianta.**
   - *Ricalco dell'operatore*: funziona su tutte le planimetrie e nessun dato esce, ma costa tempo di ƎE a ogni casa.
   - *Riconoscimento automatico in locale*: niente lavoro manuale se funziona, ma nessuna prova che regga sulle catastali e licenze dei modelli da chiarire.
   - *Servizio esterno*: subito disponibile, ma escludono gli schizzi a mano e servono contratto sui dati e verifiche sui paesi.
   - **Raccomandazione:** ricalco dell'operatore nella prova e, se va bene, nella prima versione; l'automatico come aiuto futuro, solo dopo una prova dedicata. È l'unica strada che non dipende da fatti oggi ignoti.
2. **Se ammettere servizi esterni.**
   - *No*: tutto resta in ƎE.
   - *Sì, solo con contratto sui dati, senza addestramento, preferibilmente in UE*: più strumenti, più pratiche e un fornitore in più nell'informativa.
   - *Sì anche fuori dall'UE con clausole tipo*: più scelta, più rischio e più verifiche.
   - **Raccomandazione:** no per ora. Nessuno dei servizi letti offre condizioni che rispettino la decisione del 20/10/2026 senza una trattativa.
3. **Se e quando usare una planimetria vera.**
   - *Mai nella prova*: nessun rischio, ma la prova dice meno.
   - *Una dei fondatori, con il loro consenso scritto, solo in locale, dopo le piante inventate*: un test realistico a rischio basso.
   - *Alcune di clienti di ƎE*: il test più fedele, ma serve una base giuridica e il parere del DPO.
   - **Raccomandazione:** la seconda, solo se le piante inventate passano.
4. **Chi decide che «si legge abbastanza».**
   - *Solo i controlli automatici*: nessun lavoro, ma rischio di mostrare un 3D sbagliato.
   - *L'operatore conferma ogni vista prima che il proprietario la veda*: un passaggio in più, ma con il ricalco è naturale.
   - **Raccomandazione:** conferma dell'operatore, con i controlli automatici come aiuto.
5. **Altezza dei locali.**
   - *Letta dalla planimetria dall'operatore*: più fedele.
   - *Valore fisso uguale per tutte*: più semplice, ma meno fedele.
   - **Raccomandazione:** letta dalla planimetria, con un valore fisso dichiarato quando manca.
6. **Testo dell'avvertenza.** Partire dalla proposta della sezione 5 e farla rivedere dal legale. **Raccomandazione:** avvertenza sempre visibile sulla vista, non solo in una nota.
7. **Da dove prendere la planimetria.**
   - *Quella che ƎE ha già*: nessuna pratica, ma a volte è una copia di copia.
   - *Una copia nuova scaricata con la delega del proprietario*: gratuita per ƎE al catasto, migliore della fotocopia, ma serve una delega per casa ogni 30 giorni.
   - **Raccomandazione:** usare quella del fascicolo e proporre la copia nuova solo quando il controllo di qualità fallisce. Il prezzo resta una scelta di ƎE (19/10/2026).

## 8. Pareri da chiedere

- **Privacy (DPO o consulente).** Planimetria come dato personale; uso per la vista nella stessa finalità del fascicolo o finalità nuova da indicare nell'informativa; eventuale fornitore esterno (contratto art. 28, addestramento escluso, trasferimenti); uso di planimetrie vere nella prova.
- **Legale.** Diritto d'autore del tecnico che ha redatto la planimetria: la legge protegge «i disegni e le opere dell'architettura» (L. 633/1941, art. 2, n. 5) e, a certe condizioni, i progetti di ingegneria (art. 99). Se una planimetria catastale di uno stato di fatto sia un'opera protetta e se una vista derivata sia consentita non è chiaro (**Da verificare**). Licenze non commerciali di dataset e pesi (CubiCasa5K) e loro derivati. Testo dell'avvertenza e responsabilità se il proprietario si fida della vista.
- **Geometra.** Cosa contengono davvero le planimetrie di primo impianto (porte, finestre, altezze); quanto ci si può fidare delle misure ricavate in scala; tolleranze abituali; quando una differenza fra vista e casa segnala una planimetria non conforme.

## Fonti

Lette il 24/10/2026 salvo diversa indicazione.

Agenzia delle Entrate e catasto
- Visura della planimetria, «Che cos'è» (aggiornata l'8/1/2026): https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/planimetria-catastale/scheda-info-planimetria-catastale
- Visura della planimetria online, cittadini e imprese: https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/planimetria-catastale/planimetria-catastale-online-citt-imprese
- Planimetria catastale allo sportello: https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/planimetria-catastale/planimetria-catastale-allo-sportello
- Assistenza, visure e planimetrie dei propri immobili: https://assistenza.agenziaentrate.gov.it/portale/visure-planimetrie-e-ispezioni-ipotecarie-dei-propri-immobili
- Comunicato stampa del 12/7/2023, consultazione online delle planimetrie (PDF): https://agenziaentrate.gov.it/portale/documents/20143/5409688/035_Com.+st.+Consultazione+planimetrie+12.07.2023/1b32901f-7e8b-75df-02bf-3b00a772f880
- Direzione regionale della Toscana, Linee guida Docfa, versione 1.2020 (PDF): https://www.agenziaentrate.gov.it/portale/documents/20143/3004696/Linee+Guida+Docfa+1_2020.pdf/053af2ce-45e5-6a72-52cb-0ed10d163e4c
- Guida «La nuova visura catastale», ottobre 2022 (PDF): https://www.agenziaentrate.gov.it/portale/documents/20143/233439/Guida_Nuova_Visura_Catastale_14102022.pdf/28ab7bf9-4efc-857b-0e44-30d23895e46e
- DPR 138/1998 con allegato C (PDF dell'Agenzia): https://www.agenziaentrate.gov.it/portale/documents/20143/268000/dpr23032008_138_dpr_138_1998.pdf/537e81d9-faba-5150-bfef-acffddfaf3da
- Camera dei deputati, Commissione di vigilanza sull'anagrafe tributaria, audizione del Direttore dell'Agenzia del 20/3/2019 (PDF): https://www.camera.it/temiap/2019/03/26/OCD177-3960.pdf
- Circolare 9/2001, allegato tecnico 2, riproduzione non ufficiale di Topoprogram: https://www.topoprogram.it/normativa-catasto/fabbricati/html/cir._9_01__allegato_tecnico_2.html. Testo ufficiale non trovato

Norme
- DPR 1142/1949, regolamento del catasto edilizio urbano: https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1949-12-01;1142. La pagina degli articoli non era leggibile (errore 503); artt. 45–52 e 57 letti nel testo consolidato al 5/1/2024 pubblicato da Certifico: https://certifico.com/component/attachments/download/38174
- L. 52/1985, art. 29: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1985-02-27;52~art29
- L. 633/1941, artt. 2 e 99: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1941-04-22;633~art2 e https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1941-04-22;633~art99
- GDPR, artt. 4, 28 e 44–49: fonti in [privacy-dati.md](privacy-dati.md)

Ricerca sul riconoscimento delle piante
- Liu, Wu, Kohli, Furukawa, «Raster-to-Vector: Revisiting Floorplan Transformation», ICCV 2017 (PDF): https://openaccess.thecvf.com/content_ICCV_2017/papers/Liu_Raster-To-Vector_Revisiting_Floorplan_ICCV_2017_paper.pdf (pagina HTML non raggiungibile, errore 403)
- Repository Raster-to-Vector (README e licenza MIT): https://github.com/art-programmer/FloorplanTransformation
- Zeng, Li, Yu, Fu, «Deep Floor Plan Recognition Using a Multi-Task Network with Room-Boundary-Guided Attention», ICCV 2019: https://arxiv.org/abs/1908.11025
- Repository Deep Floor Plan (licenza GPL-3.0): https://github.com/zlzeng/DeepFloorplan
- Kalervo et al., «CubiCasa5K: A Dataset and an Improved Multi-Task Model for Floorplan Image Analysis», 2019: https://arxiv.org/abs/1904.01920
- Repository CubiCasa5K (licenza CC BY-NC 4.0): https://github.com/CubiCasa/CubiCasa5k
- Parashchuk, Kaspshitskiy, Karyakin, MitUNet (v3 dell'1/4/2026): https://arxiv.org/abs/2512.02413; codice (licenza MIT): https://github.com/aliasstudio/mitunet; dataset Floor Plan CIS (CC BY 4.0, 9/12/2025): https://doi.org/10.5281/zenodo.17871079
- Norrby et al., FGSSNet, 2025: https://arxiv.org/abs/2507.10343
- Abouagour, Garyfallidis, ResPlan (v2 del 4/8/2026): https://arxiv.org/abs/2508.14006
- Kondratenko et al., AECV-Bench, 2026: https://arxiv.org/abs/2601.04819
- Ciarmoli, Oberholtzer (CSI Piemonte), riconoscimento automatico nella mosaicatura catastale, FOSS4G-IT 2020: https://zenodo.org/records/3723386
- RPLAN, pagina degli autori: http://staff.ustc.edu.cn/~fuxm/projects/DeepLayout/index.html (non raggiungibile, errore 503)
- Un articolo IJDAR del 2025 sulla binarizzazione di piante disegnate a mano non era leggibile (richiede accesso): https://link.springer.com/article/10.1007/s10032-025-00514-0

Confidenza e rifiuto
- Geifman, El-Yaniv, «Selective Classification for Deep Neural Networks», 2017: https://arxiv.org/abs/1705.08500
- Guo et al., «On Calibration of Modern Neural Networks», 2017: https://arxiv.org/abs/1706.04599
- Hendrycks, Gimpel, «A Baseline for Detecting Misclassified and Out-of-Distribution Examples in Neural Networks», 2016–2017: https://arxiv.org/abs/1610.02136
- Kendall, Gal, «What Uncertainties Do We Need in Bayesian Deep Learning for Computer Vision?», 2017: https://arxiv.org/abs/1703.04977
- Zenk et al., «Comparative Benchmarking of Failure Detection Methods in Medical Image Segmentation», 2024: https://arxiv.org/abs/2406.03323

Librerie
- three.js, ExtrudeGeometry: https://threejs.org/docs/pages/ExtrudeGeometry.html; licenza MIT: https://github.com/mrdoob/three.js/blob/dev/LICENSE

Fornitori
- Planner 5D, caricare una planimetria: https://support.planner5d.com/en/articles/14434484-how-to-upload-a-floor-plan
- Planner 5D, prezzi: https://planner5d.com/pricing
- Planner 5D, privacy (14/11/2024): https://planner5d.com/pages/privacy
- Planner 5D, Data Processing Addendum (14/11/2024): https://planner5d.com/pt/pages/data-processing-addendum
- RoomSketcher, prezzi: https://www.roomsketcher.com/pricing/
- RoomSketcher, scheda prodotti: https://www.roomsketcher.com/online-product-sheet/
- RoomSketcher, privacy (26/11/2025): https://www.roomsketcher.com/privacy/
- RoomSketcher, condizioni d'uso (5/8/2026): https://www.roomsketcher.com/terms/
- RoomSketcher, centro assistenza sugli ordini: https://help.roomsketcher.com/hc/en-us/articles/202273701 (non raggiungibile, errore 403)
- Archilogic, requisiti delle piante: https://help.archilogic.com/knowledge/best-practice-for-floor-plans
- Archilogic, ordinare una conversione (solo estratto del motore di ricerca): https://help.archilogic.com/knowledge/upload-a-floor-plan
- Archilogic, prezzi: https://www.archilogic.com/pricing
- Archilogic, privacy (21/9/2023): https://www.archilogic.com/legal/privacy-policy
- Floorplanner, prezzi: https://floorplanner.com/pricing
- Floorplanner, partner per i disegni: https://floorplanner.com/drawing-partners
- Kaedim: https://www.kaedim3d.com/
- CubiCasa: https://www.cubi.casa/ (prezzi, privacy e condizioni non raggiungibili, errore 403)
