# Cosa va studiato

Domande da sciogliere prima di decidere prima versione, design e architettura. Data: 18 ottobre 2026. L'idea è descritta in [PRODUCT.md](../PRODUCT.md); il modo di procedere in [METODO.md](METODO.md).

**Domanda centrale:** per chi, e per quale bisogno concreto, questo servizio vale abbastanza da essere pagato e rinnovato, e quale parte dell'idea serve per mantenere quella promessa dal primo giorno?

Ogni domanda indica che tipo di lavoro serve:

| Tipo | Chi la risolve | Come |
| --- | --- | --- |
| **Decisione** | L'utente | Discussione a domande (skill `grilling`), con una raccomandazione motivata dell'agente |
| **Ricerca** | L'agente | Fonti primarie e ufficiali (skill `research`), un file per tema in `docs/ricerca/` |
| **Persone** | L'utente o l'agenzia, con materiali preparati dall'agente | Colloqui, osservazione, prove d'uso (skill `ux-research`); mai partecipanti inventati |
| **Prova** | L'agente, a volte con l'utente | Prova tecnica o prototipo usa e getta (skill `prototype`) che risponde a una sola domanda |

---

## 1. Tensioni da sciogliere per prime

Sono i punti in cui l'idea, così come è descritta, si contraddice o poggia su presupposti non verificati. Vanno discussi con l'utente all'inizio, perché cambiano tutto il resto. Per ognuna si indica una possibile direzione, che è una **proposta da discutere, non una decisione**.

### T1. Su cosa si regge il valore?
L'idea mette insieme fascicolo della casa, affitto, bollette, assistenza, consulenza, tessera e molto altro. Le bollette sono il compito più frequente, ma anche quello che le persone risolvono già gratis altrove: domiciliazione, home banking, app dei fornitori, app pubbliche, punti di pagamento. Ed è l'area in cui la piattaforma controlla meno, perché dipende da intermediari esterni. Il fascicolo, l'affitto e la continuità con l'agenzia sono invece cose che solo l'agenzia può offrire bene.
- **Decisione:** le bollette sono il centro della promessa, la porta d'ingresso o un servizio accessorio? Il pagamento semplice delle bollette è confermato dall'utente: la tensione va discussa, non decisa d'ufficio.
- **Persone:** cosa fanno oggi i clienti per bollette, documenti, affitto e guasti, e cosa pagherebbero per smettere di farlo?
- Direzione possibile: costruire la promessa su casa, affitto e continuità con l'agenzia, con le bollette come archivio, promemoria e accesso semplice ai canali che esistono già.
- **Sciolta per il pilota il 18/10/2026** ([PRODUCT.md](../PRODUCT.md) §12): la promessa al proprietario si regge su affitto, documenti, scadenze e continuità; le bollette entrano dal lato dell'inquilino, in uno spazio privato. Resta aperta la domanda «Persone».

### T2. Chi è il primo cliente, e chi paga?
Proprietario che affitta, inquilino, proprietario che abita la casa, altre agenzie: hanno bisogni e disponibilità a pagare diversi. Alcuni clienti dell'agenzia pagano già 600 € l'anno per un servizio di gestione.
- **Decisione:** con quale tipo di persona si parte, e chi paga per chi (per esempio il proprietario paga e l'inquilino entra gratis)?
- **Persone:** colloqui con clienti reali dell'agenzia per ciascun gruppo candidato.
- Direzione possibile: partire dai proprietari che affittano tramite l'agenzia, i più vicini a un servizio che già comprano.
- **Sciolta per il pilota il 18/10/2026** ([PRODUCT.md](../PRODUCT.md) §12): proprietari con una casa gestita da ƎE; paga il proprietario con un'offerta unica, l'inquilino entra gratis. Restano aperti il prezzo e la domanda «Persone».

### T3. Quanto lavoro umano costa un cliente, e chi lo paga?
Verifiche, presa in carico delle richieste, consulenza annuale e assistenza fuori orario sono lavoro di persone. Con quote da 15–50 € il conto non torna senza misure.
- **Ricerca e persone:** quanti minuti al mese richiede un cliente all'agenzia, oggi e con la piattaforma? Quanto costa una richiesta gestita?
- **Decisione:** cosa è incluso nella quota e cosa si paga a parte.
- **Sciolta per il pilota il 18/10/2026, come ipotesi da misurare** ([PRODUCT.md](../PRODUCT.md) §12): eroga il personale di ƎE in orario d'ufficio, circa 1–1,5 ore al giorno da fissare; la richiesta va al tecnico e passa all'agenzia solo se non viene accettata. Restano aperti cosa si paga a parte (proposta: pratiche documentali e consulenza), il tempo di risposta e la misura del tempo reale.

### T4. Da dove arrivano i dati?
Bollette e molti documenti arrivano al cliente (email, carta, app del fornitore), non all'agenzia. Se un operatore deve caricare e controllare tutto, il servizio non regge.
- **Decisione e prova:** chi carica cosa? Il cliente inoltra un'email, fotografa o carica il file, l'estrazione dei dati è automatica e la conferma la dà la persona? L'agenzia lavora solo sulle eccezioni?
- **Decisi il 19/10/2026** ([PRODUCT.md](../PRODUCT.md) §12): il canone delle case gestite lo registra l'agenzia; il fascicolo nasce all'attivazione dai documenti dell'agenzia, con l'elenco dei mancanti. Per le bollette dell'inquilino l'utente ha chiesto una ricerca sui modi per automatizzarne l'arrivo, anche dall'email.
- **Ricerca:** quanto sono affidabili oggi l'estrazione automatica da bollette e documenti italiani e il riconoscimento dei codici di pagamento, e con che costi?

### T5. Quanto spesso si usa?
Un servizio per la casa si apre poche volte al mese, quasi sempre per una scadenza o un problema.
- **Persone:** quando e perché una persona aprirebbe il servizio?
- **Decisione:** qual è l'interfaccia principale? App, notifiche, email, messaggistica, banco in agenzia?
- Direzione possibile: messaggi utili e puntuali come canale principale, con l'app per il dettaglio e le azioni.
- **Sciolta per il pilota il 19/10/2026** ([PRODUCT.md](../PRODUCT.md) §12): email e notifiche puntuali, piattaforma web per il dettaglio, banco per attivazione e aiuto. Resta aperta la domanda «Persone».

### T6. A cosa serve la tessera?
Se non autentica e non paga, la tessera è un segno di appartenenza e uno strumento di vendita al banco. Wallet, contactless, lettori, terminale e totem hanno costi e requisiti propri.
- **Decisione:** cosa deve permettere la tessera nella prima versione? Cosa lo giustifica?
- **Ricerca:** requisiti e costi di pass nei wallet, lettura NFC, produzione e spedizione delle tessere fisiche.
- **Sciolta per la prima versione il 18/10/2026** ([PRODUCT.md](../PRODUCT.md) §12): solo segno dell'adesione, senza wallet, contactless, terminale e totem. Restano da verificare nei colloqui il valore della consegna al banco e, per dopo, i costi della tessera fisica e del pass nel wallet.

### T7. Quanto è ampia la prima versione?
Il catalogo dell'idea (PRODUCT.md §5) è molto più grande di quanto un pilota possa sostenere con qualità.
- **Decisione:** quale promessa minima si può mantenere davvero, con il servizio e le persone disponibili? Cosa resta fuori, dichiarandolo?

### T8. Che ruolo ha la piattaforma per l'agenzia?
Il mestiere principale dell'agenzia è la mediazione: compravendite e locazioni. Un fascicolo completo e un rapporto continuo possono portare nuovi incarichi, rinnovi, pratiche a pagamento e vendite più rapide.
- **Decisione:** la piattaforma è un prodotto che deve ripagarsi da solo con le quote, o uno strumento per fidelizzare i clienti e vendere servizi dell'agenzia? O entrambe le cose, con quale peso?
- **Persone:** agenti e clienti confermano che una casa ben documentata si vende o si affitta meglio?
- **Sciolta per il pilota il 18/10/2026** ([PRODUCT.md](../PRODUCT.md) §12): strumento del servizio dell'agenzia, con una quota che copre almeno il lavoro umano incluso. Resta aperta la domanda «Persone».

---

## 2. Aree di studio

### A. Persone e bisogni (**Persone**)
- Come gestiscono oggi documenti, affitto, bollette, scadenze e guasti: proprietari che affittano, inquilini, proprietari che abitano la casa, operatori dell'agenzia, tecnici.
- Gruppi da sentire per primi (decisioni del 18/10/2026): proprietari con una casa gestita da ƎE e i loro inquilini; alcuni venditori, per il fascicolo per la vendita.
- Cosa fa perdere tempo o soldi, cosa preoccupa, quali errori capitano (scadenze dimenticate, documenti persi, solleciti ingiusti).
- Familiarità digitale, dispositivi usati, ruolo del contatto di persona.
- Quanto spesso servirebbe il servizio e in quali momenti.

### B. Valore, offerta e prezzo (**Decisione**, **Persone**)
- Unità di vendita: casa, contratto o persona? Cosa succede con più case, comproprietari, più inquilini?
- Livelli ed extra, cosa è incluso, rinnovo, disdetta, cambio di livello, periodo già pagato.
- Come misurare la disponibilità a pagare prima di costruire: pre-adesione, lettera d'intenti, pagamento anticipato per un pilota.
- Offerta per altre agenzie: cosa si vende (software, metodo, design, assistenza), a chi, quando.

### C. Organizzazione del servizio (**Decisione**, **Persone**)
- Chi prende in carico le richieste, con quali orari, quali tempi di risposta realistici.
- Quali professionisti hanno un accordo con l'agenzia, in quali zone, per quali lavori, con quale responsabilità e pagamento.
- Urgenze e fuori orario: cosa si promette e cosa no.
- Consulenza annuale: chi la fa, per chi, quanto dura, cosa produce.

### D. Affitto e scadenze della casa (**Ricerca**)
- Calendario degli adempimenti di una locazione in Italia: registrazione, imposte, proroghe, regimi fiscali, aggiornamento del canone, disdetta e preavvisi. Chi è responsabile di cosa.
- Scadenze della casa: certificazioni energetiche, manutenzione e controlli degli impianti, imposte locali, assicurazioni.
- Quali di queste l'agenzia conosce già al momento del contratto e potrebbe ricordare senza integrazioni esterne.
- Come sapere davvero se il canone è stato incassato: prova caricata dall'inquilino, conferma del proprietario, lettura del conto con il consenso del titolare (servizi di informazione sui conti previsti dalla PSD2)?

### E. Documenti e fascicolo (**Ricerca**, **Prova**)
- Quali documenti contano per ciascun tipo di persona e momento (affitto, vendita, lavori, successione).
- Da dove vengono (agenzia, cliente, enti pubblici, professionisti) e chi li aggiorna.
- Acquisizione: scansione, foto, email inoltrata, estrazione automatica dei dati, conferma.
- Quanto conservare ogni categoria e cosa succede quando un rapporto finisce.
- Ricerca nel contenuto e nei documenti storici.

### F. Bollette e pagamenti (**Ricerca**, **Prova**)
- Canali reali in Italia: avvisi pagoPA, CBILL, bollettino postale, bonifico, addebito diretto (SDD), punti di pagamento fisici.
- Per ciascun canale: cosa ha in mano chi paga, cosa lo prova, quando il debito è davvero chiuso, cosa può andare storto (rimborsi dell'addebito diretto, bonifici non abbinati).
- Chi può avviare un pagamento per conto di qualcuno (prestatori di servizi di pagamento, servizi di disposizione di ordini) e con quali costi, coperture e responsabilità; verifica del beneficiario.
- Nella prima versione la piattaforma non detiene e non trasferisce denaro dei clienti (deciso il 18/10/2026, [PRODUCT.md](../PRODUCT.md) §12). Restano da studiare: gli obblighi di un eventuale fornitore autorizzato in futuro, e quelli dell'agenzia, che oggi incassa al banco canoni per conto dei proprietari (riferito il 18/10/2026): mandato all'incasso, contanti, ricevute, antiriciclaggio; e se incassa altre somme (rate condominiali, servizi propri).
- Pagamento in contanti mostrando il codice sul telefono: le casse dei punti convenzionati lo leggono? Quali codici hanno una specifica pubblica e quali limiti valgono (importi, tipi di bollettino)?
- Quanto conservare le ricevute di ciascuna categoria di bolletta.

### G. Assistenza e tecnici (**Decisione**, **Ricerca**)
- Percorso di una richiesta dall'invio alla chiusura, con preventivo, approvazione, appuntamento ed esito.
- Chi paga l'intervento e come: il cliente al tecnico, l'agenzia, un pacchetto?
- Cosa deve vedere il tecnico, per quanto tempo, e come contatta il cliente.
- Responsabilità dell'agenzia quando consiglia o incarica un professionista.

### H. Tessera, banco e firma (**Ricerca**, **Prova**)
- Pass nei wallet di Apple e Google: cosa serve per crearli e aggiornarli; cosa serve in più per leggerli via NFC (programmi, certificazioni, lettori compatibili).
- Alternative semplici (codice QR, codice da digitare) e loro limiti.
- Tessera fisica: produzione, personalizzazione per agenzia, spedizione, blocco e sostituzione.
- Terminale da banco a due schermi: cosa vede l'operatore e cosa il cliente, cosa serve davvero.
- Firma: tipi di firma elettronica (semplice, avanzata, qualificata, grafometrica), valore legale e documenti per cui serve.

### I. Norme e responsabilità (**Ricerca**, poi **parere professionale**)
Da leggere sulle fonti ufficiali aggiornate; prima di un uso reale serve la verifica di un professionista.
- Protezione dei dati (GDPR): chi è titolare e chi responsabile del trattamento fra agenzia e piattaforma, valutazione d'impatto, informative, dati di terzi (per esempio l'inquilino nei documenti del proprietario), tempi di conservazione.
- Contratti con i consumatori: abbonamento, rinnovo, recesso, informazioni precontrattuali.
- Servizi di pagamento: quali attività richiedono un'autorizzazione (PSD2 e norme italiane).
- Solleciti e chiamate per conto del proprietario: limiti delle comunicazioni automatiche, consenso, e se il sollecito di pagamento per conto terzi rientri nel recupero crediti, che richiede una licenza (art. 115 TULPS).
- Eventuali limiti per un'agenzia immobiliare nello svolgere attività di gestione, incasso o consulenza.
- Uso dell'AI: obblighi di trasparenza e dati usati.
- Fatturazione e IVA delle quote e dei servizi.

### J. Mercato e alternative (**Ricerca**)
- Chi risolve già una parte del problema, cosa offre, a che prezzo, con quali limiti: app per gestire gli affitti, servizi di gestione immobiliare, gestionali per agenzie, app per pagare le bollette, servizi di assistenza casa dei fornitori di energia.
- Cosa rende questa idea diversa e difficile da copiare, e cosa invece è già una commodity.
- Fonti: pagine e condizioni ufficiali dei servizi, con la data di lettura. Le descrizioni di marketing non sono prove di funzionamento.

### K. Canali e accessibilità (**Persone**, **Ricerca**)
- Web, app installabile dal browser, app nativa, notifiche, email, messaggistica (costi e regole delle piattaforme di messaggistica aziendale), SMS, banco.
- Email che non sembrano spam o pubblicità (requisito del 19/10/2026): autenticazione del mittente, riconoscibilità del marchio nella casella, email dinamiche e quali programmi di posta le mostrano, separazione fra email di servizio e promozionali.
- Persone con poca familiarità digitale: cosa le aiuta davvero.
- Ordine confermato: prima la piattaforma web, poi l'app iPhone.

### L. AI (**Prova**, **Decisione**)
- Dove è utile e affidabile: estrazione di dati dai documenti, ricerca nel fascicolo, bozze, riassunti, segreteria fuori orario.
- Dove è rischiosa o vietata: decisioni sul denaro, contatti automatici con terzi, risposte su dati che la persona non può vedere.
- Costi, privacy e controllo umano.

### M. Più agenzie (**Decisione**)
- Quando ha senso offrire il servizio a un'altra agenzia, e cosa serve prima: un metodo dimostrato, materiali, assistenza, personalizzazione.
- Cosa resta separato fra agenzie e cosa è comune.

### N. Identità e nome (**Decisione**, **Ricerca**)
- Nome del prodotto, simbolo, tono di voce, rapporto con il marchio dell'agenzia e con le agenzie partner.
- Verifica di disponibilità del nome (marchi registrati, domini).

### O. Domande tecniche, da affrontare dopo le decisioni di prodotto
Non vanno risolte ora; servono a sapere cosa dovrà scegliere l'architettura.
- Dove stanno i dati (Unione Europea), backup e ripristino, costi e chi mantiene il sistema.
- Accesso sicuro e semplice (per esempio passkey, accesso assistito al banco), recupero dell'account.
- Permessi legati al rapporto con la casa e alla sua durata, separazione fra agenzie.
- File privati, versioni, eventi non modificabili.
- Integrazioni necessarie (pagamenti, email, messaggi, firma, wallet, AI) e loro ambienti di prova.
- Web e app iPhone sullo stesso servizio.

---

## 3. Fonti ufficiali da cui partire

Leggere sempre la versione aggiornata e annotare la data.

- pagoPA, documentazione per cittadini, enti e sviluppatori: https://docs.pagopa.it, https://developer.pagopa.it
- Banca d'Italia, servizi di pagamento e intermediari autorizzati: https://www.bancaditalia.it
- European Payments Council, regole SEPA (bonifico, addebito diretto, verifica del beneficiario): https://www.europeanpaymentscouncil.eu
- Agenzia delle Entrate, locazioni e registrazione dei contratti: https://www.agenziaentrate.gov.it
- ARERA, bollette di luce, gas e acqua: https://www.arera.it
- Garante per la protezione dei dati personali: https://www.garanteprivacy.it
- Normattiva (leggi italiane) ed EUR-Lex (norme europee: GDPR, PSD2, eIDAS, AI Act): https://www.normattiva.it, https://eur-lex.europa.eu
- ISTAT (indici per l'aggiornamento dei canoni, dati sulle famiglie): https://www.istat.it
- Apple Wallet e Google Wallet, documentazione per sviluppatori: https://developer.apple.com/wallet/, https://developers.google.com/wallet
- Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/
