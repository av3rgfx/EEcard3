# Dati limite e accessibilità del percorso 1

Type: prototype
Status: resolved
Blocked by: 13, 14
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Le schermate approvate del percorso 1 reggono i dati peggiori ma realistici e rispettano WCAG 2.2 livello AA? Se no, cosa si corregge nelle regole di [DESIGN.md](../../../DESIGN.md)?

Dati peggiori, solo inventati: nomi lunghi e composti, molte case, molti mesi arretrati, importi grandi, indirizzi lunghi, codici e numeri, testo ingrandito. Con i testi di «Testi dell'interfaccia (percorso 1)» e l'aspetto di «Rifinitura delle schermate interne (percorso 1)».

Revisione dell'accessibilità (WCAG 2.2 AA, come dice la mappa): contrasti misurati con la formula WCAG, compresi i dati incisi sulla tessera di rame; testo ingrandito al 200%; colonna a 320 px; tastiera e fuoco visibile; nomi per lo screen reader; zone da toccare; tema scuro; movimento ridotto.

Come si lavora:
- skill `break-ui` e `accessibility-audit`, più `prototype` per la pagina usa e getta;
- si leggono con lo strumento Artifact i prototipi approvati (link in STATUS.md, «Prototipi pubblicati») e si prepara una pagina con «Dati d'esempio / Caso peggiore»;
- verifica nel browser a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, ricaricando per ogni schermata;
- le correzioni all'utente una alla volta, in parole semplici, con una raccomandazione motivata. Un cambio delle regole già approvate va in DESIGN.md come cambiato, non cancellato.

Lo spazio dell'operatore resta com'è (la rifinitura non lo tocca); entra nella revisione solo per la pagina «Al banco» e la coda con nomi lunghi, perché i dati limite lo riguardano.

## Risposta (Answer)

Chiuso il 26/10/2026. Le schermate approvate reggono quasi tutti i dati peggiori: nessuno scorrimento laterale, nomi e indirizzi lunghi a capo, importi interi, contrasti dell'interfaccia sopra 4,5:1 in chiaro e in scuro.

Dieci correzioni, scelte dall'utente una alla volta, tutte sull'opzione consigliata:
- più mesi aperti dell'inquilino con l'elenco e il totale;
- la tessera di rame con una targhetta satinata dietro i dati;
- il nome lungo sulla tessera che si stringe in due righe;
- un'icona nel pallino dei mesi a pillola;
- i mesi a pillola a capo sul computer;
- il contorno dei campi più scuro;
- il testo che segue la grandezza scelta sul telefono;
- al massimo 5 case nella barra laterale, con «Tutte le case»;
- le righe della coda dell'operatore a capo;
- otto piccole correzioni tecniche, approvate tutte insieme.

Regole in [DESIGN.md](../../../DESIGN.md), nuova sezione «Dati limite e accessibilità (percorso 1)», con i segni di cambio nelle regole toccate («Tessera digitale», «Mesi passati», «Lavoro in coda», «Contrasti misurati»). Il testo che segue il telefono è anche in ARCHITECTURE.md, «Cosa vincolerà la scelta».

Restano fuori, da fare sulla prima versione: prove con screen reader veri (VoiceOver, NVDA), su un iPhone vero e con persone.

## Commenti (Comments)

- 25/10/2026: aperto dal «Non ancora specificato» della mappa («Rifinitura e revisione») e rivendicato nella stessa sessione.

### Pagina di prova (25/10/2026)

https://claude.ai/artifact/RtwaFRWDmVNnrr5XQnJTh9 (privata, usa e getta, solo dati inventati). Comandi in cima: schermata, «Dati d'esempio / Caso peggiore», chiaro o scuro, «Com'è / Proposta / Alternativa», testo al 100% o al 200%.

- *Base:* letti con lo strumento Artifact i prototipi della rifinitura, della prova su iPhone e dell'accesso. Lo stile delle schermate dei clienti è quello della prova su iPhone («via di mezzo», con le immagini della tessera e della stanza); quello dell'operatore è lo stile approvato, preso dal prototipo dell'accesso e chiuso in un suo contenitore. Cambiano solo i dati e i testi, che sono quelli del 25/10/2026. Le case a schede, i mesi a pillola e la linea del tempo dei clienti non erano ancora stati disegnati nella «via di mezzo»: qui sono ricostruiti dalle regole di DESIGN.md.
- *Dieci schermate:* accesso (email lunga), codice sbagliato, casa dell'inquilino, ricevute, tessera (fronte e retro), le tue case, casa del proprietario, mesi passati, coda e «Al banco» dell'operatore, incasso in agenzia.
- *Caso peggiore:*
  - nomi lunghi, composti e con accenti, per esempio «Giovanni Battista Castiglioni Della Rovere», «Oluwaseun Chukwuemeka Adebayo-Okonkwo» e «Nguyễn Thị Ngọc Hân», insieme a nomi cortissimi come «Jo Li»;
  - un'email di 64 caratteri e l'indirizzo «Via Giovanni Battista Guglielmini Ercolani 128/2, scala C, interno 14»;
  - 14 case e 9 cose da fare;
  - 7 mesi arretrati, canone 9.876,54 € e spese 1.234,56 €, cioè 77.777,70 € in tutto;
  - una ricevuta per tre mesi che ne sostituisce un'altra;
  - anni dal 2019 al 2026 e 115 voci in coda, con incassi del giorno di 123.456,78 €;
  - contanti oltre la soglia e bonifico con IBAN e causale lunga.
- *Verifiche nel Chromium disponibile, pagina ricaricata e schermata verificata ogni volta:*
  - 308 combinazioni: 10 schermate più il retro della tessera, 2 insiemi di dati, chiaro e scuro, larghezze 360, 390, 768, 900, 1024, 1180 e 1366 px;
  - zoom del browser al 200% (110 combinazioni, caso peggiore), colonna a 320 px (22), spaziatura del testo di WCAG 1.4.12 (33), tastiera con Tab su ogni schermata (40 percorsi).
  - Si misurano scorrimento laterale, elementi fuori dal loro riquadro, testi sovrapposti o tagliati, zone da toccare sotto 24 × 24 px, titoli e fuoco visibile.
  - Il contrasto di ogni testo è misurato sui pixel veri del fondo, con il testo reso invisibile: così contano anche le immagini, la tessera di rame e la stanza. Si usa il 10° percentile del fondo con la formula WCAG. Le soglie sono 4,5:1, oppure 3:1 per il testo grande.
- *Falsi allarmi scartati, guardando le schermate:* mesi a pillola fuori dalla finestra (sono in una fila che scorre), la sfocatura della stanza oltre il bordo, il pulsante spento «Registra e prepara la ricevuta» (i comandi spenti sono esclusi dal criterio 1.4.3), le caselle dell'incasso da 20 px (si toccano su tutta la riga), il campo d'accesso sul telefono (il fuoco è sul suo contorno).

### Cosa si rompe (dal più grave)

1. **Inquilino con più mesi arretrati** (dato incompleto). La casa mostra solo il mese più vecchio, cioè «Maggio: era da pagare entro il 5 maggio» con 11.111,10 €. Non dice che i mesi aperti sono 7, per 77.777,70 €, e sotto «Mese scorso» compare ottobre «Da pagare». DESIGN.md non dice come si mostrano più mesi aperti.
2. **Contrasto dei dati incisi sulla tessera:** dal 2,2:1 al 3,4:1, sul fronte e sul retro, in chiaro e in scuro. Il rame è un colore di mezzo: nella zona dei dati la luminanza va da 0,07 a 0,40. Né il nero (3,0:1 al 10° percentile) né il bianco (3,3:1) arrivano a 4,5:1 su tutta la zona.
3. **Nome lungo sulla tessera:** a 390 px «Giovanni Battista Castiglioni Della Rovere» va su quattro righe e sale sulla scritta «Connetto» incisa nell'immagine (a 360, 390 e 768 px).
4. **Accesso sul telefono:** con il nuovo messaggio «Il codice non corrisponde…» il pulsante «Entra» finisce sotto la sfumatura in fondo alla stanza e quasi sparisce (1,1:1 a 390 px). Succede anche con lo zoom al 200%.
5. **Mesi a pillola:** lo stato di ogni mese si vede solo dal colore del pallino (WCAG 1.4.1, livello A). Vale per i mesi passati del proprietario e per le ricevute dell'inquilino.
6. **Mesi a pillola sul computer:** la fila scorre senza barra. A 1366 px il mese scelto (ottobre) resta fuori vista e con il mouse non si raggiunge.
7. **Bordi dei campi:** il campo dell'accesso (#d9d2cb) e i campi dell'operatore (#ece7e2) hanno un contorno da 1,2:1 a 2,1:1 sul fondo, in chiaro e in scuro (calcolato sui colori). WCAG 1.4.11 chiede 3:1 per riconoscere un campo.
8. **Operatore:**
   - le righe della coda tagliano con i puntini proprio l'indirizzo che distingue una voce dall'altra;
   - con 123.456,78 € gli incassi del giorno escono dal loro riquadro (360, 1180 e 1366 px);
   - «Trova cliente o casa» non mostra il fuoco (WCAG 2.4.7);
   - la coda non ha un titolo principale;
   - sulla tessera arancione di «Al banco» il codice è a 4,2:1 e la riga piccola a 3,1:1;
   - a 320 px il riquadro del bollo copre il titolo dell'anteprima della ricevuta.
9. **Barra laterale con 14 case:** elenca tutte le case, e la tessera e la persona finiscono in fondo dopo 14 righe.
10. **Piccole cose:**
    - «Cambia email o cellulare» sulla stanza del computer è a 4,25:1;
    - «Hai bisogno di aiuto?» sul computer è alto 19–22 px;
    - con la spaziatura di WCAG 1.4.12 a 320 px l'importo grande fa scorrere la pagina di lato di 34 px.
11. **Testo più grande dell'iPhone:** i caratteri sono in pixel fissi. Lo zoom del browser funziona (WCAG 1.4.4 è rispettato), ma l'impostazione «Testo più grande» dell'iPhone non cambia la pagina.

### Cosa regge

- Tutti gli altri testi dell'interfaccia, in chiaro e in scuro, sopra 4,5:1: stati, rame, etichette sulla facciata, schede traslucide, pagina d'accesso.
- Nessuno scorrimento laterale a nessuna larghezza, compresi 320 px e lo zoom al 200% (salvo il caso della spaziatura sopra).
- Nomi lunghi nelle righe, nella barra laterale e nei pulsanti («Da chiudere con» e il nome) vanno a capo senza uscire.
- Email lunga, IBAN e causale si leggono interi, con «Copia».
- 9 cose da fare e 14 case a schede o a righe.
- La ricevuta per tre mesi, che dice quale sostituisce.
- L'avviso dei contanti oltre la soglia, con il pulsante spento e «Passa a carta».
- Importi a cifre in colonna, mai tagliati.
- Fuoco visibile e ordine della tastiera giusti, salvo la ricerca dell'operatore; nessun fuoco nascosto sotto le schede.

### Proposte nella pagina («Proposta» e «Alternativa»)

- *Tessera:* una targhetta satinata, più chiara, dietro i dati, con il testo quasi nero: da 8,6:1 a 9,2:1. In alternativa una targhetta brunita, scura, con il testo chiaro: da 11:1 a 12,8:1. Il nome si stringe fino a stare in due righe. Misurato a 360, 390 e 1366 px, in chiaro e in scuro.
- *Mesi arretrati:* nella proposta, l'elenco dei mesi con il totale. Nell'alternativa resta il mese più vecchio, con una riga per gli altri.
- *Mesi a pillola:* nel pallino c'è un'icona (spunta, orologio, fumetto); sul computer i mesi vanno a capo; il mese scelto torna in vista.
- *Altro:* bordi dei campi a 3:1; righe della coda su due righe; ricerca con il fuoco; numeri del giorno che vanno a capo; tessera arancione più scura; modulo d'accesso sopra la sfumatura; «Cambia email» in rame scuro; aiuto alto 44 px; importo grande che si stringe; barra laterale con 5 case e «Tutte le case (14)».

### Scelte dell'utente, una alla volta

1. *Più mesi aperti dell'inquilino* (26/10/2026): **elenco e totale**, l'opzione consigliata. Titolo «Da maggio a novembre: 7 mesi da pagare», totale in grande, un mese per riga e «puoi pagare anche un mese alla volta: si salda per primo il più vecchio»; sotto, «Ultimo pagamento». Scartate: il mese più vecchio con una riga per gli altri; solo il totale con l'elenco un tocco più in là.
2. *Contrasto dei dati sulla tessera* (26/10/2026): **targhetta satinata**, l'opzione consigliata. Dietro i dati c'è una targhetta di rame più chiaro, con il testo quasi nero #1f0a01: misurato da 8,6:1 a 9,2:1. Scartate: la targhetta brunita (da 11:1 a 12,8:1, ma la tessera diventa più scura) e lasciare com'è con un'eccezione annotata.
3. *Nome lungo sulla tessera* (26/10/2026): **si stringe in due righe**, l'opzione consigliata. Il nome resta intero; se non sta in due righe, i caratteri si rimpiccioliscono un poco alla volta finché ci stanno. Scartate: un nome breve scritto in agenzia solo per la tessera; fino a tre righe a grandezza piena.
4. *Stato dei mesi a pillola* (26/10/2026): **un'icona nel pallino**, l'opzione consigliata. Spunta per pagato, trattino per in attesa, orologio per in ritardo, fumetto per contestato: le icone degli stati. Scartate: pallino con legenda; parola sotto il mese.
5. *Fila dei mesi sul computer* (26/10/2026): **a capo sul computer**, l'opzione consigliata. Da 860 px i mesi vanno a capo e si vedono tutti; sul telefono la fila scorre col dito e il mese scelto viene messo al centro. Scartate: frecce ai lati; barra di scorrimento visibile.
6. *Contorno dei campi* (26/10/2026): **contorno più scuro**, l'opzione consigliata. #8f857c in chiaro (3,6:1 sul bianco, 3,2:1 su #f6eee6, un tono della luce della stanza; calcolato sui colori) e #8a817a in scuro (4,5:1). Scartate: un fondo del campo più marcato; lasciare com'è con un'eccezione annotata.
7. *Grandezza del testo scelta sul telefono* (26/10/2026): **sì, segue il telefono**, l'opzione consigliata. Il testo cresce con l'impostazione della dimensione del testo dell'iPhone; le schermate reggono il testo fino al doppio. È una regola per la costruzione, da provare su un iPhone vero con la prima versione. Scartato: solo lo zoom del browser.
8. *Molte case nella barra laterale* (26/10/2026): **al massimo 5 case e «Tutte le case (14)»**, l'opzione consigliata. Prima la casa aperta e quelle con qualcosa da fare; la voce apre l'elenco completo. Nella pagina di prova le 5 sono semplicemente le prime dell'elenco. Scartate: un elenco che scorre dentro la barra; nessuna casa nella barra oltre 5.
9. *Righe della coda dell'operatore* (26/10/2026): **a capo su due righe**, l'opzione consigliata. Il titolo della voce («cosa · casa») va a capo e si legge intero. Scartate: l'indirizzo su una riga sua; i puntini con il testo intero al passaggio del mouse.
10. *Otto piccole correzioni tecniche* (26/10/2026): **tutte insieme**, l'opzione consigliata. Sono:
    - il modulo d'accesso sta sopra la sfumatura della stanza;
    - il fuoco si vede su «Trova cliente o casa»;
    - la coda ha un titolo principale per lo screen reader;
    - i numeri del giorno vanno a capo;
    - la tessera arancione di «Al banco» è più scura;
    - nell'anteprima della ricevuta c'è spazio per il bollo;
    - «Cambia email o cellulare» è in rame scuro sulla stanza e «Hai bisogno di aiuto?» è alto 44 px;
    - l'importo grande si stringe invece di uscire.

### Verifica con le correzioni attive (26/10/2026)

Lo stesso controllo è stato rifatto con «Proposta» accesa:
- 308 combinazioni;
- zoom al 200% (110 combinazioni);
- colonna a 320 px (22);
- spaziatura del testo (33);
- tastiera (40 percorsi).

Restano solo i falsi allarmi già spiegati: il pulsante spento, le caselle dell'incasso, la sfocatura della stanza, il retro della tessera confrontato con il simbolo del fronte e il fuoco dei campi, che si vede sul contorno del contenitore. Il fuoco dei campi è controllato a parte: «Trova cliente o casa» prima non aveva contorno, ora ne ha uno di 3 px. I contrasti dei dati incisi vanno da 8,6:1 a 9,2:1, la tessera arancione dell'operatore supera 4,5:1, «Entra» non finisce più sotto la sfumatura e i numeri del giorno restano nel loro riquadro.

Strumenti usati, fuori dal repository (cartella temporanea della sessione): composizione della pagina, controllo delle combinazioni, tastiera, misura del rame.
