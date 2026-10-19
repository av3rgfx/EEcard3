# Ricerca: email che non sembrano spam

Type: research
Status: resolved
Blocked by: —
Mappa: [Superare il controllo A con le evidenze](../map.md)

## Domanda (Question)

L'email è il canale che raggiunge tutti, e le email devono essere innovative e dinamiche ma non sembrare spam o pubblicità ([PRODUCT.md](../../../PRODUCT.md) §12, [DESIGN.md](../../../DESIGN.md), 19/10/2026). Cosa serve, su fonti ufficiali aggiornate, perché le email di servizio arrivino nella posta in arrivo e siano riconoscibili, e quali forme «dinamiche» i programmi di posta mostrano davvero?

- Requisiti dei grandi fornitori di posta per i mittenti (Gmail, Yahoo, Outlook.com, e i più diffusi in Italia se pubblicano regole): autenticazione del mittente, allineamento, disiscrizione, soglie di segnalazione.
- Riconoscibilità del marchio nella casella (per esempio logo del mittente): requisiti, certificati, legame con un marchio registrato (il nome del prodotto non è ancora deciso), programmi che lo mostrano.
- Email dinamiche e azioni nella casella: quali tecnologie esistono, chi le supporta oggi, cosa richiedono.
- Separazione fra email di servizio e promozionali; regole italiane ed europee su consenso e comunicazioni promozionali; cosa rende un'email di servizio tale.
- Accessibilità e tema scuro nelle email, solo per i vincoli che cambiano il contenuto dei messaggi.

Esito atteso: `docs/ricerca/email.md`, con ciò che ne deriva per i messaggi del percorso 1 e ciò che dipende da scelte non ancora fatte (nome, marchio, architettura).

## Risposta (Answer)

Risolto il 19/10/2026 con la skill `research`, da un agente in parallelo; dettaglio e fonti in [docs/ricerca/email.md](../../../docs/ricerca/email.md).

- Per arrivare nella posta in arrivo bastano, ai volumi del pilota, SPF o DKIM, DNS inverso, TLS e poche segnalazioni (sotto lo 0,3%); le regole severe partono da circa 5.000 email al giorno. Conviene comunque SPF, DKIM e DMARC allineati da subito. DMARC è ora RFC 9989 (maggio 2026).
- Il logo nella casella richiede DMARC rigoroso e, per Gmail, un certificato legato a un marchio registrato o a un logo mostrato da 12 mesi sul dominio: nel pilota è improbabile, e dipende dal nome, che è fuori da questa mappa.
- Le email dinamiche (AMP) funzionano solo in Gmail, Yahoo e pochi altri, non in Outlook.com né in Apple Mail; le azioni nella casella chiedono volumi che il pilota non ha. Quindi «dinamiche» deve voler dire contenuto puntuale e chiaro, non tecnologia speciale (inferenza).
- Un'email con scopo commerciale è promozionale anche se informa (Corte di giustizia, C-654/23): le email del percorso 1 restano di servizio solo se non propongono nulla.
- Per il percorso 1 (inferenza): solo email di servizio, mittente costante e a cui si può rispondere, il fatto nell'oggetto con le parole esatte degli stati del canone, un solo link, nessuna azione sul denaro dall'email, leggibili senza immagini; l'apertura non prova la lettura.
- Decisioni nuove, passate alla [Specifica del percorso 1: attivazione e canone del mese](09-specifica-percorso-1.md): chi firma le email nel pilota (ƎE, il nuovo marchio o entrambi); dove arrivano le risposte; importi e nomi nell'email o solo il fatto e un link; se le email di servizio possono proporre pratiche a pagamento; «registrato» e «consegnato» in una o due email. Il logo in casella va con il nome, fuori ambito.
- Non lette: pagine per i mittenti di Libero, TIM e Aruba (non raggiungibili o inesistenti).
