# Come procedere: dallo studio alla realizzazione

Il percorso di lavoro proposto il 18 ottobre 2026. Non è un piano di sviluppo: dice **in che ordine si prendono le decisioni** e quale skill aiuta in ogni passo. Contenuti, tempi e perimetro emergono dallo studio. L'utente può cambiare l'ordine.

## Principi

1. **Prima le evidenze, poi le schermate.** Un'idea discussa non è un bisogno verificato. Non costruire con qualità da produzione ciò che nessuno ha ancora confermato di volere.
2. **Le decisioni sono dell'utente; i fatti li cerca l'agente.** All'utente si chiedono solo le decisioni, poche alla volta, ognuna con una raccomandazione motivata. I fatti si trovano nelle fonti.
3. **Un prototipo, una domanda.** I prototipi sono usa e getta, rispondono a una domanda precisa e confrontano alternative davvero diverse.
4. **Un fatto in un solo posto.** Idea e requisiti in PRODUCT.md, design in DESIGN.md, tecnica in ARCHITECTURE.md, stato in STATUS.md, ricerche in `docs/ricerca/`, discussioni nei ticket di Wayfinder.
5. **Poco e completo, invece di tanto e a metà.** Quando si costruirà, un percorso intero alla volta (interfaccia, dati, permessi, errori, test), verificato prima del successivo.
6. **Mai dati o servizi reali** senza autorizzazione esplicita.

## Passi

### 1. Riallineamento con l'utente
- Leggere PRODUCT.md e STUDIO.md.
- Discutere con l'utente le tensioni di STUDIO.md §1, a domande con risposta raccomandata (skill `grilling`), e fissare le parole del progetto (skill `domain-modeling`, che crea `GLOSSARY.md` quando un termine è deciso).
- **Risultato:** la **destinazione** dello studio, confermata dall'utente. Per esempio: «scegliere il primo cliente, la promessa e il primo percorso completo, con le evidenze che li giustificano».

### 2. Mappa delle decisioni
- L'utente avvia **Wayfinder** scrivendo `/wayfinder` (la skill non parte da sola).
- La mappa vive in `.scratch/<nome-dello-studio>/map.md`, con un file per ticket in `issues/`. Ogni ticket è una domanda: ricerca, prototipo, discussione o compito.
- Le aree di STUDIO.md diventano ticket solo quando la domanda è precisa; il resto resta nella parte «non ancora specificato» della mappa.
- Wayfinder risolve **un ticket per sessione** (le ricerche possono andare in parallelo).

### 3. Ricerca documentale
- Ticket di tipo ricerca, con la skill `research`: fonti primarie e ufficiali, un file per tema in `docs/ricerca/<tema>.md`, con link e data di lettura per ogni affermazione.
- Distinguere ciò che dice la fonte da ciò che se ne deduce. Segnalare quando serve un parere professionale (legale, fiscale, privacy).
- Prima della ricerca su persone conviene chiudere almeno: canali di pagamento (F), adempimenti dell'affitto (D), norme (I), mercato (J).

### 4. Ricerca con le persone
- Con la skill `ux-research` l'agente prepara piano, criteri di selezione, guida al colloquio e schede di sintesi. L'utente o l'agenzia svolgono i colloqui con clienti, operatori e tecnici veri.
- I risultati entrano nel repository solo anonimi e senza dati personali.
- Il numero di colloqui e le misure si scelgono nel piano, in base alla domanda; nessuna soglia generica.
- Se possibile, una **prova di impegno**: per esempio pre-adesioni o una lettera d'intenti per un pilota. L'interesse a parole non è disponibilità a pagare.
- L'agente non inventa partecipanti, citazioni o risultati.

### 5. Decisioni di prodotto
- Con la skill `ux-strategy`: proposta di valore, compiti da svolgere per la persona (*jobs to be done*), alternative, metriche di successo.
- L'utente decide: primo cliente, promessa, primo percorso completo, prima versione e ciò che resta fuori, organizzazione del servizio, regola sul denaro.
- Si registra tutto in PRODUCT.md (§10–§13).

**Controllo A, prima di design e architettura.** Sono confermati dall'utente:
- primo cliente e promessa;
- primo percorso completo;
- cosa resta fuori;
- chi eroga il servizio;
- se e come la piattaforma tocca il denaro.

### 6. Design
- Riferimento principale: Apple Human Interface Guidelines, adattate alla piattaforma ([docs/rules/APPLE_DESIGN.md](rules/APPLE_DESIGN.md)).
- Skill `prototype` per esplorare direzioni davvero diverse del primo percorso, su telefono e desktop, dietro un selettore; l'utente sceglie.
- Poi `ux-writing` per i testi, `emil-design-eng` e `apple-design` per interazioni e rifinitura, `mobile-native` per il web su telefono, `break-ui` per i dati limite, `accessibility-audit` per la revisione.
- Si registra in DESIGN.md: direzione scelta, motivo, data.

### 7. Architettura
- Solo dopo il controllo A. Confrontare poche alternative reali rispetto ai requisiti scelti (PRODUCT.md §7 e le decisioni del passo 5), al costo, alle competenze disponibili e alla manutenzione.
- Skill `ponytail`: nessuna infrastruttura per esigenze ipotetiche. Skill `domain-modeling` per un ADR solo per scelte difficili da invertire.
- Verificare sulle fonti ufficiali le capacità attuali di librerie e fornitori, con le licenze.
- Si registra in ARCHITECTURE.md.

**Controllo B, prima del codice.** L'utente conferma direzione di design e architettura.

### 8. Realizzazione
- Un percorso completo alla volta: interfaccia, server, dati, permessi, errori e recupero, test.
- `ponytail` in modalità full; regole di [BACKEND.md](rules/BACKEND.md) e [QUALITY.md](rules/QUALITY.md).
- Verifica nel browser alle larghezze pertinenti, con testo ingrandito, tastiera, tema scuro e movimento ridotto; `playwright-cli` se disponibile.
- Revisione con Open Code Review (`open-code-review-delegate`) prima del commit finale e di ogni PR.
- Aggiornare STATUS.md a ogni chiusura di sessione.

### 9. Pilota
- Solo con l'autorizzazione dell'utente: dati reali, privacy e conservazione decise, backup provato, servizio organizzato.
- Misurare ciò che il passo 5 ha definito come successo.

## Skill per passo

| Passo | Skill |
| --- | --- |
| 1 Riallineamento | `grilling`, `domain-modeling` |
| 2 Mappa | `wayfinder` (su richiesta dell'utente) |
| 3 Ricerca documentale | `research` |
| 4 Ricerca con persone | `ux-research` |
| 5 Decisioni di prodotto | `ux-strategy`, `grilling` |
| 6 Design | `prototype`, `ux-writing`, `apple-design`, `emil-design-eng`, `mobile-native`, `break-ui`, `accessibility-audit` |
| 7 Architettura | `ponytail`, `domain-modeling`, `research` |
| 8 Realizzazione | `ponytail`, `open-code-review-delegate`, `playwright-cli`, `review-animations`, `animate-ui` (solo se pertinente) |
| App iPhone, dopo il web | `write-swift` |

Una skill serve a rispondere a una domanda: non si eseguono tutte in ogni sessione.
