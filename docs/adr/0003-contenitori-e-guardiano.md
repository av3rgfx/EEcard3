# Permessi da quattro contenitori e da un solo guardiano

Status: accepted (31/10/2026, decisione dell'utente)

Ogni cosa che Connetto conserva sta in uno di quattro contenitori: la **casa**, la **locazione**, l'**incarico di gestione** e la **persona**. L'agenzia è scritta solo sulle radici (casa, persona, account di lavoro), e il resto la eredita dal suo contenitore. Chi vede una cosa lo decide un solo **guardiano** nel codice, a ogni richiesta. Il guardiano parte da una **fonte di accesso** valida oggi: oggi le fonti sono il rapporto con la casa e l'account di lavoro, con la tabella di [PRODUCT.md](../../PRODUCT.md) §10.7. Non parte mai da un ruolo. Abbiamo scelto così perché il codice lo scrivono gli agenti e l'utente non lo legge: il rischio vero è un controllo dimenticato, e con un solo posto lo si può fermare con un controllo automatico e con prove per ogni tipo di persona. Discussione nel [ticket](../../.scratch/architettura-percorso-1/issues/02-modello-dati-permessi.md); dettaglio in [ARCHITECTURE.md](../../ARCHITECTURE.md), «Dati e permessi».

## Opzioni considerate

- **Una lista di chi vede, scelta a ogni caricamento:** più libera, ma un errore dell'operatore mostra un documento a chi non deve, e la lista va rifatta a ogni cambio d'inquilino.
- **L'agenzia su ogni cosa:** controlli ripetuti ovunque e contraddizioni possibili fra una cosa e la sua casa. **Nessuna agenzia ora:** il lavoro più grande dopo, con dati veri da spostare.
- **Un secondo lucchetto nel database, che filtra le righe per persona:** protegge di più dalle dimenticanze, ma le regole sarebbero scritte due volte, in due linguaggi diversi, e gli errori sarebbero difficili da capire per chi non legge il codice. Si riconsidera con una seconda agenzia, per la sola regola «ogni agenzia vede le sue radici».
- **Permessi per ruolo** («sei un tecnico», «sei un proprietario»): contraddicono §7.1. Il tecnico del percorso 2 vedrebbe tutte le case del suo mestiere.

## Conseguenze

- Ogni pagina, ricerca, anteprima, file, PDF ed esportazione passa dal guardiano; una pagina che non ci passa non si pubblica.
- La fine di un rapporto si legge dalle date: nessuno toglie l'accesso a mano e niente si cancella per toglierlo.
- I percorsi dopo il 1 aggiungono fonti di accesso con le date: l'incarico del tecnico, poi la condivisione. Lo spazio delle bollette sta nella persona, con la regola che l'account di lavoro non ci entra mai.
- Spostare dopo un tipo di documento da un contenitore all'altro, o cambiare il modo di ricavare i permessi, vuol dire migrare dati veri e rifare le prove di tutti i ruoli.
