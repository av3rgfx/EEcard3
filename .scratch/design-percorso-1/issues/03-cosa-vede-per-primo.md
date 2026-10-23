# Cosa vede per primo ciascuno e come parla il servizio

Type: grilling
Status: claimed
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Prima di disegnare le direzioni servono pochi punti fermi, uguali per tutte, così che le direzioni differiscano per impostazione e aspetto e non per contenuto. L'utente decide, una domanda alla volta:

1. **Cosa vede per primo ciascuno** quando entra, per proprietario, inquilino e operatore di ƎE, nelle situazioni tipiche: canone pagato e consegnato, canone non ancora pagato, contabile da confermare, consegna in ritardo, contestazione aperta, nulla da fare (la schermata non deve restare vuota, [DESIGN.md](../../../DESIGN.md)). Cosa sta un tocco più in là. Punto di partenza: la promessa del percorso 1 (PRODUCT.md §12, «Controllo A») e la tabella «Cosa vede ciascuno» (§10.7).
2. **Più case**: come si presenta un proprietario con più case, e un inquilino che ne ha avuta più d'una.
3. **Come parla il servizio**: «tu» o «Lei»; lo stesso per tutti o diverso per l'operatore; chi parla (ƎE, il servizio, nessuno).
4. **Punti di partenza dell'identità**: il nome **Connetto** e il simbolo **C–Legame** sono decisi dall'utente il 23/10/2026 ([DESIGN.md](../../../DESIGN.md), «Identità»; [assets/marchio/](../../../assets/marchio/README.md)). Resta da dire se la preferenza per il tema scuro si riconferma, si lascia aperta alle direzioni o si scarta. Sul tema: Apple chiede di seguire l'impostazione chiaro o scuro del sistema e sconsiglia un selettore nell'app; «solo scuro» o un selettore si scelgono sapendo che si scostano dalle HIG ([ricerca](01-ricerca-hig-web.md), §16 punto 4).

Skill `grilling` e `domain-modeling`; `ux-strategy` per le priorità, `ux-writing` per il tono. Le scelte di contenuto che toccano la specifica si confrontano con PRODUCT.md §10; quelle visive vanno in DESIGN.md con data e motivo. Nessuna schermata in questo ticket.

## Commenti (Comments)

### Sessione del 23/10/2026: decisioni dell'utente, una alla volta

**1. Cosa vede per primo il proprietario: opzione A.** In alto il mese in corso: sotto il nome della casa, due righe distinte, una per lo stato del canone (pagato, non ancora pagato, contabile da confermare, contestato) e una per lo stato della consegna (da consegnare, inviata, consegnata, in ritardo). Se c'è qualcosa che deve fare lui (confermare «ricevuto», approvare un nuovo canone), sta sopra, da solo, con un solo pulsante. Un tocco più in là: mesi passati e ricevute, documenti, scadenze, «Chiama». Situazioni: pagato e consegnato mostra le date e la prossima scadenza della locazione; non ancora pagato lo dice, con «Chiama» verso ƎE e senza allarme; contabile da confermare va in cima con «Ricevuto»; consegna in ritardo sta nella sua riga, con «Chiama»; una contestazione resta al suo posto, segnata «contestata»; con bonifico al proprietario la riga della consegna non c'è. *Scartate:* B, un elenco di novità (lo stato va ricostruito leggendo; «troppe informazioni poco chiare»); C, la scheda della casa con il mese fra le sezioni (il canone si perde fra cose che cambiano di rado). *Motivo:* risponde subito alla promessa del percorso 1 e tiene distinti i due passaggi del denaro (§7).

**2. Cosa vede per primo l'inquilino: opzione A.** In alto il prossimo pagamento: mese, scadenza, quanto (canone e oneri in righe separate) e dove pagare (banco con orari, o bonifico con le coordinate). Dopo il pagamento la stessa zona dice «Ottobre pagato» con la ricevuta a un tocco e mostra già la scadenza seguente. Un tocco più in là: tutte le ricevute, il contratto, le scadenze che lo riguardano, «Chiama». Con bonifico al proprietario: in cima «Carica la contabile», poi «in attesa che il proprietario confermi» (una prova, non il pagamento). Contestazione: la voce resta al suo posto, segnata. Nuovo canone approvato: una riga dice da quando cambia. **Scadenza passata senza pagamento:** la schermata dice il fatto con calma («Canone di ottobre: scadeva il 5 ottobre»), con dove pagare e «Chiama», senza colore d'allarme né rimprovero, perché la specifica esclude i solleciti all'inquilino e il contatto lo decide l'operatore (§10.5, §10.6). *Scartate:* B, ricevute e contratto per primi (chi entra per pagare deve cercare); C, la schermata del proprietario ridotta (domande diverse; la consegna non lo riguarda, §10.7). *Motivo:* la promessa all'inquilino in ordine d'uso.
