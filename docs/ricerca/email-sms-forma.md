# Email e SMS di servizio: come si vedono davvero

Ricerca del 23 ottobre 2026, svolta dall'agente in sequenza su fonti primarie; tutte le fonti sono state lette il 23/10/2026. Risponde al ticket [02 «Come si vedono davvero le email e gli SMS di servizio»](../../.scratch/design-percorso-1/issues/02-ricerca-email-sms-forma.md). Consegna, spam, logo nella casella, AMP e regole sulle email promozionali sono nella [ricerca del 19/10/2026](email.md) e qui non si ripetono.

**Messaggi da progettare** ([PRODUCT.md](../../PRODUCT.md) §10.5): mittente ƎE con il nome del servizio, sempre uguale (D21); il fatto, il mese e la casa, senza importi (D22); email, o SMS per chi non ha l'email; tredici fatti che producono un messaggio. Chi ha solo il cellulare entra con un codice via SMS (§10.2).

Legenda: **Fonte** = ciò che dice la fonte; **Fonte secondaria** = fonte autorevole ma non del proprietario dello standard o del programma, usata dove la primaria manca; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **L'email si legge ovunque solo se il contenuto è testo vero.** Gmail accetta `<style>` e media query sulla larghezza, ma nel suo elenco non compaiono animazioni, transizioni né `prefers-color-scheme` (**Fonte**: Google). Outlook classico disegna l'HTML con il motore di Word: niente `<button>`, moduli, `float`, `position`, `max-width` né immagini di sfondo (**Fonte**: Microsoft, documento del 2006; la validità per le versioni attuali è **Da verificare**). Apple Mail è il programma più capace: tema scuro dichiarabile, animazioni CSS (**Fonte**: WebKit; **Fonte secondaria**: caniemail).
- **«Dinamico» senza AMP significa un'email che resta chiara anche ferma.** Le animazioni CSS funzionano in pratica solo in Apple Mail; le GIF animate quasi ovunque, ma Outlook classico mostra solo il primo fotogramma (**Fonte**: Microsoft; **Fonte secondaria**: caniemail). Il «dinamico» va affidato a stato, data e passaggi del denaro scritti in chiaro, con il movimento come aggiunta facoltativa (**Inferenza**).
- **Novità normativa: i pixel di tracciamento.** Dal 29/10/2026 valgono le linee guida del Garante sui pixel nelle email: serve il consenso, salvo eccezioni (statistiche anonime con pixel uguale per tutti, sicurezza dell'accesso, messaggi di servizio dovuti e promemoria di scadenze contrattuali) (**Fonte**: Garante, provv. 284 del 17/4/2026). Per il percorso 1 la scelta più semplice è non usarli (**Inferenza**; per le eccezioni **serve un parere professionale**).
- **SMS: le lettere accentate minuscole costano poco, il resto può raddoppiare il messaggio.** à è é ì ò ù ed É stanno nell'alfabeto GSM-7 (1 carattere); «€» sta nell'estensione e vale 2. **È maiuscola, «Ǝ» di ƎE, l'apostrofo tipografico ’, le virgolette «» e le emoji no**: basta uno di questi perché l'intero SMS passi a UCS-2, da 160 a 70 caratteri (**Fonte**: 3GPP TS 23.038 e 23.040; calcoli nel §3).
- **Mittente alfanumerico in Italia: si può, con regole precise.** L'alias va registrato nel Registro AGCOM da un fornitore autorizzato; non si possono ricevere risposte; deve essere distintivo, non generico e non solo numerico; chi lo usa non può mandare SMS per conto di altri (**Fonte**: AGCOM, delibera 12/23/CIR). Tecnicamente l'alias usa l'alfabeto GSM-7, quindi «ƎE» non è scrivibile (**Fonte**: 3GPP TS 23.040).
- **Codici monouso:** l'ultima riga `@dominio #codice` fa proporre il codice da Safari su iPhone e Mac (iOS 14 e macOS Big Sur in poi) e da Chrome su Android con WebOTP (**Fonte**: Apple, Google, WICG).

## 1. Email: cosa mostrano i programmi

### 1.1 Gmail (web e app)

| Aspetto | Cosa dice la fonte | Fonte |
| --- | --- | --- |
| **CSS** | Blocchi `<style>` e CSS standard; selettori di classe, elemento e ID; media query su larghezza, orientamento e risoluzione (`min-width`, `max-width`, `min-device-width`, `max-device-width`, `orientation`, `min-resolution`, `max-resolution`). Le proprietà non supportate «potrebbero essere ignorate». L'elenco comprende `max-width`, `border-radius`, `display`, `font-family`; **non** comprende `animation`, `transition`, `position`, `@font-face` né la media query `prefers-color-scheme` | **Fonte**: Google, pagina aggiornata il 15/9/2026 |
| **Immagini** | Per impostazione predefinita si vedono automaticamente; Google le analizza prima della consegna; se mittente o messaggio sembrano sospetti le immagini non si caricano e Gmail chiede conferma. L'utente può scegliere «Chiedi prima di mostrare immagini esterne» | **Fonte**: Google |
| **Testo nascosto** | «Non usare HTML e CSS per nascondere contenuti nei messaggi»: può far finire il messaggio nello spam. I link nel corpo devono essere visibili e comprensibili | **Fonte**: Google, linee guida per i mittenti |
| **Nome del mittente** | Deve identificare solo il mittente, in modo costante e chiaro; niente oggetto o contenuto nel nome, niente emoji o caratteri non standard usati come elementi grafici | **Fonte**: Google, linee guida per i mittenti |
| **Messaggi lunghi** | Gmail taglia il corpo oltre circa 102 KB di HTML e mostra «[Messaggio troncato]» con un link alla versione completa | **Fonte secondaria**: SendGrid. Nessuna pagina Google trovata: **Da verificare** |
| **Tema scuro** | `prefers-color-scheme` non supportato in nessuna versione di Gmail; nelle app iOS e Android, da settembre 2026, è rispettato solo `<meta name="color-scheme" content="light only">` | **Fonte secondaria**: caniemail (prove del 2023 e del 16/9/2026). Come le app Gmail ricolorano le email in tema scuro: nessuna documentazione Google, **Da verificare** con prove |
| **Caratteri web** | `@font-face` non supportato; Roboto e Google Sans appaiono solo perché li usa la webmail stessa | **Fonte secondaria**: caniemail (2019) |

### 1.2 Apple Mail (iPhone, iPad, Mac)

- Mail su macOS mostra i messaggi semplici con un'«interpretazione scura»; un'email ricca che dichiara `color-scheme: light dark` dice a Mail che ha uno stile scuro proprio; con `light only` Mail non trasforma i colori (**Fonte**: WebKit, 7/5/2019).
- Supporta `prefers-color-scheme`, `@font-face`, animazioni CSS con `@keyframes`, transizioni, `prefers-reduced-motion` e la funzione `light-dark()` (**Fonte secondaria**: caniemail, prove 2019–2024).
- Mail Privacy Protection impedisce di sapere se l'email è stata aperta: è già in [email.md](email.md) §5.
- iOS e macOS con Apple Intelligence possono mostrare nella lista un riassunto al posto delle prime righe del messaggio (**Fonte secondaria**: 9to5Mac, 10/10/2024). Su quali dispositivi e in quali lingue: la pagina Apple trovata dice solo che non tutte le funzioni sono disponibili in tutte le lingue e regioni. **Da verificare**.

### 1.3 Outlook

| Versione | Cosa dice la fonte | Fonte |
| --- | --- | --- |
| **Outlook classico per Windows** | Outlook 2007 disegna l'HTML con il motore di Word 2007. Non supporta, fra l'altro: `button`, `form`, `input`, `script`, `iframe`; le proprietà `background-image`, `float`, `position`, `max-width`, `min-width`, `display`, `overflow`, `text-shadow`; le GIF animate mostrano solo un'immagine ferma | **Fonte**: Microsoft, articolo dell'agosto 2006, archiviato. Che le versioni attuali (Microsoft 365, 2016–2024) usino ancora lo stesso motore lo dicono solo fonti secondarie (caniemail: `max-width` parziale, `@font-face` remoto ignorato, GIF animate non supportate in Outlook 2019): **Da verificare** |
| **Outlook classico, immagini** | Download automatico delle immagini bloccato per impostazione predefinita | **Fonte**: Microsoft, già in [email.md](email.md) §5 |
| **Tema scuro (Outlook nuovo, classico, web)** | Il tema nero dà alla finestra del messaggio uno sfondo nero; un pulsante con il sole riporta lo sfondo bianco del singolo messaggio. Nell'Outlook nuovo si può scegliere «Riquadro di lettura chiaro»; nel classico «Non cambiare mai il colore di sfondo del messaggio». La pagina non dice se e come vengono ricolorati testo ed elementi del messaggio | **Fonte**: Microsoft, supporto |
| **Outlook.com, iOS, Android, Mac** | `prefers-color-scheme` supportato, con attributi `data-ogsc` e simili aggiunti in tema scuro; `max-width`, `display:none` e GIF animate supportati | **Fonte secondaria**: caniemail |
| **Passaggio all'Outlook nuovo** | Per le aziende la fase in cui il nuovo Outlook diventa predefinito (con possibilità di tornare indietro) inizia a marzo 2027, non più ad aprile 2026 | **Fonte secondaria**: copia pubblica del messaggio MC949965 del Microsoft 365 Message Center, aggiornato il 20/2/2026. La fine del supporto del classico non è stata letta su fonti Microsoft: **Da verificare** |

### 1.4 Libero e Virgilio (Italiaonline)

- Il centro assistenza di Libero non pubblica regole su come vengono mostrate le email HTML (CSS, tema scuro, immagini). Nessun dato tecnico trovato: **Da verificare** con prove.
- La webmail e l'app mostrano banner pubblicitari, anche profilati; l'app Libero Mail gestisce anche le caselle Virgilio e richiede Android 10 o iOS 16 e successivi (**Fonte**: Italiaonline, aiuto.libero.it).
- Dal 20/10/2026 Libero chiede il consenso ai pixel di tracciamento per le proprie email, in applicazione delle linee guida del Garante (**Fonte**: Italiaonline).
- caniemail non comprende Libero né Virgilio fra i programmi provati (**Fonte secondaria**: caniemail, dati del 16/9/2026).

### 1.5 Tabella di sintesi: supporto per famiglia di programmi

**Fonte secondaria**: caniemail.com, dati scaricati il 23/10/2026 (aggiornamento del 16/9/2026); fra parentesi l'anno dell'ultima prova. «Sì» = supportato, «No» = non supportato, «Parz.» = supporto parziale.

| Funzione | Gmail (web, app) | Apple Mail (iOS, macOS) | Outlook classico Windows | Outlook.com, iOS, Android |
| --- | --- | --- | --- | --- |
| `prefers-color-scheme` | No (2022) | Sì (2022) | No (2019) | Sì, con attributi aggiunti (2022–23) |
| `<meta name="color-scheme">` | Solo `light only` nelle app (2026) | Sì su macOS, no su iOS 12.4 | No | No |
| `@font-face` | No (2019) | Sì | Parz.: font remoti ignorati | No |
| Animazione CSS e `@keyframes` | No (2021) | Sì | No | No |
| `prefers-reduced-motion` | No (2020) | Sì | No | Sì |
| GIF animate | Sì (2020) | Sì | Parz.: solo immagine ferma | Sì |
| `:hover` | Sì sul web, no o parz. nelle app | Sì | No | Parz. |
| `max-width` | Sì | Sì | Parz. | Sì |
| Attributo `lang` | Sì (2020) | Sì | Sì | Sì |
| Attributo `role` | Sì (2019–20) | Sì | Sì (non provato dal vivo) | Sì |
| Immagini SVG | Parz.: convertite in PNG (2026) | Sì | Sì | Sì |

Le prove di caniemail hanno date diverse, alcune di anni fa: i programmi cambiano senza preavviso (**Inferenza**).

## 2. Email: accessibilità, testo semplice, pixel

**Accessibilità** (**Fonte**: W3C)
- WCAG 2.2: lingua della pagina determinabile (3.1.1, livello A); contrasto del testo almeno 4,5:1, 3:1 per il testo grande (1.4.3, AA); il colore non è l'unico modo per dare un'informazione (1.4.1, A); alternativa testuale per i contenuti non testuali (1.1.1, A); scopo del link chiaro dal testo o dal contesto (2.4.4, A); bersagli di almeno 24×24 px, salvo spaziatura (2.5.8, AA). Movimento che parte da solo, dura più di 5 secondi e sta accanto ad altro contenuto: serve un modo per fermarlo (2.2.2, A); nulla deve lampeggiare più di 3 volte al secondo (2.3.1, A). WCAG2ICT applica i criteri alle email: già in [email.md](email.md) §5.
- WAI-ARIA 1.2: `role="presentation"` (sinonimo `none`) toglie a una tabella di impaginazione e alle sue righe e celle il significato di tabella, ma lascia il contenuto ai lettori di schermo.
- Il tutorial WAI sulle tabelle dice che le tabelle non servono all'impaginazione e che il tutorial non si applica alle tabelle di layout (aggiornato il 16/2/2023).

**Versione solo testo** (**Fonte**: IETF, RFC 2046 §5.1.4). In `multipart/alternative` le parti sono versioni equivalenti dello stesso contenuto, in ordine di fedeltà crescente: prima il testo semplice, poi l'HTML. Il programma sceglie la migliore che sa mostrare.

**Pixel di tracciamento** (**Fonte**: Garante, provvedimento n. 284 del 17/4/2026, Gazzetta Ufficiale n. 98 del 29/4/2026)
- Inserire un pixel in un'email è un accesso al dispositivo del destinatario (art. 122 del Codice privacy): serve il consenso, salvo deroghe. L'uso dei pixel va sempre dichiarato nell'informativa, «qualunque sia lo scopo della comunicazione».
- Esempi di deroga indicati dal Garante: conteggio statistico della percentuale di apertura, con pixel uguale per tutti i destinatari e dati tecnici anonimizzati; misure di sicurezza legate all'autenticazione (attivazione dell'account, cambio password); messaggi istituzionali o di servizio che il titolare deve inviare per legge, fra cui modifiche contrattuali e «reminder su scadenze e adempimenti contrattuali».
- Fuori dalle deroghe: consenso preventivo, revoca anche solo dei pixel con un link nel piè di pagina, servizio pieno anche per chi rifiuta.
- Termine per adeguarsi: 6 mesi dalla pubblicazione in Gazzetta, cioè il 29/10/2026 (calcolo dell'agente).

**Inferenza.** I messaggi del percorso 1 non hanno bisogno di sapere chi apre: l'apertura non prova la lettura ([email.md](email.md) §5) e il dato non entra nello storico (§7.8). Senza pixel non servono consenso né informativa dedicata. Se un giorno servissero, quali messaggi ricadono nelle deroghe va deciso con **un parere professionale**.

## 3. SMS: lunghezza, caratteri e costo

### 3.1 Cosa dicono gli standard

**Alfabeto GSM-7** (**Fonte**: 3GPP TS 23.038 v20.0.0, giugno 2026)
- Tabella di base, 7 bit per carattere: comprende le minuscole accentate **à è é ì ò ù**, la maiuscola **É** e **Ç**, oltre a lettere, cifre e i segni `@ £ $ ¥ ! " # % & ' ( ) * + , - . / : ; < = > ? _ § ¡ ¿`.
- **Non** comprende À È Ì Ò Ù maiuscole, né á í ó ú ç minuscole.
- Tabella di estensione: `^ { } \ [ ~ ] |`, il salto pagina e **€**. Si scrivono con un carattere di escape seguito dal carattere: **2 posizioni** ciascuno. Un telefono che non capisce l'escape lo mostra come uno spazio.
- Tabelle nazionali: definite per turco, spagnolo, portoghese e dieci lingue indiane; **nessuna per l'italiano**. Il documento consiglia UCS-2 quando servono caratteri fuori tabella.
- UCS-2: 16 bit per carattere, insieme ISO/IEC 10646.

**Lunghezza** (**Fonte**: 3GPP TS 23.040 v20.0.0, settembre 2026)
- Un SMS trasporta fino a 140 ottetti di testo.
- Nei messaggi concatenati restano, per parte, 153 caratteri GSM-7, 134 ottetti a 8 bit o 67 caratteri UCS-2; un carattere con escape non può essere spezzato fra due parti; al massimo 255 parti.
- Calcolo dell'agente: 140 ottetti = 160 caratteri GSM-7 (140 × 8 ÷ 7) oppure 70 UCS-2 (140 ÷ 2).

**Costo e sostituzioni** (**Fonte secondaria**: Twilio, pagina aggiornata il 16/9/2026)
- Ogni parte si paga come un SMS.
- Un solo carattere fuori GSM-7, per esempio un'emoji, porta tutto il messaggio in UCS-2.
- Alcuni fornitori sostituiscono da soli certi caratteri con equivalenti GSM-7, per esempio le virgolette tipografiche con quelle dritte.
- Come fattura e che cosa sostituisce il fornitore che sarà scelto: **Da verificare** nel contratto.

### 3.2 Calcoli con esempi (dati inventati)

Calcolo dell'agente con le tabelle di TS 23.038 e le soglie di TS 23.040 (160/153 GSM-7, 70/67 UCS-2). Lo script usato per il conteggio non fa parte del repository.

| # | Testo (abbreviato) | Caratteri | Codifica | Posizioni | SMS |
| --- | --- | --- | --- | --- | --- |
| A | `EE: il canone di novembre per la casa di via Roma 12 è stato pagato. Dettagli su https://esempio.it/a` | 101 | GSM-7 | 101 | **1** |
| B | Lo stesso, con `ƎE:` | 101 | UCS-2 (per «Ǝ») | 101 | **2** |
| C | `EE: È arrivata la contabile del bonifico di novembre per la casa di via Roma 12. Confermala su https://esempio.it/a` | 115 | UCS-2 (per «È») | 115 | **2** |
| D | Lo stesso, con `E'` al posto di `È` | 116 | GSM-7 | 116 | **1** |
| E | `EE: c'è una contabile dell'inquilino da confermare per la casa di via Roma 12.` | 78 | GSM-7 | 78 | **1** |
| F | Lo stesso, con l'apostrofo tipografico `’` | 78 | UCS-2 (per «’») | 78 | **2** |
| G | `EE: canone di novembre «pagato» per la casa di via Roma 12.` | 59 | UCS-2 (per «« »») | 59 | 1, ma con soli 70 caratteri disponibili |
| H | `EE: canone di novembre 750 € pagato per la casa di via Roma 12.` | 63 | GSM-7 | 64 («€» vale 2) | **1** |
| I | Codice monouso, vedi §5: `123456 è il codice per entrare in EE Casa. Non darlo a nessuno, neanche a chi dice di essere EE.` + riga vuota + `@esempio.it #123456` | 117 | GSM-7 | 117 | **1** |
| J | Il testo A senza link, con l'emoji ✅ in fondo | 69 | UCS-2 | 69 | 1, al limite |
| K | 160 volte «à» | 160 | GSM-7 | 160 | **1** |
| L | 80 volte «€» | 80 | GSM-7 | 160 | **1** |
| M | 161 lettere | 161 | GSM-7 | 161 | **2** (153 + 8) |

In sintesi:
- **Lettere accentate minuscole: nessun costo.** Un SMS resta di 160 caratteri anche se sono tutti accentati (K).
- **«€» costa una posizione in più**: con n simboli € entrano 160 − n caratteri (L).
- **Una sola «È», «Ǝ», «’», «« »» o emoji** fa scendere il limite da 160 a 70 caratteri: un messaggio di circa 100 caratteri passa da 1 a 2 SMS (B, C, F) e il costo raddoppia.
- Il nome **«ƎE»** in un SMS costa quanto un'emoji.

## 4. SMS: mittente alfanumerico in Italia

**Regole AGCOM** (**Fonte**: AGCOM, delibera 12/23/CIR del 3/5/2023 e Allegato A; guida al Registro degli Alias, versione 2.0)
- **Registrazione.** Senza registrazione nel Registro dell'Autorità l'alias non si può usare. Registrano solo i fornitori di servizi di comunicazione elettronica autorizzati e iscritti al ROC; l'azienda mittente non si registra da sola, ma si rivolge a uno di loro. L'elenco delle imprese autorizzate si consulta da alias.agcom.it.
- **Chi può usarlo e cosa deve dare.** Solo chi non è consumatore. L'azienda mittente comunica al fornitore denominazione, dati camerali e recapiti per farsi contattare (telefono, email, PEC, sito); deve avere una PEC iscritta in INI-PEC; accetta che i dati forniti possano essere pubblicati. Il fornitore verifica i dati sui registri pubblici e i poteri di chi firma la richiesta.
- **Niente risposte.** L'alias è ammesso solo per servizi in cui i destinatari non rispondono usando il mittente come destinazione («Application to Person»). Non si può associare a una SIM.
- **Come dev'essere fatto.** Distintivo del mittente, del bene o del servizio; non ingannevole; niente nomi generici; non solo cifre né caratteri che simulano un numero di telefono. Due alias che differiscono solo per maiuscole o minuscole sono considerati uguali. Gli alias che richiamano enti pubblici sono riservati a loro. L'alias può essere «univoco», cioè di un solo mittente, con 12 mesi di latenza, oppure «non univoco».
- **Per conto di altri.** Il mittente non può mandare SMS per conto di altri soggetti. Può delegare un altro soggetto a usare il proprio alias univoco solo se l'alias identifica il mittente stesso; il delegato va registrato prima nel Registro e il titolare resta corresponsabile.
- **Aggiornamenti.** La sentenza del TAR Lazio n. 1692 del 29/1/2024 ha annullato in parte la delibera (art. 2, commi 1 e 2, della delibera; art. 2, comma 10, dell'Allegato A). Nel 2026 AGCOM ha confermato l'obbligo dei fornitori di transito di bloccare gli alias provenienti da soggetti non autorizzati in Italia (delibera 9/26/CIR del 26/2/2026).

**Caratteri e lunghezza** (**Fonte**: 3GPP TS 23.040 §9.1.2.4–9.1.2.5)
- Il mittente alfanumerico è codificato con l'alfabeto GSM-7 di base.
- Il campo indirizzo occupa al massimo 12 ottetti, compresi lunghezza e tipo. Ne restano 10 per il nome, cioè **11 caratteri** (calcolo dell'agente; un motore di ricerca attribuisce lo stesso limite al codice di condotta di Retelit, ma la pagina non si apre: **Da verificare** con il fornitore). Se un alias possa contenere spazi lo stabiliscono il Registro e il fornitore: **Da verificare**.

**Come appare sul telefono**
- iOS 26 può filtrare i messaggi di «mittenti sconosciuti», cioè chi non è in rubrica o non ha già interagito. Il filtro è disattivato per impostazione predefinita, ma resta attivo per chi l'aveva acceso in iOS 18. I messaggi urgenti, come i **codici di verifica**, notificano comunque. Messaggi può anche classificare in **Transazioni** e **Promozioni** gli SMS, MMS e RCS dei mittenti sconosciuti. Il filtro non si applica a chi ha ricevuto almeno tre risposte (**Fonte**: Apple, 14/4/2026).
- Google Messaggi ha la protezione dallo spam attiva in modalità standard. Per i messaggi con un link, l'URL viene inviato a Google per verificarne la sicurezza; i messaggi sospetti possono finire in «Spam e bloccati». Le anteprime automatiche inviano a Google solo link e indirizzi e si possono disattivare. Le pagine non dicono se tutto questo vale per gli SMS, per RCS o per entrambi (**Fonte**: Google, guida di Messaggi).

**Inferenza**
- A un alias non si può rispondere, quindi resta «sconosciuto» per iPhone. Con il filtro acceso gli SMS di servizio finiscono fra i «Mittenti sconosciuti» o in «Transazioni», con notifica solo se l'utente l'ha consentita; i codici d'accesso invece notificano.
- **Il mittente deve essere chi possiede l'alias.** ƎE può essere il mittente se l'alias è suo; se a inviare è la società della piattaforma, servono un alias suo o una delega su alias univoco di ƎE. Si lega alla domanda «chi è il mittente e il titolare dei dati» (ticket 03 di Controllo A). **Serve un parere professionale.**

## 5. SMS: link e codici monouso

**Link**
- Gmail chiede che i link nel corpo delle email siano visibili e comprensibili: chi li tocca deve sapere cosa aspettarsi (**Fonte**: Google).
- Google Messaggi controlla i link (§4).
- Su iPhone: nessuna pagina Apple trovata su come Messaggi mostra o disattiva i link negli SMS di mittenti sconosciuti, né sulle anteprime negli SMS. **Da verificare** con una prova autorizzata.
- Link accorciati da servizi esterni e rischio truffa: nessuna fonte primaria italiana trovata (Polizia Postale, CERT-AgID, ACN). **Da verificare**.

**Codici monouso legati al dominio**

| Fonte | Formato | Dove funziona | Nota |
| --- | --- | --- | --- |
| **Apple**, documentazione per sviluppatori | Testo libero in testa; **ultima riga** `@dominio #codice`, separati da uno spazio. Esempio: «Your Example code is 123456.», riga vuota, «@example.com #123456». Per un accesso dentro un iframe di un altro dominio si aggiunge `%dominio-iframe` | iOS 14 e macOS Big Sur o successivi. Il codice viene proposto solo se il sito aperto in Safari, o un dominio associato all'app, coincide con quello dell'SMS. Sul sito il campo va marcato `autocomplete="one-time-code"` | Lo scopo dichiarato è rendere più difficile il phishing |
| **Apple**, manuale di iPhone (iOS 27) | — | iPhone riconosce il codice in Messaggi e lo propone sopra la tastiera; con Continuity gli SMS arrivano anche su iPad e Mac | Valido anche per gli SMS senza riga di dominio |
| **WICG**, *Origin-bound one-time codes delivered via SMS* (bozza del 24/3/2021; non è uno standard W3C; curatori di Apple e Google) | Ultima riga `@dominio #codice`, con un eventuale `@dominio-incorporato` dopo il codice; nulla prima di `@`. Il codice non ha limiti di lunghezza, ma non può contenere spazi | — | Per l'iframe usa `@`, Apple `%`: **Da verificare** quale accetti Safari oggi |
| **Google**, WebOTP (pagina con data 2019 e contenuti successivi) | Testo leggibile con un codice di 4–10 caratteri alfanumerici, con almeno una cifra; ultima riga `@dominio #codice`, dominio senza schema, porta né percorso | Chrome per Android dalla versione 84; Chrome sul computer se il telefono Android usa lo stesso account Google. Il browser chiede conferma con un pannello «Verifica» | Safari non ha l'API, ma propone il codice con `autocomplete="one-time-code"` |
| **MDN** (30/10/2025) | Uguale | API sperimentale, «disponibilità limitata», solo su HTTPS | Ricorda che gli SMS si possono falsificare o dirottare |
| **WHATWG**, HTML | `autocomplete="one-time-code"`: «codice monouso usato per verificare l'identità dell'utente» | — | — |

Le API Android SMS Retriever e SMS User Consent valgono solo per le app native: messaggio entro 140 byte con un hash di 11 caratteri dell'app, oppure un codice di 4–10 caratteri con almeno una cifra (**Fonte**: Google). Non servono finché la piattaforma è web (**Inferenza**).

**Sicurezza del codice via SMS** (**Fonte**: NIST SP 800-63B-4, norma federale USA, citata come riferimento tecnico e non vincolante in Italia). Per il NIST l'SMS è un autenticatore «limitato»:
- va offerta anche un'alternativa;
- prima di inviare il codice vanno considerati cambi di SIM e portabilità del numero;
- il codice ha almeno 6 cifre, vale 10 minuti e si usa una volta sola;
- i tentativi falliti vanno limitati.

## 6. Cosa ne segue per il design dei messaggi del percorso 1

Tutto il paragrafo è **Inferenza** dell'agente dalle fonti sopra; nulla è deciso.

**Email**
1. **Una colonna fluida**, larga al massimo circa 600 px (convenzione diffusa, non una regola dei fornitori) e leggibile a 320 px. `max-width` non vale in Outlook classico, quindi serve una larghezza fissa di riserva per quel programma.
2. **Caratteri di sistema.** La tipografia non deve dipendere da un font web: Gmail e Outlook non li caricano.
3. **Il fatto nel testo vivo, mai in un'immagine.** Il logo ha un nome testuale di riserva; le immagini decorative hanno `alt=""`.
4. **Tema scuro come caso normale, non come eccezione.** Dichiarare `color-scheme: light dark` e uno stile scuro curato per Apple Mail; prevedere che Gmail e Outlook ricolorino da soli; niente loghi neri su fondo trasparente; stati riconoscibili per parola e forma, non solo per colore. Le prove su app reali restano necessarie.
5. **Un solo pulsante**: un link `<a>` costruito con una cella di tabella colorata, mai `<button>` o moduli. Testo che dice la destinazione («Apri il canone di novembre») e altezza comoda per il dito.
6. **Anteprima nella lista = oggetto + prima riga visibile.** Niente testo d'anteprima nascosto con CSS: Gmail lo sconsiglia. Le possibili sintesi automatiche di Apple sono un motivo in più per mettere il fatto all'inizio.
7. **Versione solo testo** con lo stesso contenuto e lo stesso link.
8. **Accessibilità di base**: `lang="it"`, `role="presentation"` sulle tabelle di impaginazione, titoli veri, contrasto 4,5:1, testo dei link autosufficiente.
9. **«Innovativa e dinamica» senza AMP:**
   - la forma statica deve raccontare lo stato del mese, per esempio una piccola sequenza «dovuto → pagato → consegnato» con il passaggio attuale evidenziato e la data a cui si riferisce;
   - il movimento resta un'aggiunta: animazioni CSS che vedrà solo Apple Mail, rispettando `prefers-reduced-motion`, oppure una GIF breve il cui **primo fotogramma** sia già completo, perché Outlook classico mostra solo quello; entro 5 secondi e senza lampeggi;
   - la vista «viva» è nella piattaforma, dopo l'accesso.
10. **Nessun pixel di tracciamento** e nessun link con identificativi usati per misurare le aperture: evita consenso e informativa dedicati (linee guida del Garante, §2).
11. **Email leggere**, sotto la soglia oltre cui Gmail taglia i messaggi lunghi (circa 100 KB secondo fonti secondarie).
12. **Nome del mittente «ƎE · [servizio]»:** in un'email la «Ǝ» si può scrivere (UTF-8), ma va provato come appare nei programmi e nelle notifiche. Il fatto non deve dipendere da quel carattere.

**SMS**
1. **Scrivere solo in GSM-7**, con un controllo automatico prima dell'invio. Al posto di «ƎE» si usa «EE» o il nome scelto per l'alias. Niente «È» maiuscola: meglio riformulare («Il canone… è stato pagato») che ricorrere a «E'». Apostrofo dritto, niente «« »», niente emoji. «€» è ammesso, ma D22 esclude comunque gli importi.
2. **Un SMS per fatto, entro 160 caratteri.** Prefisso, fatto, mese e casa occupano circa 70–80 caratteri; il resto va al link. Il dominio della piattaforma, ancora da scegliere, conviene corto.
3. **Alias**: al massimo 11 caratteri GSM-7, distintivo, non generico. «EE» da solo rischia di essere troppo corto o già usato da altri: va controllato con il fornitore nel Registro. La scelta dipende dal nome del servizio (STUDIO, area N) e da chi è il mittente (§4).
4. **Gli SMS non ricevono risposte**: devono dire come contattare ƎE (il banco, un numero), oppure rimandare alla piattaforma. È una decisione di contenuto da prendere con l'utente.
5. **Link sul dominio proprio, visibile e corto**, senza abbreviatori pubblici; la pagina chiede l'accesso. Per chi ha solo il cellulare ogni avviso con link porta a un secondo SMS con il codice: due SMS e due costi per ogni interazione, da considerare nei costi e nel flusso.
6. **SMS del codice d'accesso**: codice di 6 cifre all'inizio; validità e avvertenza antifrode («non darlo a nessuno»); riga vuota; ultima riga `@dominio-della-piattaforma #codice`. Il campo nella pagina va marcato `autocomplete="one-time-code"`. Validità breve, uso singolo e limite dei tentativi seguendo il NIST come riferimento. Esempio I: 117 caratteri, 1 SMS.
7. **Non contare sulla notifica** degli SMS di servizio su iPhone con il filtro acceso: le cose importanti devono restare visibili nella piattaforma (già previsto in §10.5 per i documenti mancanti).

## 7. Domande aperte

- Prove reali, con autorizzazione dell'utente (account e invii veri): resa in tema scuro delle app Gmail, Outlook e Libero; come appare «Ǝ» nel nome del mittente; aspetto dei link e degli alias negli SMS su iPhone e Android; proposta automatica del codice.
- Fornitore SMS: è nel Registro AGCOM? Come fattura le parti? Sostituisce i caratteri? Accetta spazi nell'alias?
- Chi è il mittente dell'alias (ƎE o la società della piattaforma) e se serve una delega: **serve un parere professionale**, insieme al ticket 03.
- Deroghe sui pixel di tracciamento se un giorno si volessero misurare le aperture: **serve un parere professionale**.
- Il formato dell'iframe nei codici (`%` per Apple, `@` per la bozza WICG) conta solo se l'accesso finirà in un iframe di un altro dominio.

## Fonti non raggiunte

- **ETSI** (etsi.org/deliver): risposta 403 all'ambiente di ricerca. TS 23.038 e TS 23.040 sono stati letti nell'archivio 3GPP, che pubblica gli stessi testi.
- **Apple Developer**, pagina HTML sui codici legati al dominio: si apre solo con JavaScript. Il testo è stato letto dai dati JSON della stessa documentazione.
- **Google Security Blog**, «5 new protections on Google Messages» (22/10/2024): errore 503.
- **Microsoft Learn**, piano del nuovo Outlook: 404. Il Message Center (MC949965) richiede un account amministratore; letto solo in copia pubblica.
- **Apple**: nessuna pagina ufficiale trovata sulle righe di anteprima di Mail su iPhone, sui riassunti di Apple Intelligence nella lista e sui link negli SMS di mittenti sconosciuti.
- **Google**: nessuna pagina ufficiale trovata sul taglio dei messaggi lunghi in Gmail né sul ricolorare le email in tema scuro.
- **Italiaonline**: nessuna documentazione su come Libero e Virgilio mostrano le email HTML.
- **Polizia Postale, CERT-AgID, ACN**: nessuna indicazione ufficiale trovata sui link accorciati negli SMS.
- **Retelit**, codice di condotta (citato per il limite di 11 caratteri degli alias): https://retelit.it/it/informazioni/codice-di-condotta risponde 404.
- **AGCOM**: l'Allegato B della delibera 12/23/CIR (sintesi della consultazione) e l'elenco dei fornitori registrati non sono stati letti.

## Fonti

Lette il 23 ottobre 2026.

Standard e specifiche
- 3GPP TS 23.038 v20.0.0 (alfabeti), archivio 3GPP, file `23038-k00.zip` del 29/6/2026: https://www.3gpp.org/ftp/Specs/archive/23_series/23.038/
- 3GPP TS 23.040 v20.0.0 (servizio SMS), archivio 3GPP, file `23040-k00.zip` del 22/9/2026: https://www.3gpp.org/ftp/Specs/archive/23_series/23.040/
- 3GPP, scheda della specifica 23.038: https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=745
- WICG, Origin-bound one-time codes delivered via SMS (bozza del 24/3/2021): https://wicg.github.io/sms-one-time-codes/
- WHATWG, HTML, campo `one-time-code`: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete-one-time-code
- W3C, WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C, WAI-ARIA 1.2, ruolo `presentation`: https://www.w3.org/TR/wai-aria-1.2/#presentation
- W3C WAI, tutorial sulle tabelle (16/2/2023): https://www.w3.org/WAI/tutorials/tables/
- IETF, RFC 2046 (MIME, `multipart/alternative`): https://www.rfc-editor.org/rfc/rfc2046
- NIST, SP 800-63B-4: https://pages.nist.gov/800-63-4/sp800-63b.html

Fornitori: email
- Google, CSS supportato in Gmail (aggiornata il 15/9/2026): https://developers.google.com/workspace/gmail/design/css
- Google, linee guida per i mittenti (formato dei messaggi e nome visualizzato): https://support.google.com/a/answer/81126?hl=en
- Google, immagini in Gmail: https://support.google.com/mail/answer/145919?hl=en
- Apple / WebKit, tema scuro (7/5/2019): https://webkit.org/blog/8840/dark-mode-support-in-webkit/
- Apple, Manuale utente del Mac (disponibilità di Apple Intelligence): https://support.apple.com/en-mide/guide/mac-help/mchlb2dbea8f
- Microsoft, Word 2007 HTML and CSS Rendering Capabilities in Outlook 2007, parte 1 (agosto 2006, archiviata): https://learn.microsoft.com/en-us/previous-versions/office/developer/office-2007/aa338201(v=office.12)
- Microsoft, Dark Mode in Outlook: https://support.microsoft.com/en-us/office/dark-mode-in-outlook-3e2446e0-9a7b-4189-9af9-57fb94d02ae3
- Italiaonline, pixel di tracciamento in Libero: https://aiuto.libero.it/articolo/mail/pixel-di-tracciamento-modalita-di-gestione-e-consenso/
- Italiaonline, pubblicità in Libero Mail: https://aiuto.libero.it/articolo/mail/la-pubblicita-di-libero-mail/
- Italiaonline, app Libero Mail (requisiti): https://aiuto.libero.it/articolo/mail/app-ufficiale-di-libero-mail/
- Italiaonline, account nell'app Libero Mail (Libero e Virgilio): https://aiuto.libero.it/articolo/mail/configurare-e-gestire-account-app-libero-mail/

Fornitori: SMS e codici
- Apple, Enabling AutoFill for domain-bound SMS codes: https://developer.apple.com/documentation/security/enabling-autofill-for-domain-bound-sms-codes (letta tramite https://developer.apple.com/tutorials/data/documentation/security/enabling-autofill-for-domain-bound-sms-codes.json)
- Apple, Inserire automaticamente i codici SMS su iPhone (manuale iOS 27): https://support.apple.com/it-it/guide/iphone/iphc89a3a3af/ios
- Apple, mittenti sconosciuti in Messaggi (14/4/2026): https://support.apple.com/it-it/125068
- Google, WebOTP API: https://developer.chrome.com/docs/identity/web-apis/web-otp
- Google, SMS Retriever API: https://developers.google.com/identity/sms-retriever/verify
- Google, SMS User Consent API: https://developers.google.com/identity/sms-retriever/user-consent/request
- Google, protezione da spam e truffe in Messaggi: https://support.google.com/messages/answer/9327903?hl=en
- Google, anteprime automatiche in Messaggi: https://support.google.com/messages/answer/9327749?hl=en
- MDN, WebOTP API (30/10/2025): https://developer.mozilla.org/en-US/docs/Web/API/WebOTP_API

Autorità e norme
- AGCOM, delibera 12/23/CIR (scheda): https://www.agcom.it/provvedimenti/delibera-12-23-cir
- AGCOM, delibera 12/23/CIR (testo): https://www.agcom.it/sites/default/files/migration/delibera/Delibera%2012-23-CIR.pdf
- AGCOM, Allegato A alla delibera 12/23/CIR (regolamento): https://www.agcom.it/sites/default/files/migration/attachment/Allegato%2015-5-2023.pdf
- AGCOM, delibera 9/26/CIR del 26/2/2026: https://www.agcom.it/sites/default/files/provvedimenti/delibera/2026/9-26-CIR.pdf
- AGCOM, Registro degli Alias e guida alla registrazione (versione 2.0): https://alias.agcom.it/ e https://alias.agcom.it/docs/guida_registrazione_alias.pdf
- Garante privacy, Linee guida sui tracking pixel, provv. n. 284 del 17/4/2026 (doc. web 10241943): https://www.garanteprivacy.it/home/docweb/-/docweb-display/print/10241943

Fonti secondarie (usate solo dove manca la primaria)
- caniemail.com, dati del 16/9/2026: https://www.caniemail.com/api/data.json. Schede usate: https://www.caniemail.com/features/css-at-media-prefers-color-scheme/, https://www.caniemail.com/features/html-meta-color-scheme/, https://www.caniemail.com/features/css-at-font-face/, https://www.caniemail.com/features/css-animation/, https://www.caniemail.com/features/image-gif/, https://www.caniemail.com/features/css-at-media-prefers-reduced-motion/, https://www.caniemail.com/features/html-lang/, https://www.caniemail.com/features/html-role/
- Twilio, limite di caratteri degli SMS (16/9/2026): https://www.twilio.com/docs/glossary/what-sms-character-limit
- SendGrid, messaggi troncati in Gmail: https://support.sendgrid.com/hc/en-us/articles/9298249378075--Message-clipped-Emails-Sent-to-Gmail-Inboxes
- 9to5Mac, funzioni di iOS 18.1 (10/10/2024): https://9to5mac.com/2024/10/10/these-ios-181-features-could-make-the-biggest-difference-for-users/
- Copia pubblica del messaggio MC949965 del Microsoft 365 Message Center: https://mc.merill.net/message/MC949965
