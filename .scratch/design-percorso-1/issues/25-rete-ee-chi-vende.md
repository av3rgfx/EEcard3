# Rete ƎE e chi vende nel percorso 1

Type: prototype
Status: claimed
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

## Commenti (Comments)

**24/11/2026, prototipo** (skill `prototype`, `grilling` e `domain-modeling`). Prova usa e getta con dati inventati, privata: https://claude.ai/artifact/N9ihQ28meZHa9cQQ98WUGm (versione 1; il sorgente sta nella cartella temporanea della sessione, costruito sul telaio del prototipo approvato del 3/11/2026). Sette gruppi di schermate, ognuno con una decisione e le forme alternative dietro un selettore, su telefono e computer, in chiaro e in scuro: da dove si entra; come si mostra l'elenco; dove stanno i testi; chi parla nei testi; rete spenta; la rete per l'operatore; il promemoria del controllo annuale. Professionisti inventati (Marco Tosi, Anna Bellini, Giorgio Lenzi, Elena Marchi, Paolo Valenti); la nota sul rapporto di Giorgio Lenzi è solo un esempio di come appare. Controllato in Chromium (nessun errore della pagina).

*Conflitto trovato, da portare all'utente (decisione 4):* le bozze dei testi del 12/11/2026 (domanda F12) parlano in prima persona («conosciamo», «controlliamo»), mentre DESIGN.md, «Voce», dice che nessuno parla in prima persona nell'app.

**24/11/2026, come si fanno le domande** (richiesta dell'utente, registrata in AGENTS.md). Per le decisioni più complesse una pagina interattiva e visiva con esempi concreti; le domande semplici si fanno direttamente. Piano per questo ticket: pagina visiva per le decisioni 1, 2, 3, 5 e 6; domanda diretta per la 4 (chi parla nei testi) e la 7 (dove sta il promemoria). Pagina delle scelte, aggiornata a ogni decisione: https://claude.ai/artifact/3gjPtMAzhbotUqXH9Jb49h (privata, dati inventati). Decisione 1 presentata il 24/11/2026: da dove si entra nella rete (A riga in ogni casa, consigliata; B voce propria). In attesa della risposta.

*Decisione 1, da dove si entra (utente, 24/11/2026: «Va bene A ma il titolo "Rete ƎE", per chi non è troppo esperto può sembrare vago e poco chiaro»).* **A: una riga in ogni casa** della proprietaria, gestita o senza gestione, in «Altro su questa casa», sotto «I tecnici di questa casa»; l'elenco che si apre è lo stesso da ogni casa; le cinque schede non cambiano. *Scartata:* B, una voce propria (al computer nella barra laterale, al telefono dentro «Profilo»), perché al telefono finisce dove nessuno cerca un notaio e telefono e computer si comporterebbero in modi diversi. *Aggiunta dell'utente:* il nome «Rete ƎE» come titolo della riga è vago per chi è poco pratico. Ne nasce la decisione 1 bis, il nome della riga. Per domain-modeling: «Rete ƎE» resta il termine del glossario, del sito e dell'agenzia; la domanda riguarda solo il testo che il cliente legge nell'app.

*Decisione 1 bis, presentata il 24/11/2026* nella pagina delle scelte: quattro nomi sul telefono, nella casa in vendita e in cima alla pagina che si apre. A «Professionisti per vendere o comprare», sotto «notaio, geometra e altri che ƎE conosce», con «Rete ƎE» piccolo in cima alla pagina (consigliata); B «Notaio, geometra e altri professionisti»; C «Rete ƎE: professionisti della zona»; D «Rete ƎE», com'era. In attesa della risposta.
