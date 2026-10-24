# Rifinitura estetica delle schermate interne

Type: prototype
Status: claimed
Blocked by: 12
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come si rendono più belle le schermate interne di proprietario e inquilino, senza cambiarne funzioni e contenuti, così che stiano all'altezza della pagina d'accesso? Si parte dalla casa dell'inquilino e da quella del proprietario, su telefono e desktop; poi le altre schermate, l'operatore compreso, se l'utente lo chiede.

Diagnosi dell'agente, accolta dall'utente il 23/10/2026 nel ticket [Accesso, adesione e situazioni comuni](12-accesso-e-situazioni-comuni.md). Le funzioni convincono, l'estetica meno, per quattro motivi:
- troppi riquadri con bordo e ombra dello stesso peso;
- l'illustrazione della casa è piatta e un po' infantile accanto alla tessera di rame;
- quasi tutto è in grassetto pieno, con testo secondario piccolo e grigio;
- le stesse icone in cerchi arancio chiaro sono ripetute in ogni riga.

Direzione da provare: portare dentro la luce della pagina d'accesso. Fondo caldo con ombre morbide di finestra, casa disegnata meglio e illuminata dalla stessa luce, meno riquadri (uno principale, poi elenchi puliti), caratteri più leggeri, il rame come accento. Restano i punti fermi, il chiaro in vetrina, lo scuro curato allo stesso modo e i contrasti AA. Un cambio delle regole già approvate (per esempio «La casa in cima» o lo stile dell'illustrazione) si porta all'utente come scelta e si registra in [DESIGN.md](../../../DESIGN.md) come cambiato, non cancellato.

Prototipo usa e getta (skill `prototype`, ramo UI) con varianti dietro un selettore, prima e dopo, solo dati inventati, controllato nel browser a 360, 390, 768, 900, 1024, 1180 e 1366 px. Utili anche `emil-design-eng` e `apple-design`. Le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata.

## Commenti (Comments)

**23/10/2026, rivendicato e prime domande** (skill `prototype` ramo UI, `grilling`, `emil-design-eng`, `apple-design`). Letti i prototipi pubblicati di accesso, inquilino e proprietario con lo strumento Artifact; le immagini della stanza e della tessera sono state scaricate dal prototipo dell'accesso nella cartella temporanea della sessione. Fotografate nel browser le case attuali dell'inquilino e del proprietario a 390 e 1366 px: sono il «prima».
- *In cima alla casa:* **la casa ridisegnata** (consigliato). Resta la facciata, disegnata meglio: intonaco dai colori sobri, volumi, e sopra le stesse ombre di foglie e finestra della pagina d'accesso. Ogni casa resta riconoscibile, cosa che conta per chi ne ha più d'una, e la regola «La casa in cima» non cambia. Scartate «la stanza dell'accesso in cima, con la casa in miniatura» (tutte le case sembrerebbero uguali e cambierebbe la regola) e «tutte e due come varianti».

**23/10/2026, rivendicato e prima domanda** (skill `prototype` ramo UI, `grilling`, `emil-design-eng`, `apple-design`). Letti con lo strumento Artifact i prototipi pubblicati di accesso, inquilino e proprietario; le immagini della stanza e della tessera sono state scaricate dal prototipo dell'accesso nella cartella temporanea della sessione. Fotografate nel browser le case attuali di inquilino e proprietario a 390 e 1366 px: sono il «prima».
- *In cima alla casa:* l'agente ha consigliato la **casa ridisegnata** (la facciata resta, disegnata meglio e sotto le stesse ombre di foglie e finestra della pagina d'accesso; la regola «La casa in cima» non cambia). L'alternativa è **la stanza dell'accesso in cima**, con la casa in miniatura: più continuità con l'accesso, ma le case si somigliano e cambia la regola. L'utente ha scelto prima la consigliata, poi ha cambiato idea: **provare tutte e due** come varianti del «dopo» e decidere guardandole.

**23/10/2026, primo giro mostrato** (pagina privata https://claude.ai/artifact/9CQ4BtLZxYXJRBKiEfpZGj, versione 1; sorgente nella cartella temporanea della sessione, fuori dal repository). Due schermate, la casa dell'inquilino e quella del proprietario, ciascuna in tre versioni dietro un selettore (anche con le frecce ← →): «Prima» (le case approvate, rifatte uguali, con le cinque schede), «Dopo · casa ridisegnata» e «Dopo · stanza in cima». Funzioni e testi non cambiano. Nei due «dopo»:
- *Luce dell'accesso:* sul computer il pannello è un foglio caldo un po' trasparente sopra la stanza dell'accesso; sul telefono la stanza illumina la cima della pagina.
- *Casa ridisegnata:* facciata con intonaco sobrio, tetto, cornicione, finestre con spessore, persiane a doghe, portico con profondità; di giorno ci cadono sopra le ombre di foglie ricavate dalla stanza dell'accesso, di notte alcune finestre sono accese. Ogni casa resta diversa.
- *Stanza in cima:* il fatto del mese è scritto direttamente sulla stanza; la casa è una miniatura tonda accanto all'indirizzo.
- *Meno riquadri:* resta solo la foto (o la stanza); il resto sono elenchi puliti con un titolo e righe sottili.
- *Caratteri più leggeri:* titoli e importi in peso medio, testo secondario più grande.
- *Icone senza cerchi:* una piccola icona a tratto solo nelle righe che portano altrove.
- *Rame come accento:* l'occhiello sopra il titolo e, nella barra laterale, la tessera di rame in piccolo con il codice.
- Verifiche: Chromium a 360, 390, 768, 900, 1024, 1180 e 1366 px, in chiaro e in scuro, con le due schermate e le tre versioni: 84 combinazioni, ciascuna con la pagina ricaricata e la verifica della schermata aperta. Nessun pulsante fuori dal suo riquadro, nessuno scorrimento orizzontale, nessun errore. Il controllo ha trovato e fatto correggere un difetto (righe toccabili 12 px oltre il loro elenco). Provato su copie rotte apposta: trova i pulsanti fuori riquadro, lo scorrimento laterale e la schermata sbagliata.
- Contrasti misurati con la formula WCAG: tutti sopra 4,5:1. Il rame dell'occhiello sulle ombre più scure della stanza era a 3,8:1; nella variante «stanza» è stato scurito (5,3:1).

**24/10/2026, riscontro sul primo giro e secondo giro** (stessa pagina privata, versione 2). L'utente trova la casa ridisegnata «veramente carina e bella», ma:
- *troppe cose che possono distrarre* chi ha poca familiarità con il computer;
- *il chiaro è più scuro* di prima, che era molto più bianco;
- del «prima» gli piaceva la **scheda**: la foto della casa dentro un riquadro con tutti i dettagli del canone (com'è formato, cosa pagare). Nei «dopo» i dettagli finiscono in disparte e conta troppo l'estetica.

Chiede di provare una via di mezzo fra la casa ridisegnata e il «prima», prima della decisione finale. La «stanza in cima» non l'ha commentata; resta nel selettore per il confronto.

Nuova versione **«Via di mezzo»**, aperta per prima:
- *Bianco come prima:* pannello e scheda bianchi. La stanza dell'accesso resta solo sul fondo fuori dal pannello, sul computer, coperta da un velo chiaro. Sul telefono se ne vede appena la luce in cima.
- *Una sola scheda in cima* con la casa ridisegnata e tutti i dettagli: per l'inquilino importo, canone, oneri, totale e dove pagare; per il proprietario il fatto del mese, «Ricevuto», canone e consegna con stato e importo, il contratto. Sul computer la foto sta a sinistra, alta quanto i dettagli.
- *Meno distrazioni:* ombre delle foglie a metà intensità, niente vetro sul pannello.
- *Sotto la scheda,* come nei «dopo»: elenchi puliti, icone senza cerchi, caratteri più leggeri.

Verifiche: 112 combinazioni (7 larghezze, 2 schermate, 4 versioni, chiaro e scuro), con la pagina ricaricata e la schermata verificata ogni volta. Nessun pulsante fuori dal riquadro, nessuno scorrimento orizzontale, nessun errore.
