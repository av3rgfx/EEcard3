# Pagina del pacchetto: clienti, accesso e situazioni comuni

Type: prototype
Status: claimed
Blocked by: 22
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

La pagina «Connetto, percorso 1» è completa e pronta per il controllo B? Si aggiungono, nel telaio del ticket [Pagina del pacchetto: telaio, operatore e ricevute](22-pacchetto-operatore-ricevute.md):
- le schermate del proprietario (10) e dell'inquilino (11) con la rifinitura «via di mezzo»;
- accesso, benvenuto, tessera, invito ad aderire, profilo, disdetta, fine dei rapporti e stati comuni;
- foto e disegno della casa;
- i posti «in attesa del parere» per email, SMS e scritta del nome;
- la sezione «Cosa resta aperto» (chi la aspetta, cosa tocca, cosa ferma: pilota, lancio, niente);
- se arrivate, le correzioni del collaboratore di ƎE ([ticket](05-collaboratore-guarda-operatore.md)).

Regole: [DESIGN.md](../../../DESIGN.md), «Pacchetto per il controllo B (percorso 1)», «Componenti e token» e le sezioni di ogni schermata.

Revisione dell'esperienza (decisione dell'utente del 26/10/2026, [DESIGN.md](../../../DESIGN.md), «Pacchetto per il controllo B»): prima di ridisegnare ogni tappa, una scheda breve per compito (passi, cosa deve sapere la persona, dove può sbagliare, cosa togliere o anticipare, proposte), con le skill `ux-research` (valutazione euristica) e `ux-strategy`. Le proposte all'utente come «prima e dopo», una alla volta; le schede restano qui sotto «Commenti». Se il ticket supera una sessione resta `claimed` e la sessione seguente riprende dalla tappa successiva.

Come si lavora (HITL): come il ticket precedente (skill `prototype`, poi `accessibility-audit` per un controllo finale sull'intera pagina). Chiuso questo ticket, la pagina è il pacchetto: il controllo B si fa quando ci sono anche le risposte del collaboratore di ƎE e l'architettura (METODO.md, passo 7).

## Commenti (Comments)

**27/10/2026, sessione 1 (in corso).** Ripresa la pagina del pacchetto con lo strumento Artifact (azione «read»); stesso indirizzo, https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF (privata, usa e getta, solo dati inventati). Il sorgente sta nella cartella temporanea della sessione. Le schermate dei clienti delle tappe 2–9 sono ridisegnate dalle prove approvate (proprietario, inquilino, accesso e tessera, rifinitura «via di mezzo», foto della casa) con le regole di oggi di DESIGN.md: telaio con la barra laterale, la tessera piccola e le cinque schede; un solo riquadro in cima con la casa e i dettagli del mese; elenchi puliti; titolo «Mese: il fatto»; «in agenzia»; «Spese»; stati con parola e icona; conferma al suo posto con «Annulla»; scala di spazi, testo e angoli di «Componenti e token». Le immagini della stanza e della tessera vengono dalla prova dell'accesso (solo nei prototipi, come deciso). La ricevuta che scarica Luca è la lettera A4 approvata, presa dalla prima metà della pagina.

**Scheda di revisione, tappa 2: invito ad aderire** (skill `ux-research`, valutazione euristica di Nielsen; `ux-strategy`, il compito e le quattro forze del cambiamento). Parere esperto, non evidenza con persone.
- *Compito:* una proprietaria la cui casa è gestita da ƎE capisce cosa compra con l'adesione e come aderire in agenzia (PRODUCT.md §10.2, promessa di §12, «Controllo A»). *Esito che conta:* decidere in agenzia senza dubbi, con il foglio dell'adesione distinto dall'incarico.
- *Cosa deve sapere:* cosa vedrà ogni mese, quanto costa (posto lasciato), cosa porta, cosa non cambia per il denaro e per la gestione.
- *Dove può sbagliare:* (3, grave) la pagina è pubblica ma il titolo dice l'indirizzo («Segui la tua casa di Via dei Tigli 14»): chi riceve il link inoltrato vede la casa di Marta (§7.1, accesso legato al rapporto con la casa); (2) un elenco di voci obbliga a immaginare la schermata, nessuna frase dice la promessa; (2) le paure che frenano un servizio nuovo («devo pagare in un altro modo?», «se smetto?») hanno una sola riga piccola in fondo; (1) il posto del prezzo sta lontano da «Come aderire».
- *Proposte e scelte dell'utente*, «prima e dopo» con confronti affiancati in immagini, al telefono e al computer:
  1. **L'invito non dice l'indirizzo** (consigliata): titolo uguale per tutti, «Segui la tua casa in affitto, mese per mese», occhiello «Per chi affida la casa a ƎE». Scelta: **Dopo**. *Scartate:* com'era; «indirizzo solo dopo l'accesso» (uguale nei fatti).
  2. **Cosa vedresti, prima di aderire** (consigliata): la promessa in una frase e un riquadro d'esempio della casa con dati dichiaratamente inventati. Scelta: **Dopo**. *Scartate:* solo la frase; com'era.
  3. **Cosa non cambia** (consigliata): tre righe (il denaro passa come oggi, ƎE gestisce come oggi, smetti quando vuoi, da te) e il posto del prezzo accanto a «Come aderire». Scelta: **Dopo**. *Scartate:* solo le tre righe; com'era.

**Scheda di revisione, tappa 3: primo accesso e tessera** (pagina d'accesso e codice, benvenuto, scheda «Tessera»).
- *Compito:* a casa, entrare la prima volta con il codice arrivato per email e trovare la tessera da mostrare in agenzia (§10.2). *Esito che conta:* entrare al primo tentativo, senza telefonate in agenzia; sapere cosa mostrare al banco.
- *Dove può sbagliare:* (2) «Se questa email è registrata in Connetto…» protegge da chi cerca iscritti ma a chi è iscritto suona come un dubbio; (2) al telefono, nel passo del codice, la tessera in posa resta grande ed «Entra» finisce sotto il bordo; (2) due tessere con codici diversi, senza dire quale mostrare né cosa fare se si perde quella fisica.
- *Segnalazione dell'utente durante la revisione:* la targhetta chiara dietro i dati della tessera di rame (decisa il 26/10/2026 per il contrasto) è «bruttissima». Misure dell'agente sui pixel della tessera: testo scuro sul rame puro da 2,1:1 (serve 4,5:1); con una luce morbida senza bordi almeno 6,1:1. Tre varianti a confronto (benvenuto e scheda «Tessera»): A luce morbida senza bordi (consigliata); B dati incisi sul rame puro e ripetuti in testo normale sotto la tessera; C, idea dell'utente, senza targhetta solo nel benvenuto. Scelta: **B**. La tessera diventa decorativa per lo screen reader: i dati si leggono nella riga sotto. Cambia la regola «Tessera di rame: targhetta satinata» di DESIGN.md.
- *Proposte e scelte dell'utente:*
  1. **Il codice detto senza allarmare** (consigliata): «Il codice di 6 cifre parte verso marta.ferri@esempio.it, se è l'email che hai lasciato in agenzia. Di solito arriva entro un minuto». Non rivela comunque chi è iscritto. Scelta: **Dopo**.
  2. **Al telefono «Entra» si vede** (consigliata): dal passo del codice la tessera è più piccola e sale, come nel prototipo dell'accesso. Scelta: **Dopo**.
  3. **Quale tessera mostrare e se la perdi** (consigliata): «In agenzia mostra quella che hai in mano: portano tutte e due a te»; «Se perdi la tessera fisica: chiama ƎE o passa in agenzia, la spengono e te ne danno un'altra subito. Con la tessera nessuno entra in Connetto e nessuno vede i tuoi dati». Scelta: **Dopo**.

**Scheda di revisione, tappa 4: la casa a inizio mese** (casa di Marta e casa di Luca, domenica 1° novembre 2026).
- *Compiti:* Marta vuole sapere a colpo d'occhio come va il mese senza chiedere in agenzia; Luca vuole sapere quanto, entro quando e dove pagare (punti fermi, «Cosa vede per primo ciascuno»). *Esito che conta:* nessuna telefonata in agenzia per sapere come va; Luca in agenzia al primo colpo.
- *Dove può sbagliare:* (2) «Novembre: il canone è da pagare entro giovedì 5» si può leggere come un compito della proprietaria; (2) nel riquadro il canone vale 1.275,00 € mentre sotto si legge 1.180,00 €, e la consegna non ha un importo: il bonifico di 1.211,25 € arriva come una sorpresa (§7, i passaggi del denaro distinti); (2) la casa di Luca non gli ricorda di mostrare la tessera, che serve proprio a trovarlo in agenzia.
- *Proposte e scelte dell'utente:*
  1. **Per Marta non è un compito** (consigliata): «Novembre: Luca Benassi paga entro giovedì 5» e «Per ora non devi fare nulla». Scelta: **Dopo**.
  2. **Il denaro del mese detto per intero** (consigliata): «canone 1.180,00 € e spese 95,00 €»; la consegna con l'importo che arriverà, 1.211,25 €, «1.275,00 € meno il compenso di ƎE, 63,75 €». Scelta: **Dopo**. *Scartate:* solo l'importo della consegna; com'era.
  3. **In agenzia mostra la tessera** (consigliata): in «Dove pagare» di Luca «Mostra la tessera: ti trovano subito» e «Apri la tessera». Scelta: **Dopo**.

**Scheda di revisione, tappa 5: dopo il pagamento e le ricevute** (Luca, martedì 3 novembre 2026).
- *Compito:* sapere che novembre è chiuso, ritrovare la ricevuta, sapere il prossimo pagamento. *Esito che conta:* nessun dubbio di aver pagato due volte o di aver perso una ricevuta (§7.5).
- *Dove può sbagliare:* (regola già decisa, applicata) il prossimo pagamento stava sotto il riquadro: ora è nel riquadro, «Prossimo: dicembre, 1.275,00 €, entro il 5 dicembre» (Schermate dell'inquilino, «Dopo il pagamento»); (2) in «Ricevute» c'è solo novembre: ottobre e i mesi prima, pagati su carta prima di Connetto, sembrano spariti.
- *Proposta e scelta dell'utente:* **Le ricevute di prima di Connetto** (consigliata): sotto i mesi «Prima di novembre 2026 le ricevute sono quelle di carta che ti ha dato ƎE: Connetto non le ha»; nella pagina del pagamento «È la stessa ricevuta che ti hanno dato in agenzia». Scelta: **Dopo**.

**Scheda di revisione, tappa 6: la consegna e il «Ricevuto»** (Marta, martedì 10 novembre 2026; mesi passati).
- *Compito:* confermare la consegna solo quando il bonifico è sul conto; ritrovare il mese chiuso. *Esito che conta:* un «Ricevuto» vero, non dato per fiducia; nessuna telefonata per un bonifico che arriva il giorno dopo.
- *Dove può sbagliare:* (2) c'è solo il pulsante: Marta non vede la contabile che Giulia ha caricato (obbligatoria dal 27/10/2026) e non sa cosa fare se il bonifico non c'è ancora; (2) in «Mesi passati», come in «Ricevute», i mesi prima di Connetto sembrano spariti (allineato alla scelta della tappa 5: una riga dice che sono nei riepiloghi di carta di ƎE).
- *Proposta e scelta dell'utente:* **Prima del «Ricevuto», la prova e l'attesa** (consigliata): «Vedi la contabile» accanto a «Ricevuto»; sotto «Non lo vedi ancora?»: un bonifico arriva di solito entro il giorno lavorativo dopo; se dopo due giorni lavorativi non c'è, chiama ƎE; intanto non devi fare nulla. Scelta: **Dopo**. *Scartate:* solo la contabile; com'era.

**Scheda di revisione, tappa 7: il bonifico alla proprietaria con la contabile** (Chiara Monti e Marta, Via del Pratello 12, giovedì 3 dicembre 2026).
- *Compiti:* Chiara paga con bonifico a Marta e carica la prova; Marta conferma quando vede i soldi (§10.3, D15). *Esito che conta:* la foto giusta inviata una volta; nessun ritardo falso mentre il bonifico viaggia.
- *Dove può sbagliare:* (regola già decisa, applicata) mancava la casa di Chiara prima del caricamento: ora c'è, con intestataria, IBAN e causale da copiare e «Carica la contabile» in cima (Schermate dell'inquilino, «Bonifico al proprietario»); (regola già decisa, applicata) dopo l'invio mancava «Finché non conferma non devi fare nulla, e non ti arriva nessun sollecito»; (2) per Marta la contabile sta sotto il riquadro, al telefono va cercata scorrendo.
- *Proposta e scelta dell'utente:* **La contabile accanto al «Ricevuto»** (consigliata), lo stesso schema della consegna: «Vedi la contabile» e «Non lo vedi ancora?». Scelta: **Dopo**.

**Scheda di revisione, tappa 8: la scadenza passata e più mesi aperti** (Luca, martedì 12 gennaio e febbraio 2027).
- *Compito:* capire che gennaio (poi gennaio e febbraio) è da pagare, quanto in tutto e dove, senza sentirsi rimproverato (§10.5, nessun sollecito). *Esito che conta:* Luca paga in agenzia, il più vecchio per primo; nessuna lite su un pagamento già fatto.
- *Cosa regge* (già deciso): tono calmo senza colore d'allarme, «Da gennaio a febbraio: 2 mesi da pagare» con il totale e «si salda per primo il più vecchio», «Ultimo pagamento» al posto di «Mese scorso».
- *Dove può sbagliare:* (2) se Luca ha pagato e l'incasso non risulta (registrato male), vede solo «Chiama ƎE» senza sapere che è il posto giusto.
- *Proposta e scelta dell'utente:* **«Hai già pagato?»** (consigliata): «Se hai pagato in agenzia e qui non risulta, chiama ƎE: controllano la ricevuta con te. Puoi anche contestare il canone.», nella scadenza passata e nei più mesi aperti. Scelta: **Dopo**.

**Scheda di revisione, tappa 9: la consegna in ritardo** (Marta, martedì 23 febbraio 2027).
- *Compito:* capire che cosa è in ritardo, che il canone di gennaio è pagato e cosa fare. *Esito che conta:* la fiducia regge anche nel ritardo; una telefonata sola, se serve.
- *Dove può sbagliare:* (2) «In ritardo» e «Chiama ƎE» non dicono se qualcuno se ne sta occupando; (2) febbraio non pagato da Luca: Marta ha ricevuto il messaggio ma non sa chi sollecita l'inquilino e può aspettarsi che lo faccia Connetto.
- *Proposte e scelte dell'utente:*
  1. **ƎE lo sa** (consigliata): «ƎE lo sa: una consegna in ritardo è la prima cosa del suo lavoro di oggi. Se vuoi sapere quando arriva, chiama ƎE.» Nessuna data promessa. Scelta: **Dopo**.
  2. **Il canone non pagato detto alla proprietaria** (consigliata): «Ti è arrivato il messaggio «canone non pagato». Connetto non manda solleciti all'inquilino: se serve, è ƎE a sentire Luca Benassi. Non devi fare nulla.» Scelta: **Dopo**.

**Fine della sessione 1 (27/10/2026).** Fatte le schermate dei clienti delle tappe 2–9 (14 schermate più la casa di Chiara con il bonifico, aggiunta perché già decisa) con le loro situazioni: accesso con il codice, codice sbagliato, primo accesso dal link dell'agenzia, retro della tessera, scelta del file e invio della contabile, «Annulla» negli 8 secondi sui due «Ricevuto». Sedici scelte dell'utente, tutte sull'opzione consigliata, più la tessera senza targhetta nata da una sua segnalazione (variante B, non quella consigliata). Le regole cambiate sono in DESIGN.md con data e motivo. Pagina pubblicata sullo stesso indirizzo (versione 9).
- *Verifiche:* in Chromium, ricaricando a ogni combinazione, su una copia con `<!doctype html>`: 224 combinazioni per le tappe 2–9 (7 larghezze × chiaro e scuro × telefono e computer, «Situazioni» acceso), senza errori, senza scorrimento orizzontale, senza elementi della pagina fuori dal bordo e senza elementi che escono dalle cornici dei clienti; Manrope caricato. Controllate anche le altre tappe a 390 e 1366 px in scuro: nessun errore. Contrasto misurato sui pixel della tessera: rame puro da 2,1:1 con il testo scuro (per questo i dati si ripetono sotto); la luce morbida scartata arrivava ad almeno 6,1:1. L'interno delle cornici guardato a occhio nelle immagini, in chiaro e in scuro. Nessuna prova con persone, screen reader veri o iPhone vero.
- *Restano per la sessione 2:* le schermate dei clienti delle tappe 10–14 (contestare; nuovo canone da approvare e in arrivo; documenti, scadenze e foto; disdetta; case dove abitavi e casa fuori gestione), «Fuori dalla storia» per i clienti (profilo, «Chiama», più case, due ruoli, più proprietari, stati comuni, posti in attesa del parere), la sezione «Cosa resta aperto» e il controllo `accessibility-audit` sull'intera pagina. Se non stanno in una sessione, la terza fa «Cosa resta aperto» e l'accessibilità. Il ticket resta `claimed`.

**30/10/2026, sessione 2.** Ripresa la pagina con lo strumento Artifact (azione «read») e le immagini che aveva; stesso indirizzo, versioni 10 e 11. Lette con lo stesso strumento le prove approvate di proprietario, inquilino, accesso e foto. Ridisegnate dalle prove, con le regole di oggi, le schermate dei clienti delle tappe 10–14 e fuori dalla storia, nel telaio dei clienti della sessione 1 (riquadro in cima, elenchi puliti, tessera piccola). Per ogni tappa la scheda di revisione (skill `ux-research`, valutazione euristica di Nielsen; `ux-strategy`, il compito e le quattro forze), parere esperto e non evidenza con persone; ogni proposta mostrata come «prima e dopo» in un'immagine al telefono e al computer e decisa dall'utente una alla volta. Tutte le scelte sull'opzione consigliata.

**Scheda di revisione, tappa 10: contestare** (Marta, lunedì 1° marzo 2027; l'esito il 2 marzo).
- *Compito:* dire cosa non torna sulla voce giusta, sapere cosa succede, capire l'esito. *Esito che conta:* una contestazione sola, sulla voce giusta, senza telefonate per sapere a che punto è.
- *Dove può sbagliare:* (2) modulo vuoto: cosa e mese si scelgono a memoria, senza vedere i conti; (2) dopo l'invio un avviso che sparisce; (2) l'esito «corretto» arriva come un bonifico di 63,75 € senza spiegazione. *Correzione dell'agente:* per una consegna l'esito è «confermato» o «corretto», non «non risolto» (come nello spazio dell'operatore).
- *Scelte:* 1. **Dalla voce**, già compilata, con «Cosa risulta in Connetto» e «Cambia cosa contestare»; anche per l'inquilino. 2. **La conferma resta al suo posto**, con cosa succede e cosa hai mandato. 3. **Esito e conti** in cima: motivo, prima e dopo, la differenza con «Ricevuto», la ricevuta che sostituisce la vecchia. Applicate dalla sessione 1, stessa situazione: «Vedi la contabile» e «Non lo vedi ancora?» accanto al «Ricevuto» della differenza.

**Scheda di revisione, tappa 11: il nuovo canone ISTAT** (martedì 16 e mercoledì 17 novembre 2027).
- *Compiti:* Marta decide sapendo cosa comporta; Luca sa quanto paga da dicembre e perché. *Esito che conta:* decisione in tempo, nessuna sorpresa per l'inquilino.
- *Dove può sbagliare:* (2) «Non lo chiedo» non dice la conseguenza; (2) nessuna data per decidere, e cosa succede senza risposta è una domanda aperta al collaboratore di ƎE; (2) «Variazione ufficiale ISTAT, misura del contratto» è linguaggio da addetti.
- *Scelte:* 1. **Scelte spiegate**: conseguenza sotto i pulsanti, «Non chiederlo quest'anno», «Rispondi entro» (data fissata da ƎE), posto per «Se non rispondi in tempo». 2. **Parole semplici**: «Perché cambia» e il calcolo per intero, per proprietaria e inquilino.

**Scheda di revisione, tappa 12: documenti, scadenze e foto** (giovedì 15 aprile 2027).
- *Dove può sbagliare:* (2) non tutti i documenti dicono chi li vede, «Mostra all'inquilino» non dice fino a quando; (2) «Chiedi a ƎE di occuparsene» lascia il dubbio di aver pagato e il pulsante ancora lì. *Regola già decisa, applicata:* ogni scadenza dice chi la fa e com'è andata (PRODUCT.md §10.4). Foto: nessuna proposta, il flusso deciso il 26/10/2026 ridisegnato.
- *Scelte:* 1. **Chi lo vede, sempre**, con «Mostra a Luca Benassi», durata e revoca. 2. **Conferma nella scadenza**: «Chiesto a ƎE oggi», chi chiama, prezzo fissato da ƎE, «Adesso non paghi nulla».

**Scheda di revisione, tappa 13: la disdetta** (giovedì 10 giugno 2027).
- *Dove può sbagliare:* (3) Marta ha due case ma il riepilogo nomina solo Via dei Tigli 14; con una tessera per adesione l'adesione è una per persona e la disdetta toglie tutte e due; (2) «Cosa succede» è una tabella generica.
- *Scelte:* 1. **Dice le case**, con un posto per la scelta della casa se le condizioni la faranno per casa. 2. **«Cosa cambia per te»** in cinque righe concrete, con i «Ricevuto» da dire a ƎE.

**Scheda di revisione, tappa 14: fine della locazione e casa fuori gestione** (30 novembre 2028; dal 1° gennaio 2029).
- *Correzione della storia:* nella tappa 13 l'adesione finiva il 21 ottobre 2027; il racconto ora dice che Marta ha riattivato il rinnovo a settembre 2027.
- *Dove può sbagliare:* (2) del deposito non si dice nulla, né all'ex inquilino né alla proprietaria; (3) conflitto con D27: con un'adesione per persona, la casa che esce avrebbe tolto anche Via del Pratello 12.
- *Scelte:* 1. **Deposito detto a tutti e due**: all'ex inquilino importo, presso chi, «Connetto non segue la restituzione: chiama ƎE»; alla proprietaria «Da restituire». 2. **L'adesione continua** per le altre case gestite; la casa uscita in sola lettura fino alla fine del periodo pagato. Cambio di prodotto in PRODUCT.md §10.8 e §12.

**Scheda di revisione, fuori dalla storia** (profilo, «Chiama», più case, due ruoli, più proprietari, stati comuni, posti in attesa del parere).
- *Regole applicate:* nel profilo «Vale per le tue 2 case · una tessera sola» e «Come ti chiama Connetto»; «Chiedi il codice» al posto di «Mandami il codice» nel nuovo accesso dopo 30 giorni; senza rete «Vedi la ricevuta» spento con il perché; due tessere per chi ha due ruoli; «Chiama» foglio dal basso al telefono e finestra al centro sul computer.
- *Dove può sbagliare:* (2) con più proprietari non era deciso chi approva il nuovo canone (l'agente aveva scritto «insieme», un'invenzione, tolta).
- *Scelta:* **chi è nell'incarico** approva il nuovo canone, come le conferme; gli altri lo vedono e possono contestarlo. Cambio di prodotto in PRODUCT.md §10.6 e §12.

**Correzioni dell'agente** (nessun cambio di regola): le date del contratto dei clienti allineate a quelle dell'operatore (decorrenza 1° dicembre 2024, prossima scadenza 1° dicembre di ogni anno; prima «1° febbraio 2024»); il foglio «Chiama» usava il nome di classe della lettera A4 e spariva; nella pagina del nuovo canone dell'inquilino «Chiama» e «Contesta» comparivano due volte.

**Fine della sessione 2 (30/10/2026).** Fatte le schermate dei clienti delle tappe 10–14 (proprietaria e inquilino che contestano, nuovo canone da approvare e in arrivo, documenti e scadenze dei due ruoli, aggiunta di una foto, disdetta, case dove abitavi, casa senza inquilino e fuori gestione) e fuori dalla storia, con le situazioni: dopo l'invio della contestazione, l'esito, la casa dell'inquilino con il nuovo canone, la sezione delle foto dopo l'aggiunta, scelta, conferma e fascia della disdetta, la casa che esce, schermata Home, fuori orario, vista a righe, caricamento, vuoto, errore, link scaduto, nuovo accesso. Dodici scelte, tutte sull'opzione consigliata; regole in DESIGN.md e PRODUCT.md con data e motivo. Pagina pubblicata sullo stesso indirizzo (versione 11).
- *Verifiche:* in Chromium, ricaricando a ogni combinazione, su una copia con `<!doctype html>`: 168 combinazioni per le tappe 10–14 e fuori dalla storia (7 larghezze × chiaro e scuro × telefono e computer, «Situazioni» acceso) e 252 per le tappe 1–9, per controllare di non aver rotto nulla: nessun errore, nessuno scorrimento orizzontale, nessun elemento fuori dal bordo o fuori dalle cornici dei clienti, Manrope caricato. Interno delle cornici guardato a occhio nei confronti, in chiaro, e in quattro schermate in scuro. Nessuna prova con persone, screen reader veri o iPhone vero. Revisione OCR non fatta: non c'è codice applicativo e il programma `ocr` non è nell'ambiente.
- *Restano per la sessione 3:* la sezione «Cosa resta aperto» (per ogni voce chi la aspetta, cosa tocca, cosa ferma: pilota, lancio, niente) e il controllo `accessibility-audit` sull'intera pagina. Domande nuove per il collaboratore di ƎE: entro quando la proprietaria risponde sul nuovo canone (data di «Rispondi entro»). Il ticket resta `claimed`.
