# Quando un pezzo è finito e come entra nel ramo principale

Type: grilling
Status: claimed
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
- 27/11/2026, dal ticket [Come si divide la costruzione](03-come-si-divide.md): un pezzo è una tappa (o le fondamenta) diviso in più sessioni brevi, sotto il 30–35% circa del contesto; il traguardo sono 1–3 **storie di prova** approvate prima dall'utente e diventate prove automatiche nel browser. Da mettere nella lista di fine pezzo; da decidere qui anche cosa chiude una sessione intermedia (controlli verdi, lavoro salvato, messaggio di ripresa) rispetto alla fine del pezzo, e se le sessioni intermedie entrano nel ramo principale.
- 27/11/2026, **domanda 1, lista di fine pezzo: due liste** (scelta dell'utente, sulla raccomandazione). *A ogni sessione, anche a metà tappa:* prove scritte prima e viste fallire per regole della casa, denaro, permessi e accesso; controlli in GitHub tutti verdi; OCR con i difetti critici e alti corretti da una prova; STATUS.md aggiornato e messaggio di ripresa pronto. *Alla fine del pezzo, in più:* le 1–3 storie di prova passano in automatico nel browser; `security-review` dove il pezzo tocca accesso, permessi o file; verifica a mano dell'agente nel browser a 360, 390, 768 e 1440 px con testo ingrandito, tastiera, tema scuro e movimento ridotto; prova con i dati limite sulle schermate nuove (regole di DESIGN.md, «Dati limite e accessibilità»); elenco scritto di ciò che resta fuori di proposito. A metà tappa le storie di prova restano segnate «in attesa», così non fanno fallire i controlli; alla fine devono passare tutte. *Tolta:* la verifica a mano a quattro larghezze a ogni sessione (troppo contesto, schermate ancora incomplete; axe gira comunque a ogni modifica).
