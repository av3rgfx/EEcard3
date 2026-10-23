# Controllo A e passaggio al design

Type: grilling
Status: claimed
Blocked by: 09
Mappa: [Dalla specifica del percorso 1 al design](../map.md)

## Domanda (Question)

La specifica del percorso 1, confermata dall'utente il 22/10/2026 ([PRODUCT.md](../../../PRODUCT.md) §10), e le ricerche bastano per spuntare il controllo A ([docs/METODO.md](../../../docs/METODO.md), passo 5)? L'utente conferma, voce per voce, con le decisioni di PRODUCT.md §12 e le ricerche in `docs/ricerca/`:
- **primo cliente e promessa** (T2, T8; proprietari con una casa gestita da ƎE, inquilino gratis; promessa al proprietario: sapere del canone senza chiedere, documenti e scadenze);
- **primo percorso completo** (§10);
- **cosa resta fuori** («Cosa resta fuori dalla prima versione», cambiata in parte il 22/10/2026 per gli SMS; più ciò che la specifica sposta al percorso 2 o a dopo il pilota);
- **chi eroga il servizio** (T3; operatore di ƎE dentro le 1–1,5 ore al giorno);
- **se e come la piattaforma tocca il denaro** («Denaro», 18/10/2026; due conti distinti, canone e consegna).

Per ogni voce: confermata, oppure cosa manca. Da segnalare senza decidere: i chiarimenti di ƎE ancora attesi, i pareri prima del pilota, [Prezzo e condizioni dell'adesione](10-prezzo-condizioni-adesione.md) e [Ricerca: tessere fisiche](12-ricerca-tessere-fisiche.md), che non bloccano il design (PRODUCT.md §10.10).

Alla chiusura: controllo A registrato in PRODUCT.md §12; mappa chiusa con la destinazione raggiunta; [docs/STUDIO.md](../../../docs/STUDIO.md) e STATUS.md aggiornati; avvio del passo 6 (design) con il messaggio per la sessione di design in START_HERE.md. Nessuna schermata, nessuno stack, nessun codice in questo ticket.

## Commenti (Comments)

**22–23/10/2026: le cinque voci, una alla volta** (skill `grilling` e `domain-modeling`).

*Voce 1, primo cliente e promessa: confermata dall'utente.* Primo cliente invariato (§12, 18/10 e 22/10): proprietari di una casa gestita da ƎE, anche con bonifico al proprietario; paga il proprietario, l'inquilino entra gratis. La promessa non era scritta in una frase; l'utente conferma questa, per il percorso 1:
- al proprietario: «Ogni mese sai se il canone è stato pagato e quando ti viene consegnato, senza chiedere all'agenzia; contratto, documenti e scadenze della locazione della tua casa sono in un posto solo, tenuti da ƎE»;
- all'inquilino, gratis: «Sai dove e quanto pagare, ricevi un promemoria e hai sempre le tue ricevute e il tuo contratto»; le bollette arrivano con il percorso 3.
Richieste ai tecnici (percorso 2) e report annuale (percorso 4) restano fuori dalla promessa del percorso 1. Segnalati, senza bloccare: prezzo, chiarimento 3 di ƎE (bonifici al proprietario), evidenze dal pilota.

*Domanda dell'utente sulla pianta e sulla casa in 3D.* La planimetria entra nel percorso 1 come documento del fascicolo (elenco dei mancanti, §10.2), visibile a proprietario e operatore (§10.7). La casa in 3D (PRODUCT.md §5.5) è fuori dalla prima versione (§12, 19/10) e non è fra i quattro percorsi; nessuna data.

*Voce 2, primo percorso completo: confermata dall'utente* così com'è in PRODUCT.md §10. I punti aperti restano in §10.10 e non bloccano il design: chiarimenti di ƎE (il 3 può riaprire la decisione 2), pareri, prezzo, tessere fisiche, valori fissati da ƎE, temi tecnici. Per il design: la home decisa il 15/10 nel percorso 1 vale senza le bollette (percorso 3).

*Vista 3D indicativa (23/10/2026): decisione dell'utente*, che puntava molto sulla casa in 3D e propone uno script che, dalle sole planimetrie leggibili, ricostruisca una vista approssimativa, con un messaggio per quelle di bassa qualità. Valutazione dell'agente: ha senso come prova; esistono studi sul riconoscimento delle piante (su piante non italiane), ma quanto reggono le planimetrie catastali, spesso disegnate a mano e scansionate, lo dice solo una prova; un servizio esterno richiederebbe un contratto sui dati. Deciso:
1. entra nella prima versione **come prova a condizione**: solo una vista ricavata dalla planimetria, con la scritta «indicativa, non è una misura» (§9); le «ipotesi di modifica» di §5.5 restano fuori;
2. la vedono le stesse persone della planimetria: proprietario e operatore (§7.9);
3. planimetria di bassa qualità: un messaggio invita a caricarne una migliore o a parlarne con l'agenzia; una copia nuova dal catasto rientra nelle pratiche a pagamento (§12, 19/10);
4. non cambia il percorso 1 né ne frena il design: [Ricerca: dalla planimetria catastale alla vista 3D indicativa](14-ricerca-vista-3d.md) e [Prova: vista 3D da una planimetria](15-prova-vista-3d.md), prima dell'architettura; se la prova va male torna fuori, se va bene si costruisce dopo il percorso 1;
5. prove solo con piante inventate; una planimetria vera solo con l'autorizzazione dell'utente.
Scartate: lasciarla fuori dalla prima versione (l'utente ci punta); metterla dentro senza prova (non si sa se funziona sulle planimetrie italiane). Cambia la voce 3; si registra in PRODUCT.md §12 alla chiusura.

*Voce 3, cosa resta fuori: confermata dall'utente.* Alla chiusura una riga sola in PRODUCT.md §12 con l'elenco completo (lista del 19/10, SMS del 22/10, vista 3D del 23/10, esclusioni della specifica e della mappa); le righe vecchie restano, segnate come cambiate in parte. Il buco fra «email e notifiche» (19/10) e «email o SMS» (specifica, 22/10) si chiude così: **notifiche sul telefono fuori dal percorso 1**, si riconsiderano con l'app iPhone; email per tutti, SMS per chi non ha l'email. *Motivo:* su iPhone le notifiche web arrivano solo con la piattaforma aggiunta alla schermata Home: non si progetta un canale che una parte dei clienti non riceve. Segnalata, non blocca: tessera fisica «solo se costa poco», in attesa della ricerca sulle tessere.
