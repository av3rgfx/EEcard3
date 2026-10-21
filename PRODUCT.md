# EECard3: l'idea del progetto

Descrizione completa dell'idea da sviluppare, scritta il 18 ottobre 2026. È autosufficiente: riassume le conversazioni dei fondatori (5, 7, 15 e 18 ottobre 2026) e le risposte dell'utente. I materiali originali (audio, appunti) sono privati e non sono nel repository.

Il documento descrive **cosa si vuole ottenere**, non come realizzarlo. Architettura, stack, piano di sviluppo, design e prima versione **non sono decisi**: si studiano a partire da [docs/STUDIO.md](docs/STUDIO.md), con il metodo di [docs/METODO.md](docs/METODO.md).

**Come leggere gli stati**

| Stato | Significato |
| --- | --- |
| **Confermato** | L'utente lo ha detto o approvato esplicitamente. Vale finché l'utente non lo cambia. |
| **Idea dei fondatori** | Emerso nelle conversazioni. È un desiderio o una proposta, non una decisione né un requisito della prima versione. |
| **Da decidere** | Nessuna risposta: serve una decisione dell'utente o una ricerca. |

---

## 1. Nome e identità

- **EECard3** è il nome del repository; «EECard» è un nome di lavoro provvisorio. Il nome definitivo è **da decidere**.
- L'idea nasce dalla collaborazione con un'agenzia immobiliare, Enrico Erca (sigla ƎE). Il prodotto deve avere un **marchio autonomo**, utilizzabile anche da altre agenzie. **Confermato**.
- Identità visiva: **da decidere** (vedi [DESIGN.md](DESIGN.md)).

## 2. L'idea in breve

Un unico posto per **prendersi cura della propria casa e di ciò che la riguarda**: sapere cosa succede, capire cosa richiede attenzione e agire (trovare un documento, seguire una scadenza o una pratica, pagare, chiedere aiuto), nel modo più semplice e intuitivo possibile.

La piattaforma non lavora da sola. Dietro c'è un **servizio reale**: l'agenzia segue il cliente nel tempo e i professionisti intervengono quando serve. L'app rende quel servizio visibile, ordinato e continuo. Una **tessera** (card) rende riconoscibile l'adesione al servizio.

Motivo d'acquisto, nelle parole dell'utente: *«accedere, monitorare, verificare, pagare e richiedere assistenza per la casa e ciò che la riguarda: burocrazia, documenti, tecnici, abbonamenti e bollette, nel modo più semplice e intuitivo possibile»*. **Confermato**.

## 3. Il problema da cui nasce

Problemi concreti vissuti in agenzia e raccontati dai fondatori:

- **Documenti dispersi.** Il proprietario spesso non sa quali carte possiede (contratto, APE, planimetrie, certificati, pratiche edilizie), né quale tecnico abbia seguito la casa. Il problema esplode quando deve vendere, affittare o rinnovare.
- **Il rapporto si interrompe dopo il contratto.** Finita la pratica, il cliente sparisce. Quando torna, magari dopo un anno e mezzo, il personale è cambiato e nessuno lo ritrova: tutto dipende dalla memoria di chi c'era.
- **Affitti poco trasparenti.** Il proprietario non sa se il canone è stato pagato; l'inquilino non sa dove trovare contratto e ricevute.
- **Assistenza introvabile.** Il cliente chiama il tecnico la sera, nessuno risponde e resta senza aiuto. L'idea è che una richiesta senza risposta passi all'agenzia, che la prende in carico.
- **Informazioni disperse** fra chat, cartelle e telefoni, con richieste ripetitive per l'agenzia.

Possibile vantaggio, da verificare: **conoscenza della casa unita alla fiducia e alla responsabilità locale dell'agenzia**. Un archivio, un'app o una tessera da soli sono facili da sostituire; il valore starebbe nell'unione con un servizio vero.

## 4. Persone

| Persona | Bisogni | Confini |
| --- | --- | --- |
| **Proprietario che abita la casa** | Documenti, utenze proprie, manutenzione, assistenza, spese | Vede ciò che gli spetta per intestazione o delega |
| **Proprietario che affitta** | Contratto e documenti, canoni, scadenze, interventi di sua competenza, storia della casa | Non vede le bollette personali dell'inquilino. **Confermato** |
| **Inquilino** | Documenti pertinenti, canone, utenze, richieste di intervento | Dire «ho pagato» non prova l'incasso |
| **Operatore dell'agenzia** | Attivare i clienti, tenere i fascicoli, verificare, seguire pratiche e richieste, lavorare al banco, dare continuità | Spazio di lavoro distinto; non si spaccia per il cliente |
| **Tecnico o professionista** | Incarico, dati necessari, appuntamento, contatto, esito | Vede solo ciò che serve all'incarico |

- Una persona può avere **ruoli diversi su case diverse**, per esempio proprietaria di tre case e inquilina di una quarta, con un unico accesso. **Confermato**.
- Il proprietario deve poter usare anche le funzioni domestiche (utenze, bollette) per la casa in cui vive. Idea dei fondatori.
- Cliente, agenzia e tecnico hanno **spazi distinti**. **Confermato**.
- Nel tempo il prodotto può servire **più agenzie**, ciascuna con dati separati. **Confermato** come direzione. Il pilota si fa con la sola ƎE; le altre agenzie vengono dopo che il metodo ha funzionato (§12, 18/10/2026).

## 5. Cosa vorrebbe offrire

È l'elenco completo di ciò che è stato immaginato. **Non è il perimetro della prima versione**: capire quale parte serve davvero, a chi e in che ordine è il cuore dello studio.

### 5.1 Casa e fascicolo
- Scheda della casa con le persone e i rapporti pertinenti: proprietari, comproprietari, inquilini, delegati.
- **Fascicolo dei documenti**: contratto, APE, planimetrie, visure, certificati, documenti delle parti, ricevute, deposito. Per la compravendita anche relazione tecnica, abitabilità o agibilità, condoni, permessi edilizi. Originali e versioni conservati, con provenienza e data.
- Il fascicolo parte dai **dati che l'agenzia ha già** al momento del contratto, senza reinserirli.
- **Ricerca rapida**, anche di documenti storici: per esempio cercare una parte del nome e trovare un'abitabilità di decenni fa.
- **Cronologia dei lavori** eseguiti sulla casa, con date, esecutori e documenti.
- Condivisione controllata (a chi, per quanto tempo, revocabile) ed esportazione autorizzata.
- Un controllo formale di un documento non ne certifica la validità tecnica o giuridica.
- **Storico della casa** (interventi, modifiche: «prima il bagno era da un'altra parte») anche come extra a pagamento; per chi vuole comprare, sul modello delle app che mostrano la storia di un'auto dalla targa. Idea dei fondatori (18/10/2026).
- **Fascicolo per la vendita** proposto a chi vende al posto dell'incarico in esclusiva: dura un anno, non è esclusivo; i tecnici dell'agenzia fanno l'accesso agli atti e caricano i documenti, che arricchiscono l'annuncio. Idea dei fondatori (18/10/2026).

### 5.2 Affitto e canoni
- **Scadenziario dell'affitto**: canoni dovuti, date, promemoria.
- L'inquilino carica la prova del bonifico; il proprietario vede il documento e lo stato del pagamento.
- Ricevute dell'affitto distinte dalla prova del bonifico.
- Adempimenti del contratto (registrazione, rinnovi) conservati e collegati alla locazione giusta.
- **Bozze di nuovi contratti** che riusano anagrafiche e dati già verificati, sempre con revisione umana prima di firma o invio. Idea dei fondatori.
- **Oggi** l'inquilino può pagare il canone al banco dell'agenzia, che rilascia una ricevuta di carta; il proprietario passa poi a ritirarlo. Nell'idea l'affitto non si paga nell'app: l'inquilino fotografa la ricevuta e la carica, l'agenzia conferma. Fatto riferito dai fondatori il 18/10/2026.

### 5.3 Bollette e spese della casa
- Nella home, ciò che richiede attenzione subito, per esempio **una bolletta da pagare**; pagare le bollette deve essere **semplice**. **Confermato**. Vedere l'avviso non vuol dire averlo pagato.
- **Acquisizione del bollettino**, anche da una foto, con i dati riportati in digitale.
- Importo e codice di pagamento in primo piano, i dettagli dopo.
- **Pagare in contanti** mostrando il codice del bollettino in un punto convenzionato, per chi non usa la carta. Desiderio espresso dall'utente; fattibilità da studiare.
- Importi sempre con il separatore delle migliaia («9.876,54 €»). **Confermato**.
- Distinguere i servizi legati alla casa (luce, gas, acqua, internet, assicurazioni…) dall'adesione al servizio.

### 5.4 Assistenza, tecnici e pratiche
- Richiesta di aiuto legata alla casa o a un documento: descrizione semplice, allegati, riferimento, stato, prossimo passo.
- Il servizio dietro la richiesta: qualcuno la riceve, la valuta (eventualmente con un preventivo da approvare), la affida a un tecnico, fissa l'appuntamento, verifica l'esito e la chiude.
- **Rete di tecnici di fiducia** (geometri, idraulici, muratori, sgombero cantine…), conosciuti dall'agenzia o già intervenuti sulla casa.
- **Assistenza fuori orario**: una segreteria, anche automatica, raccoglie il problema e lo inoltra, senza promettere interventi.
- Aiuto nell'uso dell'app, pratiche documentali e burocratiche, interventi tecnici: sono attività diverse.
- Il tecnico deve poter contattare il cliente durante l'incarico. Desiderio espresso dall'utente.
- Non è un servizio di emergenza: le urgenze vere devono avere un percorso coerente con la copertura reale.
- **Un tecnico per mestiere**, scelto dall'agenzia, che firma una liberatoria per entrare nella piattaforma. Mestieri iniziali: idraulico, elettricista, muratore e un quarto, che per ƎE sarebbe caldaie e climatizzazione (21/10/2026). La richiesta dell'inquilino va direttamente al tecnico; l'agenzia riceve la notifica e vede la cronologia. Se il tecnico non regge il lavoro deve crescere, o l'agenzia lo cambia. Idea dei fondatori (18/10/2026).
- All'attivazione il proprietario sceglie se usare i **tecnici dell'agenzia o i propri**. Può anche chiedere un preventivo al tecnico per lavori più grandi. Idea dei fondatori (18/10/2026).
- Il tecnico vede solo le richieste che riceve e può chiedere la cronologia degli interventi sulla casa. Un tasto «Chiama» e la cronologia dei contatti mostrano all'agenzia quanto inquilini e proprietari interagiscono con i tecnici. Idea dei fondatori (18/10/2026).
- Convincere i tecnici a **fatturare** gli interventi, anche piccoli, in cambio di più lavoro; forse senza mostrare i prezzi degli interventi. Idea dei fondatori (18/10/2026).
- In futuro un **abbonamento per i tecnici**: gestionale, segretaria con AI che risponde quando il tecnico non risponde e trasforma la chiamata in una richiesta, landing page. Idea dei fondatori (18/10/2026).

### 5.5 Consulenza e valore della casa
- **Consulenza annuale** personale e riservata per il proprietario; a chi spetti è da decidere.
- **Piano di investimento** sulla casa, rivisto ogni anno; contenuto da definire.
- **Casa in 3D** con ipotesi di modifica a partire dalla planimetria. Idea dei fondatori.

### 5.6 Tessera e adesione
- **Tessera digitale** subito; **tessera fisica** in formato carta di credito, consegnata in agenzia con una cartellina dedicata oppure spedita a pagamento a chi si iscrive online. Idea dei fondatori.
- La tessera **non è una carta di pagamento** e averla in mano **non basta per accedere ai dati**. **Confermato**.
- Se si blocca e si sostituisce, la vecchia non deve più funzionare.
- Account, adesione, rinnovo, tessera e locazione sono cose separate: chiudere l'una non chiude automaticamente le altre. **Confermato**.
- **Disdetta facile**, mantenendo il periodo già pagato; nelle conversazioni compare anche l'idea di un preavviso. Da decidere.
- **Livelli** progressivi oppure **extra** acquistabili, con passaggio di livello pagando la differenza. Idea dei fondatori.
- Tessera del proprietario più ricca e di colore diverso da quella dell'inquilino. Idea dei fondatori.
- Tessera nei **wallet** del telefono e lettura **contactless** al banco. Idea dei fondatori.
- Agenzie partner con la propria tessera personalizzata, con il marchio del sistema visibile. Idea dei fondatori.
- Livelli del 18/10: proprietario con una base (circa 10 €) e un «plus» che mostra lo stato dei pagamenti, forse un livello intermedio; inquilino gratis, con i servizi extra visibili e sbloccabili a pagamento. Idea dei fondatori (18/10/2026).

### 5.7 Lo spazio dell'agenzia
- Lavoro da fare in coda, ricerca di clienti e fascicoli, gestione di clienti, rapporti e deleghe, documenti da controllare, richieste e incarichi.
- Chi ha fatto cosa e da quale fonte resta tracciato; le note interne sono separate dalle informazioni condivise col cliente.
- Permessi diversi secondo la funzione della persona (per esempio sportello, verifiche, coordinamento). Idea emersa, da confermare.
- **Al banco**: con la tessera l'operatore richiama il fascicolo del cliente. Si è immaginato un **terminale da banco** piccolo e riconoscibile, magari stampato in 3D, con due schermi (uno per l'operatore, uno che mostra al cliente il riepilogo) e forse la firma con penna. Idea dei fondatori: chi vede cosa, tipo di firma e hardware sono aperti.
- **Totem** nelle sedi, in futuro. Idea dei fondatori.

### 5.8 Report e comunicazioni
- **Report annuale** con due viste separate: per il cliente (attività e situazione delle sue case) e per l'agenzia (lavoro svolto, problemi operativi). **Confermato** sui destinatari; contenuti e metriche da decidere.
- Aggiornamenti utili su richieste, scadenze e verifiche, con canali e preferenze scelti dalla persona. Mai solleciti di pagamento basati su stati incerti o contestati.
- **Chiamata automatica all'inquilino** dopo una scadenza, venduta come extra al proprietario. Idea dei fondatori, con dubbi legali e di consenso da studiare.
- Report annuale gratuito **anche per l'inquilino**, con il riepilogo delle spese dell'anno (canone, bollette dell'inquilino), per invogliarlo a usare l'app. Idea dei fondatori (18/10/2026).

### 5.9 Altre possibilità immaginate
- **Assistente AI** che conosce il cliente e il fascicolo: ricerca, bozze, preparazione dei contratti. Idea dei fondatori.
- **Domotica** collegata all'app. Idea dei fondatori, solo esplorativa.
- **App iPhone** dopo la piattaforma web. **Confermato** l'ordine (prima il web, poi l'app).
- Canali: web, app, totem.
- **Sito vetrina dell'agenzia** con ricerca delle case, che promuove l'app (non il contrario) e mostra sugli immobili informazioni che altri non hanno. Idea dei fondatori (18/10/2026).
- Traduzioni in qualsiasi lingua. Idea dei fondatori (18/10/2026).

## 6. Modello commerciale: cosa si sa

Nulla è deciso. Gli elementi emersi:

- Prima ipotesi: **50 € per il proprietario e 15 € (forse 20 €) per l'inquilino**, senza periodicità né unità definite. L'esempio di ricavo fatto a voce (circa 100 utenti, circa 2.600 € l'anno) non torna con questi prezzi.
- Ipotesi del 18/10/2026: base a circa 10 € per il proprietario, senza periodicità detta, più livelli superiori; inquilino gratis (§5.6).
- La tessera viene proposta **in agenzia al momento del contratto**, come quota aggiuntiva rispetto alla mediazione. Non è stabilito che sia obbligatoria.
- **Alcuni clienti già gestiti dall'agenzia pagano 600 € l'anno** per un servizio esistente di ƎE. Non fa parte del prodotto: serve solo a capire come lavora oggi l'agenzia e quali servizi offre (§12, 21/10/2026). Secondo ƎE (21/10/2026) i 600 € sono una media, IVA esclusa, pagata dai proprietari delle case gestite, e il servizio comprende gestione con incasso, scelta dell'inquilino, pratiche, assistenza per guasti e consulenza; dettagli in [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md).
- Quota ricorrente con servizi premium; livelli o extra; cambio di livello con differenza.
- Vendita del sistema **ad altre agenzie** come servizio pronto da usare, con personalizzazione e un compenso per il design.
- Tessera fisica spedita a pagamento a chi si iscrive online.
- Il software da solo non paga il lavoro umano promesso (verifiche, assistenza, consulenza): il costo del servizio va misurato.
- Mercato iniziale ipotizzato: Italia, nella zona già servita dall'agenzia.
- Tempi: nelle conversazioni si cita «gennaio dell'anno prossimo», senza un anno certo né un piano. Non è una data concordata.

## 7. Regole che il prodotto deve rispettare

Requisiti di significato, indipendenti da tecnologia e design. L'utente ha chiesto di preservarne il significato. **Confermato**.

1. **L'accesso dipende dal rapporto con la casa**, non da un'etichetta: agenzia, tipo di rapporto, delega, periodo di validità, oggetto. Il ruolo, la tessera o il pacchetto acquistato non danno accesso ai dati di altri.
2. **Deleghe e condivisioni** hanno destinatario, durata e revoca, e valgono nel momento in cui si agisce.
3. **Originali e versioni** si conservano; una correzione è esplicita e non cancella la storia. Un duplicato non crea un nuovo importo da pagare.
4. **I passaggi del denaro restano distinti**: importo dovuto, pagamento dichiarato, prova caricata, pagamento disposto, incasso verificato, quietanza. Caricare una ricevuta o dire «ho pagato» non salda nulla. Un pagamento parziale lascia un residuo.
5. **Mai un doppio pagamento**: se l'esito non è noto non si riprova alla cieca; tornare da una pagina esterna non prova il pagamento.
6. **«Paga» solo dove esiste un canale vero**, con i costi mostrati prima della conferma. Un comune pagamento con carta non paga qualsiasi bolletta a qualsiasi creditore.
7. **Gli stati del servizio sono distinti**: richiesta ricevuta, presa in carico, preventivo accettato, intervento eseguito, chiusura.
8. **Chi ha fatto cosa, quando e da quale fonte** resta ricostruibile.
9. **Ciò che deriva dai dati** (ricerche, notifiche, anteprime, risposte dell'AI, statistiche, esportazioni) rispetta gli stessi permessi dell'originale.
10. **I report dicono da dove vengono i dati e cosa coprono**: un dato mancante non diventa zero.
11. **La fine di un rapporto** non cancella tutto e non lascia un accesso per sempre.
12. **Solo dati inventati e ambienti di prova** finché l'utente non autorizza altro: niente pagamenti, messaggi, chiamate, account esterni o servizi reali.

## 8. Parole del progetto

Termini provvisori, da consolidare con la skill `domain-modeling` quando il modello si chiarisce. I termini decisi passano in [GLOSSARY.md](GLOSSARY.md), che prevale su questa tabella.

| Parola | Significato |
| --- | --- |
| **Casa** | L'immobile o l'unità abitativa su cui si lavora |
| **Rapporto** | Il legame di una persona con una casa (proprietà, comproprietà, locazione, delega), con una validità nel tempo |
| **Agenzia** | Chi eroga il servizio; i suoi dati sono separati da quelli di altre agenzie |
| **Delega** | Un'autorizzazione con oggetto, destinatario e durata, revocabile |
| **Fascicolo** | I documenti di una casa, con originali, versioni e provenienza |
| **Dichiarato** | «Ho pagato» detto dalla persona: da solo non prova nulla |
| **Prova** | Un documento caricato a sostegno (contabile, scontrino) |
| **Disposto** | Un pagamento ordinato tramite banca o altro intermediario, non ancora incassato |
| **Incasso verificato** | La conferma che chi doveva ricevere il denaro lo ha ricevuto |
| **Quietanza** | La ricevuta liberatoria rilasciata da chi incassa |

## 9. Cosa il prodotto non è

- Non certifica documenti e non sostituisce i professionisti abilitati (APE, perizie, pareri legali).
- Non decide chi ha ragione in un conflitto fra proprietario e inquilino.
- Non è un servizio di emergenza.
- Non promette interventi illimitati né professionisti che non hanno un accordo.
- Non è un gestionale generico per qualsiasi portafoglio immobiliare.
- Nella prima versione non detiene e non trasferisce il denaro dei clienti (§12, 18/10/2026).

## 10. Primo percorso completo e prima versione

Deciso come ipotesi il 19/10/2026 (§12): primo percorso **attivazione e canone del mese** per le case gestite da ƎE; poi richiesta d'aiuto, bollette dell'inquilino e report annuale; cosa resta fuori è elencato in §12. La specifica passo per passo del primo percorso e le sue evidenze sono da costruire nello studio ([docs/STUDIO.md](docs/STUDIO.md)).

## 11. Web e app

**Da decidere.** Confermato solo l'ordine: prima la piattaforma web, poi l'app iPhone.

## 12. Decisioni confermate dall'utente

| Data | Decisione |
| --- | --- |
| 5–15/10/2026 | Due destinatari principali (proprietario e inquilino), con agenzia e tecnici in spazi propri |
| 15/10/2026 | Motivo d'acquisto: accedere, monitorare, verificare, pagare e chiedere assistenza per la casa (§2) |
| 15/10/2026 | Nella home: la tessera, la casa e ciò che richiede attenzione subito, con un pagamento delle bollette semplice. La forma è da progettare da zero |
| 15/10/2026 | Marchio autonomo dall'agenzia, utilizzabile da altre agenzie |
| 15/10/2026 | Report annuale con due viste separate, cliente e agenzia |
| 16/10/2026 | Il significato di permessi, originali e versioni, dichiarazione, prova, incasso verificato, residuo e quietanza va preservato (§7) |
| 16/10/2026 | Solo dati inventati e ambienti di prova; nessuna pubblicazione in produzione senza autorizzazione |
| 16/10/2026 | Le Apple Human Interface Guidelines sono il riferimento di design principale |
| 16/10/2026 | Ogni lavoro sul codice passa dalla revisione con Open Code Review prima del commit finale e delle PR |
| 16/10/2026 | L'app iPhone si sviluppa dopo la piattaforma web |
| 16/10/2026 | Importi sempre con il separatore delle migliaia |
| 18/10/2026 | Repository pulito: nessuna soluzione, codice o decisione tecnica dei tentativi precedenti; si riparte dall'idea, con studio, ricerca e decisioni da fare in EECard3 |
| 18/10/2026 | **Ruolo per l'agenzia (T8).** Nel pilota con ƎE la piattaforma è uno strumento del servizio dell'agenzia: il ritorno si misura in incarichi, rinnovi, pratiche e tempo risparmiato. La quota deve coprire almeno il lavoro umano che include. Ripagarsi da sola e la vendita ad altre agenzie vengono dopo, quando il metodo avrà funzionato con ƎE. *Motivo:* con una sola agenzia e circa 100 clienti le quote non pagano lo sviluppo; il vantaggio ipotizzato (§3) è l'unione con un servizio vero |
| 18/10/2026 | **Evidenze con persone vere.** Lo studio coinvolge clienti reali di ƎE del gruppo scelto: colloqui e, alla fine, una proposta di pre-adesione. L'agente prepara piano e materiali, l'agenzia conduce; nel repository entrano solo sintesi anonime. Le decisioni che dipendono dal comportamento dei clienti restano ipotesi finché non sono verificate. *Motivo:* oggi non c'è alcuna evidenza raccolta con persone reali (§13) |
| 18/10/2026 | **Denaro.** Nella prima versione la piattaforma non detiene e non trasferisce denaro dei clienti: mostra il dovuto, raccoglie dichiarazioni e prove, registra l'incasso verificato e, per pagare, porta a un [canale di pagamento](GLOSSARY.md) esistente. Un fornitore autorizzato resta possibile in futuro, dopo la ricerca (STUDIO, area F) e un parere professionale. *Motivo:* prestare servizi di pagamento senza autorizzazione è vietato ([dir. UE 2015/2366, art. 37](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32015L2366), letta il 18/10/2026); le regole di §7 restano più semplici da rispettare |
| 18/10/2026 | **Primo cliente (T2).** Si parte dai proprietari che affittano una casa tramite ƎE; l'inquilino entra perché fa parte della locazione. *Motivo:* sono i più vicini a un servizio che l'agenzia vende già, hanno i problemi che solo l'agenzia risolve bene (documenti, canoni, continuità, rinnovi) e l'agenzia ha già i loro dati al momento del contratto |
| 18/10/2026 | **Chi eroga il servizio nel pilota (T3).** Il personale di ƎE, in orario d'ufficio, con i tecnici con cui l'agenzia lavora già. Tempo disponibile stimato in 1–1,5 ore al giorno, non ancora fissato. Fuori orario si raccoglie la richiesta e si dice quando arriverà la risposta, senza promettere interventi; il tempo speso per ogni richiesta si registra. *Motivo:* le promesse devono coincidere con ciò che le persone di ƎE possono mantenere (§9), e il costo per cliente si misura solo su un servizio con orari definiti |
| 18/10/2026 | **Tessera (T6).** Nella prima versione è solo il segno dell'adesione: digitale e, se costa poco, fisica, consegnata al banco. Il suo codice aiuta l'operatore, già autenticato, a trovare il cliente; non dà accesso ai dati. Wallet, contactless, terminale da banco e totem restano fuori dalla prima versione. *Motivo:* il contactless richiede un certificato NFC di Apple e terminali certificati ([Apple, loyalty passes](https://developer.apple.com/wallet/loyalty-passes/), letta il 18/10/2026); il valore della tessera nel pilota è la consegna e la vendita al banco, da verificare nei colloqui |
| 18/10/2026 | **Percorso della richiesta (T3).** La [richiesta](GLOSSARY.md) nasce nell'app (mestiere, descrizione, foto) e va al tecnico di quel mestiere per quella casa: quello dell'agenzia, uno per mestiere, o quello del proprietario se all'attivazione ha scelto i propri. Il tecnico la accetta, fissa l'appuntamento e segna l'esito dal suo spazio; «Chiama» è una scorciatoia accanto alla richiesta. Se il tecnico non accetta entro un tempo stabilito, la richiesta passa all'agenzia, che la prende in carico in orario d'ufficio. Il personale di ƎE lavora su attivazione (scheda della casa, tecnici, liberatorie), conferma dei canoni pagati al banco, eccezioni e report annuale. *Motivo:* l'app deve lavorare al posto dell'agenzia (conversazione dei fondatori del 18/10) e stare nelle 1–1,5 ore al giorno disponibili; una telefonata non lascia traccia, e senza la richiesta nell'app non esistono stati (§7.7), cronologia, report e storico della casa |
| 18/10/2026 | **Chi paga (T2).** Paga il proprietario; l'inquilino entra gratis. Nel pilota un'offerta unica per il proprietario, che include la trasparenza dell'affitto; livelli, «plus» ed extra per l'inquilino si disegnano dopo i colloqui. Il prezzo (circa 10 €, periodicità da definire) si mette alla prova nei colloqui. *Motivo:* vedere lo stato del canone è il motivo per cui il proprietario paga; un'offerta unica rende leggibile la prova di pre-adesione |
| 18/10/2026 | **Bollette nel pilota (T1).** Entrano dal lato dell'inquilino: uno spazio privato, visibile solo a lui, con documento, importo, scadenza, promemoria e collegamento al [canale di pagamento](GLOSSARY.md); alimenta il suo report annuale delle spese. La home del proprietario resta su canone, scadenze e richieste. Il pagamento semplice delle bollette (15/10) vale quindi per l'inquilino. *Motivo:* le bollette della casa locata sono di norma dell'inquilino e il proprietario non le vede (§4); danno all'inquilino un motivo per usare l'app, da cui dipende la trasparenza dell'affitto |
| 18/10/2026 | **Chi è nel pilota.** Le [case gestite](GLOSSARY.md) da ƎE: l'agenzia segue l'inquilino e riceve il canone al banco. Locazioni solo mediate e venditori vengono dopo. *Motivo:* il canone passa già dall'agenzia, che sa di prima mano se è stato pagato: la trasparenza dell'affitto è affidabile ed economica dal primo giorno |
| 18/10/2026 | **Storico della casa.** Lo [storico](GLOSSARY.md) si vede solo attraverso un rapporto con la casa o una [condivisione](GLOSSARY.md) decisa dal proprietario, mai comprando l'accesso: il proprietario vede tutto, l'inquilino gli interventi del periodo della sua locazione, chi vuole comprare solo ciò che il proprietario gli condivide, a tempo e in modo revocabile. Nel pilota lo storico fa parte del fascicolo; la condivisione con chi vuole comprare arriva con la vendita. *Motivo:* §7.1; il fascicolo è privato e contiene dati di altre persone |
| 18/10/2026 | **Fascicolo per la vendita.** Il pilota resta sulle case gestite; il fascicolo per la vendita (un anno, non esclusivo, accesso agli atti fatto dai tecnici di ƎE) è il secondo gruppo candidato, da sentire nei colloqui con alcuni venditori già durante lo studio. *Motivo:* risponde al primo problema di §3 e porta incarichi all'agenzia, ma è un'altra promessa con costi propri e tocca una scelta commerciale (rinunciare all'esclusiva) che merita evidenze |
| 18/10/2026 | **Importi degli interventi.** Nessun listino prezzi nella piattaforma: il prezzo si accorda fra cliente e tecnico. Il tecnico chiude l'[intervento](GLOSSARY.md) registrando l'importo e allegando il documento fiscale (fattura o ricevuta), visibili a chi paga e al proprietario; il report annuale somma solo gli importi documentati. *Motivo:* senza importi report e storico restano vuoti (§7.10); la regola spinge a fatturare e protegge l'agenzia che consiglia i tecnici |
| 18/10/2026 | **Sito vetrina dell'agenzia.** È un progetto di ƎE separato dalla piattaforma, fuori da questo studio. In futuro la piattaforma potrà dargli, con il consenso del proprietario, informazioni su una casa in vendita (per esempio quali documenti sono disponibili). *Motivo:* marchio autonomo della piattaforma (15/10); pubblicare documenti richiede consenso e attenzione a sicurezza e dati personali |
| 19/10/2026 | **Chi registra il canone (T4).** Per le case gestite, quando l'inquilino paga al banco è l'agenzia a registrare il pagamento, con la propria ricevuta come prova. Il proprietario vede due passaggi distinti: incassato dall'agenzia, poi consegnato al proprietario. Se un inquilino paga con bonifico, carica la contabile e chi riceve il denaro conferma l'incasso. *Motivo:* l'agenzia sa di prima mano che il canone è arrivato; un passaggio in meno per l'inquilino; i passaggi del denaro restano distinti (§7.4) |
| 19/10/2026 | **Fascicolo all'attivazione (T4).** La segreteria di ƎE compila la scheda della casa e carica i documenti che l'agenzia ha già; la piattaforma mostra quali documenti mancano, con un elenco per tipo di casa e di locazione, e il proprietario aggiunge i suoi. Nel pilota nessuna lettura automatica dei documenti. *Motivo:* parte dai dati che l'agenzia ha già (§5.1); un elenco dei mancanti rende il lavoro finito; i documenti sono pochi, eterogenei e caricati una volta |
| 19/10/2026 | **Canale principale (T5).** Messaggi puntuali, email e notifiche, solo quando c'è qualcosa da fare o da sapere (canone registrato o consegnato, richiesta accettata, scadenza vicina, documento mancante); la piattaforma web per il dettaglio e le azioni; il banco per l'attivazione e l'aiuto di persona. WhatsApp e SMS si studiano dopo (STUDIO, area K). Le email devono essere innovative e dinamiche, semplici ma d'impatto, e non sembrare spam o pubblicità ([DESIGN.md](DESIGN.md)). *Motivo:* il servizio si apre poche volte al mese; su iPhone le notifiche web arrivano solo se la piattaforma è aggiunta alla schermata Home, da iOS 16.4 ([WebKit](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/), letta il 18/10/2026): l'email è il canale che raggiunge tutti |
| 19/10/2026 | **Bollette dell'inquilino (T4).** Ogni inquilino ha un [indirizzo per le bollette](GLOSSARY.md): all'attivazione si imposta l'inoltro automatico dei soli fornitori scelti, con un aiuto passo passo o al banco; inoltro a mano e foto restano sempre possibili. All'arrivo la piattaforma archivia la bolletta, legge il codice QR pagoPA quando c'è e propone importo e scadenza; l'inquilino conferma con un tocco. Le [bollette domiciliate](GLOSSARY.md) si segnano una volta: la piattaforma ne ricorda l'addebito senza chiedere di pagarle. Collegamento della casella e fatture elettroniche restano fuori dal pilota; prima di promettere l'automatismo si fa una prova su campioni di bollette. *Motivo:* [ricerca sulle bollette](docs/ricerca/bollette.md): è il massimo di automazione possibile senza leggere tutta la posta dell'inquilino e senza accessi che l'Agenzia delle Entrate non consente; la conferma della persona evita importi o creditori sbagliati (§7.5–7.6) |
| 19/10/2026 | **Cosa si paga a parte (T3).** Oltre all'offerta unica del proprietario si pagano a parte le pratiche documentali e burocratiche (recupero di APE, visure e planimetrie; registrazioni, proroghe e rinnovi; nuovo contratto) e la consulenza personale. Gli interventi dei tecnici li paga chi ne è responsabile, fuori dalla quota. *Motivo:* è il ritorno per l'agenzia (T8) e lega la quota al lavoro prevedibile |
| 19/10/2026 | **Tempi della richiesta (T3).** Ipotesi iniziale da misurare nel pilota: il tecnico accetta entro la fine del giorno lavorativo; se non accetta, la richiesta passa all'agenzia, che risponde entro il giorno lavorativo successivo. I tempi definitivi si fissano con i tecnici dopo le prime settimane. *Motivo:* servono tempi da dichiarare al cliente dal primo giorno, realistici rispetto alle 1–1,5 ore al giorno disponibili |
| 19/10/2026 | **Cosa resta fuori dalla prima versione (T7).** Livelli, «plus» ed extra per l'inquilino; più agenzie e vendita ad altre agenzie; wallet, contactless, terminale da banco e totem (tessera fisica solo se costa poco); pagamento nell'app, contanti nei punti convenzionati, solleciti e chiamate automatiche all'inquilino; collegamento della casella e fatture elettroniche; WhatsApp, SMS, app iPhone e traduzioni; abbonamento per i tecnici con segretaria AI e preventivi per lavori grandi; fascicolo per la vendita, condivisione dello storico con chi vuole comprare e sito vetrina; consulenza annuale inclusa, piano di investimento, casa in 3D, domotica, assistente AI e bozze di contratti. Restano idee in §5. *Motivo:* non promettere ai clienti del pilota ciò che le persone e la prima versione non reggono |
| 19/10/2026 | **Primo percorso completo e ordine (T7).** Si costruisce un percorso intero alla volta: 1) attivazione e canone del mese; 2) richiesta d'aiuto fino all'intervento chiuso; 3) bollette dell'inquilino; 4) report annuale, prima della fine del primo anno di pilota. *Motivo:* il canone è la promessa per cui il proprietario paga e si regge su un fatto che l'agenzia conosce già; ogni percorso si prova da solo con persone vere |
| 19/10/2026 | **Destinazione dello studio.** Superare il controllo A con le evidenze: specifica del primo percorso completo (attivazione e canone del mese per le case gestite da ƎE) sostenuta da colloqui, prova di pre-adesione con un prezzo e ricerche; criteri di arrivo in [docs/STUDIO.md](docs/STUDIO.md). *Motivo:* le decisioni del riallineamento sono ipotesi senza evidenze dalle persone (§13); la destinazione si ferma al controllo A, prima di design e architettura |
| 19/10/2026 | **Pre-adesione in un secondo momento.** La proposta con il prezzo si fa agli stessi proprietari dopo i colloqui e la specifica del percorso 1, per esempio al banco quando passano a ritirare il canone; non alla fine del colloquio. *Motivo:* un «sì» detto a fine colloquio a una persona dell'agenzia che si conosce è un impegno poco affidabile; la proposta descrive un percorso già corretto dalle evidenze; il secondo contatto costa poco |
| 19/10/2026 | **Prova sulle bollette con bollette reali.** Autorizzata con tre limiti: fondatori e personale di ƎE volontari contano le proprie bollette (PDF o link, QR) senza condividerle; gli inquilini dicono nei colloqui come arrivano le loro, senza mostrarle; per misurare la lettura, alcune bollette dei volontari con i dati personali oscurati si caricano nella sessione di lavoro e si leggono senza servizi esterni. Nel repository solo i conteggi; bollette dei clienti escluse. *Motivo:* con bollette inventate si verifica solo il QR pagoPA, non come arrivano le bollette né quanto è affidabile la lettura ([ricerca](docs/ricerca/bollette.md) §4) |
| 20/10/2026 | **Chi offre la piattaforma nel pilota.** ƎE: la piattaforma è uno strumento dell'agenzia con un marchio autonomo. ƎE risponde verso i clienti di tutti i dati del pilota (scheda della casa, fascicolo, canoni e ricevute, messaggi, accessi, tessere, adesioni, spazio delle bollette); il tecnico resta autonomo per i dati dell'incarico. Un'informativa sola, di ƎE, che dice che il marchio è uno strumento dell'agenzia. Chi costruisce e tiene in funzione la piattaforma, se non lavora già per ƎE, firma con l'agenzia un contratto sui dati e li usa solo per suo conto: nessun uso proprio, dati anonimi solo se ƎE lo decide. Una società distinta nasce quando si decide di portare il servizio a una seconda agenzia, e lì i ruoli si ridisegnano. La proprietà di marchio e software si mette per iscritto fra fondatori e ƎE prima del pilota. *Motivo:* il pilota è con la sola ƎE e circa 100 clienti e la piattaforma serve al servizio dell'agenzia (T8, 18/10); una parte sola e un'informativa sola sono più semplici da spiegare e da tenere in regola; una società distinta costerebbe senza ricavi che la paghino. Il ruolo si stabilisce sui fatti, non sul marchio ([ricerca](docs/ricerca/privacy-dati.md), sezione 2, modello «strumento di ƎE») |
| 20/10/2026 | **Chi vende l'adesione del proprietario.** ƎE, con le «condizioni dell'adesione»: un foglio a sé, separato dall'incarico di gestione, con servizio, periodo, rinnovo, disdetta e quota. ƎE incassa e fattura la quota. Prezzo, rapporto con il compenso di gestione ed eventuale trattenuta dal canone si decidono con la proposta di pre-adesione. *Motivo:* adesione, account, tessera e locazione sono cose separate (§5.6); il foglio a parte permette la disdetta senza toccare la gestione, non dipende da com'è fatto oggi l'incarico e, al passaggio a una società distinta, cambia solo il foglio |
| 20/10/2026 | **Adesione dell'inquilino e spazio delle bollette.** Anche l'inquilino ha un'[adesione](GLOSSARY.md), gratuita, con la sua tessera; se digitale o anche fisica lo decide la specifica. Un solo foglio di condizioni comprende lo spazio privato delle bollette, servizio gratuito di ƎE: l'agenzia si impegna per iscritto a non guardarlo e la piattaforma impedisce al personale di vederlo. Al passaggio a una società distinta gli inquilini accetteranno di nuovo le condizioni. *Motivo:* è coerente con la decisione precedente e non riapre quelle sulle bollette (18–19/10); l'inquilino passa dal banco ogni mese e la tessera aiuta l'operatore a registrare il canone; la fiducia in uno spazio offerto dall'agenzia si verifica nei colloqui |
| 21/10/2026 | **Servizio da 600 € di ƎE.** Non fa parte del prodotto: è un servizio che ƎE offre già ad alcuni clienti, e il dato serve solo a capire come lavora oggi l'agenzia e quali servizi offre. *Motivo:* chiarimento dell'utente dopo le risposte di ƎE, che descrivono quel servizio ([Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md)) |

## 13. Evidenze e criteri di successo

Oggi **non esiste alcuna evidenza raccolta con persone reali**: nessuna intervista, prova d'uso o impegno a pagare. Le conversazioni dei fondatori sono intenzioni e opinioni, non misure della domanda.

I criteri di successo si definiscono nello studio. Le evidenze che conteranno sono osservabili: clienti che si impegnano a pagare, tempo dell'agenzia risparmiato o speso per cliente, richieste prese in carico e chiuse, uso ripetuto, rinnovi. Non inventare valori numerici per completare questo documento.
