# Primo messaggio per la sessione iniziale

Da incollare in Claude Code o Codex aperto su questo repository.

---

Leggi AGENTS.md, STATUS.md, PRODUCT.md, docs/STUDIO.md e docs/METODO.md, poi verifica il kit con `python3 tools/check_setup.py`. Il repository è pulito per scelta: non cercare, consultare o riusare repository, codice o decisioni di tentativi precedenti. PRODUCT.md è l'unica fonte dell'idea.

Siamo all'inizio della fase di studio di EECard3 (nome provvisorio): una piattaforma per prendersi cura della casa, con dietro il servizio reale di un'agenzia e dei suoi professionisti. In questa sessione non scrivere codice applicativo, non scegliere lo stack e non disegnare schermate.

Oggi facciamo il passo 1 di docs/METODO.md, il riallineamento:
1. Riassumimi in poche righe come hai capito l'idea, cosa ti sembra solido e cosa ti sembra più incerto o contraddittorio.
2. Discuti con me le tensioni T1–T8 di docs/STUDIO.md con la skill grilling: round di tre o quattro domande al massimo, ognuna con la tua risposta raccomandata e il motivo, partendo da quelle da cui dipendono le altre. I fatti che puoi trovare da solo cercali tu; a me chiedi solo le decisioni.
3. Quando decidiamo il significato di un termine, usa domain-modeling e scrivilo in GLOSSARY.md.
4. Alla fine proponimi la destinazione dello studio, cioè quale decisione o specifica vogliamo raggiungere prima di design e architettura, e aspetta la mia conferma.

Registra le mie decisioni in PRODUCT.md §12 con la data e il motivo e aggiorna STUDIO.md se una tensione si scioglie. Chiudi la sessione aggiornando STATUS.md e questo file con il messaggio per la sessione successiva; poi fai commit e push sul branch della sessione. La mappa delle decisioni la avvierò io con /wayfinder nella sessione successiva.

---

## Sessioni successive
- **Mappa delle decisioni:** scrivere `/wayfinder` e indicare la destinazione confermata. La mappa si salva in `.scratch/`.
- **Lavorare sulla mappa:** scrivere `/wayfinder` con il percorso della mappa (`.scratch/<nome>/map.md`); l'agente prende il primo ticket libero.
- **Riprendere in generale:** «Leggi AGENTS.md e STATUS.md e riprendi dal prossimo passo indicato».
