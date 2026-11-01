# Condividere un file verso Connetto da un'altra app

Type: grilling
Status: claimed
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Proposta del collaboratore di ƎE, riferita dall'utente il 1/11/2026. Chi ha poca pratica con il telefono, spesso le persone più anziane, fatica a caricare un documento ricevuto su WhatsApp o scaricato da un sito: salvarlo in File, aprire Connetto, ritrovare la cartella. L'idea: dal documento si tocca «Condividi» e fra le app compare **Connetto**; il file entra subito e **dopo** si sceglie dove metterlo. È una buona idea da tenere, da migliorare o da togliere? C'è una soluzione migliore?

Cosa si sa già ([docs/ricerca/importo-documento.md](../../../docs/ricerca/importo-documento.md), §4):
- **Android:** un sito può comparire in «Condividi» solo se è installato sulla schermata Home, con Chrome (Web Share Target, sperimentale). Il service worker può tenere il file nel telefono finché non è scelto dove va.
- **iPhone, sul web:** Safari non lo permette; il file si sceglie solo dalla pagina.
- **iPhone, app (dopo, §11):** con un'estensione di condivisione Connetto compare in «Condividi».

Da analizzare nella sessione, una domanda alla volta:
1. Chi lo userebbe davvero nel pilota, e su quali telefoni: quanti clienti di ƎE hanno un iPhone, quanti Android?
2. Le alternative per chi è poco pratico, su iPhone senza app. Per esempio:
   - una guida passo passo nella pagina;
   - inoltrare il documento a un indirizzo email della propria casa (SES può ricevere a Milano, oggi non attivato: ARCHITECTURE.md, «Servizi esterni»);
   - farlo al banco con l'operatore;
   - «Recenti» nel selettore dei file.

   WhatsApp verso un numero dell'agenzia passerebbe da Meta, contro la scelta sui dati: da valutare solo con un parere.
3. «Prima entra, poi scegli dove metterlo»: dove resta il file finché non ha un posto (nel telefono o in una cassetta personale sulla piattaforma), chi lo vede, quanto resta. Come si lega al controllo dell'importo, che oggi si propone prima dell'invio.
4. Pilota o dopo: sul web (Android installato), con l'app iPhone, o entrambe; che cosa cambia nel design (DESIGN.md) e nell'accessibilità.

Limiti: nessun account, servizio o messaggio reale; eventuali fatti nuovi con fonti ufficiali in `docs/ricerca/`. Esito: tenere, cambiare o togliere, registrato in PRODUCT.md §12. Serve prima del ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md).
