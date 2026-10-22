# Ricerca: titolarità e privacy dei dati

Type: research
Status: resolved
Blocked by: —
Mappa: [Dalla specifica del percorso 1 al design](../map.md)

## Domanda (Question)

Nel pilota la piattaforma ha un marchio autonomo da ƎE e l'agenzia la usa per il suo servizio sulle case gestite ([PRODUCT.md](../../../PRODUCT.md) §12). Chi è titolare, contitolare o responsabile di ciascun trattamento fra agenzia, chi fornisce la piattaforma, proprietari, inquilini e tecnici, e cosa ne deriva, su fonti ufficiali aggiornate (GDPR, Codice privacy, Garante, EDPB)?

- Ruoli per i dati del percorso 1: scheda della casa, documenti del fascicolo che contengono dati di altre persone, canoni, ricevute, contatti e messaggi di servizio.
- Ruoli per lo spazio privato delle bollette dell'inquilino, che l'agenzia e il proprietario non vedono, e per i dati che il tecnico riceve con un incarico.
- Basi giuridiche, informative (anche per dati non raccolti dall'interessato), accordi fra le parti.
- Conservazione: obblighi civilistici e fiscali per contratti e ricevute; cosa succede a fine locazione e a fine adesione.
- Quando serve una valutazione d'impatto (elenco del Garante) e cosa comporta usare fornitori fuori dall'Unione Europea.
- **Colloqui con i clienti** dello studio: informativa, consenso alla registrazione, chi è titolare, come rendere anonime le sintesi.

Esito atteso: `docs/ricerca/privacy-dati.md`, con le alternative di ruolo e le loro conseguenze, e dove serve un parere professionale (atteso: prima di qualsiasi uso reale).

## Risposta (Answer)

Risolto il 19/10/2026 con la skill `research`, da un agente in parallelo; dettaglio e fonti in [docs/ricerca/privacy-dati.md](../../../docs/ricerca/privacy-dati.md).

- Il ruolo si stabilisce sui fatti, non sul marchio né sul contratto (EDPB, linee guida 07/2020). La ricerca confronta quattro modelli: piattaforma come strumento di ƎE, responsabile di ƎE, modello misto, contitolarità; il misto è il più coerente con le decisioni prese (inferenza).
- Per scheda della casa, fascicolo, canoni, ricevute e messaggi il titolare è ƎE e la piattaforma è probabilmente responsabile (art. 28). Per lo spazio privato delle bollette la piattaforma è probabilmente titolare autonoma, salvo che non sia un soggetto distinto da ƎE. Il tecnico è probabilmente titolare autonomo dei dati dell'incarico.
- Conservazione: nessun termine unico; 10 anni per scritture e corrispondenza di ƎE (art. 2220 c.c.), termini fiscali che dal 2027 passano a un nuovo testo unico (articoli da verificare), canoni prescritti in 5 anni.
- Valutazione d'impatto non chiaramente obbligatoria alla scala del pilota; prima dell'uso reale almeno una verifica scritta.
- I colloqui sono il primo uso reale di dati personali: servono informativa, consenso separato per l'eventuale audio e sintesi per tema che superino i tre criteri di anonimato dell'EDPB (linee guida 02/2026, in consultazione); nel repository solo sintesi verificate e conteggi.
- Una bolletta con nome e indirizzo oscurati contiene ancora identificativi (codice cliente, POD o PDR, IBAN, codice avviso nel QR); caricarla nella sessione la affida al fornitore della sessione.
- Decisioni nuove: chi fornisce la piattaforma, chi vende l'adesione e di chi è lo spazio delle bollette → nuovo ticket [Chi fornisce la piattaforma e chi vende l'adesione nel pilota](11-chi-fornisce-la-piattaforma.md); titolare dei colloqui, audio e verifica professionale dell'informativa → [Materiali per i colloqui](07-materiali-colloqui.md); per quanto l'ex inquilino può scaricare contratto e ricevute → [Specifica del percorso 1: attivazione e canone del mese](09-specifica-percorso-1.md); cosa oscurare → [Prova sulle bollette](08-prova-bollette.md).
- Serve un parere professionale su ruoli e accordi, basi giuridiche, calendario di conservazione (anche con un commercialista), valutazione d'impatto, fornitori fuori UE e prova sulle bollette; per l'informativa dei colloqui, prima di iniziarli.
- Lette da fonte secondaria o solo in parte: artt. 2220 e 2948 c.c., indice del d.lgs. 141/2026, WP248 e parere WP29 05/2014.
