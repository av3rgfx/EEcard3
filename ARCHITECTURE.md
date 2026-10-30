# Decisioni tecniche

## Stato
Scelte in corso al passo 7 ([docs/METODO.md](docs/METODO.md)). Dal 30/10/2026 sono decisi la forma della piattaforma e il posto in cui gira, e poi linguaggio, framework e componenti («Decisioni confermate»); i servizi esterni non sono ancora scelti. Nessuna soluzione tecnica dei tentativi precedenti è un punto di partenza.

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
- Il testo segue la dimensione scelta nelle impostazioni del telefono, non solo lo zoom del browser. Le schermate reggono il testo fino al doppio (decisione dell'utente del 26/10/2026, [DESIGN.md](DESIGN.md), «Dati limite e accessibilità»). Il modo è deciso il 30/10/2026 («Decisioni confermate», «Linguaggio, framework e componenti») e va provato su un iPhone vero.
- Regole generali in [docs/rules/BACKEND.md](docs/rules/BACKEND.md).

## Da valutare al passo 7
Promemoria chiesti dall'utente, non decisioni. Si riprendono quando si sceglie lo stack.
- **Librerie di componenti animati** (promemoria dell'utente del 23/10/2026): *deciso il 30/10/2026*, nessuna delle due; vedi «Decisioni confermate», «Linguaggio, framework e componenti».

- **Sapere se un messaggio non è arrivato** (27/10/2026, da DESIGN.md, «Spazio dell'operatore», «Oggi»). La pagina «Oggi» dell'operatore mostra i messaggi non arrivati con il motivo. Al passo 7 si verifica cosa segnalano i servizi d'invio scelti (SMS non consegnato, email rifiutata) e come arriva a Connetto; ciò che non si sa (un'email nello spam) non si mostra come «arrivato».

## Confini
- **Una sola applicazione** fa pagine web, regole e permessi, ospitata da Scalingo (Parigi), con un database PostgreSQL gestito che contiene dati, documenti e foto (30/10/2026, «Decisioni confermate»).
- L'**accesso** sta dentro l'applicazione, con Better Auth, che offre il codice via email o SMS e le passkey (30/10/2026, «Linguaggio, framework e componenti»).
- L'**app iPhone** futura parlerà con la stessa applicazione; ora non si costruisce nulla per lei.
- **Un solo linguaggio**, TypeScript, per server e schermate, con React Router (30/10/2026).
- DA DEFINIRE: servizi di email e SMS, lettura ISTAT.

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

### Linguaggio, framework e componenti (30/10/2026, decisione dell'utente)
[ADR 0002](docs/adr/0002-typescript-react-router-better-auth.md); discussione nel [ticket](.scratch/architettura-percorso-1/issues/09-linguaggio-framework-componenti.md); fatti in [docs/ricerca/stack-web.md](docs/ricerca/stack-web.md). Tre domande una alla volta, tutte sull'opzione consigliata, e un riepilogo confermato.
- **Linguaggio:** **TypeScript** per il server e per le schermate, con il controllo dei tipi su tutto il codice. Le schermate hanno comunque bisogno di codice nel telefono (passkey, «Annulla» per 8 secondi, «Sei senza connessione», bozze, barra del file, esito incerto): con TypeScript resta un solo linguaggio.
  - *Scartati:* Python con Django e django-allauth (libreria d'accesso più stabile e limiti già pronti, ma due linguaggi, controllo degli errori più debole, niente componenti React pronti); Ruby con Rodauth (il codice via email non c'è, solo il link).
- **Accesso:** **Better Auth**, con i plugin del codice via email, del codice via SMS e delle passkey (su SimpleWebAuthn), dentro l'applicazione e sul nostro PostgreSQL. Licenze MIT.
  - *Prezzo accettato:* libreria nata nel 2024, che rilascia ogni pochi giorni e corregge solo l'ultima versione: si aggiorna spesso, con i controlli automatici a fermare le regressioni. Si usano solo i plugin che servono: niente password, OAuth, SSO, SCIM o pagamenti, dove sono caduti quasi tutti gli avvisi di sicurezza letti.
  - *Impostazioni da stringere* (si fissano nel [ticket dell'accesso](.scratch/architettura-percorso-1/issues/10-accesso.md)): le predefinite sono 5 minuti e 3 tentativi per codice, con il codice salvato in chiaro. Servono 10 minuti, il codice salvato come impronta, i tentativi contati per account e non azzerati da un codice nuovo, limiti agli invii conservati nel database, nessuna registrazione automatica (gli account nascono al banco).
- **Framework:** **React Router** in modalità framework (versione 8 al 30/10/2026), un normale programma Node.js su Scalingo. Per ogni pagina un punto per ciò che legge e uno per ciò che salva: lì si controllano accesso e permessi, a ogni richiesta, e lì si provano. Pagine fatte dal server; link e moduli funzionano anche prima che arrivi il codice nel telefono, utile con la rete lenta.
  - *Scartati:* Next.js (il più diffuso, ma più pezzi sul server: componenti server, cache, azioni da proteggere una per una; un difetto critico nei componenti server il 3/12/2025; rete assente ancora sperimentale); SvelteKit, non proposto perché molto meno diffuso.
  - *Da verificare all'inizio della costruzione:* la guida di Better Auth è scritta per React Router 7; la memoria usata davvero in un contenitore S o M, con dati inventati (le fonti non danno cifre). Su Scalingo Node.js fa un solo processo anche in M; la costruzione ha 8 GB a parte.
- **Componenti:** **shadcn/ui**, copiati nel progetto (MIT), con Tailwind per lo stile e i token di [DESIGN.md](DESIGN.md), «Componenti e token», scritti una volta sola nel tema. Le animazioni sono nostre, in CSS, con i tempi di DESIGN.md; con «Riduci movimento» solo dissolvenze.
  - *Scartati:* Animate UI (una libreria di movimento in più, tempi e movimento ridotto da rifare pezzo per pezzo); Watermelon UI (resta una vetrina di idee, senza copiare codice); nessuna libreria (tastiera, fuoco e screen reader da fare e provare su ogni pezzo).
  - *Inventario* (elenco di DESIGN.md, «Componenti del percorso 1»): **da shadcn, adattati ai token**: pulsanti (pillola, 48 px, spento con `aria-disabled` e il perché sotto, attesa dopo 300 ms), campo, campo del codice di 6 cifre, spunta, schede e interruttore delle schede, foglio dal basso sul telefono e finestra al centro sul computer, visore delle foto, etichetta di stato, segnaposto (con il respiro), barra laterale, avanzamento. **Nostri**, sui token: tessera di rame, tessera piccola e tessera arancione di «Al banco»; riquadro della casa, immagine, miniatura, griglia e disegno della casa; mesi a pillola; linea del tempo del mese; occhiello, titolo del mese, importo grande; righe degli elenchi, riga della coda, scheda della casa, «Da fare»; conferma al suo posto con «Annulla», errore al suo posto, fascia della rete, vuoto; caricamento del file con anteprima e barra; tre numeri del giorno e «6 di 10»; pagina d'accesso con la stanza; simbolo C–Legame e logo di ƎE; ricevuta su A4 e PDF (forma del PDF nel [ticket dei documenti](.scratch/architettura-percorso-1/issues/12-documenti-foto-ricevute.md)).
- **Testo che segue il telefono:** la radice usa `font: -apple-system-body` e tutte le misure del testo sono relative a lei, così su iPhone il testo segue la grandezza scelta nelle impostazioni ([docs/ricerca/hig-web.md](docs/ricerca/hig-web.md), WebKit). Non dipende dal framework. Le schermate reggono il doppio; la prova su un iPhone vero resta alla prima versione.
- **Carattere e icone:** Manrope servito dal nostro sito, con `OFL.txt` accanto ai file; icone Lucide dal pacchetto ufficiale per React, a tratto 1,6 (2,2 dove DESIGN.md lo dice). Licenze in [docs/ricerca/licenze-grafiche.md](docs/ricerca/licenze-grafiche.md).
- **Rete lenta e assente:** «Sei senza connessione» e «Di nuovo in linea» con l'avviso di rete del browser; ciò che si sta scrivendo resta nella memoria del browser finché non è salvato. La piattaforma non diventa un'app che funziona fuori linea: per il percorso 1 non serve.
- **Rimandati:** lo strumento per leggere e scrivere il database e le migrazioni, dopo il [modello dei dati](.scratch/architettura-percorso-1/issues/02-modello-dati-permessi.md); i controlli automatici (tipi, test, revisione OCR, aggiornamenti delle dipendenze) nella verifica operativa.
- *Motivo:* è la via con un solo linguaggio, la più diffusa fra gli agenti e con il controllo automatico più largo, e l'unica che apre i componenti React pronti. Il compromesso è una libreria d'accesso giovane, da aggiornare spesso e da stringere sulle nostre regole.

## Verifica operativa
- Copie e prova di ripristino: decise il 30/10/2026 («Decisioni confermate», «Forma della piattaforma e dove gira»).
- DA DEFINIRE: controlli del codice (fra questi il controllo dei tipi di TypeScript e gli aggiornamenti frequenti di Better Auth), migrazioni, log e avvisi di guasto adeguati alla prima versione.
