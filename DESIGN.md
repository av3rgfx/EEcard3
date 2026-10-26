# Decisioni visive del progetto

## Stato
Direzione del percorso 1 approvata dall'utente il 23/10/2026: **«Terracotta»** (sezione «Direzione del percorso 1»). Non si eredita alcun layout, menu, palette, font o componente da tentativi precedenti: il design si progetta da zero (vedi [docs/METODO.md](docs/METODO.md), passo 6).
Il design del percorso 1 è in corso dal 23/10/2026 nella mappa [Design del percorso 1](.scratch/design-percorso-1/map.md): ora si disegna il percorso intero in questa direzione. Le schermate per ruolo e quelle comuni sono approvate. Dal 24/10/2026 è approvata anche la rifinitura estetica delle schermate interne dei clienti, la «via di mezzo» (sezione «Rifinitura delle schermate interne (percorso 1)»). Dal 25/10/2026 sono decisi anche i testi dell'interfaccia (sezione «Testi dell'interfaccia (percorso 1)»), che prevalgono sui testi citati nelle sezioni per ruolo. Dal 26/10/2026 c'è anche la revisione dei dati limite e dell'accessibilità (sezione «Dati limite e accessibilità (percorso 1)»), e sono decisi le interazioni e gli stati (sezione «Interazioni e stati (percorso 1)»). Sempre il 26/10/2026, dopo la ricerca sulle licenze, sono fissati carattere, icone, logo di ƎE e uso delle immagini generate (sezione «Componenti e token»). Le scelte arrivano qui man mano che l'utente le conferma.

## Riferimento confermato dall'utente
- Le **Apple Human Interface Guidelines** sono il riferimento di design più importante (16/10/2026), adattate alla piattaforma effettiva. Sintesi e fonti: [docs/rules/APPLE_DESIGN.md](docs/rules/APPLE_DESIGN.md). In caso di dubbio si rilegge la pagina ufficiale del componente.
- Importi sempre con il separatore delle migliaia: «9.876,54 €» (16/10/2026).

## Indicazioni dell'utente sull'esperienza
Riscontri dati dall'utente su proposte precedenti, riformulati come principi. Valgono come orientamento, non come soluzioni.
- Poche informazioni, chiare: una proposta con «troppe informazioni poco chiare e una UX non corretta» è stata respinta.
- Il desktop va progettato con la stessa cura del telefono; un telefono allargato è risultato «trascurato e grezzo».
- Una schermata senza nulla da fare non deve restare vuota: deve mostrare qualcosa di utile.
- Interfaccia di qualità alta, calma e facile anche per chi ha poca familiarità digitale.
- La bellezza non deve mettere in disparte le informazioni (24/10/2026): una versione «veramente carina» è stata rivista perché aveva troppe cose che distraggono chi ha poca familiarità con il computer, era più scura del bianco di prima e lasciava in secondo piano i dettagli del canone.
- Email (19/10/2026): innovative e dinamiche, semplici ma d'impatto, mai con l'aria di spam o pubblicità. È un requisito; la forma si progetta nel passo 6 di [docs/METODO.md](docs/METODO.md).

## Piattaforme
Prima la piattaforma web (telefono e desktop), poi l'app iPhone (confermato). I dettagli sono DA DEFINIRE.

## Identità
Palette, tipografia, icone e densità del percorso 1 sono in «Direzione del percorso 1»; voce e tema in «Punti fermi del percorso 1». DA DEFINIRE: la scritta del nome (wordmark), dopo il parere sul marchio.
- Il prodotto ha un marchio autonomo dall'agenzia (confermato). Nome: **Connetto** ([PRODUCT.md](PRODUCT.md) §1 e §12, 23/10/2026), nome di lavoro in attesa del parere sul marchio: la scritta del nome si disegna dopo il parere.
- **Simbolo C–Legame** (23/10/2026, scelto e fornito dall'utente): due elementi a forma di C che si agganciano, a rappresentare la connessione, il legame. Ambito: solo il segno, in un colore pieno che prende quello del testo intorno; versione regolare e versione piccola. File e regole d'uso in [assets/marchio/](assets/marchio/README.md). È un materiale dell'utente, non un riuso di tentativi precedenti. Unica eccezione, decisa dall'utente il 23/10/2026: sulla tessera di rame, vista come oggetto, il simbolo può essere inciso nel materiale, con la forma identica.
- **Logo di ƎE** (decisione dell'utente del 26/10/2026, ticket [Ricerca: licenze di icone, carattere e immagini](.scratch/design-percorso-1/issues/17-ricerca-licenze-grafiche.md)): «ƎE» è il logo dell'agenzia e nelle schermate compare sempre come disegno (SVG), anche dentro le frasi («Chiama ƎE»). È alto come il testo intorno, ne prende il colore, segue la grandezza del testo ed è letto «ƎE» dallo screen reader. Nelle email e negli SMS resta in lettere, perché un disegno non sempre si vede. Il logo lo ridisegniamo noi: l'agenzia non ha più il file originale e, secondo l'utente, il collaboratore di ƎE ha confermato. Il disegno va approvato dall'agenzia ([ticket](.scratch/design-percorso-1/issues/18-logo-ee-svg.md)); fino ad allora i prototipi usano le lettere. *Motivo:* Manrope non ha la «Ǝ», e un altro carattere la disegnerebbe diversa dalla «E» accanto; il nome dell'agenzia resta sempre uguale.
- Preferenza per il tema scuro (fondo nero e grigi neutri): riconfermata il 23/10/2026 come vetrina, non come unico tema. Lo stesso giorno, scegliendo la direzione, l'utente ha messo in vetrina il chiaro; lo scuro resta nero e grigi neutri (vedi «Tema»).

## Punti fermi del percorso 1
Decisi dall'utente il 23/10/2026, una domanda alla volta, nel ticket [Cosa vede per primo ciascuno e come parla il servizio](.scratch/design-percorso-1/issues/03-cosa-vede-per-primo.md), che conserva alternative scartate e motivi. Ambito: tutte le direzioni del percorso 1, su telefono e desktop; le direzioni differiscono per impostazione e aspetto, non per questi contenuti. Applicano [PRODUCT.md](PRODUCT.md) §10 senza cambiarla.

**Cosa vede per primo ciascuno**
- **Proprietario:** il mese in corso della casa, con due righe distinte: lo stato del canone e quello della consegna. La riga della consegna manca quando l'inquilino paga con bonifico al proprietario. Sopra, da sola e con un solo pulsante, la cosa che deve fare lui («Ricevuto», nuovo canone da approvare). Mesi passati, ricevute, documenti, scadenze e «Chiama» stanno un tocco più in là. Quando va tutto bene compaiono le date e la prossima scadenza della locazione. *Motivo:* risponde subito alla promessa del percorso 1 (§12, «Controllo A») e tiene distinti i passaggi del denaro (§7).
- **Inquilino:** il prossimo pagamento (mese, scadenza, canone e oneri in righe separate, dove pagare). Dopo il pagamento la stessa zona dice «pagato», con la ricevuta e la scadenza seguente. Con bonifico al proprietario compare in cima «Carica la contabile». Una scadenza passata si dice con calma, senza colore d'allarme né rimprovero, perché non ci sono solleciti all'inquilino (§10.5). *Motivo:* la promessa all'inquilino in ordine d'uso.
- **Operatore di ƎE:** il lavoro in coda, raggruppato e con il numero di voci, in quest'ordine: consegne in ritardo, contestazioni aperte, canoni non pagati oltre i giorni fissati, consegne da fare, nuovi canoni da controllare, attivazioni e documenti mancanti, scadenze della locazione. «Trova cliente o casa» (nome, indirizzo, codice della tessera) sta sempre in alto, per il banco. *Motivo:* §10.1 e le 1–1,5 ore al giorno; prima ciò che tocca la fiducia del proprietario.
- **Una schermata non resta mai vuota:** il proprietario vede gli stati del mese, l'inquilino il prossimo pagamento; l'operatore con la coda vuota vede ciò che è stato registrato oggi e le consegne e scadenze della settimana.
- Una contestazione aperta lascia la voce al suo posto, segnata «contestata».

**Più case e più ruoli**
- Proprietario con più case: un elenco, ogni casa con i due stati del mese in breve e le cose da fare in cima, ciascuna con il nome della casa. Nessuna somma di importi fra case. Con una casa sola si entra direttamente nella casa.
- Inquilino: la casa attuale per prima; le locazioni finite un tocco più in là, in sola lettura, con la data di chiusura dell'accesso (§10.8). Chi non ha più una casa attuale entra direttamente lì, con «Scarica tutto».
- Una persona proprietario e inquilino: un elenco «Le mie case» diviso per ruolo, con il ruolo scritto e le cose da fare di entrambi i ruoli in cima.
- Con più proprietari, «Ricevuto» compare solo alla persona indicata nell'incarico (§10.6).

**Voce**
- A proprietari e inquilini il servizio dà del **«tu»**, in schermate, email, SMS, errori e conferme (cambiato dall'utente il 23/10/2026 guardando il prototipo del proprietario: «suona meglio»; prima si dava del «Lei», con l'ipotesi che al banco ƎE dia del «Lei»). I pulsanti hanno il solo verbo («Ricevuto», «Carica la contabile», «Chiama») e gli stati sono in forma breve («Pagato il 3 ottobre»). Il tono è caldo, non burocratico. *Da verificare con ƎE:* se al banco si dà del «Lei», a voce il tono resta più formale che per iscritto; è una differenza accettata.
- Nello spazio dell'operatore si usano il **«tu»** e frasi brevissime; ora anche i testi per i clienti sono al «tu».
- **Nessuno parla in prima persona:** niente «noi» e niente Connetto come personaggio. Le frasi dicono il fatto e chi ha agito, e ogni fatto del denaro dice chi l'ha confermato («ricevuto da ƎE al banco», «confermato da te»). Connetto è il nome del posto; il mittente dei messaggi resta quello di §10.5. *Motivo:* il glossario («Incasso verificato»), le HIG e un nome ancora di lavoro.

**Tema**
- Il tema segue l'impostazione chiaro o scuro del dispositivo, senza interruttore nell'app. Ogni direzione si disegna in chiaro e in scuro, curati allo stesso modo; lo scuro è fatto di nero e grigi neutri. *Motivo:* la preferenza dell'utente resta senza essere imposta a chi legge meglio in chiaro; le HIG chiedono di seguire il sistema ([ricerca](docs/ricerca/hig-web.md), §4).
- **Vetrina: il chiaro** (cambiato dall'utente il 23/10/2026 nel ticket [Direzione del percorso 1](.scratch/design-percorso-1/issues/04-prototipo-direzione.md), portato come conflitto). Prima la vetrina era lo scuro, che si mostrava per primo nei prototipi; ora prototipi e presentazioni si aprono in chiaro. *Motivo:* le immagini di riferimento scelte dall'utente sono chiare e la loro bellezza viene da luce e immagini.

## Direzione del percorso 1
Scelta dall'utente il 23/10/2026: **«Terracotta»**, dopo tre giri di prototipo con dati inventati. Il ticket [Direzione del percorso 1](.scratch/design-percorso-1/issues/04-prototipo-direzione.md) conserva le direzioni mostrate, i riferimenti dell'utente e i motivi delle scelte. Ambito: tutto il percorso 1, per proprietario, inquilino e operatore di ƎE, su telefono e desktop, comprese le email. Applica i «Punti fermi del percorso 1» senza cambiarli; il prototipo non resta nel repository, valgono queste regole.

- **Organizzazione.**
  - *Desktop:* il servizio sta in un grande pannello arrotondato su un fondo neutro. A sinistra la barra laterale con simbolo e nome, le sezioni, «Le mie case» e in fondo la persona; in cima la ricerca.
  - *Telefono:* un'intestazione con il simbolo e le iniziali della persona, il contenuto in colonna e le schede in basso. Per i clienti sono cinque: Casa, Ricevute, Tessera, Documenti e Profilo (cambiato il 23/10/2026: prima erano quattro, senza Tessera; vedi «Accesso, tessera e situazioni comuni»). Per l'operatore sono quattro: Coda, Case, Persone e Oggi. La barra delle schede è traslucida, con una versione opaca quando si chiede più contrasto.
  - *Operatore:* elenco e dettaglio, affiancati sul desktop e in fila sul telefono, con Indietro. In cima «Trova cliente o casa» e tre numeri del giorno: voci in coda, incassi, registrato oggi.
- **La casa in cima.** La pagina della casa si apre con un riquadro. Contiene l'illustrazione della casa in grande, come la foto di un annuncio, con l'indirizzo in un'etichetta; accanto sul desktop, sotto sul telefono, un titolo che dice il fatto del mese («Ottobre: il canone è pagato») e la cosa da fare con un solo pulsante.
  - *Cambiato dall'utente il 24/10/2026* (ticket [Rifinitura estetica delle schermate interne](.scratch/design-percorso-1/issues/13-rifinitura-estetica.md)): nel riquadro entrano anche i dettagli del mese, cioè importo, canone, oneri, totale e dove pagare per l'inquilino, canone e consegna con stato e importo per il proprietario. Il contratto è una riga di testo. Sotto il riquadro i fatti della casa sono un elenco semplice e le scorciatoie un elenco pulito (vedi «Rifinitura delle schermate interne»).
  - *Prima:* nel riquadro le caratteristiche stavano in etichette a pillola; sotto c'erano i fatti in riquadri con icona (canone, oneri, prossima scadenza, inquilino), poi il mese con canone e consegna su righe distinte, e le scorciatoie, ciascuno nel suo riquadro. *Motivo del cambio:* l'utente vuole i dettagli del canone insieme alla casa, dove si guarda per primo, e meno riquadri dello stesso peso.
- **Illustrazione della casa, non foto** (decisione dell'utente del 23/10/2026: nessun cambio alla specifica, nessun lavoro in più per ƎE, nessun interno di una casa abitata). Ogni casa ha una facciata disegnata, diversa da casa a casa e sempre presente, ricavata da dati che la piattaforma ha già. Compare in piccolo anche nelle righe dell'operatore e nell'email, dove è solo decorazione e il fatto resta testo. Lo stile va adattato alle case di ƎE (*da verificare*). Chi la genera e come è una domanda dell'architettura.
  - *Cambiato dall'utente il 24/10/2026:* la facciata è **ridisegnata**, con intonaco dai colori sobri, tetto, cornicione, finestre con spessore, persiane a doghe e portico con profondità. La luce viene da sinistra, come nella stanza dell'accesso: di giorno sulla facciata cadono ombre di foglie tenui, di notte alcune finestre sono accese. *Prima:* un disegno piatto a tinte piene, giudicato un po' infantile accanto alla tessera di rame.
- **Colori, chiaro.**
  - Fondo #efedea con un alone arancio leggero; pannello e carte bianchi, con linee #ece7e2.
  - Testo #1b1714, testo secondario #5d554e.
  - Arancio: pulsante principale #c4460f con testo bianco; testo e icone #b8410e su fondo tenue #fdf0e9.
- **Colori, scuro:** neri e grigi neutri, senza toni arancio nei fondi (richiesta dell'utente).
  - Fondo #0a0a0a, pannello #141414, carte #1b1b1b e #242424.
  - Testo #f4f4f4 e #b3b3b3.
  - Arancio solo come accento: pulsante #ff7a45 con testo quasi nero, testo e icone #ff8a57.
- **Contrasti misurati** con la formula WCAG il 23/10/2026, tutti sopra 4,5:1. Sono valori del prototipo e si ricontrollano nella revisione dell'accessibilità. *Ricontrollati il 26/10/2026* sui pixel del fondo, in chiaro e in scuro: questi colori reggono; le eccezioni trovate (tessera di rame, contorno dei campi, tessera arancione dell'operatore) sono corrette in «Dati limite e accessibilità».
  - Chiaro: pulsante 4,96:1; arancio su bianco 5,53:1, sul fondo tenue 4,95:1; testo secondario 7,3:1.
  - Scuro: pulsante 7,6:1; arancio 7,4:1; testo secondario 8,21:1.
- **Stati.** Pagato in verde con la spunta, in attesa nel colore d'accento, in ritardo in ambra con l'orologio, contestata in grigio corsivo con il fumetto. Sempre parola e icona, mai il solo colore. La scadenza passata dell'inquilino resta detta con calma (punti fermi).
- **Caratteri.** Manrope per titoli e testo, con le cifre in colonna negli importi. Nelle email si usano i caratteri di sistema ([ricerca sulle email](docs/ricerca/email-sms-forma.md)).
  - *Licenza letta il 26/10/2026* ([ricerca sulle licenze](docs/ricerca/licenze-grafiche.md), §1): SIL Open Font License 1.1, senza nome riservato; va bene nel sito, nell'app, nei PDF, nelle immagini e nella scritta del nome, anche a fini commerciali.
  - **Il file arriva dal nostro sito**, non dal servizio di Google Fonts, con il file della licenza (`OFL.txt`) accanto; nell'app, una pagina «Licenze» (decisione dell'utente del 26/10/2026). *Motivo:* con il servizio di Google l'indirizzo IP di ogni visitatore arriva a Google, e un tribunale tedesco ha condannato un sito per questo; con il file sul nostro sito Google non riceve nulla. Vale anche per un'eventuale `@font-face` nelle email.
  - Manrope non ha la «Ǝ»: «ƎE» è un disegno (vedi «Identità»).
- **Forme.**
  - Pulsanti tutti a pillola (richiesta dell'utente). Carte con angoli di 20 px, riquadri interni di 14 px, ombre leggere. Dal 24/10/2026 nelle schermate dei clienti c'è un solo riquadro per pagina, quello in cima, con angoli di 26 px (vedi «Rifinitura delle schermate interne»).
  - Icone a tratto, senza cerchi, e solo nelle righe che portano altrove. Quelle del prototipo sono disegnate a mano; il set definitivo, con licenza libera, si sceglie con i componenti.
    - *Scelto dall'utente il 26/10/2026:* **Lucide** ([ricerca sulle licenze](docs/ricerca/licenze-grafiche.md), §2), con il tratto a 1,6 e a 2,2 su pulsanti e stati, estremità arrotondate e il colore del testo. Licenza ISC più MIT per le icone derivate da Feather: le due note restano nel codice, nulla nelle schermate. Unica icona con il cerchio: «informazioni», il segno convenzionale. *Motivo:* stessa costruzione delle icone approvate nel prototipo, spessore regolabile, tutte le icone del percorso, nessun logo di aziende, aggiornata spesso. *Scartate:* Tabler (contiene loghi di aziende), Phosphor (spessore fisso), solo icone nostre (ogni icona nuova da disegnare).
    - *Cambiato dall'utente il 24/10/2026.* *Prima:* icone dentro cerchi arancio tenue in ogni riga. *Motivo:* la stessa icona nel cerchio, ripetuta in ogni riga, appesantiva le schermate.
- **Email.** Stessa direzione: intestazione bianca con simbolo e nome, l'illustrazione della casa, il titolo con il fatto, il testo e il pulsante a pillola, senza importi.
- *Motivo:* fra tre atmosfere ispirate alle immagini di riferimento dell'utente, è quella che preferisce. È gradevole e attira l'attenzione anche di chi ha poco interesse, restando ordinata e professionale, come chiesto («oltre che facile deve essere bello da vedere»).
- *Evidenza:* preferenza dell'utente su prototipi con dati inventati. Non ci sono prove con persone; lo spazio dell'operatore lo guarda il collaboratore di ƎE prima del controllo B.

## Spazio dell'operatore (percorso 1)
Approvato dall'utente il 23/10/2026 nel ticket [Schermate dell'operatore di ƎE](.scratch/design-percorso-1/issues/09-schermate-operatore.md), che conserva le domande e le alternative scartate. Applica «Direzione del percorso 1» e i punti fermi; voce al «tu», con frasi brevi. Ambito: tutte le schermate dell'operatore di ƎE, su telefono, tablet e desktop.

- **Larghezze.** Sotto gli 860 px una colonna con le schede in basso; da 860 px la barra laterale, con un pannello alla volta e «Indietro»; da 1120 px elenco e dettaglio affiancati e contenuti su due colonne. Pulsanti ed etichette vanno a capo, mai fuori dal loro riquadro. *Motivo:* il primo giro, con le due colonne già a 860 px, faceva uscire i pulsanti dai riquadri sui tablet e sui portatili piccoli (segnalazione dell'utente, verificata nel browser).
- **Lavoro in coda.** Ordine fisso dei punti fermi; ogni voce ha la miniatura della casa, «cosa · casa» e «persona · stato» (dal 26/10/2026 «cosa · casa» va a capo, vedi «Dati limite e accessibilità»). In cima «Trova cliente o casa» e tre numeri: voci in coda, incassi di oggi, registrato oggi. Con la coda vuota la pagina dice «Niente in coda» e mostra il registrato di oggi e le consegne e scadenze della settimana.
- **Al banco** (decisione dell'utente): chi è trovato con la ricerca ha una pagina sua, con la tessera digitale («serve solo a trovarlo»). In cima, con l'illustrazione della casa, c'è l'azione più probabile (per l'inquilino «Registra l'incasso» del mese più vecchio aperto). Sotto «Da chiudere con lui/lei», con il conto «2 di 5 fatte» e un pulsante per riga: firme, informativa, luogo del pagamento, verifica dell'accesso, tessera. Poi gli ultimi pagamenti, «Apri la casa» e «Apri una contestazione» per conto della persona, con la fonte.
- **Incasso al banco** (decisione dell'utente).
  - Il modulo contiene i mesi aperti, già spuntati dal più vecchio, l'importo ricevuto e il mezzo (contanti o carta). Accanto c'è l'anteprima della ricevuta, che si aggiorna mentre si scrive.
  - C'è un solo pulsante, «Registra e prepara la ricevuta», senza finestra di conferma.
  - Dopo, la pagina «Incasso registrato» offre «Stampa la ricevuta» e «Torna alla coda», ricorda la firma e il bollo quando serve e mostra la consegna che ora è da fare.
  - Casi:
    - più mesi: una ricevuta sola divisa sui mesi;
    - pagamento parziale: solo se l'incarico lo ammette, con il residuo;
    - contanti oltre 5.000 € nella giornata, sommati per persona: un avviso con il conto del giorno, il pulsante disattivato e «Passa a carta». *Cambiato il 26/10/2026:* il pulsante è spento «con il perché» e l'avviso non si legge come allarme (vedi «Interazioni e stati (percorso 1)»); *prima* il pulsante era trasparente e lo screen reader lo saltava.
- **Consegna.** Riepilogo con incassato, compenso trattenuto, fattura e netto. Si sceglie il mezzo: con il bonifico si carica la contabile e la consegna risulta «inviata»; in contanti al banco vale la firma. Il ritardo si mostra con un avviso ambra.
- **Attivazione** (decisione dell'utente): la scheda della casa si riempie un po' alla volta, non c'è una procedura a passi.
  - In cima dice cosa manca per attivarla, con un avanzamento («6 di 10») e il pulsante per aprire «Al banco» del proprietario.
  - Sotto c'è l'elenco dei mancanti, con «Carica» e «Non serve» (con il motivo).
  - Poi persone e rapporti, con lo stato di ciascuno, e i dati della locazione, con «Modifica».
- **Correzione di una ricevuta.** Si sceglie «Annulla» o «Sostituisci» e il motivo è obbligatorio. La ricevuta annullata resta visibile, timbrata «annullata», accanto alla nuova che la sostituisce.
- **Nuovo canone ISTAT.** Il calcolo è in chiaro: canone attuale, variazione, misura del contratto, aumento, nuovo canone, fonte e data. Due pulsanti: «Controllato: invia alla proprietaria» e «Inserisci il dato a mano». Un avviso ricorda che un indice uscito tardi dà una differenza, mai un ritardo.
- **Contestazione.** Mostra la frase della persona come citazione, gli importi, la prova e la fonte. L'esito si sceglie fra tre: confermato, corretto (crea una nuova versione) o non risolto, con il motivo.
- **Oggi.** Le chiamate avviate da Connetto, con «Scrivi l'esito», e i messaggi partiti. Una nota dice che si registra solo l'avvio della chiamata.
- *Evidenza:* approvazione dell'utente su un prototipo con dati inventati. Il parere di chi lavora al banco arriva con il ticket «Il collaboratore di ƎE guarda lo spazio dell'operatore».

## Schermate del proprietario (percorso 1)
Approvate dall'utente il 23/10/2026 nel ticket [Schermate del proprietario](.scratch/design-percorso-1/issues/10-schermate-proprietario.md), che conserva le varianti scartate. Applicano «Direzione del percorso 1», i punti fermi e le larghezze di «Spazio dell'operatore».

- **Le mie case.** In cima «Da fare», con una voce per cosa e un solo pulsante, ciascuna con il nome della casa. Sotto, le case con i due stati del mese, senza somme di importi. *Vista a schede* predefinita: illustrazione grande, indirizzo, inquilino e i due stati. Un **interruttore a icone** (schede, righe) in alto a destra passa alla *vista a righe*, compatta, per chi ha molte case; le icone hanno un nome per lo screen reader e la scelta resta ricordata (proposta dell'utente). Chi ha una casa sola entra direttamente nella casa.
- **La casa.** Illustrazione con il fatto del mese e la sola cosa da fare; il mese con canone e consegna; i fatti in riquadri; scorciatoie a mesi passati, documenti e scadenze, «Chiama ƎE» e «Contesta». *Aspetto cambiato il 24/10/2026:* il mese con canone e consegna entra nel riquadro in cima, i fatti diventano un elenco semplice (vedi «Rifinitura delle schermate interne»).
- **Contabile da confermare** (bonifico al proprietario).
  - Si vede la contabile caricata dall'inquilino, detta chiaramente come «prova che il bonifico è stato disposto, non che sia arrivato».
  - Poi «Vedi l'importo sul tuo conto?» con «Ricevuto».
  - Se non c'è ancora, non si deve fare nulla e non parte alcun ritardo.
- **Nuovo canone da approvare.** Il confronto «oggi» e «dal 1° dicembre», il calcolo con fonte e controllo di ƎE. «Approva» è l'azione principale, «Non lo chiedo» la secondaria (§10.4); se il calcolo non torna, «Contesta».
- **Mesi passati** (sugli esempi dell'utente).
  - Una fila di mesi a pillola da scorrere, con il nome intero del mese e un pallino dello stato; il mese scelto è pieno in arancio. *Cambiato il 26/10/2026:* il pallino diventa l'icona dello stato e sul computer i mesi vanno a capo (vedi «Dati limite e accessibilità»).
  - Accanto al titolo, un selettore dell'anno a pillola, con un menu nativo, dagli anni della locazione a oggi.
  - Sotto, la linea del tempo del mese: la data con il giorno della settimana e un riquadro tenue per ogni fatto, cioè canone pagato, scadenza («pagato 2 giorni prima»), consegna inviata e confermata, contestazione. Quando serve, «Ricevuto» sta nel riquadro.
  - Scartati la striscia di dodici caselle e il calendario a griglia («non mi piace affatto»).
- **Dettaglio di un mese**: canone e consegna con importi, ricevuta, fattura del compenso, chi ha confermato e la cronologia.
- **Documenti e scadenze.** Ogni documento dice se lo vede anche l'inquilino; un interruttore «Mostra all'inquilino» per quelli in più (§10.7). Accanto alla scadenza c'è «Chiedi a ƎE di occuparsene» con il prezzo: quello del prototipo è inventato, i prezzi li fissa ƎE.
- **Contestare.** Si sceglie cosa (canone, consegna, nuovo canone) e il mese, si scrive una frase, si allega una prova se la si ha. Si spiega cosa succede: la voce resta segnata e non partono ritardi. Si può anche chiamare ƎE, e l'operatore apre la contestazione per te.
- **Più proprietari.** «Ricevuto» compare solo alla persona indicata nell'incarico; gli altri leggono a chi spetta la conferma.
- *Evidenza:* approvazione dell'utente su un prototipo con dati inventati.

## Schermate dell'inquilino (percorso 1)
Approvate dall'utente il 23/10/2026 nel ticket [Schermate dell'inquilino](.scratch/design-percorso-1/issues/11-schermate-inquilino.md), che conserva le domande e le alternative. Applicano «Direzione del percorso 1», i punti fermi e le larghezze di «Spazio dell'operatore»; ripetono i modelli del proprietario dove le situazioni coincidono, così chi ha i due ruoli trova lo stesso modo di muoversi.

- **La casa.** In cima l'illustrazione con il prossimo pagamento: «Novembre: paghi entro giovedì 5», l'importo in grande, canone e oneri in etichette separate. Sotto, il dovuto del mese con canone, oneri e totale su righe distinte e «Dove pagare»; accanto l'ultimo mese pagato con la sua ricevuta e le scorciatoie (ricevute, contratto e documenti, «Chiama», «Contesta», locazioni passate). *Aspetto cambiato il 24/10/2026:* il dovuto del mese e «Dove pagare» entrano nel riquadro in cima, con l'importo; sotto restano il mese scorso e le scorciatoie, come elenchi puliti (vedi «Rifinitura delle schermate interne»).
  - *Al banco:* indirizzo, orari e mezzi accettati.
  - *Bonifico:* intestatario, IBAN e causale, ognuno con «Copia», presi dalla comunicazione del luogo del pagamento. Si dice quando il canone risulta pagato: quando ƎE vede il bonifico, oppure quando il proprietario conferma.
  - *Bonifico al proprietario:* il solo pulsante in cima è «Carica la contabile».
- **Dopo il pagamento** la stessa zona dice «Novembre è pagato», con chi l'ha ricevuto, «Vedi la ricevuta» e il prossimo pagamento.
- **Scadenza passata:** «Canone di novembre: scadeva il 5», con dove pagare e «Chiama ƎE» come azione secondaria. Nessun colore d'allarme, nessuna parola di rimprovero (punti fermi).
- **Caricare la contabile** (decisione dell'utente): si sceglie il file o si fa una foto, si vede l'anteprima con il mese e un solo pulsante «Invia a» seguito dal nome del proprietario, senza altre conferme. Dopo, la casa dice «contabile da confermare», ricorda che è una prova e non il pagamento e offre «Sostituisci la contabile»; quella di prima resta conservata (§7.3). *Motivo:* è facile prendere la foto sbagliata dalla galleria, e l'invio fa partire un messaggio al proprietario. Scartato l'invio appena scelto il file.
- **Ricevute** (scelta **provvisoria** dell'utente, da confermare con il collaboratore di ƎE): la fila di mesi a pillola del proprietario, con la scelta dell'anno. Per il mese scelto, prima la ricevuta con «Scarica la ricevuta», poi i fatti del mese in breve (scadenza, pagamento, contestazione). In cima «Scarica le ricevute» dell'anno. Una ricevuta sostituita dice quale annulla. L'alternativa ancora aperta è l'elenco semplice per anno, una riga per ricevuta con «Scarica».
- **Contratto, documenti e scadenze.** Solo i documenti della sua locazione (§10.7), ciascuno con «Scarica», più quelli che il proprietario sceglie di mostrargli, con il nome di chi li ha condivisi. Sotto, le scadenze che lo riguardano.
- **Nuovo canone in arrivo.** Una riga nella casa e una pagina con «fino a novembre» e «dal 1° dicembre», il calcolo con la fonte, chi l'ha controllato e approvato e quanto paga il primo mese; «Contesta» se non torna.
- **Contestare.** Come il proprietario, ma solo un canone o il nuovo canone: la consegna non lo riguarda (§10.7).
- **Chiama.** Un foglio che sale dal basso sul telefono e una finestra al centro sul desktop. ƎE con gli orari; il proprietario solo per un bonifico a lui da confermare e solo se ha scelto di mostrare il numero (§10.6). Fuori orario c'è solo «Scrivi a ƎE», con quando arriva la risposta. Una riga dice che ƎE vede l'avvio della chiamata, non la conversazione.
- **Locazioni passate.** L'illustrazione con «Sola lettura», le date della locazione, fino a quando si possono vedere contratto e ricevute (5 anni, §10.8) e «Scarica tutto» come azione principale. Sotto, cosa resta (contratto e ricevute per anno) e cosa non si vede più. Chi non ha una casa attuale entra qui, con solo «Locazioni» e «Profilo».
- **Inquilino e proprietario.** «Le mie case» con «Da fare» in cima, ogni voce con l'etichetta del ruolo; sotto, «Dove abiti · inquilino» e «Le tue case · proprietario». Nella barra laterale ogni casa dice il ruolo.
- **Spazio delle bollette:** solo un posto tratteggiato nelle scorciatoie della casa, senza contenuto (percorso 3, fuori dalla mappa).
- *Evidenza:* approvazione dell'utente su un prototipo con dati inventati. Le ricevute aspettano il parere del collaboratore di ƎE.

## Accesso, tessera e situazioni comuni (percorso 1)
Approvati dall'utente il 23/10/2026 nel ticket [Accesso, adesione e situazioni comuni](.scratch/design-percorso-1/issues/12-accesso-e-situazioni-comuni.md), dopo cinque giri di prototipo; il ticket conserva domande, alternative e motivi. Applicano i punti fermi e le larghezze di «Spazio dell'operatore»; ambito: proprietari e inquilini, su telefono e desktop.

- **Accesso** (decisione dell'utente): un solo campo «Email o numero di cellulare», poi un codice di verifica di 6 cifre via email o via SMS, senza password. Il campo del codice accetta il riempimento automatico e l'incolla. Dopo l'invio si dice «se questa email è registrata», così non si rivela chi è iscritto. «Il codice non arriva?» dà quattro rimedi in ordine: correggere, rimandare il codice, riceverlo via SMS, chiamare ƎE. Dopo 30 giorni serve un codice nuovo e si torna alla pagina di prima; i link dei messaggi scadono e portano all'accesso. *Motivo:* niente da ricordare e un solo schema da spiegare al banco; il link nell'email rischia di aprirsi nel browser invece che nell'app sulla schermata Home (da verificare nella prova su iPhone).
- **Primo accesso al banco:** l'operatore crea l'account dal suo spazio, con l'email o il cellulare verificati (§10.2), e dà al cliente il link. Il link apre l'accesso con nome ed email già scritti («Ciao Luca, manca un passo»); il codice serve comunque.
- **Pagina d'accesso** (decisione dell'utente): uguale ai due riferimenti che l'utente ha generato con ChatGPT e scelto. Una stanza calda con la luce di una finestra e un arco; la tessera di rame anonima, inclinata, con il suo spessore e la sua ombra. Sotto, «La tua casa, a portata di mano», il campo, «Mandami il codice» (dal 25/10/2026 «Chiedi il codice», vedi «Testi dell'interfaccia»), «Ricevi un codice via email o SMS. Niente password da ricordare.» e «Hai bisogno di aiuto?».
  - *Telefono:* tutto in colonna, centrato.
  - *Desktop, da 1000 px:* la stanza a tutta pagina, la tessera a sinistra, il modulo a destra direttamente sulla stanza.
  - *Differenze volute dai riferimenti:* il simbolo ha il colore del testo (regole del simbolo); il pulsante usa l'arancio della direzione; l'informativa si raggiunge da «Hai bisogno di aiuto?».
  - Le immagini sono livelli separati (stanza, tessera in posa, ombra); restano fuori dal repository e le loro condizioni d'uso vanno lette prima dell'uso nel prodotto.
    - *Deciso dall'utente il 26/10/2026* ([ricerca sulle licenze](docs/ricerca/licenze-grafiche.md), §3): **per ora solo nei prototipi**. Prima del lancio l'utente legge le condizioni del suo piano (ChatGPT Plus) sulle pagine di OpenAI, fa una ricerca per immagini simili e porta le domande al parere, insieme a quello sul nome ([ticket](.scratch/design-percorso-1/issues/08-parere-nome-connetto.md)). Poi si decide fra usarle, con una riga «generate con IA» nelle note legali, e sostituirle con immagini fatte apposta e con i diritti ceduti. *Motivo:* le immagini non sono uniche, potrebbero non essere protette in Italia e con il piano Plus OpenAI non copre eventuali contestazioni; nei prototipi, che non sono pubblici, il rischio non c'è.
- **Tessera digitale** (decisioni dell'utente): un oggetto di rame spazzolato, formato carta (rapporto 1,586).
  - *Fronte:* simbolo piccolo e «Connetto» in alto a sinistra, «ƎE» in alto a destra, il simbolo grande inciso a destra.
  - *Dati:* testo vero inciso, mai scritto dentro l'immagine. *Dal 26/10/2026* su una targhetta satinata e con il nome in due righe al massimo (vedi «Dati limite e accessibilità»). Solo ruolo, nome e cognome, codice breve (per esempio «EE-7730-15») e «da» con mese e anno dell'adesione (era «dal», corretto il 25/10/2026). Niente indirizzo, telefono o email, perché la tessera si mostra in pubblico; niente chip o numeri lunghi, perché non è una carta di pagamento.
  - *Retro:* il codice in grande e a cosa serve. La tessera si gira con un tocco.
  - **Rame per tutti**, inquilini compresi; la personalizzazione verrà più avanti, dopo la prima versione. Chi ha due ruoli ha due tessere, una per adesione.
- **Scheda «Tessera»** (decisione dell'utente): la quinta scheda dei clienti, fra Ricevute e Documenti, e una voce nella barra laterale. Mostra la tessera grande, a cosa serve, cosa non fa, l'adesione e la tessera fisica, se ƎE la prevede. *Precisato il 25/10/2026* (PRODUCT.md §12, «Tessera fisica nel pilota»): la tessera fisica c'è e ha un codice suo; la riga dice «La tessera fisica te la danno in agenzia: ha un codice suo e porta l'operatore a te come questa», e dopo la consegna mostra il suo codice accanto alla digitale. Nello spazio dell'operatore, in «Da chiudere con», la riga «Tessera fisica» ha «Collega una tessera»: l'operatore prende una tessera dalla scorta e ne scrive o legge il codice. *Motivo:* al banco la tessera è a un tocco.
- **Benvenuto al primo accesso** (decisione dell'utente; sostituisce la «carta di benvenuto» scelta lo stesso giorno). Una volta sola.
  - Dopo il codice la pagina d'accesso svanisce e la stessa tessera si distende al centro, dalla sua posa alla vista di fronte, con una prospettiva vera.
  - Compaiono «Benvenuto in Connetto» e «Ciao Luca, ecco la tua tessera». Ruolo, nome e codice si incidono una lettera alla volta e un riflesso attraversa la tessera.
  - Poi compaiono «Tocca la tessera per entrare» e il pulsante «Entra nella tua casa». Toccata, la tessera vola nella scheda «Tessera», che lampeggia.
  - Segue la casa, con una riga che si chiude: «Metti Connetto sulla schermata Home».
  - Con il movimento ridotto c'è solo una dissolvenza e le lettere compaiono subito. Dal 26/10/2026 è la regola di tutto il percorso (vedi «Interazioni e stati (percorso 1)», «Movimento ridotto»).
- **Invito ad aderire:** una pagina pubblica, prima dell'adesione. Contiene cosa comprende, il posto per prezzo e condizioni (valori non decisi) e come aderire al banco, con documento d'identità. Dice anche che senza adesione non cambia nulla.
- **Profilo:** la riga della tessera e come si entra (email e cellulare si cambiano al banco o chiamando ƎE). Poi l'adesione, con il posto per prezzo e periodo, l'informativa, la guida per la schermata Home, «Esci» e «Disdici l'adesione».
- **Disdetta dell'adesione** (decisione dell'utente): si fa da soli, senza aspettare l'agenzia.
  - *Scelte:* «Non rinnovare» è la prima, e si annulla fino alla scadenza con «Riattiva il rinnovo». «Chiudi subito» con rimborso compare solo se le condizioni dell'adesione lo prevedono.
  - *Conferma:* un riepilogo di cosa succede e cosa non cambia, con «Scarica tutto», poi un tocco su «Conferma la disdetta». Il pulsante ha lo stile principale, un'eccezione voluta per non rendere difficile la disdetta. Non si chiede un codice in più.
  - *Conferma della disdetta* (era «ricevuta», cambiato il 25/10/2026): arriva subito via email o SMS, con data, ora e scelta, e la riga «Non l'hai chiesto tu? Chiama ƎE».
  - *Inquilino:* disdice in un passaggio. Canone, ricevute e contratto restano, perché seguono la locazione (§7; da confermare).
  - *Dopo:* durante il periodo senza rinnovo la casa mostra una fascia con «Riattiva il rinnovo». Alla fine compare «La tua adesione è finita», con «Aderisci di nuovo».
  - *Motivo:* l'utente vuole una disdetta semplice, come chiedono le nuove regole sulla disdetta online (art. 54-bis del Codice del consumo, dal 19/6/2026). Se valgano per un'adesione firmata al banco lo dice il parere legale.
- **Fine dei rapporti** (§10.8):
  - *Fine della locazione, per il proprietario:* la casa resta «senza inquilino», con residui e contestazioni aperti finché non si chiudono. Lo storico mostra dell'ex inquilino solo le iniziali e ciò che serve ai conti.
  - *Casa che esce dalla gestione:* la casa è in sola lettura, con l'ultimo mese gestito, l'adesione fino alla fine del periodo pagato senza rinnovo e «Scarica tutto».
- **Stati comuni:**
  - *Caricamento:* segnaposto nella forma del contenuto, mai la parola «Caricamento». Dal 26/10/2026 compare solo dopo 300 ms e «respira» piano (vedi «Interazioni e stati (percorso 1)»).
  - *Vuoto:* dice perché è vuoto e il prossimo passo.
  - *Senza rete:* i dati in memoria con l'ora e una fascia «Sei senza connessione»; si disattiva ciò che richiede la rete.
  - *Errore:* la causa, la rassicurazione che i dati sono al sicuro, «Riprova» e «Chiama ƎE».
  - *Link scaduto:* porta all'accesso.
- **Dalla schermata Home:** le viste di secondo livello hanno sempre il loro «Indietro», anche senza le barre di Safari. Le schede restano sopra l'area sicura. La guida «Connetto sulla schermata Home» è nel Profilo. Da verificare nella prova su iPhone. *Aggiornato il 24/10/2026, scelta dell'utente* (ticket [Prova su iPhone](.scratch/design-percorso-1/issues/06-prova-iphone-schermata-home.md)): la pagina di prova gira dentro la cornice di claude.ai, quindi schede sopra l'area sicura, colore in alto, aggiunta alla schermata Home e gesto dal bordo si verificano sulla prima versione della piattaforma, con un indirizzo suo. La regola non cambia.
- *Evidenza:* approvazione dell'utente su prototipi con dati inventati; immagini dell'accesso e della tessera generate dall'utente. Nessuna prova con persone.

## Rifinitura delle schermate interne (percorso 1)
Approvata dall'utente il 24/10/2026 nel ticket [Rifinitura estetica delle schermate interne](.scratch/design-percorso-1/issues/13-rifinitura-estetica.md), dopo due giri di prototipo sulla casa dell'inquilino e su quella del proprietario. Il ticket conserva le versioni mostrate e i riscontri. Funzioni e testi delle schermate approvate non cambiano; cambia l'aspetto. Ambito: tutte le schermate interne di proprietari e inquilini, su telefono e desktop, in chiaro e in scuro. Lo spazio dell'operatore resta com'è finché l'utente non chiede di rivederlo.

- **La «via di mezzo»** (decisione dell'utente). È la terza versione, fra le case approvate e la «casa ridisegnata» del primo giro.
  - Il primo giro piaceva («veramente carina e bella»), ma aveva troppe cose che possono distrarre chi ha poca familiarità con il computer.
  - Il chiaro era più scuro di prima.
  - I dettagli del canone erano finiti in disparte.
  - *Scartate:* la «casa ridisegnata» così com'era e la «stanza in cima». Nella seconda il fatto del mese stava sulla stanza dell'accesso e la casa diventava una miniatura, quindi tutte le case avevano la stessa cima.
- **Bianco come prima.** Pannello e riquadro restano bianchi. La luce della pagina d'accesso entra con misura: sul computer la stanza dell'accesso fa da fondo fuori dal pannello, coperta da un velo chiaro; sul telefono se ne vede appena la luce in cima alla pagina. Il pannello non è trasparente.
- **Un solo riquadro, in cima:** la casa ridisegnata e tutti i dettagli del mese (vedi «La casa in cima»). Sul desktop largo la foto sta a sinistra, alta quanto i dettagli; sul telefono e fino a 1120 px la foto sta sopra. Per l'inquilino «Dove pagare» è un riquadro interno tenue; il contratto è una riga di testo.
- **Sotto, elenchi puliti:** un titolo di sezione con una riga sottile, poi righe separate da linee leggere, senza riquadri né ombre. I fatti della casa sono coppie nome e valore, senza icone. Le righe che portano altrove hanno una piccola icona a tratto e la freccia.
- **Caratteri più leggeri.** Titolo in peso medio, con le lettere un po' più strette nei titoli grandi. Importo grande in peso medio, cifre in colonna. Testo secondario a 14,5 px invece di 13 px. Il grassetto pieno resta solo nei totali e nei nomi.
- **Il rame come accento.** Una piccola scritta sopra il titolo, con un trattino di rame («Prossimo pagamento», «Ottobre 2026»). Nella barra laterale, in basso, c'è la tessera di rame in miniatura con il codice; porta alla scheda «Tessera». Il pulsante principale resta arancio.
- **Colori aggiunti:** rame per il testo #97502a in chiaro (5,67:1 sul bianco caldo) e #dba47e in scuro (8,58:1); testo secondario #5d554e. Il resto della palette è quello di «Direzione del percorso 1».
- **Scuro:** nero e grigi neutri come prima. La stanza non si usa sullo sfondo del computer; la facciata è notturna, con alcune finestre accese.
- **Movimento:** il pulsante si abbassa appena alla pressione (scala 0,97 in 160 ms); le righe che si toccano si schiariscono al passaggio del mouse. Con il movimento ridotto non si anima nulla. *Cambiato il 26/10/2026* (vedi «Interazioni e stati (percorso 1)», «Movimento ridotto»): con il movimento ridotto restano solo dissolvenze brevi e cambi di colore; la pressione non abbassa il pulsante. *Prima* non si animava nulla, mentre il benvenuto aveva già la sua dissolvenza: due regole diverse.
- *Verifiche del prototipo:*
  - Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, con le versioni a confronto: 112 combinazioni, con la pagina ricaricata e la schermata verificata ogni volta. Nessun pulsante fuori dal riquadro, nessuno scorrimento orizzontale, nessun errore.
  - Contrasti misurati con la formula WCAG, tutti sopra 4,5:1. Si ricontrollano nella revisione dell'accessibilità.
- *Evidenza:* preferenza dell'utente su un prototipo con dati inventati. Nessuna prova con persone.

## Testi dell'interfaccia (percorso 1)
Decisi dall'utente il 25/10/2026, una scelta alla volta, nel ticket [Testi dell'interfaccia del percorso 1](.scratch/design-percorso-1/issues/14-testi-interfaccia.md), che conserva l'inventario dei prototipi approvati, le alternative scartate e i motivi. Applicano i «Punti fermi del percorso 1» (Voce) e il [glossario](GLOSSARY.md). Ambito: tutte le schermate del percorso 1, su telefono e desktop; per i clienti, salvo dove è detto «operatore». Restano fuori, in attesa dei pareri: email e SMS, la scritta del nome, il testo delle ricevute stampate e delle condizioni. Dove le sezioni per ruolo citano un testo diverso, vale questa sezione.

**Regole generali**
- **Il servizio ti dà del «tu»** anche nei titoli: «Le tue case», «La tua tessera», «Case dove abitavi». I pulsanti sono un verbo all'imperativo rivolto a te, con l'oggetto se serve: «Chiedi il codice», «Carica la contabile», «Chiama ƎE», «Ricevuto». Mai il servizio in prima persona («ti aiutiamo», «abbiamo ricevuto»). *Motivo:* una sola voce, facile da tenere; prima si mescolavano «Le mie case» e «Le tue case».
- **Maschile e femminile.** Le frasi si scrivono senza genere dove viene naturale: «Non l'hai chiesto tu?», «Da chiudere con Luca Benassi», «Apri una contestazione per suo conto». Il ruolo («proprietario» o «proprietaria», «inquilino» o «inquilina») e i saluti («Benvenuto», «Bentornata») usano la forma che la persona sceglie in agenzia quando l'operatore crea l'account; si cambia chiamando ƎE. Mai indovinata dal nome. *Motivo:* la piattaforma non sa come ognuno vuole essere chiamato, e il nome inganna (Andrea, Nicola, nomi stranieri).
- **Maiuscole:** solo la prima lettera della frase e i nomi propri, anche in titoli, pulsanti e schede. Il maiuscoletto solo per le etichette brevi sopra un gruppo, al massimo tre parole.
- **Il titolo del mese** ha un solo schema, «Mese: il fatto», uguale per proprietario e inquilino: «Novembre: paga entro giovedì 5», «Novembre: il canone è pagato», «Novembre: era da pagare entro giovedì 5», «Novembre: contabile inviata», «Ottobre: la consegna è in ritardo». *Motivo:* chi ha due ruoli legge la stessa frase per la stessa cosa. Confronto: https://claude.ai/artifact/2A1w9suz98aQk9YDkTCsNv (privato, dati inventati).
- **Date:** mesi sempre per intero («1° febbraio 2027», «2 settembre»), mai in cifre («04/10/2026») né abbreviati. Il giorno della settimana solo quando la data è a meno di una settimana da oggi, prima o dopo («entro giovedì 5»); più lontano basta la data («entro il 5 dicembre»).
- **Orari:** nelle frasi per intero, «dal lunedì al venerdì, 9:00–12:30»; nelle righe piccole «lun–ven 9:00–12:30», con la forma intera per lo screen reader.
- **Numeri:** importi come «1.275,00 €» (vedi «Riferimento confermato dall'utente»), percentuali «+1,73%», numeri di ricevuta e codici come sono («n. 412/2026», «EE-7730-15»); il segno meno vero per le somme trattenute («−67,00 €»).
- **Separatore** «·» fra fatti brevi della stessa riga («Via dei Tigli 14 · interno 3»), al massimo tre per riga.
- **Ogni fatto del denaro dice chi l'ha confermato** (Voce): l'etichetta di stato non sta mai da sola; la riga sotto dice chi e quando («Ricevuto da ƎE in agenzia il 3 ottobre», «confermata da te il 16 settembre»).

**Parole per i clienti**

| Si dice | Al posto di | Motivo |
| --- | --- | --- |
| «in agenzia» («Paga in agenzia, Via dell'Indipendenza 21», «Ricevuto da ƎE in agenzia») | «al banco di ƎE» | «banco» è anche il nome di molte banche e si legge «in banca» accanto ai bonifici. L'operatore tiene la pagina «Al banco» e le sue parole di lavoro |
| «entro» per il canone («Paga entro giovedì 5», «Era da pagare entro il 5») | «scade», «scadeva» | «scadenza» resta alle date della locazione (registro, disdetta, ISTAT, fine del contratto) e alla sezione «Scadenze». L'operatore tiene «scaduto il 5 ottobre» |
| «Spese» nelle righe brevi; una volta nel dettaglio «Spese in acconto (oneri accessori)», con «Le spese della casa che il contratto ti fa pagare insieme al canone, per esempio il condominio. Sono un anticipo: il conto finale si fa a parte.» | «Oneri», «Oneri in acconto», «Oneri accessori in acconto» | parola di tutti i giorni; il termine del contratto resta riconoscibile |
| «Case dove abitavi» (sezione e scheda dell'inquilino per le locazioni finite) | «Locazioni passate», «Locazioni» | dice cosa contiene. «Locazione» resta nelle frasi che chiedono precisione, accanto a «contratto»; mai «affitto», che si confonde con il canone |
| «conferma della disdetta» | «ricevuta della disdetta» | «ricevuta» resta al canone e al documento «ricevuta della registrazione»; nella scheda «Ricevute» ci sono solo pagamenti. Il nome lo può ritoccare il parere legale |

**Stati, sempre parola e icona**
- *Canone:* «Da pagare» (con «entro giovedì 5», poi «era da pagare entro il 5», senza colore d'allarme), «Contabile da confermare», «Pagato», «Contestato». Nello spazio dell'operatore anche «scaduto il 5 ottobre».
- *Consegna:* «Da consegnare», «Inviata» (bonifico di ƎE che aspetta il tuo «Ricevuto»), «Consegnata» (con «confermata da te il …» o «firmata da te in agenzia»), «In ritardo», «Contestata». «Confermata» non è un'etichetta.
- *Adesione:* «Attiva», «Senza rinnovo» (con «fino al 1° ottobre 2027»), «Finita».

**Testi delle situazioni comuni** (dai prototipi approvati, con le regole qui sopra)
- *Errore:* la causa, i dati al sicuro, cosa fare. «Le ricevute non si sono caricate. Il collegamento si è interrotto. Le ricevute sono al sicuro: riprova tra poco. Se non va ancora, chiama ƎE.» con «Riprova».
- *Codice sbagliato:* «Il codice non corrisponde. Controlla l'ultimo messaggio arrivato: ogni nuovo codice sostituisce quello prima. Ti restano 4 tentativi.»
- *Senza rete:* «Sei senza connessione. Vedi i dati di oggi alle 9:12; si aggiornano da soli quando torna la rete.»
- *Vuoto:* il perché e il prossimo passo. «Ancora nessuna ricevuta. La prima compare qui quando paghi il canone di novembre: in agenzia, entro giovedì 5.» con «Vedi cosa pagare».
- *Link scaduto:* «Questo link non vale più. Per sicurezza i link dei messaggi scadono dopo un po'. Entra con l'email o il cellulare: ritrovi la stessa ricevuta in Ricevute.»
- *Conferme:* participio breve, poi cosa succede dopo. «Contabile inviata a Marta Ferri», «Incasso registrato», «Rinnovo fermato».
- *Caricamento:* nessuna parola sullo schermo; per lo screen reader «La casa si sta caricando».

**Cosa cambia nei testi approvati** (25/10/2026)
- Pagina d'accesso: «Mandami il codice» diventa «Chiedi il codice»; nell'aiuto «Ti aiutiamo» diventa «Aiuto per entrare» (correzione dell'agente: il servizio non parla in prima persona).
- Tessera digitale: «dal ottobre 2026» diventa «da ottobre 2026» (correzione di grammatica dell'agente).
- Disdetta: «Ti arriva subito una conferma via email, con data, ora e cosa hai scelto»; «Non sei stato tu?» diventa «Non l'hai chiesto tu?».
- Casa dell'inquilino: «Novembre: paghi entro giovedì 5» diventa «Novembre: paga entro giovedì 5»; «Novembre è pagato» diventa «Novembre: il canone è pagato»; «Canone di novembre: scadeva il 5» diventa «Novembre: era da pagare entro giovedì 5».
- «Le mie case» diventa «Le tue case»; «Locazioni passate» diventa «Case dove abitavi».
- Operatore: «Da chiudere con lui» diventa «Da chiudere con» seguito dal nome; «serve solo a trovarlo» diventa «serve solo a trovare la persona».
- *Evidenza:* scelte dell'utente sui testi dei prototipi e su un confronto con dati inventati. Nessuna prova con persone; la lettura del collaboratore di ƎE può correggerli.

## Dati limite e accessibilità (percorso 1)
Decisi dall'utente il 26/10/2026, una scelta alla volta, nel ticket [Dati limite e accessibilità del percorso 1](.scratch/design-percorso-1/issues/15-dati-limite-accessibilita.md). Il ticket conserva il metodo, le misure, le alternative scartate e ciò che regge.

La prova è una pagina usa e getta con le schermate approvate e i dati peggiori: https://claude.ai/artifact/RtwaFRWDmVNnrr5XQnJTh9 (privata, dati inventati). Verificata in Chromium:
- a 7 larghezze, in chiaro e in scuro;
- con lo zoom al 200%, a 320 px, con la spaziatura del testo di WCAG 1.4.12 e con la tastiera;
- con i contrasti misurati sui pixel del fondo.

Obiettivo: WCAG 2.2 livello AA. Ambito: tutte le schermate del percorso 1, su telefono e desktop. Dove le sezioni sopra dicono altro, vale questa sezione.

- **Più mesi aperti dell'inquilino** (decisione dell'utente). Con due o più mesi da pagare, in cima alla casa c'è:
  - il titolo «Da maggio a novembre: 7 mesi da pagare» e il totale in grande;
  - un mese per riga con il suo importo, e sotto «Da pagare in tutto»;
  - la frase «Puoi pagare anche un mese alla volta: si salda per primo il più vecchio» (PRODUCT.md §10.3).

  Sotto, «Ultimo pagamento» prende il posto di «Mese scorso». Il tono resta quello della scadenza passata: niente colore d'allarme. *Motivo:* mostrare solo il mese più vecchio lasciava credere di essere a posto pagando un mese.
- **Tessera di rame: targhetta satinata** (decisione dell'utente). Dietro i dati incisi c'è una targhetta di rame più chiaro, con il testo quasi nero #1f0a01, sul fronte e sul retro. Contrasto misurato da 8,6:1 a 9,2:1.
  - *Cambiato il 26/10/2026* («Tessera digitale», «Dati»): *prima* i dati erano incisi direttamente sul rame, con un contrasto fra 2,2:1 e 3,4:1.
  - *Motivo:* il rame è un colore di mezzo e nessun colore del testo arriva a 4,5:1 su tutta la tessera. Scartata la targhetta brunita, più scura.
- **Nome lungo sulla tessera** (decisione dell'utente): il nome resta intero, in due righe al massimo. Se non ci sta, i caratteri si rimpiccioliscono un poco alla volta finché ci stanno. Non sale mai sulla scritta «Connetto» né sul simbolo grande.
- **Mesi a pillola: un'icona nel pallino** (decisione dell'utente). Spunta per pagato, trattino per in attesa, orologio per in ritardo, fumetto per contestato: le icone degli stati, nel loro colore.
  - *Cambiato il 26/10/2026* («Mesi passati» del proprietario e «Ricevute» dell'inquilino): *prima* era un pallino colorato, e lo stato si vedeva solo dal colore (WCAG 1.4.1).
  - *Sul computer*, da 860 px, i mesi vanno a capo invece di scorrere; sul telefono la fila scorre e il mese scelto sta al centro. *Motivo:* senza barra il mouse non raggiungeva gli ultimi mesi, e a 1366 px il mese scelto restava fuori vista.
- **Contorno dei campi** (decisione dell'utente): #8f857c in chiaro e #8a817a in scuro, almeno 3:1 sul fondo (WCAG 1.4.11).
  - *Cambiato il 26/10/2026:* *prima* era #d9d2cb nell'accesso e #ece7e2 nello spazio dell'operatore, fra 1,2:1 e 2,1:1.
- **Testo più grande del telefono** (decisione dell'utente): la piattaforma segue la dimensione del testo scelta nelle impostazioni dell'iPhone, non solo lo zoom del browser. Le schermate reggono il testo fino al doppio. È una regola per la costruzione (ARCHITECTURE.md, passo 7), da provare su un iPhone vero con la prima versione.
- **Molte case nella barra laterale** (decisione dell'utente). Al massimo 5 case: prima quella aperta, poi quelle con qualcosa da fare. Poi la voce «Tutte le case (14)», che apre l'elenco completo. *Motivo:* con 14 case la tessera e la persona finivano in fondo dopo 14 righe.
- **Righe della coda dell'operatore** (decisione dell'utente): «cosa · casa» va a capo e si legge intero, mai tagliato con i puntini. *Cambiato il 26/10/2026:* *prima* stava su una riga sola, con i puntini, e si perdeva l'indirizzo.
- **Correzioni dell'agente**, approvate dall'utente tutte insieme:
  - il modulo d'accesso sta sopra la sfumatura in fondo alla stanza, così il pulsante «Entra» non sparisce con il messaggio d'errore;
  - «Trova cliente o casa» mostra il fuoco (WCAG 2.4.7);
  - la coda dell'operatore ha un titolo principale per lo screen reader;
  - i tre numeri del giorno vanno a capo quando non stanno;
  - la tessera arancione di «Al banco» va da #8f3009 a #b8410e, con la riga piccola senza trasparenza, e supera 4,5:1. *Prima* andava da #c4460f a #e0743d, con 3,1:1 sulla riga piccola;
  - nell'anteprima della ricevuta c'è spazio per il bollo;
  - sulla stanza del computer «Cambia email o cellulare» è in rame #97502a (5,2:1; prima 4,25:1);
  - «Hai bisogno di aiuto?» è alto almeno 44 px;
  - l'importo grande si stringe fino a 30 px invece di uscire dallo schermo.
- **Regole per i dati lunghi**, ricavate dalla prova:
  - nomi, indirizzi, email, IBAN e causali vanno a capo e non si tagliano mai;
  - gli importi non vanno a capo e non si tagliano.
- *Evidenza:* scelte dell'utente su una prova con dati inventati; misure automatiche nel browser, guardate anche a occhio. Nessuna prova con persone, con screen reader veri (VoiceOver, NVDA) o su un iPhone vero. Quelle prove restano da fare sulla prima versione.

## Interazioni e stati (percorso 1)
Decisi dall'utente il 26/10/2026, una scelta alla volta, nel ticket [Interazioni e stati del percorso 1](.scratch/design-percorso-1/issues/16-interazioni-stati.md), che conserva le varianti scartate e i motivi. La prova è una pagina usa e getta con i momenti che cambiano lo stato, ognuno con e senza movimento ridotto e con quello che annuncia lo screen reader: https://claude.ai/artifact/MvrdhkTegSQ5eUUGC4XzeY (privata, dati inventati). Verificata in Chromium a 7 larghezze, in chiaro e in scuro, prima e dopo ogni azione. Ambito: tutte le schermate del percorso 1, su telefono e desktop; lo spazio dell'operatore per i pulsanti spenti, l'attesa e gli errori. Dove le sezioni sopra dicono altro, vale questa sezione.

- **Conferma al suo posto** (decisione dell'utente). Dopo un'azione importante («Ricevuto», contabile inviata, disdetta e riattivazione del rinnovo) la riga del pulsante diventa un riquadro tenue verde con la spunta e la frase di conferma, che resta finché si lascia la pagina. Titolo del mese, stato e riga con chi ha confermato cambiano insieme. Il fuoco va sul riquadro e lo screen reader lo legge con calma (`role="status"`).
  - Testi, con le regole di «Testi dell'interfaccia»: «Consegna confermata. Lo vede anche ƎE.», titolo «Ottobre: la consegna è arrivata» e «Confermata da te oggi alle 10:42»; «Contabile inviata a Marta Ferri», titolo «Novembre: contabile inviata»; «Rinnovo fermato», poi «Rinnovo riattivato».
  - L'operatore tiene la pagina «Incasso registrato» già approvata; il fuoco va sul suo titolo e lo screen reader legge «Incasso registrato. Ricevuta n. 413/2026 pronta da stampare.».
  - *Scartate:* un avviso in basso che sparisce dopo 5 secondi, che si può perdere; una pagina di conferma, con un tocco in più e lontana dalla casa.
- **«Annulla» per 8 secondi sul «Ricevuto»** (decisione dell'utente), sia per la consegna sia per la contabile del bonifico al proprietario. Il «Ricevuto» parte dopo 8 secondi. Intanto la conferma dice «Parte tra pochi secondi» e ha «Annulla», con una linea sottile che si accorcia; il fuoco va su «Annulla». «Annulla» riporta tutto com'era e il fuoco torna su «Ricevuto». Dopo l'invio la correzione resta quella di [PRODUCT.md](PRODUCT.md) §10 (ƎE o contestazione), e lo storico la conserva.
  - *Motivo:* uno sbaglio di dito non diventa una telefonata, senza chiedere «Sei sicura?» ogni mese. Per quegli 8 secondi ƎE e l'inquilino non vedono ancora la conferma.
  - *Scartate:* nessun annulla; una domanda di conferma prima dell'invio.
- **Pulsanti spenti «con il perché»** (decisione dell'utente). Si spegne un pulsante solo quando c'è un motivo da dire: contanti oltre il limite, rete assente. Il pulsante ha il fondo dei pulsanti secondari, il testo secondario e un contorno sottile, quindi resta leggibile. Sotto c'è sempre il motivo e come si riaccende, collegato al pulsante per lo screen reader. Il pulsante si raggiunge con il tasto Tab (`aria-disabled`, non `disabled`). Se lo si tocca, il motivo si richiama e viene letto. La pressione non lo abbassa.
  - Testi: «Il pulsante è spento finché il mezzo è «Contanti»: scegli «Carta» o «Passa a carta».»; «Serve la rete per mandare il «Ricevuto». Torna attivo da solo quando la rete c'è.».
  - *Cambiato il 26/10/2026* («Incasso al banco»): *prima* il pulsante era trasparente e lo screen reader lo saltava.
  - *Scartato:* il pulsante mai spento, che fa scoprire il blocco solo dopo averlo premuto.
- **Attesa dopo la pressione.** L'attesa compare nel pulsante solo dopo 300 ms: un cerchio che gira, oppure tre puntini che si accendono con il movimento ridotto. Il pulsante non cambia larghezza e un secondo tocco non conta, così non c'è mai un doppio invio (PRODUCT.md §7.5). L'invio di un file ha una barra di avanzamento.
- **Caricamento di una pagina.** Il segnaposto nella forma della pagina compare solo se l'attesa supera 300 ms, così le attese brevi non fanno lampi. «Respira» piano (opacità fra 100% e 50% in 1,4 s) ed è fermo con il movimento ridotto. La pagina è segnata come occupata (`aria-busy`). Lo screen reader sente «La casa si sta caricando» solo dopo 1 secondo; quando il contenuto arriva non si annuncia nulla. *Scartati:* la luce che scorre e il segnaposto sempre fermo.
- **Errore al suo posto.** Il messaggio compare sotto il pulsante, in un riquadro tenue ambra con l'icona, senza rosso e senza scosse. Resta finché si riprova; lo screen reader lo legge subito (`role="alert"`, solo sulla frase) e il fuoco resta sul pulsante, che diventa «Riprova». Testo: «Il «Ricevuto» non è partito. Il collegamento si è interrotto: la consegna resta da confermare. Riprova tra poco; se non va ancora, chiama ƎE.». Per una pagina che non si carica vale il testo «Errore» di «Testi dell'interfaccia».
- **Esito incerto.** Quando non si sa se un'azione è arrivata, la piattaforma controlla da sola invece di far riprovare: al posto del pulsante «Controllo se il «Ricevuto» è arrivato…», poi la conferma o l'errore (PRODUCT.md §7.5).
- **Ritorno della rete** (decisione dell'utente). La fascia «Sei senza connessione» diventa verde, «Di nuovo in linea. Dati aggiornati alle 9:14.», per 4 secondi, poi si chiude da sola. Lo screen reader la legge una volta e i pulsanti si riaccendono da soli. *Scartate:* la fascia che sparisce in silenzio e quella da chiudere a mano.
- **Annunci e fuoco.** Le conferme e i cambi di stato si leggono con calma (`role="status"`); gli errori subito (`role="alert"`). Il motivo di un pulsante spento si legge con calma, e l'avviso dei contanti non è un allarme, perché il motivo è già sotto il pulsante. Dopo un cambio il fuoco va sulla cosa nuova (conferma, titolo della pagina nuova); dopo un errore resta sul pulsante.
- **Tempi del movimento.**
  - Pressione: scala 0,97 in 160 ms (già decisa).
  - Cambio di contenuto: uscita in 140 ms, con dissolvenza e sfocatura di 2 px; entrata in 240 ms, con dissolvenza e 6 px dal basso, curva che rallenta alla fine.
  - Spunta che si disegna in 360 ms; fascia che si apre in 220 ms.
  - Niente supera 400 ms, salvo il benvenuto, che è un momento unico.
- **Movimento ridotto: solo dissolvenze** (decisione dell'utente). Con «Riduci movimento» restano solo dissolvenze fino a 150 ms e i cambi di colore. Niente spostamenti, ingrandimenti, sfocature, rotazioni, spunta che si disegna, linea di «Annulla» o segnaposto che respira; l'attesa è fatta di tre puntini che si accendono. Una sola regola per tutto il percorso, benvenuto compreso.
  - *Cambiato il 26/10/2026* («Rifinitura delle schermate interne», «Movimento»): *prima* nelle schermate interne non si animava nulla, mentre il benvenuto aveva la sua dissolvenza.
  - *Motivo:* senza alcun passaggio un cambio di stato sembra un salto o un errore; è la via delle linee guida Apple. *Scartato:* tutto fermo.
- **Contrasti misurati** con la formula WCAG il 26/10/2026, tutti sopra 4,5:1. Pulsante spento: 6,39:1 in chiaro, 7,22:1 in scuro. Testo secondario nel riquadro di conferma: 6,47:1 e 7,39:1. Testo nel riquadro d'errore: 15,48:1 e 13,76:1. Icona della fascia verde: 4,68:1 e 9,55:1. Spunta sul tondo verde: 5,35:1 e 11,62:1.
- *Evidenza:* scelte dell'utente su una prova con dati inventati; 308 controlli automatici nel browser, guardati anche a occhio. Gli annunci sono quelli che la pagina affida allo screen reader, non ascoltati con VoiceOver o NVDA veri: quella prova resta da fare sulla prima versione, insieme all'iPhone vero.

## Vista 3D indicativa (stile)
Scelta dall'utente il 24/10/2026 nella [prova della vista 3D](.scratch/controllo-a/issues/15-prova-vista-3d.md), seconda versione, fra tre stili affiancati sulla stessa casa inventata. Vale solo se la vista resta nella prima versione (PRODUCT.md §12). Le regole di contenuto (nomi senza metri quadri, nord e luce da sud, viste pronte, avvertenza sempre visibile) sono in PRODUCT.md §12, «Vista 3D indicativa: resa da provare».

- **Isometrica illustrata** (decisione dell'utente: «mi piace isometrica illustrata»). Vista di tre quarti senza prospettiva, colori pieni nei toni «Terracotta», contorni sottili; gira di un quarto alla volta. Muri bassi color crema con la cima color rame; pavimenti in quattro tinte per zona.
  - *Scartate:* la pianta 3D dall'alto in prospettiva e la casa delle bambole a tutta altezza.
- **Da vicino, ciò che copre diventa trasparente** (richiesta dell'utente, 24/10/2026). Quando ci si avvicina molto a una stanza, i muri tra chi guarda e la stanza diventano semitrasparenti. In prova nella terza versione (https://claude.ai/artifact/C2aRNbV3h59zmdQKs8z93q): ingrandendo, i muri che coprono la stanza al centro sfumano al 20%.
- **Zoom e movimento semplici** (richiesta dell'utente, 24/10/2026): si ingrandisce verso il centro e si gira sempre attorno alla casa. Lo zoom verso il punto indicato e lo spostamento toccando il nome di una stanza sono stati provati e tolti: rendevano strani zoom e rotazione. Niente scorrimento di lato con due dita (decisione dell'utente, 25/10/2026).
- *Evidenza:* preferenza dell'utente su un prototipo con dati inventati. Nessuna prova con persone.

## Componenti e token
DA DEFINIRE dopo il primo percorso. Riutilizzare e documentare solo ciò che serve.
- **Fissati il 26/10/2026** ([ricerca sulle licenze](docs/ricerca/licenze-grafiche.md)): carattere Manrope dal nostro sito, con la licenza accanto («Direzione del percorso 1», «Caratteri»); icone Lucide a tratto 1,6 e 2,2 («Forme»); «ƎE» come disegno («Identità»); immagini della stanza e della tessera solo nei prototipi fino al parere («Accesso, tessera e situazioni comuni»).
- Da fare: come si genera l'illustrazione di ogni casa, nello stile adatto alle case di ƎE.

## Interazioni e stati
Caricamento, vuoto, senza rete, errore e recupero del percorso 1: «Accesso, tessera e situazioni comuni» (23/10/2026). Il riscontro alla pressione dei pulsanti è in «Rifinitura delle schermate interne» (24/10/2026). Successo, pulsanti spenti, attesa, errore al suo posto, ritorno della rete, annunci, fuoco e movimento ridotto: «Interazioni e stati (percorso 1)» (26/10/2026).
Registrare comportamento mobile, tastiera, testo ingrandito e movimento ridotto. Testo ingrandito, tastiera e campi: «Dati limite e accessibilità» (26/10/2026).

## Decisioni confermate
Per ogni scelta: decisione, motivo, evidenza o ipotesi, ambito e data. Finora: il riferimento Apple, il formato degli importi, il simbolo C–Legame (sezione «Identità»), i punti fermi del percorso 1 (con la voce passata al «tu»), la direzione «Terracotta» con il chiaro in vetrina, lo spazio dell'operatore, le schermate del proprietario e quelle dell'inquilino, con le ricevute in forma provvisoria; accesso, tessera digitale di rame, benvenuto, disdetta e situazioni comuni, con l'eccezione del simbolo sulla tessera (23/10/2026); la rifinitura delle schermate interne dei clienti, la «via di mezzo», con tre regole cambiate: la casa in cima con i dettagli del mese, le icone senza cerchi e i fatti senza riquadri (24/10/2026); lo stile della vista 3D indicativa, l'isometrica illustrata (24/10/2026); i testi dell'interfaccia del percorso 1 (25/10/2026); i dati limite e l'accessibilità del percorso 1, con cinque regole cambiate: la tessera con la targhetta satinata, i mesi a pillola con l'icona e a capo sul computer, il contorno dei campi, le righe della coda a capo, la tessera arancione dell'operatore (26/10/2026); le interazioni e gli stati del percorso 1, con due regole cambiate: il pulsante spento dell'incasso al banco e il movimento ridotto, ora solo dissolvenze (26/10/2026); carattere Manrope dal nostro sito, icone Lucide, «ƎE» come disegno e immagini ChatGPT solo nei prototipi fino al parere (26/10/2026).
