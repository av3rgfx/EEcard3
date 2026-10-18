# Decisioni tecniche

## Stato
**Nessuna scelta, per decisione dell'utente.** Stack, servizi, fornitori e struttura del codice si scelgono dopo le decisioni di prodotto ([docs/METODO.md](docs/METODO.md), passo 7, dopo il controllo A). Nessuna soluzione tecnica dei tentativi precedenti è un punto di partenza.

## Cosa vincolerà la scelta
- Le regole del dominio in [PRODUCT.md](PRODUCT.md) §7: accesso legato al rapporto con la casa e alla sua durata, passaggi del denaro distinti, versioni conservate, nessun doppio pagamento, tracciabilità, permessi uguali anche sui dati derivati.
- Le decisioni di prodotto che usciranno dallo studio: primo cliente, primo percorso, canali, integrazioni davvero necessarie.
- Le domande tecniche elencate in [docs/STUDIO.md](docs/STUDIO.md), area O.
- Ordine confermato: prima la piattaforma web, poi l'app iPhone sullo stesso servizio.
- Regole generali in [docs/rules/BACKEND.md](docs/rules/BACKEND.md).

## Confini
DA DEFINIRE: client web, app, backend, dati e servizi esterni.

## Dati e autorizzazioni
DA DEFINIRE: entità, ruoli, agenzie (più agenzie è una direzione confermata, non un requisito della prima versione).

## Integrazioni
DA DEFINIRE: autenticazione, pagamenti, email e messaggi, documenti, notifiche, wallet, firma, AI, secondo le necessità effettive.

## Decisioni confermate
Annotare alternative, motivi, vincoli e conseguenze.
Creare un ADR solo per decisioni difficili da invertire e con un vero compromesso.

## Verifica operativa
DA DEFINIRE: controlli del codice, migrazioni, ripristino, log e monitoraggio adeguati alla prima versione.
