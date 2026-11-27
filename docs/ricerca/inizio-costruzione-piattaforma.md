# Inizio della costruzione: verifiche sulla piattaforma e sui servizi

Ricerca del 27 novembre 2026, svolta con la skill `research` per il ticket [Ricerca: verifiche d'inizio sulla piattaforma e sui servizi](../../.scratch/costruzione-percorso-1/issues/01-ricerca-piattaforma-servizi.md). Risponde alle 12 voci «da verificare all'inizio della costruzione» di [ARCHITECTURE.md](../../ARCHITECTURE.md).

**Come si è letto.** Sono state lette pagine pubbliche di documentazione (con `curl` o con lo strumento di lettura web, che riassume la pagina con un modello: dove è stato usato è detto nelle fonti), i file della documentazione nei repository ufficiali (`raw.githubusercontent.com`), il registro npm e Maven Central. Per Better Auth sono stati scaricati i pacchetti pubblicati su npm (1.7.28) e **letto** il codice, senza eseguirlo. Il programma Typst 0.15.1 è stato scaricato solo per misurarne il peso, senza eseguirlo. Nessun account aperto, nessun messaggio inviato, nessuna richiesta a servizi diversi dalla lettura di pagine pubbliche. Nessun repository dei tentativi precedenti consultato. Non sono state fatte prove: dove una prova serve, è indicata.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da provare** = va verificato con una prova vera (dove è scritto). Tutte le fonti sono state lette il **27/11/2026**; la data dell'ultimo aggiornamento della pagina, quando c'è, è nell'elenco delle fonti.

## 1. Better Auth con React Router 8

**Fonte.**
- La guida d'integrazione di Better Auth si intitola ancora «React Router v7 Integration» [1]. Il metodo è un percorso di risorsa `api/auth/*` il cui `loader` e la cui `action` passano la richiesta a `auth.handler(request)`; il client viene da `better-auth/react` [1].
- Versioni: Better Auth **1.7.28** del 24/11/2026 (`latest`), con una 1.8 in beta; React Router **8.5.3** del 24/11/2026; la linea 7 riceve ancora correzioni (7.18.7 dello stesso giorno) [2][3].
- Le dipendenze dichiarate da Better Auth 1.7.28 accettano React 18 o 19 e non nominano React Router: l'integrazione passa solo dalla richiesta web standard [2]. Il plugin delle passkey è un pacchetto a parte, `@better-auth/passkey` 1.7.28, che usa `@simplewebauthn/server` ^13.3.2 e `@simplewebauthn/browser` ^13.3.0 [2]; la versione più recente di SimpleWebAuthn è la 14.1.0 [2]. I plugin del codice via email (`plugins/email-otp`) e via SMS (`plugins/phone-number`) sono nel pacchetto principale [2].
- L'adattatore Drizzle (`@better-auth/drizzle-adapter` 1.7.28) accetta `drizzle-orm` ^0.45.2 oppure da 1.0.0-rc.1 in su; per le relazioni «v2» di Drizzle c'è un ingresso a parte, `@better-auth/drizzle-adapter/relations-v2` [2][4].
- Le novità di React Router 8 (17/6/2026): Node 22.22 o successivo, React 19.2.7 o successivo, Vite 7; pacchetti solo ESM; tolto `react-router-dom`; middleware sempre acceso e `context` sempre un `RouterProvider`; **la richiesta originale arriva sempre così com'è a `loader` e `action`** (per l'indirizzo normalizzato c'è `url`) [5].

**Inferenza.** Nulla di ciò che cambia in React Router 8 tocca il modo in cui Better Auth si aggancia: un percorso di risorsa che riceve una `Request` standard e risponde con una `Response`. Il passaggio della richiesta originale è, semmai, ciò che Better Auth si aspetta. Le versioni di Node disponibili su Scalingo (22, 24, 26) rispettano il minimo (§4). Il rischio residuo è nei dettagli (tipi generati `Route.LoaderArgs`, cookie impostati dalla risposta, client nel browser), che solo un'app vera mostra. SimpleWebAuthn resta alla 13 finché Better Auth non cambia: non è un difetto, ma Dependabot non potrà portarla alla 14 da solo.

**Da provare (sul computer o nella sessione cloud, gratis).** Un'app minima React Router 8 + Better Auth 1.7 + Drizzle 0.45 + PostgreSQL 17, con i tre plugin: entrata con il codice email, con il codice SMS (verso la finta), con la passkey (nel browser della sessione con un autenticatore virtuale, per esempio quello di Playwright), uscita, `getSession` nel `loader` di una pagina protetta. Sono già i test previsti per le regole dell'accesso, quindi la prova coincide con il primo incremento.

**Se la risposta è negativa.** React Router 7 riceve ancora correzioni (7.18.7 del 24/11/2026) ed è la versione per cui è scritta la guida: si parte dalla 7 con i flag `v8_*` accesi e si passa alla 8 dopo. Il prossimo cambio grande è atteso intorno a maggio 2027, con la fine di Node 22 [5].

## 2. Better Auth, «Ferma l'accesso»: dove si rifiuta ogni sessione

**Fonte.**
- Documentazione: i `databaseHooks` hanno un passo «before» per `create` di `user`, `session`, `account` e `verification`; «se il passo restituisce `false` l'operazione si interrompe»; per fermarla con un errore chiaro si lancia un `APIError` di `better-auth/api` [6].
- Codice di Better Auth 1.7.28 (letto nel pacchetto npm) [2]: ogni nuova sessione passa da `internalAdapter.createSession`, che chiama `createWithHooks(…, "session")`, cioè proprio il passo `session.create.before`; se il passo restituisce `false`, `createSession` restituisce `null`.
- Chi chiama `createSession` nei pezzi che useremo: entrata con il codice email (`/sign-in/email-otp`), verifica dell'email con entrata automatica, entrata con il codice SMS e verifica del numero (`/phone-number/verify`, salvo `disableSession`), **entrata con la passkey** e registrazione della passkey con `createSession: true`; nel nucleo anche entrata con password, registrazione, verifica dell'email e cambio dell'utente [2].
- Come reagiscono a `null`: passkey e SMS controllano e rispondono con un errore («unable to create session» / «failed to create session»); **l'entrata con il codice email non controlla** e passa `null` a `setSessionCookie` [2].

**Inferenza.** Il punto unico c'è: `databaseHooks.session.create.before`, che vale per tutti i modi di entrare, passkey comprese. Conviene **lanciare un `APIError`** invece di restituire `false`: così ogni percorso, compreso il codice email, risponde con lo stesso errore controllato invece di un probabile errore interno. Il passo vale solo per le sessioni *nuove*: le sessioni già aperte vanno chiuse al momento del blocco (è già previsto in «Accesso»). Il codice letto può cambiare a ogni versione: per questo servono i due test chiesti da ARCHITECTURE.md (codice e passkey), più uno per il codice SMS.

**Da provare (sul computer o nella sessione cloud, gratis).** Test automatici: persona bloccata → entrata con codice email, codice SMS e passkey rifiutate con lo stesso errore, nessuna riga nuova nella tabella delle sessioni; sessioni esistenti chiuse dal blocco; dopo «Riapri» le passkey cancellate e l'entrata col codice di nuovo possibile.

**Se la risposta è negativa** (per esempio una versione futura che crea sessioni senza il passo): il controllo si sposta nel guardiano, che a ogni richiesta rifiuta la sessione di una persona bloccata. Costa una lettura in più a richiesta, ma il blocco tiene comunque.

## 3. Better Auth dietro il proxy di Scalingo: l'indirizzo vero

**Fonte.**
- Better Auth legge l'indirizzo del cliente dalle intestazioni elencate in `advanced.ipAddress.ipAddressHeaders`, predefinita `x-forwarded-for`. Senza `trustedProxies` accetta l'intestazione solo se contiene **un solo** indirizzo; con `trustedProxies` legge da destra e salta gli indirizzi dei proxy elencati [7][8][2].
- La guida dei limiti: «un proxy mette l'indirizzo in una sua intestazione» → `ipAddressHeaders` con solo quella; «i proxy aggiungono a `X-Forwarded-For`» → `trustedProxies` con gli indirizzi esatti; il proxy deve **sostituire** ogni valore mandato dal cliente [8].
- Codice: se l'indirizzo non si trova, il limitatore usa **un solo contatore per percorso condiviso da tutti** e scrive un avviso nei registri [2].
- Scalingo: i proxy di ingresso «aggiungono o aggiornano» `X-Real-IP` («l'indirizzo IP d'origine del cliente che si collega a Scalingo») e `X-Forwarded-For` (stessa descrizione), più `X-Forwarded-Proto`, `X-Forwarded-Port`, `X-Request-ID` e `X-Request-Start`. Dietro il router il traffico arriva all'app in HTTP/1.1 [9]. Gli indirizzi interni dei proxy non sono pubblicati [9].

**Inferenza.** La pagina di Scalingo non dice se un `X-Forwarded-For` mandato dal cliente viene **sostituito** o **allungato**. Se viene sostituito (un solo indirizzo), la configurazione predefinita funziona; se viene allungato, Better Auth non trova l'indirizzo e tutti i clienti finiscono nello stesso contatore, con il rischio che uno blocchi tutti. `trustedProxies` non si può compilare, perché gli indirizzi dei proxy non sono pubblici: la strada probabile è `ipAddressHeaders: ["x-real-ip"]`, **se** la prova mostra che Scalingo lo sostituisce sempre.

**Da provare (solo su Scalingo, con l'app temporanea: serve l'autorizzazione dell'utente).** Una pagina di prova che scrive nei registri le due intestazioni, chiamata una volta normalmente e una volta con `X-Forwarded-For` e `X-Real-IP` finti mandati dal cliente. Il comportamento di Better Auth con le intestazioni si prova invece sul computer con test automatici. Su Scalingo i registri restano 1 anno: la pagina di prova va tolta subito dopo e non deve stare in produzione.

**Costo.** Nessuno in più se si usa l'app temporanea già prevista per le passkey su iPhone (circa 14 € al mese finché resta accesa) o la prova gratuita di 30 giorni di Scalingo (serve comunque un metodo di pagamento; 1 app, contenitori S o M) [10].

**Se la risposta è negativa** (nessuna delle due intestazioni è affidabile): si chiede a Scalingo quali sono gli indirizzi dei suoi proxy, oppure i limiti per indirizzo restano un contatore comune e contano soprattutto i limiti per persona già decisi (conservati nel database).

## 4. Memoria: contenitori S e M, lavoro notturno, Node.js

**Fonte.**
- Scalingo: S = 256 MB di memoria (swap 64 MB), priorità CPU bassa, al massimo 128 processi; M = 512 MB (swap 128 MB), priorità standard, 256 processi; L = 1024 MB. Il predefinito è M [11].
- **Lo swap sparisce:** dal 1/6/2026 non c'è più per i nuovi clienti, dal 1/9/2026 per le nuove app, dal 1/1/2027 per tutte; chi supera la memoria «può essere fermato con un errore di memoria esaurita» e riparte secondo la politica normale [12]. Dopo 13 blocchi di fila Scalingo smette di riavviare il contenitore [13].
- Il programmatore dei lavori usa un contenitore M (512 MiB) se `cron.json` non dice altro; la chiave `size` lo cambia; nessun lavoro oltre 12 ore né oltre il suo intervallo; il contenitore si paga al minuto [14].
- Node.js su Scalingo: versioni 22 (fino a 22.23.5), 24 e 26 (predefinita, fino a 26.13.1). Il buildpack calcola `WEB_CONCURRENCY` = memoria disponibile / `WEB_MEMORY` (predefinito 512 MB); per un tetto esplicito si usa `NODE_OPTIONS="--max-old-space-size=…"` [15].
- Node.js: `--max-old-space-size` limita la parte della memoria che contiene gli oggetti di lunga durata; `--max-old-space-size-percentage` la fissa in percentuale della memoria disponibile e prevale sull'altra [16][17].
- Prezzi (30 giorni, IVA esclusa, regione normale): S 7,20 €, M 14,40 €, L 28,80 €; tutto si paga al minuto [18].

**Inferenza.** Le fonti danno i tetti, non quanto userà la nostra app: resta una misura. Un contenitore S senza swap ha 256 MB netti per Node, React Router, Better Auth, sharp (che lavora fuori dalla memoria di JavaScript) e le richieste in corso; un account aperto nel 2027 non avrà swap fin dall'inizio. `WEB_CONCURRENCY` non apre processi da solo: Node resta un solo processo finché il codice non li apre. Il lavoro notturno con Java (§6) è il caso più stretto. Costo di un lavoro notturno di 10 minuti: circa 0,10 € al mese in M, 0,20 € in L (calcolo dell'agente dai prezzi al minuto).

**Da provare.** *Sul computer o nella sessione cloud (gratis):* l'app con i dati inventati dentro un limite di memoria di 256 e 512 MB (per esempio un contenitore con limite), sotto un carico realistico (accessi, caricamento di una foto di 20 MB, una ricevuta Typst), misurando con `process.memoryUsage()`. *Su Scalingo (app temporanea, autorizzazione):* la stessa misura con il grafico della memoria, per confermare.

**Se la risposta è negativa** (S non regge): si usa M, circa 7 € al mese in più, già dentro la stima di 14–22 €. Se non regge neppure M, si guarda prima cosa consuma (sharp, pdf, sessioni) e poi L (circa 28,80 €), che supera il budget.

## 5. Typst su Scalingo

**Fonte.**
- Typst 0.15.1 (17/7/2026) è l'ultima versione; licenza **Apache-2.0** [19][20]. Il programma si distribuisce come archivio già compilato da mettere nel `PATH`; non c'è un buildpack ufficiale né un pacchetto npm ufficiale [19][21]. Su npm esiste `@myriaddreamin/typst-ts-node-compiler` (Apache-2.0, progetto di terzi) [2].
- Peso misurato: l'archivio per Linux x86_64 (musl, senza dipendenze di sistema) pesa 17,5 MB; il programma estratto **55,7 MB** [22].
- Scalingo: il buildpack Node permette passi propri durante la costruzione (`scalingo-prebuild`, `scalingo-postbuild`, `build`) [15]; immagine al massimo **2 GiB**, archivio del codice al massimo 300 MB, costruzione al massimo 30 minuti con 8 GB di memoria [23][24].
- GitHub: un file sopra 50 MiB dà un avviso, sopra 100 MiB il push è rifiutato; per i programmi si consiglia di usare i rilasci invece di tenerli nel repository [25].
- **PDF/UA-1 e PDF/A-2a insieme: sì.** La documentazione di Typst: `--pdf-standard` accetta «uno o più standard separati da virgole»; «si possono combinare standard PDF/A e PDF/UA compatibili»; sono incompatibili solo PDF/UA-1 e PDF/A-4 (uno chiede PDF 1.7, l'altro 2.0); per PDF/A-2a «considera di aggiungere PDF/UA-1, che attiva più controlli automatici» [26].

**Inferenza.** Ci sono tre strade, tutte possibili: (a) scaricare l'archivio ufficiale durante la costruzione con uno script `scalingo-prebuild`, controllandone l'impronta SHA-256 scritta nel repository; (b) tenere il programma nel repository (55,7 MB: sopra la soglia d'avviso di GitHub, e un'altra copia a ogni aggiornamento); (c) il compilatore in Node di terzi, che dipende dal ritmo di un altro progetto. La (a) è la più leggera da tenere; è una scelta tecnica dentro una decisione già presa, non cambia costi. Il peso (circa 56 MB) sta largamente nei 2 GiB. Il comando previsto sarebbe `--pdf-standard a-2a,ua-1`.

**Da provare (sul computer o nella sessione cloud, gratis).** Generare la ricevuta d'esempio con `--pdf-standard ua-1` e con `a-2a,ua-1`, con Manrope a peso fisso, e farla controllare da veraPDF per entrambi i profili. *Su Scalingo (app temporanea):* che lo script di costruzione scarichi il programma e che una ricevuta si generi nel contenitore.

**Se la risposta è negativa** (la combinazione non passa veraPDF): si tiene PDF/UA-1, come già deciso, e PDF/A solo se lo chiede il parere. Se Typst non si installa su Scalingo, la strada (b) o (c).

## 6. Java accanto a Node.js su Scalingo per DSS

**Fonte.**
- Scalingo: più buildpack nella stessa app con un file `.buildpacks`; **conta l'ordine**: l'ultimo decide come parte l'app, quindi Node.js va per ultimo [27].
- L'esempio della documentazione usa il ramo `java-buildpack#javaonly` [27], ma il repository del buildpack Java oggi ha solo i rami `master` e `feat/maven-3.9.6` [28]. Esiste invece il buildpack ufficiale **`buildpack-jvm-common`**, che «installa solo il JDK, senza costruire un'applicazione» e si usa «da solo o con altri buildpack» [29]. Il buildpack Java vero richiede un `pom.xml` alla radice e costruisce con Maven [28].
- Java su Scalingo: versioni 8, 11, 17, 21, 25 (predefinita sugli stack recenti) e 27. Il limite predefinito della memoria di Java dipende dal contenitore: S 160 MB, M **300 MB**, L 671 MB; si cambia con `JAVA_TOOL_OPTIONS` [30]. Lo stesso calcolo è nello script di `buildpack-jvm-common` [29].
- DSS 6.5.1 è l'ultima versione su Maven Central (ottobre 2026) [31]. Requisiti: Java 8 o successivo, provato fino a Java 26; «memoria e disco: vedi i requisiti minimi della JVM usata; in generale più ce n'è meglio è» [32]. La documentazione non dà cifre di memoria o durata; avverte che il lettore delle CRL basato su `X509CRL` carica l'intera lista in memoria e può esaurirla, e offre un lettore a flusso (`dss-crl-parser-streams`) [33]. Le liste di fiducia si scaricano con `onlineRefresh()` o si leggono da una copia locale con `offlineRefresh()` [33]. Licenza LGPL-2.1 [32].
- Limiti già visti: immagine 2 GiB [23], lavoro M 512 MiB salvo `size` [14], disco del contenitore temporaneo che si perde a ogni riavvio [11].

**Inferenza.**
- La strada documentata è `.buildpacks` con `buildpack-jvm-common` (o il buildpack Java, se si costruisce DSS con Maven nella costruzione) e poi il buildpack Node. Il ramo `javaonly` dell'esempio non va usato: la pagina è da segnalare come superata.
- Nel lavoro notturno Node e Java stanno nello **stesso** contenitore: con M i 300 MB di Java più Node superano facilmente i 512 MB, soprattutto senza swap dal 2027 (§4). Il lavoro notturno parte da zero ogni notte: le liste di fiducia europee si scaricano ogni volta, salvo conservarne una copia nel database.
- Peso: JDK e librerie di DSS non sono documentati; vanno misurati, ma stanno con buona probabilità nei 2 GiB.
- Costo: un lavoro notturno in L costa circa 0,20 € al mese (§4): restare «senza costi in più» significa centesimi, non zero. Nella prova gratuita di Scalingo i contenitori L non ci sono [10].
- LGPL-2.1: si usa DSS come libreria sul server senza distribuirlo; gli obblighi della LGPL scattano soprattutto con la distribuzione. *Inferenza da confermare solo se il codice venisse distribuito.*

**Da provare.** *Sul computer o nella sessione cloud (gratis):* un piccolo programma Java con DSS 6.5.1 che aggiorna le liste di fiducia e verifica firme PAdES e CAdES di prova (buone e false), lanciato con `-XX:MaxRAM=512m -Xmx300m` e poi con il limite di L, misurando memoria di picco e durata; misura del peso del JDK e dei jar. *Su Scalingo (app temporanea):* `.buildpacks` con `buildpack-jvm-common` + Node, lavoro con `size` M e L, durata e memoria nei registri.

**Se la risposta è negativa.** Prima dei ripieghi già decisi: (1) lavoro notturno in L per i soli minuti di DSS (centesimi al mese); (2) DSS in un lavoro separato, senza Node nello stesso contenitore. Se nemmeno così regge senza costi in più, vale la decisione già registrata: riscrittura con DSS arbitro nei controlli di GitHub ed esito solo come suggerimento.

## 7. Pagina d'errore fissa a piattaforma ferma

**Fonte.** Scalingo mostra una pagina d'errore propria quando l'app non risponde e permette di sostituirla con cinque variabili d'ambiente, ognuna con l'indirizzo di una pagina [34]:
- `SCALINGO_NO_FRONT_ERROR_URL`: nessun contenitore web acceso (usata anche per la manutenzione);
- `SCALINGO_STOPPED_PAGE_URL`: nessun contenitore acceso;
- `SCALINGO_APP_ERROR_URL`: l'app risponde 502, si blocca o chiude la connessione;
- `SCALINGO_TIMEOUT_ERROR_URL`: 504 o tempo scaduto;
- `SCALINGO_FORBIDDEN_PAGE_URL`: richiesta respinta dal filtro degli indirizzi.

La pagina viene tenuta nella memoria del router, al massimo **10 MB**; dopo aver impostato la variabile **bisogna riavviare l'app**; Scalingo consiglia una pagina semplicissima con tutto dentro (stile, immagini) [34]. Il router risponde 503 anche quando la coda è piena (50 richieste per contenitore) [9].

**Inferenza.** Sì, Scalingo copre i casi «app ferma, bloccata, troppo lenta». Non copre: il 503 della coda piena (non elencato fra le pagine personalizzabili) e un guasto di Scalingo stesso. La pagina deve stare **a un indirizzo pubblico fuori dall'app**; la documentazione non dice se il router la scarica una volta (al riavvio) o la ricarica: per sicurezza va ospitata fuori da Scalingo. Possibilità senza costi: GitHub Pages dal repository pubblico; un archivio S3 compatibile. Dove ospitarla è la scelta lasciata aperta in «Verifica operativa»: spetta all'utente, perché aggiunge un posto (e per GitHub Pages un servizio) da tenere. Il testo resta quello di DESIGN.md.

**Da provare (solo su Scalingo, app temporanea).** Impostare le variabili, riavviare, poi fermare i contenitori web, far bloccare l'app e farla rispondere in ritardo, controllando che appaia la pagina giusta; una volta con la pagina ospitata non raggiungibile, per vedere se il router la tiene in memoria.

**Se la risposta è negativa.** Resta la pagina predefinita di Scalingo (in inglese, senza il nostro testo): il piano carta funziona comunque, perché lo decide l'operatore dopo 10 minuti, ma i clienti non leggono «vieni al banco o chiama ƎE».

## 8. «Invia» con Web Share e i file

**Fonte.**
- Dati di compatibilità di MDN (`@mdn/browser-compat-data` 8.1.11 del 26/11/2026) per `navigator.share()` con **file** e per `navigator.canShare()` con file [35]:

| Browser | `share()` | con file |
|---|---|---|
| Safari su iPhone e iPad | 12.2 | **14** |
| Safari su Mac | 12.1 | **14** |
| Chrome su Android | 61 | **76** |
| Chrome su computer | 128 (prima solo Windows e ChromeOS) | 89 |
| Edge su computer | 93 (prima solo Windows) | 81 |
| Samsung Internet | 8.0 | 11.0 |
| Firefox su Android | 79 | **no** |
| Firefox su computer | solo dietro un'impostazione | **no** |
| WebView di Android | no | no |

- Codice di Chromium (ramo principale): la condivisione è implementata **solo su Windows, ChromeOS e macOS**; su Linux non c'è [36]. Il PDF (`.pdf`, `application/pdf`) è fra i tipi ammessi [36][37]; i file passano anche da un controllo di sicurezza (Safe Browsing) che può rifiutarli [36].
- MDN: `share()` richiede un'«attivazione transitoria» (deve partire da un tocco o un clic) e la regola `web-share` di Permissions Policy; altrimenti `NotAllowedError` [37].

**Inferenza.** Con il PDF funziona su iPhone, iPad, Mac con Safari, Android con Chrome o Samsung Internet, Windows con Chrome o Edge, Mac con Chrome. Non funziona su Firefox (telefono e computer), su Linux e dentro le app che aprono le pagine in una WebView di Android: lì serve il download, come già deciso. Il controllo giusto è `navigator.canShare({ files: [file] })`, non la sola presenza di `share`. Il PDF va scaricato **prima** del tocco su «Invia» (come già previsto): se lo si scarica dopo il tocco, Safari può considerare scaduta l'attivazione. Se la pagina imposta una Permissions Policy, deve lasciare `web-share` per sé.

**Da provare (sui dispositivi dell'utente o di ƎE, gratis; in parte nella sessione con Playwright).** Insieme alle prove dei caricamenti già previste: iPhone con Safari, Android con Chrome, Windows con Chrome o Edge, Mac con Safari; più Firefox per vedere il download al posto della condivisione. Nella sessione cloud si prova solo la scelta fra condivisione e download, non il foglio di condivisione vero.

**Se la risposta è negativa** su un browser: lì «Invia» diventa il download, già previsto. Nessun invio dal server.

## 9. Drizzle 1.0

**Fonte.**
- Su npm `latest` è ancora **0.45.4** (8/10/2026); la 1.0 è in **release candidate**: `1.0.0-rc.6` del 20/11/2026 (`rc`) [38].
- La guida ufficiale «Upgrading to Drizzle v1» indica di installare `drizzle-orm@rc` e `drizzle-kit@rc` e non dà una data per la versione stabile. Passi: copia del database e delle migrazioni; `npx drizzle-kit up`, che converte i file locali senza toccare il database (ogni migrazione in una cartella con `migration.sql` e `snapshot.json`, tolto `meta/_journal.json`); revisione dei cambiamenti incompatibili e, per chi usa le query relazionali, passaggio alle relazioni v2; `drizzle-kit check`; poi `drizzle-kit migrate`, che aggiunge `name` e `applied_at` alla tabella delle migrazioni e non riesegue quelle già applicate [39].
- Better Auth: l'adattatore Drizzle accetta sia 0.45.2+ sia 1.0 rc [2]; quello predefinito usa le relazioni v1; per le v2 si importa `@better-auth/drizzle-adapter/relations-v2` e si rigenera lo schema con `npx auth@latest generate`, **senza migrazioni del database** («cambiano solo le definizioni delle relazioni») [4].

**Inferenza.** La condizione di ARCHITECTURE.md («se esce Drizzle 1.0 stabile prima della costruzione si parte da quella») oggi non è soddisfatta: la regola registrata porta a partire dalla 0.45.4. Il passaggio successivo tocca tre cose: cartella delle migrazioni (`drizzle-kit up`), relazioni v2 se si usano le query relazionali, e l'ingresso `relations-v2` dell'adattatore di Better Auth. Partire con poche migrazioni rende il passaggio più piccolo. Partire dalla RC sarebbe una deviazione dalla regola registrata: spetta all'utente, non a questa ricerca.

**Da provare (sul computer o nella sessione cloud, gratis).** Prima del passaggio, una prova su una copia: `drizzle-kit up` sulle migrazioni del progetto, `check`, `migrate` su un database con i dati inventati della versione prima (è già uno dei controlli automatici decisi).

**Se la risposta è negativa** (la 1.0 non esce o rompe qualcosa): si resta sulla 0.45, che l'adattatore di Better Auth continua ad accettare.

## 10. Skebby: modalità di prova, contratto sui dati, sede dei dati

**Fonte.**
- **Modalità di prova.** La documentazione delle API elenca fra gli stati possibili di un SMS `SENT_IN_DEMO_MODE` («DEMO») e fra i dati dell'account un campo `num-cell-for-test-sms`, ma **non spiega come si attiva** la modalità demo né cosa fa [40]. L'indirizzo che riceve lo stato finale si imposta solo dall'interfaccia («My Account → API & MAIL2SMS»), in GET o POST [40]. Il contratto ha un articolo «Test e supporto», che riguarda il collaudo dei servizi acquistati (5 giorni lavorativi per segnalare difetti), non un ambiente di prova [41, art. 3].
- **Contratto pubblico.** Le «Condizioni Generali di Contratto» di Commify Italia S.r.l. (marchio Skebby) sono pubblicate in PDF (27 pagine, file del 4/9/2025) e comprendono l'**Allegato 3 – Addendum per la Protezione dei Dati (DPA)**, che prevale sulle condizioni generali [41, art. 1.5]. Punti salienti:
  - con le API il cliente è titolare e Skebby **responsabile del trattamento**; ogni chiamata è un'istruzione [41, art. 2.25; All. 3, art. 2];
  - sub-responsabili: autorizzazione generale a quelli della pagina `esendex.co.uk/subprocessors`; il cliente deve controllarla da sé e può opporsi entro **20 giorni** da una modifica [41, All. 3, art. 5.1];
  - nessun trasferimento fuori dal SEE salvo istruzione del cliente o paese adeguato con garanzie; i dati delle comunicazioni verso l'estero possono essere trattati all'estero [41, All. 3, art. 7];
  - conservazione: dati personali e di traffico secondo gli artt. 123 e 132 del Codice privacy e l'art. 24 della L. 167/2017; **«il testo degli SMS è conservato solo per il tempo necessario al suo invio, salvo diversa richiesta del Cliente»** [41, All. 3, art. 10.2];
  - l'Annesso 1 descrive il trattamento come «invio di comunicazioni» con nome, indirizzi e numero di cellulare [41].
- **Sede dei dati.** Skebby: «tutta l'infrastruttura hardware di Skebby risiede presso Brennercom a Trento» [42]. L'elenco dei sub-responsabili per Skebby comprende però anche **Amazon Web Services** (Europa), **Microsoft Azure** (Europa), **TIM** (Italia), Brennercom (Italia) e **Commify UK Limited** (Regno Unito); più quelli indicati per tutti i marchi: Datadog (Europa), Ventatel (Cipro), Vonage (Europa), TMT Analysis (Regno Unito), mobile business engine (Germania), Zsah (Europa). La pagina non ha una data [43].

**Inferenza.** Il contratto pubblico c'è e risponde a due dubbi del 1/11/2026: il testo dell'SMS non si conserva oltre l'invio, salvo richiesta, e Skebby si dichiara responsabile del trattamento. La «sede dei dati» è meno netta della pagina sull'infrastruttura: ci sono sub-responsabili d'ospitalità fuori dall'Italia (AWS, Azure, in Europa) e uno nel Regno Unito (paese con decisione di adeguatezza; *da confermare al parere*). Per la prova automatica non serve Skebby: i controlli usano già la finta. La modalità demo servirebbe solo per vedere davvero la chiamata dello stato finale senza consumare credito, e la sua attivazione **non è documentata**.

**Serve un parere professionale** (già previsto nell'incarico unico, PRODUCT.md §10.10): ruolo di Skebby (responsabile secondo il contratto, ma fornitore di comunicazione elettronica secondo il Garante nel 2023, vedi [invio-email-sms.md](invio-email-sms.md)); sub-responsabili fuori dall'Italia e nel Regno Unito; il dovere del cliente di controllare da sé la pagina dei sub-responsabili; durate di conservazione dei dati di traffico.

**Da provare (solo con il fornitore: serve l'autorizzazione dell'utente).** Chiedere a Skebby, prima di aprire l'account o con l'account, come si attiva la modalità demo e se chiama l'indirizzo dello stato finale. In alternativa, con l'account aperto, pochi SMS veri verso un numero di prova dell'utente.

**Costo.** Il pacchetto più piccolo, 25 € (circa 255 SMS, validi 2 anni), già previsto; una prova con qualche SMS vero ne consuma pochi centesimi.

**Se la risposta è negativa** (nessuna modalità demo): la prova dello stato finale si fa con pochi SMS veri. Se il contratto non regge al parere, vale il ripiego già deciso (Amazon End User Messaging dopo una conferma scritta sull'alias).

## 11. Amazon SES: indirizzi simulati

**Fonte.**
- Il simulatore di SES ha questi indirizzi: `success@` (recapitato, con notifica di consegna via SNS), `bounce@` (rifiuto «550 5.1.1 Unknown User», notifica di rimbalzo conforme a RFC 3464; l'indirizzo non finisce nella lista di soppressione), `ooto@` (risposta automatica), `complaint@` (segnalazione come spam, RFC 5965), `suppressionlist@` (rimbalzo come se l'indirizzo fosse nella lista di soppressione), tutti `@simulator.amazonses.com`; si possono aggiungere etichette (`bounce+etichetta@…`) [44].
- Il simulatore si usa **anche con l'account ancora nella «sandbox»**; non conta nella quota giornaliera né nelle percentuali di rimbalzi e reclami; **si paga come una email normale**; risponde solo a messaggi spediti attraverso SES [44]. Non c'è un indirizzo per i messaggi rifiutati per virus (si prova con il file EICAR, che conta nella quota) [44].
- Milano (`eu-south-1`) ha l'interfaccia di SES (`email.eu-south-1.amazonaws.com`), non SMTP [45]. Milano è una regione «opt-in»: le regioni nate dopo il 20/3/2019 sono spente per impostazione e vanno accese nell'account prima di usarle [46].
- Prezzo: 0,10 $ ogni 1.000 email (ARCHITECTURE.md, riletto il 1/11/2026 in [invio-email-sms.md](invio-email-sms.md)).

**Inferenza.** Tre dei quattro esiti decisi si provano davvero: **recapitato** (`success@`), **non recapitato** (`bounce@` e `suppressionlist@`, con il motivo), **segnato come spam** (`complaint@`). Il quarto, **esito non noto dopo 24 ore**, per natura non si simula: si prova con la finta (nessuna notifica entro 24 ore). Non si simulano nemmeno il rimbalzo temporaneo e il ritardo di consegna (`DeliveryDelay`): anche questi con la finta. La documentazione non dice che il simulatore manchi in qualche regione. Per usarlo servono l'account AWS di ƎE, Milano accesa, un'identità di invio verificata (il sottodominio, con i record DNS) e la configurazione degli eventi verso SNS con un indirizzo HTTPS della piattaforma: cioè l'app temporanea su Scalingo o un ambiente raggiungibile da Internet.

**Da provare (solo con il fornitore e su Scalingo: serve l'autorizzazione dell'utente e l'accesso al dominio di ƎE).** Le cinque email simulate dalla piattaforma, controllando che ogni esito arrivi, che la firma SNS si verifichi e che lo stato salvato sia giusto.

**Costo.** Frazioni di centesimo per le email; l'app temporanea come al §3.

**Se la risposta è negativa** (un esito non arriva): quell'esito resta coperto dalla finta nei controlli e diventa «esito non noto» dopo 24 ore, come già previsto; si segnala ad AWS.

## 12. IstatData: lettura salvata nei test e condizioni d'uso

**Fonte.**
- ISTAT: l'interfaccia SDMX è gratuita; limite di **5 richieste al minuto per indirizzo IP**, oltre il quale scatta un **blocco da 1 a 2 giorni** [47]. Non sono state trovate altre condizioni d'uso per l'interfaccia.
- Note legali ISTAT: salvo diversa indicazione i contenuti del sito sono sotto **CC BY 4.0**, riproducibili e modificabili «per qualsiasi fine, anche commerciale», con attribuzione, link alla licenza e indicazione delle modifiche; nessuna restrizione aggiuntiva [48].
- Scalingo: **tutto** il traffico in uscita dalla regione `osc-fr1` esce da due soli indirizzi (oggi 171.33.105.206 e 171.33.92.211), comuni a tutte le app della regione; possono cambiare con 30 giorni di preavviso [49].
- La ricerca del 30/10/2026 ha già salvato le risposte reali di settembre 2026 (indice 104,3 in CSV, base 2025) e i formati ([istat-variazione.md](istat-variazione.md), §2.4).

**Inferenza.**
- **Sì, si può provare il calcolo con una lettura salvata.** Una risposta SDMX salvata una volta (XML o CSV) nel repository come dato di prova, con la fonte e la licenza accanto, è ammessa dalla CC BY 4.0 anche in un repository pubblico. I test leggono quel file attraverso lo stesso punto del codice che parla con l'ISTAT, sostituito come per SES e Skebby; il test sui numeri di settembre 2026 (+4,0% su un anno, +5,5% su due) resta quello deciso.
- **I controlli automatici non devono chiamare l'ISTAT**: anche se le condizioni non lo vietano, gli indirizzi dei computer di GitHub sono condivisi fra molti utenti e un blocco di 1–2 giorni è imprevedibile.
- **Fatto nuovo per la produzione:** il limite di 5 al minuto vale per indirizzo, e su Scalingo l'indirizzo d'uscita è comune a tutte le app della regione. Un blocco può quindi nascere da altri clienti di Scalingo, non solo da noi. Il ripiego già deciso (dopo 3 giorni lavorativi o se il servizio non risponde, «Oggi» chiede l'inserimento a mano) copre il caso; il lavoro notturno, che legge poco e una volta, resta adatto.

**Da provare (sul computer o nella sessione cloud, gratis).** I test del calcolo e del cambio di base sulla lettura salvata; un test che simula la risposta di blocco (errore o nessuna risposta) e controlla la voce in «Oggi». *Su Scalingo (facoltativo):* una sola lettura vera dal lavoro notturno dell'app temporanea.

**Se la risposta è negativa** (l'ISTAT cambia formato o blocca): «Oggi» chiede l'inserimento a mano con «inserito dall'operatore», come già deciso.

## Riepilogo

| # | Voce | Si risolve leggendo | Prova locale (computer o sessione cloud, gratis) | Prova su Scalingo o col fornitore (autorizzazione) |
|---|---|---|---|---|
| 1 | Better Auth con React Router 8 | In parte: nessun cambio della 8 tocca l'aggancio | **Sì**: app minima con i tre plugin e Drizzle | No |
| 2 | «Ferma l'accesso» | **Sì**: `databaseHooks.session.create.before`, meglio con `APIError` | **Sì**: test per codice email, SMS e passkey | No |
| 3 | Indirizzo vero dietro il proxy | No: Scalingo non dice se sostituisce o allunga le intestazioni | Sì, il comportamento di Better Auth | **Sì**, app temporanea: intestazioni finte |
| 4 | Memoria S/M e lavoro notturno | Solo i tetti (S 256, M 512, swap via dal 1/1/2027) | **Sì**: misura con limite di memoria | Sì, conferma col grafico |
| 5 | Typst su Scalingo, PDF/UA-1 + PDF/A-2a | **Sì**: combinazione ammessa; programma di 55,7 MB, Apache-2.0 | **Sì**: veraPDF sulla ricevuta | Sì, installazione nella costruzione |
| 6 | Java accanto a Node per DSS | In parte: `.buildpacks` con `buildpack-jvm-common`; esempio `javaonly` superato | **Sì**: DSS con 300 MB e con L, peso | **Sì**: lavoro M e L |
| 7 | Pagina d'errore fissa | **Sì**: cinque variabili, pagina fuori dall'app, 10 MB | No | **Sì**: app ferma, bloccata, lenta |
| 8 | «Invia» con Web Share | **Sì**: file in Safari, Chrome e Edge; no Firefox e Linux | In parte (scelta condivisione/download) | Dispositivi veri dell'utente o di ƎE |
| 9 | Drizzle 1.0 | **Sì**: ancora RC (rc.6 del 20/11/2026); si parte dalla 0.45.4 | Sì, prova del passaggio quando serve | No |
| 10 | Skebby | **Sì** per il contratto (DPA pubblico); **no** per la modalità demo | No (c'è la finta) | **Sì**: domanda a Skebby o pochi SMS veri |
| 11 | SES, indirizzi simulati | **Sì**: 3 esiti su 4 simulabili; il 4° con la finta | No | **Sì**: account AWS, Milano accesa, dominio |
| 12 | IstatData | **Sì**: lettura salvata ammessa (CC BY 4.0) | **Sì**: test sulla lettura salvata | Facoltativa |

## Cosa ne segue per il piano

Osservazioni per mettere in ordine i pezzi; nessuna decisione presa qui.

1. **Cinque voci si chiudono con la lettura** e diventano regole o test del primo incremento: «Ferma l'accesso» (2), Typst con `a-2a,ua-1` (5, salvo veraPDF), Web Share con `canShare` e download di riserva (8), Drizzle 0.45.4 secondo la regola registrata (9), lettura ISTAT salvata nei test (12).
2. **Le prove locali** (1, 2, 4, 5, 6, 9, 12) si possono fare all'inizio, senza account né costi; la più incerta è DSS nel lavoro notturno (6), che conviene provare presto perché decide fra «lavoro in L per pochi centesimi» e la riscrittura di riserva.
3. **Le prove su Scalingo** (3, 4, 5, 6, 7, 11) si possono raccogliere in **una sola accensione dell'app temporanea**, la stessa già prevista per le passkey su iPhone: chiede l'autorizzazione dell'utente ad aprire l'account Scalingo a nome di ƎE (o la prova gratuita di 30 giorni, che però esclude i contenitori L e chiede un metodo di pagamento). La 11 chiede in più l'account AWS di ƎE e l'accesso al dominio di ƎE.
4. **Decisioni o autorizzazioni che spettano all'utente**, emerse qui: dove ospitare la pagina d'errore fissa (7); se e quando aprire Scalingo, AWS e Skebby per le prove; se scrivere a Skebby sulla modalità demo (10).
5. **Al parere** (incarico unico già previsto): i sub-responsabili di Skebby fuori dall'Italia e nel Regno Unito e il dovere di controllarne la pagina (10).
6. **Fatti nuovi da registrare dove servono:** lo swap di Scalingo sparisce dal 1/1/2027 (4); l'indirizzo d'uscita di Scalingo è comune a tutte le app, quindi il blocco dell'ISTAT può venire da altri (12); l'esempio `javaonly` della documentazione di Scalingo non corrisponde più al repository (6); in Better Auth l'entrata con il codice email non controlla una sessione rifiutata, da qui l'`APIError` (2).

## Fonti

Tutte lette il 27/11/2026.

1. Better Auth, guida «React Router v7 Integration», file della documentazione nel repository ufficiale (rami `main` e `canary` identici): https://raw.githubusercontent.com/better-auth/better-auth/main/docs/content/docs/integrations/react-router.mdx — pagina pubblica: https://better-auth.com/docs/integrations/react-router
2. Registro npm: `better-auth`, `@better-auth/passkey`, `@better-auth/drizzle-adapter`, `@better-auth/core` 1.7.28 (codice letto nei pacchetti: `db/internal-adapter.mjs`, `db/with-hooks.mjs`, `plugins/email-otp/routes.mjs`, `plugins/phone-number/routes.mjs`, `api/rate-limiter/index.mjs`, `@better-auth/core/dist/utils/ip.mjs`, `@better-auth/passkey/dist/index.mjs`); `react-router`, `@react-router/node`, `drizzle-orm`, `@simplewebauthn/server`, `@myriaddreamin/typst-ts-node-compiler`, `typst`: https://registry.npmjs.org/
3. React Router, versioni sul registro npm: https://registry.npmjs.org/react-router
4. Better Auth, «Drizzle ORM Adapter» (giunzioni, relazioni v2): https://raw.githubusercontent.com/better-auth/better-auth/main/docs/content/docs/adapters/drizzle.mdx
5. React Router, CHANGELOG, sezione v8.0.0 (17/6/2026) e successive: https://raw.githubusercontent.com/remix-run/react-router/main/CHANGELOG.md
6. Better Auth, «Database», sezione Database Hooks: https://raw.githubusercontent.com/better-auth/better-auth/main/docs/content/docs/concepts/database.mdx
7. Better Auth, «Options», `advanced.ipAddress`: https://raw.githubusercontent.com/better-auth/better-auth/main/docs/content/docs/reference/options.mdx
8. Better Auth, «Rate Limit», «Connecting IP Address»: https://raw.githubusercontent.com/better-auth/better-auth/main/docs/content/docs/concepts/rate-limit.mdx
9. Scalingo, «Routing» (aggiornata il 22/10/2026): https://doc.scalingo.com/platform/internals/routing
10. Scalingo, «Free Trial» (aggiornata il 1/10/2026): https://doc.scalingo.com/platform/getting-started/free-trial
11. Scalingo, «Container Sizes» (aggiornata il 18/9/2026): https://doc.scalingo.com/platform/internals/container-sizes
12. Scalingo, blog «Clearer memory limits for application containers» (data visibile 2/6/2026; letto con lo strumento di lettura web): https://scalingo.com/blog/clearer-memory-limits-for-application-containers
13. Scalingo, «Runtime Issues» (aggiornata il 31/7/2026; contatore dei blocchi: a 13 il contenitore non si riavvia più): https://doc.scalingo.com/platform/app/troubleshooting/runtime-issues
14. Scalingo, «Scalingo Scheduler» (aggiornata il 24/2/2026; letto con lo strumento di lettura web, perché `curl` riceveva una pagina vuota): https://doc.scalingo.com/platform/app/task-scheduling/scalingo-scheduler
15. Scalingo, «Node.js» (aggiornata il 12/11/2026): https://doc.scalingo.com/languages/nodejs/start
16. Node.js, «Understanding and Tuning Memory»: https://nodejs.org/en/learn/diagnostics/memory/understanding-and-tuning-memory
17. Node.js, «Command-line API», `--max-old-space-size-percentage`: https://nodejs.org/api/cli.html
18. Scalingo, «Pricing»: https://scalingo.com/pricing
19. Typst, README e `Cargo.toml` del repository ufficiale (versione 0.15.1, Apache-2.0): https://github.com/typst/typst
20. Typst, pagina dei rilasci (0.15.1 del 17/7/2026; letta con lo strumento di lettura web): https://github.com/typst/typst/releases
21. Scalingo, «Buildpacks» (aggiornata l'11/9/2026), elenco dei buildpack ufficiali: https://doc.scalingo.com/platform/deployment/buildpacks/intro
22. Typst 0.15.1, archivio `typst-x86_64-unknown-linux-musl.tar.xz` scaricato e misurato (non eseguito): https://github.com/typst/typst/releases/download/v0.15.1/typst-x86_64-unknown-linux-musl.tar.xz
23. Scalingo, «Deployment Limits» (aggiornata il 29/4/2026; letto con lo strumento di lettura web): https://doc.scalingo.com/platform/deployment/limits
24. Scalingo, «Deployment Issues» (aggiornata il 30/4/2026): https://doc.scalingo.com/platform/app/troubleshooting/deployment-issues
25. GitHub Docs, «About large files on GitHub» (letto con lo strumento di lettura web): https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github
26. Typst, documentazione «PDF» (standard PDF/A e PDF/UA): https://typst.app/docs/reference/pdf/
27. Scalingo, «Multi Buildpacks» (aggiornata l'11/9/2026): https://doc.scalingo.com/platform/deployment/buildpacks/multi
28. Scalingo, repository `java-buildpack` (rami letti con `git ls-remote`; README e `bin/detect`): https://github.com/Scalingo/java-buildpack
29. Scalingo, repository `buildpack-jvm-common` (README e `opt/jvmcommon.sh`): https://github.com/Scalingo/buildpack-jvm-common
30. Scalingo, «Java» (memoria predefinita per contenitore): https://doc.scalingo.com/languages/java/start
31. Maven Central, metadati di `eu.europa.ec.joinup.sd-dss:dss-validation` (ultima 6.5.1, aggiornati il 14/10/2026): https://repo1.maven.org/maven2/eu/europa/ec/joinup/sd-dss/dss-validation/maven-metadata.xml
32. DSS, README del repository ufficiale (requisiti, licenza): https://raw.githubusercontent.com/esig/dss/master/README.md
33. DSS, documentazione della Commissione europea (lettore CRL, liste di fiducia): https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/doc/dss-documentation.html
34. Scalingo, «Custom Error and Maintenance Pages» (aggiornata il 9/10/2026): https://doc.scalingo.com/platform/app/custom-error-page
35. MDN, `@mdn/browser-compat-data` 8.1.11 (26/11/2026), voci `api.Navigator.share` e `api.Navigator.canShare`: https://registry.npmjs.org/@mdn/browser-compat-data
36. Chromium, `chrome/browser/webshare/share_service_impl.cc` (ramo principale): https://chromium.googlesource.com/chromium/src/+/main/chrome/browser/webshare/share_service_impl.cc
37. MDN, «Navigator: share() method» (sorgente nel repository ufficiale): https://raw.githubusercontent.com/mdn/content/main/files/en-us/web/api/navigator/share/index.md — pagina: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
38. Registro npm, `drizzle-orm` (`latest` 0.45.4, `rc` 1.0.0-rc.6): https://registry.npmjs.org/drizzle-orm
39. Drizzle, «Upgrading to Drizzle v1» (letto con lo strumento di lettura web): https://orm.drizzle.team/docs/upgrade-v1
40. Skebby, documentazione delle API REST (stati degli SMS, notifica dello stato finale, dati dell'account): https://developers.skebby.it/
41. Skebby (Commify Italia S.r.l.), «Condizioni Generali di Contratto» con l'Allegato 3 «Addendum per la Protezione dei Dati (DPA)», PDF di 27 pagine, file del 4/9/2025: https://www.skebby.it/wp-content/uploads/Contratto-SKEBBY.pdf
42. Skebby, «Infrastruttura e sicurezza»: https://www.skebby.it/azienda/infrastruttura-e-sicurezza/
43. Commify / Esendex, elenco dei sub-responsabili richiamato dal DPA di Skebby (senza data; letto con lo strumento di lettura web): https://www.esendex.co.uk/subprocessors/
44. Amazon SES, «Sending test emails in Amazon SES with the simulator»: https://docs.aws.amazon.com/ses/latest/dg/send-an-email-from-console.html
45. AWS General Reference, «Amazon Simple Email Service endpoints and quotas»: https://docs.aws.amazon.com/general/latest/gr/ses.html
46. AWS Account Management, «Specify which AWS Regions your account can use»: https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html
47. ISTAT, «SDMX Web Services»: https://www.istat.it/en/classifications-and-tools/sdmx-web-services/
48. ISTAT, «Note legali: responsabilità e licenza»: https://www.istat.it/note-legali/
49. Scalingo, «Egress» (aggiornata l'8/1/2026): https://doc.scalingo.com/platform/networking/public/egress

## Fonti non raggiunte o con limiti

- **Interfaccia di GitHub (API)** per i repository `better-auth/better-auth`, `esig/dss` e `Scalingo/*`: non abilitata in questa sessione. Si sono letti i file con `raw.githubusercontent.com` e `git ls-remote`, le versioni da npm e Maven Central.
- **Sito di Better Auth** (`better-auth.com`): risponde 403 alle richieste dirette; letti gli stessi testi nel repository ufficiale.
- **Sito della documentazione di React Router**: non letto; usato il CHANGELOG ufficiale del repository.
- **Skebby, modalità demo:** nessuna pagina pubblica la descrive; resta da chiedere al fornitore (§10). Il sito `skebby.it` risponde 404 agli indirizzi delle condizioni tentati a mano; il contratto si è trovato dal collegamento in fondo alla pagina principale.
- **Peso delle risorse dei rilasci di Typst:** non mostrato dalla pagina dei rilasci; misurato scaricando l'archivio [22].
- **Limite dell'immagine di Scalingo:** un estratto di ricerca riportava 1,5 GiB, mentre le due pagine lette oggi dicono **2 GiB** [23][24]; si è usato 2 GiB.
- **Pagina dei sub-responsabili di Commify** [43] e alcune pagine di Scalingo, Drizzle e GitHub sono state lette con lo strumento di lettura web, che riassume con un modello: le citazioni fra virgolette di quelle fonti vanno ricontrollate sulla pagina prima di usarle in un documento per il parere.
- **Agente «web-fetch»:** non disponibile come agente separato in questa sessione; al suo posto lo strumento di lettura web e `curl`.
