# Professionisti in zona: a mano, con collegamenti o con Google

Ricerca del 4 novembre 2026, fatta da un agente con la skill `research`, su fonti primarie lette tutte il 4/11/2026. Risponde al ticket [04 «Ricerca: trovare professionisti in zona»](../../.scratch/proposte-collaboratore-4-novembre/issues/04-ricerca-professionisti-in-zona.md), punto 9 dell'[audio del 4/11/2026](../../.scratch/proposte-collaboratore-4-novembre/audio-4-novembre.md). Il punto di partenza è la decisione sui **tecnici della casa** del 3/11/2026 ([ARCHITECTURE.md](../../ARCHITECTURE.md), «Richieste del collaboratore di ƎE»): una scheda nell'agenzia con nome, mestiere, telefono e liberatoria, senza account.

**Non è una scelta.** Nessun account, nessuna chiave, nessuna chiamata alle interfacce di Google. Nessuna ricerca eseguita negli albi: sono state lette solo le pagine pubbliche e i moduli di ricerca. Prezzi come li pubblica Google, in dollari USA, IVA esclusa.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## Domanda

Il collaboratore accenna a trovare professionisti in zona «tramite ricerca Google». Tre forme a confronto, in quest'ordine: inserimento a mano, collegamenti esterni, integrazione con Google. Per ciascuna:
- chi verifica e aggiorna i contatti;
- come si distingue un risultato trovato online da un professionista conosciuto dall'agenzia;
- cosa può stare sul sito pubblico e cosa solo nello spazio riservato.

## In breve

- **A mano** è la forma già decisa per i tecnici. Costa zero fuori dal tempo dell'operatore. È l'unica in cui l'agenzia garantisce chi c'è nell'elenco (**Inferenza**).
- **Collegamento a Google Maps:** si fa con un indirizzo web costruito da Connetto, per esempio `https://www.google.com/maps/search/?api=1&query=geometra+Bergamo`. Non serve una chiave [10] (**Fonte**). Non è tra i servizi coperti dalle condizioni di Google Maps Platform [17] (**Fonte**), quindi niente costi né obblighi verso Google per Connetto (**Inferenza**). Connetto non vede i risultati: la persona esce da Connetto.
- **Gli albi ufficiali** servono a **verificare l'iscrizione** di una persona già nota, non a cercare chi c'è in zona. Ingegneri, architetti e geometri si cercano per nome e ordine o collegio, non per indirizzo [18][20][21] (**Fonte**). Il sito dei notai non era raggiungibile il 4/11/2026.
- **Riuso dei dati degli albi.** I dati degli albi sono pubblici per legge [22][23]. L'albo degli architetti avverte però che «ogni uso non autorizzato dei dati» è perseguibile [20] (**Fonte**). Collegarsi alla pagina di ricerca va bene; copiare l'albo dentro Connetto no (**Inferenza**).
- **Integrazione con Google: in Italia valgono le condizioni per lo Spazio economico europeo (SEE).** Valgono dall'8/7/2025 per ogni progetto nuovo con indirizzo di fatturazione nel SEE [14] (**Fonte**). Con le Places API, i contenuti di Google (nomi, indirizzi, telefoni…) [12][13] (**Fonte**):
  - non si possono mostrare **con nessuna mappa**, nemmeno una mappa Google;
  - si possono usare solo per **nove usi permessi**. Nessuno parla chiaramente di «trovare un professionista per una casa».

  Fa eccezione il **Places UI Kit**: un riquadro già pronto di Google, che non ha questi due limiti [12] (**Fonte**).
- **Copiare e conservare non si può.** Le condizioni vietano di «copiare e salvare nomi di attività, indirizzi o recensioni» [11] (**Fonte**). Si possono conservare per sempre solo gli identificativi dei luoghi (`place_id`) [12]; latitudine e longitudine, al massimo 30 giorni [12] (**Fonte**). Un risultato di Google non può quindi diventare da solo una scheda dei tecnici (**Inferenza**).
- **Costi per l'uso di un'agenzia: probabilmente zero, ma servono account e fatturazione** (**Inferenza**). Le soglie gratuite al mese [4] (**Fonte**):

  | Richiesta | Gratis al mese | Dopo la soglia |
  | --- | --- | --- |
  | Ricerca nel Places UI Kit | 10.000 | 1 $ ogni 1.000 |
  | Text Search con telefono e sito web | 1.000 | 35 $ ogni 1.000 |

  Servono sempre un progetto Google Cloud con un conto di fatturazione e una chiave [5][9] (**Fonte**).
- **Google chiede di separare i suoi contenuti dagli altri.** Il cliente deve chiarire all'utente «cosa è contenuto di Google Maps e cosa no» [12] (**Fonte**). È la stessa distinzione che chiede l'audio tra risultato online e professionista dell'agenzia.

## 1. Inserimento a mano

### 1.1 Come funziona

È la scheda del tecnico già decisa il 3/11/2026: l'operatore inserisce nome, mestiere, telefono e liberatoria e la lega alle case. Per i professionisti (notaio, ingegnere, architetto, geometra) basterebbe lo stesso modello, con il mestiere come campo (**Inferenza**).

### 1.2 Chi verifica e aggiorna

- **L'operatore**, che conosce il professionista. Non c'è una fonte esterna che aggiorni la scheda da sola (**Inferenza**).
- **Controllo dell'iscrizione all'albo.** L'operatore può verificarla a mano sulle ricerche ufficiali del §2.2. Basterebbe annotare «iscrizione verificata il …» con ordine e numero (**Inferenza**). Sono gli ordini e i collegi a correggere gli errori degli albi, su segnalazione dell'interessato [20][21] (**Fonte**).
- **Cosa serve per tenerla aggiornata:** la data dell'ultima verifica e un modo semplice per segnare «non più disponibile» senza cancellare la storia delle case (**Inferenza**). Le versioni conservate sono già una regola del dominio (PRODUCT.md §7).

### 1.3 Distinguere dal risultato online

Qui non serve: tutto ciò che è nell'elenco l'ha inserito l'agenzia (**Inferenza**).

### 1.4 Sito pubblico e spazio riservato

- **Riservato:** la scheda completa, con il telefono. «Chiama» passa già da ƎE (decisione del 3/11).
- **Pubblico:** al più una frase generica («lavoriamo con tecnici di fiducia della zona»). Nomi e contatti solo con un consenso esplicito del professionista, oltre la liberatoria per l'uso interno (**Inferenza**; parere privacy, §5).

### 1.5 Costi

Nessun costo esterno. Il costo è il tempo dell'operatore per inserire e ricontrollare (**Inferenza**).

## 2. Collegamenti esterni

### 2.1 Google Maps con un indirizzo di ricerca (Maps URLs)

**Fonte** [10], pagina aggiornata il 2/11/2026:
- «You don't need a Google API key to use Maps URLs.»
- **Forma:** `https://www.google.com/maps/search/?api=1&query=…`. Il parametro `api=1` è obbligatorio. Il testo va codificato e l'indirizzo intero non può superare 2.048 caratteri.
- **Ricerca per categoria:** si passa un termine generico. Google Maps cerca attività vicino al luogo scritto nel testo (l'esempio è `pizza+seattle+wa`); senza luogo, vicino alla posizione di chi apre il link.
- **Luogo preciso:** con `query_place_id` si apre una scheda precisa di Google Maps.
- **Dove si apre:** nell'app Google Maps, se installata, altrimenti nel browser.

**Fonte** [17]: Maps URLs non è nell'elenco dei «Core Services» coperti dalle condizioni di Google Maps Platform.

**Inferenza:**
- Connetto non paga nulla e non accetta condizioni di Google per il solo collegamento. Chi apre il link usa Google Maps alle condizioni di Google per gli utenti (non lette, **Da verificare**).
- Connetto non riceve i risultati: non può filtrarli, conservarli o segnarli. Qui il risultato online è separato per natura, perché la persona esce da Connetto.
- **Il testo del link va a Google.** Meglio la zona o il comune che l'indirizzo esatto della casa del cliente.
- **Costo:** zero. **Limiti:** ordine e qualità dei risultati sono di Google; nessuna verifica dell'iscrizione all'albo.

### 2.2 Gli elenchi ufficiali di ordini e collegi

**Fonte, la legge:**
- **DPR 137/2012, art. 3** [22]:
  - gli albi territoriali «sono pubblici e recano l'anagrafe di tutti gli iscritti»;
  - l'insieme degli albi territoriali forma l'**albo unico nazionale**, tenuto dal consiglio nazionale.
- **Codice privacy, art. 61, c. 2** [23]: i dati che per legge devono stare in un albo «possono essere comunicati a soggetti pubblici e privati o diffusi […] anche mediante reti di comunicazione elettronica».
- **Garante, provvedimento n. 585 del 9/10/2025** [24]. Ha sanzionato un ordine che pubblicava online l'albo con l'indirizzo di residenza degli iscritti: «non è un'informazione generalmente nota al pubblico». Per lo scopo dell'albo bastano i dati che identificano il professionista.

**Fonte, le ricerche ufficiali** (moduli letti, nessuna ricerca eseguita):

| Professione | Dove | Si cerca per | Cosa mostra | Condizioni d'uso lette |
| --- | --- | --- | --- | --- |
| Ingegneri | CNI, «Ricerca ALBO UNICO Ingegneri» [18] | Cognome, nome, ordine provinciale, numero di iscrizione | Colonne: cognome, nome, ordine, numero, data della prima iscrizione | Note legali del sito: materiale riutilizzabile «nel rispetto della normativa in materia di protezione dei dati personali» [19] |
| Architetti | CNAPPC, Albo unico nazionale [20] | Nome, cognome, società, ordine | Non letto (risultati dopo la ricerca) | «Ogni uso non autorizzato dei dati qui rinvenuti è perseguibile a termini di legge»; i dati li corregge solo l'ordine provinciale [20] |
| Geometri | CNGeGL, Anagrafe nazionale [21] | Collegio, cognome, numero d'albo | Non letto | Nessuna condizione di riuso trovata; i dati li variano solo i collegi [21] |
| Notai | Consiglio Nazionale del Notariato, «Trova notaio» | **Da verificare**: secondo i risultati di un motore di ricerca, per regione, provincia, comune e distretto, con una scheda per notaio con indirizzo | Non letto | Non lette: sito non raggiungibile il 4/11/2026 |

**Inferenza:**
- **Ingegneri, architetti e geometri:** gli albi rispondono a «questa persona è iscritta?», non a «chi c'è vicino a questa casa?». Non hanno ricerca per zona; l'ordine provinciale dà al più un'idea della provincia.
- **Notai:** la ricerca per comune sarebbe una vera ricerca «in zona», se confermata.
- **Collegamento solo alla pagina di ricerca.** Il modulo degli architetti funziona con invii interni della pagina (`__doPostBack`), quello dei geometri con moduli della stessa tecnologia. Non si vede un indirizzo stabile per un singolo risultato.
- **Chi aggiorna:** gli ordini e i collegi. Connetto non copia nulla, quindi non c'è niente da aggiornare.
- **Riuso:** collegarsi alla ricerca pubblica è il riuso più leggero. Scaricare o copiare in blocco i dati dentro Connetto contrasta con l'avvertimento del CNAPPC e va oltre lo scopo dell'albo [20][23][24]. Annotare ordine e numero di un professionista con cui l'agenzia lavora già è diverso; va confermato nel parere privacy (§5).

### 2.3 Sito pubblico e spazio riservato

**Inferenza.** I collegamenti non contengono dati personali, se il testo cercato è generico. Possono stare su entrambi:
- sul sito pubblico, per esempio una pagina «Trova un notaio» che rimanda alla ricerca ufficiale;
- nello spazio riservato, accanto ai tecnici della casa, con l'etichetta «cerca fuori da Connetto».

## 3. Integrazione con Google (Places API, versione «New»)

### 3.1 Quali condizioni valgono

**Fonte** [14]:
- dall'8/7/2025 i progetti legati a un conto di fatturazione con indirizzo nel SEE (Italia compresa) seguono **condizioni proprie**: «EEA Terms of Service» [11] e «EEA Service Specific Terms» [12];
- un progetto creato dopo quella data non può restare con le condizioni precedenti;
- prezzi e codici dei servizi non cambiano.

Le condizioni generali mondiali sono diverse: permettono l'uso senza mappa e vietano solo le mappe non Google [16]. Per un'agenzia italiana non valgono (**Inferenza**).

### 3.2 Cosa restituisce una ricerca

**Fonte** [1][2][3]:
- **Text Search:** cerca con un testo libero («notaio a …»).
  - Al massimo 60 risultati in tutto, 20 per pagina.
  - Area preferita fino a 50 km di raggio, o un rettangolo come limite.
  - L'ordine dei risultati non è garantito uguale tra due richieste identiche.
- **Nearby Search:** cerca per **tipo di luogo** in un cerchio fino a 50 km; al massimo 20 risultati.
- **Tipi filtrabili (Tabella A)** utili qui:
  - `electrician`, `plumber`, `painter`, `locksmith`, `roofing_contractor`;
  - `lawyer`, `real_estate_agency`, `consultant`.

  Nella Tabella A **non ci sono** notai, ingegneri, architetti o geometri. `general_contractor` è solo nella Tabella B, che non serve a filtrare.
- **Campi e livello di prezzo.** Si chiede solo ciò che serve, con una «field mask», e si paga il livello più alto chiesto [5]:
  - solo identificativi: Essentials IDs Only;
  - nome, indirizzo, posizione: Pro;
  - telefono, sito web, valutazione: Enterprise;
  - recensioni e riassunti: Enterprise + Atmosphere.

**Inferenza:**
- notai, ingegneri, architetti e geometri si trovano solo con Text Search e un testo libero. Il risultato è la scheda di attività su Google: non dice se la persona è iscritta all'albo;
- per avere telefono e sito serve il livello Enterprise.

### 3.3 Prezzi e soglie gratuite

**Fonte** [4], pagina aggiornata il 2/11/2026. Dollari USA, ogni 1.000 richieste, primo scaglione dopo la soglia. Le soglie valgono al mese, sommando tutti i progetti dello stesso conto di fatturazione.

| Servizio | Gratis al mese | Prezzo dopo la soglia |
| --- | --- | --- |
| Text Search, solo identificativi | illimitato | 0 |
| Text Search o Nearby Search Pro | 5.000 | 32,00 $ |
| Text Search o Nearby Search Enterprise (telefono, sito) | 1.000 | 35,00 $ |
| Text Search o Nearby Search Enterprise + Atmosphere | 1.000 | 40,00 $ |
| Places UI Kit, ricerca (Essentials) | 10.000 | 1,00 $ |
| Places UI Kit Pro (elementi avanzati) | 5.000 | 5,00 $ |

**Fonte:**
- il UI Kit si paga a ogni elemento caricato, non per i dati che mostra [7];
- per la Places API servono la fatturazione attiva sul progetto e una chiave in ogni richiesta [5];
- esiste una «Maps Demo Key» per provare il UI Kit senza dati di pagamento [9]. Le sue condizioni non sono state lette: **Da verificare**.

**Inferenza:**
- un'agenzia che fa qualche decina di ricerche al mese resta sotto tutte le soglie: costo 0 $;
- restano però un account Google Cloud, un conto di fatturazione con carta e la gestione di una chiave;
- se la ricerca stesse sul sito pubblico, ogni visitatore consumerebbe richieste.

### 3.4 Cosa permettono le condizioni SEE

**Fonte** [11][12][13]:
- **Nessuna mappa** (EEA SST, B.15.1). Tranne latitudine, longitudine e `place_id`, i contenuti della Places API non si usano «With any Map». Vuol dire:
  - non mostrarli su, accanto a o visivamente legati a una mappa, **compresa una mappa Google**;
  - non collegarli a una mappa che non sia la loro fonte.
- **Solo usi permessi** (B.15.2 e [13], documento del 4/6/2025). Nove usi in tutto. I più vicini:
  - (2) informazioni sui negozi, uffici o punti di servizio **del cliente stesso**;
  - (4) collegare compiti, note o promemoria a luoghi con un nome, in una funzione di produttività;
  - (5) punti di interesse vicini (scuole, parchi, negozi) come contesto di un **annuncio di vendita o affitto** che l'utente sta guardando.
- **Il Places UI Kit è escluso** da questi due limiti (B.15.3) e funziona con qualsiasi mappa [12][14]. Chi lo usa non deve togliere né alterare l'attribuzione, i link alle condizioni o gli avvisi di Google (B.16.1).
- **Conservazione:**
  - `place_id`: si può conservare (A.3), anche per sempre [6];
  - latitudine e longitudine: al massimo 30 giorni consecutivi (B.15.4);
  - il resto non si conserva (ToS SEE 3.3.2 b).
- **Niente copie** (ToS SEE 3.3.2 a). Vietato «pre-fetch, index, store, reshare, or rehost» i contenuti e «copy and save business names, addresses, or user reviews».
- **Attribuzione** [6]:
  - il logo Google Maps, o la scritta «Google Maps» se manca lo spazio, vicino ai contenuti e sempre leggibile;
  - autore indicato per foto e recensioni;
  - si raccomanda di spiegare come sono ordinati i risultati.
- **Distinguere** (EEA SST, A.2). Il cliente deve chiarire all'utente cosa è contenuto di Google Maps e cosa no.
- **Condizioni di Connetto** (ToS SEE 3.2.2). Devono dire che l'app include funzioni di Google Maps e rimandare alle condizioni aggiuntive di Google Maps e all'informativa privacy di Google.
- **Dati personali** (ToS SEE 4.2 e 4.5). Non si inviano a Google dati personali degli utenti; tra le parti valgono i termini di Google «da titolare a titolare».
- **Modifiche.** Google può cambiare condizioni e prezzi; i cambiamenti importanti valgono 30 giorni dopo l'avviso (ToS SEE 1.3.2).

**Inferenza:**
- **Places API diretta (Text Search o Nearby Search):** un elenco di professionisti per le case gestite non rientra chiaramente in nessuno dei nove usi. L'uso (5) parla di scuole e parchi accanto a un annuncio, non di professionisti per il proprietario. Senza una conferma di Google o un parere, questa strada è a rischio.
- **Places UI Kit:** è la strada compatibile. Connetto mostra il riquadro di Google con la sua attribuzione; non riceve né conserva i dati. Cosa riceve il codice quando si sceglie un risultato (probabilmente l'identificativo del luogo) non è stato letto: **Da verificare**.
- **Da un risultato a una scheda:** un risultato di Google non diventa una scheda dei tecnici copiando nome e telefono. Diventa una scheda solo se l'operatore contatta il professionista e inserisce a mano i dati che lui fornisce, con la liberatoria. Che questo basti a non essere più «contenuto di Google» va confermato (§5).
- **Unico dato conservabile:** il `place_id` di un professionista già in scheda. Con Maps URLs e `query_place_id` permette un «Vedi su Google Maps».

### 3.5 Chi verifica, distinzione, pubblico e riservato

**Inferenza:**
- **Chi verifica:** nessuno dentro Connetto. Le schede di Google le curano le attività stesse e Google; ogni ricerca è nuova, perché non si conservano.
- **Distinzione:** obbligatoria per contratto (§3.4). Il riquadro di Google ha la sua attribuzione e va tenuto separato dai tecnici della casa.
- **Pubblico o riservato:** meglio solo nello spazio riservato, per l'operatore. Sul sito pubblico:
  - i costi crescono con i visitatori;
  - la chiave sta nella pagina, perché il UI Kit la carica nel browser [9];
  - si sommano gli obblighi sulle condizioni del sito.

## 4. Confronto

| | A mano | Collegamenti esterni | Integrazione Google (UI Kit) |
| --- | --- | --- | --- |
| Costo | 0, tempo dell'operatore | 0 | 0 sotto le soglie; servono account, fatturazione e chiave |
| Chi verifica e aggiorna | L'operatore; iscrizione controllabile sugli albi | Google o gli ordini; Connetto non conserva nulla | Google e le attività; Connetto non può conservare i dati |
| Trova chi c'è in zona | Solo chi l'agenzia conosce | Sì con Google Maps; albi solo per nome (notai **Da verificare**) | Sì, solo schede di Google |
| Verifica l'iscrizione all'albo | Sì, se l'operatore la annota | Sì, con la ricerca ufficiale | No |
| Distinzione dal conosciuto | Non serve | Naturale: si esce da Connetto | Obbligatoria; riquadro Google separato |
| Sito pubblico | Solo con consenso del professionista | Sì, link generici | Sconsigliato |
| Spazio riservato | Sì | Sì | Sì |
| Condizioni da rispettare | Privacy della scheda | Note legali degli albi; niente copie in blocco | ToS e SST SEE, attribuzione, niente copie, niente mappa con la Places API |

**Inferenza.** Le tre forme si sommano e non si escludono. Una lettura coerente con le decisioni già prese:
- i tecnici e i professionisti dell'agenzia restano a mano;
- accanto, un link «Cerca in zona su Google Maps» e un link alla ricerca ufficiale dell'albo per verificare l'iscrizione;
- l'integrazione Google aggiunge poco rispetto al link e porta account, fatturazione e condizioni. Ha senso solo se serve vedere i risultati senza uscire da Connetto.

## 5. Dove serve un parere

1. **Privacy (consulente o DPO):**
   - schede di professionisti persone fisiche: base giuridica, informativa e contenuto della liberatoria;
   - consenso per mostrarle sul sito pubblico;
   - annotare ordine e numero d'albo presi dalla ricerca ufficiale.
2. **Google o un avvocato:**
   - se un elenco di professionisti in zona per le case gestite rientra negli usi permessi della Places API nel SEE [13];
   - se i dati raccolti dal professionista dopo averlo trovato su Google restano «contenuto di Google» [11].
3. **Avvocato:** se indicare un professionista al proprietario crea per l'agenzia una responsabilità sulla scelta. Riguarda anche la separazione dei ruoli descritta nel punto 10 dell'audio.

## 6. Domande aperte

1. **Chi deve poter cercare:** solo l'operatore, o anche proprietario e inquilino nel loro spazio? Cambia costi, condizioni e cosa mostrare.
2. **Basta un collegamento?** Un link che apre Google Maps o l'albo, uscendo da Connetto, oppure servono i risultati dentro Connetto (UI Kit, con account Google)?
3. **Quali professioni:** solo i mestieri dei tecnici, o anche notai, ingegneri, architetti e geometri? Per questi ultimi Google non ha un tipo filtrabile e la verifica passa dagli albi.
4. **Notai:** rileggere «Trova notaio» del Consiglio Nazionale del Notariato e le sue condizioni quando il sito torna raggiungibile.

## Fonti

Tutte lette il 4/11/2026.

1. Google, «Text Search (New)»: https://developers.google.com/maps/documentation/places/web-service/text-search
2. Google, «Nearby Search (New)»: https://developers.google.com/maps/documentation/places/web-service/nearby-search
3. Google, «Place types (New)», Tabelle A e B, aggiornata il 2/11/2026: https://developers.google.com/maps/documentation/places/web-service/place-types
4. Google, «Google Maps Platform core services pricing list» (listino mondiale), aggiornata il 2/11/2026: https://developers.google.com/maps/billing-and-pricing/pricing
5. Google, «Places API Usage and Billing», aggiornata il 2/11/2026: https://developers.google.com/maps/documentation/places/web-service/usage-and-billing
6. Google, «Policies and attributions for Places API»: https://developers.google.com/maps/documentation/places/web-service/policies
7. Google, «Places UI Kit overview» (JavaScript), aggiornata il 2/11/2026: https://developers.google.com/maps/documentation/javascript/places-ui-kit/overview
8. Google, «Place Search Element», aggiornata il 2/11/2026: https://developers.google.com/maps/documentation/javascript/places-ui-kit/place-search
9. Google, «Get started with Places UI Kit», aggiornata il 2/11/2026: https://developers.google.com/maps/documentation/javascript/places-ui-kit/get-started
10. Google, «Get started with Maps URLs», aggiornata il 2/11/2026: https://developers.google.com/maps/documentation/urls/get-started
11. Google, «Google Maps Platform EEA Terms of Service», ultima modifica 26/8/2026, sezioni 1.3.2, 3.2.2, 3.2.4, 3.3.2, 4.2, 4.5, definizioni: https://cloud.google.com/terms/maps-platform/eea
12. Google, «Google Maps Platform EEA Service Specific Terms», ultima modifica 28/10/2026, sezioni A.2, A.3, B (definizione «With any Map»), B.15, B.16: https://cloud.google.com/terms/maps-platform/eea/maps-service-terms
13. Google, «Places API Permitted Uses for Customers with a Billing Address in the EEA», ultima modifica 4/6/2025: https://cloud.google.com/terms/maps-platform/eea-places-api-permitted-uses
14. Google, «EEA FAQ» per Google Maps Platform, aggiornata il 2/11/2026: https://developers.google.com/maps/comms/eea/faq
15. Google, «Places API adjustments for EEA customers»: https://developers.google.com/maps/comms/eea/places
16. Google, «Google Maps Platform Service Specific Terms» (versione mondiale, per confronto), ultima modifica 28/10/2026, sezioni 14 e 15: https://cloud.google.com/maps-platform/terms/maps-service-terms
17. Google, «Google Maps Platform Core Services Summary», ultima modifica 28/10/2026: https://cloud.google.com/maps-platform/terms/maps-services
18. Consiglio Nazionale degli Ingegneri, «Albo unico»: https://www.cni.it/albo-unico e modulo «Ricerca ALBO UNICO Ingegneri»: https://areariservata.tuttoingegnere.it/PortaleCNI/it/albounico.wp
19. Consiglio Nazionale degli Ingegneri, «Note legali»: https://www.cni.it/note-legali
20. CNAPPC, «Albo Unico Nazionale» su AWN (ultimo aggiornamento della pagina 8/2/2022): https://www.awn.it/servizi/albo-unico-nazionale e modulo di ricerca: https://www.cnappc.it/
21. Consiglio Nazionale Geometri e Geometri Laureati, «Anagrafe nazionale»: https://www.cng.it/web/guest/anagrafe-nazionale e modulo di ricerca: https://anagrafe.cng.it/anagrafe/geometri.aspx
22. DPR 7/8/2012 n. 137, art. 3 (Albo unico nazionale), Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2012-08-07;137~art3
23. D.lgs. 30/6/2003 n. 196 (Codice privacy), art. 61, testo in vigore dal 19/9/2018, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196~art61
24. Garante per la protezione dei dati personali, provvedimento n. 585 del 9/10/2025, doc. web 10192784: https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10192784

## Fonti non raggiunte

- **Consiglio Nazionale del Notariato** (www.notariato.it): errore 503 e certificato non verificabile su tutte le pagine provate («Trova notaio», elenco dei notai, risultati). Campi di ricerca e contenuto delle schede sono noti solo dai risultati di un motore di ricerca, non usati come fatto. Condizioni di riuso non lette.
- **Geometri:** nessuna condizione di riuso trovata sulle pagine dell'anagrafe.
- **Ingegneri e architetti:** non aperte le schede dei singoli iscritti, per non leggere dati di persone reali. Cosa mostra la scheda è quindi non verificato.
- **Places UI Kit:** la pagina sulle regole di attribuzione proprie del UI Kit ha dato errore 404. Non lette le condizioni della Maps Demo Key né il contenuto dell'evento di scelta (`gmp-select`).
- **Google Maps, condizioni aggiuntive per gli utenti** (https://maps.google.com/help/terms_maps/): citate dalle condizioni SEE ma non lette.
- **Prezzi in euro e IVA:** il listino è solo in dollari; come vengono fatturati a un cliente italiano non è stato letto.
