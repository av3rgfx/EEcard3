# Schermate delle richieste del collaboratore

Type: prototype
Status: resolved
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come si vedono, nella direzione «Terracotta» e con le regole già decise, le schermate nate dalle richieste del collaboratore di ƎE del 3/11/2026 ([ticket](../../architettura-percorso-1/issues/22-richieste-collaboratore-3-novembre.md); regole in DESIGN.md, «Richieste del collaboratore di ƎE (percorso 1)»)? Da disegnare, su telefono e computer, in chiaro e in scuro, con dati inventati:
1. la ricerca dell'operatore, grande e raggiungibile da ogni pagina, con «Aperti di recente»;
2. la ricerca dei clienti: barra nella barra laterale, lente al telefono, recenti di 7 giorni;
3. «Invia» accanto a documenti e ricevute;
4. «Ferma l'accesso» e «Riapri» nella pagina della persona, con «Modifica» dei dati;
5. la valutazione: inserimento dell'operatore, la casa del proprietario con «Pubblica sul sito» e l'anteprima, il foglio del sì, la scadenza, lo storico delle valutazioni con le cifre solo per l'operatore e «Chiedi una nuova valutazione»;
6. la casa senza gestione, per l'operatore e per il proprietario;
7. «I tecnici di questa casa» con «Chiama» e l'SMS al tecnico, e l'inserimento dei tecnici da parte dell'operatore.

Le scelte si fanno con l'utente una alla volta, con una raccomandazione; un cambio di regole va in DESIGN.md. Dopo questo ticket viene il controllo B. La pagina del pacchetto si aggiorna solo se l'utente lo chiede.

## Risposta (Answer)

Risolto il 3/11/2026: **schermate approvate dall'utente**, tutte e quattro le scelte sull'opzione consigliata. Prototipo usa e getta con dati inventati, 37 schermate in sette gruppi: https://claude.ai/artifact/NJ7XmFUL4dGLxTZWCS5jpC (privato, versione 2; il sorgente è nella cartella temporanea della sessione e non entra nel repository).
1. **Ricerca dell'operatore:** la barra grande **in cima a ogni pagina**, al computer e al telefono; toccandola compaiono «Aperti di recente» sotto la barra (al telefono al posto della pagina); al computer si apre anche con il tasto «/».
2. **«Invia»:** nelle righe un **pulsante con la scritta** e l'icona; nel documento aperto «Invia» e «Scarica».
3. **Motivo di «Ferma l'accesso»:** si sceglie **da un elenco** di quattro voci, l'ultima «Altro» con una riga da scrivere.
4. **Valutazione per la proprietaria:** una **sezione sotto il riquadro** del mese, con cifra, chi l'ha fatta, «vale fino al» e «Pubblica sul sito»; nella casa senza gestione la valutazione è nel riquadro in cima.
Confermati anche quattro dettagli proposti dall'agente: il titolo «Valutazione: 198.000,00 €» per la casa senza gestione; «Chiedi una nuova valutazione» che dice che una persona di ƎE chiama per fissare quando passare a vedere la casa; l'avviso a chi viene fermato e l'SMS al tecnico come testi provvisori fino al parere sul nome; il tasto «/». Regole in DESIGN.md, «Richieste del collaboratore di ƎE (percorso 1)». Dopo questo ticket viene il controllo B.

## Commenti (Comments)

**3/11/2026, prototipo e scelte con l'utente (`prototype`, `ux-writing`, `grilling`).**

*Cosa si è mostrato.* Una pagina con i sette gruppi del ticket, telefono e computer, chiaro e scuro, ogni schermata apribile grande; stile, disegno della casa e telai ripresi dalla pagina del pacchetto (letta con lo strumento Artifact). Gruppi: (1) ricerca dell'operatore: una pagina qualsiasi, «Aperti di recente» con 8 schede e «Svuota», risultati mentre si scrive divisi in Persone e Case; (2) ricerca dei clienti: barra in cima alla barra laterale e lente al telefono, «Aperti di recente · ultimi 7 giorni» con 5 cose, risultati divisi per Mesi, Ricevute, Documenti e Scadenze con «Invia» sulle righe dei file, «Nessun risultato» che dice dove si cerca; (3) «Invia» nei documenti e nelle ricevute dell'inquilino, nel documento aperto, nei documenti dell'operatore; il «Condividi» del telefono disegnato in modo neutro; dove il browser non condivide, «Ricevuta scaricata. La trovi nella cartella Download: allegala alla tua email o al messaggio.»; (4) pagina della persona con «Accesso» (stato, ultimo accesso, email e cellulare con il lucchetto «solo al banco»), «Ferma l'accesso» in un foglio con motivo obbligatorio e anteprima dell'avviso, pulsante spento con «Scegli un motivo per continuare», stato «Fermato» con l'avviso in cima e «Riapri l'accesso», conferma «Accesso riaperto», «Modifica» con i campi e le «Modifiche» con chi e quando; (5) valutazione: scheda dell'operatore con cifra, sito e storico («la prima, gratuita»), «Nuova valutazione» con l'ultima valutazione in vista, la scadenza calcolata e le righe che andrebbero sul sito; casa della proprietaria con la valutazione; «Pubblica sul sito» con l'anteprima e tre righe (cosa non va online, si toglie quando vuoi, sparisce alla scadenza); «Togli dal sito»; chi non ha l'account con «Stampa il foglio» e «Carica il foglio firmato»; il foglio A4 «Sì alla pubblicazione della valutazione» con il posto del testo legale; dopo la scadenza «Nessuna valutazione valida» e «Chiedi una nuova valutazione» con il posto del prezzo di ƎE e «Adesso non paghi nulla»; (6) casa senza gestione per l'operatore (etichetta, valutazione, documenti, persone, «Inizia l'attivazione») e per la proprietaria (occhiello «Senza gestione», titolo «Valutazione: …», documenti con «Invia», niente mese); (7) «I tecnici di questa casa» nella casa dell'inquilino e della proprietaria, elenco per mestiere con «Chiama», la riga su cosa registra Connetto e sull'SMS, l'SMS sul telefono del tecnico (146 caratteri, senza «Ǝ», mittente da decidere), i tecnici nella scheda dell'operatore e «Aggiungi un tecnico» con chi l'ha scelto e il posto della liberatoria.

*Verifiche.* Chromium a 390 e 1280 px, ogni schermata alla sua misura e la pagina a 390 e 1400 px, in chiaro e in scuro: nessun errore, nessuno scorrimento orizzontale della pagina (scorrono di lato solo i mesi a pillola, come deciso). Tastiera: tutti i comandi raggiungibili con Tab e con il contorno visibile, varianti con Invio, schermata grande che si apre con Invio e si chiude con Esc riportando il fuoco al punto di partenza, cambio di gruppo che porta il fuoco al contenuto. Non provati: screen reader veri e telefoni veri (restano fra le prove della prima versione). Corretto lungo la strada un testo vecchio ripreso dal pacchetto: «contanti o carta» diventa «solo contanti» (regola del 3/11/2026).

*Scelta 1, dove sta la ricerca dell'operatore.* Opzioni: A in cima a ogni pagina; B nella barra laterale, con la lente al telefono; C una sezione «Cerca» (voce laterale e quinta scheda). **Scelta dell'utente: A**, consigliata. *Motivo:* è l'unica forma che resta la cosa più grande anche al telefono e sta sempre nello stesso posto. *Scartate:* B (al telefono diventa una lente piccola); C (un tocco in più e cambia le schede approvate).

*Scelta 2, come si vede «Invia».* Opzioni: A pulsante con la scritta; B solo l'icona; C solo nel documento aperto. **Scelta dell'utente: A**, consigliata. *Motivo:* la scritta si capisce anche da chi non conosce l'icona della condivisione, che cambia fra telefoni. *Scartate:* B (icona poco chiara); C (un tocco in più, contro «accanto a ogni documento»).

*Scelta 3, il motivo di «Ferma l'accesso».* Opzioni: A elenco con «Altro»; B testo libero. **Scelta dell'utente: A**, consigliata. *Motivo:* veloce al banco e motivi confrontabili nel tempo; «Altro» copre i casi diversi. *Scartata:* B.

*Scelta 4, dove la proprietaria vede la valutazione.* Opzioni: A sezione sotto il riquadro; B riga che apre una pagina; C dentro il riquadro in cima. **Scelta dell'utente: A**, consigliata. *Motivo:* si vede appena si scorre senza togliere il primo posto al fatto del mese. *Scartate:* B (si nota poco); C (mescola il denaro del mese con il valore della casa).

*Approvazione.* L'utente approva tutte le schermate e i quattro dettagli proposti dall'agente (titolo della casa senza gestione, chiamata per fissare la visita, testi provvisori, tasto «/»).

**3/11/2026, dopo la chiusura: pulsanti di altezze diverse (segnalazione dell'utente).** Sul telefono, nel foglio «Pubblica sul sito», «Pubblica sul sito» andava a capo ed era più alto di «Annulla». Corretto per tutti i fogli: al telefono i pulsanti stanno in colonna, a tutta larghezza e alti uguali; al computer affiancati e uguali (regola in DESIGN.md, «Componenti e token», *Fogli*). Uno script ha controllato tutte le 37 schermate, al telefono e al computer: questo era l'unico caso con pulsanti della stessa fila alti diversi o con il testo a capo. Corretti anche due dettagli: l'orario dell'avviso non va più a capo a metà e «Sul sito di ƎE» non ha più lo spazio doppio. Prototipo alla versione 3.
