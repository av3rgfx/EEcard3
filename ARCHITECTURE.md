# Decisioni tecniche

## Stato
**Nessuna scelta, per decisione dell'utente.** Stack, servizi, fornitori e struttura del codice si scelgono dopo le decisioni di prodotto ([docs/METODO.md](docs/METODO.md), passo 7, dopo il controllo A). Nessuna soluzione tecnica dei tentativi precedenti è un punto di partenza.

Dal 30/10/2026 le scelte si prendono nella mappa [Architettura del percorso 1](.scratch/architettura-percorso-1/map.md), una alla volta con l'utente. Destinazione confermata: le scelte tecniche del percorso 1 scritte qui, **pronte per il controllo B**, senza rendere difficili i percorsi 2 e 3; il controllo B è un passo a parte.

## Cosa vincolerà la scelta
- Le regole del dominio in [PRODUCT.md](PRODUCT.md) §7: accesso legato al rapporto con la casa e alla sua durata, passaggi del denaro distinti, versioni conservate, nessun doppio pagamento, tracciabilità, permessi uguali anche sui dati derivati.
- **Chi costruisce e mantiene** (decisione dell'utente del 30/10/2026, [ticket](.scratch/architettura-percorso-1/issues/01-chi-costruisce-e-mantiene.md); chi paga, piano carta e contratto sui dati in [PRODUCT.md](PRODUCT.md) §12):
  - il codice lo scrive l'utente con gli agenti (Claude Code, Codex), senza esperti esterni, e quasi non lo legge: tecnologia molto diffusa e ben conosciuta dagli agenti, un solo linguaggio se possibile, pochi pezzi, controlli automatici che fermano gli errori prima dei clienti, revisione OCR a ogni incremento. Le skill di sicurezza e sviluppo si cercano nel [ticket di ricerca](.scratch/architettura-percorso-1/issues/14-ricerca-skill-sicurezza-sviluppo.md);
  - **servizi gestiti**, che aggiornano il sistema, fanno le copie e permettono il ripristino; il server da curare a mano è scartato. All'utente restano codice, permessi, avvisi e prove di ripristino;
  - nel pilota circa **20 € al mese** in tutto (ospitare, file, email, SMS); di più solo se il prezzo dell'adesione lo copre. Sviluppo e ambiente di prova al minimo: sul computer o con piani gratuiti, solo dati inventati;
  - gli avvisi di guasto arrivano all'utente, che risponde nei giorni feriali; la piattaforma deve accogliere gli incassi registrati dopo un guasto (piano carta) senza contarli due volte.
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
