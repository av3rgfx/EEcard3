# Strumenti di lavoro: dove si costruisce, PostgreSQL 17 e OCR

Type: grilling
Status: open
Blocked by: 02
Mappa: [Costruzione del percorso 1: il piano](../map.md)

## Domanda (Question)

Dove lavorano gli agenti e con quali strumenti, perché i controlli siano gli stessi ovunque (ARCHITECTURE.md, «Ambiente di prova»: un comando accende app, PostgreSQL 17 e dati inventati, sul computer o nella sessione cloud).

1. **Dove si costruisce:** nelle sessioni cloud di Claude Code, sul computer dell'utente, o tutte e due.
2. **PostgreSQL 17** nella sessione cloud, dove oggi c'è il 16 (27/11/2026): il modo scelto dalla [ricerca](02-ricerca-strumenti-lavoro.md), ed eventualmente lo script di preparazione dell'ambiente cloud (si propone con gli strumenti dell'ambiente, con l'approvazione dell'utente).
3. **OCR:** come diventa disponibile in ogni sessione (dipendenza di sviluppo del progetto, AGENTS.md) e cosa si fa se non gira.
4. **Skill da copiare all'inizio:** `security-review` di Sentry, rinominata, uguale in `.claude/skills` e `.agents/skills` (ARCHITECTURE.md, «Revisione»).
5. **Impostazioni del repository su GitHub** (protezione del ramo, Dependabot, avvisi): le cambia l'utente con una lista di passi o gli agenti con la sua autorizzazione.

## Risposta (Answer)

## Commenti (Comments)

- 27/11/2026, dalla [ricerca sugli strumenti](02-ricerca-strumenti-lavoro.md): il programma di avvio di OCR, senza `OCR_NO_UPDATE=1`, lancia da solo `npm i -g` ogni 18 minuti, cioè un'installazione globale automatica che AGENTS.md vieta: la variabile va impostata dove gira OCR. La skill `open-code-review-delegate` della fonte è cambiata dopo la nostra copia (commit `8eb8334`): da guardare con la regola sulle skill (provenienza e cambiamenti, copie Claude e Codex uguali). PostgreSQL 17 nella sessione: Docker spento finché non si accende a mano, immagine da `public.ecr.aws`; sul computer dell'utente il sistema non è scritto nei documenti, da chiedere.
- 27/11/2026, dal ticket [Quando un pezzo è finito](04-quando-un-pezzo-e-finito.md): le proposte delle sessioni intermedie entrano con l'unione automatica di GitHub, quindi alla lista delle impostazioni (punto 5) servono «Allow auto-merge» e la protezione del ramo `main` con i controlli obbligatori, già necessarie per Dependabot; i pacchetti «0.x» restano fuori dal flusso di unione automatica di Dependabot.
