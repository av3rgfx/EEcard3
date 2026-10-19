# Specifica del percorso 1: attivazione e canone del mese

Type: grilling
Status: open
Blocked by: 01, 02, 03, 05, 06, 07
Mappa: [Superare il controllo A con le evidenze](../map.md)

## Domanda

Come funziona, passo per passo, il percorso 1 per le case gestite da ƎE, alla luce delle ricerche, dei fatti dell'agenzia e delle sintesi dei colloqui? Serve ciò che chiede il criterio 5 di [docs/STUDIO.md](../../../docs/STUDIO.md): passi, chi fa cosa, stati del canone, messaggi, casi limite (canone parziale, ritardo, contestazione, fine della locazione), cosa vede ciascuno, misure di successo del pilota.

- **Attivazione:** scheda della casa, documenti dell'agenzia ed elenco dei mancanti, scelta dei tecnici e liberatorie, inviti a proprietario e inquilino, adesione e tessera, impostazione dell'indirizzo per le bollette.
- **Canone del mese:** importo dovuto e suoi aggiornamenti; pagamento al banco registrato dall'agenzia con la ricevuta; bonifico con contabile e conferma di chi riceve; «incassato dall'agenzia» e «consegnato al proprietario»; residuo e quietanza. Va chiarito, con la skill `domain-modeling`, come questi stati si legano ai passaggi del denaro di [PRODUCT.md](../../../PRODUCT.md) §7.4 (per esempio se «incassato dall'agenzia» è già l'incasso verificato per il proprietario).
- **Messaggi:** quali eventi producono un'email o una notifica, per chi e con quale contenuto essenziale. La forma si progetta dopo il controllo A. Decisioni emerse dalla [ricerca sulle email](05-email-non-spam.md): chi firma le email nel pilota (ƎE, il nuovo marchio o entrambi); dove arrivano le risposte; importi e nomi nell'email o solo il fatto e un link; se le email di servizio possono proporre pratiche a pagamento (se sì diventano promozionali); «registrato» e «consegnato» in una o due email.
- **Chi lo eroga:** persone e ore dell'agenzia.
- **Misure di successo del pilota** (PRODUCT.md §13), con la skill `ux-strategy`, senza valori inventati.

Si registra: la specifica in PRODUCT.md §10, le misure in §13, le decisioni in §12, i termini decisi in [GLOSSARY.md](../../../GLOSSARY.md). Nessuna schermata. Se non sta in una sessione, si divide in «attivazione» e «canone del mese».

È bloccato anche dai ticket dei colloqui, oggi in «Non ancora specificato»: quando diventano ticket, si aggiungono alla riga `Blocked by`.
