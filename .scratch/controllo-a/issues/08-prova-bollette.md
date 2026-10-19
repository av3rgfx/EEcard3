# Prova sulle bollette

Type: task
Status: open
Blocked by: —
Mappa: [Superare il controllo A con le evidenze](../map.md)

## Domanda

Prima di promettere l'automatismo delle bollette dell'inquilino ([PRODUCT.md](../../../PRODUCT.md) §12; [ricerca sulle bollette](../../../docs/ricerca/bollette.md) §4): quante bollette arrivano per email con il PDF allegato e quante con un link o solo nell'area clienti, quante hanno il codice QR pagoPA, e quanto è affidabile la lettura automatica di importo e scadenza?

Schema autorizzato dall'utente il 19/10/2026 (PRODUCT.md §12):

1. **Conteggio dei volontari.** L'agente prepara un elenco da compilare per ogni bolletta dell'ultimo anno: servizio, fornitore, come arriva, QR sì o no. Lo compilano fondatori e personale di ƎE che si offrono volontari, senza condividere documenti.
2. **Domanda agli inquilini** nei colloqui (guida in [Materiali per i colloqui](07-materiali-colloqui.md)), senza mostrare le bollette.
3. **Misura della lettura.** Alcune bollette dei volontari, con i dati personali oscurati, si caricano nella sessione di lavoro; una prova usa e getta (skill `prototype`) le legge senza servizi esterni e confronta il risultato con i valori veri.

Cosa vuol dire «oscurati», dalla [Ricerca: titolarità e privacy dei dati](03-titolarita-privacy-dati.md): oltre a nome e indirizzo anche codice cliente, codici POD o PDR, IBAN e il QR, che contiene il codice dell'avviso. Proposta da confermare con l'utente all'inizio del ticket: si oscura anche il QR e la sua lettura si misura su avvisi inventati (il formato è pubblico); i volontari danno un consenso informato scritto, sapendo che il caricamento affida le bollette al fornitore della sessione di lavoro.

Le bollette dei clienti sono escluse. Nel repository entrano solo i conteggi e il metodo, in una sezione nuova di `docs/ricerca/bollette.md`; i file delle bollette non si salvano. Il ticket si chiude con le parti 1 e 3; la parte 2 si somma quando arrivano le sintesi dei colloqui.
