# Ricerca: licenze di icone, carattere e immagini

Type: research
Status: resolved
Blocked by:
Mappa: [Design del percorso 1](../map.md)

## Domanda (Question)

Prima di registrare i componenti e token in [DESIGN.md](../../../DESIGN.md) («Componenti e token») servono tre fatti letti sulle fonti ufficiali. Il ticket nasce dal «Non ancora specificato» della mappa («Componenti e token»), su richiesta dell'utente del 26/10/2026.

1. **Carattere Manrope** («Direzione del percorso 1», «Caratteri»): che licenza ha e cosa permette per l'uso nel prodotto (pagine web, app iPhone dopo), nelle email (incorporato o collegato) e incorporato in file (PDF delle ricevute, immagini). Obblighi: attribuzione, testo della licenza, nome riservato, modifiche, vendita.
2. **Icone a tratto** («Direzione del percorso 1», «Forme»: icone a tratto, senza cerchi, solo nelle righe che portano altrove; quelle del prototipo sono disegnate a mano): due o tre set con licenza libera, adatti a quel disegno, con licenza, condizioni (attribuzione, modifiche, uso commerciale, marchi), numero di icone, spessore e estremità del tratto regolabili, presenza delle icone che il percorso usa (casa, ricevuta, tessera, documento, persona, telefono, copia, orologio, spunta, fumetto, freccia, carica, scarica, cerca).
3. **Immagini generate dall'utente con ChatGPT** («Accesso, tessera e situazioni comuni (percorso 1)»: la stanza e la tessera di rame della pagina d'accesso): cosa dicono le condizioni d'uso e le policy di OpenAI su proprietà, uso commerciale, obblighi di indicazione, limiti, e su cosa OpenAI non garantisce (diritti di terzi, somiglianza con immagini esistenti). Cosa dice in breve la legge sul diritto d'autore delle immagini generate (UE, Italia), solo per segnalare dove serve un parere.

Limiti: solo lettura di pagine pubbliche ufficiali, con la data di lettura e il link a ogni fonte primaria. Nessun account, nessun download a pagamento, nessun contatto con fornitori. Non si consultano repository o decisioni di tentativi precedenti. Si segnala dove serve un parere professionale. Risultati in un file in `docs/ricerca/`. Le scelte arrivano all'utente una alla volta, in parole semplici, con una raccomandazione motivata.

## Risposta (Answer)

Ricerca chiusa il 26/10/2026, svolta da un agente in background con la skill `research`: [docs/ricerca/licenze-grafiche.md](../../../docs/ricerca/licenze-grafiche.md). Non è un parere legale. La sessione principale ha ricontrollato a campione le fonti di Manrope, Lucide, AI Act e legge 132/2025: tutto confermato.

- **Manrope:** SIL Open Font License 1.1, senza nome riservato. Si può usare nel sito, nell'app, nelle email, nei PDF, nelle immagini e nella scritta del nome, anche a fini commerciali. Chi distribuisce il file del carattere ci mette accanto copyright e licenza; non si vende il file da solo. Versione 4.505, variabile 200–800, con `tnum`, «€» e le lettere italiane. **Manca «Ǝ»** (U+018E). Con il servizio di Google Fonts l'IP di ogni visitatore arriva a Google; con il file sul proprio sito no.
- **Icone:** Lucide (ISC più MIT per le icone derivate da Feather), Tabler (MIT) e Phosphor (MIT) hanno tutte le icone del percorso. Lucide ha la stessa costruzione delle icone del prototipo, spessore regolabile e nessun logo di marchi. Scartati Feather (fermo, manca la ricevuta), Heroicons (poche icone), Iconoir (tratto fisso 1,5) e Material Symbols (stile Google, licenza Apache).
- **Immagini ChatGPT:** le pagine di OpenAI rispondono 403 a ogni lettura automatica, anche alla sessione principale; il §3.2–3.6 della ricerca viene dagli estratti del motore di ricerca ed è **Da verificare**. Dagli estratti: l'output è dell'utente «nei limiti di legge» ed è usabile anche a fini commerciali, ma può non essere unico. È vietato presentarlo come fatto da una persona, e l'indennizzo di OpenAI copre solo API ed Enterprise, Edu e Healthcare. In Italia è protetta solo l'opera dell'ingegno umano, anche se fatta con l'IA (legge 132/2025, art. 25), quindi le immagini potrebbero non essere protette. L'art. 50 dell'AI Act, in vigore dal 2/8/2026, chiede di dichiarare i «deep fake»: per immagini decorative probabilmente non si applica, ma va al parere.
- **Parere professionale:** serve per l'uso delle immagini con il piano Plus, la loro protezione, la scritta «generata con IA», l'AI Act e la forza della scritta del nome in Manrope come marchio.

## Commenti (Comments)

**Scelte dell'utente, 26/10/2026**, una alla volta, in parole semplici e con una raccomandazione:

1. **Da dove arriva Manrope:** dal nostro sito, con il file della licenza accanto, non dal servizio di Google (consigliata). Vale anche per email e app.
2. **Set di icone:** **Lucide** (consigliata), con il tratto a 1,6 e a 2,2 su pulsanti e stati.
3. **La «Ǝ» che manca a Manrope.** La raccomandazione era guardare prima lo scarto nel prototipo e poi decidere. L'utente ha proposto invece un'altra strada: «Forse è meglio renderla un logo in SVG o simile dato che le due E rappresentano il logo dell'agenzia Enrico Erca». Domande di chiarimento:
   - **dove:** il disegno va ovunque, anche dentro le frasi («Chiama ƎE»), alto come il testo e dello stesso colore, letto «ƎE» dallo screen reader. Nelle email e negli SMS resta in lettere (opzione consigliata, scelta);
   - **da dove:** l'agenzia non ha più il file originale, quindi **il logo lo ridisegniamo noi**. Il collaboratore di ƎE ha già dato conferma, secondo l'utente. La raccomandazione era il file originale; non c'è più. Nuovo ticket: [Logo di ƎE ridisegnato in SVG](18-logo-ee-svg.md).
4. **Immagini ChatGPT:** restano nei prototipi; si decide prima del lancio (consigliata), dopo aver letto le condizioni del piano, fatto una ricerca per immagini simili e avuto il parere. Piano usato dall'utente: **ChatGPT Plus**, quindi condizioni europee per i consumatori e nessun indennizzo di OpenAI (dagli estratti, **Da verificare** sulla pagina).
5. **Parere:** insieme a quello sul nome Connetto (consigliata). Le domande in più sono nel ticket [Parere di un consulente in marchi sul nome Connetto](08-parere-nome-connetto.md).

Regole in [DESIGN.md](../../../DESIGN.md): «Direzione del percorso 1» («Caratteri», «Forme»), «Identità» (logo di ƎE), «Accesso, tessera e situazioni comuni» (immagini) e «Componenti e token».

**Verifica delle fonti OpenAI, 26/10/2026 (integrazione, ticket ancora risolto).** Usata la skill `research`, con lettura in background e controllo della sessione principale. Tutte le sette pagine pubbliche richieste sono ora raggiunte, senza account o aggiramenti; aggiornati il §3, «In breve», fonti e limiti nella [ricerca](../../../docs/ricerca/licenze-grafiche.md). Le precedenti affermazioni basate su estratti restano qui come storia della prima lettura, non come esito attuale.

- Plus/Italia chiariti; conclusioni su proprietà e uso commerciale nel §3.2, copertura dell’indennizzo e tutele di legge nel §3.3. Corrette le formule assolute su garanzie e assenza di rischi nei prototipi.
- Non basta presumere che una nota legale nascosta assolva ogni dichiarazione dell’origine IA (§3.4); separare i livelli e convertire in WebP non prova la perdita di C2PA/SynthID e non autorizza a nascondere l’origine (§3.5). Nessuna verifica dei file o ricerca inversa eseguita.
- Date riportate senza inventare efficacia dove la pagina dà solo aggiornamento. Le Usage Policies attuali annunciano efficacia futura, 20/11/2026: letta anche la revisione ufficiale efficace dal 29/10/2025, applicabile alla data di verifica (§3.6).
- **Nessuna modifica alle scelte in DESIGN.md:** immagini solo nei prototipi fino al parere. Raccomandazione confermata: la lettura risolve il dubbio sulle condizioni pubbliche, ma restano somiglianze, protezione dei diritti, dichiarazione visibile nel contesto, AI Act e differenza fra tessera mostrata e reale. Questi punti richiedono il professionista già previsto. Prima del lancio ricontrollare le policy.

Aggiornata solo la riga «Parere unico prima del lancio» nei prossimi passi di STATUS.md. Nessun codice applicativo, nessuna riapertura del ticket.
