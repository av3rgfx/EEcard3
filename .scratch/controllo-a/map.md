# Superare il controllo A con le evidenze

Type: map (wayfinder:map)
Aperta: 19/10/2026

## Destinazione

La specifica del primo percorso completo, **attivazione e canone del mese per le case gestite da ƎE**, confermata dall'utente e sostenuta da colloqui con persone vere, da una prova di pre-adesione con un prezzo e dalle ricerche che potrebbero cambiarla; con queste evidenze si spunta il controllo A ([docs/METODO.md](../../docs/METODO.md), passo 5). Criteri di arrivo in [docs/STUDIO.md](../../docs/STUDIO.md), in cima.

## Note

- **Dominio:** servizio per la cura della casa di un'agenzia immobiliare (ƎE). Parole decise in [GLOSSARY.md](../../GLOSSARY.md); provvisorie in [PRODUCT.md](../../PRODUCT.md) §8. Regole del dominio in PRODUCT.md §7.
- **Regole del progetto:** [AGENTS.md](../../AGENTS.md). Fase di studio: niente codice applicativo, niente stack, niente schermate. Repository pulito: nessun riuso di tentativi precedenti. Solo dati inventati; nessun servizio, account o messaggio reale senza autorizzazione.
- **Skill per tipo di ticket:** `research` per le ricerche (un file per tema in `docs/ricerca/`, fonti primarie con data, parere professionale segnalato); `ux-research` per i materiali dei colloqui e della pre-adesione; `grilling` e `domain-modeling` per le decisioni; `ux-strategy` per proposta di valore e misure di successo; `prototype` solo per una prova usa e getta con una domanda precisa.
- **Le decisioni sono dell'utente, i fatti li cerca l'agente.** I fatti che conosce solo l'agenzia si chiedono all'agenzia con un elenco preciso.
- **Dove si registra:** decisioni di prodotto in PRODUCT.md §12 (con data e motivo), la specifica del percorso 1 in PRODUCT.md §10, le misure di successo in §13; la discussione resta nel ticket. Niente registri paralleli.
- **Tracker:** Local Markdown ([riferimento](../../.agents/skills/setup-matt-pocock-skills/issue-tracker-local.md)). Un file per ticket in `issues/`; righe `Type:`, `Status:` (`open`, `claimed`, `resolved`) e `Blocked by:`. Intestazioni in italiano: «Domanda» è la *Question*, «Risposta» è la *Answer*, «Commenti» sono i *Comments*. Nessun ticket, commento o branch remoto: le ricerche si salvano nel branch di lavoro della sessione.
- **Persone vere:** l'agente prepara, l'agenzia conduce; nel repository entrano solo sintesi anonime, senza dati personali. Mai partecipanti, citazioni o risultati inventati.

## Decisioni finora

<!-- una riga per ticket chiuso: nome con link, poi il succo della risposta -->

## Non ancora specificato

- **Svolgimento dei colloqui e sintesi anonime.** Quanti, con chi, in che ordine e con quali tempi lo dirà il piano dei materiali; da lì uno o più ticket di tipo compito.
- **Conferma o correzione delle decisioni del 18–19/10/2026** (PRODUCT.md §12) alla luce delle sintesi: quali decisioni tengono, quali cambiano. Diventerà uno o più ticket di discussione quando si sapranno i temi emersi.
- **Decisione sul secondo gruppo** (fascicolo per la vendita), dopo i colloqui con alcuni venditori.
- **Esito della pre-adesione**: chi la propone, quando, come si registra l'esito e cosa conta come impegno.
- **Domande che le ricerche faranno emergere** e che possono cambiare il percorso 1 (per esempio come si paga il canone al banco, chi è titolare dei dati, quali scadenze entrano nel percorso).
- **Controllo A**: la verifica finale, voce per voce, con le evidenze raccolte.

## Fuori ambito

- **Design, architettura, stack e nome del prodotto**: esclusi dalla destinazione (STUDIO.md); vengono dopo il controllo A (METODO.md, passi 6–7).
- **Specifiche dei percorsi 2–4** (richiesta d'aiuto, bollette dell'inquilino, report annuale): la destinazione è la specifica del percorso 1. I colloqui possono comunque raccogliere evidenze su questi temi.
- **Ciò che PRODUCT.md §12 (19/10/2026) dichiara fuori dalla prima versione**: livelli, «plus» ed extra per l'inquilino; più agenzie e vendita ad altre agenzie; wallet, contactless, terminale da banco e totem; pagamento nell'app, contanti nei punti convenzionati, solleciti e chiamate automatiche all'inquilino; collegamento della casella e fatture elettroniche; WhatsApp, SMS, app iPhone e traduzioni; abbonamento per i tecnici e preventivi per lavori grandi; fascicolo per la vendita come servizio, condivisione dello storico con chi vuole comprare e sito vetrina; consulenza annuale inclusa, piano di investimento, casa in 3D, domotica, assistente AI e bozze di contratti. Resta in ambito la sola *decisione* sul secondo gruppo, che la destinazione richiede.
- **Misura del tempo reale dell'agenzia per cliente e dei tempi della richiesta**: si fa nel pilota (PRODUCT.md §12, T3), dopo lo studio.
