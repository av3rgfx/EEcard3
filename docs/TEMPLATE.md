# Il template di avvio: valutazione e adattamenti

Valutazione del kit «Template SaaS e App» (fotografia del 18 ottobre 2026), usato per inizializzare EECard3 lo stesso giorno.

## Cosa contiene
- Regole condivise per Claude Code e Codex (`AGENTS.md`, richiamato da `CLAUDE.md`).
- Documenti di contesto vuoti: `PRODUCT.md`, `DESIGN.md`, `ARCHITECTURE.md`, `STATUS.md`, `START_HERE.md`.
- Regole in `docs/rules/`: Apple, backend, qualità, metodo di lavoro.
- 20 skill copiate in `.claude/skills/` e `.agents/skills/`, con provenienza, revisioni e impronte in `skills.lock.json` e licenze in `third_party/licenses/`.
- Modelli per mappa e ticket di Wayfinder in `templates/`.
- Un controllo dell'integrità (`tools/check_setup.py`) e un inizializzatore che non sovrascrive nulla.
- Nessuno stack, applicazione dimostrativa, palette o fornitore già scelto.

## Verdetto
**È adatto a questo progetto**, con gli adattamenti descritti sotto. La sua qualità principale è proprio che non decide niente: lascia libera la strada, come chiede l'utente. Le regole contro le invenzioni e le skill di ricerca e pianificazione rispondono ai bisogni di un progetto con un'idea grande, molte decisioni che dipendono l'una dall'altra e nessuna evidenza raccolta.

## Utilità di ciascuna parte per EECard3

| Parte | Utilità | Quando |
| --- | --- | --- |
| Regole contro le invenzioni («non inventare utenti, interviste, statistiche»; distinguere fatti e ipotesi) | Alta: proteggono dal rischio principale, scambiare idee per evidenze | Sempre |
| `grilling`, `domain-modeling` | Alta: decisioni prese con l'utente a domande, con una raccomandazione; parole del progetto precise (rapporto, adesione, incasso…) | Riallineamento e decisioni |
| `wayfinder` con tracker locale | Alta: un'idea troppo grande per una sessione, con decisioni dipendenti. Ticket e mappa restano nel repository | Studio |
| `research` | Alta: fonti primarie per pagamenti, affitto, norme, wallet | Studio |
| `ux-research`, `ux-strategy` | Alta: colmano la lacuna maggiore (nessuna prova con persone, valore da chiarire) | Studio e decisioni di prodotto |
| `prototype` (Matt Pocock) | Media-alta: prototipi usa e getta di logica (per esempio gli stati di un pagamento) e di interfaccia (varianti a confronto) | Studio e design |
| `ponytail` | Alta quando ci sarà codice: niente infrastruttura per esigenze ipotetiche | Architettura e realizzazione |
| `ux-writing`, `accessibility-audit`, `apple-design`, `emil-design-eng`, `mobile-native`, `break-ui`, `review-animations` | Alta per la qualità dell'interfaccia richiesta dall'utente | Design e realizzazione |
| `open-code-review-delegate`, `playwright-cli` | Alta: revisione obbligatoria per l'utente e verifica dell'interfaccia | Realizzazione |
| `animate-ui` | Condizionata: solo con un frontend React compatibile | Realizzazione, se pertinente |
| `write-swift` | Più avanti: app iPhone dopo il web | Dopo la piattaforma web |
| `setup-matt-pocock-skills` | Bassa: il tracker è già configurato; serve solo per cambiarlo | Raramente |
| Regole Apple del template | Alta: riassunto corretto e non dogmatico delle HIG, con le fonti; adatto al riferimento confermato dall'utente | Design |

## Limiti trovati e adattamenti fatti in EECard3

| Limite | Adattamento |
| --- | --- |
| `PRODUCT.md`, `STATUS.md` e gli altri documenti di contesto sono vuoti | `PRODUCT.md` contiene l'idea completa; gli altri sono compilati con lo stato reale |
| `START_HERE.md` porta subito a implementare il primo percorso | Riscritto per una sessione di studio: riallineamento, mappa, ricerca, decisioni. Niente codice prima dei controlli di [METODO.md](METODO.md) |
| `AGENTS.md` dice di passare all'implementazione appena il percorso è chiaro | Aggiunte regole specifiche di EECard3: fase di studio, controlli A e B, repository pulito |
| Manca un posto per lo studio di dominio (norme, pagamenti, mercato) | Aggiunti [STUDIO.md](STUDIO.md) (cosa studiare) e [METODO.md](METODO.md) (in che ordine); ricerche in `docs/ricerca/<tema>.md` |
| Manca un posto per le decisioni commerciali (prezzi, servizio, primo cliente) | Registrate in `PRODUCT.md` §12, senza un registro parallelo; la discussione resta nei ticket di Wayfinder |
| La revisione OCR è facoltativa («se installato») | Resa obbligatoria per il codice, come chiesto dall'utente |
| Wayfinder, nella procedura generica, pubblica branch `research/<nome>`; nell'ambiente cloud di Claude Code si può fare push solo sul branch della sessione | Regola in `AGENTS.md`: risultati salvati nel branch di lavoro |
| `wayfinder` e `setup-matt-pocock-skills` non si avviano da soli (`disable-model-invocation`) | Indicato in `START_HERE.md` e `CLAUDE.md`: l'utente scrive `/wayfinder` |
| Lingua delle risposte non indicata | Aggiunto: italiano |

## Osservazioni per migliorare il template in generale
Non applicate al kit originale; utili per una versione successiva.

1. **Inizializzatore e repository clonati.** `init_project.py` rifiuta una cartella che contiene solo `.git`, cioè un repository GitHub vuoto appena clonato. Per EECard3 il progetto è stato creato in una cartella temporanea e poi copiato nel clone. Si potrebbe accettare una cartella che contiene solo `.git`.
2. **Nome `prototype` duplicato.** Il kit include il `prototype` di Matt Pocock. Se nell'ambiente esiste già una skill globale con lo stesso nome (per esempio una skill `prototype` che mostra le varianti dietro un selettore), conviene verificare quale viene caricata.
3. **Un `START_HERE` per i progetti che partono dallo studio.** Oggi il messaggio presume che l'idea sia già pronta da implementare; una seconda variante «studio prima» sarebbe utile.
4. **Uno spazio per le ricerche.** Una cartella `docs/ricerca/` con la convenzione (un tema per file, fonte e data per ogni affermazione) eviterebbe che ogni progetto la reinventi.
5. **Regole di revisione OCR del progetto.** `.opencodereview/rule.json` ha una sola regola generica; quando un progetto ha requisiti di dominio forti (qui: permessi legati al rapporto con la casa, passaggi del denaro distinti) conviene aggiungere regole specifiche. Per EECard3 si farà quando ci sarà codice.
6. **Peso delle copie doppie.** Le skill sono copiate per Claude e per Codex (circa 3 MB). È una scelta sensata per usare entrambi gli agenti; il controllo d'integrità ne verifica l'equivalenza.

## Verifica eseguita il 18/10/2026
- Inizializzazione con `python3 -I init_project.py <cartella> --name "EECard3"`: riuscita.
- `python3 tools/check_setup.py` nel repository: integrità **OK**, 20 skill, copie Claude e Codex equivalenti. Il file di lock copre skill e licenze, non i documenti di contesto, che quindi si possono modificare.
- Programmi facoltativi: `git`, `node` e `npm` presenti; `ocr` e `playwright-cli` assenti nell'ambiente cloud di questa sessione.
- Lettura delle istruzioni principali delle skill e ricerca mirata negli script inclusi: nessun comando di rete, di cancellazione o di esecuzione di processi trovato.
