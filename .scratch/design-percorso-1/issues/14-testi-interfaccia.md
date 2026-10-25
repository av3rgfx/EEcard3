# Testi dell'interfaccia del percorso 1

Type: grilling
Status: resolved
Blocked by: —
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Quali parole usa la piattaforma nelle schermate già approvate del percorso 1, per operatore, proprietario e inquilino, su telefono e desktop? Si tratta di etichette, titoli, pulsanti, stati, stati vuoti, errori, conferme e avvisi.

Fonti da rispettare:
- [GLOSSARY.md](../../../GLOSSARY.md), le parole decise, e PRODUCT.md §8 per quelle provvisorie;
- la voce in [DESIGN.md](../../../DESIGN.md): «tu» anche ai clienti, nessuno parla in prima persona;
- le sezioni di DESIGN.md per ruolo e le «Situazioni comuni»;
- la specifica in PRODUCT.md §10, da non cambiare: se un testo fa emergere un problema di specifica, lo si porta all'utente come conflitto.

Esclusi, perché aspettano il [parere sul nome](08-parere-nome-connetto.md) e il parere legale:
- i testi di email e SMS;
- la scritta del nome;
- il testo delle ricevute stampate.

Come si lavora:
- skill `ux-writing`, più `grilling` e `domain-modeling` per le scelte;
- l'agente fa l'inventario dei testi dai prototipi approvati, che si leggono con lo strumento Artifact, azione «read» (link in STATUS.md, «Prototipi pubblicati»);
- poi propone regole e testi, segnalando dove il glossario non basta o due schermate dicono la stessa cosa in modi diversi.

Le scelte che spettano all'utente si portano una alla volta, in parole semplici, con una raccomandazione motivata. Per esempio:
- come si chiamano i pulsanti principali;
- come si dice un errore;
- quanto è formale una conferma;
- il nome dei mesi e delle scadenze.

Le regole si registrano in DESIGN.md, in una sezione «Testi dell'interfaccia (percorso 1)», insieme ai testi di stati, errori e conferme. Un termine nuovo va nel glossario, con la skill `domain-modeling`. Se il lavoro non sta in una sessione, il ticket si divide per ruolo e lo si annota qui.

## Risposta (Answer)

Chiuso il 25/10/2026. Nove scelte dell'utente, una alla volta, tutte sull'opzione consigliata (la sesta dopo un confronto «Prima / Dopo»): «in agenzia» al posto di «al banco» per i clienti; frasi senza genere, con ruolo e saluti nella forma scelta dalla persona in agenzia; il servizio ti dà del «tu» anche nei titoli («Le tue case», «Chiedi il codice»); «entro» per il canone e «scadenza» solo per la locazione; «Spese» per gli oneri accessori; titolo del mese «Mese: il fatto» e date per intero; cinque stati fissi della consegna, con «Consegnata»; «Case dove abitavi»; «conferma della disdetta». Regole, parole, stati, testi delle situazioni comuni e testi cambiati in [DESIGN.md](../../../DESIGN.md), «Testi dell'interfaccia (percorso 1)». Glossario: «Consegna» con gli stati, nuovi «Oneri accessori», «Contabile», «Ricevuta». In PRODUCT.md §12 la forma con cui rivolgersi, scelta alla creazione dell'account.

Restano fuori, in attesa dei pareri: email e SMS, scritta del nome, ricevute stampate, condizioni. I testi della tessera fisica (scheda «Tessera», «Al banco» dell'operatore) aspettano la [ricerca su contactless, wallet e totem](../../controllo-a/issues/18-ricerca-tessera-contactless-totem.md): oggi dicono «se ƎE la prevede», e ora la tessera fisica c'è (PRODUCT.md §12, 25/10/2026).

## Commenti (Comments)

### Inventario (25/10/2026)
Ticket rivendicato il 25/10/2026, con le skill `ux-writing`, `grilling` e `domain-modeling`. Letti con lo strumento Artifact i cinque prototipi approvati: operatore, proprietario, inquilino, accesso e tessera (versione 5), rifinitura (versione 2). Ogni schermata e ogni variante è stata aperta nel browser e il testo visibile, con le etichette per lo screen reader, raccolto in un elenco fuori dal repository (cartella temporanea della sessione): 11 schermate dell'operatore, 10 del proprietario, 11 dell'inquilino, 10 di accesso e situazioni comuni, 2 della rifinitura, con le loro varianti.

Punti trovati, da decidere o da correggere:
1. Il posto fisico si chiama «banco di ƎE»; «banco» è anche il nome di molte banche, accanto a bonifici e conti.
2. Forme al maschile e al femminile scelte a mano: «Benvenuto/Benvenuta», «Proprietario» per Marta Ferri nella barra laterale e «Proprietaria» altrove, «Non sei stata tu?», «Da chiudere con lui».
3. Chi parla nei titoli: «Le mie case» accanto a «Le tue case · proprietario» e «La tua tessera»; il pulsante «Mandami il codice» parla con la voce della persona, gli altri pulsanti le danno del «tu»; «Ti aiutiamo» fa parlare il servizio in prima persona (vietato dalla «Voce»).
4. «Scadenza» con due significati nella stessa schermata: il canone del mese («scade giovedì 5») e le date della locazione («prossima scadenza 1° febbraio 2027»).
5. Tre nomi per la stessa voce: «Oneri», «Oneri in acconto», «Oneri accessori in acconto».
6. Il titolo del mese con schemi diversi: «Ottobre: il canone è pagato» (proprietario), «Novembre è pagato» (inquilino), «Canone di novembre: scadeva il 5». Date a volte abbreviate («1° feb 2027», «2 set»), giorni «lun–ven».
7. Stati della consegna: «Inviata», «Confermata», «Consegnata»; il glossario ne elenca tre (da consegnare, consegnato, consegna in ritardo), la specifica (§10.3) anche «inviata» e «confermata».
8. «Locazione» per i clienti, accanto a «casa in affitto» nell'invito.
9. «Ricevuta» per tre cose diverse: la ricevuta del canone, la «ricevuta della registrazione» (documento) e la «ricevuta della disdetta» (un'email di conferma).
10. Errori di forma: «dal ottobre 2026» sulla tessera; separatori, maiuscole e «%» non uniformi.

### Decisioni dell'utente (25/10/2026), una alla volta
1. **Il posto: «in agenzia».** Nei testi per proprietari e inquilini si dice «in agenzia» («Paga in agenzia, Via dell'Indipendenza 21», «Ricevuto da ƎE in agenzia il 3 ottobre»); nello spazio dell'operatore la pagina «Al banco» e le parole di lavoro restano. Scartati: «al banco» ovunque (si può leggere «in banca» accanto ai bonifici), «allo sportello» (fa pensare a uffici pubblici). Consigliata dall'agente.
2. **Maschile e femminile: frasi neutre più una scelta.** Le frasi si scrivono senza genere dove viene naturale («Non l'hai chiesto tu?», «Da chiudere con Luca Benassi»). Per le poche parole che non si possono evitare (il ruolo, il saluto del benvenuto e del ritorno) vale la forma scelta dalla persona in agenzia quando l'operatore crea l'account; si cambia chiamando ƎE. Mai indovinata dal nome. Scartati: tutto al maschile (freddo o sbagliato per una proprietaria), solo frasi neutre (ruolo e benvenuto diventano rigidi). Consigliata dall'agente. Aggiunge un dato alla creazione dell'account (§10.2), senza cambiare la specifica.
3. **Chi parla: sempre il servizio che ti dà del «tu».** Titoli e sezioni «Le tue case», «La tua tessera» (per le locazioni finite vedi la decisione 8); il pulsante della pagina d'accesso diventa «Chiedi il codice» (era «Mandami il codice»). «Ti aiutiamo» diventa «Aiuto per entrare» (correzione dell'agente: il servizio non parla in prima persona). Scartati: titoli con «mio» (due voci da tenere distinte), lasciare il misto. Consigliata dall'agente.
4. **«Entro» per il canone, «scadenza» per la locazione.** Per i clienti il canone del mese si dice con «entro» («Paga entro giovedì 5», «Da pagare entro il 5»; passata la data, «Era da pagare entro il 5»); «scadenza» e «Scadenze» restano alle date della locazione (registro, disdetta, ISTAT, fine del contratto). Nello spazio dell'operatore resta «scaduto il 5 ottobre». Scartato: «scadenza» per tutte e due, distinta solo dal contesto. Consigliata dall'agente.
5. **«Spese» per gli oneri accessori.** Nelle righe brevi «Spese» («Canone 1.180,00 € · Spese 95,00 €»); nel dettaglio del mese, una volta, «Spese in acconto (oneri accessori)» con una riga di spiegazione. Scartati: «Oneri accessori» ovunque (preciso ma lungo), «Spese condominiali» (non sempre esatto). Consigliata dall'agente. *Correzione dell'agente dopo la scelta:* nella spiegazione proposta c'era «il conto finale lo fa ƎE», che la specifica non dice; il testo diventa «Sono un anticipo: il conto finale si fa a parte».
6. **Titolo del mese e date.** Chiesto dall'utente di vedere la differenza: confronto usa e getta «Prima / Dopo» con sei situazioni (https://claude.ai/artifact/2A1w9suz98aQk9YDkTCsNv, privata, dati inventati). Scelto il «Dopo»: un solo schema «Mese: il fatto», uguale per proprietario e inquilino («Novembre: paga entro giovedì 5», «Novembre: il canone è pagato», «Novembre: era da pagare entro giovedì 5», «Ottobre: la consegna è in ritardo»); mesi sempre per intero; giorno della settimana solo quando la data è a meno di una settimana da oggi, prima o dopo; orari per intero nelle frasi («dal lunedì al venerdì, 9:00–12:30»), abbreviati solo nelle righe piccole con la forma intera per lo screen reader. Scartato: il «Prima», con titoli diversi per ruolo e abbreviazioni. Consigliata dall'agente.
7. **Stati della consegna.** Cinque etichette fisse, sempre con la riga che dice chi ha fatto cosa: «Da consegnare», «Inviata» (bonifico di ƎE che aspetta il «Ricevuto»), «Consegnata» (sotto «confermata da te il 16 settembre» o «firmata da te in agenzia»), «In ritardo», «Contestata». «Confermata» non è più un'etichetta. Glossario aggiornato («Consegna»). Scartato: «Confermata» come etichetta, accanto a «Inviata» si capisce meno che il denaro è arrivato. Consigliata dall'agente. Coerente con §10.3, che chiama «consegna confermata» il passaggio e «inviata» il bonifico.
8. **«Case dove abitavi».** La sezione dell'inquilino per le locazioni finite si chiama per quello che contiene, «Case dove abitavi» (era «Locazioni passate»; la scheda di chi non ha una casa attuale, «Locazioni», diventa «Case»). «Locazione» resta nelle frasi dove serve la parola precisa («La locazione è finita il 31 ottobre», «Scadenze della locazione»), accanto a «contratto». Scartati: «locazione» ovunque (parola da ufficio), «affitto» per i clienti (si confonde con il canone del mese). Consigliata dall'agente.
9. **«Ricevuta» solo per il denaro.** «Ricevuta» resta per la ricevuta del canone e per il nome ufficiale «ricevuta della registrazione»; dopo la disdetta arriva una «conferma della disdetta» («Ti arriva subito una conferma via email, con data, ora e cosa hai scelto»). Il nome esatto lo può ritoccare il parere legale. Scartato: lasciare «ricevuta della disdetta». Consigliata dall'agente.
