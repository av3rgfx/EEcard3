# Accesso, adesione e situazioni comuni

Type: prototype
Status: claimed
Blocked by: 04
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Come sono, nella direzione scelta, i passaggi uguali per tutti ([PRODUCT.md](../../../PRODUCT.md) §10.2 e §10.8)?
- L'accesso con l'email o con un codice via SMS ([ricerca HIG](../../../docs/ricerca/hig-web.md) §9 e §16, punto 7).
- L'adesione e l'informativa, con il posto per prezzo e condizioni senza fissarne i valori.
- La fine dei rapporti: fine della locazione, la casa che esce dalla gestione, il proprietario che disdice l'adesione.
- Gli stati vuoti, il caricamento, gli errori e il recupero.
- Il comportamento sul telefono come pagina aggiunta alla schermata Home, con il suo «Indietro» (si collega al ticket [Prova su iPhone](06-prova-iphone-schermata-home.md)).

Prototipo usa e getta (skill `prototype`, ramo UI) nella direzione «Terracotta» ([DESIGN.md](../../../DESIGN.md), «Direzione del percorso 1»), su telefono e desktop, in chiaro e in scuro con il chiaro per primo. Solo dati inventati, importi come «9.876,54 €», parole del [glossario](../../../GLOSSARY.md); si mostra all'utente come pagina privata e non entra nel repository. Le scelte all'utente una alla volta, in parole semplici, con una raccomandazione motivata. Quello che si decide va in DESIGN.md come regole, con data e motivo; un problema con la specifica (PRODUCT.md §10) o con i punti fermi si porta all'utente come conflitto. Testi definitivi, rifinitura, dati limite e accessibilità vengono dopo, nei loro ticket.

## Commenti (Comments)

**23/10/2026, domande prima di costruire** (skill `grilling`, una alla volta):
- *Accesso:* **un codice per tutti** (consigliato). Un solo campo «email o numero di cellulare», poi un codice di 6 cifre via email o via SMS; niente password. *Motivo:* niente da ricordare, un solo schema da spiegare al banco; il link nell'email rischia di aprirsi nel browser invece che nell'app sulla schermata Home (da verificare nella [Prova su iPhone](06-prova-iphone-schermata-home.md)). Scartati «email con password» (due schemi, password da recuperare) e «link nell'email».
- *Primo accesso:* **subito la casa** (consigliato), con in cima una sola carta di benvenuto che si chiude e non torna: tessera digitale, informativa, come mettere Connetto sulla schermata Home. Tutto resta nel Profilo. *Motivo:* adesione e informativa si firmano e si ricevono al banco (§10.2), online non c'è nulla da firmare; i punti fermi mettono per prima la casa e le HIG sconsigliano gli avvisi all'avvio. Scartata la presentazione a passi.
- *Disdetta dell'adesione:* consigliata all'inizio una richiesta a ƎE, che la conferma. L'utente obietta che così sembra rendere difficile la disdetta e ricorda le nuove regole sulla disdetta semplice; propone una **disdetta in autonomia, immediata ma ben progettata**: avviso e riepilogo di cosa comporta, doppia conferma, verifica via email o SMS, due scelte («disdire subito» con rimborso del periodo non usato, oppure fermare il rinnovo).
  - Verifica dell'agente (lettura non primaria, 23/10/2026): esiste la «funzione di recesso» della direttiva (UE) 2023/2673, recepita con il D.Lgs. 209/2025 (art. 54-bis del Codice del consumo), dal 19/6/2026: pulsante facile da trovare, pochi dati, conferma con un secondo tocco, ricevuta su supporto durevole. Riguarda i contratti conclusi online con diritto di recesso; l'adesione si firma al banco, quindi forse non si applica in senso stretto: serve il parere legale. Fonti lette: [iubenda](https://www.iubenda.com/it/blog/funzione-di-recesso-online-direttiva-2023-2673/), [Panorama](https://www.panorama.it/tempo-libero/tecnologia/diritto-di-recesso-online-arriva-il-pulsante-obbligatorio-che-semplifica-la-vita-dei-consumatori); EUR-Lex non ha restituito il testo.
  - Decisione dell'utente: **la sua idea con due ritocchi dell'agente** (consigliata). Niente codice di verifica in più (la persona è già entrata con un codice e la norma chiede di non mettere ostacoli): la ricevuta arriva subito via email o SMS con «Non sei stato tu? Chiama ƎE». «Non rinnovare» è la prima scelta, annullabile fino alla scadenza con «Riattiva il rinnovo»; «Chiudi subito» con rimborso compare solo se le condizioni dell'adesione lo prevedono. Rimborso e periodicità (mensile o annuale) si decidono in [Prezzo e condizioni dell'adesione](../../controllo-a/issues/10-prezzo-condizioni-adesione.md): nel prototipo sono segnaposto. Scartati il codice in più e la richiesta a ƎE.

**23/10/2026, primo giro mostrato** (pagina privata https://claude.ai/artifact/3LkcGCmp2P4SNpVAFbP92s, sorgente nella cartella temporanea della sessione, costruito sul prototipo dell'inquilino). Controllato nel Chromium disponibile a 360, 390, 768, 900, 1024, 1180 e 1366 px, con tutte le varianti e le due scelte della disdetta, in chiaro e in scuro: 406 combinazioni, ognuna con la pagina ricaricata e la verifica della schermata aperta. Nessun pulsante, importo o titolo fuori dal suo riquadro, nessuno scorrimento orizzontale, nessun errore. Il controllo è stato provato su una copia rotta apposta, dove ha trovato i difetti e le schermate sbagliate. Guardando le immagini sono stati corretti due difetti: il codice della tessera prendeva lo stile del campo del codice di verifica, e la «x» del benvenuto sembrava un divieto. Nove schermate in «Terracotta»:
1. accesso con un codice: email o cellulare, codice via email, codice via SMS, codice sbagliato, «Il codice non arriva?» con quattro rimedi in ordine;
2. primo accesso, inquilino e proprietaria: la casa con la carta di benvenuto;
3. invito ad aderire, proprietario e inquilino: cosa comprende, il posto per prezzo e condizioni, come aderire al banco;
4. profilo con tessera, come entri, adesione e «Disdici l'adesione»; la guida per la schermata Home;
5. disdetta: scegli, controlla, fatta; la casa durante il periodo senza rinnovo; cosa vede dopo la fine; la variante dell'inquilino;
6. fine della locazione per il proprietario: residuo e contestazione aperti, storico con le sole iniziali dell'ex inquilino;
7. la casa esce dalla gestione: sola lettura, adesione fino alla fine del periodo pagato, «Scarica tutto»;
8. caricamento, vuoto, senza rete, errore, link scaduto, accesso scaduto;
9. la stessa pagina nel browser e dalla schermata Home, con l'Indietro della pagina sempre presente.

Scelte ragionevoli dell'agente, da cambiare se l'utente lo chiede:
- dopo il codice si dice «se questa email è registrata»: non si rivela chi è iscritto;
- i dati di accesso si cambiano al banco o chiamando ƎE, perché sono verificati al banco (§10.2);
- l'accesso dura 30 giorni, poi serve un codice nuovo e si torna alla pagina di prima;
- i link dei messaggi scadono e portano all'accesso;
- senza rete si vedono i dati in memoria, con l'ora;
- l'adesione dell'inquilino si disdice con un solo passaggio: è gratuita, senza rinnovo né rimborso. Che canone, ricevute e contratto restino anche senza adesione è un'ipotesi da confermare: discende da §7, l'accesso legato al rapporto con la casa;
- «Conferma la disdetta» ha lo stile del pulsante principale. È un'eccezione voluta all'indicazione HIG di non dare quello stile alle azioni distruttive: la persona l'ha scelta deliberatamente e un pulsante sbiadito renderebbe la disdetta più difficile.
