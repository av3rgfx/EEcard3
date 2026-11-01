# Documenti, foto e ricevute in PDF

Type: grilling
Status: open
Blocked by: 02, 06, 08, 15, 17
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Dove stanno e come si servono i file del percorso 1, e come si producono le ricevute. Con il [modello dei dati e dei permessi](02-modello-dati-permessi.md), la [ricerca sui PDF](06-ricerca-pdf-accessibile.md) e la forma scelta ([Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md)).

1. **Documenti del fascicolo e contabili:** file privati, versioni, tipi e grandezze ammessi, controlli al caricamento, chi li vede e come (§7.3, §7.9, §10.7; docs/rules/BACKEND.md).
2. **Foto della facciata:** copertina e altre foto; togliere cancella davvero, anche dalle copie, con «Annulla» per 8 secondi (DESIGN.md, «Foto e illustrazione della casa (percorso 1)»).
3. **Ricevute in PDF:** strumento per farle dai dati, leggibili con lo screen reader, uguali al foglio stampato al banco; ricevuta annullata e sostituita conservate (§10.3).
4. **Conservazione:** quanto restano i file dopo la fine dei rapporti, per quello che è già deciso (§10.8); il resto aspetta il parere privacy.

Limiti: nessun account o servizio. Scelta in ARCHITECTURE.md.

## Commenti (Comments)

**30/10/2026, da [Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md).** Con il **piano carta** un incasso può avere già una ricevuta di carta, data durante un guasto. Da decidere: la piattaforma la richiama (numero, data) oppure ne fa una sua; mai due ricevute numerate per lo stesso incasso. Le due numerazioni sono in DESIGN.md, «Ricevute stampate (percorso 1)».

**30/10/2026, richiesta dell'utente (durante la ricerca sulle skill).** Quando si carica un file o un documento ci dev'essere uno **scanner automatico**, come Adobe Scan sul telefono. Registrata in [PRODUCT.md](../../../PRODUCT.md) §12, riga del 30/10/2026 «Scansione automatica al caricamento». Da decidere qui: quali caricamenti, cosa fa lo scanner, pilota o dopo, web e app iPhone.

*Proposta dell'utente sul metodo:* smontare l'app con la skill [REA](https://github.com/morluto/rea) («Reverse Engineer Anything», MIT, commit `d48e472` letto il 30/10/2026, solo il README e il DISCLAIMER, senza installare nulla), se serve. *Parere dell'agente:* non serve e non conviene.
- Lo scanner di documenti è già una funzione pronta delle piattaforme: su iPhone VisionKit ha la fotocamera per documenti, su Android c'è lo scanner di documenti di Google (ML Kit). Sul web esistono librerie libere che trovano i bordi del foglio. *Da verificare* nella ricerca prima di decidere: cosa offre il browser del telefono quando si sceglie un file, licenze, qualità e accessibilità.
- Il DISCLAIMER di REA esclude la copia di software proprietario e lascia a chi lo usa il rispetto delle licenze. Le condizioni d'uso di Adobe non sono state lette (*da verificare*), ma di solito i programmi commerciali vietano di smontarli. AGENTS.md chiede soluzioni cercate da capo.
- REA installa un server MCP con Node.js e, per le app native, strumenti di analisi come Ghidra o Hopper: un costo in più senza bisogno.
- *Nuovo ticket:* [Ricerca: scanner di documenti già pronti](15-ricerca-scanner-documenti.md), prima del grilling di questo ticket.

**30/10/2026, da [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md).** Documenti, foto e ricevute in PDF stanno **dentro il database** nel pilota: foto ridotte al caricamento, oltre circa 5 GB passano a un archivio a parte compatibile S3. Le versioni conservate le tiene la piattaforma, non i backup.

**31/10/2026, da [Modello dei dati e dei permessi del percorso 1](02-modello-dati-permessi.md).** Il tipo del file decide il suo contenitore (casa, locazione, incarico, persona) e quindi chi lo vede, sempre attraverso il guardiano, anche per anteprime, PDF ed esportazioni. Documenti e contabili si conservano nello stesso modo, a versioni; le foto a parte, perché si cancellano davvero (resta la riga nel quaderno dei fatti). Resta qui come cancellarle anche dalle copie di sicurezza (7 giorni di Scalingo, fino a 12 mesi della copia mensile). Una ricevuta per incasso, salvo quella che la sostituisce; l'incasso del piano carta porta il numero della ricevuta di carta, che non si registra due volte. A fine locazione il proprietario non vede più le contabili, salvo quelle legate a residui o contestazioni aperti.

**1/11/2026, da [Verifica operativa del percorso 1](16-verifica-operativa.md).** Strumenti decisi: Drizzle su PostgreSQL 17, migrazioni che aggiungono e non tolgono, un solo lavoro notturno con il programmatore di Scalingo (anche per cancellare ciò che ha la conservazione scaduta), prove nel browser con Playwright in ogni controllo. Il PDF delle ricevute si può provare lì. Contenitori temporanei del lavoro notturno e del comando dopo la pubblicazione: M, 512 MiB.

**1/11/2026, da [Ricerca: scanner di documenti già pronti](15-ricerca-scanner-documenti.md).** Ricerca chiusa in [docs/ricerca/scanner-documenti.md](../../../docs/ricerca/scanner-documenti.md); questo ticket non ha più blocchi aperti. Da decidere qui, con le cinque domande del §9: quali caricamenti passano dallo scanner (la proposta esclude le foto della facciata); nel pilota solo il campo file con il ritocco sul server oppure anche «Controlla il foglio» con i bordi trovati da soli; un PDF unico per documento o pagine separate; cosa fare con un HEIC che il server non legge; su quali telefoni e con quali screen reader provare. Lo scanner cambia anche le schermate di caricamento: l'aspetto va poi in DESIGN.md.

**1/11/2026, preferenza dell'utente e [Ricerca: strumenti per uno scanner nostro dentro la pagina](17-ricerca-scanner-nella-pagina.md).** All'utente piace l'idea di uno **scanner nostro dentro la pagina**; prima di scegliere ha chiesto una ricerca allargata, ora chiusa (ricerca, §10). Si aggiunge una sesta domanda (§9): la fotocamera dentro la pagina, con riquadro in tempo reale, consigli a voce e scatto automatico, entra nel pilota oppure in un secondo tempo, dopo una prova su un iPhone vero? Il parere dell'agente è il secondo tempo. Per la prova con fogli inventati serve il permesso dell'utente di eseguire nel contenitore il codice di scanic.
