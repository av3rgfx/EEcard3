# Condividere un file verso Connetto da un'altra app

Type: grilling
Status: resolved
Blocked by:
Mappa: [Architettura del percorso 1](../map.md)

## Domanda (Question)

Proposta del collaboratore di ƎE, riferita dall'utente il 1/11/2026. Chi ha poca pratica con il telefono, spesso le persone più anziane, fatica a caricare un documento ricevuto su WhatsApp o scaricato da un sito: salvarlo in File, aprire Connetto, ritrovare la cartella. L'idea: dal documento si tocca «Condividi» e fra le app compare **Connetto**; il file entra subito e **dopo** si sceglie dove metterlo. È una buona idea da tenere, da migliorare o da togliere? C'è una soluzione migliore?

Cosa si sa già ([docs/ricerca/importo-documento.md](../../../docs/ricerca/importo-documento.md), §4):
- **Android:** un sito può comparire in «Condividi» solo se è installato sulla schermata Home, con Chrome (Web Share Target, sperimentale). Il service worker può tenere il file nel telefono finché non è scelto dove va.
- **iPhone, sul web:** Safari non lo permette; il file si sceglie solo dalla pagina.
- **iPhone, app (dopo, §11):** con un'estensione di condivisione Connetto compare in «Condividi».

Da analizzare nella sessione, una domanda alla volta:
1. Chi lo userebbe davvero nel pilota, e su quali telefoni: quanti clienti di ƎE hanno un iPhone, quanti Android?
2. Le alternative per chi è poco pratico, su iPhone senza app. Per esempio:
   - una guida passo passo nella pagina;
   - inoltrare il documento a un indirizzo email della propria casa (SES può ricevere a Milano, oggi non attivato: ARCHITECTURE.md, «Servizi esterni»);
   - farlo al banco con l'operatore;
   - «Recenti» nel selettore dei file.

   WhatsApp verso un numero dell'agenzia passerebbe da Meta, contro la scelta sui dati: da valutare solo con un parere.
3. «Prima entra, poi scegli dove metterlo»: dove resta il file finché non ha un posto (nel telefono o in una cassetta personale sulla piattaforma), chi lo vede, quanto resta. Come si lega al controllo dell'importo, che oggi si propone prima dell'invio.
4. Pilota o dopo: sul web (Android installato), con l'app iPhone, o entrambe; che cosa cambia nel design (DESIGN.md) e nell'accessibilità.

Limiti: nessun account, servizio o messaggio reale; eventuali fatti nuovi con fonti ufficiali in `docs/ricerca/`. Esito: tenere, cambiare o togliere, registrato in PRODUCT.md §12. Serve prima del ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md).

## Commenti (Comments)

**1/11/2026, sessione di analisi (skill `grilling`, `domain-modeling`, `ponytail`).** Fatti raccolti prima delle domande, con le fonti, in [docs/ricerca/importo-documento.md](../../../docs/ricerca/importo-documento.md), §4, «Aggiunta del 1/11/2026»: nel percorso 1 carica la contabile solo l'inquilino che paga con bonifico al proprietario (chi paga al banco ha la ricevuta di carta), e il proprietario aggiunge i suoi documenti (PRODUCT.md §10); in Italia circa 62 % delle visite web da telefono da Android e 38 % da iPhone, visite e non clienti di ƎE; su iPhone da WhatsApp si salva in File e si ritrova da «Scegli file», da verificare su un iPhone vero.

**Domanda 1, «Condividi» nel pilota?** Scelta dell'utente, sull'opzione consigliata: **non nel pilota**. L'idea si tiene e si sposta all'app iPhone, con l'estensione di condivisione. Su Android si valuta dopo il pilota, solo se molti clienti installano il sito. Scartati: sì nel pilota (solo Android installato, un'installazione in più da insegnare, due gesti diversi da spiegare al banco); togliere l'idea (con l'app è il gesto più semplice).

**Domanda 2, aiuto nel pilota per chi è poco pratico.** Proposta dell'agente: guida corta «Il documento è su WhatsApp?» sotto «Carica la contabile», frase che ricorda che il proprietario può confermare anche senza contabile, l'operatore che fotografa e carica la contabile al banco. Alternative: solo la guida, nessun aiuto. **Scelta dell'utente: nessun aiuto.** «La piattaforma verrà usata principalmente da PC e chi usa il PC non dovrebbe avere questi problemi; per il telefono il problema verrà risolto con l'applicazione.» Scartati anche l'inoltro via email a un indirizzo della casa (nuovo servizio di ricezione, indirizzo da ricordare, file da abbinare al mese) e WhatsApp verso l'agenzia (passa da Meta, contro la scelta sui dati).

*Punto segnalato dall'agente:* «soprattutto dal computer» non era scritto nei documenti; pagina del pacchetto e scanner trattano computer e telefono alla pari, e lo scanner nella pagina serve a chi fotografa con il telefono. Se la previsione regge, lo scanner pesa meno nel ticket [Documenti, foto e ricevute in PDF](12-documenti-foto-ricevute.md).

**Domanda 3, verificare la previsione?** Scelta dell'utente, sull'opzione consigliata: si scrive come **previsione da verificare nel pilota**, con due misure senza nomi: ogni mese quanti documenti arrivano dal computer e quanti dal telefono (lo dice il browser, nessuno strumento in più); le volte in cui qualcuno non riesce a caricare e porta il foglio in agenzia, annotate dall'operatore. Se a metà pilota il telefono supera circa la metà dei caricamenti, si riprende la guida o si anticipa l'app. Scartati: nessun controllo; solo l'annotazione dell'operatore (vede chi chiede aiuto, non chi rinuncia).

*Rami chiusi senza domanda:* «prima entra, poi scegli dove metterlo» e il controllo dell'importo nell'estensione di condivisione riguardano l'app iPhone, fuori dall'ambito di questa mappa; la ricerca indica già la strada (il file resta nel telefono e si controlla prima dell'invio, §4). Nel design e nell'accessibilità del pilota non cambia nulla.

## Risposta (Answer)

**Tenere, ma non nel pilota.** Connetto in «Condividi» arriva con l'**app iPhone**, con l'estensione di condivisione; su Android, con il sito installato, si valuta dopo il pilota solo se molti clienti installano il sito. Nel pilota **nessun aiuto in più**: «Carica la contabile» resta com'è, nel mese giusto. Previsione dell'utente da verificare: i clienti useranno soprattutto il **computer**; due misure senza nomi nel pilota (caricamenti dal computer e dal telefono; documenti portati in agenzia perché non caricati). Registrato in [PRODUCT.md](../../../PRODUCT.md) §12, riga del 1/11/2026, e §13, «Chi resta fuori?».
