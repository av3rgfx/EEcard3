# Licenze di carattere, icone e immagini

Ricerca del 26 ottobre 2026, svolta da un agente in background (skill research) su fonti primarie, con la data di lettura per ogni fonte. Risponde al ticket [17 «Ricerca: licenze di icone, carattere e immagini»](../../.scratch/design-percorso-1/issues/17-ricerca-licenze-grafiche.md).

**Non è un parere legale.** Dice cosa scrivono oggi le licenze, le condizioni e le norme che si sono potute leggere. Se un uso è lecito nel caso concreto lo valuta un avvocato esperto di diritto d'autore e proprietà intellettuale. Nessun account è stato creato, nessun file a pagamento scaricato, nessun fornitore contattato.

**Controllo a campione** della sessione principale (26/10/2026), sulle fonti originali: il file `OFL.txt` di Manrope in Google Fonts (OFL 1.1, nessun nome riservato); il file `Manrope[wght].ttf` riletto con fontTools (versione 4.505, asse 200–800, `tnum` presente, «€», lettere accentate e «« »» presenti, «Ǝ» assente, `fsType` 0); il file `LICENSE` di Lucide (ISC più l'elenco delle icone derivate da Feather); l'art. 50, par. 4, dell'AI Act sull'AI Act Service Desk; il nuovo art. 1 della legge 633/1941 nella Gazzetta Ufficiale (legge 132/2025, in vigore dal 10/10/2025). Tutto confermato. Nella prima lettura le pagine OpenAI rispondevano 403. **Verifica successiva del 26/10/2026 con la skill `research`:** lette direttamente tutte le sette pagine pubbliche richieste e la precedente versione ufficiale delle Usage Policies; esiti e date nel §3. Nessun accesso all’account dell’utente né aggiramento dei controlli anti-bot.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Manrope ha la SIL Open Font License 1.1, senza nome riservato.** Si può usare nel sito, nell'app, nei PDF, nelle immagini e nel logo, anche a fini commerciali. Non si può vendere il file del carattere da solo. Chi distribuisce il file deve includere la nota di copyright e la licenza [2][4][6][7].
- **Manrope non contiene la lettera «Ǝ» (U+018E) del nome ƎE.** Contiene «€», le lettere accentate italiane, le virgolette «» e le cifre in colonna (`tnum`). È variabile, peso 200–800, versione 4.505 [4]. Il browser prenderà «Ǝ» da un altro carattere (**Inferenza**).
- **Meglio servire Manrope dal nostro server, non dal servizio di Google.** Con il servizio di Google l'indirizzo IP di ogni visitatore arriva a Google [8]. Un tribunale tedesco (LG München I, 20/1/2022) ha condannato un sito per questo, senza consenso [9]. Con i file sul nostro server Google non riceve nulla [8].
- **Icone: Lucide è la scelta più adatta.** Licenza ISC più MIT per le icone ereditate da Feather; griglia 24×24, tratto regolabile, estremità arrotondate, nessun logo di marchi; tutte le icone del percorso ci sono [10][11][12][13][14]. Alternative: Tabler (MIT) e Phosphor «light» (MIT).
- **OpenAI: pagine ora lette**, con versioni e limiti nel §3.1. Il piano dichiarato è Plus, la residenza Italia: condizioni europee, compreso l’addendum per uso commerciale. L’uso delle immagini in accesso pubblico, interfaccia e promozione è compatibile in linea di principio, rispettando diritti altrui e policy (§3.2).
- **Plus non offre l’indennizzo sull’output dei piani coperti** [27]. Non equivale a perdere le tutele inderogabili (§3.3). Per dichiarazione dell’origine IA e perdita dei segnali di provenienza valgono le distinzioni dei §3.4–3.5: una riga nascosta nelle note legali non è una soluzione già verificata.
- **In Italia sono protette solo le opere dell'ingegno umano**, anche se create con l'aiuto dell'IA, purché siano «risultato del lavoro intellettuale dell'autore» (legge 132/2025, art. 25) [23]. Un'immagine nata da una semplice richiesta potrebbe non essere protetta: altri potrebbero copiarla (**Inferenza**, serve parere).
- **AI Act, art. 50, in vigore dal 2/8/2026.** L'obbligo di etichettare riguarda i «deep fake», cioè contenuti che sembrano autentici e somigliano a persone, luoghi o oggetti esistenti [22]. Una stanza e una tessera decorative probabilmente non lo sono, ma è un punto da parere (**Inferenza**).
- **Raccomandazione dell'agente:** Manrope dal nostro server; Lucide; le immagini ChatGPT restano solo nei prototipi fino al parere, insieme a quello sul marchio Connetto. La lettura delle condizioni è completata; restano la ricerca di somiglianze e il parere, anche su trasparenza e immagini modificate.

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

### 3.1 Pagine lette e versioni

Verifica del **26/10/2026**, con la skill `research` e controllo della sessione principale sui passaggi decisivi. Solo pagine pubbliche ufficiali, lette direttamente tramite lo strumento web; nessun account o aggiramento anti-bot. Gli estratti del motore di ricerca non sono più la base del §3.2–3.6. Le norme dei §3.7–3.8 non sono state riverificate in questo aggiornamento.

| Pagina ufficiale | Versione mostrata alla lettura del 26/10/2026 | Entrata in vigore dichiarata |
| --- | --- | --- |
| [Europe Terms of Use](https://openai.com/policies/eu-terms-of-use/) [25] | Aggiornata 16/1/2026 | Non esplicitata separatamente: non scambiare aggiornamento ed efficacia |
| [Terms of Use](https://openai.com/policies/terms-of-use/) [26] | Pubblicata 1/1/2026 | 1/1/2026 |
| [Service Terms](https://openai.com/policies/service-terms/) [27] | Aggiornata 16/10/2026 | Non esplicitata separatamente |
| [Services Agreement](https://openai.com/policies/services-agreement/) [28] | Aggiornato 1/12/2025 | 1/1/2026 |
| [Usage Policies, pagina attuale](https://openai.com/policies/usage-policies/) [29] | Modifica annunciata nel changelog 21/10/2026 | **20/11/2026, futura rispetto alla lettura** |
| [Usage Policies, versione precedente ufficiale](https://openai.com/policies/usage-policies/revisions/2025-10-29/) [30] | Raggiunta dal collegamento Previous Version di [29] | **29/10/2025: riferimento applicabile al 26/10/2026** |
| [Sharing & publication policy](https://openai.com/policies/sharing-publication-policy) [31] | Aggiornata 14/11/2022 | Non esplicitata separatamente |
| [Articolo C2PA richiesto](https://help.openai.com/en/articles/8912793-c2pa-in-chatgpt-images) → [Provenance signals in OpenAI-generated content](https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content) [32] | Aggiornamento indicato solo in ore, nella giornata di lettura | Nessuna data di efficacia: articolo tecnico, non condizioni contrattuali |

La pagina pubblica non prova quali notifiche o versioni l’utente abbia accettato alla generazione: conservare anche date e originali delle due immagini. Le date non dichiarate restano elencate in «Fonti non raggiunte» come dati non confermati.

### 3.2 Proprietà e uso commerciale

- **Fonte e applicazione al caso:** i testi distinguono servizi individuali e aziendali, e rinviano allo SEE per la residenza [25][26]; con Plus/Italia dichiarati dall’utente si applicano le condizioni europee. Il Services Agreement esclude i servizi per individui salvo eccezioni nominate, fra cui **non c’è Plus**: “does not apply to OpenAI services used by consumers or individuals unless specified above” ([28](https://openai.com/policies/services-agreement/), introduzione; letto 26/10/2026).
- **Fonte:** fra utente e OpenAI, “to the extent permitted by applicable law”, l’output è dell’utente: “own the Output” ([25](https://openai.com/policies/eu-terms-of-use/), Content; letto 26/10/2026). OpenAI cede gli eventuali propri diritti; non attribuisce quelli di terzi. I Terms generali confermano la stessa struttura [26].
- **Inferenza:** usare stanza e tessera in accesso pubblico, interfaccia o promozione è compatibile in linea di principio: nessun divieto commerciale delle immagini nei testi letti. Restano diritti altrui, policy e limiti legali; questa cessione non crea da sola un diritto d’autore (§3.8).

### 3.3 Somiglianza, garanzie e indennizzo

- **Fonte:** “Output may not be unique” ([25](https://openai.com/policies/eu-terms-of-use/), Similarity of content; letto 26/10/2026). Altri utenti possono ottenere risultati simili; la cessione esclude il loro output e quello di terzi [26].
- **Fonte:** le condizioni europee promettono diligenza professionale, preservano diritti inderogabili e garanzia legale dei consumatori SEE; non promettono unicità o assenza di violazioni [25, Our commitments to you]. Il disclaimer generale “NON-INFRINGEMENT” ([26](https://openai.com/policies/terms-of-use/), Disclaimer of warranties; letto 26/10/2026) non va trasferito alle condizioni UE.
- **Fonte:** l’indennizzo sull’output riguarda clienti API (§1(a)) ed Enterprise (§3(b)), definito come Enterprise, Edu e Healthcare: “ChatGPT Enterprise, ChatGPT Edu, and ChatGPT for Healthcare” ([27](https://openai.com/policies/service-terms/), §3(a); letto 26/10/2026). **Plus non è coperto**; Business non rientra in quella definizione, anche se compare nel titolo del §3. Esclusioni: violazione conosciuta o riconoscibile, protezioni ignorate, modifiche/trasformazioni/combinazioni, input senza diritti, marchi nell’uso commerciale, output di terzi. Separazione in livelli e conversione non danno copertura a immagini nate con Plus; per piani coperti andrebbero valutate anche le esclusioni.
- **Corretto il 26/10/2026:** prima diceva «Nessuna garanzia per i consumatori» e richiamava raccolte di terzi sulla manleva. La mancanza dell’indennizzo Plus non annulla le tutele di legge; per l’uso commerciale conta anche il §3.6.

### 3.4 Dire che è fatto con l’IA

- **Fonte:** è vietato “Representing that Output was human-generated when it was not.” ([25](https://openai.com/policies/eu-terms-of-use/), Using our Services; letto 26/10/2026). Stesso divieto nei Terms generali [26].
- **Fonte:** per social media, dirette e dimostrazioni la Sharing & publication policy richiede controllo manuale, attribuzione a sé/alla propria azienda e: “Indicate that the content is AI-generated in a way no user could reasonably miss or misunderstand.” ([31](https://openai.com/policies/sharing-publication-policy/), Social media, livestreaming, and demonstrations; letto 26/10/2026). La parte successiva sui testi coautoriali via API non disciplina specificamente queste immagini Plus.
- **Inferenza:** non emerge una prescrizione universale di didascalia sotto ogni immagine decorativa; l’estensione della policy all’accesso/interfaccia va chiarita nel parere. Per promozione sui social e dimostrazioni serve una segnalazione evidente nel contesto. Non presentarle come foto reali o illustrazioni realizzate interamente da una persona. **Raccomandazione:** prevedere un’indicazione visibile e comprensibile dove si mostrano, con collocazione da valutare nel parere anche rispetto all’AI Act.
- **Corretto il 26/10/2026:** prima diceva che una riga nelle note legali «toglie il dubbio». Non è sufficiente se l’indicazione richiesta deve essere evidente. La scelta in DESIGN.md resta invariata, in attesa del parere.

### 3.5 Metadati C2PA e filigrana

- **Fonte:** l’articolo ora intitolato *Provenance signals in OpenAI-generated content* [32] descrive Content Credentials (C2PA) nei metadati e SynthID invisibile nel contenuto; la copertura dipende anche da modello, formato, esportazione e data di creazione. Le Content Credentials “can be lost through everyday actions”, comprese conversioni; raccomanda “preserve existing C2PA metadata” dove possibile ([32](https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content), How robust… e Will signals remain…; letto 26/10/2026). La filigrana può resistere ad alcune modifiche o diventare non rilevabile. Il verificatore non certifica proprietà o liceità e un risultato negativo non esclude origine IA.
- **Inferenza sul caso:** livelli separati e WebP **possono** perdere i metadati o degradare il segnale; non prova che sia successo a questi file, non esaminati. WebP supporta C2PA [24]. Conservare originali e storia delle modifiche; eventuale controllo su `openai.com/verify` a cura dell’utente, non eseguito qui.
- **Fonte / limite della verifica:** nessun divieto specifico di rimuovere C2PA/SynthID **dalle immagini** trovato nei testi letti. Resta il divieto generale di aggirare protezioni [25][30]. Il divieto esplicito di rimozione degli indicatori nel §1(b) dei Service Terms riguarda **Prompt-to-Voice**, non queste immagini [27]. L’articolo raccomanda conservazione e chiarisce che i segnali non sostituiscono le dichiarazioni visibili eventualmente dovute [32].
- **Corretto il 26/10/2026:** prima diceva che la separazione in livelli li toglie «di certo» e che la conversione li toglie «quasi sempre»: non accertato. La possibilità tecnica di perdita non è un’autorizzazione generale alla rimozione intenzionale per nascondere l’origine. Questa intenzione e gli obblighi di legge vanno distinti nel parere.

### 3.6 Plus, uso commerciale e Usage Policies pertinenti

- **Dato dell’utente:** immagini generate con **ChatGPT Plus**, residenza **Italia**. **Corretto il 26/10/2026:** prima diceva che il piano non era noto.
- **Fonte:** l’addendum Business use **interno alle condizioni europee** si applica all’uso commerciale; limita responsabilità nel massimo consentito e, per imprese/organizzazioni, prevede manleva **dell’utente verso OpenAI**, non viceversa [25, addendum]. Il passaggio a un uso commerciale non trasforma Plus nel Services Agreement. **Corretto il 26/10/2026:** prima diceva «L’uso aziendale segue condizioni separate», senza distinguere l’addendum per Plus. **Parere:** applicazione a chi genera e a chi pubblica per ƎE.
- **Fonte:** le Usage Policies applicabili alla data di lettura [30] vietano violazioni di proprietà intellettuale, inganno/frode/impersonificazione, uso dell’immagine altrui senza consenso che confonda sull’autenticità, violazioni della privacy e aggiramento delle protezioni: “circumventing our safeguards” ([30](https://openai.com/policies/usage-policies/revisions/2025-10-29/), Protect people; letto 26/10/2026). Vietano anche decisioni automatizzate importanti senza controllo umano, incluso l’alloggio; non vietano per questo un’immagine decorativa in un prodotto immobiliare (**Inferenza**). Restano i divieti sui contenuti dannosi e di sfruttamento dei minori; non emergono dal caso descritto.
- **Fonte:** la pagina attuale [29] annuncia efficacia **20/11/2026**. Mantiene questi limiti pertinenti, amplia la formulazione sulle azioni importanti e chiarisce altri usi, fra cui addestramento di modelli. Non la si presenta come già vigente il 26/10. **Raccomandazione:** ricontrollare le policy prima del lancio; per stanza e tessera non emerge un divieto specifico dall’uso descritto, ma i file e le somiglianze non sono stati verificati.

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

1. Come applicare al caso Plus/Italia le condizioni lette (§3): uso commerciale per ƎE, diritti altrui e rischi senza indennizzo; dove e come dichiarare l’origine IA e come trattare i segnali di provenienza dopo le modifiche.
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

- **Opzione A: usarle nel prodotto pubblico.** Dopo il parere sulla dichiarazione visibile appropriata (§3.4), la ricerca inversa e le prove di provenienza conservate. Resta il rischio che non siano protette e che nessuno copra eventuali contestazioni.
- **Opzione B: usarle solo nei prototipi per ora (scelta confermata).** Le condizioni sono state lette; restano ricerca di somiglianze e parere. **Corretto il 26/10/2026:** prima diceva «Nessun rischio oggi»: un prototipo non rende nulli i rischi di diritti altrui o condivisione. Non si modifica la decisione in DESIGN.md.
- **Opzione C: sostituirle con immagini commissionate** a un illustratore o un fotografo, con un contratto di cessione dei diritti. Immagini protette ed esclusive, ma con un costo.
- **Raccomandazione: B adesso.** Prima del lancio: A per l'interfaccia se il parere è favorevole; C per i materiali promozionali e per la tessera, se si vuole un'immagine esclusiva e difendibile.
- **Dato chiarito:** Plus, residente in Italia (§3.6). Nessuna nuova decisione sull’uso pubblico è presa con questa verifica.

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
25. OpenAI, [Europe Terms of Use](https://openai.com/policies/eu-terms-of-use/) — letta 26/10/2026; ambito, Content, Our commitments to you, addendum Business use; aggiornamento ed efficacia distinti nel §3.1.
26. OpenAI, [Terms of Use](https://openai.com/policies/terms-of-use/) — letta 26/10/2026; rinvio all’UE, Content, Disclaimer of warranties; date nel §3.1.
27. OpenAI, [Service Terms](https://openai.com/policies/service-terms/) — letta 26/10/2026; §1(a) API, §1(b) Prompt-to-Voice, §3(a)–(b) Enterprise e §6 immagini; data nel §3.1.
28. OpenAI, [Services Agreement](https://openai.com/policies/services-agreement/) — letto 26/10/2026, solo introduzione per confermare l’esclusione di Plus; date nel §3.1.
29. OpenAI, [Usage Policies, pagina attuale](https://openai.com/policies/usage-policies/) — letta 26/10/2026, compreso changelog: versione annunciata, efficacia futura nel §3.1.
30. OpenAI, [Usage Policies, revisione 29/10/2025](https://openai.com/policies/usage-policies/revisions/2025-10-29/) — letta 26/10/2026 dal collegamento ufficiale di [29]; riferimento applicabile a questa verifica.
31. OpenAI, [Sharing & publication policy](https://openai.com/policies/sharing-publication-policy) — letta 26/10/2026; social/dirette/dimostrazioni e distinta sezione sui testi via API; data nel §3.1.
32. OpenAI Help Center, [Provenance signals in OpenAI-generated content](https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content) — letto 26/10/2026 tramite reindirizzamento dell’[URL richiesto](https://help.openai.com/en/articles/8912793-c2pa-in-chatgpt-images); sezioni su immagini, modifiche, verifica e dichiarazioni visibili; data nel §3.1.

## Fonti non raggiunte

- **OpenAI: nessuna delle sette pagine richieste è rimasta non raggiunta nella verifica del 26/10/2026.** Il precedente 403 è un limite della prima lettura, ora superato con la normale apertura pubblica tramite lo strumento web, senza aggiramenti. Anche la versione precedente ufficiale delle Usage Policies è stata raggiunta.
- **Date non confermate:** [25], [27] e [31] mostrano un aggiornamento ma non una distinta entrata in vigore; [32] mostra solo un aggiornamento relativo in ore, non una data assoluta o di efficacia. Non si ricavano date mancanti da estratti o raccolte di terzi. Le condizioni accettate alla generazione e le eventuali notifiche individuali non sono accertate: nessun accesso all’account. Per [29] la data futura è invece esplicita, non una fonte irraggiungibile (§3.1).
- **EUR-Lex**, Regolamento (UE) 2024/1689: https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024R1689 — controllo anti-bot (risposta 202 vuota). Il testo è stato letto sull'AI Act Service Desk della Commissione [22], che riproduce il consolidato di EUR-Lex.
- **Normattiva**, legge 132/2025: connessione interrotta. Il testo è stato letto sulla Gazzetta Ufficiale [23].
- **Repository dell'autore di Manrope** `github.com/sharanda/manrope`: «non trovato». Il file della licenza è stato letto nei repository di Google Fonts [4][5].
- **manropefont.com** (sito indicato nel README): certificato non valido, pagina non aperta.
