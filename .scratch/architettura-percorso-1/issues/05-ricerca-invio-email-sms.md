# Ricerca: servizi per inviare email e SMS

Type: research
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

La piattaforma manda email, o SMS a chi non ha l'email, per i tredici fatti di [PRODUCT.md](../../../PRODUCT.md) §10.5 e per i codici d'accesso. La pagina «Oggi» dell'operatore mostra i messaggi non arrivati con il motivo ([ARCHITECTURE.md](../../../ARCHITECTURE.md), «Da valutare al passo 7»). Quali servizi d'invio esistono che vanno bene per il pilota e cosa offrono davvero. Serve a [Servizi esterni: email, SMS e ISTAT](11-servizi-esterni.md). Due o tre fornitori per le email e due o tre per gli SMS, preferendo quelli con dati nell'UE:

1. **Cosa segnalano e come lo dicono alla piattaforma:** consegnato, rifiutato, rimbalzato, segnato come spam, SMS non consegnato, con il motivo. Cosa non si può sapere (un'email nello spam, letta o no) e quindi non si mostra come «arrivato».
2. **Dati e contratto:** dove stanno i dati, contratto sui dati (art. 28 GDPR), sub-responsabili, per quanto conservano i messaggi.
3. **Mittente:** dominio proprio con SPF, DKIM e DMARC (requisiti già in [docs/ricerca/email.md](../../../docs/ricerca/email.md), da non ripetere); per gli SMS il mittente alfanumerico e la registrazione presso AGCOM (già in [docs/ricerca/email-sms-forma.md](../../../docs/ricerca/email-sms-forma.md) §4, da aggiornare solo se è cambiato).
4. **Prove e costi:** ambiente di prova che non manda messaggi veri, costo per il pilota (ordine di grandezza: qualche migliaio di email e qualche centinaio di SMS al mese), limiti del piano gratuito.
5. **Per dopo, senza sceglierlo ora:** se lo stesso servizio può anche **ricevere** email, per l'indirizzo per le bollette del percorso 3 (§12, 19/10/2026).

Limiti: solo pagine ufficiali pubbliche, con la data di lettura e il link a ogni fonte primaria. Nessun account, nessuna prova gratuita, nessun messaggio inviato. Non si consultano repository o decisioni di tentativi precedenti. Si distingue fonte da inferenza; si segnala dove serve un parere. Nessuna scelta. Risultati in `docs/ricerca/invio-email-sms.md`.

## Risposta (Answer)

Ricerca chiusa il 30/10/2026, svolta da un agente in background con la skill `research`: [docs/ricerca/invio-email-sms.md](../../../docs/ricerca/invio-email-sms.md).

- **Cosa si sa:** per le email «consegnato» vuol dire solo accettato dal server del destinatario; si sanno anche rifiuto con motivo, ritardo e segnalazione di spam. Nessun servizio sa se l'email è nella posta in arrivo o se è stata letta. Per gli SMS la consegna la dice l'operatore; Skebby la dà solo con la ricevuta a pagamento (0,005 € a SMS). Per «Oggi» bastano tre stati: consegnato, non arrivato con il motivo, in attesa.
- **Email con dati nell'UE:** Amazon SES a Milano (0,10 $ ogni 1.000, contratto sui dati nelle condizioni), Brevo (Francia, dati in Belgio e Francia, gratis fino a 300 al giorno), Mailgun regione UE (Germania e Belgio, gratis fino a 100 al giorno, registro di un giorno). Tutti e tre hanno un modo di provare senza invii veri e possono ricevere email per l'indirizzo delle bollette.
- **SMS con il nome come mittente:** Brevo in Italia offre solo numeri +39 e nei piani costosi; Skebby registra l'alias e ne segue la conferma AGCOM; Amazon dichiara l'alias senza registrazione, da verificare con la delibera 9/26/CIR. Nessuna nuova regola AGCOM dopo il 23/10/2026.
- **Costi del pilota:** per 5.000 email al mese da 0 a 15 $ secondo il servizio e il piano (meno di 1 $ con SES); per 300 SMS circa 24 $ con Amazon o 29 € con Skebby.
- **Attenzione:** Brevo scarta una notifica se la piattaforma risponde con un errore, quindi serve un controllo dei registri. Per il Garante (2023) un fornitore di SMS come Commify-Skebby è un fornitore di servizi di comunicazione elettronica, non solo un responsabile: il contratto sui dati con il fornitore di SMS va visto con un parere.
