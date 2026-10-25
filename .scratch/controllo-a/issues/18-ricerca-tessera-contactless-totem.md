# Ricerca: tessera contactless, wallet e totem in agenzia

Type: research
Status: claimed
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

## Commenti (Comments)
