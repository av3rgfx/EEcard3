# Regole condivise di progetto

Valgono per Claude Code e Codex. Leggere questo file a inizio lavoro.
Leggere PRODUCT.md e STATUS.md; aprire DESIGN.md o ARCHITECTURE.md solo per il lavoro pertinente.
I campi DA DEFINIRE sono domande aperte, non requisiti approvati.

## EECard3: regole specifiche del progetto
Prevalgono sulle sezioni generiche del template quando sono in conflitto.

- Rispondere e scrivere i documenti in italiano.
- Le domande all'utente si fanno in parole semplici: cosa si chiede, perché conta e cosa comporta ogni opzione,
  senza gergo tecnico o legale (richiesta dell'utente, 19/10/2026).
- Ordine di lettura: STATUS.md, PRODUCT.md (l'idea completa), docs/STUDIO.md (cosa studiare),
  docs/METODO.md (come procedere). docs/TEMPLATE.md solo se si lavora sul kit.
- **Fase attuale: studio.** Architettura, stack, design, piano di sviluppo e prima versione non sono decisi.
  Non scrivere codice applicativo e non scegliere lo stack prima dei passaggi indicati in docs/METODO.md.
  Sono ammessi i prototipi usa e getta che rispondono a una domanda precisa.
- **Repository pulito per scelta dell'utente.** PRODUCT.md è la fonte dell'idea. Non consultare né riusare
  repository, codice, design o decisioni tecniche dei tentativi precedenti, salvo richiesta esplicita dell'utente:
  servono soluzioni cercate da capo, che possono essere diverse e migliori.
- Regole del dominio in PRODUCT.md §7: accesso legato al rapporto con la casa, passaggi del denaro distinti,
  versioni conservate, nessun doppio pagamento.
- Solo dati sintetici; niente transazioni, messaggi, chiamate, account esterni o servizi reali senza autorizzazione esplicita.
- Ricerche documentali: un file per tema in docs/ricerca/, con la data di lettura e il link a ogni fonte primaria.
  Le norme e le condizioni dei fornitori vanno lette sulle fonti ufficiali aggiornate; segnalare quando serve un parere professionale.
- Decisioni dell'utente: registrarle in PRODUCT.md §12 (prodotto), DESIGN.md (visive) o ARCHITECTURE.md (tecniche),
  con data e motivo; il dettaglio della discussione resta nel ticket Wayfinder. Niente registri paralleli.
- Documentazione sobria: un fatto in un solo posto, niente famiglie di codici senza necessità.
  Più evidenze che documenti: un documento nuovo deve servire a una decisione.
- Ambiente cloud di Claude Code: si fa push solo sul branch indicato dalla sessione. Le procedure delle skill che creano
  branch remoti (per esempio i branch `research/<nome>` di Wayfinder) si sostituiscono salvando i risultati nel branch di lavoro.

## Ordine delle decisioni
1. Istruzioni dell'utente e vincoli effettivi dell'ambiente.
2. Requisiti confermati, sicurezza, integrità dei dati e accessibilità.
3. Evidenze pertinenti e convenzioni della piattaforma di destinazione.
4. Decisioni registrate nei documenti del progetto.
5. Preferenze delle skill: non trasformarle in leggi universali.
Non riscrivere identità, stack o regole commerciali per adeguarli al gusto di una skill.
Se una decisione confermata presenta un problema concreto, spiegare il conflitto e proporre una soluzione.

## Lavoro e continuità
- Prima di cambiare codice, leggere implementazione e chiamanti pertinenti.
- Procedere con scelte reversibili ragionevoli; chiedere solo informazioni che cambiano materialmente la soluzione.
- Le decisioni soggettive richieste all'utente non si possono simulare.
- Conservare requisiti in PRODUCT.md, scelte visive in DESIGN.md, scelte tecniche in ARCHITECTURE.md.
- Aggiornare STATUS.md con verifiche eseguite, problemi aperti e prossimo passo utile.
- Non inventare utenti, interviste, statistiche, funzionalità del backend o risultati di test.
- Distinguere osservazioni, inferenze, ipotesi e dati mancanti.

## Wayfinder: pianificazione su richiesta
- Usare wayfinder per iniziative grandi con scelte dipendenti ancora aperte, non per ogni modifica.
- Il tracker è già configurato: Local Markdown. Riferimento:
  .agents/skills/setup-matt-pocock-skills/issue-tracker-local.md.
- Le mappe e i ticket persistono in .scratch/<iniziativa>/; non ignorarli in Git per impostazione predefinita.
- Per le convenzioni di dominio consultare domain-modeling; creare glossario e ADR solo quando servono.
- Note di integrazione che prevalgono sulle procedure generiche delle skill:
  non pubblicare ticket, commenti o branch remoti senza autorizzazione per quel lavoro;
  conservare la ricerca locale nel progetto.
- Usare subagenti solo quando disponibili e consentiti. Altrimenti fare la ricerca in sequenza dichiarandolo.
- Quando il percorso è chiaro, chiudere la pianificazione e passare all'implementazione.

## Ponytail: semplicità con qualità
- Modalità lite per esplorazione e prototipi; full per implementazione; ultra solo su richiesta.
- Riutilizzare prima codice e componenti esistenti, funzioni native e dipendenze già presenti.
- Aggiungere nuove librerie solo se un bisogno concreto giustifica il costo.
- Evitare infrastrutture e astrazioni costruite soltanto per esigenze ipotetiche.
- Non semplificare via sicurezza, validazione, permessi, gestione errori, accessibilità o requisiti espliciti.
- Semplicità del codice e semplicità per l'utente sono criteri diversi: soddisfarli entrambi.

## UX e design
- Seguire docs/rules/WORKFLOW.md e docs/rules/APPLE_DESIGN.md.
- Usare ux-research / ux-strategy per le domande e decisioni UX; i loro benchmark richiedono verifica contestuale.
- Usare ux-writing per contenuti e accessibility-audit per la revisione pertinente.
- Usare Emil per interazioni e rifinitura; mobile-native sul web mobile; break-ui per dati limite.
- apple-design di Emil è una lettura esterna dei materiali Apple, non una fonte ufficiale.
- Una sola direzione visiva per ciascun intervento, registrata in DESIGN.md.
- Animate UI solo se pertinente al frontend e alla versione in uso; non installare componenti per decorazione.
- write-swift solo per codice Swift; non scegliere lo stack dell'app prima dei requisiti.

## Backend e verifica
- Seguire docs/rules/BACKEND.md e docs/rules/QUALITY.md.
- Per modifiche sostanziali eseguire i controlli pertinenti e la revisione del codice.
- Usare open-code-review-delegate quando il programma ocr è disponibile.
  In EECard3 la revisione OCR è obbligatoria prima del commit finale di ogni incremento di codice e prima di ogni PR
  (decisione dell'utente); difetti critici e alti si correggono con un test. Quando esisterà un progetto con
  dipendenze, OCR si può aggiungere come dipendenza di sviluppo locale, senza installazioni globali automatiche.
- Se OCR non è disponibile, dichiararlo e fare una revisione diretta; non dire di aver eseguito OCR.
- Verificare il frontend renderizzato con il browser disponibile nel rispetto delle regole dell'ambiente.
- La skill playwright-cli richiede il suo programma; un browser già integrato può essere sufficiente.
- Nessuna dichiarazione di conformità o test superati senza verifica effettiva.

## Confini operativi
- Non salvare segreti o dati reali di clienti in documenti, fixture, log o commit.
- Nessun deploy, pagamento reale, invio di messaggi o modifica distruttiva di dati senza la relativa autorizzazione.
- Non cambiare impostazioni o installare programmi globali automaticamente.
- Per aggiornare le skill verificare provenienza e cambiamenti; sincronizzare le copie Claude/Codex.
