# Accesso: come entrano clienti e operatori

Type: grilling
Status: claimed
Blocked by: 04, 08, 09, 13
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Con i fatti della [ricerca sull'accesso](04-ricerca-accesso-codice.md) e la forma scelta ([Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md)), come funziona l'accesso deciso: codice via email o SMS, senza password, account creato al banco ([PRODUCT.md](../../../PRODUCT.md) §10.2 e §12, 23/10/2026; DESIGN.md, «Accesso, tessera e situazioni comuni (percorso 1)»).

1. **Chi lo fa:** la funzione d'accesso del servizio scelto oppure una nostra, e con quale invio dei codici.
2. **Regole:** durata del codice, tentativi, sessione, uscita da tutti i dispositivi, recupero quando la persona cambia numero o email, verifica al banco dell'email o del cellulare.
3. **Operatore di ƎE:** deciso il 30/10/2026 nel ticket [Entrare con un codice via email: il conflitto con le fonti](13-codice-email-conflitto.md): passkey obbligatoria su un account di lavoro a parte, recupero dall'utente. Qui resta come: computer condiviso al banco o no (risposta 1 del collaboratore di ƎE, [ticket](../../design-percorso-1/issues/05-collaboratore-guarda-operatore.md); se è condiviso, telefono personale o chiavetta), durata della sessione, uscita.
4. **Un solo accesso per più ruoli** su case diverse (§4) e il percorso 2, dove il tecnico entra con un incarico.
5. **Conflitti:** il conflitto con le fonti è chiuso il 30/10/2026 (ticket 13): codice per i clienti con regole più severe, passkey facoltativa per i clienti, lista di controllo della sicurezza dell'accesso (limiti a tentativi e invii, sessioni, consultazione in serie, recupero dell'account di lavoro). Qui si fissano i valori.

Limiti: nessun account o servizio. Scelta in ARCHITECTURE.md («Integrazioni»); un cambio di prodotto in PRODUCT.md §12.

## Commenti (Comments)

**30/10/2026, da [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md).** Punto 1 in parte risolto: l'accesso non è un servizio del fornitore, sta dentro l'applicazione con una libreria matura scelta con il linguaggio ([ticket 09](09-linguaggio-framework-componenti.md)). Qui restano regole, valori e invio dei codici.

**30/10/2026, da [Linguaggio, framework e componenti](09-linguaggio-framework-componenti.md).** Libreria scelta: **Better Auth**, con i plugin del codice via email, del codice via SMS e delle passkey (SimpleWebAuthn), su React Router. Le impostazioni predefinite vanno strette: 5 minuti e 3 tentativi per codice, codice salvato in chiaro, registrazione automatica di chi non ha un account, limiti alle richieste in memoria. Servono 10 minuti, il codice come impronta, tentativi per account non azzerati da un codice nuovo, limiti agli invii nel database, nessuna registrazione automatica. Corregge solo l'ultima versione. Fatti in [docs/ricerca/stack-web.md](../../../docs/ricerca/stack-web.md).

**31/10/2026, sessione di grilling** (skill `grilling`, `domain-modeling`, `ponytail`). Prima delle domande, verifica di Better Auth 1.7.14 sulla documentazione e sul codice pubblicato: [docs/ricerca/accesso-codice.md](../../../docs/ricerca/accesso-codice.md), §5. Domande una alla volta.

1. **Codici sbagliati.** Domanda: quando fermarsi, contando tutti i codici della stessa persona. Risposta dell'utente: **A** (consigliato). Ogni codice si spegne dopo 3 errori; dopo 5 errori di fila una pausa di 15 minuti; dopo 10 errori di fila l'accesso con il codice si ferma, la persona riceve un avviso e l'operatore lo vede in «Oggi» e lo riapre, al banco o per telefono (il codice va comunque alla stessa email o allo stesso numero). Circa 1 possibilità su 100.000 per chi tira a indovinare. Scartati: solo pause crescenti (in un anno circa 1 su 300); blocco dopo 5 errori (chi è poco pratico resta fuori più spesso).
