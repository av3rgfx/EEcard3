# Servizi esterni: email, SMS e ISTAT

Type: grilling
Status: resolved
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

## Risposta (Answer)

**1/11/2026, decisione dell'utente**, sette domande una alla volta, tutte sull'opzione consigliata, e un riepilogo confermato. Scritta in [ARCHITECTURE.md](../../../ARCHITECTURE.md), «Servizi esterni: email, SMS e ISTAT» e «Integrazioni»; prodotto in [PRODUCT.md](../../../PRODUCT.md) §12 (1/11/2026) e §10.10; termine «Recapitato» in [GLOSSARY.md](../../../GLOSSARY.md). Prezzi e condizioni riletti oggi in [docs/ricerca/invio-email-sms.md](../../../docs/ricerca/invio-email-sms.md), §10.

1. **Costo:** i circa 20 € coprono piattaforma ed email; gli SMS sono a parte, circa 0,40 € al mese per persona senza email, nel prezzo dell'adesione; avviso sopra 15 € al mese; si chiede a ƎE quanti non hanno l'email.
2. **Email:** Amazon SES a Milano, account di ƎE, esiti firmati via SNS.
3. **SMS:** Skebby con l'alias di ƎE nel Registro AGCOM, dopo la lettura del contratto sui dati; ripiego Amazon solo con la conferma scritta sull'alias.
4. **Dominio:** sottodominio di ƎE usato solo dalla piattaforma; risposte alla casella di ƎE con la risposta automatica.
5. **Non recapitati:** quattro esiti per messaggio, una voce per persona in «Oggi», niente aperture né reinvii automatici.
6. **ISTAT:** lettura notturna dell'indice una volta per mese, variazioni calcolate con la formula ufficiale, inserimento a mano se manca.
7. **Parola:** «recapitato».

Punti confermati nel riepilogo: messaggio salvato con il fatto e inviato subito, codici senza attesa, rinvio automatico dopo 10 minuti senza doppioni; una finta nelle prove; firma di SNS verificata e codice segreto nell'indirizzo di Skebby, niente dati nei registri; ricezione per le bollette (percorso 3) possibile con SES, non attivata. Al parere: ruolo di Skebby, mittente dell'alias, sub-responsabili di Amazon, durata degli esiti.

## Commenti (Comments)

**30/10/2026, da [Chi costruisce e tiene in funzione la piattaforma](01-chi-costruisce-e-mantiene.md).** Budget del pilota circa **20 € al mese in tutto**: gli SMS (circa 25–30 € ogni 300) da soli lo superano. Serve una stima dei messaggi, sapendo che l'SMS è solo per chi non ha l'email (§12, 23/10/2026) e che il ticket 13 può cambiare l'uso dei codici. I servizi sono a nome di ƎE e li paga l'agenzia.

**30/10/2026, da [Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md).** Ospitare costa circa 14–22 € al mese: per email e SMS restano pochi euro dei 20. Circa 25–30 € per 300 SMS non ci stanno; se non basta, si torna all'utente con i numeri. Il servizio di posta è un fornitore in più nell'elenco per ƎE.

**31/10/2026, da [Accesso: come entrano clienti e operatori](10-accesso.md).** Il servizio SMS scelto deve reggere un tetto nostro di 20 SMS d'accesso al giorno (codici e avvisi), oltre il quale il codice va solo via email; i messaggi essenziali via SMS restano fuori dal tetto. Ogni accesso riuscito manda un avviso (email se c'è, altrimenti SMS): circa un avviso al mese per persona, da contare nella spesa. L'invio dei codici non va atteso dalla richiesta, per non far capire dai tempi se un indirizzo è registrato ([ricerca](../../../docs/ricerca/accesso-codice.md), §5).

**31/10/2026, da [Modello dei dati e dei permessi del percorso 1](02-modello-dati-permessi.md).** Ogni messaggio inviato si conserva nella persona che lo riceve, con canale, fatto, casa, mese ed esito della consegna come lo dice il servizio d'invio; da lì «Oggi» mostra i non arrivati. Nessun servizio esterno di statistiche: le misure del pilota si fanno dentro la piattaforma.

**1/11/2026, da [Verifica operativa del percorso 1](16-verifica-operativa.md).** Gli avvisi di guasto non passano dal servizio email della piattaforma: arrivano da Scalingo e da GitHub. Nell'ambiente di prova e nei controlli nessun messaggio parte davvero: i codici si leggono in una pagina della prova, che in produzione non esiste. Il servizio scelto deve quindi poter essere sostituito da una finta nelle prove, e il suo esito di consegna va provato con dati inventati. Nei registri mai indirizzi, numeri o testo dei messaggi.

**1/11/2026, sessione del ticket: stima dei messaggi del pilota.** Prezzi riletti oggi in [docs/ricerca/invio-email-sms.md](../../../docs/ricerca/invio-email-sms.md), §10. Calcolo dell'agente, IVA esclusa, con **ipotesi da controllare nel pilota**: 1,2 proprietari e 1,3 inquilini per casa (2,5 persone); un accesso al mese per persona, perché la sessione dura 30 giorni fissi; chi non ha l'email è una quota che ƎE non ha ancora detto (§10.10, «email dei clienti»).

| Al mese, per casa | Messaggi |
| --- | --- |
| Essenziali (§10.5): inquilino promemoria e «pagato» (2), proprietario «pagato» e consegna (2), per 2,5 persone | 5 |
| Essenziali rari: contabile da confermare, non pagato, ritardo, nuovo canone, scadenze, contestazioni | 0,5 |
| Accesso: codice e avviso dopo l'accesso, per 2,5 persone | 5 |
| **Totale** | **circa 10,5** |

- **Totale:** circa 1.050 messaggi al mese con 100 case, 2.100 con 200, più gli inviti e le adesioni attive una volta sola (circa 2 per persona). Il giorno della scadenza i promemoria partono quasi tutti insieme: circa 130–260 in un giorno.
- **Email:** con Amazon SES circa 0,20–0,35 $ al mese; con Brevo gratis fino a 300 al giorno (il giorno dei promemoria con 200 case è vicino al limite) o 7 € con Starter, più 9 € se il logo di Brevo va tolto. In pratica **zero euro** con SES.
- **SMS:** chi ha solo il cellulare riceve circa **4 SMS al mese** (2 essenziali, codice e avviso): circa **0,39 €** a persona con Skebby (0,0925 € più 0,005 € di ricevuta), circa 0,32 $ con Amazon.

| Persone senza email | 100 case (250 persone) | 200 case (500 persone) |
| --- | --- | --- |
| 5% | 50 SMS, circa 5 € | 100 SMS, circa 10 € |
| 10% | 100 SMS, circa 10 € | 200 SMS, circa 20 € |
| 20% | 200 SMS, circa 20 € | 400 SMS, circa 39 € |

- **Contro i 20 €:** ospitare costa 14–22 € ([Com'è fatta la piattaforma e dove gira](08-forma-e-dove-gira.md)): restano da 6 € a meno 2 €. Gli SMS ci stanno solo con poche persone senza email e il contenitore piccolo. Skebby si compra a pacchetti: il primo da 25 € (255 SMS, validi 2 anni).
- **Caso peggiore d'abuso:** il tetto di 20 SMS d'accesso al giorno ([Accesso](10-accesso.md)) vale al massimo circa 600 SMS al mese, circa 58 €; i messaggi essenziali non hanno tetto, ma partono solo da fatti registrati da ƎE.

**1/11/2026, domanda 1, costo degli SMS. Scelta dell'utente: costo a parte** (opzione consigliata). I circa 20 € al mese coprono la piattaforma e le email; gli SMS sono una spesa a parte che cresce con le persone senza email (circa 0,40 € al mese ciascuna) e va considerata nel [prezzo dell'adesione](../../controllo-a/issues/10-prezzo-condizioni-adesione.md). La piattaforma conta gli SMS del mese e avvisa chi la mantiene sopra 15 €; si chiede a ƎE quanti clienti non hanno l'email. Nulla cambia per i clienti. *Scartate:* SMS solo per codice e avviso (cambierebbe D22: chi non ha l'email non saprebbe più «pagato», promemoria e consegna); budget portato a circa 40 € (ƎE pagherebbe di più prima di conoscere il prezzo dell'adesione).

**1/11/2026, domanda 2, servizio delle email. Scelta dell'utente: Amazon SES nella regione di Milano** (opzione consigliata). Dati in Italia, contratto sui dati nelle condizioni di AWS, quasi zero euro, esiti firmati da SNS e riprovati (fino a 1 ora con una regola nostra; la regola predefinita per HTTPS fa solo 3 tentativi), indirizzi simulati per le prove; per il percorso 3 riceve a Milano e salva solo dove si decide. Il pannello lo configurano gli agenti con una lista di passi per l'utente; l'uscita dalla «sandbox» si chiede all'apertura (risposta entro 96 ore). *Scartate:* Brevo (logo probabile nelle email, 9 € al mese per toglierlo; esiti non firmati e persi con un errore della piattaforma; registri senza limite da regolare; sub-responsabili negli Stati Uniti); Mailgun (100 email al giorno nel piano gratuito, sotto il giorno dei promemoria). Fonti rilette il 1/11/2026: prezzi SES e, per le notifiche, [nuovi tentativi di SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html) e [firma dei messaggi SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html), aggiunte alla ricerca.

**1/11/2026, domanda 3, servizio degli SMS. Scelta dell'utente: Skebby, con un controllo prima dell'account** (opzione consigliata). Skebby (Commify Italia) iscrive l'alias di ƎE nel Registro AGCOM e ne mostra la conferma; SMS «Classic+» con la ricevuta di consegna, circa 0,0975 € l'uno, pacchetti da 25 € validi 2 anni. Prima di aprire l'account l'utente legge con gli agenti il contratto sui dati in vigore: testi conservati il meno possibile e mai i codici oltre l'invio, nomina a responsabile per ciò che Skebby tratta per ƎE; ruolo di fornitore di comunicazioni (Garante, 2023) al parere. Se non regge, si passa ad Amazon End User Messaging solo dopo una conferma scritta di Amazon sull'iscrizione dell'alias. *Scartata:* Amazon subito (alias in Italia senza registrazione dichiarata, in contrasto con la delibera 9/26/CIR: SMS bloccati o da un numero qualsiasi).

**1/11/2026, domanda 4, dominio delle email. Scelta dell'utente: un sottodominio del dominio di ƎE** (opzione consigliata), usato solo dalla piattaforma (per esempio `avvisi.<dominio di ƎE>`), con SPF, DKIM di SES e DMARC allineati ([docs/ricerca/email.md](../../../docs/ricerca/email.md)). Mittente «ƎE» con «Connetto» accanto (§10.5); le risposte vanno alla casella di ƎE, dove si imposta la risposta automatica. Serve una volta l'accesso alle impostazioni del dominio di ƎE, con chi lo gestisce; se ƎE non ha un dominio, se ne compra uno a suo nome. Non aspetta il parere sul nome; fino all'apertura dell'account le prove usano la finta. *Scartati:* un dominio nuovo con il nome del servizio (aspetta il parere e i clienti non lo conoscono: sembra una truffa); il dominio principale di ƎE (un problema negli invii toccherebbe la posta normale dell'agenzia).

**1/11/2026, domanda 5, messaggi non arrivati. Scelta dell'utente: una voce per persona** (opzione consigliata). Ogni messaggio conservato nella persona ha uno di quattro esiti: *consegnato* (accettato dal server del destinatario o dall'operatore telefonico), *non arrivato* con il motivo, *segnato come spam* dalla persona, *esito non noto* se dopo 24 ore non è arrivata notizia; finché non ne arriva una è *in attesa* e non si mostra. «Oggi» ha una sola voce per persona con il motivo e cosa fare, non una per messaggio; un indirizzo rifiutato per sempre resta fermo (la lista di soppressione di SES) finché l'operatore non lo cambia al banco. Mai aperture né «letto», niente pixel; nessun reinvio automatico su un altro canale: l'operatore chiama. *Scartate:* reinvio automatico via SMS (costa e la persona può riceverlo due volte); solo i rifiuti certi (un messaggio perso senza notizia non si vedrebbe mai).

**1/11/2026, domanda 6, variazione ISTAT. Scelta dell'utente: lettura notturna e calcolo** (opzione consigliata). Il lavoro notturno legge dall'interfaccia SDMX di IstatData, una volta sola, l'indice FOI senza tabacchi di ogni mese che serve e lo conserva con la data della lettura, per tutte le case; poche richieste a notte, sotto il limite di 5 al minuto. Ogni variazione (un anno, due anni) si calcola dagli indici con la formula e i coefficienti di raccordo dell'ISTAT, con un test sui numeri ufficiali di settembre 2026 (+4,0% e +5,5%). La proposta di nuovo canone mostra numero, mese, «Fonte: ISTAT» con il link e la licenza CC BY 4.0, e l'operatore controlla (D18). Se il dato manca 3 giorni lavorativi dopo l'uscita del calendario, o il servizio non risponde (anche dopo un cambio di base, che cambia il nome della serie), «Oggi» chiede all'operatore di inserirlo a mano dai link ufficiali, con la scritta «inserito dall'operatore», e chi mantiene riceve un avviso. *Scartate:* solo a mano (cambierebbe D18, più lavoro ed errori di battitura); lettura della sola variazione su un anno, con quella su due anni a mano (due modi per lo stesso numero).

**1/11/2026, domanda 7, la parola dell'esito. Scelta dell'utente: «recapitato»** (opzione consigliata), e «non recapitato» con il motivo; «consegna» e «consegnata» restano solo per il denaro passato al proprietario. Scritta in [GLOSSARY.md](../../../GLOSSARY.md). Nella domanda 5 l'esito *consegnato* si chiama quindi *recapitato*. *Scartate:* «arrivato» (fa pensare alla posta in arrivo e alla lettura); «consegnato» (due significati nella stessa pagina).
