# Stato del progetto

## Punto di ripresa (19 ottobre 2026)
**Fase: studio.** Riallineamento con l'utente concluso ([docs/METODO.md](docs/METODO.md), passo 1). Tutte le tensioni T1–T8 hanno una risposta per il pilota, registrata in [PRODUCT.md](PRODUCT.md) §12, e la **destinazione dello studio** è confermata ([docs/STUDIO.md](docs/STUDIO.md), in cima). Le decisioni sono ipotesi finché i colloqui con persone vere non le confermano. Non c'è codice applicativo; design, architettura e stack non sono decisi.

## Fatto (18–19 ottobre 2026)
- Riallineamento a domande (skill `grilling`), sette round, 23 domande: decisioni con data e motivo in PRODUCT.md §12; T1–T8 segnate come sciolte per il pilota in STUDIO.md.
- In sintesi: pilota con la sola ƎE, sulle **case gestite** dall'agenzia; paga il proprietario con un'offerta unica, l'inquilino entra gratis; la piattaforma non tocca il denaro; richieste dirette al tecnico con passaggio all'agenzia; bollette nello spazio privato dell'inquilino; tessera solo segno dell'adesione; primo percorso **attivazione e canone del mese**; elenco dichiarato di ciò che resta fuori.
- [GLOSSARY.md](GLOSSARY.md) creato con la skill `domain-modeling`: 11 termini decisi; i termini ancora provvisori restano in PRODUCT.md §8.
- Registrazioni della conversazione dei fondatori del 18/10 sera trascritte in locale (circa 21 minuti); le idee emerse sono in PRODUCT.md §5 come «Idea dei fondatori». Audio e trascrizioni non sono nel repository.
- Ricerca [docs/ricerca/bollette.md](docs/ricerca/bollette.md): come far arrivare e pagare le bollette, su fonti primarie.
- Requisito sulle email in [DESIGN.md](DESIGN.md).

## Verificato
- `python3 tools/check_setup.py`: integrità OK, 20 skill, copie Claude e Codex equivalenti (18/10 e 19/10/2026).
- Fonti della ricerca lette e citate con data. Le affermazioni non confermate sono segnate «Da verificare».
- Non applicabili: build, test, revisione OCR e verifiche dell'interfaccia (non c'è codice).

## Da chiarire con l'utente
- Cosa comprano i clienti che pagano 600 € l'anno (in attesa del collaboratore dell'utente).
- Prezzo e periodicità dell'offerta unica (circa 10 €, al mese o all'anno?), da mettere alla prova nei colloqui.
- Chi in agenzia eroga il servizio e con quante ore fisse (oggi stimate 1–1,5 al giorno).
- Il quarto mestiere dei tecnici iniziali (nella registrazione non si capisce).
- Se qualche inquilino delle case gestite paga con bonifico invece che al banco.
- Autorizzazione per la prova sulle bollette con bollette reali, se non bastano quelle inventate.

## Prossimo passo
L'utente avvia `/wayfinder` con la destinazione confermata, usando il messaggio in [START_HERE.md](START_HERE.md). La mappa si salva in `.scratch/`.

## Ultima verifica
19/10/2026, `python3 tools/check_setup.py`: integrità OK. Programmi facoltativi assenti nell'ambiente cloud: `ocr`, `playwright-cli`.
