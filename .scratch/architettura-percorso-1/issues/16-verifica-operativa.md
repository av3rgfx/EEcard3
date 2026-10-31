# Verifica operativa del percorso 1

Type: grilling
Status: open
Blocked by: 02
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Con lo stack scelto ([Linguaggio, framework e componenti](09-linguaggio-framework-componenti.md): TypeScript, React Router, Better Auth, su Scalingo con PostgreSQL), quali controlli fermano gli errori prima dei clienti e come si accorge l'utente di un guasto, adeguati al pilota. L'utente non legge il codice: i controlli devono essere automatici.

1. **Database:** lo strumento per leggere e scrivere PostgreSQL e le migrazioni, scelto dopo il [modello dei dati](02-modello-dati-permessi.md).
2. **Controlli del codice:** controllo dei tipi, test (regole del dominio, permessi, nessun doppio pagamento), prove nel browser delle schermate, revisione OCR a ogni incremento. I tre buchi di `/security-review` (tentativi sul codice, versioni conservate, dipendenze) e le scelte sulle skill della [ricerca](../../../docs/ricerca/skill-sicurezza-sviluppo.md), «Cosa resta all'utente», una alla volta.
3. **Aggiornamenti:** Better Auth corregge solo l'ultima versione e rilascia ogni pochi giorni; come arrivano gli aggiornamenti e chi li prova.
4. **Log e avvisi di guasto:** cosa arriva all'utente, nei giorni feriali; il foglio «cosa fare se non va» del **piano carta** per l'operatore ([ticket](01-chi-costruisce-e-mantiene.md)).
5. **Ambiente di prova:** per le prove dell'utente con proprietari, inquilini e agenzia simulati da sub-agenti ([PRODUCT.md](../../../PRODUCT.md) §10.9), solo dati inventati.

Già decisi: copie e prova di ripristino ([ticket](08-forma-e-dove-gira.md)); lista di controllo della sicurezza dell'accesso ([ticket](13-codice-email-conflitto.md)), che si precisa nel ticket [Accesso: come entrano clienti e operatori](10-accesso.md). Una prova di attacco fatta da esperti resta un rischio da dichiarare al controllo B.

## Commenti (Comments)

**31/10/2026, da [Accesso: come entrano clienti e operatori](10-accesso.md).** Le regole dell'accesso (ARCHITECTURE.md, «Accesso») vanno coperte da test automatici che girano a ogni aggiornamento di Better Auth: alcune si basano sul codice letto della versione 1.7.14 e possono cambiare. Da provare in particolare: i limiti con richieste contemporanee su PostgreSQL, l'indirizzo vero dietro il proxy di Scalingo, il controllo della verifica dell'utente nelle passkey, il rifiuto del codice per l'account di lavoro, l'SMS che non parte verso numeri non verificati.

**31/10/2026, da [Modello dei dati e dei permessi del percorso 1](02-modello-dati-permessi.md).** Il modello è deciso (ARCHITECTURE.md, «Dati e permessi»; ADR 0003): ora si può scegliere lo strumento del database. Servono: vincoli di unicità nel database per il numero unico di ogni modulo del denaro e per il numero della ricevuta di carta; importi al centesimo esatto; versioni e quaderno dei fatti che non si modificano. Controlli da prevedere: un controllo automatico che ferma la pubblicazione se una pagina o un file non passa dal guardiano; prove dei permessi per ogni tipo di persona (proprietario, coproprietario, inquilino, coinquilino, ex inquilino, proprietario di un'altra casa, operatore); doppio invio e rete che cade; divisione degli incassi al centesimo; stati ricavati dopo annullamenti e sostituzioni. Due lavori a orario: la creazione dei canoni del mese e il conteggio del giorno 10 con la cancellazione delle righe delle misure; da verificare come Scalingo esegue i lavori programmati.
