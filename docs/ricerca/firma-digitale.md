# Firma digitale offerta da ƎE

Ricerca del 2 novembre 2026, fatta da un agente in background con la skill `research`, su fonti primarie lette tutte il 2/11/2026. Risponde al ticket [21 «Ricerca: firma digitale offerta da ƎE»](../../.scratch/architettura-percorso-1/issues/21-ricerca-firma-digitale.md) e serve al ticket [20 «Firma dell'inquilino sul nuovo canone ISTAT»](../../.scratch/architettura-percorso-1/issues/20-firma-inquilino-istat.md), dove l'utente ha scelto per il pilota la firma come **prova di ricezione**, con tre modi senza fornitore. Qui si valuta l'opzione B: ƎE offre a tutti la firma digitale tramite un fornitore.

**Non è una scelta.** Nessun account, nessuna registrazione, nessuna prova gratuita, nessun preventivo, nessun documento inviato a servizi esterni. Le liste di fiducia (i file pubblici che dicono chi è un prestatore qualificato) sono state scaricate in una cartella temporanea fuori dal progetto e lette con un piccolo programma. Prezzi come li pubblica il fornitore, IVA esclusa.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Tre livelli di firma.** Semplice, avanzata e qualificata (eIDAS). La «firma digitale» italiana è un tipo di firma qualificata. Solo la qualificata vale per legge come la firma a penna in tutta l'UE. In Italia anche l'avanzata dà la forma scritta e il valore di una scrittura privata [1][3] (**Fonte**).
- **La firma col dito sullo schermo** è di norma una firma semplice: il suo valore lo decide il giudice caso per caso [1][3]. Diventa avanzata solo con riconoscimento della persona, dati biometrici cifrati presso un terzo e tutti gli obblighi del DPCM del 2013 e del Garante [6][10] (**Fonte** per le regole; **Inferenza** per la conclusione).
- **Chi offre una firma avanzata ai propri clienti ha obblighi pesanti** [6] (**Fonte**):
  - riconoscere la persona con un documento e farle firmare una dichiarazione di accettazione;
  - conservare tutto per almeno 20 anni;
  - avere un'assicurazione da almeno 500.000 €;
  - pubblicare sul sito come funziona il sistema.

  La firma vale solo tra chi firma e chi la offre.
- **Firma qualificata «usa e getta» per chi non ne ha una:** esiste. InfoCert e Namirial (con Uanataca) emettono un certificato valido per una sola firma, dopo l'identificazione (SPID o CIE per Namirial) e un codice via SMS, con interfacce per le piattaforme [14][19][20] (**Fonte**). Per l'inquilino è gratis: paga chi la integra [14].
- **Prezzi pubblici: quasi nessuno.** InfoCert, Namirial, Aruba e Intesi non pubblicano il prezzo dell'integrazione. L'unico listino pubblico per le piattaforme è di Youtrust, l'ex Yousign: piano API da 1.248 € l'anno, firma qualificata a parte e senza prezzo [27] (**Fonte**). È più di cinque volte i 20 € al mese di tutta la piattaforma (**Inferenza**).
- **Firmare con SPID** secondo le regole AgID è possibile in teoria. In pratica serve che ƎE aderisca a SPID come fornitore di servizi, con un proprio sigillo qualificato, e che il gestore SPID dell'inquilino offra il servizio, che è volontario [7]. **Da verificare:** quali gestori lo offrono oggi; le sole fonti trovate, secondarie, citano solo Lepida.
- **Firmare con la CIE è gratis, e l'inquilino può farlo già oggi.** Con l'app CieSign del Poligrafico, la carta d'identità elettronica fa una **firma avanzata** su PDF (PAdES) o su altri file (CAdES). Servono un telefono con NFC e il PIN [8][9] (**Fonte**). Il PDF firmato si carica come una firma digitale propria (**Inferenza**).
- **Verificare sul nostro server senza inviare il documento si può** con DSS della Commissione europea: libero (LGPL-2.1), in Java, versione 6.5.1 di ottobre 2026. Legge le liste di fiducia di tutti gli Stati. Il pacchetto dimostrativo completo pesa circa 617 MB [32][33][35] (**Fonte**). Non c'è un equivalente in TypeScript (**Inferenza**).
- **In arrivo:** il portafoglio europeo di identità digitale dovrà offrire a tutte le persone la firma qualificata gratuita, almeno per gli usi non professionali [1] (**Fonte**). La data in Italia è **Da verificare**.

## 1. Livelli di firma e loro valore

### 1.1 Il regolamento europeo (eIDAS)

**Fonte** [1], testo consolidato al 18/10/2024, con le modifiche del regolamento 2024/1183:
- **Firma elettronica** (art. 3, n. 10): dati elettronici collegati ad altri dati e usati da chi firma per firmare. Comprende anche un nome scritto o un tratto disegnato.
- **Firma elettronica avanzata** (art. 3, n. 11, e art. 26): deve
  - (a) essere connessa unicamente a chi firma;
  - (b) permettere di identificarlo;
  - (c) essere creata con mezzi che chi firma usa, con un elevato livello di sicurezza, sotto il proprio esclusivo controllo;
  - (d) essere collegata ai dati firmati in modo che ogni modifica successiva sia rilevabile.
- **Firma elettronica qualificata** (art. 3, n. 12): una firma avanzata creata con un dispositivo qualificato e basata su un **certificato qualificato**, rilasciato da un **prestatore di servizi fiduciari qualificato** (art. 3, n. 15).
- **Valore** (art. 25): nessuna firma può essere respinta come prova solo perché è elettronica o non è qualificata (par. 1); la qualificata «ha effetti giuridici equivalenti a quelli di una firma autografa» (par. 2).
- **Riconoscimento a distanza** per un certificato qualificato (art. 24, par. 1 bis). Uno di questi metodi, o una loro combinazione:
  - (a) portafoglio europeo o mezzo di identificazione elettronica notificato di livello **elevato**;
  - (b) un certificato qualificato già rilasciato;
  - (c) altri metodi di sicurezza elevata, confermati da un organismo di valutazione;
  - (d) la presenza fisica.
- **Firma a distanza** (art. 29 bis): gestire per conto di chi firma i dati per creare la firma è un servizio qualificato a sé.
- **Liste di fiducia** (art. 22): ogni Stato pubblica la lista firmata dei propri prestatori qualificati, in una forma adatta alla lettura automatica.

### 1.2 Il Codice dell'amministrazione digitale (CAD)

**Fonte** (testi su Normattiva, aggiornati all'atto del 22/10/2026):
- **Definizioni.** Per il CAD valgono quelle del regolamento europeo (art. 1, c. 1-bis). La «**firma digitale**» è una «particolare tipologia di firma qualificata» con due chiavi, una privata e una pubblica (art. 1, c. 1, lett. s) [2].
- **Art. 20, c. 1-bis** [3]. Il documento informatico ha la **forma scritta** e il valore dell'art. 2702 del codice civile (scrittura privata) in due casi:
  - quando ha una firma digitale, un'altra firma qualificata o una **firma avanzata**;
  - quando è formato, previa identificazione informatica dell'autore, con un processo che rispetta le regole AgID (la firma con SPID, §3.1).

  Negli altri casi forma scritta e valore come prova li valuta **liberamente il giudice**, secondo sicurezza, integrità e immodificabilità.
- **Art. 20, c. 1-ter** [3]: l'uso del dispositivo di firma qualificata o digitale si presume riconducibile al titolare, salvo prova contraria.
- **Art. 21, c. 2-bis** [4]:
  - per le scritture dell'art. 1350, numeri 1–12, del codice civile serve la firma qualificata o digitale, a pena di nullità;
  - per quelle del numero 13 basta l'avanzata, oppure il processo dell'art. 20, c. 1-bis.
- **Art. 24** [5]: la firma digitale richiede un certificato qualificato non scaduto, revocato o sospeso al momento della firma. Con un certificato revocato, scaduto o sospeso equivale a «mancata sottoscrizione» (c. 4-bis).

| Livello | Esempio | Valore (Fonte) | Chi la dà |
| --- | --- | --- | --- |
| Semplice | «Confermo» dopo l'accesso, nome scritto, tratto disegnato col dito | Lo valuta il giudice [3] | Chiunque |
| Avanzata | Firma con la CIE (CieSign); firma grafometrica con tutti gli obblighi; firma con codice usa e getta dentro una procedura conforme | Forma scritta e art. 2702 c.c. [3] | Chiunque rispetti DPCM 2013 [6], o un ente pubblico (CIE) |
| Qualificata / digitale | Smart card, firma remota, certificato usa e getta di un prestatore qualificato | Come la firma a penna (UE) [1]; forma scritta, art. 2702 c.c. e uso presunto del titolare [3] | Solo prestatori qualificati nella lista di fiducia [11] |

**Inferenza.** Nel ticket 20 la firma è la prova che l'inquilino ha ricevuto la comunicazione, non una condizione. Il foglio firmato a penna e caricato resta una copia per immagine di un documento di carta; quanto valga come prova è una domanda per l'avvocato (§8).

### 1.3 La firma col dito sullo schermo

- **Fonte:** il regolamento non nomina la firma disegnata. Rientra nella definizione generale di firma elettronica [1]; il suo valore lo valuta il giudice [3].
- **Fonte:** il DPCM del 2013 ammette per la firma avanzata anche i **dati biometrici**, purché restino sotto il controllo esclusivo di chi firma (art. 56, lett. c) [6].
- **Fonte:** il Garante, nel provvedimento generale sulla biometria del 2014 (par. 4.4), esonera la **firma grafometrica** dalla verifica preliminare solo se fa parte di una firma avanzata e se [10]:
  - la persona è identificata prima di firmare;
  - c'è sempre un'alternativa senza biometria;
  - i dati sono cifrati dentro il documento, con la chiave privata presso un **terzo fiduciario**, che la usa solo in caso di contestazione e su richiesta del giudice;
  - i dati grezzi si cancellano subito;
  - informativa e relazione tecnica vengono aggiornate ogni anno;
  - con telefoni e tablet personali servono strumenti di gestione da remoto.
- **Fonte:** Aruba offre alle imprese la firma grafometrica su tavoletta, ma la pagina non dà prezzi [25].
- **Inferenza:** un tratto disegnato col dito nel browser, senza biometria cifrata, è una firma **semplice**: vale quanto un «Confermo». Per renderlo avanzato ƎE dovrebbe prendersi tutti gli obblighi del §1.4 e del Garante, più i dati biometrici, che sono dati particolari. Conferma l'esclusione già fatta nel ticket 20.
- **Da verificare:** se il provvedimento del 2014 resta valido così com'è dopo il GDPR.

### 1.4 Cosa chiede il DPCM 22/2/2013 a chi offre una firma avanzata

**Fonte** [6], Titolo V, letto sulla Gazzetta Ufficiale:
- **Art. 55.** Fare una firma avanzata è libero, senza autorizzazione. Il DPCM distingue due figure:
  - chi la **offre** ai propri clienti per i rapporti con loro (lett. a): sarebbe ƎE;
  - chi la **realizza** per altri come attività d'impresa (lett. b): sarebbe il fornitore.
- **Art. 56.** La soluzione deve assicurare: identificazione di chi firma; collegamento esclusivo; controllo esclusivo, anche dei dati biometrici; documento non modificato dopo la firma; copia di ciò che si è firmato per chi firma; individuazione di chi offre la firma; nessun elemento nel documento che ne cambi il contenuto; collegamento esclusivo al documento. Se manca uno di questi requisiti (salvo il nome di chi la offre), la firma non vale come avanzata (c. 2).
- **Art. 57, obblighi di chi la offre:**
  - identificare la persona con un documento valido e farle firmare una **dichiarazione di accettazione**;
  - **conservare per almeno 20 anni** copia del documento d'identità, la dichiarazione e le prove di conformità;
  - dare gratis copia di tutto a chi la chiede;
  - **pubblicare sul sito** le caratteristiche e le tecnologie del sistema;
  - offrire, se possibile, la revoca del consenso e un'assistenza;
  - avere una **polizza di responsabilità civile con massimale di almeno 500.000 €**, resa nota sul sito (c. 2–3).
- **Art. 58–59.** Le certificazioni ISO 27001 e ISO 9001 sono obbligatorie solo per chi realizza firme avanzate per la pubblica amministrazione; per gli altri sono facoltative.
- **Art. 60.** La firma avanzata vale **solo nei rapporti** tra chi firma e chi la offre.
- **Art. 61.** CIE e CNS «sostituiscono, nei confronti della pubblica amministrazione, la firma elettronica avanzata»; lo stesso vale per la PEC.

**Inferenza.** Se ƎE offrisse una firma avanzata comprata da un fornitore (per esempio codice via SMS più audit trail), gli obblighi dell'art. 57 resterebbero suoi: la polizza, la conservazione per 20 anni, la pagina pubblica. Con la firma qualificata di un prestatore, identificazione e conservazione delle prove sono del prestatore [14][15].

**Da verificare:** se il DPCM 22/2/2013 sia ancora in vigore senza modifiche dopo le linee guida AgID dell'art. 71. La pagina del Ministero dell'Interno sulla CIE lo cita ancora oggi [9].

## 2. Fornitori qualificati con firma a distanza

### 2.1 Chi è nella lista di fiducia

**Fonte:** lista italiana pubblicata da AgID, emessa il 24/9/2026, prossimo aggiornamento entro il 24/3/2027, con 56 prestatori [11]; lista francese emessa il 16/10/2026 [13]. Il 22/5/2026 la lista italiana ha aggiunto, come servizio qualificato a sé, la **gestione a distanza dei dispositivi di firma** (art. 29 bis) [1][11].

| Prestatore | Certificati qualificati di firma attivi | Firma a distanza qualificata |
| --- | --- | --- |
| InfoCert (Tinexta) | sì, anche «CA 3» e «CA 4» dal 2024 | sì, dal 22/5/2026 |
| Aruba PEC | sì | sì, dal 22/5/2026 |
| Namirial | sì | sì, dal 22/5/2026 |
| Uanataca (gruppo Namirial) | sì | sì, dal 22/5/2026 |
| Intesi Group | sì, nuova CA dal 10/12/2025 | sì, dal 22/5/2026 |
| Poste, InfoCamere, Actalis, TI Trust, Zucchetti | sì | sì, dal 22/5/2026 |
| Youtrust (ex Yousign), Francia | sì, dal 27/10/2023 | sì, dal 9/7/2026 |
| Docusign France | sì, dal 9/7/2026 | sì, dal 9/7/2026 |
| Ministero dell'Interno (CIE) | **no**: solo servizi «riconosciuti a livello nazionale», non qualificati | no |

**Inferenza:** tutti i fornitori considerati sono qualificati. La differenza sta nel prodotto per le piattaforme, nel prezzo e nei dati.

### 2.2 Schede

**InfoCert (Tinexta Group), Italia**
- **Fonte, prodotto** [14] (allegato tecnico «One Shot – PMI», v. 1.0 del 23/4/2024):
  - la **firma One Shot** è una firma qualificata con un certificato emesso per un solo processo di firma, valido **60 minuti oppure 30 giorni**;
  - la chiave è disponibile solo per quella firma e viene **distrutta subito dopo**;
  - l'identificazione si fa **prima** (entro 60 minuti) oppure **dopo**, entro 30 giorni. In quel caso i documenti firmati restano senza effetto finché il riconoscimento non va a buon fine;
  - codice OTP sul cellulare;
  - il titolare, cioè l'inquilino, **non paga nulla: paga il cliente**, cioè ƎE.
- **Fonte, API** [16]: firma One Shot, firma remota e firma automatica, anche con lo standard CSC. Formati PAdES, CAdES, XAdES, ASiC e anche la sola impronta («Hash»). Ambiente di prova e registrazione: non indicati.
- **Fonte, dati** [15] (PDS v. 3.6 del 28/5/2025): sedi operative a Roma, Milano e Padova. Registri dell'emissione conservati da 20 a 23 anni. Certificati da un'ora a tre anni e tre mesi.
- **Prezzo:** listino delle API e della One Shot **non pubblico**. Pubblici solo i prodotti per chi firma in proprio: firma qualificata 83 € per 3 anni e app «infocertsign Business» 249 € l'anno [17].
- **Da verificare:** metodi di identificazione ammessi per la One Shot (SPID, CIE, video), descritti nel manuale operativo, non letto; luogo dei dati e sub-responsabili (informativa aggiornata non trovata).

**Namirial, con Uanataca, Italia e Spagna**
- **Fonte, prodotto** [19][20]:
  - certificati **monouso** per firma avanzata o qualificata, validi al massimo 60 minuti e per un solo uso;
  - l'identificazione si fa al momento con **SPID o CIE**;
  - l'API One-Shot di Uanataca riceve solo l'**impronta** del documento, che resta dal cliente;
  - previsti codice via SMS e VideoID; ambiente di prova citato;
  - «eSAW One-Shot» unisce i certificati monouso alla piattaforma eSignAnyWhere.
- **Fonte, prezzo** [21]:
  - eSignAnyWhere Basic «a partire da» 300 € per 1.000 documenti, solo firma semplice;
  - Premium da 420 € per 2.000 documenti, con firma avanzata e codice via SMS;
  - firma remota e **API solo nel piano Corporate, su richiesta**.

  La pagina non dice se i prezzi sono annuali. Per la nostra integrazione: **listino non pubblico**.
- **Fonte, dati** [22] (scheda sul trattamento per eSignAnyWhere, rev. 05 di luglio 2026):
  - Namirial è responsabile del trattamento; dati su server in UE/SEE;
  - sub-responsabili: AWS EMEA (SEE); Zendesk e Atlassian per l'assistenza; Var Group (Yarix) per la sicurezza; vari fornitori di SMS ed email (Fastweb, Orange Espagne, Link Mobility, Vonage, Mitto, Mailjet). **Twilio Ireland con trattamento «SEE/USA»**;
  - alcuni terzi «possono operare fuori dal SEE, Stati Uniti compresi»;
  - conservazione fino a 10 anni per difendersi in giudizio.

  L'informativa generale del 23/10/2026 manda l'elenco completo dei responsabili su richiesta [23].

**Aruba PEC, Italia**
- **Fonte** [24][25]:
  - firma remota per una persona: 45,90 € (OTP su app) o 48,90 € (chiavetta OTP), validità 3 anni;
  - per le imprese: integrazione con il server di firma remota (ARSS), firma automatica via API, firma avanzata con OTP, firma grafometrica. Nessun prezzo per le imprese.
- **Da verificare:** una firma «One Shot» con SPID è descritta solo da una guida di terzi; sulle pagine ufficiali non è stata trovata. Luogo dei dati e contratto sui dati non letti. Per l'integrazione: **listino non pubblico**.

**Intesi Group, Italia**
- **Fonte** [26]:
  - piattaforma con API per firma, autenticazione e codici (Time4Mind, TIME4ID, API CSC);
  - con «PkBox Remote» resta sul server del cliente il documento: al servizio va solo l'impronta;
  - prezzo pubblico solo per «Easy Cloud Signature», 29 € più IVA a persona (durata non letta).
- **Non indicati:** certificato usa e getta, SPID o CIE, luogo dei dati. Per l'integrazione: **listino non pubblico**.

**Youtrust (ex Yousign), Francia**
- **Fonte, prezzo** [27]:
  - piani API annuali: Plus 1.248 € l'anno («da 104 € al mese») e Pro 1.548 € l'anno, ciascuno con **500 firme l'anno**;
  - ogni firma in più costa 2 €; si conta **una firma per ogni firmatario**;
  - firma avanzata, firma qualificata e verifica dell'identità sono **servizi aggiuntivi senza prezzo** pubblicato;
  - ambiente di prova gratuito per 40 giorni.
- **Fonte, dati** [28][29]:
  - dati e documenti ospitati in **Francia** (OVH, AWS, Azure);
  - contratto sui dati dentro le condizioni generali;
  - verifica dell'identità con Ubble e Netheos (Francia); autorità di certificazione Swisscom (**Svizzera**), che tratta i dati d'identità dei firmatari;
  - diversi sub-responsabili negli Stati Uniti (HubSpot, Aircall, Atlassian, Segment e altri) per i dati dei clienti abbonati, non dei firmatari;
  - elenco aggiornato al 2/7/2026.
- **Da verificare:** se la firma qualificata accetta SPID o CIE; quale autorità la rilascia (Youtrust stessa o Swisscom).

**Docusign, solo per confronto sui dati**
- **Fonte** [30][31][13]:
  - la firma qualificata passa da Docusign France, che è nella lista francese;
  - con un account nella regione europea i documenti restano in quella regione;
  - i «dati della transazione» possono essere copiati in più regioni: nome ed email di mittente e firmatario, registro delle operazioni con indirizzi IP e identificativi del dispositivo;
  - le società del gruppo fanno assistenza «a turno sul mondo» anche da Stati Uniti, India e altri Paesi fuori UE;
  - per gli SMS usa TeleSign, Vonage e Prove.
- **Inferenza:** è l'opzione con più dati fuori dall'UE; non serve oltre il confronto.

### 2.3 Sintesi

| Fornitore | Livello per chi non ha firma | Usa e getta | Prezzo per 100–200 firme | Dati | API |
| --- | --- | --- | --- | --- | --- |
| InfoCert | qualificata [14] | sì, 60 min o 30 giorni [14] | listino non pubblico | Italia (sedi) [15]; luogo dei server Da verificare | sì [16] |
| Namirial / Uanataca | avanzata o qualificata [19] | sì, 60 min [19] | listino non pubblico (API solo Corporate) [21] | UE/SEE; un fornitore di SMS anche USA [22] | sì [20] |
| Aruba | qualificata (firma remota) [24] | non trovato | listino non pubblico | Da verificare | sì, ARSS [25] |
| Intesi | qualificata (cloud) [26] | non trovato | listino non pubblico | solo l'impronta con PkBox Remote [26] | sì [26] |
| Youtrust | qualificata, a parte [27] | non indicato | almeno 1.248 € l'anno più la qualificata [27] | Francia; Svizzera per l'autorità [28] | sì [27] |
| Docusign | qualificata (Docusign France) [13] | non letto | non letto | regione UE, ma dati della transazione e assistenza anche fuori UE [30][31] | sì |

## 3. Firmare con SPID o con la CIE

### 3.1 La «firma con SPID» (art. 20 CAD, linee guida AgID)

**Fonte** [7], «Regole tecniche per la sottoscrizione elettronica di documenti ai sensi dell'art. 20 del CAD», v. 2.0, determinazione AgID 157/2020:
- **Chi fa cosa.** Il servizio online (per noi Connetto) deve conoscere il **codice fiscale** di chi firma. Prepara il documento in **PDF/A-2a** e vi appone un proprio **sigillo elettronico qualificato** invisibile (PAdES). Il sigillo usa un certificato di un prestatore qualificato, con la politica «spidSignature», limitato a questo uso. Poi il servizio manda il documento al gestore SPID dell'utente.
- **Il gestore SPID:**
  - riconosce la persona con **SPID di livello 2 o superiore** e controlla che il codice fiscale corrisponda;
  - le mostra il documento e raccoglie il consenso;
  - appone il **proprio sigillo qualificato** e restituisce il documento;
  - non lo conserva, salvo un servizio di conservazione scelto dall'utente.
- **Obblighi:**
  - il servizio che offre la firma con SPID deve offrire **anche la firma qualificata**: obbligo detto «improrogabile» (§8.2);
  - il gestore SPID non conserva i documenti (§8.1).
- **Volontaria.** Le regole si adottano «su base volontaria» dagli enti federati (§11). Valgono solo le identità SPID di persona fisica e per uso professionale.
- **Valore:** forma scritta e art. 2702 c.c., per l'art. 20, c. 1-bis, del CAD [3].
- **Inferenza:**
  - per usarla ƎE, o la piattaforma, dovrebbe diventare fornitore di servizi SPID, comprare un certificato qualificato di sigillo e offrire comunque anche la firma qualificata. Sono tutti costi e contratti in più;
  - l'inquilino potrebbe firmare solo se il suo gestore SPID offre il servizio.
- **Da verificare:**
  - quali gestori SPID lo offrono oggi: un articolo del 2022 citava **Lepida** come unico (fonte secondaria);
  - costi e condizioni per un privato che aderisce a SPID: non letti.

### 3.2 SPID per farsi riconoscere da un prestatore

È un'altra cosa: SPID serve solo a **riconoscere** la persona, poi il prestatore emette un certificato qualificato, anche usa e getta. Namirial lo scrive per SPID e CIE [19]; InfoCert prevede l'identificazione secondo il proprio manuale [14].
- **Fonte:** il costo è del cliente, non di chi firma [14].
- **Da verificare** (parere tecnico-legale):
  - dopo il regolamento 2024/1183, per il riconoscimento a distanza con un mezzo elettronico serve il livello **elevato** (art. 24, par. 1 bis, lett. a) [1];
  - come i prestatori usino SPID di livello 2 per il certificato qualificato: con un altro metodo confermato da un organismo di valutazione (lett. c) o con regole transitorie. Le fonti lette non lo dicono.

### 3.3 La firma con la CIE (CieSign)

**Fonte** [8][9]:
- la CIE è un «dispositivo di firma elettronica **avanzata**», non qualificata;
- si firma con l'app **CieSign** del Poligrafico, gratuita su Google Play e App Store, oppure col «Software CIE» sul computer con un lettore;
- servono la carta, il **PIN** (sul telefono anche la biometria) e un **telefono con NFC**;
- formati: PAdES per i PDF, CAdES per gli altri file;
- si verifica con CieSign, con la suite del Ministero della Difesa o, per i PDF, con Acrobat;
- secondo il Ministero la firma «può essere usata in qualsiasi contesto», tranne gli atti dell'art. 1350, nn. 1–12, del codice civile, e dà forma scritta e valore dell'art. 2702 c.c.

**Inoltre:**
- **Fonte:** la versione per computer di CieSign è a codice aperto (`github.com/italia/cie-middleware`). La pagina «Integra Firma con CIE» non spiega come integrarla in un servizio privato [9].
- **Fonte:** nella lista di fiducia italiana il Ministero dell'Interno compare con servizi «riconosciuti a livello nazionale», non qualificati [11].
- **Inferenza:**
  - è una strada **senza costi né fornitori**: l'inquilino firma il PDF con CieSign e lo carica, come chi ha già una firma digitale;
  - gli serve però un telefono con NFC e il PIN della carta, che molti non ricordano;
  - nel pilota diventerebbe il quarto modo di firmare.
- **Da verificare (parere):** il DPCM dice che la CIE sostituisce la firma avanzata «nei confronti della pubblica amministrazione» (art. 61, c. 2) [6]; il Ministero dice «in qualsiasi contesto» [8]. Va chiarito quanto vale tra privati, per esempio tra inquilino e proprietario.

### 3.4 Il portafoglio europeo (dopo il pilota)

- **Fonte** [1], art. 5 bis:
  - ogni Stato fornisce almeno un portafoglio europeo di identità digitale entro 24 mesi dagli atti di esecuzione (par. 1);
  - il portafoglio deve permettere a **tutte le persone fisiche** di firmare con **firma qualificata**, gratuitamente (par. 5, lett. g);
  - gli Stati possono limitare la gratuità agli usi **non professionali**.
- **Inferenza:** quando ci sarà, l'inquilino avrà una firma qualificata gratuita e l'opzione B potrebbe non servire più.
- **Da verificare:** la data e la forma in Italia (IT-Wallet).

## 4. Verificare sul nostro server una firma caricata

### 4.1 DSS della Commissione europea

- **Fonte** [32][33][34]:
  - «Digital Signature Service», mantenuto dalla Commissione europea (eSignature building block), sviluppato da Nowina;
  - licenza **LGPL-2.1**, che la Commissione definisce «non virale»;
  - scritto in **Java**: per usarlo serve Java 8 o più, consigliato il 17; per le demo il 17;
  - ultima versione **6.5.1, ottobre 2026**, compatibile con le liste di fiducia v6;
  - crea e **verifica** firme PAdES, CAdES, XAdES, JAdES e ASiC;
  - scarica e controlla la **lista delle liste europea** e le liste nazionali;
  - tre esiti: superato, indeterminato, fallito;
  - stabilisce se un certificato è qualificato secondo la norma ETSI TS 119 615, al momento della firma e della verifica;
  - ha moduli di servizio REST e SOAP e un'applicazione dimostrativa.
- **Fonte, peso** [35]: il pacchetto dimostrativo 6.5.1 completo pesa **617 MB** (aggiornato il 14/10/2026). Contiene applicazione, server e ambiente Java.
- **Fonte:** esiste una verifica in linea della Commissione [32]. **Inferenza:** non va usata, perché il documento partirebbe verso un servizio esterno.

### 4.2 La lista di fiducia

- **Fonte:** la lista europea indica dove sono le liste nazionali, per esempio quella italiana di AgID e quella francese [12]. Sono file XML firmati, come chiede l'art. 22 [1]. La lettura di questa ricerca dimostra che si scaricano e si leggono senza account [11][13].
- **Inferenza:**
  - DSS le scarica da solo e le tiene in una copia locale; vanno aggiornate ogni giorno, non a ogni verifica;
  - si scaricano solo le liste, mai i documenti;
  - il controllo dei certificati revocati (OCSP o CRL) chiede invece al prestatore lo stato del certificato, cioè il numero del certificato, non il documento.

### 4.3 Strade in TypeScript

- **Fonte** [36]: PKI.js 4.0.1 (27/10/2026, BSD-3-Clause, circa 16,7 milioni di scaricamenti a settimana) dà i pezzi: CMS (il formato dei .p7m), certificati, OCSP, marche temporali, un esempio per la firma in un PDF. Funziona in Node.js.
- **Inferenza:**
  - con PKI.js si controlla che il documento non sia stato modificato e chi l'ha firmato;
  - la verifica completa (catena fino alla lista di fiducia, qualificato o no, revoca al momento della firma, marca temporale) andrebbe scritta da noi. È delicata, e DSS la fa già.

### 4.4 AgID e gli strumenti di verifica

- **Fonte:** la pagina di AgID sui programmi di verifica non si è aperta, perché il sito era in manutenzione (Fonti non raggiunte).
- **Fonte:** InfoCert indica il suo programma gratuito «Infocert Sign Desktop» per verificare firme e certificati [15]; il Ministero indica CieSign e la suite della Difesa per la CIE [8].
- **Da verificare:** se questi programmi verificano tutto sul computer o mandano dati a un server.

### 4.5 Come si potrebbe fare (**Inferenza**, nessuna scelta)

1. **Nel pilota, sul computer dell'agenzia.** L'operatore apre il file firmato con DSS avviato in locale, o con un verificatore gratuito, e registra in Connetto l'esito: chi ha firmato, quando, livello. Costo zero; 100–200 verifiche l'anno sono poche.
2. **Dopo, sul server.** Un piccolo servizio Java con DSS accanto all'applicazione Node.js, chiamato solo all'interno.
   - Costa un secondo contenitore su Scalingo: per un'applicazione accesa l'ARCHITECTURE.md indica circa 14 € al mese.
   - Da misurare: la memoria che serve, e se basta un contenitore piccolo. Il pacchetto dimostrativo da 617 MB non serve: bastano i moduli di DSS.
3. **Cosa mostrare all'operatore:** nome nel certificato; corrisponde all'inquilino?; livello (qualificata, avanzata con la CIE); data della firma; documento integro; il PDF firmato è proprio il foglio ISTAT emesso da Connetto (stessa impronta del PDF prima della firma).

## 5. Costo per 100–200 firme l'anno

**Inferenza**, calcoli dell'agente sui prezzi pubblici, IVA esclusa. Budget della piattaforma: circa 20 € al mese, cioè 240 € l'anno (ARCHITECTURE.md).

| Strada | Costo annuo stimato | Note |
| --- | --- | --- |
| Pilota attuale (firma digitale propria, foglio a penna, agenzia) | 0 € | Verifica a mano in agenzia |
| Più CieSign (firma avanzata con la CIE) | 0 € | Serve un telefono con NFC e il PIN [8] |
| Youtrust API Plus più firma qualificata | almeno 1.248 € più la qualificata (prezzo non pubblico) | 500 firme incluse; una firma per firmatario [27] |
| InfoCert One Shot, Namirial/Uanataca One-Shot, Aruba ARSS, Intesi | listino non pubblico | Servono preventivi, oggi non autorizzati |
| Comprare a ogni inquilino una firma personale | 29–83 € a persona (Intesi, Aruba 45,90 €, InfoCert 83 € per 3 anni) [17][24][26]: con 150 persone circa 4.350–12.450 € al primo anno | Strada poco sensata: la firma resta dell'inquilino, cambia con gli inquilini, e il riconoscimento è a parte |
| Firma con SPID (art. 20) | sigillo qualificato più adesione a SPID: non letti | Dipende da quali gestori SPID la offrono |
| Firma avanzata offerta da ƎE (codice SMS più audit trail) | polizza da almeno 500.000 € più conservazione 20 anni più fornitore: non stimato | Obblighi dell'art. 57 su ƎE [6] |
| Verifica sul server con DSS | circa 14 € al mese se serve un contenitore in più (Da verificare) | Libero [32] |

## 6. Cosa servirebbe per decidere B

1. **Preventivi** da due o tre prestatori (per esempio InfoCert, Namirial/Uanataca, Youtrust) per circa 150 firme qualificate usa e getta l'anno via API. Domande da fare:
   - come si riconosce la persona (SPID, CIE, video);
   - se all'API va solo l'impronta del documento;
   - dove stanno i dati;
   - costo minimo annuo.

   Serve l'**autorizzazione dell'utente** per contattarli e, dopo, per un account di prova.
2. **Contratto sui dati** (art. 28 GDPR) con il prestatore, nella catena ƎE → piattaforma → prestatore, e l'elenco dei sub-responsabili: per Youtrust anche Svizzera e Stati Uniti [28]; per Namirial Twilio «SEE/USA» [22].
3. **Parere privacy:** dati d'identità e, con il video, immagini del volto trattati dal prestatore; informativa all'inquilino.
4. **Parere legale** sui punti del §8.
5. **Prova tecnica** con dati inventati: DSS su un PDF firmato con CieSign e su uno con firma qualificata. Che cosa riporta per la CIE, che non è qualificata?

## 7. Parere dell'agente

*Parere, non decisione.*

1. **Nel pilota, niente fornitore.** L'unico prezzo pubblico per le piattaforme supera da solo cinque volte il budget dell'intera piattaforma, e gli altri non si conoscono senza preventivo. Per 100–200 firme l'anno di una prova di ricezione, il costo non sembra proporzionato.
2. **Aggiungere CieSign ai modi di firmare.** È una firma avanzata dello Stato, gratis per tutti, e il file si carica come una firma digitale propria. Prima serve il parere sul valore tra privati (§3.3).
3. **Non costruire una firma avanzata in casa** e non offrirla tramite un fornitore: gli obblighi dell'art. 57 (polizza, 20 anni di conservazione, pagina pubblica) ricadono su ƎE.
4. **Verifica:** nel pilota in agenzia, con DSS in locale, registrando l'esito. Sul server dopo, con DSS come piccolo servizio Java, se i volumi crescono o se il controllo a mano pesa.
5. **Se B servirà:** meglio una **firma qualificata usa e getta** di un prestatore (InfoCert o Namirial/Uanataca), che si integra via API e lascia a lui identificazione e prove. Meglio ancora se all'API arriva solo l'impronta del documento. Ma prima conviene vedere quando arriva il portafoglio europeo con la firma qualificata gratuita.

## 8. Dove serve un parere professionale

- **Avvocato, valore della firma come prova di ricezione** dell'aggiornamento ISTAT: basta una firma semplice? Un foglio firmato a penna e scansionato? Serve almeno l'avanzata? Il contratto di locazione chiede qualcosa? Si collega alla domanda già aperta nel ticket 20.
- **Avvocato, art. 60 del DPCM:** la firma avanzata vale solo tra chi firma e chi la offre. Se la offrisse ƎE, varrebbe anche nel rapporto tra inquilino e proprietario?
- **Avvocato, firma con la CIE tra privati:** art. 61, c. 2, del DPCM («nei confronti della pubblica amministrazione») contro la pagina del Ministero («in qualsiasi contesto»).
- **Avvocato o consulente eIDAS:** il riconoscimento con SPID di livello 2 per un certificato qualificato dopo il regolamento 2024/1183 (art. 24, par. 1 bis).
- **Privacy:** contratto sui dati con il prestatore e sub-responsabili fuori UE; dati d'identità e video; per la firma grafometrica dati biometrici (dati particolari) e regole del Garante del 2014; conservazione dei documenti firmati e dei relativi registri. Domande per il parere privacy già previsto (PRODUCT.md §10.10).

## 9. Cosa resta all'utente

Domande per il ticket [Firma dell'inquilino sul nuovo canone ISTAT](../../.scratch/architettura-percorso-1/issues/20-firma-inquilino-istat.md):

1. **Opzione B nel pilota:** si lascia fuori, come propone il parere, o si chiedono preventivi? I preventivi richiedono un'autorizzazione esplicita a contattare i fornitori.
2. **CieSign come quarto modo di firmare** nel pilota, dopo il parere legale sul valore tra privati?
3. **Verifica della firma:** a mano in agenzia con un programma locale nel pilota, o subito sul server?
4. **Budget massimo** che ƎE accetterebbe per la firma, se un giorno la offre a tutti.
5. **Domande per l'avvocato e per il parere privacy** del §8: chi le porta e quando.

## Fonti

Tutte lette il 2/11/2026.

1. Regolamento (UE) n. 910/2014 (eIDAS), testo consolidato al 18/10/2024 con il regolamento (UE) 2024/1183, artt. 3 (nn. 10–15), 5 bis (par. 1 e 5), 5 septies, 22, 24 (par. 1 e 1 bis), 25, 26, 29 bis, 32, 33: https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:02014R0910-20241018. EUR-Lex ha restituito una pagina vuota; letto il testo italiano dall'archivio dell'Ufficio delle pubblicazioni: http://publications.europa.eu/resource/consolidation/2014R0910%2F20241018.ITA (file http://publications.europa.eu/resource/cellar/6a1e14d9-907e-11ef-a130-01aa75ed71a1.0014.02/DOC_2).
2. D.lgs. 82/2005 (CAD), art. 1 (c. 1, lett. s, e c. 1-bis), Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art1
3. CAD, art. 20 (c. 1-bis, 1-ter, 3), Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art20
4. CAD, art. 21 (c. 2-bis, 2-ter), Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art21
5. CAD, art. 24, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art24
6. DPCM 22 febbraio 2013, «Regole tecniche in materia di generazione, apposizione e verifica delle firme elettroniche avanzate, qualificate e digitali», GU n. 117 del 21/5/2013, artt. 55–61: https://www.gazzettaufficiale.it/eli/id/2013/05/21/13A04284/sg (articoli letti uno per uno dalla Gazzetta, per esempio art. 57: https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticolo?art.versione=1&art.idGruppo=5&art.flagTipoArticolo=0&art.codiceRedazionale=13A04284&art.idArticolo=57&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2013-05-21&art.progressivo=0).
7. AgID, «Regole Tecniche per la sottoscrizione elettronica di documenti ai sensi dell'art. 20 del CAD», v. 2.0, determinazione 157/2020, Docs Italia, §§ 2, 3, 3.1, 3.2, 4.1, 4.3, 4.5, 8.1, 8.2, 9, 10, 11: https://docs.italia.it/italia/spid/lg-spid-firma-docs/it/stabile/index.html
8. Ministero dell'Interno, «Firma con CIE – CieSign»: https://www.cartaidentita.interno.gov.it/info-utili/firma-con-cie/
9. Ministero dell'Interno, «Firma Elettronica CIE – CieSign»: https://www.cartaidentita.interno.gov.it/pa-e-imprese/firma-elettronica-cie-ciesign/ e «Integra Firma con CIE – CieSign»: https://www.cartaidentita.interno.gov.it/pa-e-imprese/integra-firma-con-cie-ciesign/
10. Garante per la protezione dei dati personali, provvedimento generale prescrittivo in tema di biometria, 12/11/2014, par. 4.4 (firma grafometrica): https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/3556992
11. AgID, Trusted List italiana (XML), emessa il 24/9/2026, prossimo aggiornamento 24/3/2027: https://eidas.agid.gov.it/TL/TSL-IT.xml
12. Commissione europea, lista delle liste di fiducia (LOTL): https://ec.europa.eu/tools/lotl/eu-lotl.xml
13. ANSSI, Trusted List francese (XML), emessa il 16/10/2026: https://messervices.cyber.gouv.fr/visas/tl-fr_v6.xml (voci «Youtrust» e «Docusign France»).
14. InfoCert, «Allegato B – Tecnico. Certificato di Firma Digitale One-Shot – PMI», v. 1.0 del 23/4/2024: https://www.infocert.it/pdf/firma/ALLEGATO_B_Tecnico_Certificati_Firma_One_Shot_PMI.pdf
15. InfoCert, «PKI Disclosure Statement» ICERT-INDI-PDS, v. 3.6 del 28/5/2025: https://pki.infocert.it/pdf/ICERT_INDI_PDS.pdf
16. InfoCert, portale sviluppatori, «e-Signature & e-Sealing»: https://developers.infocert.digital/e-signature-and-e-sealing/
17. InfoCert, pagina «infocertsign Business + QES»: https://promo.infocert.it/gosign-business-qes
18. InfoCert, comunicato «Let's infocert-sign», 14/9/2023: https://infocert.digital/press-releases/sign-documents-digitally-mobile-with-lets-infocert-sign/ (certificati qualificati emessi per ogni operazione; nessun prezzo).
19. Namirial, «Digital signature certificates» (certificati monouso, SPID e CIE): https://namirial.com/en/trust-services/digital-certificates
20. Namirial / Uanataca, documentazione One-Shot: https://docs.namirial.app/products/namirialpkiaas/one-shot/homepage e eSAW One-Shot: https://docs.namirial.app/products/namirialpkiaas/esaw-one-shot/homepage.md e https://docs.namirial.app/products/namirialpkiaas/esaw-one-shot/enterprise-documentation/products-and-modules/overview.md
21. Namirial, eSignAnyWhere, prezzi: https://www.esignanywhere.net/en/pricing/
22. Namirial, «Data Processing Sheet» eSignAnyWhere / Namirial Sign Enterprise, Mod.Nam_GDPR04 rev. 05, 07/2026: https://static.namirial.com/docs/en/b2b_privacy_eSignAnyWhere.pdf
23. Namirial, Privacy Policy, 23/10/2026: https://www.namirial.com/en/privacy-policy/
24. Aruba PEC, «Acquista firma digitale»: https://www.pec.it/acquista-firma-digitale.aspx
25. Aruba PEC, «Soluzioni business per imprese»: https://www.pec.it/firma-digitale/soluzioni-business-per-imprese.aspx
26. Intesi Group, sito e prodotti: https://www.intesigroup.com/ e https://www.intesigroup.com/en/products/
27. Youtrust (ex Yousign), prezzi API: https://youtrust.com/it-it/prezzi-api e https://youtrust.com/pricing-api (yousign.com rimanda a youtrust.com).
28. Youtrust, elenco dei sub-responsabili, aggiornato al 2/7/2026: https://youtrust.com/subprocessors
29. Youtrust, «Youtrust & the GDPR»: https://help.youtrust.com/en/articles/73158-youtrust-the-gdpr
30. Docusign, «Data residency»: https://docusign.com/privacy/data-residency
31. Docusign, sub-responsabili eSignature, aggiornati all'8/10/2026: https://www.docusign.com/trust/privacy/esignature-subprocessors
32. Commissione europea, Digital Building Blocks, «Digital Signature Service – DSS» (6.5.1, ottobre 2026, LGPL-2.1): https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/Digital+Signature+Service+-++DSS
33. DSS, repository: https://github.com/esig/dss
34. DSS, documentazione: https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/doc/dss-documentation.html
35. DSS, pacchetto dimostrativo 6.5.1 (solo intestazioni lette: 617.073.474 byte, modificato il 14/10/2026): https://ec.europa.eu/digital-building-blocks/artifact/repository/esignaturedss/eu/europa/ec/joinup/sd-dss/dss-demo-bundle/6.5.1/dss-demo-bundle-6.5.1.zip
36. PKI.js: https://github.com/PeculiarVentures/PKI.js; registro npm https://registry.npmjs.org/pkijs (4.0.1 del 27/10/2026, BSD-3-Clause) e https://api.npmjs.org/downloads/point/last-week/pkijs

## Fonti non raggiunte

- **AgID, sito principale** (www.agid.gov.it): ogni pagina rimandava a una pagina di manutenzione. Non letti l'elenco dei prestatori qualificati (sostituito dalla lista di fiducia [11]), la pagina sui programmi di verifica e la notizia sulle linee guida SPID. Il **PDF delle linee guida SPID** su Docs Italia ha dato errore 502; lette le pagine HTML [7].
- **EUR-Lex**: pagina vuota; regolamento letto dall'archivio dell'Ufficio delle pubblicazioni [1].
- **Normattiva** per il DPCM 22/2/2013: «Errore nel caricamento»; letto sulla Gazzetta Ufficiale [6]. Gli articoli 1350 e 2702 del codice civile non sono stati letti.
- **eIDAS Dashboard** (eidas.ec.europa.eu): la pagina mostra i dati solo con JavaScript; lette le liste XML [11][12][13].
- **InfoCert:**
  - listino della One Shot e delle API non trovato;
  - informativa privacy aggiornata non trovata: il PDF trovato è del 2018 e non leggibile dallo strumento;
  - manuale operativo ICERT-INDI-MO (metodi di identificazione) non letto.
- **Namirial**: pagina «Remote signature» vuota (contenuto solo in JavaScript); la pagina dei prezzi di eSignAnyWhere non dice il periodo.
- **Aruba**: pagina «firma-digitale-remota» inesistente (404); firma One Shot, listino API, luogo dei dati e contratto sui dati non trovati sulle pagine ufficiali.
- **Intesi Group**: listino API, luogo dei dati e contratto sui dati non trovati.
- **Youtrust**: prezzo della firma qualificata, della firma avanzata e della verifica d'identità non pubblicati.
- **Lepida** (firma con SPID) e **elenco dei gestori SPID** che offrono la firma: trovate solo fonti secondarie, non usate come fatto.
- **Ministero dell'Interno**: manuale «Entra con CIE» per i privati non letto.
