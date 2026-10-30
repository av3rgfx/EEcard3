# Linguaggio, framework e libreria d'accesso per la piattaforma web

Ricerca del 30 ottobre 2026, fatta nella sessione principale sulle pagine ufficiali (documentazione, registri dei pacchetti, avvisi di sicurezza), tutte lette il 30/10/2026. Serve al ticket [Linguaggio, framework e componenti](../../.scratch/architettura-percorso-1/issues/09-linguaggio-framework-componenti.md), dentro la forma già decisa: applicazione unica su Scalingo con PostgreSQL ([ADR 0001](../adr/0001-applicazione-unica-su-scalingo.md)).

Nessuna installazione, nessun account, nessuna prova eseguita. Non sono stati consultati repository o decisioni di tentativi precedenti. Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Due alternative reali** offrono, in una libreria matura dentro l'applicazione, il codice via email, il codice via SMS e le passkey:
  - **TypeScript con Better Auth**: plugin `emailOTP`, `phoneNumber` e `@better-auth/passkey` (su SimpleWebAuthn) [1][2][3];
  - **Python con Django e django-allauth**: «login by code» via email, accesso con il telefono e passkey (WebAuthn su `fido2` di Yubico) [7][8][9].
- **Scartata Ruby con Rodauth:** l'accesso via email è un link, non un codice, e SMS e WebAuthn sono solo secondo fattore; solo «WebAuthn Login» è un modo di entrare da solo [12]. Il codice via email andrebbe scritto da noi.
- **Maturità.** django-allauth è «Production/Stable», con versioni ogni pochi giorni che correggono anche problemi di sicurezza [9][10]; Django 5.2 LTS ha correzioni di sicurezza fino ad aprile 2028 [11]. Better Auth è nato nel 2024, rilascia ogni pochi giorni, supporta **solo l'ultima versione** e ha **quattro pagine di avvisi di sicurezza**, quasi tutti in parti che non useremmo (SSO, SCIM, OAuth, Stripe) [4][5]. Auth.js, la libreria storica di Next.js, «is now part of Better Auth» e consiglia Better Auth ai progetti nuovi [6].
- **Impostazioni predefinite più larghe delle nostre regole** (6 cifre, 10 minuti, un uso, tentativi limitati per account, un codice nuovo non azzera il conteggio; [ARCHITECTURE.md](../../ARCHITECTURE.md), «Accesso»). In tutte e due le librerie i tentativi sono contati per codice e vanno aggiunti per account con le regole sui limiti [1][2][4][7][10]. Better Auth tiene il codice in chiaro se non si sceglie la versione cifrata o con impronta [1].
- **Memoria su Scalingo.** Contenitore S 256 MB, M 512 MB. Python: 1 processo in S, 2 in M [13]. Node.js: il numero di processi è la memoria divisa per `WEB_MEMORY`, 512 MB predefiniti, quindi uno solo anche in M [14]. La costruzione gira a parte, con 8 GB di memoria e un'immagine fino a 2 GiB [15]: la memoria piccola conta solo mentre la piattaforma è accesa. Nessuna delle fonti dà un consumo misurato dei framework (**Da verificare** con una prova all'inizio della costruzione).
- **Diffusione** (download dell'ultima settimana, 23–29/10/2026, da npm e PyPI): `next` 90,6 milioni, `react-router` 74,1 milioni (comprende l'uso come semplice libreria), `@sveltejs/kit` 4,5 milioni, `better-auth` 17,1 milioni; `django` 12,0 milioni, `django-allauth` 1,6 milioni [16][17]. **Inferenza:** sono le tecnologie più presenti nei dati con cui gli agenti imparano, ma i download non misurano direttamente quanto un agente le conosca.
- **Licenze:** tutte permissive (MIT, BSD, ISC, OFL), salvo **Animate UI**, MIT con Commons Clause: si usa nel prodotto, non si rivendono i componenti [20]. **Watermelon UI**: repository dichiarato MIT, le condizioni rimandano «alle licenze del repository» [21][22].

## 1. Libreria d'accesso

### 1.1 Better Auth (TypeScript)

- **Codice via email (Fonte)** [1]: `otpLength` 6, `expiresIn` 300 secondi, `allowedAttempts` 3 per codice, poi errore `TOO_MANY_ATTEMPTS`. Chi non è registrato viene registrato in automatico, salvo `disableSignUp: true`. `storeOTP` predefinito in chiaro, con le opzioni cifrata o con impronta.
- **Codice via SMS (Fonte)** [2]: stessi valori predefiniti; l'invio lo scrive chi costruisce (`sendOTP`) con il servizio SMS scelto.
- **Passkey (Fonte)** [3]: pacchetto `@better-auth/passkey`, «powered by SimpleWebAuthn»; registrazione, accesso, elenco, rinomina e cancellazione, compilazione automatica del browser. Nessuna etichetta «experimental».
- **Limiti alle richieste (Fonte)** [4]: attivi in produzione, 100 richieste in 10 secondi in memoria; regole più strette per percorso e archivio nel database.
- **Database (Fonte)** [19]: PostgreSQL con il driver `pg`, tabelle create dal suo programma `auth migrate`.
- **Versioni (Fonte)** [5]: ultima stabile 1.7.14 del 26/10; 1.8 in prova. Licenza MIT [18].
- **Sicurezza (Fonte)** [5]: politica pubblica, risposta entro 72 ore, solo l'ultima versione supportata. Fra settembre e giugno 2026 avvisi critici e alti soprattutto in OAuth, SSO, SCIM e Stripe; uno alto del 26/6/2026 sull'accesso con codice: la password restava valida dopo l'accesso con il codice. **Inferenza:** senza password e senza quei plugin, gli avvisi letti non toccano la nostra configurazione, ma il ritmo obbliga ad aggiornare spesso.
- **SimpleWebAuthn (Fonte)** [23]: MIT; un manutentore principale, non accetta contributi esterni; richiede Node LTS 22 o successivo.

### 1.2 django-allauth (Python)

- **Codice via email (Fonte)** [7]: `ACCOUNT_LOGIN_BY_CODE_ENABLED`, scadenza predefinita 180 secondi, 3 tentativi, nuovo codice spento salvo `ACCOUNT_LOGIN_BY_CODE_SUPPORTS_RESEND`.
- **Telefono (Fonte)** [8]: accesso con il telefono e verifica, 3 tentativi, 15 minuti predefiniti. Il modello del numero, l'invio dell'SMS e la ricerca dell'utente per numero li scrive chi costruisce.
- **Passkey (Fonte)** [9b]: `MFA_PASSKEY_LOGIN_ENABLED` e `MFA_PASSKEY_SIGNUP_ENABLED` con `"webauthn"` fra i tipi; libreria `fido2`. Nessuna etichetta «experimental».
- **Limiti (Fonte)** [10]: predefiniti, fra cui accesso 30 al minuto per indirizzo, accessi falliti 10 al minuto per indirizzo e 5 ogni 5 minuti per account.
- **Versioni e sicurezza (Fonte)** [9]: 65.21.1 del 30/10/2026; nelle ultime cinque versioni (1–30/10) correzioni su limiti, passkey e telefono. Licenza MIT, «5 - Production/Stable» [9c].
- **Django (Fonte)** [11]: 5.2 LTS fino ad aprile 2028; 6.1 fino a dicembre 2027; 6.2 LTS prevista ad aprile 2027.
- **fido2 (Fonte)** [24]: BSD 2-clause, con due file sotto Apache 2.0 e MPL 2.0; mantenuta da Yubico.

### 1.3 Rodauth (Ruby), scartata

**Fonte** [12]: «Email Authentication» manda un link; «SMS Codes» e «WebAuthn» sono secondo fattore; «WebAuthn Login» è l'accesso senza password con la passkey. Versione 2.49.0, licenza MIT. **Inferenza:** il codice di 6 cifre via email, deciso per i clienti, va scritto da noi: è il codice delicato che la libreria doveva toglierci.

## 2. Framework e schermate

- **Le schermate del pacchetto chiedono codice nel browser in ogni caso** (**Inferenza**, da [DESIGN.md](../../DESIGN.md), «Interazioni e stati (percorso 1)»): passkey (API WebAuthn), «Annulla» per 8 secondi, fascia «Sei senza connessione», bozze non perse, barra di avanzamento del file, controllo dell'esito incerto. Con Python sul server il browser resta in JavaScript: i linguaggi diventano due. Con TypeScript è uno solo.
- **React Router, modalità framework (Fonte)** [25]: pagine fatte dal server; link e moduli funzionano anche prima che arrivi il JavaScript; «100% of your users have slow connections 5% of the time». Versione 8.5.1. Better Auth ha una guida ufficiale per React Router v7, «successor to Remix» [30].
- **Next.js (Fonte)** [26]: moduli con le Server Actions; ogni azione deve controllare da sola accesso e permessi, anche se la pagina è protetta. Supporto alla rete assente (`useOffline`) ancora sperimentale.
- **Next.js e i componenti server (Fonte)** [27]: il 3/12/2025 un difetto critico nei componenti server di React (CVE-2025-55182) permetteva di eseguire codice sul server senza accesso; aggiornamento immediato per Next.js 15 e 16. **Inferenza:** più pezzi del framework girano sul server, più spesso serve aggiornare in fretta.
- **Next.js su Scalingo (Fonte)** [14]: un'immagine costruita può superare 500 MB; si consiglia l'uscita «standalone».
- **Django:** pagine dal server con i suoi modelli di pagina; migrazioni, moduli e protezione CSRF inclusi (**Inferenza**, non riletto per questa ricerca).

## 3. Componenti

- **shadcn/ui (Fonte)** [28][29]: MIT; componenti copiati nel progetto, per Next.js, Vite, TanStack Start, Laravel, React Router e Astro. Richiede React e Tailwind.
- **Animate UI (Fonte)** [20]: MIT con Commons Clause: «as part of an application, website, or product», purché non si vendano o ridistribuiscano i componenti come sono.
- **Watermelon UI (Fonte)** [21][22]: «free for the community»; le condizioni dicono di usare i componenti «in line with the relevant repository licenses and terms»; il repository della piattaforma è dichiarato MIT, distribuito come voci di shadcn da copiare. **Da verificare:** il testo del file LICENSE e se i componenti hanno condizioni diverse.
- **Manrope e Lucide:** OFL 1.1 e ISC, già letti in [licenze-grafiche.md](licenze-grafiche.md).
- **Testo che segue il telefono:** con `font: -apple-system-body` sulla radice e misure relative il testo web segue Dynamic Type su iPhone ([hig-web.md](hig-web.md), WebKit 2015). Non dipende dal framework (**Inferenza**); resta la prova su un iPhone vero.

## Cosa resta da verificare

- Memoria reale a riposo e sotto carico del framework scelto in un contenitore S o M: prova all'inizio della costruzione, con dati inventati.
- Testo del file LICENSE di Watermelon UI, se la si sceglie.
- Data dell'ultima versione di `fido2` e di SimpleWebAuthn (le pagine lette non la mostrano).
- La guida di Better Auth per React Router è scritta per la versione 7; l'ultima è la 8.5.1 [25][30].

## Fonti (lette il 30/10/2026)

1. Better Auth, Email OTP: https://www.better-auth.com/docs/plugins/email-otp
2. Better Auth, Phone Number: https://www.better-auth.com/docs/plugins/phone-number
3. Better Auth, Passkey: https://www.better-auth.com/docs/plugins/passkey
4. Better Auth, Rate Limit: https://www.better-auth.com/docs/concepts/rate-limit
5. Better Auth, Releases e Security: https://github.com/better-auth/better-auth/releases; https://github.com/better-auth/better-auth/security
6. Auth.js (next-auth), README: https://github.com/nextauthjs/next-auth
7. django-allauth, Account configuration: https://docs.allauth.org/en/latest/account/configuration.html
8. django-allauth, Phone: https://docs.allauth.org/en/latest/account/phone.html
9. django-allauth, Release notes: https://docs.allauth.org/en/latest/release-notes/recent.html; 9b. MFA configuration: https://docs.allauth.org/en/latest/mfa/configuration.html; 9c. PyPI: https://pypi.org/project/django-allauth/
10. django-allauth, Rate limits: https://docs.allauth.org/en/latest/account/rate_limits.html
11. Django, Download e versioni supportate: https://www.djangoproject.com/download/
12. Rodauth, Documentation: https://rodauth.jeremyevans.net/documentation.html
13. Scalingo, Python: https://doc.scalingo.com/languages/python/start
14. Scalingo, Node.js: https://doc.scalingo.com/languages/nodejs/start
15. Scalingo, Deployment limits: https://doc.scalingo.com/platform/deployment/limits
16. npm, download settimanali: https://api.npmjs.org/downloads/point/last-week/next (e `react-router`, `@sveltejs/kit`, `better-auth`, `@simplewebauthn/server`)
17. PyPI Stats: https://pypistats.org/api/packages/django/recent; https://pypistats.org/api/packages/django-allauth/recent
18. Better Auth, LICENSE: https://github.com/better-auth/better-auth/blob/main/LICENSE.md
19. Better Auth, PostgreSQL: https://www.better-auth.com/docs/adapters/postgresql
20. Animate UI, LICENSE: https://github.com/imskyleen/animate-ui/blob/main/LICENSE.md
21. Watermelon UI, pagina principale e condizioni: https://ui.watermelon.sh/; https://ui.watermelon.sh/terms
22. Watermelon, repository della piattaforma: https://github.com/WatermelonCorp/watermelon-platform
23. SimpleWebAuthn, repository: https://github.com/MasterKale/SimpleWebAuthn
24. python-fido2, repository: https://github.com/Yubico/python-fido2
25. React Router, Progressive Enhancement: https://reactrouter.com/explanation/progressive-enhancement
26. Next.js, Forms (aggiornata il 6/10/2026): https://nextjs.org/docs/app/guides/forms
27. Vercel, CVE-2025-55182 (3/12/2025): https://vercel.com/changelog/cve-2025-55182
28. shadcn/ui, Installation: https://ui.shadcn.com/docs/installation
29. shadcn/ui, LICENSE: https://github.com/shadcn-ui/ui/blob/main/LICENSE.md
30. Better Auth, React Router: https://www.better-auth.com/docs/integrations/react-router
