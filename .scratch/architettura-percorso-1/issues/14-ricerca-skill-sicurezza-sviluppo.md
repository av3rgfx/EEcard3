# Ricerca: skill per la sicurezza e lo sviluppo con gli agenti

Type: research
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

L'utente scrive la piattaforma con gli agenti, senza esperti esterni e quasi senza leggere il codice ([Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md)). Quali skill per Claude Code e Codex aiutano davvero a costruire una piattaforma web sicura con dati personali e i fatti del denaro? Si cerca su forum, Reddit, X, Threads e simili, con lo strumento scelto al punto 0, e sulle fonti primarie delle skill trovate.

0. **Prima lo strumento per cercare.** Il link dell'utente (30/10/2026) è [Agent-Reach](https://github.com/Panniantong/agent-reach); l'utente non sa se ci sono skill migliori per le ricerche online. Il 26/10/2026 l'agente l'aveva sconsigliata «per ora»: legge soprattutto social e piattaforme, copia gli accessi dal browser e si installa per tutto il computer ([ticket](../../design-percorso-1/issues/21-pacchetto-controllo-b.md), «Commenti»). Si leggono sorgente e istruzioni della versione attuale: cosa installa, cosa esegue, quali accessi chiede, licenza, manutenzione. Si confronta con due o tre alternative reali, compresi gli strumenti già presenti (ricerca e lettura del web degli agenti). Poi si chiede all'utente, in parole semplici, quale usare. Nessuna installazione e nessun accesso con gli account dell'utente senza la sua autorizzazione esplicita; se l'utente la dà, solo nel contenitore della sessione, mai sul suo computer, e senza i suoi accessi ai social salvo richiesta.
1. **Sicurezza:** revisione del codice, permessi, accesso, dati personali, dipendenze, segreti; cosa aggiungono rispetto a quello che il progetto ha già (OCR obbligatoria, skill `security-review`, [docs/rules/BACKEND.md](../../../docs/rules/BACKEND.md) e [QUALITY.md](../../../docs/rules/QUALITY.md)).
2. **Sviluppo:** test, migrazioni, controlli automatici, lavoro con poco codice letto dall'utente.
3. **Per ogni skill:** provenienza, autore, licenza, cosa fa davvero, cosa installa o esegue, conflitti con le skill del progetto. Le opinioni dei social sono indizi, non prove: si verificano sul sorgente.

Limiti: nessuna installazione durante la ricerca; ogni installazione la decide l'utente, con le copie Claude e Codex allineate (AGENTS.md, «Confini operativi»). Risultati in `docs/ricerca/`, con la data di lettura e i link. Prima del controllo B.

## Risposta (Answer)

Ricerca del 30/10/2026 in [docs/ricerca/skill-sicurezza-sviluppo.md](../../../docs/ricerca/skill-sicurezza-sviluppo.md), con gli strumenti già presenti (scelta dell'utente, «Commenti»). Nessuna skill installata, nessuno script eseguito, nessun account.

- **Già presente:** `/security-review` di Claude Code guarda solo le modifiche e per regola esclude limiti ai tentativi, librerie vecchie, registri delle operazioni e rinforzi mancanti. Per EECard3 i buchi veri sono tre: tentativi sul codice d'accesso, versioni conservate, dipendenze.
- **Candidate di sola istruzione, copiabili uguali in `.claude/skills` e `.agents/skills`:** `security-review` di Sentry, da rinominare per lo stesso nome del comando; `skill-scanner` di Sentry, per controllare una skill prima di adottarla; `differential-review` e `property-based-testing` di Trail of Bits; `test-driven-development` di superpowers, da sola, senza il pacchetto.
- **Solo dopo la scelta dello stack:** le skill di Supabase o di Firebase.
- **Da non prendere ora:** il pacchetto superpowers intero (si avvia a ogni sessione), Semgrep Guardian (manda i file al fornitore, chiede un account), Codex Security (server MCP e chiavi).
- **Nessuna skill copre** la prova di attacco sul sistema acceso né la verifica del ripristino: rischio da dichiarare al controllo B, con un parere professionale se il budget lo permette.

Cinque scelte per l'utente, da fare una alla volta, nella ricerca, «Cosa resta all'utente». Sono passate alla mappa, «Non ancora specificato», voce «Verifica operativa»; la terza, le skill del fornitore, aspetta [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md). L'utente può chiederne una anche prima.

## Commenti (Comments)

**30/10/2026, punto 0: lo strumento per cercare.** Letti il sorgente e le istruzioni di Agent-Reach 1.6.0 (commit `14c2134` del 25/10/2026) e di last30days (commit `7efc0ef` del 28/10/2026), solo in lettura, senza installare né eseguire nulla; provati gli strumenti già presenti. Dettaglio e fonti in [docs/ricerca/skill-sicurezza-sviluppo.md](../../../docs/ricerca/skill-sicurezza-sviluppo.md), §0.

- *Agent-Reach:* licenza MIT. Per Reddit e X serve un account: copia l'accesso al sito dal Chrome dell'utente (con l'estensione OpenCLI) o l'utente entra nel suo browser. Installa uv, Node.js, OpenCLI con estensione per Chrome e CloakBrowser, un browser che non si fa riconoscere come automatico, con licenza non libera. Mette la skill in `~/.agents/skills` e la collega a ogni AI del computer. Senza account fa le stesse ricerche pubbliche degli strumenti già presenti; il canale web passa da Exa e Jina.
- *last30days:* licenza MIT. Reddit senza chiave, ma dal contenitore reddit.com risponde 403; X richiede chiavi o i cookie del browser; propone l'iscrizione a ScrapeCreators.
- *Strumenti già presenti:* Reddit è bloccato per la ricerca e la lettura degli agenti e per `curl` (403); X rimanda all'accesso; GitHub e l'API pubblica di Hacker News rispondono senza account.

Proposte all'utente: strumenti già presenti (consigliata); già presenti più post incollati dall'utente; Agent-Reach nel contenitore senza account; Agent-Reach con account. **Risposta dell'utente:** strumenti già presenti (consigliata). Nessuna installazione, nessun account. Reddit e X restano fuori; un loro post citato altrove vale come indizio.
