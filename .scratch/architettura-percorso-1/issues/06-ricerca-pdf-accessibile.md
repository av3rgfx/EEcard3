# Ricerca: ricevute in PDF leggibili con lo screen reader

Type: research
Status: open
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Le ricevute del canone e della consegna sono un foglio A4, uguale nel PDF, **fatto dai dati**, con il fatto scritto al posto di firma e marca, e il PDF **si legge con lo screen reader** ([DESIGN.md](../../../DESIGN.md), «Ricevute stampate (percorso 1)»). Come si produce oggi un PDF così, e con quali strumenti. Serve a [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md).

1. **Cosa vuol dire «leggibile»:** PDF con i tag, PDF/UA (ISO 14289), testo vero e ordine di lettura, lingua, titolo; come si verifica (per esempio con veraPDF o PAC). Se serve anche PDF/A per conservarlo nel tempo, e cosa chiede.
2. **Le strade:** stampare in PDF una pagina web con un browser senza schermo; un programma che compone il PDF da un modello; una libreria che lo scrive dal codice. Per ciascuna: due o tre strumenti rappresentativi, se producono PDF con i tag o PDF/UA, licenza, uso di un carattere proprio (Manrope, già con licenza OFL: [docs/ricerca/licenze-grafiche.md](../../../docs/ricerca/licenze-grafiche.md) §1), se girano dentro la piattaforma senza mandare dati fuori.
3. **Stampa al banco:** se lo stesso PDF si stampa bene dal browser dell'operatore su A4, senza margini aggiunti.

Limiti: solo pagine ufficiali pubbliche (norme, documentazione degli strumenti, licenze), con la data di lettura e il link a ogni fonte primaria. Nessun account o servizio. Prove locali solo con dati inventati e strumenti già presenti nell'ambiente, senza installazioni globali; ogni prova si dichiara come tale. Non si consultano repository o decisioni di tentativi precedenti. Il valore legale del PDF senza firma resta al parere legale (§10.10). Nessuna scelta. Risultati in `docs/ricerca/pdf-ricevute.md`.
