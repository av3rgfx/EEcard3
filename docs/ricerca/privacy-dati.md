# Titolarità e privacy dei dati: chi decide e cosa ne deriva

Ricerca del 19 ottobre 2026, svolta dall'agente in sequenza su fonti primarie, con la data di lettura per ogni fonte. Risponde al [ticket 03](../../.scratch/controllo-a/issues/03-titolarita-privacy-dati.md): chi è titolare, contitolare o responsabile di ciascun trattamento fra agenzia, chi fornisce la piattaforma, proprietari, inquilini e tecnici, e cosa ne deriva. Non è un parere legale.

Fatti già decisi che contano ([PRODUCT.md](../../PRODUCT.md) §4, §7, §12):
- la piattaforma ha un **marchio autonomo** da ƎE, utilizzabile in futuro da altre agenzie;
- il pilota si fa con la sola ƎE, sulle [case gestite](../../GLOSSARY.md); la segreteria di ƎE compila la scheda e carica i documenti che ha già; il canone pagato al banco lo registra ƎE;
- lo **spazio privato delle bollette** è visibile solo all'inquilino; agenzia e proprietario non lo vedono;
- il [tecnico](../../GLOSSARY.md) vede solo ciò che serve all'[incarico](../../GLOSSARY.md);
- **solo dati inventati** finché l'utente non autorizza altro; autorizzata solo la prova sulle bollette dei volontari, con limiti (§12, 19/10);
- i colloqui li conduce ƎE; nel repository entrano solo **sintesi anonime**.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato. I rimandi «§» sono a PRODUCT.md; «sezione» rimanda a questo file.

## In breve

- Il ruolo si decide sui **fatti**: chi stabilisce perché e come si trattano i dati. Il marchio e le parole del contratto non bastano (**Fonte**: EDPB 07/2020). Mancano due fatti, che sono decisioni dell'utente: chi è giuridicamente «chi fornisce la piattaforma» nel pilota, e chi vende l'adesione al proprietario.
- Per i dati del servizio di ƎE (scheda della casa, fascicolo, canoni, ricevute, messaggi) **ƎE è titolare**. La piattaforma è con buona probabilità **responsabile** (art. 28), se è un soggetto distinto e non usa quei dati per scopi propri (**Inferenza**).
- Lo **spazio privato delle bollette** è il trattamento in cui la piattaforma sembra più **titolare autonoma**: l'ha progettato lei, il rapporto è con l'inquilino, ƎE non vede i dati (**Inferenza**). Se però la piattaforma non è un soggetto distinto da ƎE, il titolare è ƎE.
- Il **tecnico** è con buona probabilità titolare autonomo dei dati che riceve per eseguire e fatturare l'intervento (**Inferenza**).
- **Conservazione**: non esiste un termine unico. Per ƎE valgono i 10 anni delle scritture e della corrispondenza (art. 2220 c.c.) e i termini fiscali, che dal 1° gennaio 2027 passano al testo unico del d.lgs. 141/2026; i canoni si prescrivono in 5 anni (**Fonte**, in parte secondaria).
- **Valutazione d'impatto**: alla scala del pilota nessun trattamento rientra con chiarezza nell'elenco del Garante, ma possono ricorrere due criteri di rischio. Prima dell'uso reale conviene una verifica scritta e, probabilmente, una valutazione breve (**Inferenza**).
- I **colloqui** sono il primo uso reale di dati personali dello studio. Prima servono: titolare deciso, informativa, consenso separato per l'eventuale registrazione e regole di anonimizzazione verificabili (**Inferenza**).

## 1. Come si stabilisce il ruolo

Criteri dell'EDPB (Linee guida 07/2020, versione 2.0) e del GDPR (**Fonte**):
- Il ruolo deriva dall'influenza effettiva sul trattamento. Un contratto che chiama «responsabile» chi decide di fatto non cambia il ruolo (par. 28–30).
- Il **titolare** decide le finalità e i **mezzi essenziali**: quali dati, per quanto tempo, chi vi accede, di quali persone. I mezzi non essenziali (software, misure di sicurezza specifiche) si possono lasciare al responsabile (par. 40).
- Il **responsabile** è un soggetto distinto che tratta per conto del titolare (par. 76). Se usa i dati per scopi propri ne diventa titolare e viola il GDPR (par. 81; art. 28, par. 10). Dipendenti e collaboratori interni non sono responsabili: sono persone autorizzate (par. 78; art. 29 GDPR; art. 2-quaterdecies del Codice privacy).
- Lo stesso soggetto può essere titolare per alcuni trattamenti e responsabile per altri (par. 82). Un fornitore può offrire un servizio predefinito, ma il titolare deve poterlo approvare e chiederne modifiche (par. 30, 84).
- La **contitolarità** nasce da una decisione comune o da decisioni convergenti senza le quali il trattamento non avverrebbe (par. 54–55). Non serve avere accesso ai dati (par. 56). Un semplice vantaggio commerciale non basta (par. 62). Una piattaforma predisposta da una parte e usata da altre può dare contitolarità; se il fornitore non ha finalità proprie è responsabile (par. 65 e nota 29). Una banca dati comune non crea contitolarità se ciascuno tratta per scopi propri e separati (par. 68, 71).
- Chi fornisce i mezzi per attività personali o domestiche resta soggetto al GDPR, anche se l'utente che le svolge ne è escluso (considerando 18; art. 2, par. 2, lett. c).
- Per il software gestionale in cloud il codice di condotta di AssoSoftware, approvato dal Garante, qualifica il produttore come responsabile del cliente, o sub-responsabile se il cliente è a sua volta responsabile (art. 4.1–4.2). Vincola solo chi aderisce, ma mostra la lettura corrente (**Fonte**).

## 2. Chi fornisce la piattaforma: quattro modelli

| Modello | È vero se, nei fatti… | Conseguenze | Limiti |
| --- | --- | --- | --- |
| **0. Strumento di ƎE** | La piattaforma non è un soggetto distinto: la gestiscono ƎE o persone che agiscono per ƎE | ƎE è l'unico titolare di tutto, spazio delle bollette compreso, anche se non lo guarda (EDPB par. 56). I fornitori tecnici sono suoi responsabili. Un'informativa sola | Il marchio autonomo mostra un nome diverso dal titolare: l'informativa deve dirlo chiaramente. Con altre agenzie serve un soggetto distinto e i ruoli cambiano |
| **A. Responsabile di ƎE per tutto** | Soggetto distinto che tratta ogni dato solo su istruzione di ƎE | Contratto art. 28; nessun uso proprio dei dati; a fine contratto restituzione o cancellazione (art. 28, par. 3, lett. g) | Accesso unico con ruoli su case diverse, statistiche proprie e spazio delle bollette offerto in proprio sono finalità della piattaforma: incoerenti con A |
| **B. Misto** | Responsabile per i dati del servizio di ƎE; titolare per account e accesso, sicurezza, adesione se la vende lei, spazio delle bollette | Contratto art. 28 con ƎE più un'informativa propria della piattaforma; dati di ƎE separati dai propri | Va dimostrato che i dati di ƎE non servono agli scopi della piattaforma. Due informative da coordinare |
| **C. Contitolarità** | ƎE e piattaforma decidono insieme dati, accessi e durata del servizio, e la piattaforma persegue anche scopi propri sugli stessi dati (per esempio lo storico della casa come prodotto) | Accordo art. 26, con il contenuto essenziale messo a disposizione degli interessati; ognuno risponde verso l'interessato (art. 26, par. 3); ognuno ha bisogno di una base giuridica | Più obblighi per entrambi; difficile da estendere ad altre agenzie |

**Inferenza.** Il modello B è il più coerente con le decisioni prese: marchio autonomo, un accesso per persona con ruoli diversi, spazio delle bollette non visibile all'agenzia, altre agenzie in futuro con dati separati. I fatti del pilota possono però rendere vero il modello 0 (se la piattaforma è ƎE) o C (se le stesse persone decidono per entrambe). Lo stabiliscono le prime due decisioni della sezione 13.

## 3. I trattamenti

| Trattamento | Interessati | Chi decide finalità e mezzi | Ruolo probabile e alternative | Base giuridica candidata | Conservazione (criterio, sezione 6) |
| --- | --- | --- | --- | --- | --- |
| **Scheda della casa e rapporti** (anagrafiche, contatti, deleghe) | Proprietari, comproprietari, inquilini, delegati | ƎE: quali dati, chi vede cosa; la piattaforma propone la struttura | ƎE titolare; piattaforma responsabile (A, B). Contitolari (C) se la piattaforma usa gli stessi dati per scopi propri | Contratto di gestione con il proprietario (art. 6.1.b); per l'inquilino contratto di locazione o legittimo interesse (6.1.b o 6.1.f, **Da verificare**) | Durata del mandato, poi solo ciò che serve a obblighi e difesa di diritti |
| **Documenti del fascicolo** (contratto, APE, visure, planimetrie, documenti delle parti, deposito) | Parti e garanti; ex proprietari e tecnici citati nei documenti | ƎE per ciò che carica; il proprietario per ciò che aggiunge | ƎE titolare; piattaforma responsabile. Per i documenti del proprietario: rientrano nel servizio di ƎE o restano del proprietario (**Da verificare**) | 6.1.b con il proprietario; 6.1.c dove una legge impone di conservarli; 6.1.f per i dati di terzi | Come sopra; i documenti di terzi non oltre lo scopo |
| **Canoni, ricevute di ƎE, contabili dei bonifici** | Inquilino che paga; proprietario | ƎE registra e conferma | ƎE titolare; piattaforma responsabile. Il proprietario riceve lo stato come destinatario ed è titolare autonomo della sua locazione (**Inferenza**) | 6.1.b (mandato; locazione di cui l'inquilino è parte); 6.1.c per le scritture di ƎE | Canoni: prescrizione 5 anni. Scritture e documenti contabili di ƎE: 10 anni e termini fiscali |
| **Messaggi di servizio e registro delle azioni** (§7.8) | Tutti gli utenti; operatori | ƎE per il contenuto; la piattaforma per invio e sicurezza | ƎE titolare (piattaforma responsabile); registri di accesso e sicurezza della piattaforma: titolare la piattaforma in B | 6.1.b; 6.1.f per sicurezza e tracciabilità. Promozioni: [email.md](email.md) | Durata del rapporto più i tempi per difendere un diritto; da fissare |
| **Account, accesso, tessera, adesione** | Proprietari, inquilini, operatori, tecnici | Chi vende l'adesione e gestisce gli accessi (**da decidere**) | B: piattaforma titolare. 0 o A: ƎE titolare | 6.1.b; 6.1.c per le fatture della quota | Durata dell'account; fatture 10 anni |
| **Spazio privato delle bollette** (indirizzo per le bollette, lettura del QR) | Inquilino; conviventi; intestatario se diverso, anche il proprietario quando le utenze sono a suo nome | La piattaforma ha deciso finalità e mezzi; l'inquilino sceglie cosa inoltrare | B: piattaforma titolare autonoma, con un contratto con l'inquilino. 0 o A: titolare ƎE. Per l'inquilino è uso personale, ma la piattaforma resta soggetta al GDPR (cons. 18) | 6.1.b, contratto con l'inquilino | Finché l'inquilino tiene lo spazio; esportazione e cancellazione a richiesta. Nessun obbligo di legge noto per la piattaforma |
| **Richiesta e incarico** (percorso 2) | Chi chiede; tecnico; persone nelle foto | ƎE instrada e sceglie i tecnici; il tecnico decide sul proprio lavoro e sulla fattura | ƎE titolare del servizio della richiesta (piattaforma responsabile); tecnico titolare autonomo dei dati ricevuti, come la banca nell'esempio EDPB dei pagamenti. Alternativa: responsabile di ƎE se lavora per conto di ƎE | 6.1.b, contratto d'opera fra cliente e tecnico; 6.1.c per le fatture del tecnico | Tecnico: le sue regole contabili. ƎE: storico della casa |
| **Colloqui dello studio** | Proprietari, inquilini, venditori di ƎE | Vedi sezione 10 | Vedi sezione 10 | Vedi sezione 10 | Vedi sezione 10 |

## 4. Informative

- **Fonte (GDPR).** Se i dati si raccolgono presso l'interessato, l'informativa si dà al momento della raccolta (art. 13). Se arrivano da altri, si dà entro un mese, oppure alla prima comunicazione con l'interessato o al primo invio a un altro destinatario; va indicata anche la fonte dei dati (art. 14, par. 2, lett. f, e par. 3). Non serve se l'interessato ha già le informazioni o se informarlo è impossibile o richiede uno sforzo sproporzionato; in quel caso servono misure appropriate, anche rendendo pubbliche le informazioni (art. 14, par. 5). Forma concisa, chiara, facilmente accessibile (art. 12). In caso di contitolarità, il contenuto essenziale dell'accordo va messo a disposizione (art. 26, par. 2).
- **Fonte (Garante, scheda «Doveri»).** L'elenco dei contenuti è tassativo; l'informativa si dà di preferenza per iscritto e in formato elettronico; le icone solo insieme all'informativa estesa.
- **Inferenza per il pilota.** All'attivazione ƎE dà l'informativa al proprietario. All'inquilino, i cui dati ƎE ha già dal contratto, l'informativa arriva al più tardi con il primo messaggio della piattaforma. Nel modello B la piattaforma aggiunge la propria per account e spazio delle bollette. Per i terzi citati nei vecchi documenti (ex proprietari, tecnici) l'eccezione dello sforzo sproporzionato è plausibile, ma va motivata (**Da verificare**). Se ƎE ha già un'informativa per i clienti, va aggiornata, non duplicata (**Da verificare**: non letta).

## 5. Accordi fra le parti

- **ƎE e piattaforma** (**Fonte**: art. 28). Contratto scritto, anche elettronico, con oggetto, durata, natura e finalità, tipi di dati e categorie di interessati; il responsabile tratta solo su istruzione documentata, garantisce riservatezza e sicurezza (art. 32), usa altri responsabili solo con autorizzazione, assiste il titolare su diritti, violazioni e valutazioni d'impatto, a fine servizio cancella o restituisce i dati, permette verifiche (par. 3, lett. a–h, e par. 9). Il titolare deve conoscere in ogni momento l'identità di tutti i sub-responsabili (**Fonte**: EDPB, parere 22/2024). Il responsabile avvisa il titolare di una violazione senza ingiustificato ritardo; il titolare la notifica al Garante entro 72 ore, salvo rischio improbabile (art. 33). Nel modello C serve invece l'accordo dell'art. 26.
- **ƎE e tecnici** (**Inferenza**). La liberatoria che il tecnico firma per entrare nella piattaforma (§5.4) può dire che il tecnico tratta i dati dell'incarico come titolare autonomo, solo per eseguire e fatturare, con riservatezza e senza riusarli. Se invece il tecnico lavora per conto di ƎE serve un contratto art. 28.
- **ƎE e proprietario** (**Inferenza**). ƎE gestisce per conto del proprietario, ma decide da sé dati, procedure e strumenti, ha obblighi propri e un rapporto diretto con l'inquilino: indizi di titolarità autonoma (EDPB par. 27 e allegato I). L'alternativa, ƎE responsabile di ogni proprietario, renderebbe la piattaforma sub-responsabile e richiederebbe un contratto art. 28 per ogni proprietario (**Da verificare**). Affittare una casa è un'attività economica: l'esenzione per uso personale difficilmente copre il proprietario (**Da verificare**).
- **Registro dei trattamenti** (**Fonte**: art. 30; FAQ del Garante). Anche sotto i 250 dipendenti lo tiene chi tratta dati in modo non occasionale; si può limitare ai trattamenti che lo rendono obbligatorio. Il responsabile tiene il proprio registro (art. 30, par. 2). **Inferenza**: ƎE, che tratta i dati dei clienti ogni giorno, rientra nell'obbligo.

## 6. Conservazione e fine del rapporto

| Regola | Cosa dice | Chi riguarda |
| --- | --- | --- |
| GDPR, artt. 5, 13 e 17 | Dati identificabili solo per il tempo necessario; periodo o criteri dichiarati nell'informativa; cancellazione quando non servono più, salvo obbligo di legge o difesa di un diritto (art. 17, par. 3, lett. b ed e) (**Fonte**) | Tutti i titolari |
| EDPB, linee guida 2/2019, par. 40–44 | Chi tratta in base a un contratto deve prevedere fin dall'inizio cosa succede alla sua fine; alla fine smette di trattare, salvo conservazioni per obblighi di legge o difesa di diritti dichiarate dall'inizio (**Fonte**) | Titolari che usano l'art. 6.1.b |
| Codice civile, art. 2220 | Scritture contabili per 10 anni dall'ultima registrazione; per lo stesso periodo fatture, lettere e telegrammi ricevuti e copie di quelli spediti; ammessa la conservazione come immagini fedeli e leggibili (**Fonte secondaria**: testo letto su avvocato.it) | ƎE e i tecnici come imprese |
| DPR 600/1973, art. 22 | Scritture obbligatorie e documenti conservati fino alla definizione degli accertamenti del periodo d'imposta, anche oltre l'art. 2220. Vigente fino al 31/12/2026, poi abrogato dal d.lgs. 141/2026 (**Fonte**: Normattiva) | ƎE, tecnici |
| DPR 600/1973, art. 43 | Avvisi di accertamento entro il 31 dicembre del quinto anno dopo la dichiarazione, settimo se omessa. Vigente fino al 31/12/2026, poi abrogato dal d.lgs. 141/2026 (**Fonte**). Gli articoli corrispondenti del testo unico: **Da verificare** | ƎE; proprietari per i redditi da locazione |
| Codice civile, art. 2948, n. 3 | Le pigioni e ogni altro corrispettivo di locazione si prescrivono in 5 anni (**Fonte secondaria**: avvocato.it) | Prova del pagamento per inquilino e proprietario |
| D.lgs. 231/2007, artt. 3 e 31 | Gli agenti immobiliari sono soggetti all'antiriciclaggio; nelle locazioni solo per canoni mensili da 10.000 € in su. Chi è obbligato conserva i documenti per 10 anni dalla fine del rapporto (**Fonte**: Normattiva) | ƎE nelle vendite e nelle locazioni sopra soglia |

**Inferenza, per i momenti del percorso:**
- **Fine della locazione.** L'accesso dell'ex inquilino al fascicolo finisce (§7.11), con un periodo stabilito per scaricare contratto e ricevute. ƎE conserva ciò che le serve secondo il calendario di conservazione. Il proprietario continua a vedere lo storico della casa, ma non i dati dell'ex inquilino oltre il necessario.
- **Fine dell'adesione del proprietario.** Chiude l'account e l'adesione, non i dati che ƎE deve conservare per il mandato (§5.6: account, adesione e locazione sono separati).
- **Fine del rapporto fra ƎE e piattaforma.** Nei modelli A e B la piattaforma restituisce o cancella i dati di ƎE (art. 28, par. 3, lett. g). Nel modello B lo spazio delle bollette resta un rapporto fra piattaforma e inquilino.
- **Spazio delle bollette.** Senza obblighi di legge per la piattaforma, decide l'inquilino: conserva, esporta, cancella. L'esportazione in formato leggibile da macchina è un diritto quando la base è il contratto (art. 20).
- Le **ricevute che ƎE rilascia** per canoni incassati per conto dei proprietari rientrano probabilmente nelle scritture e nella corrispondenza di ƎE, quindi 10 anni (**Da verificare** con un commercialista).

## 7. Valutazione d'impatto

- **Fonte.** Serve prima del trattamento se può presentare un rischio elevato, in particolare con nuove tecnologie (art. 35, par. 1); è sempre richiesta per profilazione con effetti significativi, categorie particolari su larga scala, sorveglianza sistematica di luoghi pubblici (par. 3). La fa il titolare; il responsabile lo assiste (art. 28, par. 3, lett. f).
- **Fonte (Garante, provv. n. 467/2018 e allegato 1).** Elenco di 12 tipologie, non esaustivo. Le più vicine al progetto: uso sistematico di dati per osservare, monitorare o controllare gli interessati, anche con app (n. 3); dati di carattere estremamente personale su larga scala, compresi dati finanziari utilizzabili per frodi nei pagamenti (n. 4); trattamenti non occasionali di dati di soggetti vulnerabili, compresi gli anziani (n. 6); tecnologie innovative, come l'intelligenza artificiale, se ricorre almeno un altro criterio (n. 7); interconnessione o raffronto di informazioni (n. 9). Restano validi i nove criteri delle linee guida WP248: quando ne ricorrono due o più, di regola serve la valutazione.
- **Fonte (cons. 91).** Non è larga scala il trattamento dei dati dei clienti da parte di un singolo professionista.
- **Inferenza per il pilota.** Circa 100 clienti di una sola agenzia non sono larga scala. Possono però ricorrere due criteri: dati di carattere economico molto personali (canoni, pagamenti, bollette) e un monitoraggio dei comportamenti, se la cronologia delle chiamate ai tecnici (§5.4) serve a valutare quanto inquilini e proprietari li usano. Tenere separate le bollette dai dati di ƎE evita anche il criterio dell'incrocio di dati. Prima dell'uso reale conviene una verifica scritta dei criteri e, se l'esito è dubbio, una valutazione breve: costa poco a questa scala e serve anche alla progettazione. Assistente AI, chiamate automatiche, storico condiviso con chi vuole comprare e più agenzie cambierebbero la risposta.
- **Da verificare.** La proposta della Commissione COM(2025) 836 (Digital Omnibus) modificherebbe fra l'altro la definizione di dato personale, gli elenchi per la valutazione d'impatto e la notifica delle violazioni; l'EDPB e l'EDPS l'hanno commentata nel parere congiunto 2/2026. Lo stato dell'iter a ottobre 2026 non è confermato.

## 8. Fornitori fuori dall'Unione Europea

- **Fonte (GDPR, artt. 44–49).** Un trasferimento verso un paese terzo è lecito con una decisione di adeguatezza (art. 45), con garanzie adeguate come le clausole tipo della Commissione (art. 46) o, in casi specifici e non ripetitivi, con le deroghe dell'art. 49. Va indicato nell'informativa (artt. 13 e 14, par. 1, lett. f) e nel registro (art. 30).
- **Fonte (Commissione).** Gli Stati Uniti sono adeguati solo per le organizzazioni che aderiscono all'EU-US Data Privacy Framework (decisione del 10 luglio 2023; primo riesame pubblicato il 9 ottobre 2024). Le clausole tipo per i trasferimenti sono quelle della decisione 2021/914.
- **Fonte (EDPB, raccomandazioni 01/2020).** Chi esporta mappa i trasferimenti, individua lo strumento, verifica che funzioni davvero nel paese terzo, aggiunge misure se serve, e rivaluta nel tempo. Anche l'accesso remoto da un paese terzo, per esempio per assistenza, è un trasferimento.
- **Inferenza.** Per il pilota conviene scegliere fornitori (hosting, invio email, lettura dei documenti) con dati nell'UE, e verificare per ciascuno sede, sub-responsabili e accessi remoti. Un fornitore statunitense è accettabile se aderisce al DPF o con clausole tipo e valutazione. La scelta resta all'architettura (STUDIO, area O).

## 9. Dati di terzi nei documenti

- **Fonte.** Dati adeguati, pertinenti e limitati al necessario (art. 5, par. 1, lett. c). Per impostazione predefinita i dati non sono accessibili a un numero indefinito di persone senza l'intervento della persona (art. 25, par. 2). Le categorie particolari, come la salute, sono vietate salvo eccezioni, fra cui il consenso esplicito (art. 9).
- **Chi compare** (**Inferenza**): garanti e conviventi nel contratto; ex proprietari ed ex inquilini in visure, vecchi contratti e pratiche edilizie; certificatori e tecnici in APE e permessi; l'intestatario di una bolletta diverso dall'inquilino; persone o oggetti personali nelle foto di una richiesta.
- **Regole pratiche** (**Inferenza**, coerenti con §7.1 e §7.9):
  - l'inquilino vede solo i documenti della sua locazione;
  - il tecnico vede la richiesta, l'indirizzo, il contatto e gli interventi precedenti senza nomi di altre persone, non il fascicolo;
  - una condivisione futura con chi vuole comprare richiede di oscurare i dati di terzi: il consenso del proprietario non copre i dati altrui;
  - nelle richieste non si chiedono informazioni sulla salute; se servono davvero (per esempio un'urgenza legata a una disabilità), solo con consenso esplicito.

## 10. Colloqui dello studio

**Chi è titolare** (**Inferenza** sui criteri EDPB della sezione 1):
- **ƎE titolare unico.** ƎE sceglie le persone fra i suoi clienti, conduce, tiene appunti ed eventuali registrazioni; utente e agente ricevono solo sintesi anonime. È coerente con la decisione del 18/10, ma solo se è ƎE ad approvare traccia e regole.
- **ƎE contitolare con chi fornisce la piattaforma.** È lo scenario più vicino ai fatti se lo studio serve a progettare la piattaforma e le regole (cosa chiedere, cosa registrare, per quanto conservare) le fissano i fondatori con i materiali dell'agente. Serve un accordo art. 26 semplice e un'informativa che nomini entrambi; anche il consenso deve nominare tutti i titolari che se ne avvalgono (EDPB, linee guida 05/2020, par. 65).
- **ƎE titolare, fondatori responsabili**, se i fondatori trattano i materiali grezzi per conto di ƎE.

**Basi giuridiche** (**Fonte** e **Inferenza**):
- Usare i contatti dei clienti per invitarli: finalità compatibile o legittimo interesse, dato il rapporto di clientela (art. 6, par. 4; cons. 47).
- Colloquio e appunti: legittimo interesse o consenso.
- Registrazione audio: consenso separato, documentabile e revocabile (art. 7), con l'alternativa di soli appunti. Il consenso vale solo se c'è una scelta vera, senza conseguenze negative per chi rifiuta (EDPB 05/2020, par. 3 e 24): va detto che non partecipare non cambia nulla nel servizio di ƎE.
- Non è ricerca scientifica nel senso del GDPR: un'analisi fatta solo per l'interesse commerciale di un'impresa non lo è (EDPB, linee guida 1/2026 in consultazione, esempio 3). Valgono le regole ordinarie, senza le deroghe dell'art. 89.

**Informativa** (art. 13; **Inferenza** sul formato): una pagina consegnata prima del colloquio, con: chi è titolare e il contatto; scopo (migliorare il servizio di ƎE e progettare la piattaforma); cosa si raccoglie; che la partecipazione è libera; chi vede appunti e audio (solo il personale di ƎE che conduce) e quali strumenti si usano; per quanto si conservano (per esempio audio cancellato dopo la sintesi); che nel repository entrano solo sintesi anonime; i diritti, compresa la revoca del consenso e il reclamo al Garante.

**Come rendere anonime le sintesi:**
- **Fonte (EDPB, linee guida 02/2026, in consultazione fino al 30/10/2026; aggiornano il parere WP29 05/2014).** Un dato è anonimo se supera tre criteri: nessun record isolabile, nessun collegamento con altri dati, nessuna deduzione su una persona. L'anonimato si valuta dal punto di vista di chi riceve i dati e dei mezzi che può ragionevolmente usare; per chi tratta per conto di un altro vale il punto di vista del titolare (par. 11–15). L'anonimizzazione è essa stessa un trattamento: richiede base giuridica, trasparenza e documentazione; non si chiama «anonimo» ciò che resta identificabile (par. 38–41).
- **Inferenza.** Il gruppo è piccolo e chi legge (utente, fondatori, agente) conosce l'agenzia: una sintesi per persona rischia di essere riconoscibile anche senza nomi. Regole proposte:
  - sintesi per tema, che raccolgono più persone; al massimo un codice per partecipante, senza chiave nel repository (la chiave, se serve, resta a ƎE);
  - niente nomi, indirizzi, vie o zone, numero esatto di case, mestieri, date precise, importi personali, fatti rari;
  - citazioni solo parafrasate e generiche;
  - una prova scritta prima di caricare: qualcuno di ƎE potrebbe riconoscere la persona? Se sì, generalizzare o togliere;
  - annotare in una riga come si è anonimizzato.

**Cosa può entrare nel repository** (**Inferenza**):
- Sì: sintesi che superano la prova; conteggi (quanti colloqui per gruppo, quante bollette con PDF o QR); traccia e modelli di informativa senza dati; esito aggregato della pre-adesione.
- No: audio, trascrizioni, appunti grezzi, nomi, contatti, calendari, moduli di consenso firmati, foto, documenti, bollette.
- Motivo in più: repository e sessione di lavoro dell'agente sono servizi di fornitori esterni (osservazione: l'ambiente di lavoro è un servizio cloud collegato a GitHub). Con dati personali sarebbero trattamenti e forse trasferimenti fuori dall'UE (sezione 8); con dati anonimi no.
- **Prova sulle bollette** (decisione del 19/10). Anche con nome e indirizzo oscurati, una bolletta può contenere identificativi: codice cliente, codici POD o PDR della fornitura, IBAN, codice avviso pagoPA nel QR, che è legato a un avviso e quindi al suo debitore (**Inferenza**). Caricarla nella sessione la affida al fornitore della sessione (**Da verificare**: condizioni e luogo del trattamento). Proposta: oscurare anche questi codici e misurare la lettura del QR su avvisi sintetici, o con il consenso informato dei volontari.

## 11. Cosa ne deriva per il percorso 1 (inferenza)

1. La specifica indica, per ogni passo, chi è titolare: scheda, fascicolo, canone e ricevute sono trattamenti di ƎE.
2. All'attivazione l'operatore consegna o collega l'informativa di ƎE (e della piattaforma, nel modello B). L'inquilino la riceve al più tardi con il primo messaggio.
3. Gli accessi di §7.1 sono «chi vede cosa», cioè un mezzo essenziale: ƎE li approva per iscritto nelle istruzioni alla piattaforma.
4. Il proprietario vede gli stati del canone e la consegna; l'inquilino i propri pagamenti e le ricevute; nessun altro.
5. Messaggi solo di servizio, come già previsto ([email.md](email.md)).
6. Fine della locazione: chiusura dell'accesso dell'ex inquilino dopo un periodo per scaricare i documenti; i dati restano a ƎE secondo il calendario di conservazione.
7. Ricevute e registro dei canoni esportabili per ƎE, perché ne risponde come impresa.
8. Dati di ƎE separati per agenzia fin dal primo giorno; account e accessi della piattaforma separati dai dati di ƎE.
9. Prima dell'uso reale: registro di ƎE aggiornato, verifica scritta sulla valutazione d'impatto, elenco dei fornitori con sede e trasferimenti.

## 12. Dove serve un parere professionale

Prima di qualsiasi uso reale, e in quest'ordine:
1. **Prima dei colloqui** (il primo uso reale): titolare, informativa, modulo di consenso alla registrazione, regole di anonimizzazione. Può bastare una revisione breve.
2. **Ruoli e accordi** fra ƎE, piattaforma, proprietari e tecnici: contratto art. 28 o accordo art. 26, liberatoria dei tecnici.
3. **Basi giuridiche** per i dati dell'inquilino trattati da ƎE e per i dati di terzi nei documenti.
4. **Calendario di conservazione**, con un commercialista: scritture, ricevute dei canoni incassati per conto dei proprietari, nuovi articoli del testo unico dal 2027.
5. **Esito della verifica sulla valutazione d'impatto.**
6. **Fornitori e trasferimenti** fuori dall'UE.
7. **Prova sulle bollette** dei volontari nella sessione di lavoro.

## 13. Domande aperte

**Decisioni dell'utente emerse dalla ricerca:**
1. Nel pilota, chi fornisce giuridicamente la piattaforma: ƎE stessa, una società distinta (anche da costituire) o i fondatori come persone?
2. Chi vende l'adesione al proprietario e ne incassa la quota: ƎE dentro il servizio di gestione, o la piattaforma con termini propri?
3. Lo spazio privato delle bollette è un servizio della piattaforma all'inquilino, con termini propri, o un servizio di ƎE?
4. Colloqui: titolare la sola ƎE, o ƎE insieme a chi fornisce la piattaforma? Si registra l'audio o si prendono solo appunti?
5. Fine della locazione: per quanto tempo l'ex inquilino può scaricare contratto e ricevute, e il suo spazio delle bollette resta, si esporta o si chiude?
6. Prova sulle bollette: si oscurano anche codice cliente, POD o PDR, IBAN e QR, oppure il QR si prova su avvisi sintetici?

**Da verificare:**
- Gli articoli del testo unico d.lgs. 141/2026 che sostituiscono gli artt. 22 e 43 del DPR 600/1973 dal 1° gennaio 2027.
- Il testo ufficiale degli artt. 2220 e 2948 c.c.: Normattiva non mostrava il testo degli articoli, letto su fonte secondaria.
- L'informativa e il registro che ƎE usa già oggi per i clienti.
- Se ƎE è titolare autonomo o responsabile dei proprietari nella gestione.
- Lo stato della proposta Digital Omnibus.
- Regole sulla registrazione delle conversazioni diverse dal GDPR: non coperte da questa ricerca.

## Fonti

Lette il 19 ottobre 2026.
- Regolamento (UE) 2016/679 (GDPR), artt. 2, 4–7, 9, 12–14, 17, 20, 24–26, 28–30, 32–35, 44–49, considerando 18, 26, 47, 91: https://eur-lex.europa.eu/eli/reg/2016/679/oj. EUR-Lex non consentiva la lettura automatica; letto il testo della GU L 119 del 4/5/2016 dall'Ufficio delle pubblicazioni dell'UE (http://publications.europa.eu/resource/celex/32016R0679), senza verificare le rettifiche successive.
- EDPB, Linee guida 07/2020 sui concetti di titolare e responsabile, versione 2.0 in italiano (esiste una versione 2.1 in inglese con correzioni minori): https://www.edpb.europa.eu/system/files/2023-10/edpb_guidelines_202007_controllerprocessor_final_it.pdf
- EDPB, Linee guida 02/2026 sull'anonimizzazione, versione 1.0 del 7/7/2026, in consultazione fino al 30/10/2026: https://www.edpb.europa.eu/system/files/2026-07/edpb_guidelines_202602_anonymisation_v1_en_0.pdf; consultazione: https://www.edpb.europa.eu/public-consultations/guidelines-022026-on-anonymisation_en. Il parere WP29 05/2014 è citato da queste linee guida, non letto direttamente.
- EDPB, Linee guida 05/2020 sul consenso, versione 1.1: https://www.edpb.europa.eu/system/files/documents/files/file1/edpb_guidelines_202005_consent_en.pdf
- EDPB, Linee guida 2/2019 sull'art. 6, par. 1, lett. b: https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines-art_6-1-b-adopted_after_public_consultation_en.pdf
- EDPB, Linee guida 1/2026 sulla ricerca scientifica, in consultazione: https://www.edpb.europa.eu/system/files/2026-05/edpb_guidelines_202601_scientificresearch_en.pdf
- EDPB, Raccomandazioni 01/2020 sulle misure supplementari, versione 2.0: https://www.edpb.europa.eu/system/files/documents/2021-06/edpb_recommendations_202001vo.2.0_supplementarymeasurestransferstools_en.pdf
- EDPB, Parere 22/2024 su responsabili e sub-responsabili: https://www.edpb.europa.eu/system/files/documents/2024-10/edpb_opinion_202422_relianceonprocessors-sub-processors_en.pdf
- EDPB-EDPS, Parere congiunto 2/2026 sul Digital Omnibus: https://www.edpb.europa.eu/system/files/2026-02/edpb_edps_jointopinion_202602_digitalomnibus_en.pdf
- Garante, provvedimento n. 467 dell'11/10/2018, elenco dei trattamenti soggetti a valutazione d'impatto: https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9058979; allegato 1: https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9059358
- Garante, scheda «Doveri – Come trattare correttamente i dati»: https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/8981258
- Garante, FAQ sul registro delle attività di trattamento: https://www.garanteprivacy.it/home/faq/registro-delle-attivita-di-trattamento
- Garante, provvedimento n. 618 del 17/10/2024 di approvazione del codice di condotta per il software gestionale (AssoSoftware): https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10075998; testo del codice: https://www.garanteprivacy.it/documents/10160/0/Codice+di+condotta+per+il+trattamento+dei+dati+personali+effettuato+dalle+imprese+di+sviluppo+e+produzione+di+software+gestionale.pdf/a89ad70a-ee18-22fa-8e01-578b04f1023e?version=2.0&download=true
- D.lgs. 196/2003 (Codice privacy), art. 2-quaterdecies, testo in vigore dal 19/9/2018: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196~art2quaterdecies
- DPR 600/1973, art. 22 (vigente fino al 31/12/2026): https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600~art22!vig=2026-10-19
- DPR 600/1973, art. 43 (vigente fino al 31/12/2026): https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600~art43!vig=2026-10-19
- D.lgs. 5/8/2026, n. 141, testo unico adempimenti e accertamento (letto solo l'indice): https://www.normattiva.it/eli/id/2026/08/06/26G00160/CONSOLIDATED/20260917
- D.lgs. 231/2007, art. 3 (testo in vigore dal 29/4/2026) e art. 31: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2007-11-21;231~art3!vig=2026-10-19, https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2007-11-21;231~art31!vig=2026-10-19
- Codice civile, artt. 2220 e 2948 (fonte secondaria; ufficiale: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262): https://www.avvocato.it/?p=297526, https://www.avvocato.it/?p=296560
- Commissione europea, decisioni di adeguatezza: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en
- Commissione europea, clausole contrattuali tipo: https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en
