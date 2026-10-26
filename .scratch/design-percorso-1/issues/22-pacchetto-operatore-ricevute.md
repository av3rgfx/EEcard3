# Pagina del pacchetto: telaio, operatore e ricevute

Type: prototype
Status: open
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

Come si lavora (HITL): skill `prototype` (ramo UI); pagina privata usa e getta, sorgente fuori dal repository, solo dati inventati. I sorgenti delle prove si leggono con lo strumento Artifact (link in [STATUS.md](../../../STATUS.md)). Verifica in Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, ricaricando per ogni schermata; contrasti rimisurati con i valori di «Componenti e token». Un problema trovato si porta all'utente come conflitto, una scelta alla volta.
