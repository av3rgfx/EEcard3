# Decisioni visive del progetto

## Stato
Direzione del percorso 1 approvata dall'utente il 23/10/2026: **«Terracotta»** (sezione «Direzione del percorso 1»). Non si eredita alcun layout, menu, palette, font o componente da tentativi precedenti: il design si progetta da zero (vedi [docs/METODO.md](docs/METODO.md), passo 6).
Il design del percorso 1 è in corso dal 23/10/2026 nella mappa [Design del percorso 1](.scratch/design-percorso-1/map.md): ora si disegna il percorso intero in questa direzione. Le scelte arrivano qui man mano che l'utente le conferma.

## Riferimento confermato dall'utente
- Le **Apple Human Interface Guidelines** sono il riferimento di design più importante (16/10/2026), adattate alla piattaforma effettiva. Sintesi e fonti: [docs/rules/APPLE_DESIGN.md](docs/rules/APPLE_DESIGN.md). In caso di dubbio si rilegge la pagina ufficiale del componente.
- Importi sempre con il separatore delle migliaia: «9.876,54 €» (16/10/2026).

## Indicazioni dell'utente sull'esperienza
Riscontri dati dall'utente su proposte precedenti, riformulati come principi. Valgono come orientamento, non come soluzioni.
- Poche informazioni, chiare: una proposta con «troppe informazioni poco chiare e una UX non corretta» è stata respinta.
- Il desktop va progettato con la stessa cura del telefono; un telefono allargato è risultato «trascurato e grezzo».
- Una schermata senza nulla da fare non deve restare vuota: deve mostrare qualcosa di utile.
- Interfaccia di qualità alta, calma e facile anche per chi ha poca familiarità digitale.
- Email (19/10/2026): innovative e dinamiche, semplici ma d'impatto, mai con l'aria di spam o pubblicità. È un requisito; la forma si progetta nel passo 6 di [docs/METODO.md](docs/METODO.md).

## Piattaforme
Prima la piattaforma web (telefono e desktop), poi l'app iPhone (confermato). I dettagli sono DA DEFINIRE.

## Identità
Palette, tipografia, icone e densità del percorso 1 sono in «Direzione del percorso 1»; voce e tema in «Punti fermi del percorso 1». DA DEFINIRE: la scritta del nome (wordmark), dopo il parere sul marchio.
- Il prodotto ha un marchio autonomo dall'agenzia (confermato). Nome: **Connetto** ([PRODUCT.md](PRODUCT.md) §1 e §12, 23/10/2026), nome di lavoro in attesa del parere sul marchio: la scritta del nome si disegna dopo il parere.
- **Simbolo C–Legame** (23/10/2026, scelto e fornito dall'utente): due elementi a forma di C che si agganciano, a rappresentare la connessione, il legame. Ambito: solo il segno, in un colore pieno che prende quello del testo intorno; versione regolare e versione piccola. File e regole d'uso in [assets/marchio/](assets/marchio/README.md). È un materiale dell'utente, non un riuso di tentativi precedenti.
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
  - *Telefono:* un'intestazione con il simbolo e le iniziali della persona, il contenuto in colonna e quattro schede in basso. Per i clienti sono Casa, Ricevute, Documenti e Profilo; per l'operatore Coda, Case, Persone e Oggi. La barra delle schede è traslucida, con una versione opaca quando si chiede più contrasto.
  - *Operatore:* elenco e dettaglio, affiancati sul desktop e in fila sul telefono, con Indietro. In cima «Trova cliente o casa» e tre numeri del giorno: voci in coda, incassi, registrato oggi.
- **La casa in cima.** La pagina della casa si apre con un riquadro. Contiene l'illustrazione della casa in grande, come la foto di un annuncio, con l'indirizzo in un'etichetta; accanto sul desktop, sotto sul telefono, un titolo che dice il fatto del mese («Ottobre: il canone è pagato»), le caratteristiche in etichette e la cosa da fare con un solo pulsante. Sotto ci sono i fatti in riquadri con icona (canone, oneri, prossima scadenza, inquilino), poi il mese con canone e consegna su righe distinte, e le scorciatoie.
- **Illustrazione della casa, non foto** (decisione dell'utente del 23/10/2026: nessun cambio alla specifica, nessun lavoro in più per ƎE, nessun interno di una casa abitata). Ogni casa ha una facciata disegnata, diversa da casa a casa e sempre presente, ricavata da dati che la piattaforma ha già. Compare in piccolo anche nelle righe dell'operatore e nell'email, dove è solo decorazione e il fatto resta testo. Nel prototipo era un palazzo con i portici: lo stile va adattato alle case di ƎE (*da verificare*). Chi la genera e come è una domanda dell'architettura.
- **Colori, chiaro.**
  - Fondo #efedea con un alone arancio leggero; pannello e carte bianchi, con linee #ece7e2.
  - Testo #1b1714, testo secondario #5d554e.
  - Arancio: pulsante principale #c4460f con testo bianco; testo e icone #b8410e su fondo tenue #fdf0e9.
- **Colori, scuro:** neri e grigi neutri, senza toni arancio nei fondi (richiesta dell'utente).
  - Fondo #0a0a0a, pannello #141414, carte #1b1b1b e #242424.
  - Testo #f4f4f4 e #b3b3b3.
  - Arancio solo come accento: pulsante #ff7a45 con testo quasi nero, testo e icone #ff8a57.
- **Contrasti misurati** con la formula WCAG il 23/10/2026, tutti sopra 4,5:1. Sono valori del prototipo e si ricontrollano nella revisione dell'accessibilità.
  - Chiaro: pulsante 4,96:1; arancio su bianco 5,53:1, sul fondo tenue 4,95:1; testo secondario 7,3:1.
  - Scuro: pulsante 7,6:1; arancio 7,4:1; testo secondario 8,21:1.
- **Stati.** Pagato in verde con la spunta, in attesa nel colore d'accento, in ritardo in ambra con l'orologio, contestata in grigio corsivo con il fumetto. Sempre parola e icona, mai il solo colore. La scadenza passata dell'inquilino resta detta con calma (punti fermi).
- **Caratteri.** Manrope per titoli e testo, con le cifre in colonna negli importi. È un carattere di Google Fonts con licenza libera dichiarata: la licenza va letta e annotata prima di usarlo nel prodotto. Nelle email si usano i caratteri di sistema ([ricerca sulle email](docs/ricerca/email-sms-forma.md)).
- **Forme.**
  - Pulsanti tutti a pillola (richiesta dell'utente). Carte con angoli di 20 px, riquadri interni di 14 px, ombre leggere.
  - Icone a tratto dentro cerchi arancio tenue. Quelle del prototipo sono disegnate a mano; il set definitivo, con licenza libera, si sceglie con i componenti.
- **Email.** Stessa direzione: intestazione bianca con simbolo e nome, l'illustrazione della casa, il titolo con il fatto, il testo e il pulsante a pillola, senza importi.
- *Motivo:* fra tre atmosfere ispirate alle immagini di riferimento dell'utente, è quella che preferisce. È gradevole e attira l'attenzione anche di chi ha poco interesse, restando ordinata e professionale, come chiesto («oltre che facile deve essere bello da vedere»).
- *Evidenza:* preferenza dell'utente su prototipi con dati inventati. Non ci sono prove con persone; lo spazio dell'operatore lo guarda il collaboratore di ƎE prima del controllo B.

## Spazio dell'operatore (percorso 1)
Approvato dall'utente il 23/10/2026 nel ticket [Schermate dell'operatore di ƎE](.scratch/design-percorso-1/issues/09-schermate-operatore.md), che conserva le domande e le alternative scartate. Applica «Direzione del percorso 1» e i punti fermi; voce al «tu», con frasi brevi. Ambito: tutte le schermate dell'operatore di ƎE, su telefono, tablet e desktop.

- **Larghezze.** Sotto gli 860 px una colonna con le schede in basso; da 860 px la barra laterale, con un pannello alla volta e «Indietro»; da 1120 px elenco e dettaglio affiancati e contenuti su due colonne. Pulsanti ed etichette vanno a capo, mai fuori dal loro riquadro. *Motivo:* il primo giro, con le due colonne già a 860 px, faceva uscire i pulsanti dai riquadri sui tablet e sui portatili piccoli (segnalazione dell'utente, verificata nel browser).
- **Lavoro in coda.** Ordine fisso dei punti fermi; ogni voce ha la miniatura della casa, «cosa · casa» e «persona · stato». In cima «Trova cliente o casa» e tre numeri: voci in coda, incassi di oggi, registrato oggi. Con la coda vuota la pagina dice «Niente in coda» e mostra il registrato di oggi e le consegne e scadenze della settimana.
- **Al banco** (decisione dell'utente): chi è trovato con la ricerca ha una pagina sua, con la tessera digitale («serve solo a trovarlo»). In cima, con l'illustrazione della casa, c'è l'azione più probabile (per l'inquilino «Registra l'incasso» del mese più vecchio aperto). Sotto «Da chiudere con lui/lei», con il conto «2 di 5 fatte» e un pulsante per riga: firme, informativa, luogo del pagamento, verifica dell'accesso, tessera. Poi gli ultimi pagamenti, «Apri la casa» e «Apri una contestazione» per conto della persona, con la fonte.
- **Incasso al banco** (decisione dell'utente).
  - Il modulo contiene i mesi aperti, già spuntati dal più vecchio, l'importo ricevuto e il mezzo (contanti o carta). Accanto c'è l'anteprima della ricevuta, che si aggiorna mentre si scrive.
  - C'è un solo pulsante, «Registra e prepara la ricevuta», senza finestra di conferma.
  - Dopo, la pagina «Incasso registrato» offre «Stampa la ricevuta» e «Torna alla coda», ricorda la firma e il bollo quando serve e mostra la consegna che ora è da fare.
  - Casi:
    - più mesi: una ricevuta sola divisa sui mesi;
    - pagamento parziale: solo se l'incarico lo ammette, con il residuo;
    - contanti oltre 5.000 € nella giornata, sommati per persona: un avviso con il conto del giorno, il pulsante disattivato e «Passa a carta».
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
- **La casa.** Illustrazione con il fatto del mese e la sola cosa da fare; il mese con canone e consegna; i fatti in riquadri; scorciatoie a mesi passati, documenti e scadenze, «Chiama ƎE» e «Contesta».
- **Contabile da confermare** (bonifico al proprietario).
  - Si vede la contabile caricata dall'inquilino, detta chiaramente come «prova che il bonifico è stato disposto, non che sia arrivato».
  - Poi «Vedi l'importo sul tuo conto?» con «Ricevuto».
  - Se non c'è ancora, non si deve fare nulla e non parte alcun ritardo.
- **Nuovo canone da approvare.** Il confronto «oggi» e «dal 1° dicembre», il calcolo con fonte e controllo di ƎE. «Approva» è l'azione principale, «Non lo chiedo» la secondaria (§10.4); se il calcolo non torna, «Contesta».
- **Mesi passati** (sugli esempi dell'utente).
  - Una fila di mesi a pillola da scorrere, con il nome intero del mese e un pallino dello stato; il mese scelto è pieno in arancio.
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

- **La casa.** In cima l'illustrazione con il prossimo pagamento: «Novembre: paghi entro giovedì 5», l'importo in grande, canone e oneri in etichette separate. Sotto, il dovuto del mese con canone, oneri e totale su righe distinte e «Dove pagare»; accanto l'ultimo mese pagato con la sua ricevuta e le scorciatoie (ricevute, contratto e documenti, «Chiama», «Contesta», locazioni passate).
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

## Componenti e token
DA DEFINIRE dopo il primo percorso. Riutilizzare e documentare solo ciò che serve.

## Interazioni e stati
Registrare feedback, caricamento, errore, stato vuoto, successo, disabilitato e recupero.
Registrare comportamento mobile, tastiera, testo ingrandito e movimento ridotto.

## Decisioni confermate
Per ogni scelta: decisione, motivo, evidenza o ipotesi, ambito e data. Finora: il riferimento Apple, il formato degli importi, il simbolo C–Legame (sezione «Identità»), i punti fermi del percorso 1 (con la voce passata al «tu»), la direzione «Terracotta» con il chiaro in vetrina, lo spazio dell'operatore, le schermate del proprietario e quelle dell'inquilino, con le ricevute in forma provvisoria (23/10/2026).
