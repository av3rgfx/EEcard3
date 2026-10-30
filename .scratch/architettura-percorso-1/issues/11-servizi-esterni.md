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
