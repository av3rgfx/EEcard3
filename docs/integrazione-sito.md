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
- **Deciso il 7/11/2026, tessera per chi vende** ([PRODUCT.md](../PRODUCT.md) §12): la tessera di chi vende è solo un segno, va a chi ha una casa in vendita in Connetto (dalla valutazione o dall'incarico) e si consegna in agenzia; per ora l'adesione di chi ha solo case in vendita è gratuita; ci sarà una seconda tessera fisica di un altro colore, non ancora scelto. Non cambiano contratto, campi o elenchi: il sito non legge nulla sulla tessera.
- **Deciso l'8/11/2026, professionisti della compravendita** ([PRODUCT.md](../PRODUCT.md) §12): ƎE **indica** i professionisti della Rete ƎE, il cliente sceglie, affida e paga lui; la rete parte dalla compravendita; la spiegazione «chi fa cosa» è una bozza in attesa dell'avvocato. Non cambiano i campi del contratto (§6).
- **Deciso il 9 e il 12/11/2026, trasparenza della rete** ([PRODUCT.md](../PRODUCT.md) §12, 12/11/2026): ordine per mestiere e poi alfabetico, uguale nei due posti; testi su scelta, ordine, albo e rapporti economici, in bozza fino al collaboratore e all'avvocato; verifica delle schede all'ingresso e ogni anno; niente recensioni. Il contratto si arricchisce di **due campi facoltativi candidati** (§6), aggiunta compatibile con la versione 1.
- **Deciso il 12/11/2026, contratto con il sito** ([PRODUCT.md](../PRODUCT.md) §12, 12/11/2026; [ticket 13](../.scratch/proposte-collaboratore-4-novembre/issues/13-integrazione-sito.md)): una valutazione esce anche quando la casa è venduta (§5); **T_ritiro = 15 minuti** e nessun elenco oltre T_ritiro se Connetto non risponde (§4); regole per zona, tipo e metri quadri, elenchi da ƎE (§5); campi pubblici dei professionisti chiusi e contenuto del loro sì al sito (§6); i due campi sui soldi diventano `nota_rapporto_economico` e `frase_rapporti_economici` (§6); nome e simbolo di Connetto non compaiono sul sito prima del parere sul marchio; la copia dei valori visivi di Connetto nel sito resta come riferimento con la versione dichiarata. Nessun endpoint esiste ancora.
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

**Lettura.** Ogni risposta è l'**elenco completo** di ciò che si può pubblicare in quel momento, calcolato dal guardiano alla richiesta, senza copie dentro Connetto: una revoca o una scadenza vale dalla richiesta successiva. Niente paginazione nella versione 1: si attendono al più alcune centinaia di voci (inferenza: 100–200 case nel pilota). Se un elenco supera 1.000 voci si passa a una versione 2 con la paginazione. L'ordine dell'elenco **non ha significato**; l'ordine di presentazione lo decide il sito secondo le regole decise (per i professionisti, deciso il 9/11/2026 nel ticket [Visibilità gratuita, trasparenza e confini](../.scratch/proposte-collaboratore-4-novembre/issues/09-visibilita-trasparenza.md): per `professione`, poi alfabetico per `nome_pubblico`, con una riga che lo dice; §6).

**Copie, ritiri e latenza massima di ritiro.** Il sito decide come leggere (a ogni pagina, o a intervalli con una copia), ma deve rispettare **T_ritiro**: il tempo massimo fra la revoca, la scadenza o la cancellazione in Connetto e la scomparsa del dato da tutte le pagine e copie pubbliche del sito. **T_ritiro è di 15 minuti**, uguale per i due elenchi (deciso dall'utente il 12/11/2026; da confermare con il parere privacy, §9). In Connetto si potrà quindi scrivere accanto al ritiro che la voce sparisce dal sito entro 15 minuti. Le copie dei motori di ricerca ne restano fuori.
- Il sito tiene al massimo **l'ultimo elenco completo** letto con successo, con l'ora della lettura; ogni lettura riuscita lo sostituisce per intero. Una voce che non c'è più nell'elenco sparisce da pagine, copia nel database, cache e CDN.
- Regola semplice: **intervallo di lettura + durata della cache pubblica (CDN) ≤ 15 minuti** (per esempio lettura ogni 5 minuti e cache di 10 al massimo); se una pagina si può svuotare dalla CDN a comando, lo si fa alla sostituzione dell'elenco.
- La **scadenza** la applica anche il sito, da solo: una valutazione sparisce appena passa la sua data (§5), anche senza una lettura nuova.
- Le pagine di una voce ritirata rispondono `404` (o `410`) e escono dalla mappa del sito. Le copie dei motori di ricerca non dipendono da noi: dove si può si chiede la rimozione (parere privacy, §9).
- Nei registri del sito solo conteggi ed esiti, non il contenuto degli elenchi.

**Fonte non disponibile.** Se Connetto non risponde, risponde con un errore o con un elenco non valido, il sito tiene l'ultimo elenco valido **solo finché non è più vecchio di 15 minuti**; dopo, toglie le voci di quella sezione e mostra un messaggio neutro (per esempio che la sezione è momentaneamente non disponibile, con il contatto dell'agenzia), e avvisa chi mantiene il sito. *Deciso dall'utente il 12/11/2026*, senza eccezioni per nessun elenco. *Motivo:* il sito non distingue un Connetto fermo da un collegamento rotto, e oltre T_ritiro non può escludere una revoca.

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

Una valutazione è nell'elenco quando, nel momento della richiesta: è pubblicata con il sì del proprietario (tasto in Connetto o foglio firmato caricato dall'operatore), il sì non è revocato, la casa non è stata tolta, **la vendita della casa non è stata registrata** (deciso il 12/11/2026: il sì vale finché chi l'ha dato è proprietario) e la data di oggi non ha superato `valida_fino_al`. Le valutazioni scadute restano, con la cifra, solo nello storico dell'operatore e non escono mai.

| Campo | Tipo | Obbligatorio | Significato |
| --- | --- | --- | --- |
| `id` | stringa, 1–64 caratteri `[A-Za-z0-9_-]` | sì | Identificativo opaco della **valutazione**, casuale, non ricavato da altri identificativi. Stabile finché quella valutazione è pubblicata e uguale se la stessa valutazione si ripubblica; una valutazione nuova della stessa casa ha un `id` nuovo. Nessun campo collega due valutazioni della stessa casa, e il sito non prova a farlo. |
| `zona` | stringa, 1–80 caratteri | sì | Zona della casa, da un elenco tenuto dall'agenzia in Connetto, lo stesso di `zona_attivita` dei professionisti. Regola del 12/11/2026: mai più piccola di un quartiere o di una frazione, il comune intero se piccolo; mai via, civico o CAP. I nomi delle zone li dà ƎE (§9). |
| `tipo` | stringa, 1–40 caratteri | sì | Tipo di casa, da un elenco chiuso di al massimo 6 parole comuni (12/11/2026). Bozza per ƎE, non approvata: appartamento, attico, casa indipendente, villa, villetta a schiera (§9). |
| `metri_quadri` | intero, 1–10.000 | sì | Superficie usata per la valutazione, in metri quadri interi (12/11/2026). Il sito scrive accanto il nome della misura (per esempio «superficie commerciale»), che ƎE deve indicare (§9); finché manca, nel contratto non c'è un campo per il nome e il sito non lo inventa. |
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

Stato: **rete approvata dall'utente il 5/11/2026; registro e lettura da Connetto decisi il 6/11/2026, nel percorso 1; forma, parole e professioni iniziali decise l'8/11/2026; campi e sì al sito decisi il 12/11/2026; endpoint inesistente.** Il 6/11/2026 l'utente ha deciso che il registro della rete con il sì dei professionisti al sito entra nel percorso 1 e che il sito legge da Connetto anche questo elenco ([PRODUCT.md](../PRODUCT.md) §12, 6/11/2026, che precisa il 3/11/2026). **Deciso l'8/11/2026** nel [ticket 08](../.scratch/proposte-collaboratore-4-novembre/issues/08-professionisti-compravendita-aste.md) (parole in [GLOSSARY.md](../GLOSSARY.md)):
- **Forma, l'indicazione:** ƎE mostra i professionisti della **Rete ƎE**; il cliente o il visitatore sceglie, affida il lavoro e paga lui. Sul sito il contatto passa dall'agenzia (§7); in Connetto da «Chiama». ƎE non smista richieste a mano, non fa consulenza e non dà incarichi per conto del cliente. Regola provvisoria fino alle risposte del collaboratore e dell'avvocato.
- **Parole:** «professionista» per chiunque sia nel registro, «tecnico» solo per chi è legato a una casa per un mestiere, «Rete ƎE» per chi l'agenzia sceglie di indicare. Sul sito un notaio o un geometra non si chiamano «tecnici della casa».
- **Professioni iniziali:** la rete parte dalla **compravendita**; l'elenco chiuso del campo `professione` dipende ancora dalla risposta del collaboratore. Gli altri mestieri presentati dal sito (progettare e rinnovare, traslochi, caldaia e idraulica) potranno entrare nella stessa rete con una decisione dell'utente; **utenze e bollette** no, fino al percorso 3 di Connetto; **mutuo e assistenza legale** solo dopo una verifica delle loro regole. Nell'attesa il sito li presenta con il contatto dell'agenzia, senza nomi.
- **Chi fa cosa:** un solo testo per sito e Connetto, accanto all'elenco; la bozza è nella domanda F14 del [documento per l'avvocato](../.scratch/proposte-collaboratore-4-novembre/domande-vendita-collaboratore-avvocato.md). **Non si pubblica** prima del suo controllo; quando è approvato, Connetto lo consegna al sito con una voce in [consegne-al-sito.md](consegne-al-sito.md). Accanto all'elenco, sul sito e in Connetto, vanno i testi su scelta, ordine e rapporti economici ([ticket 09](../.scratch/proposte-collaboratore-4-novembre/issues/09-visibilita-trasparenza.md)) e una breve spiegazione «chi fa cosa» fra agenzia, notaio e tecnico (ticket 08), controllata dall'avvocato.
- **Trasparenza, decisa il 9 e il 12/11/2026** nel [ticket 09](../.scratch/proposte-collaboratore-4-novembre/issues/09-visibilita-trasparenza.md) ([PRODUCT.md](../PRODUCT.md) §12, 12/11/2026):
  - *Ordine:* raggruppati per `professione`, poi in ordine alfabetico di `nome_pubblico`, uguale in Connetto e sul sito, con una riga che lo dice («In ordine alfabetico, per mestiere»). Nessun altro ordine, e nessun ordine che cambi per rapporti economici.
  - *Testi accanto all'elenco, tutti in bozza fino al controllo dell'avvocato (F12) e da non pubblicare prima:* «Professionisti che conosciamo perché lavoriamo in questa zona, e che hanno accettato di comparire qui. Puoi rivolgerti anche a chi preferisci.»; «Prima di indicarli controlliamo che siano iscritti al loro albo, e lo ricontrolliamo ogni anno.»; solo se vera per tutti i professionisti mostrati, «ƎE non riceve compensi né altri vantaggi per indicarli». Testi approvati arriveranno da Connetto con una voce in [consegne-al-sito.md](consegne-al-sito.md).
  - *Rapporti economici:* per ogni professionista la scheda dice «nessuno» o quale rapporto ha con ƎE; se c'è, una nota breve accanto al nome, prima della scelta. Finché il collaboratore non risponde (C14) **nessuna frase sui soldi**, né sì né no.
  - *Verifica:* l'operatore di ƎE controlla l'albo all'ingresso e ogni anno; chi ritira il sì o viene sospeso esce in giornata, e dal sito alla lettura successiva entro T_ritiro (§4).
  - *Da nessuna parte:* recensioni o giudizi, cellulari ed email personali, numero d'albo. Il sito non aggiunge testi propri su come sono scelti, sull'ordine o sui soldi.

**Tre cose distinte nel registro** (proposta per il modello di Connetto, sopra i «tecnici della casa» già decisi: una scheda nell'agenzia con nome, mestiere, telefono e liberatoria, senza account):
1. **Presenza nel registro:** la scheda del professionista nell'agenzia, inserita una volta dall'operatore. Vale anche per il tecnico scelto da un proprietario.
2. **Legame privato con una casa:** «I tecnici di questa casa», prima quello del proprietario poi quello dell'agenzia. **Non esce mai** verso il sito.
3. **Comparire sul sito:** servono insieme due fatti, entrambi registrati con data, autore e fonte: la scelta dell'agenzia di mettere il professionista nella **rete ƎE**, e il **sì del professionista a comparire sul sito**, scritto, separato dalla liberatoria dell'app e revocabile in ogni momento ([ricerca](ricerca/segnalare-professionisti.md), §2.4). Il tecnico di un proprietario non entra nella rete da solo. Comparire non dà accesso a nessuna casa.

Si inserisce una volta: la stessa scheda serve a «I tecnici di questa casa», a «Chiama» e all'elenco del sito; il sito non tiene un secondo registro. Una revoca del sì, l'uscita dalla rete o la cancellazione della scheda tolgono il professionista dall'elenco alla richiesta successiva, con le stesse regole di T_ritiro della §4.

Campi **decisi dall'utente il 12/11/2026** ([ticket 13](../.scratch/proposte-collaboratore-4-novembre/issues/13-integrazione-sito.md)), elenco chiuso: niente foto, link al sito del professionista o telefono dello studio. Il sì del professionista copre esattamente questi testi; resta il parere privacy:

| Campo | Tipo | Obbligatorio | Significato |
| --- | --- | --- | --- |
| `id` | stringa opaca, come per le valutazioni | sì | Identificativo stabile del professionista per il sito, diverso dagli identificativi interni. |
| `nome_pubblico` | stringa, 1–120 caratteri | sì | Nome dello studio o della persona, come l'ha approvato il professionista. |
| `professione` | stringa | sì | Da un elenco chiuso da decidere. All'inizio solo professioni della compravendita (8/11/2026); l'audio cita geometra, ingegnere e notaio, non è un elenco approvato. |
| `zona_attivita` | stringa, 1–80 caratteri | sì | Dove lavora, con la stessa grandezza delle zone delle valutazioni. |
| `presentazione` | stringa fino a 280 caratteri, oppure `null` | no | Breve testo approvato dal professionista; `null` se non l'ha dato. |
| `nota_rapporto_economico` | stringa fino a 160 caratteri, oppure `null` | no | *Deciso il 12/11/2026* (prima candidato come `rapporto_economico`). Nota breve sul rapporto con ƎE (per esempio uno sconto o una parentela), approvata dal professionista nel suo sì; il sito la mostra accanto al nome. `null` vuol dire solo **niente da mostrare**: il sito non ne ricava «nessun rapporto». Fino alla risposta del collaboratore (C14) è sempre `null`. |

Campo facoltativo dell'involucro, *deciso il 12/11/2026* (prima candidato come booleano `senza_rapporti_economici`): `frase_rapporti_economici`, stringa fino a 200 caratteri oppure `null`. Contiene **il testo stesso** della frase sui soldi, approvato dall'avvocato (bozza: «ƎE non riceve compensi né altri vantaggi per indicarli»), e Connetto lo manda solo se per **tutti** i professionisti dell'elenco la scheda dice «nessun rapporto» confermato. `null`: il sito non mostra nessuna frase sui soldi. Il sito mostra il testo così com'è e non ne tiene copie: la frase diventa falsa da sola, senza un intervento a mano, se nasce un rapporto, e non esce prima dell'approvazione. Fino alla risposta C14 e al parere è sempre `null`. Entrambi i campi sono aggiunte facoltative ammesse nella versione 1 (§4).

**Il sì al sito** (deciso il 12/11/2026; testo definitivo dall'esperto privacy, G19): un foglio scritto, separato dal sì per l'app, che riporta la scheda **esattamente come apparirà** (i campi sopra, con «nessun rapporto» o la nota) e dice: il sito è pubblico e i motori di ricerca possono copiarlo; si ritira in ogni momento con una telefonata o un messaggio all'agenzia, che lo segna lo stesso giorno lavorativo, e dal sito sparisce entro 15 minuti; per le copie dei motori di ricerca ƎE chiede la rimozione dove si può; vale finché non è ritirato, con il controllo annuale (chi non risponde esce); ogni cambiamento dei testi della scheda chiede un sì nuovo; chi tiene i dati è ƎE, con il rimando all'informativa.

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
      "presentazione": null,
      "nota_rapporto_economico": null
    }
  ],
  "frase_rapporti_economici": null
}
```

**Nell'attesa** il sito può presentare i servizi dell'agenzia e il suo contatto, **senza** un elenco di professionisti proprio e senza nomi d'esempio presentati come reali.

## 7. Contatti dal sito verso Connetto: nessun flusso di scrittura nella prima fase

Stato: **non serve e non si costruisce.** L'utente ha confermato che i contatti dal sito si gestiscono sul sito, che è la fonte autorevole; una seconda coda in Connetto creerebbe due liste da tenere allineate.

**Alternativa per l'agenzia, già scelta:** la lista del sito con stati nuova, presa in carico, chiusa e la notifica all'agenzia. Un contatto può portare il **riferimento pubblico** facoltativo di un annuncio, di una valutazione (`val_…`) o di un professionista (`pro_…`), come testo, senza alcun collegamento automatico con una casa, un account o una persona di Connetto.

Proposta per Connetto, da confermare al controllo B: la ricerca «Trova cliente o casa» dell'operatore accetta anche un identificativo pubblico e apre la valutazione o la scheda del professionista, attraverso il guardiano. L'operatore che prende in carico un contatto dal sito sa così di quale casa o professionista si parla senza ricopiare nulla; il visitatore non entra in Connetto.

Mettere in contatto un visitatore con un professionista resta una scelta dell'operatore, che dà al visitatore il contatto dell'agenzia o del professionista. **ƎE non manda i dati del visitatore al professionista** (deciso il 12/11/2026, ticket [09](../.scratch/proposte-collaboratore-4-novembre/issues/09-visibilita-trasparenza.md), decisione 6): cambiarlo chiederebbe una decisione nuova, il consenso del visitatore e un parere privacy. Nessun tempo di risposta si promette finché l'agenzia non l'ha concordato.

*Parole:* in Connetto «Richiesta» è la domanda d'aiuto per una casa fatta nella piattaforma ([GLOSSARY.md](../GLOSSARY.md)). Qui si dice «contatto dal sito» per non confonderli.

*Se un giorno servirà* una scrittura verso Connetto, il contratto dovrà definire prima: dati minimi; riferimento pubblico facoltativo; un permesso di scrittura separato da quelli di lettura; controllo dei campi; protezione dagli abusi lasciata al sito; una chiave di reinvio con la stessa risposta per lo stesso contenuto e il rifiuto di un contenuto diverso; una risposta che dica davvero se il contatto è registrato; chi lo prende in carico; una sola fonte autorevole al posto della lista del sito, mai due code.

## 8. Verifiche condivise

Da eseguire quando esisteranno le due parti, solo con dati inventati. **Nessuna è stata eseguita.**
1. **Niente dati privati:** con case, persone, foto, documenti e tecnici inventati, l'elenco contiene solo i campi delle §5 e §6; un controllo automatico rifiuta qualsiasi altro campo.
2. **Permessi per elenco e per canale:** senza chiave `401`; chiave revocata `401`; chiave senza `professionisti:lettura` `403` su quell'elenco; la chiave del sito non apre pagine dei clienti o dell'operatore.
3. **Revoca:** si toglie il sì di un proprietario o di un professionista; la voce manca alla lettura successiva in Connetto e sparisce dal sito entro T_ritiro (15 minuti), compresa la CDN; la sua pagina risponde `404` o `410`.
4. **Scadenza:** una valutazione con `valida_fino_al` di ieri non è nell'elenco; nel sito sparisce alle 00:00 di Roma anche senza una lettura nuova.
5. **Ritiro e cancellazione:** casa tolta, casa venduta, valutazione sostituita, professionista uscito dalla rete o cancellato: stesso esito della revoca.
6. **Tecnico del proprietario:** un tecnico legato a una casa, senza rete e senza sì, non compare mai.
7. **Guasto:** Connetto spento o con risposte `500` e `503`: il sito tiene l'ultimo elenco valido fino a 15 minuti, poi toglie le voci e mostra il messaggio neutro; nessun errore tecnico arriva al visitatore.
8. **Dati non validi:** una voce senza un campo obbligatorio si scarta da sola; un involucro rotto vale come lettura fallita.
9. **Rotazione della chiave:** con due chiavi attive le letture continuano; dopo la revoca della vecchia, `401` con la vecchia e `200` con la nuova; la chiave non compare in registri, codice, risposte o pagine.
10. **Limiti:** oltre il limite `429` con `Retry-After`; il sito aspetta e poi riprende.
11. **Compatibilità:** un campo facoltativo nuovo nella risposta non rompe il sito.

## 9. Decisioni e pareri aperti

| Domanda | Chi decide | Ferma |
| --- | --- | --- |
| ~~Connetto offre l'elenco dei professionisti, e in quale fase?~~ **Deciso il 6/11/2026:** sì, nel percorso 1 ([ticket 05](../.scratch/proposte-collaboratore-4-novembre/issues/05-cosa-tocca-percorso-1.md)). ~~Restano: quali professioni e mestieri comprende, e le parole~~ **Deciso l'8/11/2026** (ticket [08](../.scratch/proposte-collaboratore-4-novembre/issues/08-professionisti-compravendita-aste.md)): parte dalla compravendita; l'elenco esatto resta nella riga dei campi pubblici | utente | §6 |
| ~~Valutazione pubblicata di una casa venduta~~ **Deciso il 12/11/2026** ([ticket 13](../.scratch/proposte-collaboratore-4-novembre/issues/13-integrazione-sito.md)): esce dal sito il giorno in cui si registra la vendita | utente | §5 |
| ~~T_ritiro~~ **Deciso il 12/11/2026:** 15 minuti. Resta la conferma del parere privacy (G17) | esperto privacy | §4, prove 3–7 |
| ~~Mostrare l'ultimo elenco oltre T_ritiro se Connetto non risponde~~ **Deciso il 12/11/2026:** no, il sito toglie le voci dopo 15 minuti | utente | §4 |
| ~~Regole per zona, tipi e metri quadri~~ **Decise il 12/11/2026** (§5). Restano gli elenchi: nomi delle zone, tipi, nome della superficie (collaboratore, C22–C24) | collaboratore di ƎE, poi utente | §5 |
| ~~Campi pubblici e contenuto del sì al sito~~ **Decisi il 12/11/2026** (§6). Restano il testo definitivo del sì (G19) e l'elenco delle professioni (C13) | esperto privacy; collaboratore, poi utente | §6 |
| Testo «chi fa cosa» definitivo (bozza nella domanda F14) | avvocato, poi utente | presentazione sul sito e in Connetto |
| ~~Ordine dei professionisti sul sito e cosa si dice su scelta e rapporti economici~~ **Deciso il 9 e il 12/11/2026** ([ticket 09](../.scratch/proposte-collaboratore-4-novembre/issues/09-visibilita-trasparenza.md)): restano i testi definitivi (avvocato, F12) e la risposta del collaboratore sui rapporti economici (C14) | avvocato e collaboratore, poi utente | presentazione sul sito |
| ~~Nomi e lunghezze dei campi candidati~~ **Decisi il 12/11/2026:** `nota_rapporto_economico` e `frase_rapporti_economici` (§6) | utente | §6 |
| ~~Mandare i dati di un visitatore a un professionista~~ **Deciso il 12/11/2026** (ticket 09, decisione 6): no | utente | §7 |
| Indirizzo base e dominio di Connetto | dopo il parere sul nome | tutto |
| Nome e simbolo di Connetto sul sito: **deciso il 12/11/2026** che non compaiono prima del parere sul marchio; la copia dei valori visivi nel sito resta come riferimento | consulente in marchi | sezione del sito su Connetto |
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
