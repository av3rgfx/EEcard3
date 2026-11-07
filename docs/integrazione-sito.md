# Integrazione fra Connetto e il sito di ƎE

Documento di passaggio fra questo repository (Connetto) e quello del sito dell'agenzia (`av3rgfx/Conneto-Sito`), scritto il 5/11/2026 dopo la consegna del sito dello stesso giorno. Serve all'agente del sito per sapere cosa può integrare, cosa deve attendere e su quale contratto; alle sessioni di Connetto per costruire la propria parte. Lo aggiornano solo le sessioni di Connetto; il sito non si modifica da qui.

Tre livelli, sempre distinti:
- **Implementato e verificato:** ciò che esiste ed è stato provato (§1).
- **Contratto proposto:** proposta tecnica dell'agente, da confermare (§4–§7). Non è un'API esistente.
- **Aperto:** decisioni dell'utente o pareri che mancano (§9).

## 1. Stato reale al 5/11/2026

- **Nessun endpoint esiste.** Connetto è in fase di studio: nel repository non c'è codice applicativo, nessun server, nessun database, nessun account di servizio. Il percorso 1 ha design e architettura pronti per il controllo B, che non è ancora stato fatto ([STATUS.md](../STATUS.md)); la costruzione viene dopo il piano del passo 8 ([docs/METODO.md](METODO.md)).
- **Nessun indirizzo, chiave o data di disponibilità.** Il dominio dipende dal parere sul nome Connetto; nessuna chiave è stata generata; nessuna data di consegna è stabilita.
- **Stack di Connetto: documentato, non installato.** TypeScript, React Router, Better Auth, Drizzle su PostgreSQL 17, Scalingo a Parigi, Amazon SES a Milano, Skebby per gli SMS ([ARCHITECTURE.md](../ARCHITECTURE.md), «Decisioni confermate»). Nessun servizio è attivo e nessun account è aperto. Coincide con lo stack scelto dal sito, ma applicazioni, database, credenziali e rilasci restano separati.
- **Già deciso in Connetto** (3/11/2026, [PRODUCT.md](../PRODUCT.md) §12; [ARCHITECTURE.md](../ARCHITECTURE.md), «Richieste del collaboratore di ƎE», da confermare al controllo B): un elenco JSON in sola lettura delle valutazioni pubblicate e non scadute, protetto da una chiave del sito che si può cambiare e da un limite di richieste, che passa dal guardiano con la fonte di accesso «sito». Sono decisi i campi pubblici (zona, tipo, metri quadri, cifra, scadenza, identificativo che non dice la casa), non il loro formato.
- **Deciso il 6/11/2026** ([PRODUCT.md](../PRODUCT.md) §12): l'elenco dei professionisti della rete con il loro sì al sito entra nel percorso 1, accanto a quello delle valutazioni (§6). Nessun endpoint esiste ancora.
- **Deciso il 7/11/2026** ([PRODUCT.md](../PRODUCT.md) §12): chi vende è nel pilota con la casa senza gestione e la valutazione, quindi le valutazioni delle case in vendita arrivano al sito fin dal pilota; non cambiano campi né regole della §5. A vendita fatta il rapporto del proprietario con la casa finisce; cosa succede alla sua valutazione pubblicata è aperto (§9).
- **Il resto di questo documento è proposta.** Le prove della §8 non sono state eseguite: non c'è nulla da provare.

## 2. Decisioni dell'utente recepite

Fonte: consegna del sito del 5/11/2026, con le decisioni prese dall'utente lavorando sul sito; registrate in [PRODUCT.md](../PRODUCT.md) §12 (5/11/2026).
- **Aste escluse** da sito e Connetto: niente sezione, catalogo, acquisizione, sincronizzazione o integrazioni. La ricerca [aste-immobiliari.md](ricerca/aste-immobiliari.md) resta solo come storico superato.
- **Sito: per la parte immobiliare solo la vendita delle case.** Non tocca locazione, gestione, assistenza e valutazioni di Connetto.
- **Rete di professionisti per la compravendita** approvata, con **richieste di contatto mediate dall'agenzia**. Non sono approvati tariffe, commissioni, accordi economici, pubblicità generica, classifiche, prenotazioni, pagamenti o account dei professionisti; nomi, qualifiche e disponibilità non sono verificati.
- **Ruoli complementari:** il sito presenta al pubblico la rete e raccoglie le nuove richieste; Connetto offre il servizio nel contesto della casa del cliente; la rete si gestisce **una volta sola**, senza due elenchi da tenere a mano. Dove sta il registro e come si legge si decide sullo stato reale: Connetto è il candidato naturale, non un servizio disponibile.
- **Automatizzare il più possibile:** si inserisce una volta e si riusa; il lavoro umano resta su scelte ed eccezioni.
- **Software proprio in TypeScript**, Rust solo se serve; nessun servizio dati a pagamento. Non cambia lo stack o i costi già decisi per Connetto.
- **Sezione pubblica delle valutazioni autorizzate** sul sito, distinta dal catalogo delle case in vendita: decisa. Navigazione e presentazione sono del sito.
- **Contatti dal sito** gestiti sul sito: una lista con stati nuova, presa in carico, chiusa e una notifica all'agenzia, senza dipendere da Connetto. Il sito è la fonte autorevole; **Connetto non ha una seconda coda** per questo flusso.
- **Sito:** gestione degli annunci da parte di una sola persona senza seconda approvazione, stack TypeScript/React Router/PostgreSQL/Drizzle/Scalingo, accesso dell'operatore del sito con Better Auth e passkey. Non cambiano ruoli, permessi, account o dati di Connetto.

## 3. Confini fra i dati

| Oggetto | Fonte autorevole | Cosa esce verso l'altro prodotto |
| --- | --- | --- |
| **Annuncio di vendita** (prezzo di vendita, disponibilità, descrizioni, foto autorizzate) | Sito | Nulla. Una casa o una valutazione di Connetto non diventa un annuncio da sola. |
| **Valutazione della casa** | Connetto | Solo le valutazioni con il sì del proprietario, non revocato e non scadute, con i soli campi della §5. |
| **Professionista** (scheda, legame con le case, sì a comparire) | Connetto (deciso il 6/11/2026, §6) | Solo i membri della rete ƎE con il proprio sì al sito, con i soli campi della §6. |
| **Contatto dal sito** (nome, recapito, messaggio, riferimento pubblico) | Sito | Nulla nella prima fase (§7). |

Regole che valgono per tutti: nessun nome di clienti, indirizzo preciso, foto, documento o dato del fascicolo esce da Connetto; la pubblicazione di un professionista non gli dà accesso a una casa; nessun invio automatico di documenti o dati privati ai professionisti; un visitatore del sito non viene mai collegato in automatico a una casa privata, a un account o a una valutazione.

## 4. Contratto proposto: regole comuni (versione 1)

Il meccanismo più semplice che regge le revoche: **il sito legge da Connetto un elenco completo**, server a server, e lo sostituisce per intero a ogni lettura. Niente webhook, code, account nuovi o servizi in più.

**Trasporto e indirizzi.** Solo HTTPS, metodo `GET`, risposta `application/json; charset=utf-8`. Percorsi proposti, relativi a un indirizzo base che oggi non esiste: `/api/sito/v1/valutazioni` e `/api/sito/v1/professionisti`. Connetto risponde con `Cache-Control: no-store`.

**Autenticazione.** Intestazione `Authorization: Bearer <chiave>`.
- La chiave è un valore casuale di almeno 32 byte, in base64url, con un prefisso riconoscibile (per esempio `connetto_sito_`) per farla trovare dai controlli dei segreti.
- **Nel sito** sta solo in una variabile d'ambiente del server (Scalingo), mai nel codice, nel repository, nei registri, nel browser o in una pagina. Le chiamate partono solo dal server del sito.
- **In Connetto** si conserva solo l'impronta della chiave, con nome, data di creazione e autorizzazioni.
- **Autorizzazioni distinte:** ogni chiave appartiene alla fonte di accesso «sito» e porta permessi separati per elenco, `valutazioni:lettura` e `professionisti:lettura` (quest'ultimo deciso il 6/11/2026). Con la chiave del sito non si legge nient'altro: né pagine dei clienti né dati dell'operatore.
- **Rotazione senza interruzioni:** fino a due chiavi attive per la fonte «sito». Si crea la nuova, la si mette nel sito, si controlla una lettura riuscita, si revoca la vecchia. Una chiave revocata smette di funzionare alla richiesta successiva. Rotazione subito se una chiave può essere uscita; altrimenti con la frequenza che si concorda (§9).

**Limiti.** Proposta: 60 richieste al minuto per chiave; oltre, `429` con `Retry-After` in secondi. Il sito ne fa molte meno (vedi «Lettura»).

**Lettura.** Ogni risposta è l'**elenco completo** di ciò che si può pubblicare in quel momento, calcolato dal guardiano alla richiesta, senza copie dentro Connetto: una revoca o una scadenza vale dalla richiesta successiva. Niente paginazione nella versione 1: si attendono al più alcune centinaia di voci (inferenza: 100–200 case nel pilota). Se un elenco supera 1.000 voci si passa a una versione 2 con la paginazione. L'ordine dell'elenco **non ha significato**; l'ordine di presentazione lo decide il sito secondo le regole decise (per i professionisti, ticket [Visibilità gratuita, trasparenza e confini](../.scratch/proposte-collaboratore-4-novembre/issues/09-visibilita-trasparenza.md)).

**Copie, ritiri e latenza massima di ritiro.** Il sito decide come leggere (a ogni pagina, o a intervalli con una copia), ma deve rispettare **T_ritiro**: il tempo massimo fra la revoca, la scadenza o la cancellazione in Connetto e la scomparsa del dato da tutte le pagine e copie pubbliche del sito. **T_ritiro va concordato con l'utente** (§9): è una scelta su privacy e impegno del proprietario, non tecnica, e qui non si fissa.
- Il sito tiene al massimo **l'ultimo elenco completo** letto con successo, con l'ora della lettura; ogni lettura riuscita lo sostituisce per intero. Una voce che non c'è più nell'elenco sparisce da pagine, copia nel database, cache e CDN.
- Regola semplice: **intervallo di lettura + durata della cache pubblica (CDN) ≤ T_ritiro**; se una pagina si può svuotare dalla CDN a comando, lo si fa alla sostituzione dell'elenco.
- La **scadenza** la applica anche il sito, da solo: una valutazione sparisce appena passa la sua data (§5), anche senza una lettura nuova.
- Le pagine di una voce ritirata rispondono `404` (o `410`) e escono dalla mappa del sito. Le copie dei motori di ricerca non dipendono da noi: dove si può si chiede la rimozione (parere privacy, §9).
- Nei registri del sito solo conteggi ed esiti, non il contenuto degli elenchi.

**Fonte non disponibile.** Se Connetto non risponde, risponde con un errore o con un elenco non valido, il sito tiene l'ultimo elenco valido **solo finché non è più vecchio di T_ritiro**; dopo, toglie le voci di quella sezione e mostra un messaggio neutro (per esempio che la sezione è momentaneamente non disponibile, con il contatto dell'agenzia). *Motivo:* oltre T_ritiro il sito non può escludere una revoca. Tenere più a lungo l'elenco vecchio è un'alternativa che chiede un sì esplicito dell'utente (§9).

**Errori.** Corpo comune, senza dettagli interni:

```json
{ "errore": { "codice": "chiave_non_valida", "messaggio": "Chiave mancante o non valida.", "id_richiesta": "req_SINTETICO01" } }
```

| HTTP | `codice` | Quando | Cosa fa il sito |
| --- | --- | --- | --- |
| 401 | `chiave_non_valida` | chiave assente, sconosciuta o revocata | non riprova a raffica; avvisa chi mantiene il sito |
| 403 | `permesso_mancante` | chiave valida senza il permesso di quell'elenco | come sopra |
| 404 | `non_trovato` | percorso o versione inesistente | come sopra |
| 429 | `troppe_richieste` | oltre il limite | aspetta `Retry-After` |
| 503 | `non_disponibile` | manutenzione o guasto noto | riprova più tardi; regola «Fonte non disponibile» |
| 500 | `errore_interno` | errore imprevisto | come 503 |

`id_richiesta` serve a confrontare i registri dei due lati senza scambiarsi dati.

**Compatibilità e versioni.** La versione maggiore sta nel percorso (`/v1`) e nel campo `versione_contratto` (`"1.0"`).
- Dentro la versione 1 si possono solo **aggiungere campi facoltativi**; il sito ignora i campi che non conosce.
- Togliere o rinominare un campo, cambiarne il tipo o il significato vuol dire versione 2, con le due versioni attive insieme per un periodo concordato.
- Il sito controlla il formato: una voce non valida si scarta da sola (e si conta nei registri), un involucro non valido vale come lettura fallita.

**Valori assenti.** Un campo obbligatorio non è mai `null` né vuoto: Connetto non pubblica una voce incompleta. Un campo facoltativo assente vale `null` e vuol dire «non fornito»: il sito non mostra nulla al suo posto, né segnaposto né valori inventati.

## 5. Elenco delle valutazioni pubblicate

Stato: **campi pubblici decisi dall'utente il 3/11/2026; formato proposto; endpoint inesistente.**

Una valutazione è nell'elenco quando, nel momento della richiesta: è pubblicata con il sì del proprietario (tasto in Connetto o foglio firmato caricato dall'operatore), il sì non è revocato, la casa non è stata tolta e la data di oggi non ha superato `valida_fino_al`. Le valutazioni scadute restano, con la cifra, solo nello storico dell'operatore e non escono mai.

| Campo | Tipo | Obbligatorio | Significato |
| --- | --- | --- | --- |
| `id` | stringa, 1–64 caratteri `[A-Za-z0-9_-]` | sì | Identificativo opaco della **valutazione**, casuale, non ricavato da altri identificativi. Stabile finché quella valutazione è pubblicata e uguale se la stessa valutazione si ripubblica; una valutazione nuova della stessa casa ha un `id` nuovo. Nessun campo collega due valutazioni della stessa casa, e il sito non prova a farlo. |
| `zona` | stringa, 1–80 caratteri | sì | Zona della casa, da un elenco tenuto dall'agenzia in Connetto; mai un indirizzo. Grandezza della zona da decidere (§9). |
| `tipo` | stringa, 1–40 caratteri | sì | Tipo di casa, da un elenco chiuso da decidere (§9). |
| `metri_quadri` | intero, 1–10.000 | sì | Superficie. Quale misura (per esempio commerciale) è da decidere (§9). |
| `importo_centesimi` | intero ≥ 0 | sì | La cifra della valutazione in centesimi di euro, senza decimali in virgola mobile. |
| `valuta` | stringa | sì | Sempre `"EUR"` nella versione 1. |
| `valida_fino_al` | data `AAAA-MM-GG` | sì | Ultimo giorno di validità, compreso, nel fuso di Roma. Dal giorno dopo, alle 00:00 di Roma, la valutazione non si mostra più, anche se il sito non ha letto di nuovo. |

Esempio, solo con dati inventati:

```json
{
  "versione_contratto": "1.0",
  "generato_il": "2027-03-01T09:00:00Z",
  "valutazioni": [
    {
      "id": "val_Q7mZ2kP9xL4tR8wB",
      "zona": "Zona d'esempio Nord",
      "tipo": "appartamento",
      "metri_quadri": 85,
      "importo_centesimi": 19800000,
      "valuta": "EUR",
      "valida_fino_al": "2027-08-31"
    }
  ]
}
```

Elenco vuoto: `"valutazioni": []`, risposta `200`. `generato_il` è l'ora del calcolo in UTC (RFC 3339).

## 6. Elenco dei professionisti pubblicabili

Stato: **rete approvata dall'utente il 5/11/2026; registro e lettura da Connetto decisi il 6/11/2026, nel percorso 1; campi solo candidati; endpoint inesistente.** Il 6/11/2026 l'utente ha deciso che il registro della rete con il sì dei professionisti al sito entra nel percorso 1 e che il sito legge da Connetto anche questo elenco ([PRODUCT.md](../PRODUCT.md) §12, 6/11/2026, che precisa il 3/11/2026). All'inizio comprende la rete della compravendita; se comprende anche i servizi presentati sul sito il 6/11/2026 si decide nel [ticket 08](../.scratch/proposte-collaboratore-4-novembre/issues/08-professionisti-compravendita-aste.md). Accanto all'elenco, sul sito e in Connetto, vanno i testi su scelta, ordine e rapporti economici ([ticket 09](../.scratch/proposte-collaboratore-4-novembre/issues/09-visibilita-trasparenza.md)) e una breve spiegazione «chi fa cosa» fra agenzia, notaio e tecnico (ticket 08), controllata dall'avvocato.

**Tre cose distinte nel registro** (proposta per il modello di Connetto, sopra i «tecnici della casa» già decisi: una scheda nell'agenzia con nome, mestiere, telefono e liberatoria, senza account):
1. **Presenza nel registro:** la scheda del professionista nell'agenzia, inserita una volta dall'operatore. Vale anche per il tecnico scelto da un proprietario.
2. **Legame privato con una casa:** «I tecnici di questa casa», prima quello del proprietario poi quello dell'agenzia. **Non esce mai** verso il sito.
3. **Comparire sul sito:** servono insieme due fatti, entrambi registrati con data, autore e fonte: la scelta dell'agenzia di mettere il professionista nella **rete ƎE**, e il **sì del professionista a comparire sul sito**, scritto, separato dalla liberatoria dell'app e revocabile in ogni momento ([ricerca](ricerca/segnalare-professionisti.md), §2.4). Il tecnico di un proprietario non entra nella rete da solo. Comparire non dà accesso a nessuna casa.

Si inserisce una volta: la stessa scheda serve a «I tecnici di questa casa», a «Chiama» e all'elenco del sito; il sito non tiene un secondo registro. Una revoca del sì, l'uscita dalla rete o la cancellazione della scheda tolgono il professionista dall'elenco alla richiesta successiva, con le stesse regole di T_ritiro della §4.

Campi candidati, **da approvare** con l'utente e con il parere privacy; il sì del professionista copre esattamente questi testi:

| Campo | Tipo | Obbligatorio | Significato |
| --- | --- | --- | --- |
| `id` | stringa opaca, come per le valutazioni | sì | Identificativo stabile del professionista per il sito, diverso dagli identificativi interni. |
| `nome_pubblico` | stringa, 1–120 caratteri | sì | Nome dello studio o della persona, come l'ha approvato il professionista. |
| `professione` | stringa | sì | Da un elenco chiuso da decidere. L'audio cita geometra, ingegnere e notaio; non è un elenco approvato. |
| `zona_attivita` | stringa, 1–80 caratteri | sì | Dove lavora, con la stessa grandezza delle zone delle valutazioni. |
| `presentazione` | stringa fino a 280 caratteri, oppure `null` | no | Breve testo approvato dal professionista; `null` se non l'ha dato. |

Non escono, per scelta: telefono, email, indirizzo e numero di iscrizione all'albo (il contatto passa dall'agenzia; l'iscrizione verificata dall'operatore può diventare un campo dopo il parere), case seguite, clienti, liberatoria, note interne, giudizi, posizioni in classifica.

Esempio, solo con dati inventati:

```json
{
  "versione_contratto": "1.0",
  "generato_il": "2027-03-01T09:00:00Z",
  "professionisti": [
    {
      "id": "pro_H3nV8cT1yK6sD2qF",
      "nome_pubblico": "Studio Tecnico d'Esempio",
      "professione": "geometra",
      "zona_attivita": "Zona d'esempio Nord",
      "presentazione": null
    }
  ]
}
```

**Nell'attesa** il sito può presentare i servizi dell'agenzia e il suo contatto, **senza** un elenco di professionisti proprio e senza nomi d'esempio presentati come reali.

## 7. Contatti dal sito verso Connetto: nessun flusso di scrittura nella prima fase

Stato: **non serve e non si costruisce.** L'utente ha confermato che i contatti dal sito si gestiscono sul sito, che è la fonte autorevole; una seconda coda in Connetto creerebbe due liste da tenere allineate.

**Alternativa per l'agenzia, già scelta:** la lista del sito con stati nuova, presa in carico, chiusa e la notifica all'agenzia. Un contatto può portare il **riferimento pubblico** facoltativo di un annuncio, di una valutazione (`val_…`) o di un professionista (`pro_…`), come testo, senza alcun collegamento automatico con una casa, un account o una persona di Connetto.

Proposta per Connetto, da confermare al controllo B: la ricerca «Trova cliente o casa» dell'operatore accetta anche un identificativo pubblico e apre la valutazione o la scheda del professionista, attraverso il guardiano. L'operatore che prende in carico un contatto dal sito sa così di quale casa o professionista si parla senza ricopiare nulla; il visitatore non entra in Connetto.

Mettere in contatto un visitatore con un professionista resta una scelta dell'operatore. **Mandare i dati del visitatore al professionista** in automatico non è deciso: chiede il consenso del visitatore e un parere privacy (§9). Nessun tempo di risposta si promette finché l'agenzia non l'ha concordato.

*Parole:* in Connetto «Richiesta» è la domanda d'aiuto per una casa fatta nella piattaforma ([GLOSSARY.md](../GLOSSARY.md)). Qui si dice «contatto dal sito» per non confonderli.

*Se un giorno servirà* una scrittura verso Connetto, il contratto dovrà definire prima: dati minimi; riferimento pubblico facoltativo; un permesso di scrittura separato da quelli di lettura; controllo dei campi; protezione dagli abusi lasciata al sito; una chiave di reinvio con la stessa risposta per lo stesso contenuto e il rifiuto di un contenuto diverso; una risposta che dica davvero se il contatto è registrato; chi lo prende in carico; una sola fonte autorevole al posto della lista del sito, mai due code.

## 8. Verifiche condivise

Da eseguire quando esisteranno le due parti, solo con dati inventati. **Nessuna è stata eseguita.**
1. **Niente dati privati:** con case, persone, foto, documenti e tecnici inventati, l'elenco contiene solo i campi delle §5 e §6; un controllo automatico rifiuta qualsiasi altro campo.
2. **Permessi per elenco e per canale:** senza chiave `401`; chiave revocata `401`; chiave senza `professionisti:lettura` `403` su quell'elenco; la chiave del sito non apre pagine dei clienti o dell'operatore.
3. **Revoca:** si toglie il sì di un proprietario o di un professionista; la voce manca alla lettura successiva in Connetto e sparisce dal sito entro T_ritiro, compresa la CDN; la sua pagina risponde `404` o `410`.
4. **Scadenza:** una valutazione con `valida_fino_al` di ieri non è nell'elenco; nel sito sparisce alle 00:00 di Roma anche senza una lettura nuova.
5. **Ritiro e cancellazione:** casa tolta, valutazione sostituita, professionista uscito dalla rete o cancellato: stesso esito della revoca.
6. **Tecnico del proprietario:** un tecnico legato a una casa, senza rete e senza sì, non compare mai.
7. **Guasto:** Connetto spento o con risposte `500` e `503`: il sito tiene l'ultimo elenco valido fino a T_ritiro, poi toglie le voci e mostra il messaggio neutro; nessun errore tecnico arriva al visitatore.
8. **Dati non validi:** una voce senza un campo obbligatorio si scarta da sola; un involucro rotto vale come lettura fallita.
9. **Rotazione della chiave:** con due chiavi attive le letture continuano; dopo la revoca della vecchia, `401` con la vecchia e `200` con la nuova; la chiave non compare in registri, codice, risposte o pagine.
10. **Limiti:** oltre il limite `429` con `Retry-After`; il sito aspetta e poi riprende.
11. **Compatibilità:** un campo facoltativo nuovo nella risposta non rompe il sito.

## 9. Decisioni e pareri aperti

| Domanda | Chi decide | Ferma |
| --- | --- | --- |
| ~~Connetto offre l'elenco dei professionisti, e in quale fase?~~ **Deciso il 6/11/2026:** sì, nel percorso 1 ([ticket 05](../.scratch/proposte-collaboratore-4-novembre/issues/05-cosa-tocca-percorso-1.md)). Restano: quali professioni e mestieri comprende, e le parole (ticket [08](../.scratch/proposte-collaboratore-4-novembre/issues/08-professionisti-compravendita-aste.md)) | utente | §6 |
| Valutazione pubblicata di una casa **venduta**: resta fino alla scadenza o al ritiro del sì, come oggi, oppure esce con la vendita? (7/11/2026, [ticket 06](../.scratch/proposte-collaboratore-4-novembre/issues/06-chi-vende-chi-compra.md)) | utente | §5 |
| **T_ritiro**, la latenza massima di ritiro dal sito | utente, con il parere privacy | §4, prove 3–7 |
| Mostrare l'ultimo elenco oltre T_ritiro se Connetto non risponde | utente | §4 |
| Grandezza della zona, elenco dei tipi, quale misura dei metri quadri | utente con ƎE | §5 |
| Campi pubblici e testo del sì dei professionisti; elenco delle professioni | utente, parere privacy | §6 |
| Ordine dei professionisti sul sito e cosa si dice su scelta e rapporti economici | utente ([ticket 09](../.scratch/proposte-collaboratore-4-novembre/issues/09-visibilita-trasparenza.md)) | presentazione sul sito |
| Mandare i dati di un visitatore a un professionista | utente, parere privacy | §7 |
| Indirizzo base e dominio di Connetto | dopo il parere sul nome | tutto |
| Limite di richieste e frequenza della rotazione | proposta tecnica, al controllo B | §4 |
| Pareri già segnalati: valutazione pubblicata (privacy), pubblicazione dei professionisti, imparzialità del mediatore e rete ([ricerca](ricerca/segnalare-professionisti.md), §6) | professionisti esterni | prima dell'uso reale |

Coordinamento tecnico, solo proposte: se sito e Connetto stanno sotto lo stesso dominio di ƎE, ognuno usa il proprio nome di host come identificativo delle passkey, così gli account restano separati; per le email, mittenti e identità di invio distinti per i due prodotti.

## 10. Aggiornamenti fra i due progetti

Per ogni modifica di Connetto che tocca il sito, la sessione di Connetto aggiorna questo documento e aggiunge una voce in cima a [consegne-al-sito.md](consegne-al-sito.md), il registro che il sito legge a inizio sessione, con:
- decisione e fonte (data, ticket o voce di PRODUCT.md §12);
- dati e contratto interessati (sezione e campi);
- compatibilità (versione, cambiamenti solo aggiuntivi o rottura);
- disponibilità effettiva (cosa esiste davvero, dove, da quando);
- prove svolte, con l'esito;
- azione richiesta al sito.

Mai segreti, chiavi o dati reali negli aggiornamenti. Le consegne ricevute dal sito, con cosa è stato recepito e cosa realizzato, sono annotate nel ticket [Integrazione con il sito di ƎE](../.scratch/proposte-collaboratore-4-novembre/issues/13-integrazione-sito.md).
