# Verifica operativa: database, controlli, aggiornamenti, lavori programmati e avvisi

Ricerca del 31 ottobre e 1 novembre 2026, svolta dalla sessione del ticket [Verifica operativa del percorso 1](../../.scratch/architettura-percorso-1/issues/16-verifica-operativa.md). Pagine ufficiali scaricate con `curl` e lette come testo; versioni dei pacchetti lette dal registro npm. Nulla è stato installato, nessun account aperto, nessun servizio provato. Nessun repository dei tentativi precedenti consultato.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## 1. Scalingo

### 1.1 Lavori programmati [1][2]
- **Fonte:** il programmatore (Scalingo Scheduler) si accende con un file `cron.json` alla radice; ogni lavoro gira in un contenitore temporaneo, di misura M (512 MiB) se non si dice altro. Ore sempre in UTC; niente forme `@daily`.
- **Fonte:** limiti: intervallo minimo 10 minuti; al massimo 5 lavori; nessun lavoro oltre 12 ore né oltre il suo intervallo; ritardo fino al 10% dell'intervallo (fino a 20 minuti: un lavoro a mezzanotte parte fra 00:00 e 00:20 UTC). «Task execution is expected but not guaranteed»: raramente un giro salta. Due giri dello stesso lavoro possono sovrapporsi per poco.
- **Fonte:** il programmatore è gratis; si paga il contenitore temporaneo al minuto. I registri dei lavori stanno con gli altri registri dell'applicazione. Nessun evento di avviso dedicato al lavoro fallito o saltato compare nell'elenco degli eventi [3].
- **Fonte:** le review app hanno gli stessi lavori programmati dell'applicazione madre [1].
- **Fonte:** l'alternativa senza questi limiti è un processo «orologio» sempre acceso, scritto da noi [2]. Un contenitore S costa circa 7,20 € e uno M circa 14,40 € ogni 30 giorni, IVA esclusa [12].
- **Inferenza:** un lavoro M di 2 minuti al giorno costa pochi centesimi al mese. Un lavoro che fa «tutto il dovuto non ancora fatto» ed è sicuro se gira due volte regge sia i giri saltati sia le sovrapposizioni.

### 1.2 Avvisi [3][4]
- **Fonte:** ogni app ha un avvisatore predefinito che manda per email al titolare gli avvisi critici; Scalingo lo aggiorna con i nuovi avvisi critici e consiglia di tenerlo acceso. Canali possibili: email, Slack, webhook, Rocket.Chat, Mattermost.
- **Fonte:** eventi utili per noi: `app_crashed` (inviato al 2°, 5° e 12° blocco), `app_crashed_repeated`, `database_backup_failed`, `database_continuousbackup_delayed` (punto di ripristino più vecchio di 12 ore), `database_continuousbackup_stale` (più di 24 ore), `database_maintenance_planned`/`started`/`completed`/`missed`, `app_deployed`, `app_alert_triggered`, `collaborator_invited`, `variable_edited`.
- **Fonte:** avvisi su soglie: per tipo di contenitore, su CPU, RAM, swap (in via di dismissione), tempo di risposta al 95° percentile, errori 5xx, richieste al minuto; scattano se la condizione dura il tempo scelto.
- **Inferenza:** Scalingo non può avvisare se è Scalingo stesso a non rispondere, né se un lavoro programmato salta: serve un controllo da fuori.

### 1.3 Registri [5][6]
- **Fonte:** registri dell'applicazione (ciò che scrive su stdout e stderr), dei database e, se accesi, del router (spenti per impostazione). Oltre 50 MiB passano in archivio scaricabile. Limiti: 16.384 righe e 64 MiB al minuto per contenitore.
- **Fonte:** «all logs on Scalingo are kept for 1 year», per LCEN e raccomandazione CNIL 2021 sulla registrazione degli accessi.
- **Fonte:** i registri si possono inoltrare a servizi esterni (log drain): Elastic ospitato da Scalingo, AppSignal, Better Stack, Datadog, Graylog, New Relic, Papertrail, syslog.
- **Inferenza:** la durata di 1 anno è fissa e va detta al parere privacy; nei registri non devono finire dati personali.

### 1.4 Pubblicazione, migrazioni e ritorno indietro [7][8][9][10][11]
- **Fonte:** con il collegamento a GitHub e la pubblicazione automatica di un ramo, «We will always wait that all these tools succeed before deploying your app» (GitHub Actions compreso) [7].
- **Fonte:** la pubblicazione avvia i nuovi contenitori, aspetta che rispondano, poi esegue il comando `postdeploy` del Procfile in un contenitore M; se fallisce, la pubblicazione si ferma con `hook-error` e resta la versione di prima. Durante il comando risponde ancora la versione vecchia. Limite: 20 minuti. L'esempio ufficiale è proprio la migrazione del database, con l'avvertenza che le migrazioni possono fallire [8][9].
- **Fonte:** si torna indietro ripubblicando un commit precedente; se la nuova versione ha cambiato il database, la versione vecchia può non funzionare più, ed è meglio correggere in avanti [10].
- **Fonte:** le pagine d'errore si personalizzano con variabili d'ambiente (`SCALINGO_APP_ERROR_URL` per 502 o blocco, `SCALINGO_TIMEOUT_ERROR_URL` per 504, `SCALINGO_STOPPED_PAGE_URL` ad app ferma…), una pagina semplice di al massimo 10 MB, tenuta in memoria dal router; serve un riavvio [11].
- **Da verificare:** dove ospitare la pagina d'errore fissa (deve restare raggiungibile quando l'app è ferma), alla costruzione.

### 1.5 Review app [13]
- **Fonte:** un'app temporanea per ogni proposta di modifica, che copia contenitori, variabili, componenti aggiuntivi (non il loro contenuto) e collaboratori. Scalingo raccomanda di non accenderle sull'app di produzione, ma su una seconda app collegata allo stesso repository.

### 1.6 PostgreSQL [14][15][16]
- **Fonte:** versione predefinita alla creazione: l'ultima 17; disponibili 14–18, ciascuna sostenuta per 3 anni (la 17 fino a novembre 2029).
- **Fonte:** piano Starter: un solo nodo, senza alta disponibilità, SLA 98%; connessioni: 60 per GB di RAM sulle risorse condivise; un solo database per componente; il ripristino a un momento passato apre una nuova linea temporale.
- **Fonte:** timeout del proxy davanti al database: cliente inattivo 1 giorno, server inattivo 30 minuti.

## 2. Strumento del database

Versioni e date lette dal registro npm il 31/10/2026 [17].

| | Versione stabile | Note |
|---|---|---|
| **Drizzle ORM / drizzle-kit** | 0.45.4 (8/10/2026) / 0.31.11 (21/9/2026); la 1.0 è in RC (rc.5 del 21/10/2026) | Schema in TypeScript; `drizzle-kit generate` scrive le migrazioni in SQL; `--custom` crea una migrazione vuota per SQL scritto a mano (trigger, dati) [18]; `drizzle-kit check` controlla la coerenza della storia delle migrazioni [19]. La guida al passaggio alla 1.0 cambia la cartella delle migrazioni e si fa con `drizzle-kit up` [20]. |
| **Kysely** | 0.29.7 (17/10/2026) | Già dipendenza di Better Auth (`^0.28.17 \|\| ^0.29.0`). Migrazioni scritte a mano in TypeScript (`up`/`down`), da tenere «ferme nel tempo» [21]; i tipi delle tabelle si scrivono o si generano a parte. |
| **Prisma** | `@prisma/client` 7.10.1 (15/10/2026); il tag `latest` di `prisma` punta a 8.0.0-rc.29 (30/10/2026) | Il registro delle novità dice Prisma 8 disponibile come `prisma@latest` dal 28/8/2026, con molte novità [22]. |

- **Fonte:** Better Auth 1.7.14 accetta `drizzle-orm ^0.45.2 || >=1.0.0-rc.1 <2.0.0` e `prisma ^5 || ^6 || ^7` [17]; con PostgreSQL usa Kysely dentro, e la sua riga di comando genera o applica lo schema [23][24].
- **Inferenza:** Drizzle tiene la descrizione dei dati in un solo posto e genera il resto; Kysely non aggiunge pacchetti ma lascia due posti da tenere allineati; Prisma è nel mezzo di un cambio di versione non ancora coperto da Better Auth.

## 3. Strumenti di prova (registro npm, 31/10/2026) [17]

Vitest 5.0.5 (15/10/2026); @playwright/test 1.64.1 (14/10/2026); @axe-core/playwright 4.14.0 (15/10/2026); fast-check 4.10.2 (19/9/2026); TypeScript 7.0.2 (8/7/2026); ESLint 10.14.0 (30/10/2026); React Router 8.5.1 (27/10/2026); pg 8.23.1 (30/9/2026). Sono numeri del giorno, non scelte: le versioni si fissano all'inizio della costruzione.

## 4. GitHub

- **Fonte:** i runner standard di GitHub sono gratis nei repository pubblici; per i privati il piano Free include 12 $ di calcolo al mese, cioè circa 2.000 minuti Linux a 0,006 $ al minuto [25].
- **Fonte:** la protezione dei rami è disponibile nei repository pubblici con GitHub Free; nei privati solo con Pro, Team o Enterprise [26].
- **Fonte:** la protezione per utente dall'invio di segreti è accesa per impostazione e blocca l'invio di segreti riconosciuti verso i repository pubblici [27].
- **Fonte:** i flussi programmati (`schedule`): intervallo minimo 5 minuti, UTC per impostazione; possono ritardare nelle ore di punta, soprattutto all'inizio dell'ora, e «some queued jobs may be dropped»; in un repository pubblico si spengono dopo 60 giorni senza attività; le notifiche vanno a chi ha creato il flusso o a chi ne ha cambiato l'orario per ultimo [28][29].
- **Fonte:** Dependabot: `cooldown` ritarda gli aggiornamenti di versione di un numero di giorni (3 per impostazione) e non vale per gli aggiornamenti di sicurezza; `groups` riunisce più aggiornamenti in una proposta [30]. L'unione automatica si costruisce con un flusso che legge i metadati dell'aggiornamento (`dependabot/fetch-metadata`); la guida mostra l'esempio per le patch e consiglia di richiedere i controlli prima dell'unione [31].
- **Inferenza:** con il repository pubblico i controlli completi a ogni modifica, la protezione del ramo principale e il controllo da fuori ogni 30 minuti costano zero. Le unioni settimanali di Dependabot tengono vivo il repository, così il controllo programmato non si spegne.

## 5. Cosa resta da verificare all'inizio della costruzione
- Che l'email di GitHub per il controllo fallito arrivi davvero all'utente (dipende da chi è l'autore del flusso e dalle sue impostazioni di notifica): prova degli avvisi.
- L'unione automatica dei medi (`semver-minor`) con lo stesso campo dell'esempio per le patch [31] (inferenza, non letta come esempio).
- Dove ospitare la pagina d'errore fissa di Scalingo.
- Se esce Drizzle 1.0 stabile prima della costruzione, partire da quella; altrimenti dalla 0.45 e passare con `drizzle-kit up`.
- `insecure-defaults` usa lo strumento `Workflow` di Claude Code, non trovato nella documentazione letta il 30/10 ([skill-sicurezza-sviluppo.md](skill-sicurezza-sviluppo.md)).

## Fonti

Lette il 31/10/2026, salvo [11] e [27] lette il 1/11/2026.

1. Scalingo, [Scalingo Scheduler](https://doc.scalingo.com/platform/app/task-scheduling/scalingo-scheduler), aggiornata il 24/2/2026.
2. Scalingo, [Custom Clock Processes](https://doc.scalingo.com/platform/app/task-scheduling/custom-clock-processes).
3. Scalingo, [App Notifiers](https://doc.scalingo.com/platform/app/notification), aggiornata il 29/6/2026.
4. Scalingo, [Alerts About Application Metrics](https://doc.scalingo.com/platform/app/alerts), aggiornata il 5/5/2026.
5. Scalingo, [Logs](https://doc.scalingo.com/platform/app/logs), aggiornata il 23/9/2026.
6. Scalingo, [Log Drains](https://doc.scalingo.com/platform/app/log-drain).
7. Scalingo, [SCM Integration, Auto Deploy and Review Apps](https://doc.scalingo.com/platform/app/scm-integration), aggiornata il 28/8/2026; [Deploy with GitHub](https://doc.scalingo.com/platform/deployment/deploy-with-github).
8. Scalingo, [Post-deployment hook](https://doc.scalingo.com/platform/app/postdeploy-hook), aggiornata il 28/8/2026.
9. Scalingo, [Deployment Process](https://doc.scalingo.com/platform/deployment/deployment-process).
10. Scalingo, [Rollback](https://doc.scalingo.com/platform/app/rollback).
11. Scalingo, [Custom Error and Maintenance Pages](https://doc.scalingo.com/platform/app/custom-error-page), aggiornata il 9/10/2026.
12. Scalingo, [Pricing](https://scalingo.com/pricing): contenitori S 7,20 €, M 14,40 € ogni 30 giorni, IVA esclusa.
13. Scalingo, [Review Apps](https://doc.scalingo.com/platform/app/review-apps), aggiornata il 9/10/2026.
14. Scalingo, [Scalingo for PostgreSQL Overview](https://doc.scalingo.com/databases/postgresql/about/overview), aggiornata il 5/10/2026.
15. Scalingo, [PostgreSQL Features](https://doc.scalingo.com/databases/postgresql/about/features).
16. Scalingo, [PostgreSQL Limitations](https://doc.scalingo.com/databases/postgresql/about/limitations).
17. Registro npm (`registry.npmjs.org/<pacchetto>`): drizzle-orm, drizzle-kit, prisma, @prisma/client, kysely, better-auth 1.7.14 (dipendenze e dipendenze tra pari), vitest, @playwright/test, @axe-core/playwright, fast-check, typescript, eslint, react-router, pg.
18. Drizzle, [Custom migrations](https://orm.drizzle.team/docs/kit-custom-migrations).
19. Drizzle, [drizzle-kit check](https://orm.drizzle.team/docs/drizzle-kit-check).
20. Drizzle, [Upgrading to Drizzle v1](https://orm.drizzle.team/docs/upgrade-v1); [Migrations](https://orm.drizzle.team/docs/migrations).
21. Kysely, [Migrations](https://kysely.dev/docs/migrations).
22. Prisma, [Changelog](https://www.prisma.io/changelog), voci dal 9/7 al 28/8/2026.
23. Better Auth, [PostgreSQL](https://www.better-auth.com/docs/adapters/postgresql).
24. Better Auth, [Drizzle adapter](https://www.better-auth.com/docs/adapters/drizzle); [CLI](https://www.better-auth.com/docs/concepts/cli).
25. GitHub Docs, [GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions).
26. GitHub Docs, [About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).
27. GitHub Docs, [About push protection](https://docs.github.com/en/code-security/concepts/secret-security/about-push-protection).
28. GitHub Docs, [Events that trigger workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows), sezione `schedule`.
29. GitHub Docs, [Notifications for workflow runs](https://docs.github.com/en/actions/concepts/workflows-and-actions/notifications-for-workflow-runs).
30. GitHub Docs, [Dependabot options reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference), `cooldown` e `groups`.
31. GitHub Docs, [Automating Dependabot with GitHub Actions](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions), letta tramite lo strumento di lettura web.
