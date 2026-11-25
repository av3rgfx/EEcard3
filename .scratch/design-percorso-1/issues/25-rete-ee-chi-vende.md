# Rete ƎE e chi vende nel percorso 1

Type: prototype
Status: resolved
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come si vedono, nella direzione «Terracotta» e con le regole già decise, le schermate della **Rete ƎE** nel percorso 1? Le regole sono in [PRODUCT.md](../../../PRODUCT.md) §12 (6/11, 8/11, 12/11, 22/11, 23/11 e 24/11/2026) e nel [glossario](../../../GLOSSARY.md) («Professionista», «Rete ƎE», «Indicazione»); non si riaprono. Da disegnare, su telefono e computer, in chiaro e in scuro, con dati inventati:
1. l'**elenco della Rete ƎE** nell'app per i proprietari e per chi ha una casa in vendita (non per gli inquilini): per mestiere, poi in ordine alfabetico, con nome, mestiere, zona, presentazione se data, nota sul rapporto economico se c'è e «Chiama»; la riga sull'ordine; i testi accanto alla rete **in bozza** fino all'avvocato (scelta, albo, frase sui soldi solo se vera per tutti e solo dopo la risposta del collaboratore) e il posto di «chi fa cosa», che non va nelle schermate prima del controllo dell'avvocato;
2. dove si entra nella rete dalla casa del proprietario, gestita e senza gestione, accanto a «I tecnici di questa casa» (3/11/2026), che restano a parte;
3. il mestiere senza nessuno: «non conosciamo nessuno per questo mestiere, chiedi in agenzia» (bozza del 22/11/2026);
4. lo stato **rete spenta**: nessun professionista nell'app né sul sito finché mancano i pareri, poi si accende senza un pilota nuovo; chi vende chiede in agenzia;
5. per l'operatore di ƎE, la **scheda del professionista**: albo controllato, sì all'app e sì al sito (fogli separati), rapporto economico («nessuno» o quale), ritiro del sì in giornata e il **promemoria del controllo annuale**.

Le scelte si fanno con l'utente una alla volta, con una raccomandazione e le conseguenze delle alternative; un cambio di regole visive va in DESIGN.md solo se l'utente lo conferma. Le schermate della casa senza gestione e della valutazione sono già approvate (3/11/2026). Dopo questo ticket, con il [colore della tessera di chi possiede una casa](26-colore-tessera-chi-possiede.md), viene il controllo B.

## Risposta (Answer)

Risolto il 25/11/2026: **schermate della Rete ƎE approvate dall'utente**, otto scelte una alla volta (24 e 25/11/2026). Sei sulla raccomandazione; la 3 diversa dalla raccomandazione; la 1 bis nata da un'osservazione dell'utente. Prova usa e getta con dati inventati, aggiornata alle scelte: https://claude.ai/artifact/N9ihQ28meZHa9cQQ98WUGm (privata, versione 2). Pagina delle scelte: https://claude.ai/artifact/3gjPtMAzhbotUqXH9Jb49h (privata, versione 7). Il sorgente di tutte e due è nella cartella temporanea della sessione e non entra nel repository.
1. **Da dove si entra:** una riga in ogni casa della proprietaria, sotto «I tecnici di questa casa».
2. **Il nome (1 bis):** «Professionisti per vendere o comprare», sotto «notaio, geometra e altri che ƎE conosce»; nella pagina «Rete ƎE» come occhiello.
3. **L'elenco:** una pagina sola con i mestieri in cui c'è qualcuno; in fondo «Non c'è il mestiere che ti serve?».
4. **I testi:** in fondo, sotto «Come sono scelti» (scelta dell'utente, diversa dalla raccomandazione «in cima»).
5. **Chi parla:** nessuna prima persona; aggiornate le bozze F12 e F14 e il contratto con il sito.
6. **Rete spenta:** nessuna riga; «Chiama ƎE» nelle case senza gestione dice «anche per notaio, geometra e altri professionisti».
7. **Per l'operatore:** dentro «Persone», con «Clienti» e «Rete ƎE»; scheda del professionista, «Togli dalla rete» con il motivo, pagina «spenta».
8. **Promemoria:** una voce in coda un mese prima del controllo annuale, in fondo all'ordine.
Regole in DESIGN.md, «Rete ƎE (percorso 1)». PRODUCT.md e GLOSSARY.md non cambiano: «Rete ƎE» resta il termine del dominio, il nome della riga è un testo dell'interfaccia. La pagina del pacchetto per il controllo B non è aggiornata: si aggiorna solo se l'utente lo chiede.

## Commenti (Comments)

**24/11/2026, prototipo** (skill `prototype`, `grilling` e `domain-modeling`). Prova usa e getta con dati inventati, privata: https://claude.ai/artifact/N9ihQ28meZHa9cQQ98WUGm (versione 1; il sorgente sta nella cartella temporanea della sessione, costruito sul telaio del prototipo approvato del 3/11/2026). Sette gruppi di schermate, ognuno con una decisione e le forme alternative dietro un selettore, su telefono e computer, in chiaro e in scuro: da dove si entra; come si mostra l'elenco; dove stanno i testi; chi parla nei testi; rete spenta; la rete per l'operatore; il promemoria del controllo annuale. Professionisti inventati (Marco Tosi, Anna Bellini, Giorgio Lenzi, Elena Marchi, Paolo Valenti); la nota sul rapporto di Giorgio Lenzi è solo un esempio di come appare. Controllato in Chromium (nessun errore della pagina).

*Conflitto trovato, da portare all'utente (decisione 4):* le bozze dei testi del 12/11/2026 (domanda F12) parlano in prima persona («conosciamo», «controlliamo»), mentre DESIGN.md, «Voce», dice che nessuno parla in prima persona nell'app.

**24/11/2026, come si fanno le domande** (richiesta dell'utente, registrata in AGENTS.md). Per le decisioni più complesse una pagina interattiva e visiva con esempi concreti; le domande semplici si fanno direttamente. Piano per questo ticket: pagina visiva per le decisioni 1, 2, 3, 5 e 6; domanda diretta per la 4 (chi parla nei testi) e la 7 (dove sta il promemoria). Pagina delle scelte, aggiornata a ogni decisione: https://claude.ai/artifact/3gjPtMAzhbotUqXH9Jb49h (privata, dati inventati). Decisione 1 presentata il 24/11/2026: da dove si entra nella rete (A riga in ogni casa, consigliata; B voce propria). In attesa della risposta.

*Decisione 1, da dove si entra (utente, 24/11/2026: «Va bene A ma il titolo "Rete ƎE", per chi non è troppo esperto può sembrare vago e poco chiaro»).* **A: una riga in ogni casa** della proprietaria, gestita o senza gestione, in «Altro su questa casa», sotto «I tecnici di questa casa»; l'elenco che si apre è lo stesso da ogni casa; le cinque schede non cambiano. *Scartata:* B, una voce propria (al computer nella barra laterale, al telefono dentro «Profilo»), perché al telefono finisce dove nessuno cerca un notaio e telefono e computer si comporterebbero in modi diversi. *Aggiunta dell'utente:* il nome «Rete ƎE» come titolo della riga è vago per chi è poco pratico. Ne nasce la decisione 1 bis, il nome della riga. Per domain-modeling: «Rete ƎE» resta il termine del glossario, del sito e dell'agenzia; la domanda riguarda solo il testo che il cliente legge nell'app.

*Decisione 1 bis, presentata il 24/11/2026* nella pagina delle scelte: quattro nomi sul telefono, nella casa in vendita e in cima alla pagina che si apre. A «Professionisti per vendere o comprare», sotto «notaio, geometra e altri che ƎE conosce», con «Rete ƎE» piccolo in cima alla pagina (consigliata); B «Notaio, geometra e altri professionisti»; C «Rete ƎE: professionisti della zona»; D «Rete ƎE», com'era. In attesa della risposta.

*Decisione 1 bis, il nome della riga (utente, 24/11/2026: «1 bis A»).* Riga **«Professionisti per vendere o comprare»**, sotto «notaio, geometra e altri che ƎE conosce»; pagina con occhiello «Rete ƎE» e titolo «Professionisti per vendere o comprare casa». Scartati B, C e D come nella pagina delle scelte. Registrato in DESIGN.md, «Rete ƎE (percorso 1)», con la decisione 1.

*Decisione 2, presentata il 24/11/2026* nella pagina delle scelte, con tre reti inventate (quella del pilota, una con un solo notaio, una grande con mestieri futuri) e tre telefoni affiancati: A una pagina sola con i mestieri in cui c'è qualcuno e in fondo «Non c'è il mestiere che ti serve?» (consigliata); B tutti i mestieri scelti dall'agenzia, anche vuoti, con la frase del 22/11/2026; C prima i mestieri, poi i nomi. In attesa della risposta.

*Decisione 2, l'elenco (utente, 24/11/2026: «2 A»).* **Una pagina sola** con i mestieri in cui c'è qualcuno e in fondo, sempre, «Non c'è il mestiere che ti serve?» con la frase del 22/11/2026 e «Chiama ƎE». Scartate B e C come nella pagina delle scelte. Registrato in DESIGN.md.

*Decisione 3, presentata il 24/11/2026:* dove stanno le tre frasi in bozza su come sono scelti. A in cima, in un riquadro chiaro prima dei nomi, con «chi fa cosa» in fondo quando arriverà (consigliata); B in fondo, dopo i nomi; C dietro una riga «Come sono scelti» che apre un foglio. La pagina mostra, sotto ogni telefono, cosa la proprietaria ha letto prima di toccare il primo «Chiama». In attesa della risposta.

*Decisione 3, i testi (utente, 24/11/2026: «3 B», diversa dalla raccomandazione A).* Le tre frasi **in fondo**, dopo i nomi e dopo «Non c'è il mestiere che ti serve?», sotto «Come sono scelti», con la frase sui compensi e «chi fa cosa» quando arriveranno; la nota sul rapporto resta accanto al nome. Limite già detto all'utente nella pagina: chi chiama il primo nome di solito non le legge. Registrato in DESIGN.md.

*Decisione 4, chi parla nei testi:* domanda semplice, fatta direttamente in chat (regola del 24/11/2026).

*Decisione 4, chi parla (utente, 24/11/2026: «4 A»).* **Nessuna prima persona**: «Professionisti che ƎE conosce perché lavora in questa zona…», «Prima di indicarli ƎE controlla… e lo ricontrolla ogni anno»; in «chi fa cosa» il «tu». Aggiornate le bozze per l'avvocato (F12, F14) e la §6 del contratto con il sito, con una voce in docs/consegne-al-sito.md. Registrato in DESIGN.md.

*Decisione 5, presentata il 24/11/2026:* cosa vede il cliente con la rete spenta. A nessuna riga, e nelle case in vendita «Chiama ƎE» dice «anche per notaio, geometra e altri professionisti» (consigliata); B la riga c'è con «non ancora attivi» e apre una pagina «chiedi in agenzia»; C nessuna traccia. In attesa della risposta.

*Decisione 5, rete spenta (utente, 24/11/2026: «5 A»).* Nessuna riga dei professionisti; nelle case senza gestione «Chiama ƎE» dice «anche per notaio, geometra e altri professionisti». Registrato in DESIGN.md.

*Decisione 6, presentata il 24/11/2026:* dove sta la rete nello spazio dell'operatore. A dentro «Persone», con due pulsanti «Clienti» e «Rete ƎE» sopra l'elenco (consigliata); B una quinta scheda «Rete». In tutte e due la scheda del professionista e la pagina «spenta» della prova, gruppo 6. In attesa della risposta.

*Decisione 6, la rete per l'operatore (utente, 24/11/2026: «6 A»).* **Dentro «Persone»**, con «Clienti» e «Rete ƎE»; la scheda del professionista, «Togli dalla rete» con il motivo da un elenco e la pagina «spenta» come nella prova, gruppo 6. Registrato in DESIGN.md.

*Decisione 7, il promemoria:* domanda semplice, fatta direttamente in chat.

*Decisione 7, il promemoria (utente, 25/11/2026: «7 A»).* Una **voce nella coda** un mese prima della scadenza, in fondo all'ordine, finché il controllo non è finito; apre la pagina del controllo annuale. Registrato in DESIGN.md. Chiuso il ticket.

*Verifiche:* prova e pagina delle scelte aperte in Chromium (telefono 390 px e computer 1200 px, chiaro e scuro dove serviva), nessun errore della pagina e nessuno scorrimento orizzontale. Nessuna prova con persone, screen reader o telefoni veri. Revisione OCR non applicabile: nessun codice nel repository, solo documenti; i prototipi usa e getta stanno fuori dal repository.
