# Dove gira la piattaforma e dove stanno i dati

Ricerca del 30 ottobre 2026, svolta da un agente in background con la skill `research`, su fonti primarie, con la data di lettura per ogni fonte. Risponde al ticket [03 «Ricerca: dove far girare la piattaforma e tenere i dati»](../../.scratch/architettura-percorso-1/issues/03-ricerca-dove-gira-e-dati.md) e serve al ticket [08 «Com'è fatta la piattaforma e dove gira»](../../.scratch/architettura-percorso-1/issues/08-forma-e-dove-gira.md).

**Non è un parere legale e non è una scelta.** Dice cosa scrivono oggi le pagine ufficiali dei fornitori e le norme. Nessun account creato, nessuna prova gratuita, nessun modulo compilato, nessun fornitore contattato. Ruoli, contratti e trasferimenti in generale sono già in [privacy-dati.md](privacy-dati.md) (§5 e §8): qui non si ripetono.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato. I numeri fra parentesi quadre rimandano alle Fonti. Prezzi senza IVA, nella valuta del fornitore.

Ipotesi per i costi (**Inferenza**): il pilota ha una sola agenzia, circa 100–200 case e qualche centinaio di persone ([PRODUCT.md](../../PRODUCT.md) §10.10). Il database resta sotto 1 GB; i file (documenti e foto) nell'ordine di qualche GB; il traffico è basso.

## In breve

- **Tutte e tre le forme possono tenere i dati principali nell'UE**, con regione scelta all'inizio. La differenza sta in ciò che esce dalla regione: assistenza, accessi remoti, registri, posta e sub-responsabili. Fra i fornitori letti, **Firebase è l'unico con un pezzo essenziale fuori dall'UE per costruzione**: «Firebase Authentication» gira solo da data center negli Stati Uniti [15].
- **Servizio tutto in uno (Supabase, Firebase).** Database, accesso, file e funzioni pronti, e meno codice da scrivere. Il contratto sui dati è standard e si accetta con le condizioni del servizio [6][21]. Ci sono sub-responsabili statunitensi e trasferimenti con clausole tipo o con il Data Privacy Framework [4][7][21]. Supabase include l'accesso con un codice di sei cifre via email, ma per l'uso reale serve un servizio di posta proprio [11][12]. **I backup di Supabase non contengono i file** [8].
- **Applicazione unica su un servizio gestito (Scalingo, Clever Cloud).** Sono aziende francesi con dati in Francia e sub-responsabili quasi tutti europei [26][34]. Database PostgreSQL gestito con backup giornalieri; il ripristino a un momento preciso è incluso in Scalingo [27], su richiesta in Clever Cloud [33]. L'accesso con codice non c'è: lo scrive chi costruisce l'applicazione. I file vanno in un archivio a parte, compatibile S3 [30][35].
- **Server virtuale (Hetzner, OVHcloud).** Costa meno (da circa 4–12 € al mese il server) e l'azienda è europea [37][44]. Il contratto di Hetzner prevede il trattamento solo nell'UE, se si sceglie una sede UE [40][41]; OVHcloud ammette accessi remoti di affiliate, anche in Canada e Regno Unito [45][46]. In cambio, sistema, sicurezza, database, backup coerenti, prove di ripristino e aggiornamenti restano a chi mantiene la piattaforma. Il backup del fornitore è una copia del disco, una volta al giorno [38][44].
- **Costo indicativo del pilota** (**Inferenza**, con ambiente di prova): Supabase circa 35 $ al mese, 140 $ con il ripristino a un momento preciso. Scalingo circa 36 € più l'archivio dei file. Hetzner circa 27 € più il lavoro di manutenzione. Firebase e Clever Cloud: **Da verificare**. In tutte le forme la posta per i codici di accesso è un costo a parte ([ticket 11](../../.scratch/architettura-percorso-1/issues/11-servizi-esterni.md)).
- **Andarsene.** Con PostgreSQL (Supabase, Scalingo, Clever Cloud, server virtuale) i dati si esportano in un formato standard [8][28]. Firestore è un database a documenti proprio di Google [24]: per uscirne si riscrivono i dati e il codice che li legge (**Inferenza**).
- **Certificazioni dichiarate:** ISO 27001 per tutti i fornitori letti [14][15][32][36][42][47]; SOC 2 per Supabase e Firebase [14][15]; HDS (dati sanitari, Francia) per Scalingo e Clever Cloud [32][36]; BSI C5 per Hetzner [42]. Sono dichiarazioni del fornitore: certificati e perimetro non letti (**Da verificare**).

## 1. Le regole in breve

Il dettaglio è in [privacy-dati.md](privacy-dati.md), §5 (accordi) e §8 (fornitori fuori dall'UE). Qui solo ciò che serve a confrontare i fornitori.

- **Fonte (GDPR, art. 28, par. 1–2)** [1]. Il titolare ricorre solo a responsabili che presentino «garanzie sufficienti». Il responsabile non ricorre a un altro responsabile senza autorizzazione scritta, specifica o generale. Con l'autorizzazione generale informa il titolare delle modifiche previste, «dando così al titolare del trattamento l'opportunità di opporsi». Il titolare deve conoscere l'identità di tutti i sub-responsabili (EDPB, parere 22/2024, letto il 19/10/2026 per privacy-dati.md).
- **Fonte (GDPR, art. 32, par. 1, lett. c–d)** [1]. Fra le misure di sicurezza: «la capacità di ripristinare tempestivamente la disponibilità e l'accesso dei dati personali in caso di incidente fisico o tecnico» e «una procedura per testare, verificare e valutare regolarmente l'efficacia» delle misure. **Inferenza:** il backup da solo non basta; serve anche una prova di ripristino documentata, in qualunque forma.
- **Fonte (GDPR, artt. 44–49; Commissione)** [1][2]. Gli Stati Uniti sono adeguati solo per le organizzazioni aderenti all'EU-US Data Privacy Framework; Regno Unito, Canada e Svizzera sono adeguati [2]. Anche l'accesso remoto da un paese terzo, per esempio per assistenza, è un trasferimento (EDPB, raccomandazioni 01/2020, lette il 19/10/2026 per privacy-dati.md).
- **Inferenza: cosa si guarda per ogni fornitore.** Chi firma e di quale paese; come si accetta il contratto; dove stanno database, file e backup; chi accede da fuori dall'UE e con quale strumento; come si viene avvisati dei nuovi sub-responsabili e con quale preavviso; cosa succede ai dati alla fine.

Nella catena del pilota ƎE è titolare e chi mantiene la piattaforma è responsabile (modello A o B di privacy-dati.md, §2). Il fornitore scelto qui è quindi un **sub-responsabile** di ƎE (**Inferenza**), e va nell'elenco dei fornitori per ƎE (mappa, «Non ancora specificato»).

## 2. Forma 1: servizio gestito «tutto in uno»

Database, accesso degli utenti, file e funzioni sul server sono già pronti; sopra si mette una pagina web.

### 2.1 Supabase

- **Dove stanno i dati (Fonte).** Si sceglie una regione per progetto; nell'UE: Irlanda, Parigi, Francoforte, Stoccolma. Londra e Zurigo non sono UE, e la regione generica «Europa» può finire in una qualsiasi regione europea con capacità libera [3][5]. Database, accesso, file e backup stanno nella regione scelta. Possono uscirne i dati dell'account e della fatturazione, la telemetria, i registri e i metadati. I registri sono «ingested and stored at EU-based data centers». Il personale dell'assistenza, distribuito nel mondo, può accedere ai dati su richiesta o per incidenti di sicurezza, con accessi registrati. I file possono passare da una rete di distribuzione globale, secondo la configurazione [4]. L'infrastruttura è AWS [7].
- **Contratto sui dati (Fonte).** Il DPA fa parte delle condizioni del servizio: accettare il contratto vale come firma delle clausole tipo [6]. Controparte: Supabase Pte. Ltd., Singapore. Trasferimenti verso Singapore e Stati Uniti con clausole tipo 2021/914, moduli 2 e 3, più misure aggiuntive come cifratura e controlli di accesso [4][6]. Violazioni comunicate senza ingiustificato ritardo e, se possibile, entro 48 ore. Alla fine del contratto, copia dei dati su richiesta entro 30 giorni, poi cancellazione [6].
- **Sub-responsabili (Fonte).** Elenco del 12/10/2026 [7], con iscrizione agli avvisi, preavviso di almeno 30 giorni e opposizione entro 5 giorni dall'avviso [6]. Su 22 voci, 20 sono negli Stati Uniti, fra cui AWS, Cloudflare, Google, Vercel e Upstash per l'hosting, Sentry, OpenAI e altri strumenti di assistenza e comunicazione. Una è a Singapore, una in Ungheria (ConfigCat) [7]. **Da verificare:** quali di questi vedono i dati dei progetti e quali solo i dati di chi gestisce l'account.
- **Backup e ripristino (Fonte)** [8]. Piano gratuito: nessun backup automatico, solo esportazioni manuali consigliate. Piano Pro: backup giornalieri conservati 7 giorni. Ripristino a un momento preciso (PITR) a pagamento: circa 100 $ al mese per 7 giorni di storia, granularità al secondo, perdita massima di circa 2 minuti; richiede almeno la taglia di calcolo Small. Durante il ripristino il progetto non è raggiungibile. **I file non sono nei backup**: un backup contiene solo i metadati dei file, quindi un file cancellato dopo il backup non torna.
- **File privati (Fonte).** I bucket sono privati per impostazione e ogni operazione passa dai permessi sulle righe; si scarica con il token dell'utente o con un collegamento firmato a tempo [13].
- **Accesso con codice (Fonte).** Incluso: codice di sei cifre via email, scadenza predefinita 1 ora, una richiesta al minuto [11]. La posta predefinita manda 2 messaggi l'ora, solo ai membri del team, senza garanzie: per l'uso reale serve un servizio di posta proprio [12]. MFA di base inclusa; via telefono 75 $ al mese [9].
- **Costo (Fonte)** [9][10]. Piano Pro da 25 $ al mese per organizzazione, con 10 $ di calcolo che coprono una istanza Micro (1 GB di RAM, circa 10 $). Inclusi 8 GB di disco, 100 GB di file, 100.000 utenti attivi al mese, 250 GB di traffico. Il piano gratuito si sospende dopo una settimana di inattività. **Inferenza:** per il pilota circa 25 $ al mese, circa 35 $ con un secondo progetto di prova. Con il ripristino a un momento preciso servono altri circa 105 $ (PITR più taglia Small). **Da verificare:** se ogni progetto in più paga il proprio calcolo.
- **Ambiente di prova (Fonte).** Rami di prova a 0,01344 $ l'ora per ramo [9], oppure un secondo progetto (**Inferenza**).
- **Andarsene (Fonte/Inferenza).** Il database è PostgreSQL e si esporta con il comando `db dump` della riga di comando [8]. Regole di accesso e funzioni legate alle convenzioni di Supabase vanno riscritte altrove (**Inferenza**).
- **Certificazioni dichiarate (Fonte).** SOC 2 Type 2, ISO 27001, HIPAA con accordo apposito [14].

### 2.2 Firebase (Google)

- **Dove stanno i dati (Fonte).** Firestore offre regioni UE, fra cui Milano (`europe-west8`) e Torino (`europe-west12`), e una multi-regione `eur3`; la sede non si cambia dopo la creazione [17]. Le Cloud Functions partono da `us-central1` se non si indica una regione [16]. **«The Firebase Authentication service is run only from US data centers»** [15]. I servizi senza scelta di sede possono trattare dati ovunque Google abbia strutture [15].
- **Contratto sui dati (Fonte).** «Firebase Data Processing and Security Terms», aggiornati il 21/8/2024 [21]. Google aderisce al Data Privacy Framework; altrimenti valgono le clausole tipo [15][21]. Nuovi sub-responsabili con 30 giorni di preavviso; chi non è d'accordo può recedere entro 90 giorni [21]. Violazioni comunicate «promptly and without undue delay»; a fine contratto, cancellazione entro 180 giorni al massimo, dopo un periodo di recupero fino a 30 giorni [21].
- **Sub-responsabili (Fonte).** La pagina Firebase, aggiornata il 23/9/2021, elenca Accenture ed EPAM per l'assistenza e Fastly per Hosting, tutte negli Stati Uniti, e rimanda all'elenco di Google Cloud [22]. **Da verificare:** l'elenco Google Cloud, non letto.
- **Backup e ripristino (Fonte).** Backup programmati giornalieri o settimanali, fino a 14 settimane, solo nel piano a consumo Blaze; il ripristino crea un nuovo database [18]. Ripristino a un momento preciso disattivato per impostazione: 7 giorni, una versione al minuto, pagato a spazio occupato [19]. **Da verificare:** backup dei file in Cloud Storage.
- **File privati.** Cloud Storage con regole di sicurezza. **Da verificare:** non letto in dettaglio.
- **Accesso con codice (Fonte).** Accesso senza password con un collegamento via email; codici numerici via email non indicati [23]. SMS a pagamento [20].
- **Costo (Fonte)** [20]. Accesso gratuito fino a 50.000 utenti attivi al mese. Firestore gratuito fino a 1 GiB e 50.000 letture al giorno. Funzioni e file richiedono il piano Blaze; le quote gratuite dei file valgono solo in alcune regioni. **Inferenza:** per il pilota pochi euro al mese, ma non stimabile senza il calcolatore. **Da verificare:** prezzi in regione UE.
- **Andarsene (Fonte/Inferenza).** Firestore è «a cloud-hosted, NoSQL database», a documenti, con transazioni ACID [24]. Uscirne vuol dire riprogettare i dati e riscrivere il codice che li legge (**Inferenza**).
- **Certificazioni dichiarate (Fonte).** ISO 27001, SOC 1, 2 e 3 per tutti i servizi; ISO 27017 e 27018 per alcuni, fra cui Authentication e Firestore [15].
- **Inferenza.** L'accesso è il cuore del percorso 1, perché ogni accesso nasce dal rapporto con la casa (§7). Con Firebase gli indirizzi email di proprietari e inquilini passerebbero dagli Stati Uniti a ogni accesso: un trasferimento sistematico, lecito con il DPF, ma da dichiarare nell'informativa e da rivalutare se il DPF cadesse. **Da verificare:** se il prodotto Google Cloud Identity Platform offre l'accesso con sede UE.

## 3. Forma 2: un'applicazione unica su un servizio che la esegue

Il servizio esegue l'applicazione scritta da chi costruisce la piattaforma e fornisce un database PostgreSQL gestito. Sistema operativo, ambiente di esecuzione e database li aggiorna il fornitore (**Inferenza**).

### 3.1 Scalingo

- **Dove stanno i dati (Fonte).** Due regioni a Parigi su 3DS Outscale; quella qualificata SecNumCloud solo su richiesta [25]. Hosting nei data center Outscale di Pantin e Magny-les-Hameaux; anche i backup del database e dei registri restano in Francia [26]. I backup sono cifrati e copiati nelle tre zone della regione [27].
- **Contratto sui dati (Fonte)** [26]. Il DPA è parte integrante del contratto, con firma elettronica; legge francese. Per i dati ospitati del cliente l'unico sub-responsabile è Outscale (art. 13); opposizione entro 8 giorni di calendario. Violazioni comunicate «as soon as possible». Restituzione entro 30 giorni dalla fine.
- **Sub-responsabili (Fonte)** [26]. Outscale e Brevo (Francia), Surfe (Francia), Pipedrive (Estonia, con clausole tipo), Stripe (Irlanda), Cloudflare (Stati Uniti o Europa secondo l'origine della richiesta, DPF), Intercom e PayPal (Stati Uniti, clausole tipo). **Inferenza:** quelli fuori dall'UE riguardano assistenza, rete e pagamenti di Scalingo, non l'hosting.
- **Backup e ripristino (Fonte)** [27][28]. Piano Starter: 7 backup giornalieri e 4 settimanali, ripristino a un momento preciso degli ultimi 7 giorni, ultimi 10 backup manuali. Piano Business: 7 giornalieri, 8 settimanali, 12 mensili, ripristino fino a 14 giorni sulle risorse dedicate. I backup si scaricano dal pannello o dalla riga di comando.
- **File privati (Fonte).** Il disco dell'applicazione è temporaneo e si perde a ogni riavvio. Scalingo consiglia un archivio esterno compatibile S3, per esempio Outscale OOS, con collegamenti firmati [30]. **Inferenza:** è un contratto e un sub-responsabile in più. **Da verificare:** prezzo e backup dell'archivio.
- **Accesso con codice.** Non incluso: si costruisce nell'applicazione, con una libreria e un servizio di posta (**Inferenza**).
- **Costo (Fonte)** [29]. Contenitore S (256 MB) 7,20 €, M (512 MB) 14,40 € al mese. PostgreSQL Starter 512M (10 GB, SLA 98%, un nodo) 7,20 €; Business 512M (due nodi, SLA 99,96%) 20 €. **Inferenza:** circa 22 € al mese per il servizio (M più Starter), circa 36 € con l'ambiente di prova (S più Starter), più l'archivio dei file.
- **Ambiente di prova (Fonte).** Si crea una seconda applicazione sullo stesso repository; le copie temporanee per ogni modifica hanno un database nuovo, senza i dati dell'originale [31].
- **Andarsene (Fonte).** Backup scaricabili e `pg_dump` [28]; l'applicazione è codice nostro (**Inferenza**).
- **Certificazioni dichiarate (Fonte).** ISO 27001:2022 e HDS 2.0; SecNumCloud è del data center, solo nella regione riservata [32].

### 3.2 Clever Cloud

- **Dove stanno i dati (Fonte).** I data center si scelgono alla creazione; nella regione «Paris Clever Cloud» lavorano Green Data, Telehouse, nLighten ed Etix Everywhere; altre regioni sono di Scaleway, Cloud Temple (SecNumCloud), OVHcloud e, fuori dall'UE, Ionos (Londra) e Oracle (Arabia Saudita) [34]. Clever Cloud dichiara che i dati non sono soggetti al Cloud Act [36].
- **Contratto sui dati.** Esiste un DPA linkato dal sito [36]. **Da verificare:** testo, firma, preavviso e notifica delle violazioni, non letti.
- **Sub-responsabili (Fonte).** Elenco versione 1.5 del 5/11/2025 [34]. Assistenza Crisp (Francia) e Twilio (Stati Uniti, telefono). Comunicazione Brevo e Lemlist (Francia). Pagamenti Stripe (Irlanda). CRM Pipedrive (Stati Uniti). Più i data center della regione scelta.
- **Backup e ripristino (Fonte)** [33]. Backup giornaliero gratuito con 7 giorni di conservazione; frequenza e durata si cambiano chiedendo all'assistenza. Ripristino a un momento preciso con pgBackRest, attivato solo su richiesta. Il piano DEV gratuito è solo per prove, senza backup.
- **File privati (Fonte).** Cellar, archivio compatibile S3 dello stesso fornitore, con collegamenti firmati e versioni dei file [35]. **Da verificare:** sede di Cellar e prezzo.
- **Accesso con codice.** Non incluso (**Inferenza**, come Scalingo).
- **Costo.** **Da verificare:** il listino ufficiale si carica solo nel browser e non si è potuto leggere.
- **Andarsene (Fonte).** I backup sono disponibili nel pannello [33]; PostgreSQL e S3 sono formati standard (**Inferenza**).
- **Certificazioni dichiarate (Fonte).** ISO 27001:2022 e HDS; SecNumCloud in corso, intanto disponibile tramite Cloud Temple [36].

## 4. Forma 3: un server virtuale

Il fornitore dà una macchina virtuale; tutto il resto lo installa e lo tiene chi mantiene la piattaforma.

### 4.1 Hetzner Cloud

- **Dove stanno i dati (Fonte).** Sedi UE a Falkenstein e Norimberga (Germania) e Helsinki (Finlandia) [37]. Il contratto prevede il trattamento solo nell'UE o nel SEE; un trasferimento in un paese terzo richiede il consenso preventivo del cliente [40]. Con sede UE i dati dei server sono trattati solo nell'UE, e anche l'assistenza è nell'UE [41].
- **Contratto sui dati (Fonte).** Hetzner Online GmbH, Germania. Il DPA si conclude nell'account con una casella da spuntare, dopo aver indicato tipi di dati e interessati; Hetzner non firma DPA individuali [40][48]. Versione 1.1 del 10/2/2025 [40]. Opposizione ai nuovi sub-responsabili entro 14 giorni [40].
- **Sub-responsabili (Fonte)** [41]. Versione 1.0 del 6/8/2024: Hetzner Finland Oy per la Finlandia; società e colocation negli Stati Uniti e a Singapore solo per i server in quelle sedi.
- **Backup e ripristino (Fonte)** [38][39]. Backup automatico giornaliero del disco, 7 copie, al 20 % del prezzo del server. Non include i volumi aggiuntivi. Le istantanee manuali si pagano a GB. **Inferenza:** una copia del disco presa mentre il database scrive non garantisce un database coerente. Per il ripristino a un momento preciso servono backup del database configurati da noi, copiati altrove e provati.
- **File privati (Fonte).** Object Storage compatibile S3 nelle stesse sedi UE: 6,49 € al mese con 1 TB di spazio e 1 TB di traffico in uscita, e collegamenti firmati a tempo [43].
- **Accesso con codice.** Non incluso (**Inferenza**).
- **Costo (Fonte)** [37]. CPX02 (1 vCPU, 1 GB, 20 GB) 6,49 €; CPX12 (1 vCPU, 2 GB, 40 GB) 11,99 € al mese. La pagina mostra «currently unavailable» sui pulsanti di creazione (**Da verificare** la disponibilità). **Inferenza:** circa 27 € al mese (CPX12, backup, archivio file, server di prova CPX02).
- **Andarsene (Inferenza).** Tutto è software standard installato da noi: facile da spostare, se è documentato.
- **Certificazioni dichiarate (Fonte).** ISO/IEC 27001:2022, BSI C5 Type 2 [42].

### 4.2 OVHcloud VPS

- **Dove stanno i dati (Fonte).** La sede si sceglie all'ordine; OVHcloud non la cambia senza approvazione del cliente. OVHcloud e i sub-responsabili possono trattare i dati da remoto per sicurezza e manutenzione [45]. **Da verificare:** le sedi UE del VPS (la pagina letta si interrompe prima dell'elenco [44]).
- **Contratto sui dati (Fonte).** DPA in italiano, versione del 17/10/2025, controparte per l'Italia OVH SRL, Milano [45][46]. Nuovi sub-responsabili con 30 giorni di preavviso se affiliati nell'UE o in paesi adeguati, 90 negli altri casi; opposizione motivata entro 15 giorni [45]. Alla fine del servizio i contenuti si cancellano, **compresi i backup**; salvarli prima tocca al cliente [45].
- **Sub-responsabili (Fonte)** [46]. Versione del 16/10/2025: affiliate in diversi paesi UE; OVH Hebergement (Canada) e OVH Limited (Regno Unito) per tutti i servizi, in paesi con decisione di adeguatezza [2]; affiliate in Australia, India e Singapore solo per i data center in Asia-Pacifico o se previsto. Più le società dei data center.
- **Backup e ripristino (Fonte)** [44]. Backup giornaliero del giorno prima incluso, replicato tre volte nello stesso data center, dischi aggiuntivi esclusi. Backup Premium con ripristino degli ultimi 7 giorni da 1,10 € al mese; istantanee da 0,30 € al mese. **Inferenza:** come per Hetzner, i backup coerenti del database li configura chi mantiene la piattaforma.
- **File privati.** **Da verificare:** archivio a oggetti di OVHcloud, non letto.
- **Costo (Fonte)** [44]. VPS-1 (2 vCore, 4 GB, 40 GB) da 3,81 € al mese; VPS-2 da 7,21 €. Sono prezzi «da», legati con buona probabilità a un impegno di 12 mesi (**Da verificare**).
- **Certificazioni dichiarate (Fonte).** ISO 27001 e 27017, rapporti ISO 27018, con i VPS nel perimetro [47].

## 5. Confronto

**Inferenza** costruita sulle sezioni 2–4; i costi seguono le ipotesi in testa.

| | Dati nell'UE | Backup e ripristino a un momento | File privati | Accesso con codice | Costo indicativo al mese |
|---|---|---|---|---|---|
| **Supabase** | Sì, con eccezioni: assistenza, account, telemetria [4] | Giornalieri 7 giorni; PITR circa 100 $; **file esclusi** [8] | Inclusi [13] | Incluso, con posta propria [11][12] | circa 35 $ con prova; circa 140 $ con PITR |
| **Firebase** | Database sì; **accesso solo negli Stati Uniti** [15] | Fino a 14 settimane; PITR 7 giorni [18][19] | Inclusi | Collegamento via email [23] | Da verificare |
| **Scalingo** | Sì, Francia; extra-UE solo assistenza e pagamenti [26] | 7 giornalieri, 4 settimanali; PITR 7 giorni [27] | Archivio esterno [30] | Da costruire | circa 36 € più archivio |
| **Clever Cloud** | Sì, se si sceglie Parigi [34] | 7 giorni; PITR su richiesta [33] | Cellar, stesso fornitore [35] | Da costruire | Da verificare |
| **Hetzner** | Sì, solo UE da contratto [40][41] | Copia del disco 7 giorni; il resto lo facciamo noi [38] | Object Storage [43] | Da costruire | circa 27 € più lavoro |
| **OVHcloud** | Sede scelta; accessi remoti da paesi adeguati [45][46] | Giornaliero; 7 giorni a pagamento [44] | Da verificare | Da costruire | da circa 5 € più lavoro |

| | Lavoro di manutenzione | Ambiente di prova | Andarsene | Certificazioni dichiarate |
|---|---|---|---|---|
| **Tutto in uno** | Basso; regole di accesso da scrivere con cura | Ramo o secondo progetto | Supabase: PostgreSQL standard. Firebase: riprogettare i dati | ISO 27001, SOC 2 |
| **Applicazione unica** | Medio: il codice e la sua sicurezza; sistema e database li cura il fornitore | Seconda applicazione | Facile: PostgreSQL e S3 | ISO 27001, HDS |
| **Server virtuale** | Alto: sistema, aggiornamenti, sicurezza, database, backup, prove di ripristino, avvisi di guasto | Secondo server | Facile se documentato | ISO 27001 (più C5 per Hetzner) |

## 6. Cosa ne deriva per la scelta

Solo **Inferenze**: la scelta è dell'utente nel ticket 08.

1. **Il criterio che separa davvero le forme è chi fa il lavoro di ogni giorno**, non il prezzo: le differenze di costo sono di qualche decina di euro al mese. Il server virtuale costa poco ma sposta su chi mantiene la piattaforma l'obbligo dell'art. 32 di ripristinare e di provare il ripristino [1]. È la forma con più compiti che possono restare scoperti.
2. **Nessun backup di fornitore conserva le versioni dei documenti al posto nostro.** Le «versioni conservate» (§7) vanno nella piattaforma stessa, per esempio non cancellando mai i file e tenendo le versioni. I backup servono solo per i guasti. Su Supabase questo conta il doppio, perché i file non sono nei backup [8].
3. **L'accesso con codice è incluso solo nella forma 1.** Nelle forme 2 e 3 lo scrive chi costruisce, con una libreria matura e attenzione a scadenza, tentativi e registri. In tutte le forme serve un servizio di posta, che è un sub-responsabile in più ([ticket 11](../../.scratch/architettura-percorso-1/issues/11-servizi-esterni.md)).
4. **Dati nell'UE:** con Scalingo, Clever Cloud e Hetzner l'elenco dei sub-responsabili che toccano i dati ospitati è corto ed europeo. Con Supabase serve una valutazione dei trasferimenti verso Stati Uniti e Singapore, sostenuta dalle clausole tipo; con Firebase il trasferimento dell'accesso è sistematico.
5. **Cosa non diventa difficile dopo** (mappa, Note). Il permesso legato al rapporto con la casa e al tecnico per incarico è codice nostro in tutte le forme. Nella forma 1 si esprime anche con le regole sulle righe del database [13]. Più agenzie, l'app iPhone e la vista 3D funzionano con ognuna delle forme, se il servizio espone un'interfaccia propria. Lo spazio delle bollette chiuso al personale di ƎE dipende da come si separano permessi e chiavi, non dalla forma (mappa, «Non ancora specificato»).

## 7. Dove serve un parere professionale

1. **Trasferimenti verso Stati Uniti e Singapore** (Supabase, Firebase e i sub-responsabili statunitensi degli altri): se clausole tipo o DPF più le misure dichiarate bastano per i dati di proprietari e inquilini, e cosa scrivere nell'informativa (privacy-dati.md, §8 e §12).
2. **Contratti standard «prendere o lasciare»** (Hetzner non firma DPA individuali [48]; Supabase e Firebase si accettano con le condizioni [6][21]): se soddisfano l'art. 28, par. 3, per la catena ƎE → chi mantiene la piattaforma → fornitore. Vanno controllati anche i preavvisi brevi per opporsi ai sub-responsabili (5 giorni per Supabase, 8 per Scalingo).
3. **Cancellazione dei backup alla fine del servizio** (OVHcloud [45]) e restituzione dei dati: come coordinarle con la conservazione di ricevute e documenti, fino a 10 anni per le scritture di ƎE (privacy-dati.md, «In breve» e §6).
4. **Misure di sicurezza e prova di ripristino** adeguate all'art. 32 per il pilota: un parere tecnico sulla sicurezza, non legale.

## 8. Domande aperte

- Elenco dei sub-responsabili di Google Cloud per Firebase; possibilità di accesso con sede UE (Identity Platform).
- Testo del DPA di Clever Cloud; listini di Clever Cloud e di Firebase in regione UE.
- Prezzo e backup dell'archivio file per Scalingo (Outscale OOS); sede di Cellar; archivio a oggetti di OVHcloud.
- Quali sub-responsabili di Supabase vedono i dati dei progetti; se ogni progetto in più paga il proprio calcolo.
- Disponibilità reale dei server Hetzner («currently unavailable» sulla pagina); sedi UE e impegno minimo del VPS OVHcloud.
- Certificati effettivi e loro perimetro: per tutti i fornitori sono stati letti solo i dichiarati.

## Aggiunta del 30/10/2026 (ticket 08)

Letture fatte dalla sessione del ticket [08 «Com'è fatta la piattaforma e dove gira»](../../.scratch/architettura-percorso-1/issues/08-forma-e-dove-gira.md), per il vincolo dell'utente: il modo di entrare deve offrire codice via email o SMS e passkey. Solo pagine pubbliche, nessun account.

- **Supabase, passkey (Fonte)** [49][50]. Annunciate il 28/5/2026 come «beta»; la guida dice: «Passkey support is experimental. The API may change without notice», con un'attivazione esplicita nel client. La passkey si registra solo su un utente già confermato; si configurano il dominio (un nome «nudo», senza schema né percorso) e fino a 5 origini. Piani e prezzo non indicati.
- **Better Auth, passkey (Fonte)** [51]. Libreria di accesso per applicazioni JavaScript/TypeScript; le passkey sono un'estensione (`@better-auth/passkey`) costruita su SimpleWebAuthn. La pagina non indica né data né stato di stabilità. **Inferenza:** nella forma 2 codice via email e passkey li offre una libreria dentro l'applicazione, non il fornitore; quale libreria dipende dal linguaggio ([ticket 09](../../.scratch/architettura-percorso-1/issues/09-linguaggio-framework-componenti.md)).
- **Outscale, archivio dei file (Fonte)** [52]. Object Storage nella regione europea `eu-west-2` a 0,025 € per GiB al mese; traffico in ingresso incluso.
- **Clever Cloud, listino (Fonte)** [53]. La pagina dei prezzi non riporta cifre: rimanda a un calcolatore e al commerciale; fatturazione al secondo. Il costo resta **Da verificare**.

Fonti dell'aggiunta, lette il 30/10/2026:

49. Supabase, Passkey authentication: https://supabase.com/docs/guides/auth/passkeys
50. Supabase, Passkeys for Supabase Auth (Beta), changelog del 28/5/2026: https://supabase.com/changelog/46458-passkeys-for-supabase-auth-beta
51. Better Auth, Passkey: https://www.better-auth.com/docs/plugins/passkey
52. Outscale, prezzi: https://en.outscale.com/?p=2075 (letto attraverso un motore di ricerca; la tabella va riletta sulla pagina prima di usarla)
53. Clever Cloud, Pricing: https://www.clever.cloud/pricing/

## Fonti

Tutte lette il 30 ottobre 2026, salvo dove indicato. Le pagine caricate solo nel browser sono state lette scaricando l'HTML pubblico ed estraendone il testo; i PDF sono stati scaricati e convertiti in testo.

1. Regolamento (UE) 2016/679 (GDPR), artt. 28 e 32, testo italiano: https://eur-lex.europa.eu/eli/reg/2016/679/oj. EUR-Lex ha risposto con un controllo anti-bot (202, pagina vuota); letto il testo XHTML dell'Ufficio delle pubblicazioni dell'UE, versione del 4/5/2016 senza rettifiche: https://publications.europa.eu/resource/celex/32016R0679 (risolto in http://publications.europa.eu/resource/cellar/3e485e15-11bd-11e6-ba9a-01aa75ed71a1.0013.03/DOC_1). Artt. 44–49 e EDPB: letti il 19/10/2026 per [privacy-dati.md](privacy-dati.md).
2. Commissione europea, decisioni di adeguatezza: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en — Stati Uniti solo con DPF; Regno Unito rinnovato a dicembre 2025; Canada, Svizzera.
3. Supabase, Available regions: https://supabase.com/docs/guides/platform/regions
4. Supabase, Data Residency and Transfers FAQ, versione 1 del 6/10/2026: https://supabase.com/legal/privacy-resources/data-residency-and-transfers-faq
5. Supabase, GDPR compliance and Supabase: https://supabase.com/docs/guides/security/gdpr-compliance
6. Supabase, Data Processing Addendum: https://supabase.com/legal/dpa
7. Supabase, elenco dei sub-responsabili: https://supabase.com/legal/customer-resources/subprocessor-list; PDF del 12/10/2026: https://supabase.com/legal/subprocessor-list/October-12-2026.pdf
8. Supabase, Database Backups: https://supabase.com/docs/guides/platform/backups
9. Supabase, Pricing: https://supabase.com/pricing
10. Supabase, Compute and Disk: https://supabase.com/docs/guides/platform/compute-and-disk
11. Supabase, Passwordless email logins: https://supabase.com/docs/guides/auth/auth-email-passwordless
12. Supabase, Send emails with custom SMTP: https://supabase.com/docs/guides/auth/auth-smtp
13. Supabase Storage, Buckets fundamentals: https://supabase.com/docs/guides/storage/buckets/fundamentals; Access control: https://supabase.com/docs/guides/storage/security/access-control
14. Supabase, Security: https://supabase.com/security
15. Firebase, Privacy and Security in Firebase: https://firebase.google.com/support/privacy
16. Firebase, Project locations: https://firebase.google.com/docs/projects/locations
17. Firestore, Locations: https://firebase.google.com/docs/firestore/locations
18. Firestore, Back up and restore data: https://firebase.google.com/docs/firestore/backups
19. Firestore, Point-in-time recovery: https://firebase.google.com/docs/firestore/pitr
20. Firebase, Pricing: https://firebase.google.com/pricing
21. Firebase Data Processing and Security Terms, aggiornati il 21/8/2024: https://firebase.google.com/terms/data-processing-terms
22. Firebase, Subprocessors, aggiornata il 23/9/2021: https://firebase.google.com/terms/subprocessors
23. Firebase Authentication, Email link: https://firebase.google.com/docs/auth/web/email-link-auth
24. Cloud Firestore, panoramica: https://firebase.google.com/docs/firestore
25. Scalingo, Regions: https://doc.scalingo.com/platform/internals/regions
26. Scalingo, Data Processing Agreement: https://scalingo.com/data-processing-agreement — la pagina mostra come data di pubblicazione il 30/10/2026, forse la data di generazione (**Da verificare** la versione).
27. Scalingo, Backup policies: https://doc.scalingo.com/databases/backup-policies
28. Scalingo, Backing up your PostgreSQL addon: https://doc.scalingo.com/databases/postgresql/backing-up
29. Scalingo, Pricing: https://scalingo.com/pricing; PostgreSQL: https://scalingo.com/addons/scalingo-postgresql
30. Scalingo, Filesystem: https://doc.scalingo.com/platform/app/filesystem
31. Scalingo, Review apps: https://doc.scalingo.com/platform/app/review-apps
32. Scalingo, Compliance, aggiornata il 29/6/2026: https://doc.scalingo.com/security/overview/compliance
33. Clever Cloud, PostgreSQL: https://www.clever.cloud/developers/doc/deploy/databases/postgresql/
34. Clever Cloud, sub-responsabili, versione 1.5 del 5/11/2025: https://cdn.clever-cloud.com/uploads/2026/02/clever-clouds-sub-processors.pdf
35. Clever Cloud, Cellar: https://www.clever.cloud/developers/doc/deploy/storage/cellar/
36. Clever Cloud, Security: https://www.clever.cloud/security/
37. Hetzner, Cloud: https://www.hetzner.com/cloud/; Regular Performance: https://www.hetzner.com/cloud/regular-performance/
38. Hetzner Docs, Backups and Snapshots: https://docs.hetzner.com/cloud/servers/backups-snapshots/overview/
39. Hetzner Docs, Billing FAQ: https://docs.hetzner.com/cloud/billing/faq/
40. Hetzner, Data Processing Agreement, versione 1.1 del 10/2/2025 (allegato TOM 1.2 del 17/2/2026): https://www.hetzner.com/AV/DPA_en.pdf
41. Hetzner, Anlage 3, Subunternehmer, versione 1.0 del 6/8/2024: https://www.hetzner.com/AV/subunternehmer.pdf
42. Hetzner Docs, Certificates: https://docs.hetzner.com/general/others/certificates
43. Hetzner, Object Storage: https://www.hetzner.com/storage/object-storage/
44. OVHcloud, VPS (Italia): https://www.ovhcloud.com/it/vps/
45. OVHcloud, Data Protection Agreement, versione del 17/10/2025: https://contract.eu.ovhapis.com/1.0/pdf/OVH_Data_Protection_Agreement-it.pdf (collegato da https://www.ovhcloud.com/it/terms-and-conditions/contracts/).
46. OVHcloud, Responsabili del trattamento, versione del 16/10/2025: https://contract.eu.ovhapis.com/1.0/pdf/OVH_Sub_processors-it.pdf
47. OVHcloud, ISO 27001, 27017 e 27018: https://www.ovhcloud.com/it/compliance/iso-27001-27017-27018/
48. Hetzner Docs, Data privacy FAQ: https://docs.hetzner.com/general/general-terms-and-conditions/data-privacy-faq/

## Fonti non raggiunte

- **EUR-Lex**: controllo anti-bot; testo letto dall'Ufficio delle pubblicazioni [1].
- **Listini caricati solo nel browser**: Clever Cloud (https://www.clever.cloud/pricing/) e i prezzi di calcolo di Render (https://render.com/pricing). Per Scalingo il listino è stato letto nell'HTML pubblico [29].
- **Firebase**: elenco dei sub-responsabili di Google Cloud e prezzi in regione UE, non letti.
- **Clever Cloud**: testo del DPA, non letto.
- **OVHcloud**: elenco delle sedi del VPS, troncato nella pagina letta [44].
- **Alternativa lasciata fuori**: Render (azienda statunitense), di cui sono state lette solo le pagine sul ripristino del database (https://render.com/docs/postgresql-backups: 3 giorni nel piano Hobby, 7 da Pro) e sul piano gratuito (https://render.com/docs/free: database gratuito cancellato dopo 30 giorni più 14 di grazia). Esclusa per restare a due fornitori per forma.
