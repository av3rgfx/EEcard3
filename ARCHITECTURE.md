# Decisioni tecniche

## Stato
Scelte in corso al passo 7 ([docs/METODO.md](docs/METODO.md)). Dal 30/10/2026 sono decise la forma della piattaforma e il posto in cui gira («Decisioni confermate»); linguaggio, framework e servizi esterni non sono ancora scelti. Nessuna soluzione tecnica dei tentativi precedenti è un punto di partenza.

Dal 30/10/2026 le scelte si prendono nella mappa [Architettura del percorso 1](.scratch/architettura-percorso-1/map.md), una alla volta con l'utente. Destinazione confermata: le scelte tecniche del percorso 1 scritte qui, **pronte per il controllo B**, senza rendere difficili i percorsi 2 e 3; il controllo B è un passo a parte.

## Cosa vincolerà la scelta
- Le regole del dominio in [PRODUCT.md](PRODUCT.md) §7: accesso legato al rapporto con la casa e alla sua durata, passaggi del denaro distinti, versioni conservate, nessun doppio pagamento, tracciabilità, permessi uguali anche sui dati derivati.
- **Chi costruisce e mantiene** (decisione dell'utente del 30/10/2026, [ticket](.scratch/architettura-percorso-1/issues/01-chi-costruisce-e-mantiene.md); chi paga, piano carta e contratto sui dati in [PRODUCT.md](PRODUCT.md) §12):
  - il codice lo scrive l'utente con gli agenti (Claude Code, Codex), senza esperti esterni, e quasi non lo legge: tecnologia molto diffusa e ben conosciuta dagli agenti, un solo linguaggio se possibile, pochi pezzi, controlli automatici che fermano gli errori prima dei clienti, revisione OCR a ogni incremento. Le skill di sicurezza e sviluppo si cercano nel [ticket di ricerca](.scratch/architettura-percorso-1/issues/14-ricerca-skill-sicurezza-sviluppo.md);
  - **servizi gestiti**, che aggiornano il sistema, fanno le copie e permettono il ripristino; il server da curare a mano è scartato. All'utente restano codice, permessi, avvisi e prove di ripristino;
  - nel pilota circa **20 € al mese** in tutto (ospitare, file, email, SMS); di più solo se il prezzo dell'adesione lo copre. Sviluppo e ambiente di prova al minimo: sul computer o con piani gratuiti, solo dati inventati;
  - gli avvisi di guasto arrivano all'utente, che risponde nei giorni feriali; la piattaforma deve accogliere gli incassi registrati dopo un guasto (piano carta) senza contarli due volte.
- **Accesso** (decisione dell'utente del 30/10/2026, [ticket](.scratch/architettura-percorso-1/issues/13-codice-email-conflitto.md); prodotto in [PRODUCT.md](PRODUCT.md) §12): il modo di entrare scelto deve offrire due cose. I clienti entrano con un codice via email o SMS senza password: 6 cifre, 10 minuti, un uso, tentativi limitati, avvisi di nuovo accesso e di cambio di email o numero. Le passkey servono per l'operatore, obbligatorie sul suo account di lavoro, e per i clienti, facoltative. Non si sceglie un servizio d'accesso senza passkey. Le passkey sono legate al dominio, quindi le prove usano un dominio di prova fino al parere sul nome. Il recupero dell'account di lavoro passa da chi tiene in funzione la piattaforma, mai da un'email. Il controllo di sicurezza dell'accesso segue una lista: limiti a tentativi e invii, durata delle sessioni, nessuna consultazione in serie, recupero dell'account di lavoro. Le regole in dettaglio si fissano nel [ticket dell'accesso](.scratch/architettura-percorso-1/issues/10-accesso.md).
- Le decisioni di prodotto che usciranno dallo studio: primo cliente, primo percorso, canali, integrazioni davvero necessarie.
- Le domande tecniche elencate in [docs/STUDIO.md](docs/STUDIO.md), area O.
- Ordine confermato: prima la piattaforma web, poi l'app iPhone sullo stesso servizio.
- Vista 3D indicativa, se la prova va bene: ricalco e riconoscimento automatico dentro la piattaforma, senza servizi esterni per le planimetrie ([PRODUCT.md](PRODUCT.md) §12, 24/10/2026). Le licenze dei modelli di ricerca vanno chiarite prima di usarli ([ricerca](docs/ricerca/vista-3d.md), §2.3 e §8).
- Il testo segue la dimensione scelta nelle impostazioni del telefono, non solo lo zoom del browser. Le schermate reggono il testo fino al doppio (decisione dell'utente del 26/10/2026, [DESIGN.md](DESIGN.md), «Dati limite e accessibilità»). Il modo dipende dallo stack e va provato su un iPhone vero.
- Regole generali in [docs/rules/BACKEND.md](docs/rules/BACKEND.md).

## Da valutare al passo 7
Promemoria chiesti dall'utente, non decisioni. Si riprendono quando si sceglie lo stack.
- **Librerie di componenti animati** (23/10/2026, proposte dall'utente). Tutte e due richiedono React, Tailwind e shadcn: si possono considerare solo se lo stack del client web va in quella direzione. Non valgono per l'app iPhone. Ne basta al massimo una.
  - [Animate UI](https://github.com/imskyleen/animate-ui): versioni animate (Motion) dei componenti comuni di Radix UI, Base UI e React Aria, per esempio fogli, menu, schede e interruttori. Licenza MIT con Commons Clause: si usa nel prodotto, ma non si rivendono i componenti. Il progetto ha la skill `animate-ui` per questo caso.
  - [Watermelon UI](https://ui.watermelon.sh/installation): raccolta di componenti, blocchi e pagine animati da copiare nel progetto. La licenza non è indicata nella pagina d'installazione: leggere condizioni d'uso e attribuzione prima di usarla.
  - *Perché non prima:* sceglierle significa scegliere lo stack. Non risolvono l'estetica delle schermate, che dipende da impaginazione e stile. Le animazioni su misura della tessera non sono nelle librerie. Fino ad allora Watermelon si usa solo come vetrina di idee, quando l'utente manda un link: l'idea si ridisegna nello stile di Connetto, senza installare né copiare codice.
  - *Base per la valutazione* (26/10/2026): l'elenco dei componenti del percorso 1 in [DESIGN.md](DESIGN.md), «Componenti e token». Per ognuno si dice se una libreria lo ha già e quanto va adattato ai token; quelli solo nostri (tessera di rame, riquadro della casa, mesi a pillola, linea del tempo del mese) si fanno comunque.

- **Sapere se un messaggio non è arrivato** (27/10/2026, da DESIGN.md, «Spazio dell'operatore», «Oggi»). La pagina «Oggi» dell'operatore mostra i messaggi non arrivati con il motivo. Al passo 7 si verifica cosa segnalano i servizi d'invio scelti (SMS non consegnato, email rifiutata) e come arriva a Connetto; ciò che non si sa (un'email nello spam) non si mostra come «arrivato».

## Confini
- **Una sola applicazione** fa pagine web, regole e permessi, ospitata da Scalingo (Parigi), con un database PostgreSQL gestito che contiene dati, documenti e foto (30/10/2026, «Decisioni confermate»).
- L'**accesso** sta dentro l'applicazione, con una libreria matura che offre il codice via email o SMS e le passkey; la libreria si sceglie con il linguaggio.
- L'**app iPhone** futura parlerà con la stessa applicazione; ora non si costruisce nulla per lei.
- DA DEFINIRE: linguaggio e framework, servizi di email e SMS, lettura ISTAT.

## Dati e autorizzazioni
DA DEFINIRE: entità, ruoli, agenzie (più agenzie è una direzione confermata, non un requisito della prima versione).

## Integrazioni
DA DEFINIRE: autenticazione, pagamenti, email e messaggi, documenti, notifiche, wallet, firma, AI, secondo le necessità effettive.

## Decisioni confermate
Annotare alternative, motivi, vincoli e conseguenze.
Creare un ADR solo per decisioni difficili da invertire e con un vero compromesso.

### Forma della piattaforma e dove gira (30/10/2026, decisione dell'utente)
[ADR 0001](docs/adr/0001-applicazione-unica-su-scalingo.md); discussione nel [ticket](.scratch/architettura-percorso-1/issues/08-forma-e-dove-gira.md); fatti in [docs/ricerca/piattaforma-dati.md](docs/ricerca/piattaforma-dati.md).
- **Forma:** applicazione unica scritta da noi su **Scalingo**, regione Parigi normale (non quella SecNumCloud), con PostgreSQL gestito. Il codice via email o SMS e le passkey li dà una libreria matura dentro l'applicazione, non il fornitore.
- **Contratto:** account e contratto sui dati a nome di ƎE, che paga; il contratto si accetta online all'apertura dell'account e la sua lettura va al parere sui contratti standard dei fornitori. Per i dati ospitati l'unico sub-responsabile è Outscale, in Francia. Nessun account si apre senza l'autorizzazione dell'utente.
- **Costo:** circa 14–22 € al mese per ospitare (contenitore S o M più PostgreSQL Starter). Email e SMS si decidono nel [ticket dei servizi esterni](.scratch/architettura-percorso-1/issues/11-servizi-esterni.md), dove si vede se i 20 € reggono.
- **File:** documenti e foto dentro il database, foto ridotte al caricamento; oltre circa 5 GB passano a un archivio a parte compatibile S3 (per esempio Outscale). Le versioni conservate (§7) le tiene la piattaforma, non i backup.
- **Copie:** quelle di Scalingo (7 giornaliere, 4 settimanali, ritorno a un momento degli ultimi 7 giorni), più **una copia cifrata al mese** scaricata dall'utente su un disco cifrato di ƎE in agenzia, ultime 12 copie, con la chiave tenuta da ƎE e dall'utente fuori da quel disco. **Prova di ripristino** fatta dall'utente prima del pilota e poi ogni 3 mesi, su una copia temporanea dentro Scalingo, annotata con data ed esito.
- **Sviluppo e prove:** sul computer dell'utente, gratis, con dati inventati e PostgreSQL come in produzione. Per le passkey su un iPhone vero si accende per qualche giorno una seconda applicazione su Scalingo (circa 14 € al mese finché resta accesa).
- **Andarsene:** PostgreSQL si esporta per intero, file compresi; il codice è nostro; la copia mensile è già una via d'uscita.
- *Scartati:* Supabase (passkey ancora sperimentali, 28/5/2026, e obbligatorie per l'operatore; circa 21–23 € prima di email e SMS; file fuori dai backup; contratto con Singapore e sub-responsabili quasi tutti statunitensi); Firebase (accesso solo negli Stati Uniti); server virtuale (ticket 01); Clever Cloud (listino e contratto non leggibili); archivio dei file a parte per ora (fornitore e copie in più); solo le copie di Scalingo (se si perde l'account si perdono anche le copie).
- *Motivo:* è l'unica forma con dati in Francia, circa 20 € al mese e passkey stabili; una sola prova di ripristino copre tutto, e conta per chi tiene in funzione la piattaforma da solo. Il compromesso è più codice delicato per l'accesso, coperto dalla lista di controllo del [ticket](.scratch/architettura-percorso-1/issues/13-codice-email-conflitto.md).

## Verifica operativa
- Copie e prova di ripristino: decise il 30/10/2026 («Decisioni confermate», «Forma della piattaforma e dove gira»).
- DA DEFINIRE: controlli del codice, migrazioni, log e avvisi di guasto adeguati alla prima versione.
