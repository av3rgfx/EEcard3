# Stato del progetto

## Punto di ripresa (20 ottobre 2026)
**Fase: studio.** La mappa delle decisioni verso la destinazione dello studio, **superare il controllo A con le evidenze**, è in [.scratch/controllo-a/map.md](.scratch/controllo-a/map.md) ([docs/METODO.md](docs/METODO.md), passo 2). Le cinque ricerche sono chiuse e lo è anche il ticket «Chi fornisce la piattaforma e chi vende l'adesione nel pilota». **Si attende la risposta dell'agenzia** all'elenco di domande del ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md), che resta `claimed`. Non c'è codice applicativo; design, architettura e stack non sono decisi.

## Fatto (20 ottobre 2026)
- Ticket [Chi fornisce la piattaforma e chi vende l'adesione nel pilota](.scratch/controllo-a/issues/11-chi-fornisce-la-piattaforma.md) chiuso con le skill `grilling` e `domain-modeling`, una domanda alla volta. Decisioni dell'utente in [PRODUCT.md](PRODUCT.md) §12 (20/10/2026): nel pilota la piattaforma è di ƎE, che risponde di tutti i dati con un'informativa sola; società distinta solo con la seconda agenzia; ƎE vende l'adesione del proprietario con un foglio separato dall'incarico di gestione; l'inquilino ha un'adesione gratuita con tessera, che comprende lo spazio delle bollette, servizio di ƎE che l'agenzia non guarda.
- «Adesione» passa da PRODUCT.md §8 al [GLOSSARY.md](GLOSSARY.md): a pagamento per il proprietario, gratuita per l'inquilino.
- Aggiornati i ticket della specifica del percorso 1 (documenti all'attivazione, ruoli, due casi limite), della pre-adesione (propone e incassa ƎE) e dei materiali per i colloqui (titolare ƎE; fiducia degli inquilini nello spazio delle bollette).
- Le risposte di ƎE alle domande 5 e 6 (incarico scritto, privacy) non c'erano: cosa ricontrollare quando arrivano è nel ticket chiuso, sotto «Da ricontrollare».
- Su richiesta dell'utente, pagina interattiva «Domande per ƎE» per far rispondere il collaboratore dal telefono: le 29 domande dell'elenco, salvataggio automatico, tasto «Copia le risposte» come alternativa. Le risposte si leggono solo da chi può compilare la pagina, non da chi la guarda soltanto. Il sorgente non è nel repository: è uno strumento per raccogliere le risposte, non codice del prodotto.

## Fatto (19 ottobre 2026)
- Mappa Wayfinder (tracker Local Markdown, solo nel repository): destinazione, note, decisioni finora, «Non ancora specificato» e «Fuori ambito» con ciò che PRODUCT.md §12 esclude dalla prima versione. Undici ticket, collegati con i loro blocchi.
- Decisioni dell'utente sull'impianto: proposta di pre-adesione dopo i colloqui e la specifica; prova sulle bollette con bollette reali di volontari, con limiti (entrambe in PRODUCT.md §12); ticket aggiunto «Fatti dall'agenzia ƎE»; pareri professionali fuori dalla mappa salvo blocchi del percorso 1.
- Ricerche chiuse, svolte da cinque agenti in parallelo con la skill `research`, ciascuna con fonti, date e pareri da chiedere: [incasso dei canoni al banco](docs/ricerca/incasso-canoni.md), [adempimenti della locazione](docs/ricerca/adempimenti-locazione.md), [titolarità e privacy dei dati](docs/ricerca/privacy-dati.md), [alternative sul mercato](docs/ricerca/mercato.md), [email di servizio](docs/ricerca/email.md). Il succo di ciascuna è nella mappa; le decisioni che hanno fatto emergere sono nei ticket aperti, non prese.
- Ticket nuovo emerso dalla ricerca sulla privacy: «Chi fornisce la piattaforma e chi vende l'adesione nel pilota», da cui dipendono i ruoli sui dati; blocca la specifica e la proposta.
- Elenco di 29 domande per ƎE, in sei temi, con caselle e numeri e il ticket a cui serve ciascuna, nel ticket «Fatti dall'agenzia ƎE» sotto «Commenti»: pronto da copiare per il collaboratore dell'utente. Decisioni dell'utente: tolte le domande su marca da bollo, contanti da 5.000 € in su e custodia del denaro (potrebbero mettere per iscritto una pratica non in regola; servono al parere prima del pilota, non alla specifica); fasce d'età dei proprietari e lingue degli inquilini chieste in forma aggregata.
- Regola nuova in [AGENTS.md](AGENTS.md), chiesta dall'utente: le domande all'utente si fanno in parole semplici, spiegando cosa comporta ogni opzione.

## Verificato
- `python3 tools/check_setup.py`: integrità OK, 20 skill, copie Claude e Codex equivalenti (20/10/2026).
- Pagina «Domande per ƎE» (20/10/2026): sintassi dello script controllata; aperta in Chromium a larghezza di telefono, senza errori né scorrimento laterale; avanzamento, scelta tolta al secondo tocco e testo da copiare provati una volta. Dopo la pubblicazione, un documento di prova nel suo database: invisibile a chi può solo guardare, visibile a chi può compilare; poi cancellato. Non provati: l'invito del collaboratore e il salvataggio dal suo account.
- Link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, mappa e ticket: nessuno rotto (20/10/2026). Frontiera calcolata dai file dei ticket: libero solo «Prova sulle bollette»; «Fatti dall'agenzia ƎE» è `claimed`.
- Due affermazioni delle ricerche controllate sulla fonte (19/10/2026): DMARC è RFC 9989 (maggio 2026); la consultazione EDPB sulle linee guida 02/2026 esiste.
- Non verificato: l'abrogazione dell'obbligo di pagare i canoni senza contanti (L. 208/2015) è riportata da Normattiva secondo la ricerca, ma Normattiva e Gazzetta Ufficiale non rispondevano al controllo; il comma viene da fonte secondaria.
- Non applicabili: build, test, revisione OCR e verifiche dell'interfaccia (non c'è codice).

## Problemi aperti
- **Si attende la risposta dell'agenzia** all'elenco del ticket «Fatti dall'agenzia ƎE». Il ticket «Materiali per i colloqui» resta bloccato finché le risposte non sono registrate.
- Normattiva ed EUR-Lex hanno rifiutato molte connessioni: alcune norme sono state lette da fonti secondarie o solo in parte; l'elenco è in fondo a ogni ricerca.
- Dal 1/1/2027 registro, cedolare secca, IVA e termini fiscali passano a nuovi testi unici: le ricerche su adempimenti, incasso e privacy vanno riverificate a gennaio 2027.
- Pareri professionali segnalati (legale, fiscale, privacy, servizi di pagamento, antiriciclaggio): fuori dalla mappa, prima del pilota; per l'informativa dei colloqui la decisione è nel ticket «Materiali per i colloqui». Dal 20/10 se ne aggiunge uno su ruoli e documenti del pilota: condizioni delle due adesioni, contratto sui dati con chi costruisce la piattaforma, accordo su marchio e software fra fondatori e ƎE.

## Da chiarire con l'utente
Le domande aperte sono nei ticket della mappa; prezzo, periodicità e trattenuta della quota dal canone in «Proposta di pre-adesione: prezzo, periodicità e forma». I fatti che conosce solo l'agenzia sono nell'elenco consegnato al collaboratore.

## Prossimo passo
1. L'utente consegna l'elenco «Domande per ƎE» al collaboratore: è nel ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md), sotto «Commenti (Comments)», dal titolo fino alla domanda 29. Il collaboratore lo compila nella pagina interattiva «Domande per ƎE» (https://claude.ai/artifact/EuMptgzRaJYEenhLXQ4CYq): stesse domande, risposte salvate da sole e lette dalla sessione con `ArtifactData` (raccolta `risposte`, documento `ee`); per salvare deve essere invitato per email come Editor, altrimenti usa «Copia le risposte». Quando arrivano le risposte, una sessione le registra nel ticket in forma aggregata, lo chiude e controlla anche i punti «Da ricontrollare» del ticket «Chi fornisce la piattaforma e chi vende l'adesione nel pilota» (domande 5 e 6).
2. Intanto la frontiera ha un solo ticket libero: «Prova sulle bollette», che richiede i fondatori e il personale di ƎE volontari.

Messaggi per le prossime sessioni in [START_HERE.md](START_HERE.md).

## Ultima verifica
20/10/2026, `python3 tools/check_setup.py`: integrità OK. Programmi facoltativi assenti nell'ambiente cloud: `ocr`, `playwright-cli`.
