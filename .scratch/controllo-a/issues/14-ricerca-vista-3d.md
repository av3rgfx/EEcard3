# Ricerca: dalla planimetria catastale alla vista 3D indicativa

Type: research
Status: resolved
Blocked by: —
Mappa: [Dalla specifica del percorso 1 al design](../map.md)

## Domanda (Question)

Il 23/10/2026 l'utente ha portato nella prima versione, come prova a condizione, la [vista 3D indicativa](../../../GLOSSARY.md) della casa, ricavata dalla planimetria del fascicolo ([Controllo A e passaggio al design](13-controllo-a.md), sotto «Commenti»). Prima di provarla servono i fatti:
- **La planimetria catastale:** come arriva (PDF, immagine o vettoriale; dalla consultazione online o dall'ufficio), cosa contiene di solito (muri, porte, finestre, altezze, scala, orientamento), quante sono disegnate a mano e scansionate e quante prodotte con la procedura DOCFA, se una copia nuova dal catasto può essere migliore di quella che ha ƎE.
- **Metodi:** come si riconoscono muri, aperture e stanze da una pianta in immagine; risultati pubblicati e su quali piante (per esempio CubiCasa5k); quanto reggono le piante italiane; cosa si può fare senza servizi esterni.
- **Servizi e librerie:** chi offre oggi la conversione da pianta 2D a 3D, con costi, licenze e condizioni sui dati; se la planimetria esce da ƎE serve un contratto sui dati (PRODUCT.md §12, 20/10/2026).
- **Qualità:** quali segnali permettono di dire «questa pianta non si legge abbastanza» prima di mostrare un 3D sbagliato.
- **Avvertenze:** cosa scrivere perché la vista non sembri una misura (§9); pareri da chiedere.

Fonti primarie con la data di lettura, in `docs/ricerca/vista-3d.md` (skill `research`). Nessun servizio, account o caricamento di planimetrie vere senza autorizzazione dell'utente. Non blocca il design del percorso 1; serve prima dell'architettura (METODO.md, passo 7) e al prototipo [Prova: vista 3D da una planimetria](15-prova-vista-3d.md).

## Risposta (Answer)

**Ricerca in [docs/ricerca/vista-3d.md](../../../docs/ricerca/vista-3d.md)** (24/10/2026, agente in background con la skill `research`, circa 45 fonti; controllo a campione della sessione principale sulle fonti originali, tutto confermato). In sintesi:
- **Planimetria catastale:** disegno a fini fiscali, non un rilievo; di norma 1:200, con altezza dei locali, nord, piano, destinazioni e spessore dei muri, senza arredi né quote. Gratuita in PDF per gli intestatari e, dal 12/7/2023, per l'agente immobiliare iscritto al REA delegato online (30 giorni). Quante siano disegnate a mano non lo dice nessuna fonte ufficiale letta.
- **Metodi:** i modelli pubblicati reggono sulle piante su cui sono allenati (finlandesi, giapponesi, russe); nessuno studio sulle planimetrie catastali italiane; licenze da chiarire (CubiCasa5K non commerciale).
- **Servizi:** nessuno pensato per le catastali; escludono i disegni a mano; condizioni sui dati lontane dalla decisione del 20/10/2026.
- **Qualità:** più segnali insieme (risoluzione rispetto alla scala, scala leggibile, stanze chiuse, superficie confrontata con la visura) e una conferma umana; la confidenza dei modelli da sola non basta.
- **Avvertenza:** la conformità della planimetria la dichiarano le persone o un tecnico; nessuna tolleranza ufficiale trovata.

**Decisioni dell'utente** (24/10/2026, una alla volta; registrate in [PRODUCT.md](../../../PRODUCT.md) §12, «Vista 3D indicativa: come si ricava»):
1. *Come si legge la pianta:* consigliato il ricalco ora e l'automatico poi. L'utente ha scelto **tutte e due subito, sceglie l'operatore**; l'automatico mostra un'anteprima da modificare se qualcosa non torna e da confermare se torna tutto.
2. *Dove gira l'automatico:* **dentro la piattaforma** (consigliato). Scartati il servizio esterno con contratto e il rinvio della scelta.
3. *Planimetria vera nella prova:* **una dei fondatori, dopo le piante inventate**, con consenso scritto (consigliato). Scartati: solo inventate; anche di clienti.
4. *Chi conferma:* **solo l'operatore** (consigliato). Scartati: anche il proprietario, subito o più avanti.
5. *Altezza:* **letta sulla planimetria, valore fisso dichiarato se manca** (consigliato).
6. *Avvertenza:* consigliata sempre visibile con il testo rivisto dal legale. L'utente ha scelto **sempre visibile, senza legale**. Annotato: il testo può essere aggiunto, se si vuole, al parere legale già previsto prima del pilota.
7. *Quale planimetria:* **quella del fascicolo, copia nuova solo se non si legge** (consigliato).

**Pareri ancora utili** (ricerca, §8): privacy per la planimetria come dato personale e per quella dei fondatori; legale su diritto d'autore del tecnico e licenze dei modelli; geometra su cosa contengono le planimetrie di primo impianto. Non bloccano la prova con piante inventate, salvo le licenze se la prova usa pesi già allenati (vedi la prova).

## Commenti (Comments)
