# Direzione del percorso 1

Type: prototype
Status: claimed
Blocked by: 01, 03
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Quale direzione di design sceglie l'utente per il percorso 1, guardando direzioni **davvero diverse** sulle stesse schermate e con gli stessi dati inventati?

Prototipo usa e getta (skill `prototype`, ramo UI), con un selettore fra le direzioni (tre è il punto di partenza; il numero si conferma con l'utente). Ogni direzione cambia un asse vero ([docs/rules/WORKFLOW.md](../../../docs/rules/WORKFLOW.md)): struttura e navigazione, gerarchia, densità; e porta la sua proposta d'identità (colori, caratteri, icone), in chiaro e in scuro: il tema segue il dispositivo e lo scuro si mostra per primo ([DESIGN.md](../../../DESIGN.md), «Punti fermi del percorso 1», 23/10/2026). Tutte restano dentro le Apple Human Interface Guidelines lette nella [ricerca](01-ricerca-hig-web.md) e rispettano i punti fermi di [Cosa vede per primo ciascuno](03-cosa-vede-per-primo.md).

Schermate campione, su telefono e desktop: la casa vista dal proprietario con il canone del mese e la consegna; la stessa vista dall'inquilino, con dove e quanto pagare e le ricevute; il lavoro in coda dell'operatore e la registrazione di un incasso al banco; una situazione difficile (contestazione o consegna in ritardo); un'email di servizio. Solo dati inventati, importi nel formato «9.876,54 €».

Il prototipo si mostra all'utente come pagina privata da aprire su telefono e desktop; non entra nel repository. Nel ticket restano domanda, direzioni mostrate in breve, scelta e motivo; la direzione scelta va in [DESIGN.md](../../../DESIGN.md) con data e motivo. L'utente può scegliere una direzione, combinarne due con una regola chiara o chiederne altre.

## Commenti (Comments)

**23/10/2026, primo giro (skill `prototype`, ramo UI; `grilling` per le scelte).**
- Domande prima di costruire, una alla volta. *Quante direzioni:* tre (consigliato; scartate due, rischio di estremi, e quattro, differenze più sottili). *Su cosa differiscono:* ciascuna un modo diverso di organizzare il servizio fra i tre compatibili con le HIG ([ricerca](../../../docs/ricerca/hig-web.md) §16), con densità e identità proprie (consigliato; scartate «stessa organizzazione» e «solo l'aspetto»).
- Mostrato come pagina privata, sorgente nella cartella temporanea della sessione, controllato prima nel browser (telefono 390 px e desktop 1366 px, scuro e chiaro, nessuno scorrimento orizzontale, nessun errore). Sei schermate: proprietario, inquilino, coda dell'operatore, incasso al banco, consegna in ritardo, email «canone pagato».
  - *A · Schede:* schede in basso e barra laterale; densità media; caratteri di sistema; accento azzurro.
  - *B · Pagina casa:* una frase sul mese, ricerca in vista, dettagli in fila; poca informazione, testo grande, titoli in Literata; accento salvia.
  - *C · Elenco e dettaglio:* elenco e dettaglio affiancati sul desktop, in fila sul telefono; densità alta, IBM Plex Sans; accento indaco.
- Raccomandazione dell'agente: B per proprietari e inquilini, C per l'operatore, con un'identità sola.
- **Risposta dell'utente:** nessuna convince, soprattutto per l'estetica. Sembrano funzionali; l'utente vuole qualcosa di più gradevole e bello, che attiri l'attenzione anche di chi ha poco interesse: facile **e** bello da vedere. C può andare per l'operatore, ma va migliorata. Riferimenti visivi in arrivo dall'utente (foto). Si rifà il giro.
