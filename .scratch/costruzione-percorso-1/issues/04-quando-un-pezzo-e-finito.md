# Quando un pezzo è finito e come entra nel ramo principale

Type: grilling
Status: open
Blocked by: 02
Mappa: [Costruzione del percorso 1: il piano](../map.md)

## Domanda (Question)

L'utente quasi non legge il codice (ARCHITECTURE.md, «Cosa vincolerà la scelta»): la rete sono i controlli automatici, la revisione OCR e la verifica nel browser. Cosa vuol dire «pezzo finito» e chi decide che entra nel ramo principale?

1. **Lista di fine pezzo:** test scritti prima e visti fallire per dominio, denaro, permessi e accesso (QUALITY.md); controlli in GitHub tutti verdi; OCR con i difetti critici e alti corretti da un test; `security-review` dove tocca accesso, permessi o file; verifica nel browser a 360, 390, 768 e 1440 px, testo ingrandito, tastiera, tema scuro e movimento ridotto; STATUS.md aggiornato. Cosa si aggiunge o si toglie.
2. **Chi unisce:** l'utente preme «unisci» dopo un riepilogo in parole semplici e una pagina da guardare, oppure si unisce da solo con tutto verde.
3. **Una PR per pezzo o più PR per pezzo.**

Dipende dalla [ricerca sugli strumenti](02-ricerca-strumenti-lavoro.md) (OCR, protezione del ramo).

## Risposta (Answer)

## Commenti (Comments)

- 27/11/2026, dalla [ricerca sugli strumenti](02-ricerca-strumenti-lavoro.md): l'email di GitHub per un controllo fallito arriva solo a chi ha avviato il controllo e se l'ha accesa, quindi non è garantita per le proposte di Dependabot; l'unione automatica chiede un flusso (`fetch-metadata` più `gh pr merge --auto`), l'impostazione «Allow auto-merge» e i controlli obbligatori. Da decidere se i pacchetti `0.x` (per esempio Drizzle 0.45), che Dependabot tratta come versioni medie, si uniscono da soli.
