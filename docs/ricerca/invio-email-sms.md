# Servizi per inviare email e SMS

Ricerca del 30 ottobre 2026, svolta da un agente in background con la skill `research` su fonti primarie; tutte le fonti sono state lette il 30/10/2026. Prezzi e condizioni decisivi riletti il 1/11/2026 (§10). Risponde al ticket [05 «Ricerca: servizi per inviare email e SMS»](../../.scratch/architettura-percorso-1/issues/05-ricerca-invio-email-sms.md) e serve al ticket [11 «Servizi esterni: email, SMS e ISTAT»](../../.scratch/architettura-percorso-1/issues/11-servizi-esterni.md).

Non si ripetono: i requisiti dei programmi di posta, SPF, DKIM, DMARC e la regola sulle email promozionali ([email.md](email.md), 19/10/2026); la forma di email e SMS, i caratteri GSM-7 e le regole AGCOM sul mittente alfanumerico ([email-sms-forma.md](email-sms-forma.md), 23/10/2026, §3–§4). Il ruolo di ƎE e della piattaforma nel trattamento dei dati è in [privacy-dati.md](privacy-dati.md).

**Nessun account creato, nessuna prova gratuita, nessun messaggio inviato, nessun fornitore contattato.** Prezzi in dollari o euro come li pubblica il fornitore, IVA esclusa. Non è una scelta: confronta e lascia la decisione all'utente.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Nessun servizio può dire «letto» né «nella posta in arrivo».** Per le email il massimo che si sa è che il server del destinatario ha accettato il messaggio («consegnato»), oppure che l'ha rifiutato con un motivo, che è in ritardo o che il destinatario l'ha segnato come spam [1][18][32]. L'apertura dipende dal caricamento delle immagini [32] e non prova la lettura ([email.md](email.md) §5). Per gli SMS «consegnato» arriva dall'operatore telefonico; Amazon avverte che in alcuni Paesi «consegnato» e «accettato dall'operatore» si usano in modo intercambiabile [14] (**Fonte**).
- **Per la pagina «Oggi» bastano tre stati** (**Inferenza**): *consegnato* (accettato dal server o dall'operatore), *non arrivato* con il motivo (indirizzo inesistente, casella piena dopo i tentativi, numero non valido, telefono spento oltre la scadenza, bloccato), *in attesa*. Lo spam segnalato dal destinatario è un fatto a parte, da mostrare all'operatore. Le aperture non servono e richiederebbero i pixel ([email-sms-forma.md](email-sms-forma.md), In breve).
- **Email, tre alternative con dati nell'UE.** Amazon SES nella regione di Milano: costo minimo (0,10 $ ogni 1.000 email nella formula a consumo), contratto sui dati incluso nelle condizioni, prove con indirizzi simulati [4][5][9]. Brevo (Francia): dati in Belgio e Francia, piano gratuito fino a 300 email al giorno, contratto sui dati nelle condizioni [23][24][31]. Mailgun (gruppo Sinch), regione UE in Germania e Belgio: piano gratuito da 100 email al giorno con registro di un giorno [34][37][38].
- **SMS in Italia: il mittente con il nome dipende dal fornitore.** Brevo scrive che in Italia i mittenti alfanumerici internazionali sono vietati e offre solo numeri +39, per i piani Professional ed Enterprise [29]. Skebby (Commify Italia) registra gli alias e ne mostra lo stato di conferma AGCOM [40]. Amazon indica per l'Italia «Sender ID: sì» senza registrazione [13]: come si concili con il Registro AGCOM è **Da verificare**.
- **Costo del pilota molto basso per le email, qualche decina di euro al mese per gli SMS.** Con 5.000 email al mese: circa 0,50 $ con SES a consumo, 0 € con Brevo gratuito (se i picchi stanno sotto 300 al giorno) o 7 € con Brevo Starter, 0 $ con Mailgun gratuito (sotto 100 al giorno) o 15 $ con Mailgun Basic. Con 300 SMS al mese: circa 24 $ con Amazon (0,08 $ l'uno) e circa 29 € di consumo con Skebby (0,0925 € più 0,005 € per la ricevuta di consegna), con pacchetti da 34 € per 367 SMS [5][17][31][37][41] (**Inferenza**, calcolo dell'agente).
- **Ricevere email per l'indirizzo delle bollette** (percorso 3): tutti e tre i servizi email lo fanno, in modi diversi. SES riceve a Milano e salva il messaggio dove si decide [4][6]; Brevo lo trasforma in dati e lo manda alla piattaforma [22]; Mailgun lo inoltra o lo tiene fino a 3 giorni [36] (**Fonte**).
- **Novità per il contratto sugli SMS.** Il Garante ha stabilito nel 2023 che Commify Italia, che gestisce Skebby, è un fornitore di servizi di comunicazione elettronica e non solo un responsabile dei clienti, e l'ha sanzionata per aver conservato i testi degli SMS fino a due anni [42] (**Fonte**). Il contratto sui dati con un fornitore di SMS potrebbe quindi non essere il solo art. 28: **serve un parere professionale**.

## 1. Cosa si può sapere di un messaggio

### 1.1 Email

| Cosa succede | Amazon SES [1] | Brevo [18] | Mailgun [32] |
| --- | --- | --- | --- |
| Accettato dal servizio | `Send` | `request` | `accepted` |
| Accettato dal server del destinatario | `Delivery` | `delivered` | `delivered` |
| Ritardo, nuovi tentativi in corso | `DeliveryDelay` (casella piena, problema temporaneo) | `deferred`, con motivo | `temporary_fail` |
| Rifiuto definitivo | `Bounce` (definitivo; i rifiuti temporanei solo quando SES smette di riprovare) | `hard_bounce` con motivo; `soft_bounce` con motivo | `permanent_fail` (indirizzo inesistente, tentativi esauriti, indirizzo già soppresso) |
| Non inviato dal servizio | `Reject` (virus), `RenderingFailure` (modello) | `blocked`, `invalid_email`, `error` | — |
| Segnalato come spam | `Complaint` | `spam` | `complained` (dipende dai circuiti di segnalazione dei fornitori di posta) |
| Aperto, cliccato | `Open`, `Click` | `opened`, `unique_opened`, `proxy_open`, `click` | `opened` (solo se il destinatario carica le immagini), `clicked` |
| Disiscrizione | `Subscription` | `unsubscribed` | `unsubscribed` |

**Fonte, dettagli utili**
- SES: un rifiuto temporaneo a volte arriva anche quando il messaggio è nella casella, per esempio con una risposta automatica di assenza [1]. Gli eventi vanno a SNS, EventBridge, Firehose, CloudWatch o Pinpoint [1].
- Brevo: il motivo c'è solo per `deferred`, `soft_bounce` e `hard_bounce`; nessun motivo per spam, apertura e consegna [18]. `proxy_open` indica un'apertura registrata tramite il proxy delle immagini di un programma di posta [18].
- Mailgun: i nuovi formati usano l'evento `failed` con il campo `severity` («permanent» o «temporary») [32].

**Cosa non si sa** (**Fonte** per le prime due; **Inferenza** per la terza)
- Se l'email è nella posta in arrivo, nello spam o nelle promozioni: «consegnato» vuol dire solo che il server del destinatario l'ha accettata [1][32].
- Se è stata letta: l'apertura richiede le immagini [32] e Apple Mail Privacy Protection la nasconde ([email.md](email.md) §5).
- Se una segnalazione di spam arriva per ogni messaggio: dipende dai circuiti di segnalazione di ciascun fornitore di posta [32]; per Gmail e Libero **Da verificare**.

### 1.2 SMS

| Cosa succede | Amazon End User Messaging [14] | Skebby [40] | Brevo [18] |
| --- | --- | --- | --- |
| In coda, in corso | `TEXT_QUEUED`, `TEXT_PENDING` | `WAITING`, `SENT`, `WAIT4DLVR`, `SCHEDULED` | `sent`, `accepted` |
| Consegnato | `TEXT_DELIVERED`; `TEXT_SUCCESSFUL` = accettato dall'operatore; in alcuni Paesi i due si usano in modo intercambiabile | `DLVRD` | `delivered` |
| Numero non valido | `TEXT_INVALID` | `UNKNRCPT`, `UNKNPFX`, `INVALIDDST` | `hard_bounce` (con `description` ed `error_code`) |
| Telefono spento o irraggiungibile | `TEXT_UNREACHABLE`, `TEXT_CARRIER_UNREACHABLE`, `TEXT_TTL_EXPIRED` | `TIMEOUT` | `soft_bounce` |
| Bloccato | `TEXT_BLOCKED`, `TEXT_CARRIER_BLOCKED`, `TEXT_SPAM`, `TEXT_PROTECT_BLOCKED` | `BLACKLISTED`, `KO`, `INVALIDCONTENTS` | `blacklisted`, `rejected`, `skip` |
| Altro | `TEXT_UNKNOWN` (temporaneo o definitivo) | `ERROR`, `TOOM4USER`, `TOOM4NUM`, `DEMO` | — |

**Fonte, dettagli utili**
- Skebby manda alla piattaforma solo lo **stato finale** di ogni SMS, con data, identificativo, stato e numero; l'indirizzo che lo riceve si imposta solo dall'interfaccia, in GET o POST [40]. La ricevuta di consegna per singolo SMS («Classic+») costa 0,005 € a SMS sotto i pacchetti da 1.425 € [41].
- Amazon passa ogni numero tramite un solo operatore partner per Paese e consiglia un canale di riserva, per esempio l'email [13].

**Cosa non si sa** (**Inferenza**): se l'SMS è stato letto; se è finito fra i «Mittenti sconosciuti» o in «Transazioni» su iPhone ([email-sms-forma.md](email-sms-forma.md) §4). Senza la ricevuta di consegna (Skebby senza Classic+) si sa solo che l'SMS è partito.

### 1.3 Come lo sa la piattaforma

| | Come arriva | Sicurezza della notifica | Nuovi tentativi se la piattaforma non risponde |
| --- | --- | --- | --- |
| Amazon SES e SMS | Evento su SNS o EventBridge [1][14] | Gestita dai servizi Amazon: **Da verificare** (pagine non lette) | **Da verificare** |
| Brevo | Chiamata HTTP all'indirizzo della piattaforma [18] | Utente e password nell'indirizzo, token nell'intestazione o intestazioni a scelta; filtro sugli indirizzi IP di Brevo; nessuna firma [19] | 4 tentativi dopo il primo: dopo 10 minuti, 1, 2 e 8 ore. **Una risposta 5xx o 4xx (salvo 429) ferma i tentativi e scarta la notifica** [20] |
| Mailgun | Chiamata HTTP [32] | Firma HMAC-SHA256 di data e token con una chiave dedicata; conservare i token per evitare ripetizioni [33] | Per 8 ore: 5, 10, 15 minuti, 1, 2, 4 ore; un 406 ferma i tentativi. La pagina esclude «le notifiche di consegna»: cosa intenda è **Da verificare** [33] |
| Skebby | Chiamata HTTP GET o POST [40] | Nessun meccanismo descritto: **Da verificare** | Non descritti: **Da verificare** |

**Inferenza.** Con Brevo un guasto momentaneo della piattaforma (risposta 5xx) fa perdere la notifica: servirebbe un controllo periodico dei registri del fornitore per non mostrare «consegnato» o «non arrivato» a torto.

## 2. Fornitori di email

### 2.1 Confronto

| | Amazon SES | Brevo | Mailgun |
| --- | --- | --- | --- |
| **Chi** | Amazon Web Services | Brevo SAS, Francia; legge francese [23] | Mailgun, gruppo Sinch [38][39] |
| **Dove stanno i dati** | Regione scelta dal cliente, anche Milano (`eu-south-1`) per invio e ricezione; Amazon non sposta i contenuti fuori dalla regione senza accordo [4][11] | Google Cloud in Belgio, OVH in Francia (e Germania secondo l'aiuto) [23][24] | Regione UE: messaggi, eventi, soppressioni e rotte restano nella regione; dati dell'account, chiavi e nomi di dominio replicati ovunque [34]. Server Google in Germania e Belgio [38] |
| **Contratto sui dati** | Il DPA fa parte delle Service Terms quando si trattano dati del cliente, con le clausole tipo UE [9] | DPA nell'Appendice 3 delle condizioni (versione del 1/10/2025): Brevo responsabile, il cliente titolare [23][25] | DPA di Sinch Email, parte delle condizioni [39]; letta solo la versione precedente (16/1/2023): la versione attuale è **Da verificare** |
| **Sub-responsabili** | Elenco pubblico; dipendono da regione e servizi [12] | Elenco nel DPA: Cloudflare e Zendesk (USA), servizi di IA opzionali, società del gruppo anche in India e USA [23] | Elenco Sinch, con preavviso di 30 giorni per i nuovi; Atlassian, Stripe, Zendesk e Mailgun Technologies (USA) per assistenza e fatture [38] |
| **Per quanto conserva** | Gli eventi stanno dove li manda il cliente; la lista di soppressione finché non si cancella; dopo la chiusura dell'account 90 giorni [8]. SES può conservare e analizzare le email contro spam e virus, senza durata indicata [9] | Registri e anteprime delle email transazionali: senza limite per impostazione predefinita, regolabili da 1 a 24 mesi [26]. Il cliente gestisce le durate; Brevo cancella a fine rapporto [23] | Registro di 1 giorno (Free, Basic), 5 (Foundation), 30 (Scale) [37] |
| **Prova senza invii veri** | Simulatore: indirizzi che producono consegna, rifiuto, risposta automatica, spam e soppressione; non contano nei limiti né nella reputazione, ma si pagano [2]. Account nuovi in «sandbox»: solo destinatari verificati, 200 al giorno; uscita su richiesta, risposta entro 96 ore [3] | Intestazione `X-Sib-Sandbox: drop`: nessun invio, nessun registro; controlla solo il formato della richiesta. Se produca notifiche non è detto [21] | `o:testmode`: accettato e non inviato, ma si paga; se produca eventi non è detto [35] |
| **Prezzo** | A consumo 0,10 $ ogni 1.000; piano Essentials 0,16 $ ogni 1.000, in cui partono gli account nuovi dal 21/7/2026, con passaggio libero al consumo; crediti per i clienti nuovi fino a 200 $ [5] | Free: 300 email al giorno; Starter da 7 € al mese per 5.000 email [31] | Free: 100 al giorno, 1 dominio, 1 rotta in ricezione; Basic da 15 $ al mese per 10.000 [37] |
| **Ricevere email** | Sì a Milano: regole che salvano su S3, avvisano via SNS, chiamano Lambda; filtro antispam e antivirus [4][6] | Sì, su un sottodominio diverso da quello d'invio; il messaggio arriva come dati strutturati, allegati scaricabili con un codice [22] | Sì: inoltro a un indirizzo o a un URL della piattaforma, oppure conservazione fino a 3 giorni [36] |

### 2.2 Note per fornitore

**Amazon SES** (**Fonte**)
- In Milano manca l'invio via SMTP; c'è l'invio via API e un dominio DKIM proprio della regione [4].
- Per impostazione predefinita SES usa TLS «se possibile» verso il server del destinatario e altrimenti invia in chiaro; si può imporre il TLS [7].
- Amazon raccomanda di non mettere indirizzi email nei tag e nei campi liberi, che possono finire nei registri di fatturazione [7].

**Brevo** (**Fonte**)
- Il piano gratuito invia dopo l'approvazione dell'account [31]. Fra i componenti aggiuntivi c'è la rimozione del logo Brevo [31]: se il logo compaia anche nelle email transazionali del piano gratuito è **Da verificare**.
- Account con oltre 10 milioni di eventi: gli eventi più vecchi di 24 mesi si cancellano [26]. Lontano dai volumi del pilota (**Inferenza**).
- Se l'account viene chiuso i contenuti si cancellano subito, salvo richiesta di 24 ore per recuperarli; un account inattivo per 6 mesi può essere chiuso [23].

**Mailgun** (**Fonte**)
- L'indirizzo dell'API UE è `api.eu.mailgun.net` [34].
- Le pagine legali di mailgun.com rispondono 403 all'accesso diretto; il DPA si è letto solo nella versione precedente in francese, che rimanda a quella attuale su sinch.com [39].

## 3. Fornitori di SMS

### 3.1 Confronto

| | Amazon End User Messaging SMS | Skebby (Commify Italia S.r.l.) | Brevo SMS |
| --- | --- | --- | --- |
| **Mittente in Italia** | «Sender ID: sì», nessuna registrazione indicata; numeri brevi e lunghi; risposte possibili con un numero dedicato [13] | Alias (TPOA) da creare con ragione sociale, codice fiscale, partita IVA, indirizzo e PEC; stati: confermato da Skebby, confermato da AGCOM, bloccato da AGCOM [40] | «In conformità ad AGCOM i mittenti alfanumerici internazionali sono vietati»; solo numeri virtuali +39, acquistabili nei piani Professional ed Enterprise; vietati i mittenti generici come INFO o SMS [29]. Registrazione del mittente obbligatoria per ogni Paese, da 3 a 11 caratteri [28] |
| **Dove passano i dati** | Regione scelta (anche Milano) [16]; consegna tramite operatori terzi (Infobip, Vonage, Sinch, Twilio e altri), che possono usare fornitori a valle in tutto il mondo [12] | **Da verificare** (sito principale non raggiungibile) | Instradamento SMS tramite iBasis (Liechtenstein, server in Austria e Germania) «salvo Nord America e Francia», Vonage, Telnyx, Sinch [23]. Quale tocchi l'Italia: **Inferenza** iBasis, **Da verificare** |
| **Contratto sui dati** | Lo stesso DPA di AWS [9] | **Da verificare**. Per il Garante Commify è un fornitore di servizi di comunicazione elettronica accessibili al pubblico [42] | Lo stesso DPA di Brevo [23] |
| **Per quanto conserva** | Gli eventi stanno dove li manda il cliente [14] | Dopo l'ispezione del 2021 Commify ha dichiarato: testi per 6 mesi solo per chi lo sceglie, altrimenti 72 ore per i nuovi tentativi [42]. La regola attuale è **Da verificare** | Registri degli SMS senza limite per impostazione predefinita, regolabili [27] |
| **Prova senza invii veri** | Numeri simulati, anche italiani (+39 439 000 9172 consegna, …9174 errore), che non escono sulla rete; ma i numeri mittenti simulati esistono solo per gli USA e devono essere dello stesso Paese del destinatario [15]: come provare l'Italia è **Da verificare**. «Sandbox»: 10 numeri verificati e 1 $ di spesa [16] | Lo stato `DEMO` («inviato in modalità demo») esiste [40]; come attivarla non è descritto: **Da verificare** | Nessuna modalità di prova descritta per gli SMS: **Da verificare** |
| **Prezzo per l'Italia** | 0,08 $ a SMS [17] | 0,0925 € a SMS nei pacchetti da 34 a 170 €; ricevuta di consegna 0,005 €; validità 2 anni [41] | Crediti a pacchetti da 100, senza scadenza [30]; prezzo per l'Italia nel calcolatore, che si apre solo con JavaScript: **Da verificare** |
| **Ricevere SMS** | Con un numero dedicato [13] | Sì, sulle SIM possedute [40] | Evento `replied` [18] |

### 3.2 Cosa ne segue per gli SMS (**Inferenza**)

- Con Brevo, oggi, l'SMS in Italia non può partire da «ƎE» o simili: arriverebbe da un numero +39, solo con un piano costoso. Non soddisfa il mittente sempre uguale con il nome del servizio (D21) se si vuole il nome anche negli SMS.
- Amazon dichiara l'alias in Italia senza registrazione, ma la delibera 9/26/CIR obbliga i fornitori di transito a bloccare gli alias di soggetti non autorizzati ([email-sms-forma.md](email-sms-forma.md) §4). Prima di contarci va chiesto ad Amazon chi registra l'alias nel Registro AGCOM.
- Skebby gestisce l'alias attraverso il Registro AGCOM [40]: è il solo dei tre con un percorso documentato verso il mittente con il nome in Italia.

## 4. Mittente: cosa è cambiato

- **Email:** nulla di nuovo rispetto a [email.md](email.md). I tre servizi lavorano con un dominio proprio; SES a Milano ha un dominio DKIM di regione [4], Brevo chiede un sottodominio separato per ricevere [22].
- **SMS, regole AGCOM:** nessuna nuova delibera sugli alias trovata dopo il 23/10/2026; il Registro non mostra novità datate [43]. Restano valide le regole del §4 di [email-sms-forma.md](email-sms-forma.md).
- **SMS, fatti nuovi dai fornitori:** il divieto di Brevo per i mittenti alfanumerici internazionali [29]; la mancanza di registrazione indicata da Amazon [13]; i dati che Skebby chiede per l'alias, PEC compresa [40], coerenti con quelli che AGCOM chiede al mittente ([email-sms-forma.md](email-sms-forma.md) §4). La lunghezza da 3 a 11 caratteri indicata da Brevo [28] conferma il limite di 11 calcolato il 23/10/2026.

## 5. Costo del pilota

Ordine di grandezza dato dal ticket: qualche migliaio di email e qualche centinaio di SMS al mese. Calcoli dell'agente sui prezzi pubblicati (**Inferenza**), IVA esclusa, senza i costi dei servizi di supporto (code, archivi, funzioni) che Amazon fattura a parte.

| Volume al mese | Amazon | Brevo | Mailgun | Skebby |
| --- | --- | --- | --- | --- |
| 5.000 email | 0,50 $ a consumo, 0,80 $ con Essentials [5] | 0 € con Free se mai oltre 300 al giorno; 7 € con Starter [31] | 0 $ con Free se mai oltre 100 al giorno; 15 $ con Basic [37] | — |
| 300 SMS | 24 $ [17] | **Da verificare** [30] | — | 29 € di consumo (0,0925 € più 0,005 € di ricevuta a SMS); si compra a pacchetti: 367 SMS a 34 € più 1,50 € di ricevute [41] |

**Inferenza.** Il limite giornaliero dei piani gratuiti conta più del totale mensile: un promemoria del canone mandato a tutti gli inquilini nello stesso giorno, con 100–200 case, sta sotto i 300 di Brevo ma può superare i 100 di Mailgun.

## 6. Ricevere email per l'indirizzo delle bollette (per dopo)

- **SES** riceve a Milano, con regole per indirizzo e filtri per IP; può salvare il messaggio su S3, avvisare via SNS, chiamare una funzione o rifiutarlo [4][6]. Il messaggio resta solo dove lo si salva (**Inferenza**).
- **Brevo** riceve su un sottodominio diverso da quello d'invio, con due record MX verso i suoi server; manda alla piattaforma testo, HTML, punteggio spam e un codice per scaricare gli allegati; la riconoscibilità della firma usa l'apprendimento automatico e non è perfetta [22]. Esistono anche endpoint per elencare le email ricevute; quanto le conservi non è detto: **Da verificare**.
- **Mailgun** inoltra a un URL della piattaforma o conserva il messaggio fino a 3 giorni [36]; le chiamate verso la piattaforma sono firmate [33].
- **Inferenza.** Lo spazio delle bollette è privato dell'inquilino (§12, 20/10/2026): il servizio che riceve vede comunque il contenuto. Conta quanto lo tiene e chi del fornitore può leggerlo; va valutato con la scelta sulla separazione dello spazio (mappa, «Non ancora specificato»).

## 7. Alternative reali per il ticket 11 (**Inferenza**, nessuna scelta)

1. **Tutto da Amazon:** SES ed End User Messaging nella regione di Milano, un solo contratto e un solo modo di ricevere gli eventi. Costo minimo; più lavoro di configurazione; alias italiano **Da verificare**.
2. **Brevo per le email, Skebby per gli SMS:** Brevo semplice da avviare, dati in UE, gratuito al volume del pilota; Skebby per l'alias registrato. Due contratti e due modi di ricevere gli eventi; notifiche Brevo da proteggere con un controllo periodico (§1.3).
3. **Amazon SES per le email, Skebby per gli SMS:** email a costo minimo con dati a Milano e alias italiano documentato. Due contratti.

Mailgun resta un'alternativa per le email, con firma delle notifiche e dati nell'UE, ma il piano gratuito ha un limite giornaliero basso e il registro dura un giorno [37].

## 8. Dove serve un parere professionale

Un consulente privacy e telecomunicazioni; conviene un solo incarico insieme al parere privacy già previsto (PRODUCT.md §10.10).

1. **Ruolo del fornitore di SMS.** Dopo il provvedimento del Garante su Commify [42]: per i dati di traffico il fornitore di SMS è titolare autonomo? Cosa deve dire il contratto con ƎE e cosa l'informativa.
2. **Chi è il mittente dell'alias** (ƎE o la società della piattaforma) e se serve una delega: già aperto in [email-sms-forma.md](email-sms-forma.md) §4.
3. **Trasferimenti fuori dall'UE.** Brevo, Mailgun e Amazon citano sub-responsabili negli USA (assistenza, rete, instradamento SMS) [12][23][38]: se le garanzie dichiarate bastano per i dati di proprietari e inquilini.
4. **Durata dei registri di consegna** presso il fornitore e nella piattaforma, coerente con il calendario di ƎE (D25).
5. **Alias con Amazon**: se l'invio in Italia con un alias non registrato da un fornitore iscritto al ROC sia conforme alla delibera 12/23/CIR e alla 9/26/CIR.

## 9. Da verificare

- Sicurezza e nuovi tentativi delle notifiche Amazon via SNS ed EventBridge.
- Significato di «other than for delivery notification» nella politica dei nuovi tentativi di Mailgun [33].
- DPA attuale di Mailgun su sinch.com.
- Skebby: sede dei dati, contratto sui dati, sub-responsabili, conservazione attuale, sicurezza della notifica, modalità demo.
- Brevo: prezzo dell'SMS verso l'Italia; logo nelle email del piano gratuito; conservazione delle email ricevute; notifiche in modalità sandbox.
- Amazon: come si registra l'alias in Italia e come si prova l'invio verso i numeri simulati italiani.
- Se Gmail, Outlook.com e Libero mandano le segnalazioni di spam per singolo messaggio.

## 10. Verifica del 1/11/2026

Rilettura delle fonti che decidono il ticket [Servizi esterni: email, SMS e ISTAT](../../.scratch/architettura-percorso-1/issues/11-servizi-esterni.md), fatta il 1/11/2026 nella sessione del ticket, senza account e senza invii. Si riporta solo ciò che è cambiato o che mancava; il resto dei §1–§9 resta valido.

- **Amazon SES, prezzi** [5], **Fonte:** a consumo 0,10 $ ogni 1.000 email inviate più 0,12 $ per GB di allegati; ricevere costa 0,10 $ ogni 1.000 email più 0,09 $ ogni 1.000 «chunk» da 256 KB. Gli account nuovi partono dal 21/7/2026 sul piano Essentials (0,16 $ ogni 1.000, nessun canone fisso); il primo passaggio al consumo, per chi non ha scelto Essentials, vale subito. Ai clienti AWS nuovi fino a 200 $ di crediti, da usare entro 12 mesi. Nessun piano SES gratuito.
- **Amazon, SMS in Italia** [13][17], **Fonte:** la riga dell'Italia dice ancora «Sender ID: Yes» senza la nota «Registration required», che invece compare per Spagna, Irlanda e Regno Unito. Il prezzo per SMS sta solo nel file per Paese (0,08 $ letto il 30/10/2026, non riletto). Un numero lungo italiano costa 30 $ al mese, con circa 3 settimane di attivazione: serve solo per ricevere risposte, non per mandare con un alias. **Da verificare** resta come l'alias entri nel Registro AGCOM.
- **Skebby, pacchetti** [41], **Fonte:** c'è un pacchetto più piccolo di quello letto il 30/10/2026: **255 SMS a 25 €** (0,0980 € l'uno); poi 367 a 34 €, 735 a 68 €, 1.837 a 170 € (0,0925 €). IVA esclusa, un SMS è un segmento di 160 caratteri, il credito vale **2 anni**. Il mittente personalizzato è fra le caratteristiche degli SMS «Alta qualità (Classic)»; il rapporto di consegna per singolo SMS è del tipo «Classic+», 0,005 € a SMS sotto i pacchetti da 1.425 €.
- **Skebby, condizioni e dati:** la pagina `skebby.it/privacy/` risponde 404 e una ricerca non ha trovato né il contratto sui dati né la sede dei server. Il provvedimento del Garante [42], riletto, cita un «Addendum per la Protezione dei Dati» allegato alle condizioni generali, che al punto 10.3 faceva dare al cliente il consenso a conservare i dati fino a 24 mesi; fra i testi conservati c'erano anche **codici d'accesso (OTP) bancari**. Dopo il provvedimento Commify ha dichiarato di conservare i testi solo per chi lo sceglie, per 6 mesi, e di cancellarli per gli altri; sanzione di 80.000 € (**Fonte**). **Da verificare:** il testo attuale dell'addendum e la sede dei dati, da leggere prima di aprire l'account.
- **Brevo, prezzi** [31], **Fonte:** la versione testuale dei prezzi (generata il 29/9/2026) dà Starter a 7 € al mese per 5.000 email e un componente aggiuntivo «Remove Brevo logo» a **9 € al mese**; non dice se il logo compaia anche nelle email transazionali (**Da verificare**). Il prezzo degli SMS verso l'Italia non c'è.

- **Amazon SNS, notifiche verso la piattaforma** [46][47], **Fonte** (chiude un «Da verificare» del §1.3): SNS firma ogni messaggio verso un indirizzo HTTPS (versione 2 con SHA256, consigliata) e chiede di verificare la firma prima di usarlo, rifiutando i messaggi con un `TopicArn` inatteso. Riprova gli errori 5xx e 429; gli altri errori sono definitivi. Per HTTPS la regola predefinita fa 3 nuovi tentativi; una regola propria arriva a 100 tentativi in **al massimo 1 ora**. Finiti i tentativi il messaggio si scarta, salvo una coda di riserva (SQS).

**Inferenza.** Per gli SMS il dubbio sull'alias resta solo su Amazon; per Skebby resta il contratto sui dati. Un codice d'accesso via SMS dura 10 minuti, ma passa comunque dal fornitore: la durata con cui il fornitore conserva i testi va scritta nel contratto e portata al parere (§8, punti 1 e 4).

Fonti in più, lette il 1/11/2026:

45. Skebby, `https://www.skebby.it/privacy/`: 404.
46. Amazon SNS, «Message delivery retries»: https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html
47. Amazon SNS, «Verifying the signatures of Amazon SNS messages»: https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html

## Fonti

Tutte lette il 30/10/2026.

**Amazon Web Services**
1. Amazon SES, «Monitor email sending using event publishing»: https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html — tipi di evento e destinazioni.
2. Amazon SES, «Sending test emails with the simulator»: https://docs.aws.amazon.com/ses/latest/dg/send-an-email-from-console.html — indirizzi simulati, limiti e fatturazione.
3. Amazon SES, «Request production access»: https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html — limiti della sandbox, tempi di risposta.
4. AWS General Reference, «Amazon Simple Email Service endpoints and quotas»: https://docs.aws.amazon.com/general/latest/gr/ses.html — regioni per invio, SMTP, ricezione, DKIM.
5. Amazon SES, prezzi: https://aws.amazon.com/ses/pricing/ — consumo, piani, Essentials dal 21/7/2026, crediti.
6. Amazon SES, «Email receiving»: https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html — regole di ricezione e azioni.
7. Amazon SES, «Data protection»: https://docs.aws.amazon.com/ses/latest/dg/data-protection.html — TLS, dati nei tag.
8. Amazon SES, «Deleting personal data»: https://docs.aws.amazon.com/ses/latest/dg/deleting-personal-data.html — lista di soppressione, eventi, chiusura dell'account.
9. AWS Service Terms, aggiornate il 29/10/2026: https://aws.amazon.com/service-terms/ — §1.14 (DPA e clausole tipo), §15.3–15.5 (SES), §29.3 (End User Messaging).
10. AWS, GDPR Center: https://aws.amazon.com/compliance/gdpr-center/ — clausole tipo, sub-responsabili, scelta della regione.
11. AWS, Data Privacy FAQ: https://aws.amazon.com/compliance/data-privacy-faq/ — regione scelta, nessuno spostamento senza accordo.
12. AWS, sub-responsabili: https://aws.amazon.com/compliance/sub-processors/ — operatori terzi per SMS e fornitori a valle.
13. AWS End User Messaging SMS, Paesi supportati: https://docs.aws.amazon.com/sms-voice/latest/userguide/phone-numbers-sms-by-country.html — riga dell'Italia, operatore unico per Paese.
14. AWS End User Messaging SMS, tipi di evento: https://docs.aws.amazon.com/sms-voice/latest/userguide/configuration-sets-event-types.html
15. AWS End User Messaging SMS, numeri simulati: https://docs.aws.amazon.com/sms-voice/latest/userguide/test-phone-numbers.html
16. AWS General Reference, «AWS End User Messaging endpoints and quotas»: https://docs.aws.amazon.com/general/latest/gr/end-user-messaging.html — regioni, sandbox (10 numeri, 1 $).
17. AWS End User Messaging, prezzi: https://aws.amazon.com/end-user-messaging/pricing/ e tabella collegata https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/business-applications/approved/documents/End-User-Messaging-SMS-Prices.ebc340b4d416d90832dd59629c4792b0deb6f8bc.csv — Italia 0,08 $ per tutti i tipi di numero.

**Brevo**
18. «Transactional webhooks»: https://developers.brevo.com/docs/transactional-webhooks — eventi email e SMS.
19. «Secured webhooks»: https://developers.brevo.com/docs/secured-webhooks
20. «Retry mechanism»: https://developers.brevo.com/docs/retry-mechanism
21. «Using sandbox mode»: https://developers.brevo.com/docs/using-sandbox-mode
22. «Parse inbound email»: https://developers.brevo.com/docs/inbound-parse-webhooks
23. Brevo Terms of Service, versione del 1/10/2025, con Appendice 3 (DPA) e Annex 2 (sub-responsabili): https://www.brevo.com/legal/termsofuse/
24. Centro assistenza, «Data storage location» (aggiornato il 19/10/2026): https://help.brevo.com/hc/en-us/articles/360001005510-Data-storage-location
25. Centro assistenza, «Where can I find the Data Processing Agreement (DPA)?»: https://help.brevo.com/hc/en-us/articles/15403782599570
26. Centro assistenza, conservazione dei registri email: https://help.brevo.com/hc/en-us/articles/4415743225746 , https://help.brevo.com/hc/en-us/articles/360021533839 , https://help.brevo.com/hc/en-us/articles/19317424653586
27. Centro assistenza, registri degli SMS transazionali: https://help.brevo.com/hc/en-us/articles/4445508727698
28. Centro assistenza, «Register a Sender ID to send SMS messages» (aggiornato il 21/10/2026): https://help.brevo.com/hc/en-us/articles/28255350696466
29. Centro assistenza, «Country specific guidelines and restrictions for SMS messages» (aggiornato il 16/10/2026), sezione Italia: https://help.brevo.com/hc/en-us/articles/11884482521234
30. Centro assistenza, «Supported countries and pricing for SMS messages» (aggiornato il 28/10/2026): https://help.brevo.com/hc/en-us/articles/208717449
31. Prezzi: https://www.brevo.com/pricing/ e versione testuale https://www.brevo.com/pricing.md (generata il 29/9/2026)

Le pagine del centro assistenza Brevo rispondono 403 all'apertura diretta; sono state lette con l'interfaccia pubblica dello stesso centro (`help.brevo.com/api/v2/help_center/en-us/articles/<numero>.json`), che restituisce lo stesso testo.

**Mailgun e Sinch**
32. Mailgun, «Webhooks»: https://documentation.mailgun.com/docs/mailgun/user-manual/webhooks/webhooks
33. Mailgun, «Securing webhooks» e «Webhook retries»: https://documentation.mailgun.com/docs/mailgun/user-manual/webhooks/securing-webhooks , https://documentation.mailgun.com/docs/mailgun/user-manual/webhooks/webhook-retries
34. Mailgun, «API overview» (regioni): https://documentation.mailgun.com/docs/mailgun/api-reference/api-overview
35. Mailgun, «Sending in test mode»: https://documentation.mailgun.com/docs/mailgun/user-manual/sending-messages/test-mode
36. Mailgun, «Route actions»: https://documentation.mailgun.com/docs/mailgun/user-manual/receive-forward-store/route-actions
37. Mailgun, prezzi: https://www.mailgun.com/pricing/
38. Sinch, sub-responsabili (nota più recente del 26/10/2026): https://sinch.com/legal/data-protection-agreement-sub-processors/
39. Mailgun, DPA nella versione precedente, rivista il 16/1/2023 (francese): https://www.mailgun.com/legal/dpa/ (reindirizza alla versione «ancien»)

**Skebby**
40. Skebby, documentazione delle API REST: https://developers.skebby.it/ — stati degli SMS, notifica dello stato finale, alias (TPOA) e stati AGCOM, SMS ricevuti.
41. Skebby, pacchetti SMS: https://www.skebby.it/prezzi/pacchetti-invio-sms/

**Autorità e norme**
42. Garante per la protezione dei dati personali, provvedimento dell'11/1/2023 nei confronti di Commify Italia S.r.l. (doc. web 9864063): https://www.garanteprivacy.it/garante/doc.jsp?ID=9864063
43. AGCOM, Registro degli Alias: https://alias.agcom.it/
44. Regolamento (UE) 2016/679, art. 28, par. 2 (altri responsabili e diritto di opporsi) e par. 3, lett. g (cancellare o restituire i dati): https://eur-lex.europa.eu/eli/reg/2016/679/oj , letto dall'archivio dell'Ufficio delle pubblicazioni http://publications.europa.eu/resource/celex/32016R0679

## Fonti non raggiunte

- **EUR-Lex**: controllo anti-bot (risposta 202 vuota). Il GDPR è stato letto dall'archivio dell'Ufficio delle pubblicazioni [44].
- **Brevo**, centro assistenza: 403 all'apertura diretta, letto con l'interfaccia pubblica dello stesso centro (Fonti, nota). **Calcolatore dei prezzi SMS** (https://www.brevo.com/pricing/pay-as-you-go/?selected=sms): i prezzi si caricano solo con JavaScript.
- **Mailgun**, pagine legali (`/legal/terms/`, `/legal/privacy-policy/`, `/gdpr/`) e **DPA attuale di Sinch**: 403. Letta solo la versione precedente del DPA [39].
- **Skebby**, sito principale (privacy, condizioni, contratto sui dati): 403 all'accesso diretto; raggiunte solo la documentazione delle API [40] e la pagina dei pacchetti [41].
- **Amazon**: pagine sulla firma delle notifiche SNS e sui nuovi tentativi di SNS ed EventBridge non lette.
- **AGCOM**: l'elenco delle imprese autorizzate ad usare gli alias non compare nel testo della pagina del Registro [43].
