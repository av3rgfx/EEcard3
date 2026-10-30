# Ricerca: accesso con un codice via email o SMS

Type: research
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Decisione confermata ([PRODUCT.md](../../../PRODUCT.md) §12, 23/10/2026): **si entra con un codice di verifica via email o SMS, senza password**, per tutti; l'account lo crea l'operatore al banco con l'email o il cellulare verificati. Cosa dicono oggi le fonti ufficiali e di riferimento su questo modo di entrare, per il cliente e per l'operatore di ƎE, che vede i dati di tutte le case. Serve a [Accesso: come entrano clienti e operatori](10-accesso.md).

1. **Quanto è sicuro e a quali condizioni:** codice monouso via email e via SMS, link magico, passkey come aggiunta facoltativa. Fonti: NIST SP 800-63B nella revisione in vigore, ENISA, AgID, Garante (misure dell'art. 32 GDPR), OWASP come riferimento tecnico. Limiti noti: scambio della SIM, casella email condivisa, inoltro del codice. Se una fonte sconsiglia ciò che è deciso, lo si scrive chiaro: diventa un conflitto da portare all'utente.
2. **Le regole pratiche:** durata e lunghezza del codice, tentativi, blocchi, durata della sessione e uscita, recupero quando si cambia numero o email, avvisi di accesso nuovo.
3. **Per l'operatore:** se serve qualcosa in più, per esempio un secondo fattore o una passkey, e cosa dicono le fonti per chi vede dati di molte persone.
4. **Sul web e sull'iPhone:** riempimento automatico del codice da SMS ed email (`autocomplete="one-time-code"`, formato del messaggio già in [docs/ricerca/email-sms-forma.md](../../../docs/ricerca/email-sms-forma.md) §5, da non ripetere); supporto delle passkey nei browser e sull'app iPhone che verrà dopo.

Limiti: solo pagine ufficiali pubbliche, con la data di lettura e il link a ogni fonte primaria. Nessun account o servizio. Non si consultano repository o decisioni di tentativi precedenti. Si distingue fonte da inferenza; si segnala dove serve un parere. Nessuna scelta. Risultati in `docs/ricerca/accesso-codice.md`.

## Risposta (Answer)

Ricerca chiusa il 30/10/2026, svolta da un agente in background con la skill `research`: [docs/ricerca/accesso-codice.md](../../../docs/ricerca/accesso-codice.md).

- **Possibile conflitto con la decisione del 23/10/2026.** NIST SP 800-63B-4 (finale, 31/7/2025) vieta l'email come modo di entrare a tutti i livelli: resta ammessa solo per verificare un indirizzo e per il recupero. L'SMS è «limitato»: da solo vale solo al livello più basso, insieme a un'alternativa più forte e a un'informativa sui rischi. OWASP ASVS 5.0 e ENISA vanno nella stessa direzione. La decisione resta all'utente.
- **Regole pratiche concordi.** Codice di almeno 6 cifre, valido al massimo 10 minuti, usabile una volta e solo per la sua richiesta. Tentativi limitati per account, senza azzerarli con un codice nuovo. Stessa risposta se l'account esiste o no. Avvisi a ogni recupero o cambio; uscita facile da trovare.
- **Operatore.** Le fonti chiedono più di un fattore a chi ha privilegi elevati. Il Garante ha sanzionato in base all'art. 32 la mancanza del secondo fattore, nel 2025 e nel 2026; il caso del 2026 riguarda un'applicazione web dei punti vendita. Un solo codice via email o SMS è la soluzione più debole per chi vede tutte le case (inferenza).
- **Passkey.** Sono resistenti al phishing; NIST le ammette, anche sincronizzate, fino al livello AAL2. WebAuthn Livello 3 è una Raccomandazione W3C dal 25/8/2026. L'app iPhone può usare le stesse passkey del sito se dichiara il dominio. Sono legate al dominio, che aspetta il parere sul nome.
- **Codici in Safari.** Safari compila i codici da SMS e, da iOS 17, anche da Mail; il formato dell'email non è documentato (da verificare).
- **Pareri.** Privacy, sull'adeguatezza ai sensi dell'art. 32 per clienti e operatore; sicurezza informatica, in un controllo prima del pilota.
