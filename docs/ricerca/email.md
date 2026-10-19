# Email di servizio: arrivare nella posta in arrivo senza sembrare spam

Ricerca del 19 ottobre 2026, svolta dall'agente in sequenza su fonti primarie, con la data di lettura per ogni fonte. Risponde al ticket [05 «Email che non sembrano spam»](../../.scratch/controllo-a/issues/05-email-non-spam.md): cosa serve perché le email di servizio arrivino nella posta in arrivo e siano riconoscibili, e quali forme «dinamiche» i programmi di posta mostrano davvero.

**Requisito dell'utente** ([DESIGN.md](../../DESIGN.md), 19/10/2026): email innovative e dinamiche, semplici ma d'impatto, mai con l'aria di spam o pubblicità. **Decisione sul canale** ([PRODUCT.md](../../PRODUCT.md) §12, «Canale principale (T5)»): messaggi puntuali solo quando c'è qualcosa da fare o da sapere; dettaglio e azioni nella piattaforma web; l'email è il canale che raggiunge tutti.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Arrivare nella posta in arrivo.** Le regole minime valgono per ogni mittente: SPF o DKIM, DNS inverso valido, TLS, segnalazioni di spam sotto lo 0,3% (**Fonte**: Gmail, Yahoo). Le regole più severe scattano dai 5.000 messaggi al giorno (**Fonte**: Gmail, Outlook.com), lontani dai volumi del pilota. Conviene comunque partire con SPF, DKIM e DMARC allineati: servono anche per il logo e per le email dinamiche (**Inferenza**).
- **Logo nella casella.** Richiede DMARC in «quarantine» o «reject». Gmail lo mostra con un certificato: VMC (marchio registrato, con spunta) o CMC (logo mostrato da almeno 12 mesi sul sito dello stesso dominio). Yahoo lo mostra senza certificato, ma solo per invii massivi con buona reputazione. Apple lo mostra con BIMI o con Branded Mail di Apple Business, disponibile in Italia. Outlook.com non lo mostra (**Fonte**). Il nome del prodotto non è deciso: nel pilota il logo in casella è improbabile (**Inferenza**).
- **Email dinamiche.** AMP per Email funziona solo in Gmail, Yahoo, AOL, Mail.ru e FairEmail; non in Outlook.com né in Apple Mail. Richiede una registrazione per ogni indirizzo mittente e una versione HTML, che è quella che vedrà gran parte dei destinatari (**Fonte**). Le azioni nella casella (markup di Gmail, Actionable Messages di Outlook) chiedono una storia di centinaia di email al giorno per settimane: fuori portata nel pilota (**Inferenza**).
- **«Non sembrare pubblicità» è anche una regola giuridica.** Un'email con scopo commerciale è commercializzazione diretta anche se informa (**Fonte**: Corte di giustizia, C-654/23). Le email del percorso 1 restano di servizio solo se non promuovono nulla; ogni promozione va in un flusso separato, con consenso o «soft spam» e opposizione in ogni messaggio (**Inferenza**).
- **Il contenuto deve reggersi da solo**: senza immagini, in tema scuro, in testo semplice. L'apertura di un'email non prova la lettura (**Fonte**: Apple, Microsoft).

## 1. Requisiti dei fornitori di posta

| Fornitore | Requisito | Soglia o data | Fonte |
| --- | --- | --- | --- |
| **Gmail, tutti i mittenti** | SPF o DKIM; record PTR coerente con l'IP di invio; TLS; formato RFC 5322 con Message-ID valido; non imitare intestazioni From di Gmail; nome visualizzato usato solo per identificare il mittente | Dal 1/2/2024; segnalazioni in Postmaster Tools sotto lo 0,3% | **Fonte**: Google, linee guida |
| **Gmail, mittenti massivi** | SPF **e** DKIM; DMARC almeno `p=none`; From allineato al dominio SPF o DKIM; chiave DKIM di almeno 1024 bit (consigliati 2048); disiscrizione in un clic (RFC 8058) e link visibile nel corpo per i messaggi di marketing e su iscrizione. Le email transazionali sono escluse (esempi: reimpostazione della password, conferme di prenotazione e di invio di moduli) | «Circa 5.000» messaggi in 24 ore verso account Gmail personali, sommando i sottodomini; lo stato resta per sempre. Disiscrizioni entro 48 ore. Segnalazioni sotto lo 0,1%, mai dallo 0,3% in su. I domini nuovi hanno un calendario accelerato. Da novembre 2025 controlli più severi; i messaggi non conformi ricevono errori temporanei o permanenti o vanno nello spam | **Fonte**: Google, linee guida e FAQ |
| **Yahoo, tutti** | SPF o DKIM; DNS diretto e inverso validi; RFC 5321 e 5322 | Da febbraio 2024; segnalazioni sotto lo 0,3% | **Fonte**: Yahoo |
| **Yahoo, massivi** | SPF e DKIM; DMARC almeno `p=none` e superato; allineamento anche rilassato; disiscrizione in un clic (POST di RFC 8058 «fortemente raccomandato», mailto accettato) e link visibile nel corpo, per marketing e iscrizioni; non per le transazionali | Nessuna soglia di volume dichiarata; disiscrizioni entro 2 giorni; segnalazioni sotto lo 0,3% | **Fonte**: Yahoo, requisiti e FAQ |
| **Outlook.com, Hotmail, Live** | Oltre 5.000 email al giorno: SPF e DKIM superati, DMARC almeno `p=none` allineato a SPF o DKIM. Consigli: From o Reply-To validi e in grado di ricevere risposte, disiscrizione visibile, pulizia delle liste, oggetti veritieri, destinatari che hanno acconsentito. Per tutti: DNS inverso valido, nessun nuovo invio dopo un errore 5xx | Dal 5/5/2025. I non conformi vanno in posta indesiderata e possono essere respinti con «550; 5.7.515». L'articolo Microsoft si contraddice sul rifiuto immediato: **Da verificare** | **Fonte**: Microsoft, regole e articolo del 2/4/2025 |
| **Libero e Virgilio** (Italiaonline) | Nessuna regola pubblica per i mittenti trovata; la guida antispam non descrive i criteri | — | **Fonte**: Italiaonline; **Da verificare** |
| **TIM Mail** | La pagina antispam fissa limiti per i propri utenti (50 destinatari a messaggio, 200 invii al giorno), non regole per chi scrive ai clienti TIM | — | **Fonte**: TIM |
| **Aruba** | Secondo un articolo del fornitore la webmail controlla SPF, DKIM e DMARC dei messaggi in arrivo e respinge o segnala come sospetti i non conformi. Nessuna regola per i mittenti trovata | Articolo del 13/06/2025 | **Fonte**: Aruba |

I siti `postmaster.` di Libero, Italiaonline, TIM e Aruba non erano raggiungibili dall'ambiente di ricerca: non si sa se esistono (**Da verificare**).

**Standard di riferimento** (**Fonte**: IETF)
- SPF è RFC 7208 (2014); DKIM è RFC 6376 (2011), aggiornata da RFC 8301 su algoritmi e chiavi.
- DMARC: RFC 7489 (2015, informativa) è stata sostituita a maggio 2026 da **RFC 9989**, standard proposto, con RFC 9990 e 9991 per i rapporti. RFC 9989 elimina il tag `pct` e introduce `t` («test»). Le pagine di Google e Apple chiedono ancora `pct=100`; come trattano un record senza `pct` è **Da verificare**.
- Disiscrizione in un clic (RFC 8058): un'intestazione `List-Unsubscribe` con un URI HTTPS e `List-Unsubscribe-Post: List-Unsubscribe=One-Click`. La firma DKIM deve coprire entrambe. La richiesta POST non porta cookie né autenticazione e non deve essere reindirizzata. L'URI identifica destinatario e lista con un componente difficile da falsificare.

**Cosa conta a bassi volumi** (**Inferenza**). Con circa 100 clienti il pilota resta lontano dalle soglie massive. Contano la reputazione del dominio e le segnalazioni: con pochi invii, poche segnalazioni pesano molto (una su 200 email è lo 0,5%, calcolo dell'agente). Nei giorni a basso volume Postmaster Tools può non mostrare i dati (**Fonte**: Google). Gmail scrive che sono i destinatari, non Google, a decidere se un messaggio è promozionale: la difesa migliore è mandare solo ciò che la persona si aspetta.

## 2. Riconoscibilità del marchio nella casella

| Programma | Cosa mostra | Requisiti | Fonte |
| --- | --- | --- | --- |
| **Gmail** | Logo BIMI; spunta di verifica solo con VMC | DMARC `p=quarantine` o `reject` con `pct=100`; logo SVG Tiny PS di almeno 96 px; VMC (logo registrato come marchio presso un ufficio riconosciuto; la registrazione può richiedere 6–12 mesi) oppure CMC se il logo non è registrato | **Fonte**: Google, pagina aggiornata il 13/10/2026 |
| **Yahoo** | Logo BIMI senza certificato | Record BIMI con SVG valido; DMARC `quarantine` o `reject`; solo invii massivi, mai email personali; reputazione e coinvolgimento sufficienti, senza soglie numeriche | **Fonte**: Yahoo |
| **Apple Mail** (iOS 16, macOS Ventura 13 e successivi, iCloud.com) | Logo BIMI | Requisiti dello standard BIMI; funziona con VMC «e altre forme di BIMI Evidence Documents». Il CMC non è citato: **Da verificare** | **Fonte**: Apple, 7/2/2024 |
| **Apple Mail e iCloud Mail** (Branded Mail di Apple Business) | Logo e nome del marchio | Organizzazione proprietaria del marchio e verificata da Apple; marchio e logo approvati (fino a 7 giorni lavorativi); dominio commerciale; tutte le email firmate DKIM, SPF da solo non basta; DMARC `p=quarantine` o `reject` con `pct=100`. Disponibile in Italia; su iPhone se la lingua predefinita è fra quelle elencate, italiano compreso. Marchio registrato e certificato non sono citati: **Da verificare** | **Fonte**: Apple Business |
| **Outlook.com** | Nessun logo BIMI | — | **Fonte**: BIMI Group, maggio 2025. Nessun annuncio Microsoft trovato: **Da verificare** |

**Certificati** (**Fonte**: Mark Certificate Requirements, versione 1.8 dell'11/06/2026)
- **VMC**: marchio registrato presso un ufficio riconosciuto dall'OMPI, in vigore e verificato nel database ufficiale. Il titolare è l'organizzazione richiedente, o questa ha una licenza.
- **CMC per uso precedente**: per loghi non registrati. Il logo deve comparire oggi su un sito del dominio controllato dal richiedente e risultare già mostrato sullo stesso dominio almeno 12 mesi prima, con verifica su archive.org.
- Le condizioni d'uso vietano ai programmi di posta di cambiare colori, sfondo o trasparenza del logo: possono solo ridimensionarlo o ritagliarlo.
- La FAQ del BIMI Group dice ancora che Gmail e Apple richiedono un VMC; la pagina di Google, più recente, accetta anche il CMC. Prevale la fonte del fornitore.

**Inferenza.** Nome e simbolo non sono decisi (PRODUCT.md §1, DESIGN.md). Le strade per un logo in casella sono tre: registrare il marchio e ottenere un VMC; mettere presto il logo definitivo sul sito del dominio da cui partono le email, per un CMC dopo 12 mesi; Apple Branded Mail, che copre solo Apple. Nel pilota nessuna è pronta. La riconoscibilità passerà da nome e indirizzo del mittente costanti e da contenuti attesi. Per i clienti del pilota il nome noto è ƎE, non il nuovo marchio: un mittente sconosciuto che scrive del loro affitto rischia di sembrare phishing.

## 3. Email dinamiche e azioni nella casella

| Tecnologia | Chi la mostra oggi | Cosa richiede | Fonte |
| --- | --- | --- | --- |
| **AMP per Email** (parte `text/x-amp-html`) | Gmail: browser desktop recenti (non Edge) e app iOS e Android aggiornate. Yahoo Mail: web, iOS, Android. Nell'elenco di amp.dev anche AOL, Mail.ru e FairEmail. Outlook.com l'ha spenta il 1/10/2020. Apple Mail non è nell'elenco | Gmail: registrazione per ogni indirizzo mittente, inviando un'email reale di produzione; SPF, DKIM allineato e DMARC, con `quarantine` o `reject` raccomandato e forse obbligatorio in futuro; sito valido sul dominio; poche segnalazioni; risposta entro 5 giorni lavorativi; revocabile. Yahoo: DKIM e DMARC superati (o DKIM con allineamento stretto) e registrazione | **Fonte**: Google, Yahoo, amp.dev, Microsoft |
| **Markup di Gmail** (schema.org): azioni con un clic, azioni «vai a», evidenze di ordini, fatture, prenotazioni | Gmail | Registrazione; DKIM o SPF sul dominio del From; mittente fisso; «centinaia di email al giorno» verso Gmail per «almeno qualche settimana»; poche segnalazioni; azioni solo nelle transazionali, mai nelle promozioni | **Fonte**: Google |
| **Actionable Messages di Outlook** (Adaptive Cards) | Outlook per Microsoft 365 (web, Windows, Mac, iOS, Android); secondo la pagina anche Outlook.com con un programma supportato. Non su Outlook web da browser del telefono; le schede non si adattano al tema scuro | Registrazione nel portale Microsoft. Per tutti gli utenti serve l'approvazione Microsoft, con circa cento email al giorno verso Microsoft 365 per qualche settimana e solo email transazionali. Dall'8/6/2026 è obbligatoria l'autenticazione con token Entra ID | **Fonte**: Microsoft |

**Nei programmi che non le supportano** (**Fonte**: amp.dev, Google, Microsoft)
- Si vede la parte HTML o testo, che è obbligatoria. Lo stesso accade a chi ha disattivato le email dinamiche, possibile in Gmail.
- Chi risponde o inoltra perde la parte AMP. Il programma può smettere di mostrarla dopo un periodo; amp.dev cita 30 giorni come esempio.
- In Gmail l'anteprima nella lista e la ricerca usano la parte HTML, non quella dinamica.
- Markup e Actionable Messages vengono tolti all'inoltro; chi non li supporta vede l'email normale.

**Inferenza**
- Gran parte dei destinatari vedrà l'HTML. Il carattere «dinamico» richiesto deve stare lì: stato chiaro, data di riferimento, un'azione evidente verso la piattaforma.
- In futuro AMP potrebbe mostrare in Gmail e Yahoo lo stato aggiornato del canone al momento dell'apertura. Altrove l'email resta ferma: deve sempre dire a che data si riferisce.
- Niente azioni sul denaro dalla casella, come «confermo l'incasso». Un'email si inoltra e un clic non dice chi ha agito (PRODUCT.md §7.4, §7.5, §7.8): chi conferma deve essere autenticato nella piattaforma.

## 4. Email di servizio e promozionali

**Regole europee e italiane** (**Fonte**)
- **Direttiva 2002/58/CE, art. 13.** Per la posta elettronica a fini di commercializzazione diretta serve il consenso preventivo (par. 1). Eccezione: chi ha ottenuto l'indirizzo da un cliente vendendogli un prodotto o servizio può promuovere propri prodotti o servizi analoghi. Al cliente va offerta, alla raccolta e in ogni messaggio, la possibilità di opporsi gratis e in modo semplice (par. 2). È vietato nascondere il mittente o non dare un indirizzo valido per far cessare gli invii (par. 4).
- **D.lgs. 196/2003, art. 130.** Consenso per le email promozionali (commi 1 e 2). «Soft spam» (comma 4): senza consenso per servizi analoghi a quelli venduti, se la persona, informata, non rifiuta; a ogni invio va informata che può opporsi in ogni momento, gratis. Divieto di camuffare il mittente e obbligo di un recapito per esercitare i diritti degli artt. 15–22 del GDPR (comma 5).
- **Garante, linee guida del 4/7/2013.** Il consenso è libero, specifico e documentato; non preimpostato; non obbligatorio per avere il servizio. Non si chiede con il primo messaggio promozionale. Il soft spam vale solo per l'email.
- **Corte di giustizia, C-654/23 del 13/11/2025.** È commercializzazione diretta la comunicazione che ha uno scopo commerciale e si rivolge direttamente e individualmente a un consumatore (punto 41). Un contenuto informativo non la esclude (punto 44). Una newsletter che spinge verso contenuti a pagamento è promozionale (punto 45). Un account gratuito con contenuti a pagamento può valere come «vendita» ai fini del soft spam; in quel caso non si applicano le basi giuridiche dell'art. 6, par. 1, del GDPR (dispositivo).
- **Garante, provvedimento del 12/9/2024** (Sky Italia). Un SMS «Riattivati con un click» non è «di servizio»: promuove un servizio e non si collega ad alcun contratto in corso. Mantenere un account non significa voler ricevere promozioni.
- **GDPR.** È lecito il trattamento necessario all'esecuzione di un contratto (art. 6, par. 1, lett. b). Chi si oppone al marketing diretto non riceve più trattamenti per quel fine (art. 21, par. 2–3).

**Regole dei fornitori** (**Fonte**: Google, Apple)
- Gmail chiede di non mescolare tipi di contenuto nello stesso messaggio. Suggerisce un From costante per ogni categoria e IP diversi per notifiche e promozioni. Il confine fra transazionale e promozionale varia per settore e norme.
- Gmail ordina la posta in schede. «Aggiornamenti» raccoglie conferme, notifiche, estratti conto e promemoria automatici; «Promozioni» offerte e messaggi promozionali. Con le schede attive, le notifiche di nuova posta arrivano solo per «Principale».
- Apple Mail usa le categorie Principale, Transazioni, Aggiornamenti e Promozioni, non in tutti i paesi. Classifica per mittente; un messaggio con informazioni urgenti compare anche in Principale.

**Cosa rende un'email di servizio** (**Inferenza**, da confermare con un parere professionale): è legata a un contratto in corso, informa di un fatto del rapporto o chiede un'azione necessaria al servizio, e non ha alcuno scopo commerciale. Basta una riga che proponga un servizio a pagamento per renderla commercializzazione diretta.

## 5. Accessibilità e tema scuro: i vincoli che cambiano il contenuto

- La Nota W3C WCAG2ICT (11/12/2025) cita le email fra i «documenti» a cui applicare i criteri WCAG (**Fonte**). Toccano il contenuto: alternative testuali, niente testo dentro le immagini, link con scopo chiaro, lingua dichiarata, contrasto (**Inferenza**).
- Outlook classico (Microsoft 365 e versioni 2016–2024) blocca per impostazione predefinita il download delle immagini (**Fonte**). Le informazioni essenziali vanno nel testo.
- Apple Mail Privacy Protection impedisce ai mittenti di sapere se un'email è stata aperta (**Fonte**). L'apertura non è una prova di lettura e non può entrare nello storico (§7.8) né nei report (§7.10) (**Inferenza**).
- Apple Mail rende in modo scuro i messaggi semplici; con `color-scheme` il messaggio dichiara se ha uno stile scuro proprio o se va lasciato chiaro (**Fonte**: WebKit, 2019). La pagina CSS di Gmail non cita `prefers-color-scheme`. Come altri programmi invertono i colori è **Da verificare** con prove.
- Il logo BIMI non può essere ricolorato (§2): deve funzionare su sfondo chiaro e scuro (**Inferenza**).
- AMP e registrazioni chiedono una versione HTML o testo. Una versione in testo semplice serve anche ai programmi più vecchi (**Inferenza**).
- Gmail taglia i messaggi molto lunghi; la soglia è citata solo da fonti secondarie: **Da verificare**.
- Accessibility Act (direttiva UE 2019/882): dal 28/6/2025 copre i servizi di commercio elettronico ai consumatori ed esenta le microimprese che forniscono servizi (**Fonte**). Se la piattaforma vi rientri è **Da verificare** con un parere.

## 6. Cosa ne deriva per i messaggi del percorso 1 (inferenza dell'agente)

| Messaggio | A chi | Cosa dice | Attenzioni |
| --- | --- | --- | --- |
| **Invito all'attivazione** | Proprietario, inquilino | Chi invita (ƎE), perché, cosa fare | L'inquilino non ha un contratto con la piattaforma: base giuridica **Da verificare** |
| **Canone registrato** | Proprietario | «Canone di novembre incassato da ƎE il 3/11», con chi ha registrato e quando | Dice il passaggio esatto (§7.4, T4): incassato dall'agenzia, non ancora consegnato |
| **Canone consegnato** | Proprietario | Data e modo della consegna | Valutare se unirlo al precedente o farlo scegliere: due email al mese per ogni casa |
| **Contabile da confermare** (bonifico) | Chi riceve il denaro | «L'inquilino ha caricato una contabile da confermare» | Mai «pagato»: una prova non salda nulla (§7.4) |
| **Documento mancante** | Proprietario | Quale documento, perché serve, come aggiungerlo | Nessuna offerta di pratiche a pagamento, salvo un flusso promozionale separato |
| **Scadenza vicina** | Proprietario | Quale scadenza (per esempio registrazione o rinnovo) e quando | Un promemoria del canone all'inquilino è un sollecito, escluso dalla prima versione (§12, T7) |

Regole comuni:
1. **Solo email di servizio.** Livelli ed extra sono fuori dalla prima versione (T7): il percorso 1 non ha bisogno di email promozionali, né di consensi per il marketing. Proporre per email le pratiche a pagamento (T3) richiederebbe un flusso promozionale separato.
2. **Mittente costante e autenticato.** Un nome e un indirizzo fissi per il servizio, su un dominio con SPF, DKIM e DMARC allineati, poi DMARC in `quarantine` o `reject`. L'indirizzo deve poter ricevere risposte (consiglio Microsoft).
3. **Il fatto nell'oggetto e nella prima riga.** Anteprime, schede e categorie leggono il testo: «Canone di novembre incassato da ƎE», non «Novità sul tuo conto».
4. **Una sola azione**: un link alla pagina precisa nella piattaforma, dove la persona è autenticata.
5. **Dati minimi.** Un'email inoltrata porta con sé ciò che contiene (§7.9): meglio fatto, data e link che importi e nomi, salvo decisione diversa.
6. **Leggibile ovunque**: senza immagini, in tema scuro, in testo semplice, con la data di riferimento.
7. **Preferenze raggiungibili da ogni email**: canali e frequenza scelti dalla persona (PRODUCT.md §5.8). La disiscrizione in un clic non è obbligatoria per le transazionali, ma dare una via d'uscita riduce le segnalazioni.
8. **L'email non è il canale dell'urgenza.** In Gmail e Apple Mail le notifiche di servizio finiscono spesso fuori da «Principale».
9. **Niente AMP, markup o Actionable Messages nel pilota.** Si rivalutano quando volumi, dominio e reputazione lo permettono.

## 7. Cosa dipende da scelte non ancora fatte

- **Nome e marchio** (STUDIO, area N): dominio di invio, nome del mittente, logo. Il conto dei 12 mesi per un CMC parte solo quando il logo compare sul sito di quel dominio. Una registrazione del marchio richiede 6–12 mesi secondo Google.
- **Chi è il mittente e il titolare dei dati** (ticket 03): ƎE o la società della piattaforma. Ne dipendono informativa, recapito per i diritti e firma delle email.
- **Architettura**: fornitore di invio, domini o sottodomini separati per servizio ed eventuali promozioni (Gmail li somma per la soglia massiva), gestione della disiscrizione, link firmati verso la piattaforma, eventuale AMP con richieste autenticate. Lo stesso dominio ospita anche l'[indirizzo per le bollette](../../GLOSSARY.md), che riceve posta: come dividere invio e ricezione è una scelta di architettura.
- **Direzione visiva** (METODO, passo 6): tema scuro, palette, tipografia e forma delle email.

## 8. Domande aperte

- Quali fornitori di posta usano i clienti del pilota: un conteggio anonimo dei domini email fatto dalla segreteria di ƎE direbbe dove provare.
- Regole per i mittenti di Libero, TIM e Aruba: cercarle presso i fornitori o chiedere ai loro postmaster.
- Microsoft: il rifiuto con «550; 5.7.515» è attivo? Outlook.com mostrerà loghi BIMI?
- Apple: accetta il CMC? Branded Mail richiede un marchio registrato? Accetta un record DMARC senza `pct`, come prevede RFC 9989?
- Gmail: serve un volume minimo per registrarsi ad AMP? Le azioni «vai a» sono ancora mostrate? A che dimensione taglia i messaggi?
- Base giuridica dell'invito all'inquilino; quando una proposta dell'agenzia rende promozionale un'email di servizio; ambito dell'Accessibility Act. **Serve un parere professionale.**
- Una prova di invio con email inventate verso caselle di prova (Gmail, Outlook.com, iCloud, Libero) misurerebbe arrivo, scheda e resa in tema scuro. Richiede l'autorizzazione dell'utente: account e invii reali.

## Fonti

Lette il 19 ottobre 2026.

Fornitori di posta
- Google, linee guida per i mittenti: https://support.google.com/a/answer/81126?hl=en
- Google, FAQ su requisiti dei mittenti e Postmaster Tools: https://support.google.com/a/answer/14229414?hl=en
- Google, dashboard di Postmaster Tools: https://support.google.com/mail/answer/14668346?hl=en
- Google, schede della posta in arrivo: https://support.google.com/mail/answer/3094499?hl=en
- Google, configurare BIMI (aggiornata il 13/10/2026): https://knowledge.workspace.google.com/admin/security/set-up-bimi?hl=en
- Google, registrazione per le email dinamiche: https://developers.google.com/workspace/gmail/ampemail/register
- Google, piattaforme supportate per le email dinamiche: https://developers.google.com/workspace/gmail/ampemail/supported-platforms
- Google, requisiti di sicurezza per le email dinamiche: https://developers.google.com/workspace/gmail/ampemail/security-requirements
- Google, limiti noti delle email dinamiche: https://developers.google.com/workspace/gmail/ampemail/tips
- Google, guida all'email dinamica in Gmail: https://support.google.com/mail/answer/9266768?hl=en
- Google, markup delle email: https://developers.google.com/workspace/gmail/markup/overview
- Google, registrazione per il markup: https://developers.google.com/workspace/gmail/markup/registering-with-google
- Google, CSS supportato in Gmail: https://developers.google.com/workspace/gmail/design/css
- Yahoo, requisiti per i mittenti: https://senders.yahooinc.com/best-practices/
- Yahoo, FAQ per i mittenti: https://senders.yahooinc.com/faqs/
- Yahoo, BIMI: https://senders.yahooinc.com/bimi/
- Yahoo, AMP: https://senders.yahooinc.com/amp/
- Microsoft, regole per i mittenti verso Outlook.com: https://substrate.office.com/ip-domain-management-snds/Postmaster/Policies
- Microsoft, nuovi requisiti per i mittenti ad alto volume (2/4/2025, modificato il 30/4/2025): https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730
- Microsoft, fine dell'anteprima AMP in Outlook.com (aggiornamento del 9/9/2020): https://techcommunity.microsoft.com/blog/outlook/developer-preview-of-amp-for-email-in-outlook-com---no-longer-supported/821020
- Microsoft, Actionable Messages: https://learn.microsoft.com/en-us/outlook/actionable-messages/
- Microsoft, registrazione degli Actionable Messages: https://learn.microsoft.com/en-us/outlook/actionable-messages/email-dev-dashboard
- Microsoft, blocco delle immagini in Outlook: https://support.microsoft.com/en-au/office/block-or-unblock-automatic-picture-downloads-in-email-messages-15e08854-6808-49b1-9a0a-50b81f2d617a
- Apple, BIMI in Mail: https://support.apple.com/en-us/108340
- Apple Business, Branded Mail: https://support.apple.com/en-gb/guide/business/abcb761b19d2/web
- Apple Business, verifica del dominio per Branded Mail: https://support.apple.com/guide/business/verify-your-email-domain-for-branded-mail-abcb22cbade5/web
- Apple Business, disponibilità per paese (14/04/2026): https://support.apple.com/en-am/126603
- Apple, categorie in Mail su iPhone: https://support.apple.com/guide/iphone/use-categories-iphfe4a36baf/ios
- Apple, Mail Privacy Protection su iPhone: https://support.apple.com/guide/iphone/use-mail-privacy-protection-iphf084865c7/ios
- WebKit, tema scuro (7/5/2019): https://webkit.org/blog/8840/dark-mode-support-in-webkit/
- Italiaonline, antispam di Libero: https://aiuto.libero.it/articolo/mail/come-funziona-antispam-di-libero/
- TIM, spam e posta indesiderata: https://www.tim.it/assistenza/assistenza-tecnica/mail/sicurezza/spam
- Aruba, protezione della webmail (13/06/2025): https://www.aruba.it/magazine/email/la-webmail-di-aruba-piu-sicura-ecco-come-ti-protegge-da-phishing-e-spoofing.aspx

Standard
- BIMI Group, chi supporta BIMI (maggio 2025): https://bimigroup.org/bimi-infographic/
- BIMI Group, FAQ per i mittenti: https://bimigroup.org/faqs-for-senders-esps/
- Mark Certificate Requirements, versione 1.8: https://bimigroup.org/resources/VMC_Requirements_latest.pdf
- amp.dev, programmi che supportano AMP: https://amp.dev/support/faq/email-support/
- amp.dev, struttura di un'email AMP: https://amp.dev/documentation/guides-and-tutorials/email/learn/email-spec/amp-email-structure
- RFC 7208 (SPF): https://www.rfc-editor.org/rfc/rfc7208
- RFC 6376 (DKIM): https://www.rfc-editor.org/rfc/rfc6376
- RFC 8301 (DKIM, algoritmi): https://www.rfc-editor.org/rfc/rfc8301
- RFC 7489 (DMARC, sostituita): https://www.rfc-editor.org/rfc/rfc7489
- RFC 9989 (DMARC, maggio 2026): https://www.rfc-editor.org/rfc/rfc9989
- RFC 8058 (disiscrizione in un clic): https://www.rfc-editor.org/rfc/rfc8058
- W3C, WCAG2ICT (11/12/2025): https://www.w3.org/TR/wcag2ict-22/

Norme e decisioni
- D.lgs. 196/2003, art. 130 (testo in vigore dal 19/9/2018): https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196~art130
- Direttiva 2002/58/CE, testo originale: https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32002L0058. EUR-Lex non era leggibile dall'ambiente: il testo è stato letto dall'archivio dell'Ufficio delle pubblicazioni (http://publications.europa.eu/resource/celex/32002L0058). La versione consolidata dopo la direttiva 2009/136/CE non è stata letta
- Corte di giustizia, sentenza C-654/23 del 13/11/2025: https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:62023CJ0654 (letta dallo stesso archivio)
- Garante, linee guida su promozione e spam del 4/7/2013: https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/2542348
- Garante, provvedimento del 12/9/2024: https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10076504
- Regolamento (UE) 2016/679 (GDPR), artt. 6 e 21: https://eur-lex.europa.eu/eli/reg/2016/679/oj (letto dallo stesso archivio)
- Direttiva (UE) 2019/882 (Accessibility Act): https://eur-lex.europa.eu/eli/dir/2019/882/oj (letta dallo stesso archivio)
