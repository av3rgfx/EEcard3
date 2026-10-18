# Stato del progetto

## Punto di ripresa (18 ottobre 2026)
Repository inizializzato con il template di avvio e con la descrizione completa dell'idea. **Fase: studio.** Non c'è codice applicativo; architettura, design, stack e prima versione non sono decisi, per scelta dell'utente.

## Fatto
- Template inizializzato e adattato al progetto ([docs/TEMPLATE.md](docs/TEMPLATE.md)).
- Idea completa in [PRODUCT.md](PRODUCT.md): problema, persone, catalogo di ciò che si vorrebbe offrire, modello commerciale noto, regole del dominio, decisioni confermate dall'utente.
- Cosa va studiato in [docs/STUDIO.md](docs/STUDIO.md): otto tensioni da sciogliere per prime e quindici aree di studio.
- Come procedere in [docs/METODO.md](docs/METODO.md): passi, controlli A e B, skill per passo.

## Verificato
- `python3 tools/check_setup.py`: integrità OK, 20 skill, copie Claude e Codex equivalenti (18/10/2026).
- Non applicabili: build, test e verifiche dell'interfaccia (non c'è codice).

## Da chiarire con l'utente
Le tensioni T1–T8 di [docs/STUDIO.md](docs/STUDIO.md), in particolare: su cosa si regge il valore (T1), chi è il primo cliente e chi paga (T2), quanto lavoro umano costa un cliente (T3).

## Prossimo passo
Sessione di riallineamento ([docs/METODO.md](docs/METODO.md), passo 1) con il messaggio in [START_HERE.md](START_HERE.md); poi l'utente avvia `/wayfinder` per la mappa delle decisioni.

## Ultima verifica
18/10/2026, `python3 tools/check_setup.py`: integrità OK. Programmi facoltativi assenti nell'ambiente cloud: `ocr`, `playwright-cli`.
