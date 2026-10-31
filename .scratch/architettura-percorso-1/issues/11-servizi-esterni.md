# Servizi esterni: email, SMS e ISTAT

Type: grilling
Status: open
Blocked by: 01, 05, 07
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Con i fatti delle ricerche su [email e SMS](05-ricerca-invio-email-sms.md) e sulla [variazione ISTAT](07-ricerca-istat.md), e con il budget deciso in [Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md), si scelgono con l'utente i servizi esterni del percorso 1 ([PRODUCT.md](../../../PRODUCT.md) §10.10, «Architettura»).

1. **Email:** fornitore, mittente (ƎE con «Connetto» accanto, §10.5), dominio, risposte alla casella di ƎE con la risposta automatica.
2. **SMS:** fornitore, mittente alfanumerico e registrazione presso AGCOM, solo per chi non ha l'email.
3. **Messaggi non arrivati:** che cosa la piattaforma sa e mostra in «Oggi», e che cosa non mostra come «arrivato».
4. **ISTAT:** lettura automatica dalla fonte ufficiale, con il dato inserito dall'operatore se manca (D18).
5. **Per dopo:** se il servizio email scelto può anche ricevere, per l'indirizzo per le bollette del percorso 3, senza attivarlo ora.

Limiti: nessun account, nessun messaggio vero senza l'autorizzazione dell'utente; le prove usano ambienti di prova. Scelta in ARCHITECTURE.md («Integrazioni»).

## Commenti (Comments)

**30/10/2026, da [Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md).** Budget del pilota circa **20 € al mese in tutto**: gli SMS (circa 25–30 € ogni 300) da soli lo superano. Serve una stima dei messaggi, sapendo che l'SMS è solo per chi non ha l'email (§12, 23/10/2026) e che il ticket 13 può cambiare l'uso dei codici. I servizi sono a nome di ƎE e li paga l'agenzia.

**30/10/2026, da [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md).** Ospitare costa circa 14–22 € al mese: per email e SMS restano pochi euro dei 20. Circa 25–30 € per 300 SMS non ci stanno; se non basta, si torna all'utente con i numeri. Il servizio di posta è un fornitore in più nell'elenco per ƎE.

**31/10/2026, da [Accesso: come entrano clienti e operatori](10-accesso.md).** Il servizio SMS scelto deve reggere un tetto nostro di 20 SMS d'accesso al giorno (codici e avvisi), oltre il quale il codice va solo via email; i messaggi essenziali via SMS restano fuori dal tetto. Ogni accesso riuscito manda un avviso (email se c'è, altrimenti SMS): circa un avviso al mese per persona, da contare nella spesa. L'invio dei codici non va atteso dalla richiesta, per non far capire dai tempi se un indirizzo è registrato ([ricerca](../../../docs/ricerca/accesso-codice.md), §5).
