# Messaggio per la prossima sessione

Da incollare in Claude Code o Codex aperto su questo repository. La skill Wayfinder parte solo su richiesta: il messaggio comincia con `/wayfinder`.

Il **design del percorso 1** ([docs/METODO.md](docs/METODO.md), passo 6) ha una mappa: [Design del percorso 1](.scratch/design-percorso-1/map.md). Approvati il 23/10/2026:
- direzione **«Terracotta»** con il chiaro in vetrina;
- spazio dell'operatore;
- schermate del proprietario e dell'inquilino (le ricevute dell'inquilino a mesi a pillola, confermate il 3/11/2026);
- **accesso, tessera digitale e situazioni comuni**: accesso con un codice, pagina d'accesso con la tessera di rame, benvenuto animato, scheda «Tessera», disdetta da soli.

Il 24/10/2026 è approvata anche la **rifinitura estetica delle schermate interne dei clienti**, la «via di mezzo» ([DESIGN.md](DESIGN.md), «Rifinitura delle schermate interne (percorso 1)»). Il 25/10/2026 sono decisi i **testi dell'interfaccia** ([DESIGN.md](DESIGN.md), «Testi dell'interfaccia (percorso 1)»: «in agenzia», «tu» anche nei titoli, frasi senza genere, «entro» per il canone, «Spese», titolo «Mese: il fatto») e la **tessera fisica del pilota** ([PRODUCT.md](PRODUCT.md) §12: lamina arancione, chip DESFire EV3 spento, solo un codice suo, consegna in agenzia).

Voce al «tu» anche per i clienti. Nome di lavoro **Connetto**, simbolo **C–Legame** ([assets/marchio/](assets/marchio/README.md)); il parere sul marchio è chiesto subito e il suo esito va nel ticket «Parere di un consulente in marchi sul nome Connetto».

Il 26/10/2026 sono decisi i **dati limite e l'accessibilità** ([DESIGN.md](DESIGN.md), «Dati limite e accessibilità (percorso 1)»): più mesi aperti con elenco e totale, targhetta satinata sulla tessera, icone nei mesi a pillola, contorno dei campi a 3:1, testo che segue il telefono e altre cinque correzioni. Pagina di prova: https://claude.ai/artifact/RtwaFRWDmVNnrr5XQnJTh9.

Il 26/10/2026 sono decisi anche le **interazioni e gli stati** ([DESIGN.md](DESIGN.md), «Interazioni e stati (percorso 1)»): conferma al suo posto, «Annulla» per 8 secondi sul «Ricevuto», pulsanti spenti con il perché, movimento ridotto fatto solo di dissolvenze, «Di nuovo in linea» per 4 secondi e otto dettagli su attesa, errori e annunci. Pagina di prova: https://claude.ai/artifact/MvrdhkTegSQ5eUUGC4XzeY.

Il 26/10/2026, dopo la [ricerca sulle licenze](docs/ricerca/licenze-grafiche.md), sono fissati anche **carattere, icone, logo di ƎE e immagini** ([DESIGN.md](DESIGN.md), «Componenti e token»):
- Manrope arriva dal nostro sito, non da Google;
- icone Lucide a tratto 1,6;
- «ƎE» diventa un disegno ovunque nelle schermate, e lo ridisegniamo noi perché l'agenzia non ha più il file;
- le immagini fatte con ChatGPT restano nei prototipi fino al parere, chiesto insieme a quello sul nome.

Il 26/10/2026 è deciso anche il **disegno del logo di ƎE** ([DESIGN.md](DESIGN.md), «Identità»; [assets/marchio/](assets/marchio/README.md)). È la «E» di Manrope ripetuta e specchiata. Nelle frasi si usano due «E» del testo, la prima girata; da solo c'è il disegno fisso `ee.svg` al peso 700, inciso sulla tessera. Lo screen reader dice «Enrico Erca». Approvato dall'utente insieme al collaboratore di ƎE. Pagina di prova: https://claude.ai/artifact/GRs9QZVLmBR7q6yx5VS2xQ.

Il 26/10/2026 sono decise anche le **ricevute stampate** del canone e della consegna ([DESIGN.md](DESIGN.md), «Ricevute stampate (percorso 1)»): una lettera su un foglio A4, uguale nel PDF; ƎE in testa e Connetto piccolo in fondo; un'annullata con fascia ambra e timbro; il PDF fatto dai dati, che si legge con lo screen reader. Il testo legale aspetta il parere; le domande per i pareri legale e fiscale sono nella stessa sezione. Pagina di prova: https://claude.ai/artifact/EoCKVfNQG4mXr1bXNJzn1g.

Il 26/10/2026 sono decise anche le **foto e l'illustrazione della casa** ([DESIGN.md](DESIGN.md), «Foto e illustrazione della casa (percorso 1)»): in cima una copertina scelta e le altre foto nel visore; operatore e proprietari aggiungono e tolgono qualsiasi foto (togliere cancella, con «Annulla»); l'ex inquilino vede solo il disegno; anteprima con inquadratura e promemoria su persone e targhe; nelle email sempre il disegno; il disegno ha tre tipi di casa scelti dall'operatore. Pagina di prova: https://claude.ai/artifact/7VdfMJoY6897vcnoyw17qP.

Il 26/10/2026 sono decisi anche il **pacchetto per il controllo B** e **componenti e token** ([DESIGN.md](DESIGN.md), «Pacchetto per il controllo B (percorso 1)» e «Componenti e token»):
- il pacchetto è una pagina nuova, «Connetto, percorso 1». Contiene tutte le schermate decise, ridisegnate con le regole di oggi;
- ci si muove seguendo il mese di una casa in circa 14 tappe, con un indice per ruolo;
- lo spazio dell'operatore resta com'è approvato;
- la scala è corta: 6 grandezze del testo e 4 angoli; i valori mancanti sono presi dalle prove;
- prima del controllo B serve solo il collaboratore di ƎE; email e SMS vengono dopo il parere sul nome, prima del pilota.

La pagina si costruisce in due parti, circa tre sessioni: durante la costruzione si fa anche una revisione dell'esperienza, tappa per tappa, con proposte «prima e dopo» (scelta dell'utente del 26/10/2026).

Il 27/10/2026, in due sessioni, è stata costruita e chiusa la **prima metà della pagina** «Connetto, percorso 1» ([ticket](.scratch/design-percorso-1/issues/22-pacchetto-operatore-ricevute.md)): il telaio con la storia di Via dei Tigli 14 in 14 tappe, tutte le schermate dell'operatore (tappe 1, 2, 5, 6, 8, 9, 10 e 11, coda vuota e «Oggi») e le ricevute stampate, comprese l'annullata e quella che la sostituisce: https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF (versione 6). Dalla revisione dell'esperienza sono uscite le scelte dell'utente, tutte sull'opzione consigliata, scritte in DESIGN.md, «Spazio dell'operatore (percorso 1)», e gli **spazi fra gli elementi** (4, 8, 12, 16, 24, 32, 48 px, «Componenti e token»).

Il 27/10/2026, nella prima sessione del ticket [Pagina del pacchetto: clienti, accesso e situazioni comuni](.scratch/design-percorso-1/issues/23-pacchetto-clienti-situazioni.md), sono fatte le **schermate dei clienti delle tappe 2–9** (versione 9 della pagina). Dalla revisione dell'esperienza sedici scelte dell'utente, scritte in DESIGN.md nelle sezioni delle schermate; fra queste l'invito senza indirizzo, il denaro del mese detto per intero, «Vedi la contabile» accanto ai due «Ricevuto». Su segnalazione dell'utente la **tessera di rame non ha più la targhetta chiara**: i dati sono incisi sul rame e ripetuti in testo sotto la tessera.

Il 30/10/2026, nella seconda sessione dello stesso ticket, sono fatte le **schermate dei clienti delle tappe 10–14 e fuori dalla storia** (versione 11 della pagina). Dalla revisione dell'esperienza dodici scelte dell'utente, scritte in DESIGN.md: si contesta dalla voce, con i conti; l'esito «corretto» con i conti prima e dopo; il nuovo canone con le scelte spiegate e l'ISTAT in parole semplici; chi vede ogni documento; la disdetta che dice quali case tocca; il deposito a fine locazione. Due regole di prodotto precisate in PRODUCT.md §12: la casa che esce non toglie l'adesione per le altre case; con più proprietari il nuovo canone lo approva chi è nell'incarico.

Il 30/10/2026, nella terza sessione, la **pagina del pacchetto è completa** (versione 12) e il ticket è chiuso. Nuova sezione **«Cosa resta aperto»**, dall'indice: 17 voci divise per cosa fermano (controllo B, pilota, lancio, niente), con chi le aspetta, cosa toccano e dove sono i dettagli; in ogni tappa la riga «Può ancora cambiare qui» ([DESIGN.md](DESIGN.md), «Pacchetto per il controllo B»). Il controllo di accessibilità WCAG 2.2 AA sull'intera pagina non lascia difetti misurabili nel browser; le prove con screen reader veri e su un iPhone vero restano per la prima versione e fermano il pilota.

Il 30/10/2026, in una sessione breve, la pagina ha le **immagini nuove dell'accesso** (versioni 13 e 14). In scuro accesso e benvenuto mostrano la stanza di notte, senza velo, con un alone tenue dietro il modulo dove serve a leggere. Le immagini hanno più misure, per gli schermi ad alta risoluzione. La stanza di notte del computer non si usa nelle schermate interne (scelta dell'utente, DESIGN.md, «Rifinitura»). Al telefono, di giorno, resta la tessera di prima, perché quella nuova ha un angolo tagliato. «Cosa resta aperto» ha 16 voci. Dettagli in STATUS.md.

Il 30/10/2026 è aperta la mappa [Architettura del percorso 1](.scratch/architettura-percorso-1/map.md) (METODO.md, passo 7). Destinazione scelta dall'utente: le scelte tecniche del percorso 1 scritte in ARCHITECTURE.md, **pronte per il controllo B**, senza rendere difficili i percorsi 2 e 3; il controllo B è un passo a parte. Tredici ticket; cinque ricerche sulle fonti ufficiali già chiuse ([piattaforma e dati](docs/ricerca/piattaforma-dati.md), [accesso con codice](docs/ricerca/accesso-codice.md), [email e SMS](docs/ricerca/invio-email-sms.md), [PDF delle ricevute](docs/ricerca/pdf-ricevute.md), [ISTAT](docs/ricerca/istat-variazione.md)). La ricerca sull'accesso ha trovato un **possibile conflitto** con la decisione del 23/10/2026: NIST vieta l'email come modo di entrare e chiede di più per l'operatore. Si decide nel ticket 13. Nessuno stack è scelto.

Il 30/10/2026 è chiuso il primo ticket, [Chi costruisce e tiene in funzione la piattaforma](.scratch/architettura-percorso-1/issues/01-chi-costruisce-e-mantiene.md). Il codice lo scrive l'utente con gli agenti, senza esperti esterni, e quasi non lo legge. Nel pilota la piattaforma la tiene in funzione l'utente, con il **piano carta** se non va. Si usano **servizi gestiti**, a nome di ƎE che li paga, per circa **20 € al mese**. Dettagli in ARCHITECTURE.md («Cosa vincolerà la scelta») e PRODUCT.md §12. Nuovo ticket: [Ricerca: skill per la sicurezza e lo sviluppo con gli agenti](.scratch/architettura-percorso-1/issues/14-ricerca-skill-sicurezza-sviluppo.md). L'utente ha mandato il link ad [Agent-Reach](https://github.com/Panniantong/agent-reach) e non sa se ci sono strumenti migliori per cercare online.

Il 30/10/2026 è chiusa anche la [ricerca sulle skill per la sicurezza e lo sviluppo](.scratch/architettura-percorso-1/issues/14-ricerca-skill-sicurezza-sviluppo.md) ([docs/ricerca/skill-sicurezza-sviluppo.md](docs/ricerca/skill-sicurezza-sviluppo.md)). Per cercare l'utente ha scelto gli strumenti già presenti: Agent-Reach per Reddit e X chiede un account social e installa programmi in tutto il computer. Nessuna skill è installata; le cinque scelte sono nella ricerca, «Cosa resta all'utente», e nella mappa, «Verifica operativa». Nella stessa sessione l'utente ha chiesto uno **scanner automatico** quando si carica un file, come Adobe Scan (PRODUCT.md §12): si parte dagli scanner già pronti, senza smontare app di altri, con il ticket [Ricerca: scanner di documenti già pronti](.scratch/architettura-percorso-1/issues/15-ricerca-scanner-documenti.md).

Il 30/10/2026 è chiuso anche [Entrare con un codice via email: il conflitto con le fonti](.scratch/architettura-percorso-1/issues/13-codice-email-conflitto.md). I clienti tengono il **codice via email o SMS** senza password, con regole più severe e avvisi, e possono aggiungere una **passkey** dal profilo. L'operatore entra con la passkey da un **account di lavoro** a parte; se perde il dispositivo lo riattiva l'utente. Tre domande vanno al parere privacy; il controllo di sicurezza dell'accesso lo fa l'utente con gli agenti su una lista. Dettagli in PRODUCT.md §12, ARCHITECTURE.md e DESIGN.md (voce del profilo, avvisi e accesso dell'operatore da disegnare).

Il 30/10/2026 è chiuso anche [Com'è fatta la piattaforma e dove gira](.scratch/architettura-percorso-1/issues/08-forma-e-dove-gira.md). La piattaforma è un'**applicazione unica su Scalingo** (Parigi), con PostgreSQL che tiene anche documenti e foto; codice e passkey li dà una libreria matura dentro l'applicazione. Copie di Scalingo più una copia cifrata al mese su un disco di ƎE, prova di ripristino prima del pilota e ogni 3 mesi. Dettagli in ARCHITECTURE.md («Decisioni confermate») e nell'[ADR 0001](docs/adr/0001-applicazione-unica-su-scalingo.md).

Il 30/10/2026 è chiuso anche [Linguaggio, framework e componenti](.scratch/architettura-percorso-1/issues/09-linguaggio-framework-componenti.md). La piattaforma si scrive in **TypeScript**, server e schermate, con **React Router** su Scalingo; l'accesso è **Better Auth** (codice via email o SMS e passkey), da aggiornare spesso e da stringere sulle nostre regole. I pezzi comuni delle schermate vengono da **shadcn/ui**, adattati ai nostri token; le animazioni sono nostre; né Animate UI né Watermelon UI. Dettagli in ARCHITECTURE.md («Decisioni confermate») e nell'[ADR 0002](docs/adr/0002-typescript-react-router-better-auth.md); fatti in [docs/ricerca/stack-web.md](docs/ricerca/stack-web.md). La voce «Verifica operativa» della mappa è diventata un ticket.

Il 31/10/2026 è chiuso anche [Accesso: come entrano clienti e operatori](.scratch/architettura-percorso-1/issues/10-accesso.md). Un **account da cliente per persona**; il codice dura 10 minuti, con una pausa dopo 5 errori e il blocco dopo 10; al massimo 3 codici ogni 15 minuti e 10 al giorno, con un **tetto di 20 SMS d'accesso al giorno**; i clienti restano dentro **30 giorni fissi**, ricevono un avviso dopo ogni accesso e cambiano email e numero **solo al banco**. L'account di lavoro entra solo con la passkey, resta dentro 1 ora senza uso e al massimo 12 ore, e riceve la prima passkey da un invito di 1 ora, più una seconda di riserva. Dettagli in ARCHITECTURE.md («Decisioni confermate», «Accesso») e PRODUCT.md §12; fatti su Better Auth in [docs/ricerca/accesso-codice.md](docs/ricerca/accesso-codice.md), §5.

Il 31/10/2026 è chiuso anche [Modello dei dati e dei permessi del percorso 1](.scratch/architettura-percorso-1/issues/02-modello-dati-permessi.md). Ogni cosa sta in uno di **quattro contenitori**: casa, locazione, incarico di gestione, persona. L'agenzia è scritta solo sulle radici. Chi vede cosa lo decide **un solo guardiano** nel codice, dalle fonti di accesso con le date, mai dai ruoli, con un controllo che ferma le pagine che non ci passano e prove per ogni tipo di persona. Gli stati si ricavano dai fatti; versioni e **quaderno dei fatti** non si cancellano; un numero unico per ogni modulo del denaro evita i doppioni. Le misure del pilota non tengono nomi oltre il mese, e il tempo di lavoro si conta per casa, mai per operatore. Dettagli in ARCHITECTURE.md («Dati e permessi»), nell'[ADR 0003](docs/adr/0003-contenitori-e-guardiano.md) e in GLOSSARY.md («Rapporto con la casa», «Locazione»).

Il 1/11/2026 è chiuso anche [Verifica operativa del percorso 1](.scratch/architettura-percorso-1/issues/16-verifica-operativa.md). Il database si usa con **Drizzle** su PostgreSQL 17. A ogni modifica girano **tutti i controlli** in GitHub (tipi, test su un database vero, guardiano, migrazioni, prove nel browser con accessibilità) e Scalingo pubblica solo se passano; il repository resta **pubblico**. Si aggiungono la skill `security-review` di Sentry e la regola «prima la prova che fallisce». Gli aggiornamenti arrivano ogni lunedì e si uniscono da soli se verdi, i grandi a mano. Le migrazioni solo aggiungono; un **lavoro notturno** recupera i giri saltati. Gli avvisi arrivano per email da Scalingo e da un controllo di GitHub ogni 30 minuti; il **piano carta** scatta dopo 10 minuti di errori; l'ambiente di prova è usa e getta. Nessun costo nuovo. Dettagli in ARCHITECTURE.md («Verifica operativa»), docs/rules/QUALITY.md e GLOSSARY.md («Piano carta»); fatti in [docs/ricerca/verifica-operativa.md](docs/ricerca/verifica-operativa.md).

Il 1/11/2026 è chiuso anche [Servizi esterni: email, SMS e ISTAT](.scratch/architettura-percorso-1/issues/11-servizi-esterni.md). Le email partono da **Amazon SES a Milano**, da un **sottodominio di ƎE**; gli SMS da **Skebby**, con il nome di ƎE iscritto nel registro AGCOM, ma solo dopo aver letto il suo contratto sui dati. Gli SMS sono **a parte dai 20 €**: circa 0,40 € al mese per ogni persona senza email, da considerare nel prezzo dell'adesione, con un avviso sopra 15 € al mese. «Oggi» mostra una voce per persona quando i suoi messaggi non sono **recapitati** (parola nuova del glossario); niente aperture né «letto». L'ISTAT si legge di notte e la variazione si calcola con la formula ufficiale; se manca, l'operatore la inserisce a mano. Da chiedere a ƎE: quanti clienti non hanno l'email e chi gestisce il suo dominio. Dettagli in ARCHITECTURE.md («Servizi esterni: email, SMS e ISTAT»), PRODUCT.md §12 e GLOSSARY.md («Recapitato»); prezzi riletti in [docs/ricerca/invio-email-sms.md](docs/ricerca/invio-email-sms.md), §10.

Il 1/11/2026 è chiusa anche la [ricerca sugli scanner di documenti](.scratch/architettura-percorso-1/issues/15-ricerca-scanner-documenti.md) ([docs/ricerca/scanner-documenti.md](docs/ricerca/scanner-documenti.md)). Nessun browser del telefono porta lo scanner di sistema dentro la pagina: su iPhone si può scansionare con File o Anteprima e poi scegliere il PDF; la scansione di Google Drive salva su Google e non va suggerita. Nel browser la libreria libera **scanic** (MIT, circa 42 KB) trova i bordi del foglio e lo raddrizza dentro il telefono; schiarire è poco codice nostro; sul server sharp riduce la foto e toglie luogo e ora. Per l'app iPhone c'è VisionKit; ML Kit vale solo per un'app Android. Il parere dell'agente e cinque domande per l'utente sono nella ricerca, §7 e §9. Molti punti si verificano solo su telefoni veri.

Il 1/11/2026, su richiesta dell'utente, a cui piace uno **scanner nostro dentro la pagina**, è chiusa anche la [ricerca allargata](.scratch/architettura-percorso-1/issues/17-ricerca-scanner-nella-pagina.md) (stesso file, §10). Fra una decina di strumenti liberi resta **scanic**, che dalla 1.7.0 lavora anche sul video della fotocamera. Il suo rilevatore con l'intelligenza artificiale resta spento: è addestrato anche su immagini «solo per ricerca». Schiarimento e consigli a voce («avvicinati», «stai fermo») si scrivono noi. Parere dell'agente: nel pilota la foto e poi «Controlla il foglio»; la fotocamera dentro la pagina dopo una prova su un iPhone vero. Sesta domanda nella ricerca, §9. Reddit non ha dato discussioni. Nella **prova con fogli inventati**, autorizzata dall'utente, scanic trova il foglio in 9 scene su 12, anche su un tavolo chiaro, e quando sbaglia lo dice con una fiducia bassa; va rimpicciolita la foto prima della ricerca. Lo schiarimento scritto da noi toglie l'ombra. Script in [.scratch/architettura-percorso-1/prove/scanner/](.scratch/architettura-percorso-1/prove/scanner/README.md); resta la prova su un iPhone vero.

Il 1/11/2026 l'utente ha scelto **scanic con i due accorgimenti**: foto rimpicciolita prima della ricerca e soglia di fiducia che apre la correzione degli angoli (ARCHITECTURE.md, «Scanner dei documenti»). Il collaboratore di ƎE propone inoltre che, quando l'inquilino carica un documento, la piattaforma cerchi **la cifra dell'affitto** e, se non la trova, avvisi che il file potrebbe essere sbagliato e che il proprietario potrà vederlo, lasciando comunque caricare (PRODUCT.md §12, 1/11/2026). Il testo va riscritto senza genere.

Il 1/11/2026 è chiusa anche la [ricerca sull'importo nel documento](.scratch/architettura-percorso-1/issues/18-ricerca-importo-nel-documento.md) ([docs/ricerca/importo-documento.md](docs/ricerca/importo-documento.md)). Il testo si legge **nel telefono, prima dell'invio**: pdf.js per i PDF della banca, tesseract.js in italiano per foto e scansioni, tutto dal nostro sito. Nella prova con 15 documenti inventati 13 risultati sono giusti: falliscono solo due foto illeggibili anche a occhio. «Condividi» da un'altra app funziona su Android con il sito installato; su iPhone serve l'app.

Il 1/11/2026 l'utente riferisce un'altra proposta del collaboratore di ƎE: chi è poco pratico, spesso le persone più anziane, fatica a caricare un documento ricevuto su WhatsApp o scaricato da un sito. Dal documento toccherebbe «Condividi» e sceglierebbe **Connetto**; il file entra subito e il posto si sceglie dopo. Si sa già che su Android il sito può comparire in «Condividi» solo se è installato sulla schermata Home, e su iPhone solo con l'app. L'utente vuole decidere se tenerla, cambiarla o toglierla **prima** del lavoro sui documenti.

Il 1/11/2026 è chiuso anche [Condividere un file verso Connetto da un'altra app](.scratch/architettura-percorso-1/issues/19-condividere-verso-connetto.md) ([PRODUCT.md](PRODUCT.md) §12): l'idea si tiene ma **non nel pilota**, arriva con l'app iPhone; nel pilota nessun aiuto in più per caricare dal telefono. Previsione dell'utente da verificare nel pilota: i clienti useranno **soprattutto il computer**.

Il 2/11/2026 è chiuso anche [Documenti, foto e ricevute in PDF](.scratch/architettura-percorso-1/issues/12-documenti-foto-ricevute.md), l'ultimo ticket della mappa: **l'architettura del percorso 1 è pronta per il controllo B**. Con la previsione «soprattutto computer» esce dal pilota la fotocamera dentro la pagina, non lo scanner: «Controlla il foglio» parte solo quando arriva una foto, nei caricamenti di documenti e contabili. Il controllo dell'importo vale per le due contabili (inquilino ed ƎE), su PDF e foto, con due avvisi e sempre «Carica comunque». Ogni documento è un PDF, al massimo 20 MB e 20 pagine, e si apre solo attraverso il guardiano; niente antivirus nel pilota (rischio accettato). Le foto della facciata tolte si cancellano nella notte e non entrano nella copia mensile. Le ricevute si fanno con **Typst**, si salvano a ogni fatto e non si rifanno; per il piano carta c'è una copia in PDF della ricevuta di carta. Le durate di conservazione arrivano dal parere privacy, e prima niente si cancella da solo. Dettagli in ARCHITECTURE.md («Documenti, foto e ricevute»), PRODUCT.md §12 (2/11/2026) e DESIGN.md («Caricare documenti e contabili (percorso 1)»).

Il 2/11/2026 è decisa anche la proposta del collaboratore di ƎE sulla **firma dell'inquilino sul nuovo canone ISTAT** ([ticket](.scratch/architettura-percorso-1/issues/20-firma-inquilino-istat.md); PRODUCT.md §12): la firma prova la ricezione e il canone cambia comunque; nel pilota firma digitale propria (anche con CieSign), foglio firmato e caricato o al banco, senza fornitori; firmano tutti, salvo l'**inquilino indicato**; verifica delle firme digitali con DSS nel lavoro notturno o dall'operatore. Ricerca in [docs/ricerca/firma-digitale.md](docs/ricerca/firma-digitale.md). Al collaboratore si chiede quali altri documenti vuole far firmare.

Il 2/11/2026 è pronta la **prova guidata** per il collaboratore di ƎE: https://claude.ai/artifact/5H1bQMDiAxmFqXnHeXKvSc (privata). Il messaggio con le sette domande è nel ticket «Il collaboratore di ƎE guarda lo spazio dell'operatore», sotto «Commenti», pronto da copiare.

Il 3/11/2026 sono registrate le **risposte del collaboratore di ƎE** e il ticket [Il collaboratore di ƎE guarda lo spazio dell'operatore](.scratch/design-percorso-1/issues/05-collaboratore-guarda-operatore.md) è chiuso. Due correzioni decise dall'utente: al banco di ƎE **solo contanti** (i mezzi accettati sono un dato dell'agenzia, il modulo non chiede più come si paga) e **«È arrivato di meno»** accanto al «Ricevuto» del proprietario, con la differenza che resta da pagare, più la riga sul bonifico automatico nel nuovo canone dell'inquilino. Confermati: computer fisso al banco, ordine della coda, «tu» nell'app, ricevute dell'inquilino a mesi a pillola, nuovo canone ISTAT valido anche senza firma. Restano aperti, senza fermare il controllo B: altri documenti da firmare, stampante, tempi dell'incasso di oggi, bonifici sul conto di ƎE.

Lo stesso giorno sono entrate nel percorso 1 sei **richieste del collaboratore** ([ticket](.scratch/architettura-percorso-1/issues/22-richieste-collaboratore-3-novembre.md); PRODUCT.md §12): ricerca con i recenti, «Invia», «Ferma l'accesso», valutazione della casa (anche senza gestione, con il sì del proprietario e l'elenco letto dal sito di ƎE, che l'utente sviluppa in parallelo), tecnici della casa con «Chiama» e l'SMS al tecnico. Collaborazioni con altre agenzie dopo il pilota.

Lo stesso giorno le **schermate delle richieste** sono disegnate e approvate ([ticket](.scratch/design-percorso-1/issues/24-schermate-richieste-collaboratore.md), chiuso; DESIGN.md, «Richieste del collaboratore di ƎE (percorso 1)»): ricerca dell'operatore in cima a ogni pagina, «Invia» con la scritta, motivo di «Ferma l'accesso» da un elenco, valutazione della proprietaria in una sezione sotto il riquadro. Prototipo: https://claude.ai/artifact/NJ7XmFUL4dGLxTZWCS5jpC.

Il 4/11/2026 il collaboratore di ƎE ha mandato **nuove proposte** in un audio: una tessera e dei servizi per chi vende, i professionisti della compravendita (geometra, ingegnere, notaio), l'assistenza a chi partecipa alle aste e la ricerca dei professionisti in zona. Per studiarle c'è una mappa nuova, [Proposte del collaboratore di ƎE del 4/11/2026](.scratch/proposte-collaboratore-4-novembre/map.md), con l'[audio restituito](.scratch/proposte-collaboratore-4-novembre/audio-4-novembre.md). Destinazione confermata dall'utente: per ogni proposta un esito (già coperta, da integrare, da approfondire, da rimandare, da scartare) con le sue condizioni. Le quattro ricerche della mappa sono chiuse; restano otto decisioni, una per sessione.

Il 5/11/2026 è arrivata la **consegna del sito di ƎE**, con decisioni dell'utente prese lavorando sul sito (PRODUCT.md §12, 5/11/2026): **aste escluse** (non si riprendono né ricerca né sviluppo), rete di professionisti per la compravendita approvata con contatti mediati dall'agenzia, sito solo vendita, una sola gestione della rete, sezione pubblica delle valutazioni, contatti dal sito gestiti sul sito. Il contratto proposto per il sito è in [docs/integrazione-sito.md](docs/integrazione-sito.md) (nessun endpoint esiste); le decisioni aperte e il registro delle consegne nel ticket [Integrazione con il sito di ƎE](.scratch/proposte-collaboratore-4-novembre/issues/13-integrazione-sito.md).

Il 6/11/2026 sono letti gli aggiornamenti del sito fino alla landing approvata: nessuna decisione nuova per Connetto, tre punti da portare all'utente (ticket 13 e 08).

Il 6/11/2026 è chiuso il ticket «Cosa, fra le proposte, può toccare il percorso 1» (PRODUCT.md §12, 6/11/2026): entrano nel percorso 1 la tessera per chi vende, il registro della rete con il sì dei professionisti al sito, la trasparenza della rete e la spiegazione «chi fa cosa»; «forse» per altri servizi a chi vende e per il fascicolo per la vendita, con le domande per il collaboratore e l'avvocato in [domande-vendita-collaboratore-avvocato.md](.scratch/proposte-collaboratore-4-novembre/domande-vendita-collaboratore-avvocato.md), da consegnare a cura dell'utente.

**Prossima sessione:** il ticket «Chi vende, chi compra e chi ha una sola casa», con il messaggio qui sotto. Il **controllo B** aspetta ora i ticket 06, 07, 08, 09 e 13.

---

## Proposte del collaboratore di ƎE del 4/11/2026

Messaggio:

/wayfinder .scratch/proposte-collaboratore-4-novembre/map.md — ticket «Chi vende, chi compra e chi ha una sola casa: cosa c'è già e cosa manca» (.scratch/proposte-collaboratore-4-novembre/issues/06-chi-vende-chi-compra.md)

Leggi AGENTS.md, STATUS.md, la mappa (Destinazione, Note, Decisioni finora, Non ancora specificato), l'audio restituito (.scratch/proposte-collaboratore-4-novembre/audio-4-novembre.md), il ticket con i suoi commenti, il ticket chiuso «Cosa, fra le proposte, può toccare il percorso 1» (Risposta e Commenti) e il documento .scratch/proposte-collaboratore-4-novembre/domande-vendita-collaboratore-avvocato.md; poi, solo dove servono, docs/ricerca/compravendita-ruoli.md, docs/integrazione-sito.md e PRODUCT.md §4, §5.1, §5.6, §7 e §12 (18/10, 22/10, 23/10, 3/11, 5/11 e 6/11/2026). Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare e lavora solo su questo, con le skill `grilling` e `domain-modeling`.
- Le decisioni del 5/11 e del 6/11/2026 sono già prese: non chiedermele di nuovo. Chi vende è già nel percorso 1 con casa senza gestione, documenti, valutazione, tessera e rete; altri servizi e fascicolo per la vendita sono «forse»; i servizi della casa per chi abita restano al percorso 3.
- Se in fondo a questo messaggio ci sono le risposte del collaboratore di ƎE o dell'avvocato, registrale nel ticket con chi ha risposto e la data e usale; se non ci sono, non inventarle: lavora su ciò che non ne dipende e lascia aperto il resto.
- Portami una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze delle alternative: il conflitto «venditori dopo il pilota» (22/10/2026) con chi vende già nel percorso 1; chi conta come «chi vende» e da quale rapporto con la casa nasce ciò che vede; i «tecnici dell'agenzia» del fascicolo; l'esito delle proposte 3 e 4. Non simulare le mie risposte.
- Non svolgere il controllo B e non anticipare lo sviluppo; niente codice, schermate o integrazioni; nessun contatto con professionisti, account o servizi reali.
- Registra in PRODUCT.md §12 solo ciò che confermo, con data e motivo; la discussione resta nel ticket. Chiudi il ticket con la risposta e aggiorna «Decisioni finora» della mappa.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md con verifiche, decisioni, problemi aperti e il messaggio /wayfinder per il ticket successivo, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## Quando arriva una nuova consegna dal sito di ƎE

Il sito ha un suo registro delle decisioni che toccano Connetto (`AGGIORNAMENTI-CONNETTO.md` nel repository del sito) e un messaggio di consegna che l'utente incolla qui. Messaggio:

Consegna dal sito di ƎE: [incolla il testo]. Leggi AGENTS.md, STATUS.md, PRODUCT.md §12 (5/11/2026), docs/integrazione-sito.md e il ticket .scratch/proposte-collaboratore-4-novembre/issues/13-integrazione-sito.md, con le consegne già recepite nei «Commenti». Confronta la consegna con quelle già recepite: non rifare il lavoro, non trattare le proposte come approvate, non modificare il repository del sito.

- Registra solo le decisioni dell'utente nuove, in PRODUCT.md §12 (prodotto) o ARCHITECTURE.md (tecnica), e segnala i conflitti con lo stato di Connetto senza cancellare decisioni successive.
- Aggiorna docs/integrazione-sito.md se cambia il contratto, tenendo distinti stato reale, contratto proposto e decisioni aperte; mai URL, chiavi o date inventati.
- Aggiungi una riga nei «Commenti» del ticket 13: cosa hai recepito e cosa hai realizzato.
- Restituiscimi un aggiornamento breve per il sito: decisione e fonte, dati e contratto interessati, compatibilità, disponibilità effettiva, prove svolte, azione richiesta al sito. Niente segreti.

Chiudi la sessione aggiornando STATUS.md, poi fai commit e push sul branch della sessione.

---

## Controllo B: design e architettura del percorso 1

Le risposte del collaboratore di ƎE sono registrate dal 3/11/2026 e le schermate delle sue richieste sono approvate lo stesso giorno. Dal 6/11/2026 il controllo B aspetta i pezzi che il ticket «Cosa, fra le proposte, può toccare il percorso 1» della mappa [Proposte del collaboratore di ƎE del 4/11/2026](.scratch/proposte-collaboratore-4-novembre/map.md) ha portato nel percorso 1, cioè i ticket 06, 07, 08, 09 e 13. L'utente intende aspettare la fine dello studio. Messaggio:

Controllo B del percorso 1 (docs/METODO.md, passo 7): design e architettura sono pronti, le risposte del collaboratore di ƎE sono registrate nel ticket «Il collaboratore di ƎE guarda lo spazio dell'operatore» e le schermate delle sue richieste sono approvate (ticket «Schermate delle richieste del collaboratore»; prototipo https://claude.ai/artifact/NJ7XmFUL4dGLxTZWCS5jpC).

Leggi AGENTS.md, STATUS.md, docs/METODO.md (passi 6–8), la mappa `.scratch/architettura-percorso-1/map.md` (Destinazione, Decisioni finora, Non ancora specificato) e ARCHITECTURE.md; in DESIGN.md «Pacchetto per il controllo B (percorso 1)» e «Richieste del collaboratore di ƎE (percorso 1)». La pagina del pacchetto è https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF; aprila con lo strumento Artifact, azione «read». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Portami in parole semplici cosa confermo: la direzione di design e le scelte tecniche, con i rischi accettati (controllo di un esperto umano, nessun antivirus nel pilota) e ciò che resta aperto prima del pilota (pareri, prove su telefoni veri, «Cosa resta aperto» della pagina).
- Le correzioni del collaboratore sono già decise (ticket, «Risposta»): controlla che ARCHITECTURE.md le regga (mezzi accettati al banco per agenzia; pagamento parziale confermato dal proprietario; le scelte della sezione «Richieste del collaboratore di ƎE», segnate da confermare). Se trovi un conflitto, mostramelo con una proposta, una domanda alla volta, con una raccomandazione.
- Registra l'esito in PRODUCT.md §12 con data e motivo. Non scrivere codice: il piano di costruzione è il passo 8.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

**In pausa: la vista 3D su una planimetria vera.** La prova con piante inventate è chiusa (stile isometrico, arredi d'esempio con l'interruttore). La vista entra nella prima versione solo se regge su una planimetria vera. L'utente chiede una piantina al collaboratore di ƎE (25/10/2026). Deve essere di una casa dei fondatori o del collaboratore, con il consenso scritto; mai quella di un cliente. Quando la planimetria c'è, caricala nella sessione con questo messaggio:

/wayfinder .scratch/controllo-a/map.md — ticket «Prova: la vista 3D su una planimetria vera dei fondatori» (.scratch/controllo-a/issues/17-prova-planimetria-fondatori.md): allego la planimetria; il consenso scritto dei fondatori c'è.

Leggi AGENTS.md, STATUS.md, la mappa (sezione «Dopo la destinazione») e il ticket, poi in PRODUCT.md §12 le righe «Vista 3D indicativa» (23, 24 e 25/10/2026) e in DESIGN.md «Vista 3D indicativa (stile)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) e lavora solo su questo, con la skill `prototype`. Il codice delle prove precedenti si recupera con lo strumento Artifact, azione «read»:
  - la lettura dalla prima versione, https://claude.ai/artifact/Uwav9qpKCBQNkSskEWF5nZ;
  - la vista dalla terza, https://claude.ai/artifact/C2aRNbV3h59zmdQKs8z93q.
- La planimetria si lavora solo nella sessione: niente repository, commit o pagine pubblicate con la planimetria o con dati che la riconoscono; niente servizi esterni. Nel ticket solo metodo, numeri ed esito.
- Mostrami il risultato (ricalco, automatico, controlli e vista isometrica) e portami la decisione in parole semplici: la vista entra o no nella prima versione.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## Solo se l'utente lo chiede: rifinitura dello spazio dell'operatore

Le regole della rifinitura valgono per proprietari e inquilini; lo spazio dell'operatore resta com'era. Per rivederlo, prima si apre un ticket nella mappa (è nel «Non ancora specificato»). Messaggio:

/wayfinder .scratch/design-percorso-1/map.md — apri e lavora un ticket «Rifinitura dello spazio dell'operatore» dal «Non ancora specificato».

Leggi AGENTS.md, STATUS.md, la mappa e, in DESIGN.md, «Indicazioni dell'utente», «Spazio dell'operatore (percorso 1)» e «Rifinitura delle schermate interne (percorso 1)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Crea il ticket (tipo `prototype`), rivendicalo e lavora solo su quello, con le skill `prototype` (ramo UI) e `grilling`.
- Leggi con lo strumento Artifact il prototipo dell'operatore (https://claude.ai/artifact/8uYkEqTXrp27KWmc698JK9) e quello della rifinitura (https://claude.ai/artifact/9CQ4BtLZxYXJRBKiEfpZGj). Prima e dopo dietro un selettore, partendo dalla coda e da «Al banco».
- Le scelte me le fai una alla volta, in parole semplici, con una raccomandazione motivata. Un cambio delle regole già approvate va in DESIGN.md come cambiato, non cancellato.
- Prototipo usa e getta, fuori dal repository, solo dati inventati. Controllalo nel browser a 360, 390, 768, 900, 1024, 1180 e 1366 px, ricaricando la pagina per ogni schermata.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## Quando arriva il parere sul nome Connetto

Incollare questo messaggio e aggiungere l'esito subito sotto, in parole proprie (senza costi né dati del professionista):

/wayfinder .scratch/design-percorso-1/map.md — ticket «Parere di un consulente in marchi sul nome Connetto» (.scratch/design-percorso-1/issues/08-parere-nome-connetto.md): l'esito del parere è in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa, il ticket e docs/ricerca/nome-connetto.md. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`), registra l'esito in sintesi e chiudilo.
- Se il parere chiede di cambiare il nome o di usarne una forma diversa, le scelte me le fai una alla volta, in parole semplici, con una raccomandazione motivata; per i nomi candidati fai prima la stessa ricerca preliminare (skill `research`). Nessuna registrazione di domini o marchi.
- Aggiorna PRODUCT.md §1 e §12, DESIGN.md e la mappa.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Esito del parere:

---

## In pausa: Prova su iPhone

Messa da parte dall'utente il 24/10/2026 («ci penseremo poi»). Il ticket è rivendicato e la pagina di prova è pubblicata: https://claude.ai/artifact/5ousKXbFpFsGqd5mrtcH7t. L'elenco dei controlli è nel ticket, sotto «Commenti». Per scelta dell'utente (24/10/2026) bastano i controlli in Safari: schede in basso, colore in alto, schermata Home e gesto dal bordo si verificano sulla prima versione della piattaforma. Fatti i controlli rimasti, incollare:

/wayfinder .scratch/design-percorso-1/map.md — ticket «Prova su iPhone: la piattaforma aggiunta alla schermata Home» (.scratch/design-percorso-1/issues/06-prova-iphone-schermata-home.md): cosa ho visto, la versione di iOS e il testo della diagnosi sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa e il ticket, poi docs/ricerca/hig-web.md (§15 e §17) e, in DESIGN.md, «Accesso, tessera e situazioni comuni (percorso 1)» («Dalla schermata Home») e «Rifinitura delle schermate interne (percorso 1)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice, design o decisioni di tentativi precedenti.

- Registra l'esito nel ticket, punto per punto, distinguendo ciò che dipende dalla cornice di claude.ai da ciò che dipende dalla pagina (la diagnosi dice se la pagina era in una cornice). Aggiorna §17 della ricerca con ciò che è verificato.
- Le correzioni che ne escono me le porti una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione. Un cambio delle regole già approvate va in DESIGN.md come cambiato, non cancellato. Se per i punti legati alla cornice serve un indirizzo tutto della pagina, chiedimelo: è un servizio esterno.
- Lavora con la skill `mobile-native`; per le scelte, `grilling`. Se rifai la pagina, controllala a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, ricaricando per ogni schermata. Nessun SMS vero, nessun account o servizio reale senza la mia autorizzazione.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Cosa ho visto, versione di iOS e diagnosi:

---

## Quando arrivano i chiarimenti di ƎE

I chiarimenti sono nel ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md), sotto «Commenti (Comments)», dal titolo «Chiarimenti per ƎE» fino alla domanda 6: vanno mandati al collaboratore. Quando tornano, incollare questo messaggio e aggiungere le risposte subito sotto:

/wayfinder .scratch/controllo-a/map.md — chiarimenti del ticket chiuso «Fatti dall'agenzia ƎE» (.scratch/controllo-a/issues/06-fatti-agenzia.md): le risposte di ƎE sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket; i chiarimenti sono in fondo, sotto «Commenti (Comments)». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Abbina ogni risposta al numero del chiarimento; se non si capisce a quale appartiene, chiedimelo invece di supporre.
- Registrale sotto «Risposta (Answer)», in una parte «Chiarimenti», senza riaprire il ticket: solo forma aggregata, un numero di 1 o 2 che fa riconoscere qualcuno diventa «meno di 3», niente allegati nel repository.
- Ripeti i controlli dei punti che toccano, compresi quelli «Da ricontrollare» nella risposta del ticket chiuso «Specifica del percorso 1» (.scratch/controllo-a/issues/09-specifica-percorso-1.md), e aggiorna le note nei ticket aperti che li aspettano (Prezzo e condizioni dell'adesione). Un contrasto con PRODUCT.md §10 o §12 me lo dici in parole semplici. Le decisioni non si prendono qui.
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Risposte di ƎE ai chiarimenti:

---

## Quando si vuole: Prezzo e condizioni dell'adesione

Non blocca il design; va chiuso prima del pilota. Messaggio:

/wayfinder .scratch/controllo-a/map.md — ticket «Prezzo e condizioni dell'adesione» (.scratch/controllo-a/issues/10-prezzo-condizioni-adesione.md)

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket, compresi i «Commenti (Comments)». Poi, solo per le parti che servono, PRODUCT.md §6 e §12 e docs/ricerca/mercato.md. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Lavora solo su questo ticket, con le skill `grilling` e `domain-modeling`.
- Le decisioni (prezzo e periodicità, cosa include, rapporto con il compenso di gestione e trattenuta dal canone) chiedimele una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione.
- Registra le decisioni in PRODUCT.md §12 e aggiorna §6. Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## In alternativa: Prova sulle bollette

Resta libera, richiede fondatori e personale di ƎE volontari e non blocca il design del percorso 1. Messaggio:

/wayfinder .scratch/controllo-a/map.md — ticket «Prova sulle bollette» (.scratch/controllo-a/issues/08-prova-bollette.md)

Leggi AGENTS.md, STATUS.md, la mappa `.scratch/controllo-a/map.md` e il ticket, poi la decisione «Prova sulle bollette con bollette reali» in PRODUCT.md §12 e, solo per le parti che servono, docs/ricerca/bollette.md §4 e docs/ricerca/privacy-dati.md sezione 10 (punto sulla prova). Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Rivendica il ticket (`Status: claimed`) prima di lavorare. Lavora solo su questo ticket.
- Come prima cosa chiedimi di confermare cosa si oscura nelle bollette dei volontari (proposta del ticket: anche codice cliente, POD o PDR, IBAN e QR; lettura del QR su avvisi inventati; consenso scritto dei volontari). Una domanda alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione.
- Poi prepara l'elenco da compilare per il conteggio (parte 1) e il testo del consenso per i volontari, pronti da copiare. Nessun dato personale nel repository: solo conteggi e metodo, in una sezione nuova di docs/ricerca/bollette.md.
- La misura della lettura (parte 3) si fa solo quando i volontari hanno caricato le bollette oscurate nella sessione; se non ci sono, il ticket resta `claimed` e lo annoti sotto «Commenti (Comments)».
- Non scrivere codice applicativo, non scegliere lo stack, non disegnare schermate. La prova della parte 3, se si fa, è usa e getta (skill `prototype`) e non resta nel repository.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md con il messaggio per la sessione successiva, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

---

## Quando arrivano i preventivi delle tessere

La richiesta è pronta nel ticket [Ricerca: tessere fisiche](.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md), sotto «Richiesta di preventivo»; la manda l'utente o ƎE. Quando arrivano le risposte, incollare questo messaggio con le risposte in sintesi (senza dati del fornitore che non servono):

/wayfinder .scratch/controllo-a/map.md — preventivi delle tessere fisiche, ticket chiuso «Ricerca: tessere fisiche, fornitori, personalizzazione, ordini e spedizioni» (.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md): le risposte dei fornitori sono in fondo a questo messaggio.

Leggi AGENTS.md, STATUS.md, il ticket, docs/ricerca/tessere.md e docs/ricerca/tessera-contactless.md (sezione 5) e in PRODUCT.md §12 la riga «Tessera fisica nel pilota». Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti.

- Confronta i preventivi con i requisiti della richiesta (chip DESFire EV3 originale, lamina arancione e antenna, codice da file, chiavi, campione) e segnala cosa manca.
- Portami una alla volta, con una raccomandazione: fornitore, quantità (era consigliato 250), lamina o plastica a colore fisso se la lamina costa troppo, campione da ordinare. Nessun ordine o pagamento senza la mia autorizzazione esplicita.
- Registra le decisioni in PRODUCT.md §12 e nel ticket.

Chiudi la sessione aggiornando STATUS.md e START_HERE.md, poi fai commit e push sul branch della sessione e crea o aggiorna la PR.

Risposte dei fornitori:

---

**Riprendere in generale:** «Leggi AGENTS.md e STATUS.md e riprendi dal prossimo passo indicato».
