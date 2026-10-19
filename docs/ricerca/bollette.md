# Bollette: come farle arrivare nella piattaforma e come pagarle

Ricerca del 18–19 ottobre 2026, svolta dall'agente in sequenza su fonti primarie, con la data di lettura per ogni fonte. Serve alla domanda Q17 del riallineamento: si può automatizzare l'arrivo delle bollette dell'inquilino, per esempio collegando l'email?

Vincoli già decisi ([PRODUCT.md](../../PRODUCT.md) §12): la piattaforma non detiene né trasferisce denaro e per pagare porta a un [canale di pagamento](../../GLOSSARY.md) esistente; le bollette stanno nello spazio privato dell'inquilino; i dati di pagamento li conferma la persona.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- Non esiste un canale che porti in automatico **tutte** le bollette di un inquilino nella piattaforma. Esistono però strade che ne automatizzano gran parte senza dare alla piattaforma l'accesso all'intera casella email.
- La strada più promettente per il pilota è un **indirizzo email personale della piattaforma** per ogni inquilino, a cui inoltrare le bollette a mano o con un filtro automatico (**Inferenza**).
- **Collegare la casella** Gmail con accesso in lettura è possibile, ma richiede la verifica di Google per gli ambiti «restricted» e una valutazione di sicurezza se i dati passano dai server della piattaforma (**Fonte**). È pesante per un pilota e dà accesso a molto più del necessario.
- Le **fatture elettroniche** delle bollette esistono nel Sistema di Interscambio e il consumatore le vede nella sua area riservata dell'Agenzia delle Entrate. Il servizio **non è delegabile a terzi** (**Fonte**): la piattaforma non può prenderle al posto dell'inquilino.
- Il dato più affidabile da leggere in automatico è il **codice QR pagoPA**, che ha un formato pubblico (**Fonte**). Il resto (importo, scadenza, codice CBILL) richiede una lettura del documento da misurare con una prova.

## 1. Le strade per far arrivare la bolletta

| Strada | Come funziona | Cosa dicono le fonti | Valutazione |
| --- | --- | --- | --- |
| **A. Foto o PDF** | L'inquilino fotografa o carica il file | — | Sempre possibile; resta la riserva per tutte le altre strade |
| **B. Inoltro a un indirizzo personale** | Ogni inquilino ha un indirizzo della piattaforma; inoltra la bolletta a mano o imposta un filtro che lo fa da solo | In Gmail l'inoltro automatico richiede di confermare l'indirizzo di destinazione con un link inviato a quell'indirizzo; per inoltrare solo alcuni messaggi serve un filtro con l'azione «Inoltra»; la guida descrive la procedura dal computer (**Fonte**: Google). Ricevere email per un dominio e passarle a un'elaborazione automatica è un servizio offerto dai fornitori di posta per sviluppatori, per esempio Amazon SES (**Fonte**: AWS) | **Consigliata per il pilota** (**Inferenza**): la piattaforma riceve solo ciò che l'inquilino sceglie di mandare, come vuole il principio di minimizzazione del GDPR (art. 5). Il filtro va impostato una volta, meglio con un aiuto passo passo o al banco |
| **C. Indirizzo della piattaforma come recapito presso il fornitore** | L'inquilino indica l'indirizzo della piattaforma nell'area clienti del fornitore come email per la bolletta | — | Possibile, ma l'inquilino smette di ricevere la bolletta nella sua casella, salvo che la piattaforma gliela inoltri; alcuni fornitori usano la stessa email per l'accesso. **Da verificare** fornitore per fornitore |
| **D. Collegare la casella** | Accesso autorizzato (OAuth) alla casella Gmail o Outlook e lettura delle email dei fornitori | Gli ambiti Gmail per leggere i messaggi (`gmail.readonly`, `gmail.metadata`, `gmail.modify`) sono «restricted»: richiedono la verifica dell'app e, se i dati sono conservati o trasmessi da server, una valutazione di sicurezza (**Fonte**: Google). Outlook: **Da verificare** | **Sconsigliata per il pilota** (**Inferenza**): costi e tempi di verifica, e la piattaforma vedrebbe tutta la posta dell'inquilino per prenderne poche email |
| **E. Fatture elettroniche (SdI)** | Le bollette sono fatture elettroniche trasmesse al Sistema di Interscambio | L'operatore IVA deve emettere fattura elettronica anche verso i consumatori e dare loro una copia (d.lgs. 127/2015, art. 1). Il consumatore le consulta nell'area riservata dell'Agenzia delle Entrate con SPID, CIE o CNS, fino al 31 dicembre del secondo anno successivo alla ricezione; il servizio **non è delegabile** a un intermediario né a un soggetto terzo (**Fonte**: Agenzia delle Entrate). La registrazione di un indirizzo telematico di ricezione è indicata per condomìni ed enti non commerciali; per i consumatori persone fisiche **Da verificare** | **Non praticabile come automatismo** (**Inferenza**). L'inquilino può comunque scaricare da sé il file XML e caricarlo: contiene dati strutturati di pagamento (sezione 2) |

## 2. Leggere i dati della bolletta

| Dato | Cosa dicono le fonti | Affidabilità attesa |
| --- | --- | --- |
| **Codice QR pagoPA** | Stringa pubblica: `PAGOPA\|002\|<codice avviso, 18 caratteri>\|<codice fiscale ente, 11>\|<importo in centesimi>` (**Fonte**: pagoPA) | Alta: si decodifica, non si interpreta (**Inferenza**). Vale solo per gli avvisi pagoPA, cioè enti pubblici e chi aderisce |
| **Codice CBILL** | CBILL serve a pagare bollettini e avvisi pagoPA online (**Fonte**: Consorzio CBI). Secondo una banca servono il codice dell'azienda (5 cifre) e l'identificativo della bolletta (fino a 36 caratteri), a volte anche l'importo (**Fonte secondaria**: Intesa Sanpaolo) | Da misurare: è testo stampato, non un codice a lettura certa |
| **Importo e scadenza (luce e gas)** | Dal 1° luglio 2025 la bolletta di luce e gas ha una prima pagina con la stessa struttura per tutti i venditori, con l'importo da pagare e le informazioni essenziali su cliente, contratto, fatturazione e pagamenti; i venditori avevano 12 mesi per adeguarsi (**Fonte**: ARERA, delibera 315/2024/R/COM) | Buona per luce e gas grazie alla struttura comune (**Inferenza**); acqua, internet e assicurazioni non sono coperte da questa regola |
| **Dati nel file XML della fattura** | Lo schema FatturaPA prevede per ogni pagamento modalità, scadenza, importo, IBAN e codice di pagamento; fra le modalità ci sono bonifico (MP05), addebito diretto SEPA (MP19) e pagoPA (MP23) (**Fonte**: schema FatturaPA 1.2.2) | Alta, ma solo se l'inquilino scarica e carica il file da sé; i campi di pagamento sono in parte facoltativi |
| **Lettura automatica del documento** | Esistono servizi a consumo per estrarre dati da fatture e ricevute; per esempio Amazon Textract AnalyzeExpense costa 0,01 $ a pagina nel primo scaglione, nella regione US West (**Fonte**: AWS). Esempio di ordine di grandezza, non una scelta di fornitore | Da misurare con una prova; regione dei dati e trattamento GDPR da valutare in architettura |

## 3. Pagare senza che la piattaforma tocchi il denaro

- **Codice pronto e canale giusto**: la piattaforma mostra importo, scadenza e codice (QR pagoPA, CBILL, IBAN), e l'inquilino paga nella sua banca o in un altro canale. Eventuali commissioni del canale vanno mostrate prima della conferma (§7.6); per il CBILL dipendono dalla banca (**Da verificare**).
- **Domiciliazione (addebito diretto SEPA)**: è il pagamento più automatico che esista già (**Inferenza**). Un addebito eseguito però non è definitivo: in certi casi se ne può chiedere il rimborso entro 8 settimane, e un addebito non autorizzato si contesta entro 13 mesi; si può anche revocare fino al giorno prima del prelievo (**Fonte**: Banca d'Italia). Per la piattaforma una bolletta domiciliata è quindi un pagamento disposto, non un incasso verificato (§7.4).
- **Contanti in un punto convenzionato** (desiderio di PRODUCT.md §5.3): non coperto da questa ricerca; resta nell'area F di [STUDIO.md](../STUDIO.md).

## 4. Proposta per il pilota (inferenza dell'agente)

1. Ogni inquilino riceve un **indirizzo personale per le bollette**. All'attivazione si imposta l'inoltro automatico dei soli fornitori scelti (strada B), con un aiuto passo passo o al banco. L'inoltro a mano e la foto (strada A) restano sempre disponibili.
2. All'arrivo la piattaforma archivia la bolletta, **legge il QR pagoPA quando c'è** e propone importo e scadenza. L'inquilino conferma con un tocco e la bolletta entra nel suo scadenzario con il canale per pagarla.
3. Le bollette **domiciliate** si segnano una volta: la piattaforma le archivia e ricorda la data dell'addebito, senza chiedere di pagarle.
4. Restano fuori dal pilota il collegamento della casella (D) e le fatture elettroniche (E).

**Prova usa e getta prima di promettere l'automatismo**, su bollette inventate o reali solo con l'autorizzazione dell'utente e il consenso di chi le fornisce:
- quante email dei fornitori allegano il PDF e quante mandano solo un link all'area clienti;
- quante bollette hanno il QR pagoPA;
- quanto spesso la lettura automatica di importo e scadenza è corretta.

## 5. Domande aperte

- Fornitori dell'area di ƎE: quali allegano la bolletta all'email e quali no (**Da verificare** con la prova).
- Indirizzo telematico SdI per consumatori persone fisiche: confermare o escludere sulle fonti ufficiali.
- Collegamento della casella Outlook: requisiti Microsoft non verificati.
- Trattamento dei dati: chi è titolare delle bollette nello spazio dell'inquilino, per quanto si conservano, cosa succede quando finisce la locazione (STUDIO, aree E e I). **Serve un parere professionale** prima di un uso reale.

## Fonti

Lette il 18 e 19 ottobre 2026.
- Agenzia delle Entrate, FAQ «Fatture elettroniche verso i consumatori finali…»: https://www.agenziaentrate.gov.it/portale/schede/comunicazioni/fatture-e-corrispettivi/faq-fe/risposte-alle-domande-piu-frequenti-categoria/fatture-elettroniche-verso-consumatori-finali-non-piva
- Agenzia delle Entrate, FAQ «Consultazione fatture»: https://www.agenziaentrate.gov.it/portale/schede/comunicazioni/fatture-e-corrispettivi/faq-fe/risposte-alle-domande-piu-frequenti-categoria/consultazione-fatture
- FatturaPA, schema XML versione 1.2.2: https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.2/Schema_del_file_xml_FatturaPA_v1.2.2.xsd
- Google, ambiti delle API Gmail: https://developers.google.com/workspace/gmail/api/auth/scopes
- Google, guida all'inoltro automatico in Gmail: https://support.google.com/mail/answer/10957?hl=it
- Amazon SES, ricezione delle email: https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html
- pagoPA, specifiche del codice QR dell'avviso: https://docs.pagopa.it/avviso-pagamento/allegato-2/specifiche-tecniche/dati-per-il-pagamento/codice-qr
- Consorzio CBI, servizio CBILL: https://www.cbi-org.eu/Servizi/CBILL
- Intesa Sanpaolo, «Che cos'è il servizio CBILL?» (fonte secondaria): https://www.intesasanpaolo.com/content/internetbanking/it/faq/common/faqHome/cbill.privati.html
- ARERA, comunicato del 26/07/2024 sulla nuova bolletta (delibera 315/2024/R/COM): https://www.arera.it/comunicati-stampa/dettaglio/energia-tra-un-anno-la-nuova-bolletta-piu-semplice-e-chiara
- Banca d'Italia, Economia per tutti, «Addebito diretto»: https://economiapertutti.bancaditalia.it/aree-tematiche/pagamenti/addebito-diretto/index.html
- Amazon Textract, prezzi: https://aws.amazon.com/textract/pricing/
- Regolamento (UE) 2016/679 (GDPR): https://eur-lex.europa.eu/eli/reg/2016/679/oj
