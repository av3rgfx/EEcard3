# Chi costruisce e tiene in funzione la piattaforma

Type: grilling
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Il passo 7 di [docs/METODO.md](../../../docs/METODO.md) confronta le alternative anche per **competenze disponibili e manutenzione**. Questo dato manca: oggi non è scritto chi scriverà il codice né chi lo terrà in funzione durante il pilota. Senza questo dato ogni scelta di forma e di linguaggio sarebbe una scommessa. Si decide con l'utente:

1. **Chi scrive il codice:** l'utente con agenti come Claude Code e Codex, uno sviluppatore, oppure tutti e due. Quanto codice l'utente legge o cambia da sé.
2. **Chi lo tiene in funzione nel pilota:** chi aggiorna, chi guarda se si rompe, chi risponde a ƎE quando qualcosa non va, in quali orari. Che cosa succede se quella persona non c'è. Se la persona non lavora già per ƎE, firma con l'agenzia un contratto sui dati e li usa solo per suo conto (PRODUCT.md §12, 20/10/2026).
3. **Quanto si può spendere al mese** per i servizi (ospitare, email, SMS) nel pilota, e chi paga: i fondatori, ƎE o altri. Un ordine di grandezza basta.
4. **Quanto lavoro di manutenzione si accetta:** servizi gestiti, che costano un po' di più e chiedono meno lavoro, oppure un server da tenere aggiornato.

Limiti: domande in parole semplici, una alla volta, con una raccomandazione. Nessun account o servizio. Le risposte vanno in ARCHITECTURE.md («Cosa vincolerà la scelta»); se toccano il prodotto, anche in PRODUCT.md §12.

## Risposta (Answer)

Decisa dall'utente il 30/10/2026, otto domande una alla volta (dettaglio nei commenti). Registrata in [ARCHITECTURE.md](../../../ARCHITECTURE.md), «Cosa vincolerà la scelta», e in [PRODUCT.md](../../../PRODUCT.md) §12, riga del 30/10/2026 «Chi costruisce e tiene in funzione la piattaforma».

1. **Chi scrive il codice:** l'utente con gli agenti (Claude Code, Codex), **senza esperti esterni**: non c'è budget per lo sviluppo oltre all'abbonamento a Claude Code. L'utente il codice non lo legge e non lo cambia quasi mai. Ne segue: tecnologia molto diffusa, un solo linguaggio se possibile, controlli automatici severi e revisione OCR a ogni incremento. Le skill per la sicurezza e lo sviluppo si cercano in un ticket a parte, [Ricerca: skill per la sicurezza e lo sviluppo con gli agenti](14-ricerca-skill-sicurezza-sviluppo.md), che parte con il link dell'utente.
2. **Chi lo tiene in funzione nel pilota:** l'utente. Aggiorna, riceve gli avvisi automatici di guasto e risponde a ƎE nei giorni feriali, entro la giornata. Se non c'è, vale il **piano carta**: il banco lavora come oggi, con le ricevute di carta, e l'operatore registra dopo; un foglio «cosa fare se non va» per l'operatore. L'utente non lavora per ƎE: prima del pilota firma con l'agenzia il contratto sui dati (§12, 20/10/2026), il cui testo va al parere legale.
3. **Quanto si spende e chi paga:** sviluppo e ambiente di prova al minimo possibile (sul computer o con piani gratuiti, solo dati inventati). Nel pilota circa **20 € al mese**; si sale solo se il prezzo dell'adesione lo copre, con una media ipotetica di 10–20 proprietari paganti (ticket [Prezzo e condizioni dell'adesione](../../controllo-a/issues/10-prezzo-condizioni-adesione.md)). I servizi del pilota li **paga e li intesta ƎE**; l'utente li gestisce con un suo accesso personale.
4. **Manutenzione:** **servizi gestiti**, che aggiornano il sistema, fanno le copie e permettono il ripristino. Il server da curare a mano è scartato. Il fornitore si sceglie in [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md).

Scartate: controllo di sicurezza a ore prima del pilota, sviluppatore, sviluppatore con agenti (nessun budget); persona di riserva e reperibilità a ogni ora; fino a 70 € al mese; zero euro con soli piani gratuiti nel pilota (niente copie dei dati); servizi a nome dell'utente; server da curare a mano.

## Commenti (Comments)

**30/10/2026, sessione di grilling.**

1. *Chi scrive il codice.* Proposte: l'utente con gli agenti e un controllo di sicurezza a ore prima del pilota (consigliata); l'utente con gli agenti da soli; uno sviluppatore; sviluppatore e agenti insieme. **Risposta dell'utente:** l'utente con gli agenti, **da soli**: non c'è budget per lo sviluppo oltre all'abbonamento a Claude Code. Se serve, una ricerca approfondita (forum, Reddit, X, Threads) sulle skill per la sicurezza informatica e lo sviluppo; **prima di quella ricerca ci si ferma**: l'utente manda il link a una skill per cercare e raccogliere dai social.

2. *Ricerca sulle skill di sicurezza e sviluppo.* Proposte: ticket a parte nella mappa, prima del controllo B, che parte con il link dell'utente (consigliata); subito in questa sessione; non serve. **Risposta dell'utente:** ticket a parte (consigliata).

3. *Chi tiene in funzione la piattaforma nel pilota.* Proposte: l'utente, con il piano carta (consigliata); l'utente e una persona di riserva; l'utente sempre reperibile. **Risposta dell'utente:** l'utente, con il **piano carta** (consigliata). Aggiorna la piattaforma, riceve gli avvisi automatici di guasto e risponde a ƎE nei giorni feriali, entro la giornata. Se non c'è, il banco lavora come oggi con le ricevute di carta e l'operatore registra dopo. Serve un foglio «cosa fare se non va» per l'operatore.

4. *Rapporto dell'utente con ƎE.* Fatto chiesto all'utente, senza raccomandazione. **Risposta dell'utente:** non lavora per ƎE. Quindi, per la regola del 20/10/2026, prima del pilota firma con ƎE un contratto sui dati; il testo va al parere legale.

5. *Quanto si spende al mese.* Proposte: fino a circa 70 € pagati da ƎE (consigliata); fino a circa 70 € pagati dai fondatori; fino a circa 20 €; zero con i piani gratuiti. **Risposta dell'utente** (fuori dalle opzioni): la spesa si adatta ai guadagni previsti. Per lo **sviluppo** il minimo possibile; per la **produzione** (il pilota) circa **20 € al mese**. Se il prezzo dell'adesione, con una media ipotetica di 10–20 proprietari paganti, copre di più, il budget può salire. *Lettura dell'agente:* 20 € bastano per ospitare piattaforma e dati con un servizio gestito o un server piccolo (circa 20–23 € senza ambiente di prova, dalla [ricerca](../../../docs/ricerca/piattaforma-dati.md)); l'ambiente di prova va sul computer o sui piani gratuiti, con soli dati inventati. Gli SMS sono la voce che può sforare: circa 25–30 € ogni 300; si guardano nei ticket 11 e 13.

6. *Chi paga e a nome di chi sono i servizi del pilota.* Proposte: ƎE paga e intesta, l'utente gestisce con un suo accesso (consigliata); l'utente paga e poi passa i servizi a ƎE; l'utente paga e restano a suo nome. **Risposta dell'utente:** ƎE paga e intesta (consigliata). L'ambiente di prova, con dati inventati, resta dell'utente.

7. *Quanto lavoro di manutenzione.* Proposte: servizi gestiti (consigliata); server da curare a mano; decidere nel ticket della forma. **Risposta dell'utente:** servizi gestiti (consigliata). Restano le forme «tutto in uno» e «applicazione unica»; il fornitore si sceglie in [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md).

8. *Quanto codice l'utente legge o cambia da sé.* Fatto chiesto all'utente, senza raccomandazione. **Risposta dell'utente:** quasi mai. Decide cosa fare e prova le schermate; il codice lo leggono e lo cambiano gli agenti.

*Scenario emerso dal piano carta, non deciso qui:* durante un guasto l'operatore dà una ricevuta di carta; quando la piattaforma torna, registra il pagamento. La piattaforma non deve fare una seconda ricevuta numerata per lo stesso pagamento, né contarlo due volte (PRODUCT.md §7). Passato a [Documenti, foto e ricevute](12-documenti-foto-ricevute.md) e al [Modello dei dati e dei permessi](02-modello-dati-permessi.md).
