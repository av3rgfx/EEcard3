# Costruzione del percorso 1: il piano

Type: map (wayfinder:map)
Aperta: 27/11/2026, dopo il controllo B superato lo stesso giorno ([PRODUCT.md](../../PRODUCT.md) §12; [docs/METODO.md](../../docs/METODO.md), passo 8)

## Destinazione (Destination)

Il **piano di costruzione del percorso 1**, confermato dall'utente: l'ordine dei pezzi dal primo giorno fino a una **prima versione completa del percorso 1, provata con dati inventati** nell'ambiente di prova, compresa la prova con i sub-agenti che fanno proprietari, inquilini e agenzia ([PRODUCT.md](../../PRODUCT.md) §10.9). Per ogni pezzo il piano dice cosa si costruisce (schermate, server, dati, permessi, errori, test), **cosa prova** (test, controlli automatici, verifica nel browser), quali verifiche «da fare all'inizio della costruzione» lo precedono, dove serve l'autorizzazione dell'utente per un account o un servizio reale, e che si chiude con la revisione OCR prima del commit finale. La revisione dell'esperienza tappa per tappa è già decisa ([DESIGN.md](../../DESIGN.md), «Pacchetto per il controllo B»): il piano dice solo dove cade. La mappa si chiude quando l'utente conferma il piano; poi si costruisce un pezzo per sessione, fuori dalla mappa.

Confermata dall'utente il 27/11/2026 (proposta A). *Scartate:* piano e costruzione nella stessa mappa (resterebbe aperta per mesi e mescolerebbe decisioni e lavoro); piano delle sole fondamenta (l'ordine delle tappe resterebbe da decidere e le fondamenta rischierebbero di non reggere una tappa vista dopo).

## Note (Notes)

- **Pianificare, non fare:** nessun codice applicativo finché l'utente non conferma il piano (richiesta dell'utente, 27/11/2026). Sono ammessi solo prototipi usa e getta che rispondono a una domanda precisa del piano, con dati inventati.
- **Fonti:** [AGENTS.md](../../AGENTS.md); [docs/METODO.md](../../docs/METODO.md), passo 8; [docs/rules/BACKEND.md](../../docs/rules/BACKEND.md) e [docs/rules/QUALITY.md](../../docs/rules/QUALITY.md) (test prima del codice per dominio, denaro, permessi e accesso; fast-check per importi e doppio invio); [ARCHITECTURE.md](../../ARCHITECTURE.md), tutte le «Decisioni confermate», le «Precisazioni del controllo B» e i punti «Da provare» e «Da verificare all'inizio della costruzione» (raccolti nel [ticket 01](issues/01-ricerca-piattaforma-servizi.md) e nel [ticket 02](issues/02-ricerca-strumenti-lavoro.md)); [PRODUCT.md](../../PRODUCT.md) §10 e §12; [DESIGN.md](../../DESIGN.md), «Pacchetto per il controllo B» e «Componenti e token»; la [pagina del pacchetto](https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF), ferma al 30/10/2026 con l'avviso: dove è indietro valgono le sezioni di DESIGN.md. Le decisioni prese non si riaprono: un problema concreto si porta all'utente come conflitto, con una proposta.
- **Repository pulito:** non si cercano, consultano o riusano repository, codice, design o decisioni di tentativi precedenti.
- **Nessun account o servizio reale** senza l'autorizzazione esplicita dell'utente, anche per provare un fornitore (Scalingo, Amazon SES, Skebby, l'interfaccia di IstatData, le impostazioni del repository su GitHub). Solo dati inventati.
- **OCR obbligatoria** prima del commit finale di ogni incremento di codice e prima di ogni PR; difetti critici e alti si correggono con un test (AGENTS.md). Il 27/11/2026 il programma `ocr` non è installato in questa sessione cloud: come averlo si decide nel ticket [Strumenti di lavoro](issues/05-strumenti-di-lavoro.md).
- **Ponytail:** modalità lite per il piano, full per la costruzione; pezzi piccoli e completi, nessuna infrastruttura per esigenze ipotetiche.
- **Domande all'utente:** una decisione alla volta, in parole semplici, con una raccomandazione; per le scelte complesse una pagina interattiva e visiva (Artifact privato) con esempi e dati inventati, risposta in chat (AGENTS.md, 24/11/2026). Le risposte dell'utente non si simulano.
- **Skill:** `grilling` e `domain-modeling` per le decisioni; `research` per le ricerche (un file per tema in `docs/ricerca/`, data di lettura e link alle fonti primarie); `prototype` solo per la pagina visiva di una scelta; `ponytail` sempre.
- **Dove si registra:** il piano confermato dove decide il ticket [Riepilogo del piano e conferma](issues/10-riepilogo-piano.md); scelte tecniche nuove in ARCHITECTURE.md, di prodotto in PRODUCT.md §12, visive in DESIGN.md, con data e motivo; la discussione resta nel ticket. Niente registri paralleli.
- **Tracker:** Local Markdown ([riferimento](../../.agents/skills/setup-matt-pocock-skills/issue-tracker-local.md)), un file per ticket in `issues/` con le righe `Type:`, `Status:` (`open`, `claimed`, `resolved`) e `Blocked by:`; intestazioni «Domanda (Question)», «Risposta (Answer)», «Commenti (Comments)». Nessun ticket o branch remoto: le ricerche si salvano nel branch di lavoro della sessione.

## Decisioni finora (Decisions so far)

<!-- una riga per ticket chiuso: nome con link, poi il succo della risposta -->

- [Ricerca: verifiche d'inizio sulla piattaforma e sui servizi](issues/01-ricerca-piattaforma-servizi.md): si chiudono leggendo «Ferma l'accesso» (un punto unico di Better Auth per ogni modo di entrare), Typst (PDF/A-2a e PDF/UA-1 insieme), Web Share (non in Firefox né su Linux: lì il download), Drizzle (1.0 ancora in prova, si parte dalla 0.45.4) e la lettura ISTAT salvata per i test. Si provano gratis in locale React Router 8 con Better Auth, la memoria e DSS (la prova più incerta). Chiedono Scalingo o il fornitore, quindi l'autorizzazione: proxy, pagina d'errore (ospitata fuori dall'app), Java accanto a Node, SES simulato, modalità demo di Skebby (non documentata); si possono raccogliere in una sola accensione dell'app temporanea. Fatti nuovi: niente swap su Scalingo dal 1/1/2027; indirizzo d'uscita comune a tutte le app (il blocco ISTAT può venire da altri); sub-responsabili di Skebby anche fuori dall'Italia, al parere.
- [Ricerca: strumenti di lavoro per costruire con gli agenti](issues/02-ricerca-strumenti-lavoro.md): OCR è `@alibaba-group/open-code-review` 1.14.4 (Apache-2.0), provato come dipendenza di sviluppo; da solo si reinstalla globalmente ogni 18 minuti se non si mette `OCR_NO_UPDATE=1`, contro AGENTS.md. PostgreSQL 17 nella sessione cloud solo con Docker acceso a mano e l'immagine da `public.ecr.aws` (Docker Hub risponde 429); in GitHub Actions basta un servizio `postgres:17`. Actions e protezione del ramo gratis sul repository pubblico; Playwright con axe provati. L'email del controllo fallito va solo a chi l'ha avviato, se l'ha accesa. Dependabot fa da solo lunedì, attesa di 7 giorni e gruppi; l'unione automatica chiede un flusso e un'impostazione in più. `security-review` di Sentry invariata (`6d20de4`); `insecure-defaults` ora usa uno strumento di Claude Code dei piani a pagamento. Typst 0.15.1 come programma in una cartella o immagine; un suo PDF/UA-1 inventato passa veraPDF.

## Non ancora specificato (Not yet specified)

- **Decisioni piccole dentro le tappe**, che il piano colloca senza prenderle: il programma con cui l'operatore verifica una firma al banco (ARCHITECTURE.md, «Documento da firmare»); il testo della pagina d'errore fissa con le regole di DESIGN.md; email e SMS, che si disegnano dopo il parere sul nome.
- **Strada di riserva per la verifica delle firme:** se DSS non regge su Scalingo senza costi in più, la riscrittura con le due protezioni (ARCHITECTURE.md). Diventa un ticket solo se lo dicono le verifiche su Scalingo.
- **Drizzle 1.0:** se esce stabile prima del primo pezzo si parte da quella; se esce durante, quando passarci. Dipende dalla ricerca.
- **Il ponte verso il pilota:** il piano finisce con la prima versione provata; ciò che serve dopo (account veri, dominio, pareri, prove su dispositivi veri, ripristino e avvisi) è già in «Cosa resta aperto». Si guarda solo per non chiudere strade.

## Fuori dalla destinazione (Out of scope)

- Il **pilota** (passo 9) e l'apertura degli account veri di produzione.
- I **pareri** (legale, fiscale, privacy, nome, Rete ƎE) e i chiarimenti di ƎE: il piano dice solo quali pezzi toccano.
- Le **prove su telefoni e computer veri** con gli screen reader e la prova delle passkey su un iPhone vero: si fanno prima del pilota, non nel piano.
- La **costruzione** stessa: si fa dopo la conferma, un pezzo per sessione.
- I percorsi 2, 3 e 4 e l'app iPhone: il piano non li prepara, oltre a ciò che ARCHITECTURE.md già lascia al suo posto.
