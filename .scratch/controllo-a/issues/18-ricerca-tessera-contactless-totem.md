# Ricerca: tessera contactless, wallet e totem in agenzia

Type: research
Status: resolved
Blocked by: —
Mappa: [Dalla specifica del percorso 1 al design](../map.md)

## Domanda (Question)

Richiesta dell'utente del 25/10/2026, nel ticket [Ricerca: tessere fisiche](12-ricerca-tessere-fisiche.md), alla domanda «nome o solo codice»: la tessera fisica dovrebbe avere fin da subito la funzione contactless, con o senza chip a contatto. In futuro ƎE vorrebbe un **totem in agenzia, aperto 24 ore su 24** come le macchinette dei tabaccai, dove appoggiando la tessera fisica o quella digitale nel wallet del telefono (Apple Wallet, Google Wallet) si entra nel proprio spazio e si pagano bollette e canone. L'utente chiede anche se per i pagamenti abbia più senso il chip a contatto con un lettore che trattiene la tessera finché l'operazione non è finita. Non ha senso cercare fornitori di tessere che poi non possono offrire queste funzioni.

Cosa studiare, su fonti primarie con la data di lettura, in `docs/ricerca/tessera-contactless.md` (skill `research`):
- **Tecnologie della tessera:** NFC e RFID a 13,56 MHz (ISO/IEC 14443, NFC Forum), chip comuni per tessere di identificazione (per esempio MIFARE DESFire, NTAG con autenticazione), chip a contatto (ISO/IEC 7816), tessere doppie; cosa si può copiare o clonare e come si evita; costi per tessera e quantità minime con la lamina metallica arancione scelta dall'utente (la lamina o il metallo disturbano l'antenna?).
- **Wallet del telefono:** Apple Wallet e Google Wallet per tessere di adesione o fedeltà con lettura contactless (requisiti, certificati, costi, terminali che le leggono); se lo stesso lettore legge la tessera fisica e quella nel telefono.
- **Totem in agenzia:** come si riconosce la persona in modo sicuro (la tessera da sola non deve bastare, PRODUCT.md §5.6: secondo fattore come PIN, codice o telefono); pagamenti non presidiati di bollette e canone (pagoPA, CBILL, bollettini, carte di pagamento della persona, contanti), chi deve essere autorizzato a farli (servizi di pagamento, PSD2, prestatori autorizzati), terminali di pagamento non presidiati e loro certificazioni; lettore a contatto che trattiene la tessera contro lettura contactless: pro e contro, per quali casi si usa; costi indicativi di un totem e dei lettori.
- **Cosa conviene scegliere oggi** perché la tessera del pilota non debba essere rifatta: quali requisiti chiedere ai fornitori.

Vincoli: le decisioni confermate dicono che la tessera non paga e non dà accesso ai dati da sola (§5.6, «Tessera (T6)» in §12), che il denaro non passa dalla piattaforma (§12, «Controllo A») e che wallet, contactless, terminale da banco e totem sono fuori dalla prima versione. La ricerca non le cambia: indica cosa servirebbe e dove una scelta futura entrerebbe in conflitto, perché la decisione resta dell'utente. Nessun ordine, preventivo, account o contatto con fornitori. Segnalare dove serve un parere professionale (servizi di pagamento, privacy, sicurezza).

## Risposta (Answer)

Chiuso il 25/10/2026. La tessera fisica del pilota avrà un **chip contactless MIFARE DESFire EV3** originale NXP, **spento nel pilota**, con un identificativo casuale e nessun dato personale nel chip; **niente chip a contatto** né lettore che trattiene la tessera. La lamina arancione va provata su un campione con lettori e telefoni veri. Il totem resta dopo la prima versione: come si paga, il secondo passaggio e il wallet si decidono quando arriverà. Ricerca in [docs/ricerca/tessera-contactless.md](../../../docs/ricerca/tessera-contactless.md); decisione in PRODUCT.md §12. I requisiti per i fornitori sono nella sezione 5 della ricerca: si usano solo per un preventivo autorizzato dall'utente.

## Commenti (Comments)

### Ricerca (25/10/2026)
Ricerca con la skill `research`, affidata a un agente in background, in [docs/ricerca/tessera-contactless.md](../../../docs/ricerca/tessera-contactless.md): chip e copia, prezzi pubblicati, lamina e antenna, Apple e Google Wallet, secondo fattore al totem, pagamenti non presidiati (modello dei tabaccai con un prestatore autorizzato), terminali certificati, lettore che trattiene la tessera, conflitti con le decisioni, requisiti per i fornitori. Nessun ordine, preventivo, account o contatto. Fonti non raggiungibili annotate nel file.

Controllo a campione della sessione principale: NXP su MIFARE Classic, Apple sui pass NFC, foglio LIS Pay confermati; il prezzo Carteplastiche della DESFire EV1 2K è incoerente nella pagina (310 € o 160 € per 100) e va confermato.

### Decisioni dell'utente (25/10/2026), una alla volta
1. **Chip sicuro nella tessera del pilota, spento.** Un chip contactless che risponde con una chiave segreta e non si copia; nel pilota non si legge, così nessuna regola confermata cambia (wallet, contactless e totem restano fuori dalla prima versione). Circa 1–2,5 € in più a tessera, più la lamina; il prezzo esatto richiede un preventivo autorizzato dall'utente e un campione con la lamina. Scartati: niente chip (le tessere andrebbero rifatte con il totem), chip economico (si copia). Consigliata dall'agente.
2. **Chip MIFARE DESFire EV3**, originale NXP. Scartato: NTAG 424 DNA (un po' più economico, si verifica con un telefono qualsiasi, ma adatto a un solo uso). Consigliata dall'agente: pochi centesimi in più, più sicuro (EAL5+) e con più usi possibili sulla stessa tessera.
3. **Niente chip a contatto né lettore che trattiene la tessera: solo contactless**, con un secondo passaggio e l'uscita automatica dopo poco tempo. Il PIN delle carte bancarie, se un giorno si pagherà al totem, resta sul terminale certificato del prestatore. Scartato: chip a contatto (meccanica che si usura, tessere trattenute di notte, nessuna lettura del telefono). Consigliata dall'agente.
4. **Come si paga al totem: da decidere più avanti** (scelta dell'utente). Le tre strade restano nella ricerca (§3.2 e §6): codici pagoPA o CBILL pagati con la propria banca, servizio di un istituto autorizzato come dai tabaccai, incasso di ƎE (escluso per le bollette di terzi senza autorizzazione). Era consigliato partire dalla prima e studiare la seconda con il parere.
5. **Secondo passaggio al totem e wallet (QR o NFC): rimandati al momento del totem** (consigliata dall'agente). Oggi non cambiano la tessera; resta la regola già confermata: la tessera da sola non basta mai (§5.6).
