# Ricerca: accesso con un codice via email o SMS

Type: research
Status: open
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Decisione confermata ([PRODUCT.md](../../../PRODUCT.md) §12, 23/10/2026): **si entra con un codice di verifica via email o SMS, senza password**, per tutti; l'account lo crea l'operatore al banco con l'email o il cellulare verificati. Cosa dicono oggi le fonti ufficiali e di riferimento su questo modo di entrare, per il cliente e per l'operatore di ƎE, che vede i dati di tutte le case. Serve a [Accesso: come entrano clienti e operatori](10-accesso.md).

1. **Quanto è sicuro e a quali condizioni:** codice monouso via email e via SMS, link magico, passkey come aggiunta facoltativa. Fonti: NIST SP 800-63B nella revisione in vigore, ENISA, AgID, Garante (misure dell'art. 32 GDPR), OWASP come riferimento tecnico. Limiti noti: scambio della SIM, casella email condivisa, inoltro del codice. Se una fonte sconsiglia ciò che è deciso, lo si scrive chiaro: diventa un conflitto da portare all'utente.
2. **Le regole pratiche:** durata e lunghezza del codice, tentativi, blocchi, durata della sessione e uscita, recupero quando si cambia numero o email, avvisi di accesso nuovo.
3. **Per l'operatore:** se serve qualcosa in più, per esempio un secondo fattore o una passkey, e cosa dicono le fonti per chi vede dati di molte persone.
4. **Sul web e sull'iPhone:** riempimento automatico del codice da SMS ed email (`autocomplete="one-time-code"`, formato del messaggio già in [docs/ricerca/email-sms-forma.md](../../../docs/ricerca/email-sms-forma.md) §5, da non ripetere); supporto delle passkey nei browser e sull'app iPhone che verrà dopo.

Limiti: solo pagine ufficiali pubbliche, con la data di lettura e il link a ogni fonte primaria. Nessun account o servizio. Non si consultano repository o decisioni di tentativi precedenti. Si distingue fonte da inferenza; si segnala dove serve un parere. Nessuna scelta. Risultati in `docs/ricerca/accesso-codice.md`.
