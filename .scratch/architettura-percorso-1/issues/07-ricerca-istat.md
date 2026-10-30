# Ricerca: la variazione ISTAT dalla fonte ufficiale

Type: research
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

**ISTAT semi-automatico** ([PRODUCT.md](../../../PRODUCT.md) §10.4, D18): all'anniversario la piattaforma prende la variazione ufficiale dell'ISTAT, calcola e propone il nuovo canone con fonte e data; l'operatore controlla, oppure inserisce il dato a mano se manca. Le regole (indice FOI senza tabacchi, 100% o 75%, cedolare, uscita a metà del mese dopo) sono già in [docs/ricerca/adempimenti-locazione.md](../../../docs/ricerca/adempimenti-locazione.md) e non si ripetono. Manca **come la piattaforma legge il dato**. Serve a [Servizi esterni: email, SMS e ISTAT](11-servizi-esterni.md).

1. **Dove l'ISTAT pubblica il dato** che serve alle locazioni (variazione percentuale dell'indice FOI senza tabacchi rispetto allo stesso mese dell'anno prima, e su due anni): pagine, comunicati, banca dati, interfaccia per programmi (SDMX o altro). Indirizzo, formato, esempio di richiesta e di risposta, se il servizio è stabile e documentato.
2. **Condizioni:** licenza dei dati, attribuzione, limiti d'uso.
3. **Tempi e correzioni:** quando esce il dato del mese, se viene rivisto, cambi di base (per esempio dal 2025), come si riconosce il dato definitivo.
4. **Cosa fa l'operatore se il servizio non risponde:** dove trova lo stesso numero a mano, con il link.

Limiti: solo fonti ufficiali dell'ISTAT, con la data di lettura e il link. Si può fare una richiesta di lettura pubblica all'interfaccia, se è aperta e non chiede registrazione, dichiarandolo; nessun account. Non si consultano repository o decisioni di tentativi precedenti. Nessuna scelta. Risultati in `docs/ricerca/istat-variazione.md`.

## Risposta (Answer)

Ricerca chiusa il 30/10/2026, svolta da un agente in background con la skill `research`: [docs/ricerca/istat-variazione.md](../../../docs/ricerca/istat-variazione.md).

- Il numero sta nella pagina ISTAT «Indice dei prezzi per le rivalutazioni monetarie», con le variazioni su un anno e su due anni (settembre 2026: indice 104,3, +4,0%, +5,5%).
- L'interfaccia SDMX di IstatData è pubblica, gratuita e senza registrazione, con un limite di 5 richieste al minuto (oltre: blocco da 1 a 2 giorni). Una richiesta di prova ha restituito gli stessi valori di settembre 2026. La serie ha la base nel nome e cambierà alla prossima base.
- La variazione su due anni non è nell'interfaccia: si calcola dagli indici con il coefficiente 1,214 (prova: +5,5%, come la pagina).
- Licenza CC BY 4.0 dei contenuti ISTAT, salvo diversa indicazione; da verificare che copra anche IstatData.
- Il FOI esce solo come dato definitivo, verso metà del mese dopo (ottobre 2026: 17/11). Secondo una scheda ISTAT del 2015 non viene rivisto, salvo errori: da verificare. Dal 2026 la base è il 2025.
- Se il servizio non risponde: pagina delle rivalutazioni, comunicato mensile (Prospetto 1), Rivaluta, IstatData.
