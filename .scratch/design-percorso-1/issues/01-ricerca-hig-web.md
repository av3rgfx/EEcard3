# Ricerca: le Apple Human Interface Guidelines per una piattaforma web su telefono e desktop

Type: research
Status: resolved
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Cosa dicono oggi le pagine ufficiali delle Apple Human Interface Guidelines sulle scelte che le direzioni di design del percorso 1 devono fare, e come si adattano a una piattaforma **web** usata da telefono (Safari su iPhone, anche aggiunta alla schermata Home) e da desktop?

Temi: struttura e navigazione (barra delle schede, barra laterale, navigazione a pila, ricerca); layout e larghezze (telefono, finestra larga del desktop); tipografia (dimensioni, testo ingrandito, Dynamic Type e suo equivalente sul web); colore e tema scuro (colori di sistema, contrasto, contrasto aumentato); materiali (Liquid Glass e alternative leggibili sul web); liste e tabelle; fogli (sheet), avvisi e conferme; pulsanti e azioni distruttive; inserimento dati, codici monouso e accesso; stati vuoti, caricamento ed errori; feedback, movimento e movimento ridotto; icone e simboli (SF Symbols e licenza sul web); scrittura (tono, maiuscole, etichette dei pulsanti); accessibilità (VoiceOver, aree di tocco, ordine di lettura). Per il web: cosa cambia in Safari su iPhone in modalità standalone (barra di stato, area sicura, gesto indietro) e cosa resta solo nativo.

Fonti primarie con la data di lettura (developer.apple.com, webkit.org, W3C/WCAG 2.2). Distinguere ciò che dice Apple da ciò che se ne deduce per il web; segnalare dove una regola nativa non vale sul web. Aggiorna [docs/rules/APPLE_DESIGN.md](../../../docs/rules/APPLE_DESIGN.md) solo se trova un'affermazione superata; i risultati vanno in `docs/ricerca/hig-web.md`.

Serve a [Direzione del percorso 1](04-prototipo-direzione.md): le direzioni restano davvero diverse ma tutte dentro le HIG.

## Risposta (Answer)

Ricerca chiusa il 23/10/2026, svolta da un agente in parallelo con la skill `research`: [docs/ricerca/hig-web.md](../../../docs/ricerca/hig-web.md), 43 pagine HIG più WebKit, la documentazione Apple per Safari e WCAG 2.2, tutte lette quel giorno. [docs/rules/APPLE_DESIGN.md](../../../docs/rules/APPLE_DESIGN.md) resta valido; nessuna correzione.

- **Le HIG valgono come grammatica, non come specifica tecnica.** Struttura, gerarchia, scrittura, conferme e accessibilità si trasferiscono al web. Restano solo native Liquid Glass, i fogli con altezze di sosta, le azioni con scorrimento, Dynamic Type, la vibrazione e i caratteri e simboli Apple.
- **Navigazione:** sul telefono una barra delle schede con poche schede, solo per navigare; con più spazio una barra laterale o una vista divisa. Le funzioni sono le stesse a ogni larghezza. Tre strutture compatibili, da usare come assi diversi delle direzioni: schede e barra laterale; una pagina «casa» con navigazione a pila; elenco e dettaglio.
- **Sul web:** il vetro è solo un'imitazione, va limitato alle barre e affiancato da una versione opaca. Il font San Francisco non si può incorporare: si ottiene solo come carattere di sistema sui dispositivi Apple. Per SF Symbols la licenza non è leggibile in rete, quindi icone con licenza libera. Da iOS 26 ogni sito aggiunto alla schermata Home si apre come web app, senza barra del browser: l'indietro lo deve offrire la pagina.
- **Contrasto:** decide WCAG 2.2; le misure Apple (17 pt, 44×44 pt) restano obiettivi, non conversioni automatiche.
- **Una decisione per l'utente:** Apple chiede di seguire il tema chiaro o scuro del sistema ed evita un selettore nell'app; DESIGN.md registra una preferenza per il nero, da riconfermare. Si decide nel ticket [Cosa vede per primo ciascuno e come parla il servizio](03-cosa-vede-per-primo.md), punto 4.
- **Da provare su un iPhone vero:** gesto indietro dalla schermata Home, barra di stato, barre fisse, testo ingrandito. Nuovo ticket: [Prova su iPhone: la piattaforma aggiunta alla schermata Home](06-prova-iphone-schermata-home.md).

## Commenti (Comments)
