# Servizi esterni durante la costruzione: finti o veri

Type: grilling
Status: open
Blocked by: 01, 03
Mappa: [Costruzione del percorso 1: il piano](../map.md)

## Domanda (Question)

Nei controlli e nell'ambiente di prova un'unica **finta** sostituisce SES e Skebby e non parte niente di vero (ARCHITECTURE.md, «Servizi esterni»). Restano da collocare nel piano le verifiche che chiedono il servizio vero, ciascuna solo con l'autorizzazione dell'utente:

1. **Amazon SES:** gli esiti con gli indirizzi simulati, che chiedono un account AWS; e la firma degli esiti via SNS.
2. **Skebby:** la modalità di prova e la lettura del contratto sui dati prima di aprire l'account.
3. **IstatData:** il calcolo provato su una lettura salvata; quando si legge davvero dal servizio pubblico.

Per ciascuno: durante la costruzione, alla tappa che lo usa, oppure solo prima del pilota; e cosa si prova intanto con la finta. Dipende dalla [ricerca](01-ricerca-piattaforma-servizi.md) e dalla forma decisa in [Come si divide la costruzione](03-come-si-divide.md).

## Risposta (Answer)
