# La variazione ISTAT dalla fonte ufficiale

Ricerca del 30 ottobre 2026, svolta da un agente in background (skill `research`) solo su fonti ufficiali dell'ISTAT, con la data di lettura per ogni fonte. Risponde al ticket [07 «Ricerca: la variazione ISTAT dalla fonte ufficiale»](../../.scratch/architettura-percorso-1/issues/07-ricerca-istat.md).

Le regole sull'aggiornamento del canone (indice FOI senza tabacchi, 100% o 75%, cedolare, conguaglio) sono in [adempimenti-locazione.md](adempimenti-locazione.md) e qui non si ripetono. Questa ricerca dice **dove e come si legge il numero**. Nessun account creato. Sono state fatte sette richieste di sola lettura all'interfaccia pubblica dell'ISTAT, elencate nel §2.4 con le risposte ottenute.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Il numero sta in una pagina fissa dell'ISTAT**, «Indice dei prezzi per le rivalutazioni monetarie». Mostra l'ultimo mese: indice FOI senza tabacchi, variazione sul mese prima, sullo stesso mese dell'anno prima e di due anni prima. Oggi: settembre 2026, indice 104,3, +4,0% su un anno, +5,5% su due anni [1].
- **Lo stesso numero si legge da programma** con l'interfaccia SDMX pubblica di IstatData, gratuita e senza registrazione. Il limite è di 5 richieste al minuto per indirizzo; chi lo supera resta bloccato da 1 a 2 giorni [9]. Una richiesta di prova ha restituito settembre 2026: indice 104,3, variazione su un anno 4 (§2.4).
- **La variazione su due anni non è nella serie dell'interfaccia.** Si calcola dagli indici con il coefficiente di raccordo 1,214, con la formula ufficiale. Il calcolo di prova dà +5,5%, come la pagina [1][2] (§2.5).
- **Licenza:** salvo diversa indicazione, i contenuti del sito ISTAT sono in Creative Commons Attribuzione 4.0: si possono usare anche a fini commerciali, citando la fonte [13]. L'ISTAT non risponde di errori o danni [13].
- **Tempi:** il FOI esce una sola volta, con i dati definitivi, verso la metà del mese dopo. Per ottobre 2026 l'uscita è il 17 novembre alle 10 [3][5]. Secondo la scheda ISTAT il FOI non viene rivisto; si corregge solo in caso di errore. La scheda però è del 2015: **Da verificare** [8].
- **Dal gennaio 2026 la base è il 2025 (=100)**, con una nuova classificazione delle spese. Gli indici generali del FOI restano quelli di prima; per confrontare mesi in basi diverse serve il coefficiente 1,214 [2][6]. Con la nuova base l'interfaccia ha una nuova serie, con un nuovo nome (§2.3).
- **Se il servizio non risponde**, l'operatore trova lo stesso numero nella pagina delle rivalutazioni, nel comunicato stampa del mese o nel calcolatore Rivaluta (§5).

## 1. Dove l'ISTAT pubblica il dato

| Dove | Cosa contiene | Per chi |
|---|---|---|
| Pagina «Indice dei prezzi per le rivalutazioni monetarie» [1] | Solo l'ultimo mese: indice, variazioni su 1 mese, 1 anno e 2 anni, data della prossima uscita | Operatore |
| Comunicato stampa mensile «Prezzi al consumo – dati definitivi» [4] | Prospetto 1 con l'indice FOI senza tabacchi e le variazioni del mese | Operatore |
| Rivaluta, calcolatore e tavole [14] | Rivalutazione di un importo fra due date | Operatore |
| IstatData, banca dati [15] | Serie complete degli indici e delle variazioni; tema «Prezzi», sottotema FOI [3] | Operatore e programmi |
| Interfaccia SDMX di IstatData [9][10] | Le stesse serie in XML, CSV o JSON | Programmi |

- **Fonte:** per aggiornare gli affitti si usa l'indice FOI al netto dei tabacchi. L'indice si pubblica anche sulla Gazzetta Ufficiale, come vuole l'art. 81 della legge 392/1978 [1][3, domanda 21].
- **Fonte:** la pagina [1] indica il mese («Periodo di riferimento: SETTEMBRE 2026»), la base («2025=100») e il coefficiente di raccordo con la base 2015 (1,214).
- **Fonte:** la FAQ dell'ISTAT, domanda 21, indica anche una risposta automatica telefonica al numero 06 4673.3105 [3]. Non è stata provata.

## 2. Interfaccia per programmi (SDMX)

### 2.1 Indirizzo e documentazione

- **Fonte:** l'indirizzo è `https://esploradati.istat.it/SDMXWS`. La parte per i programmi web è in `https://esploradati.istat.it/SDMXWS/rest/` (versione 1) e in `/rest/v2` (versione 2.0) [10].
- **Fonte:** l'accesso è gratuito e non chiede registrazione. Il limite è di 5 richieste al minuto per indirizzo IP; oltre il limite scatta un blocco da 1 a 2 giorni [9].
- **Fonte:** la pagina dell'ISTAT rimanda per la documentazione a developers.italia.it [9]. Quell'indirizzo oggi porta a una pagina generica (vedi «Fonti non raggiunte»).
- **Fonte:** la pagina del servizio collega una descrizione dell'interfaccia (`swagger/v1/sdmx-rest.yaml`) [11]. È la specifica generica dello standard SDMX 2.1, versione 1.5.0: gli esempi di server sono BCE, Eurostat e altri, non l'ISTAT [11].
- **Fonte:** la pagina del servizio mostra l'avviso «Is usable from external users: False» e dice che l'indirizzo potrebbe non funzionare dall'esterno [10]. **Inferenza:** è un avviso automatico del programma di Eurostat che gestisce il servizio. Le richieste di prova sono arrivate dall'esterno senza problemi.
- **Da verificare:** non si è trovato un impegno scritto dell'ISTAT su disponibilità, orari di manutenzione o preavviso dei cambi.

### 2.2 La serie da leggere

- **Fonte:** nell'elenco dei dati (`dataflow`) il FOI mensile in base 2025 è `169_748_DF_DCSP_FOI1B2025_1`, «Foi - mensili dal 2026 (base 2025) - Ecoicop 2». Gli anni 1996–2025, nelle basi precedenti, sono in `169_748_DF_DCSP_FOI1B2025_2` (richieste 1 e 4).
- **Fonte:** la chiave ha cinque parti, in questo ordine: frequenza, territorio, tipo di dato, misura, voce di spesa (richiesta 2). I valori che servono:

| Parte | Codice | Significato |
|---|---|---|
| Frequenza | `M` | mensile |
| Territorio | `IT` | Italia |
| Tipo di dato | `101` | FOI (base 2025=100), dati mensili |
| Misura | `4` / `6` / `7` | numero indice / variazione sul mese prima / variazione sullo stesso mese dell'anno prima |
| Voce di spesa | `00ST` | indice generale senza tabacchi |

- **Fonte:** la serie dal 1996 al 2025 usa il tipo di dato `55` per gli stessi indici (richiesta 4).
- **Fonte:** fra le misure non c'è la variazione su due anni (richiesta 3: per `00ST` escono solo le misure 4, 6 e 7).

### 2.3 Che cosa cambia con la base

- **Fonte:** la base si aggiorna ogni dieci anni per regolamento europeo [6].
- **Inferenza:** il nome della serie contiene la base (`FOI1B2025`). Al prossimo cambio di base la serie da leggere avrà un altro nome. Lo stesso è già successo con le basi 2010 e 2015, che hanno serie separate nell'elenco (richiesta 1).

### 2.4 Richieste fatte e risposte

Richieste di sola lettura del 30/10/2026, fra le 16:05 e le 16:12 UTC, senza account, con `curl`, distanziate per restare sotto il limite.

1. `GET https://esploradati.istat.it/SDMXWS/rest/dataflow/IT1/all/latest` → 200, XML di circa 13,8 MB con 4.968 serie; le serie FOI sono quelle del §2.2.
2. `GET https://esploradati.istat.it/SDMXWS/rest/datastructure/IT1/DCSP_FOI1B2025/1.0?references=children` → 200, struttura con le parti della chiave e gli elenchi dei codici.
3. `GET https://esploradati.istat.it/SDMXWS/rest/data/IT1,169_748_DF_DCSP_FOI1B2025_1,1.0/M.IT...00ST/ALL/?startPeriod=2026-08&endPeriod=2026-09` → 200, XML. Valori:

| Mese | Indice (misura 4) | Su un mese (6) | Su un anno (7) |
|---|---|---|---|
| 2026-08 | 103.7 | 0.6 | 3.4 |
| 2026-09 | 104.3 | 0.6 | 4 |

   Settembre coincide con la pagina [1] e con il comunicato [4]: 104,3; +0,6; +4,0.
4. `GET https://esploradati.istat.it/SDMXWS/rest/data/IT1,169_748_DF_DCSP_FOI1B2025_2,1.0/M.IT...00ST/ALL/?startPeriod=2024-09&endPeriod=2024-09` → 200. Settembre 2024: indice 120 (base 2015), su un anno 0.6. La risposta conteneva anche ottobre 2024 (120.1), benché la richiesta finisse a settembre.
5. `GET https://esploradati.istat.it/SDMXWS/rest/data/IT1,169_748_DF_DCSP_FOI1B2025_1,1.0/M.IT.101.7.00ST/ALL/?lastNObservations=1`, con l'intestazione `Accept: application/vnd.sdmx.data+csv;version=1.0.0` → 200, CSV di 270 byte:

```
DATAFLOW,FREQ,REF_AREA,DATA_TYPE,MEASURE,ECOICOP_2,TIME_PERIOD,OBS_VALUE,OBS_STATUS,NOTE_DS,NOTE_REF_AREA,NOTE_DATA_TYPE,NOTE_MEASURE,NOTE_ECOICOP_2,NOTE_TIME_PERIOD,BASE_PER,UNIT_MEAS,UNIT_MULT
IT1:169_748_DF_DCSP_FOI1B2025_1(1.0),M,IT,101,7,00ST,2026-09,4,,,,,,,,,,
```

6. `GET https://esploradati.istat.it/SDMXWS/` → 200, pagina del servizio [10].
7. `GET https://esploradati.istat.it/SDMXWS/swagger/v1/sdmx-rest.yaml` → 200, specifica generica [11].

Osservazioni sulle risposte:

- **Fonte:** il valore arriva con il punto decimale e senza zeri finali: «4», non «4,0». La colonna `OBS_STATUS`, che segnala per esempio un dato provvisorio, è vuota.
- **Fonte:** l'intestazione XML delle risposte dice `<message:Test>true</message:Test>`. **Da verificare** cosa significhi per l'ISTAT; i valori coincidono con quelli pubblicati.
- **Da verificare:** perché la richiesta 4 ha restituito un mese in più.
- **Da verificare:** a che ora del giorno di uscita il nuovo mese compare nell'interfaccia. L'ISTAT tiene un calendario «Aggiornamento banche dati» separato da quello dei comunicati [5], non letto.

### 2.5 Variazione su due anni

- **Fonte:** la variazione fra due mesi è il rapporto fra gli indici per 100, meno 100, arrotondato a un decimale. Se gli indici sono in basi diverse, il rapporto si moltiplica per il coefficiente di raccordo di ogni cambio di base [2][3, domanda 23]. Il coefficiente da base 2015 a base 2025 è 1,214 [1][2].
- **Inferenza, calcolo di prova:** settembre 2026 su settembre 2024 = 104,3 / 120,0 × 1,214 × 100 − 100 = +5,52 → **+5,5%**, come la pagina [1].
- **Fonte:** il documento ufficiale [2] contiene refusi negli esempi: scrive «base 2026» invece di 2025, e l'esempio 5 riporta +81,0% e 1,810 al posto di +121,2% e 2,212 degli esempi 2 e 4. La formula resta quella sopra.

## 3. Condizioni d'uso

- **Fonte:** «Salvo diversa indicazione, tutti i contenuti pubblicati su questo sito sono soggetti alla licenza Creative Commons – Attribuzione – versione 4.0». Si possono riprodurre e modificare «per qualsiasi fine, anche commerciale», citando la fonte, con un link alla licenza e indicando le modifiche [13].
- **Fonte:** l'ISTAT non risponde di errori, omissioni o danni derivanti dall'uso delle informazioni [13]. Marchio e logo dell'ISTAT richiedono un'autorizzazione a parte [13].
- **Fonte:** l'unico limite d'uso trovato per l'interfaccia è quello delle 5 richieste al minuto [9].
- **Da verificare:** le note legali parlano del sito www.istat.it; non si è trovata una frase che le estenda espressamente a IstatData e all'interfaccia. Nella stessa pagina l'icona della licenza porta alla versione 3.0 italiana, mentre il testo dice 4.0 [13].
- **Inferenza:** basta una citazione come «Fonte: ISTAT, indice FOI senza tabacchi, settembre 2026», con il link alla licenza. Il testo esatto da mostrare all'inquilino e al proprietario è una scelta di prodotto.

## 4. Tempi, correzioni e cambi di base

### 4.1 Quando esce il dato

- **Fonte:** NIC e IPCA escono due volte, con una stima provvisoria a fine mese e la definitiva verso metà del mese dopo. Il FOI esce solo con la stima definitiva [3, domanda 19][4].
- **Fonte:** uscite dei dati definitivi nel 2026 [5]: dicembre 2025 il 16/1; gennaio il 23/2; febbraio il 17/3; marzo il 16/4; aprile il 15/5; maggio il 16/6; giugno il 16/7; luglio il 12/8; agosto il 16/9; settembre il 16/10 (ore 11); ottobre il 17/11; novembre il 16/12; di solito alle 10. L'uscita del 30/10 indicata come «prossima» nel comunicato di settembre è la stima provvisoria di ottobre, senza il FOI [4][5].
- **Inferenza:** il dato di gennaio 2026 è uscito più tardi del solito, il 23/2, nell'anno del cambio di base [5]. Non si può escludere un ritardo simile in futuro.

### 4.2 Correzioni

- **Fonte:** «L'indice Foi non è soggetto a revisioni. Sia gli indici Nic che quelli Foi vengono rettificati nell'eventualità di errori.» Al primo rilascio il FOI è già definitivo [8]. La scheda è aggiornata a febbraio 2015: **Da verificare** che valga ancora.
- **Fonte:** nel comunicato mensile, il confronto fra provvisori e definitivi riguarda NIC e IPCA, non il FOI [4].
- **Fonte:** gli indici con oltre il 50% di dati stimati portano il segno «i»; su Rivaluta non vengono pubblicati [4]. **Inferenza:** riguarda i dettagli per voce di spesa; per l'indice generale non è stato osservato.
- **Inferenza:** un valore FOI presente in IstatData è già quello definitivo. Una correzione per errore resta possibile: conservare il valore letto con la data della lettura permette di ritrovarlo.

### 4.3 Cambio di base del 2026

- **Fonte:** dai dati di gennaio 2026 il FOI ha base 2025=100 e segue la classificazione europea ECOICOP versione 2 [1][6][7]. Le serie 1996–2025 sono state ricostruite; il metodo «garantisce che gli indici generali (FOI e FOI senza tabacchi) restino invariati» [2][6].
- **Fonte:** coefficienti di raccordo: da base 2015 a 2025 = 1,214; da 2010 a 2015 = 1,071; da 1995 a 2010 = 1,3731 [2].
- **Fonte:** per periodi a cavallo del febbraio 1992 serve un coefficiente in più (1,0009) [2]. **Inferenza:** non riguarda le locazioni in corso.

## 5. Se il servizio non risponde

Dove l'operatore trova lo stesso numero a mano:

1. **Ultimo mese:** pagina «Indice dei prezzi per le rivalutazioni monetarie» [1], con la variazione su un anno e su due anni.
2. **Un mese preciso, anche passato:** il comunicato «Prezzi al consumo – dati definitivi» di quel mese, Prospetto 1, riga «Indice per le famiglie di operai e impiegati FOI (senza tabacchi)» [4]. Gli indirizzi seguono lo schema `https://www.istat.it/comunicato-stampa/prezzi-al-consumo-<mese>-<anno>/` (**Inferenza** da un solo caso).
3. **Calcolo fra due date:** Rivaluta, [calcolatore](https://rivaluta.istat.it/Rivaluta/Widget/calcolatoreWidget.jsp) e [tavole](https://rivaluta.istat.it/Rivaluta/Widget/tavoleWidget.jsp) [14].
4. **Serie complete:** IstatData, tema «Prezzi», sottotema «Prezzi al consumo per le famiglie di operai e impiegati FOI» [3, domanda 4][15].

- **Inferenza:** la pagina [1] mostra solo il mese più recente. Per un anniversario passato servono il comunicato di quel mese o le serie di IstatData.
- **Inferenza:** la variazione da usare dipende dal mese di riferimento scritto nel contratto, che non viene dall'ISTAT (vedi [adempimenti-locazione.md](adempimenti-locazione.md), «Dati da raccogliere all'attivazione»).

## 6. Cosa resta da decidere (per l'utente)

Nessuna scelta è fatta qui. I dati servono al ticket [Servizi esterni: email, SMS e ISTAT](../../.scratch/architettura-percorso-1/issues/11-servizi-esterni.md):

- leggere la variazione dall'interfaccia, o solo dall'operatore con i link del §5;
- la variazione su due anni: calcolata dagli indici (§2.5) o inserita a mano dalla pagina [1];
- quando leggere: dopo l'uscita del calendario [5] o all'anniversario;
- come citare la fonte nella proposta di nuovo canone (§3).

## Fonti

Tutte lette il 30/10/2026.

1. ISTAT, [Indice dei prezzi per le rivalutazioni monetarie](https://www.istat.it/notizia/indice-dei-prezzi-per-le-rivalutazioni-monetarie/): settembre 2026, indice 104,3, variazioni +0,6 / +4,0 / +5,5, base 2025, coefficiente 1,214, prossima uscita 17/11/2026.
2. ISTAT, [Calcolo e utilizzo delle variazioni e dei coefficienti di raccordo](https://www.istat.it/wp-content/uploads/2026/01/NM_variazioni_coefficienti_2026.pdf) (PDF, 2026): formule, coefficienti, arrotondamenti, esempi.
3. ISTAT, [FAQ – Domande frequenti sui prezzi al consumo](https://www.istat.it/notizia/faq-domande-frequenti-sui-prezzi-al-consumo/): domande 4 (IstatData), 19 (uscite), 21 (affitti, Rivaluta, numero telefonico), 23 (variazione tendenziale).
4. ISTAT, [Prezzi al consumo – Settembre 2026, dati definitivi](https://www.istat.it/comunicato-stampa/prezzi-al-consumo-settembre-2026/) e [PDF](https://www.istat.it/wp-content/uploads/2026/10/Prezzi-al-consumo-def-Set2026-1.pdf), 16/10/2026: Prospetto 1, dati imputati, provvisori e definitivi.
5. ISTAT, [Calendario delle diffusioni e degli eventi](https://www.istat.it/attivita-e-servizi-per-tipo-di-utenti/giornalisti/appuntamenti/calendario-delle-diffusioni-e-degli-eventi/) e [Calendario dei comunicati stampa 2026](https://www.istat.it/wp-content/uploads/2026/01/CALENDARIO-COMUNICATI-2026_10.11.pdf) (PDF): date dei dati definitivi.
6. ISTAT, [Gli indici dei prezzi al consumo – Anno 2026](https://www.istat.it/wp-content/uploads/2026/02/NOTA_INFORMATIVA_PANIERE_2026-1.pdf), nota informativa del 23/02/2026: ECOICOP v2, base 2025, aggiornamento decennale della base.
7. ISTAT, [Indici dei prezzi al consumo: le novità per l'anno 2026](https://www.istat.it/wp-content/uploads/2026/01/Nota-2026-prezzi-al-consumo.pdf), 16/01/2026.
8. ISTAT, Rivaluta, [Scheda metadati NIC e FOI](https://rivaluta.istat.it/Rivaluta/doc/scheda_metadati_Nic_Foi.pdf), aggiornata a febbraio 2015: §19, revisione dei dati.
9. ISTAT, [SDMX Web Services](https://www.istat.it/en/classifications-and-tools/sdmx-web-services/) (pagina in inglese): indirizzo, gratuità, limite di 5 richieste al minuto, rinvio alla documentazione.
10. ISTAT, [pagina del servizio SDMXWS](https://esploradati.istat.it/SDMXWS/): indirizzi REST v1 e v2, versione v9.11.0.0.
11. ISTAT, [sdmx-rest.yaml](https://esploradati.istat.it/SDMXWS/swagger/v1/sdmx-rest.yaml): specifica generica SDMX RESTful API 1.5.0.
12. ISTAT, interfaccia SDMX, richieste 1–5 del §2.4 (elenco dei dati, struttura, dati).
13. ISTAT, [Note legali: responsabilità e licenza](https://www.istat.it/note-legali/): CC BY 4.0, esclusione di responsabilità, marchio.
14. ISTAT, Rivaluta: [calcolatore](https://rivaluta.istat.it/Rivaluta/Widget/calcolatoreWidget.jsp) e [tavole](https://rivaluta.istat.it/Rivaluta/Widget/tavoleWidget.jsp).
15. ISTAT, [IstatData](https://esploradati.istat.it/databrowser/#/).

## Fonti non raggiunte

- **Documentazione dell'interfaccia su developers.italia.it** (`https://developers.italia.it/it/api/istat-sdmx-rest.html`, indicata da [9]): porta a una pagina generica sulle interfacce della pubblica amministrazione. Non è comunque una fonte ISTAT. Si sono usate la pagina del servizio [10] e le risposte reali (§2.4).
- **Versione italiana della pagina SDMX** all'indirizzo provato `https://www.istat.it/metodi-e-strumenti/web-service-sdmx/`: pagina non trovata. Si è letta la versione inglese [9].
- **Rivaluta e IstatData** [14][15]: le pagine si costruiscono nel browser, che non è stato usato. Sono confermati gli indirizzi, non i contenuti mostrati.
- **Calendario «Aggiornamento banche dati»** [5]: è un calendario Google, non letto.
- **Gazzetta Ufficiale:** non consultata, perché la ricerca si limita alle fonti ISTAT.
