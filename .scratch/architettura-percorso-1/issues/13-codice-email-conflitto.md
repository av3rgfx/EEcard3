# Entrare con un codice via email: il conflitto con le fonti

Type: grilling
Status: resolved
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

## Risposta (Answer)

Decisa dall'utente il 30/10/2026, cinque domande una alla volta (dettaglio sotto «Commenti»). La decisione del 23/10/2026 resta per i clienti e si precisa; cambia per l'operatore.

- **Clienti:** si entra con il codice via email o SMS, senza password, come deciso il 23/10/2026, con regole più severe: codice di 6 cifre, valido 10 minuti, un uso, tentativi limitati; avviso a ogni nuovo accesso e a ogni cambio di email o numero; i cambi si fanno solo al banco. Il rischio che resta (una casella email violata) si scrive nella valutazione del rischio e va al parere privacy.
- **Passkey per i clienti:** facoltativa, da una voce del profilo («Entra con l'impronta»), mai chiesta né obbligatoria; il codice resta sempre disponibile.
- **Operatore di ƎE:** entra con la passkey (impronta, viso o PIN del suo telefono o computer), che vale come due prove e non si può farsela dare con l'inganno. Se perde il dispositivo, l'accesso lo riattiva l'utente, non un'email. Computer condiviso al banco o no: da chiarire con il collaboratore di ƎE (telefono personale o chiavetta da circa 30 € una tantum).
- **Account di lavoro a parte:** lo spazio di lavoro è un account a sé, con un'email di lavoro e la passkey; l'account da cliente della stessa persona è come gli altri. Il codice via email non apre mai i dati di tutte le case.
- **Quando:** passkey e riga dell'SMS legata al dominio arrivano con l'indirizzo web definitivo (parere sul nome); fino ad allora le prove usano un indirizzo di prova.
- **Pareri:** al parere privacy tre domande: il codice è adeguato per i clienti (art. 32)? la passkey lo è per l'operatore? come si scrive la valutazione del rischio? Il controllo di sicurezza lo fa l'utente con gli agenti, su una lista: limiti a tentativi e invii, durata delle sessioni, nessuna consultazione in serie dei dati, recupero dell'account di lavoro. La prova d'attacco fatta da esperti manca e si dichiara come rischio al controllo B.

Registrata in [PRODUCT.md](../../../PRODUCT.md) §12 (30/10/2026, «Accesso: codice per i clienti, passkey per l'operatore») e §10.10 (pareri), [ARCHITECTURE.md](../../../ARCHITECTURE.md) («Cosa vincolerà la scelta»), [DESIGN.md](../../../DESIGN.md) («Accesso, tessera e situazioni comuni»), [GLOSSARY.md](../../../GLOSSARY.md) («Account di lavoro»). Regole tecniche, durate delle sessioni e lista di controllo si fissano nel ticket [Accesso: come entrano clienti e operatori](10-accesso.md). Quanti SMS servono non cambia: il codice via SMS resta per chi non ha l'email o lo sceglie.

## Commenti (Comments)

**30/10/2026, sessione di grilling** (skill `grilling`, `domain-modeling`, `ponytail`). Domande una alla volta.

1. **Clienti, il modo di entrare.** Domanda: tenere il codice via email o SMS deciso il 23/10, con regole più severe, oppure solo al primo accesso e poi passkey, oppure password più codice. Risposta dell'utente: **tenere il codice** (consigliato). Regole più severe: 10 minuti, un uso, tentativi limitati, avviso a ogni nuovo accesso e a ogni cambio di email o numero, cambi solo al banco. Il rischio residuo (una casella email violata) si scrive e va al parere privacy. Scartati: codice solo al primo accesso e poi passkey (chi ha un telefono vecchio o non capisce il passaggio torna al banco; aspetta il dominio); password più codice (contro il motivo del 23/10).
2. **Operatore di ƎE.** Domanda: passkey, codice più app di codici, oppure come i clienti. Risposta dell'utente: **passkey** (consigliato). Entra con l'impronta, il viso o il PIN del suo telefono o computer; per le regole tecniche vale come due prove e non si può farsela dare con l'inganno (caso del Garante del 2026). Se perde il dispositivo, l'accesso lo riattiva l'utente, non un'email. Computer condiviso al banco: telefono dell'operatore o chiavetta (circa 30 € una tantum), da chiarire con il collaboratore di ƎE. Aspetta l'indirizzo web definitivo (parere sul nome). Scartati: codice più app di codici (due passaggi; i codici si possono ancora farsi dettare); come i clienti (difficile da sostenere come misura adeguata ai dati di tutte le case).
3. **Passkey per i clienti.** Domanda: offrirla come aggiunta facoltativa, rimandarla all'app iPhone, oppure mai. Risposta dell'utente: **facoltativa, nel profilo** (consigliato). Una voce «Entra con l'impronta» nel profilo, mai chiesta né obbligatoria; il codice via email o SMS resta sempre disponibile. Costa poco perché c'è già per l'operatore; arriva quando l'indirizzo web è definitivo. Scartati: dopo, con l'app iPhone (al parere privacy si porterebbe il codice senza alternative); mai (il codice resterebbe senza alternativa anche con lo spazio delle bollette).
4. **Operatore che è anche cliente** (caso limite emerso dalla risposta 2). Domanda: account di lavoro a parte, oppure un account solo con la passkey chiesta per passare allo spazio di lavoro. Risposta dell'utente: **account di lavoro a parte** (consigliato). Lo spazio di lavoro è un account a sé, con un'email di lavoro e la passkey; l'account da cliente della stessa persona è come gli altri, con il codice. Il codice via email non apre mai lo spazio con i dati di tutte le case; se la persona lascia ƎE si chiude l'account di lavoro e le sue case da cliente restano. Scartato: un account con la passkey chiesta per passare al lavoro (più logica da costruire e verificare, ruolo da togliere a mano).
5. **Pareri e controllo di sicurezza.** Domanda: parere privacy più una lista di controllo fatta dall'utente con gli agenti, oppure in più un controllo esterno a pagamento, oppure solo il parere privacy. Risposta dell'utente: **parere privacy più lista** (consigliato). Scartati: controllo esterno (riapre la scelta del 30/10/2026 sul budget); solo il parere (i punti deboli tipici dell'accesso non verrebbero controllati uno per uno).

Riassunto confermato dall'utente prima di registrare.
