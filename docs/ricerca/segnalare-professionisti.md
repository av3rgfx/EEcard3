# Segnalare professionisti: privacy, trasparenza e regole delle professioni

Ricerca del 4 novembre 2026, svolta dall'agente in sequenza con la skill `research`, su fonti primarie lette tutte il 4/11/2026. Risponde al ticket [03 «Ricerca: segnalare professionisti, fra privacy, trasparenza e regole delle professioni»](../../.scratch/proposte-collaboratore-4-novembre/issues/03-ricerca-segnalare-professionisti.md), punti 5–8 dell'[audio del 4/11/2026](../../.scratch/proposte-collaboratore-4-novembre/audio-4-novembre.md). ƎE vorrebbe mostrare nell'app, e forse sul sito, professionisti che conosce (tecnici della compravendita, notai, chi assiste nelle aste) come «visibilità gratuita». Chi può assistere nelle aste è nella ricerca [aste-immobiliari.md](aste-immobiliari.md) e qui non si ripete.

**Non è un parere legale e non è una scelta.** Nessun contatto con professionisti, ordini o autorità; nessun account. **Non si dà per vero** che ci siano o non ci siano compensi, scambi di clienti o altri rapporti economici fra ƎE e i professionisti: si studia cosa va detto nei due casi.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato. I rimandi «privacy-dati §» sono alle sezioni di [privacy-dati.md](privacy-dati.md); «sezione» rimanda a questo file.

## In breve

- **Il nome e il telefono di un professionista sono dati personali** se è una persona fisica, anche con ditta individuale. Il GDPR non protegge nome e contatti di una società, ma sì i nomi delle persone che vi lavorano [1] (**Fonte**; per le società **Inferenza**).
- **Che un dato sia pubblico non basta per ripubblicarlo.** L'albo professionale si può diffondere per legge [2], ma il Garante ha sanzionato chi ha usato un indirizzo preso dall'albo per uno scopo diverso, «a nulla rilevando» che fosse pubblicato [4]. Per l'EDPB un dato reso pubblico non si può trattare in automatico per legittimo interesse [5] (**Fonte**).
- **La strada più semplice è l'accordo scritto del professionista** a comparire, con i dati scelti da lui, revocabile in ogni momento e con cancellazione rapida da app e sito (**Inferenza**; la base giuridica esatta va confermata dal parere privacy).
- **Sito pubblico e spazio riservato non sono uguali.** Mostrare i dati a clienti determinati è una «comunicazione»; metterli su un sito aperto è una «diffusione», a persone indeterminate [3] (**Fonte**). Il sito pesa di più: chiunque lo legge e lo copia (**Inferenza**).
- **Cosa dire ai clienti.** La legge non obbliga a scrivere «non ci guadagniamo». Vieta però di dire cose false o di tacere informazioni rilevanti su collegamenti, approvazioni, pubblicità a pagamento e ordine dei risultati [6][7][8][9] (**Fonte**). Se ci sono rapporti economici vanno detti prima che il cliente scelga. Se non ci sono, «gratuita» deve essere vera in tutti i sensi, anche senza vantaggi indiretti (**Inferenza**).
- **Il mediatore deve restare imparziale.** La legge rende incompatibile la mediazione con le professioni intellettuali dello stesso settore e con le «situazioni di conflitto di interessi» [14] (**Fonte**). Se un compenso da un professionista segnalato sia ammesso è una domanda per l'avvocato (sezione 6).
- **Le professioni vietano di pagare per avere clienti.** Il divieto è esplicito per avvocati [21] e notai [16]. Per ingegneri, architetti e geometri è vietato procurarsi clienti con vantaggi o mezzi scorretti [18][19][20]. Ingegneri e architetti non possono accettare compensi da terzi senza dirlo al cliente, o del tutto [18][19]. La pubblicità informativa con ogni mezzo è ammessa, se veritiera e corretta [15] (**Fonte**).
- **Chi consiglia di solito non risponde del lavoro altrui, chi incarica sì.** Se il cliente sceglie e incarica da sé, il professionista risponde del suo lavoro. Se ƎE incarica per conto del cliente, risponde almeno della scelta [13]. Una liberatoria non esclude dolo o colpa grave e verso i consumatori è sospetta [10][13] (**Fonte** per le norme, **Inferenza** per l'applicazione).

## 1. Le situazioni da distinguere

| Dove | Chi inserisce | Chi vede | Domanda principale |
| --- | --- | --- | --- |
| **A. Spazio riservato** nell'app | ƎE | Solo i clienti con un rapporto con una casa (PRODUCT.md §7) | Base giuridica e informativa al professionista |
| **B. Sito pubblico** dell'agenzia | ƎE | Chiunque | Come in A, più diffusione e indicizzazione |
| **C. Altre agenzie**, «con un clic» (punto 8) | Ogni agenzia | I suoi clienti | Chi è titolare e chi informa il professionista |

Per ognuna ci sono due casi economici: **nessun rapporto** oppure **un rapporto** (compenso per la segnalazione, sconto, scambio di clienti, parentela o società). Nessuno dei due è stato verificato. La situazione C è fuori dalla prima versione (PRODUCT.md §12, 23/10/2026): qui serve solo a non chiudere strade.

## 2. Privacy della pubblicazione

### 2.1 Quando è un dato personale

- **Fonte** [1]: il GDPR protegge le persone fisiche. «Non disciplina» i dati delle persone giuridiche, «compresi il nome e la forma della persona giuridica e i suoi dati di contatto» (cons. 14).
- **Inferenza.** Il geometra con ditta individuale, il notaio, l'ingegnere libero professionista: i loro nome, telefono e mestiere sono dati personali. Per uno studio organizzato come società lo sono i nomi delle persone e i contatti nominativi, non il numero generico dello studio. Mostrare il telefono dello studio invece del cellulare personale riduce i dati (privacy-dati §9, minimizzazione).

### 2.2 Base giuridica

- **Fonte** [1]:
  - consenso per finalità specifiche (art. 6, par. 1, lett. a); si revoca «in qualsiasi momento» e «con la stessa facilità con cui è accordato» (art. 7, par. 3);
  - legittimo interesse (art. 6, par. 1, lett. f), se non prevalgono i diritti dell'interessato, tenuto conto delle sue «ragionevoli aspettative» (cons. 47); in quel caso l'interessato può opporsi (art. 21, par. 1);
  - per un uso diverso da quello della raccolta, il titolare valuta la compatibilità: nesso fra le finalità, contesto, conseguenze, garanzie (art. 6, par. 4).
- **Fonte** [5] (EDPB, linee guida 1/2024, v. 1.0 dell'8/10/2024, messe in consultazione): il legittimo interesse richiede **tre condizioni insieme**: un interesse legittimo, la necessità del trattamento, la prevalenza sui diritti dell'interessato. Che i dati siano stati resi pubblici «non significa automaticamente» che si possano usare così (nota 52). Esempio 6: chi pubblica foto prese da internet, anche se messe online dagli interessati, va oltre ciò che questi possono ragionevolmente aspettarsi.
- **Inferenza.** Per un elenco di professionisti conosciuti, scelto da ƎE, il legittimo interesse è sostenibile solo con difficoltà: il professionista non si aspetta di comparire nell'app di un'agenzia senza saperlo. Un **accordo scritto**, con la scelta dei dati da mostrare e del luogo (app, sito o entrambi), è più semplice da dimostrare e da spiegare. Il parere privacy dirà se trattarlo come consenso o come accordo, cioè contratto (art. 6, par. 1, lett. b). La liberatoria dei tecnici, già prevista per il percorso 2 (PRODUCT.md §5.4), è il posto naturale dove scriverlo.

### 2.3 Dati degli albi

- **Fonte** [2] (Codice privacy, art. 61, c. 2, in vigore dal 19/9/2018): i dati che la legge impone di inserire in un albo professionale possono essere comunicati o diffusi, anche in rete. L'ordine può aggiungere, su richiesta dell'iscritto, altri dati pertinenti (c. 3) e dare a terzi informazioni sulla disponibilità ad assumere incarichi (c. 4).
- **Fonte** [4] (Garante, provv. 1/10/2020, doc. web 9500508): un candidato ha mandato propaganda elettorale alla PEC di un collega presa dall'albo. Il Garante ha dichiarato illecito il trattamento, senza consenso e senza informativa, «a nulla rilevando la circostanza che tale dato personale fosse pubblicato su di un albo professionale». Esito: ammonimento.
- **Inferenza.** L'albo serve a **verificare** che il professionista sia iscritto e non sospeso, prima di inserirlo e poi di tanto in tanto. Non è una fonte da cui copiare contatti da pubblicare senza l'accordo dell'interessato. Che la verifica stessa sia compatibile con l'art. 6, par. 4, è plausibile ma va confermato (sezione 6).

### 2.4 Spazio riservato o sito pubblico

- **Fonte** [3] (Codice privacy, art. 2-ter, c. 4): la **comunicazione** è dare conoscenza dei dati «a uno o più soggetti determinati»; la **diffusione** è darla «a soggetti indeterminati, in qualunque forma», anche mettendoli a disposizione.
- **Inferenza.**
  - Lo **spazio riservato**, visibile solo ai clienti con un rapporto con una casa, è una comunicazione a persone determinate. È coerente con PRODUCT.md §7 (accesso legato al rapporto con la casa).
  - Il **sito pubblico** è diffusione: motori di ricerca, copie, archivi. Se si fa, solo con un consenso o un accordo che nomini il sito, distinto da quello per l'app, e con meno dati (mestiere, nome dello studio, numero dello studio). Il sito è in un repository separato (PRODUCT.md §12, 3/11/2026): dovrebbe leggere da Connetto solo i professionisti che hanno detto sì al sito, come già per le valutazioni.
  - Alla revoca si toglie il professionista da app e sito subito, e dal sito si chiede la rimozione dalle copie dei motori di ricerca, se possibile.

### 2.5 Informativa e diritti

- **Fonte** [1]: se i dati si raccolgono dal professionista, l'informativa si dà alla raccolta (art. 13; privacy-dati §4). Se arrivano da altri, per esempio inseriti da un'agenzia (situazione C), va data entro un mese o al primo contatto e deve dire anche la **fonte** dei dati, compreso se pubblica (art. 14, par. 2, lett. f, e par. 3). Con il legittimo interesse va detto quale interesse si persegue (art. 14, par. 2, lett. b).
- **Inferenza.** L'inserimento «con un clic» non elimina l'informativa né l'accordo: il clic può essere l'invio di un invito, e il professionista compare solo dopo aver accettato. I ruoli fra agenzie e piattaforma seguono privacy-dati §1–3: ogni agenzia è titolare del proprio elenco; la piattaforma ne è responsabile, salvo che usi gli elenchi per scopi propri (per esempio una rete comune fra agenzie), e allora i ruoli cambiano. Durata e cancellazione: privacy-dati §6.

## 3. Cosa va detto ai clienti

### 3.1 Il Codice del consumo si applica?

- **Fonte** [6] (art. 18, testo in vigore dal 24/3/2026; il d.lgs. 30/2026 si applica dal 27/9/2026): «professionista» è chi agisce nella propria attività economica e anche «chiunque agisce in nome o per conto di un professionista». Le pratiche commerciali comprendono ogni azione o dichiarazione, anche la pubblicità, «connesse alla promozione» di un prodotto, cioè beni e servizi, immobili compresi. «Classificazione» è la rilevanza data ai prodotti, comunque presentata (lett. n-bis).
- **Inferenza.** Un elenco di professionisti nell'app o sul sito di un'agenzia fa parte della sua promozione verso i clienti: è probabilmente una pratica commerciale. Se ƎE ricevesse qualcosa dai professionisti, agirebbe anche «per conto» loro. Valgono quindi le regole sotto (**Da verificare** con il parere).

### 3.2 Cosa non si può dire o tacere

**Fonte** (Codice del consumo, testo in vigore dal 24/3/2026):
- è ingannevole dare informazioni false, anche su «la natura, le qualifiche e i diritti del professionista», tra cui affiliazioni e collegamenti (art. 21, c. 1, lett. f) [7];
- è ingannevole tacere informazioni rilevanti, o darle in modo oscuro o tardivo, e non dire l'intento commerciale quando non si capisce dal contesto (art. 22, c. 1–2) [8];
- se il consumatore può **cercare** fra prodotti di professionisti diversi, vanno indicati in una sezione facile da raggiungere i **parametri principali dell'ordine** dei risultati e la loro importanza (art. 22, c. 4-bis) [8];
- se si mostrano **recensioni**, va detto se e come si verifica che vengano da chi ha davvero usato il servizio (art. 22, c. 5-bis); dire che sono verificate senza averlo fatto è sempre scorretto (art. 23, c. 1, lett. bb-ter) [8][9];
- sono sempre ingannevoli: dichiarare approvazioni o autorizzazioni che non ci sono (art. 23, c. 1, lett. d); contenuti presentati come informazione ma pagati (lett. m); risultati di ricerca senza indicare chiaramente la pubblicità a pagamento o i pagamenti per una posizione migliore (lett. m-bis) [9].

**Fonte** [12]: il 23/3/2026 l'AGCM ha sanzionato Trustpilot per 4 milioni di euro per recensioni non controllate e per non aver reso accessibili le informazioni sull'uso dei servizi a pagamento da parte delle imprese (artt. 20, 21, 22 e 23, lett. bb-ter).

### 3.3 Le regole europee sulle piattaforme fra imprese

- **Fonte** [11] (regolamento UE 2019/1150): vale per i «servizi di intermediazione online» che servono a imprese e professionisti per offrire servizi ai consumatori, per facilitare transazioni dirette, **in base a rapporti contrattuali** con loro (art. 2, n. 2). Chi li fornisce scrive nei termini e condizioni i parametri principali del posizionamento (art. 5, par. 1) e, se si può migliorare la posizione pagando, anche questo e i suoi effetti (art. 5, par. 3). Le piccole imprese sono esentate dal sistema interno dei reclami (art. 11, par. 5).
- **Inferenza.** Un elenco gratuito, senza contratto con i professionisti, probabilmente non rientra. Se i professionisti firmano condizioni per comparire (la liberatoria) e i clienti li contattano dall'app, potrebbe rientrare. **Da verificare** con il parere, soprattutto per la situazione C, dove la piattaforma servirebbe più agenzie e più professionisti.

### 3.4 Le regole del mediatore

**Fonte:**
- il mediatore mette in relazione le parti «senza essere legato ad alcuna di esse da rapporti di collaborazione, di dipendenza o di rappresentanza» (c.c., art. 1754) [13];
- deve comunicare alle parti «le circostanze a lui note, relative alla valutazione e alla sicurezza dell'affare», che possono influire sulla sua conclusione (c.c., art. 1759) [13];
- la mediazione è incompatibile con le attività d'impresa dello stesso settore, con l'«esercizio di professioni intellettuali afferenti al medesimo settore merceologico» e «comunque in situazioni di conflitto di interessi» (l. 39/1989, art. 5, c. 3, in vigore dal 27/8/2022) [14];
- il mediatore deve avere una polizza per i rischi professionali e a tutela dei clienti (l. 39/1989, art. 3, c. 5-bis) [14].

**Inferenza:**
- Il dubbio del collaboratore su «quanto rientri nel proprio lavoro» (punto 7) ha una risposta parziale: **indicare** professionisti non è svolgere la loro professione; **farla**, per esempio preparare pratiche tecniche o dare consulenza legale, toccherebbe l'incompatibilità dell'art. 5.
- Un compenso da un professionista segnalato a un cliente della compravendita potrebbe creare proprio un conflitto di interessi o un legame con una delle parti. Se sia ammesso, e a quali condizioni, va chiesto all'avvocato prima di parlarne come ipotesi (sezione 6).
- Un rapporto economico con il notaio o il tecnico consigliato è probabilmente una circostanza che il cliente deve conoscere (art. 1759). **Da verificare.**

### 3.5 Cosa scrivere, nei due casi

**Inferenza** dalle norme della sezione 3; il testo è da far rivedere:

| Caso | Da dire | Da evitare |
| --- | --- | --- |
| **Nessun rapporto economico** | Chi sono (professionisti che l'agenzia conosce in zona), che il cliente sceglie liberamente anche altri, che l'agenzia non riceve compensi per indicarli, solo se è vero anche per i vantaggi indiretti (clienti mandati in cambio, sconti) | «Certificati», «garantiti», «i migliori», «partner ufficiali»; parlare di sponsor (fa pensare a un pagamento) |
| **Un rapporto economico** | Quale rapporto, con chi, e che effetto ha (per esempio sulla posizione nell'elenco); detto accanto al nome e prima della scelta, non in fondo alle condizioni | Mescolare chi paga e chi no senza distinguerli; presentarlo come consiglio neutrale |
| **Ordine dell'elenco** | Un criterio semplice e dichiarato (per mestiere, poi alfabetico) | Un ordine che sembra un giudizio di merito senza spiegazione |
| **Ruoli** (punto 10) | Cosa fa l'agenzia (mediazione) e cosa fanno notaio e tecnico; ognuno risponde del proprio lavoro | Far credere che l'agenzia segua o controlli il lavoro del professionista |

Una frase possibile, da far rivedere al parere: «Professionisti che conosciamo in zona. Non riceviamo compensi per indicarli. Puoi rivolgerti a chi preferisci.»

## 4. Regole delle professioni

**Fonte, regola comune** [15] (DPR 137/2012, art. 4): la pubblicità informativa è ammessa «con ogni mezzo» per attività, specializzazioni, titoli, struttura dello studio e compensi; deve essere pertinente, veritiera e corretta, non equivoca, ingannevole o denigratoria. La violazione è un illecito disciplinare e può violare il Codice del consumo. Il decreto vale per le professioni regolamentate e contiene anche norme sui notai (art. 1 e art. 11).

| Professione | Testo letto | Pagare o dare vantaggi per avere clienti | Compensi da terzi e conflitti | Pubblicità e informazione |
| --- | --- | --- | --- | --- |
| **Notai** | Legge notarile, art. 147 [16]; i Principi di deontologia del CNN **non letti** (sito non raggiungibile) | Punito chi «si serve dell'opera di procacciatori di clienti» o di pubblicità non conforme all'art. 4 del DPR 137/2012 (c. 1, lett. c) | Principi non letti; nel 2026 il CNN ha modificato gli artt. 38, 39 e 59, sull'equo compenso [17] | Art. 4 DPR 137/2012 |
| **Ingegneri** | Codice CNI aggiornato al 23/6/2026; ogni Ordine lo recepisce con una propria delibera [18] | Vietato ottenere incarichi «fornendo vantaggi o assicurazioni esterne al rapporto professionale» (16.2) | Niente compensi da terzi senza dire al committente «natura, motivo ed entità» e avere un'autorizzazione scritta (4.5); niente prestazione con offerte che compromettono l'indipendenza (4.6); incompatibilità se il proprio interesse contrasta con i doveri (22.1) | Pubblicità veritiera e decorosa (9); «abuso di mezzi pubblicitari» è concorrenza illecita (16.5 f) |
| **Architetti** | Codice CNAPPC, in vigore dal 2/12/2024 [19] | Vietato l'accaparramento di clientela «con modi non conformi alla correttezza e al decoro» (19.1) | Non deve «accettare o sollecitare premi o compensi da terzi interessati»: illecito grave (14.4); astensione per conflitto di interessi (31); patti con imprese sui servizi resi al proprio committente vietati (32) | Pubblicità informativa con ogni mezzo, veritiera e corretta (36) |
| **Geometri** | Codice CNGeGL del 2007, modificato il 18/10/2023 [20] | Concorrenza sleale: «qualunque altro mezzo illecito volto a procurarsi la clientela» (10 c) | Indipendenza e nessuna «interferenza tra professione e affari» (6); avvisare i committenti di interessi contrapposti (26 b) | Pubblicità informativa trasparente; vietata quella ingannevole (12) |
| **Avvocati** | Codice deontologico forense, aggiornamento 2026 [21] | Vietato acquisire clienti «a mezzo di agenzie o procacciatori» (37.1); vietato offrire o pagare «provvigioni o altri compensi quale corrispettivo per la presentazione di un cliente» (37.2) o vantaggi per ottenere incarichi (37.3) | Vietato offrire, senza richiesta, una prestazione a una persona determinata per un affare specifico (37.5) | Niente informazioni comparative o suggestive (35.2); indicare titolo, studio e Ordine (35.3) |

**Inferenza:**
- Un elenco gratuito, scelto dall'agenzia e accettato dal professionista, non contrasta con i testi letti: per il professionista è pubblicità informativa con un mezzo di terzi. Il contenuto deve però rispettare le sue regole: per gli avvocati niente «il migliore» né confronti [21]; per tutti dati veri e verificati.
- **Il rischio sta nei soldi e nei vantaggi.** Un compenso del professionista all'agenzia per ogni cliente presentato è vietato in modo esplicito agli avvocati [21] e, come uso di procacciatori, ai notai [16]. Per ingegneri, architetti e geometri rientrerebbe con buona probabilità nei «vantaggi» o «mezzi illeciti» per procurarsi clienti [18][19][20]. Il caso opposto, l'agenzia che dà qualcosa a un ingegnere o un architetto, tocca il divieto di compensi da terzi [18][19].
- Ogni professionista risponde della propria deontologia davanti al proprio Ordine. Prima di comparire può chiedere al suo Ordine se la presenza nell'elenco va bene: è una sua scelta, non un compito di ƎE.
- **Da verificare:** cosa dicono i Principi di deontologia dei notai vigenti su pubblicità, presenza in elenchi di terzi e rapporti con agenzie immobiliari e mediatori.

## 5. Responsabilità di chi consiglia

**Fonte** [13] (codice civile):
- chi svolge un'attività professionale deve adempiere con la diligenza propria di quell'attività (art. 1176, c. 2);
- chi, per adempiere una **propria** obbligazione, si vale dell'opera di terzi «risponde anche dei fatti dolosi o colposi di costoro» (art. 1228);
- il mandatario che si fa sostituire senza autorizzazione risponde dell'operato del sostituto; se il mandante aveva autorizzato la sostituzione senza indicare la persona, risponde «soltanto quando è in colpa nella scelta» (art. 1717);
- chi causa un danno ingiusto con dolo o colpa lo risarcisce (art. 2043);
- è nullo il patto che esclude o limita in anticipo la responsabilità per dolo o colpa grave (art. 1229).

**Fonte** [10] (Codice del consumo, art. 33, c. 2, lett. a e b): nei contratti con i consumatori si presumono vessatorie le clausole che escludono o limitano la responsabilità del professionista o le azioni del consumatore in caso di inadempimento.

**Fonte**: ingegneri e architetti devono comunicare al committente, all'incarico, gli estremi della propria polizza e il massimale [18] (8.2) [19] (34).

**Inferenza**, tre situazioni:

| Situazione | Chi risponde del lavoro | Cosa riduce il rischio |
| --- | --- | --- |
| **ƎE indica, il cliente sceglie e incarica** | Il professionista, verso il suo cliente. ƎE solo per un proprio errore: per esempio indicare chi sa sospeso, o tacere ciò che sa (artt. 2043, 1759) | Verifica dell'iscrizione all'albo; avvertenza vera sui ruoli; nessuna promessa sul risultato |
| **ƎE incarica per conto del cliente**, su sua richiesta | ƎE almeno per la colpa nella scelta, se autorizzata; per tutto, se non autorizzata (art. 1717) | Incarico scritto del cliente che autorizza o, meglio, sceglie lui il nome |
| **Il lavoro fa parte di ciò che ƎE vende** (per esempio una pratica inclusa nell'adesione) | ƎE, anche per gli errori del professionista (art. 1228) | Non includere prestazioni professionali nell'adesione senza un parere; o farlo con un contratto e una polizza adeguati |

- **La liberatoria non è uno scudo.** Non esclude dolo e colpa grave [13] e, verso i consumatori, una clausola che limita la responsabilità si presume vessatoria [10]. L'avvertenza utile è quella che descrive bene i ruoli, coerente con il punto 10 dell'audio (il mediatore risponde della mediazione; notaio e tecnico del loro lavoro).
- Questa separazione è già nelle regole del prodotto: la piattaforma «non sostituisce i professionisti abilitati» e non promette professionisti «che non hanno un accordo» (PRODUCT.md §9).
- **Da verificare:** se la polizza di ƎE come mediatore [14] copra anche i danni legati a una segnalazione o a un incarico dato per il cliente.

## 6. Dove serve un parere professionale

- **Privacy** (si aggiunge al parere già previsto, PRODUCT.md §10.10):
  1. Per un elenco di professionisti nell'app di un'agenzia, quale base giuridica: consenso, accordo (contratto) o legittimo interesse? E per il sito pubblico?
  2. Si possono usare i dati dell'albo per verificare l'iscrizione e la sospensione prima e durante la presenza nell'elenco?
  3. Con più agenzie che inseriscono i propri professionisti: ogni agenzia è titolare del suo elenco? La piattaforma diventa titolare se mostra una rete comune?
- **Avvocato (mediazione):**
  1. Un'agenzia immobiliare può ricevere compensi, sconti o altri vantaggi dai professionisti che indica ai clienti della compravendita, alla luce dell'art. 1754 c.c. e dell'art. 5, c. 3, della l. 39/1989? Se sì, a quali condizioni e con quale informazione al cliente?
  2. Un rapporto economico con il notaio o il tecnico indicato è una «circostanza» da comunicare ai sensi dell'art. 1759 c.c.?
  3. Fino a dove l'agenzia può aiutare il cliente nelle pratiche della compravendita senza esercitare una professione intellettuale dello stesso settore?
- **Avvocato (consumo):**
  1. L'elenco nell'app e sul sito è una pratica commerciale dell'agenzia? Il testo della sezione 3.5 è corretto nei due casi?
  2. Con una liberatoria firmata e i contatti dall'app, la piattaforma diventa un servizio di intermediazione online del regolamento 2019/1150?
- **Avvocato e assicuratore (responsabilità):** la polizza obbligatoria del mediatore copre una segnalazione sbagliata o un incarico dato per conto del cliente? Come si scrive l'avvertenza sui ruoli?
- **Ordini professionali**, a cura di ciascun professionista e non di ƎE: la presenza nell'elenco di un'agenzia, gratuita, è compatibile con il proprio codice? Per i notai, cosa dicono i Principi vigenti sui rapporti con agenzie e mediatori?

## 7. Domande aperte

Per l'utente e il collaboratore di ƎE, nel ticket:
1. **Rapporti economici:** oggi esiste qualche rapporto con i professionisti da indicare, anche indiretto (clienti mandati a vicenda, sconti, parentele, società)? Il collaboratore descrive conoscenze locali senza compensi: va confermato, perché cambia cosa si scrive.
2. **Dove:** solo nell'app (spazio riservato) o anche sul sito? Il sito richiede un sì separato del professionista.
3. **Chi e quali dati:** persone o studi? Mestiere, nome dello studio, numero dello studio, oppure anche cellulare ed email personali?
4. **Contatto:** il cliente chiama da sé, oppure passa da Connetto come per i tecnici della casa (SMS al tecnico, PRODUCT.md §12, 3/11/2026)? Nel secondo caso passano al professionista anche dati del cliente.
5. **Ruolo di ƎE:** solo indicare, oppure anche incaricare per conto del cliente? Cambia la responsabilità (sezione 5).
6. **Recensioni o giudizi** sui professionisti: previsti? Se sì, si applicano le regole della sezione 3.2.
7. **Altre agenzie** (punto 8): se e quando, lo decide la direzione futura; il «clic» deve restare un invito che il professionista accetta.

## Fonti

Tutte lette il 4/11/2026.

1. Regolamento (UE) 2016/679 (GDPR), considerando 14 e 47, artt. 6 (par. 1, lett. a, b, f; par. 4), 7 (par. 3), 13, 14 (par. 2 e 3), 21 (par. 1). Testo pubblicato dal Garante, aggiornato alle rettifiche della GUUE L 127 del 23/5/2018, doc. web 6264597: https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/6264597 (PDF: https://www.garanteprivacy.it/documents/10160/0/Regolamento+UE+2016+679.+Arricchito+con+riferimenti+ai+Considerando+Aggiornato+alle+rettifiche+pubblicate+sulla+Gazzetta+Ufficiale++dell%27Unione+europea+127+del+23+maggio+2018.pdf/1bd9bde0-d074-4ca8-b37d-82a3478fd5d3?version=1.9). Riferimento ufficiale: https://eur-lex.europa.eu/eli/reg/2016/679/oj
2. D.lgs. 196/2003 (Codice privacy), art. 61, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196~art61
3. D.lgs. 196/2003, art. 2-ter, c. 4, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196~art2ter
4. Garante per la protezione dei dati personali, provvedimento del 1° ottobre 2020, doc. web 9500508: https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9500508
5. EDPB, «Guidelines 1/2024 on processing of personal data based on Article 6(1)(f) GDPR», v. 1.0, adottate l'8/10/2024 per la consultazione pubblica (punti 14–22, nota 52, esempio 6): https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2024/guidelines-12024-processing-personal-data-based_en (PDF: https://www.edpb.europa.eu/system/files/2024-10/edpb_guidelines_202401_legitimateinterest_en.pdf). Se esista una versione finale non è stato verificato.
6. D.lgs. 206/2005 (Codice del consumo), art. 18, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art18
7. Codice del consumo, art. 21, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art21
8. Codice del consumo, art. 22, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art22
9. Codice del consumo, art. 23, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art23
10. Codice del consumo, art. 33, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art33
11. Regolamento (UE) 2019/1150, artt. 1, 2, 3, 5, 11. Testo italiano dall'Ufficio delle pubblicazioni dell'UE: http://publications.europa.eu/resource/celex/32019R1150.ITA. Riferimento ufficiale: https://eur-lex.europa.eu/eli/reg/2019/1150/oj
12. AGCM, comunicato «Sanzione di 4 milioni di euro a Trustpilot per pratica commerciale scorretta», PS12962, 23/3/2026: https://www.agcm.it/media/comunicati-stampa/2026/3/PS12962
13. Codice civile, artt. 1176, 1228, 1229, 1717, 1754, 1759, 2043, Normattiva (letti articolo per articolo dall'atto: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262; per esempio art. 1759: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1759).
14. Legge 3 febbraio 1989, n. 39, art. 3 (c. 5-bis) e art. 5 (in vigore dal 27/8/2022), Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1989-02-03;39~art3 e https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1989-02-03;39~art5
15. DPR 7 agosto 2012, n. 137, artt. 1 e 4, Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2012-08-07;137~art4
16. Legge 16 febbraio 1913, n. 89 (legge notarile), art. 147 (in vigore dal 29/8/2017), Normattiva: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1913-02-16;89~art147
17. Consiglio nazionale del notariato, comunicato «Principi di deontologia professionale dei notai» (delibera n. 4-31 del 17/4/2026), GU Serie Generale n. 119 del 25/5/2026: https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2026-05-25&atto.codiceRedazionale=26A02528
18. Consiglio nazionale degli ingegneri, Codice deontologico, aggiornamento al 23/6/2026 (artt. 4, 8, 9, 16, 22, 24): https://www.cni.it/images/atti_generali/Codice_deontologico_approvato_23_06_2026.pdf; circolare n. 457 del 31/7/2026 sul recepimento da parte degli Ordini: https://www.cni.it/images/evidenza/CIRC_CNI_457-Prot_CNI_8193U-31.07.26-CODICE_DEONTOL.pdf
19. Consiglio nazionale degli architetti, pianificatori, paesaggisti e conservatori, Codice deontologico, testo in vigore dal 2/12/2024 (artt. 14, 19, 31, 32, 34, 36): https://awn.it/component/attachments/download/3673
20. Consiglio nazionale geometri e geometri laureati, Codice di deontologia professionale, delibera n. 5 del 3/4/2007, modificato il 18/10/2023 (artt. 6, 10, 12, 26): https://www.cng.it/documents/20142/40079/codice_deontologico+2007_+MODIFICATO.pdf/c3519ce6-337a-05dd-9e1f-5dbcbf7dd523
21. Consiglio nazionale forense, Codice deontologico forense, aggiornamento 2026 (artt. 35 e 37): https://www.consiglionazionaleforense.it/documents/20182/40227/NUOVO+CODICE+DEONTOLOGICO+FORENSE++-+agg.+2026.pdf/8abe438b-a6fd-b8a6-9009-abaf35005f7b (pagina: https://www.consiglionazionaleforense.it/codice-deontologico-forense)

## Fonti non raggiunte e limiti

- **Consiglio nazionale del notariato** (notariato.it): ogni pagina ha risposto «503 Service Unavailable» o con un certificato non verificabile. Non letti i **Principi di deontologia professionale dei notai** vigenti (nuovo testo in vigore dal 1/1/2025, modificato il 25/5/2026 [17]). Per i notai si sono lette solo la legge notarile e la modifica in Gazzetta.
- **EUR-Lex** ha restituito pagine vuote: GDPR letto dal testo del Garante [1], regolamento 2019/1150 dall'Ufficio delle pubblicazioni [11], senza verificare eventuali rettifiche successive.
- **Non studiati:** il regolamento europeo sui servizi digitali (DSA) per le piattaforme online; le linee guida della Commissione sulla direttiva 2005/29/CE; la giurisprudenza di Cassazione e dei consigli di disciplina sull'accaparramento; i codici dei commercialisti e degli altri tecnici; le regole dei singoli Ordini territoriali, che possono integrare i codici nazionali [18].
- Il **provvedimento del Garante** [4] riguarda la propaganda elettorale, non un elenco commerciale: vale come principio sul riuso dei dati dell'albo, non come caso uguale.
