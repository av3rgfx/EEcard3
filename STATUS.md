# Stato del progetto

## Punto di ripresa (19 ottobre 2026, sera)
**Fase: studio.** La mappa delle decisioni verso la destinazione dello studio, **superare il controllo A con le evidenze**, è in [.scratch/controllo-a/map.md](.scratch/controllo-a/map.md) ([docs/METODO.md](docs/METODO.md), passo 2). Le cinque ricerche documentali chieste dalla destinazione sono chiuse; restano sei ticket aperti. Non c'è codice applicativo; design, architettura e stack non sono decisi.

## Fatto (19 ottobre 2026)
- Mappa Wayfinder (tracker Local Markdown, solo nel repository): destinazione, note, decisioni finora, «Non ancora specificato» e «Fuori ambito» con ciò che PRODUCT.md §12 esclude dalla prima versione. Undici ticket, collegati con i loro blocchi.
- Decisioni dell'utente sull'impianto: proposta di pre-adesione dopo i colloqui e la specifica; prova sulle bollette con bollette reali di volontari, con limiti (entrambe in PRODUCT.md §12); ticket aggiunto «Fatti dall'agenzia ƎE»; pareri professionali fuori dalla mappa salvo blocchi del percorso 1.
- Ricerche chiuse, svolte da cinque agenti in parallelo con la skill `research`, ciascuna con fonti, date e pareri da chiedere: [incasso dei canoni al banco](docs/ricerca/incasso-canoni.md), [adempimenti della locazione](docs/ricerca/adempimenti-locazione.md), [titolarità e privacy dei dati](docs/ricerca/privacy-dati.md), [alternative sul mercato](docs/ricerca/mercato.md), [email di servizio](docs/ricerca/email.md). Il succo di ciascuna è nella mappa; le decisioni che hanno fatto emergere sono nei ticket aperti, non prese.
- Ticket nuovo emerso dalla ricerca sulla privacy: «Chi fornisce la piattaforma e chi vende l'adesione nel pilota», da cui dipendono i ruoli sui dati; blocca la specifica e la proposta.

## Verificato
- `python3 tools/check_setup.py`: integrità OK, 20 skill, copie Claude e Codex equivalenti (19/10/2026, sera).
- Link locali di mappa, ticket e ricerche: nessuno rotto. Frontiera calcolata dai file dei ticket.
- Due affermazioni delle ricerche controllate sulla fonte: DMARC è RFC 9989 (maggio 2026); la consultazione EDPB sulle linee guida 02/2026 esiste.
- Non verificato: l'abrogazione dell'obbligo di pagare i canoni senza contanti (L. 208/2015) è riportata da Normattiva secondo la ricerca, ma Normattiva e Gazzetta Ufficiale non rispondevano al controllo; il comma viene da fonte secondaria.
- Non applicabili: build, test, revisione OCR e verifiche dell'interfaccia (non c'è codice).

## Problemi aperti
- Normattiva ed EUR-Lex hanno rifiutato molte connessioni: alcune norme sono state lette da fonti secondarie o solo in parte; l'elenco è in fondo a ogni ricerca.
- Dal 1/1/2027 registro, cedolare secca, IVA e termini fiscali passano a nuovi testi unici: le ricerche su adempimenti, incasso e privacy vanno riverificate a gennaio 2027.
- Pareri professionali segnalati (legale, fiscale, privacy, servizi di pagamento, antiriciclaggio): fuori dalla mappa, prima del pilota; per l'informativa dei colloqui la decisione è nel ticket «Materiali per i colloqui».

## Da chiarire con l'utente
Le domande aperte sono ora nei ticket della mappa: i fatti che conosce solo l'agenzia (600 €, compenso di gestione, bonifici, ricevute, ore, quarto mestiere) in «Fatti dall'agenzia ƎE»; prezzo e periodicità in «Proposta di pre-adesione: prezzo, periodicità e forma».

## Prossimo passo
Frontiera della mappa: «Fatti dall'agenzia ƎE» (primo), «Prova sulle bollette» e «Chi fornisce la piattaforma e chi vende l'adesione nel pilota», lavorabili in sessioni separate. Messaggio per la prossima sessione in [START_HERE.md](START_HERE.md).

## Ultima verifica
19/10/2026, sera, `python3 tools/check_setup.py`: integrità OK. Programmi facoltativi assenti nell'ambiente cloud: `ocr`, `playwright-cli`.
