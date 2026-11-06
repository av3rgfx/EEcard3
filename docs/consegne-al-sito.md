# Consegne da Connetto al sito di ƎE

Registro delle decisioni di Connetto che toccano il sito di ƎE (repository separato `av3rgfx/Conneto-Sito`), da leggere a inizio sessione da chi lavora sul sito, con Claude Code o Codex. Lo scrivono solo le sessioni di Connetto, una voce per consegna, la più recente in cima; il sito non si modifica da qui. Il contratto tecnico è in [integrazione-sito.md](integrazione-sito.md), che prevale su questo registro; le consegne arrivate *dal* sito sono annotate nel ticket [Integrazione con il sito di ƎE](../.scratch/proposte-collaboratore-4-novembre/issues/13-integrazione-sito.md).

Ogni voce segue la [§10 del contratto](integrazione-sito.md#10-aggiornamenti-fra-i-due-progetti): decisione e fonte, cosa cambia per il sito, compatibilità, disponibilità effettiva, prove, azione richiesta al sito. Mai segreti, chiavi, indirizzi inventati o dati reali.

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
