# Entrare con un codice via email: il conflitto con le fonti

Type: grilling
Status: open
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

La [ricerca sull'accesso](04-ricerca-accesso-codice.md) ha trovato un **possibile conflitto con una decisione confermata**: «si entra con un codice di verifica via email o via SMS, per tutti, senza password» ([PRODUCT.md](../../../PRODUCT.md) §12, 23/10/2026). È un conflitto da portare all'utente con una proposta, prima di scegliere la forma della piattaforma e il modo di entrare (AGENTS.md, «Ordine delle decisioni»).

Fatti ([docs/ricerca/accesso-codice.md](../../../docs/ricerca/accesso-codice.md), sezione «Possibile conflitto con una decisione confermata»; frase di NIST ricontrollata dalla sessione principale il 30/10/2026):
- NIST SP 800-63B-4, §3.1.3.1: «Email SHALL NOT be used for out-of-band authentication», a tutti i livelli. L'email resta ammessa per verificare un indirizzo e per il recupero. È una norma federale statunitense: in Italia è un riferimento tecnico, non un obbligo.
- L'SMS per NIST è «limitato»: da solo basta solo al livello più basso, con un'alternativa più forte e un'informativa sui rischi. OWASP ed ENISA vanno nella stessa direzione.
- Per chi vede i dati di molte persone (l'operatore di ƎE) le fonti chiedono più di un fattore; il Garante ha sanzionato in base all'art. 32 la mancanza del secondo fattore (2025 e 2026).
- Le passkey resistono al phishing e funzionano sul web e poi sull'app iPhone, ma sono legate al dominio, che aspetta il parere sul nome.

Si decide con l'utente, una domanda alla volta, in parole semplici:
1. **Clienti:** tenere il codice via email o SMS com'è deciso, magari con regole più severe (durata, tentativi, avvisi) e la passkey offerta come aggiunta facoltativa, oppure cambiare la decisione. Cosa comporta per chi è poco pratico, il motivo della scelta del 23/10.
2. **Operatore di ƎE:** se ha bisogno di qualcosa in più del codice, per esempio una passkey o un secondo fattore, e quale.
3. **Pareri:** cosa si chiede al parere privacy (art. 32) e a un controllo di sicurezza prima del pilota.

Limiti: un cambio di prodotto va in PRODUCT.md §12 con data e motivo; le regole tecniche vanno poi in [Accesso: come entrano clienti e operatori](10-accesso.md). Nessun account o servizio.
