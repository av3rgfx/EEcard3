# Chi costruisce e tiene in funzione la piattaforma

Type: grilling
Status: open
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Il passo 7 di [docs/METODO.md](../../../docs/METODO.md) confronta le alternative anche per **competenze disponibili e manutenzione**. Questo dato manca: oggi non è scritto chi scriverà il codice né chi lo terrà in funzione durante il pilota. Senza questo dato ogni scelta di forma e di linguaggio sarebbe una scommessa. Si decide con l'utente:

1. **Chi scrive il codice:** l'utente con agenti come Claude Code e Codex, uno sviluppatore, oppure tutti e due. Quanto codice l'utente legge o cambia da sé.
2. **Chi lo tiene in funzione nel pilota:** chi aggiorna, chi guarda se si rompe, chi risponde a ƎE quando qualcosa non va, in quali orari. Che cosa succede se quella persona non c'è. Se la persona non lavora già per ƎE, firma con l'agenzia un contratto sui dati e li usa solo per suo conto (PRODUCT.md §12, 20/10/2026).
3. **Quanto si può spendere al mese** per i servizi (ospitare, email, SMS) nel pilota, e chi paga: i fondatori, ƎE o altri. Un ordine di grandezza basta.
4. **Quanto lavoro di manutenzione si accetta:** servizi gestiti, che costano un po' di più e chiedono meno lavoro, oppure un server da tenere aggiornato.

Limiti: domande in parole semplici, una alla volta, con una raccomandazione. Nessun account o servizio. Le risposte vanno in ARCHITECTURE.md («Cosa vincolerà la scelta»); se toccano il prodotto, anche in PRODUCT.md §12.
