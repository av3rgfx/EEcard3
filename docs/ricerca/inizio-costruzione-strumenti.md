# Strumenti di lavoro per costruire con gli agenti

Ricerca del 27 novembre 2026, svolta da un sub-agente (skill `research`) sulle fonti primarie, con le prove fatte nella sessione cloud. Risponde al ticket [02 «Ricerca: strumenti di lavoro per costruire con gli agenti»](../../.scratch/costruzione-percorso-1/issues/02-ricerca-strumenti-lavoro.md) e serve alle decisioni già prese in [ARCHITECTURE.md](../../ARCHITECTURE.md), «Verifica operativa» (1/11/2026); i fatti di allora sono in [verifica-operativa.md](verifica-operativa.md) e [skill-sicurezza-sviluppo.md](skill-sicurezza-sviluppo.md).

**Non è una scelta.** Dice cosa offrono oggi gli strumenti e cosa si è potuto provare; le decisioni restano all'utente. Nessun account aperto, nessuna impostazione del repository GitHub toccata, nessun programma installato per tutto il sistema, nessun codice applicativo. Le prove sono state fatte in cartelle temporanee dello scratchpad con dati inventati e poi cancellate. Nessun repository dei tentativi precedenti consultato. Tutte le fonti sono state lette il **27/11/2026**.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Prova** = comando eseguito nella sessione, con l'esito vero; **Da verificare** = non confermato.

## In breve

- **OCR** è il pacchetto npm `@alibaba-group/open-code-review` 1.14.4 (Apache-2.0, Alibaba), con firma e provenienza verificate da npm. Si aggiunge al progetto come dipendenza di sviluppo e la skill `delegate` gira senza chiavi né modelli. **Attenzione:** il programma di avvio di npm si aggiorna da solo con `npm i -g` ogni 18 minuti, cioè un'installazione globale automatica, a meno che non si imposti `OCR_NO_UPDATE=1`. Provato nella sessione: funziona.
- **PostgreSQL 17** (17.12, sostenuto fino all'8/11/2029) nella sessione cloud c'è solo con Docker, che però parte spento e va acceso a mano. Docker Hub ha rifiutato il download (troppe richieste dallo stesso indirizzo); la copia pubblica su Amazon ECR ha funzionato. In GitHub Actions basta un servizio `postgres:17`; sul computer dell'utente: Docker Desktop, Postgres.app, l'installatore EDB o i pacchetti PGDG.
- **GitHub Actions** è gratis senza limite di minuti sui runner standard dei repository pubblici; la protezione del ramo con il piano gratuito c'è. Playwright e axe sono stati provati nella sessione e funzionano. L'email per un controllo fallito arriva solo a chi ha **avviato** il controllo, e solo se lo ha acceso nelle sue impostazioni: per le proposte di Dependabot non è detto che arrivi.
- **Dependabot** fa da solo il raggruppamento, il lunedì e l'attesa di 7 giorni. Le correzioni di sicurezza passano subito. L'unione automatica chiede tre cose in più: un flusso di lavoro, «Allow auto-merge» e la protezione del ramo con i controlli obbligatori.
- **Skill di revisione.** `security-review` di Sentry non è cambiata dal 19/10/2026 (commit `6d20de4`) ed è fatta solo di istruzioni, con licenza CC BY-SA 4.0. `insecure-defaults` di Trail of Bits oggi è un comando di plugin che usa lo strumento **`Workflow`** di Claude Code («workflow dinamici», sui piani a pagamento). `supply-chain-risk-auditor` legge `package-lock.json` ma non `pnpm-lock.yaml`.
- **Typst e Java.** Typst 0.15.1 (Apache-2.0) si scarica come un solo file eseguibile da tenere nel progetto, oppure gira con l'immagine ufficiale `ghcr.io/typst/typst`. Non c'è un pacchetto npm ufficiale. Nella sessione c'è già Java 21. Prova completa: un PDF/UA-1 con dati inventati, fatto con Typst, passa il controllo di veraPDF 1.30.4.

## 1. OCR (open-code-review)

### Cosa dicono le fonti
- **Fonte:** pacchetto npm `@alibaba-group/open-code-review`, ultima versione **1.14.4** del 26/11/2026, licenza **Apache-2.0**, repository `github.com/alibaba/open-code-review`, due manutentori con indirizzo `alibaba-inc.com` [1]. Il comando `ocr` è il file `bin/ocr.js`, che lancia un programma già compilato. Il programma arriva da un pacchetto per piattaforma (`@alibaba-group/ocr-linux-x64`, `-darwin-arm64`, `-win32-x64`…, 62 MB per Linux) oppure, se manca, lo scarica lo script `postinstall` dalla pagina dei rilasci di GitHub, controllando la somma SHA-256 [1][2].
- **Fonte:** escono versioni quasi ogni giorno: 11 versioni dalla 1.13.8 (12/11) alla 1.14.4 (26/11) [1].
- **Fonte:** la guida ufficiale indica l'installazione globale (`npm install -g`), oppure Homebrew, uno script `curl | sh` che mette il programma in `/usr/local/bin`, o il programma scaricato dai rilasci. «When installed via NPM, `ocr` keeps itself up to date automatically by default (the static binary opts out of this mechanism)… To turn off auto-updates, set `OCR_NO_UPDATE`» [2] (`installation.md`).
- **Fonte (codice letto):** se `OCR_NO_UPDATE` non è impostata, `bin/ocr.js` avvia ogni 18 minuti, in background, `scripts/update.js`. Lo script esegue `npm i -g @alibaba-group/open-code-review@<ultima>` e scrive lo stato in `~/.opencodereview/` [2].
- **Fonte:** le regole del progetto stanno in `<repo>/.opencodereview/rule.json` («safe to commit»), quelle personali in `~/.opencodereview/rule.json` [2] (`review-rules.md`). EECard3 ha già `.opencodereview/rule.json`. La telemetria è «off by default» [2] (`telemetry.md`).
- **Fonte:** la skill `open-code-review-delegate` del progetto chiede solo `ocr delegate preview` e `ocr delegate rule`, con `--format json` dalla v1.9.0; non serve un modello configurato. Nella parte sui problemi dice di aggiornare con `npm install -g` (`.claude/skills/open-code-review-delegate/SKILL.md`, copiata al commit `8eb8334`, THIRD_PARTY.md).
- **Fonte:** la versione di oggi della skill nel repository (commit `d4f568f`) è cambiata rispetto alla nostra copia [2]. Con `--from` senza `--to` usa `HEAD`; si devono passare gli stessi riferimenti anche a `rule`. Chiede di riportare i cambi di comportamento anche senza difetti. Se `ocr` manca, dice: «install… if your environment permits… If installation is not permitted, explain the prerequisite and stop».

### Prove nella sessione
| Comando | Esito |
|---|---|
| `which ocr` | niente: `ocr` non c'è (confermato) |
| `npm view @alibaba-group/open-code-review …` | 1.14.4, Apache-2.0, `postinstall: node scripts/install.js` |
| `npm pack` del pacchetto, poi lettura di `install.js`, `update.js` e `bin/ocr.js` | trovato l'aggiornamento automatico con `npm i -g` (sopra) |
| In una cartella temporanea: `npm init -y` e `OCR_NO_UPDATE=1 npm install --save-dev --save-exact @alibaba-group/open-code-review@1.14.4` | 2 pacchetti; `postinstall` salta il download perché c'è il pacchetto per piattaforma |
| `npm audit signatures` | «2 packages have verified registry signatures… verified attestations» (provenienza SLSA) |
| `sha256sum` del programma nel pacchetto contro `sha256sum.txt` del rilascio v1.14.4 [3] | identici (`1dc6b1ea…`) |
| `ocr version` | `open-code-review v1.14.4 (d4f568f) linux/amd64` |
| `ocr delegate preview --repo <EECard3> -c HEAD --format json` | `schema_version` 1; 12 file, **0 da rivedere**, tutti esclusi come `unsupported_ext` (sono `.md`) |
| `ocr delegate rule --repo <EECard3> --format json app/esempio.ts` | regola di sistema più quella di `.opencodereview/rule.json` («source: project») |
| `git status` del repository e `ls ~/.opencodereview` dopo le prove | repository pulito; nessuna cartella creata in casa |

### Inferenze
- **Come dipendenza di sviluppo**, quando ci sarà un `package.json`: `npm install --save-dev --save-exact @alibaba-group/open-code-review@<versione>`, poi `npx ocr …` o uno script npm. Va sempre impostata `OCR_NO_UPDATE=1`, per esempio dentro lo script npm, altrimenti il primo `ocr` può installare una copia globale. Senza l'aggiornamento automatico: chiamare direttamente il programma del pacchetto per piattaforma (`node_modules/@alibaba-group/ocr-<os>-<arch>/bin/opencodereview`).
- **Prima del `package.json`** c'è il programma del rilascio scaricato in una cartella ignorata dal repository, con la somma controllata. `npx --yes @alibaba-group/open-code-review@1.14.4` passa invece dalla cache di npm nella cartella di casa.
- I documenti (`.md`) non sono «da rivedere» per OCR: la revisione OCR comincia davvero con il primo codice. Questo conferma la nota «OCR non applicabile» di STATUS.md.
- Con le uscite quasi giornaliere e Dependabot settimanale, OCR arriverà quasi ogni lunedì; la versione fissata nel `package-lock.json` resta quella provata.

### Cosa resta all'utente
- Decidere se aggiornare la copia della skill alla versione di oggi (cambia `--from` e il resoconto; va copiata uguale in `.claude/skills` e `.agents/skills`, come dice AGENTS.md), e come trattare la riga «`npm install -g`» della skill, che contrasta con AGENTS.md.
- Sul computer dell'utente vale lo stesso: dipendenza di sviluppo con `OCR_NO_UPDATE=1`, o il programma del rilascio. Su Windows e macOS il pacchetto per piattaforma esiste [1], ma non è stato provato.

## 2. PostgreSQL 17

### Cosa dicono le fonti
- **Fonte:** la 17 è sostenuta, ultima minore **17.12**, uscita il 26/9/2024 e sostenuta fino all'**8/11/2029**. La 16 è alla 16.16, fino al 9/11/2028 [4]. Licenza: la «PostgreSQL License» [7].
- **Fonte:** Ubuntu ha una sola versione per edizione; per le altre c'è il repository apt di PostgreSQL (PGDG), che sostiene noble 24.04. La configurazione si fa con `sudo` (`apt.postgresql.org.sh` o il file `pgdg.sources`) [5]. Per macOS: l'installatore di EDB, ospitato da EDB e non dalla comunità, Postgres.app, Homebrew e altri [6].
- **Fonte:** l'immagine Docker ufficiale `postgres` (docker-library, file di costruzione con licenza MIT) ha `17` = 17.12 nelle varianti trixie, bookworm e alpine [9]. Docker Hub senza account: **100 download ogni 6 ore per indirizzo IPv4** [10]. Docker Desktop è gratis per le piccole imprese (meno di 250 dipendenti **e** meno di 10 milioni di dollari di ricavi) e per uso personale [11].
- **Fonte:** in GitHub Actions i contenitori di servizio vogliono un runner Linux. L'esempio ufficiale usa `services: postgres: image: postgres`, con `POSTGRES_PASSWORD`, il controllo `pg_isready` e la porta `5432:5432` se il job gira direttamente sul runner [16]. L'immagine del runner Ubuntu 24.04 (20261116.376.1) contiene già PostgreSQL **16.16**, con il servizio spento [15].

### Prove nella sessione
| Comando | Esito |
|---|---|
| `psql --version`; `ls /usr/lib/postgresql/` | 16.15; solo `16` |
| `apt-cache policy postgresql-17` | nessun risultato: la sorgente PGDG non è configurata |
| Indice di Ubuntu noble-updates, `grep postgresql-17` | 0: Ubuntu 24.04 non ha la 17 |
| `curl` dell'indice PGDG `noble-pgdg` [8] | raggiungibile; `postgresql-17` fino a `17.12-1.pgdg24.04+1` |
| Download del `.deb` di PGDG ed estrazione con `dpkg-deb -x` in una cartella temporanea | `postgres --version` → 17.12, nessuna libreria mancante. Avvio **non provato**: il server non gira come root e l'utente `postgres` non può leggere lo scratchpad |
| `docker info` | il demone non risponde: Docker c'è ma è spento |
| `dockerd` avviato a mano in background | parte (Docker 29.9.3, overlayfs) |
| `docker pull postgres:17` (due volte) | **rifiutato**: `429 Too Many Requests` da Docker Hub |
| `docker pull public.ecr.aws/docker/library/postgres:17` | riuscito (671 MB su disco) |
| `docker run -d … -p 127.0.0.1:55432:5432` con password inventata; `psql` 16 dalla sessione | `PostgreSQL 17.12 (Debian 17.12-1.pgdg13+1)`; un vincolo `unique` rifiuta il secondo valore uguale |
| `docker rm -f`, `docker rmi`, `docker system prune -af` | contenitore e immagine rimossi |

### Inferenze
- **Sessione cloud:** la strada che funziona è Docker. Il demone però va acceso (`dockerd`), e Docker Hub senza account può rifiutare per il limite condiviso dell'indirizzo d'uscita. La copia su `public.ecr.aws/docker/library` ha funzionato. **Da verificare:** che sia una copia ufficiale delle immagini Docker (pagina non letta). Il client `psql` 16 parla con il server 17. I pacchetti PGDG sono raggiungibili, ma aggiungerli vuol dire cambiare le sorgenti apt del sistema: è materia di uno script di preparazione dell'ambiente, con l'approvazione dell'utente, non un'installazione automatica.
- **GitHub Actions:** un servizio `postgres:17` (o `17.12` per fissare la minore) con il controllo `pg_isready`. Il PostgreSQL 16 del runner resta spento e non va usato. **Da verificare:** se il limite di Docker Hub tocchi i runner di GitHub (le fonti lette non ne parlano).
- **Computer dell'utente:** il sistema del computer non è scritto nei documenti (**dato mancante**). Con Docker Desktop si usa la stessa immagine dei controlli e della sessione, e ƎE rientra probabilmente nella licenza gratuita (inferenza sui numeri dell'agenzia). Senza Docker restano Postgres.app su macOS, l'installatore EDB su Windows e macOS, PGDG su Linux: sono installazioni per tutto il computer, da far fare all'utente.

### Cosa resta all'utente
- Dire quale sistema ha il computer e se va bene installare Docker Desktop, o un PostgreSQL 17 locale.
- Per la sessione cloud: se salvare nello script di preparazione dell'ambiente l'avvio di Docker e il download dell'immagine (o i pacchetti PGDG). Lo propone l'agente, lo approva l'utente.

## 3. GitHub Actions sul repository pubblico

### Cosa dicono le fonti
- **Minuti.** **Fonte:** «Standard GitHub-hosted runners in public repositories» restano gratis e non consumano la quota inclusa; per i privati GitHub Free include 12 $ al mese, a 0,006 $ al minuto su Linux [12]. Limiti: un job dura al massimo 6 ore sui runner di GitHub; 20 job contemporanei con il piano Free [13]. Il runner Linux standard dei repository pubblici ha 4 processori, 16 GB di memoria e 14 GB di disco (`ubuntu-latest` = 24.04) [14]. Sul runner ci sono già Node.js 22, Docker 28 e Java 8–25 (17 predefinito) [15].
- **PostgreSQL 17 nei job:** §2 [16].
- **Playwright e axe.** **Fonte:** l'esempio ufficiale per GitHub Actions fa `npm ci`, `npx playwright install --with-deps`, `npx playwright test` e carica il resoconto come artefatto per 30 giorni [23]. I browser vanno in `~/.cache/ms-playwright`, o dove dice `PLAYWRIGHT_BROWSERS_PATH` [24]. C'è anche l'immagine `mcr.microsoft.com/playwright:v<versione>-noble` [25]. Versioni del giorno: `@playwright/test` 1.65.1 (13/11/2026, Apache-2.0); `@axe-core/playwright` 4.14.1 (24/11/2026, MPL-2.0) [26].
- **Protezione del ramo.** **Fonte:** «Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations» [17]; anche i rulesets ci sono nei pubblici con Free [18]. I controlli obbligatori hanno due modi. Nel modo «strict», quello predefinito, il ramo deve essere aggiornato prima dell'unione. Nel modo «loose» no. Per impostazione le regole non valgono per gli amministratori, salvo «Do not allow bypassing the above settings» [17].
- **Email per il controllo fallito.** **Fonte:** se l'utente accende le notifiche di Actions per email o sul sito, riceve un avviso quando finisce un'esecuzione **che ha avviato lui**, anche solo per quelle fallite [19]. Per i flussi a orario l'avviso va a chi ha creato il flusso, o a chi ne ha cambiato l'orario per ultimo, o a chi l'ha riacceso [19]. La scelta si fa in «Notification settings → System → Actions»: «Email», «On GitHub», «Only notify for failed workflows» [20]. Le email si possono filtrare con le intestazioni [21].
- **Fonte:** le operazioni fatte con il `GITHUB_TOKEN` di un flusso non avviano altri flussi, salvo `workflow_dispatch` e `repository_dispatch`. Le proposte di modifica create o aggiornate da un flusso partono in attesa di approvazione [22].

### Prove nella sessione
| Comando | Esito |
|---|---|
| In una cartella temporanea: `npm install --save-dev --save-exact @playwright/test@1.65.1 @axe-core/playwright@4.14.1` | riuscito, 0 vulnerabilità |
| `PLAYWRIGHT_BROWSERS_PATH=<temporanea> npx playwright install chromium` | scaricati Chromium e la shell senza finestra (125,7 MiB scaricati, 700 MB su disco); niente in `~/.cache` |
| Un test usa e getta: una pagina finta con un'immagine senza testo alternativo e un pulsante senza nome, analizzata da axe | `1 passed`; axe trova `button-name` e `image-alt` |
| `curl` dell'API di GitHub per i rilasci di OCR; `gh api` | **403**: l'accesso di GitHub è limitato ai repository collegati alla sessione |
| Impostazioni del repository `av3rgfx/EEcard3` | non lette né toccate, per regola |

### Inferenze
- Con il repository pubblico i controlli decisi il 1/11/2026, circa 5–10 minuti a ogni modifica, non costano niente e stanno larghi nei limiti.
- **L'email non è garantita per tutti i casi.** La ricevono l'utente per i controlli che avvia lui (e le spinte degli agenti col suo account contano come sue: **da verificare**) e l'autore del flusso «salute» a orario. Per i controlli sulle proposte di Dependabot, avviati dal bot, la fonte non promette un'email all'utente. Se falliscono, l'unione automatica non avviene e la proposta resta aperta: serve un altro segnale, per esempio una voce nella revisione del lunedì (**inferenza**, da provare con la «prova degli avvisi»).
- **Da verificare** sulla pagina delle impostazioni dell'utente: il valore attuale della voce «Actions». La guida dice di aprire il menu «Don't notify», ma non dice se sia il valore predefinito.
- Se un'unione fatta da un flusso con `GITHUB_TOKEN` deve far partire un altro flusso su `main`, quel flusso non parte [22]. Scalingo aspetta i controlli della proposta, non un flusso su `main` (verifica-operativa.md §1.4), quindi oggi non sembra un problema (**inferenza**).

### Cosa resta all'utente
- Accendere nelle sue impostazioni di notifica «Actions → Email», eventualmente «solo falliti».
- Accendere la protezione del ramo `main` (o un ruleset) con i controlli obbligatori, quando i controlli esisteranno; decidere se vale anche per gli amministratori.

## 4. Dependabot

### Cosa fa da solo (fonte)
- **Lunedì:** `schedule.interval: weekly` gira «by default on Monday»; con `day`, `time` e `timezone` si fissa l'ora (per impostazione UTC). Senza `time`, l'ora è casuale [27].
- **Attesa:** senza configurazione c'è già un'attesa di 3 giorni; `cooldown.default-days: 7` la porta a 7, con valori separati per le grandi, medie e piccole versioni (`semver-major-days`…) e liste `include`/`exclude`. Per npm e GitHub Actions è sostenuta. «The cooldown option is only available for version updates, not security updates» [27].
- **Raggruppare:** `groups` mette in una sola proposta tutti gli aggiornamenti che corrispondono a una regola (`patterns`, `update-types: minor, patch, major`, `dependency-type`, `applies-to: version-updates | security-updates`). Ciò che non corrisponde a nessuna regola va in proposte separate [27].
- **Limiti:** al massimo 5 proposte di versione aperte (si cambia con `open-pull-requests-limit`); per la sicurezza, 10 fisse [27].
- **Sicurezza:** gli aggiornamenti di sicurezza si accendono nelle impostazioni del repository («Dependabot security updates», con grafo delle dipendenze e avvisi accesi); il raggruppamento di sicurezza si accende a parte o con `applies-to` [32]. Dependabot gira sempre su GitHub Actions, anche se Actions è spento [28].

### Cosa chiede un'azione in più (fonte)
- **L'unione automatica non la fa Dependabot.** La guida mostra un flusso `on: pull_request` con `permissions: contents: write, pull-requests: write`. Il flusso parte solo se l'autore è `dependabot[bot]`, legge i dati con `dependabot/fetch-metadata` e poi esegue `gh pr merge --auto --merge "$PR_URL"`. L'esempio ufficiale lo fa solo per `version-update:semver-patch` di un pacchetto [28]. Raccomanda di rendere obbligatori i controlli sul ramo [28].
- `update-type` dà «the highest semver change being made by this PR» e `dependency-group` il gruppo [29]. `fetch-metadata`: licenza MIT, ultima etichetta `v3.1.0` (commit `25dd0e3`). La guida di GitHub lo fissa a un altro commit (`d7267f6…`) [28][29].
- L'unione automatica va permessa nel repository (Settings → General → «Allow auto-merge») e compare solo se ci sono requisiti non ancora soddisfatti, per esempio i controlli obbligatori [30][31]. Con una coda di unione il `GITHUB_TOKEN` non basta [28].

### Inferenze
- Per «piccole e medie si uniscono da sole» la condizione è `update-type` uguale a `version-update:semver-patch` o a `version-update:semver-minor`. Con i gruppi, una proposta che contiene anche una sola versione grande ha `update-type` grande e resta ferma per intero. Conviene quindi un gruppo per piccole e medie e uno a parte per le grandi (**inferenza**, non letto come esempio).
- I pacchetti `0.x` (per esempio Drizzle 0.45) cambiano il comportamento anche con il secondo numero. Dependabot li tratta comunque come `semver-minor` secondo la regola x.y.z [27]: l'unione automatica li prenderebbe. **Da decidere** se escluderli (lista `exclude-patterns` o un gruppo a parte).
- Le versioni uscite da meno di 7 giorni oggi sarebbero escluse: per esempio `@axe-core/playwright` 4.14.1 del 24/11 e OCR 1.14.4 del 26/11.

### Cosa resta all'utente
- Accendere nel repository gli avvisi e gli aggiornamenti di sicurezza di Dependabot e «Allow auto-merge», più la protezione del ramo (§3). Sono impostazioni che l'agente non tocca.
- Decidere cosa fare dei pacchetti `0.x` nell'unione automatica.

## 5. Skill di revisione

### `security-review` di Sentry
- **Fonte:** repository `getsentry/skills`, ultimo commit del repository `a582c51` del 14/11/2026. L'**ultimo commit che tocca `skills/security-review`** è `6d20de4` del 19/10/2026 («load modern-threats.md for frontend reviews»), lo stesso giorno della ricerca del 30/10 [33].
- **Fonte:** il contenuto è `SKILL.md` (304 righe), `SPEC.md`, `LICENSE`, 17 guide in `references/` (fra cui `authorization.md`, `business-logic.md`, `supply-chain.md`, `modern-threats.md`), `languages/javascript.md`, `languages/python.md` e `infrastructure/docker.md`: 292 KB, nessun file eseguibile. `allowed-tools: Read Grep Glob Bash Task` [33].
- **Fonte:** il repository ha licenza Apache-2.0. Il `LICENSE` della cartella dice che le guide derivano dall'OWASP Cheat Sheet Series, con licenza **CC BY-SA 4.0**: chiede la citazione, il link alla licenza, l'indicazione delle modifiche e, per le modifiche, la stessa licenza [33].
- **Fonte:** la skill rimanda ad altre due skill «if available», `django-access-review` e `gha-security-review` (per i flussi di GitHub Actions); stanno nello stesso repository [33].
- **Inferenza:** la copia «a un commit preciso» può usare `6d20de4` o `a582c51`: la cartella è identica. La versione rinominata con la regola in più è una modifica: va dichiarata e resta CC BY-SA 4.0, con la fonte, come già deciso. `gha-security-review` potrebbe servire quando ci saranno i flussi di GitHub Actions, ma è fuori dalla decisione del 1/11 (solo da segnalare).

### `supply-chain-risk-auditor` e `insecure-defaults` di Trail of Bits
- **Fonte:** repository `trailofbits/skills`, commit `149d7b2` del 12/11/2026, licenza CC BY-SA 4.0. Ultima modifica delle due cartelle: 16/9/2026 [34].
- **Fonte:** `insecure-defaults` 2.0.3 **non è più una skill semplice**. È un plugin con il comando `/insecure-defaults:audit` (`allowed-tools: Bash Workflow`) e lo script `workflows/audit.js`, che fa partire un agente Sonnet di ricognizione, 6 agenti Sonnet di ricerca e N agenti **Opus** di verifica [34]. Si installa con `/plugin install` [34].
- **Fonte:** lo strumento `Workflow` di Claude Code esiste: «Runs a dynamic workflow: a script that orchestrates many subagents in the background and returns one consolidated result», con permesso richiesto [36]. I «dynamic workflows» ci sono su tutti i piani a pagamento e con l'API; su Pro si accendono da `/config`; contano nei limiti d'uso; si spengono con `disableWorkflows` o `CLAUDE_CODE_DISABLE_WORKFLOWS=1` [35].
- **Prova:** in questa sessione Claude Code è la 2.1.332. Fra gli strumenti di questo sub-agente `Workflow` non c'è: non si è potuto provare se la sessione principale lo abbia.
- **Fonte:** `supply-chain-risk-auditor` 2.0.4 gira con `uv run` su due script. Legge `package-lock.json`/`npm-shrinkwrap.json`, `uv.lock` e `go.mod`, ma non `yarn.lock`, `pnpm-lock.yaml` né `poetry.lock`. Si collega a OSV, deps.dev, npm, PyPI, il proxy di Go, OpenSSF Scorecard e l'API di GitHub (senza accesso, 60 richieste l'ora). Non installa né esegue le dipendenze [34]. Nella sessione c'è `uv` 0.11.32.
- **Quando servono:** prima del pilota, una volta, come deciso il 1/11/2026 (ARCHITECTURE.md).
- **Inferenza:** dalla sessione cloud l'API di GitHub risponde 403 per i repository non collegati (prova del §3), quindi i criteri sui repository delle dipendenze risulterebbero «non valutabili». Sul computer dell'utente, con `gh` collegato, il controllo è più completo. Se si sceglie pnpm, l'auditor perde il controllo dell'albero completo delle dipendenze.

## 6. Typst e Java per le prove

### Cosa dicono le fonti
- **Fonte:** Typst **0.15.1** è l'ultima etichetta stabile, con licenza Apache-2.0 [37]. Si installa dai programmi già compilati della pagina dei rilasci, con brew, winget, snap, `cargo install --locked typst-cli`, Nix, o con l'immagine Docker `ghcr.io/typst/typst` [37]. `typst update` aggiorna il programma da solo [37].
- **Fonte:** su npm non c'è un pacchetto della squadra di Typst. `typst` è di `typst-community` (versione 0.10.0-8, ferma alla 0.10). `@myriaddreamin/typst-ts-node-compiler` 0.7.0 è di un altro progetto (Apache-2.0) [38].
- **Fonte:** veraPDF funziona «on any Windows, Mac OS or Linux machine that's running Java 8 or later». Si installa da uno zip che contiene un installatore Java, anche senza domande, con un file XML che dice la cartella. La firma GPG si controlla con la chiave `13DD 102B…78B1 7FE7` [39]. Ultima versione: 1.30 (cartella del 9/11/2026) [39].
- **Fonte:** DSS 6.5.1 chiede «Java 8 or higher (tested up to Java 26)» per l'uso; licenza LGPL-2.1 [40]. Eclipse Temurin: ultime LTS 21 e 25; c'è un archivio JRE 21 per Linux da 52 MB, da scompattare senza installare [41].

### Prove nella sessione
| Comando | Esito |
|---|---|
| `curl -L` di `typst-x86_64-unknown-linux-musl.tar.xz` v0.15.1 dai rilasci, poi `tar xJf` in una cartella temporanea | 17 MB; `typst 0.15.1 (9dfd3a08)`; dentro ci sono `LICENSE` Apache-2.0 e `NOTICE` |
| Pagina HTML dei rilasci di Typst | **403** dalla sessione (il download diretto invece funziona); un file di somme dei rilasci non è stato cercato né controllato |
| `typst compile --pdf-standard ua-1` su una ricevuta finta (titolo, lingua `it`, testo inventato) | PDF di 10,7 KB, dichiarato PDF/UA nei metadati |
| Stesso comando con un'immagine senza testo alternativo | si ferma: `PDF/UA-1 error: missing alt text` |
| `docker pull ghcr.io/typst/typst:0.15.1`; `docker run --rm -v <cartella>:/w … compile --pdf-standard ua-1` | riuscito; stesso PDF (10.750 byte); immagine di 95 MB su disco |
| `java -version` | OpenJDK 21.0.13.1 già presente nella sessione |
| Download di `verapdf-gf-installer.zip` e della firma; chiave scaricata in HTTPS da keyserver.ubuntu.com in un portachiavi temporaneo; `gpg --verify` | «Good signature» con l'impronta della guida (con `--recv` dal keyserver non andava: manca `dirmngr`) |
| Installazione senza domande di veraPDF 1.30.4, solo la riga di comando, in una cartella temporanea; `verapdf -f ua1` sul PDF di Typst | `PASS … ua1`; nessun file nuovo nella cartella di casa |
| Indice Maven Central di `dss-validation` | 6.5.1; una prima richiesta ha dato 429, la seconda 200 |

### Inferenze
- **Typst senza installazioni globali:** il programma del rilascio scaricato in una cartella del progetto ignorata da Git, con versione fissata (e somma, se pubblicata: **da verificare**), oppure l'immagine `ghcr.io/typst/typst:<versione>` dove c'è Docker. Va evitato `typst update`, perché sposta la versione. Un pacchetto npm non ufficiale e fermo alla 0.10 non va bene per PDF/UA-1. Come mettere Typst su Scalingo resta del ticket della piattaforma (ARCHITECTURE.md, «Da verificare all'inizio della costruzione»).
- **Java:** nella sessione e sul runner di GitHub c'è già. Sul computer dell'utente basta un JRE Temurin scompattato in una cartella, o l'immagine Docker di veraPDF o di Java (immagini non provate). veraPDF si installa in una cartella senza permessi di amministratore. Il percorso Typst → PDF/UA-1 → veraPDF funziona già nella sessione cloud.

### Cosa resta all'utente
- Sul computer: se accetta Docker (copre PostgreSQL, Typst e Java insieme) o preferisce i programmi scaricati in una cartella del progetto.
- PAC e la prova con uno screen reader vero restano a mano (pdf-ricevute.md).

## Cosa ne segue per il piano

Spunti per i ticket del piano; nessuna decisione presa.
- **Prima cosa del primo incremento di codice:** la dipendenza di sviluppo OCR con `OCR_NO_UPDATE=1` dentro lo script npm, per non avere installazioni globali automatiche. Insieme, la scelta sulla copia della skill (aggiornarla o tenerla al commit `8eb8334`).
- **Un comando per l'ambiente di prova** che accenda Docker se è spento e scarichi `postgres:17` da una fonte che risponde, perché Docker Hub dalla sessione cloud può dare 429. Poi la proposta di uno script di preparazione dell'ambiente cloud, da far approvare all'utente.
- **Il gestore dei pacchetti** (npm o pnpm) tocca `supply-chain-risk-auditor`, che legge solo `package-lock.json`.
- **Dependabot:** `weekly` + `monday` + `time`/`timezone`, `cooldown.default-days: 7`, un gruppo per piccole e medie e uno per le grandi, il flusso con `fetch-metadata` per `semver-patch` e `semver-minor`. È da decidere se i pacchetti `0.x` restano fuori dall'unione automatica.
- **Passi dell'utente su GitHub**, da mettere in una lista: notifiche «Actions» per email; protezione del ramo `main` (o ruleset) con i controlli obbligatori; «Allow auto-merge»; avvisi e aggiornamenti di sicurezza di Dependabot.
- **Prova degli avvisi** (già prevista): un controllo fallito avviato dall'utente, uno del flusso a orario, uno su una proposta di Dependabot, e vedere quali email arrivano davvero.
- **`insecure-defaults`** chiede lo strumento `Workflow` e consuma molto, con agenti Opus. Prima del pilota bisogna controllare che il piano dell'utente lo permetta, nella sessione in cui lo si usa.
- **Typst e veraPDF** si possono mettere nei controlli già dal primo modello di ricevuta: la catena è provata.

## Fonti

Tutte lette il 27/11/2026.

1. Registro npm, `@alibaba-group/open-code-review` (versioni, date, licenza, `postinstall`, dipendenze per piattaforma, firme e provenienza) e `@alibaba-group/ocr-linux-x64`: https://www.npmjs.com/package/@alibaba-group/open-code-review — letto con `npm view`, `npm pack` e `npm audit signatures`.
2. Alibaba, repository `open-code-review`, commit `d4f568f` del 25/11/2026: https://github.com/alibaba/open-code-review — `README.md`, `LICENSE`, `skills/open-code-review-delegate/SKILL.md`, `pages/src/content/docs/en/installation.md`, `review-rules.md`, `telemetry.md`; e, dal pacchetto npm 1.14.4, `bin/ocr.js`, `scripts/install.js` e `scripts/update.js`.
3. Somme del rilascio v1.14.4: https://github.com/alibaba/open-code-review/releases/download/v1.14.4/sha256sum.txt
4. PostgreSQL, «Versioning Policy»: https://www.postgresql.org/support/versioning/
5. PostgreSQL, «Linux downloads (Ubuntu)»: https://www.postgresql.org/download/linux/ubuntu/
6. PostgreSQL, «macOS packages»: https://www.postgresql.org/download/macosx/
7. PostgreSQL, «License»: https://www.postgresql.org/about/licence/
8. PGDG, indice dei pacchetti noble: https://apt.postgresql.org/pub/repos/apt/dists/noble-pgdg/main/binary-amd64/Packages.gz
9. docker-library/postgres, `LICENSE` e `versions.json`: https://raw.githubusercontent.com/docker-library/postgres/master/LICENSE, https://raw.githubusercontent.com/docker-library/postgres/master/versions.json
10. Docker Docs, «Docker Hub pull usage and limits»: https://docs.docker.com/docker-hub/usage/pulls/
11. Docker Docs, «Docker Desktop license agreement»: https://docs.docker.com/subscription/desktop-license/
12. GitHub Docs, «GitHub Actions billing»: https://docs.github.com/en/billing/concepts/product-billing/github-actions
13. GitHub Docs, «Actions limits»: https://docs.github.com/en/actions/reference/limits
14. GitHub Docs, «GitHub-hosted runners»: https://docs.github.com/en/actions/reference/runners/github-hosted-runners
15. actions/runner-images, «Ubuntu 24.04», versione 20261116.376.1: https://raw.githubusercontent.com/actions/runner-images/main/images/ubuntu/Ubuntu2404-Readme.md
16. GitHub Docs, «Creating PostgreSQL service containers»: https://docs.github.com/en/actions/tutorials/use-containerized-services/create-postgresql-service-containers — letta con lo strumento di lettura web.
17. GitHub Docs, «About protected branches»: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
18. GitHub Docs, «About rulesets»: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
19. GitHub Docs, «Notifications for workflow runs»: https://docs.github.com/en/actions/concepts/workflows-and-actions/notifications-for-workflow-runs
20. GitHub Docs, «Managing GitHub Actions notifications»: https://docs.github.com/en/subscriptions-and-notifications/how-tos/managing-github-actions-notifications
21. GitHub Docs, «About notifications»: https://docs.github.com/en/subscriptions-and-notifications/concepts/about-notifications
22. GitHub Docs, «GITHUB_TOKEN»: https://docs.github.com/en/actions/concepts/security/github_token
23. Playwright, «Setting up CI»: https://playwright.dev/docs/ci-intro
24. Playwright, «Browsers»: https://playwright.dev/docs/browsers
25. Playwright, «Docker»: https://playwright.dev/docs/docker
26. Registro npm, `@playwright/test`, `playwright`, `@axe-core/playwright` e `axe-core` (versioni, date, licenze): https://www.npmjs.com/package/@playwright/test, https://www.npmjs.com/package/@axe-core/playwright
27. GitHub Docs, «Dependabot options reference» (`schedule`, `cooldown`, `groups`, `open-pull-requests-limit`): https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference
28. GitHub Docs, «Automating Dependabot with GitHub Actions»: https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions
29. dependabot/fetch-metadata, `README.md`, `LICENSE` ed etichette: https://github.com/dependabot/fetch-metadata
30. GitHub Docs, «Automatically merging a pull request»: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
31. GitHub Docs, «Managing auto-merge for pull requests in your repository»: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
32. GitHub Docs, «Configuring Dependabot security updates»: https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates
33. Sentry, repository `getsentry/skills`, commit `a582c51` (14/11/2026); cartella `skills/security-review`, ultima modifica `6d20de4` (19/10/2026): https://github.com/getsentry/skills/tree/6d20de492725c78e805aa0741507bb90d1982cc7/skills/security-review
34. Trail of Bits, repository `trailofbits/skills`, commit `149d7b2` (12/11/2026): `plugins/insecure-defaults` (2.0.3), `plugins/supply-chain-risk-auditor` (2.0.4), `LICENSE`: https://github.com/trailofbits/skills/tree/149d7b21f4067765b82e67029730b42d228ef4b4/plugins
35. Claude Code Docs, «Orchestrate subagents at scale with dynamic workflows»: https://code.claude.com/docs/en/workflows
36. Claude Code Docs, «Tools reference»: https://code.claude.com/docs/en/tools-reference
37. Typst, `README.md` e rilascio v0.15.1: https://github.com/typst/typst, https://github.com/typst/typst/releases/download/v0.15.1/typst-x86_64-unknown-linux-musl.tar.xz; immagine `ghcr.io/typst/typst:0.15.1`.
38. Registro npm, `typst` (typst-community) e `@myriaddreamin/typst-ts-node-compiler`: https://www.npmjs.com/package/typst, https://www.npmjs.com/package/@myriaddreamin/typst-ts-node-compiler
39. veraPDF, «Installation» e home della documentazione: https://docs.verapdf.org/install/, https://docs.verapdf.org/; rilasci: https://software.verapdf.org/releases/
40. DSS, `README.md`: https://raw.githubusercontent.com/esig/dss/master/README.md; Maven Central, `eu/europa/ec/joinup/sd-dss/dss-validation`: https://repo.maven.apache.org/maven2/eu/europa/ec/joinup/sd-dss/dss-validation/maven-metadata.xml
41. Adoptium API: https://api.adoptium.net/v3/info/available_releases

## Fonti e comandi non riusciti
- `docker pull postgres:17` da Docker Hub: `429 Too Many Requests`, due volte (limite senza account per indirizzo).
- `docker info` all'inizio: demone spento. Acceso a mano con `dockerd` e spento a fine prova.
- API di GitHub (`api.github.com`, `gh api`) per i repository non collegati alla sessione: 403. Pagine HTML di github.com per i rilasci di Typst e per `docker-library/postgres`: 403. Il contenuto è stato letto con `git clone`, `git ls-remote`, `raw.githubusercontent.com` e i link di download diretto, che rispondono.
- `gpg --recv` dal keyserver: manca `dirmngr`; la chiave è stata presa in HTTPS dallo stesso keyserver.
- Maven Central: una richiesta 429, poi 200.
- Avvio del PostgreSQL 17 estratto dai pacchetti PGDG: non provato (serve un utente non root con accesso alla cartella).
- Lo strumento `Workflow` non è disponibile per questo sub-agente: non provato.
- La pagina della copia di Docker su Amazon ECR (`gallery.ecr.aws`) non è stata letta.
