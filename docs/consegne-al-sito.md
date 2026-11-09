# Consegne da Connetto al sito di ƎE

Registro delle decisioni di Connetto che toccano il sito di ƎE (repository separato `av3rgfx/Conneto-Sito`), da leggere a inizio sessione da chi lavora sul sito, con Claude Code o Codex. Lo scrivono solo le sessioni di Connetto, una voce per consegna, la più recente in cima; il sito non si modifica da qui. Il contratto tecnico è in [integrazione-sito.md](integrazione-sito.md), che prevale su questo registro; le consegne arrivate *dal* sito sono annotate nel ticket [Integrazione con il sito di ƎE](../.scratch/proposte-collaboratore-4-novembre/issues/13-integrazione-sito.md).

Ogni voce segue la [§10 del contratto](integrazione-sito.md#10-aggiornamenti-fra-i-due-progetti): decisione e fonte, cosa cambia per il sito, compatibilità, disponibilità effettiva, prove, azione richiesta al sito. Mai segreti, chiavi, indirizzi inventati o dati reali.

---

## 8/11/2026: professionisti della compravendita e «chi fa cosa»

**Decisione e fonte.** Decisioni dell'utente del 7 e dell'8/11/2026 ([PRODUCT.md](../PRODUCT.md) §12, 8/11/2026; ticket [Professionisti della compravendita: in che forma, e chi fa cosa](../.scratch/proposte-collaboratore-4-novembre/issues/08-professionisti-compravendita-aste.md); parole in [GLOSSARY.md](../GLOSSARY.md)). Precisa la rete del 5/11 e del 6/11/2026; contratto in [integrazione-sito.md](integrazione-sito.md) §6.

**Cosa cambia per il sito.**
1. **Forma:** ƎE **indica** i professionisti della Rete ƎE. Il visitatore sceglie, affida il lavoro e lo paga direttamente al professionista; il contatto passa dall'agenzia, come già deciso (§7 del contratto). ƎE non fa consulenza nelle pratiche e non dà incarichi al posto del cliente: il sito non deve dire il contrario (per esempio «ci pensiamo noi», «ti assegniamo un professionista»).
2. **Parole:** «professionista» per tutti; «Rete ƎE» per quelli che l'agenzia indica; un notaio o un geometra non sono «tecnici». Da evitare, come nel glossario: «partner» (fa pensare a un accordo commerciale) e, per l'indicazione, «segnalazione», «raccomandazione» e «consiglio di fiducia» (fanno pensare a una garanzia sul lavoro altrui).
3. **Quali mestieri:** nella prima versione la rete comprende la **compravendita**. Gli altri servizi della landing (progettare e rinnovare, traslochi, caldaia e idraulica) restano **presentazione con il contatto dell'agenzia, senza nomi**; potranno entrare nella rete solo con una nuova decisione. **Utenze e bollette** non entrano nella rete. **Mutuo e assistenza legale** non si indicano con nomi finché le loro regole non sono verificate.
4. **«Chi fa cosa»:** ci sarà un testo breve, uguale sul sito e in Connetto, accanto all'elenco dei professionisti. Esiste solo una bozza in attesa del controllo dell'avvocato.

**Compatibilità.** Nessun cambiamento ai campi del contratto (versione 1); il campo `professione` resta un elenco chiuso da decidere, all'inizio solo professioni della compravendita.

**Disponibilità effettiva.** Nessun endpoint, nessun codice, nessuna chiave, nessun indirizzo, nessun professionista reale. Il controllo B aspetta ora i ticket 09, 13 e 14.

**Prove.** Nessuna: non c'è nulla da provare.

**Azione richiesta al sito.**
- Controllare i testi della landing e del gruppo «comprare e vendere» con i punti 1–3: niente promesse di consulenza, di incarichi gestiti dall'agenzia o di garanzia sul lavoro dei professionisti; niente nomi di professionisti, neanche d'esempio presentati come reali.
- **Non pubblicare** una spiegazione «chi fa cosa» scritta sul sito: arriverà da Connetto con il testo controllato dall'avvocato.

---

## 7/11/2026: tessera per chi vende

**Decisione e fonte.** Decisioni dell'utente del 7/11/2026 ([PRODUCT.md](../PRODUCT.md) §12; ticket [Una tessera per chi vende e un'app sola](../.scratch/proposte-collaboratore-4-novembre/issues/07-tessera-e-app.md)). Precisa il punto 4 della voce del 6/11/2026.

**Cosa cambia per il sito.**
1. **Cosa è la tessera di chi vende:** un segno per farsi riconoscere in agenzia. Non apre nulla, non dà servizi o sconti e non paga. Il servizio di chi vende in Connetto è la parte base: la casa, i suoi documenti, la valutazione (la prima gratuita) e la rete.
2. **A chi va:** a chi ha una casa in vendita in Connetto, dal giorno della valutazione o dell'incarico di vendita. Si consegna **solo in agenzia**: il sito non la vende, non la spedisce e non la richiede.
3. **Prezzo:** per ora l'adesione di chi ha solo case in vendita è **gratuita**; le valutazioni dopo la prima si pagano al prezzo di ƎE (3/11/2026). Un prezzo per chi vende arriverà solo se lo propone il collaboratore di ƎE e lo decide l'utente.
4. **Aspetto:** ci sarà una seconda tessera fisica di un altro colore, accanto all'arancione. **Il colore non è scelto** (il verde dell'audio era un esempio); quale tessera ha chi affitta e vende insieme è aperto (ticket [Quale tessera ha chi affitta e vende insieme](../.scratch/proposte-collaboratore-4-novembre/issues/14-tessera-affitta-e-vende.md)).
5. **Un'app sola:** chi vende usa la stessa Connetto degli altri clienti; nessuna app a parte.

**Compatibilità.** Nessun cambiamento al contratto (versione 1): il sito non legge dati sulla tessera.

**Disponibilità effettiva.** Nessun endpoint, nessun codice, nessuna chiave, nessun indirizzo. Il controllo B aspetta ora i ticket 08, 09, 13 e 14.

**Prove.** Nessuna: non c'è nulla da provare.

**Azione richiesta al sito.**
- Se il sito parla della tessera di chi vende, dirla com'è: un segno consegnato in agenzia a chi vende con ƎE, oggi senza costi; niente vantaggi, sconti, servizi in più o prezzi.
- Non mostrare la tessera di chi vende con un colore o un disegno finché il colore non è scelto; niente verde come se fosse deciso.

---

## 7/11/2026: chi vende in Connetto

**Decisione e fonte.** Decisioni dell'utente del 7/11/2026 ([PRODUCT.md](../PRODUCT.md) §12 e §10.8; ticket [Chi vende, chi compra e chi ha una sola casa](../.scratch/proposte-collaboratore-4-novembre/issues/06-chi-vende-chi-compra.md)).

**Cosa cambia per il sito.**
1. **Chi vende è nel pilota**, con casa senza gestione, documenti, valutazione con la pubblicazione sul sito, tessera e rete. Le valutazioni delle case in vendita arrivano quindi al sito fin dal pilota, con i campi e le regole del 3/11/2026 ([integrazione-sito.md](integrazione-sito.md) §5), invariati.
2. **Chi compra non ha nulla in Connetto** nella prima versione: contatta l'agenzia dal sito, senza account, come già deciso il 5/11/2026.
3. **Casa venduta:** il rapporto del proprietario con la casa finisce alla data della vendita. Se la sua valutazione pubblicata debba uscire dal sito con la vendita è **aperto** ([integrazione-sito.md](integrazione-sito.md) §9): oggi esce alla scadenza o al ritiro del sì.
4. **Fascicolo per la vendita e altri servizi per chi vende:** restano «forse»; se a fine studio mancano le risposte del collaboratore e il parere dell'avvocato, passano a dopo il pilota. Nessun collegamento fra fascicolo e annunci è deciso.

**Compatibilità.** Nessun cambiamento al formato proposto (versione 1 del contratto).

**Disponibilità effettiva.** Nessun endpoint, nessun codice, nessuna chiave, nessun indirizzo. Il controllo B aspetta ora i ticket 07, 08, 09 e 13.

**Prove.** Nessuna: non c'è nulla da provare.

**Azione richiesta al sito.**
- Leggere [integrazione-sito.md](integrazione-sito.md) §1 e §9 aggiornati.
- Non presentare servizi per chi vende oltre alla valutazione, né vantaggi o prezzi della tessera, finché non sono decisi.

---

## 6/11/2026: cosa entra nel percorso 1 di Connetto

**Decisione e fonte.** Decisioni dell'utente del 6/11/2026 ([PRODUCT.md](../PRODUCT.md) §12; ticket [Cosa, fra le proposte, può toccare il percorso 1](../.scratch/proposte-collaboratore-4-novembre/issues/05-cosa-tocca-percorso-1.md)).

**Cosa cambia per il sito.**
1. **Professionisti della rete.** L'elenco dei professionisti con il loro sì scritto e revocabile a comparire sul sito entra nella prima versione di Connetto (percorso 1). Il sito lo leggerà da Connetto, accanto alle valutazioni, con il contratto proposto in [integrazione-sito.md](integrazione-sito.md) §6 (percorso proposto `/api/sito/v1/professionisti`, permesso `professionisti:lettura`). Cambia la decisione del 3/11/2026 secondo cui il sito legge «solo» le valutazioni. Il sito **non tiene un proprio elenco** di professionisti con nomi: la rete si gestisce una volta sola, in Connetto.
2. **Testi accanto all'elenco.** Sia sul sito sia in Connetto vanno: cosa si dice su come sono scelti i professionisti, sull'ordine e sui rapporti economici (ticket 09), e una breve spiegazione «chi fa cosa» fra agenzia, notaio e tecnico (ticket 08). **I testi non sono ancora scritti** e passano dall'avvocato: il sito può prevedere il posto, ma non deve inventarli.
3. **Cosa comprende la rete.** All'inizio è la rete della compravendita. I servizi presentati sulla landing (progettare e rinnovare, traslochi, utenze e bollette, caldaia e idraulica) restano **solo presentazione**: se entrano nello stesso elenco si decide nel ticket 08.
4. **Tessera per chi vende.** Entra nel percorso 1 di Connetto, ma cosa dà, a chi e a quali condizioni non è deciso (ticket 06 e 07). Il sito non la presenta con vantaggi o prezzi finché non sono decisi.
5. **Fascicolo per la vendita e servizi per chi vende:** «forse», in attesa delle risposte del collaboratore di ƎE e del parere dell'avvocato. Nessun collegamento fra fascicolo e annunci del sito è deciso.
6. **Nome Connetto.** È un nome di lavoro in attesa del parere sul marchio, e la landing del sito lo promuove già: la pubblicazione di quella sezione dipende dal parere, che diventa urgente.
7. **Invariati:** valutazioni pubblicate (campi e regole del 3/11/2026), annunci gestiti solo sul sito, contatti dal sito gestiti sul sito senza seconda coda in Connetto, aste escluse.

**Compatibilità.** Nessun cambiamento al formato proposto (versione 1 del contratto); cambia solo lo stato dell'elenco dei professionisti, da «da confermare» a «deciso». I campi del professionista restano candidati, da approvare con il parere privacy.

**Disponibilità effettiva.** Nessun endpoint, nessun codice, nessuna chiave, nessun indirizzo. Connetto è ancora in studio: il controllo B aspetta i ticket 06, 07, 08, 09 e 13, e la costruzione viene dopo.

**Prove.** Nessuna: non c'è nulla da provare.

**Azione richiesta al sito.**
- Leggere [integrazione-sito.md](integrazione-sito.md) §1, §3, §4, §6 e §9 aggiornati.
- Nell'attesa, presentare i servizi e il contatto dell'agenzia **senza nomi di professionisti** e senza un elenco proprio; niente nomi d'esempio presentati come reali.
- Non pubblicare testi su scelta, ordine, rapporti economici o «chi fa cosa» finché Connetto non li consegna.
- Non pubblicare la sezione che promuove Connetto prima del parere sul marchio.
- Annotare nel proprio registro (`AGGIORNAMENTI-CONNETTO.md`) che questa consegna è stata letta.
