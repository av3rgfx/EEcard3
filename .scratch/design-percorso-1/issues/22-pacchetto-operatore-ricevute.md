# Pagina del pacchetto: telaio, operatore e ricevute

Type: prototype
Status: claimed
Blocked by: 21
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

La prima metà della pagina «Connetto, percorso 1» regge come riferimento per il controllo B? Si costruisce:
- il telaio della pagina: la storia del mese di una casa (circa 14 tappe), l'indice «Per ruolo», l'interruttore «Situazioni», telefono e computer, chiaro e scuro, e accanto a ogni schermata le regole che applica;
- le 11 schermate dell'operatore, com'è approvato, con le regole venute dopo (testi, dati limite, interazioni, foto);
- le due ricevute stampate (canone e consegna), foglio e PDF.

Regole: [DESIGN.md](../../../DESIGN.md), «Pacchetto per il controllo B (percorso 1)» e «Componenti e token» (valori esatti), poi le sezioni di ogni schermata. Gli spazi fra gli elementi si fissano qui, con una scala corta, e si registrano in «Componenti e token».

Proposta di partenza per le tappe (dell'agente, da confermare con l'utente nella pagina):
1. attivazione in ufficio; 2. in agenzia con il proprietario (incarico, adesione); 3. primo accesso e tessera; 4. la casa a inizio mese; 5. l'inquilino paga in agenzia; 6. la consegna e il «Ricevuto»; 7. il bonifico al proprietario con la contabile; 8. la scadenza passata e più mesi aperti; 9. la consegna in ritardo; 10. una contestazione e la ricevuta corretta; 11. il nuovo canone ISTAT; 12. documenti, scadenze e foto; 13. la disdetta dell'adesione; 14. la fine della locazione e la casa che esce dalla gestione. Fuori dalla storia, dall'indice: coda vuota, «Oggi», profilo, «Chiama», più case e più ruoli, più proprietari, stati comuni.

Revisione dell'esperienza (decisione dell'utente del 26/10/2026, [DESIGN.md](../../../DESIGN.md), «Pacchetto per il controllo B»): prima di ridisegnare ogni tappa, una scheda breve per compito (passi, cosa deve sapere la persona, dove può sbagliare, cosa togliere o anticipare, proposte), con le skill `ux-research` (valutazione euristica) e `ux-strategy`. Le proposte all'utente come «prima e dopo», una alla volta; le schede restano qui sotto «Commenti». Se il ticket supera una sessione resta `claimed` e la sessione seguente riprende dalla tappa successiva.

Come si lavora (HITL): skill `prototype` (ramo UI); pagina privata usa e getta, sorgente fuori dal repository, solo dati inventati. I sorgenti delle prove si leggono con lo strumento Artifact (link in [STATUS.md](../../../STATUS.md)). Verifica in Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, ricaricando per ogni schermata; contrasti rimisurati con i valori di «Componenti e token». Un problema trovato si porta all'utente come conflitto, una scelta alla volta.

## Commenti (Comments)

**27/10/2026, sessione 1 (in corso).** Pagina del pacchetto pubblicata come pagina privata, usa e getta: https://claude.ai/artifact/9KwvBBmgGc859wN67hWbAF. Il sorgente sta nella cartella temporanea della sessione; solo dati inventati.

- **Telaio** mostrato all'utente: la storia di Via dei Tigli 14, interno 3 (proprietaria Marta Ferri, inquilino Luca Benassi, operatrice Giulia Neri) in 14 tappe. Ogni tappa ha data, cosa succede, chi è coinvolto e «Il denaro», cioè chi passa soldi a chi e in che stato. Sotto, le schermate di chi è coinvolto, ognuna con le regole che applica; quelle che valgono per tutte sono scritte una volta per tappa. In alto «Per ruolo» (indice), «Situazioni», «Telefono / Computer», «Chiaro / Scuro». «Fuori dalla storia» raccoglie coda vuota, «Oggi», profilo, «Chiama», più case e ruoli, stati comuni. Le schermate della seconda parte sono segnaposto.
- **Scelta 1 (tappe):** le 14 tappe proposte (consigliata). La tappa 7, bonifico alla proprietaria con la contabile, si svolge nell'altra casa di Marta, Via del Pratello 12 (inquilina Chiara Monti), perché in Via dei Tigli 14 Luca paga in agenzia. *Scartate:* 13 tappe con il bonifico fuori dalla storia; 13 tappe con scadenza passata e consegna in ritardo insieme.

**Scheda di revisione, tappa 1: attivazione in ufficio** (skill `ux-research`, valutazione euristica di Nielsen; `ux-strategy`, il compito dell'operatore). Parere esperto, non evidenza con persone.
- *Compito:* creare la scheda della casa con persone, rapporti e dati della locazione, caricare i documenti che ƎE ha, segnare «non serve» con il motivo, preparare l'incontro in agenzia (PRODUCT.md §10.2). *Esito che conta:* il tempo di ogni attivazione dentro le 1–1,5 ore al giorno (D1) e nessun dato mancante che faccia uscire sbagliate ricevute, consegne e ISTAT.
- *Cosa deve sapere:* cosa blocca l'attivazione (solo incarico e adesione della proprietaria, §10.2.3) e cosa si completa dopo.
- *Dove può sbagliare:* (3, grave) la barra «6 di 10» in cima fa credere che servano tutti e dieci i documenti; (3) «Non serve» compare anche sull'incarico, senza il quale la casa non si attiva (D3); (2) i dati della locazione mostrati sono sette, senza stipula, estremi della registrazione e dati dell'incarico, da cui dipendono ricevute e consegne; (2) «Carica» salva senza anteprima, a differenza della contabile; (regola già decisa, non proposta) mancano «Foto della facciata» e «Disegno della facciata» nella scheda dell'operatore.
- *Proposte e scelte dell'utente*, «prima e dopo» con confronti affiancati in immagini:
  1. **In cima le 2 cose che bloccano** (consigliata): «Per attivarla mancano 2 cose», incarico e adesione di Marta, con «Apri «Al banco»»; il conteggio passa all'elenco, che diventa «Documenti della casa · 6 di 10 pronti»; incarico e fogli delle adesioni dicono «Serve per attivarla», senza «Non serve». Scelta: **Dopo**. L'utente ha notato una formattazione strana del riquadro con la casa sul computer (disegno piccolo e centrato, testo a capo a ogni riga nella colonna larga 600 px).
  2. **Riquadro con la casa sul computer:** A, in tutta la larghezza sopra le due colonne, disegno a sinistra alto quanto il testo (consigliata, come il riquadro in cima dei clienti); B, nella colonna con il disegno sopra e il testo sotto. Scelta: **A**, per la scheda della casa e «Al banco».
  3. **Tutti i dati della locazione** (consigliata): quattro gruppi (contratto, canone del mese, fisco e registro, deposito) con i mancanti «da inserire» e la riga «Dall'incarico». Scelta: **Dopo**.
  4. **Anteprima prima di salvare un documento** (consigliata): prima pagina con il nome del documento e la casa, «Salva il documento» e «Scegline un altro», come la contabile. Scelta: **sì**.
- **Spazi fra gli elementi** (stessa schermata con tre scale, al computer e al telefono): A 4, 8, 12, 16, 24, 32, 48 (consigliata, vicina alle prove approvate); B 4, 8, 16, 24, 32, 48, 64, più aria, che sul telefono manda a capo pulsanti e scelte; C 4, 6, 10, 14, 20, 28, 40, più fitta. Scelta: **A**, registrata in DESIGN.md, «Componenti e token».

**Scheda di revisione, tappa 2: in agenzia con la proprietaria** («Al banco» per Marta Ferri).
- *Compito:* in una visita, con la persona che aspetta: incarico con i suoi dati, adesione su un foglio separato, informativa, verifica dell'email e account, tessera fisica (§10.2.2). *Esito che conta:* la casa attiva in una visita, con un foglio firmato uguale ai dati che usa Connetto.
- *Cosa deve sapere:* cosa fare adesso e in che ordine; quando la casa diventa attiva.
- *Dove può sbagliare:* (3) i dati dell'incarico (termine di consegna, parziali, compenso, dove paga, a chi si consegna, numero visibile) non hanno un posto prima della firma: il foglio firmato e i dati possono divergere, e un termine sbagliato fa scattare ritardi falsi; (2) l'elenco «Da chiudere con» non ha ordine, mentre all'attivazione l'incarico viene prima; (2) il momento in cui la casa diventa attiva non si vede (regola già decisa: conferma al suo posto); (1) la tessera esiste solo dopo l'adesione.
- *Proposte e scelte dell'utente:*
  1. **I dati dell'incarico prima della firma** (consigliata): sei campi nella riga, poi «Stampa l'incarico». Scelta: **Dopo**.
  2. **Le cose da chiudere in ordine** (consigliata): numerate, con «Adesso:» in cima, solo all'attivazione. Scelta: **Dopo**.
  - Applicata come regola già decisa, nella situazione «Dopo le due firme»: conferma «Via dei Tigli 14 è attiva» e tessera arancione.
