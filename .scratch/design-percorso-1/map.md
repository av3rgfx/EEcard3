# Design del percorso 1: attivazione e canone del mese

Type: map (wayfinder:map)
Aperta: 23/10/2026, dopo il controllo A ([PRODUCT.md](../../PRODUCT.md) §12, «Controllo A»; [docs/METODO.md](../../docs/METODO.md), passo 6)

## Destinazione (Destination)

Una direzione di design del percorso 1 scelta dall'utente e il **percorso intero disegnato in quella direzione**: ogni schermata e situazione di [PRODUCT.md](../../PRODUCT.md) §10 per proprietario, inquilino e operatore di ƎE, su telefono e desktop, con i testi, le email e gli SMS e una revisione dell'accessibilità. Il tutto è registrato in [DESIGN.md](../../DESIGN.md) come regole, non come prototipo, e pronto per il controllo B insieme all'architettura. L'identità visiva è dentro; il nome del prodotto è fuori. Confermata dall'utente il 23/10/2026 (opzione B: direzione più percorso intero, contro «solo la direzione» e «direzione e schermate principali»).

## Note (Notes)

- **Dominio:** parole decise in [GLOSSARY.md](../../GLOSSARY.md), da usare anche nei testi dei prototipi. La specifica è PRODUCT.md §10, la promessa sta nella riga «Controllo A» di §12, le misure in §13. Regole del dominio in §7. Il design non cambia la specifica: se un disegno fa emergere un problema, lo si porta all'utente come conflitto.
- **Regole del progetto:** [AGENTS.md](../../AGENTS.md). Nessuno stack scelto e nessun codice applicativo. Repository pulito: nessun riuso di repository, codice, design o decisioni di tentativi precedenti. Solo dati inventati; nessun servizio, account o messaggio reale senza autorizzazione.
- **Riferimento:** le Apple Human Interface Guidelines adattate al web ([docs/rules/APPLE_DESIGN.md](../../docs/rules/APPLE_DESIGN.md)); le indicazioni dell'utente in DESIGN.md valgono come orientamento. Accessibilità: si punta a WCAG 2.2 livello AA, il livello dei criteri di contrasto già in APPLE_DESIGN.md (scelta predefinita dell'agente, che l'utente può cambiare), con testo ingrandito, tastiera, tema scuro e movimento ridotto ([docs/rules/QUALITY.md](../../docs/rules/QUALITY.md)).
- **Prototipi:** usa e getta (skill `prototype`), con direzioni o varianti davvero diverse dietro un selettore e solo dati inventati, importi come «9.876,54 €». Si mostrano all'utente come pagina privata da aprire su telefono e desktop; il sorgente sta fuori dal repository (cartella temporanea della sessione). Nel ticket restano domanda, cosa si è mostrato, scelta e motivo.
- **Skill per tipo di ticket:** `research` per le ricerche (un file per tema in `docs/ricerca/`, fonti primarie con la data); `grilling` e `domain-modeling` per le decisioni; `prototype` per le direzioni e le varianti; poi `ux-writing` per i testi, `apple-design` ed `emil-design-eng` per interazioni e rifinitura, `mobile-native` per il telefono, `break-ui` per i dati limite, `accessibility-audit` per la revisione.
- **Domande all'utente:** una alla volta, in parole semplici, con una raccomandazione motivata e le conseguenze di ogni opzione.
- **Dove si registra:** le scelte visive in DESIGN.md, con data, motivo e ambito; un cambio di prodotto in PRODUCT.md §12. La discussione resta nel ticket. Niente registri paralleli.
- **Tracker:** Local Markdown ([riferimento](../../.agents/skills/setup-matt-pocock-skills/issue-tracker-local.md)). Un file per ticket in `issues/`, con le righe `Type:`, `Status:` (`open`, `claimed`, `resolved`) e `Blocked by:`. Le intestazioni sono doppie: «Domanda (Question)», «Risposta (Answer)», «Commenti (Comments)». Nessun ticket o branch remoto: le ricerche si salvano nel branch di lavoro della sessione.
- **Persone vere:** decisione dell'utente del 23/10/2026. Il collaboratore di ƎE guarda lo spazio dell'operatore prima del controllo B, con dati inventati e poche domande precise ([ticket](issues/05-collaboratore-guarda-operatore.md)). Nessun proprietario o inquilino vero: le evidenze con i clienti arrivano dal pilota (§12, 22/10/2026). Le prove di funzionamento restano dell'utente (§10.9).
- **Percorso previsto:** ricerche e punti fermi, poi la direzione. Seguono le schermate per ruolo, i messaggi e la tessera digitale, poi testi, rifinitura, dati limite e accessibilità. Il collaboratore di ƎE guarda lo spazio dell'operatore, poi viene il pacchetto per il controllo B.

## Decisioni finora (Decisions so far)

<!-- una riga per ticket chiuso: nome con link, poi il succo della risposta -->

## Non ancora specificato (Not yet specified)

Dipende dalla direzione scelta in [Direzione del percorso 1](issues/04-prototipo-direzione.md); diventerà ticket man mano.

- **Schermate e situazioni per ruolo**, su telefono e desktop, nella direzione scelta. *Operatore:* lavoro in coda; attivazione d'ufficio con scheda della casa, persone e rapporti, dati della locazione, elenco dei mancanti e «non serve»; incontro al banco con incarico, adesioni, accesso verificato ed eventuale aiuto a creare un'email; registrazione di incassi e consegne (parziali, arretrati, più mesi, blocco dei contanti da 5.000 €); ricevute annullate o sostituite; ISTAT da controllare; contestazioni con esito; chiamate avviate. *Proprietario:* casa, canone e consegna con i loro stati, conferme «ricevuto», nuovo canone da approvare, documenti e scadenze, «Chiedi a ƎE di occuparsene», contestare e «Chiama», più case, più proprietari. *Inquilino:* dove e quanto pagare, promemoria, ricevute e contratto, contabile da caricare, contestare e «Chiama», nuovo canone in arrivo, sola lettura dopo la fine della locazione. *Per tutti:* accesso con email o codice via SMS, adesione e informativa, fine dei rapporti (§10.8), stati vuoti, caricamento ed errori. Probabilmente un ticket per ruolo, o per gruppo di situazioni.
- **Email e SMS:** un modello per i tredici fatti di §10.5, senza importi, con il fatto nell'oggetto e un link; tema scuro e immagini bloccate. Dipende anche dalla [ricerca sulla forma](issues/02-ricerca-email-sms-forma.md).
- **Tessera digitale:** come appare, dove si trova e cosa mostra all'operatore (il codice serve solo a trovare il cliente, GLOSSARY.md).
- **Documenti stampati dalla piattaforma:** la ricevuta del canone e quella della consegna, firmate e con bollo quando serve. Il testo aspetta il parere legale (§10.10); il design ne fissa l'impaginazione e i campi di §10.3.
- **Testi dell'interfaccia** (skill `ux-writing`): etichette, stati, errori, conferme, sempre con le parole del glossario.
- **Componenti e token** da registrare in DESIGN.md, solo quelli che servono al percorso.
- **Rifinitura e revisione:** interazioni e movimento, comportamento sul telefono (aggiunta alla schermata Home, area sicura), dati limite (nomi lunghi, molte case, molti mesi arretrati), revisione dell'accessibilità.
- **Pacchetto per il controllo B:** cosa l'utente guarda per confermare la direzione di design insieme all'architettura (METODO.md, passi 6–7).

## Fuori ambito (Out of scope)

- **Nome del prodotto**, con il logo del mittente nella casella: è una scelta a sé, legata al marchio (decisione dell'utente del 23/10/2026). Nei prototipi si usa un nome provvisorio.
- **Vista 3D indicativa:** prima la [ricerca](../controllo-a/issues/14-ricerca-vista-3d.md) e la [prova](../controllo-a/issues/15-prova-vista-3d.md) della mappa chiusa; se la prova va bene si progetta come parte del fascicolo (richiesta dell'utente).
- **Prezzo e condizioni dell'adesione** ([ticket](../controllo-a/issues/10-prezzo-condizioni-adesione.md)) e **tessere fisiche** ([ticket](../controllo-a/issues/12-ricerca-tessere-fisiche.md)), su richiesta dell'utente. Il design lascia il posto a prezzo e condizioni senza fissarne i valori.
- **Bollette** (percorso 3), su richiesta dell'utente: spazio delle bollette e [indirizzo per le bollette](../../GLOSSARY.md). All'attivazione dell'inquilino resta solo il posto del passaggio.
- **Percorsi 2–4** (richiesta d'aiuto e tecnici, bollette, report annuale), **notifiche sul telefono** e **app iPhone** (§12, «Controllo A»).
- **Architettura e stack** (METODO.md, passo 7): invio di email e SMS, accesso con codice, lettura dei dati ISTAT.
- **Testi legali** (incarico di gestione, informativa, condizioni delle adesioni, testo della ricevuta, comunicazione del luogo del pagamento): richiedono i pareri prima del pilota (§10.10). Il design ne prevede il posto, non il contenuto.
- **Tutto ciò che §12 esclude dalla prima versione**, elencato nella riga «Controllo A».
