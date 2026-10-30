# Ricerca: dove far girare la piattaforma e tenere i dati

Type: research
Status: open
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Quali sono le **poche forme reali** con cui una piattaforma web piccola come il pilota (una agenzia, circa 100–200 case, qualche centinaio di persone) può girare con i dati nell'Unione europea, e cosa comporta ciascuna. Serve a [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md). Tre forme da confrontare, con due o tre fornitori rappresentativi per ciascuna:

1. **Servizio gestito «tutto in uno»** (database, accesso, file e funzioni sul server già pronti), con una pagina web sopra.
2. **Un'applicazione unica** su un servizio che la esegue al posto nostro, con un database gestito.
3. **Un server virtuale** tenuto da chi mantiene la piattaforma.

Per ciascuna: dove stanno i dati (regione UE scelta e garantita), contratto sui dati (art. 28 GDPR) ed elenco dei sub-responsabili, backup e ripristino (frequenza, conservazione, ripristino a un momento preciso, prova), file privati, accesso con codice incluso o no, costo indicativo per il pilota, lavoro di manutenzione, ambiente di prova separato, quanto è facile andarsene (esportare dati e file), certificazioni dichiarate. Le regole da rispettare in breve: art. 28, 32 e 44–49 GDPR, linee guida EDPB sui responsabili e sui trasferimenti. Parte da [docs/ricerca/privacy-dati.md](../../../docs/ricerca/privacy-dati.md), che non si ripete.

Limiti: solo pagine ufficiali pubbliche, con la data di lettura e il link a ogni fonte primaria. Nessun account, nessuna prova gratuita, nessun contatto con fornitori. Non si consultano repository o decisioni di tentativi precedenti. Si distingue ciò che dice la fonte da ciò che se ne deduce. Si segnala dove serve un parere professionale. Nessuna scelta: le alternative arrivano all'utente nel ticket di decisione. Risultati in `docs/ricerca/piattaforma-dati.md`.
