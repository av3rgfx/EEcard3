# Superare il controllo A con le evidenze

Type: map (wayfinder:map)
Aperta: 19/10/2026

## Destinazione (Destination)

La specifica del primo percorso completo, **attivazione e canone del mese per le case gestite da ƎE**, confermata dall'utente e sostenuta da colloqui con persone vere, da una prova di pre-adesione con un prezzo e dalle ricerche che potrebbero cambiarla; con queste evidenze si spunta il controllo A ([docs/METODO.md](../../docs/METODO.md), passo 5). Criteri di arrivo in [docs/STUDIO.md](../../docs/STUDIO.md), in cima.

## Note (Notes)

- **Dominio:** servizio per la cura della casa di un'agenzia immobiliare (ƎE). Parole decise in [GLOSSARY.md](../../GLOSSARY.md); provvisorie in [PRODUCT.md](../../PRODUCT.md) §8. Regole del dominio in PRODUCT.md §7.
- **Regole del progetto:** [AGENTS.md](../../AGENTS.md). Fase di studio: niente codice applicativo, niente stack, niente schermate. Repository pulito: nessun riuso di tentativi precedenti. Solo dati inventati; nessun servizio, account o messaggio reale senza autorizzazione.
- **Skill per tipo di ticket:** `research` per le ricerche (un file per tema in `docs/ricerca/`, fonti primarie con data, parere professionale segnalato); `ux-research` per i materiali dei colloqui e della pre-adesione; `grilling` e `domain-modeling` per le decisioni; `ux-strategy` per proposta di valore e misure di successo; `prototype` solo per una prova usa e getta con una domanda precisa.
- **Le decisioni sono dell'utente, i fatti li cerca l'agente.** I fatti che conosce solo l'agenzia si chiedono all'agenzia con un elenco preciso.
- **Dove si registra:** decisioni di prodotto in PRODUCT.md §12 (con data e motivo), la specifica del percorso 1 in PRODUCT.md §10, le misure di successo in §13; la discussione resta nel ticket. Niente registri paralleli.
- **Tracker:** Local Markdown ([riferimento](../../.agents/skills/setup-matt-pocock-skills/issue-tracker-local.md)). Un file per ticket in `issues/`; righe `Type:`, `Status:` (`open`, `claimed`, `resolved`) e `Blocked by:`. Intestazioni doppie come nei modelli di [templates/](../../templates/): «Domanda (Question)», «Risposta (Answer)», «Commenti (Comments)». Nessun ticket, commento o branch remoto: le ricerche si salvano nel branch di lavoro della sessione.
- **Persone vere:** l'agente prepara, l'agenzia conduce; nel repository entrano solo sintesi anonime, senza dati personali. Mai partecipanti, citazioni o risultati inventati.
- **Impianto deciso dall'utente il 19/10/2026:** la proposta di pre-adesione arriva dopo i colloqui e la specifica; la prova sulle bollette segue lo schema autorizzato (entrambe in PRODUCT.md §12); ai ticket chiesti si aggiunge «Fatti dall'agenzia ƎE»; i pareri professionali restano fuori dalla mappa (vedi «Fuori ambito»).
- **Percorso previsto:** ricerche → fatti dall'agenzia → materiali → colloqui → specifica del percorso 1 → proposta di pre-adesione → controllo A. La prova sulle bollette e la decisione su chi fornisce la piattaforma corrono in parallelo.
- **Ricerche del 19/10/2026:** svolte da cinque agenti in parallelo (skill `research`); le decisioni che hanno fatto emergere sono state smistate nei ticket aperti, non decise.

## Decisioni finora (Decisions so far)

<!-- una riga per ticket chiuso: nome con link, poi il succo della risposta -->

- [Ricerca: obblighi dell'agenzia che incassa i canoni al banco](issues/01-incasso-canoni-al-banco.md): «incassato» e «consegnato» sono gli obblighi del mandatario; serve un incarico documentato; la ricevuta di ƎE è quietanza con bollo; contanti ammessi sotto i 5.000 € (obbligo specifico abrogato, da confermare); parere sui servizi di pagamento prima del pilota.
- [Ricerca: adempimenti della locazione da mettere nello scadenzario](issues/02-adempimenti-locazione.md): quasi tutte le scadenze sono note alla firma e ruotano sull'anniversario; il canone del mese cambia solo per ISTAT, riduzioni e acconti; il canone è un importo con versioni; regole da riverificare con i testi unici del 2027.
- [Ricerca: titolarità e privacy dei dati](issues/03-titolarita-privacy-dati.md): ƎE titolare dei dati del percorso 1 e piattaforma probabilmente responsabile; spazio delle bollette probabilmente della piattaforma come titolare autonomo; tutto dipende da chi fornisce la piattaforma (nuovo ticket); i colloqui sono il primo uso reale di dati e vanno preparati con informativa e sintesi davvero anonime.
- [Ricerca: alternative già sul mercato](issues/04-alternative-mercato.md): le funzioni singole sono commodity (0–15 € al mese), l'incasso con garanzia costa il 5–7% del canone; nessuno sa se si è pagato al banco, l'alternativa vera è chiedere all'agenzia; 10 € al mese è in linea, 10 € all'anno è sotto mercato.
- [Ricerca: email che non sembrano spam](issues/05-email-non-spam.md): ai volumi del pilota bastano autenticazione del mittente e poche segnalazioni; AMP e azioni nella casella non raggiungono tutti; un'email che propone qualcosa diventa promozionale: nel percorso 1 solo email di servizio, con il fatto nell'oggetto e un link.
- [Chi fornisce la piattaforma e chi vende l'adesione nel pilota](issues/11-chi-fornisce-la-piattaforma.md): nel pilota la piattaforma è di ƎE, che risponde di tutti i dati con un'informativa sola; ƎE vende l'adesione del proprietario con un foglio separato dall'incarico; l'inquilino ha un'adesione gratuita con tessera, che comprende lo spazio delle bollette; società distinta solo con la seconda agenzia.
- [Fatti dall'agenzia ƎE](issues/06-fatti-agenzia.md): il servizio da 600 € di ƎE descrive l'agenzia di oggi e non entra nel prodotto; incarico di gestione non scritto; meno di 3 persone in agenzia, 1–1,5 ore al giorno confermate; canone consegnato ogni mese con ricevuta firmata; mancano i numeri su case, bonifici ed email, chiesti con sei chiarimenti. Nessuna decisione smentita, due contrasti parziali nella specifica; parere legale e privacy prima del pilota.

## Non ancora specificato (Not yet specified)

- **Svolgimento dei colloqui e sintesi anonime.** Quanti, con chi, in che ordine e con quali tempi lo dirà il piano di [Materiali per i colloqui](issues/07-materiali-colloqui.md); da lì uno o più compiti, che bloccano la [Specifica del percorso 1: attivazione e canone del mese](issues/09-specifica-percorso-1.md).
- **Conferma o correzione delle decisioni del 18–19/10/2026** (PRODUCT.md §12) che non riguardano solo il percorso 1 (chi paga, canale, bollette dell'inquilino, tessera): diventerà uno o più ticket di discussione quando si sapranno i temi emersi dalle sintesi.
- **Decisione sul secondo gruppo** (fascicolo per la vendita), dopo i colloqui con alcuni venditori.
- **Esito della pre-adesione**: la proposta fatta davvero e il risultato registrato; prende forma con la [Proposta di pre-adesione: prezzo, periodicità e forma](issues/10-proposta-pre-adesione.md).
- **Controllo A**: la verifica finale, voce per voce, con le evidenze raccolte.

## Fuori ambito (Out of scope)

- **Design, architettura, stack e nome del prodotto**: esclusi dalla destinazione (STUDIO.md); vengono dopo il controllo A (METODO.md, passi 6–7). Con il nome va anche il logo del mittente nella casella, che richiede un marchio registrato o un logo già mostrato sul dominio ([ricerca sulle email](../../docs/ricerca/email.md)).
- **Specifiche dei percorsi 2–4** (richiesta d'aiuto, bollette dell'inquilino, report annuale): la destinazione è la specifica del percorso 1. I colloqui possono comunque raccogliere evidenze su questi temi.
- **Ciò che PRODUCT.md §12 (19/10/2026) dichiara fuori dalla prima versione**: livelli, «plus» ed extra per l'inquilino; più agenzie e vendita ad altre agenzie; wallet, contactless, terminale da banco e totem; pagamento nell'app, contanti nei punti convenzionati, solleciti e chiamate automatiche all'inquilino; collegamento della casella e fatture elettroniche; WhatsApp, SMS, app iPhone e traduzioni; abbonamento per i tecnici e preventivi per lavori grandi; fascicolo per la vendita come servizio, condivisione dello storico con chi vuole comprare e sito vetrina; consulenza annuale inclusa, piano di investimento, casa in 3D, domotica, assistente AI e bozze di contratti. Resta in ambito la sola *decisione* sul secondo gruppo, che la destinazione richiede.
- **Misura del tempo reale dell'agenzia per cliente e dei tempi della richiesta**: si fa nel pilota (PRODUCT.md §12, T3), dopo lo studio.
- **Ottenere i pareri professionali** (legale, fiscale, privacy) che le ricerche segnalano: si fa prima del pilota (METODO.md, passo 9), per decisione dell'utente del 19/10/2026. Eccezione: un punto che impedisce di specificare il percorso 1 diventa una decisione in questa mappa. Il parere sui servizi di pagamento (passaggio del canone da ƎE al proprietario) riguarda la pratica attuale dell'agenzia e non impedisce la specifica.
