# Skill per la sicurezza e lo sviluppo con gli agenti

Ricerca del 30 ottobre 2026, svolta da un agente in background (skill `research`) sul sorgente delle skill e sulla documentazione ufficiale, con la data di lettura per ogni fonte. Risponde ai punti 1, 2 e 3 del ticket [14 «Ricerca: skill per la sicurezza e lo sviluppo con gli agenti»](../../.scratch/architettura-percorso-1/issues/14-ricerca-skill-sicurezza-sviluppo.md).

**Non è una valutazione di sicurezza.** Dice cosa fanno oggi le skill lette. Nulla è stato installato e nessuno script delle skill è stato eseguito: i repository sono stati scaricati con `git clone --depth 1` in una cartella temporanea e solo letti. Nessun account, chiave o messaggio. Nessun repository dei tentativi precedenti consultato. Lo stack non è scelto: le skill legate a un fornitore (Supabase, Firebase) contano solo se si sceglie quel fornitore.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **La skill `security-review` già disponibile è il comando `/security-review` di Claude Code.** Il testo dentro Claude Code 2.1.314 coincide con il file pubblico di Anthropic, salvo la riga che calcola il diff [1][2][3]. Guarda solo le modifiche rispetto al ramo principale. Per scelta esclude dipendenze vecchie, limiti ai tentativi, registri delle operazioni e rinforzi mancanti [2][3]: per EECard3 sono buchi veri (§1.1).
- **La migliore candidata per la revisione di sicurezza è `security-review` di Sentry.** Sono solo istruzioni, senza programmi. Segnala un difetto solo dopo aver seguito da dove arrivano i dati, e include una guida sugli accessi a dati di altri utenti (IDOR) [4]. L'indizio di Hacker News la raccomanda; le affermazioni principali reggono sul sorgente, una no (§6).
- **Trail of Bits offre gli strumenti più seri e anche i più pesanti** [5]. Utili e leggere: `differential-review` e `property-based-testing`. `insecure-defaults` e `supply-chain-risk-auditor` sono utili, ma lanciano più agenti o si collegano a servizi esterni (§3). Licenza CC BY-SA 4.0.
- **Se si sceglie Supabase**, le sue due skill ufficiali sono le più utili per i permessi sulle righe (RLS) e per le migrazioni [7][8]. `supabase-postgres-best-practices` vale per Postgres anche fuori da Supabase. **Se si sceglie Firebase**, la skill ufficiale è `firebase-security-rules-auditor` [9][10].
- **Per i test, la skill `test-driven-development` di superpowers è buona** [11]. Il pacchetto intero però si carica a ogni sessione e impone il suo metodo di lavoro, in contrasto con AGENTS.md e con wayfinder (§5).
- **Da non installare ora:** Semgrep Guardian manda al fornitore i file scritti dall'agente e chiede un account [17]. Codex Security porta un server MCP, molte variabili per le chiavi e un accesso dedicato [14][15].
- **Nessuna skill sostituisce i test o un controllo umano.** Restano scoperti la tenuta dei dati, i salvataggi e il ripristino, e una prova di attacco sul sistema acceso. L'utente ha scartato il controllo umano a ore il 30/10/2026 (ticket 01): rimane un rischio dichiarato (§5).

## 0. Lo strumento per cercare

Letti dalla sessione principale il 30/10/2026, solo il sorgente, senza installare né eseguire nulla. Scelta dell'utente lo stesso giorno: **gli strumenti già presenti**, senza account (ticket, «Commenti»).

| Strumento | Cosa installa o esegue | Accessi | Reddit e X da qui |
|---|---|---|---|
| **Agent-Reach** 1.6.0, MIT [22] | `uv` (con `curl … \| sh`), poi il programma da GitHub; per Reddit e X anche Node.js, OpenCLI (pacchetto npm con un'estensione per Chrome e un programma locale) e CloakBrowser, un browser fatto per non farsi riconoscere come automatico, il cui programma ha una licenza propria: la documentazione di Agent-Reach chiede di non presentarlo come libero. Tutto in `~/.agent-reach/`; la skill va in `~/.agents/skills` ed è collegata alle cartelle delle skill di ogni AI trovata nel computer, compresa `~/.claude/skills` | Per Reddit e X un account: l'accesso al sito si copia dal Chrome dell'utente con l'estensione, oppure l'utente entra nel suo browser. Consiglia un account secondario, perché le piattaforme possono limitare quelli usati in automatico | Senza account prova prima le ricerche pubbliche, come gli strumenti già presenti. Il canale web cerca con Exa e legge con Jina Reader, due servizi esterni. Nelle note della versione Reddit risulta non provato prima dell'uscita |
| **last30days**, MIT [23] | Plugin o `npx skills add`; il primo avvio installa altri programmi (yt-dlp e altri) | Reddit senza chiave; X con chiavi (X, xAI) o con i cookie del browser, con consenso; propone l'iscrizione a ScrapeCreators | Fa richieste anonime a reddit.com: da qui reddit.com risponde 403 (prova sotto) |
| **Strumenti già presenti** (ricerca e lettura del web degli agenti, `curl`, `git`) | Niente | Nessuno | No (prova sotto) |

- **Prove del 30/10/2026, dal contenitore della sessione:** la ricerca degli agenti rifiuta reddit.com («not accessible to our user agent»), la lettura rifiuta old.reddit.com, `curl` su `reddit.com/…/search.json` dà 403. `x.com/search` rimanda all'accesso (307). L'API pubblica di Hacker News (200) e GitHub rispondono senza account.
- **Inferenza:** senza account Agent-Reach e last30days non aggiungono quasi nulla per Reddit e X; con un account, Agent-Reach userebbe l'account social dell'utente e programmi installati per tutto il computer. Le prove su cosa fa una skill stanno nel suo sorgente su GitHub, che si legge senza account.
- **Da verificare:** cosa dicono le condizioni d'uso di Reddit e X sulla lettura automatica; non sono state lette.

## 1. Sicurezza

### 1.1 Che cosa copre già il progetto

| Già presente | Cosa fa | Cosa non fa |
|---|---|---|
| OCR delegata (`open-code-review-delegate`) | Revisione generale del codice cambiato, con regole per file; obbligatoria prima di ogni commit di codice | Non è specifica per la sicurezza. Il programma `ocr` non è nell'ambiente (STATUS.md) |
| `/security-review` (Claude Code) [1][2] | Revisione di sicurezza delle modifiche rispetto a `origin/HEAD`: iniezioni, accesso e permessi, segreti scritti nel codice, cifratura, XSS, dati personali nei log. Riporta solo ciò che è sfruttabile con fiducia di almeno l'80% | Vede solo il diff. Esclude per regola: DoS e limiti ai tentativi, segreti salvati su disco, librerie vecchie, rinforzi mancanti, registri delle operazioni, file di test |
| `/code-review` (Claude Code) [1] | Errori di correttezza nel diff | Non è una revisione di sicurezza |
| BACKEND.md e QUALITY.md | Regole: permessi lato server, isolamento, segreti, importi esatti, idempotenza, migrazioni, prove dei percorsi non autorizzati | Sono regole, non controlli che girano da soli |

- **Fonte:** l'elenco delle esclusioni è nel testo del comando, uguale nel file pubblico [3] e nel programma installato [2]. Fra le esclusioni: «Rate limiting concerns», «Vulnerabilities related to outdated third-party libraries», «A lack of audit logs is not a vulnerability», «A lack of hardening measures».
- **Inferenza:** per EECard3 tre esclusioni pesano. Il limite ai tentativi sul codice di accesso è una regola concorde delle fonti ([accesso-codice.md](accesso-codice.md)). Le versioni conservate sono una regola del dominio (PRODUCT.md §7). Le dipendenze vecchie sono un rischio, e chi non legge il codice non se ne accorge. Queste tre cose vanno coperte da test, da regole scritte o da un'altra skill.
- **Fonte:** l'Action di GitHub dello stesso repository chiede una chiave API di Anthropic e dichiara di non essere protetta dalle istruzioni nascoste nel codice delle PR esterne [3]. **Inferenza:** il comando locale basta; l'Action non serve per ora.

### 1.2 Revisione del codice e permessi

- **Fonte:** `security-review` di Sentry riporta solo i difetti con fiducia alta; quelli incerti li segna «da verificare». Prima di segnalare, cerca nel resto del codice da dove arriva il dato e se è già controllato [4]. Ha 17 guide per tipo di difetto (autorizzazione con IDOR, autenticazione, dati personali, log, logica di business, catena delle dipendenze…), due guide per linguaggio (JavaScript e Python) e una per Docker [4].
- **Fonte:** la stessa skill non segnala i percorsi che richiedono di essere entrati («Code paths that require prior authentication to reach»): annota solo che serve l'accesso [4]. **Inferenza:** in EECard3 il rischio maggiore è un utente entrato che legge i dati di un altro, per esempio un inquilino che vede la casa di un altro proprietario. La guida IDOR ne parla, ma la regola generale può nasconderlo. Se la si adotta, conviene aggiungere una riga nelle regole del progetto: per ogni dato si controlla anche il percorso «utente entrato, ma di un'altra casa».
- **Fonte:** `differential-review` di Trail of Bits rivede un diff dando più peso ad accesso, cifratura e passaggi di valore. Controlla con `git blame` il codice di sicurezza rimosso e conta quanti punti usano il codice cambiato. Segnala il codice cambiato senza test [5]. Scrive un rapporto in un file `.md` nella cartella di lavoro [5]. Secondo la skill stessa non serve per il codice nuovo senza storia [5].
- **Fonte:** `insecure-defaults` di Trail of Bits cerca impostazioni pericolose: segreti di riserva (`env.get('KEY') or 'dev'`), credenziali predefinite, interruttori che lasciano aperto, cifratura debole, permessi larghi (CORS `*`), errori interni mostrati agli utenti [5]. Gira con sei agenti di ricerca e più agenti di verifica sui modelli Sonnet e Opus, tramite lo strumento `Workflow` di Claude Code [5]. **Da verificare:** che lo strumento `Workflow` sia disponibile nella versione in uso; con Codex non funziona così com'è (inferenza).
- **Fonte:** `sharp-edges` (Trail of Bits) giudica se API e configurazioni sono facili da usare male; serve a chi progetta librerie, meno a chi le usa [5].

### 1.3 Database e regole d'accesso del fornitore

- **Fonte:** la skill `supabase` contiene una lista di trappole che creano buchi senza errori visibili [7]. Alcune: RLS su ogni tabella esposta; mai decidere i permessi con `user_metadata`, che l'utente può modificare; `TO authenticated` da solo non dice *quali* righe; gli UPDATE vogliono sia `USING` sia `WITH CHECK`; le viste e le funzioni `SECURITY DEFINER` scavalcano RLS; cancellare un utente non annulla i suoi accessi già dati; la chiave `service_role` mai nel browser [7].
- **Fonte:** `supabase-postgres-best-practices` si dichiara valida «for Postgres running anywhere». Contiene regole su permessi, RLS, vincoli, chiavi primarie, transazioni brevi e upsert [7].
- **Fonte:** `firebase-security-rules-auditor` (Google) esamina le regole di Firestore e Cloud Storage. Cerca: aggiornamenti che scavalcano le regole di creazione, permessi presi da dati inviati dall'utente, campi senza tipo o limite, `hasOnly()` senza controllo del proprietario. Dà un voto da 1 a 5 [9]. **Fonte:** la documentazione Firebase la chiama `firestore-security-rules-auditor`, il repository `firebase-security-rules-auditor` [9][10].

### 1.4 Dipendenze e segreti

- **Fonte:** `supply-chain-risk-auditor` (Trail of Bits) misura con due script le dipendenze npm, PyPI e Go. Guarda: difetti noti per la versione esatta, progetti abbandonati, pochi pubblicatori, script che girano all'installazione [5]. Gli script si collegano a OSV, deps.dev, npm, PyPI, il proxy di Go, OpenSSF Scorecard e GitHub. Leggono il token di `gh` se c'è, e possono chiamare `pip-audit` [5]. Non leggono `pnpm-lock.yaml` né `yarn.lock` [5].
- **Fonte:** per i segreti nessuna skill letta porta un programma dedicato (gitleaks, trufflehog). `/security-review` cerca i segreti scritti nel codice del diff [2]. `insecure-defaults` cerca i segreti di riserva [5]. Le skill Supabase ricordano di non mettere la chiave segreta nel browser e di usare token limitati per agenti e CI [7].
- **Inferenza:** per le dipendenze serve prima di tutto un controllo automatico che giri da solo a ogni modifica, non una skill da ricordarsi di lanciare. È una scelta tecnica da fare con lo stack (§2).

## 2. Sviluppo

- **Test prima del codice.** **Fonte:** `test-driven-development` di superpowers impone «NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST»: test che fallisce, codice minimo, test che passa. I prototipi usa e getta sono un'eccezione da chiedere all'utente [11]. **Inferenza:** per chi non legge il codice è la protezione più diretta: ogni regola (nessun doppio pagamento, accesso legato alla casa) diventa un test che si vede fallire.
- **Test su tutti i valori possibili.** **Fonte:** `property-based-testing` (Trail of Bits) aiuta a scrivere test che provano una regola su molti valori generati: andata e ritorno, invarianti, idempotenza, tipi Decimal [5]. Supporta fast-check (JavaScript) e Hypothesis (Python) [5]. **Inferenza:** l'idempotenza («registrare due volte lo stesso pagamento non cambia nulla») e i calcoli degli importi sono i casi giusti. Serve aggiungere una libreria di test al progetto.
- **Test che controllano i test.** **Fonte:** Trail of Bits ha anche `mutation-testing`: cambia apposta il codice per vedere se i test se ne accorgono [5]. **Inferenza:** utile più avanti, quando i test esistono già.
- **Migrazioni del database.** **Fonte:** la skill `supabase` distingue schemi dichiarativi e migrazioni scritte a mano. Vieta di inventare il nome dei file di migrazione. Prima di salvare una migrazione chiede di eseguire gli «advisors» di sicurezza [7]. **Fonte:** nessuna skill letta copre le migrazioni per Scalingo o Clever Cloud; per Postgres valgono le regole generali di `supabase-postgres-best-practices` [7].
- **Controlli automatici.** **Fonte:** `static-analysis` (Trail of Bits) guida Semgrep e CodeQL, ma va installato il programma Semgrep o CodeQL. La skill scarica regole di terzi da GitHub e chiede l'approvazione del piano prima di partire [5]. **Inferenza:** per un progetto piccolo conviene mettere i controlli (lint, tipi, test, dipendenze) nel flusso di lavoro del progetto quando si sceglie lo stack, invece che in una skill.
- **Verifica prima di dire «fatto».** **Fonte:** `verification-before-completion` di superpowers chiede di eseguire i controlli e leggerne l'esito prima di dichiarare un lavoro concluso [11]. **Inferenza:** è un doppione di QUALITY.md («Nessuna dichiarazione di conformità o test superati senza verifica effettiva»).

## 3. Tabella delle skill

Date dell'ultima modifica lette sulla pagina dei commit di GitHub della cartella della skill [6]; per il comando integrato, la data del repository pubblico.

| Skill | Autore | Licenza | Ultima modifica | Cosa fa | Cosa installa o esegue | Accessi richiesti | Doppioni con il progetto |
|---|---|---|---|---|---|---|---|
| `/security-review` [1][2][3] | Anthropic | MIT (repository) | 11/2/2026; in Claude Code 2.1.314 | Revisione di sicurezza del diff | Solo `git diff`, `git log`, lettura dei file | Nessuno; serve il remoto `origin` | Si affianca a OCR (sicurezza contro qualità generale) |
| `security-review` Sentry [4] | Sentry | CC BY-SA 4.0 (testi tratti da OWASP) | 19/10/2026 | Revisione di sicurezza con verifica del percorso dei dati e 17 guide | Niente; usa Read, Grep, Glob, Bash, Task | Nessuno | Stesso nome del comando integrato: **conflitto di nome** |
| `skill-scanner` Sentry [4] | Sentry | Apache-2.0 | 29/9/2026 | Controlla una skill prima di adottarla: istruzioni nascoste, script pericolosi, permessi | `uv run` di uno script; scarica `pyyaml` | Nessuno | Nessuno; utile prima di ogni installazione |
| `differential-review` [5] | Trail of Bits | CC BY-SA 4.0 | 16/9/2026 | Revisione del diff con storia git, punti colpiti, test mancanti | Comandi git; scrive un rapporto `.md` | Nessuno | Parziale con OCR e `/security-review` |
| `insecure-defaults` [5] | Trail of Bits | CC BY-SA 4.0 | 16/9/2026 | Cerca impostazioni pericolose in tutto il codice | Strumento `Workflow`, molti agenti (Sonnet e Opus) | Nessuno; consumo alto | Nessuno |
| `supply-chain-risk-auditor` [5] | Trail of Bits | CC BY-SA 4.0 | 16/9/2026 | Rischio delle dipendenze | `uv run` di due script; rete verso OSV, npm, PyPI, GitHub e altri; `pip-audit` | Token `gh` se presente (facoltativo) | Nessuno |
| `property-based-testing` [5] | Trail of Bits | CC BY-SA 4.0 | 16/9/2026 | Test su molti valori generati | Niente; il progetto aggiunge una libreria di test | Nessuno | Nessuno |
| `supabase` e `supabase-postgres-best-practices` [7][8] | Supabase | MIT | 24/9/2026 (contenuto), 2/10/2026 (rilascio) | Trappole di RLS, accessi, chiavi, migrazioni; regole Postgres | Usa CLI `supabase` e server MCP; legge pagine online | Accesso Supabase con token limitato; nessuno per le regole Postgres | Nessuno; si sovrappone in parte a BACKEND.md |
| `firebase-security-rules-auditor` [9][10] | Google LLC | Apache-2.0 | 8/10/2026 | Esame delle regole Firestore e Storage | Niente | Nessuno (le altre skill Firebase fanno login con la CLI) | Nessuno |
| `test-driven-development` (superpowers) [11] | Jesse Vincent | MIT | 19/9/2026 (pacchetto 7.0.1, 21/10/2026) | Test prima del codice | Da sola niente; il pacchetto completo aggiunge un hook a ogni avvio | Nessuno | Il pacchetto intero si sovrappone a wayfinder, grilling, QUALITY.md |

- **Fonte:** le skill Trail of Bits si installano anche in Codex, che accetta i cataloghi di plugin di Claude [5]. Supabase e superpowers sono anche nel catalogo ufficiale dei plugin di Codex [13]. **Inferenza:** le skill fatte solo di istruzioni (Sentry, `differential-review`, `property-based-testing`, Supabase, Firebase, `test-driven-development`) si possono copiare uguali in `.claude/skills` e `.agents/skills`. Quelle con hook, MCP o `Workflow` no.

## 4. Cosa aggiungono rispetto a OCR, `/security-review`, BACKEND.md e QUALITY.md

| Bisogno | Già coperto | Cosa aggiungerebbe una skill |
|---|---|---|
| Accesso ai dati di un'altra casa | `/security-review` (sul diff), BACKEND.md (regola) | Sentry: guida IDOR e verifica del percorso dei dati. Supabase: trappole RLS. Firebase: esame delle regole |
| Impostazioni pericolose in tutto il codice | No: `/security-review` guarda solo il diff ed esclude i rinforzi mancanti | `insecure-defaults` |
| Dipendenze vecchie o abbandonate | No: escluse da `/security-review` | `supply-chain-risk-auditor`, o meglio un controllo automatico dello stack |
| Regole del dominio (doppio pagamento, versioni) | QUALITY.md chiede una verifica | `test-driven-development`, `property-based-testing` |
| Codice di sicurezza rimosso per errore | In parte OCR | `differential-review` |
| Skill di terzi prima dell'installazione | Lettura a mano | `skill-scanner` |
| Verifica prima di dire «fatto», revisione generale | QUALITY.md, OCR | Niente di nuovo |
| Prova di attacco sul sistema acceso, salvataggi e ripristino | No | Nessuna skill letta |

## 5. Rischi

- **Hook che girano sempre.** **Fonte:** superpowers aggiunge un hook all'avvio di ogni sessione. Inserisce un testo che dice «If you think there is even a 1% chance a skill might apply… you ABSOLUTELY MUST invoke the skill» e chiede di fare `brainstorming` prima di pianificare [11]. `fp-check` di Trail of Bits aggiunge controlli alla fine di ogni turno, anche fuori dal suo compito [5]. **Inferenza:** contrasta con AGENTS.md, dove le preferenze delle skill vengono per ultime e wayfinder parte solo su richiesta. Se si vuole il TDD, conviene copiare solo quella skill.
- **Merge e push.** **Fonte:** `finishing-a-development-branch` di superpowers propone merge locale o push con PR [11]. **Inferenza:** nell'ambiente cloud si fa push solo sul branch della sessione (AGENTS.md); quella skill non va presa.
- **Codice mandato fuori.** **Fonte:** Semgrep Guardian invia a `scanner.semgrep.ai` ogni file scritto o modificato dall'agente, con la versione precedente, oltre a lockfile e manifest. Il login passa da `semgrep.dev`. Le statistiche d'uso vanno a `telemetry.semgrep.dev`. Gli hook girano a ogni scrittura in ogni progetto e il programma si aggiorna da solo [17]. Nel repository non c'è una licenza [17]. **Da verificare:** costo e piano gratuito; la documentazione non ne parla [18].
- **Chiavi e servizi.** **Fonte:** Codex Security avvia un server MCP locale che legge variabili come `OPENAI_API_KEY` e le credenziali AWS. Collega connettori (GitHub, Linear, Atlassian) e, con OpenAI, richiede un «Codex Security access» [14][15]. È in anteprima per la parte cloud [15]. **Inferenza:** troppo per ora. Codex ha già `codex review` per la revisione generale [16].
- **Programmi scaricati all'ultima versione.** **Fonte:** `firebase-basics` chiede di usare sempre `npx -y firebase-tools@latest`, anche per `login` e `projects:create` [10]. La skill `supabase` chiede di leggere il changelog online a ogni compito e, se manca, di creare `.mcp.json` [7]. **Inferenza:** un aggiornamento non controllato entra senza che nessuno lo veda. Account e progetti reali li crea solo l'utente (AGENTS.md).
- **Richieste di aprire issue.** **Fonte:** la skill `supabase` prevede, con il permesso dell'utente, di aprire una issue su GitHub quando la skill sbaglia [7]. **Inferenza:** compatibile con AGENTS.md solo se il permesso è esplicito; resta vietato senza autorizzazione.
- **Conflitto di nome.** **Inferenza:** la skill di Sentry si chiama `security-review` come il comando integrato. Copiarla con lo stesso nome rende ambiguo quale parte; andrebbe rinominata nella copia del progetto.
- **Licenza CC BY-SA 4.0** (Trail of Bits, `security-review` di Sentry). **Fonte:** chi modifica e ridistribuisce deve citare l'autore e usare la stessa licenza [4][5]. **Inferenza:** per l'uso nel repository va bene, a patto di tenere il file di licenza e annotare le modifiche.
- **Falsa sicurezza.** **Fonte:** Codex Security scrive che nessun difetto trovato non vuol dire che il codice sia sicuro [14]. QUALITY.md dice lo stesso. **Parere professionale:** prima del pilota con dati veri servirebbero un controllo di sicurezza fatto da una persona (prova di attacco sull'ambiente acceso) e una verifica del ripristino dei dati. L'utente ha scartato il controllo a ore per mancanza di budget (ticket 01). Resta un rischio da dichiarare nel controllo B, insieme al parere legale già previsto sul contratto dei dati.

## 6. L'indizio di Hacker News, verificato

- **Fonte:** i due post di Hacker News (25/2/2026 e 6/3/2026) puntano allo stesso articolo di Tim Kamanin, timonweb.com [19][20]. Confronta cinque skill e raccomanda `getsentry/skills@security-review`.
- **Confermato sul sorgente** [4]: riporta solo i difetti con fiducia alta e segna gli altri «da verificare»; considera sicuri i valori di configurazione del server; segue il percorso dei dati prima di segnalare; ha 17 guide per tipo di difetto.
- **Non confermato al commit letto** [4]: l'articolo cita guide per Go, Rust e Kubernetes; oggi ci sono solo JavaScript, Python e Docker. Può essere cambiato dopo febbraio.
- **Non verificato:** i giudizi sulle altre quattro skill dell'articolo (affaan-m, sergiodxa, alirezarezvani, davila7). Non sono fra le candidate.
- **Fonte:** l'articolo consiglia `npx skills install`. **Inferenza:** per il progetto vale la regola di AGENTS.md: copiare a mano la cartella letta, a un commit preciso.

## Cosa resta all'utente

*Scelte fatte dall'utente il 1/11/2026 nel ticket [Verifica operativa del percorso 1](../../.scratch/architettura-percorso-1/issues/16-verifica-operativa.md): punto 1 (a), punto 2 (b) con `property-based-testing` tramite fast-check, punto 3 superato (né Supabase né Firebase), punto 4 (a) più (b) e (c) una volta prima del pilota, punto 5 rischio accettato. Dettaglio in [ARCHITECTURE.md](../../ARCHITECTURE.md), «Verifica operativa».*

Scelte possibili, da decidere una alla volta. Ogni installazione la decide l'utente. Ogni skill si copia a un commit preciso, dopo averla controllata con `skill-scanner` o letta, e uguale in `.claude/skills` e `.agents/skills`.

1. **Revisione di sicurezza in più oltre a `/security-review`.** Opzioni: (a) `security-review` di Sentry, rinominata, solo istruzioni; (b) nessuna aggiunta, con le tre esclusioni del §1.1 coperte da test e da una riga in BACKEND.md; (c) `differential-review` di Trail of Bits, più lenta, utile quando il codice ha già una storia.
2. **Test prima del codice.** Opzioni: (a) copiare solo `test-driven-development` di superpowers, senza il pacchetto e senza il suo hook; (b) scriverlo come regola in QUALITY.md, senza skill. In più, se si vuole, `property-based-testing` per importi e idempotenza.
3. **Skill del fornitore.** Si decide solo dopo la scelta dello stack (ticket 08): le due skill Supabase, oppure `firebase-security-rules-auditor`. Con Postgres altrove basta `supabase-postgres-best-practices`.
4. **Dipendenze e impostazioni pericolose.** Opzioni: (a) controllo automatico dello stack, deciso con l'architettura; (b) `supply-chain-risk-auditor` a mano prima del pilota (usa la rete, non le chiavi); (c) `insecure-defaults` prima del pilota (solo Claude Code, consumo alto).
5. **Controllo umano prima del pilota.** Già scartato per il budget. Si può ripensarlo se il prezzo dell'adesione lo copre, oppure annotarlo come rischio accettato.

## Fonti

Tutte lette il 30/10/2026. Per i repository GitHub: commit letto con `git clone --depth 1`.

1. Anthropic, [Claude Code – Commands](https://code.claude.com/docs/en/commands): `/security-review` e `/code-review`.
2. Claude Code 2.1.314 installato nell'ambiente: testo del comando `/security-review` letto dal programma (fonte locale, nessun link).
3. [anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review), commit `0c6a49f1fa56a1d472575da86a94dbc1edb78eda` (11/2/2026): README, `.claude/commands/security-review.md`, `action.yml`, licenza MIT.
4. [getsentry/skills](https://github.com/getsentry/skills), commit `d12f250460ffd961f549dbebf7eeb0cf4afd4c2e` (23/10/2026): `skills/security-review` (SKILL.md, references, languages, LICENSE CC BY-SA 4.0), `skills/skill-scanner`, `skills/security-model`; licenza del repository Apache-2.0.
5. [trailofbits/skills](https://github.com/trailofbits/skills), commit `2be6433b39e009cd2b6fd3be1895f6b1faa5af9a` (28/10/2026): README, plugin `differential-review` 1.1.4, `insecure-defaults` 2.0.3, `sharp-edges` 1.1.3, `static-analysis` 1.5.1, `supply-chain-risk-auditor` 2.0.4, `property-based-testing` 1.2.2, `mutation-testing`, `fp-check` 1.0.5; licenza CC BY-SA 4.0.
6. GitHub, pagine dei commit per cartella (`/commits/main/<cartella>`) dei repository [4][5][7][9][11], per le date dell'ultima modifica della tabella.
7. [supabase/agent-skills](https://github.com/supabase/agent-skills), commit `c9be0e931b7930f7d02126d04774d904c381e7d7` (2/10/2026): `skills/supabase` 0.1.2, `skills/supabase-postgres-best-practices` 1.1.1, `references/skill-feedback.md`; licenza MIT.
8. Supabase, [AI Skills](https://supabase.com/docs/guides/getting-started/ai-skills.md): elenco e installazione.
9. Firebase, [Firebase agent skills](https://firebase.google.com/docs/ai-assistance/agent-skills): repository ufficiale, installazione in Claude Code e Codex, elenco.
10. [firebase/agent-skills](https://github.com/firebase/agent-skills), commit `09fe6d688e0f9d0ff73f141b8d12f4013b86e19b` (29/10/2026): `firebase-security-rules-auditor`, `firestore-rules-creation`, `firebase-basics`; licenza Apache-2.0.
11. [obra/superpowers](https://github.com/obra/superpowers), commit `2ce8aa15d05bd57213e6f746f953aafb7ded7a8b` (21/10/2026), versione 7.0.1: `hooks/`, `using-superpowers`, `test-driven-development`, `verification-before-completion`, `finishing-a-development-branch`; licenza MIT.
12. [openai/skills](https://github.com/openai/skills), commit `49f948faa9258a0c61caceaf225e179651397431` (23/6/2026): dichiarato deprecato, rimanda a openai/plugins.
13. [openai/plugins](https://github.com/openai/plugins), commit `0722921d5542fc593105c27bd52630babd8b8c2a` (8/10/2026): catalogo con `codex-security`, `supabase`, `superpowers`.
14. [openai/codex-security](https://github.com/openai/codex-security), commit `e2673d7f13173fe72eed122bc8aced8474baff98` (30/10/2026), plugin 0.1.95: README, `docs/agent-workflows.md`, `.mcp.json`, `.app.json`, `security-diff-scan`; licenza Apache-2.0.
15. OpenAI, [Codex Security](https://learn.chatgpt.com/docs/security): modi d'uso e requisiti d'accesso.
16. OpenAI, [Developer commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli): `codex review` (letta la prima parte della pagina).
17. [semgrep/mcp-marketplace](https://github.com/semgrep/mcp-marketplace), commit `653bd65347baf7f9fcfbf4f5376dee12599eb61b` (22/10/2026), plugin 2.10.0: README («What Guardian sends»), `plugin/hooks/hooks.json`, `plugin/scripts/`.
18. Semgrep, [Guardian](https://docs.semgrep.dev/guardian).
19. Hacker News, [API di ricerca](https://hn.algolia.com/api/v1/search?query=Security%20Skills%20for%20Claude%20Code&tags=story): post 47149897 (25/2/2026) e 47274033 (6/3/2026), zero commenti.
20. T. Kamanin, [I Checked 5 Security Skills for Claude Code. Only One Is Worth Installing](https://timonweb.com/ai/i-checked-5-security-skills-for-claude-code-only-one-is-worth-installing/), febbraio 2026 (indizio, non prova).
21. [anthropics/skills](https://github.com/anthropics/skills), commit `ca45fc496a3436251f191354091d557da31c15b5` (28/10/2026): nessuna skill di sicurezza; `webapp-testing` (Playwright) fa da doppione con `playwright-cli` del progetto; dichiarate «for demonstration and educational purposes only».
22. [Panniantong/Agent-Reach](https://github.com/Panniantong/agent-reach), commit `14c213405669414492bda0f8d52cc6531d062c45` (25/10/2026), versione 1.6.0 del 23/10/2026: `docs/README_en.md`, `docs/install.md`, `llms.txt`, `CHANGELOG.md`, `docs/cloakbrowser.md`, `agent_reach/skill/SKILL_en.md`, `runtime/session_reuse.py`, `runtime/tools.py`, `runtime/manage.py`, `backends/opencli.py`, `channels/reddit.py`, `channels/twitter.py`, `channels/web.py`; licenza MIT.
23. [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill), commit `7efc0ef764765ed9ceff5ce1204462b35b89d680` (28/10/2026): `README.md`, `CONFIGURATION.md`, elenco di `skills/last30days/scripts/lib/`; licenza MIT.

## Fonti non raggiunte

- **API di GitHub** (date dei commit per cartella): bloccata dal proxy dell'ambiente. Si sono lette le pagine web dei commit [6].
- **Guida rapida di Semgrep Guardian** (`docs.semgrep.dev/guardian/quickstart`: 404; `docs.semgrep.dev/mcp`: 405): costo, piano gratuito e requisiti dell'account non confermati.
- **Storia delle skill prima del commit letto:** il clone è a profondità 1, quindi non si sa come fosse la skill di Sentry a febbraio 2026.
- **Strumento `Workflow` di Claude Code** usato da `insecure-defaults`: non trovato nella documentazione letta.
- **Reddit, X e Threads:** bloccati dall'ambiente, non usati.
