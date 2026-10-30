# Ricerca: la variazione ISTAT dalla fonte ufficiale

Type: research
Status: open
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

**ISTAT semi-automatico** ([PRODUCT.md](../../../PRODUCT.md) §10.4, D18): all'anniversario la piattaforma prende la variazione ufficiale dell'ISTAT, calcola e propone il nuovo canone con fonte e data; l'operatore controlla, oppure inserisce il dato a mano se manca. Le regole (indice FOI senza tabacchi, 100% o 75%, cedolare, uscita a metà del mese dopo) sono già in [docs/ricerca/adempimenti-locazione.md](../../../docs/ricerca/adempimenti-locazione.md) e non si ripetono. Manca **come la piattaforma legge il dato**. Serve a [Servizi esterni: email, SMS e ISTAT](11-servizi-esterni.md).

1. **Dove l'ISTAT pubblica il dato** che serve alle locazioni (variazione percentuale dell'indice FOI senza tabacchi rispetto allo stesso mese dell'anno prima, e su due anni): pagine, comunicati, banca dati, interfaccia per programmi (SDMX o altro). Indirizzo, formato, esempio di richiesta e di risposta, se il servizio è stabile e documentato.
2. **Condizioni:** licenza dei dati, attribuzione, limiti d'uso.
3. **Tempi e correzioni:** quando esce il dato del mese, se viene rivisto, cambi di base (per esempio dal 2025), come si riconosce il dato definitivo.
4. **Cosa fa l'operatore se il servizio non risponde:** dove trova lo stesso numero a mano, con il link.

Limiti: solo fonti ufficiali dell'ISTAT, con la data di lettura e il link. Si può fare una richiesta di lettura pubblica all'interfaccia, se è aperta e non chiede registrazione, dichiarandolo; nessun account. Non si consultano repository o decisioni di tentativi precedenti. Nessuna scelta. Risultati in `docs/ricerca/istat-variazione.md`.
