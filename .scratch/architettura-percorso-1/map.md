# Architettura del percorso 1: attivazione e canone del mese

Type: map (wayfinder:map)
Aperta: 30/10/2026, dopo la pagina del pacchetto completa ([docs/METODO.md](../../docs/METODO.md), passo 7; [DESIGN.md](../../DESIGN.md), «Pacchetto per il controllo B (percorso 1)»)

## Destinazione (Destination)

Le **scelte tecniche del percorso 1** sono decise dall'utente, una alla volta, e scritte in [ARCHITECTURE.md](../../ARCHITECTURE.md) con data e motivo. Un ADR si scrive solo per le scelte difficili da invertire. Sono: chi costruisce e mantiene, com'è fatta la piattaforma e dove gira, i dati e i permessi, l'accesso, i servizi esterni, i documenti e le ricevute. Le scelte non rendono difficili la richiesta d'aiuto (percorso 2) e le bollette dell'inquilino (percorso 3), senza costruirle. La mappa si chiude quando l'architettura è **pronta per il controllo B**. Il controllo B è un passo a parte e si fa quando arrivano anche le risposte del collaboratore di ƎE. Destinazione confermata dall'utente il 30/10/2026: scelta «pronta per il controllo B»; scartate «fino al controllo B compreso», perché la mappa resterebbe aperta su tempi che non dipendono da noi, e «anche il piano di costruzione», che si scrive all'inizio della costruzione (passo 8).

## Note (Notes)

- **Dominio:** parole di [GLOSSARY.md](../../GLOSSARY.md). Specifica in [PRODUCT.md](../../PRODUCT.md) §10, regole del dominio in §7, decisioni in §12, misure del pilota in §13. Riferimenti visivi: la [pagina del pacchetto](https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF) e DESIGN.md, «Componenti e token». L'architettura non cambia la specifica: un problema emerso si porta all'utente come conflitto, con una proposta.
- **Regole del progetto:** [AGENTS.md](../../AGENTS.md). Nessun codice applicativo e nessuno stack scelto prima delle decisioni dell'utente. Prototipi usa e getta solo per rispondere a una domanda precisa. Repository pulito: non si cercano, consultano o riusano repository, codice, design o decisioni di tentativi precedenti. Solo dati inventati; nessun account, servizio o messaggio reale senza l'autorizzazione dell'utente, anche per «provare» un fornitore.
- **Ponytail** (richiesta dell'utente): poche alternative reali per ogni scelta, nessuna infrastruttura per esigenze ipotetiche, servizi gestiti e funzioni già pronte prima del codice su misura. Il pilota è piccolo: una sola agenzia, circa 100–200 case (stima dell'utente, §10.10), l'operatore 1–1,5 ore al giorno. Semplicità del codice e sicurezza, permessi, validazione e accessibilità non si scambiano.
- **Percorsi dopo il 1, nell'ordine deciso** (riconfermato dall'utente il 30/10/2026): 2) richiesta d'aiuto fino all'intervento chiuso; 3) bollette dell'inquilino; 4) report annuale. Cosa non deve diventare difficile, senza costruirlo ora:
  - il **tecnico** vede solo ciò che serve all'incarico: un accesso che non nasce da un rapporto con la casa (§12, 18/10/2026; GLOSSARY, «Incarico»);
  - lo **spazio delle bollette** è privato dell'inquilino: la piattaforma impedisce al personale di ƎE di vederlo (§12, 20/10/2026; §10.7 «mai»). All'inquilino serve un **indirizzo per le bollette** che riceve email (§12, 19/10/2026) e la lettura del QR pagoPA senza servizi esterni ([ricerca](../../docs/ricerca/bollette.md));
  - il **report annuale** somma solo importi documentati e dice cosa copre (§7.10);
  - **più agenzie** con dati separati sono una direzione confermata, non un requisito della prima versione (§4);
  - poi l'**app iPhone** sullo stesso servizio (§11) e, se la prova regge, la **vista 3D indicativa** calcolata dentro la piattaforma (§12, 24/10/2026).
- **Skill:** `grilling` e `domain-modeling` per le decisioni; `research` per le ricerche, una per tema in `docs/ricerca/`, con la data di lettura e il link a ogni fonte primaria; `ponytail` sempre; `prototype` solo se una scelta dipende da come si comporta qualcosa.
- **Domande all'utente:** una alla volta, in parole semplici: cosa si chiede, perché conta, cosa comporta ogni opzione, con una raccomandazione motivata. Senza gergo tecnico; un nome di prodotto o servizio si spiega con quello che fa.
- **Dove si registra:** le scelte tecniche in ARCHITECTURE.md, con data, alternative scartate e motivo; un cambio di prodotto in PRODUCT.md §12; un termine deciso in GLOSSARY.md; un ADR in `docs/adr/` solo se la scelta è difficile da invertire, sorprendente senza contesto e frutto di un vero compromesso. La discussione resta nel ticket. Niente registri paralleli.
- **Tracker:** Local Markdown ([riferimento](../../.agents/skills/setup-matt-pocock-skills/issue-tracker-local.md)). Un file per ticket in `issues/`, con le righe `Type:`, `Status:` (`open`, `claimed`, `resolved`) e `Blocked by:`. Intestazioni doppie: «Domanda (Question)», «Risposta (Answer)», «Commenti (Comments)». Nessun ticket o branch remoto: le ricerche si salvano nel branch di lavoro della sessione.
- **Cosa può riaprire l'architettura** (pagina del pacchetto, «Cosa resta aperto»): i chiarimenti dell'agenzia ƎE, se i bonifici al proprietario sono la maggioranza e si riapre la regola D2; le risposte del collaboratore di ƎE sul lavoro al banco. I pareri (legale, fiscale, privacy, nome) toccano testi e conservazione, non la forma della piattaforma.

## Decisioni finora (Decisions so far)

<!-- una riga per ticket chiuso: nome con link, poi il succo della risposta -->

## Non ancora specificato (Not yet specified)

- **Verifica operativa:** controlli del codice, migrazioni, log e avvisi di guasto adeguati al pilota, prova di ripristino. C'è anche l'**ambiente di prova** per le prove dell'utente con proprietari, inquilini e agenzia simulati da sub-agenti (§10.9). Si specifica dopo [Com'è fatta la piattaforma e dove gira](issues/08-forma-e-dove-gira.md) e [Linguaggio, framework e componenti](issues/09-linguaggio-framework-componenti.md).
- **Indirizzo web e dominio dei messaggi:** aspettano il [parere sul nome](../design-percorso-1/issues/08-parere-nome-connetto.md). Le email partono da ƎE con «Connetto» accanto (§10.5): può servire il dominio dell'agenzia, con l'accesso alle sue impostazioni. Fino ad allora le prove usano un dominio di prova. Si precisa con [Servizi esterni: email, SMS e ISTAT](issues/11-servizi-esterni.md).
- **Separazione dello spazio delle bollette** (percorso 3): se basta il permesso o serve una separazione più forte, per esempio la cifratura, anche verso chi mantiene la piattaforma. Non si costruisce ora; il modello dei dati lascia il posto.
- **Elenco dei fornitori per ƎE:** chi tratta i dati, dove, con quale contratto sui dati, per l'informativa e il contratto fra chi mantiene la piattaforma e ƎE (§12, 20/10/2026). Si compone man mano che si scelgono i fornitori.

## Fuori ambito (Out of scope)

- **Il controllo B:** è un passo a parte, con la pagina del pacchetto, le risposte del collaboratore di ƎE e l'architettura (scelta dell'utente del 30/10/2026).
- **Il piano di costruzione:** l'ordine dei pezzi si scrive all'inizio della realizzazione (passo 8; scelta dell'utente del 30/10/2026).
- **L'architettura dei percorsi 2, 3 e 4, dell'app iPhone, della vista 3D e di più agenzie:** qui si controlla solo che le scelte non le rendano difficili (Note).
- **Testi legali e contratti:** il contratto sui dati, l'informativa e il testo delle ricevute aspettano i pareri ([PRODUCT.md](../../PRODUCT.md) §10.10).
- **Il disegno di email e SMS:** resta nella [mappa del design](../design-percorso-1/map.md) e aspetta il parere sul nome.
