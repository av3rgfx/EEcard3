# Accesso con un codice via email o SMS

Ricerca del 30 ottobre 2026, svolta da un agente in background (skill `research`) su fonti primarie e ufficiali, con la data di lettura per ogni fonte. Risponde al ticket [04 «Ricerca: accesso con un codice via email o SMS»](../../.scratch/architettura-percorso-1/issues/04-ricerca-accesso-codice.md) e serve al ticket [10 «Accesso: come entrano clienti e operatori»](../../.scratch/architettura-percorso-1/issues/10-accesso.md).

**Non è un parere legale né una valutazione di sicurezza.** Dice cosa scrivono oggi le fonti che si sono potute leggere. Nessun account creato, nessun servizio provato, nessun messaggio inviato. Non sono stati consultati repository o decisioni di tentativi precedenti.

Già trattati altrove, qui non ripetuti: formato dell'SMS con la riga legata al dominio, WebOTP e campo `autocomplete="one-time-code"` in [email-sms-forma.md](email-sms-forma.md) §5; campo del codice, passkey in Safari, cookie della web app sulla schermata Home e WCAG 3.3.8 in [hig-web.md](hig-web.md) §9.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Da verificare** = non confermato.

## In breve

- **NIST non riconosce il codice via email come modo di entrare.** SP 800-63B-4 (finale, 31/7/2025): «Email SHALL NOT be used for out-of-band authentication». L'email resta ammessa per verificare un indirizzo e per i codici di recupero [1][2]. Vale a tutti i livelli. È una norma federale USA: in Italia è un riferimento tecnico, non un obbligo.
- **Il codice via SMS è ammesso, ma «limitato».** Basta da solo solo al livello più basso (AAL1). Le condizioni: offrire anche un'alternativa non limitata, informare dei rischi, valutare il rischio, avere un piano per abbandonarlo. Prima dell'invio vanno considerati cambio di SIM e portabilità [1]. OWASP e ENISA vanno nella stessa direzione [3][5][9].
- **Né il codice né il link sono a prova di phishing** [1]. La passkey sì, perché è legata al dominio del sito [15][16]. NIST ammette le passkey sincronizzate fino al livello AAL2 [1].
- **Regole pratiche concordi:**
  - codice di almeno 6 cifre, valido al massimo 10 minuti, usabile una volta e solo per la richiesta che l'ha generato;
  - tentativi limitati per account; un codice nuovo non azzera il conteggio;
  - stessa risposta se l'account esiste o no;
  - avviso a ogni recupero e a ogni nuovo modo di entrare;
  - un'uscita facile da trovare [1][3][6][7][8].
- **Operatore.** Per chi ha privilegi elevati le fonti chiedono più di un fattore [1][3][5][14]. Il Garante ha sanzionato in base all'art. 32 la mancanza dell'autenticazione a più fattori, anche in un caso di applicazione web usata dai punti vendita (2025, 2026) [12][13]. L'operatore vede i dati di tutte le case: un solo codice via email o SMS è la soluzione più debole per lui (**Inferenza**).
- **Sul web e sull'iPhone.**
  - Safari compila anche i codici arrivati in Mail, da iOS 17 e macOS 14 [20].
  - WebAuthn Livello 3 è una Raccomandazione W3C dal 25/8/2026; l'API è disponibile in tutti i principali browser da settembre 2021 [15][17].
  - L'app iPhone futura può usare le stesse passkey del sito, se il dominio è dichiarato nell'app [18].
  - Le passkey sono legate al dominio: un cambio di indirizzo dopo il parere sul nome costringerebbe a crearle di nuovo (**Inferenza**).

## Possibile conflitto con una decisione confermata

Decisione ([PRODUCT.md](../../PRODUCT.md) §12, 23/10/2026): **si entra con un codice di verifica via email o via SMS, per tutti, senza password.** Alcune fonti di riferimento la sconsigliano, del tutto o in parte. **La decisione resta all'utente.**

| Fonte | Cosa dice esattamente | Per quale livello |
| --- | --- | --- |
| NIST SP 800-63B-4, §3.1.3.1 [1] | «Email SHALL NOT be used for out-of-band authentication». Motivi: l'email può essere aperta con la sola password, intercettata in transito o deviata. Esclusi dal divieto: i codici che confermano un indirizzo e i codici di recupero (§4.2.1.2) | Tutti i livelli (AAL1–AAL3) |
| NIST, §3.1.3.3 e §3.2.9 [1] | L'SMS è un autenticatore «restricted». Chi lo usa: valuta e accetta il rischio, offre almeno un'alternativa non limitata allo stesso livello, informa gli utenti dei rischi, prepara un piano di migrazione | Ammesso da solo solo ad AAL1; ad AAL2 solo con un secondo fattore; mai ad AAL3 |
| OWASP ASVS 5.0, V6.6 e 6.3.6 [3] | «Unsafe out-of-band authentication mechanisms such as e-mail and VOIP are not permitted.» Per 6.3.6, l'email non va usata né come fattore unico né come uno dei fattori. 6.6.1: SMS solo con numero già verificato, insieme a metodi più forti e con informazioni sui rischi | 6.3.6 al livello 3; 6.6.1 dal livello 2; dal livello 2 serve comunque più di un fattore (6.3.3) |
| OWASP, MFA Cheat Sheet [5] | «Do not use SMS for high-value or PII-handling applications.» | Applicazioni con dati personali o rischio economico |
| ENISA, *Countering SIM-Swapping* (2021), §4.2 [9] | Per le banche l'SMS come secondo fattore «may not provide a sufficient level of security»; suggerisce il passaggio a fattori basati su app | Pagamenti e conti bancari |

**Inferenza.**
- Per il **cliente**, l'SMS da solo corrisponde al livello più basso di NIST, a condizioni precise. Il codice via email, come unico modo di entrare, non rientra in nessun livello di NIST né di ASVS. In pratica equivale a usare ogni volta il percorso di recupero. È un compromesso noto, scelto per chi è poco pratico. Il rischio dipende dai dati visibili: contratto, canoni, documenti d'identità; più avanti lo spazio delle bollette.
- Per l'**operatore** il contrasto è più netto (§3).
- Le fonti indicano in modo concorde come ridurre il problema senza password:
  - offrire la passkey come alternativa non limitata;
  - tenere l'email e l'SMS per il primo accesso, il recupero e gli avvisi.

  Se e per chi farlo lo decide l'utente nel ticket 10.

## 1. Quanto è sicuro e a quali condizioni

### 1.1 Livelli di garanzia (NIST)

**Fonte** [1][2]:
- SP 800-63B-4 è finale (31/7/2025) e sostituisce la versione del 2017 aggiornata nel 2020. La pagina HTML è del 26/8/2025.
- **AAL1** dà una fiducia di base: basta un fattore, ma il servizio dovrebbe offrire anche opzioni a più fattori.
- **AAL2** chiede due fattori distinti. Il servizio deve offrire almeno un'opzione resistente al phishing.
- **AAL3** chiede una chiave crittografica non esportabile.
- Gli autenticatori in cui si ricopia un codice «SHALL NOT be considered phishing-resistant» (§3.2.5).

### 1.2 Codice via email

- **NIST** (**Fonte**) [1]: vedi il conflitto. Per i codici di recupero inviati per email la validità massima è 24 ore (§4.2.1.2).
- **OWASP, MFA Cheat Sheet** (**Fonte**) [5]: la sicurezza dipende tutta dalla casella. Spesso la casella non ha un secondo fattore e ha la stessa password del sito. Il codice può arrivare sullo stesso dispositivo ed è esposto al phishing.
- **Casella condivisa** (**Inferenza**): chi legge la casella entra nell'account. Succede con una casella di famiglia o su un telefono lasciato aperto. Con la regola D7 ognuno usa la sua email personale. Al banco non si può controllare che la casella sia davvero solo sua.

### 1.3 Codice via SMS

- **NIST** (**Fonte**) [1]:
  - l'SMS è «restricted» (§3.1.3.3 e §3.2.9); il dispositivo dovrebbe non mostrare il codice quando è bloccato (§3.1.3.1);
  - prima di inviare il codice vanno considerati scambio di dispositivo, cambio di SIM, portabilità e comportamenti anomali (§3.1.3.3).
- **ENISA** (**Fonte**) [9]:
  - lo scambio della SIM è il modo più facile per intercettare gli SMS e si basa sull'inganno del personale degli operatori telefonici;
  - le banche possono chiedere all'operatore se la SIM è cambiata di recente, con un servizio apposito;
  - in Italia l'AGCOM ha coordinato una sperimentazione con banche, operatori e Garante (§4.1).
- **OWASP** (**Fonte**) [5]:
  - aggiunge le app malevole che leggono i messaggi e l'anteprima sullo schermo bloccato;
  - aggiunge il costo: chi attacca può far partire molti SMS a spese del servizio.
- **Inferenza.** Il controllo della SIM presso l'operatore è un servizio esterno: non si valuta qui ed è **Da verificare** se sia disponibile per chi non è una banca. Un SMS che arriva sullo stesso iPhone dove si entra protegge solo dal furto delle credenziali a distanza, non dal furto del telefono sbloccato.

### 1.4 Link magico via email

- **NIST**: non parla di link di accesso. Il divieto dell'email vale per il canale, quindi anche per un link (**Inferenza**) [1].
- **OWASP**, *Forgot Password Cheat Sheet*, per i link con un gettone (**Fonte**) [8]:
  - gettone casuale, legato a un utente, monouso, con scadenza e conservato in modo sicuro;
  - indirizzo del link fisso o confrontato con un elenco di domini fidati, mai preso dalla richiesta;
  - `Referrer-Policy: no-referrer` sulla pagina di arrivo;
  - tentativi limitati.
- **Da verificare** (nessuna fonte primaria trovata):
  - link aperto su un dispositivo diverso da quello dove si è chiesto l'accesso;
  - link aperto nel browser interno di un'app di posta;
  - link «visitati» in anticipo dai controlli antispam.

### 1.5 Passkey

- **W3C**, WebAuthn Livello 3, Raccomandazione del 25/8/2026 (**Fonte**) [15]:
  - la credenziale è legata al servizio e la possono usare solo le origini di quel servizio, identificato dal suo dominio (RP ID);
  - «passkey» è un sinonimo di credenziale «discoverable»;
  - i flag BE e BS dicono se la passkey è sincronizzata su più dispositivi.
- **FIDO Alliance** (**Fonte**) [16]:
  - passkey sincronizzate o legate a un solo dispositivo; la resistenza al phishing vale in entrambi i casi;
  - con quelle legate a un solo dispositivo, su un dispositivo nuovo serve un altro metodo per entrare.
- **NIST**, App. B (**Fonte**) [1]:
  - le passkey sincronizzate valgono fino ad AAL2, se le chiavi viaggiano cifrate e l'account di sincronizzazione è protetto da più fattori;
  - non valgono ad AAL3.
- **Apple** (**Fonte**) [19]: in Portachiavi iCloud le passkey sono cifrate da un capo all'altro; il server del sito tiene solo la chiave pubblica.
- **Inferenza.** Una passkey con verifica dell'utente (Face ID, impronta o codice del telefono) unisce il possesso del telefono e la verifica locale. Per NIST corrisponde a un autenticatore crittografico a più fattori.

## 2. Regole pratiche

| Tema | Cosa dicono le fonti |
| --- | --- |
| **Lunghezza** | Almeno 6 cifre (NIST §3.1.3.2 [1]; ASVS 6.5.4: almeno 20 bit, cioè 6 cifre casuali [3]). Generato con un generatore casuale crittografico (ASVS 6.5.3) |
| **Durata** | Al massimo 10 minuti (NIST [1]; ASVS 6.5.5 [3]). Codice di recupero: 24 ore per email, 10 minuti per SMS (NIST §4.2.1.2 [1]) |
| **Uso** | Una volta sola (NIST [1]; ASVS 6.5.1). Legato alla richiesta che l'ha generato, non a una precedente o successiva (ASVS 6.6.2 [3]) |
| **Tentativi** | Limite ai tentativi falliti consecutivi; un codice nuovo **non azzera** il conteggio. Al massimo 100 errori consecutivi per autenticatore, poi va disattivato e ricollegato; si può fissare un limite più basso (NIST §3.2.2 [1]). Conteggio legato all'account e non all'indirizzo IP; blocchi brevi che crescono; durante il blocco il recupero resta disponibile (OWASP [6]) |
| **Invii** | Limite alle richieste per account, contro l'invio di massa di email o SMS (OWASP [8]) e contro il costo degli SMS (OWASP [5]) |
| **Risposte** | Stesso messaggio e tempi simili se l'account esiste o no (OWASP [6][8]) |
| **Sessione** | AAL1: nuovo accesso entro 30 giorni (SHOULD). AAL2: entro 24 ore, e dopo 1 ora di inattività (NIST §2.1.3, §2.2.3 [1]). Cookie solo su HTTPS, `HttpOnly`, prefisso `__Host-`, `SameSite` Lax o Strict; identificativo cancellato all'uscita; niente sessione in Local Storage (NIST §5.1 [1]; OWASP [7]). Nuovo identificativo a ogni accesso o cambio di ruolo (OWASP [7]) |
| **Uscita** | Un comando di uscita facile da trovare (NIST §5 [1]), su ogni pagina, con chiusura della sessione sul server (OWASP [7]). Elenco delle sessioni attive con chiusura a distanza (OWASP [7]) |
| **Recupero e cambio di numero o email** | Metodi NIST: codici salvati, codici inviati, contatti di fiducia, nuova identificazione (§4.2.1). Almeno due indirizzi registrabili; ogni indirizzo nuovo va verificato (§4.2.1.2). Per cambiare un fattore si entra prima con uno già registrato (OWASP [5]); per cambiare email si avvisa l'indirizzo attuale e si conferma il nuovo (OWASP [6]). Il recupero non deve aggirare un secondo fattore attivo (ASVS 6.4.3 [3]) |
| **Avvisi** | Avviso a ogni recupero e a ogni nuovo modo di entrare, su un canale diverso da quello dell'operazione, con le istruzioni per chi non l'ha chiesto (NIST §4.1.2, §4.2.3, §4.6 [1]). Avviso per accessi sospetti e cambi di email o numero (ASVS 6.3.5 e 6.3.7, livello 3 [3]); avviso di nuovo accesso (OWASP [7]) |

**Inferenza.**
- Con 6 cifre e al massimo 100 errori in tutto, chi tira a indovinare ha circa una possibilità su 10.000. Un limite più basso la riduce in proporzione.
- In Connetto la nuova identificazione al banco somiglia alla «nuova identificazione» di NIST (§4.2.1.4). È il recupero naturale quando la persona cambia numero o email, perché passa dal banco.
- Le durate della sessione per cliente e operatore sono da decidere nel ticket 10. Le fonti danno solo massimi.

## 3. Operatore

- **NIST** (**Fonte**) [1]:
  - ad AAL2 servono due fattori e almeno un'opzione resistente al phishing;
  - per il personale delle agenzie federali il phishing-resistant è obbligatorio.
- **OWASP** (**Fonte**):
  - autenticazione a più fattori per gli utenti amministrativi e con privilegi elevati, e per le azioni sensibili [5];
  - dal livello 2 dell'ASVS servono più fattori. La maggior parte delle applicazioni dovrebbe puntare al livello 2; il livello si sceglie in base al rischio [3][4].
- **AgID**, Circolare 2/2017, ABSC 5.6.1, livello «Alto» (**Fonte**) [14]: autenticazione a più fattori per tutti gli accessi amministrativi. Senza più fattori, credenziali di almeno 14 caratteri (5.7.1). Vale per le pubbliche amministrazioni e riguarda l'amministrazione dei sistemi: per ƎE è un riferimento, non un obbligo (**Inferenza**).
- **ENISA**, linee guida per le PMI (2016), misura K.7 (**Fonte**) [10]: «Two-factor authentication should preferably be used for accessing systems that process personal data». **Da verificare** a quale livello di rischio la assegna la tabella a colori.
- **GDPR**, art. 32 (**Fonte**) [11]: misure tecniche e organizzative adeguate al rischio, tenendo conto dello stato dell'arte, dei costi, della natura del trattamento e dei rischi di accesso non autorizzato.
- **Garante** (**Fonte**):
  - provv. 29/4/2025, n. 271 [12]: violati gli artt. 5 e 32, anche per la mancanza dell'autenticazione a più fattori, che avrebbe potuto impedire l'accesso «anche a fronte della compromissione delle credenziali». I costi di attuazione non autorizzano un livello di protezione più basso;
  - provv. 14/5/2026, n. 348 [13]: accessi abusivi a un'applicazione web dei punti vendita. Gli attaccanti hanno ottenuto i fattori di autenticazione fingendosi tecnici di assistenza; poi hanno consultato i dati di oltre 365.000 clienti scorrendo gli identificativi uno dopo l'altro. Il Garante scrive che il secondo fattore, introdotto dopo, «avrebbe certamente limitato l'attività degli attaccanti».
- **Inferenza.**
  - L'operatore di ƎE somiglia più all'utente con privilegi elevati che al cliente: un suo account aperto mostra i dati di tutte le case.
  - Le fonti lette, compreso il Garante, fanno pensare che per lui un solo codice via email o SMS sia difficile da giustificare come misura adeguata.
  - Il caso del 2026 dice anche che conta un fattore resistente all'inganno (la passkey) e che contano i limiti alla consultazione in serie.
  - È **Da verificare** con il collaboratore di ƎE se al banco si usa un computer condiviso: cambia la scelta tra passkey sul telefono personale e chiave fisica.

## 4. Sul web e sull'iPhone

- **Riempimento del codice** (**Fonte**):
  - campo e SMS: vedi [hig-web.md](hig-web.md) §9 e [email-sms-forma.md](email-sms-forma.md) §5;
  - Apple ha annunciato il 5/6/2023 che i codici arrivati in Mail si compilano da soli in Safari [20]; vale da iOS 17 e macOS 14 (**Da verificare**: la pagina della guida di iPhone non si è aperta);
  - Apple non pubblica regole sul formato dell'email perché il codice venga riconosciuto (**Da verificare** con una prova autorizzata).
- **Passkey nei browser** (**Fonte**) [15][17]:
  - WebAuthn è «Baseline widely available» da settembre 2021 e funziona solo su HTTPS;
  - sul web le passkey usano questa API;
  - la proposta automatica nel campo usa `autocomplete="username webauthn"`, dopo aver controllato `getClientCapabilities()`.
  - Safari: vedi [hig-web.md](hig-web.md) §9.
- **Passkey nell'app iPhone futura** (**Fonte**) [18]:
  - servono gli «associated domains» con il servizio `webcredentials`: l'app non può usare passkey di domini che non ha dichiarato;
  - le passkey stanno in Portachiavi iCloud;
  - registrando di nuovo lo stesso utente, la passkey viene sovrascritta sui suoi dispositivi.
- **Inferenza.** Il dominio della passkey è lo stesso indirizzo web che aspetta il parere sul nome (mappa, «Non ancora specificato»). Conviene fissarlo prima di offrire le passkey: se cambia, le passkey vanno create di nuovo. Lo stesso vale per la riga dell'SMS legata al dominio.

## Dove serve un parere professionale

1. **Privacy** (il consulente o il DPO già previsti, [privacy-dati.md](privacy-dati.md)):
   - se il solo codice via email o SMS è una misura adeguata ai sensi dell'art. 32 per i clienti, dati i dati visibili e più avanti lo spazio delle bollette;
   - se lo è per l'operatore;
   - come documentare la valutazione del rischio.
2. **Sicurezza informatica**, in un controllo prima del pilota:
   - limiti dei tentativi e degli invii;
   - durata delle sessioni;
   - protezione contro la consultazione in serie dei dati;
   - recupero dell'account dell'operatore.

## Fonti

Tutte lette il 30/10/2026.

1. NIST, SP 800-63B-4, *Digital Identity Guidelines: Authentication and Authenticator Management*, HTML del 26/8/2025: https://pages.nist.gov/800-63-4/sp800-63b.html — §2.1–2.3 (livelli e tempi della sessione), §3.1.3 (fuori banda, email, SMS), §3.2.2 (tentativi), §3.2.5 (phishing), §3.2.9 (autenticatori limitati), §4.1.2, §4.2 (recupero e relativi avvisi), §4.6 (avvisi), §5 (sessioni), App. B (autenticatori sincronizzabili).
2. NIST CSRC, scheda di SP 800-63B-4: https://csrc.nist.gov/pubs/sp/800/63/b/4/final — stato «Final» del 31/7/2025, sostituisce SP 800-63B.
3. OWASP, ASVS 5.0.0, capitolo V6 «Authentication»: https://github.com/OWASP/ASVS/blob/v5.0.0/5.0/en/0x15-V6-Authentication.md — requisiti 6.3.1–6.3.7, 6.4.3–6.4.4, 6.5.1–6.5.6, 6.6.1–6.6.4 e introduzione di V6.6 (letto il file grezzo).
4. OWASP, ASVS 5.0.0, «What is the ASVS?»: https://github.com/OWASP/ASVS/blob/v5.0.0/5.0/en/0x03-What-is-the-ASVS.md — livelli 1–3 e come scegliere.
5. OWASP Cheat Sheet Series, *Multifactor Authentication*: https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html — SMS, email, passkey, quando chiedere più fattori, cambio dei fattori, avvisi.
6. OWASP Cheat Sheet Series, *Authentication*: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html — risposte uniformi, limiti dei tentativi, nuovo accesso per azioni sensibili, cambio di email.
7. OWASP Cheat Sheet Series, *Session Management*: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html — scadenze, cookie, uscita, sessioni attive.
8. OWASP Cheat Sheet Series, *Forgot Password*: https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html — gettoni nei link, codici, limiti, risposte uniformi.
9. ENISA, *Countering SIM-Swapping*, 6/12/2021: https://www.enisa.europa.eu/publications/countering-sim-swapping e PDF https://www.enisa.europa.eu/sites/default/files/publications/ENISA_REPORT-Countering_SIM_Swapping.pdf — §3.2, §4.1 (API e sperimentazione AGCOM), §4.2.
10. ENISA, *Guidelines for SMEs on the security of personal data processing*, dicembre 2016 (scheda del 27/1/2017): https://www.enisa.europa.eu/publications/guidelines-for-smes-on-the-security-of-personal-data-processing — §4.2.1, misure K.1–K.8.
11. Regolamento (UE) 2016/679, art. 32, nel testo del Garante aggiornato alle rettifiche del 23/5/2018: https://www.garanteprivacy.it/garante/document?ID=6264597 (PDF).
12. Garante, provvedimento del 29/4/2025, n. 271, doc. web 10134827: https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10134827
13. Garante, provvedimento del 14/5/2026, n. 348, doc. web 10263796: https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10263796
14. AgID, Circolare 18/4/2017, n. 2/2017, *Misure minime di sicurezza ICT per le pubbliche amministrazioni*, GU n. 103 del 5/5/2017: https://www.agid.gov.it/sites/agid/files/2024-05/CircolareAgID_170418_n_2_2017_Mis_minime_sicurezza_ICT_PA-GU-103-050517-2.pdf — ABSC 5.6.1 e 5.7.1.
15. W3C, *Web Authentication: An API for accessing Public Key Credentials, Level 3*, Raccomandazione del 25/8/2026: https://www.w3.org/TR/webauthn-3/ — ambito della credenziale e RP ID, «passkey», flag BE e BS.
16. FIDO Alliance, *Passkeys*: https://fidoalliance.org/passkeys/ — passkey sincronizzate e legate al dispositivo, phishing, recupero.
17. MDN, *Web Authentication API* (modificata il 27/10/2026): https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API — disponibilità, HTTPS, mediazione condizionale.
18. Apple Developer, *Supporting passkeys*: https://developer.apple.com/documentation/authenticationservices/supporting-passkeys — associated domains `webcredentials`, registrazione, richieste combinate (letto attraverso i dati pubblici della stessa pagina, perché la pagina HTML non mostra il testo senza JavaScript).
19. Apple Support, *About the security of passkeys*, pubblicata il 16/9/2024: https://support.apple.com/en-us/102195
20. Apple Newsroom, *Apple announces powerful new privacy and security features*, 5/6/2023: https://www.apple.com/newsroom/2023/06/apple-announces-powerful-new-privacy-and-security-features/

## Fonti non raggiunte

- **EUR-Lex**, Regolamento (UE) 2016/679: pagina vuota allo strumento web, senza aggiramenti. L'art. 32 è stato letto nel testo ufficiale pubblicato dal Garante [11].
- **ENISA**, *Handbook on Security of Personal Data Processing* (29/1/2018), PDF: lettura scaduta dopo 300 secondi. Al suo posto le linee guida del 2016 [10], di cui il manuale è l'applicazione. Nel PDF del 2016 il livello di rischio di ogni misura è indicato solo dal colore e non si legge nel testo estratto.
- **Apple Support**, guida di iPhone «Compilare automaticamente i codici di verifica» e «… i codici SMS»: si vedono solo titolo e menu, non il testo. Le condizioni per i codici in Mail restano **Da verificare** sul dispositivo.
- **NIST**, testo esatto delle regole di recupero per gli account senza identificazione, cioè solo AAL1 (§4.2.2.1), e titoli di §3.2.2 e §3.2.9: letti per estratti, non parola per parola. **Da verificare** prima di citarli in un documento per terzi.
- **Link magico**: nessuna fonte primaria sul link aperto su un altro dispositivo, nel browser interno delle app di posta o già «visitato» dai controlli antispam.
