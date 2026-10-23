# Schermate dell'operatore di ƎE

Type: prototype
Status: resolved
Blocked by: 04
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come sono, nella direzione scelta, le schermate e le situazioni dell'operatore di ƎE ([PRODUCT.md](../../../PRODUCT.md) §10.1–10.6)? Si parte dal lavoro in coda e dall'incasso al banco già visti nel ticket [Direzione del percorso 1](04-prototipo-direzione.md) e si aggiungono:
- l'attivazione d'ufficio: scheda della casa, persone e rapporti, dati della locazione, elenco dei mancanti con «non serve» e motivo;
- l'incontro al banco: incarico, adesioni, accesso verificato ed eventuale aiuto a creare un'email; la tessera digitale (il codice serve solo a trovare il cliente);
- la registrazione di incassi e consegne: pagamenti parziali, arretrati, più mesi su una ricevuta, blocco dei contanti da 5.000 €;
- le ricevute annullate o sostituite con il motivo;
- l'ISTAT da controllare, le contestazioni con l'esito, le chiamate avviate;
- la coda vuota, con il registrato di oggi e le consegne e scadenze della settimana.

Prototipo usa e getta (skill `prototype`, ramo UI) nella direzione «Terracotta» ([DESIGN.md](../../../DESIGN.md), «Direzione del percorso 1»), su telefono e desktop, in chiaro e in scuro con il chiaro per primo. Solo dati inventati, importi come «9.876,54 €», parole del [glossario](../../../GLOSSARY.md); si mostra all'utente come pagina privata e non entra nel repository. Le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata. Quello che si decide va in DESIGN.md come regole, con data e motivo; un problema con la specifica (PRODUCT.md §10) o con i punti fermi si porta all'utente come conflitto. Testi definitivi, rifinitura, dati limite e accessibilità vengono dopo, nei loro ticket.

Serve al ticket [Il collaboratore di ƎE guarda lo spazio dell'operatore](05-collaboratore-guarda-operatore.md).

## Risposta (Answer)

**Approvato dall'utente il 23/10/2026**, dopo un giro di prototipo e la correzione dei pulsanti che uscivano dai riquadri: «va bene, tutto ok». Le regole sono in [DESIGN.md](../../../DESIGN.md), «Spazio dell'operatore (percorso 1)». Tre decisioni dell'utente: la scheda della casa che si riempie un po' alla volta; l'incasso con l'anteprima della ricevuta accanto e nessuna conferma; la pagina «Al banco» per la persona. Il prototipo, usa e getta, resta fuori dal repository ed è il materiale da mostrare al collaboratore di ƎE (ticket 05).

## Commenti (Comments)

**23/10/2026, domande prima di costruire** (skill `grilling`, una alla volta; tutte sull'opzione consigliata):
- *Attivazione:* **una scheda della casa che si riempie un po' alla volta**, con in cima l'elenco di cosa manca e di cosa è pronto; si riprende quando si vuole. Scartate «procedura a passi obbligata», rigida quando manca un documento, e «tutte e due», con due modi da imparare.
- *Registrazione di un incasso:* **anteprima della ricevuta accanto al modulo** e un solo pulsante «Registra e prepara la ricevuta», poi una pagina «Fatto» con «Stampa la ricevuta». Nessuna finestra di conferma: un errore si corregge annullando la ricevuta, che resta nello storico. Scartate «conferma prima», un passaggio in più a ogni incasso, e «conferma solo nei casi delicati», una regola in più.
- *Al banco:* **una pagina «Al banco» per la persona** trovata con «Trova cliente o casa». In cima l'azione più probabile, sotto le cose da chiudere con lei (firme, informativa, verifica dell'accesso, tessera). Scartata «si passa dalla scheda della casa», con più tocchi e la scelta della casa.

**23/10/2026, primo giro mostrato** (pagina privata, sorgente nella cartella temporanea della sessione). Controllato nel Chromium disponibile a 390 px e 1366 px, in chiaro e in scuro, con tutti i casi dell'incasso: nessuno scorrimento orizzontale e nessun errore. Undici schermate in «Terracotta»:
1. lavoro in coda;
2. coda vuota (registrato oggi, settimana);
3. «Al banco» per un inquilino;
4. incasso al banco, con i casi «un mese», «più mesi», «parziale» e «contanti oltre soglia»;
5. incasso registrato;
6. registrazione di una consegna in ritardo;
7. scheda della casa in attivazione, con l'elenco dei mancanti e «non serve»;
8. correzione di una ricevuta;
9. nuovo canone ISTAT da controllare;
10. esito di una contestazione;
11. «Oggi», con le chiamate avviate e i messaggi partiti.

**23/10/2026, correzioni e chiusura.** L'utente ha segnalato pulsanti che uscivano dai riquadri. Un controllo automatico su ogni pulsante, a 360, 390, 768, 900, 1024, 1180 e 1366 px, ne ha trovati 19, quasi tutti fra 900 e 1366 px, dove elenco, dettaglio e barra laterale stavano affiancati in poco spazio.
- *Correzione:* i pulsanti e le etichette vanno a capo; due colonne solo da 1120 px; l'illustrazione ha un'altezza limitata quando la colonna è una sola.
- *Ricontrollo:* nessun elemento fuori dal suo riquadro, nessuno scorrimento orizzontale, nessun errore. Ticket chiuso con l'approvazione dell'utente.
