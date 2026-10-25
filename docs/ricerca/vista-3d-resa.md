# Vista 3D indicativa: come la rendono bella e chiara le altre piattaforme

Ricerca del 24 ottobre 2026, svolta da un agente in background (skill research) su fonti primarie, con la data di lettura per ogni fonte. Risponde al ticket [16 «Ricerca: come le altre piattaforme rendono belle e chiare le case in 3D»](../../.scratch/controllo-a/issues/16-ricerca-resa-vista-3d.md) e prepara la seconda versione della [prova del ticket 15](../../.scratch/controllo-a/issues/15-prova-vista-3d.md). Completa la [prima ricerca](vista-3d.md): conversione, prezzi e dati dei servizi (Planner 5D, RoomSketcher, Archilogic, Floorplanner, Kaedim) sono nella sua §3 e qui non si ripetono.

**Punto di partenza.** La prima prova mostrava muri bianchi estrusi con il bordo superiore color rame, pavimento piatto, porte e finestre come buchi, giro libero della telecamera e l'avvertenza sempre visibile. Giudizio dell'utente (24/10/2026): «per come è fatto ora non sembra utile, è ancora grezzo».

**Decisioni da rispettare** ([PRODUCT.md](../../PRODUCT.md) §12, 23 e 24/10/2026): ricalco e riconoscimento dentro la piattaforma, nessun servizio esterno per le planimetrie; conferma solo l'operatore; avvertenza sempre visibile; la vista non deve sembrare una misura ([GLOSSARY.md](../../GLOSSARY.md)); niente ipotesi di modifica nella prima versione; l'app iPhone viene dopo il web.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato. Le affermazioni dei fornitori sono attribuite a loro come marketing.

**Controllo a campione** della sessione principale (24/10/2026), sulle fonti originali: licenza CC0 di Poly Haven (uso commerciale senza attribuzione); costanti di three.js (PCFSoftShadowMap deprecato dalla r186, NeutralToneMapping basato sullo standard Khronos); pagina RoomSketcher sulla personalizzazione delle piante 3D (nomi delle stanze, colori, angolazione; muri tagliati e freccia d'ingresso sono nel centro assistenza, non in quella pagina). Tutto confermato.

## In breve

- **Quasi tutti partono da una scansione, non da una pianta.** Matterport, Giraffe360, iGUIDE, Ogulo, Floorfy, Zillow, magicplan e Polycam ricavano la casa da fotocamere a 360° o dal LiDAR. Solo i programmi di arredo (RoomSketcher, Planner 5D, Floorplanner, Homestyler, Coohom) partono da una pianta disegnata o caricata, come Connetto (**Fonte**: pagine dei prodotti).
- **La resa più vicina alla nostra è la «pianta 3D» di RoomSketcher.** È una vista dall'alto con i muri **tagliati a un'altezza scelta**, la **faccia superiore dei muri colorata**, i **nomi delle stanze**, una **freccia sull'ingresso**, arredi facoltativi e una telecamera regolabile in inclinazione. Esistono sette modelli pronti (**Fonte**: centro assistenza RoomSketcher, aggiornato il 18/6/2026).
- **Ciò che rende «speciale» una vista ricorre ovunque:** casa delle bambole con i nomi delle stanze e la scelta del piano (Matterport dal 2021), passaggio fluido fra pianta dall'alto e 3D inclinando la vista, luce morbida, colori di pavimento e muri, foto legate alle stanze (Zillow, Immobiliare.it), arredi automatici e render fotorealistici (programmi di arredo), stanze svuotate con l'intelligenza artificiale e marcate «AI Enhanced» (Matterport, 2026), luce del sole stimata (Redfin, maggio 2026).
- **Molte di queste funzioni non servono o non sono compatibili.** Misure, superfici per stanza, arredo con l'intelligenza artificiale di un servizio esterno, render dei fornitori e scansione LiDAR contrastano con le nostre regole o cambiano la fonte della vista (§5).
- **La bellezza si ottiene con tecniche economiche e documentate.** In three.js: luce d'ambiente da una stanza simulata (RoomEnvironment con PMREM), tone mapping «Neutral» di Khronos per colori fedeli, ombre finte o di contatto al posto di molte ombre vere, occlusione ambientale solo dove il dispositivo regge, contorni sottili, telecamera ortografica per l'isometrica, etichette HTML per i nomi. Nessuna richiede asset a pagamento (**Fonte**: documentazione three.js r186; Khronos).
- **Le evidenze sulle persone comuni sono poche e indirette.** Uno studio su 417 persone senza formazione trova che le piante piacciono più del testo, ma l'**orientamento non viene capito** dalla pianta. Gli studi di cartografia dicono che il 3D non è automaticamente più chiaro: l'interazione allunga i tempi e le viste statiche danno più risposte giuste. Una vista 3D «da dietro e dall'alto» è risultata più chiara e gradita di una 2D in un edificio complesso. Non esistono studi indipendenti sulle piante 3D per gli acquirenti; le statistiche dei fornitori non sono evidenze (§4).
- **Per la seconda prova, quattro direzioni da confrontare** (§6): pianta 3D dall'alto con muri bassi e stanze nominate; casa delle bambole luminosa; isometrica illustrata in stile «Terracotta»; ciascuna con o senza arredi simbolici. Tutte restano senza misure, con l'avvertenza e con una vista 2D equivalente.
- **Spettano all'utente sei scelte** (§7): lo stile, gli arredi, i nomi e le superfici, il sole e il nord, il modo di muoversi, l'immagine fissa per il fascicolo.

## 1. Chi offre case e piante in 3D, e come le mostra

### 1.1 Tabella delle piattaforme

| Nome | Tipo di vista | Da dove nasce | Cosa la rende speciale | Fonte |
| --- | --- | --- | --- | --- |
| **Matterport** | Giro interno, casa delle bambole («Dollhouse»), pianta dall'alto («Floor Plan») | Scansione con fotocamera 3D o telefono, ricostruita in automatico («Cortex AI») | Etichette delle stanze anche nella casa delle bambole e scelta del piano toccandolo (dal 2021); stanze svuotate con l'intelligenza artificiale, marcate «AI Enhanced» (2025–2026); misure e superfici automatiche | **Fonte**: blog Matterport 2021, 2024, 2025, 2026; pagina Cortex AI |
| **CubiCasa** | Pianta 2D, pianta 3D, video 3D | Scansione di 5 minuti con il telefono, senza hardware dedicato | Temi grafici, colori di muri e pavimenti, logo; foto collocate sulla pianta; arredi fissi (elettrodomestici, isole) a pagamento | **Fonte**: scheda App Store. Sito ufficiale non raggiungibile (403) |
| **Giraffe360** | Giro a 360° HDR, piante 2D e 3D | Fotocamera con LiDAR e cattura guidata | Arredo virtuale, cielo sostituito, oggetti e mobili rimossi con l'intelligenza artificiale, video | **Fonte**: home page e pagina prezzi (prezzi non pubblicati) |
| **iGUIDE** | Giro 3D con pianta interattiva | Fotocamera PLANIX con LiDAR | Piante con dimensioni delle stanze secondo norme di misura statunitensi e canadesi | **Fonte**: pagina prezzi (da 6,99 a 210 dollari canadesi a progetto) |
| **Ogulo** | Giro a 360°, casa delle bambole, pianta 2D | Panorami a 360° (una foto per stanza) inviati a Ogulo | Casa delle bambole in ogni giro; piante ricavate dal giro; calcolo della superficie con timbro di un architetto | **Fonte**: home page (da 69 a 189 €/mese) |
| **Floorfy** | Giro 3D/360°, piante, video | Fotocamere a 360° e cattura col telefono | Studio con l'intelligenza artificiale per foto, video e descrizioni; videochiamate di visita | **Fonte**: file pubblico del sito per i motori, con prezzi dichiarati validi all'1/10/2026. Home page non raggiungibile (redirect infiniti) |
| **RoomSketcher** | Pianta 2D, **pianta 3D dall'alto**, 3D in tempo reale («Live 3D», dall'alto o ad altezza d'occhio), viste a 360°, render con l'intelligenza artificiale | Pianta disegnata o convertita (prima ricerca §3) | Muri tagliati ad altezza scelta, colore della sommità dei muri, freccia d'ingresso, nomi e superfici delle stanze, arredi tutti, solo fissi o nessuno; link condivisibile per un anno | **Fonte**: pagine prodotto e centro assistenza |
| **Planner 5D** | 2D, 3D, render, realtà aumentata su iPhone | Pianta disegnata, caricata o scansionata | Arredo e stili suggeriti con l'intelligenza artificiale; render fotorealistici; modello appoggiato su un tavolo in realtà aumentata | **Fonte**: blog e pagine prodotto |
| **Floorplanner** | 2D, 3D orbitale dall'alto e camminata ad altezza d'occhio | Pianta disegnata | Arredo automatico per stile («Magic Layout»), render fino a 8K, oltre 260.000 modelli | **Fonte**: home page e centro assistenza |
| **Homestyler** | 2D, 3D, render, panorami, video | Pianta disegnata, foto o DWG caricati, scansione | Arredo «in un clic» con l'intelligenza artificiale; render nel cloud | **Fonte**: pagina del prodotto |
| **Coohom** | 2D, 3D, render | Pianta caricata (PDF, JPG, PNG) e calibrata su un muro noto | Render in pochi minuti sui server del fornitore, 100.000+ modelli a dimensione reale; consiglia di verificare due o tre misure | **Fonte**: pagina del prodotto |
| **IKEA Kreativ** | Stanza scansionata da arredare | Scansione con LiDAR (iPhone o iPad Pro) | Prodotti IKEA posati nella stanza; progetto continuabile sul web | **Fonte**: assistenza IKEA |
| **Apple RoomPlan** (API) | Modello 3D parametrico della stanza | Fotocamera e LiDAR, modelli di apprendimento automatico | Muri, porte, finestre, aperture e 16 categorie di oggetti; zone come cucina e soggiorno; esporta in USD/USDZ | **Fonte**: documentazione Apple |
| **magicplan** | 2D e 3D anche durante la scansione | RoomPlan su iPhone/iPad con LiDAR e iOS 17 | Più stanze con arredi e oggetti in una sessione; foto collegate ai punti della pianta | **Fonte**: centro assistenza |
| **Polycam** | Piante 2D e 3D con nomi delle stanze | LiDAR (iPhone o iPad Pro dal 2021) | Esportazioni PDF, PNG, SVG, DXF; tolleranza dichiarata di 1,3 cm (mezzo pollice) | **Fonte**: pagina del prodotto |
| **Zillow** | Giro 3D Home, pianta interattiva, vista dall'alto in Apple Vision Pro | Telefono per il giro; fotocamera a 360° per la pianta | Foto collegate alle stanze della pianta con l'intelligenza artificiale, pianta sulla mappa, «dove sei» nella pianta | **Fonte**: comunicato Zillow del 16/4/2024; pagine 3D Home non raggiungibili (403) |
| **Immobiliare.it** | Giro a 360°, planimetria, «FotoPlan» | Fornitori di giri scelti dall'agenzia; planimetria caricata | Le foto si collegano alla planimetria; giro e planimetria alzano il punteggio dell'annuncio; visite guidate a distanza fino a 50 persone | **Fonte**: assistenza del gestionale |
| **Idealista** | Giro 3D, giro a 360°, videovisita | Foto e misure laser (3D); giri di fornitori esterni | Filtro «visita virtuale»; videovisita fino a 12 dispositivi | **Fonte**: notizie Idealista del 2020 (le più recenti trovate) |

### 1.2 Servizi per agenzie

**Matterport**
- **Fonte (blog del 1/7/2021).** «La casa delle bambole è il modo più iconico di guardare uno spazio Matterport.» Dal 2021 le etichette delle stanze, prima solo nella pianta, compaiono anche nella casa delle bambole. Il piano si sceglie toccandolo di lato.
- **Fonte (articoli del centro assistenza, letti solo negli estratti del motore di ricerca: le pagine non si caricano).** Si passa dalla casa delle bambole alla pianta 2D dall'alto **inclinando la vista** verso l'alto o il basso, con gli stessi gesti. Il proprietario può disattivare casa delle bambole e pianta «se non sembrano buone (zone frastagliate o mancanti)». Le etichette delle stanze compaiono nella pianta solo se create.
- **Fonte (blog del 7/5/2024).** Tre «pilastri»: ricostruzione automatica (Cortex AI), comprensione (stanze riconosciute dagli oggetti, misure), sintesi con l'intelligenza artificiale generativa. Lo svuotamento delle stanze era ancora una ricerca, con il modello Stable Diffusion.
- **Fonte (blog del 25/2/2025).** Lo svuotamento («Defurnish») è disponibile a tutti; il giro può aprirsi già vuoto.
- **Fonte (blog del 21/7/2026).** Nuova interfaccia: casa delle bambole, pianta e interno si aprono da un pannello in basso; ogni pulsante dice cosa fa; la vista svuotata porta l'etichetta «AI Enhanced». Pulsanti con forme e stati visibili, per lettori di schermo e tastiera.
- **Fonte (pagina Cortex AI).** Superficie, altezza dei soffitti e dimensioni dei muri calcolate in automatico ed esportabili verso i portali. Marketing: «Trust the data the first time, every time».

**CubiCasa** (**Fonte**: scheda App Store; il sito risponde 403)
- Una scansione col telefono produce pianta 2D, pianta 3D, video e CAD; il 3D richiede il pacchetto PLUS 3D.
- Il piano gratuito è in bianco e nero; PLUS offre «temi», colori di muri e pavimenti, logo e una nota legale personalizzata.
- Nomi delle stanze in più lingue; misure in metri o piedi, oppure nascoste. Funziona su iPhone, iPad e Vision Pro.
- Nelle recensioni dell'App Store un utente scrive che le piante non sono accurate al 100% (una porta spostata, un'isola mancante): è un'opinione, non un dato.

**Giraffe360, iGUIDE, Ogulo, Floorfy**
- **Giraffe360 (Fonte):** giri HDR, piante 2D e 3D, arredo virtuale, cielo sostituito, rimozione di oggetti e mobili. I prezzi non sono pubblicati.
- **iGUIDE (Fonte):** giro 3D e pianta interattiva dalla fotocamera PLANIX. Prezzi a progetto: Radix 6,99 CAD (senza pianta); Instant 7,99 USD (pianta interattiva non scaricabile); Standard da 48 CAD; Premium da 66 CAD.
- **Ogulo (Fonte):** casa delle bambole «inclusa in ogni giro», piante ricavate dai panorami, calcolo della superficie con timbro di un architetto. Prezzi annuali: Basis 69 €/mese, Business 129 €/mese, Premium 189 €/mese.
- **Floorfy (Fonte, file del sito per i motori):** giri 3D/360°, piante, video, foto, descrizioni in più lingue, videochiamate. Prezzi dichiarati validi all'1/10/2026: da 19 €/mese per 5 giri attivi; studio con l'intelligenza artificiale a 19 €/mese per 100 crediti; editor di piante manuale gratuito.

### 1.3 Programmi di arredo e progettazione

**RoomSketcher** (**Fonte**: pagine prodotto e articolo del centro assistenza aggiornato il 18/6/2026)
- **Pianta 3D**: «panoramica splendida della casa», con arredi oppure vuota. Gli **stili**, per abbonati Pro e Team, regolano:
  - *arredi*: tutti, solo quelli fissi (cucina, bagno, armadi, camini) o nessuno; porte, finestre e scale restano;
  - *altezza di taglio dei muri*: tutto ciò che sta sopra viene tolto. Nell'esempio un taglio a 1,3 m elimina i pensili; senza taglio i muri coprono porte e finestre. Il taglio predefinito è di 1,9 m (**Fonte**, solo nell'estratto del motore di ricerca);
  - *elementi visibili*: nomi delle stanze, superfici, etichette degli arredi;
  - *colori*: testo, **freccia dell'ingresso**, **sommità dei muri tagliati**;
  - *telecamera*: inclinazione da −90° (dritta in basso) a 0°, rotazione, ampiezza dell'inquadratura;
  - *modelli pronti*: sette, con angolo, inquadratura e colore della sommità dei muri.
- **Live 3D**: vista dall'alto («Flyover») o in prima persona; arredi, materiali e luce; nel browser «su ogni dispositivo»; link condivisibile valido un anno.
- **Render con l'intelligenza artificiale**: cambia pavimenti, finiture, luce e stile.

**Planner 5D, Floorplanner, Homestyler, Coohom, IKEA Kreativ**
- **Planner 5D (Fonte):**
  - assistente in chat («GPT-4»);
  - lettura delle dimensioni da una pianta caricata («1–2 minuti»);
  - generatore di stili dalle foto;
  - suggerimenti di arredi;
  - realtà aumentata su iPhone, con il progetto posato su una superficie (articolo del 2023, aggiornato nel 2024).
- **Floorplanner (Fonte):** la prima vista 3D è orbitale dall'alto; un doppio clic porta ad altezza d'occhio. Arredo automatico per stile («Magic Layout»), render fino a 8K, oltre 260.000 modelli. Dichiara di non vendere i dati degli utenti.
- **Homestyler (Fonte):** 3D generato «in automatico» dalla pianta 2D; caricamento di immagini o DWG; «AI Decoration» per arredare in un clic; render fotorealistici, panorami, giri interattivi e video. Web, iOS e Android.
- **Coohom (Fonte):** pianta caricata trasformata in 3D «in pochi secondi». La scala si calibra con la lunghezza vera di un muro; il fornitore consiglia di controllare due o tre altre misure. I disegni puliti si convertono meglio; le foto storte o le piante piene di scritte vanno corrette a mano. Render sui server del fornitore.
- **IKEA Kreativ (Fonte):** la scansione dell'intera stanza richiede il LiDAR; la progettazione continua nell'app o sul web.

### 1.4 Scansione con il telefono

**Apple RoomPlan** (**Fonte**: documentazione per sviluppatori, letta dai dati della pagina)
- Crea un modello 3D della stanza con la fotocamera, il LiDAR e modelli di apprendimento automatico. Dà **dati parametrici**, cioè elementi separati e modificabili, ed esporta in USD/USDZ.
- *Superfici*: pavimento, muro, porta (aperta o chiusa), finestra, apertura.
- *Oggetti* (16 categorie): vasca, letto, sedia, lavastoviglie, camino, forno, frigorifero, lavello, divano, scale, contenitore, piano cottura, tavolo, televisore, wc, lavatrice e asciugatrice.
- *Zone* (dal 2023, iOS 17): soggiorno, cucina, sala da pranzo, camera, bagno, non identificata, con un punto centrale e il piano.
- *Requisiti*: iOS e iPadOS 16; più stanze unite e l'esportazione con i propri modelli da iOS 17. La scansione funziona solo se il dispositivo ha il LiDAR. Sul Mac si possono elaborare i risultati, non scansionare.

**magicplan e Polycam** (**Fonte**)
- *magicplan, «Auto-Scan»*: usa RoomPlan. Richiede iPhone 12 Pro o successivi, oppure iPad Pro, con iOS 17. Mostra la pianta in 2D o 3D durante la scansione. Non funziona su Android. Le stanze con muri non chiusi non entrano nella pianta.
- *Polycam*: piante 2D e 3D con nomi, solo da dispositivi con LiDAR, nei piani Business ed Enterprise. Tolleranza dichiarata di mezzo pollice, «può allargarsi»: consiglia una verifica sul posto.

### 1.5 Portali

- **Zillow (Fonte: comunicato del 16/4/2024).**
  - Gli annunci «Showcase» hanno piante interattive che mostrano dove ci si trova nella casa e come si collegano le stanze. Ogni foto è legata al punto in cui è stata scattata, la pianta compare anche sulla mappa e c'è un giro 3D.
  - Lo stesso comunicato dichiara più visite, salvataggi e condivisioni e vendite più rapide (75% di visite in più, 2% di prezzo in più) senza descrivere il metodo: è **marketing**.
  - Le pagine di 3D Home e della guida per fotografi rispondono 403. Dagli estratti del motore di ricerca: app gratuita iOS e Android; serve una fotocamera a 360° per la pianta interattiva (**Da verificare** sulla pagina).
- **Immobiliare.it (Fonte: assistenza del gestionale).**
  - Il «Virtual Tour» è una navigazione a 360°, con un filtro di ricerca dedicato. Giro e planimetria contribuiscono al punteggio di qualità, che incide sul posizionamento dell'annuncio.
  - Il «FotoPlan», gratuito, collega le foto alla planimetria su una mappa interattiva. Se la planimetria manca, si suggerisce di recuperarla dal catasto con il servizio Youdomus.
  - «ImmoVisita», gratuita per le agenzie, mostra giro, planimetrie, FotoPlan e mappa durante una visita a distanza.
  - **Non è stata trovata una planimetria 3D di Immobiliare.it.**
- **Idealista (Fonte: notizie del 2020).** Giro 3D «come se si camminasse dentro la casa» e videovisita guidata fino a 12 dispositivi. Secondo il comunicato del 2020, letto solo nell'estratto del motore di ricerca, il 3D unisce foto e misure laser, con un 99% di precisione dichiarato. Gli annunci accettano giri di fornitori esterni. Non è stata trovata una planimetria 3D di Idealista. Il calendario corsi annuncia per il 27/10/2026 un incontro «Converti le tue planimetrie in interattive gratis»: pagina non raggiungibile (403), contenuto **Da verificare**.

## 2. Cosa le rende speciali

| Funzione | Chi la offre (esempi) | Cosa richiede |
| --- | --- | --- |
| **Casa delle bambole** (casa intera senza tetto, vista di tre quarti) | Matterport, Ogulo; il «Flyover» di RoomSketcher è simile | Un modello 3D chiuso. Da una pianta basta l'estrusione dei muri; nella scansione Matterport si può spegnere se la casa viene frastagliata |
| **Pianta 3D dall'alto con muri tagliati** | RoomSketcher, CubiCasa (PLUS 3D), Polycam, Giraffe360 | Muri, porte e finestre; altezza di taglio; colori. Tecnicamente semplice |
| **Passaggio 2D/3D** | Matterport (inclinando), magicplan, Floorplanner, Homestyler | Una telecamera che si inclina fino alla verticale, oppure due viste dello stesso modello |
| **Nomi delle stanze** | Matterport, RoomSketcher, CubiCasa, Polycam, RoomPlan (zone) | Il tipo di ogni stanza. Sulla planimetria catastale la destinazione dei locali c'è (prima ricerca, §1.2) |
| **Superfici e misure in vista** | Matterport, iGUIDE, Polycam, CubiCasa, RoomSketcher | Una misura affidabile. **Contrasta con «non è una misura»** |
| **Ingresso evidenziato** | RoomSketcher (freccia colorata) | Sapere quale porta è l'ingresso: lo indica l'operatore |
| **Colori di pavimenti e muri, temi** | CubiCasa, RoomSketcher | Una tavolozza; nessun asset |
| **Arredo automatico** | Floorplanner, Homestyler, Planner 5D | Libreria di modelli 3D con licenza e regole di posa. Sulla planimetria catastale gli arredi non ci sono: sarebbero inventati |
| **Materiali realistici e render** | Coohom, Homestyler, Planner 5D, RoomSketcher | Texture e calcolo pesante, spesso sui server del fornitore |
| **Luce del giorno e sole** | SketchUp (ombre per luogo, data e ora); Redfin con Shadowmap (punteggio di sole, dal 11/5/2026) | Nord, latitudine, data e ora. Redfin usa anche gli edifici, gli alberi e il terreno intorno |
| **Giro passo passo** | Matterport, iGUIDE, Zillow, Ogulo, Floorfy, Idealista | Panorami a 360° fotografati in casa. Da una pianta solo una camminata in un modello vuoto |
| **Foto legate alle stanze** | Zillow, Immobiliare.it (FotoPlan), CubiCasa, magicplan | Foto della casa: un dato nuovo per il fascicolo |
| **Realtà aumentata** | Planner 5D, IKEA Kreativ; sul web AR Quick Look (iOS) e WebXR | Un file USDZ o glTF; per la scansione della stanza il LiDAR |
| **Arredo o svuotamento con l'intelligenza artificiale** | Matterport («AI Enhanced»), Giraffe360, Floorfy, Homestyler, Planner 5D | Servizio di intelligenza artificiale, quasi sempre esterno; in California dal 2026 l'obbligo di dichiarare le immagini alterate negli annunci (§5) |
| **Video e immagini fisse** | CubiCasa, Homestyler, Floorplanner, Coohom | Un rendering fuori linea o una cattura dalla vista |
| **Condivisione e incorporamento** | RoomSketcher (link per un anno), Ogulo (plugin per WordPress), iGUIDE, Floorfy | Un link o un riquadro; per noi vale la regola di accesso (§5) |

**Inferenza.**
- Il «salto» di qualità percepito viene da poche cose, non da molte:
  - un'inquadratura dall'alto e di tre quarti;
  - muri bassi con la sommità di un colore deciso;
  - pavimenti distinti;
  - nomi delle stanze;
  - ingresso evidenziato;
  - luce morbida.
- Le scansioni piacciono perché mostrano la casa vera: noi non abbiamo foto né texture reali, e inventarle farebbe sembrare la vista più precisa di quanto sia.

## 3. Come renderla più bella e chiara

### 3.1 Tecniche di resa in three.js (documentazione ufficiale, revisione r186)

| Tecnica | Cosa dice la documentazione | Costo su telefono | Uso per noi (**Inferenza**) |
| --- | --- | --- | --- |
| **Luce d'ambiente da una stanza simulata**: RoomEnvironment con PMREMGenerator | RoomEnvironment è una stanza di base da cui PMREMGenerator ricava la luce d'ambiente («Image Based Lighting»), assegnata a `scene.environment`; deriva da model-viewer di Google | Basso: si calcola una volta | Base di ogni direzione: dà muri morbidi senza luci dure e senza file HDRI |
| **Tone mapping** | Tipi: Linear, Reinhard, Cineon, ACESFilmic, AgX, **Neutral**, Custom; predefinito nessuno. Neutral segue lo standard del gruppo 3D Commerce di Khronos | Trascurabile | Neutral, perché tiene fedeli i colori della tavolozza. Khronos (16/5/2024): i tone mapper «filmici» come ACES schiariscono i colori accesi, Neutral punta a un 1:1 sul colore base |
| **Ombre** | Con le shadow map ogni luce che fa ombra ridisegna la scena. Il manuale suggerisce una sola luce con ombre, oppure ombre finte (un piano con una texture sfumata) o mappe di occlusione precalcolate. Tipi: Basic, PCF, VSM; **PCFSoftShadowMap è deprecato dalla r186**; `radius` sfuma i bordi | Medio-alto con molte luci; basso con ombre finte | Una sola luce «sole» con ombre morbide sul desktop; su telefono ombre finte sotto i muri o di contatto (esempio ufficiale «contact shadows») |
| **Occlusione ambientale** (angoli più scuri dove muri e pavimento si incontrano) | SSAOPass è di base; SAOPass e GTAOPass danno qualità migliore ma «sono più costosi» | Alto: si ricalcola a ogni fotogramma | Da evitare su telefono. Alternativa economica: una sfumatura scura precalcolata alla base dei muri |
| **Contorni** | EdgesGeometry disegna gli spigoli oltre un angolo minimo; OutlinePass contorna gli oggetti scelti | Basso per EdgesGeometry | Linee sottili in stile disegno: utili all'isometrica illustrata e alla stanza selezionata |
| **Telecamera ortografica** | In proiezione ortografica la dimensione degli oggetti non cambia con la distanza | Nessuno | Isometrica e vista dall'alto «da disegno», senza deformazioni prospettiche |
| **Controlli** | OrbitControls limita l'inclinazione (`maxPolarAngle`) e lo zoom, con un'inerzia facoltativa; MapControls è pensato per guardare una mappa dall'alto | Nessuno | Inclinazione limitata, così la casa non si capovolge e non si va sotto il pavimento |
| **Nomi delle stanze** | CSS2DRenderer unisce etichette HTML agli oggetti 3D; supporta solo lo zoom al 100% del browser | Basso | Etichette leggibili e accessibili; oppure scritte disegnate sul pavimento, che seguono lo zoom |
| **Disegno su richiesta** | Il manuale: una scena ferma ridisegnata di continuo spreca batteria; meglio disegnare solo quando qualcosa cambia | Risparmio | Obbligatorio su telefono |
| **Densità dei pixel** | Il manuale avverte che con il ridimensionamento frazionario dello schermo il carico del processore grafico cresce; suggerisce un tetto alla risoluzione interna | Risparmio | Limitare la densità a 2 |

### 3.2 Pratiche delle piattaforme

| Pratica | Chi la usa | Evidenza o motivo |
| --- | --- | --- |
| Muri tagliati a mezza altezza | RoomSketcher (altezza scelta; esempio a 1,3 m) | **Fonte**: senza taglio i muri coprono porte e finestre |
| Tetto tolto, casa intera di tre quarti | Matterport, Ogulo | **Fonte**: «modo più iconico» secondo Matterport (marketing) |
| Sommità dei muri colorata | RoomSketcher (colore scelto, sette modelli) | **Fonte** |
| Colori per tipo di stanza | Non trovato come funzione esplicita; CubiCasa e RoomSketcher colorano pavimenti e muri | **Da verificare**; **Inferenza**: utile se i colori sono pochi e sempre accompagnati dal nome |
| Nomi delle stanze sul pavimento o sopra | Matterport, RoomSketcher, CubiCasa, Polycam | **Fonte** |
| Ingresso evidenziato | RoomSketcher (freccia) | **Fonte** |
| Nord | Planimetria catastale (obbligatorio, prima ricerca §1.2); SketchUp e Redfin per il sole | **Fonte** |
| Vista dall'alto che si inclina | Matterport (pianta ↔ casa delle bambole inclinando) | **Fonte** (estratto del centro assistenza) |
| Animazione d'ingresso | Matterport passa in volo dall'interno alla casa delle bambole (solo da descrizioni di utenti: **Da verificare**) | Va disattivata con «riduci movimento» (§3.4) |
| Foto o punto «dove sei» nella pianta | Zillow, Immobiliare.it | **Fonte**; per noi solo se il fascicolo avrà foto |

### 3.3 Prestazioni su telefono

- **Fonte (MDN, buone pratiche WebGL).**
  - I minimi garantiti sono bassi: texture fino a 4096 pixel, 8 unità di texture. «Il tuo desktop può reggere texture da 16k, la maggior parte degli altri sistemi no.»
  - La memoria grafica va contenuta, e il contesto può andare perso.
  - Sui processori grafici «a tasselli», comuni sui telefoni, conservare dati inutili costa caro.
- **Fonte (manuale three.js).** Ombre con più luci e occlusione ambientale ridisegnano la scena più volte; il disegno continuo consuma batteria.
- **Inferenza.**
  - Una casa estrusa da una pianta ha poche centinaia di superfici: il peso viene dagli effetti, non dalla geometria.
  - Su telefono vanno bene una luce d'ambiente, una sola luce con ombre leggere o ombre finte, nessuna occlusione calcolata a ogni fotogramma, la densità limitata e il disegno su richiesta.
  - Gli effetti più costosi si possono riservare al desktop e misurare nella prova.
- **Da verificare.** Tempi di caricamento e fluidità su telefoni economici: si misurano nella seconda prova, con lo strumento del browser.

### 3.4 Accessibilità

- **Fonte (WCAG 2.2, criterio 2.3.3, livello AAA).** Il movimento scatenato da un'interazione deve potersi disattivare, salvo sia essenziale; serve a chi soffre di disturbi vestibolari (nausea, vertigini). Tecnica suggerita: la preferenza `prefers-reduced-motion`, che MDN indica disponibile in tutti i browser da gennaio 2020.
- **Fonte (Apple, linee guida sul movimento).** Non aggiungere movimento per il gusto di farlo; renderlo facoltativo e non usarlo come unico modo di comunicare; lasciare che si possa interrompere.
- **Fonte (WCAG 2.2, criterio 1.1.1).** Ogni contenuto non testuale ha un'alternativa testuale; i controlli hanno un nome. Per i contenuti complessi servono un testo breve e uno più lungo.
- **Inferenza.**
  - La vista 3D è un contenuto complesso: le serve un'alternativa, cioè la pianta 2D pulita con l'elenco delle stanze per nome («Soggiorno, cucina, due camere, un bagno»). Le stesse informazioni non devono stare solo nel 3D.
  - I pulsanti delle viste («Dall'alto», «Di lato», «Ruota») vanno raggiungibili da tastiera.
  - Con «riduci movimento» attivo, niente volo d'ingresso: dissolvenza o cambio diretto.

### 3.5 Asset e licenze

- **Fonte (Poly Haven).**
  - HDRI, texture e modelli sono CC0, cioè «di fatto di pubblico dominio», usabili anche per scopi commerciali, senza obbligo di citazione.
  - Le condizioni del sito vietano lo scraping senza permesso.
  - Il catalogo conta 85 modelli d'arredo (divani, sedie, tavoli, letti, comodini, in stili vari) e 301 HDRI d'interni, contati con l'interfaccia pubblica del sito il 24/10/2026.
- **Fonte (Kenney, «Furniture Kit»).** Pacchetto di arredi in stile semplice, licenza CC0.
- **Fonte (Apple, AR Quick Look).** Accetta file USDZ o Reality; sul web basta un link al file in Safari.
- **Fonte (model-viewer di Google).** Componente con licenza Apache 2.0; la realtà aumentata sul web passa da WebXR.
- **Inferenza.**
  - Per la seconda prova **non serve alcun asset esterno**: RoomEnvironment è incluso in three.js; colori e luci sono codice.
  - Arredi simbolici si possono fare con forme semplici o con un pacchetto CC0.
  - I pacchetti di altri siti hanno licenze diverse (per esempio CC BY con citazione obbligatoria): vanno letti uno per uno prima dell'uso.

## 4. Cosa conta per chi guarda

### 4.1 Ricerche indipendenti

| Studio | Persone | Cosa trova | Limiti |
| --- | --- | --- | --- |
| Baker e Oppewal, *Journal of Housing and the Built Environment*, 2022–2023 | 417 studenti senza formazione in progettazione | Le piante piacciono più del testo (3,34 contro 3,17 su 5). **L'orientamento dell'appartamento non è stato compreso dalla pianta.** Chi non è esperto può guardare dettagli irrilevanti | Solo 2D contro testo; giovani; scelte ipotetiche |
| Burigat, Chittaro e Sioni, IEEE, 2017 | Non indicato nella pagina letta | In un edificio grande, la mappa 3D «da dietro e dall'alto» batte la prima persona (orientamento più rapido, più chiarezza, meno fatica, più gradimento) e la mappa 2D (orientamento più rapido, più piacevole, meno sforzo mentale, più gradimento) | Navigazione a piedi, non lettura di una casa |
| Juřík e altri, *PLoS ONE*, 2020 | 91 persone | Interattività e 3D stereoscopico **allungano i tempi**; la vista statica dà **più risposte corrette**. I benefici del 3D dipendono dal compito e dalle persone | Terreni, non case |
| Hermund e altri, eCAADe, 2018 | 131 persone, quasi tutti studenti di architettura | La realtà virtuale si avvicina allo spazio reale più delle piante e sezioni, anche nelle stime delle dimensioni | Un solo spazio; studenti di architettura |
| Solovev e Pröllochs, 2021 | 9.174 annunci | Il disegno della pianta spiega parte dell'affitto oltre ai dati strutturali; l'errore di stima scende fino al 10,56% | Dice che la pianta conta, non come mostrarla |

**Inferenza.**
- Non esistono studi indipendenti sulle piante 3D di case per persone comuni: le prove sono indirette.
- Tre indicazioni coerenti:
  - una vista dall'alto e di tre quarti è più chiara della prima persona;
  - una vista ferma o con poche posizioni fisse si legge meglio di un giro libero;
  - l'orientamento (nord, sole) non si capisce da solo, va mostrato in modo concreto.
- Il nostro pubblico, persone con poca familiarità con il computer, non è stato studiato: lo dirà la prova con l'utente.

### 4.2 Statistiche di fornitori e associazioni (non sono evidenze indipendenti)

- **NAR, «2024 Profile of Home Buyers and Sellers»** (indagine sugli acquirenti statunitensi): fra le funzioni dei siti, il 41% trova «molto utili» le foto, il 39% le informazioni dettagliate, il 31% le planimetrie.
- **NAR, «2025 Profile of Home Staging»** (comunicato del 6/5/2025; 1.266 agenti, risposta del 2,5%): secondo gli agenti, per i clienti sono molto importanti le foto (73%), l'allestimento fisico (57%), i video (48%) e i giri virtuali (43%). Sono opinioni di agenti, non di acquirenti.
- **Zillow** (16/4/2024): incrementi di visite, salvataggi e prezzo senza metodo pubblicato. **Marketing.**
- **CubiCasa** dichiara uno studio con il tracciamento dello sguardo su 182 acquirenti, 2D contro 3D: pagina non raggiungibile (403), risultati non letti. **Da verificare**, e comunque studio del fornitore.

## 5. Cosa resta compatibile con le nostre regole

| Funzione | Compatibile? | Perché (**Inferenza** sulle regole di PRODUCT.md §12 e GLOSSARY.md) |
| --- | --- | --- |
| Pianta 3D dall'alto, muri tagliati, sommità colorate | Sì | Usa solo ciò che l'operatore ha confermato |
| Casa delle bambole | Sì | Stessi dati; avvertenza visibile |
| Isometrica illustrata | Sì | Sembra un disegno, quindi meno una misura |
| Passaggio 2D/3D | Sì | La pianta 2D è anche l'alternativa accessibile |
| Nomi delle stanze | Sì | La destinazione dei locali è sulla planimetria; li conferma l'operatore |
| Ingresso evidenziato | Sì | Lo indica l'operatore |
| Nord | Sì | È obbligatorio sulla planimetria |
| Luce del sole da un lato, senza ore | Sì, con cautela | Indicazione qualitativa: «la luce arriva da sud». Niente ore né punteggi, che sembrerebbero un calcolo |
| Sole per data e ora, punteggio di luce | No nella prima versione | Servono edifici e alberi intorno (come Redfin); sembrerebbe una misura |
| Superfici per stanza, quote, strumento di misura | **No** | Contrastano con «non è una misura» |
| Superficie totale | Solo come dato della visura, fuori dalla vista | Viene dalla visura, non dalla vista |
| Arredi simbolici inseriti dall'operatore | Possibile, da decidere | Gli arredi non sono sulla planimetria: illustrano, non descrivono. Serve una frase nell'avvertenza |
| Arredo automatico | Possibile solo dentro la piattaforma | Regole locali, nessun servizio esterno; resta un'invenzione |
| Arredo o svuotamento con l'intelligenza artificiale di un servizio esterno | **No** | La planimetria uscirebbe da ƎE (decisione del 24/10/2026). Matterport segna queste viste «AI Enhanced»; in California dal 2026 le immagini alterate negli annunci vanno dichiarate accanto all'immagine, con l'originale (AB 723, analisi del Senato del 15/7/2025; legge, capitolo 497 del 2025) |
| Render fotorealistici dei fornitori | **No** | Servizi esterni; sembrano foto della casa vera |
| Materiali realistici (parquet, piastrelle) | Sconsigliato | Inventano finiture che la planimetria non dice |
| Scansione LiDAR (RoomPlan, Polycam, magicplan) | **No per ora** | Cambia la fonte: non più la planimetria ma un rilievo, con misure. Sarebbe un altro prodotto, e l'app iPhone viene dopo |
| Giro a 360° con foto | No nella prima versione | Servono foto in casa; i servizi sono esterni |
| Realtà aumentata | No nella prima versione | Utile soprattutto su iPhone; la vista verrebbe scambiata per una misura in scala |
| Immagine fissa della vista nel fascicolo | Sì | Generata dentro la piattaforma; porta l'avvertenza scritta nell'immagine |
| Link pubblico o incorporamento in annunci | **No** | La vista la vede solo chi vede la planimetria (§7.9); gli annunci di vendita sono fuori dalla prima versione |
| Video | Più avanti | Possibile dentro la piattaforma; non necessario ora |

## 6. Cosa provare nella seconda versione della prova (inferenza dell'agente)

Quattro direzioni sulle stesse tre piante inventate. Elementi comuni:
- avvertenza sempre visibile;
- nessuna misura;
- nomi delle stanze confermati dall'operatore;
- ingresso e nord;
- pianta 2D equivalente;
- «riduci movimento» rispettato;
- disegno su richiesta;
- verifica su telefono e desktop, in chiaro e in scuro.

Serve un piccolo passo in più per l'operatore: scegliere il tipo di ogni stanza e la porta d'ingresso.

**A. Pianta 3D dall'alto, muri bassi, stanze colorate e nominate** (modello: la pianta 3D di RoomSketcher)
- *Com'è:*
  - telecamera inclinata di circa 60°, con rotazione limitata;
  - muri tagliati a circa 1,1 m, con la sommità color rame, che richiama l'arancio di «Terracotta»;
  - pavimenti in 3–4 tinte tenui per zona (giorno, notte, servizi, esterno);
  - nomi delle stanze scritti sul pavimento, freccia sull'ingresso, rosa dei venti piccola;
  - luce d'ambiente e ombre finte alla base dei muri.
- *Cosa serve:* tipo delle stanze, ingresso, tavolozza.
- *Costo tecnico:* basso. Nessun asset; gira bene su telefono.

**B. Casa delle bambole luminosa** (modello: Matterport)
- *Com'è:*
  - prospettiva di tre quarti, muri a piena altezza, tetto tolto;
  - all'apertura la vista scende dall'alto (la pianta) alla posizione di tre quarti, solo se il movimento non è ridotto;
  - un «sole» da sud secondo il nord della planimetria, con ombre morbide;
  - occlusione ambientale solo sul desktop.
- *Cosa serve:* altezza (già prevista), nord.
- *Costo tecnico:* medio. Bisogna gestire i muri che coprono le stanze: si possono rendere trasparenti o abbassare quelli verso chi guarda.

**C. Isometrica illustrata in stile «Terracotta»** (coerente con la facciata disegnata di [DESIGN.md](../../DESIGN.md))
- *Com'è:*
  - telecamera ortografica a 30°, quattro rotazioni a scatti con due pulsanti, nessun giro libero;
  - colori pieni dell'intonaco e del rame, contorni sottili;
  - luce da sinistra come nella facciata, ombre disegnate;
  - nomi in etichette a pillola.
- *Cosa serve:* tavolozza e regole di DESIGN.md.
- *Costo tecnico:* basso-medio. Si può esportare anche come immagine fissa per il fascicolo e le email.

**D. Variante con arredi simbolici** (si applica ad A o C)
- *Com'è:* pochi pezzi per stanza (letto, divano, tavolo, sanitari, cucina), in forme semplici e nello stesso colore, posati dalla piattaforma secondo il tipo di stanza e spostabili dall'operatore. L'avvertenza aggiunge: «Gli arredi sono solo un esempio».
- *Cosa serve:* regole di posa per tipo di stanza; forme proprie o un pacchetto CC0.
- *Costo tecnico:* medio. Il rischio di posizioni assurde (letto davanti a una porta) va misurato nella prova.

*Da misurare nella prova:*
- quale direzione l'utente trova più chiara e più bella;
- se i nomi si leggono su un telefono piccolo;
- fluidità su un telefono di fascia bassa;
- tempo in più per l'operatore (tipi delle stanze, ingresso, eventuali arredi).

## 7. Decisioni che emergono

Spettano all'utente; l'agente non le prende.

**1. Che aspetto deve avere la vista nella seconda prova?**
- *Perché conta:* è la differenza fra «grezzo» e «utile».
- *Opzioni:*
  - (A) pianta dall'alto con muri bassi;
  - (B) casa delle bambole;
  - (C) isometrica illustrata;
  - tutte e tre affiancate.
- *Conseguenze:* A è la più chiara e leggera; B la più spettacolare, ma i muri coprono le stanze; C la più coerente con la grafica di Connetto e la meno simile a una misura.
- *Raccomandazione:* mostrarle tutte e tre affiancate sulle stesse piante. Se se ne vuole una sola, **A**: segue la pratica più vicina ai nostri dati e le evidenze sulle viste dall'alto e di tre quarti.

**2. Mettere arredi nella casa?**
- *Perché conta:* gli arredi fanno capire a cosa serve una stanza e rendono la vista più viva. Però sulla planimetria non ci sono: sarebbero inventati.
- *Opzioni:*
  - nessun arredo;
  - arredi simbolici, scelti dalla piattaforma e corretti dall'operatore;
  - solo i pezzi fissi (sanitari, cucina).
- *Conseguenze:* più arredi significa più lavoro per l'operatore, più rischio di errori visibili al proprietario e una frase in più nell'avvertenza.
- *Raccomandazione:* provare la variante D con arredi simbolici e confrontarla senza arredi; decidere dopo averle viste. Arredi realistici e arredo con l'intelligenza artificiale di servizi esterni restano esclusi.

**3. Nomi delle stanze e superfici sulla vista?**
- *Perché conta:* i nomi aiutano a orientarsi; i metri quadri per stanza fanno sembrare la vista una misura.
- *Opzioni:*
  - nomi e superfici;
  - solo nomi;
  - niente.
- *Raccomandazione:* **solo nomi**, confermati dall'operatore. La superficie totale resta un dato della visura, fuori dalla vista.

**4. Mostrare nord e luce del sole?**
- *Perché conta:* lo studio del 2022 trova che chi non è esperto non capisce l'orientamento da una pianta; la luce è però uno dei fatti che interessano di più di una casa.
- *Opzioni:*
  - solo la rosa dei venti;
  - nord e luce che arriva dal lato sud, senza ore;
  - sole regolabile per ora e stagione.
- *Conseguenze:* la terza richiede dati sui palazzi intorno e sembrerebbe un calcolo.
- *Raccomandazione:* **nord e luce dal lato sud, senza ore**, con l'avvertenza che vale per tutto.

**5. Come ci si muove nella vista?**
- *Perché conta:* chi ha poca familiarità con il computer si perde facilmente in un giro libero; gli studi trovano che l'interazione allunga i tempi.
- *Opzioni:*
  - giro libero come nella prima prova;
  - poche viste fisse con pulsanti («Dall'alto», «Di lato», «Ruota») e un trascinamento limitato;
  - immagine ferma.
- *Raccomandazione:* **viste fisse con pulsanti e trascinamento limitato**, con la pianta 2D a un tocco.

**6. Un'immagine fissa della vista nel fascicolo e nelle email?**
- *Perché conta:* si vede subito, senza caricare il 3D, anche su telefoni lenti. Si accorda con l'illustrazione della casa di DESIGN.md.
- *Opzioni:* sì, con l'avvertenza nell'immagine; no.
- *Raccomandazione:* **sì, più avanti**, dopo aver scelto lo stile. Nella prova basta mostrarne un esempio.

Fuori da queste scelte, come da decisioni già prese: scansione LiDAR, realtà aumentata, giri a 360°, render e arredo con l'intelligenza artificiale di servizi esterni, link pubblici e annunci.

## Fonti

Lette il 24/10/2026 salvo diversa indicazione.

Servizi per agenzie
- Matterport, «Dollhouse View Just Got an Upgrade» (1/7/2021): https://matterport.com/blog/dollhouse-view-just-got-upgrade
- Matterport, «Bringing Generative AI to Digital Twins: Matterport's Three Pillars of AI» (7/5/2024): https://matterport.com/blog/bringing-generative-ai-to-digital-twins-matterports-three-pillars-of-ai
- Matterport, «Winter 2025 Release: Productivity Multiplied» (25/2/2025): https://matterport.com/blog/matterports-winter-2025-release-productivity-multiplied
- Matterport, «Refreshing the Way to Explore Your Digital Twins» (21/7/2026): https://matterport.com/blog/refreshing-the-way-to-explore-your-digital-twins
- Matterport, Cortex AI: https://matterport.com/cortex-ai
- Matterport, centro assistenza: navigazione, dollhouse e pianta, svuotamento. Pagine che non si caricano («CSS Error»), lette solo negli estratti del motore di ricerca: https://support.matterport.com/s/article/Seamless-Navigation-in-Showcase?language=en_US ; https://support.matterport.com/hc/en-us/articles/212625278-Can-I-turn-off-the-dollhouse-and-floorplan-view- ; https://support.matterport.com/s/article/Share-Property-Layout-with-Showcase-Viewers?language=en_US ; https://support.matterport.com/s/article/Defurnish-your-Space?language=en_US
- CubiCasa, scheda App Store: https://apps.apple.com/us/app/cubicasa-2d-3d-floor-plans/id1439879192 (sito https://www.cubi.casa/ non raggiungibile, 403)
- Giraffe360, home page: https://giraffe360.com/ ; prezzi: https://giraffe360.com/pricing
- iGUIDE, prezzi: https://goiguide.com/pricing/ (centro assistenza https://help.youriguide.com/ non raggiungibile, 403)
- Ogulo, home page: https://www.ogulo.com/
- Floorfy, file pubblico per i motori di ricerca: https://floorfy.com/llms.txt (home page non raggiungibile, redirect infiniti)

Programmi di arredo e progettazione
- RoomSketcher, 3D Floor Plans: https://www.roomsketcher.com/features/3d-floor-plans/
- RoomSketcher, Live 3D: https://www.roomsketcher.com/features/live-3d/
- RoomSketcher, funzioni: https://www.roomsketcher.com/features/
- RoomSketcher, personalizzare le piante 3D: https://www.roomsketcher.com/features/pro-features/customize-3d-floor-plans/
- RoomSketcher, «How Can I Customize My 3D Floor Plans» (aggiornato il 18/6/2026, letto dall'interfaccia pubblica del centro assistenza): https://help.roomsketcher.com/hc/en-us/articles/205289631-How-Can-I-Customize-My-3D-Floor-Plans-in-RoomSketcher
- Planner 5D, funzioni con l'intelligenza artificiale (4/9/2023, aggiornato l'8/3/2024): https://planner5d.com/blog/planner-5ds-powerful-ai-features/
- Planner 5D, realtà aumentata (16/10/2023, aggiornato il 4/9/2024): https://planner5d.com/blog/personal-experience-how-to-use-the-planner-5ds-ar-feature-2/
- Planner 5D, generatore di piante: https://planner5d.com/use/ai-floor-plan-generator
- Floorplanner, home page: https://floorplanner.com/
- Floorplanner, navigazione 3D: https://help.floorplanner.com/en/articles/2394818
- Homestyler, Floor Planner: https://www.homestyler.com/solution/design_floor-planner
- Coohom, 3D Floor Planner: https://www.coohom.com/case/3d-floor-planner
- IKEA, scansione con Kreativ: https://www.ikea.com/gb/en/customer-service/knowledge/articles/250fg37g-2498-40gg-916c-f27d354683f0.html

Scansione con il telefono
- Apple, RoomPlan: https://developer.apple.com/documentation/roomplan
- Apple, CapturedRoom: https://developer.apple.com/documentation/roomplan/capturedroom
- Apple, CapturedRoom.Object.Category: https://developer.apple.com/documentation/roomplan/capturedroom/object/category-swift.enum
- Apple, CapturedRoom.Surface.Category: https://developer.apple.com/documentation/roomplan/capturedroom/surface/category-swift.enum
- Apple, CapturedRoom.Section e Label: https://developer.apple.com/documentation/roomplan/capturedroom/section
- Apple, CapturedStructure: https://developer.apple.com/documentation/roomplan/capturedstructure
- Apple, RoomCaptureSession.isSupported: https://developer.apple.com/documentation/roomplan/roomcapturesession/issupported
- magicplan, Auto-Scan con LiDAR: https://help.magicplan.app/auto-scan-your-floor-plan
- Polycam, Floor Plans: https://poly.cam/floor-plans

Portali
- Zillow Group, comunicato «Showcase listings on Zillow…» (16/4/2024): https://investors.zillowgroup.com/news-and-events/news/news-details/2024/Showcase-listings-on-Zillow-are-more-than-just-cutting-edge----featured-homes-sell-faster-and-for-more-money/default.aspx
- Zillow, 3D Home e piante interattive: https://www.zillow.com/3d-home/floor-plans/ e https://www.zillow.com/agent-resources/blog/zillow-3d-home-for-photographers-1/ (non raggiungibili, 403; solo estratti del motore di ricerca)
- Immobiliare.it, assistenza del gestionale, «Visita multimediale»: https://help-crm.immobiliare.it/gestione-degli-annunci/visita-multimediale
- Idealista, notizia del 26/6/2020 (tour 3D, home staging virtuale): https://www.idealista.it/news/node/141264
- Idealista, «Videovisita in 3D guidata da remoto» (21/12/2020): https://www.idealista.it/news/node/152161
- Idealista, filtro «visita virtuale» (31/3/2020), letto solo nell'estratto del motore di ricerca: https://www.idealista.com/en/news/property-sale-spain/2020/03/31/7473-idealista-activates-virtual-tour-filter
- Idealista, corsi per agenzie: https://www.idealista.com/cursos/ (non raggiungibile, 403)
- Redfin, comunicato su Sunscore (11/5/2026): https://www.redfin.com/news/press-releases/sunscore-launches-on-redfin-to-show-homebuyers-how-much-sunlight-a-home-gets/

Tecnica di resa
- three.js, RoomEnvironment: https://threejs.org/docs/pages/RoomEnvironment.html
- three.js, PMREMGenerator: https://threejs.org/docs/pages/PMREMGenerator.html
- three.js, WebGLRenderer (tone mapping e ombre): https://threejs.org/docs/pages/WebGLRenderer.html
- three.js, costanti globali (AgX, Neutral, tipi di ombre; PCFSoftShadowMap deprecato dalla r186): https://threejs.org/docs/pages/global.html
- three.js, LightShadow: https://threejs.org/docs/pages/LightShadow.html
- three.js, SSAOPass: https://threejs.org/docs/pages/SSAOPass.html ; SAOPass: https://threejs.org/docs/pages/SAOPass.html ; GTAOPass: https://threejs.org/docs/pages/GTAOPass.html
- three.js, OutlinePass: https://threejs.org/docs/pages/OutlinePass.html ; EdgesGeometry: https://threejs.org/docs/pages/EdgesGeometry.html
- three.js, OrthographicCamera: https://threejs.org/docs/pages/OrthographicCamera.html
- three.js, OrbitControls: https://threejs.org/docs/pages/OrbitControls.html ; MapControls: https://threejs.org/docs/pages/MapControls.html
- three.js, CSS2DRenderer: https://threejs.org/docs/pages/CSS2DRenderer.html
- three.js, manuale, Shadows: https://threejs.org/manual/#en/shadows
- three.js, manuale, Rendering on Demand: https://threejs.org/manual/#en/rendering-on-demand
- three.js, manuale, Responsive Design: https://threejs.org/manual/#en/responsive
- three.js, esempio «contact shadows»: https://threejs.org/examples/webgl_shadow_contact.html
- three.js, revisione corrente (r186): https://threejs.org/build/three.core.js
- Khronos, PBR Neutral Tone Mapper (16/5/2024): https://www.khronos.org/news/press/khronos-pbr-neutral-tone-mapper-released-for-true-to-life-color-rendering-of-3d-products
- MDN, WebGL best practices: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices
- Google, model-viewer: https://modelviewer.dev/
- Apple, AR Quick Look: https://developer.apple.com/documentation/arkit/previewing-a-model-with-ar-quick-look
- SketchUp, ombre reali: https://help.sketchup.com/en/sketchup/casting-real-world-shadows

Accessibilità
- W3C, WCAG 2.2, Understanding 2.3.3 Animation from Interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- W3C, WCAG 2.2, Understanding 1.1.1 Non-text Content: https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html
- MDN, prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- Apple, Human Interface Guidelines, Motion: https://developer.apple.com/design/human-interface-guidelines/motion

Asset e licenze
- Poly Haven, licenza: https://polyhaven.com/license ; catalogo letto dall'interfaccia pubblica: https://api.polyhaven.com/assets?type=models&categories=furniture
- Kenney, Furniture Kit: https://kenney.nl/assets/furniture-kit

Ricerche e statistiche
- Baker J., Oppewal H., «The effects of floor plan representations on preferences for apartments», *Journal of Housing and the Built Environment* 38, 727–752 (online 27/8/2022): https://pmc.ncbi.nlm.nih.gov/articles/PMC9418650/
- Burigat S., Chittaro L., Sioni R., «Mobile Three-Dimensional Maps for Wayfinding in Large and Complex Buildings» (2017), DOI 10.1109/THMS.2017.2693684: https://air.uniud.it/handle/11390/1120865
- Juřík V. e altri, «The 3D hype», *PLoS ONE* (21/5/2020), DOI 10.1371/journal.pone.0233353: https://pmc.ncbi.nlm.nih.gov/articles/PMC7241704/
- Hermund A. e altri, «The Perception of Architectural Space in Reality, in Virtual Reality, and through Plan and Section Drawings», eCAADe 36 (2018): https://papers.cumincad.org/data/works/att/ecaade2018_141.pdf
- Solovev K., Pröllochs N., «Integrating Floor Plans into Hedonic Models for Rent Price Appraisal» (2021): https://arxiv.org/abs/2102.08162
- Ishikawa T. e altri, «Perception and Conceptualization of House Floor Plans» (2011): https://journals.sagepub.com/doi/10.1177/0013916509356874 (non raggiungibile, 403; non usato)
- NAR, 2024 Profile of Home Buyers and Sellers, Highlights (PDF): https://www.nar.realtor/sites/default/files/2024-11/2024-profile-of-home-buyers-and-sellers-highlights-11-04-2024_2.pdf
- NAR, comunicato sul 2025 Profile of Home Staging (6/5/2025): https://www.nar.realtor/press-releases/nar-report-reveals-home-staging-boosts-sale-prices-and-reduces-time-on-market
- CubiCasa, studio con il tracciamento dello sguardo: https://www.cubi.casa/what-buyers-really-look-at-in-floor-plans/ (non raggiungibile, 403; non usato)

Norme citate come confronto
- Senato della California, Commissione Giustizia, analisi di AB 723 (udienza del 15/7/2025): https://sjud.senate.ca.gov/media/1938
- CalMatters Digital Democracy, stato di AB 723 (capitolo 497, 10/10/2025): https://calmatters.digitaldemocracy.org/bills/ca_202520260ab723 (testo ufficiale su leginfo.legislature.ca.gov non raggiungibile, 403)
