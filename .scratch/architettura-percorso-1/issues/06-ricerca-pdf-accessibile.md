# Ricerca: ricevute in PDF leggibili con lo screen reader

Type: research
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Le ricevute del canone e della consegna sono un foglio A4, uguale nel PDF, **fatto dai dati**, con il fatto scritto al posto di firma e marca, e il PDF **si legge con lo screen reader** ([DESIGN.md](../../../DESIGN.md), «Ricevute stampate (percorso 1)»). Come si produce oggi un PDF così, e con quali strumenti. Serve a [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md).

1. **Cosa vuol dire «leggibile»:** PDF con i tag, PDF/UA (ISO 14289), testo vero e ordine di lettura, lingua, titolo; come si verifica (per esempio con veraPDF o PAC). Se serve anche PDF/A per conservarlo nel tempo, e cosa chiede.
2. **Le strade:** stampare in PDF una pagina web con un browser senza schermo; un programma che compone il PDF da un modello; una libreria che lo scrive dal codice. Per ciascuna: due o tre strumenti rappresentativi, se producono PDF con i tag o PDF/UA, licenza, uso di un carattere proprio (Manrope, già con licenza OFL: [docs/ricerca/licenze-grafiche.md](../../../docs/ricerca/licenze-grafiche.md) §1), se girano dentro la piattaforma senza mandare dati fuori.
3. **Stampa al banco:** se lo stesso PDF si stampa bene dal browser dell'operatore su A4, senza margini aggiunti.

Limiti: solo pagine ufficiali pubbliche (norme, documentazione degli strumenti, licenze), con la data di lettura e il link a ogni fonte primaria. Nessun account o servizio. Prove locali solo con dati inventati e strumenti già presenti nell'ambiente, senza installazioni globali; ogni prova si dichiara come tale. Non si consultano repository o decisioni di tentativi precedenti. Il valore legale del PDF senza firma resta al parere legale (§10.10). Nessuna scelta. Risultati in `docs/ricerca/pdf-ricevute.md`.

## Risposta (Answer)

Ricerca chiusa il 30/10/2026, svolta da un agente in background con la skill `research`: [docs/ricerca/pdf-ricevute.md](../../../docs/ricerca/pdf-ricevute.md).

- **Due livelli:** PDF con i tag (testo, struttura, lingua, titolo) e PDF/UA-1, che chiede anche le decorazioni marcate, i caratteri incorporati e la dichiarazione nei metadati. Si verifica con veraPDF (libero) e PAC 2026 (gratuito, Windows), più una lettura con NVDA o VoiceOver: ordine di lettura e testi alternativi li controlla una persona.
- **PDF/A:** le linee guida AgID lo indicano per la conservazione, con preferenza per PDF/A-2a; se valgano per l'agenzia lo dice il parere.
- **Chromium (Playwright/Puppeteer):** prova con dati inventati: PDF con i tag, lingua, titolo, tabella e logo con testo alternativo; non PDF/UA (niente metadati PDF/UA, disegni non marcati come decorazione); Manrope variabile diventa «Type 3», con file statici no (da verificare con veraPDF). Vantaggio: lo stesso HTML fa anteprima, foglio e PDF.
- **Typst** (Apache-2.0) scrive sempre i tag e blocca l'esportazione se PDF/UA-1 o PDF/A non sono rispettati; **WeasyPrint** (BSD) parte da HTML e offre PDF/UA e PDF/A, senza garanzia di validità. **PDFKit** (MIT) e **iText** (AGPL o commerciale) fanno PDF/UA con la struttura scritta a mano nel codice.
- **Stampa al banco:** foglio A4 esatto, margini interni ampi e stampa a grandezza reale; resta da provare sul visore PDF e sulla stampante dell'agenzia.
