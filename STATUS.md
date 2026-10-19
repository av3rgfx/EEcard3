# Stato del progetto

## Punto di ripresa (19 ottobre 2026, notte)
**Fase: studio.** La mappa delle decisioni verso la destinazione dello studio, **superare il controllo A con le evidenze**, è in [.scratch/controllo-a/map.md](.scratch/controllo-a/map.md) ([docs/METODO.md](docs/METODO.md), passo 2). Le cinque ricerche documentali sono chiuse. **Si attende la risposta dell'agenzia** all'elenco di domande del ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md), che resta `claimed`. Non c'è codice applicativo; design, architettura e stack non sono decisi.

## Fatto (19 ottobre 2026)
- Mappa Wayfinder (tracker Local Markdown, solo nel repository): destinazione, note, decisioni finora, «Non ancora specificato» e «Fuori ambito» con ciò che PRODUCT.md §12 esclude dalla prima versione. Undici ticket, collegati con i loro blocchi.
- Decisioni dell'utente sull'impianto: proposta di pre-adesione dopo i colloqui e la specifica; prova sulle bollette con bollette reali di volontari, con limiti (entrambe in PRODUCT.md §12); ticket aggiunto «Fatti dall'agenzia ƎE»; pareri professionali fuori dalla mappa salvo blocchi del percorso 1.
- Ricerche chiuse, svolte da cinque agenti in parallelo con la skill `research`, ciascuna con fonti, date e pareri da chiedere: [incasso dei canoni al banco](docs/ricerca/incasso-canoni.md), [adempimenti della locazione](docs/ricerca/adempimenti-locazione.md), [titolarità e privacy dei dati](docs/ricerca/privacy-dati.md), [alternative sul mercato](docs/ricerca/mercato.md), [email di servizio](docs/ricerca/email.md). Il succo di ciascuna è nella mappa; le decisioni che hanno fatto emergere sono nei ticket aperti, non prese.
- Ticket nuovo emerso dalla ricerca sulla privacy: «Chi fornisce la piattaforma e chi vende l'adesione nel pilota», da cui dipendono i ruoli sui dati; blocca la specifica e la proposta.
- Elenco di 29 domande per ƎE, in sei temi, con caselle e numeri e il ticket a cui serve ciascuna, nel ticket «Fatti dall'agenzia ƎE» sotto «Commenti»: pronto da copiare per il collaboratore dell'utente. Decisioni dell'utente: tolte le domande su marca da bollo, contanti da 5.000 € in su e custodia del denaro (potrebbero mettere per iscritto una pratica non in regola; servono al parere prima del pilota, non alla specifica); fasce d'età dei proprietari e lingue degli inquilini chieste in forma aggregata.
- Regola nuova in [AGENTS.md](AGENTS.md), chiesta dall'utente: le domande all'utente si fanno in parole semplici, spiegando cosa comporta ogni opzione.

## Verificato
- `python3 tools/check_setup.py`: integrità OK, 20 skill, copie Claude e Codex equivalenti (19/10/2026, sera; ripetuto di notte dopo la modifica di AGENTS.md).
- Link locali di mappa, ticket e ricerche: nessuno rotto. Frontiera calcolata dai file dei ticket.
- Due affermazioni delle ricerche controllate sulla fonte: DMARC è RFC 9989 (maggio 2026); la consultazione EDPB sulle linee guida 02/2026 esiste.
- Non verificato: l'abrogazione dell'obbligo di pagare i canoni senza contanti (L. 208/2015) è riportata da Normattiva secondo la ricerca, ma Normattiva e Gazzetta Ufficiale non rispondevano al controllo; il comma viene da fonte secondaria.
- Non applicabili: build, test, revisione OCR e verifiche dell'interfaccia (non c'è codice).

## Problemi aperti
- **Si attende la risposta dell'agenzia** all'elenco del ticket «Fatti dall'agenzia ƎE». Il ticket «Materiali per i colloqui» resta bloccato finché le risposte non sono registrate.
- Normattiva ed EUR-Lex hanno rifiutato molte connessioni: alcune norme sono state lette da fonti secondarie o solo in parte; l'elenco è in fondo a ogni ricerca.
- Dal 1/1/2027 registro, cedolare secca, IVA e termini fiscali passano a nuovi testi unici: le ricerche su adempimenti, incasso e privacy vanno riverificate a gennaio 2027.
- Pareri professionali segnalati (legale, fiscale, privacy, servizi di pagamento, antiriciclaggio): fuori dalla mappa, prima del pilota; per l'informativa dei colloqui la decisione è nel ticket «Materiali per i colloqui».

## Da chiarire con l'utente
Le domande aperte sono nei ticket della mappa: prezzo e periodicità in «Proposta di pre-adesione: prezzo, periodicità e forma»; chi fornisce la piattaforma e chi vende l'adesione nel ticket omonimo. I fatti che conosce solo l'agenzia sono nell'elenco consegnato al collaboratore.

## Prossimo passo
1. L'utente consegna l'elenco «Domande per ƎE» al collaboratore. Quando arrivano le risposte, una sessione le registra nel ticket in forma aggregata e lo chiude.
2. Intanto la frontiera ha due ticket liberi: «Chi fornisce la piattaforma e chi vende l'adesione nel pilota» (consigliato per primo: è sul percorso verso la specifica e serve solo l'utente) e «Prova sulle bollette» (richiede i volontari).

Messaggi per le prossime sessioni in [START_HERE.md](START_HERE.md).

## Ultima verifica
19/10/2026, notte, `python3 tools/check_setup.py`: integrità OK. Programmi facoltativi assenti nell'ambiente cloud: `ocr`, `playwright-cli`.
