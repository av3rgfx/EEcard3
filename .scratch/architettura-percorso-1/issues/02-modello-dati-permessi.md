# Modello dei dati e dei permessi del percorso 1

Type: grilling
Status: claimed
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Che cosa conserva la piattaforma per il percorso 1, come si collegano le cose e **da dove nasce ogni permesso**. Il modello non dipende dallo stack e regge le regole di [PRODUCT.md](../../../PRODUCT.md) §7. Lo stack si sceglie dopo; questo ticket descrive le cose del dominio, non le tabelle. Si decide con l'utente (skill `grilling` e `domain-modeling`):

1. **Le cose e i loro legami:** agenzia, casa, persona, rapporto con la casa (proprietà, locazione, con la durata), incarico di gestione, adesione, tessera, documento con le versioni, canone del mese con le versioni, contabile, incasso, ricevuta, consegna, contestazione, scadenza, messaggio. Quali sono distinte e quali si possono unire senza perdere significato (§7.3, §7.4; GLOSSARY).
2. **I permessi:** come la tabella di §10.7 nasce dal rapporto, dal suo periodo e dalla persona indicata nell'incarico (§7.1, §7.2, §10.6). Come la fine del rapporto toglie l'accesso senza cancellare la storia: l'ex inquilino tiene contratto e ricevute 5 anni, il proprietario vede lo storico senza i dati personali oltre il necessario (§7.11, §10.8). Gli stessi permessi valgono su ricerche, anteprime, PDF ed esportazioni (§7.9).
3. **Cosa non si cancella e cosa sì:** ricevute annullate e sostituite, versioni del canone, chi ha fatto cosa, quando e da quale fonte (§7.8). Le foto si cancellano davvero («togliere cancella», DESIGN.md, «Foto e illustrazione della casa»).
4. **Nessun doppio:** un incasso registrato due volte per errore, per esempio con un doppio tocco o con la rete che cade, non crea due ricevute né due importi (§7.3, §7.5). Un pagamento per più mesi è una ricevuta sola divisa sui mesi (§10.3).
5. **Le misure del pilota** senza servizi esterni di statistiche (§13): per contare i proprietari che vedono lo stato del canone serve registrare che l'hanno visto. Che cosa si registra e chi lo vede.
6. **Il posto per dopo, senza costruirlo:** il tecnico con l'accesso dato dall'incarico (percorso 2), lo spazio delle bollette che il personale di ƎE non vede mai (percorso 3), più agenzie con dati separati. Si decide solo se il modello di oggi lascia il posto, per esempio se ogni dato porta fin da subito la sua agenzia.

Limiti: le parole nuove decise vanno in GLOSSARY.md; il modello in ARCHITECTURE.md («Dati e autorizzazioni»); un ADR solo per una scelta difficile da invertire. Se il ticket è troppo grande per una sessione si divide alla chiusura della prima parte. Si usano solo dati inventati negli esempi.

## Commenti (Comments)

**30/10/2026, da [Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md).** Il **piano carta**: se la piattaforma non va, il banco dà ricevute di carta e l'operatore registra dopo. Il modello deve accogliere un incasso registrato in ritardo, con la data vera dell'incasso e la ricevuta di carta già data, senza contarlo due volte (§7).

**30/10/2026, da [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md).** PostgreSQL su Scalingo, con i file nel database. I permessi legati al rapporto con la casa sono codice nostro, controllato sul server a ogni richiesta, compresi i file.

**30/10/2026, da [Linguaggio, framework e componenti](09-linguaggio-framework-componenti.md).** Stack scelto: TypeScript, React Router, Better Auth, PostgreSQL. Il modello resta del dominio. Quando è deciso, si sceglie lo strumento per leggere e scrivere il database e le migrazioni, nel ticket [Verifica operativa del percorso 1](16-verifica-operativa.md). Better Auth crea le sue tabelle (account, sessioni, passkey, codici): il rapporto con la casa e i permessi restano nostri, controllati a ogni richiesta.

**31/10/2026, da [Accesso: come entrano clienti e operatori](10-accesso.md).** Un account da cliente per persona, con email e/o cellulare, ciascuno di un solo account; i permessi nascono dai rapporti con le case, non dall'account. L'account di lavoro è a parte. Servono nel modello: i conteggi per persona degli errori e degli invii, il blocco del codice dopo 10 errori con chi lo riapre, il tetto giornaliero degli SMS, gli inviti monouso per la passkey dell'operatore. Il tecnico del percorso 2 avrà un account da cliente limitato ai suoi incarichi.

**31/10/2026, sessione di grilling** (skill `grilling`, `domain-modeling`, `ponytail`). Domande una alla volta.

1. **A chi appartiene ogni cosa.** Domanda: da dove sa la piattaforma di chi è un documento, un canone o una ricevuta, per ricavarne chi lo vede. Risposta dell'utente: **A** (consigliato). Quattro contenitori: la **casa** (APE, planimetria, visura, foto della facciata; passano da un inquilino all'altro), la **locazione** (contratto, ricevuta della registrazione, verbale di consegna, luogo del pagamento, canoni del mese, contabili, ricevute, scadenze della locazione, contestazioni; il nuovo inquilino non vede la locazione di prima), l'**incarico di gestione** (incarico, consegne e riepiloghi; solo proprietari), la **persona** (documento d'identità, foglio dell'adesione, tessera e, dal percorso 3, lo spazio delle bollette). Il permesso nasce dal rapporto che la persona ha oggi con il contenitore, secondo la tabella di §10.7, scritta una volta sola; il tipo del file decide il contenitore. L'operatore vede tutto tranne lo spazio delle bollette. Resta il segno sul singolo documento che il proprietario rende visibile all'inquilino. Scartato: una lista di chi vede scelta a ogni caricamento (un errore dell'operatore mostra un documento a chi non deve; la lista va rifatta a ogni cambio d'inquilino).
