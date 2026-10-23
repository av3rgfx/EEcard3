# EECard3

> Nome del repository, non del prodotto: il prodotto si chiama **Connetto** (PRODUCT.md §1).

Una piattaforma per **prendersi cura della propria casa e di ciò che la riguarda**: documenti, affitto, bollette, scadenze, pratiche, tecnici e assistenza in un unico posto, con dietro il servizio reale di un'agenzia e dei suoi professionisti. Spazi distinti per cliente, agenzia e tecnico.

**Stato (19 ottobre 2026): fase di studio.** Il repository contiene la descrizione completa dell'idea, cosa va studiato, le prime ricerche e la mappa delle decisioni verso il controllo A. Non c'è codice; architettura, design, stack e prima versione non sono decisi, per scelta. Si riparte da zero, senza soluzioni ereditate da tentativi precedenti, per poter trovare la strada migliore.

## Da dove partire

| File | Serve per |
| --- | --- |
| [START_HERE.md](START_HERE.md) | Il messaggio con cui iniziare la prossima sessione |
| [STATUS.md](STATUS.md) | Punto di ripresa: fatto, verificato, prossimo passo |
| [PRODUCT.md](PRODUCT.md) | **L'idea completa**: problema, persone, cosa si vorrebbe offrire, modello commerciale noto, regole del dominio, decisioni confermate |
| [GLOSSARY.md](GLOSSARY.md) | I termini del progetto il cui significato è stato deciso |
| [docs/ricerca/](docs/ricerca/) | Ricerche documentali, un file per tema, con fonti e date di lettura |
| [.scratch/controllo-a/map.md](.scratch/controllo-a/map.md) | Mappa Wayfinder delle decisioni verso il controllo A, con un file per ticket |
| [docs/STUDIO.md](docs/STUDIO.md) | Cosa va studiato: tensioni da sciogliere, aree di ricerca, fonti ufficiali |
| [docs/METODO.md](docs/METODO.md) | Come procedere dallo studio alla realizzazione, con i controlli prima di design, architettura e codice |
| [DESIGN.md](DESIGN.md), [ARCHITECTURE.md](ARCHITECTURE.md) | Decisioni visive e tecniche, ancora vuote |
| [AGENTS.md](AGENTS.md) | Regole di lavoro per Claude Code e Codex |
| [docs/TEMPLATE.md](docs/TEMPLATE.md) | Valutazione del template di avvio e adattamenti fatti |
| [docs/rules/](docs/rules/) | Regole Apple, backend, qualità e metodo |

## Il kit
Il repository è stato inizializzato con il «Template SaaS e App» (fotografia del 18/10/2026): 20 skill per Claude Code (`.claude/skills/`) e Codex (`.agents/skills/`), con provenienza in `skills.lock.json` e [THIRD_PARTY.md](THIRD_PARTY.md) e licenze in `third_party/licenses/`.

Verifica del kit:

    python3 tools/check_setup.py

Programmi facoltativi, da installare solo per scelta: Open Code Review (`ocr`) per la revisione del codice e Playwright CLI per provare l'interfaccia. La modalità delegata di OCR usa l'agente stesso e non richiede servizi esterni.

## Confini
Solo dati inventati e ambienti di prova. Nessun pagamento, messaggio, chiamata, account esterno o pubblicazione in produzione senza l'autorizzazione esplicita dell'utente. Nessun segreto o dato reale di clienti nel repository.
