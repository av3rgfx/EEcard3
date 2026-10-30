# Documenti, foto e ricevute in PDF

Type: grilling
Status: open
Blocked by: 02, 06, 08, 15
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
