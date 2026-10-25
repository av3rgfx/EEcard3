# Tessera contactless, wallet del telefono e totem in agenzia

Ricerca del 25 ottobre 2026, svolta da un agente (skill research) su fonti pubbliche, con la data di lettura per ogni fonte. Risponde al ticket [18 «Ricerca: tessera contactless, wallet e totem in agenzia»](../../.scratch/controllo-a/issues/18-ricerca-tessera-contactless-totem.md). Parte dalla ricerca [tessere.md](tessere.md) (fornitori in PVC, prezzi, codice, blocco e sostituzione) e non la ripete.

**Decisioni di riferimento.** La tessera non è una carta di pagamento e averla in mano non basta per vedere i dati ([PRODUCT.md](../../PRODUCT.md) §5.6, confermato). Nella prima versione è solo il segno dell'adesione; wallet, contactless, terminale da banco e totem restano fuori (§12, 18/10/2026, «Tessera (T6)»). La piattaforma registra i fatti del denaro e non lo tiene né lo sposta (§12, 23/10/2026, «Controllo A»). L'utente ha scelto per la tessera fisica una plastica con lamina metallica arancione e ha chiesto che abbia il contactless fin da subito, in vista di un totem aperto 24 ore su 24 (ticket 12, decisioni del 25/10/2026). Questa ricerca non cambia le decisioni: dice cosa servirebbe e dove una scelta futura entrerebbe in conflitto.

**Metodo.** Solo lettura di pagine e documenti pubblici. Nessun ordine, preventivo, campione, account, iscrizione, modulo inviato o contatto con fornitori. Le pagine riservate agli sviluppatori registrati (per esempio la richiesta del certificato NFC di Apple) non sono state aperte. Prezzi letti il 25/10/2026: possono cambiare.

**Controllo a campione** della sessione principale (25/10/2026), sulle fonti originali: NXP sconsiglia MIFARE Classic per gli usi di sicurezza (confermato); Apple chiede il certificato NFC e terminali che «must already accept Apple Pay and be certified for VAS» (confermato; la pagina non usa la parola «entitlement», che compare nella documentazione del pass); foglio informativo LIS Pay di marzo 2026, solo carte, commissione 2,70 € (confermato). **Da verificare:** la pagina Carteplastiche della DESFire EV1 2K mostra 310,00 € tasse escluse per la confezione da 100, ma la tabella degli sconti indica 160,00 € a 100 pezzi, e alla rilettura non mostra i prezzi a 500 e 1.000: i valori della sezione 1.4 per questa tessera vanno confermati con un preventivo.

Legenda: **Fonte** = ciò che dice la fonte; **Fonte secondaria** = fonte non del proprietario del dato, usata dove la primaria non era raggiungibile; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **Il contactless per una tessera di adesione è NFC a 13,56 MHz, standard ISO/IEC 14443-A.** Si legge a pochi centimetri, «typical range of up to 2cm» per l'NFC Forum (**Fonte**). Un chip a contatto (ISO/IEC 7816) non serve alla tessera ƎE: serve alle carte di pagamento con PIN, e quelle restano le carte della persona (**Inferenza**, sezione 4.4).
- **Contro la copia serve un chip con autenticazione crittografica.** NXP sconsiglia MIFARE Classic «for security-relevant applications» e indica le famiglie DESFire e Plus (**Fonte**). MIFARE DESFire EV3 (AES a 128 bit, Common Criteria EAL5+) e NTAG 424 DNA (AES a 128 bit, messaggio diverso a ogni lettura, EAL4) sono i due candidati (**Fonte**). Un chip che offre solo un numero di serie si copia (**Inferenza**).
- **Costi pubblicati, IVA esclusa.** Tessere in PVC stampate a colori con chip, a lotti da 100 (GCARD/Carteplastiche, Genzano di Roma): MIFARE Ultralight C 1,54 €/pz, MIFARE Classic 1K originale 1,39 €/pz, **MIFARE DESFire EV1 2K 3,10 €/pz** (2,10 € a 500, 1,85 € a 1.000), chip a contatto SLE5542 1,70 €/pz; produzione in 15 giorni lavorativi (**Fonte**). Tessere bianche senza stampa (RFID.it, Merate): **NTAG 424 DNA 1,59 €/pz** (minimo 10), **DESFire EV3 4K 1,99 €/pz** (minimo 20) (**Fonte**). DESFire EV3 stampata, lamina a caldo e lamina insieme al chip: **prezzo non pubblicato**, serve un preventivo (**Fonte**: GCARD offre «Hot Stamping / Effetto Specchiato», «Oro / Argento» e contactless, ma solo «Preventivo»).
- **La lamina metallica può disturbare l'antenna.** Il metallo vicino a un'antenna NFC genera correnti che assorbono energia e la «stonano» (NXP, AN13219, **Fonte**). Una lamina sottile e limitata a una parte della tessera può funzionare, ma va provata su un campione con i lettori e i telefoni veri (**Inferenza**; **Da verificare**).
- **Apple Wallet con NFC richiede un permesso speciale di Apple.** Il pass NFC richiede «a special entitlement issued by Apple»; Apple chiede pass, terminali e cassa certificati, e terminali che «must already accept Apple Pay and be certified for VAS» (**Fonte**). Chi può ottenerlo non è scritto in modo pubblico (**Da verificare**). Senza NFC, un pass di Apple o di Google si mostra con un **codice QR**, che un totem legge con una fotocamera (**Fonte**; **Inferenza**).
- **Google Wallet Smart Tap** è un protocollo NFC proprietario di Google; serve un terminale compatibile, e il campo che lo attiva è «available only to Smart Tap enabled partners» (**Fonte**).
- **Lo stesso lettore può leggere tessera e telefono.** Esempio con prezzo pubblicato: ACS WalletMate II (ACR1552U-MW), certificato Apple VAS e Google Smart Tap, legge anche ISO 14443 A/B e MIFARE, **99,00 € IVA esclusa** (RFID.it, **Fonte**). Il lettore certificato non basta: il permesso Apple o Google resta a carico di chi emette il pass (**Inferenza**).
- **Pagare bollette al totem richiede un prestatore di servizi di pagamento autorizzato.** È il modello delle tabaccherie: LIS Pay S.p.A. (istituto di moneta elettronica del gruppo Poste) incassa bollettini e avvisi pagoPA nei «Terminali self-service» dei tabaccai convenzionati, solo con carte, commissione 2,70 €, massimo 999,99 € per bollettino e 1.500 € per pagoPA (**Fonte**). ƎE da sola non può incassare per conto di terzi senza autorizzazione o senza essere convenzionata o agente di un prestatore autorizzato (TUB e PSD2, **Fonte**; serve un **parere**).
- **I terminali di pagamento non presidiati sono certificati PCI PTS POI e EMV.** Esempio: Ingenico Self/5000, PCI PTS 5.1, contactless EMV L1, lettore ibrido con serranda, IP44 (**Fonte**). Prezzi non pubblicati. I terminali di pagamento immessi sul mercato dopo il 28/6/2025 rientrano nell'Atto europeo sull'accessibilità (**Fonte**).
- **Un totem completo non ha prezzi pubblicati** fra le fonti lette; nelle gare pubbliche le casse automatiche si prendono a noleggio con assistenza (**Fonte**: capitolato Intercent-ER 2014). Costo **Da verificare**.
- **Cosa conviene scegliere oggi** (**Inferenza**, sezione 6): tessera solo contactless con un chip originale NXP ad autenticazione AES (DESFire EV3 o NTAG 424 DNA), un identificativo casuale e nessun dato personale nel chip, lamina su una zona concordata con il fornitore e provata su campione, codice stampato come riserva. Niente chip a contatto. Nel pilota il chip resta spento.

## 1. Tecnologie della tessera

### 1.1 NFC e RFID a 13,56 MHz

| Voce | Cosa dice la fonte | Fonte |
| --- | --- | --- |
| Frequenza e distanza | NFC usa «a base frequency of 13.56 MHz», con «a typical range of up to 2cm» | NFC Forum, NFC Technology |
| Standard di tessere e lettori | ISO/IEC 14443 tipo A e B, ISO/IEC 15693 | NFC Forum |
| Modalità | il telefono può comportarsi da tessera (card emulation), da lettore (reader/writer) o scambiare dati con un altro telefono | NFC Forum |
| Tipi di tag | l'NFC Forum ha definito cinque tipi di tag | NFC Forum |
| Testo delle norme ISO/IEC 14443 e 7816 | non letto: la pagina ISO risponde con errore 403 | **Da verificare** |

**Inferenza.**
- «RFID» è il nome generale; «NFC» è la parte a 13,56 MHz usata anche dai telefoni. Una tessera ISO 14443-A si legge sia con un lettore da banco sia con quasi tutti i telefoni.
- Le tessere a 125 kHz (vendute anche da Carteplastiche) non si leggono con il telefono: non servono per un futuro con il wallet.

### 1.2 Chip comuni e quanto resistono alla copia

| Chip (NXP) | Cosa dice il produttore | Fonte | Copia (**Inferenza**) |
| --- | --- | --- | --- |
| MIFARE Classic 1K / 4K | NXP: «For security-relevant applications, customers should refer to our MIFARE® DESFire® and MIFARE Plus® product families» | pagina MIFARE Classic | La sicurezza di Classic è nota come violata; si copia con strumenti diffusi. Da escludere |
| NTAG 213/215/216 | UID di 7 byte scritto in fabbrica, «ECC-based originality signature», «32-bit password protection»; NFC Forum Type 2 | pagina NTAG 21x | La firma prova che il chip è originale, ma è un dato fisso: chi lo legge può riprodurlo in un emulatore. Adatto a etichette, non a un'identificazione sicura |
| MIFARE Ultralight C | in vendita stampata (sezione 1.4); scheda NXP non letta | Carteplastiche | 3DES; **Da verificare** sulla scheda NXP |
| NTAG 424 DNA | «Standard AES-128 cryptography for authentication/secure messaging»; «SUN message authentication … within standard NDEF read operation»; «Common Criteria® EAL4»; 416 byte; ISO/IEC 14443-A, NFC Forum Type 4 | pagina NTAG 424 DNA | Ogni lettura produce un codice diverso, verificabile solo dal server con la chiave segreta: la copia del contenuto non basta |
| MIFARE DESFire EV3 | ISO/IEC 14443-A; comandi ISO/IEC 7816-4; 2, 4, 8 o 16 KB; «Hardware AES using 128-bit keys»; «Common Criteria certification: EAL5+»; SUN tramite Secure Dynamic Messaging, compatibile con NTAG DNA; «Transaction MAC signed with secret key per application»; usi tipici: accessi, serrature, trasporti, fedeltà, pagamenti a circuito chiuso | pagina MIFARE DESFire EV3 | Autenticazione reciproca con chiavi AES, più applicazioni separate sulla stessa tessera (per esempio adesione e, un giorno, porta dell'agenzia) |

**Inferenza.**
- **Si copia ciò che è fisso.** Il numero di serie (UID) e qualunque dato scritto in chiaro si possono leggere e riprodurre. Contro la copia serve un chip che risponda a una sfida con una chiave segreta (DESFire EV3) o che firmi ogni lettura (NTAG 424 DNA), e un sistema che controlli la risposta a ogni uso.
- **Il chip contiene solo un identificativo casuale**, distinto dal codice dell'adesione, come il codice stampato ([tessere.md](tessere.md), §4.2). Nessun nome né dato personale nel chip: una tessera persa o letta di nascosto non dice nulla (GDPR, minimizzazione; vedi §4.1 di tessere.md).
- **Lettura di nascosto.** Una tessera contactless risponde a qualunque lettore vicino. Con un identificativo casuale e l'autenticazione AES, chi la legge ottiene un dato inutile senza la chiave. È un'altra ragione per cui la tessera da sola non deve bastare (§5.6).
- **NTAG 424 DNA e telefoni.** Il messaggio SUN si legge come un normale tag NFC: avvicinando la tessera a un telefono si apre un indirizzo web con il codice firmato. Se si usa, quell'indirizzo deve solo confermare che la tessera è autentica e chiedere l'accesso, mai mostrare dati (§5.6).
- **Chiavi.** La sicurezza dipende da chi custodisce le chiavi AES. Le tessere escono dalla fabbrica con chiavi di trasporto note; ƎE (o chi la aiuta) deve poterle sostituire prima dell'uso reale. Chi genera e custodisce le chiavi è una scelta tecnica da registrare in ARCHITECTURE.md quando si arriverà allo stack.
- **«Compatibile» non vuol dire NXP.** Carteplastiche vende sia tessere «MIFARE originali» sia «MIFARE compatibili» (chip di altri produttori, per esempio FM11RF32) (**Fonte**). Va chiesto il chip originale e il codice esatto del modello.

### 1.3 Chip a contatto e tessere doppie

- **Chip a contatto.** Le tessere stampate con chip SLE5542 o FM4442 (memorie a contatto) costano 1,70 €/pz a 100 (Carteplastiche, **Fonte**). Sono memorie con un codice di protezione, non chip crittografici (**Da verificare** sulle schede del produttore, non lette).
- **«ISO/IEC 7816» nella scheda DESFire EV3** indica il formato dei comandi (7816-4), non i contatti dorati: DESFire EV3 è solo contactless (**Fonte**: scheda NXP; **Inferenza** sulla lettura).
- **Tessere doppie.**
  - *Doppia frequenza*: 125 kHz più MIFARE 1K, vendute a lotti da 1.000 (Carteplastiche, **Fonte**). Servono a convivere con vecchi impianti a 125 kHz; per ƎE non c'è un impianto da rispettare (**Inferenza**).
  - *Doppia interfaccia* (contatto e contactless sullo stesso chip): usate per carte bancarie e documenti. Nessun prezzo pubblicato trovato fra i fornitori letti (**Da verificare**).

### 1.4 Prezzi pubblicati

**Tessere stampate a colori fronte/retro con chip** (GCARD, venduta su Carteplastiche, Genzano di Roma). Prezzi «Tasse escluse», per confezione da 100 tessere con la stessa grafica; la pagina indica «spessore 0,80 mm» nella descrizione e «0,76» nel titolo (**Fonte**; spessore **Da verificare**). Produzione 15 giorni lavorativi.

| Chip | 100 pz | 500 pz | 1.000 pz | Note |
| --- | --- | --- | --- | --- |
| MIFARE Classic 1K originale | 1,39 €/pz | 0,79 €/pz | 0,67 €/pz | da escludere per la sicurezza (§1.2) |
| MIFARE Ultralight C | 1,54 €/pz | 0,93 €/pz | 0,80 €/pz | |
| **MIFARE DESFire EV1 2K** | **3,10 €/pz** | **2,10 €/pz** | **1,85 €/pz** | EV1, non EV3 |
| Chip a contatto SLE5542 | 1,70 €/pz | 0,75 €/pz | 0,64 €/pz | |
| «MIFARE compatibili» 1K | — | — | 0,38 €/pz | minimo 1.000; chip non NXP |

Calcolo: prezzo della confezione diviso 100 (per esempio 310,00 € / 100 = 3,10 €; a 5 confezioni 210,00 € / 100 = 2,10 €). Lamina, codice diverso su ogni tessera e codifica del chip non compaiono fra le opzioni di queste pagine (**Fonte**).

**Tessere bianche, senza stampa** (RFID.it, Sinfotech S.r.l., Merate LC). Prezzi IVA esclusa, con il prezzo IVA inclusa accanto (**Fonte**). La pagina dice che si possono personalizzare con stampa termica, a ritrasferimento o offset, senza prezzo.

| Chip | Prezzo | Minimo |
| --- | --- | --- |
| NTAG 213 | 1,29 € | 10 |
| NTAG 216 | 1,59 € | 10 |
| **NTAG 424 DNA** | **1,59 €** (1,94 € IVA incl.) | 10 |
| MIFARE Ultralight C | 1,29 € | 10 |
| **MIFARE DESFire EV3 4K** | **1,99 €** (2,43 € IVA incl.) | 20 |
| MIFARE DESFire EV3C 4K | 1,74 € | 2.000 |
| MIFARE DESFire Light | 0,75 € | 2.000 |

**Non pubblicati** (**Da verificare** con un preventivo, solo con l'autorizzazione dell'utente):
- DESFire EV3 o NTAG 424 DNA stampata con la grafica ƎE;
- lamina a caldo arancione su una tessera con chip;
- codifica del chip e codice diverso su ogni tessera.

**Inferenza sul costo.** Con i prezzi letti, il chip aggiunge circa 1–2,5 € a tessera rispetto al PVC stampato senza chip (0,52 €/pz a 250 da GCARD, [tessere.md](tessere.md) §2.1). Per circa 100–250 tessere la spesa in più è di qualche centinaio di euro, prima della lamina. Se resti «poco» (§12, T6) lo decide l'utente.

### 1.5 Lamina metallica e antenna

- **Fonte.** NXP (AN13219, rev. 1.6 del 25/6/2026): «If metal is placed close to the NFC antenna the alternating magnetic field generates some eddy currents in the metal. These eddy currents create a magnetic field in opposite direction, it absorbs power, and leads to detuning of the antenna». La nota riguarda le antenne dei lettori, ma il fenomeno è lo stesso per la tessera.
- **Fonte.** GCARD elenca fra le finiture «Hot Stamping / Effetto Specchiato» e «Oro / Argento» (trasferimento a caldo del colore metallizzato) e, fra le caratteristiche, «Contactless / RFID»; prezzi solo con preventivo.
- **Inferenza.**
  - Una lamina a caldo è uno strato metallizzato molto sottile; disturba meno di una lastra di metallo, ma su tutta la superficie e sopra le spire dell'antenna può ridurre la distanza di lettura o impedirla.
  - Una tessera in metallo vero (come il rame di Metaliccards, [tessere.md](tessere.md)) richiede costruzioni speciali per funzionare in contactless: non è stata studiata.
  - Il colore arancione si può anche stampare senza metallo intorno a una zona di lamina più piccola.
- **Da verificare con il fornitore e con un campione.** Che tipo di lamina, quanta superficie copre, dove passa l'antenna, se la tessera resta conforme a ISO/IEC 14443-A dopo la lamina, distanza di lettura misurata con il lettore da banco, con un iPhone e con un telefono Android.

## 2. Wallet del telefono

### 2.1 Apple Wallet

| Voce | Cosa dice Apple | Fonte |
| --- | --- | --- |
| Firma dei pass | i pass vanno firmati con un certificato Apple legato all'account sviluppatore | Apple, Get started with Wallet |
| Costo dell'account | «99 USD per membership year, or in local currency where available» | Apple Developer Program |
| Codici senza NFC | «Wallet supports 2D barcodes using QR, Aztec, and PDF417 formats» | Apple, Get started |
| NFC | protocollo «Apple Pay Value Added Services (VAS)»; per un pass contactless serve «request an NFC certificate» | Apple, loyalty passes |
| Tre componenti certificati | pass contactless gestiti dall'emittente o da un partner; terminali che «must already accept Apple Pay and be certified for VAS»; software di cassa con le modalità «VAS Only» e «Payment and VAS» | Apple, loyalty passes |
| Disponibilità | «Only available with select programs and NFC configurations»; l'invito automatico ad aggiungere il pass avviene solo ai terminali di pagamento contactless | Apple, loyalty passes |
| Permesso | «Adding NFC to a Pass requires a special entitlement issued by Apple» | Apple, Pass.NFC |
| Contenuto NFC | messaggio di massimo 64 byte, cifrato con una chiave pubblica ECDH P-256 del terminale | Apple, Pass.NFC |
| Autenticazione sul telefono | `requiresAuthentication` «requires the user to authenticate for each use of the NFC pass» (iOS 13.1 e successivi); `sharingProhibited` toglie il pulsante di condivisione ma «does not prevent sharing the pass in some other way» | Apple, Pass.NFC e Pass |
| Lettori | i produttori entrano nel «WPC Reader Program»; i lettori certificati si cercano su mfi.apple.com | Apple, loyalty passes |
| Costi del certificato NFC | non indicati | Apple, loyalty passes |
| Modulo di richiesta | richiede l'accesso con un account sviluppatore | non aperto |
| Chiavi e badge (porte, campus, hotel) | solo per organizzazioni partecipanti; i partner superano «a business and technical diligence process» | Apple, Wallet keys |

**Inferenza.**
- Un pass Apple **con QR** è alla portata di ƎE con il solo account sviluppatore; un totem con fotocamera lo legge. Non è contactless, ma il telefono lo mostra in un tocco.
- Un pass Apple **con NFC** dipende da un'approvazione di Apple. La pagina descrive un modello pensato per negozi con terminali che accettano Apple Pay; un'agenzia con un totem che non incassa con Apple Pay potrebbe non rientrarci (**Da verificare**). La decisione T6 (§12) citava già questo ostacolo.
- Con `requiresAuthentication` il telefono chiede Face ID, Touch ID o il codice a ogni uso: il telefono porta con sé un secondo fattore. La tessera di plastica no.

### 2.2 Google Wallet

| Voce | Cosa dice Google | Fonte |
| --- | --- | --- |
| Protocollo | «Smart tap is a Google proprietary near-field communication protocol»; «You must be certified in order to use this protocol» | Google, Smart Tap |
| Prerequisiti | classe e oggetto del pass, un rapporto con un fornitore di terminali Smart Tap, il pass configurato per il riscatto Smart Tap | Google, Smart Tap overview |
| Campo che lo attiva | `enableSmartTap`: «Available only to Smart Tap enabled partners. Contact support for additional guidance.» | Google, GenericClass |
| Chiavi | l'emittente carica una chiave e riceve un «Collector ID»; il terminale riceve chiave privata, versione e Collector ID | Google, Issuer e Merchant configuration |
| Cifratura | «The terminal and the Google Wallet app handle encryption of all the data transmitted over NFC» | Google, Communication flow |
| Sblocco | il pass parte con l'app aperta sul pass, dalla scheda Home o a schermo sbloccato | Google, Communication flow |
| Validità | se il Collector ID corrisponde, «the pass is transmitted regardless of its validity»: lo stato lo controlla chi riceve | Google, Communication flow |
| Pass generico | per tessere di adesione e simili; serve un account Issuer e la richiesta di «publishing access» | Google, Generic pass |
| Fornitori di terminali elencati | fra gli altri Verifone, Ingenico, Pax, Zebra, Sunmi, HID, Zucchetti | Google, Smart Tap overview |
| Costi | non indicati | — |

**Inferenza.** Come per Apple: il pass con QR è semplice; lo Smart Tap richiede l'abilitazione di Google, un terminale certificato e la gestione delle chiavi. La tessera digitale che ƎE mostra già (DESIGN.md) potrebbe diventare un pass con QR senza toccare la tessera fisica.

### 2.3 Lo stesso lettore per tessera e telefono

- **Fonte.** ACS WalletMate II (ACR1552U-MW), venduto da RFID.it a 99,00 € IVA esclusa (120,78 € IVA inclusa): certificato Apple VAS (ECP 1.0 ed ECP 2.0 per gli accessi) e Google Smart Tap; legge ISO 14443 A e B, ISO 15693, MIFARE, FeliCa; USB, PC/SC. Lo stesso negozio vende l'ACR1552U senza certificazioni wallet a 69,00 € IVA esclusa.
- **Fonte.** ELATEC dichiara la certificazione Apple VAS per la linea TWN4; una nota delle schede dice che l'accesso ad Apple VAS è limitato ai licenziatari Apple (**Fonte secondaria**: schede lette tramite motore di ricerca, non aperte).
- **Fonte.** Nidec Instruments (17/5/2023) presenta un lettore per macchine da gioco che unisce tessera inserita, NFC con «players cards and smartphones», Bluetooth e QR.
- **Inferenza.**
  - Sì, un solo lettore NFC può leggere la tessera DESFire o NTAG e il telefono, a costo contenuto.
  - Il lettore certificato non basta: per leggere un pass NFC servono il permesso di Apple o di Google e le chiavi di ƎE caricate nel lettore.
  - Per il QR serve una fotocamera, non un lettore NFC.

## 3. Il totem in agenzia

### 3.1 Riconoscere la persona: la tessera non deve bastare

- **Fonte.** PSD2, art. 4, n. 30: l'autenticazione forte usa «due o più elementi» fra conoscenza, possesso e inerenza, indipendenti fra loro. È la regola dei pagamenti (art. 97), non dell'accesso a uno spazio come quello di ƎE: qui serve come modello.
- **Fonte.** GDPR, art. 4, n. 14 e art. 9: i dati biometrici (volto, impronte) usati per identificare una persona sono dati particolari, vietati salvo eccezioni come il consenso esplicito.
- **Inferenza: possibili secondi fattori al totem.**

| Secondo fattore | Come funziona | Pro | Contro |
| --- | --- | --- | --- |
| PIN sul totem | tessera appoggiata, poi un PIN scelto dalla persona | semplice, nessun telefono | si può spiare; serve un modo per recuperarlo; blocco dopo tentativi |
| Codice monouso via SMS o email | tessera, poi un codice inviato | non c'è nulla da ricordare | serve il telefono o l'email; costo degli SMS; attesa |
| Conferma sul telefono | tessera, poi «Confermi?» sulla piattaforma già aperta sul telefono, oppure QR del totem letto dal telefono | sicuro; la tessera serve solo a farsi trovare | serve il telefono con accesso attivo |
| Telefono con pass nel wallet | pass NFC con autenticazione a ogni uso (Apple) | il telefono chiede Face ID: due fattori in un gesto | richiede il permesso NFC di Apple o Google (§2) |
| Biometria al totem | volto o impronta | rapido | dato particolare (GDPR art. 9), parere privacy obbligatorio; sconsigliato |

- **Inferenza.** Per un totem aperto di notte servono anche: blocco dopo pochi tentativi sbagliati, uscita automatica dopo un tempo breve, nessun dato sullo schermo finché la persona non è riconosciuta, registro degli accessi. Videosorveglianza, illuminazione e assicurazione del locale aperto vanno valutate a parte (parere privacy per le telecamere).

### 3.2 Pagamenti non presidiati: chi può farli

**Norme.**
- **Fonte.** I servizi di pagamento sono riservati a banche, IMEL e istituti di pagamento (TUB, art. 114-sexies; vedi [incasso-canoni.md](incasso-canoni.md)). Fra i servizi di pagamento ci sono l'esecuzione di pagamenti con carte e la rimessa di denaro (PSD2, allegato I).
- **Fonte.** PSD2, art. 4, n. 38: l'«agente» è chi «fornisce servizi di pagamento per conto di un istituto di pagamento»; l'istituto comunica all'autorità nome, controlli antiriciclaggio e servizi affidati (art. 19).
- **Fonte.** TUB, art. 128-quater: l'agente in attività finanziaria lavora «su mandato diretto» di istituti di pagamento, IMEL, banche o Poste; l'attività verso il pubblico è riservata agli iscritti nell'elenco dell'OAM (c. 2); chi presta solo servizi di pagamento sta in una sezione speciale (c. 6); la riserva non si applica ai «soggetti convenzionati» di IMEL o prestatori con sede in un altro Stato UE, che restano soggetti all'antiriciclaggio (c. 7).
- **Fonte.** Nuovo regolamento UE sui servizi di pagamento (PSR) e PSD3: [incasso-canoni.md](incasso-canoni.md) riporta il testo concordato del maggio 2026; la pubblicazione in Gazzetta ufficiale UE non è stata verificata il 25/10/2026 perché EUR-Lex non ha risposto agli strumenti dell'agente (**Da verificare**).

**Canali di pagamento.**

| Canale | Chi lo offre | Cosa dicono le fonti |
| --- | --- | --- |
| **pagoPA** | solo un PSP aderente | il PSP è il soggetto «abilitato dalle norme vigenti in materia, ad eseguire le richieste di pagamento»; aderisce firmando un accordo con PagoPA S.p.A. e paga un corrispettivo «legato al numero di transazioni» (**Fonte**: PagoPA, ruoli e adesione) |
| **CBILL** | banche e PSP del Consorzio CBI | «consente … il pagamento online di bollettini e avvisi di pagamento pagoPA» (**Fonte**: Consorzio CBI); vedi [bollette.md](bollette.md) |
| **Bollettini postali** | Poste e reti convenzionate | LIS Pay paga solo bollettini «premarcati» di beneficiari convenzionati (**Fonte**: foglio informativo LIS Pay) |
| **Carte della persona** | il prestatore che gestisce il terminale (acquirer) | servono un terminale certificato (§3.3) e un contratto con un acquirer |
| **Contanti** | rete fisica | vedi sotto |

**Come fanno i tabaccai.** Foglio informativo LIS Pay «dei servizi di pagamento bollettini in modalità self-service» (marzo 2026, **Fonte**):
- il prestatore è **LIS Pay S.p.A.**, del gruppo Poste, iscritta all'albo degli istituti di moneta elettronica, vigilata dalla Banca d'Italia;
- opera attraverso «Soggetti Convenzionati» (PUNTOLIS), cioè tabaccai «che dispongono della necessaria dotazione tecnologica per l'esecuzione dei pagamenti in autonomia»;
- il cliente presenta il bollettino o l'avviso al «Terminale self-service», controlla i dati a video e paga;
- pagamento ammesso «solo mediante l'utilizzo di PagoBancomat, Carte di credito, di debito e Carte Prepagate»: **niente contanti** nel self-service;
- commissione **2,70 €** per bollettino premarcato o avviso pagoPA; massimo **999,99 €** per bollettino e **1.500,00 €** per pagoPA, commissione compresa;
- LIS Pay incassa e trasferisce al beneficiario «senza l'apertura di conti di pagamento» a nome del cliente; la ricevuta stampata vale come quietanza;
- fra i rischi: «un guasto dei sistemi o del Terminale self-service potrebbe pregiudicare l'esito del pagamento».

**Contanti in un totem.**
- **Fonte.** Banca d'Italia: le banconote restituite da ATM e altri dispositivi usati dalla clientela devono essere controllate con apparecchiature il cui funzionamento è «verificato da una Banca Centrale Nazionale dell'Eurosistema»; chi rimette in circolo il contante ha obblighi di controllo e procedure.
- **Fonte.** Limite di 5.000 € per ogni trasferimento di contante ([incasso-canoni.md](incasso-canoni.md)).
- **Inferenza.** Un totem con contanti aggiunge custodia, svuotamento, assicurazione, resto e controlli sulle banconote. Il modello self-service letto (LIS Pay) non accetta contanti.

**Inferenza: tre modi per ƎE.**
1. **Il totem mostra i codici, la persona paga con il suo telefono.** Il totem (o la piattaforma) mostra importo, scadenza, QR pagoPA o codice CBILL; la persona paga con la sua banca. ƎE non tocca denaro. È coerente con «Controllo A».
2. **Il totem ospita il servizio di un prestatore autorizzato.** Come i tabaccai: il prestatore incassa, ƎE è convenzionata o agente. Va chiarito se un'agenzia immobiliare può diventarlo, con quali obblighi (OAM, antiriciclaggio) e se il prestatore lo accetta (**Da verificare**, senza contatti per ora).
3. **ƎE incassa con le carte al totem.** Per le bollette di terzi è un servizio di pagamento: richiede un'autorizzazione o un prestatore autorizzato. Per il canone ripropone, senza nessuno al banco, la domanda già aperta in [incasso-canoni.md](incasso-canoni.md) (servizio di pagamento o esclusione dell'agente commerciale).

### 3.3 Terminali di pagamento non presidiati e certificazioni

| Voce | Cosa dice la fonte | Fonte |
| --- | --- | --- |
| PCI PTS POI | requisiti di sicurezza dei dispositivi che proteggono PIN e dati delle carte; fra le categorie ci sono gli «Unattended Payment Terminals (UPT)»; laboratori riconosciuti valutano, PCI SSC approva e pubblica l'elenco | PCI SSC |
| EMV | Livello 1 per la parte elettrica o radio, Livello 2 per il software di pagamento; le approvazioni EMVCo si verificano sul sito EMVCo | lettere di approvazione EMVCo (PDF cifrato, non letto); **Fonte secondaria** per la descrizione dei livelli |
| Ingenico Self/5000 | per distributori e chioschi; «PCI PTS 5.1 certified», «PIN on Glass certified»; «EMV Contactless L1 2.6 certified»; «Hybrid card reader with shutter»; lettore di chip «500k reads lifespan»; IP44, IK09 | scheda Ingenico, ottobre 2023 |
| Worldline Self/5000 LE | terminale non presidiato solo contactless, «PCI PTS 6.x», display touch; prezzo non pubblicato | pagina Worldline |
| Accessibilità | l'Atto europeo sull'accessibilità si applica ai «terminali di pagamento» e ai terminali self-service interattivi immessi sul mercato dopo il 28/6/2025, e ai «servizi bancari per consumatori»; le microimprese che forniscono servizi sono esentate dai requisiti sui servizi | direttiva (UE) 2019/882, artt. 2, 4, 32 |

**Inferenza.**
- ƎE non certifica nulla da sé: compra o noleggia un terminale già approvato PCI PTS ed EMV da un acquirer o da un prestatore. Il totem ospita il terminale, ma l'incasso resta del prestatore.
- Se ƎE accetta carte, gli obblighi PCI DSS del commerciante dipendono da come è fatto l'incasso e dal contratto con l'acquirer (**Da verificare**; norma PCI DSS non letta).
- Il totem deve essere accessibile (altezza, contrasto, lettura vocale, alternative al touch). Il recepimento italiano dell'Atto europeo non è stato letto (**Da verificare**).

### 3.4 Lettore che trattiene la tessera o lettura contactless

| | Lettore motorizzato a contatto (tessera inserita e trattenuta) | Lettura contactless (tessera o telefono appoggiati) |
| --- | --- | --- |
| Dove si usa | sportelli bancari (ATM) e casse automatiche, per le carte di pagamento con chip e PIN | tornelli, porte, trasporti, terminali di pagamento contactless |
| Pro | la tessera resta dentro per tutta l'operazione; con una serranda protegge da manomissioni; legge anche chip a contatto | niente parti in movimento; veloce; legge anche il telefono; si pulisce e si ripara poco |
| Contro | parti meccaniche che si usurano (il lettore ibrido Ingenico dichiara 500.000 letture, **Fonte**); tessere incastrate o trattenute di notte senza nessuno al banco; vandalismo; costo e manutenzione più alti; non legge il telefono | la tessera da sola non prova chi la usa (serve il secondo fattore); lettura di nascosto a pochi centimetri, innocua con identificativo casuale e AES |
| Per la tessera ƎE | richiederebbe il chip a contatto su ogni tessera | richiede il chip contactless |

**Inferenza.** Il lettore che trattiene la tessera ha senso quando la tessera è una carta di pagamento e il PIN va digitato su un dispositivo certificato: è il lavoro del terminale del prestatore, che lo ha già (esempio: Ingenico Self/5000 con lettore ibrido). La tessera ƎE serve solo a farsi riconoscere: il contactless con secondo fattore e uscita automatica copre lo stesso rischio senza meccanica. I prezzi dei lettori motorizzati non sono pubblicati fra le fonti lette (**Da verificare**).

### 3.5 Costi indicativi

| Voce | Prezzo pubblicato | Fonte |
| --- | --- | --- |
| Lettore NFC certificato Apple VAS e Google Smart Tap (ACS WalletMate II) | 99,00 € IVA escl. | RFID.it |
| Lettore NFC senza certificazioni wallet (ACS ACR1552U) | 69,00 € IVA escl. | RFID.it |
| Terminale di pagamento non presidiato (Ingenico Self/5000, Worldline Self/5000 LE) | non pubblicato | Ingenico, Worldline |
| Lettore motorizzato a contatto | non pubblicato | — |
| Totem completo (struttura, schermo, computer, lettori, stampante, terminale di pagamento) | non pubblicato | — |
| Casse automatiche nelle aziende sanitarie | noleggio «full-service» con assistenza, guasti e canone ridotto in caso di fermo; importi non letti | capitolato Intercent-ER 2014 |
| Commissione per il cliente nel modello tabaccaio | 2,70 € a pagamento | LIS Pay |
| Account sviluppatore Apple | 99 USD l'anno | Apple |
| Certificato NFC Apple, abilitazione Smart Tap | non pubblicati | Apple, Google |

**Inferenza.** Il costo di un totem dipende soprattutto da chi lo fornisce e da chi incassa: con un prestatore come LIS Pay il terminale e il servizio sono del prestatore; con un totem di proprietà ƎE si sommano struttura, assistenza 24 ore su 24, connessione, accessibilità e contratto con un acquirer. Una stima seria richiede preventivi (non chiesti).

## 4. Conflitti con le decisioni confermate

Tutta la sezione è **Inferenza** dell'agente; le decisioni restano dell'utente.

1. **«La tessera non è una carta di pagamento» (§5.6).** Nessun conflitto se al totem si paga con le carte della persona, su un terminale del prestatore. Ci sarebbe conflitto se la tessera diventasse un borsellino o se si caricasse credito su di essa.
2. **«Averla in mano non basta per vedere i dati» (§5.6).** Il totem deve chiedere un secondo fattore (§3.1). Con NTAG 424 DNA, l'indirizzo che si apre avvicinando la tessera al telefono deve chiedere l'accesso, mai mostrare dati.
3. **«Il denaro non passa dalla piattaforma» (§12, Controllo A).** Compatibile se il totem mostra i codici e la persona paga con la sua banca, oppure se incassa un prestatore autorizzato e la piattaforma riceve solo l'esito. Entra in conflitto se il totem fa incassare a ƎE le bollette di terzi. Il canone pagato con carta al totem è un nuovo canale di incasso di ƎE: va deciso e coperto dal parere già chiesto in [incasso-canoni.md](incasso-canoni.md).
4. **«Wallet, contactless, terminale da banco e totem fuori dalla prima versione» (§12, T6 e Controllo A).** Mettere oggi il chip nella tessera non usa il contactless: il chip resta spento nel pilota. Leggerlo al banco già nel pilota sarebbe «contactless al banco», oggi escluso.
5. **«Tessera fisica solo se costa poco» (§12, T6).** Il chip sicuro aggiunge circa 1–2,5 € a tessera (§1.4), la lamina un costo non pubblicato. L'utente deve decidere se resta «poco».
6. **«Pagamento nell'app, contanti nei punti convenzionati» esclusi dalla prima versione (§12, T7 e Controllo A).** Il totem con pagamenti appartiene alla stessa famiglia: resta dopo la prima versione.

## 5. Cosa chiedere ai fornitori di tessere

**Inferenza**: requisiti da mettere in una futura richiesta di preventivo, da inviare solo con l'autorizzazione dell'utente.

- Formato ISO/IEC 7810 ID-1, spessore dichiarato (0,76 o 0,80 mm).
- Chip **originale NXP**, modello esatto: MIFARE DESFire EV3 (2K o 4K) oppure NTAG 424 DNA. Niente «compatibile», niente MIFARE Classic.
- Conformità ISO/IEC 14443-A **misurata sulla tessera finita, con la lamina**; distanza di lettura dichiarata con un lettore indicato da ƎE e con un iPhone e un Android recenti.
- **Lamina arancione:** tipo (metallizzata o no), zona coperta, posizione dell'antenna, eventuale zona libera da lasciare; campione fisico prima dell'ordine.
- **Prova del 100% delle tessere** e quota massima di tessere difettose sostituite.
- **Chiavi:** con quali chiavi di trasporto escono le tessere; se il fornitore può caricare chiavi indicate da ƎE e come le riceve e le distrugge; oppure consegna con chiavi di trasporto e cambio a cura di ƎE.
- **Elenco dei numeri di serie (UID)** per tessera e, se stampato, abbinamento al codice casuale stampato fornito da ƎE in un file; nessun dato personale inviato al fornitore.
- Stampa a colori fronte/retro, codice stampato diverso su ogni tessera, eventuale QR.
- Quantità minima, prezzo a 100 e a 250, tempi, spedizione, garanzia, conservazione dei dati del chip.
- Disponibilità futura dello stesso chip e della stessa grafica per le sostituzioni.

**Cosa evita di rifare la tessera dopo il pilota** (**Inferenza**):
- un chip con autenticazione AES, così il totem o una porta potranno fidarsi della tessera;
- chiavi che si possono cambiare dopo, così il pilota non deve decidere oggi tutta la gestione delle chiavi;
- un identificativo casuale nel chip, separato dal codice dell'adesione, così una sostituzione cambia solo la tessera;
- la lamina provata con i lettori reali.

Restano indipendenti dalla tessera fisica: il wallet (è un'altra credenziale sul telefono), il totem e i pagamenti (dipendono da un prestatore).

## 6. Decisioni che aspettano l'utente

Da portare una alla volta. Le opzioni sono quelle emerse dalla ricerca; la scelta spetta all'utente.

1. **Il chip va nella tessera del pilota?**
   - *Sì, contactless sicuro (DESFire EV3 o NTAG 424 DNA), spento nel pilota:* la tessera è pronta per il totem e per una lettura al banco futura; costa circa 1–2,5 € in più a tessera, più la lamina; serve un preventivo.
   - *No, solo plastica con lamina e codice:* costa meno; se un giorno arriva il totem, le tessere vanno rifatte.
   - *Sì, ma un chip economico (NTAG 213 o MIFARE Classic):* costa poco, ma si copia; per un totem che apre lo spazio personale non è adatto.
2. **Quale chip?**
   - *MIFARE DESFire EV3:* più sicuro (EAL5+), può ospitare più usi (adesione, porta dell'agenzia); serve un lettore con le chiavi.
   - *NTAG 424 DNA:* un po' più economico, si verifica anche con un telefono qualsiasi tramite un indirizzo web; meno adatto a usi multipli.
3. **Chip a contatto e lettore che trattiene la tessera?**
   - *No (consigliato dall'agente):* la tessera ƎE non paga; il PIN delle carte bancarie lo gestisce il terminale del prestatore, che ha già il suo lettore.
   - *Sì:* ogni tessera ha anche i contatti dorati, il totem ha una parte meccanica che si usura e può trattenere la tessera di notte.
4. **Nel totem futuro, come si paga?**
   - *Il totem mostra i codici e la persona paga con il suo telefono:* ƎE non tocca denaro, coerente con le decisioni; serve che la persona abbia un'app di pagamento.
   - *Il totem ospita il servizio di un prestatore autorizzato (modello tabaccaio):* paga anche chi non ha app; serve un accordo con un prestatore e un parere.
   - *ƎE incassa direttamente:* da escludere per le bollette di terzi senza autorizzazione; per il canone serve il parere già chiesto.
5. **Il secondo fattore al totem?**
   - *PIN sul totem:* semplice; va protetto da sguardi e tentativi.
   - *Conferma sul telefono:* più sicuro; serve il telefono.
   - *Telefono nel wallet:* il più comodo, ma dipende da Apple e Google.
6. **Wallet: QR o NFC, quando arriverà?**
   - *QR:* basta l'account sviluppatore Apple (99 USD l'anno) e l'account Google; il totem deve avere una fotocamera.
   - *NFC:* contactless vero; richiede l'approvazione di Apple e di Google, lettori certificati e chiavi da gestire.

## 7. Pareri da chiedere

- **Servizi di pagamento (legale bancario).** Se ƎE può essere convenzionata o agente di un prestatore per bollette e pagoPA al totem; obblighi OAM e antiriciclaggio; canone pagato con carta al totem; effetti del nuovo regolamento europeo (PSR) quando sarà pubblicato.
- **Privacy.** Identificativo nel chip e registro delle letture; secondo fattore; eventuale biometria (dato particolare); videosorveglianza del locale aperto di notte; dati trattati da Apple, Google e dal prestatore.
- **Sicurezza informatica.** Gestione delle chiavi AES, protezione del totem incustodito, blocco dopo tentativi, verifica delle tessere bloccate a ogni lettura.
- **Accessibilità.** Requisiti del totem secondo l'Atto europeo sull'accessibilità e il recepimento italiano.
- **Assicurazione e locale.** Totem aperto 24 ore su 24: furto, vandalismo, contanti se previsti.

## Fonti

Lette il 25/10/2026 salvo diversa indicazione.

Contesto del progetto
- [PRODUCT.md](../../PRODUCT.md) §5.6 e §12 (18/10/2026 «Tessera (T6)», 19/10/2026 T7, 23/10/2026 «Controllo A»); [ticket 12](../../.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md), decisioni del 25/10/2026; [tessere.md](tessere.md); [incasso-canoni.md](incasso-canoni.md); [bollette.md](bollette.md).

Tecnologie della tessera
- NFC Forum, NFC Technology: https://nfc-forum.org/learn/nfc-technology/
- NXP, MIFARE DESFire EV3: https://www.nxp.com/products/rfid-nfc/mifare-hf/mifare-desfire/mifare-desfire-ev3-high-security-ic-for-contactless-smart-city-services:MF3DHx3
- NXP, NTAG 424 DNA: https://www.nxp.com/products/NTAG424DNA
- NXP, NTAG 213/215/216: https://www.nxp.com/products/NTAG213_215_216
- NXP, MIFARE Classic: https://www.nxp.com/products/rfid-nfc/mifare-hf/mifare-classic
- NXP, AN13219 «PN7160 antenna design and matching guide», rev. 1.6, 25/6/2026: https://www.nxp.com/docs/en/application-note/AN13219.pdf
- ISO/IEC 14443: https://www.iso.org/standard/73599.html (non raggiungibile, errore 403)
- NXP, dichiarazione di sicurezza su Crypto1 e pagine MIFARE Classic su mifare.net (non raggiungibili, errore 404)

Fornitori di tessere e lettori
- Carteplastiche (GCARD), tessere RFID stampate 13,56 MHz: https://www.carteplastiche.com/131-tessere-rfid-contactless-stampate-1356-mhz-hf-
  - DESFire EV1 2K: https://www.carteplastiche.com/tessere-rfid-contactless-stampate-1356-mhz-hf-/801-tessere-rfid-mifare-desfire-ev1-2k-conf-100-pz-grafica-da-voi-fornita.html
  - Ultralight C: https://www.carteplastiche.com/tessere-rfid-contactless-stampate-1356-mhz-hf-/798-tessere-rfid-mifare-ultralight-c-1356-mhz-512-bit-conf-100-pz-grafica-da-voi-fornita.html
  - MIFARE 1K originali: https://www.carteplastiche.com/tessere-rfid-contactless-stampate-1356-mhz-hf-/793-tessere-rfid-mifare-originali-1356-mhz-1k-conf-100-pz-grafica-da-voi-fornita.html
  - MIFARE compatibili 1K: https://www.carteplastiche.com/tessere-rfid-contactless-stampate-1356-mhz-hf-/795-tessere-rfid-mifare-compatibili-1k-1356mhz-conf-100-pz-grafica-da-voi-fornita.html
  - chip a contatto SLE5542: https://www.carteplastiche.com/tessere-stampate-con-chip-a-contatto/716-tessere-pvc-stampate-con-chip-sle5542.html
  - categorie NFC/RFID e tessere originali MIFARE: https://www.carteplastiche.com/124-nfc-rfid, https://www.carteplastiche.com/146-tessere-rfid-originali-mifare-1356-mhz-contactless
- GCARD, finiture e caratteristiche: https://www.gcard.it/
- RFID.it (Sinfotech S.r.l.), DESFire EV3C 4K e altre tessere della categoria: https://rfid.it/it/rfid-iso-cards-hf/4793-mifare-desfire-ev3-2k.html
- RFID.it, ACS WalletMate II: https://rfid.it/it/acs/5358-acs-walletmate-ii-nfc-mobile-wallet-reader.html
- ACS, comunicato sulla serie WalletMate II: https://www.acs.com.hk/en/press-release/2877/ (non raggiungibile, errore 403)
- ELATEC, certificazione Apple VAS dei lettori TWN4: https://www.elatec-rfid.com/int/news-detail-page/elatecs-rfid-mobile-id-readers-certified-for-use-with-iphone-and-apple-watch (letto solo l'estratto del motore di ricerca)
- Nidec Instruments, comunicato del 17/5/2023 sul lettore multifunzione: https://www.nidec.com/en/nidec-instruments/product/news/2023/230517
- Nidec, lettori motorizzati ICT3K: scheda ufficiale non trovata; pagina ATM Marketplace non raggiungibile (errore 404)

Wallet
- Apple, Loyalty passes: https://developer.apple.com/wallet/loyalty-passes/
- Apple, Get started with Wallet: https://developer.apple.com/wallet/get-started/
- Apple, Wallet: https://developer.apple.com/wallet/
- Apple, Pass.NFC (letto dalla versione dati della documentazione): https://developer.apple.com/documentation/walletpasses/pass/nfc-data.dictionary
- Apple, Pass: https://developer.apple.com/documentation/walletpasses/pass
- Apple Developer Program, prezzo: https://developer.apple.com/programs/whats-included/
- Apple, Wallet keys: https://learn.wallet.apple/keys
- Apple, richiesta del certificato NFC: https://developer.apple.com/contact/passkit/ (richiede l'accesso con un account; non aperta)
- Google, Smart Tap: https://developers.google.com/wallet/smart-tap
- Google, Smart Tap overview: https://developers.google.com/wallet/smart-tap/introduction/overview
- Google, Smart Tap issuer, merchant, pass configuration e communication flow: https://developers.google.com/wallet/smart-tap/introduction/issuer-configuration, https://developers.google.com/wallet/smart-tap/introduction/merchant-configuration, https://developers.google.com/wallet/smart-tap/introduction/pass-configuration, https://developers.google.com/wallet/smart-tap/introduction/communication-flow
- Google, GenericClass: https://developers.google.com/wallet/reference/rest/v1/genericclass
- Google, Generic pass: https://developers.google.com/wallet/generic

Pagamenti
- Direttiva (UE) 2015/2366 (PSD2), artt. 3, 4 (n. 30 e 38), 19, 97 e allegato I, testo letto dall'archivio Cellar dell'Ufficio delle pubblicazioni: http://publications.europa.eu/resource/celex/32015L2366 (la pagina EUR-Lex https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:32015L2366 non ha risposto agli strumenti)
- TUB, art. 128-quater (Normattiva): https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1993-09-01;385~art128quater
- PagoPA, ruoli del sistema: https://developer.pagopa.it/pago-pa/guides/sanp/specifiche-attuative-del-nodo-dei-pagamenti-spc/funzionamento-generale/ruoli
- PagoPA, adesione dei PSP: https://developer.pagopa.it/pago-pa/guides/sanp/prestatore-di-servizi-di-pagamento/adesione
- PagoPA, pagina dei prestatori: https://www.pagopa.gov.it/it/prestatori-servizi-di-pagamento/ (contenuto non leggibile dagli strumenti)
- AgID, adesione PSP: https://www.agid.gov.it/it/piattaforme/pagopa/adesione-psp (sito in manutenzione)
- Consorzio CBI, CBILL: https://www.cbi-org.eu/Servizi/CBILL
- LIS Pay, foglio informativo dei pagamenti bollettini in modalità self-service, n. 1, marzo 2026: https://puntolis.it/content/dam/puntolis/documents/lis-paga/Foglio_Informativo_Modalit%C3%A0_Self-Service.pdf
- Mooney, foglio di trasparenza per la rete Tigros: https://mooney.it/cms/api/documents/assets/informativa-trasparenza-tigros (non raggiungibile, errore 403)
- Banca d'Italia, gestori del contante: https://www.bancaditalia.it/compiti/emissione-euro/gestori-contante/index.html
- PCI SSC, PTS Point of Interaction: https://www.pcisecuritystandards.org/standards/pts-point-of-interaction/
- EMVCo, esempio di lettera di approvazione Livello 2: https://www.emvco.com/wp-content/uploads/loa/L2_UNIF_05694_17Oct25.pdf (PDF cifrato, non letto); pagina sulla type approval non trovata (errore 404)
- Ingenico, scheda Self/5000, ottobre 2023: https://ingenico.com/sites/default/files/resource-document/2023-10/SELF%205000%20datasheet_OCT23.pdf
- Worldline, Self/5000 LE: https://worldline.com/en/home/main-navigation/solutions/merchants/terminals/self-5000-le
- Intercent-ER, capitolato tecnico del noleggio di riscuotitrici automatiche per le aziende sanitarie (2014): https://intercenter.regione.emilia-romagna.it/servizi-pa/convenzioni/convenzioni-scadute-e-o-esaurite/2014/noleggio-riscuotitrici-automatiche-per-aziende-sanitarie/CapitolatoTecnico.pdf/@@download/file/Capitolato%20Tecnico.pdf; capitolato 2020 e chiarimenti 2014 non raggiungibili (errore 404)
- Stato di PSR e PSD3: pubblicazione in Gazzetta ufficiale UE non verificata (EUR-Lex non raggiungibile dagli strumenti)

Norme su dati e accessibilità
- Regolamento (UE) 2016/679 (GDPR), artt. 4 n. 14 e 9, dall'archivio Cellar: http://publications.europa.eu/resource/celex/32016R0679
- Direttiva (UE) 2019/882 (Atto europeo sull'accessibilità), artt. 2, 4, 31, 32, dall'archivio Cellar: http://publications.europa.eu/resource/celex/32019L0882; recepimento italiano non letto
