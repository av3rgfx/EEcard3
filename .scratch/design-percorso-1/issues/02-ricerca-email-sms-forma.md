# Ricerca: come si vedono davvero le email e gli SMS di servizio

Type: research
Status: resolved
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Quali limiti pratici hanno la forma di un'email di servizio e di un SMS, oggi, nei programmi e sui telefoni usati in Italia? La [ricerca del 19/10/2026 sulle email](../../../docs/ricerca/email.md) copre consegna, spam e forme dinamiche; questa copre l'**aspetto**, che serve a progettare i messaggi di PRODUCT.md §10.5.

Email: cosa mostrano Gmail (app e web), Apple Mail su iPhone e Mac, Outlook (app nuova, web, desktop classico) e le webmail italiane più diffuse (Libero, Virgilio): larghezza utile, caratteri e font web, immagini bloccate e testo alternativo, tema scuro e inversione dei colori, pulsanti fatti in HTML, anteprima nella lista (oggetto, mittente, testo d'anteprima), versione solo testo, accessibilità (lettori di schermo, `lang`, ruoli delle tabelle). Cosa rende un'email «innovativa e dinamica» senza AMP: cosa si può animare, cosa si rompe.

SMS: lunghezza di un messaggio con le lettere accentate italiane e con «€» (GSM-7 ed estensioni, UCS-2, messaggi concatenati e costo), mittente alfanumerico in Italia (regole AGCOM e registro, se esistono, con la fonte), link nei messaggi (anteprime su iPhone e Android, link accorciati e rischio di sembrare truffa), codici monouso (formato che iPhone e Android propongono di compilare da soli, `@dominio #codice`).

Fonti primarie con la data di lettura (documentazione dei fornitori, standard 3GPP, AGCOM, WebKit, Google). Distinguere ciò che dice la fonte da ciò che se ne deduce. Nessun invio di prova, nessun account. Risultati in `docs/ricerca/email-sms-forma.md`.

Serve al design dei messaggi (oggi in «Non ancora specificato» nella mappa) e all'accesso con codice via SMS.

## Risposta (Answer)

Ricerca chiusa il 23/10/2026, svolta da un agente in parallelo con la skill `research`: [docs/ricerca/email-sms-forma.md](../../../docs/ricerca/email-sms-forma.md). Usa fonti primarie lette quel giorno: Google, Apple, Microsoft, Italiaonline, 3GPP, AGCOM, Garante, WebKit e W3C. caniemail compare solo dove manca una fonte primaria, e la ricerca lo segnala.

- **Email: il fatto in testo vero, sempre.** Gmail e Outlook non caricano i font web; Outlook classico ignora pulsanti veri, larghezze massime e sfondi. Solo Apple Mail gestisce bene tema scuro e animazioni. Quindi: una colonna, caratteri di sistema, un solo pulsante fatto come link, versione solo testo, il tema scuro trattato come caso normale. Nell'email «dinamica» il movimento è un'aggiunta: lo stato del mese si capisce anche a email ferma, primo fotogramma compreso.
- **Niente pixel di tracciamento.** Dal 29/10/2026 le linee guida del Garante (provv. 284 del 17/4/2026) chiedono il consenso, salvo eccezioni. Non usarli evita consenso e informativa dedicati; per le eccezioni servirebbe un parere.
- **SMS: un carattere fuori posto dimezza lo spazio.** Lettere accentate minuscole ed «É» stanno nei 160 caratteri; «€» ne occupa 2. Bastano una «È», la «Ǝ» di ƎE, un apostrofo tipografico, le virgolette «» o un'emoji per scendere a 70 caratteri. Gli SMS si scrivono quindi solo con l'alfabeto GSM-7, «EE» al posto di «ƎE».
- **Mittente degli SMS:** l'alias alfanumerico (al massimo 11 caratteri, senza «Ǝ») va registrato presso AGCOM tramite un fornitore; non riceve risposte e non si può usare per conto di altri. Chi è il mittente richiede una decisione dell'utente e un parere prima del pilota.
- **Codice d'accesso via SMS:** codice all'inizio, avvertenza antifrode, ultima riga `@dominio #codice`, perché iPhone e Android lo propongano da soli; l'esempio sta in 117 caratteri, un solo SMS. Per chi ha solo il cellulare ogni avviso con link comporta un secondo SMS col codice: due costi per interazione.
- **Restano da provare con account e invii veri, solo con autorizzazione:** tema scuro nelle app, «Ǝ» nel nome del mittente, aspetto di link e alias sui telefoni.

## Commenti (Comments)
