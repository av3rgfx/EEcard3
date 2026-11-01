# Ricerca: strumenti per uno scanner nostro dentro la pagina

Type: research
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

All'utente piace l'idea di uno **scanner nostro dentro la pagina** (1/11/2026, dopo la [ricerca sugli scanner già pronti](15-ricerca-scanner-documenti.md)). Prima di scegliere, una ricerca allargata su GitHub, forum e discussioni (Reddit, Hacker News, Stack Overflow e simili): quali strumenti esistenti, **leggeri ma molto funzionali**, trovano i bordi del foglio, raddrizzano, schiariscono e mettono più pagine insieme, tutto nel telefono?

1. Elenco largo dei candidati, oltre a scanic, jscanify e OpenCV.js: licenza, peso, manutenzione, cosa fanno davvero nel codice, cosa ne dicono gli sviluppatori che li usano.
2. Se serve a decidere: una prova usa e getta nel browser, con fogli inventati generati dalla prova, che confronta i migliori su bordi trovati, raddrizzamento e tempo.
3. Una raccomandazione aggiornata per il ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md).

Limiti: nessuna installazione nel progetto e nessun account; nessuna immagine a servizi esterni; fonti con la data di lettura, risultati in [docs/ricerca/scanner-documenti.md](../../../docs/ricerca/scanner-documenti.md). Un post di Reddit o di un forum vale come indizio, non come fonte primaria.

## Risposta (Answer)

Ricerca del 1/11/2026 in [docs/ricerca/scanner-documenti.md](../../../docs/ricerca/scanner-documenti.md), §10, fatta in sequenza dalla sessione principale: l'agente in background non ha avuto il permesso. Letti npm, GitHub (README, licenze, segnalazioni), Hacker News e i risultati del motore di ricerca. Reddit non ha dato discussioni e dal contenitore risponde 403. **Prova pratica:** prima negata dal sistema dei permessi, poi autorizzata dall'utente e fatta lo stesso giorno (ricerca, §10.7).

- **Una decina di strumenti liberi trovati.** scanic resta il migliore: MIT, circa 42 KB, attivo, con prove su foto vere a ogni rilascio. Dalla 1.7.0 (13/10/2026) lavora anche sul **video della fotocamera** e in un Web Worker.
- **Rilevatore IA di scanic:** il codice è MIT, ma il modello è addestrato anche su immagini «solo per ricerca» (MIDV, SmartDoc). Resta spento; se servisse, prima un parere sulle licenze.
- **Scartati:** jscanify e opencv-document-scanner, perché si appoggiano a OpenCV.js (3,5 MB) e jscanify si blocca su iPhone senza soluzione confermata; docuSnap per una licenza contraddittoria, anche se ha l'idea migliore: consigli come «avvicinati» e scatto automatico; scanner-core, nato a metà ottobre 2026 e legato a Next.js; gli SDK commerciali.
- **Da scrivere noi:** lo schiarimento, con algoritmi pubblici e poche decine di righe, e la guida con i consigli, che diventa anche la guida a voce per lo screen reader.
- **Indizi dagli sviluppatori:** la parte difficile è la fotocamera dentro la pagina su Safari di iPhone (memoria, blocchi), non trovare i bordi.

*Parere dell'agente, non decisione:* scanic al centro, in due tempi. Nel pilota la foto dal campo file e poi «Controlla il foglio»; dopo una prova su un iPhone vero, la fotocamera dentro la pagina con riquadro in tempo reale, consigli a voce e scatto automatico. La sesta domanda per il ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md) è nella ricerca, §9.

**Prova con fogli inventati (1/11/2026, autorizzata dall'utente).** Script in [prove/scanner/](../prove/scanner/README.md), esito nella ricerca, §10.7.
- **Come:** dodici scene inventate (contabile e scontrino di prova) a 1500×2000 e a 12 MP, in Chromium su un computer, con ogni richiesta esterna bloccata: nessuna richiesta.
- **scanic** trova il foglio in 9 scene su 12, anche su un tavolo chiaro, con l'ombra e con la piega. Sbaglia a 45° e sul tessuto a righe a 12 MP, e lì la sua fiducia scende (0,18 e 0,65 contro 0,79–0,95). Va rimpicciolita la foto a circa 1000 px prima della ricerca: a 12 MP intera ha scambiato le venature del legno per il bordo.
- **jscanify** è più preciso sui fogli ben staccati dallo sfondo, ma perde il foglio sul tavolo chiaro, sul tessuto e con un angolo fuori, senza accorgersene.
- **Video:** 30 fotogrammi su 30, circa 54 ms l'uno.
- **Schiarimento nostro** di circa 25 righe: toglie l'ombra e uniforma il foglio piegato.
- **Editor di scanic:** nomi degli angoli in inglese e fissi, nessun annuncio allo screen reader, pulsanti senza trascinare nascosti.

*Parere aggiornato, non decisione:* scanic con due regole nostre (foto rimpicciolita, soglia di fiducia intorno a 0,75 che apre l'editor); schiarimento, consigli a voce ed eventualmente l'editor scritti da noi; fotocamera nella pagina dopo la prova su un iPhone vero.
