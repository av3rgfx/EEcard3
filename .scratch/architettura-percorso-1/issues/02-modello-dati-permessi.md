# Modello dei dati e dei permessi del percorso 1

Type: grilling
Status: open
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
