# Linguaggio, framework e componenti

Type: grilling
Status: resolved
Blocked by: 01, 08
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Dentro la forma scelta ([Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md)), con quale linguaggio e framework si scrive la piattaforma web, e con quali componenti dell'interfaccia. Le capacità e le licenze si verificano sulle fonti ufficiali aggiornate (METODO.md, passo 7).

1. **Linguaggio e framework:** due o tre alternative reali, valutate su chi costruisce e mantiene, sulla forma scelta e sulla manutenzione. Pagine fatte dal server o applicazione nel browser, secondo quello che serve alle schermate del pacchetto: la piattaforma deve funzionare con rete lenta, mostrare «Sei senza connessione» e non perdere ciò che si sta scrivendo (DESIGN.md, «Interazioni e stati (percorso 1)»).
2. **Componenti:** l'elenco di DESIGN.md, «Componenti e token», come base. Per ognuno si dice se una libreria lo ha già e quanto va adattato ai token; tessera di rame, riquadro della casa, mesi a pillola e linea del tempo del mese si fanno comunque. Promemoria dell'utente del 23/10/2026: si valutano Animate UI e Watermelon UI (ARCHITECTURE.md, «Da valutare al passo 7»), al massimo una, solo se lo stack va verso React, Tailwind e shadcn; la licenza di Watermelon va letta prima.
3. **Testo che segue il telefono:** il testo segue la grandezza scelta nelle impostazioni del telefono, fino al doppio (ARCHITECTURE.md, «Cosa vincolerà la scelta»). Si dice come lo fa lo stack scelto. La prova su un iPhone vero resta alla prima versione: è in pausa per scelta dell'utente.
4. **Carattere e icone:** Manrope dal nostro sito, icone Lucide a tratto 1,6 (DESIGN.md, «Componenti e token»): come entrano nello stack.

Limiti: ponytail, cioè dipendenze solo se un bisogno concreto le giustifica. Nessuna installazione prima della decisione. Scelta in ARCHITECTURE.md.

## Risposta (Answer)

Decisa dall'utente il 30/10/2026, tre domande una alla volta, tutte sull'opzione consigliata, più un riepilogo confermato. Dettaglio in [ARCHITECTURE.md](../../../ARCHITECTURE.md), «Linguaggio, framework e componenti», e nell'[ADR 0002](../../../docs/adr/0002-typescript-react-router-better-auth.md); fatti in [docs/ricerca/stack-web.md](../../../docs/ricerca/stack-web.md).

1. **Linguaggio e framework:** TypeScript per server e schermate; **React Router** in modalità framework, un programma Node.js su Scalingo; accesso con **Better Auth** (codice via email, codice via SMS, passkey su SimpleWebAuthn). Pagine fatte dal server, moduli che funzionano anche prima che arrivi il codice nel telefono. Scartati Python con Django e django-allauth, Ruby con Rodauth e Next.js.
2. **Componenti:** **shadcn/ui** copiati nel progetto, con Tailwind e i token di DESIGN.md; animazioni nostre in CSS. Né Animate UI né Watermelon UI. L'inventario, pezzo per pezzo, è in ARCHITECTURE.md.
3. **Testo che segue il telefono:** `font: -apple-system-body` sulla radice e misure relative; non dipende dal framework; prova su iPhone alla prima versione.
4. **Carattere e icone:** Manrope dal nostro sito con `OFL.txt`; Lucide dal pacchetto per React, tratto 1,6.

Anche: rete assente e bozze con le funzioni del browser, senza app fuori linea. Rimandati lo strumento del database (dopo il [modello dei dati](02-modello-dati-permessi.md)) e i controlli automatici (ticket [Verifica operativa del percorso 1](16-verifica-operativa.md)). Da verificare all'inizio della costruzione: memoria reale in S o M, guida di Better Auth per React Router 8.

## Commenti (Comments)

**30/10/2026, da [Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md).** L'utente non legge e non cambia il codice: tecnologia molto diffusa, un solo linguaggio se possibile, controlli automatici che fermano gli errori (tipi, test, revisione OCR).

**30/10/2026, da [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md).** Applicazione unica su Scalingo con PostgreSQL ([ADR 0001](../../../docs/adr/0001-applicazione-unica-su-scalingo.md)). Il linguaggio deve avere una **libreria di accesso matura** con codice via email o SMS e passkey (per esempio Better Auth in JavaScript/TypeScript, passkey su SimpleWebAuthn; da verificare con le alternative) e girare bene in un contenitore piccolo (256–512 MB). Sviluppo sul computer con PostgreSQL.

**30/10/2026, ricerca prima delle domande.** Fatti in [docs/ricerca/stack-web.md](../../../docs/ricerca/stack-web.md), letti sulle fonti ufficiali. Due alternative reali con codice via email, codice via SMS e passkey nella stessa libreria: TypeScript con Better Auth (giovane, aggiornamenti ogni pochi giorni, solo l'ultima versione supportata) e Python con Django e django-allauth (stabile da anni, limiti già pronti). Scartata Ruby con Rodauth: il codice via email non c'è, solo il link. In tutte e due i tentativi vanno contati anche per account. Scalingo: Python fa 1 processo in S e 2 in M, Node.js 1; la costruzione ha 8 GB a parte. Licenze permissive; Animate UI con Commons Clause, Watermelon UI rimanda al repository dichiarato MIT.

**30/10/2026, prima risposta dell'utente: TypeScript** (opzione consigliata), per server e schermate, con Better Auth per l'accesso. Scartato Python con Django: libreria d'accesso più stabile, ma due linguaggi, controllo degli errori più debole e niente componenti React pronti. Il prezzo accettato: aggiornamenti frequenti della libreria d'accesso e le regole sui codici aggiunte sopra le sue impostazioni.

**30/10/2026, seconda risposta dell'utente: React Router** in modalità framework (opzione consigliata). Per ogni pagina un punto per ciò che legge e uno per ciò che salva, dove si controllano i permessi; moduli che funzionano anche prima che arrivi il codice nel telefono; un normale programma Node.js su Scalingo. Scartato Next.js: più diffuso, ma più pezzi sul server (componenti server, cache, azioni da proteggere una per una), un difetto critico a dicembre 2025 e rete assente ancora sperimentale. Da verificare alla costruzione: la guida di Better Auth è scritta per React Router 7, l'ultima versione è la 8.5.1.

**30/10/2026, terza risposta dell'utente: shadcn/ui senza Animate UI** (opzione consigliata). I pezzi comuni si copiano nel progetto e si adattano ai token; le animazioni sono nostre, in CSS, con i tempi di DESIGN.md. Scartati: Animate UI (una libreria di movimento in più, tempi e movimento ridotto da rifare pezzo per pezzo) e tutto a mano (tastiera, fuoco e screen reader da fare e provare su ogni pezzo). Watermelon UI resta una vetrina di idee, senza copiare codice.
