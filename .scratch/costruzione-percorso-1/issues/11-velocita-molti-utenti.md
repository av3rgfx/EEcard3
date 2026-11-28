# Velocità con molti utenti

Type: grilling
Status: open
Blocked by: 05
Mappa: [Costruzione del percorso 1: il piano](../map.md)

## Domanda (Question)

Il principio è deciso nel ticket [Strumenti di lavoro](05-strumenti-di-lavoro.md) (27/11/2026): controlli automatici leggeri della velocità **a ogni pezzo** e una **prova di carico prima del pilota**. Restano i numeri e gli strumenti, che chiedono una piccola ricerca prima della discussione:

1. **Dati inventati grandi:** quanto grandi (proposta di partenza: circa 10 volte ƎE, che l'utente stima in 100–200 case, cioè circa 2.000 case con 5 anni di canoni) e come si generano, accanto ai pochi dati inventati di sempre (ARCHITECTURE.md, «Ambiente di prova»).
2. **Tempi massimi** delle pagine principali e del server (per esempio aprire la casa, il canone del mese, la ricevuta), misurati in modo stabile nel cloud, su Arch e nei controlli di GitHub, senza controlli che falliscono a caso.
3. **Revisione delle richieste al database:** come si scoprono quelle fatte una riga alla volta e gli indici mancanti (test, regola per gli agenti, OCR).
4. **Prova di carico prima del pilota:** con quale programma, quanti utenti simulati e in che scena (per esempio tutti gli inquilini che pagano la mattina del 1° del mese), sull'app temporanea di Scalingo, con l'autorizzazione dell'utente; da collocare insieme alle [verifiche su Scalingo](07-verifiche-su-scalingo.md), in una sola accensione se possibile.

## Risposta (Answer)

## Commenti (Comments)

- 28/11/2026, dal ticket [Ordine delle tappe](06-ordine-delle-tappe.md) (scelta dell'utente): il programma dei dati inventati grandi **nasce nelle fondamenta**, nella sessione dell'ambiente di prova, con case, persone e rapporti; ogni pezzo aggiunge i suoi dati. I tempi massimi contano dall'attivazione; la regola contro le letture del database una riga alla volta vale dalle fondamenta. Restano a questo ticket grandezze, tempi e strumenti.
