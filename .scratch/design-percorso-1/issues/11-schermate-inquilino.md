# Schermate dell'inquilino

Type: prototype
Status: claimed
Blocked by: 04
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come sono, nella direzione scelta, le schermate e le situazioni dell'inquilino ([PRODUCT.md](../../../PRODUCT.md) §10.3–10.8)? Si parte dal prossimo pagamento già visto nel ticket [Direzione del percorso 1](04-prototipo-direzione.md) e si aggiungono:
- dove e quanto pagare, dopo il pagamento («pagato», con la ricevuta e la scadenza seguente), la scadenza passata detta con calma;
- la contabile da caricare con il bonifico al proprietario;
- ricevute e contratto, il nuovo canone in arrivo;
- contestare e «Chiama»;
- le locazioni passate in sola lettura con la data di chiusura dell'accesso e «Scarica tutto»;
- una persona che è anche proprietario («Le mie case» diviso per ruolo).

Lo spazio delle bollette resta fuori: c'è solo il posto del passaggio all'attivazione.

Prototipo usa e getta (skill `prototype`, ramo UI) nella direzione «Terracotta» ([DESIGN.md](../../../DESIGN.md), «Direzione del percorso 1»), su telefono e desktop, in chiaro e in scuro con il chiaro per primo. Solo dati inventati, importi come «9.876,54 €», parole del [glossario](../../../GLOSSARY.md); si mostra all'utente come pagina privata e non entra nel repository. Le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata. Quello che si decide va in DESIGN.md come regole, con data e motivo; un problema con la specifica (PRODUCT.md §10) o con i punti fermi si porta all'utente come conflitto. Testi definitivi, rifinitura, dati limite e accessibilità vengono dopo, nei loro ticket.

## Commenti (Comments)

**23/10/2026, domande prima di costruire** (skill `grilling`, una alla volta). Già decisi nei punti fermi e nel ticket [Cosa vede per primo ciascuno](03-cosa-vede-per-primo.md), quindi non richiesti: il prossimo pagamento per primo, con le coordinate del bonifico; la scadenza passata detta con calma; «Carica la contabile» in cima; il nuovo canone in una riga; le locazioni passate; «Le mie case» diviso per ruolo.
- *Ricevute:* consigliata la stessa fila di mesi a pillola del proprietario, con la scelta dell'anno e la ricevuta del mese in cima. L'utente chiede di **provare sia i mesi a pillola sia un elenco semplice** di ricevute per anno e decidere guardandoli.
- *Caricare la contabile:* **anteprima, poi «Invia al proprietario»** (consigliato), senza altre conferme. Finché il proprietario non conferma la contabile si può sostituire, e la prima resta conservata. *Motivo:* è facile prendere la foto sbagliata dalla galleria, e l'invio fa partire un messaggio al proprietario. Scartato «invio appena scelto il file».

**23/10/2026, primo giro mostrato** (pagina privata https://claude.ai/artifact/PB8wRY5NZT2jgYndnJLn2v, sorgente nella cartella temporanea della sessione, costruito sul prototipo del proprietario). Controllato nel Chromium disponibile a 360, 390, 768, 900, 1024, 1180 e 1366 px, con tutte le varianti, in chiaro e in scuro: 266 combinazioni, nessun pulsante o importo fuori dal suo riquadro, nessuno scorrimento orizzontale, nessun errore. Un primo controllo aveva provato per sbaglio sempre la stessa schermata; corretto e ripetuto, ha trovato un importo che a 360 px usciva di 3 px dal confronto del nuovo canone, poi sistemato. Undici schermate in «Terracotta»:
1. la casa con il prossimo pagamento, con le varianti «al banco», «bonifico a ƎE» (coordinate e causale con «Copia»), «bonifico al proprietario» («Carica la contabile» in cima) e «contabile inviata»;
2. dopo il pagamento, con la ricevuta e la scadenza seguente;
3. la scadenza passata, detta con calma: nessun colore d'allarme, dove pagare e «Chiama ƎE»;
4. caricare la contabile in tre passaggi: scegli, anteprima, inviata;
5. le ricevute, con le varianti «mesi a pillola» ed «elenco semplice». A giugno 2026 c'è una ricevuta sostituita dopo una contestazione;
6. contratto, documenti e scadenze, con un documento mostrato dalla proprietaria;
7. il nuovo canone in arrivo, già approvato, con il calcolo e «Contesta»;
8. contestare un canone o il nuovo canone (la consegna non riguarda l'inquilino, §10.7);
9. «Chiama», in orario e fuori orario. Fuori orario c'è solo l'invito a scrivere; la proprietaria si può chiamare solo per il bonifico a lei e solo se ha scelto di mostrare il numero (§10.6);
10. le locazioni passate in sola lettura, con la data di chiusura dell'accesso e «Scarica tutto», con e senza una casa attuale;
11. una persona inquilino e proprietario: «Le mie case» diviso per ruolo, con le cose da fare dei due ruoli in cima.

Scelte ragionevoli dell'agente, da cambiare se l'utente lo chiede: dopo l'invio della contabile la casa resta «contabile da confermare» con «Sostituisci la contabile»; nelle scorciatoie della casa c'è un posto tratteggiato per lo spazio delle bollette, senza contenuto; «Chiama» si apre come un foglio dal basso sul telefono e come una finestra al centro sul desktop.
