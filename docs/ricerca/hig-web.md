# Apple Human Interface Guidelines per una piattaforma web su telefono e desktop

Ricerca del 23 ottobre 2026, svolta dall'agente in sequenza su fonti primarie, tutte lette in quella data. Risponde al ticket [01 «Ricerca HIG web»](../../.scratch/design-percorso-1/issues/01-ricerca-hig-web.md): cosa dicono oggi le Apple Human Interface Guidelines (HIG) sulle scelte che le direzioni del percorso 1 devono fare, e come si adattano a una piattaforma **web** usata da Safari su iPhone (anche aggiunta alla schermata Home) e da desktop. Serve al ticket [04 «Direzione del percorso 1»](../../.scratch/design-percorso-1/issues/04-prototipo-direzione.md).

Le HIG parlano di app native (iOS, iPadOS, macOS, tvOS, visionOS, watchOS). Non esiste una pagina HIG per i siti web: la pagina [Web views](https://developer.apple.com/design/human-interface-guidelines/web-views) riguarda solo il web dentro un'app. Ogni indicazione per il web qui sotto è quindi un adattamento, salvo quando la fonte è WebKit, W3C o la documentazione Apple per Safari.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato; **Solo nativo** = regola o funzione che sul web non c'è o non vale così com'è.

## In breve

- **Le HIG valgono come grammatica, non come specifica tecnica.** Struttura, gerarchia, scrittura, conferme e accessibilità si trasferiscono quasi intatte. Restano native Liquid Glass, i fogli con altezze di sosta, le azioni con scorrimento sulle righe, Dynamic Type, la vibrazione e i caratteri e simboli Apple (**Inferenza**, dettagli per tema).
- **Navigazione.** Sul telefono Apple preferisce la barra delle schede (poche schede, sempre visibili, solo per navigare). Quando c'è più spazio consiglia la barra laterale o la vista divisa. La funzionalità resta la stessa a ogni larghezza e il layout dipende dallo spazio disponibile, non dal tipo di dispositivo (**Fonte**: [Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars), [Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars), [Layout](https://developer.apple.com/design/human-interface-guidelines/layout)).
- **Liquid Glass sul web non esiste.** Apple lo riserva a controlli e navigazione e lo vieta nello strato dei contenuti. Nelle note WebKit di Safari 26.0–27.0 lette non c'è un materiale equivalente per CSS (**Fonte**: [Materials](https://developer.apple.com/design/human-interface-guidelines/materials); WebKit). Un effetto vetro in CSS è un'imitazione e richiede sempre una superficie leggibile anche senza trasparenza (**Inferenza**).
- **Safari su iPhone.** Da iOS 26 ogni sito aggiunto alla schermata Home si apre come web app, senza manifest obbligatorio. In quella modalità mancano la barra dell'indirizzo e i pulsanti del browser: l'indietro lo deve offrire la pagina (**Fonte**: [WebKit, Safari 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/); [Apple, guida archiviata](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)). L'area sicura si gestisce con `viewport-fit=cover` ed `env(safe-area-inset-*)` (**Fonte**: [WebKit, 2017](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)).
- **Caratteri e simboli Apple.** La licenza del font San Francisco vieta di incorporarlo e di usarlo per contenuti web (**Fonte**: [Apple, Fonts](https://developer.apple.com/fonts/)). Sul web lo si ottiene solo come carattere di sistema sui dispositivi Apple (`system-ui`, `-apple-system`). La licenza di SF Symbols non è leggibile in rete (vedi «Fonti non raggiunte»): non usarli nel prodotto finché non la si legge (**Inferenza**).
- **Per il web decide WCAG 2.2.** Apple usa gli stessi rapporti di contrasto (4,5:1 e 3:1) ma con soglie in punti nativi diverse dalla definizione WCAG di testo grande. Le misure Apple (17 pt, 44×44 pt) sono buoni obiettivi, non conversioni automatiche (**Fonte**: [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility); [WCAG 2.2](https://www.w3.org/TR/WCAG22/)).

## 1. Struttura e navigazione

**Barra delle schede** (**Fonte**: [Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars), aggiornata l'8/6/2026)
- Serve a navigare fra le sezioni principali, non a eseguire azioni (per le azioni c'è la barra degli strumenti). Resta visibile in ogni sezione; la copre solo una vista modale.
- Poche schede: «in genere è più facile navigare fra meno schede». Evitare la scheda «Altro» di troppo pieno, che nasconde contenuti.
- Non disattivare né nascondere una scheda se il suo contenuto manca: spiegare perché la sezione è vuota.
- Etichette sotto o accanto all'icona, possibilmente di una parola; icone piene in barra. Il badge rosso solo per informazioni critiche.
- Su iOS la barra galleggia in basso su Liquid Glass e può avere una scheda di ricerca all'estremità. Su iPadOS sta in alto e può trasformarsi in barra laterale. Quando le schede sono personalizzabili, Apple consiglia un elenco predefinito di **cinque o meno**.

**Barra laterale e vista divisa** (**Fonte**: [Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars), 8/6/2026; [Split views](https://developer.apple.com/design/human-interface-guidelines/split-views), 9/6/2025)
- La barra laterale richiede molto spazio; su iOS e iPadOS «considerare prima una barra delle schede». Al massimo due livelli di gerarchia; oltre, una vista divisa con un elenco intermedio.
- Non nasconderla per impostazione predefinita. Su macOS non mettere azioni o informazioni critiche in fondo, perché la finestra può uscire dallo schermo in basso.
- Vista divisa: evidenziare in modo persistente la selezione in ogni pannello. Su iPhone in verticale (larghezza compatta) è sconsigliata.

**Barra degli strumenti e navigazione a pila** (**Fonte**: [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars), 16/12/2025; dal 9/6/2025 contiene anche le indicazioni della vecchia pagina «Navigation bars»)
- Contiene titolo, controlli di navigazione (indietro, ricerca) e azioni. Titolo utile per ogni vista, mai il nome dell'app, possibilmente sotto i 15 caratteri.
- Usare i pulsanti standard Indietro e Chiudi con i loro simboli, **senza** la scritta «Back» o «Close».
- Una sola azione principale nello stile `.prominent`, sul lato finale; al massimo tre gruppi di controlli; non accostare un'azione con testo a una con simbolo.
- Su iOS solo le azioni essenziali, le altre in un menu «Altro»; titolo grande che si riduce durante lo scorrimento.
- Su macOS ogni comando della barra deve esistere anche nel menu dell'app (**Solo nativo**: una web app non ha il menu di macOS; **Inferenza**).

**Ricerca** (**Fonte**: [Search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields) e [Searching](https://developer.apple.com/design/human-interface-guidelines/searching), entrambe 8/6/2026)
- Se la ricerca è importante va in posizione primaria; un solo luogo da cui cercare tutto; ambito della ricerca sempre chiaro; risultati mentre si scrive; cronologia solo con attenzione alla riservatezza e con modo di cancellarla.
- Su iPhone tre posizioni: scheda nella barra, barra degli strumenti (in basso se c'è spazio) o campo in linea sopra l'elenco che filtra. Su iPad e Mac di solito a destra nella barra degli strumenti o in cima alla barra laterale.
- Sul web l'elemento `<search>` dà la semantica corretta alla zona di ricerca (**Fonte**: [WebKit, Safari 17.0](https://webkit.org/blog/14445/webkit-features-in-safari-17-0/)).

**Adattamento al web** (**Inferenza**)
- Sul telefono una barra delle schede in basso, fissa, con l'area sicura. Su desktop barra laterale o vista divisa, decise con media o container query sulla larghezza, mai sul tipo di dispositivo.
- In Safari, non come web app, la pagina convive con le barre del browser. Una barra fissa in basso può sovrapporsi ai controlli di Safari: verificarlo su iOS 26 e 27. WebKit cita «aree oscurate» dalla barra dell'indirizzo per i fondali dei dialoghi a schermo intero ([Safari 26.2](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/)), ma non c'è una guida per le barre delle pagine (**Da verificare**).
- Su desktop niente barre o azioni critiche in fondo alla finestra, come chiede Apple per macOS ([Layout](https://developer.apple.com/design/human-interface-guidelines/layout)).

## 2. Layout e larghezze

- **Fonte** ([Layout](https://developer.apple.com/design/human-interface-guidelines/layout), aggiornata il 9/9/2026): ordinare per importanza (in alto e a sinistra nelle lingue che si leggono da sinistra), allineare, raggruppare, divulgare progressivamente. Distinguere i controlli dai contenuti. Decidere il layout dalle classi di dimensione, cioè dallo spazio reale, non dal dispositivo o dall'orientamento. Mantenere le stesse funzioni quando lo spazio cambia, mostrandone di più se c'è posto (per esempio da barra delle schede a barra laterale). Rispettare le aree sicure. Prepararsi al testo ingrandito: elementi affiancati che passano in colonna, righe che crescono.
- **Fonte** ([Designing for iOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-ios)): pochi controlli a schermo, dettagli secondari raggiungibili con poca interazione. I controlli al centro o in basso si raggiungono meglio con il pollice; scorrimento per tornare indietro e azioni sulle righe.
- **Fonte** ([Designing for macOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-macos)): sugli schermi grandi più contenuto con meno livelli annidati e meno modalità, densità comoda, scorciatoie da tastiera.
- **Fonte** (WCAG 2.2, [1.4.10 Reflow](https://www.w3.org/TR/WCAG22/#reflow), AA): nessuno scorrimento in due direzioni a 320 px CSS di larghezza (pari a 1280 px con zoom al 400%). [1.3.4 Orientation](https://www.w3.org/TR/WCAG22/#orientation): non bloccare l'orientamento.
- **Inferenza.** Una sola struttura responsiva: colonna unica sul telefono, due o tre pannelli sul desktop (l'operatore lavora soprattutto qui), con la stessa gerarchia e le stesse funzioni.

## 3. Tipografia e testo ingrandito

**Cosa dice Apple** (**Fonte**: [Typography](https://developer.apple.com/design/human-interface-guidelines/typography), 16/12/2025; [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility), 9/6/2025)
- Dimensioni: iOS e iPadOS 17 pt predefiniti e 11 pt minimi; macOS 13 e 10 pt. Con pesi sottili usare dimensioni maggiori; evitare in genere Ultralight, Thin e Light.
- Pochi caratteri tipografici; gerarchia con peso, dimensione e colore, mantenuta anche quando il testo cresce.
- Stili di testo di sistema (Large Title 34 pt, Body 17 pt nella misura predefinita) che scalano con Dynamic Type. Dynamic Type esiste su iOS, iPadOS, tvOS, visionOS e watchOS; **macOS non lo supporta**.
- Con testo grande: layout che si adatta, troncamenti minimi, colonne che si riducono, elementi principali sempre in alto. Permettere un ingrandimento del testo di almeno il **200%**.
- Font di sistema: SF Pro e New York. «Non incorporare i font di sistema» nell'app.

**Licenza dei font Apple** (**Fonte**: [Apple, Fonts](https://developer.apple.com/fonts/), testo della licenza nella pagina)
- San Francisco si usa «solo per creare mock-up di interfacce» di software per iOS, OS X o tvOS. Non si può incorporare in programmi o prodotti né usare per «contenuti di siti web».
- **Solo nativo**: non si può servire SF Pro come web font.

**Sul web**
- `font-family: -apple-system` mostra il font di sistema Apple; i valori `font: -apple-system-body`, `-apple-system-headline` e simili riproducono gli stili di Dynamic Type su iOS (**Fonte**: [WebKit, 2015](https://webkit.org/blog/3709/using-the-system-font-in-web-content/)). Da Safari 13.1 esistono anche `ui-sans-serif`, `ui-serif`, `ui-monospace` e `ui-rounded` (**Fonte**: [WebKit, Safari 13.1](https://webkit.org/blog/10247/new-webkit-features-in-safari-13-1/)).
- Sono valori con prefisso e solo Apple. Se il testo normale in `rem` segua l'impostazione «Testo più grande» di iOS non risulta da fonti WebKit (**Da verificare** su iPhone).
- WCAG 2.2 chiede testo ridimensionabile al 200% ([1.4.4](https://www.w3.org/TR/WCAG22/#resize-text), AA) e nessuna perdita di contenuto con spaziature maggiorate ([1.4.12](https://www.w3.org/TR/WCAG22/#text-spacing), AA) (**Fonte**).
- **Inferenza.** Misure relative (`rem`), corpo del testo di 17 px o più sul telefono, nulla sotto 11 px, verifica con lo zoom di Safari e con testo ingrandito. Con `system-ui` le direzioni avranno SF sui dispositivi Apple e un altro carattere altrove (Roboto, Segoe UI); se una direzione vuole un carattere identico ovunque serve un web font con licenza libera.

## 4. Colore, tema scuro e contrasto

**Cosa dice Apple** (**Fonte**: [Color](https://developer.apple.com/design/human-interface-guidelines/color), 16/12/2025; [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode), 6/8/2024; [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility))
- Un colore, un significato. Ogni colore deve funzionare in chiaro, in scuro e con contrasto aumentato: per i colori personalizzati servono le varianti chiara e scura, ciascuna con una versione a contrasto aumentato.
- Mai affidare un'informazione al solo colore. Non fissare nel codice i valori dei colori di sistema; usare i colori semantici per lo scopo previsto.
- Tema scuro: rispettare l'impostazione di sistema ed **evitare un'impostazione di aspetto propria dell'app**. Le app solo scure sono rare (per esempio per i media immersivi). Contrasto minimo 4,5:1; per colori personalizzati puntare a **7:1**, soprattutto nel testo piccolo. Fondi scuri «base» ed «elevati» per dare profondità.
- La tabella del contrasto di Apple: fino a 17 pt 4,5:1; da 18 pt 3:1; testo in grassetto 3:1 a qualsiasi dimensione.

**Sul web**
- `color-scheme: light dark` e la media query `prefers-color-scheme` seguono il tema di sistema; Safari non scurisce da solo le pagine (**Fonte**: [WebKit, 2019](https://webkit.org/blog/8840/dark-mode-support-in-webkit/)).
- `prefers-contrast: more` è implementato in WebKit (**Fonte**: [Safari Technology Preview 119](https://webkit.org/blog/11525/release-notes-for-safari-technology-preview-119/)). `prefers-contrast: custom` non risulta mai vero sulle piattaforme Apple (**Fonte**: [WebKit, Safari 18.0](https://webkit.org/blog/15865/webkit-features-in-safari-18-0/)).
- Da Safari 26.2 `accent-color` viene corretto automaticamente per restare leggibile nei controlli dei moduli (**Fonte**: [WebKit, Safari 26.2](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/)).
- WCAG 2.2: testo 4,5:1, testo grande 3:1 ([1.4.3](https://www.w3.org/TR/WCAG22/#contrast-minimum)); componenti e grafici 3:1 ([1.4.11](https://www.w3.org/TR/WCAG22/#non-text-contrast)); mai il solo colore ([1.4.1](https://www.w3.org/TR/WCAG22/#use-of-color)) (**Fonte**).
- Il testo grande WCAG è di 18 pt, oppure 14 pt in grassetto, in punti CSS: circa 24 px e 18,5 px (**Fonte**: [WCAG 2.2, definizione](https://www.w3.org/TR/WCAG22/#dfn-large-scale); [Understanding 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)).
- **Regola nativa che non vale sul web.** Il «grassetto a qualsiasi dimensione 3:1» della tabella Apple è più permissivo di WCAG. Sul web vale la definizione WCAG (**Inferenza**).
- **Inferenza.** Ogni direzione va disegnata in chiaro e in scuro, guidata dal sistema e con token di colore semantici. Variante a contrasto aumentato con `prefers-contrast: more`; 7:1 come obiettivo per il testo piccolo.

## 5. Materiali: Liquid Glass e alternative leggibili

- **Fonte** ([Materials](https://developer.apple.com/design/human-interface-guidelines/materials), 9/9/2025):
  - Liquid Glass forma uno strato funzionale per controlli e navigazione (barre delle schede, barre laterali) che galleggia sopra i contenuti. Non va usato nello strato dei contenuti, salvo i controlli transitori come cursori e interruttori mentre si toccano. Va usato con parsimonia.
  - Esistono due varianti. *Regular* sfoca e regola la luminosità ed è usata da quasi tutti i componenti, specie quelli con molto testo. *Clear* è molto trasparente, solo sopra media ricchi, con uno strato scuro al 35% sopra contenuti chiari.
  - Nei contenuti si usano i materiali standard (ultra-thin, thin, regular, thick); quelli più spessi danno più contrasto al testo.
- **Fonte** ([Color](https://developer.apple.com/design/human-interface-guidelines/color), sezione «Liquid Glass color»; [Layout](https://developer.apple.com/design/human-interface-guidelines/layout); [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars)): il vetro non ha colore proprio. Il colore va solo sullo sfondo dell'azione principale; barre monocromatiche se il contenuto è colorato. Al posto di sfondi pieni o semitrasparenti sotto i controlli Apple usa un «effetto bordo di scorrimento» ([Scroll views](https://developer.apple.com/design/human-interface-guidelines/scroll-views), 8/6/2026). Riduzione della trasparenza e contrasto aumentato cambiano l'aspetto del vetro.
- **Fonte** (WebKit): Safari ha `backdrop-filter`. Le note di Safari 26.0 aggiungono `backdrop-filter` sul contenuto dietro una web view trasparente, ma riguarda le app che incorporano WebKit ([Safari 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/)). Nelle note di Safari 26.0, 26.1, 26.2, 26.4 e 27.0 non c'è un materiale Liquid Glass per le pagine web.
- **Da verificare.** Nessuna fonte WebKit trovata su `prefers-reduced-transparency`: il web non può sapere con certezza se la persona ha chiesto meno trasparenza.
- **Solo nativo**: Liquid Glass, la sua rifrazione e la sua reazione al tocco ([Motion](https://developer.apple.com/design/human-interface-guidelines/motion)).
- **Inferenza.** Sul web il «vetro» si limita alle barre (schede, intestazione): sfocatura con fondo semi-opaco e un'alternativa opaca usata con contrasto aumentato. Va verificato che il testo regga il contrasto WCAG sul fondo peggiore. Nessun vetro su schede, righe o sezioni di contenuto.

## 6. Liste e tabelle

- **Fonte** ([Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables), 21/6/2023):
  - Il testo si legge meglio in righe; testo delle righe breve, con il dettaglio in una vista separata.
  - Selezione evidenziata in modo persistente quando la lista naviga. Indicatore di approfondimento (chevron) per entrare in una riga; pulsante info solo per informazioni.
  - Stile raggruppato con intestazioni e piè di sezione su iOS. Su macOS colonne ordinabili e ridimensionabili e righe a colori alterni nelle tabelle larghe.
  - Intestazioni di colonna: nomi brevi, senza punteggiatura finale. Con testo stretto, i puntini di sospensione al centro conservano inizio e fine.
- **Fonte** ([Designing for iOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-ios); [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)): su iPhone si scorre su una riga per avviare azioni, ma ogni gesto deve avere un'alternativa visibile. WCAG chiede lo stesso per i trascinamenti ([2.5.7](https://www.w3.org/TR/WCAG22/#dragging-movements), AA) e per i gesti a percorso o a più dita ([2.5.1](https://www.w3.org/TR/WCAG22/#pointer-gestures), A).
- **Inferenza.** Sul telefono elenchi a righe, non tabelle larghe. Sul desktop vere tabelle HTML per i dati dell'operatore, con colonne ordinabili. Le azioni a scorrimento sulle righe, se ci sono, solo come scorciatoia di un pulsante o menu visibile.

## 7. Fogli, avvisi e conferme

- **Fogli** (**Fonte**: [Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets), aggiornata il 24/3/2026 sulla posizione dei pulsanti):
  - Un foglio serve per un compito breve legato al contesto. Per flussi lunghi conviene una vista a schermo intero, o una finestra su Mac.
  - Un solo foglio alla volta.
  - Su iOS, nei fogli a vista singola, Annulla va **a sinistra** nella barra in alto e Fatto **a destra**. Fatto va sempre accompagnato da Annulla o Indietro; mai tutti e tre insieme.
  - Su iPhone si chiude scorrendo verso il basso, con conferma se ci sono modifiche non salvate. Altezza media e completa, con la maniglia (anche per VoiceOver). Su macOS il foglio è modale sulla finestra, di dimensioni ragionevoli.
- **Modalità** (**Fonte**: [Modality](https://developer.apple.com/design/human-interface-guidelines/modality)): solo con un beneficio chiaro; compiti brevi; mai un'«app dentro l'app». Sempre un modo evidente di uscire; titolo che nomina il compito; conferma prima di perdere dati; una modale alla volta.
- **Avvisi** (**Fonte**: [Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts), 2/2/2024):
  - Pochi. Mai solo informativi, mai all'avvio, mai per azioni distruttive comuni e annullabili; sì per azioni distruttive insolite e irreversibili.
  - Titolo che dice cosa è successo, mai «Errore» o un codice; testo aggiuntivo solo se aggiunge valore.
  - Pulsanti di una o due parole, verbi legati al testo. «OK» solo negli avvisi informativi; «Annulla» per annullare, mai come pulsante predefinito.
  - Stile distruttivo solo per un'azione distruttiva che la persona **non** ha scelto deliberatamente.
  - Chiusura anche con Esc dalla tastiera; su iPhone evitare avvisi che scorrono.
- **Fogli di azione** (**Fonte**: [Action sheets](https://developer.apple.com/design/human-interface-guidelines/action-sheets)): servono per le scelte legate a un'azione voluta (per esempio salvare o eliminare una bozza). Scelta distruttiva in alto, Annulla in fondo, niente scorrimento.
- **Popover** (**Fonte**: [Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers)): da evitare nelle viste compatte (iPhone) e per gli avvisi. Uno alla volta; salvare il lavoro se si chiudono toccando fuori.
- **Solo nativo**: le altezze di sosta del foglio, il gesto di chiusura di sistema, l'alert di sistema e il foglio di azione di sistema (**Inferenza**).
- **Inferenza per il web.**
  - Dialoghi con un pulsante visibile Chiudi o Annulla, chiusura con Esc e un solo dialogo alla volta. Fogli dal basso sul telefono; dialogo centrato o pannello laterale sul desktop.
  - Lo scorrimento per chiudere è solo una scorciatoia.
  - Le conferme seguono WCAG [3.3.4](https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data) (AA): per impegni legali o finanziari e per modifiche ai dati servono reversibilità, controllo o revisione prima dell'invio (**Fonte**).

## 8. Pulsanti e azioni distruttive

- **Fonte** ([Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons), 16/12/2025):
  - Area di tocco di almeno **44×44 pt** (60×60 in visionOS) e sempre uno stato premuto.
  - Stile prominente per l'azione più probabile, **uno o due** pulsanti prominenti per vista. Distinguere la scelta preferita con lo stile, non con la dimensione.
  - Etichette chiare: icona familiare o poche parole che iniziano con un verbo («Add to Cart»). In inglese Apple usa le maiuscole a ogni parola.
  - Ruoli: normale, primario, annulla, distruttivo. Mai il ruolo primario a un'azione distruttiva, anche se è la più probabile. Il distruttivo usa il rosso di sistema.
  - Su iOS indicatore di attività dentro il pulsante, con etichetta che cambia («Checking out…»).
- **Fonte** ([Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)): tabella delle dimensioni dei controlli, iOS e iPadOS 44×44 pt predefiniti e 28×28 pt minimi, macOS 28×28 e 20×20. Spazio fra i controlli di circa 12 pt con bordo e 24 pt senza.
- **Fonte** (WCAG 2.2): almeno 24×24 px CSS o spaziatura equivalente ([2.5.8](https://www.w3.org/TR/WCAG22/#target-size-minimum), AA); 44×44 px CSS al livello AAA ([2.5.5](https://www.w3.org/TR/WCAG22/#target-size-enhanced)).
- **Fonte** ([Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback); [Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)): avvisare solo per perdite di dati inattese e irreversibili; per le azioni annullabili meglio l'annullamento della conferma ([Undo and redo](https://developer.apple.com/design/human-interface-guidelines/undo-and-redo)).
- **Inferenza.**
  - 44×44 px CSS come obiettivo sul telefono, oltre il minimo WCAG.
  - Una sola azione prominente per vista nelle schermate del percorso; azioni distruttive mai prominenti. Conferma solo dove l'azione non si può annullare o ha effetti verso altre persone.
  - Le maiuscole a ogni parola sono una convenzione dell'inglese: in italiano solo l'iniziale maiuscola, applicata in modo coerente come chiede [Writing](https://developer.apple.com/design/human-interface-guidelines/writing).

## 9. Inserimento dati, codici monouso e accesso

**Cosa dice Apple** (**Fonte**: [Entering data](https://developer.apple.com/design/human-interface-guidelines/entering-data); [Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields); [Managing accounts](https://developer.apple.com/design/human-interface-guidelines/managing-accounts); [Privacy](https://developer.apple.com/design/human-interface-guidelines/privacy))
- Chiedere il minimo e prendere dal sistema ciò che si può. Scelte invece di testo libero; incolla e trascina ammessi.
- Etichetta visibile oltre al testo segnaposto, che sparisce mentre si scrive. Campi impilati con larghezze coerenti; tastiera adatta al contenuto.
- Validazione appena possibile. Per l'email quando si passa al campo successivo, per nome utente e password prima. Continua disponibile solo con i dati richiesti.
- Mai precompilare la password; campi sicuri per i dati sensibili.
- Account solo se serve; accesso rimandato il più possibile, spiegandone i vantaggi. Senza Sign in with Apple preferire le passkey; con le password, verifica in due passaggi.
- Nominare il metodo («Accedi con Face ID») e citarlo solo se disponibile. Non usare la parola «passcode», che è il codice di sblocco del dispositivo.
- Chi crea un account deve poterlo eliminare dall'app o da un link facile da trovare.

**Sul web**
- `autocomplete` con `username`, `current-password`, `new-password` e `one-time-code` attiva il riempimento automatico, anche per i codici via SMS (**Fonte**: [Apple, Password AutoFill su HTML](https://developer.apple.com/documentation/security/enabling-password-autofill-on-an-html-input-element)).
- Con l'ultima riga dell'SMS nel formato `@example.com #123446` il codice viene proposto solo su quel dominio (**Fonte**: [WebKit, Safari 14](https://webkit.org/blog/10875/release-notes-for-safari-technology-preview-109-with-safari-14-features/)).
- Passkey in Safari da iOS 16, con la «conditional mediation» nel campo del nome utente (**Fonte**: [WebKit, Safari 16.0](https://webkit.org/blog/13152/webkit-features-in-safari-16-0/)). Da Safari 26.0 il sito può segnalare al gestore delle credenziali le passkey cambiate o revocate (Signal API; [Safari 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/)).
- Da iOS 17.2, aggiungendo il sito alla schermata Home, i cookie vengono copiati: chi ha già fatto l'accesso in Safari resta dentro anche nella web app. Gli altri dati locali non vengono copiati (**Fonte**: [WebKit, Safari 17.2](https://webkit.org/blog/14787/webkit-features-in-safari-17-2/)).
- WCAG 2.2 (**Fonte**):
  - nessun test cognitivo per accedere senza un'alternativa o un aiuto: riempimento automatico e incolla sono un aiuto ammesso ([3.3.8](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum), AA);
  - scopo dei campi dichiarato ([1.3.5](https://www.w3.org/TR/WCAG22/#identify-input-purpose), AA);
  - errore identificato e descritto a parole ([3.3.1](https://www.w3.org/TR/WCAG22/#error-identification), A);
  - nessun dato da reinserire nello stesso processo ([3.3.7](https://www.w3.org/TR/WCAG22/#redundant-entry), A).
- **Inferenza.**
  - Il campo del codice via SMS: `autocomplete="one-time-code"` e tastiera numerica (`inputmode="numeric"`, **Da verificare** sul dispositivo). Incolla consentito; un solo campo, non sei caselle separate.
  - Il testo dell'SMS (ricerca [02](../../.scratch/design-percorso-1/issues/02-ricerca-email-sms-forma.md)) va chiuso con la riga legata al dominio, quando il dominio sarà deciso.
  - In italiano «codice» è anche, con buona probabilità, il nome del codice di sblocco dell'iPhone nell'interfaccia italiana di iOS: meglio «codice di verifica» o «codice via SMS» (**Da verificare** sul dispositivo).

## 10. Stati vuoti, caricamento ed errori

- **Fonte** ([Writing](https://developer.apple.com/design/human-interface-guidelines/writing), 16/12/2025): gli stati vuoti indicano il passo successivo, con un pulsante o un link se possibile, e non contengono informazioni cruciali, perché sono temporanei. Errori vicino al problema, senza colpa e con cosa fare («Scegli una password di almeno 8 caratteri» invece di «troppo corta»). Niente «oops», niente «noi», niente messaggi robotici come «Nome non valido».
- **Fonte** ([Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars)): una sezione vuota spiega perché lo è, invece di sparire.
- **Fonte** ([Loading](https://developer.apple.com/design/human-interface-guidelines/loading); [Progress indicators](https://developer.apple.com/design/human-interface-guidelines/progress-indicators)): mostrare qualcosa subito (segnaposto); indicatore determinato quando la durata è nota, sempre in movimento, nella stessa posizione. Niente testi vaghi come «Caricamento»; Annulla se interrompere non fa danni. Su iOS c'è il trascinamento per aggiornare, ma i dati si aggiornano anche da soli.
- **Fonte** ([Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts); [Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)): niente avviso per l'assenza di rete all'avvio; dati in memoria con un'etichetta discreta che descrive il problema. Stato integrato vicino a ciò che descrive; conferma esplicita solo per i compiti importanti (l'esempio Apple è un pagamento).
- **Fonte** (WCAG 2.2, [4.1.3 Status Messages](https://www.w3.org/TR/WCAG22/#status-messages), AA): i messaggi di stato devono arrivare ai lettori di schermo senza spostare il focus.
- **Inferenza.** Per il percorso 1, ogni schermata va prevista in quattro stati: con dati, vuota con prossimo passo, in caricamento con segnaposto, in errore con causa e rimedio. Le conferme di registrazione (incassi, consegne) sono importanti e meritano un riscontro esplicito, annunciato anche a VoiceOver.

## 11. Feedback, movimento e movimento ridotto

- **Fonte** ([Motion](https://developer.apple.com/design/human-interface-guidelines/motion), 9/9/2025): movimento solo con uno scopo; mai unico canale di un'informazione; breve e preciso. Niente movimento sulle interazioni frequenti; deve poter essere interrotto e seguire il gesto.
- **Fonte** ([Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)): con «Riduci movimento» ridurre le animazioni automatiche e ripetute (zoom, scala, movimento periferico). Molle più rigide, dissolvenze al posto degli spostamenti, niente animazioni dentro e fuori dalla sfocatura. Ridurre gli elementi che si chiudono da soli dopo un tempo.
- **Fonte** (WebKit): la media query `prefers-reduced-motion` corrisponde a quell'impostazione ([WebKit, 2017](https://webkit.org/blog/7551/responsive-design-for-motion/)). Una dissolvenza semplice non è nota come causa di disturbi e non va tolta per forza ([WebKit, 2025](https://webkit.org/blog/16967/two-lines-of-cross-document-view-transitions-code-you-can-use-on-every-website-today/)).
- **Fonte** (WCAG 2.2): fermare o nascondere ciò che si muove per più di 5 secondi ([2.2.2](https://www.w3.org/TR/WCAG22/#pause-stop-hide), A); disattivare il movimento attivato dall'interazione ([2.3.3](https://www.w3.org/TR/WCAG22/#animation-from-interactions), AAA).
- **Vibrazione** (**Fonte**: [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility); [WebKit, Safari 18.0](https://webkit.org/blog/15865/webkit-features-in-safari-18-0/)): Apple chiede di accompagnare i segnali sonori con la vibrazione. Sul web l'unica vibrazione documentata su iPhone è quella dell'interruttore nativo `<input type=checkbox switch>`, da iOS 18. **Solo nativo** tutto il resto.
- **Inferenza.** Il riscontro sul web è visivo e testuale; le transizioni diventano dissolvenze con `prefers-reduced-motion`. Niente notifiche temporanee che spariscono da sole per informazioni importanti.

## 12. Icone e simboli

- **Fonte** ([Icons](https://developer.apple.com/design/human-interface-guidelines/icons), 9/6/2025): disegni semplici e coerenti per misura, peso e prospettiva; peso uguale al testo vicino; formato vettoriale; testo alternativo per le icone. Esiste una tabella di SF Symbols per le azioni comuni.
- **Fonte** ([SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), 28/7/2025; [pagina SF Symbols](https://developer.apple.com/sf-symbols/)): oltre 7.000 simboli allineati al font di sistema, in nove pesi e tre scale, con le varianti piena e a contorno (piena nelle barre delle schede, contorno nelle barre degli strumenti). Le condizioni d'uso vietano i simboli, o immagini simili, in icone d'app, loghi o altri usi come marchio. I simboli nuovi valgono per le app su iOS 27 e sistemi coetanei.
- **Licenza per il web.** Il testo delle condizioni di SF Symbols non è pubblicato nella pagina: si accetta scaricando l'app (vedi «Fonti non raggiunte»). La licenza del font SF, invece leggibile, limita l'uso ai mock-up di software per sistemi Apple e vieta i contenuti web (**Fonte**: [Apple, Fonts](https://developer.apple.com/fonts/)).
- **Inferenza.** Fino alla lettura delle condizioni di SF Symbols, le direzioni usano un set di icone con licenza libera dallo stile simile (tratto uniforme, varianti piena e contorno), più eventuali icone proprie in SVG. Ogni icona ha un nome accessibile. Se servisse SF Symbols nel prodotto web: **serve un parere professionale** sulla licenza.

## 13. Scrittura

- **Fonte** ([Writing](https://developer.apple.com/design/human-interface-guidelines/writing), 16/12/2025):
  - Una voce dell'app e un tono adatto alla situazione (serio negli errori di pagamento). Chiarezza, parole semplici, niente gergo, scrittura per l'accessibilità e la traduzione.
  - Etichette con verbi («Invia» meglio di «Facciamolo!»); link descrittivi, non «clicca qui».
  - Una regola di maiuscole per tipo di elemento, applicata con coerenza. Nei flussi in più passaggi: «Inizia», poi «Continua» o «Avanti», infine «Fatto».
  - Possessivi con parsimonia, niente «noi».
  - Verbi giusti per il dispositivo: non «clicca» su un dispositivo a tocco. Negli avvisi Apple suggerisce «scegli», neutro rispetto al dispositivo ([Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)).
- **Fonte** ([Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts); [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars)): titoli specifici e brevi; titoli delle viste sotto i 15 caratteri.
- **Inferenza.** Sul web la stessa pagina si usa a tocco e con il mouse: verbi neutri («apri», «scegli», «registra»). I limiti di lunghezza pensati per l'inglese vanno verificati con le parole del [glossario](../../GLOSSARY.md), più lunghe in italiano; ne terrà conto la skill `ux-writing`.

## 14. Accessibilità: VoiceOver, aree di tocco, ordine di lettura

- **Fonte** ([VoiceOver](https://developer.apple.com/design/human-interface-guidelines/voiceover), pagina nuova del 7/3/2025):
  - etichette alternative per tutti gli elementi chiave; immagini significative descritte, decorative escluse; grafici accessibili;
  - titoli unici e intestazioni di sezione; relazioni fra elementi esplicitate (raggruppamento, ordine);
  - cambiamenti di contenuto annunciati. Il rotore di VoiceOver naviga anche le pagine web per intestazioni e link.
- **Fonte** ([Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility); [Keyboards](https://developer.apple.com/design/human-interface-guidelines/keyboards)): alternative ai gesti; navigazione completa da tastiera senza ridefinire le scorciatoie di sistema; Controllo vocale con etichette corrette; pochi elementi a tempo. In Accesso assistito: un'interazione per schermata e doppia conferma per le azioni difficili da annullare.
- **Fonte** (WCAG 2.2):
  - ordine di lettura determinabile ([1.3.2](https://www.w3.org/TR/WCAG22/#meaningful-sequence), A) e ordine del focus che conserva il significato ([2.4.3](https://www.w3.org/TR/WCAG22/#focus-order), A);
  - elemento con il focus mai del tutto coperto da contenuti dell'autore, per esempio barre fisse ([2.4.11](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum), AA);
  - aiuto nella stessa posizione relativa in ogni pagina ([3.2.6](https://www.w3.org/TR/WCAG22/#consistent-help), A). Nel percorso 1 riguarda il pulsante «Chiama» (**Inferenza**).
- **Inferenza.**
  - L'ordine del codice HTML segue la gerarchia visiva: prima l'informazione principale, poi le azioni. Intestazioni vere (`h1`–`h3`) e regioni (`nav`, `main`, `search`), così il rotore funziona.
  - Le barre fisse in alto e in basso non devono coprire il focus: margini di scorrimento pari all'altezza delle barre.
  - Aree di tocco: vedi §8.

## 15. Safari su iPhone: browser, schermata Home e cosa resta solo nativo

| Tema | Cosa risulta | Fonte |
| --- | --- | --- |
| **Aggiunta alla schermata Home** | Da iOS e iPadOS 26 **ogni** sito aggiunto alla schermata Home si apre come web app; la persona può scegliere di aggiungerlo come segnalibro. Nessun requisito di «installabilità»: manifest e service worker sono facoltativi, ma se il manifest c'è le sue icone vengono usate | **Fonte**: [WebKit, Safari 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/) |
| **Passi in italiano** (aggiunta 24/10/2026) | Nel manuale Apple dell'iPhone in italiano: in Safari si tocca il pulsante «Menu pagina», poi «Condividi» (con il layout dei pannelli «In basso» o «In alto» si tocca direttamente il pulsante di condivisione); si scorre e si tocca «Aggiungi alla schermata Home», che si può aggiungere con «Modifica azioni» se manca; «Apri come app web» la fa usare come un'app; infine «Aggiungi» | **Fonte**: [Apple, Aggiungere un segnalibro alle pagine web in Safari su iPhone](https://support.apple.com/it-it/guide/iphone/iph42ab2f3a7/ios), letta il 24/10/2026 |
| **Modalità standalone** | Niente barra dell'indirizzo in alto né barra dei pulsanti in basso: resta solo la barra di stato. `window.navigator.standalone` dice se la pagina è in quella modalità. La guida è archiviata (ultimo aggiornamento 12/12/2016) | **Fonte**: [Apple, Configuring Web Applications](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) |
| **Modo di visualizzazione** | In `standalone` il browser esclude la propria interfaccia ma «può includere» barra di stato e pulsante indietro di sistema. La media query `display-mode` riflette il modo applicato | **Fonte**: [W3C, Web Application Manifest](https://www.w3.org/TR/appmanifest/), Working Draft del 16/10/2026. Supporto di `display-mode` in Safari: **Da verificare** |
| **Gesto indietro** | Nessuna fonte Apple o WebKit trovata su un gesto indietro di sistema nelle web app della schermata Home | **Da verificare** su iPhone. **Inferenza**: un pulsante Indietro proprio nell'intestazione, sempre presente nelle viste di secondo livello |
| **Barra di stato** | `apple-mobile-web-app-status-bar-style` vale solo in standalone: `default` e `black` lasciano il contenuto sotto la barra, `black-translucent` lo estende a tutto lo schermo, in parte coperto. `theme-color` colorava barra di stato e area di rimbalzo in Safari 15 su iOS 15 | **Fonte**: guida archiviata sopra; [Apple, Supported Meta Tags](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html) (archiviata); [WebKit, Safari 15](https://webkit.org/blog/11989/new-webkit-features-in-safari-15/). Comportamento attuale con il nuovo aspetto di iOS 26 e 27: **Da verificare** |
| **Area sicura** | Con `viewport-fit=cover` la pagina occupa tutto lo schermo; `env(safe-area-inset-top/right/bottom/left)` dà i margini da rispettare, combinati con `max()` ai margini normali. Senza `cover` Safari rientra da solo e riempie i bordi con il colore di fondo della pagina | **Fonte**: [WebKit, 2017](https://webkit.org/blog/7929/designing-websites-for-iphone-x/); Apple: [Layout](https://developer.apple.com/design/human-interface-guidelines/layout), aree sicure |
| **Accesso** | I cookie di Safari passano alla web app quando la si aggiunge alla schermata Home (iOS 17.2) | **Fonte**: [WebKit, Safari 17.2](https://webkit.org/blog/14787/webkit-features-in-safari-17-2/) |
| **Notifiche e badge** | Web Push e badge per le web app della schermata Home da iOS 16.4. Le notifiche sul telefono sono fuori ambito nel percorso 1 ([mappa](../../.scratch/design-percorso-1/map.md)) | **Fonte**: [WebKit, Safari 16.4](https://webkit.org/blog/13966/webkit-features-in-safari-16-4/) |
| **Desktop (Mac)** | Da Safari 17 ogni sito si aggiunge al Dock come web app, con o senza manifest. Da macOS Sequoia i link nell'ambito della web app si aprono in essa; `theme-color` colora la barra del titolo | **Fonte**: [WebKit, Safari 17.0](https://webkit.org/blog/14445/webkit-features-in-safari-17-0/), [18.0](https://webkit.org/blog/15865/webkit-features-in-safari-18-0/), [17.2](https://webkit.org/blog/14787/webkit-features-in-safari-17-2/) |

**Solo nativo** (**Inferenza** dalle pagine HIG citate e dall'assenza di equivalenti nelle note WebKit lette):
- Liquid Glass e i materiali di sistema;
- Dynamic Type (sul web solo i valori con prefisso `-apple-system-*`);
- font SF incorporato e SF Symbols (per licenza);
- vibrazione, salvo l'interruttore nativo;
- fogli con altezze di sosta e maniglia, fogli di azione e avvisi di sistema;
- titolo grande che si riduce con lo scorrimento (imitabile);
- menu dell'app su macOS, widget, Spotlight, Comandi rapidi e azioni rapide della schermata Home, elencati fra le funzioni di sistema in [Designing for iOS](https://developer.apple.com/design/human-interface-guidelines/designing-for-ios).

Si trasferiscono invece:
- tema scuro e contrasto aumentato, via media query;
- movimento ridotto;
- area sicura;
- riempimento automatico di password e codici, passkey;
- l'interruttore con vibrazione.

## 16. Cosa ne segue per le direzioni del percorso 1

Tutto il capitolo è **Inferenza** dell'agente; le decisioni restano dell'utente.

1. **Cosa resta comune a tutte le direzioni.** Hanno lo stesso scheletro HIG:
   - navigazione solo per navigare;
   - funzioni uguali a ogni larghezza;
   - una sola azione prominente per vista, mai distruttiva;
   - conferme solo per azioni non annullabili;
   - scrittura con verbi e senza «noi»;
   - quattro stati per schermata;
   - tema chiaro e scuro dal sistema;
   - WCAG 2.2 AA.

   Possono differire davvero su struttura, gerarchia, densità e identità. Tre strutture compatibili con le HIG:
   - **(a)** barra delle schede in basso sul telefono, barra laterale sul desktop;
   - **(b)** una pagina «casa» con navigazione a pila e ricerca in primo piano, senza schede;
   - **(c)** elenco e dettaglio: vista divisa sul desktop, pila sul telefono.
2. **Vetro solo sulle barre, con alternativa opaca.** Se una direzione usa la trasparenza, la limita a barra delle schede e intestazione. Prevede una versione opaca con `prefers-contrast: more` e verifica il contrasto WCAG sul fondo peggiore. Nessuna direzione si regge sul vetro: sul web è un'imitazione e la richiesta di meno trasparenza non è rilevabile con certezza.
3. **Caratteri.** `system-ui` dà SF sui dispositivi Apple senza problemi di licenza; un web font con licenza libera dà lo stesso aspetto ovunque. Corpo del testo di almeno 17 px sul telefono, misure in `rem`, prova al 200% e a 320 px.
4. **Tema scuro: una domanda per l'utente.** DESIGN.md registra una preferenza per fondo nero e grigi neutri, da riconfermare. Apple chiede di seguire l'impostazione di sistema e di evitare un selettore d'aspetto nell'app; riserva il «solo scuro» ai media immersivi. Proposta: ogni direzione in chiaro e in scuro seguendo il sistema, con lo scuro come vetrina se l'utente lo conferma. Un selettore nell'app o un prodotto solo scuro vanno scelti esplicitamente, sapendo che si scostano dalle HIG.
5. **Telefono come web app.** Ogni direzione prevede:
   - un pulsante Indietro proprio nelle viste di secondo livello;
   - `viewport-fit=cover` con i margini dell'area sicura;
   - barre fisse che non coprono il focus;
   - una prova reale «Aggiungi alla schermata Home» su iOS 26 o 27, perché gesto indietro, barra di stato e sovrapposizione con la barra di Safari restano **Da verificare**.
6. **Desktop dell'operatore.** Vista divisa, cioè coda, elenco e dettaglio, con selezione evidenziata. Tabelle vere con colonne ordinabili; nessuna azione critica in fondo alla finestra; scorciatoie da tastiera solo per le azioni più frequenti, senza toccare quelle del browser.
7. **Accesso con codice.** Campo unico con `autocomplete="one-time-code"`; SMS con la riga legata al dominio; incolla consentito. Il pulsante dice il metodo («Invia il codice via SMS»); evitare «codice» da solo.
8. **Icone.** Set con licenza libera e stile coerente, non SF Symbols, finché le condizioni non sono lette.
9. **Fogli e dialoghi.** Uno alla volta. Annulla a sinistra e Fatto a destra nei fogli del telefono, come su iOS. Chiusura con pulsante ed Esc; sul desktop dialogo centrato o pannello laterale; niente popover sul telefono.

## 17. Domande aperte

- **Da verificare su un iPhone con iOS 26 o 27**, con una pagina di prova e dati inventati:
  - gesto indietro nella web app della schermata Home;
  - effetto di `apple-mobile-web-app-status-bar-style` e `theme-color`;
  - sovrapposizione fra una barra fissa in basso e la barra di Safari;
  - effetto di «Testo più grande» sul testo in `rem`;
  - supporto di `display-mode: standalone` e di `prefers-reduced-transparency`;
  - nome italiano del codice di sblocco in iOS.
- **Licenza di SF Symbols per un prodotto web**: serve leggere le condizioni incluse nell'app e, se si volessero usare, **un parere professionale**.
- **Tema solo scuro o selettore d'aspetto**: decisione dell'utente (§16, punto 4).

## Fonti non raggiunte

- **Condizioni d'uso di SF Symbols.** La pagina [SF Symbols](https://developer.apple.com/sf-symbols/) e la pagina HIG le citano, ma il testo non è pubblicato in rete: si accetta con il download dell'app, che l'agente non ha scaricato. La pagina [Apple Design Resources](https://developer.apple.com/design/resources/) rimanda solo alle condizioni generali del sito.
- **Pagine HIG inesistenti.** `navigation-bars`, `empty-states` e `one-time-codes` rispondono «non trovato». Le indicazioni sulle barre di navigazione sono confluite in [Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars) (registro del 9/6/2025); quelle sugli stati vuoti stanno in [Writing](https://developer.apple.com/design/human-interface-guidelines/writing) e [Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars).
- **WCAG 2.2.** La raccomandazione su w3.org ha risposto prima con una pagina di controllo anti-bot; è stata letta al secondo tentativo.
- **Nessuna fonte primaria trovata** (non errori di rete): gesto indietro in standalone, `theme-color` e barra di stato su iOS 26 e 27, `prefers-reduced-transparency` in Safari, effetto di Dynamic Type sul testo web normale. Sono elencati in §17.

## Fonti

Tutte lette il 23 ottobre 2026. Le pagine HIG sono state lette nella versione pubblicata da developer.apple.com, attraverso i dati della stessa pagina; tra parentesi l'ultimo aggiornamento dichiarato dalla pagina, quando c'è.

Apple Human Interface Guidelines
- Design principles (8/6/2026): https://developer.apple.com/design/human-interface-guidelines/design-principles
- Designing for iOS: https://developer.apple.com/design/human-interface-guidelines/designing-for-ios
- Designing for macOS: https://developer.apple.com/design/human-interface-guidelines/designing-for-macos
- Layout (9/9/2026): https://developer.apple.com/design/human-interface-guidelines/layout
- Tab bars (8/6/2026): https://developer.apple.com/design/human-interface-guidelines/tab-bars
- Sidebars (8/6/2026): https://developer.apple.com/design/human-interface-guidelines/sidebars
- Toolbars (16/12/2025): https://developer.apple.com/design/human-interface-guidelines/toolbars
- Split views (9/6/2025): https://developer.apple.com/design/human-interface-guidelines/split-views
- Search fields (8/6/2026): https://developer.apple.com/design/human-interface-guidelines/search-fields
- Searching (8/6/2026): https://developer.apple.com/design/human-interface-guidelines/searching
- Typography (16/12/2025): https://developer.apple.com/design/human-interface-guidelines/typography
- Color (16/12/2025): https://developer.apple.com/design/human-interface-guidelines/color
- Dark Mode (6/8/2024): https://developer.apple.com/design/human-interface-guidelines/dark-mode
- Materials (9/9/2025): https://developer.apple.com/design/human-interface-guidelines/materials
- Scroll views (8/6/2026): https://developer.apple.com/design/human-interface-guidelines/scroll-views
- Lists and tables (21/6/2023): https://developer.apple.com/design/human-interface-guidelines/lists-and-tables
- Sheets (24/3/2026): https://developer.apple.com/design/human-interface-guidelines/sheets
- Modality (5/12/2023): https://developer.apple.com/design/human-interface-guidelines/modality
- Alerts (2/2/2024): https://developer.apple.com/design/human-interface-guidelines/alerts
- Action sheets: https://developer.apple.com/design/human-interface-guidelines/action-sheets
- Popovers: https://developer.apple.com/design/human-interface-guidelines/popovers
- Buttons (16/12/2025): https://developer.apple.com/design/human-interface-guidelines/buttons
- Segmented controls (21/6/2023): https://developer.apple.com/design/human-interface-guidelines/segmented-controls
- Entering data (21/6/2023): https://developer.apple.com/design/human-interface-guidelines/entering-data
- Text fields (5/6/2023): https://developer.apple.com/design/human-interface-guidelines/text-fields
- Managing accounts: https://developer.apple.com/design/human-interface-guidelines/managing-accounts
- Privacy (21/6/2023): https://developer.apple.com/design/human-interface-guidelines/privacy
- Loading (9/6/2025): https://developer.apple.com/design/human-interface-guidelines/loading
- Progress indicators (12/9/2023): https://developer.apple.com/design/human-interface-guidelines/progress-indicators
- Feedback: https://developer.apple.com/design/human-interface-guidelines/feedback
- Undo and redo: https://developer.apple.com/design/human-interface-guidelines/undo-and-redo
- Motion (9/9/2025): https://developer.apple.com/design/human-interface-guidelines/motion
- Icons (9/6/2025): https://developer.apple.com/design/human-interface-guidelines/icons
- SF Symbols (28/7/2025): https://developer.apple.com/design/human-interface-guidelines/sf-symbols
- Writing (16/12/2025): https://developer.apple.com/design/human-interface-guidelines/writing
- Accessibility (9/6/2025): https://developer.apple.com/design/human-interface-guidelines/accessibility
- VoiceOver (7/3/2025): https://developer.apple.com/design/human-interface-guidelines/voiceover
- Keyboards (9/6/2025): https://developer.apple.com/design/human-interface-guidelines/keyboards
- Going full screen (9/6/2025): https://developer.apple.com/design/human-interface-guidelines/going-full-screen
- Launching (10/6/2024): https://developer.apple.com/design/human-interface-guidelines/launching
- Onboarding (10/6/2024): https://developer.apple.com/design/human-interface-guidelines/onboarding
- Web views: https://developer.apple.com/design/human-interface-guidelines/web-views
- Apple Pay (8/6/2026) e Wallet (8/6/2026), lette solo per controllare docs/rules/APPLE_DESIGN.md: https://developer.apple.com/design/human-interface-guidelines/apple-pay, https://developer.apple.com/design/human-interface-guidelines/wallet

Apple Developer
- Fonts, con le licenze di San Francisco: https://developer.apple.com/fonts/
- SF Symbols: https://developer.apple.com/sf-symbols/
- Apple Design Resources: https://developer.apple.com/design/resources/
- Enabling Password AutoFill on an HTML input element: https://developer.apple.com/documentation/security/enabling-password-autofill-on-an-html-input-element
- Manuale utente di iPhone, «Aggiungere un segnalibro alle pagine web in Safari su iPhone» (in italiano, letto il 24/10/2026): https://support.apple.com/it-it/guide/iphone/iph42ab2f3a7/ios
- Configuring Web Applications, Safari Web Content Guide (archiviata, 12/12/2016): https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
- Supported Meta Tags, Safari HTML Reference (archiviata): https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
- Note di rilascio di Safari 26, 26.1, 26.2 e 27, consultate per cercare novità su web app e materiali: https://developer.apple.com/documentation/safari-release-notes

WebKit
- WebKit Features for Safari 27.0 (17/9/2026): https://webkit.org/blog/18325/webkit-features-for-safari-27-0/
- WebKit Features for Safari 26.4: https://webkit.org/blog/17862/webkit-features-for-safari-26-4/
- WebKit Features for Safari 26.2 (12/12/2025): https://webkit.org/blog/17640/webkit-features-for-safari-26-2/
- WebKit Features for Safari 26.1 (3/11/2025): https://webkit.org/blog/17541/webkit-features-for-safari-26-1/
- WebKit Features in Safari 26.0 (15/9/2025): https://webkit.org/blog/17333/webkit-features-in-safari-26-0/
- WebKit Features in Safari 18.0 (16/9/2024): https://webkit.org/blog/15865/webkit-features-in-safari-18-0/
- WebKit Features in Safari 17.2 (11/12/2023): https://webkit.org/blog/14787/webkit-features-in-safari-17-2/
- WebKit Features in Safari 17.0 (18/9/2023): https://webkit.org/blog/14445/webkit-features-in-safari-17-0/
- WebKit Features in Safari 16.4 (27/3/2023): https://webkit.org/blog/13966/webkit-features-in-safari-16-4/
- WebKit Features in Safari 16.0 (12/9/2022): https://webkit.org/blog/13152/webkit-features-in-safari-16-0/
- New WebKit Features in Safari 15: https://webkit.org/blog/11989/new-webkit-features-in-safari-15/
- Release Notes for Safari Technology Preview 119 (27/1/2021): https://webkit.org/blog/11525/release-notes-for-safari-technology-preview-119/
- Release Notes for Safari Technology Preview 109 with Safari 14 Features (25/6/2020): https://webkit.org/blog/10875/release-notes-for-safari-technology-preview-109-with-safari-14-features/
- New WebKit Features in Safari 13.1 (3/4/2020): https://webkit.org/blog/10247/new-webkit-features-in-safari-13-1/
- Dark Mode Support in WebKit (7/5/2019): https://webkit.org/blog/8840/dark-mode-support-in-webkit/
- Designing Websites for iPhone X (22/9/2017, aggiornato il 31/10/2017): https://webkit.org/blog/7929/designing-websites-for-iphone-x/
- Responsive Design for Motion (15/5/2017): https://webkit.org/blog/7551/responsive-design-for-motion/
- Using the System Font in Web Content (27/7/2015): https://webkit.org/blog/3709/using-the-system-font-in-web-content/
- Two lines of Cross-Document View Transitions code (21/5/2025): https://webkit.org/blog/16967/two-lines-of-cross-document-view-transitions-code-you-can-use-on-every-website-today/

W3C
- WCAG 2.2, W3C Recommendation, ultima versione pubblicata il 12/12/2024: https://www.w3.org/TR/WCAG22/
- Understanding 1.4.3 Contrast (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- Understanding 2.5.8 Target Size (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Web Application Manifest, Working Draft del 16/10/2026: https://www.w3.org/TR/appmanifest/
