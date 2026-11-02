# Ricerca: firma digitale offerta da ƎE

Type: research
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Chiesta dall'utente il 2/11/2026 nel ticket [Firma dell'inquilino sul nuovo canone ISTAT](20-firma-inquilino-istat.md). Nel pilota l'inquilino firma il documento dell'aggiornamento ISTAT con la sua firma digitale, a penna su un foglio caricato o in agenzia. Se ƎE volesse **offrire la firma digitale a tutti** tramite un fornitore, cosa servirebbe?

1. **Livelli** di firma elettronica e valore (eIDAS, CAD artt. 20 e 21), compresa la firma col dito sullo schermo.
2. **Fornitori** qualificati con firma a distanza per chi non ha una firma (identificazione, codice via SMS, certificato usa e getta): prezzo per firma o canone per circa 100–200 firme l'anno, dove stanno i dati, contratto sui dati, interfaccia per la piattaforma.
3. **Firmare con SPID o con la CIE:** se si può e con quale livello.
4. **Verificare** una firma digitale caricata senza inviare il documento a servizi esterni.

Solo lettura di fonti ufficiali, con la data di lettura; nessun account, nessun documento inviato. Risultati in `docs/ricerca/firma-digitale.md`.

## Risposta (Answer)

Chiusa il 2/11/2026, fatta da un agente in background: [docs/ricerca/firma-digitale.md](../../../docs/ricerca/firma-digitale.md). Solo la firma qualificata vale come quella a penna in tutta l'UE; in Italia anche l'avanzata dà la forma scritta. La firma col dito è semplice, salvo gli obblighi del DPCM 2013. Offrire una firma avanzata propria obbliga ƎE a identificazione, 20 anni di conservazione e un'assicurazione da 500.000 €. La firma qualificata «usa e getta» esiste (InfoCert, Namirial con Uanataca), ma senza listino pubblico; l'unico pubblico, Youtrust, parte da 1.248 € l'anno. La firma con SPID richiede l'adesione di ƎE a SPID; la firma con la CIE (app CieSign) è avanzata e gratuita per l'inquilino. La verifica sul server si può fare con DSS della Commissione europea (Java, LGPL-2.1). Parere dell'agente: niente fornitore nel pilota; CieSign come possibile quarto modo dopo il parere legale.

## Commenti (Comments)
