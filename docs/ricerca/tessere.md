# Tessere fisiche: fornitori, personalizzazione, ordini e spedizioni

Ricerca del 25 ottobre 2026, svolta da un agente (skill research) su fonti pubbliche, con la data di lettura per ogni fonte. Risponde al ticket [12 «Ricerca: tessere fisiche, fornitori, personalizzazione, ordini e spedizioni»](../../.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md).

**Decisioni di riferimento.** Tessera digitale subito; fisica in formato carta di credito, consegnata al banco con una cartellina o spedita a pagamento a chi la chiede dopo; non è una carta di pagamento e averla in mano non basta per vedere i dati; se si blocca e si sostituisce la vecchia non deve più funzionare ([PRODUCT.md](../../PRODUCT.md) §5.6). Nella prima versione è solo il segno dell'adesione: digitale e, se costa poco, fisica, consegnata al banco; il codice aiuta l'operatore, già entrato, a trovare il cliente (§12, 18/10/2026, «Tessera (T6)»). Anche l'inquilino ha un'adesione con la sua tessera (§12, 20/10/2026). Se la fisica costa poco la ricevono tutti e due; altrimenti solo digitale per tutti ([specifica del percorso 1](../../.scratch/controllo-a/issues/09-specifica-percorso-1.md), decisione 8).

**Metodo.** Solo lettura di pagine pubbliche. I configuratori di prezzo sono stati letti con un browser, scegliendo le opzioni senza mettere nulla nel carrello e senza inviare moduli. Nessun ordine, preventivo, campione, account o contatto con fornitori. Prezzi letti il 25/10/2026: possono cambiare.

**Controllo a campione** della sessione principale (25/10/2026), sulle fonti originali: listino GCARD (0,52 €/pz a 250, dati variabili +0,10 €/pz), configuratore Metaliccards per il rame (563,72 € per 1, 11,27 € per 50, 6,66 € per 100, 4,95 € per 200; incisione sui due lati +0,44 €, nomi o numeri +0,64 €), pagina Posta Ordinaria (1,30 € fino a 20 g, 2,90 € fino a 50 g; la pagina dice che «non è possibile conoscere l'esito della consegna»), art. 59, lett. c, del Codice del consumo su Normattiva («beni confezionati su misura o chiaramente personalizzati»). Tutto confermato.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Il formato è uno solo.** ISO/IEC 7810 ID-1: 85,60 × 53,98 mm, spessore 0,76 mm (**Fonte**: linee guida PressUp; scheda Poste sulle tessere nelle buste). Alcuni fornitori stampano 85 × 55 o 87 × 54 mm, oppure 0,60 mm: va chiesto l'ID-1 vero (**Fonte**: Stampastampa, Flyeralarm).
- **La tessera in PVC stampato costa meno di un euro a lotti di 100–250.** Con prezzi pubblicati: 0,52 €/pz a 250 (GCARD), 0,77–0,80 €/pz a 100 consegna inclusa (Flyeralarm), 0,81 €/pz a 100 (PressUp), 1,02 €/pz a 100 IVA inclusa (Vistaprint), 1,70 €/pz a 100 fronte/retro (Stampastampa) (**Fonte**). Le offerte non sono identiche: spessore, formato, retro e IVA cambiano da fornitore a fornitore (tabella 2.1).
- **Un codice diverso su ogni tessera costa 0,10 €/pz o poco più.** Numerazione, codice a barre, QR o nome da un file: +0,10 €/pz (GCARD a 250, tessere-plastificate.com), +14,30 € a lotto di 100 (Flyeralarm, solo numerazione), +0,64 €/pz sul metallo (Metaliccards) (**Fonte**).
- **Il rame vero esiste, ma costa circa dieci volte di più.** Metaliccards (Germania) vende tessere in rame da 0,5 mm a 6,66 €/pz per 100, 4,95 €/pz per 200, più incisione e nomi; una tessera singola costa 563,72 € (**Fonte**). In PVC nessun fornitore letto offre il rame: si trovano oro e argento glitterati o a caldo, oppure si stampa l'immagine del rame (**Fonte**; **Inferenza**).
- **Il pezzo singolo è caro presso i fornitori.** Da 5 a 8 €/pz per 10 tessere in PVC (Flyeralarm, Vistaprint), 6,00–6,50 €/pz per 2–10 tesserini (tessere-plastificate.com) (**Fonte**). Per sostituzioni e adesioni tardive conviene una scorta prestampata o una stampante al banco (**Inferenza**).
- **Una stampante da banco costa circa 800–900 € più IVA;** il nastro nero costa circa 0,014 € a tessera (Entrust Sigma DS1 a 849 €, nastro nero da 1.500 stampe a 20,90 €; tessere bianche a 0,085 €/pz) (**Fonte**).
- **Spedire una tessera in PVC costa 1,30 € senza tracciamento o 6,00 € con raccomandata.** Una lettera con tessera, foglio e busta resta probabilmente sotto i 20 g; una tessera in rame da sola pesa circa 20 g e passa allo scaglione 20–50 g (2,90 € o 7,75 €) (**Fonte**: listino Poste del maggio 2026; **Inferenza** sui pesi). Posta1 non è più servizio universale dal 1/5/2026; Postatarget è per pubblicità, minimo 100 pezzi (**Fonte**).
- **La tessera «spenta» si spegne solo nel sistema.** Un codice stampato non si può cancellare. La sostituzione funziona se il codice è casuale, non è il codice dell'adesione e ogni lettura passa dal sistema, che risponde «bloccata» (**Inferenza**).
- **Costo totale stimato per tessera, con cartellina** (calcoli nella sezione 7): circa **1,03–1,77 €** per la base in PVC prestampata; **2,33 €** col nome stampato dal fornitore, **1,79–4,34 €** se la stampa ƎE al banco (dipende da quante tessere ammortizzano la stampante); **6,54–8,57 €** in rame vero. Spedizione a parte.
- **Servono tre pareri** prima di vendere la spedizione: legale (recesso, consegna, garanzia, scritte), fiscale (IVA sul ribaltamento delle spese postali e sugli acquisti esteri), privacy (dati stampati e indirizzi di spedizione).

## 1. Cosa dovrebbe riprodurre la tessera fisica

**Tessera digitale decisa** ([DESIGN.md](../../DESIGN.md), «Accesso, tessera e situazioni comuni (percorso 1)»):
- rame spazzolato, formato carta di credito;
- fronte: ruolo, nome e cognome, codice breve (per esempio «EE-7730-15»), «dal» con mese e anno dell'adesione;
- retro: il codice in grande e a cosa serve;
- niente indirizzo, telefono o email, perché la tessera si mostra in pubblico; niente chip o numeri lunghi, perché non è una carta di pagamento;
- rame per tutti, inquilini compresi; personalizzazione dopo la prima versione; chi ha due ruoli ha due tessere.

**Inferenza.** Una tessera fisica coerente ha gli stessi dati e lo stesso codice, oppure solo il codice. Il rame si può rendere in tre modi:
1. PVC stampato con l'immagine del rame spazzolato: costa come una tessera normale, ma è piatto e non luccica;
2. PVC con lamina a caldo (oro, argento e simili): più luminoso; il rame non compare fra le finiture lette e il prezzo non è pubblicato;
3. metallo vero: aspetto e peso del rame, prezzo molto più alto.

## 2. Fornitori e prezzi

### 2.1 Confronto

Prezzi letti il 25/10/2026 sui siti dei fornitori. «IVA escl.» quando il fornitore lo dice; altrimenti è indicato.

| Fornitore (sede) | Materiale | Formato e spessore | 100 pz | 250 pz | Tempi dichiarati | Dati variabili | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **GCARD** (Genzano di Roma) | PVC laminato | ISO, 0,76 mm | non in listino (minimo 250) | 0,52 €/pz (130 €) | 7 gg lavorativi (sul negozio Carteplastiche, stessa azienda) | +0,10 €/pz a 250 (numerazione, QR, codice a barre, anagrafiche) | IVA non indicata su gcard.it; «iva esclusa» sul negozio Carteplastiche. Spedizione non indicata |
| **PressUp** (Italia; telefono con prefisso 0761) | PVC 0,76 laminato opaco | ISO ID-1 85,60 × 53,98 × 0,76 mm (linee guida) | 81,05 € IVA escl. (98,88 € incl.), consegna 9/11/2026; 100,05 € per il 28/10 | non letto (serve inviare il modulo del configuratore) | 11 gg lavorativi | numerazione, codice a barre, nominativo variabile, pannello firma (prezzi non letti) | spedizione gratuita |
| **Flyeralarm** (Würzburg, Germania; sito italiano) | PVC riciclato, pellicola opaca, 4/4 | 8,6 × 5,4 cm, «secondo ISO/IEC 7810», 600 µm | 79,69 € IVA escl. (97,22 € incl.) | 133,82 € IVA escl. (163,26 € incl.) | standard 9–12 gg lav.; express 5–7 | numerazione +14,30 € a lotto (100 pz), +2–3 gg | consegna inclusa; minimo 10 pz |
| Flyeralarm | PVC con pellicola opaca, 4/4 | come sopra | 77,13 € IVA escl. | 128,13 € IVA escl. | 9–12 gg | come sopra | |
| Flyeralarm | cartoncino 450 g, 4/4 | come sopra | 79,88 € IVA escl. | 93,44 € IVA escl. | 9–12 gg | | |
| Flyeralarm, «Ambiente e Natura» | PVC «biodegradabile», pellicola opaca | formato carta di credito, 600 µm | 185,68 € IVA escl. | 240,61 € IVA escl. | 11–14 gg | | |
| Flyeralarm, «Ambiente e Natura» | legno di betulla | formato carta di credito | 248,62 € IVA escl. | 429,92 € IVA escl. | 15–18 gg | | anche acero |
| **Vistaprint** (gruppo Cimpress) | PVC bianco lucido o opaco | «altezza e larghezza uguali alle carte di credito», 0,76 mm | 101,49 € IVA incl. | 159,49 € IVA incl. | consegna indicata 9/11/2026 a Roma, gratuita | non offerti | non stampa disegni simili a carte d'identità, di credito o di debito |
| **Stampastampa** (Tipolitografia Ghisleri, Romano di Lombardia BG) | PVC rigido 0,76, stampa UV fronte/retro | **87 × 54 mm** | 170 € | non in listino (200 pz 215 €; 300 pz 255 €) | consegna in 10–12 gg lav. | codice a barre progressivo: 165 € a 100 | spedizione 9 € + IVA; IVA dei prodotti non indicata |
| Stampastampa | cartoncino 350 g plastificato | 85 × 55 mm | non in listino | 100 € | 10–12 gg | | |
| **tessere-plastificate.com** (P&B Trade, Cambiago MI) | PVC 0,76, solo fronte | «8,5 × 5,5» | 1,00 €/pz (100 €) | non in listino (200 pz 0,60 €/pz) | 5–7 gg; urgenza +10 € (24/48 h) | retro +0,20; numerazione, codice a barre, nomi diversi +0,10 €/pz ciascuno | controllo file 10 €; spedizione 10 €. **Pagina modificata il 4/11/2024**: prezzi forse superati |
| **Metaliccards** (MetalicCards UG, Bad Harzburg, Germania) | rame, spazzolato, 0,5 mm | 85 × 54 mm | 6,66 €/pz | non in listino (200 pz 4,95 €/pz; 300 pz 4,52 €/pz) | «5 days after receipt of payment» nelle condizioni generali | nomi o numeri individuali +0,64 €/pz; numerazione +0,42; QR o codice a barre +0,42 | prezzi indicati «Net» in pagina, ma le condizioni dicono prezzi comprensivi di imposte (**Da verificare**). Spedizione gratuita solo verso Regno Unito e Germania |

**Fonte** per ogni riga: le pagine elencate in fondo. Le quantità «non in listino» non sono stimate.

**Altri fornitori letti, senza prezzo utilizzabile**
- **Pixartprinting** (Italia): card in PVC 8,5 × 5,4 cm, bianco 0,76 o 0,5 mm, trasparente; fondi oro e argento glitterati o bianco perlato. Il configuratore ha risposto «al momento non è possibile caricare i prezzi» (**Fonte**; prezzo **Da verificare**).
- **PlasmaDesign** (Romsey, Regno Unito, fuori dall'UE): tessere in acciaio con placcatura color rame e superficie spazzolata, 300, 500 o 800 µm; spedizione verso l'UE con FedEx, 32–48 € per 100–1000 biglietti. I prezzi del listino in euro non sono leggibili nella pagina (**Fonte**; prezzi **Da verificare**).
- **Realisaprint**: tipografia online «100% rivenditori», non vende ai clienti finali (**Fonte**).
- **3DJake / Creality**: 100 biglietti in alluminio anodizzato colorato per incisione laser, 19,39 € IVA incl., formato biglietto da visita; esaurito fino a febbraio; il colore rame non è indicato (**Fonte**). Serve solo con un laser in sede.
- **PET-G e PVC riciclato con certificazione**: nessun prezzo pubblicato trovato (**Da verificare**).

### 2.2 Campioni

- Metaliccards offre «Order this sample» e una «Sample Box»; PlasmaDesign una pagina «Order samples»; Pixartprinting un campionario di biglietti da visita (**Fonte**). Prezzi dei campioni non letti.
- Stampastampa invia gratis una bozza in PDF da approvare prima della stampa (**Fonte**).
- **Inferenza.** Prima di un ordine conviene un campione fisico del materiale scelto: colore del rame stampato, rigidità di 0,60 contro 0,76 mm, lettura del codice con il dispositivo del banco.

### 2.3 Osservazioni

- **Spessore.** Flyeralarm indica 600 µm per il PVC e, nella stessa pagina, «ca. 0,76 mm» per le carte con pellicola trasparente (**Fonte**). Le carte di pagamento sono 0,76 mm (**Fonte**: PressUp, Poste). **Da verificare** con un campione.
- **Prezzi con e senza IVA.** Solo Flyeralarm e PressUp mostrano tutti e due; Vistaprint mostra IVA inclusa; GCARD, Stampastampa e tessere-plastificate.com non lo dicono per i prodotti (**Fonte**).
- **Inferenza.** Per il pilota il fornitore italiano con il prezzo per pezzo più basso è GCARD a 250 pezzi; il più semplice da ordinare a 100 pezzi, con consegna inclusa e PVC riciclato, è Flyeralarm.

## 3. Personalizzazione

### 3.1 Sovrapprezzi pubblicati

| Voce | Fornitore | Prezzo | Fonte |
| --- | --- | --- | --- |
| Numerazione progressiva | tessere-plastificate.com | +0,10 €/pz | **Fonte** |
| Numerazione | Flyeralarm | +14,30 € IVA escl. a lotto di 100; +2–3 gg | **Fonte** |
| Codice a barre o QR, dati variabili in nero | GCARD | +0,10 €/pz (250), +0,06 (500), +0,04 (1000) | **Fonte** |
| Nomi diversi su ogni tessera (da file Excel) | tessere-plastificate.com | +0,10 €/pz | **Fonte** |
| Stampa del retro | tessere-plastificate.com | +0,20 €/pz | **Fonte** |
| Supporto oro o argento glitterato | tessere-plastificate.com | +0,50 €/pz | **Fonte** |
| Incisione laser, un lato / due lati | Metaliccards (rame) | +0,22 / +0,44 €/pz | **Fonte** |
| Nomi o numeri individuali | Metaliccards | +0,64 €/pz | **Fonte** |
| Un colore stampato sul metallo | Metaliccards | +0,11 €/pz per colore | **Fonte** |
| Colore della tessera | tutti i fornitori in PVC | incluso nella stampa a colori fronte/retro | **Fonte** |

### 3.2 Pezzo singolo e piccole quantità

| Quantità | Fornitore | Prezzo | Per pezzo |
| --- | --- | --- | --- |
| 2–10 tesserini individuali | tessere-plastificate.com | 6,00 €/pz solo fronte, 6,50 €/pz fronte/retro, + 10 € di spedizione | 6,50 € + spedizione |
| 10 | Flyeralarm (PVC riciclato) | 50,28 € IVA escl., consegna inclusa | 5,03 € |
| 10 | Vistaprint | 79,98 € IVA incl. | 8,00 € |
| 1 | Metaliccards (rame) | 563,72 € | 563,72 € |
| 50 | Metaliccards (rame) | 11,27 €/pz | 11,27 € |

**Fonte**: pagine dei fornitori. Tempi: gli stessi dei lotti (da 5 a 18 giorni lavorativi).

**Inferenza.** Ordinare una tessera alla volta al fornitore costa 6–16 € e una o due settimane di attesa. Per chi aderisce dopo e per le sostituzioni bastano due strade: una scorta prestampata con codice, oppure la stampa al banco.

### 3.3 Stampa al banco

| Voce | Prezzo (IVA escl.) | Fonte |
| --- | --- | --- |
| Stampante Entrust Sigma DS1, un lato, USB | 849,00 € | Carteplastiche, «Tasse escluse» |
| Stampante HiTi CS-200 | 775,00 € | Carteplastiche |
| Stampante Magicard 300 Duo Mag | 1.188,00 € | Carteplastiche |
| Nastro nero per Sigma DS1 e DS2 (525900-001) | 20,90 € | Carteplastiche |
| Resa del nastro nero 525900-001 | 1.500 stampe; per il produttore anche fino a tre volte tanto con il risparmio del nastro | scheda Entrust dei consumabili Sigma DS1/DS2 |
| Nastro a colori YMCKT per Sigma DS1 | resa 250 o 500 stampe; prezzo non trovato | scheda Entrust |
| 1000 tessere bianche in PVC laminato ISO 0,76 mm | 85,30 € (0,085 €/pz), «adatte per la stampa con tutte le stampanti termografiche» | Carteplastiche |
| Evolis Primacy 2 | nessun prezzo italiano trovato | **Da verificare** |

**Calcolo (Inferenza).**
- Nastro nero: 20,90 € / 1.500 = 0,014 € a tessera.
- Tessera bianca con nome e codice in nero: 0,085 + 0,014 = 0,10 € a tessera, stampante esclusa.
- La stampante pesa sul costo: 849 € / 250 tessere = 3,40 €; 849 € / 1.000 tessere = 0,85 €.

**Da verificare.**
- Se la stampante scrive bene sulle tessere prestampate dal fornitore (laminate, con pellicola o vernice UV). Flyeralarm avverte che le carte con vernice UV «non sono stampabili in un secondo momento» (**Fonte**).
- Pulizia, assistenza, tessere rovinate e software di stampa (non letti).
- Nessuna stampante letta incide il metallo: per il rame serve un laser (non studiato).

## 4. Ordini, scorta, codice, blocco e sostituzione

Questa sezione è **Inferenza** dell'agente a partire da PRODUCT.md §5.6 e §12 e dalle offerte lette. Non sceglie lo stack.

### 4.1 Due modi di lavorare

| | Prestampata con codice, associata al banco | Stampata col nome |
| --- | --- | --- |
| Come si ordina | Un lotto di 100–250 tessere uguali, con un codice diverso su ognuna da un file (dati variabili) | A lotti con un file di nomi, oppure una per volta con la stampante al banco |
| Al banco | L'operatore prende una tessera dalla scorta, legge il codice e la associa all'adesione | Si aspetta il lotto successivo, oppure si stampa subito al banco |
| Sostituzione | Subito, dalla scorta | Lotto successivo o stampa al banco |
| Dati personali stampati | Nessuno | Nome e cognome, forse il ruolo |
| Costo per tessera | Il più basso (sezione 7) | Più alto se a lotti piccoli o con stampante |
| Rischio | Scorta da custodire: una tessera vuota non vale nulla finché non è associata | Ristampe per errori nei nomi |

### 4.2 Il codice della tessera

- **Codice della tessera, non dell'adesione.** Adesione e tessera sono cose separate (§5.6, confermato). Con un codice proprio della tessera, la sostituzione cambia solo la tessera; l'adesione e la tessera digitale restano uguali. Se la tessera fisica riporta il codice dell'adesione, ogni sostituzione cambia anche il codice digitale. Il codice breve della tessera digitale (DESIGN.md) va confrontato con questa scelta.
- **Casuale, non progressivo.** Una numerazione progressiva fa indovinare i codici vicini. I fornitori stampano anche codici presi da un file (GCARD «anagrafiche», tessere-plastificate.com «dati diversi da Excel», PressUp «nominativo variabile») (**Fonte**): ƎE può generare codici casuali e mandarli come file.
- **Il QR o il codice a barre contiene solo il codice.** Niente nome e niente indirizzo web che apra una pagina con dati: averla in mano non basta per vedere i dati (§5.6). La lettura la fa l'operatore già entrato nella piattaforma (§12, T6).
- **Blocco.** Il codice stampato non si cancella. «Non funziona più» significa che il sistema, a ogni lettura, risponde «tessera bloccata il …, sostituita da …». Funziona solo se ogni uso passa dal sistema e nessuno si fida del codice letto senza controllarlo.
- **Stati da tenere** per ogni tessera: in scorta, associata, consegnata, spedita, bloccata, distrutta; con data, chi l'ha fatto e motivo. Le versioni restano conservate (§7).

### 4.3 Scorta e quantità

- Il pilota ha circa 100 clienti (§12, 20/10/2026). Con la decisione 8 della specifica le tessere sono una per adesione, proprietari e inquilini: il numero esatto dipende da quante adesioni ci saranno (dato mancante).
- A 250 pezzi il prezzo per tessera di GCARD è il più basso fra quelli letti, e lascia margine per errori, sostituzioni e adesioni tardive.
- Se proprietario e inquilino avessero colori diversi (idea dei fondatori, §5.6), servono due grafiche. Flyeralarm conta i «motivi» e per ogni motivo si paga il lotto (**Fonte**). Con «rame per tutti» (DESIGN.md) la grafica è una.

## 5. Distribuzione

### 5.1 Al banco, con la cartellina

Flyeralarm, «Custodie in carta Basic», DIN A7 verticale, fessure parallele in basso, carta riciclata 300 g, 4/4 colori (**Fonte**):
- 100 pezzi: 82,66 € IVA escl. (100,85 € incl.), cioè 0,83 €/pz;
- 250 pezzi: 101,86 € IVA escl. (124,27 € incl.), cioè 0,41 €/pz;
- 6–8 giorni lavorativi.

La cartellina di Flyeralarm ha una fessura per una tessera formato carta di credito (**Fonte**). Altre cartelline non sono state confrontate.

### 5.2 Spedizione con Poste Italiane

Listino dei servizi universali, edizione maggio 2026 (**Fonte**):

| Servizio | Prezzo | Tracciamento | Note |
| --- | --- | --- | --- |
| Posta Ordinaria (ex Posta4), piccolo standard fino a 20 g | 1,30 € | no: «non è possibile conoscere l'esito della consegna» (controllo a campione) | esente IVA (art. 10, n. 16, DPR 633/1972); 1,37 € online |
| Posta Ordinaria, oltre 20 g fino a 50 g | 2,90 € | | |
| Posta Ordinaria Pro, fino a 20 g | 1,10 € | | per clienti business (**Da verificare** le condizioni d'accesso) |
| Posta raccomandata, fino a 20 g | 6,00 € | sì, con firma; giacenza gratuita di 30 giorni | 7,75 € da 20 a 50 g |
| Posta raccomandata pro, fino a 20 g | 4,30 € | sì | per clienti business (**Da verificare**) |
| Posta raccomandata smart, fino a 20 g | 2,81–4,03 € secondo la zona | sì | per clienti business (**Da verificare**) |
| Poste Delivery Standard (pacco), 0–3 kg | 10,30 € | sì, con firma | consegna in 5 giorni |
| Poste Deliverybox Express | da 11,50 € IVA incl. | sì, con firma | solo presso la rete Punto Poste; 1–4 giorni |

**Tempi** (**Fonte**: pagine Posta Ordinaria e Raccomandata): obiettivo di 5 giorni lavorativi nel 90% dei casi e 6 nel 98%, sabato e festivi esclusi; con l'invio online si aggiungono 2 giorni di stampa.

**Prodotti esclusi** (**Fonte**):
- Posta1 (prioritaria) è fuori dal servizio universale dal 1/5/2026 (legge di bilancio 2026, L. 199/2025), come indicato nel listino delle carte valori postali.
- Postatarget è un prodotto di «direct marketing» con un minimo di 100 pezzi per spedizione: non serve per una tessera alla volta.
- La raccomandata online stampa e imbusta documenti: non può contenere una tessera (**Inferenza** dal listino a fogli).

**Formato e peso**
- Piccolo standard: lunghezza 14–23,5 cm, altezza 9–12 cm, spessore 0,15–5 mm, massimo 50 g (**Fonte**). Una busta C6 (11,4 × 16,2 cm) ci rientra (**Inferenza**).
- Una tessera in PVC pesa «gr. 5 circa» (**Fonte**: Stampastampa). Un foglio A4 da 80 g/m² pesa circa 5 g (0,0624 m² × 80 g/m²). Con la busta il totale resta probabilmente sotto i 20 g (**Inferenza**; peso della busta **Da verificare** con una bilancia).
- Una tessera in rame 85 × 54 × 0,5 mm pesa circa 20,6 g (2,295 cm³ × 8,96 g/cm³, densità del rame): già da sola supera i 20 g, quindi 2,90 € in ordinaria o 7,75 € in raccomandata (**Inferenza**).
- Poste descrive come inserire nelle buste «tessere plastificate standard ISO 7810 di dimensioni 54x86 mm e spessore 0,76 mm»: tessera fissata a un foglio, centrata sul lato corto, a 20 ± 5 mm dal bordo destro, lato lungo parallelo a quello della busta (**Fonte**: scheda tecnica di novembre 2016). È una scheda per i clienti business: vale anche per un invio singolo? **Da verificare**. Le tessere in metallo non sono trattate.

**Corrieri.** Non sono stati trovati listini pubblici per singole buste di InPost, BRT o altri (**Da verificare**). Fra i servizi di Poste, il pacco tracciato più economico letto è Poste Delivery Standard a 10,30 €.

**Inferenza.**
- Con la posta ordinaria la tessera costa poco da spedire, ma senza prova di consegna. Se ƎE sceglie il vettore, il rischio di perdita resta a ƎE fino alla consegna (sezione 6.3), quindi una tessera persa si rimanda.
- La raccomandata dà tracciamento e firma, ma costa 6 € e chi non è in casa deve andare all'ufficio postale.
- Una tessera persa per posta è innocua solo se non è ancora associata o se si può bloccare: è un'altra ragione per il codice casuale e per l'attivazione dopo la ricezione.

## 6. Dati personali, scritte, consumatore, fisco e ambiente

### 6.1 Dati stampati

- **Fonte.** Il GDPR chiede dati «adeguati, pertinenti e limitati a quanto necessario» (art. 5, par. 1, lett. c, «minimizzazione dei dati») e la protezione fin dalla progettazione e per impostazione predefinita (art. 25).
- **Fonte.** Il Garante, nel provvedimento generale sulle «fidelity card» del 24/2/2005, chiede dati «pertinenti e non eccedenti» e ricorda che molte finalità si raggiungono con un codice numerico. Il provvedimento è precedente al GDPR e cita il vecchio Codice: vale come orientamento.
- **Inferenza.**
  - Una tessera persa con nome e ruolo dice a chi la trova che quella persona è cliente di ƎE ed è proprietaria o inquilina. Con il solo codice non dice nulla.
  - Il nome serve alla persona, non all'operatore, che trova il cliente col codice.
  - L'indirizzo di spedizione è un dato in più, da usare solo per spedire e da citare nell'informativa di ƎE.

### 6.2 Cosa scrivere sulla tessera

- **Fonte.** Vistaprint non stampa «design che contengano elementi simili a carte d'identità, carte di credito o di debito».
- **Inferenza.** Frasi brevi, da scrivere con la skill ux-writing:
  - che non è una carta di pagamento;
  - che da sola non dà accesso ai dati;
  - cosa fare se la si trova (consegnarla a ƎE o chiamare il numero di ƎE).
- Evitare chip finti, bande magnetiche, numeri lunghi e la parola «carta» accanto a simboli di circuiti di pagamento (**Inferenza**, coerente con DESIGN.md).
- Il testo esatto, e il nome dell'agenzia o del marchio sulla tessera, va fatto rivedere con il parere legale.

### 6.3 Se la spedizione è venduta al consumatore

Codice del consumo (D.Lgs. 206/2005), testo su Normattiva (**Fonte**):
- **art. 49, lett. e**: prima del contratto a distanza va detto il prezzo totale con le imposte e «tutte le spese aggiuntive di spedizione, consegna o postali»;
- **art. 52**: quattordici giorni per recedere da un contratto a distanza, senza motivo;
- **art. 59, lett. c**: niente recesso per «beni confezionati su misura o chiaramente personalizzati»;
- **art. 61**: consegna senza ritardo e al più tardi entro trenta giorni, salvo diverso accordo;
- **art. 63**: se il professionista spedisce, il rischio di perdita passa al consumatore solo quando riceve il bene, a meno che il vettore l'abbia scelto il consumatore;
- **art. 133**: il venditore risponde dei difetti di conformità che si manifestano entro due anni dalla consegna.

Diritto UE (**Fonte**): la direttiva (UE) 2023/2673 aggiunge l'art. 11 bis alla direttiva 2011/83: nei contratti a distanza conclusi con un'interfaccia online serve una «funzionalità di recesso» con le parole «recedere dal contratto qui» o simili; gli Stati la applicano dal 19/6/2026. Il recepimento italiano non è stato letto (**Da verificare**).

**Inferenza.**
- Una tessera col nome è probabilmente «personalizzata» (niente recesso); una prestampata no.
- Se la tessera è compresa nell'adesione e si paga solo la spedizione, non è chiaro se si tratti di una vendita di beni o di un servizio accessorio: **parere legale**.

### 6.4 Aspetti fiscali, solo da segnalare

- **Fonte.** Posta Ordinaria, Raccomandata e Poste Delivery Standard sono esenti da IVA come servizio universale (art. 10, comma 1, n. 16, DPR 633/1972), come scrive il listino.
- **Fonte.** Normattiva mostra l'art. 12 del DPR 633/1972 (operazioni accessorie) «abrogato dal D.Lgs. 19 gennaio 2026, n. 10», con testo in vigore dal 1/1/2027: la disciplina IVA è in riordino.
- **Da chiedere al commercialista:**
  - come fatturare al cliente la spedizione che ƎE paga a Poste;
  - come trattare la tessera, se venduta o compresa nell'adesione;
  - gli acquisti da fornitori di altri Stati UE (Flyeralarm, Metaliccards: i prezzi di Metaliccards sono indicati «Net» ma le condizioni dicono prezzi con le imposte);
  - gli acquisti dal Regno Unito (PlasmaDesign): IVA e dazi all'importazione (**Inferenza**).

### 6.5 Ambiente

- **Fonte.** Flyeralarm offre PVC con «fino all'80%» di materiale riciclato, PVC «biodegradabile», cartoncino e legno; avverte che una rifinitura aggiuntiva, come una plastificazione parziale, «può limitare o impedire» il riciclo.
- **Fonte.** Dal 27/9/2026 la direttiva (UE) 2024/825 vieta le asserzioni ambientali generiche («ecologico», «biodegradabile», «verde» e simili) senza un'eccellenza riconosciuta delle prestazioni ambientali. Gli esempi citati comprendono proprio «biodegradabile». Il recepimento italiano non è stato letto (**Da verificare**).
- **Inferenza.**
  - Sulla tessera e sulla cartellina non conviene scrivere «ecologica» o «biodegradabile»; un'informazione precisa e verificabile, come la percentuale di riciclato dichiarata dal fornitore, va controllata con il fornitore e con il parere legale.
  - Una tessera che dura anni e si sostituisce di rado pesa meno di qualsiasi scelta di materiale.
  - Il metallo è più pesante da spedire, ma si ricicla come metallo; l'impatto non è stato confrontato con fonti (**Da verificare**).

## 7. Costo totale per tessera: tre scenari

**Ipotesi** (**Inferenza**):
- prezzi IVA esclusa quando il fornitore la indica; ƎE è un'impresa e di norma detrae l'IVA (**Da verificare** col commercialista);
- cartellina compresa;
- esclusi: tempo del personale, grafica, buste, campioni, spedizione del fornitore quando non è pubblicata;
- la spedizione al cliente è a parte (sezione 5.2).

### Scenario 1. PVC prestampata con codice, associata al banco

- **250 pezzi, GCARD:** tessera 0,52 + codice 0,10 = 0,62 €. Cartellina Flyeralarm 101,86 € / 250 = 0,41 €. **Totale circa 1,03 € a tessera**, lotto 155,00 + 101,86 = 256,86 € (più spedizione GCARD, non pubblicata).
- **100 pezzi, Flyeralarm, PVC riciclato:** (79,69 + 14,30 di numerazione) / 100 = 0,94 €. Cartellina 82,66 € / 100 = 0,83 €. **Totale circa 1,77 € a tessera**, lotto 176,65 €, consegna inclusa. La numerazione di Flyeralarm è progressiva: per codici casuali serve un fornitore che stampi dati da un file (sezione 4.2).

### Scenario 2. Personalizzata con il nome

- **2a. Il fornitore stampa i nomi, 100 pezzi** (tessere-plastificate.com, prezzi del 2024): 100 × (1,00 + 0,20 retro + 0,10 nomi) = 130 €, più 10 € di controllo file e 10 € di spedizione = 150 €, cioè 1,50 €. Con la cartellina (0,83 €): **circa 2,33 € a tessera**.
  - Ogni tessera ordinata da sola dopo: 6,50 € + 10 € di spedizione = **16,50 €**, e qualche giorno di attesa.
- **2b. ƎE stampa nome e codice al banco**, su tessere prestampate senza codice (GCARD 0,52 €) con nastro nero (0,014 €):
  - stampante ammortizzata su 250 tessere: 0,52 + 0,014 + 3,40 = 3,93 €; con la cartellina (0,41 €) **circa 4,34 € a tessera**;
  - stampante ammortizzata su 1.000 tessere in più anni: 0,52 + 0,014 + 0,85 + 0,41 = **circa 1,79 € a tessera**;
  - la stampante costa 849 € subito; la compatibilità con le tessere prestampate è **Da verificare**.

### Scenario 3. Metallo, rame vero (Metaliccards)

- **100 pezzi:** 6,66 + 0,44 (incisione laser sui due lati) + 0,64 (nome o codice individuale) = 7,74 €. Con la cartellina (0,83 €): **circa 8,57 € a tessera**, lotto 774,00 + 82,66 = 856,66 €.
- **200 pezzi, con 250 cartelline:** (200 × (4,95 + 0,44 + 0,64) + 101,86) / 200 = (1.206,00 + 101,86) / 200 = **circa 6,54 € a tessera**.
- Non compresi: spedizione verso l'Italia (non pubblicata) e il trattamento dell'IVA (vedi 6.4). Ogni tessera singola successiva costa 563,72 € se ordinata da sola: per il rame serve una scorta.
- **Variante «effetto rame» in PVC:** l'immagine del rame stampata a colori costa come lo scenario 1 (**Inferenza**). La lamina a caldo color rame non ha un prezzo pubblicato (**Da verificare**).

### Spedizione al cliente, in aggiunta

| Tessera | Posta Ordinaria | Raccomandata |
| --- | --- | --- |
| PVC (sotto 20 g, **Inferenza**) | 1,30 € | 6,00 € |
| Rame (oltre 20 g, **Inferenza**) | 2,90 € | 7,75 € |

Più busta, foglio di supporto e tempo di chi prepara la busta (non stimati).

## 8. Decisioni che aspettano l'utente

Da portare una alla volta. Le opzioni sono quelle emerse dalla ricerca; la scelta spetta all'utente.

1. **La tessera fisica c'è nel pilota?**
   - *Sì, per proprietari e inquilini:* circa 1–2 € a tessera in PVC; si scopre se averla in mano aiuta al banco.
   - *No, solo digitale:* nessun costo e nessuna scorta; non si impara nulla sulla tessera fisica.
   - *Sì, ma solo un lotto piccolo di prova (per esempio 100):* costa poco di più a pezzo e dà la stessa risposta.
2. **Di che materiale?**
   - *PVC con l'immagine del rame stampata:* costa come una tessera normale; il rame è finto e non luccica.
   - *PVC con una lamina metallica:* più bella; il rame non è fra le finiture lette e il prezzo va chiesto.
   - *Rame vero:* uguale alla tessera digitale, pesa e dura; circa 6,50–8,50 € a tessera e scorta obbligatoria.
3. **Col nome o solo con il codice?**
   - *Solo codice, prestampata:* nessun dato personale stampato, consegna e sostituzione immediate dalla scorta.
   - *Col nome:* più personale; se la tessera si perde dice chi è il cliente; ristampe per gli errori; con il fornitore si aspetta.
4. **Chi stampa?**
   - *Il fornitore, a lotti:* niente macchine in agenzia; per le tessere tardive serve una scorta o un'attesa.
   - *ƎE al banco con una stampante:* tessera pronta subito anche col nome; circa 850 € più IVA, spazio, manutenzione e qualcuno che la sappia usare.
5. **Spedizione a pagamento nel pilota?**
   - *No, solo consegna al banco:* il pilota si fa al banco (ticket 12) e non servono regole su recesso e consegna.
   - *Sì, posta ordinaria:* 1,30 €, senza prova di consegna; se si perde la si rimanda.
   - *Sì, raccomandata:* 6,00 €, tracciata con firma, ma il cliente può dover andare all'ufficio postale.
   - Per qualsiasi spedizione venduta servono i pareri legale e fiscale.
6. **Il ruolo stampato (proprietario o inquilino)?**
   - *Sì:* coerente con la tessera digitale; chi la trova capisce se la persona possiede o affitta.
   - *No:* più riservata; i due tipi si distinguono solo nel sistema.
7. **Quante tessere nel primo ordine?**
   - *100:* meno scorta ferma, prezzo per pezzo più alto.
   - *250:* prezzo per pezzo più basso e margine per sostituzioni e adesioni tardive; più tessere da custodire.

## 9. Pareri da chiedere

- **Legale.** Se la spedizione a pagamento è una vendita di beni o un servizio; informazioni precontrattuali, recesso (anche per le tessere col nome), consegna, rischio di perdita e garanzia; funzionalità di recesso online dal 19/6/2026; testo delle scritte sulla tessera; uso del marchio dell'agenzia.
- **Fiscale.** IVA sulla spedizione rifatturata e sulla tessera; acquisti da fornitori UE ed extra UE; effetti del riordino IVA dal 1/1/2027.
- **Privacy.** Nome e ruolo stampati; indirizzi di spedizione nell'informativa di ƎE; conservazione dello storico delle tessere bloccate.

## Fonti

Lette il 25/10/2026 salvo diversa indicazione.

Contesto del progetto
- [PRODUCT.md](../../PRODUCT.md) §5.6 e §12 (18/10/2026, 20/10/2026); [DESIGN.md](../../DESIGN.md), «Accesso, tessera e situazioni comuni (percorso 1)»; [specifica del percorso 1](../../.scratch/controllo-a/issues/09-specifica-percorso-1.md), decisione 8.

Formato
- PressUp, linee guida per le tessere in PVC (ISO 7810 ID-1, 85,60 × 53,98 × 0,76 mm): https://www.pressup.it/template/TESSERE-PVC/PressUp-%20LINEE-GUIDA-creazione-%20TESSERE-PVC%20.pdf
- ISO/IEC 7810:2019: https://www.iso.org/standard/70483.html (non raggiungibile, errore 403)

Fornitori di tessere
- GCARD, listino in home page e sede: https://www.gcard.it/
- Carteplastiche (GCARD), tessere stampate, prezzi «iva esclusa», produzione 7 giorni: https://www.carteplastiche.com/121-stampa-tessere-stampa-badge
- PressUp, configuratore delle card in PVC (valori predefiniti, 100 pezzi): https://www.pressup.it/stampa-card-pvc-online
- Flyeralarm, tesserini in plastica bianchi (configuratore): https://www.flyeralarm.com/it/p/tesserini-in-plastica-bianchi-4233230.html
- Flyeralarm, tessere «Ambiente e Natura» (configuratore): https://www.flyeralarm.com/it/p/tessere-collezione-ambiente-e-natura-12477875.html
- Flyeralarm, tesserini in plastica argento: https://www.flyeralarm.com/it/shop/configurator/index/id/349/tesserini-in-plastica-argento.html
- Vistaprint, biglietti da visita in plastica: https://www.vistaprint.it/biglietti-da-visita/biglietti-da-visita-in-plastica
- Stampastampa, cards in PVC (pagina modificata il 3/10/2026): https://www.stampastampa.com/cards_plastica.html
- tessere-plastificate.com (P&B Trade; pagina modificata il 4/11/2024): https://tessere-plastificate.com/
- Metaliccards, tessere in rame (configuratore): https://metaliccards.com/en/copper-card
- Metaliccards, impressum: https://metaliccards.com/en/imprint
- Metaliccards, condizioni generali: https://metaliccards.com/en/agbs
- Metaliccards, FAQ e pagina dell'acciaio: https://metaliccards.com/en/haufig-gestellte-fragen, https://metaliccards.com/en/edelstahl-visitenkarten (non raggiungibili, errore 404 o pagina vuota)
- PlasmaDesign, tessere color rame: https://plasmadesign.co.uk/copper-business-cards
- PlasmaDesign, listino in euro (prezzi non leggibili): https://www.plasmadesign.co.uk/euro-price-list
- PlasmaDesign, spedizioni: https://www.plasmadesign.co.uk/shipping-and-delivery
- Pixartprinting, card in PVC (prezzi non caricati dal configuratore): https://www.pixartprinting.it/carta-pvc/gift-card-personalizzate/
- Realisaprint, tessere in PVC (solo rivenditori): https://www.realisaprint.it/stampa-tessere-pvc-c86.html
- 3DJake, Creality Multicolor Aluminum Business Cards: https://www.3djake.it/creality/multicolor-aluminum-business-cards

Stampa al banco
- Carteplastiche, stampante Entrust Sigma DS1: https://www.carteplastiche.com/stampanti-entrust-datacard/847-stampante-entrust-sigma-ds1-singolo-lato-usb-cod-525300-001.html
- Carteplastiche, elenco stampanti: https://www.carteplastiche.com/11-stampanti-per-tessere-in-pvc- (e `?page=2`)
- Carteplastiche, nastro nero 525900-001: https://www.carteplastiche.com/nastri-e-ribbon-entrust-datacard/849-525900-001-nastro-monocromatico-per-sigma-ds1-e-ds2-.html
- Carteplastiche, 1000 tessere bianche: https://www.carteplastiche.com/tessere-neutre-blank-card-senza-tecnocologia/567-1000-tessere-bianche-in-pvc-laminato-iso-standard-076-mm.html
- Carteplastiche, nastri Evolis: https://www.carteplastiche.com/33-nastri-e-ribbon-evolis
- Entrust, scheda dei consumabili Sigma DS1/DS2 (copia sul sito del rivenditore ERS): https://www.ers-online.co.uk/files/products/files/sigma-ds1-ds2-supplies-ds-ERS.pdf; la scheda sul sito Entrust non era raggiungibile (errore 403): https://www.entrust.com/es/sites/default/files/2026-08/sigma-ds-color-ribbon-supplies-ss.pdf
- Evolis Primacy 2: nessun prezzo italiano trovato

Cartelline
- Flyeralarm, custodie in carta Basic (configuratore): https://www.flyeralarm.com/it/shop/configurator/index/id/6912/custodie-in-carta-basic.html

Spedizioni
- Poste Italiane, Tariffe dei servizi postali universali, ed. maggio 2026: https://www.media.poste.it/93dc336c-6a17-4111-ac4c-81a8b074489e/web/prodotti-servizio-universale-listino
- Poste Italiane, tariffe delle carte valori postali (Posta1 fuori dal servizio universale dal 1/5/2026): https://www.media.poste.it/571ff3f8-3311-4765-8c85-90548b412583/file/carte-valori-postali-tariffe
- Poste Italiane, Posta Ordinaria: https://www.poste.it/lettera/posta-ordinaria
- Poste Italiane, Raccomandata: https://www.poste.it/posta-raccomandata/raccomandata/
- Poste Italiane, Poste Delivery Standard: https://www.poste.it/pacchi/poste-delivery-standard/
- Poste Italiane, Poste Deliverybox Express: https://www.poste.it/confezioni-preaffrancate/poste-deliverybox-express
- Poste Italiane, scheda tecnica «Modalità di confezionamento invii con contenuto diverso dal cartaceo», novembre 2016: https://business.poste.it/business/files/1473807263261/confezionamento-invii-non-cartacei.pdf
- Poste Italiane, Postatarget Basic: https://business.poste.it/professionisti-imprese/prodotti/postatarget-basic.html
- InPost, BRT e altri corrieri: nessun listino pubblico per buste singole trovato

Norme e autorità
- Regolamento (UE) 2016/679 (GDPR), artt. 5 e 25: https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32016R0679
- Garante privacy, «Fidelity card e garanzie per i consumatori», 24/2/2005, doc. web 1103045: https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/1103045
- Codice del consumo, D.Lgs. 206/2005, artt. 49, 52, 59, 61, 63, 133 (Normattiva; alcune richieste interrotte e ripetute): https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art49 (sostituire il numero dell'articolo per gli altri)
- DPR 633/1972, art. 12: https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633~art12
- Direttiva (UE) 2023/2673 (funzionalità di recesso, art. 11 bis della direttiva 2011/83): https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32023L2673
- Direttiva (UE) 2024/825 (asserzioni ambientali generiche): https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32024L0825
