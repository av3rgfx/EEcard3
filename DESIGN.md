# Decisioni visive del progetto

## Stato
Nessuna direzione visiva approvata. Non si eredita alcun layout, menu, palette, font o componente: il design si progetta da zero dopo le decisioni di prodotto (vedi [docs/METODO.md](docs/METODO.md), passo 6).
Il design del percorso 1 è in corso dal 23/10/2026 nella mappa [Design del percorso 1](.scratch/design-percorso-1/map.md). Le scelte arrivano qui man mano che l'utente le conferma.

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
DA DEFINIRE: palette, tipografia, icone e densità delle informazioni; la scritta del nome (wordmark). Voce e tema sono in «Punti fermi del percorso 1».
- Il prodotto ha un marchio autonomo dall'agenzia (confermato). Nome: **Connetto** ([PRODUCT.md](PRODUCT.md) §1 e §12, 23/10/2026), nome di lavoro in attesa del parere sul marchio: la scritta del nome si disegna dopo il parere.
- **Simbolo C–Legame** (23/10/2026, scelto e fornito dall'utente): due elementi a forma di C che si agganciano, a rappresentare la connessione, il legame. Ambito: solo il segno, in un colore pieno che prende quello del testo intorno; versione regolare e versione piccola. File e regole d'uso in [assets/marchio/](assets/marchio/README.md). È un materiale dell'utente, non un riuso di tentativi precedenti.
- Preferenza per il tema scuro (fondo nero e grigi neutri): riconfermata il 23/10/2026 come vetrina, non come unico tema (vedi «Tema»).

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
- A proprietari e inquilini il servizio dà del **«Lei»**, in schermate, email, SMS, errori e conferme. I pulsanti hanno il solo verbo («Ricevuto», «Carica la contabile», «Chiama») e gli stati sono in forma breve («Pagato il 3 ottobre»). Il tono è caldo, non burocratico. *Ipotesi:* al banco ƎE dà del «Lei»; se così non fosse, la scelta si riapre.
- Nello spazio dell'operatore si usano il **«tu»** e frasi brevissime; le anteprime dei testi per i clienti restano al «Lei».
- **Nessuno parla in prima persona:** niente «noi» e niente Connetto come personaggio. Le frasi dicono il fatto e chi ha agito, e ogni fatto del denaro dice chi l'ha confermato («ricevuto da ƎE al banco», «confermato da Lei»). Connetto è il nome del posto; il mittente dei messaggi resta quello di §10.5. *Motivo:* il glossario («Incasso verificato»), le HIG e un nome ancora di lavoro.

**Tema**
- Il tema segue l'impostazione chiaro o scuro del dispositivo, senza interruttore nell'app. Ogni direzione si disegna in chiaro e in scuro: lo scuro, nero e grigi neutri, è la vetrina e si mostra per primo nei prototipi; il chiaro è curato allo stesso modo. *Motivo:* la preferenza dell'utente resta senza essere imposta a chi legge meglio in chiaro; le HIG chiedono di seguire il sistema ([ricerca](docs/ricerca/hig-web.md), §4).

## Componenti e token
DA DEFINIRE dopo il primo percorso. Riutilizzare e documentare solo ciò che serve.

## Interazioni e stati
Registrare feedback, caricamento, errore, stato vuoto, successo, disabilitato e recupero.
Registrare comportamento mobile, tastiera, testo ingrandito e movimento ridotto.

## Decisioni confermate
Per ogni scelta: decisione, motivo, evidenza o ipotesi, ambito e data. Finora: il riferimento Apple, il formato degli importi, il simbolo C–Legame (sezione «Identità») e i punti fermi del percorso 1 (23/10/2026).
