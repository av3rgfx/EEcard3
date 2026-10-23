# Schermate del proprietario

Type: prototype
Status: claimed
Blocked by: 04
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come sono, nella direzione scelta, le schermate e le situazioni del proprietario ([PRODUCT.md](../../../PRODUCT.md) §10.3–10.7)? Si parte dalla pagina della casa e dalla consegna in ritardo già viste nel ticket [Direzione del percorso 1](04-prototipo-direzione.md) e si aggiungono:
- canone e consegna in tutti i loro stati, compreso il bonifico al proprietario con la contabile da confermare;
- la conferma «Ricevuto»;
- il nuovo canone da approvare, con la fonte ISTAT;
- documenti e scadenze, con «Chiedi a ƎE di occuparsene» e il prezzo (il valore non è deciso);
- contestare e «Chiama»;
- più case, con «Le mie case» e i due stati del mese per casa; più proprietari («Ricevuto» solo alla persona dell'incarico);
- mesi passati e ricevute.

Prototipo usa e getta (skill `prototype`, ramo UI) nella direzione «Terracotta» ([DESIGN.md](../../../DESIGN.md), «Direzione del percorso 1»), su telefono e desktop, in chiaro e in scuro con il chiaro per primo. Solo dati inventati, importi come «9.876,54 €», parole del [glossario](../../../GLOSSARY.md); si mostra all'utente come pagina privata e non entra nel repository. Le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata. Quello che si decide va in DESIGN.md come regole, con data e motivo; un problema con la specifica (PRODUCT.md §10) o con i punti fermi si porta all'utente come conflitto. Testi definitivi, rifinitura, dati limite e accessibilità vengono dopo, nei loro ticket.

## Commenti (Comments)

**23/10/2026, domande prima di costruire** (skill `grilling`, una alla volta):
- *Mesi passati:* consigliata la «striscia dell'anno», dodici caselle con i due segni di canone e consegna, più l'elenco a parole sotto. L'utente chiede di **provare sia la striscia sia il calendario a griglia** e decidere guardandoli. Scartato il «solo elenco».
- *Più case:* consigliate le «schede con la casa», con l'illustrazione grande e i due stati. L'utente chiede di **provare schede e righe compatte** dietro un selettore.
- *Nuovo canone da approvare:* scelta ragionevole dell'agente, non chiesta: «Approva» come azione principale e «Non lo chiedo» come scelta secondaria, perché la specifica (§10.4) permette al proprietario di non chiederlo. Si cambia se l'utente lo chiede guardando il prototipo.

**23/10/2026, primo giro mostrato** (pagina privata, sorgente nella cartella temporanea della sessione). Controllato nel Chromium disponibile a 360, 390, 768, 900, 1024, 1180 e 1366 px, con le varianti, in chiaro e in scuro: nessun pulsante fuori dal suo riquadro, nessuno scorrimento orizzontale, nessun errore. Dieci schermate in «Terracotta»:
1. le mie case (varianti «schede» e «righe»);
2. una casa con il mese in corso;
3. contabile da confermare;
4. nuovo canone da approvare;
5. mesi passati (varianti «striscia dell'anno» e «calendario a griglia»);
6. dettaglio di un mese;
7. documenti e scadenze, con «Mostra all'inquilino» e «Chiedi a ƎE di occuparsene»;
8. contestare;
9. casa con più proprietari;
10. consegna in ritardo.
