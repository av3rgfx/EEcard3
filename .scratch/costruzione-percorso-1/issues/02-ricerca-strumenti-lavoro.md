# Ricerca: strumenti di lavoro per costruire con gli agenti

Type: research
Status: resolved
Blocked by:
Mappa: [Costruzione del percorso 1: il piano](../map.md)

## Domanda (Question)

Quali strumenti servono a chi costruisce (l'utente con gli agenti, nella sessione cloud di Claude Code o sul computer) e come si ottengono senza installazioni globali automatiche (AGENTS.md). Per ciascuno: cosa dicono le fonti primarie oggi, con data di lettura e link; licenza; cosa si può verificare direttamente nella sessione (senza account e senza cambiare impostazioni); cosa resta all'utente.

1. **OCR (open-code-review):** il programma `ocr` non è installato in questa sessione (verificato il 27/11/2026). Pacchetto, provenienza, licenza, versione; come si aggiunge come dipendenza di sviluppo del progetto e come lo usa la skill `open-code-review-delegate` già presente in `.claude/skills/`.
2. **PostgreSQL 17:** in questa sessione c'è PostgreSQL 16 (client `psql`, server in `/usr/lib/postgresql/16`) e Docker. Modi per avere un PostgreSQL 17 nella sessione cloud, sul computer dell'utente e in GitHub Actions; cosa raggiunge la rete della sessione (immagini Docker, pacchetti apt).
3. **GitHub Actions su repository pubblico:** minuti, servizi PostgreSQL 17 nei job, Playwright e axe; protezione del ramo principale con il piano gratuito; email al proprietario quando un controllo fallisce («Verifica operativa», «Da verificare all'inizio della costruzione»).
4. **Dependabot:** raggruppare gli aggiornamenti il lunedì, attesa di 7 giorni dall'uscita, unione automatica solo delle versioni piccole e medie quando tutti i controlli passano: cosa fa Dependabot da solo e cosa chiede un'azione in più.
5. **Skill di revisione:** la skill `security-review` di Sentry da copiare a un commit preciso (provenienza, licenza CC BY-SA 4.0, ultimo commit, contenuto); `supply-chain-risk-auditor` e `insecure-defaults` di Trail of Bits solo per sapere quando servono (prima del pilota) e quale strumento di Claude Code usa `insecure-defaults`.
6. **Typst e Java per le prove sul computer e nella sessione:** come si ottengono senza installazioni globali (binario nel progetto, pacchetto npm, immagine Docker).

## Risposta (Answer)

Ricerca del 27/11/2026, fonti e prove in [docs/ricerca/inizio-costruzione-strumenti.md](../../../docs/ricerca/inizio-costruzione-strumenti.md). Nessuna decisione presa.
1. **OCR:** `@alibaba-group/open-code-review` 1.14.4 (Apache-2.0, Alibaba), con firma e provenienza verificate; provato come dipendenza di sviluppo in una cartella temporanea, `ocr delegate` funziona sul repository (oggi solo `.md`, quindi niente da rivedere). Il programma di avvio di npm si aggiorna da solo con `npm i -g` ogni 18 minuti: serve `OCR_NO_UPDATE=1`. La skill nel repository di origine è cambiata dal nostro commit `8eb8334`.
2. **PostgreSQL 17** (17.12, fino all'8/11/2029): nella sessione cloud solo con Docker, che va acceso a mano; Docker Hub ha risposto 429, la copia su `public.ecr.aws` ha funzionato (avvio di prova riuscito, poi rimosso). Ubuntu 24.04 non ha la 17, PGDG sì. In Actions un servizio `postgres:17`; sul computer Docker Desktop o un installatore (sistema del computer: dato mancante).
3. **GitHub Actions:** runner standard gratis nei repository pubblici; protezione del ramo con Free. Playwright 1.65.1 con axe 4.14.1 provati nella sessione. L'email del controllo fallito va solo a chi lo ha avviato e se l'ha accesa: non è garantita per le proposte di Dependabot.
4. **Dependabot:** il lunedì, l'attesa di 7 giorni (`cooldown`) e i gruppi li fa da solo; le correzioni di sicurezza passano subito. L'unione automatica chiede un flusso con `fetch-metadata` + `gh pr merge --auto`, «Allow auto-merge» e i controlli obbligatori. Da decidere i pacchetti `0.x`.
5. **Skill:** `security-review` di Sentry invariata dal 19/10/2026 (`6d20de4`), solo istruzioni, CC BY-SA 4.0. `insecure-defaults` è ora un comando di plugin che usa lo strumento `Workflow` di Claude Code (workflow dinamici, piani a pagamento). `supply-chain-risk-auditor` non legge `pnpm-lock.yaml`.
6. **Typst 0.15.1 e Java:** programma del rilascio in una cartella o immagine `ghcr.io/typst/typst`, nessun npm ufficiale; Java 21 già nella sessione. Un PDF/UA-1 inventato fatto da Typst passa veraPDF 1.30.4.
Restano all'utente: notifiche «Actions» per email, protezione del ramo, «Allow auto-merge», aggiornamenti di sicurezza di Dependabot e la scelta per il computer (Docker o programmi in una cartella).
