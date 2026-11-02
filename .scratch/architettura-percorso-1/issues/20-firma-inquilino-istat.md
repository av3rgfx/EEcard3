# Firma dell'inquilino sul nuovo canone ISTAT

Type: grilling
Status: claimed
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Proposta del collaboratore di ƎE, riferita dall'utente il 2/11/2026. Quando si aggiorna il canone con l'ISTAT, l'inquilino **conferma firmando il documento** dell'aggiornamento. Lo vede solo dopo l'approvazione del proprietario. Può firmarlo in tre modi: con una **firma digitale**; **stampandolo, firmandolo e caricando la scansione**; **in agenzia**. Solo dopo la firma l'aggiornamento ISTAT è «ufficiale».

Oggi è deciso altro ([PRODUCT.md](../../../PRODUCT.md) §10.3, D18): l'operatore controlla il calcolo, il proprietario approva prima che valga, l'inquilino è avvisato prima della decorrenza e può contestare; nessun documento da firmare. Da decidere:

1. **Cosa vale la firma:** una condizione senza la quale il canone non cambia (l'inquilino potrebbe bloccarlo non firmando), oppure la prova che l'inquilino ha ricevuto la comunicazione, con il canone che cambia comunque alla decorrenza. Se serva una richiesta scritta del locatore dipende dal contratto ([docs/ricerca/adempimenti-locazione.md](../../../docs/ricerca/adempimenti-locazione.md), riga ISTAT: *da verificare*); la parte legale va al parere.
2. **Cosa succede se l'inquilino non firma**, o firma dopo la decorrenza: decorrenza, mesi già creati, differenza come somma una tantum (regola del 31/10/2026), messaggi.
3. **I modi di firmare:** firma digitale (servizio esterno, costo, account: oggi esclusi senza autorizzazione), firma del documento stampato con il caricamento e «Controlla il foglio» (deciso il 2/11/2026), firma al banco; più un'alternativa da valutare, la conferma dentro Connetto con l'accesso della persona.
4. **Il documento:** com'è fatto il foglio dell'aggiornamento (dati, Typst come le ricevute), chi lo vede, dove si conservano le versioni firmate.
5. Cosa cambia per **più inquilini** (firmano tutti o uno?) e per il controllo B.

Limiti: nessun account o servizio esterno; prove solo con dati inventati. Le decisioni di prodotto in PRODUCT.md §12, quelle tecniche in ARCHITECTURE.md, l'aspetto in DESIGN.md.

## Commenti (Comments)

**2/11/2026, grilling con l'utente (`grilling`, `domain-modeling`, `ponytail`), domande una alla volta.**

1. *Cosa vale la firma.* **Scelta dell'utente: A.** La firma è la **prova che l'inquilino ha ricevuto la comunicazione**: il canone cambia alla decorrenza se il contratto lo prevede e il proprietario ha approvato, firmi o no. Finché manca, l'operatore trova «firma dell'inquilino mancante» nel lavoro in coda e sollecita di persona; quando arriva, l'aggiornamento risulta «firmato». L'inquilino può sempre contestare. Da confermare al parere legale; se servisse il consenso si passa a B cambiando una regola. *Scartata:* B, firma come condizione (l'inquilino potrebbe bloccare un aumento previsto dal contratto).
   - *Domanda dell'utente:* perché la firma digitale chiederebbe un servizio esterno a pagamento? Risposta dell'agente nel commento sotto.
