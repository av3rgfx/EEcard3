# Ricerca: trovare professionisti in zona, a mano, con collegamenti esterni o con Google

Type: research
Status: resolved
Blocked by:
Mappa: [Proposte del collaboratore di ƎE del 4/11/2026](../map.md)

## Domanda (Question)

Punto 9 dell'[audio](../audio-4-novembre.md). Il collaboratore accenna a trovare o scegliere professionisti in zona «tramite ricerca Google», senza dire come. Confrontare, in quest'ordine, tre forme e dire capacità, limiti, costi e regole d'uso solo dove pertinente:

1. **Inserimento a mano** dall'operatore (come i tecnici della casa del 3/11/2026): cosa serve per tenerlo aggiornato.
2. **Collegamenti esterni** che aprono una ricerca fuori da Connetto: Google Maps con un indirizzo di ricerca (senza chiave né costi?), gli elenchi pubblici degli ordini e dei collegi (per esempio la ricerca dei notai del Consiglio Nazionale del Notariato, gli albi di ingegneri, architetti e geometri), con le loro condizioni di riuso.
3. **Integrazione con Google** (Places API, versione attuale): cosa restituisce per una ricerca di professionisti in zona, prezzi e soglie gratuite attuali, obblighi di attribuzione e di mostrare i risultati, limiti a conservare o copiare i dati, regole sull'uso fuori da una mappa Google, account e fatturazione richiesti.

Per ciascuna: chi verifica e aggiorna i contatti; come si distingue un risultato trovato online da un professionista conosciuto dall'agenzia; cosa potrebbe stare sul sito pubblico e cosa solo nello spazio riservato. Solo documentazione e condizioni ufficiali, con la data di lettura; **nessun account, chiave o chiamata alle interfacce**. Riusare [mercato.md](../../../docs/ricerca/mercato.md) se pertinente. Risultati in `docs/ricerca/professionisti-in-zona.md`.

## Risposta (Answer)

Chiusa il 4/11/2026, fatta da un agente in background: [docs/ricerca/professionisti-in-zona.md](../../../docs/ricerca/professionisti-in-zona.md), 24 fonti lette il 4/11/2026.
- **A mano** (la scheda dei tecnici del 3/11/2026): nessun costo oltre al tempo dell'operatore, che verifica l'iscrizione sugli albi e la annota. È l'unica forma in cui l'agenzia sa chi c'è nell'elenco (inferenza). Sul sito pubblico i nomi solo con il consenso del professionista.
- **Collegamenti esterni:** un indirizzo di ricerca di Google Maps funziona senza chiave e senza costi e non rientra nelle condizioni di Google Maps Platform, ma la persona esce da Connetto. Gli albi di ingegneri, architetti e geometri si cercano per nome e ordine, non per zona: servono a verificare, non a trovare. L'albo degli architetti vieta usi non autorizzati dei dati: collegarsi sì, copiare i dati in Connetto no.
- **Integrazione Google** (condizioni per lo Spazio economico europeo dall'8/7/2025): con le Places API i contenuti non si mostrano con nessuna mappa e solo per nove usi elencati, nessuno chiaramente un elenco di professionisti; fa eccezione il riquadro già pronto Places UI Kit (10.000 ricerche gratis al mese, poi 1 $ ogni 1.000). Vietato copiare nomi e indirizzi, si conserva solo l'identificativo del luogo; attribuzione obbligatoria e separazione dai contenuti dell'agenzia. Servono un account Google Cloud, un conto di fatturazione e una chiave.
- **Limiti:** sito del Notariato non raggiungibile il 4/11/2026; nessuna condizione di riuso trovata per l'albo dei geometri; non lette le condizioni della prova gratuita di Google; prezzi solo in dollari. Pareri: privacy e usi permessi da Google, se si sceglie l'integrazione.

## Commenti (Comments)
