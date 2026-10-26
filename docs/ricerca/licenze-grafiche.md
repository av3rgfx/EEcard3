# Licenze di carattere, icone e immagini

Ricerca del 26 ottobre 2026, svolta da un agente in background (skill research) su fonti primarie, con la data di lettura per ogni fonte. Risponde al ticket [17 «Ricerca: licenze di icone, carattere e immagini»](../../.scratch/design-percorso-1/issues/17-ricerca-licenze-grafiche.md).

**Non è un parere legale.** Dice cosa scrivono oggi le licenze, le condizioni e le norme che si sono potute leggere. Se un uso è lecito nel caso concreto lo valuta un avvocato esperto di diritto d'autore e proprietà intellettuale. Nessun account è stato creato, nessun file a pagamento scaricato, nessun fornitore contattato.

**Controllo a campione** della sessione principale (26/10/2026), sulle fonti originali: il file `OFL.txt` di Manrope in Google Fonts (OFL 1.1, nessun nome riservato); il file `Manrope[wght].ttf` riletto con fontTools (versione 4.505, asse 200–800, `tnum` presente, «€», lettere accentate e «« »» presenti, «Ǝ» assente, `fsType` 0); il file `LICENSE` di Lucide (ISC più l'elenco delle icone derivate da Feather); l'art. 50, par. 4, dell'AI Act sull'AI Act Service Desk; il nuovo art. 1 della legge 633/1941 nella Gazzetta Ufficiale (legge 132/2025, in vigore dal 10/10/2025). Tutto confermato. Le pagine delle condizioni di OpenAI rispondono 403 anche alla sessione principale: il §3.2–3.6 resta **Da verificare**.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Manrope ha la SIL Open Font License 1.1, senza nome riservato.** Si può usare nel sito, nell'app, nei PDF, nelle immagini e nel logo, anche a fini commerciali. Non si può vendere il file del carattere da solo. Chi distribuisce il file deve includere la nota di copyright e la licenza [2][4][6][7].
- **Manrope non contiene la lettera «Ǝ» (U+018E) del nome ƎE.** Contiene «€», le lettere accentate italiane, le virgolette «» e le cifre in colonna (`tnum`). È variabile, peso 200–800, versione 4.505 [4]. Il browser prenderà «Ǝ» da un altro carattere (**Inferenza**).
- **Meglio servire Manrope dal nostro server, non dal servizio di Google.** Con il servizio di Google l'indirizzo IP di ogni visitatore arriva a Google [8]. Un tribunale tedesco (LG München I, 20/1/2022) ha condannato un sito per questo, senza consenso [9]. Con i file sul nostro server Google non riceve nulla [8].
- **Icone: Lucide è la scelta più adatta.** Licenza ISC più MIT per le icone ereditate da Feather; griglia 24×24, tratto regolabile, estremità arrotondate, nessun logo di marchi; tutte le icone del percorso ci sono [10][11][12][13][14]. Alternative: Tabler (MIT) e Phosphor «light» (MIT).
- **Le condizioni di OpenAI non si sono potute aprire** (errore 403 a ogni lettura automatica). Gli estratti del motore di ricerca dicono che l'output appartiene all'utente «nei limiti consentiti dalla legge», che può non essere unico e che non si può presentare come fatto da una persona. Tutto **Da verificare** sulla pagina.
- **Nessuna garanzia da OpenAI sui diritti di terzi per i piani personali** (**Da verificare**). Dagli estratti, la tutela contro le contestazioni sui diritti di terzi copre solo i clienti API ed «Enterprise» (ChatGPT Enterprise, Edu, Healthcare). Il piano usato per le immagini non è noto.
- **In Italia sono protette solo le opere dell'ingegno umano**, anche se create con l'aiuto dell'IA, purché siano «risultato del lavoro intellettuale dell'autore» (legge 132/2025, art. 25) [23]. Un'immagine nata da una semplice richiesta potrebbe non essere protetta: altri potrebbero copiarla (**Inferenza**, serve parere).
- **AI Act, art. 50, in vigore dal 2/8/2026.** L'obbligo di etichettare riguarda i «deep fake», cioè contenuti che sembrano autentici e somigliano a persone, luoghi o oggetti esistenti [22]. Una stanza e una tessera decorative probabilmente non lo sono, ma è un punto da parere (**Inferenza**).
- **Raccomandazione dell'agente:** Manrope dal nostro server; Lucide; le immagini ChatGPT solo nei prototipi finché l'utente non ha letto le condizioni del suo piano e non c'è un parere, da chiedere insieme a quello sul marchio Connetto.

## 1. Carattere Manrope

### 1.1 Licenza e titolari

- **Licenza: SIL Open Font License, versione 1.1** (testo del 26/2/2007). Lo dicono la scheda licenza di Google Fonts [2], il file `OFL.txt` di Google Fonts e del repository di build [4][5], e i metadati del file del carattere [4].
- **Nota di copyright.** Il file `OFL.txt` in Google Fonts e nel repository `googlefonts/manrope` dice «Copyright 2018 The Manrope Project Authors (https://github.com/googlefonts/manrope)» [4][5]. La scheda di Google Fonts mostra lo stesso testo con l'indirizzo `github.com/sharanda/manrope` [2]. Il file del carattere dice «Copyright 2019» [4]. Quel repository dell'autore oggi risponde «non trovato» (**Fonte**: lettura del 26/10/2026). **Inferenza:** basta copiare il file `OFL.txt` che accompagna i file scaricati, senza riscriverlo.
- **Nessun nome riservato (Reserved Font Name).** Le note di copyright non dichiarano nomi riservati [2][4][5]. Dalla versione 1.1 nessun nome è riservato per default [7, FAQ 5.7].
- **Autore:** Mikhail Sharanda (2018); versione variabile con Mirko Velimirovic (2019) [1].

### 1.2 Cosa permette la licenza

| Uso | Permesso? | Condizioni | Fonte |
| --- | --- | --- | --- |
| Pagine web con `@font-face`, file sul nostro server o di un servizio | Sì | È una distribuzione: il file porta con sé copyright e licenza | [7, FAQ 2.1, 1.10] |
| Conversione in WOFF2 | Sì | Non è modifica solo se i dati restano uguali e i metadati intatti | [7, FAQ 2.2.1] |
| Sottoinsieme di lettere (subsetting) | Sì | È una modifica; resta sotto OFL | [7, FAQ 2.6] |
| App iPhone con il file incluso | Sì | Includere copyright, avviso e testo della licenza; consigliata una menzione in «Informazioni» | [7, FAQ 1.4, 1.20] |
| Email con `@font-face` | Sì per la licenza | Come le pagine web; il supporto dei programmi di posta è un altro tema | [7, FAQ 2.1] |
| PDF delle ricevute con il carattere incorporato | Sì, intero o in parte | Nessun testo di licenza nel PDF; il PDF non diventa OFL | [7, FAQ 1.10–1.13] |
| Testo in immagini, anche deformato | Sì | Il risultato è un'immagine, non un carattere | [7, FAQ 1.1, 1.13]; [8] |
| Scritta del nome e logo | Sì | Il logo resta nostro e non diventa OFL; nessuna citazione obbligatoria | [7, FAQ 1.1–1.1.2]; [8] |
| Vendere il file del carattere da solo | No | Si può vendere solo insieme a un software | [6] condizione 1; [7, FAQ 1.4–1.6] |
| Promuovere una versione modificata con il nome dell'autore | No | Solo ringraziamenti | [6] condizione 4; [7, FAQ 1.19] |

- **Fonte (Google Fonts, FAQ):** «you can use them commercially, and even include them within a product that is sold commercially»; «you can use Google Fonts within any logo» [8].
- **Fonte (OFL, FAQ 1.10):** il testo della licenza può mancare solo quando il carattere è incorporato in un documento o in un programma. Nei metadati del font basta un link alla licenza, ma SIL lo sconsiglia [7]. Il file di Manrope ha nei metadati l'avviso e il link `https://openfontlicense.org` [4].
- **Inferenza.** Sul nostro server conviene mettere `OFL.txt` accanto ai file del carattere. Nell'app iPhone serve una pagina «Licenze» con copyright e testo OFL.
- **Inferenza sul logo.** La licenza non vieta il logo. Ma una scritta in un carattere libero e non modificato è facile da imitare. Quanto la scritta sia distintiva come marchio è una domanda per il parere sul marchio già previsto.

### 1.3 Versione, assi e lettere

Verifiche sul file `Manrope[wght].ttf` di Google Fonts, letto con fontTools il 26/10/2026 [4].

- **Versione 4.505.** Il README del progetto elenca fino alla 4.504 del 22/10/2020 [5]. **Inferenza:** il disegno è stabile da anni.
- **Variabile:** un asse `wght` da 200 a 800 [4]. Sette pesi anche come file statici [5].
- **Cifre tabellari:** la funzione `tnum` c'è, insieme a `pnum`, `case`, `frac`, `ordn`, `liga` e `calt` [4]. In CSS: `font-variant-numeric: tabular-nums`.
- **Lettere italiane e simboli:** presenti à è é ì í ò ó ù ú, le maiuscole accentate, «€», «’», «« »», «–» e «—» [4]. Google Fonts elenca il sottoinsieme latino esteso [3][4].
- **«Ǝ» (U+018E) manca** nella tabella dei caratteri del file [4]. Manca anche «ǝ» (U+01DD). **Inferenza:** in «ƎE» il browser disegnerà «Ǝ» con un altro carattere di sistema, con peso e forma diversi. Le soluzioni sono nella scelta 5.2.
- **Nessun limite all'incorporamento nel file** (campo `fsType` = 0) [4]. **Inferenza:** i programmi che creano PDF possono incorporarlo senza blocchi.

### 1.4 Servizio di Google o file sul nostro server

- **Fonte (Google Fonts, FAQ «Privacy»).** Con il servizio di Google, il browser di ogni visitatore manda a Google l'indirizzo IP, l'indirizzo richiesto e le intestazioni (browser, sistema operativo, pagina di provenienza). Google dice di non creare profili né pubblicità con questi dati e di non usare cookie. Se i file stanno sul server del sito, «Google does not receive any kind of data related to the visits to the website» [8].
- **Fonte (LG München I, 3 O 17493/20, 20/1/2022).** Il tribunale ha vietato a un sito di passare a Google l'IP di un visitatore tramite Google Fonts senza consenso. Ha riconosciuto 100 € di danno. Non c'è interesse legittimo, perché Google Fonts «kann … auch genutzt werden, ohne dass … eine Verbindung zu einem Google-Server hergestellt wird» [9].
- **Inferenza.** È una sentenza tedesca di primo grado, non una regola italiana. Ma la soluzione è semplice e senza costi: file sul nostro server. Vale anche per le email: un `@font-face` che punta a Google manderebbe a Google l'IP di chi apre il messaggio.
- I vantaggi del servizio di Google (file più piccoli, aggiornamenti automatici) [8] contano poco: Manrope non cambia dal 2020 e un solo file variabile WOFF2 basta (**Inferenza**).

## 2. Icone a tratto

### 2.1 Set valutati e scartati

- **Lucide**, **Tabler** e **Phosphor**: valutati sotto.
- **Feather** (MIT): fermo da anni (ultima versione 4.29.2, 1/5/2024 [21]); manca la ricevuta (`receipt` non esiste) [17]. Lucide ne è la continuazione.
- **Heroicons** (MIT): solo 316 icone, tratto 1,5 [18]; ultima versione su npm 2.2.0 del 18/11/2024 [21].
- **Iconoir** (MIT): 1.671 icone, attivo (7.12.1, 12/8/2026 [21]); tratto 1,5 [19]. Valido, ma con tratto 1,5 fisso nel disegno e meno pacchetti ufficiali; Lucide e Tabler hanno la stessa costruzione SVG delle icone del prototipo (24×24, tratto 1,6, estremità arrotondate) (**Inferenza**).
- **Material Symbols** (Apache 2.0 [20]): stile Google riconoscibile, pensato come carattere a icone; la licenza Apache chiede più adempimenti (copia della licenza, file NOTICE se presente) (**Inferenza**).

### 2.2 Lucide

- **Licenza.** File `LICENSE` e pagina «License» [11]: **ISC**, «Copyright (c) 2026 Lucide Icons and Contributors». Testo chiave: «Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.»
- **Due licenze sommate.** Lo stesso file elenca circa 120 icone «derived from the Feather project», sotto **licenza MIT** di Cole Bemis (2013-present) [11]. La licenza di Feather è MIT, non ISC [17]. Fra le icone del percorso ne derivano da Feather: `calendar`, `check`, `chevron-left`, `chevron-right`, `clock`, `download`, `info`, `log-out`, `plus`, `search`, `upload`, `minus` [11].
- **Obblighi.** Conservare le due note di copyright e di licenza nelle copie del codice distribuito. Le licenze non chiedono nulla nelle schermate (**Inferenza** dal testo [11]). Uso commerciale e modifiche permessi [11].
- **Marchi.** Lucide «does not accept brand logos» e ha tolto quelli che aveva [12]. Le icone di marchi provate (`github`, `facebook`, `chrome`) non esistono più [14].
- **Disegno.** Griglia 24×24; tratto di 2 px; giunzioni e estremità arrotondate; angoli arrotondati [13]. Ogni SVG ha `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap="round"` e `stroke-linejoin="round"` [14]: è la stessa costruzione delle icone del prototipo. Il sito permette di cambiare colore, dimensione e spessore e offre il tratto che non scala [10]. **Inferenza:** 1,6 e 2,2–2,3 si ottengono cambiando solo `stroke-width`.
- **Numeri e manutenzione.** 1.903 icone, versione 1.61.0 [10], pubblicata il 21/10/2026 [21].

### 2.3 Tabler Icons

- **Licenza.** File `LICENSE`: **MIT**, «Copyright (c) 2020-2026 Paweł Kuna» [15]. Uso commerciale e modifiche permessi; la nota di copyright va inclusa «in all copies or substantial portions of the Software».
- **Marchi.** Ha una categoria «Brand» con loghi di aziende (per esempio `brand-apple`, `brand-google`) [15]. **Inferenza:** la licenza MIT copre il disegno dell'icona, non il diritto di usare il marchio; quelle icone non vanno usate senza le regole del titolare.
- **Disegno.** 6.238 icone: 5.184 a tratto e 1.054 piene; griglia 24×24 e tratto di 2 px [15]. Stessi attributi SVG di Lucide (`currentColor`, estremità e giunzioni arrotondate) [15]. Il sito permette di cambiare lo spessore [15].
- **Manutenzione.** Versione 3.49.0 del 5/10/2026 [15][21]. Il sito vende anche prodotti a pagamento; le icone restano MIT [15].

### 2.4 Phosphor (peso «light» o «regular»)

- **Licenza.** File `LICENSE`: **MIT**, «Copyright (c) 2023 Phosphor Icons» [16].
- **Marchi.** Include loghi (per esempio `apple-logo`, `google-logo`, `amazon-logo`) [16]. Stessa avvertenza di Tabler (**Inferenza**).
- **Disegno.** Sei pesi fissi (Thin, Light, Regular, Bold, Fill, Duotone) [16]. Gli SVG sono su griglia 256×256 e sono **forme piene** (`fill="currentColor"`), non tratti [16]. **Inferenza:** lo spessore non si regola via CSS; dalle coordinate, «regular» equivale a circa 1,5 px su 24 e «light» a circa 1,1 px. Non si ottengono esattamente 1,6 e 2,2.
- **Numeri e manutenzione.** 9.072 icone in tutti i pesi [16], cioè circa 1.512 per peso (**Inferenza**). Pacchetto `core` 2.1.1 del 29/3/2024; pacchetto React 2.1.10 del 22/5/2025 [21]. Aggiornato meno spesso degli altri due.

### 2.5 Le icone del percorso nei tre set

Nomi verificati il 26/10/2026 sui file dei repository ufficiali (risposta 200) [14][15][16]. «(c)» indica un cerchio intorno al disegno.

| Uso | Lucide | Tabler (outline) | Phosphor (light) |
| --- | --- | --- | --- |
| Casa | `house` | `home` | `house` |
| Più case | `houses` | `building-community` | `buildings` |
| Ricevuta | `receipt`, `receipt-text` | `receipt`, `receipt-2` | `receipt` |
| Documento | `file-text` | `file-text` | `file-text` |
| Persona | `user` | `user` | `user` |
| Tessera | `credit-card`, `id-card` | `credit-card`, `id` | `credit-card`, `identification-card` |
| Telefono | `phone` | `phone` | `phone` |
| Freccia a destra | `chevron-right` | `chevron-right` | `caret-right` |
| Indietro | `arrow-left`, `chevron-left` | `arrow-left` | `arrow-left` |
| Spunta | `check` | `check` | `check` |
| Trattino (in attesa) | `minus` | `minus` | `minus` |
| Orologio | `clock` | `clock` | `clock` |
| Calendario, oggi | `calendar`, `calendar-check`, `calendar-1` | `calendar`, `calendar-event` | `calendar`, `calendar-dots` |
| Contanti | `banknote`, `hand-coins` | `cash`, `cash-banknote` | `money` |
| Fumetto «contesta» | `message-square`, `message-square-warning` | `message`, `message-report` | `chat-circle`, `chat-centered-text` |
| Archivio | `archive` | `archive` | `archive` |
| Più | `plus` | `plus` | `plus` |
| Luogo | `map-pin` | `map-pin` | `map-pin` |
| Copia | `copy` | `copy` | `copy` |
| Carica | `upload` | `upload` | `upload-simple` |
| Scarica | `download` | `download` | `download-simple` |
| Cerca | `search` | `search` | `magnifying-glass` |
| Uscita | `log-out` | `logout` | `sign-out` |
| Informazioni | `info` (c) | `info-circle` (c), `info-small` | `info` (forma **Da verificare**) |

- **Nessuna icona manca** nei tre set. In Lucide il vecchio nome `home` è stato sostituito da `house` [14].
- **«Informazioni» ha il cerchio** in Lucide [14] e nella variante principale di Tabler [15]. **Inferenza:** è un'eccezione accettabile, perché la «i» nel cerchio è il segno convenzionale; Tabler ha anche `info-small` senza cerchio.
- **Quanto «più case» somigli alle case di ƎE** è un giudizio visivo (**Inferenza**): `houses` di Lucide mostra due case, gli altri due set mostrano palazzi.

### 2.6 Confronto

| | Lucide | Tabler | Phosphor |
| --- | --- | --- | --- |
| Licenza | ISC + MIT (icone da Feather) | MIT | MIT |
| Attribuzione | Due note nel codice distribuito | Una nota nel codice | Una nota nel codice |
| Uso commerciale e modifiche | Sì | Sì | Sì |
| Loghi di marchi | No, rifiutati per scelta | Sì (categoria «Brand») | Sì (`*-logo`) |
| Numero di icone | 1.903 | 5.184 a tratto (6.238 in tutto) | circa 1.512 per peso |
| Griglia e tratto | 24×24, 2 px, regolabile | 24×24, 2 px, regolabile | 256×256, pesi fissi, forme piene |
| Estremità arrotondate | Sì, obbligatorie | Sì | Sì, nel disegno |
| Ultima versione | 1.61.0, 21/10/2026 | 3.49.0, 5/10/2026 | core 2.1.1, 29/3/2024 |
| Vicinanza al prototipo | Massima (stessa costruzione SVG) | Alta | Media (spessori fissi) |

## 3. Immagini generate con ChatGPT

### 3.1 Cosa si è potuto leggere

- **Le pagine di OpenAI non si sono aperte.** `openai.com/policies/...` e il centro assistenza `help.openai.com` rispondono 403 a ogni lettura automatica. Un rendering con browser senza interfaccia è stato bloccato dalle regole dell'ambiente, perché aggirerebbe un controllo anti-bot. L'agente non ha insistito.
- **I punti 3.2–3.6 vengono dagli estratti del motore di ricerca** di quelle pagine. Sono tutti **Da verificare**: l'utente può aprire le pagine nel proprio browser in pochi minuti (elenco in «Fonti non raggiunte»).
- Le norme UE e italiane (3.7, 3.8) sono state lette su fonti ufficiali.

### 3.2 Proprietà e uso commerciale (Da verificare)

- **Quali condizioni valgono.** Le «Europe Terms of Use» valgono per chi risiede nello SEE, in Svizzera o nel Regno Unito. L'uso aziendale segue condizioni separate. Il «Services Agreement» (aggiornato l'1/12/2025, in vigore dall'1/1/2026) copre le API, ChatGPT Business, ChatGPT Enterprise e gli altri servizi per aziende. **Inferenza:** con un piano gratuito o Plus valgono le condizioni europee per i consumatori; con Business o Enterprise il Services Agreement.
- **Proprietà dell'output.** Nelle condizioni europee: «as between you and OpenAI, and to the extent permitted by applicable law, you (a) retain your ownership rights in Input and (b) own the Output. We hereby assign to you all our right, title, and interest, if any, in and to Output.» Il Services Agreement (sezione 4.1) ha una frase quasi uguale.
- **Uso commerciale.** Negli estratti non c'è un divieto. **Inferenza:** chi riceve tutti i diritti sull'output può usarlo anche a fini commerciali, nei limiti delle Usage Policies (non lette).
- **«If any».** OpenAI cede solo i diritti che ha, se ne ha. Se l'immagine non è protetta (3.8), non c'è nulla da cedere (**Inferenza**).

### 3.3 Somiglianza, garanzie e indennizzo (Da verificare)

- **Output non unico.** La sezione «Similarity of content» dice che l'output può non essere unico. Altri utenti possono ottenere risultati simili. La cessione non copre l'output di altri utenti né l'output di terzi.
- **Nessuna garanzia per i consumatori.** Gli estratti non mostrano alcun impegno di OpenAI verso l'utente se un'immagine viola diritti altrui. Secondo raccolte di terzi (non ufficiali), le condizioni europee prevedono anzi che sia l'utente a tenere indenne OpenAI.
- **Indennizzo solo per alcuni piani aziendali.** Le «Service Terms» definiscono «Enterprise» come «ChatGPT Enterprise, ChatGPT Edu, and ChatGPT for Healthcare». Per questi, e per le API, OpenAI si impegna a difendere il cliente se l'uso dell'output viola la proprietà intellettuale di terzi. Ci sono esclusioni: cliente che sapeva o doveva sapere, filtri di sicurezza disattivati, output modificato o combinato con altri prodotti, contestazioni di marchio. **Inferenza:** ChatGPT Business, Plus e gratuito non sembrano coperti. Le immagini della pagina d'accesso sono state separate in livelli e convertite, quindi «modificate»: anche con Enterprise la copertura sarebbe incerta.

### 3.4 Dire che è fatto con l'IA (Da verificare)

- **Divieto.** Fra gli usi vietati c'è «representing that Output was human-generated when it was not» (condizioni europee e mondiali).
- **Sharing & publication policy.** Chiede di rivedere l'output prima di pubblicarlo e di indicare il ruolo dell'IA in modo che nessuno possa non vederlo. Gli estratti si riferiscono soprattutto a testi e post; per le immagini di un'interfaccia non è chiaro.
- **Inferenza.** Nessun testo letto obbliga a scrivere «generata con IA» sotto un'immagine decorativa. Non si deve però dire o far intendere che sia una foto o il lavoro di un illustratore. Una riga nelle note legali o nei crediti costa poco e toglie il dubbio.

### 3.5 Metadati C2PA e filigrana (Da verificare)

- **Cosa aggiunge OpenAI.** Secondo gli estratti dell'articolo del centro assistenza, le immagini di ChatGPT e delle API portano metadati **C2PA** e una filigrana invisibile **SynthID** nei pixel. La verifica si fa su `openai.com/verify`. L'annuncio originale diceva che i metadati si perdono facilmente, per esempio con uno screenshot o sui social.
- **WebP.** La specifica C2PA 2.2 prevede i metadati anche nei file WebP, in un blocco chiamato «C2PA» [24]. **Inferenza:** il formato WebP non li toglie da solo. Li toglie quasi sempre la conversione con i programmi comuni, e di certo la separazione in livelli. La filigrana nei pixel può restare in parte. Si può controllare caricando i file su `openai.com/verify` (a cura dell'utente).
- **Si possono togliere?** Negli estratti non c'è un divieto. L'obbligo di marcatura dell'AI Act (art. 50, par. 2) è del fornitore, cioè di OpenAI [22]. Le Usage Policies non sono state lette: un eventuale divieto di aggirare le misure di sicurezza è **Da verificare**.

### 3.6 Il piano usato per le immagini

- Non si sa con quale piano l'utente abbia generato le immagini. Dagli estratti, **il piano cambia due cose**: quali condizioni valgono (consumatori o Services Agreement) e se c'è l'indennizzo di OpenAI (solo Enterprise, Edu, Healthcare e API). La proprietà dell'output è descritta allo stesso modo nei due testi (**Da verificare**).

### 3.7 AI Act, articolo 50

Letto sul testo consolidato al 27/7/2026, pubblicato dall'AI Act Service Desk della Commissione europea [22]. EUR-Lex ha risposto con un controllo anti-bot.

- **Fonte (art. 50, par. 2).** I **fornitori** di sistemi che generano immagini devono marcare l'output «in a machine-readable format» come generato artificialmente.
- **Fonte (art. 50, par. 4).** I **deployer** (chi usa il sistema) di un sistema che genera immagini che costituiscono un «deep fake» devono dichiarare che il contenuto è generato o manipolato. Per opere evidentemente artistiche o di fantasia basta segnalarlo in modo che non disturbi la visione.
- **Fonte (art. 3, punto 60).** «Deep fake»: contenuto generato o manipolato dall'IA «that resembles existing persons, objects, places, entities or events and would falsely appear to a person to be authentic or truthful».
- **Fonte (art. 50, par. 5; art. 113; art. 111, par. 4).** L'informazione va data in modo chiaro al più tardi alla prima esposizione e deve essere accessibile. L'articolo si applica dal **2/8/2026**. I fornitori con sistemi già sul mercato prima di quella data hanno tempo fino al **2/12/2026** per il paragrafo 2.
- **Inferenza.** Una stanza inventata e una tessera anonima, usate come decorazione, difficilmente «sembrano falsamente autentiche» rispetto a un luogo o oggetto reale. Restano due dubbi. Primo: chi è il deployer, l'utente che ha generato le immagini o ƎE che le pubblica. Secondo: la tessera di rame mostra un prodotto che i clienti riceveranno davvero. Se la tessera vera sarà diversa, il problema non è l'AI Act ma la correttezza verso i consumatori. Entrambi i punti vanno al parere.

### 3.8 Diritto d'autore in Italia

- **Fonte (legge 23 settembre 2025, n. 132, art. 25; GU n. 223 del 25/9/2025; in vigore dal 10/10/2025) [23].** Il nuovo art. 1 della legge 633/1941 dice: «Sono protette ai sensi di questa legge le opere dell'ingegno umano di carattere creativo […] qualunque ne sia il modo o la forma di espressione, anche laddove create con l'ausilio di strumenti di intelligenza artificiale, purché costituenti risultato del lavoro intellettuale dell'autore.»
- **Inferenza.** Un'immagine ottenuta con una richiesta a ChatGPT potrebbe non avere abbastanza lavoro intellettuale umano per essere protetta. In quel caso un concorrente potrebbe copiare la stanza o la tessera senza violare il diritto d'autore. Il lavoro dell'utente (scelta, correzioni, separazione in livelli, composizione) potrebbe aggiungere un contributo umano. Quanto pesi lo valuta il professionista. L'aspetto della tessera si potrebbe proteggere anche in altri modi, per esempio come disegno o marchio: anche questo va al parere.

### 3.9 Somiglianza con opere esistenti: cosa fare in modo semplice

- OpenAI non garantisce che l'output sia unico né che non somigli a opere altrui (3.3).
- **Passi semplici, a cura dell'utente** (suggerimenti, l'agente non li ha eseguiti):
  - una ricerca inversa delle due immagini con Google Lens o TinEye;
  - conservare richieste, date, piano usato e file originali, come prova della provenienza;
  - controllare i file su `openai.com/verify`;
  - evitare richieste «nello stile di» artisti o marchi riconoscibili nelle immagini future.

## 4. Dove serve un parere professionale

Un avvocato esperto di diritto d'autore e proprietà intellettuale, con attenzione a consumatori e AI Act. Conviene un solo incarico, insieme al parere sul marchio «Connetto» già previsto ([ticket 08](../../.scratch/design-percorso-1/issues/08-parere-nome-connetto.md)).

1. Se le immagini ChatGPT si possono usare nel prodotto e nei materiali promozionali con il piano effettivamente usato, e con quali rischi in assenza di indennizzo.
2. Se le immagini sono protette dalla legge 633/1941 come modificata nel 2025, e come proteggere comunque la stanza e la tessera (diritto d'autore, disegno, marchio).
3. Se l'art. 50 dell'AI Act si applica a immagini decorative di un'interfaccia, e chi sarebbe il deployer.
4. Se mostrare una tessera generata diversa da quella vera è un problema verso i consumatori.
5. Se la scritta del nome in Manrope non modificato è abbastanza distintiva come marchio.
6. Se servire caratteri dal servizio di Google richiede il consenso in Italia (solo se si sceglie quella strada).

## 5. Scelte per l'utente

### 5.1 Da dove arriva il carattere Manrope

- **Opzione A: file sul nostro server.** Il sito scarica il carattere da noi. Google non riceve dati dei visitatori. Mettiamo il file della licenza accanto al carattere. Va aggiornato a mano, ma Manrope non cambia dal 2020.
- **Opzione B: servizio di Google Fonts.** Più comodo, ma l'indirizzo IP di ogni visitatore arriva a Google. In Germania un sito è stato condannato per questo. Probabilmente servirebbe il consenso dei visitatori.
- **Raccomandazione: A.** Costa pochi minuti, toglie un problema di privacy e vale anche per le email e per l'app.

### 5.2 La lettera «Ǝ» del nome ƎE

- **Opzione A: lasciare fare al browser.** «Ǝ» appare in un altro carattere, forse un po' diverso. Nessun lavoro.
- **Opzione B: aggiungere «Ǝ» a una copia di Manrope.** La licenza lo permette; la copia resta sotto la stessa licenza. Serve un lavoro di tipografia, piccolo ma da fare bene.
- **Opzione C: dove il nome è un marchio (intestazioni, tessera, email), usare il logo di ƎE come immagine.** Nel testo corrente resta l'opzione A o B.
- **Raccomandazione:** prima guardare A nel prototipo su iPhone e su un computer Windows. Se lo scarto si nota, B per il testo e C per i punti di marchio.

### 5.3 Quale set di icone

- **Opzione A: Lucide.** Stessa costruzione delle icone disegnate nel prototipo, spessore regolabile, ci sono tutte, nessun logo di marchi, aggiornato spesso (ultima versione del 21/10/2026). Due note di licenza nel codice.
- **Opzione B: Tabler.** Simile e con più icone. Contiene loghi di aziende da non usare.
- **Opzione C: Phosphor «light».** Bello e morbido, ma con spessori fissi: non si ottengono 1,6 e 2,2. Aggiornato meno spesso.
- **Opzione D: tenere le icone disegnate a mano.** Nessuna licenza esterna, ma ogni icona nuova va disegnata.
- **Raccomandazione: A, Lucide,** con lo spessore portato a 1,6 (2,2 su pulsanti e stati).

### 5.4 Le immagini generate con ChatGPT

- **Opzione A: usarle nel prodotto pubblico.** Con una riga «immagini generate con IA» nelle note legali, la ricerca inversa e le prove di provenienza conservate. Resta il rischio che non siano protette e che nessuno copra eventuali contestazioni.
- **Opzione B: usarle solo nei prototipi per ora.** Si decide dopo aver letto le condizioni del proprio piano e avuto il parere. Nessun rischio oggi, perché il prodotto non è pubblico.
- **Opzione C: sostituirle con immagini commissionate** a un illustratore o un fotografo, con un contratto di cessione dei diritti. Immagini protette ed esclusive, ma con un costo.
- **Raccomandazione: B adesso.** Prima del lancio: A per l'interfaccia se il parere è favorevole; C per i materiali promozionali e per la tessera, se si vuole un'immagine esclusiva e difendibile.
- **Una domanda per l'utente:** con quale piano ChatGPT hai generato le due immagini (gratuito, Plus, Business, Enterprise)? Cambia le condizioni che valgono.

### 5.5 Chiedere un parere

- **Opzione A: un parere unico** su immagini, marchio e scritta del nome, prima del lancio.
- **Opzione B: nessun parere,** accettando i rischi descritti.
- **Raccomandazione: A,** insieme al parere sul nome «Connetto» già previsto: le domande si toccano e un solo incarico costa meno di due.

## Fonti

Tutte lette il 26/10/2026.

1. Google Fonts, Manrope, «About»: https://fonts.google.com/specimen/Manrope/about — autore, storia della versione variabile.
2. Google Fonts, Manrope, «License»: https://fonts.google.com/specimen/Manrope/license — OFL 1.1 e nota di copyright.
3. Google Fonts, Manrope, «Glyphs & languages»: https://fonts.google.com/specimen/Manrope/glyphs — lettere latine mostrate.
4. Repository ufficiale Google Fonts, cartella `ofl/manrope`: https://github.com/google/fonts/tree/main/ofl/manrope — `OFL.txt`, `METADATA.pb` (pesi 200–800, sottoinsiemi) e `Manrope[wght].ttf`, analizzato con fontTools (versione 4.505, tabella dei caratteri, funzioni OpenType, `fsType`, metadati di licenza).
5. Repository di build `googlefonts/manrope`: https://github.com/googlefonts/manrope — README (funzioni, lingue, cronologia fino alla 4.504 del 22/10/2020) e `OFL.txt`.
6. SIL, «SIL Open Font License Official Text», versione 1.1: https://openfontlicense.org/open-font-license-official-text/ — preambolo, definizioni, cinque condizioni, esclusione di garanzia (pagina aggiornata il 12/1/2026).
7. SIL, «OFL-FAQ» versione 1.1-update7 (novembre 2023): https://openfontlicense.org/ofl-faq/ — risposte 1.1–1.21, 2.1–2.8, 5.5–5.8.
8. Google Fonts, «Frequently Asked Questions» (General e Privacy): https://fonts.google.com/faq — uso commerciale, loghi, testo in immagini, dati ricevuti dal servizio, file sul proprio server.
9. LG München I, Endurteil del 20/1/2022, 3 O 17493/20, su Bayern.Recht: https://www.gesetze-bayern.de/Content/Document/Y-300-Z-BECKRS-B-2022-N-612 — dispositivo e motivi (Rn. 1–12).
10. Lucide, home page: https://lucide.dev/ — 1.903 icone, versione 1.61.0, personalizzazione di colore, dimensione e spessore.
11. Lucide, «License»: https://lucide.dev/license e file https://github.com/lucide-icons/lucide/blob/main/LICENSE — ISC e MIT per le icone derivate da Feather, con l'elenco.
12. Lucide, «Brand Logos Statement»: https://lucide.dev/brand-logo-statement — rifiuto dei loghi e motivi legali.
13. Lucide, «Design specification»: https://lucide.dev/contribute/icons/specification — griglia, tratto, estremità, angoli.
14. Lucide, cartella `icons` del repository: https://github.com/lucide-icons/lucide/tree/main/icons — esistenza dei nomi, SVG di `house` e `info`, metadati di `house` (alias `home`).
15. Tabler Icons: sito https://tabler.io/icons, documentazione https://tabler.io/docs/icons, repository e `LICENSE` https://github.com/tabler/tabler-icons — MIT, numeri, griglia, tratto, categoria «Brand», nomi delle icone.
16. Phosphor Icons: sito https://phosphoricons.com/, repository https://github.com/phosphor-icons/homepage e `core` con `LICENSE` e cartella `assets` https://github.com/phosphor-icons/core — MIT, pesi, numero di icone, SVG su 256×256 pieni, loghi.
17. Feather: repository e `LICENSE` https://github.com/feathericons/feather e sito https://feathericons.com/ — MIT, griglia 24×24, assenza di `receipt`.
18. Heroicons: https://heroicons.com/ e `LICENSE` https://github.com/tailwindlabs/heroicons/blob/master/LICENSE — 316 icone, tratto 1,5, MIT.
19. Iconoir: https://iconoir.com/ e `LICENSE` https://github.com/iconoir-icons/iconoir/blob/main/LICENSE — 1.671 icone, MIT, tratto 1,5.
20. Material Symbols: https://fonts.google.com/icons e `LICENSE` https://github.com/google/material-design-icons/blob/master/LICENSE — Apache 2.0.
21. Registro npm, schede dei pacchetti `lucide`, `@tabler/icons`, `@phosphor-icons/core`, `@phosphor-icons/react`, `heroicons`, `feather-icons`, `iconoir`: https://registry.npmjs.org/ — ultime versioni, date e licenze dichiarate.
22. Commissione europea, AI Act Service Desk, testo consolidato al 27/7/2026: art. 50 https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50 ; art. 3 https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-3 ; art. 111 https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-111 ; art. 113 https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113 — obblighi di trasparenza, definizione di «deep fake», date.
23. Gazzetta Ufficiale, legge 23 settembre 2025, n. 132, art. 25 e note: https://www.gazzettaufficiale.it/eli/id/2025/09/25/25G00143/sg — testo modificato dell'art. 1 della legge 633/1941 e nuovo art. 70-septies; entrata in vigore 10/10/2025.
24. C2PA, «Content Credentials: C2PA Technical Specification» 2.2: https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification.html — incorporamento dei metadati nei file RIFF, compreso WebP.

## Fonti non raggiunte

- **OpenAI, condizioni e policy**: «Europe Terms of Use» https://openai.com/policies/eu-terms-of-use/, «Terms of Use» https://openai.com/policies/terms-of-use/, «Services Agreement» https://openai.com/policies/services-agreement/, «Service Terms» https://openai.com/policies/service-terms/, «Usage Policies» https://openai.com/policies/usage-policies/, «Sharing & publication policy» https://openai.com/policies/sharing-publication-policy. Risposta 403 a ogni lettura automatica; il rendering con browser è stato bloccato dalle regole dell'ambiente come aggiramento di un controllo anti-bot. Lette solo negli estratti del motore di ricerca: tutto il §3.2–3.6 è **Da verificare**. Le Usage Policies non sono state lette affatto.
- **OpenAI, centro assistenza**, articolo su C2PA e SynthID: https://help.openai.com/en/articles/8912793-c2pa-in-chatgpt-images (e la copia `help-lb.openai.com`): 403. Letto solo negli estratti del motore di ricerca.
- **Data di entrata in vigore della versione attuale delle condizioni europee di OpenAI**: non confermata. Un estratto mostra una versione dell'11/12/2024; raccolte di terzi parlano di aggiornamenti nel 2026.
- **EUR-Lex**, Regolamento (UE) 2024/1689: https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024R1689 — controllo anti-bot (risposta 202 vuota). Il testo è stato letto sull'AI Act Service Desk della Commissione [22], che riproduce il consolidato di EUR-Lex.
- **Normattiva**, legge 132/2025: connessione interrotta. Il testo è stato letto sulla Gazzetta Ufficiale [23].
- **Repository dell'autore di Manrope** `github.com/sharanda/manrope`: «non trovato». Il file della licenza è stato letto nei repository di Google Fonts [4][5].
- **manropefont.com** (sito indicato nel README): certificato non valido, pagina non aperta.
