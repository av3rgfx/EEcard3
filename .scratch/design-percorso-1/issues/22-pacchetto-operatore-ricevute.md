# Pagina del pacchetto: telaio, operatore e ricevute

Type: prototype
Status: resolved
Blocked by: 21
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

La prima metà della pagina «Connetto, percorso 1» regge come riferimento per il controllo B? Si costruisce:
- il telaio della pagina: la storia del mese di una casa (circa 14 tappe), l'indice «Per ruolo», l'interruttore «Situazioni», telefono e computer, chiaro e scuro, e accanto a ogni schermata le regole che applica;
- le 11 schermate dell'operatore, com'è approvato, con le regole venute dopo (testi, dati limite, interazioni, foto);
- le due ricevute stampate (canone e consegna), foglio e PDF.

Regole: [DESIGN.md](../../../DESIGN.md), «Pacchetto per il controllo B (percorso 1)» e «Componenti e token» (valori esatti), poi le sezioni di ogni schermata. Gli spazi fra gli elementi si fissano qui, con una scala corta, e si registrano in «Componenti e token».

Proposta di partenza per le tappe (dell'agente, da confermare con l'utente nella pagina):
1. attivazione in ufficio; 2. in agenzia con il proprietario (incarico, adesione); 3. primo accesso e tessera; 4. la casa a inizio mese; 5. l'inquilino paga in agenzia; 6. la consegna e il «Ricevuto»; 7. il bonifico al proprietario con la contabile; 8. la scadenza passata e più mesi aperti; 9. la consegna in ritardo; 10. una contestazione e la ricevuta corretta; 11. il nuovo canone ISTAT; 12. documenti, scadenze e foto; 13. la disdetta dell'adesione; 14. la fine della locazione e la casa che esce dalla gestione. Fuori dalla storia, dall'indice: coda vuota, «Oggi», profilo, «Chiama», più case e più ruoli, più proprietari, stati comuni.

Revisione dell'esperienza (decisione dell'utente del 26/10/2026, [DESIGN.md](../../../DESIGN.md), «Pacchetto per il controllo B»): prima di ridisegnare ogni tappa, una scheda breve per compito (passi, cosa deve sapere la persona, dove può sbagliare, cosa togliere o anticipare, proposte), con le skill `ux-research` (valutazione euristica) e `ux-strategy`. Le proposte all'utente come «prima e dopo», una alla volta; le schede restano qui sotto «Commenti». Se il ticket supera una sessione resta `claimed` e la sessione seguente riprende dalla tappa successiva.

Come si lavora (HITL): skill `prototype` (ramo UI); pagina privata usa e getta, sorgente fuori dal repository, solo dati inventati. I sorgenti delle prove si leggono con lo strumento Artifact (link in [STATUS.md](../../../STATUS.md)). Verifica in Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, ricaricando per ogni schermata; contrasti rimisurati con i valori di «Componenti e token». Un problema trovato si porta all'utente come conflitto, una scelta alla volta.

## Risposta (Answer)

**Sì, regge** (27/10/2026, dopo due sessioni). La prima metà della pagina «Connetto, percorso 1» è costruita: https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF (privata, usa e getta, solo dati inventati; versione 6).
- *Telaio:* la storia di Via dei Tigli 14 in 14 tappe (la 7 nell'altra casa di Marta), con «Il denaro» a ogni tappa, l'indice «Per ruolo», l'interruttore «Situazioni», telefono e computer, chiaro e scuro, e accanto a ogni schermata le regole che applica.
- *Operatore:* tutte le schermate approvate, ridisegnate con le regole venute dopo: attivazione e documento (tappa 1), «Al banco» della proprietaria (2), «Al banco» dell'inquilino, incasso e incasso registrato (5), consegna (6 e 9), coda con il canone non pagato e la consegna in ritardo (8 e 9), contestazione e correzione di una ricevuta (10), nuovo canone ISTAT (11), coda vuota e «Oggi» (fuori dalla storia).
- *Ricevute:* canone e consegna come lettera A4, foglio e PDF; la ricevuta annullata e quella che la sostituisce, per il canone e per la consegna corretta.
- *Revisione dell'esperienza:* una scheda per tappa (sotto «Commenti»), le scelte dell'utente una alla volta, ciascuna con un confronto affiancato in un'immagine (nove nella sessione 2), tutte sull'opzione consigliata; il riquadro della casa sul computer è nato da una segnalazione dell'utente. Le regole cambiate sono in [DESIGN.md](../../../DESIGN.md), «Spazio dell'operatore (percorso 1)», con data e motivo; gli spazi in «Componenti e token». Nessun cambio di prodotto.
- *Domande nuove, non di design:* la marca sulla ricevuta che ne sostituisce un'altra (parere fiscale); il ritiro del foglio annullato e la proprietaria che non risponde sul nuovo canone prima della decorrenza (collaboratore di ƎE); cosa segnalano i servizi d'invio sui messaggi non arrivati (architettura, passo 7).
- *Verifiche:* in Chromium, ricaricando per ogni schermata, su una copia con `<!doctype html>`: 420 combinazioni nella sessione 2 (15 viste × 7 larghezze × chiaro e scuro × telefono e computer, «Situazioni» acceso), senza errori, senza scorrimento orizzontale, senza elementi della pagina fuori dal bordo, Manrope caricato. L'interno delle cornici guardato a occhio nelle immagini. Nessuna prova con persone, screen reader veri o iPhone vero.

## Commenti (Comments)

**27/10/2026, sessione 1 (in corso).** Pagina del pacchetto pubblicata come pagina privata, usa e getta: https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF. Il sorgente sta nella cartella temporanea della sessione; solo dati inventati.

- **Telaio** mostrato all'utente: la storia di Via dei Tigli 14, interno 3 (proprietaria Marta Ferri, inquilino Luca Benassi, operatrice Giulia Neri) in 14 tappe. Ogni tappa ha data, cosa succede, chi è coinvolto e «Il denaro», cioè chi passa soldi a chi e in che stato. Sotto, le schermate di chi è coinvolto, ognuna con le regole che applica; quelle che valgono per tutte sono scritte una volta per tappa. In alto «Per ruolo» (indice), «Situazioni», «Telefono / Computer», «Chiaro / Scuro». «Fuori dalla storia» raccoglie coda vuota, «Oggi», profilo, «Chiama», più case e ruoli, stati comuni. Le schermate della seconda parte sono segnaposto.
- **Scelta 1 (tappe):** le 14 tappe proposte (consigliata). La tappa 7, bonifico alla proprietaria con la contabile, si svolge nell'altra casa di Marta, Via del Pratello 12 (inquilina Chiara Monti), perché in Via dei Tigli 14 Luca paga in agenzia. *Scartate:* 13 tappe con il bonifico fuori dalla storia; 13 tappe con scadenza passata e consegna in ritardo insieme.

**Scheda di revisione, tappa 1: attivazione in ufficio** (skill `ux-research`, valutazione euristica di Nielsen; `ux-strategy`, il compito dell'operatore). Parere esperto, non evidenza con persone.
- *Compito:* creare la scheda della casa con persone, rapporti e dati della locazione, caricare i documenti che ƎE ha, segnare «non serve» con il motivo, preparare l'incontro in agenzia (PRODUCT.md §10.2). *Esito che conta:* il tempo di ogni attivazione dentro le 1–1,5 ore al giorno (D1) e nessun dato mancante che faccia uscire sbagliate ricevute, consegne e ISTAT.
- *Cosa deve sapere:* cosa blocca l'attivazione (solo incarico e adesione della proprietaria, §10.2.3) e cosa si completa dopo.
- *Dove può sbagliare:* (3, grave) la barra «6 di 10» in cima fa credere che servano tutti e dieci i documenti; (3) «Non serve» compare anche sull'incarico, senza il quale la casa non si attiva (D3); (2) i dati della locazione mostrati sono sette, senza stipula, estremi della registrazione e dati dell'incarico, da cui dipendono ricevute e consegne; (2) «Carica» salva senza anteprima, a differenza della contabile; (regola già decisa, non proposta) mancano «Foto della facciata» e «Disegno della facciata» nella scheda dell'operatore.
- *Proposte e scelte dell'utente*, «prima e dopo» con confronti affiancati in immagini:
  1. **In cima le 2 cose che bloccano** (consigliata): «Per attivarla mancano 2 cose», incarico e adesione di Marta, con «Apri «Al banco»»; il conteggio passa all'elenco, che diventa «Documenti della casa · 6 di 10 pronti»; incarico e fogli delle adesioni dicono «Serve per attivarla», senza «Non serve». Scelta: **Dopo**. L'utente ha notato una formattazione strana del riquadro con la casa sul computer (disegno piccolo e centrato, testo a capo a ogni riga nella colonna larga 600 px).
  2. **Riquadro con la casa sul computer:** A, in tutta la larghezza sopra le due colonne, disegno a sinistra alto quanto il testo (consigliata, come il riquadro in cima dei clienti); B, nella colonna con il disegno sopra e il testo sotto. Scelta: **A**, per la scheda della casa e «Al banco».
  3. **Tutti i dati della locazione** (consigliata): quattro gruppi (contratto, canone del mese, fisco e registro, deposito) con i mancanti «da inserire» e la riga «Dall'incarico». Scelta: **Dopo**.
  4. **Anteprima prima di salvare un documento** (consigliata): prima pagina con il nome del documento e la casa, «Salva il documento» e «Scegline un altro», come la contabile. Scelta: **sì**.
- **Spazi fra gli elementi** (stessa schermata con tre scale, al computer e al telefono): A 4, 8, 12, 16, 24, 32, 48 (consigliata, vicina alle prove approvate); B 4, 8, 16, 24, 32, 48, 64, più aria, che sul telefono manda a capo pulsanti e scelte; C 4, 6, 10, 14, 20, 28, 40, più fitta. Scelta: **A**, registrata in DESIGN.md, «Componenti e token».

**Scheda di revisione, tappa 2: in agenzia con la proprietaria** («Al banco» per Marta Ferri).
- *Compito:* in una visita, con la persona che aspetta: incarico con i suoi dati, adesione su un foglio separato, informativa, verifica dell'email e account, tessera fisica (§10.2.2). *Esito che conta:* la casa attiva in una visita, con un foglio firmato uguale ai dati che usa Connetto.
- *Cosa deve sapere:* cosa fare adesso e in che ordine; quando la casa diventa attiva.
- *Dove può sbagliare:* (3) i dati dell'incarico (termine di consegna, parziali, compenso, dove paga, a chi si consegna, numero visibile) non hanno un posto prima della firma: il foglio firmato e i dati possono divergere, e un termine sbagliato fa scattare ritardi falsi; (2) l'elenco «Da chiudere con» non ha ordine, mentre all'attivazione l'incarico viene prima; (2) il momento in cui la casa diventa attiva non si vede (regola già decisa: conferma al suo posto); (1) la tessera esiste solo dopo l'adesione.
- *Proposte e scelte dell'utente:*
  1. **I dati dell'incarico prima della firma** (consigliata): sei campi nella riga, poi «Stampa l'incarico». Scelta: **Dopo**.
  2. **Le cose da chiudere in ordine** (consigliata): numerate, con «Adesso:» in cima, solo all'attivazione. Scelta: **Dopo**.
  - Applicata come regola già decisa, nella situazione «Dopo le due firme»: conferma «Via dei Tigli 14 è attiva» e tessera arancione.

**Scheda di revisione, tappa 5: l'inquilino paga in agenzia** («Al banco» per Luca, incasso, incasso registrato, ricevuta del canone).
- *Compito:* trovare Luca con la tessera, registrare l'incasso del mese più vecchio, stampare, firmare, applicare il bollo quando serve e consegnare la ricevuta (§10.3). *Esito che conta:* una ricevuta giusta al primo colpo, perché una sbagliata va annullata e sostituita (§7.3), e pochi minuti al banco.
- *Cosa deve sapere:* quale mese paga, quanto, con che mezzo; cosa fare sul foglio dopo.
- *Dove può sbagliare:* (3) il mezzo è già scelto su «Contanti»: con un pagamento in carta la ricevuta esce sbagliata (è proprio l'esempio di correzione della prova approvata); (2) dopo la registrazione «firma e, se serve, il bollo» lascia a Giulia decidere se serve il bollo, che Connetto sa già (sopra 77,47 €); (regola già decisa) l'anteprima accanto al modulo era un riassunto, ora è la lettera A4 approvata in piccolo; (1) «Ultimi pagamenti» vuoto al primo mese: ora dice perché.
- *Proposte e scelte dell'utente:*
  1. **Il mezzo si sceglie ogni volta** (consigliata): nessun mezzo scelto, pulsante spento con il perché, nell'anteprima «da scegliere». Scelta: **Dopo**. Nella stessa risposta l'utente ha notato che l'icona della ricevuta (`receipt` di Lucide) porta il dollaro: sostituita con `receipt-text` e regola scritta in DESIGN.md, «Forme».
  2. **Cosa fare sul foglio, detto per intero** (consigliata): quattro passi dopo la registrazione, con il bollo deciso da Connetto sopra 77,47 €. Scelta: **Dopo**.

**Scheda di revisione, tappa 6: la consegna e il «Ricevuto»** (lato operatore: registrare la consegna; ricevuta della consegna).
- *Compito:* entro il termine dell'incarico, registrare la consegna con riepilogo, compenso e fattura, scegliere il mezzo dell'incarico, caricare la contabile del bonifico (§10.3, D15). *Esito che conta:* «Inviata» solo con la prova, ricevuta completa, nessun ritardo falso.
- *Dove può sbagliare:* (3) si registra senza contabile: Marta riceve «Inviata» senza prova; (2) il numero della fattura del compenso non ha un controllo e la ricevuta può uscire senza; (1) «Contanti in agenzia» va a capo nel pulsante stretto.
- *Proposta e scelta dell'utente:* **Niente consegna senza contabile e fattura** (consigliata): pulsante spento con il perché, fattura «da inserire». Scelta: **Dopo**. Correzione dell'agente: etichetta «Contanti».

**Scheda di revisione, tappe 8 e 9: la scadenza passata e la consegna in ritardo** (la coda e i suoi dettagli).
- *Compito:* a inizio giornata, scorrere la coda in ordine fisso, aprire la voce, fare la cosa giusta. *Esito che conta:* nessuna voce che tocca la fiducia della proprietaria resta ferma; nessun sollecito all'inquilino (§10.5).
- *Dove può sbagliare:* (2) la voce «canone non pagato» non ha un dettaglio nella prova approvata: Giulia non vede che Marta è già stata avvisata né che a Luca non si scrive; con il modello della consegna avrebbe in vista «Registra l'incasso» senza la persona al banco; (1) il numero della coda nella barra laterale non coincideva con quello della pagina (corretto).
- *Proposta e scelta dell'utente:* **Il canone non pagato: cosa è successo e cosa no** (consigliata). Scelta: **Dopo**. La consegna in ritardo usa la pagina della consegna con l'avviso ambra già approvato.

**Fine della sessione 1 (27/10/2026).** Fatte le tappe 1, 2, 5, 6, 8 e 9 dell'operatore e la ricevuta del canone e della consegna (lettera A4 approvata, foglio e PDF). Restano per la sessione 2: tappa 10 (contestazione, correzione di una ricevuta, ricevuta annullata e sostituita), tappa 11 (nuovo canone ISTAT), «Fuori dalla storia» per l'operatore (coda vuota, «Oggi»). Il ticket resta `claimed`.

**27/10/2026, sessione 2.** Ripresa la pagina del pacchetto con lo strumento Artifact (azione «read»); stesso indirizzo. Le schermate che mancavano vengono dalla prova approvata dell'operatore e dalla prova delle ricevute, ridisegnate con le regole di oggi.

**Scheda di revisione, tappa 10: la contestazione e la ricevuta corretta** (skill `ux-research`, valutazione euristica di Nielsen; `ux-strategy`, il compito dell'operatore). Parere esperto, non evidenza con persone.
- *Compiti:* (a) chiudere una contestazione di Marta Ferri sulla consegna di gennaio con un esito (confermato, corretto con una nuova versione, non risolto) e il motivo (PRODUCT.md §10.6); (b) correggere la ricevuta del canone n. 512/2027 uscita con il mezzo sbagliato, annullandola o sostituendola con il motivo (§10.3, §7.3). *Esito che conta:* la fiducia della proprietaria torna con una risposta chiara e una prova del denaro; lo storico resta leggibile e non nasce un doppio importo (§7.3–7.5).
- *Cosa deve sapere:* cosa fa ciascun esito e chi riceve cosa; con «corretto», cosa cambia nei conti e quanto denaro deve ancora passare; nella correzione, quale dato cambia e cosa fare con il foglio.
- *Dove può sbagliare:*
  - (3, grave) nella contestazione «Corretto» è già scelto all'apertura: un clic su «Registra l'esito» chiude la contestazione con l'esito sbagliato (lo stesso schema del mezzo già scelto, corretto nella tappa 5); i tre esiti non dicono cosa succede né a chi;
  - (2) «Non risolto» vale per un disaccordo fra proprietario e inquilino che ƎE non decide (§10.6, §9): su una consegna di ƎE non ha senso, ma è scelto come gli altri;
  - (3, grave) con «Corretto» la nuova versione si vede solo nel motivo scritto a mano: mancano i conti prima e dopo, la differenza da mandare e la sua prova; la ricevuta della consegna resta quella sbagliata (§7.4, i passaggi del denaro distinti);
  - (3, grave) nella correzione il pulsante «Annulla» (esci) sta accanto alla scelta «Annulla» (annulla la ricevuta): la stessa parola per due azioni opposte, una delle quali non si torna indietro;
  - (2) «Sostituisci» chiede solo il motivo: il dato giusto (il mezzo) non si corregge da nessuna parte, e la nuova ricevuta lo prende da chissà dove;
  - (2) dopo la sostituzione c'era solo un avviso che sparisce: niente passi sul foglio (stampa, firma, bollo, il foglio vecchio) né chi vede cosa;
  - (regola già decisa, non proposta) anteprime delle due ricevute come lettere A4 con fascia e timbro; conferma al suo posto dopo l'esito e dopo la sostituzione.
- *Proposte e scelte dell'utente*, «prima e dopo» con confronti affiancati in immagini, al computer:
  1. **L'esito si sceglie ogni volta** (consigliata): nessun esito scelto all'apertura, pulsante spento con il perché finché mancano esito e motivo; sotto ogni esito la conseguenza e chi riceve il messaggio; «Non risolto» spento con il perché sulle consegne di ƎE (vale per un disaccordo fra proprietario e inquilino). Scelta: **Dopo**. *Scartate:* «Non risolto» sempre acceso; com'era.
  2. **«Corretto»: la nuova versione e la prova del denaro** (consigliata): conti prima e dopo, quanto è già arrivato e quanto va mandato adesso, contabile obbligatoria della differenza, ricevuta della consegna annullata e sostituita (con l'anteprima), consegna di nuovo «Inviata» fino al «Ricevuto». Scelta: **Dopo**. *Scartate:* senza sostituire la ricevuta; com'era.
  3. **Annullare o sostituire, senza equivoci** (consigliata): «Annulla la ricevuta» e «Sostituisci la ricevuta» con la riga di quando si usa e cosa succede al canone; con «Sostituisci» mese, importo e mezzo già compilati, con il cambiamento segnato; «Lascia com'è» per uscire. Scelta: **Dopo**. *Scartate:* solo i nomi distinti; com'era.
  4. **Dopo la sostituzione, i passi sul foglio** (consigliata): stampa la nuova, firma, marca da bollo sopra 77,47 €, dalla alla persona e ritira il foglio vecchio, che resta in agenzia; poi chi vede cosa. Due punti restano da verificare: la marca sulla ricevuta che ne sostituisce un'altra (parere fiscale) e il ritiro del foglio vecchio (collaboratore di ƎE). Scelta: **Dopo**. *Scartate:* senza il ritiro; com'era.
- Correzione dell'agente trovata guardando le immagini: nella ricevuta il nome nascosto «Enrico Erca» si vedeva sopra il testo del mezzo quando conteneva «ƎE» (anche nella ricevuta della consegna della tappa 6), perché lo stile dell'etichetta «Mezzo» prendeva tutti i testi della riga. Corretto nella pagina.

**Scheda di revisione, tappa 11: il nuovo canone ISTAT** (la voce della coda e il suo dettaglio).
- *Compito:* all'anniversario, controllare il nuovo canone che Connetto calcola con la variazione ufficiale dell'ISTAT, o inserire il dato a mano se manca, e mandarlo alla proprietaria, che lo approva prima che valga o sceglie di non chiederlo; l'inquilino è avvisato prima (PRODUCT.md §10.4, D18). *Esito che conta:* un canone giusto per un anno intero di ricevute e consegne; nessun ritardo falso se l'indice esce tardi.
- *Cosa deve sapere:* cosa vuol dire «Controllato»: le condizioni (clausola e misura, regime non in cedolare, anniversario), il calcolo e la fonte; cosa succede dopo e a chi.
- *Dove può sbagliare:*
  - (3, grave) «Controllato» chiede di confermare senza mostrare cosa controllare: le condizioni del contratto sono una frase in fondo, la formula non c'è e la fonte è un testo senza collegamento;
  - (2) «Inserisci il dato a mano» ha lo stesso peso del pulsante principale, ma serve solo se il dato manca o è diverso dalla fonte; il dato a mano non chiede da dove viene (§7.8);
  - (2) dopo il controllo non si vede cosa succede: approvazione della proprietaria (che può non chiederlo), avviso all'inquilino prima della decorrenza, nuovo totale del mese con le spese;
  - (1) la data della tappa e la fonte: l'indice del mese indicato nel contratto esce a metà del mese dopo, quindi il controllo si sposta dal 20 ottobre al 16 novembre 2027 (correzione dell'agente nella storia, dati inventati);
  - (regola già decisa, non proposta) l'avviso «mai un ritardo» per l'indice uscito tardi; conferma al suo posto dopo l'invio.
- *Domanda aperta, non di design:* cosa succede se la proprietaria non risponde prima della decorrenza (il canone resta quello di prima? si avvisa ƎE?). Da chiedere al collaboratore di ƎE.
- *Proposte e scelte dell'utente:*
  1. **Cosa vuol dire «Controllato»** (consigliata): tre parti numerate, cioè il contratto lo prevede (clausola e misura, regime non in cedolare, anniversario), il calcolo scritto per intero e la fonte con «Apri la fonte»; «Inserisci il dato a mano» diventa una riga sotto il pulsante, da usare se il dato manca o è diverso, e chiede da dove viene. Scelta: **Dopo**. *Scartate:* calcolo in chiaro con i due pulsanti uguali; com'era.
  2. **Cosa succede dopo il controllo** (consigliata): quattro passi, cioè il controllo di oggi, la proprietaria che approva o sceglie di non chiederlo (il canone resta quello di prima), l'avviso all'inquilino prima della decorrenza, il nuovo totale del mese con le spese e il canone vecchio nello storico. Scelta: **Dopo**. La mancata risposta della proprietaria prima della decorrenza resta una domanda per il collaboratore di ƎE. *Scartate:* senza il totale; com'era.

**Scheda di revisione, fuori dalla storia: coda vuota e «Oggi»** (venerdì 13 novembre 2026, dati inventati).
- *Compiti:* capire a colpo d'occhio che non resta nulla da fare e cosa arriva in settimana; a fine giornata scrivere l'esito delle chiamate avviate da Connetto e controllare i messaggi partiti (PRODUCT.md §10.5, §10.6). *Esito che conta:* nessuna persona che ha chiamato resta senza risposta; nessun fatto del denaro annunciato a chi non l'ha ricevuto senza che ƎE lo sappia.
- *Dove può sbagliare:*
  - (2) «Niente in coda» con la spunta verde, mentre in «Oggi» restano chiamate senza esito: le chiamate non sono voci della coda (§10.1) e Giulia può chiudere la giornata convinta di aver finito;
  - (2) «Paolo Grandi ha chiamato ƎE»: Connetto registra solo il tocco su «Chiama» (§10.6, «chiamata avviata»), non che la telefonata ci sia stata; la nota che lo spiega sta sotto l'elenco;
  - (2) «Messaggi partiti» non dice se un messaggio non è arrivato (email rifiutata, SMS a un numero non raggiungibile): la proprietaria può non sapere che il canone è pagato e nessuno se ne accorge;
  - (1) «Questa settimana» nella prova approvata elencava consegne che, se il canone è incassato, sono già voci della coda: ora ogni riga dice perché non è ancora da fare («aspetta il canone di Elena Russo»). Correzione dell'agente nei dati;
  - (1) il numero della coda nella barra laterale restava 8 in tutte le schermate: ora è quello della pagina, e sparisce con la coda vuota. Correzione dell'agente, anche nelle tappe 9, 10 e 11.
- *Proposte e scelte dell'utente:*
  1. **La coda vuota ricorda le chiamate senza esito** (consigliata): sotto «Niente in coda» la riga «2 chiamate senza esito · le trovi in «Oggi»» con il pulsante, solo quando ce ne sono. Scelta: **Dopo**. *Scartate:* le chiamate come gruppo della coda (cambierebbe l'elenco dei gruppi); com'era.
  2. **Le chiamate dette per quello che si sa** (consigliata): «Paolo Grandi ha toccato «Chiama ƎE»», da dove, con lo stato «Senza esito» o «Esito scritto»; la spiegazione in cima, sotto «Chiamate avviate da Connetto». Scelta: **Dopo**. *Scartate:* solo la spiegazione in cima; com'era.
  3. **I messaggi non arrivati** (consigliata): in cima a destra il riquadro «Messaggi non arrivati», solo quando ce ne sono, con il motivo, «Controlla il numero» e «Chiamalo»; nell'elenco il messaggio segnato «Non arrivato a uno». Limite detto all'utente: Connetto lo sa solo quando il servizio d'invio lo segnala (numero inesistente, email rifiutata; non lo spam); come, lo decide l'architettura (passo 7). Scelta: **Dopo**. *Scartate:* solo il segno nella riga; com'era.

**Fine della sessione 2 (27/10/2026).** Fatte la tappa 10, la tappa 11, la coda vuota e «Oggi»; nove scelte dell'utente, tutte sull'opzione consigliata. Pagina pubblicata sullo stesso indirizzo (versione 6). Ticket chiuso; il seguito è [Pagina del pacchetto: clienti, accesso e situazioni comuni](23-pacchetto-clienti-situazioni.md).
