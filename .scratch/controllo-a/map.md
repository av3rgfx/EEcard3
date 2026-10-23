# Dalla specifica del percorso 1 al design

Type: map (wayfinder:map)
Aperta: 19/10/2026; destinazione ridisegnata il 22/10/2026 (prima: «Superare il controllo A con le evidenze»)

## Destinazione (Destination)

La specifica del primo percorso completo, **attivazione e canone del mese per le case gestite da ƎE**, confermata dall'utente; poi il controllo A ([docs/METODO.md](../../docs/METODO.md), passo 5) e il passaggio al design (passo 6). Niente colloqui né pre-adesione: le evidenze con i clienti arrivano dal pilota (decisione dell'utente del 22/10/2026, [PRODUCT.md](../../PRODUCT.md) §12). Criteri di arrivo in [docs/STUDIO.md](../../docs/STUDIO.md), in cima.

## Note (Notes)

- **Dominio:** servizio per la cura della casa di un'agenzia immobiliare (ƎE). Parole decise in [GLOSSARY.md](../../GLOSSARY.md); provvisorie in [PRODUCT.md](../../PRODUCT.md) §8. Regole del dominio in PRODUCT.md §7.
- **Regole del progetto:** [AGENTS.md](../../AGENTS.md). Fase di studio: niente codice applicativo, niente stack, niente schermate. Repository pulito: nessun riuso di tentativi precedenti. Solo dati inventati; nessun servizio, account o messaggio reale senza autorizzazione.
- **Skill per tipo di ticket:** `research` per le ricerche (un file per tema in `docs/ricerca/`, fonti primarie con data, parere professionale segnalato); `grilling` e `domain-modeling` per le decisioni; `ux-strategy` per proposta di valore e misure di successo; `prototype` solo per una prova usa e getta con una domanda precisa.
- **Le decisioni sono dell'utente, i fatti li cerca l'agente.** I fatti che conosce solo l'agenzia si chiedono all'agenzia con un elenco preciso.
- **Dove si registra:** decisioni di prodotto in PRODUCT.md §12 (con data e motivo), la specifica del percorso 1 in PRODUCT.md §10, le misure di successo in §13; la discussione resta nel ticket. Niente registri paralleli.
- **Tracker:** Local Markdown ([riferimento](../../.agents/skills/setup-matt-pocock-skills/issue-tracker-local.md)). Un file per ticket in `issues/`; righe `Type:`, `Status:` (`open`, `claimed`, `resolved`) e `Blocked by:`. Intestazioni doppie come nei modelli di [templates/](../../templates/): «Domanda (Question)», «Risposta (Answer)», «Commenti (Comments)». Nessun ticket, commento o branch remoto: le ricerche si salvano nel branch di lavoro della sessione.
- **Persone vere:** dal 22/10/2026 lo studio non fa colloqui né pre-adesione (PRODUCT.md §12); le evidenze con i clienti arrivano dal pilota. Mai partecipanti, citazioni o risultati inventati.
- **Impianto deciso dall'utente:** il 19/10/2026 la prova sulle bollette segue lo schema autorizzato (PRODUCT.md §12), si aggiunge «Fatti dall'agenzia ƎE» e i pareri professionali restano fuori dalla mappa (vedi «Fuori ambito»). Il 22/10/2026 cadono colloqui e pre-adesione; prezzo e condizioni dell'adesione si decidono prima del pilota.
- **Percorso previsto:** ricerche → fatti dall'agenzia → specifica del percorso 1 → controllo A → design. In parallelo, senza bloccare il design del percorso 1: [Prezzo e condizioni dell'adesione](issues/10-prezzo-condizioni-adesione.md), da chiudere prima del pilota; [Prova sulle bollette](issues/08-prova-bollette.md), che serve quando si lavora sulle bollette dell'inquilino; [Ricerca: tessere fisiche, fornitori, personalizzazione, ordini e spedizioni](issues/12-ricerca-tessere-fisiche.md), chiesta dall'utente il 22/10/2026, prima del pilota. Dal 23/10/2026, prima dell'architettura: [Ricerca: dalla planimetria catastale alla vista 3D indicativa](issues/14-ricerca-vista-3d.md), poi [Prova: vista 3D da una planimetria](issues/15-prova-vista-3d.md).
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
- [Specifica del percorso 1: attivazione e canone del mese](issues/09-specifica-percorso-1.md): confermata dall'utente in PRODUCT.md §10; attivazione dell'operatore di ƎE con incarico scritto obbligatorio, accesso con email o cellulare; canone e consegna come due conti distinti, conferma chi riceve il denaro; messaggi di servizio senza importi, nessun sollecito, contestazioni con «Chiama»; misure in §13, prove solo simulate.

## Non ancora specificato (Not yet specified)

Niente: l'ultimo tratto è il ticket [Controllo A e passaggio al design](issues/13-controllo-a.md).

## Fuori ambito (Out of scope)

- **Il lavoro di design, architettura, stack e nome del prodotto**: la destinazione si ferma all'avvio del design (STUDIO.md); vengono dopo il controllo A (METODO.md, passi 6–7). Con il nome va anche il logo del mittente nella casella, che richiede un marchio registrato o un logo già mostrato sul dominio ([ricerca sulle email](../../docs/ricerca/email.md)).
- **Specifiche dei percorsi 2–4** (richiesta d'aiuto, bollette dell'inquilino, report annuale): la destinazione è la specifica del percorso 1.
- **Ciò che PRODUCT.md §12 (19/10/2026) dichiara fuori dalla prima versione**: livelli, «plus» ed extra per l'inquilino; più agenzie e vendita ad altre agenzie; wallet, contactless, terminale da banco e totem; pagamento nell'app, contanti nei punti convenzionati, solleciti e chiamate automatiche all'inquilino; collegamento della casella e fatture elettroniche; WhatsApp, SMS, app iPhone e traduzioni; abbonamento per i tecnici e preventivi per lavori grandi; fascicolo per la vendita come servizio, condivisione dello storico con chi vuole comprare e sito vetrina; consulenza annuale inclusa, piano di investimento, casa in 3D (salvo la vista 3D indicativa, entrata come prova a condizione il 23/10/2026, [Controllo A e passaggio al design](issues/13-controllo-a.md)), domotica, assistente AI e bozze di contratti.
- **Altre scadenze della casa nello scadenzario** (IMU, TARI, controlli degli impianti): fuori dal percorso 1, che copre solo le scadenze della locazione; l'utente chiede di integrarle più avanti (22/10/2026), gli impianti con il percorso 2 ([Specifica del percorso 1](issues/09-specifica-percorso-1.md), decisione 19).
- **Legame con gli ex inquilini** (spazio delle bollette aperto dopo la locazione, adesione a pagamento con un periodo gratuito): idea dell'utente del 22/10/2026, da riprendere dopo il pilota come scelta commerciale ([Specifica del percorso 1](issues/09-specifica-percorso-1.md), decisione 26; PRODUCT.md §5.6).
- **Misura del tempo reale dell'agenzia per cliente e dei tempi della richiesta**: si fa nel pilota (PRODUCT.md §12, T3), dopo lo studio.
- **Ottenere i pareri professionali** (legale, fiscale, privacy) che le ricerche segnalano: si fa prima del pilota (METODO.md, passo 9), per decisione dell'utente del 19/10/2026. Eccezione: un punto che impedisce di specificare il percorso 1 diventa una decisione in questa mappa. Il parere sui servizi di pagamento (passaggio del canone da ƎE al proprietario) riguarda la pratica attuale dell'agenzia e non impedisce la specifica.
- **Colloqui, sintesi e pre-adesione** (decisione dell'utente del 22/10/2026, PRODUCT.md §12): le evidenze con i clienti arrivano dal pilota.
  - [Materiali per i colloqui](issues/07-materiali-colloqui.md): chiuso senza materiali preparati, perché i colloqui non si fanno.
  - Svolgimento dei colloqui e sintesi anonime: non si fanno.
  - Conferma o correzione delle decisioni del 18–19/10/2026 con le sintesi: le decisioni restano come sono; la verifica passa al pilota.
  - Esito della pre-adesione: non c'è proposta; prezzo e condizioni le decide l'utente, le adesioni si contano nel pilota.
  - Decisione sul secondo gruppo (fascicolo per la vendita): si prende dopo il pilota, per scelta dell'utente del 22/10/2026; il fascicolo per la vendita era già fuori dalla prima versione.
