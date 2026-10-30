# Linguaggio, framework e componenti

Type: grilling
Status: open
Blocked by: 01, 08
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Dentro la forma scelta ([Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md)), con quale linguaggio e framework si scrive la piattaforma web, e con quali componenti dell'interfaccia. Le capacità e le licenze si verificano sulle fonti ufficiali aggiornate (METODO.md, passo 7).

1. **Linguaggio e framework:** due o tre alternative reali, valutate su chi costruisce e mantiene, sulla forma scelta e sulla manutenzione. Pagine fatte dal server o applicazione nel browser, secondo quello che serve alle schermate del pacchetto: la piattaforma deve funzionare con rete lenta, mostrare «Sei senza connessione» e non perdere ciò che si sta scrivendo (DESIGN.md, «Interazioni e stati (percorso 1)»).
2. **Componenti:** l'elenco di DESIGN.md, «Componenti e token», come base. Per ognuno si dice se una libreria lo ha già e quanto va adattato ai token; tessera di rame, riquadro della casa, mesi a pillola e linea del tempo del mese si fanno comunque. Promemoria dell'utente del 23/10/2026: si valutano Animate UI e Watermelon UI (ARCHITECTURE.md, «Da valutare al passo 7»), al massimo una, solo se lo stack va verso React, Tailwind e shadcn; la licenza di Watermelon va letta prima.
3. **Testo che segue il telefono:** il testo segue la grandezza scelta nelle impostazioni del telefono, fino al doppio (ARCHITECTURE.md, «Cosa vincolerà la scelta»). Si dice come lo fa lo stack scelto. La prova su un iPhone vero resta alla prima versione: è in pausa per scelta dell'utente.
4. **Carattere e icone:** Manrope dal nostro sito, icone Lucide a tratto 1,6 (DESIGN.md, «Componenti e token»): come entrano nello stack.

Limiti: ponytail, cioè dipendenze solo se un bisogno concreto le giustifica. Nessuna installazione prima della decisione. Scelta in ARCHITECTURE.md.
