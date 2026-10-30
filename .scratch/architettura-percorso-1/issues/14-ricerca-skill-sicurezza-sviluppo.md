# Ricerca: skill per la sicurezza e lo sviluppo con gli agenti

Type: research
Status: open
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

L'utente scrive la piattaforma con gli agenti, senza esperti esterni e quasi senza leggere il codice ([Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md)). Quali skill per Claude Code e Codex aiutano davvero a costruire una piattaforma web sicura con dati personali e i fatti del denaro? Si cerca su forum, Reddit, X, Threads e simili, con lo strumento scelto al punto 0, e sulle fonti primarie delle skill trovate.

0. **Prima lo strumento per cercare.** Il link dell'utente (30/10/2026) è [Agent-Reach](https://github.com/Panniantong/agent-reach); l'utente non sa se ci sono skill migliori per le ricerche online. Il 26/10/2026 l'agente l'aveva sconsigliata «per ora»: legge soprattutto social e piattaforme, copia gli accessi dal browser e si installa per tutto il computer ([ticket](../../design-percorso-1/issues/21-pacchetto-controllo-b.md), «Commenti»). Si leggono sorgente e istruzioni della versione attuale: cosa installa, cosa esegue, quali accessi chiede, licenza, manutenzione. Si confronta con due o tre alternative reali, compresi gli strumenti già presenti (ricerca e lettura del web degli agenti). Poi si chiede all'utente, in parole semplici, quale usare. Nessuna installazione e nessun accesso con gli account dell'utente senza la sua autorizzazione esplicita; se l'utente la dà, solo nel contenitore della sessione, mai sul suo computer, e senza i suoi accessi ai social salvo richiesta.
1. **Sicurezza:** revisione del codice, permessi, accesso, dati personali, dipendenze, segreti; cosa aggiungono rispetto a quello che il progetto ha già (OCR obbligatoria, skill `security-review`, [docs/rules/BACKEND.md](../../../docs/rules/BACKEND.md) e [QUALITY.md](../../../docs/rules/QUALITY.md)).
2. **Sviluppo:** test, migrazioni, controlli automatici, lavoro con poco codice letto dall'utente.
3. **Per ogni skill:** provenienza, autore, licenza, cosa fa davvero, cosa installa o esegue, conflitti con le skill del progetto. Le opinioni dei social sono indizi, non prove: si verificano sul sorgente.

Limiti: nessuna installazione durante la ricerca; ogni installazione la decide l'utente, con le copie Claude e Codex allineate (AGENTS.md, «Confini operativi»). Risultati in `docs/ricerca/`, con la data di lettura e i link. Prima del controllo B.
