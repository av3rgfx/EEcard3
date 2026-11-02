# Il collaboratore di ƎE guarda lo spazio dell'operatore

Type: task
Status: claimed
Blocked by: 04, 09
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Lo spazio dell'operatore, nella direzione scelta, regge il lavoro vero al banco? Decisione dell'utente del 23/10/2026 (mappa, «Note»): il collaboratore di ƎE lo guarda prima del controllo B; nessun altro, e solo lo spazio dell'operatore.

Compito con l'utente (HITL):
1. L'agente prepara un link al prototipo dello spazio dell'operatore, con soli dati inventati, e tre o quattro domande precise, pronte da copiare: per esempio su quale apparecchio lavora al banco, come stampa oggi le ricevute, cosa ha davanti quando passa l'inquilino, cosa manca o è di troppo.
2. L'utente lo manda al collaboratore e riporta le risposte.
3. L'agente le registra qui in forma sintetica, senza nomi; le correzioni che ne escono si portano all'utente una alla volta.

Va fatto sul prototipo più completo dello spazio dell'operatore disponibile: quello del ticket [Schermate dell'operatore di ƎE](09-schermate-operatore.md), aggiunto a «Blocked by» il 23/10/2026. Blocca solo il controllo B, non il resto del design. Le risposte del collaboratore sono il parere di chi lavora al banco, non un'evidenza sui clienti.

## Commenti (Comments)

**23/10/2026, messaggio e domande pronti da copiare** (preparati dall'agente; li manda l'utente, insieme al link del prototipo dell'operatore condiviso dal menu «Condividi» della pagina, che ora è privata).

> Ciao! Ti mando il link a una prova di come potrebbe essere lo spazio di ƎE in Connetto, il servizio che stiamo progettando, e un secondo link con le schermate dell'inquilino. Dentro ci sono solo dati inventati: nomi, case e importi non sono veri. In alto puoi scegliere le schermate (coda, persona al banco, incasso, scheda di una casa e altre). Funziona sia sul computer sia sul telefono. Ti chiedo dieci minuti e cinque risposte, anche brevi:
>
> 1. Al banco su cosa lavori: computer fisso, portatile, tablet o telefono? E la stampante per le ricevute è lì vicino?
> 2. Quando un inquilino viene a pagare, cosa fai oggi, passo per passo, e quanto ci metti più o meno? Guardando le schermate «Al banco» e «Incasso al banco», c'è qualcosa che manca o che ti rallenterebbe?
> 3. La «Coda» mette le cose in quest'ordine: consegne in ritardo, contestazioni, canoni non pagati, consegne da fare, nuovi canoni da controllare, attivazioni e documenti mancanti, scadenze. È l'ordine giusto per il tuo lavoro? Cosa guarderesti per primo la mattina?
> 4. Ai clienti, al banco e per iscritto, date del «tu» o del «Lei»?
> 5. Nel secondo link, schermata «5. Ricevute»: in alto puoi passare da «Mesi a pillola» a «Elenco semplice». Per un inquilino che cerca una ricevuta, quale ti sembra più facile? Gli inquilini oggi vi chiedono le ricevute, e per cosa?
>
> Grazie!

Perché queste domande:
- la 1 decide su cosa si disegna per primo il banco e come si stampa;
- la 2 controlla l'incasso, il passaggio più frequente;
- la 3 controlla l'ordine della coda, punto fermo del 23/10;
- la 4 controlla la voce appena passata al «tu»;
- la 5 conferma o cambia la scelta provvisoria delle ricevute dell'inquilino (mesi a pillola). L'ha chiesta l'utente il 23/10/2026 chiudendo il ticket [Schermate dell'inquilino](11-schermate-inquilino.md): allarga il ticket di una sola domanda, sulle schermate dell'inquilino. Il link al prototipo dell'inquilino (https://claude.ai/artifact/PB8wRY5NZT2jgYndnJLn2v) va condiviso dall'utente dal menu «Condividi», come quello dell'operatore.

Il ticket resta `claimed` finché arrivano le risposte; si registrano in sintesi, senza nomi.

**2/11/2026, scelta dell'utente: una prova guidata navigabile prima delle domande.** Le pagine di prova e la pagina del pacchetto sono strumenti di controllo (selettori, «Situazioni», regole accanto alle schermate): l'utente le capisce, il collaboratore, che non è tecnico, le troverebbe scomode. Si prepara invece una **prova guidata**, usa e getta, solo dati inventati, da usare come l'app vera (skill `prototype`):
- un solo link; all'apertura «Entra come operatore di ƎE», «come proprietaria», «come inquilino»; dentro nessun selettore né nota tecnica, pulsanti che portano davvero alla schermata dopo, «Indietro» come in un'app;
- l'operatore sul computer, proprietaria e inquilino sul telefono; sempre visibile «Prova con dati inventati»;
- pochi compiti concreti in una striscia «Prova a fare questo»: per l'operatore più ricca (incasso al banco con la ricevuta, la coda del mattino, almeno un'altra a scelta della sessione), per proprietaria e inquilino due compiti ciascuno (per esempio confermare un canone ricevuto, approvare il nuovo canone ISTAT; caricare la contabile, trovare una ricevuta);
- parte dalla pagina del pacchetto (design deciso), non dai prototipi vecchi; la domanda 5 diventa un confronto fra le due versioni delle ricevute alla fine del percorso dell'inquilino.
- **Scelta dell'utente: A**, tutte e tre le parti, contro B, solo l'operatore come previsto il 23/10 (la domanda 5 e quelle sulla firma ISTAT resterebbero senza schermate). La guarda **solo il collaboratore**, come deciso il 23/10; nessun proprietario o inquilino vero.
- **Domande da riscrivere** dopo la prova, partendo dai compiti, più due nuove del 2/11/2026: (6) quali altri documenti vorrebbe far firmare a inquilini o proprietari, oltre all'aggiornamento ISTAT; (7) se per ƎE va bene che il nuovo canone valga dalla decorrenza anche se l'inquilino firma dopo, come ha scelto l'utente ([Firma dell'inquilino sul nuovo canone ISTAT](../../architettura-percorso-1/issues/20-firma-inquilino-istat.md)), o se oggi senza firma l'aumento non si applica. Le risposte arrivano all'utente per messaggio.

**2/11/2026, prova guidata pronta e messaggio riscritto** (preparati dall'agente; li manda l'utente).

*La prova:* https://claude.ai/artifact/5H1bQMDiAxmFqXnHeXKvSc (pagina «Prova Connetto», privata, usa e getta, solo dati inventati). L'utente la condivide dal menu «Condividi» della pagina, solo con il collaboratore: finché non la condivide, il collaboratore non la apre. Il sorgente sta nella cartella temporanea della sessione; una sessione nuova lo rilegge con lo strumento Artifact, azione «read».
- All'apertura tre riquadri: «Entra come operatore di ƎE» (Giulia Neri, meglio sul computer), «Entra come proprietaria» (Marta Ferri, due case), «Entra come inquilino» (Luca Benassi, Via dei Tigli 14). In alto sempre «Prova con dati inventati» e «Cambia ruolo»; sotto, la striscia «Prova a fare questo», che si nasconde e segna i compiti fatti. Nessun selettore né nota tecnica: i pulsanti portano alla schermata dopo, con «Indietro». Proprietaria e inquilino in una cornice da telefono sul computer, a schermo intero sul telefono. Chiaro e scuro seguono il dispositivo. Dove la prova non può fare la cosa vera (stampa, file da scaricare, chiamate) un avviso breve lo dice.
- *Operatore* (martedì 16 novembre 2027): 1. incasso al banco di Sara Pini, dalla ricerca in cima alla coda a «Al banco», all'incasso con il mezzo da scegliere e l'anteprima della ricevuta, a «Incasso registrato» con i passi sul foglio e la lettera A4; 2. la coda del mattino nell'ordine fisso, con nove voci di tutti i gruppi e il dettaglio di ognuna (consegna in ritardo da registrare con contabile e fattura, contestazione con l'esito, canoni non pagati, documenti da caricare, scadenza); 3. il nuovo canone ISTAT di Via dei Tigli 14, con il controllo in tre parti, «Inseriscilo a mano» e «Cosa succede dopo» con il documento da firmare e «firma mancante» nella coda dalla decorrenza. Funzionano anche «Persone», «Case» e «Oggi».
- *Proprietaria:* 1. il nuovo canone ISTAT con «Approva» e «Non chiederlo quest'anno», poi il documento «Aggiornamento del canone ISTAT» con lo stato della firma di Luca Benassi; 2. la contabile di Chiara Monti da confermare con «Ricevuto» e «Annulla» per 8 secondi. Funzionano le cinque schede (case, ricevute, tessera, documenti, profilo), «Chiama ƎE» e «Contesta».
- *Inquilino:* 1. il nuovo canone e il documento da firmare, nei tre modi decisi (foglio stampato e caricato, PDF con la firma digitale, in agenzia; CieSign non è nominata, come vuole DESIGN.md); 2. trovare e scaricare la ricevuta di agosto 2027 (tredici ricevute da novembre 2026, una sostituita); alla fine «Due modi di vedere le ricevute», dalla striscia: «Mesi a pillola» ed «Elenco semplice» da aprire e confrontare.
- *Scelte dell'agente per la prova* (non sono decisioni di prodotto o di design): l'incasso è di Sara Pini e non di Luca Benassi, così la storia dell'inquilino resta coerente (novembre pagato il 3); i tre ruoli seguono gli stessi giorni (l'operatore controlla il 16, la proprietaria approva il 17, l'inquilino firma dopo); il foglio caricato a mano risulta «Firmato», la firma digitale «Caricata, da verificare», come in DESIGN.md; nel documento e nelle ricevute il posto del testo legale è fatto di righe tenui, senza la nota sul parere; per l'inquilino c'è un riquadro «Da fare» sotto la casa, come «Da fare» del proprietario. Sono tolte dalle schermate le note per chi progetta («dato inventato», «da decidere con il collaboratore»).
- *Verifiche nel browser (Chromium):* telefono 390 × 844 e computer 1366 px, chiaro e scuro; tutti e sette i compiti percorsi da un clic all'altro; tastiera (Tab sui riquadri, Invio, fuoco sul titolo della schermata nuova, pulsanti spenti raggiungibili che dicono il perché); nessun errore nella console, nessuno scorrimento orizzontale. Non provata su un telefono vero né con uno screen reader vero.

*Messaggio pronto da copiare* (sostituisce quello del 23/10; il link va condiviso prima dal menu «Condividi»):

> Ciao! Ti mando una prova di Connetto, il servizio che stiamo progettando per ƎE: https://claude.ai/artifact/5H1bQMDiAxmFqXnHeXKvSc
>
> Si usa come un'app vera, ma nomi, case e importi sono inventati e non parte nessun messaggio, pagamento o chiamata. All'inizio scegli chi essere: operatore di ƎE (meglio dal computer), proprietaria o inquilino (meglio dal telefono). In alto trovi «Prova a fare questo», con pochi compiti per ognuno; con «Cambia ruolo» passi a un altro. Ci vogliono 15–20 minuti. Poi rispondimi, anche in poche parole:
>
> Come operatore
> 1. Al banco su cosa lavori: computer fisso, portatile, tablet o telefono? La stampante per le ricevute è lì vicino?
> 2. Hai fatto l'incasso di Sara Pini. Oggi, quando un inquilino viene a pagare, cosa fai passo per passo e quanto ci metti più o meno? Nella prova manca qualcosa, o qualcosa ti rallenterebbe?
> 3. Nella coda del mattino le cose sono in quest'ordine: consegne in ritardo, contestazioni, canoni non pagati, consegne da fare, nuovi canoni ISTAT da controllare, documenti mancanti, scadenze. È l'ordine giusto per il tuo lavoro? Cosa guarderesti per primo la mattina?
>
> In generale
> 4. Connetto dà del «tu» a proprietari e inquilini. Voi, in agenzia e per iscritto, date del «tu» o del «Lei»?
>
> Come inquilino
> 5. Alla fine trovi due modi di vedere le ricevute, «Mesi a pillola» ed «Elenco semplice». Per un inquilino che cerca una ricevuta, quale ti sembra più facile? Oggi gli inquilini vi chiedono le ricevute? Per cosa?
>
> Il nuovo canone ISTAT (lo trovi in tutti e tre i ruoli)
> 6. Oltre all'aggiornamento ISTAT, ci sono altri documenti che vorresti far firmare a inquilini o proprietari con Connetto? Quali?
> 7. Nella prova il nuovo canone vale dal 1° dicembre anche se l'inquilino firma il documento più tardi: la firma serve solo a provare che l'ha ricevuto. Per ƎE va bene così? Oppure oggi, senza la firma, l'aumento non si applica?
>
> Grazie!

Perché queste domande:
- 1–5 sono quelle del 23/10, riscritte partendo dai compiti: la 1 decide su cosa si disegna per primo il banco e come si stampa; la 2 controlla l'incasso, il passaggio più frequente; la 3 l'ordine della coda, punto fermo del 23/10; la 4 la voce al «tu»; la 5 conferma o cambia la scelta provvisoria delle ricevute dell'inquilino.
- 6 e 7 sono quelle del 2/11/2026 sul documento da firmare ([Firma dell'inquilino sul nuovo canone ISTAT](../../architettura-percorso-1/issues/20-firma-inquilino-istat.md)): la 6 dice se servono altri documenti da firmare oltre all'ISTAT; la 7 controlla la scelta dell'utente che il canone cambi alla decorrenza anche senza firma.
- Restano fuori, come deciso, le domande raccolte in DESIGN.md per il collaboratore (chi firma le ricevute, il foglio della ricevuta annullata, la proprietaria che non risponde sul nuovo canone, i tre tipi di casa del disegno): si possono aggiungere se l'utente lo chiede.

Il ticket resta `claimed` finché arrivano le risposte; si registrano in sintesi, senza nomi.
