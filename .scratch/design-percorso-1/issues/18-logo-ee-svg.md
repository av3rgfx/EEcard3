# Logo di ƎE ridisegnato in SVG

Type: prototype
Status: resolved
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come si ridisegna fedelmente il logo dell'agenzia ƎE (le due E, una rovesciata) in un SVG pulito, e come sta dentro le frasi, sulla tessera, nelle intestazioni e nel prototipo?

Contesto: decisione dell'utente del 26/10/2026 nel ticket [Ricerca: licenze di icone, carattere e immagini](17-ricerca-licenze-grafiche.md). Manrope non ha la «Ǝ», quindi «ƎE» diventa un disegno ovunque, anche dentro le frasi; nelle email e negli SMS resta in lettere. L'agenzia non ha più il file originale. Il collaboratore di ƎE ha confermato che lo ridisegniamo noi (riferito dall'utente il 26/10/2026).

Come si lavora (HITL):
- *Precisato dall'utente il 26/10/2026, al posto del riferimento prima richiesto:* non serve una foto. Il logo dell'agenzia è semplicemente «ƎE», due E che si danno la schiena: una E specchiata seguita da una E normale. Si disegna partendo dalla «E» di Manrope (licenza OFL 1.1, che lo permette; [ricerca](../../../docs/ricerca/licenze-grafiche.md), §1). L'agente non cerca il logo altrove;
- skill `prototype` (ramo UI): il ridisegno in un solo colore (`currentColor`) e una pagina usa e getta che lo mostra nelle frasi a varie grandezze, in chiaro e in scuro, sulla tessera di rame e nella barra laterale, con il testo ingrandito;
- accessibilità: il disegno è letto «ƎE» (`role="img"` con `aria-label`), si allinea alla linea del testo e segue la grandezza del testo; contrasto come il testo intorno;
- il disegno finale va approvato dall'agenzia, perché è il suo marchio. File e regole d'uso in `assets/marchio/`, come per il simbolo C–Legame, con la conferma dell'agenzia annotata qui.

## Risposta (Answer)

Deciso dall'utente il 26/10/2026, con cinque scelte (più una conferma) su un prototipo con dati inventati. Il logo è la «E» di Manrope 4.505 ripetuta e specchiata a sinistra, con fra le due aste lo spazio normale fra due lettere.

- **Nelle frasi** due «E» di Manrope, la prima girata come in uno specchio: nessun file, il logo segue da solo peso, grandezza e colore del testo.
- **Da solo, come marchio** (tessera, ricevute stampate e PDF, file per l'agenzia) il disegno fisso al peso 700: [assets/marchio/ee.svg](../../../assets/marchio/ee.svg).
- Lo **screen reader** dice «Enrico Erca», di seguito alla frase.
- Sulla **tessera di rame** ƎE è **inciso**, come il simbolo C–Legame.

File e regole d'uso in [assets/marchio/](../../../assets/marchio/README.md); regola in [DESIGN.md](../../../DESIGN.md), «Identità». **Approvato** dall'utente insieme al collaboratore di ƎE, per l'agenzia (riferito dall'utente il 26/10/2026).

## Commenti (Comments)

**Precisazioni dell'utente, 26/10/2026**
- Non c'è una foto del logo e non serve: il logo è «ƎE», due E che si danno la schiena (una E specchiata seguita da una E normale). Sostituisce il riferimento richiesto nella domanda.
- Il collaboratore di ƎE ha confermato che il logo lo ridisegniamo noi (riferito dall'utente). Il disegno finale va mostrato all'agenzia.

**Prototipo** (skill `prototype`, ramo UI; pagina privata, usa e getta, dati inventati): https://claude.ai/artifact/GRs9QZVLmBR7q6yx5VS2xQ, versione 2. Il sorgente è nella cartella temporanea della sessione e non entra nel repository.
- Tre metodi dietro un selettore: A «SVG fisso», B «E specchiata nel testo», C «Misto».
- Comandi per peso (300–800), distanza fra le E (stretta, come nel testo, larga, molto larga), nome detto dallo screen reader, tema e testo al 100, 150 e 200%.
- Da vicino, accanto a «ƎE» in lettere: la «Ǝ» arriva da un altro carattere del sistema.
- Il logo in nove frasi del percorso, dal titolo di 28 px alla scritta in rame di 13 px, con il pulsante a pillola e la riga che porta altrove, e a sette grandezze. Sotto ogni frase, cosa si sente.
- La tessera di rame e la barra laterale, in chiaro e in scuro affiancati.
- La «E» di Manrope è fatta solo di rettangoli e le sue misure cambiano in modo lineare col peso. Il disegno è ricostruito dal file del carattere letto con fontTools, esatto a ogni peso.

**Verifiche** in Chromium, 26/10/2026:
- 60 combinazioni (360, 390, 768, 1024 e 1366 px; tre metodi; chiaro e scuro; testo al 100 e al 200%). Nessuno scorrimento orizzontale e nessun errore, dopo aver corretto la barra laterale che a 360 e 390 px, con il testo al 200%, usciva dallo schermo.
- Linea del testo e altezza delle maiuscole controllate a occhio, ingrandite.
- Albero di accessibilità: la frase è un solo testo, «Chiama Enrico Erca»; il disegno è nascosto. Con la lettura «come immagine» della prima versione si sentiva «Chiama, ƎE, immagine».
- Altezza del logo fisso sulla tessera in miniatura della barra laterale: 10,3 px (da qui il minimo di 10 px).
- Non fatte: prove con screen reader veri (VoiceOver, NVDA) e su un iPhone vero; si fanno con la prima versione.

**Scelte dell'utente**, una alla volta, in parole semplici e con una raccomandazione:
1. **Metodo:** C, misto (consigliata). Nelle frasi la E girata, da sola il disegno fisso. *Scartati:* A, lo SVG fisso ovunque, perché in una frase leggera sembra più scuro e in un titolo più chiaro del testo; B, la E girata anche sulla tessera, perché lì il marchio deve restare identico e servire anche fuori dal browser. Dopo la scelta l'utente ha chiesto perché usare lo SVG ovunque, se Manrope non ha la «Ǝ». Chiarito: nelle frasi non c'è nessuno SVG e si usa la «E», che Manrope ha; anche lo SVG è fatto dalla «E». L'utente ha confermato C.
2. **Peso del disegno fisso:** 700 (consigliata), lo stesso di «Connetto» sulla tessera e il più leggibile da piccolo. *Scartati:* 600, 800, 500.
3. **Distanza fra le E:** come nel testo, 0,14 della grandezza (consigliata). Così il disegno fisso e la E girata sono identici. *Scartate:* stretta e larga.
4. **Cosa dice lo screen reader:** la proposta era «ƎE» letto come parola della frase. L'utente ha suggerito «Agenzia Enrico Erca» o «Agenzia EE»; il prototipo ha mostrato le frasi intere. Scelto **«Enrico Erca»** (consigliata), perché «Agenzia Enrico Erca» si ripete in «Ricevuto da Agenzia Enrico Erca in agenzia» e in «Agenzia Agenzia Enrico Erca». *Scartati* anche «Agenzia EE» («EE» rischia di suonare come due lettere) e «ƎE» (la «Ǝ» può essere letta come una lettera strana).
5. **Sulla tessera:** inciso nel rame, come il simbolo (consigliata). *Scartato:* piatto.

**Correzione:** nella quinta domanda l'agente ha detto «contrasto circa 5:1» sul rame. Misurato poi sui toni del prototipo è fra circa 4,2:1 e 5,3:1. Per un logo WCAG non chiede un minimo (1.4.3), e resta sopra 3:1.

**Revisione:** nessun codice applicativo. Il programma `ocr` non c'è nell'ambiente, quindi niente revisione OCR. Revisione diretta del file `ee.svg`: forme, verso delle E e controllo d'integrità.

**Conferma dell'agenzia, 26/10/2026:** l'utente scrive «il logo va bene, lo confermo insieme al mio collaboratore». Il collaboratore di ƎE conferma per l'agenzia (riferito dall'utente). Nessun cambio al disegno.
