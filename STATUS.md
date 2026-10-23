# Stato del progetto

## Punto di ripresa (23 ottobre 2026, spazio dell'operatore)
**Fase: design del percorso 1** ([docs/METODO.md](docs/METODO.md), passo 6), nella mappa [Design del percorso 1](.scratch/design-percorso-1/map.md). Direzione **«Terracotta»** con il chiaro in vetrina; **spazio dell'operatore approvato** ([DESIGN.md](DESIGN.md), «Direzione del percorso 1» e «Spazio dell'operatore (percorso 1)»). Prossimi passi:
- **Il collaboratore di ƎE guarda lo spazio dell'operatore**, ora sbloccato: servono il link al prototipo, condiviso dall'utente, e tre o quattro domande pronte da copiare.
- **Schermate del proprietario**, poi dell'inquilino e i passaggi comuni.

Prodotto: **Connetto**, nome di lavoro in attesa del parere sul marchio. Non c'è codice applicativo; architettura e stack non sono decisi.

## Fatto (23 ottobre 2026, spazio dell'operatore)
- Ticket [Schermate dell'operatore di ƎE](.scratch/design-percorso-1/issues/09-schermate-operatore.md) rivendicato e chiuso nella stessa sessione della direzione, su richiesta dell'utente, con le skill `prototype` e `grilling`.
- Tre decisioni dell'utente, una alla volta, tutte sull'opzione consigliata:
  - la scheda della casa che si riempie un po' alla volta;
  - l'incasso con l'anteprima della ricevuta accanto e nessuna conferma;
  - la pagina «Al banco» per la persona.
- Prototipo usa e getta con undici schermate e i casi dell'incasso (più mesi, parziale, contanti oltre soglia), mostrato come pagina privata. L'utente l'ha approvato, segnalando pulsanti che uscivano dai riquadri.
- Correzione: pulsanti ed etichette vanno a capo e le due colonne compaiono solo da 1120 px.
- Verifiche eseguite:
  - un controllo automatico su ogni pulsante a sette larghezze, da 360 a 1366 px, ha trovato 19 difetti, poi corretti;
  - al ricontrollo nessun elemento è fuori dal suo riquadro, la pagina non scorre di lato e non dà errori, in chiaro e in scuro.
  - Lezione per i prossimi prototipi: il controllo della sola pagina non bastava, e non si erano provate le larghezze intermedie.
- Regole in [DESIGN.md](DESIGN.md), «Spazio dell'operatore (percorso 1)»; decisione nella mappa.
- Aperto: nella pagina «Al banco» la tessera fisica è indicata come «arriva con l'adesione». È un testo del prototipo, non una decisione: la tessera fisica dipende dalla ricerca e dal costo (§10.2, D8).

## Fatto (23 ottobre 2026, direzione)
- Ticket [Direzione del percorso 1](.scratch/design-percorso-1/issues/04-prototipo-direzione.md) rivendicato e chiuso con le skill `prototype` (ramo UI) e `grilling`. Domande una alla volta; ogni giro è stato mostrato come pagina privata, con il sorgente nella cartella temporanea della sessione (fuori dal repository) e un controllo nel browser prima della consegna.
  - *Primo giro:* tre direzioni con organizzazioni diverse (schede, pagina casa, elenco e dettaglio). Per l'utente erano funzionali ma non belle.
  - *Riferimenti dell'utente:* tre immagini di interfacce altrui, usate come atmosfera e non copiate.
  - *Secondo giro:* tre atmosfere («Luce calda», «Cielo», «Terracotta») sulla stessa organizzazione, con le case illustrate.
  - *Terzo giro:* le tre atmosfere riviste. Terracotta con tutti i pulsanti a pillola e lo scuro neutro; Cielo senza elementi giocosi; Luce calda con titoli più sobri.
  - Su richiesta dell'utente, un tasto per nascondere i comandi del prototipo sul telefono.
- **Decisioni dell'utente** (dettagli e alternative scartate nel ticket):
  - tre direzioni, poi tre atmosfere;
  - il **chiaro in vetrina** al posto dello scuro: è un cambio di un punto fermo del 23/10, portato come conflitto;
  - la **casa illustrata**, non fotografata, senza cambiare la specifica;
  - la direzione **«Terracotta»**.
- [DESIGN.md](DESIGN.md): nuova sezione «Direzione del percorso 1» con organizzazione, la casa in cima, illustrazione, colori chiaro e scuro, stati, caratteri, forme ed email. Aggiornati «Stato», «Identità» e «Tema»; la vetrina scura è segnata come cambiata, non cancellata.
- Verifiche eseguite:
  - Ogni giro è stato reso con il Chromium disponibile, in tutte le combinazioni (3 versioni × 6 schermate × chiaro e scuro, a 390 px e a 1366 px): nessuno scorrimento orizzontale e nessun errore nella pagina.
  - Contrasti dei colori di Terracotta misurati con la formula WCAG: tutti sopra 4,5:1. I valori sono in DESIGN.md.
  - Non è una revisione dell'accessibilità: quella ha il suo passaggio nella mappa.
- Mappa: la decisione è in «Decisioni finora». Le schermate per ruolo passano dal «Non ancora specificato» a quattro ticket: [Schermate dell'operatore di ƎE](.scratch/design-percorso-1/issues/09-schermate-operatore.md), [Schermate del proprietario](.scratch/design-percorso-1/issues/10-schermate-proprietario.md), [Schermate dell'inquilino](.scratch/design-percorso-1/issues/11-schermate-inquilino.md) e [Accesso, adesione e situazioni comuni](.scratch/design-percorso-1/issues/12-accesso-e-situazioni-comuni.md). «Il collaboratore di ƎE guarda lo spazio dell'operatore» ora aspetta anche le schermate dell'operatore.
- Problemi aperti:
  - Nel prototipo la facciata era un palazzo con i portici, ma la città delle case di ƎE non è registrata: lo stile si adatta, da verificare.
  - La licenza di Manrope e un set di icone con licenza libera vanno letti e scelti prima dell'uso nel prodotto.
  - Chi genera l'illustrazione di ogni casa, e come, è una domanda dell'architettura.
- Lavoro sul branch `claude/design-direzione-percorso-1`, creato da `main` perché la sessione non ne indicava uno.

## Fatto (23 ottobre 2026, cosa vede per primo)
- Ticket [Cosa vede per primo ciascuno e come parla il servizio](.scratch/design-percorso-1/issues/03-cosa-vede-per-primo.md) rivendicato e chiuso con le skill `grilling` e `domain-modeling`: dieci decisioni dell'utente, una alla volta, tutte sull'opzione raccomandata. Nel ticket, sotto «Commenti», ci sono le alternative scartate e i motivi.
  - *Proprietario:* per primo il mese in corso, con canone e consegna in due righe distinte; sopra, la cosa da fare. Con più case, un elenco con i due stati per casa, senza somme di importi.
  - *Inquilino:* per primo il prossimo pagamento; la scadenza passata è detta con calma, senza allarme. Le locazioni finite sono in sola lettura, un tocco più in là.
  - *Operatore:* il lavoro in coda in ordine fisso, dalle consegne in ritardo alle scadenze, con «Trova cliente o casa» sempre in alto.
  - *Due ruoli nella stessa persona:* un elenco «Le mie case» diviso per ruolo.
  - *Voce:* «Lei» a proprietari e inquilini, «tu» all'operatore, nessuno parla in prima persona; ogni fatto del denaro dice chi l'ha confermato.
  - *Tema:* segue il dispositivo; lo scuro, nero e grigi neutri, è la vetrina.
- Registrate in [DESIGN.md](DESIGN.md), nella nuova sezione «Punti fermi del percorso 1», con data e motivo. Riconfermata come vetrina la preferenza per il tema scuro.
- Nessun conflitto con la specifica (PRODUCT.md §10 invariato) e nessun termine nuovo nel glossario: «Le mie case» e «Locazioni passate» sono etichette, passeranno da `ux-writing`.
- Ipotesi da confermare con ƎE: al banco i clienti ricevono del «Lei»; se così non fosse, la scelta della voce si riapre.
- Mappa: la decisione è in «Decisioni finora». Nel ticket «Direzione del percorso 1» il tema non è più una proposta di ciascuna direzione: ognuna si disegna in chiaro e in scuro.
- Lavoro sul branch `claude/design-cosa-vede-per-primo`, creato da `main` perché la sessione non ne indicava uno.

## Fatto (23 ottobre 2026, design)
- Nuova mappa Wayfinder [Design del percorso 1](.scratch/design-percorso-1/map.md), con le skill `grilling` e `domain-modeling`, una domanda alla volta.
- **Destinazione** scelta dall'utente (opzione B): la direzione più il percorso intero, per proprietario, inquilino e operatore, su telefono e desktop, con testi, email, SMS e revisione dell'accessibilità. Scartate «solo la direzione» e «direzione e schermate principali».
- **Persone vere:** il collaboratore di ƎE guarda lo spazio dell'operatore prima del controllo B (opzione A), con dati inventati e poche domande precise; nessun proprietario o inquilino vero.
- Ticket della mappa (sei all'apertura, otto a fine sessione):
  - due ricerche chiuse;
  - «Cosa vede per primo ciascuno e come parla il servizio», libero;
  - «Direzione del percorso 1», prototipo con selettore, aspetta il ticket precedente;
  - «Il collaboratore di ƎE guarda lo spazio dell'operatore», aspetta la direzione;
  - «Prova su iPhone: la piattaforma aggiunta alla schermata Home», libero.

  Il resto è nel «Non ancora specificato»: schermate per ruolo, email e SMS, tessera digitale, ricevute stampate, testi, componenti, rifinitura, pacchetto per il controllo B. Fuori: vista 3D, prezzo e condizioni dell'adesione, tessere fisiche, bollette, percorsi 2–4, architettura, testi legali, logo nella casella.
- Ricerche chiuse da due agenti in parallelo (skill `research`):
  - [HIG per il web](docs/ricerca/hig-web.md): le HIG valgono come grammatica. Vetro solo sulle barre e con versione opaca; niente San Francisco incorporato né SF Symbols (licenza non leggibile). Dalla schermata Home la pagina deve offrire il suo «Indietro». Il tema segue il sistema: decisione aperta per l'utente.
  - [Forma di email e SMS](docs/ricerca/email-sms-forma.md): nelle email il fatto in testo vero, tema scuro come caso normale, niente pixel di tracciamento (linee guida del Garante dal 29/10/2026). Negli SMS solo l'alfabeto GSM-7, altrimenti si scende da 160 a 70 caratteri. L'alias del mittente si registra presso AGCOM e non riceve risposte. Il codice d'accesso ha l'ultima riga `@dominio #codice`.
- **Nome e simbolo, decisi e forniti dall'utente:**
  - **Connetto**, registrato in [PRODUCT.md](PRODUCT.md) §1 e §12 con il motivo: la connessione, il legame, con tutto ciò che riguarda la casa;
  - **C–Legame**, in [assets/marchio/](assets/marchio/README.md), due SVG con regole d'uso, registrato in [DESIGN.md](DESIGN.md) «Identità».

- **Ricerca preliminare sul nome**, chiesta dall'utente e svolta da un agente: [docs/ricerca/nome-connetto.md](docs/ricerca/nome-connetto.md).
  - Marchio: rosso. «Connetto» è già un marchio UE registrato fino al 2033, con «Software» in classe 9; ci sono anche «Connecto» per software e SaaS e la domanda «CONNETTA».
  - Domini: giallo. `.it` e `.com` sono di altri, `.app` e `.casa` liberi.
  - Altri che usano il nome: giallo. Nessuno nel settore casa.
  - Significato e alias SMS: verde.
- **Decisione dell'utente (opzione A):** Connetto resta nome di lavoro e il parere di un consulente in marchi si chiede subito, prima di email, SMS e scritta del nome e prima del controllo B. Registrata in PRODUCT.md §12; nuovo ticket «Parere di un consulente in marchi sul nome Connetto». Scartati: cambiare subito, accordo con il titolare.

## Fatto (23 ottobre 2026)
- Ticket [Controllo A e passaggio al design](.scratch/controllo-a/issues/13-controllo-a.md) rivendicato e chiuso con le skill `grilling` e `domain-modeling`, una voce alla volta, ciascuna con decisione, sostegno, mancanze e raccomandazione; conferme dell'utente annotate nel ticket.
- Voce 1: primo cliente invariato; **promessa del percorso 1 scritta in una frase** per proprietario e inquilino. Voce 2: specifica di §10 confermata così com'è. Voce 4: operatore di ƎE dentro le 1–1,5 ore al giorno. Voce 5: il denaro non passa dalla piattaforma; adesione e pratiche si pagano a ƎE fuori dalla piattaforma.
- Voce 3, con due cambi: lista unica di cosa resta fuori in §12; **notifiche sul telefono fuori dal percorso 1** (email, o SMS per chi non ha l'email; si riconsiderano con l'app iPhone). Precisate in §12 «Canale principale» e «Cosa resta fuori» (19/10), segnate e non cancellate.
- Proposta dell'utente accolta: **vista 3D indicativa** della casa dalla planimetria nella prima versione, come prova a condizione (§12, 23/10; §5.5; §10.10): solo planimetrie leggibili, messaggio per quelle di bassa qualità, scritta «indicativa, non è una misura», visibile a proprietario e operatore, ipotesi di modifica fuori. Ticket nuovi [Ricerca: dalla planimetria catastale alla vista 3D indicativa](.scratch/controllo-a/issues/14-ricerca-vista-3d.md) e [Prova: vista 3D da una planimetria](.scratch/controllo-a/issues/15-prova-vista-3d.md), prima dell'architettura. Prima lettura (non una ricerca): esistono studi sul riconoscimento delle piante, non sulle planimetrie catastali italiane.
- [GLOSSARY.md](GLOSSARY.md): nuovo termine «vista 3D indicativa». Mappa chiusa, con la sezione «Dopo la destinazione» per i ticket aperti. [docs/STUDIO.md](docs/STUDIO.md): destinazione raggiunta, T5 e T7 aggiornate.

## Fatto (22 ottobre 2026, seconda sessione)
- Ticket «Specifica del percorso 1» rivendicato e chiuso con le skill `grilling` e `domain-modeling` (`ux-strategy` per le misure): ventinove decisioni dell'utente, una alla volta, nel ticket sotto «Commenti», ciascuna con alternative scartate e motivo. Partenza dai due contrasti parziali: l'attivazione la fa l'operatore di ƎE dentro le 1–1,5 ore al giorno, le case entrano un po' alla volta e si misura il tempo; le case con bonifico al proprietario entrano con un percorso più corto, confermato dal proprietario.
- Specifica scritta in [PRODUCT.md](PRODUCT.md) §10 (chi fa cosa, attivazione, canone del mese, importo e scadenze, messaggi, casi limite, cosa vede ciascuno, fine dei rapporti, prove, cosa resta da fare) e confermata nell'insieme. In §12 quattro righe del 22/10; precisate «Chi è nel pilota» e «Fascicolo all'attivazione», cambiata in parte «Cosa resta fuori dalla prima versione» (gli SMS entrano, solo per chi non ha l'email). In §13 le misure: principale «i proprietari sanno del canone senza chiedere all'agenzia», con le telefonate contate da ƎE già prima del pilota; nessun valore inventato, obiettivi dopo i primi dati.
- Proposte dell'utente accolte: accesso anche con il cellulare (codice e messaggi via SMS); ISTAT semi-automatico con controllo e approvazione; tasto «Chiama» accanto a canone e consegna, con la chiamata registrata come avviata e l'esito scritto dall'operatore; prove di funzionamento solo dell'utente, con sub-agenti e dati inventati, e numeri delle misure visti solo da lui.
- Richieste dell'utente annotate per dopo: ticket nuovo [Ricerca: tessere fisiche, fornitori, personalizzazione, ordini e spedizioni](.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md); IMU, TARI e impianti nello scadenzario più avanti e adesione a pagamento per l'ex inquilino con un periodo gratuito (mappa, «Fuori ambito»; PRODUCT.md §5.6).
- [GLOSSARY.md](GLOSSARY.md): nuovi attivazione, incarico di gestione, canone del mese, consegna, contestazione; incasso verificato passa da PRODUCT.md §8 al glossario con il significato deciso (conferma di chi ha ricevuto il denaro).
- Mappa: la specifica in «Decisioni finora»; «Controllo A e passaggio al design» passa dal «Non ancora specificato» al [ticket](.scratch/controllo-a/issues/13-controllo-a.md). Aggiornato [Prezzo e condizioni dell'adesione](.scratch/controllo-a/issues/10-prezzo-condizioni-adesione.md) con i punti della specifica che lo toccano.
- Stima dell'utente: circa 100–200 case gestite (non un dato di ƎE); i numeri sui tipi di contratto non servono.

## Fatto (22 ottobre 2026)
- Ticket «Materiali per i colloqui» rivendicato, poi chiuso fuori ambito senza materiali preparati: alla prima domanda (quanti colloqui per gruppo) l'utente ha deciso di non fare né i colloqui né la pre-adesione e di passare al design dopo la specifica e il controllo A. Decisione in [PRODUCT.md](PRODUCT.md) §12 con il motivo; segnate come sostituite, non cancellate, «Evidenze con persone vere» (18/10), «Destinazione dello studio» e «Pre-adesione in un secondo momento» (19/10). In §13 una frase: le prime evidenze con le persone arrivano dal pilota.
- Mappa ridisegnata: nuova destinazione e titolo «Dalla specifica del percorso 1 al design»; in «Fuori ambito» i materiali per i colloqui, lo svolgimento e le sintesi, la conferma delle decisioni con le sintesi, l'esito della pre-adesione e, su scelta dell'utente, la decisione sul secondo gruppo (fascicolo per la vendita), rinviata a dopo il pilota. In «Non ancora specificato» resta solo «Controllo A e passaggio al design».
- «Proposta di pre-adesione» diventa [Prezzo e condizioni dell'adesione](.scratch/controllo-a/issues/10-prezzo-condizioni-adesione.md): prezzo, periodicità, cosa include e trattenuta dal canone, decisi dall'utente prima del pilota; non blocca nulla. «Prova sulle bollette»: tolta la parte sui colloqui, non blocca il design del percorso 1. Dalla Specifica tolto il blocco dei colloqui.
- [docs/STUDIO.md](docs/STUDIO.md): nuova destinazione e tre criteri di arrivo (ricerche chiuse, specifica, controllo A); le domande «Persone» si misurano nel pilota. [docs/METODO.md](docs/METODO.md): il passo 4 si salta in EECard3; l'ordine resta specifica, controllo A, design, architettura, controllo B, codice.

## Fatto (21 ottobre 2026)
- Ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md) chiuso con le risposte alle 29 domande, arrivate in un PDF mandato dall'utente; la pagina «Domande per ƎE» era vuota e non è stata toccata. Risposte registrate in forma aggregata, con i numeri delle domande; il PDF non è nel repository. Senza risposta le domande 8, 9, 10, 13, 21 e 23 e parti di altre.
- In sintesi: il servizio da 600 € di ƎE (in media, IVA esclusa, fatturato ogni anno) comprende gestione con incasso, pratiche, assistenza e consulenza; per decisione dell'utente non fa parte del prodotto e serve a capire come lavora oggi l'agenzia (PRODUCT.md §12). Incarico di gestione non scritto; informativa e registro dei trattamenti sì, consulente per la privacy no; meno di 3 persone in agenzia e 1–1,5 ore al giorno confermate; canone consegnato ogni mese con ricevuta firmata dal proprietario; quarto mestiere dei tecnici: caldaie e climatizzazione.
- Controllati i punti «Da controllare»: nessuna decisione di [PRODUCT.md](PRODUCT.md) §12 smentita del tutto. Due contrasti parziali segnalati nella [Specifica del percorso 1](.scratch/controllo-a/issues/09-specifica-percorso-1.md): la «segreteria di ƎE» con meno di 3 persone; bonifici al proprietario, contro «Chi è nel pilota», da misurare. Un terzo, sulla consulenza già compresa nel servizio da 600 €, è stato tolto dopo il chiarimento dell'utente.
- Ricontrollati i punti delle domande 5 e 6 del ticket «Chi fornisce la piattaforma e chi vende l'adesione nel pilota»: le decisioni del 20/10 reggono; si aggiungono l'incarico di gestione e incasso scritto e l'aggiornamento di informativa e registro; serve un parere prima del pilota (legale, privacy con un professionista esterno, servizi di pagamento). Esito nella Specifica.
- Sei chiarimenti per ƎE, pronti da copiare, nel ticket sotto «Commenti»: compenso trattenuto o no, incarico, canoni per mezzo di pagamento e consegna, numeri ed email, proprietari in agenzia, chi fa le ore del pilota.
- Fatti utili annotati nei ticket aperti: Specifica del percorso 1, Materiali per i colloqui, Proposta di pre-adesione. In PRODUCT.md aggiornate le due righe rimaste in attesa (§5.4 quarto mestiere, §6 servizio da 600 €) e registrata in §12 la decisione dell'utente sul servizio da 600 €.

## Fatto (20 ottobre 2026)
- Ticket [Chi fornisce la piattaforma e chi vende l'adesione nel pilota](.scratch/controllo-a/issues/11-chi-fornisce-la-piattaforma.md) chiuso con le skill `grilling` e `domain-modeling`, una domanda alla volta. Decisioni dell'utente in [PRODUCT.md](PRODUCT.md) §12 (20/10/2026): nel pilota la piattaforma è di ƎE, che risponde di tutti i dati con un'informativa sola; società distinta solo con la seconda agenzia; ƎE vende l'adesione del proprietario con un foglio separato dall'incarico di gestione; l'inquilino ha un'adesione gratuita con tessera, che comprende lo spazio delle bollette, servizio di ƎE che l'agenzia non guarda.
- «Adesione» passa da PRODUCT.md §8 al [GLOSSARY.md](GLOSSARY.md): a pagamento per il proprietario, gratuita per l'inquilino.
- Aggiornati i ticket della specifica del percorso 1 (documenti all'attivazione, ruoli, due casi limite), della pre-adesione (propone e incassa ƎE) e dei materiali per i colloqui (titolare ƎE; fiducia degli inquilini nello spazio delle bollette).
- Le risposte di ƎE alle domande 5 e 6 (incarico scritto, privacy) non c'erano: cosa ricontrollare quando arrivano è nel ticket chiuso, sotto «Da ricontrollare».
- Su richiesta dell'utente, pagina interattiva «Domande per ƎE» per far rispondere il collaboratore dal telefono: le 29 domande dell'elenco, salvataggio automatico, tasto «Copia le risposte» come alternativa. Le risposte si leggono solo da chi può compilare la pagina, non da chi la guarda soltanto. Il sorgente non è nel repository: è uno strumento per raccogliere le risposte, non codice del prodotto.

## Fatto (19 ottobre 2026)
- Mappa Wayfinder (tracker Local Markdown, solo nel repository): destinazione, note, decisioni finora, «Non ancora specificato» e «Fuori ambito» con ciò che PRODUCT.md §12 esclude dalla prima versione. Undici ticket, collegati con i loro blocchi.
- Decisioni dell'utente sull'impianto: proposta di pre-adesione dopo i colloqui e la specifica; prova sulle bollette con bollette reali di volontari, con limiti (entrambe in PRODUCT.md §12); ticket aggiunto «Fatti dall'agenzia ƎE»; pareri professionali fuori dalla mappa salvo blocchi del percorso 1.
- Ricerche chiuse, svolte da cinque agenti in parallelo con la skill `research`, ciascuna con fonti, date e pareri da chiedere: [incasso dei canoni al banco](docs/ricerca/incasso-canoni.md), [adempimenti della locazione](docs/ricerca/adempimenti-locazione.md), [titolarità e privacy dei dati](docs/ricerca/privacy-dati.md), [alternative sul mercato](docs/ricerca/mercato.md), [email di servizio](docs/ricerca/email.md). Il succo di ciascuna è nella mappa; le decisioni che hanno fatto emergere sono nei ticket aperti, non prese.
- Ticket nuovo emerso dalla ricerca sulla privacy: «Chi fornisce la piattaforma e chi vende l'adesione nel pilota», da cui dipendono i ruoli sui dati; blocca la specifica e la proposta.
- Elenco di 29 domande per ƎE, in sei temi, con caselle e numeri e il ticket a cui serve ciascuna, nel ticket «Fatti dall'agenzia ƎE» sotto «Commenti»: pronto da copiare per il collaboratore dell'utente. Decisioni dell'utente: tolte le domande su marca da bollo, contanti da 5.000 € in su e custodia del denaro (potrebbero mettere per iscritto una pratica non in regola; servono al parere prima del pilota, non alla specifica); fasce d'età dei proprietari e lingue degli inquilini chieste in forma aggregata.
- Regola nuova in [AGENTS.md](AGENTS.md), chiesta dall'utente: le domande all'utente si fanno in parole semplici, spiegando cosa comporta ogni opzione.

## Verificato
- 23/10/2026, design: impronte `sha256sum` dei due SVG uguali a quelle indicate dall'utente. Anteprima usa e getta del simbolo a 128, 48, 32, 24 e 16 px, su fondo chiaro e scuro, aperta in Chromium headless e guardata come immagine; fuori dal repository. Le affermazioni delle tre ricerche non sono state ricontrollate una per una sulle fonti; il marchio UE «Connetto» non si è potuto riaprire da qui (TMview risponde «Forbidden» all'ambiente).
- `python3 tools/check_setup.py` e link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, STUDIO.md, mappa e ticket: vedi «Ultima verifica» (23/10/2026).
- `python3 tools/check_setup.py`: integrità OK (22/10/2026, sera). Link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, STUDIO.md, METODO.md, mappa e ticket: nessuno rotto. Frontiera calcolata dai file dei ticket: liberi «Prova sulle bollette», «Prezzo e condizioni dell'adesione», «Ricerca: tessere fisiche» e «Controllo A e passaggio al design».
- `python3 tools/check_setup.py`: integrità OK (22/10/2026).
- Link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, STUDIO.md, METODO.md, mappa e ticket: nessuno rotto dopo il cambio di nome del ticket 10 (22/10/2026). Frontiera calcolata dai file dei ticket: liberi «Prova sulle bollette», «Specifica del percorso 1» e «Prezzo e condizioni dell'adesione».
- Risposte di ƎE (21/10/2026): testo estratto dal PDF (4 pagine, solo testo, nessuna immagine) e confrontato domanda per domanda con l'elenco; nessun nome, indirizzo o importo individuale nel repository.
- Pagina «Domande per ƎE» (20/10/2026): sintassi dello script controllata; aperta in Chromium a larghezza di telefono, senza errori né scorrimento laterale; avanzamento, scelta tolta al secondo tocco e testo da copiare provati una volta. Dopo la pubblicazione, un documento di prova nel suo database: invisibile a chi può solo guardare, visibile a chi può compilare; poi cancellato. Non provati: l'invito del collaboratore e il salvataggio dal suo account.
- Link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, mappa e ticket: nessuno rotto (21/10/2026). Frontiera calcolata dai file dei ticket: liberi «Materiali per i colloqui» e «Prova sulle bollette».
- Due affermazioni delle ricerche controllate sulla fonte (19/10/2026): DMARC è RFC 9989 (maggio 2026); la consultazione EDPB sulle linee guida 02/2026 esiste.
- Non verificato: l'abrogazione dell'obbligo di pagare i canoni senza contanti (L. 208/2015) è riportata da Normattiva secondo la ricerca, ma Normattiva e Gazzetta Ufficiale non rispondevano al controllo; il comma viene da fonte secondaria.
- Non applicabili: build, test, revisione OCR e verifiche dell'interfaccia (non c'è codice).

## Problemi aperti
- **Dalla specifica (22/10/2026), prima del pilota:** pareri su testo dell'incarico, della ricevuta e della comunicazione del luogo del pagamento, durate di accesso dell'ex inquilino (5 anni) e dello spazio delle bollette, numero del proprietario mostrato all'inquilino, frazionamento dei contanti; valori che fissa ƎE (anticipo dei promemoria, giorni prima di avvisare il proprietario); approvazione da parte di ƎE della tabella «chi vede cosa»; conteggio delle telefonate sul canone da avviare alcune settimane prima del pilota. Elenco in PRODUCT.md §10.10.
- **Si attendono i sei chiarimenti di ƎE** (ticket «Fatti dall'agenzia ƎE», sotto «Commenti»). Non bloccano ticket; possono riaprire una decisione della specifica (bonifici al proprietario, se sono la maggioranza) e servono a «Prezzo e condizioni dell'adesione».
- Normattiva ed EUR-Lex hanno rifiutato molte connessioni: alcune norme sono state lette da fonti secondarie o solo in parte; l'elenco è in fondo a ogni ricerca.
- Dal 1/1/2027 registro, cedolare secca, IVA e termini fiscali passano a nuovi testi unici: le ricerche su adempimenti, incasso e privacy vanno riverificate a gennaio 2027.
- Pareri professionali segnalati (legale, fiscale, privacy, servizi di pagamento, antiriciclaggio): fuori dalla mappa, prima del pilota; senza colloqui (22/10) cade il parere sull'informativa dei colloqui. Dal 20/10 se ne aggiunge uno su ruoli e documenti del pilota: condizioni delle due adesioni, contratto sui dati con chi costruisce la piattaforma, accordo su marchio e software fra fondatori e ƎE. Dal 21/10: l'incarico di gestione e incasso oggi non è scritto e va scritto; ƎE non ha un consulente per la privacy, quindi informativa e registro si aggiornano con un professionista esterno. Dal 23/10: chi è il mittente degli SMS e il suo alias nel Registro AGCOM; deposito di nome e simbolo. Il parere sul nome Connetto si chiede subito (ticket della mappa del design).

## Da chiarire con l'utente
Le domande aperte sono nei ticket della mappa; prezzo, periodicità e trattenuta della quota dal canone in «Prezzo e condizioni dell'adesione». I fatti che conosce solo l'agenzia sono nel ticket «Fatti dall'agenzia ƎE»; i dubbi rimasti sono nei sei chiarimenti da mandare al collaboratore.

## Prossimo passo
1. **«Direzione del percorso 1»** nella mappa del design: messaggio in [START_HERE.md](START_HERE.md). Prototipo usa e getta con le direzioni dietro un selettore, da aprire su telefono e desktop, dentro i punti fermi di DESIGN.md.
2. **L'utente porta a un consulente in marchi** [docs/ricerca/nome-connetto.md](docs/ricerca/nome-connetto.md), con le domande già pronte, e riporta l'esito (ticket «Parere di un consulente in marchi sul nome Connetto»). Serve prima del design di email, SMS e scritta del nome.
3. Quando l'utente vuole: «Prova su iPhone: la piattaforma aggiunta alla schermata Home», con una pagina di prova da aprire sul suo telefono.
4. L'utente manda al collaboratore i sei «Chiarimenti per ƎE» (ticket [Fatti dall'agenzia ƎE](.scratch/controllo-a/issues/06-fatti-agenzia.md), sotto «Commenti»). Si può aggiungere una domanda: ai clienti al banco si dà del «Lei»?
5. Prima dell'architettura: [ricerca](.scratch/controllo-a/issues/14-ricerca-vista-3d.md) e [prova](.scratch/controllo-a/issues/15-prova-vista-3d.md) sulla vista 3D indicativa. Prima del pilota, quando l'utente vuole: [Prezzo e condizioni dell'adesione](.scratch/controllo-a/issues/10-prezzo-condizioni-adesione.md), [Ricerca: tessere fisiche](.scratch/controllo-a/issues/12-ricerca-tessere-fisiche.md), «Prova sulle bollette».

Messaggi per le prossime sessioni in [START_HERE.md](START_HERE.md).

## Ultima verifica
23/10/2026, notte: `python3 tools/check_setup.py` dà integrità OK. Link locali di PRODUCT.md, GLOSSARY.md, STATUS.md, START_HERE.md, DESIGN.md e della mappa del design con i suoi ticket: nessuno rotto. Frontiera calcolata dai file dei ticket: liberi «Direzione del percorso 1», «Prova su iPhone» e «Parere di un consulente in marchi sul nome Connetto» (compito per l'utente); «Il collaboratore di ƎE guarda lo spazio dell'operatore» aspetta la direzione. Non applicabili: build, test, revisione OCR, verifiche dell'interfaccia (non c'è codice né schermata). Programmi facoltativi assenti nell'ambiente cloud: `ocr`, `playwright-cli`; Chromium c'è.
