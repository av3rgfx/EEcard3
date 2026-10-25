# Ricerca: tessere fisiche, fornitori, personalizzazione, ordini e spedizioni

Type: research
Status: resolved
Blocked by: —
Mappa: [Dalla specifica del percorso 1 al design](../map.md)

## Domanda (Question)

Nel pilota la tessera è digitale per proprietario e inquilino e, se costa poco, anche fisica per tutti e due, consegnata al banco all'attivazione ([PRODUCT.md](../../../PRODUCT.md) §12, 18/10/2026; [Specifica del percorso 1](09-specifica-percorso-1.md), decisione 8). Quanto costa davvero, e come si gestisce?

Richiesta dell'utente del 22/10/2026: una ricerca approfondita online e uno studio su tutto ciò che serve per le tessere fisiche.
- **Fornitori:** chi le produce in Italia o nell'UE in formato carta di credito, a basso costo ma di buona qualità; materiali, quantità minime, tempi, prezzi per piccole tirature (circa 100 clienti nel pilota), campioni.
- **Personalizzazione su richiesta, con un sovrapprezzo:** colore, incisione o nome; costi per pezzo singolo e tempi.
- **Acquisti e ordini:** come ƎE ordina, tiene la scorta e associa una tessera al codice dell'adesione; blocco e sostituzione (la vecchia non deve più funzionare, PRODUCT.md §5.6).
- **Distribuzione:** consegna al banco all'attivazione; per chi la vuole dopo l'iscrizione, ordine dalla piattaforma e poi dall'app, con spedizione a pagamento (idea dei fondatori, §5.6); corrieri o posta, costi, tracciamento, indirizzi.
- **Tutto ciò che può servire:** dati personali stampati o no, cosa scrivere sulla tessera, obblighi se la spedizione è venduta al cliente, costi totali per tessera.

Nel pilota l'iscrizione avviene al banco: personalizzazione e ordini a distanza servono dopo, ma l'utente li vuole studiati insieme. Il ticket non blocca la specifica né il design del percorso 1; serve prima del pilota per decidere se la tessera fisica c'è. Fonti primarie con la data di lettura, in `docs/ricerca/tessere.md` (skill `research`).

## Risposta (Answer)

Chiuso il 25/10/2026. Nel pilota la tessera fisica c'è, per proprietari e inquilini, consegnata solo in agenzia con la cartellina: in plastica con **lamina metallica arancione** (se costa troppo, altre soluzioni come la plastica a colore fisso), **chip contactless MIFARE DESFire EV3 spento nel pilota**, niente chip a contatto, **solo il codice** stampato, casuale e diverso da quello della tessera digitale, nessun nome né ruolo; stampa del fornitore a lotti, scorta in agenzia, niente spedizione. Quantità e prezzo si decidono con il preventivo; la richiesta è pronta qui sotto e la manda l'utente o ƎE. Ricerche: [tessere.md](../../../docs/ricerca/tessere.md) e [tessera-contactless.md](../../../docs/ricerca/tessera-contactless.md). Decisione in PRODUCT.md §12.

Restano da fare, prima del pilota: preventivo e campione con la lamina, provato con il lettore e con un iPhone e un Android; testo delle scritte sulla tessera e sulla cartellina (con il parere legale e dopo il parere sul nome); chi genera e custodisce le chiavi del chip (architettura).

## Commenti (Comments)

### Ricerca (25/10/2026)
Ticket rivendicato il 25/10/2026. Ricerca con la skill `research`, affidata a un agente in background, in [docs/ricerca/tessere.md](../../../docs/ricerca/tessere.md): fornitori con prezzi pubblicati, personalizzazione, stampa al banco, codice e blocco, cartellina e spedizione, dati personali, Codice del consumo, fisco e ambiente, tre scenari di costo. Nessun ordine, preventivo, campione, account o contatto con fornitori: solo pagine pubbliche, con i configuratori letti senza inviare nulla. Fonti non raggiungibili annotate nel file.

Controllo a campione della sessione principale sulle fonti originali: GCARD, Metaliccards (rame), Posta Ordinaria, art. 59 del Codice del consumo. Tutto confermato; aggiunto che la Posta Ordinaria non dà l'esito della consegna.

### Decisioni dell'utente (25/10/2026), una alla volta
1. **La tessera fisica c'è nel pilota, per proprietari e inquilini**, consegnata in agenzia all'adesione. Scartati: solo digitale (non si impara nulla sulla tessera fisica), lotto di prova solo per chi la vuole. Consigliata dall'agente: con circa 100 clienti costa qualche centinaio di euro, dentro la regola «se costa poco» (§12, T6).
2. **Materiale: plastica con lamina metallica arancione, nient'altro.** Il rame stampato è escluso («assolutamente no, dà idea di cheap»). Se la lamina costa troppo, si cercano altre soluzioni, per esempio plastica con un colore fisso. Il prezzo della lamina non è pubblicato: serve un preventivo, da chiedere solo con l'autorizzazione dell'utente. Scartati: rame stampato (consigliato dall'agente per il costo, respinto dall'utente), rame vero (non scelto; da 6,50 a 8,50 € a tessera e scorta obbligatoria).
3. **Nome o solo codice: rimandata.** Alla domanda l'utente ha chiesto che la tessera abbia fin da subito la funzione contactless, per un futuro totem in agenzia aperto 24 ore su 24 dove pagare bollette e canone appoggiando la tessera o il telefono, e uno studio sulle soluzioni migliori, chip a contatto compreso, prima di cercare fornitori. Aperta la [Ricerca: tessera contactless, wallet e totem in agenzia](18-ricerca-tessera-contactless-totem.md). Le domande che restano (nome o codice, chi stampa, spedizione, ruolo stampato, quantità) aspettano quella ricerca, perché il chip cambia fornitori, costi e materiale.
4. **Chip** (dalla [ricerca su contactless, wallet e totem](18-ricerca-tessera-contactless-totem.md), chiusa lo stesso giorno): MIFARE DESFire EV3 originale NXP, spento nel pilota; niente chip a contatto.
5. **Solo il codice, niente nome.** Le tessere arrivano dal fornitore tutte uguali, ognuna con il suo codice casuale stampato e il suo chip; in agenzia l'operatore ne prende una dalla scorta e la collega all'adesione. Ne seguono, senza altre domande: stampa del fornitore a lotti, nessuna stampante in agenzia, nessun ruolo stampato (le tessere della scorta sono uguali per tutti). Il nome resta sulla tessera digitale. Scartato: col nome (stampa una per una, ristampe, dice chi è il cliente se si perde). Consigliata dall'agente.
6. **Un codice per tessera.** La tessera digitale e quella fisica hanno codici diversi, casuali, collegati alla stessa adesione: tutti e due portano l'operatore alla stessa persona, e una tessera persa si blocca da sola. La scheda «Tessera» mostra la fisica con il suo codice accanto alla digitale («La tessera fisica te la danno in agenzia: ha un codice suo e porta l'operatore a te come questa»). Glossario aggiornato («Tessera»). Scartato: lo stesso codice (una tessera persa cambierebbe anche la digitale, e la scorta non si potrebbe prestampare). Consigliata dall'agente.
7. **Nel pilota niente spedizione: la tessera si consegna solo in agenzia**, con la cartellina; chi la perde la ritira lì. La spedizione a pagamento si studia con l'adesione a distanza, con i pareri legale e fiscale. Scartate: posta ordinaria (1,30 €, senza prova di consegna) e raccomandata (6,00 €). Consigliata dall'agente.
8. **Quantità del primo ordine: si decide con il preventivo** (scelta dell'utente), quando si conoscono prezzo e quantità minima di chip più lamina. Era consigliato 250: circa 100 case con proprietario e inquilino fanno fino a circa 200 tessere, più la scorta.

### Richiesta di preventivo, pronta da copiare (25/10/2026)
Da mandare a due o tre fornitori italiani, per esempio GCARD (Carteplastiche, Genzano di Roma) e RFID.it (Sinfotech, Merate), dall'indirizzo dell'utente o di ƎE. Non contiene dati personali di clienti. Le parti fra parentesi quadre le completa chi la manda.

> Oggetto: Richiesta di preventivo e campione: tessere PVC con chip MIFARE DESFire EV3 e lamina a caldo
>
> Buongiorno,
> vi chiediamo un preventivo per tessere di adesione per un'agenzia immobiliare, con un campione fisico prima dell'ordine.
>
> - Formato ISO/IEC 7810 ID-1 (85,60 × 53,98 mm), spessore 0,76 mm.
> - Chip contactless **originale NXP MIFARE DESFire EV3** (2K o 4K, indicate il modello esatto). Non accettiamo chip «compatibili» né MIFARE Classic.
> - Stampa a colori fronte e retro su grafica nostra, con **lamina a caldo metallizzata color arancione o rame** su una parte del fronte. Vi chiediamo se la lamina disturba l'antenna, quale zona lasciare libera e se la tessera finita resta conforme a ISO/IEC 14443-A, con la distanza di lettura misurata.
> - **Codice stampato diverso su ogni tessera**, preso da un nostro file (codici casuali, nessun nome).
> - Elenco dei numeri di serie (UID) del chip abbinati al codice stampato.
> - Chiavi del chip: con quali chiavi di trasporto escono le tessere e se potete caricare chiavi indicate da noi; come le ricevete e le distruggete.
> - Prova del 100% delle tessere e sostituzione delle difettose.
> - Prezzi per 100, 250 e 500 pezzi, IVA esclusa; quantità minima; tempi di produzione; spedizione; costo e tempi del campione.
> - Disponibilità dello stesso chip e della stessa grafica per ordini successivi.
> - A parte, se le fate: cartelline in carta con fessura per una tessera, stessa quantità.
>
> Grazie,
> [nome, agenzia, recapito]
