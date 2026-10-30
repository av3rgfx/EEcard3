# Ricevute in PDF leggibili con lo screen reader

Ricerca del 30 ottobre 2026, svolta da un agente in background (skill `research`) su fonti primarie, con la data di lettura per ogni fonte. Risponde al ticket [06 «Ricerca: ricevute in PDF leggibili con lo screen reader»](../../.scratch/architettura-percorso-1/issues/06-ricerca-pdf-accessibile.md) e serve al ticket [12 «Documenti, foto e ricevute in PDF»](../../.scratch/architettura-percorso-1/issues/12-documenti-foto-ricevute.md).

**Non è una scelta e non è un parere legale.** Confronta le strade; la decisione resta all'utente. Quanto vale un PDF senza firma a penna lo dice il parere legale (PRODUCT.md §10.10). Nessun account creato, nessun servizio usato, nessun programma installato. Le norme ISO e le pagine della PDF Association non si sono potute aprire (vedi «Fonti non raggiunte»): i requisiti di PDF/UA sono ricostruiti da fonti ufficiali che li riportano.

Legenda: **Fonte** = ciò che dice la fonte; **Inferenza** = ciò che ne deduce l'agente; **Prova** = verifica locale con dati inventati; **Da verificare** = non confermato.

## In breve

- **«Leggibile» ha due livelli.** Il primo è il *PDF con i tag*: testo vero, struttura (titoli, paragrafi, tabelle), lingua, titolo del documento. Il secondo è *PDF/UA-1* (ISO 14289-1): in più ogni elemento è o nella struttura o marcato come decorazione, i caratteri sono incorporati e il file si dichiara PDF/UA nei metadati [4][5][6][11].
- **Si verifica in due modi, e servono entrambi.** veraPDF (libero, GPL/MPL) e PAC 2026 (gratuito, solo Windows) controllano le regole automatiche; l'ordine di lettura e i testi alternativi li controlla una persona con uno screen reader (NVDA o VoiceOver) [7][8][9][10][5].
- **PDF/A per conservare:** le linee guida AgID lo indicano come formato per la conservazione, con preferenza per PDF/A-2a, che chiede anche la struttura accessibile [11]. Se e come valgano per un'agenzia privata è una domanda per il parere (**Inferenza**).
- **Browser senza schermo (Chromium):** dalla stessa pagina HTML dell'anteprima esce un PDF con i tag, lingua e titolo. **Prova:** sì, ma non è PDF/UA: mancano i metadati PDF/UA, qualche disegno resta fuori dalla struttura senza essere marcato come decorazione, e con il file *variabile* di Manrope il carattere diventa «Type 3» [1][2][3].
- **Programma che compone da un modello:** Typst scrive PDF con i tag di base e controlla PDF/UA-1 e PDF/A durante l'esportazione, fermandosi se trova errori [12][5]. WeasyPrint parte da HTML e CSS e offre PDF/UA-1, PDF/UA-2 e PDF/A, ma avverte che il risultato non è garantito valido [14][15].
- **Libreria dal codice:** PDFKit (JavaScript, MIT) e iText (Java/.NET, AGPL o licenza commerciale) fanno PDF/UA, ma la struttura si scrive a mano, elemento per elemento [6][18].
- **Stampa al banco:** il foglio A4 si stampa bene se il PDF è esattamente A4 e la stampa è «a grandezza reale». Le stampanti hanno un bordo che non stampano e il browser può rimpicciolire la pagina per farla entrare [20]. **Da verificare** sulla stampante dell'agenzia.

## 1. Cosa vuol dire «leggibile con lo screen reader»

### 1.1 PDF con i tag

- **Fonte (Chromium):** un PDF con i tag «contiene metadati in più sulla struttura del documento, come titoli, elenchi, tabelle, paragrafi e descrizioni delle immagini»; serve a chi usa uno screen reader e ai programmi che estraggono dati [1].
- **Fonte (W3C, tecniche PDF per WCAG):** le tecniche, informative e non obbligatorie, coprono: testo alternativo delle immagini (PDF1), ordine di lettura (PDF3), decorazioni marcate come *Artifact* (PDF4), tabelle (PDF6), titoli (PDF9), lingua del documento (PDF16) e di una frase (PDF19), titolo del documento (PDF18), elenchi (PDF21) [4].
- **Inferenza.** Per la ricevuta contano: testo vero (non un'immagine), lingua italiana, titolo «Ricevuta del canone n. …», titolo di pagina come intestazione, coppie etichetta e valore leggibili in ordine, la tabella dei mesi con le intestazioni, il logo ƎE con il testo alternativo «Enrico Erca» (DESIGN.md), il timbro «Annullata» marcato come decorazione perché la fascia in testa lo dice già a parole.

### 1.2 PDF/UA (ISO 14289)

- **Parti.** PDF/UA-1 è ISO 14289-1:2014; PDF/UA-2 (ISO 14289-2) è la versione per PDF 2.0 [11][8]. veraPDF le controlla entrambe [8]. Typst produce solo PDF/UA-1 [12]; WeasyPrint dichiara PDF/UA-1 e PDF/UA-2 [14]. Data di pubblicazione di PDF/UA-2: **Da verificare** (pagina ISO non raggiunta).
- **Requisiti riportati dalle fonti lette** (**Fonte**, non dal testo ISO):
  - il file è marcato come «con i tag» e si dichiara PDF/UA [6];
  - titolo nei dati del documento e mostrato al posto del nome del file [6][4];
  - lingua del documento [6][4][5];
  - tutti i caratteri incorporati; i 14 caratteri standard del PDF non vanno bene [6];
  - ogni contenuto è nella struttura oppure è marcato come decorazione [6][5];
  - immagini con descrizione alternativa, niente immagini di testo, il significato non affidato solo al colore o alla posizione [12][5].
- **Inferenza.** La dichiarazione PDF/UA sta nei metadati XMP del file. Un PDF con i tag non è automaticamente PDF/UA.
- **Fonte (AgID):** PDF/UA è il profilo «dedicato all'accessibilità universale» [11].

### 1.3 Come si verifica

- **veraPDF.** Validatore libero «per tutte le parti e i livelli di PDF/A e PDF/UA»: PDF/A-1…4, PDF/UA-1, PDF/UA-2 e WTPDF 1.0 [7][8]. Licenza GPLv3+ e MPLv2+; lo guidano la Open Preservation Foundation e la PDF Association [8]. **Fonte:** «per PDF/UA si eseguono solo i controlli verificabili da una macchina» [7].
- **PAC 2026.1** (versione 26.1.0.0 del 25/3/2026). Gratuito, per Windows 10 e 11 con .NET 4.8 [9]. Controlla PDF/UA e WCAG e ha un'anteprima di ciò che legge lo screen reader [10][9]. I controlli con l'IA girano sul computer: «PAC non accede a internet in alcun modo» [10]. **Fonte:** PAC non controlla né l'ordine di lettura né la correttezza dei testi alternativi; li controlla una persona [10].
- **Screen reader veri.** La guida di Typst consiglia Acrobat con NVDA su Windows e Acrobat con VoiceOver su macOS [5].
- **Inferenza.** Un controllo semplice per ogni modello di ricevuta: veraPDF in automatico a ogni modifica del modello, PAC e una lettura con NVDA o VoiceOver quando il modello cambia. veraPDF è un programma Java; la licenza permette di usarlo nei controlli del codice.

### 1.4 PDF/A per conservarlo nel tempo

- **Fonte (AgID, Allegato 2 alle Linee guida sui documenti informatici):** per la conservazione del PDF sono ammessi i profili PDF/A; profili raccomandati PDF/A-2a, PDF/A-2u, PDF/A-2b, PDF/A-1a, PDF/A-1b; ordine di preferenza «PDF/A-2a, PDF/A-2u, PDF/A-2b» [11].
- **Fonte (AgID):** PDF/A deve contenere tutti i caratteri usati e non può contenere parti variabili o eseguibili. Il livello «a» chiede coerenza semantica e accessibilità («ogni immagine deve avere un commento, ed ogni glifo un codice UNICODE»). Il livello «u» chiede solo che ogni carattere abbia il suo codice Unicode [11].
- **Inferenza.** PDF/A-2a e PDF/UA-1 chiedono cose vicine e si possono dichiarare nello stesso file: Typst lo prevede esplicitamente («si possono combinare standard PDF/A e PDF/UA compatibili»), mentre PDF/UA-1 e PDF/A-4 non sono compatibili [12].
- **Da parere.** Le Linee guida AgID sono scritte per pubbliche amministrazioni e conservatori; il file letto ha metadati del 2020. Se un'agenzia privata debba conservare le ricevute in PDF/A, e per quanto tempo, lo dice il parere legale o fiscale. PRODUCT.md §7 chiede comunque di conservare le versioni.

## 2. Le strade

### 2.1 Stampare una pagina web con un browser senza schermo

Un solo motore, Chromium, guidato in due modi: Playwright o Puppeteer. Firefox e Safari non sono stati valutati: le fonti lette non danno loro un PDF con i tag dal browser senza schermo.

- **Fonte (Chromium):** dalla versione 85 (2020) Chrome crea PDF con i tag con «Salva come PDF»; senza schermo con `--print-to-pdf` e `--export-tagged-pdf`. Il blog scrive che la qualità dei PDF con i tag «va ancora migliorata» [1].
- **Fonte (Playwright 1.63):** `page.pdf()` ha `tagged` («PDF con i tag (accessibile)», predefinito `false`) e `outline` (segnalibri, predefinito `false`), dalla versione 1.42; `preferCSSPageSize` dà la precedenza alla misura `@page` del CSS [2]. Licenza Apache-2.0 [2].
- **Fonte (Puppeteer):** `tagged` è sperimentale e vale `true` per impostazione predefinita; `waitForFonts` aspetta i caratteri [3].
- **Licenza di Chromium:** BSD a tre clausole [19].
- **Carattere proprio:** `@font-face` con il file sul server, come nelle schermate (licenze-grafiche.md §1.4).
- **Dati fuori:** **Inferenza.** Il browser gira sul server; se la pagina usa solo file locali non deve chiamare indirizzi esterni. **Da verificare** con un blocco delle richieste di rete durante la stampa.

**Prova del 30/10/2026** (Chromium 153.0.8010.12 e Playwright 1.63.0 già presenti; ricevuta inventata in HTML con `lang="it"`, `<title>`, Manrope variabile in `@font-face`, `@page { size: A4; margin: 0 }`, titolo `h1`, coppie `dl`, tabella con `th scope`, logo SVG con `aria-label`, timbro SVG con `aria-hidden`). Letti il PDF con `pdfinfo`, `pdffonts`, `pdftotext` e pypdf.

| Cosa | Senza `tagged` | Con `tagged: true` |
| --- | --- | --- |
| Marcato «con i tag», albero della struttura | No | Sì |
| Lingua del documento | Assente | `it` |
| Titolo nei dati e mostrato al posto del nome del file | Sì | Sì |
| Titolo `h1` → `H1`; tabella → `Table`, `TH` con scope di colonna, `TD`; logo → `Figure` con alt «Enrico Erca» | — | Sì |
| Coppie `dl`/`dt`/`dd` | — | Diventano `NonStruct`, non elenchi né coppie |
| Timbro nascosto allo screen reader | — | Fuori dalla struttura ma **non** marcato come decorazione: restano 2 riempimenti e 1 disegno non marcati |
| Metadati XMP con la dichiarazione PDF/UA | No | No |
| Segnalibri (`outline: true`) | — | Sì, dal titolo |
| Testo estratto con lettere accentate ed «€» | Sì | Sì |
| Carattere | Manrope variabile incorporato come «Type 3» | Uguale |
| Versione PDF e foglio | 1.4, 594,96 × 841,92 pt | Uguale |

- **Prova sul carattere.** Con un carattere *statico* (DejaVu Sans) Chromium incorpora un sottoinsieme TrueType normale; solo il grassetto finto è rimasto «Type 3». **Inferenza:** usare i file statici di Manrope ai pesi delle ricevute (Manrope ha sette pesi statici, licenze-grafiche.md §1.3) evita il «Type 3». Se il «Type 3» sia un difetto per PDF/UA o PDF/A: **Da verificare** con veraPDF e PAC.
- **Inferenza.** Con Chromium il PDF è adatto allo screen reader in buona parte, ma non si può dichiarare PDF/UA senza un passaggio dopo: aggiungere i metadati e marcare le decorazioni, oppure accettare un «PDF con i tag» non certificato. Le coppie etichetta e valore andrebbero scritte con un markup che Chromium traduce in struttura (per esempio una tabella o paragrafi): **Da verificare** con uno screen reader.
- **Inferenza.** Vantaggio pratico: lo stesso HTML e CSS fa l'anteprima nella schermata, il foglio stampato e il PDF (DESIGN.md: l'anteprima accanto al modulo è la lettera A4 in piccolo).

### 2.2 Un programma che compone il PDF da un modello

**Typst** (compilatore, versione della documentazione 0.15.1)

- **Fonte:** «Typst scrive sempre PDF con i tag» per dare un livello di base di accessibilità [12][5]. Con `--pdf-standard ua-1` produce PDF/UA-1 e fa controlli in più, per esempio sulle descrizioni delle immagini; se trova una violazione l'esportazione fallisce con un messaggio [12][5].
- **Fonte:** PDF/A supportati: A-1b, A-1a, A-2b, A-2u, A-2a, A-3b, A-3u, A-3a, A-4, A-4f, A-4e; più standard insieme se compatibili; PDF/UA-2 non ancora [12].
- **Fonte:** lingua con `set text(lang: "it")` all'inizio; titolo con l'elemento del titolo del documento, non con un'intestazione; intestazioni e piè di pagina marcati da soli come decorazione; le decorazioni si avvolgono in `pdf.artifact`; le tabelle hanno `table.header` [5][12].
- **Licenza:** Apache-2.0; il compilatore e la riga di comando compilano sul computer locale; caratteri propri con `--font-path` [13].
- **Inferenza.** Il modello è un file Typst, non HTML: l'anteprima nelle schermate andrebbe fatta a parte, oppure mostrando il PDF. Manrope variabile in Typst: **Da verificare** (in caso, file statici).

**WeasyPrint** (versione 70.0)

- **Fonte:** motore di impaginazione proprio, scritto in Python, «non basato su WebKit o Gecko»; licenza BSD [15].
- **Fonte:** supporta `@font-face`, `@page` con `size`; flexbox e griglia solo per casi semplici [16].
- **Fonte:** `--pdf-tags` («PDF con i tag per l'accessibilità») e `--pdf-variant` con pdf/a-1b … pdf/a-4f, pdf/ua-1, pdf/ua-2 e altri; «i documenti generati non sono garantiti validi», controllarli è responsabilità di chi li produce [14].
- **Inferenza.** Parte dallo stesso HTML e CSS dell'anteprima, ma con un motore diverso dal browser: il foglio può differire un poco dall'anteprima nel browser. Se `pdf/ua-1` attivi da solo i tag: **Da verificare**.

### 2.3 Una libreria che scrive il PDF dal codice

**PDFKit** (JavaScript, versione 0.20.2 del 30/8/2026, MIT [17])

- **Fonte:** per PDF/UA servono `subset: 'PDF/UA'`, `tagged: true`, un `Title` con `displayTitle: true`, la lingua e PDF 1.5 o più. I caratteri vanno incorporati: i 14 standard non sono conformi. Ciò che non fa parte della struttura va marcato come `Artifact`. Per ora PDFKit gestisce solo il contenuto marcato, non annotazioni né moduli [6].
- **Inferenza.** Ogni pezzo della ricevuta va posizionato e marcato a mano nel codice; il foglio e l'anteprima nella schermata non condividono il modello.

**iText** (Java e .NET)

- **Fonte:** «doppia licenza AGPL/commerciale»; l'AGPL è copyleft; chi non può rispettarla compra la licenza commerciale. Tra le funzioni: lavorare con documenti PDF/A e PDF/UA, con esempi PDF/UA, PDF/A-3 e PDF/A-4 [18].
- **Inferenza.** Con l'AGPL, usare iText in un servizio web può obbligare a rendere disponibile il codice della piattaforma agli utenti: il costo o il vincolo va pesato prima.

### 2.4 Confronto

| | Chromium (Playwright/Puppeteer) | Typst | WeasyPrint | PDFKit | iText |
| --- | --- | --- | --- | --- | --- |
| Modello | HTML e CSS, lo stesso dell'anteprima | file Typst | HTML e CSS | codice | codice |
| PDF con i tag | Sì, da chiedere in Playwright [2] | Sì, sempre [12] | Sì, con `--pdf-tags` [14] | Sì, a mano [6] | Sì [18] |
| PDF/UA dichiarato | No (Prova) | UA-1, con controllo che blocca [12] | UA-1 e UA-2, non garantito [14] | UA-1 [6] | Sì [18] |
| PDF/A | No (Prova: nessun metadato) | Molti livelli [12] | Molti livelli [14] | Da verificare | Sì [18] |
| Licenza | BSD; Apache-2.0 [19][2] | Apache-2.0 [13] | BSD [15] | MIT [17] | AGPL o commerciale [18] |
| Carattere proprio | `@font-face`; variabile → Type 3 (Prova) | `--font-path` [13] | `@font-face` [16] | file TTF/OTF [6] | Sì (Da verificare) |
| Gira sul server senza servizi esterni | Sì (Inferenza) | Sì [13] | Sì (Inferenza) | Sì (Inferenza) | Sì (Inferenza) |

In ogni caso il risultato si controlla con veraPDF, PAC e uno screen reader (§1.3).

## 3. Stampa al banco

- **Fonte (W3C, CSS Paged Media, bozza del 14/9/2023):** A4 è 210 × 297 mm. Le stampanti non stampano un piccolo bordo lungo ogni lato del foglio. Se la pagina non entra nel foglio, il browser prova un foglio più grande, poi la rotazione, poi rimpicciolisce la pagina, eventualmente chiedendo all'utente [20].
- **Prova.** Chromium ha rispettato `@page { margin: 0 }` anche quando la stampa chiedeva margini di 15 mm: il testo è rimasto nella stessa posizione. Il foglio esce di 594,96 × 841,92 pt con la misura del CSS e di 595,92 × 842,88 pt con il formato «A4» di Playwright; l'A4 esatto è circa 595,28 × 841,89 pt. **Inferenza:** differenze sotto il mezzo millimetro, senza effetto pratico.
- **Inferenza.** Perché il PDF si stampi uguale dal browser dell'operatore servono: foglio A4 esatto, margini interni del modello più larghi del bordo che la stampante non stampa (nella prova 18 mm; quanto è largo quel bordo dipende dalla stampante), stampa a «dimensioni reali» invece di «adatta alla pagina». Così il timbro e i testi piccoli (piede da 7,5 pt) non si rimpiccioliscono.
- **Da verificare.** Le opzioni di stampa del visore PDF di Chrome, Edge o Safari al banco (scala predefinita, intestazioni del browser) non sono documentate nelle pagine lette: si prova con il collaboratore di ƎE sulla stampante dell'agenzia, con un PDF di prova.

## 4. Dove serve un parere professionale

- **Avvocato:** quanto vale il PDF fatto dai dati, senza firma a penna, accanto al foglio firmato (PRODUCT.md §10.10; DESIGN.md «Da rivedere»).
- **Avvocato o commercialista:** se l'agenzia debba conservare le ricevute in un formato come PDF/A, per quanto tempo e con quali regole (§1.4).
- **Avvocato:** se alla piattaforma si applichino obblighi di legge sull'accessibilità dei documenti, oltre alla scelta di design già fatta. Questa ricerca non lo ha verificato.
- **Licenze:** solo se si scegliesse iText con l'AGPL (§2.3).

## Fonti

Tutte lette il 30/10/2026.

1. Chromium Blog, D. Mazzoni, «Using Chrome to generate more accessible PDFs», 29/7/2020: https://blog.chromium.org/2020/07/using-chrome-to-generate-more.html — PDF con i tag da Chrome 85, opzioni per il browser senza schermo, lavoro futuro.
2. Playwright, «Page», `page.pdf()`: https://playwright.dev/docs/api/class-page — opzioni `tagged`, `outline`, `preferCSSPageSize`, `margin`; riletti anche i tipi del pacchetto `playwright-core` 1.63.0 presente nell'ambiente (descrizioni uguali, licenza Apache-2.0 nel `package.json`).
3. Puppeteer, «PDFOptions»: https://pptr.dev/api/puppeteer.pdfoptions — `tagged` sperimentale e predefinito `true`, `outline`, `waitForFonts`.
4. W3C, «Techniques for WCAG 2.2», tecniche PDF: https://www.w3.org/WAI/WCAG22/Techniques/#pdf — PDF1–PDF23, informative.
5. Typst, «Accessibility» (guida): https://typst.app/docs/guides/accessibility/ — titolo, lingua, decorazioni, tabelle, verifiche con veraPDF, PAC e screen reader.
6. PDFKit, «Accessibility»: https://pdfkit.org/docs/accessibility.html — requisiti PDF/UA, caratteri, decorazioni, limiti.
7. veraPDF, «Validation»: https://docs.verapdf.org/validation/ — standard controllati; per PDF/UA solo i controlli automatici.
8. veraPDF, home: https://verapdf.org/home/ e https://verapdf.org/ — validatore libero, licenze GPLv3+/MPLv2+, consorzio OPF e PDF Association, PDF/UA-1 e PDF/UA-2.
9. PAC, «Download»: https://pac.pdf-accessibility.org/en/download — PAC 2026.1, versione 26.1.0.0 del 25/3/2026, Windows 10/11, .NET 4.8, gratuito con condizioni generali.
10. PAC, home e «AI-assisted checks»: https://pac.pdf-accessibility.org/en e https://pac.pdf-accessibility.org/en/resources/ai-checks — controlli PDF/UA e WCAG, anteprima dello screen reader, IA locale, ordine di lettura e testi alternativi non controllati.
11. AgID, «Allegato 2 – Formati di file e riversamento» alle Linee guida sulla formazione, gestione e conservazione dei documenti informatici: https://www.agid.gov.it/sites/agid/files/2024-06/allegato_2_formati_di_file_e_riversamento.pdf — scheda del formato PDF, profili PDF/A e PDF/UA, ordine di preferenza (file con metadati del 10/8/2020).
12. Typst, «PDF» (riferimento, documentazione 0.15.1): https://typst.app/docs/reference/pdf/ — PDF con i tag sempre, PDF/UA-1, livelli PDF/A, combinazioni, versioni PDF.
13. Typst, repository ufficiale: https://github.com/typst/typst — licenza Apache-2.0, compilazione locale, `--font-path`.
14. WeasyPrint 70.0, «API Reference»: https://doc.courtbouillon.org/weasyprint/stable/api_reference.html — `--pdf-variant`, `--pdf-tags`, `--full-fonts`, avvertenza sulla validità.
15. WeasyPrint 70.0, documentazione, pagina iniziale: https://doc.courtbouillon.org/weasyprint/stable/ — licenza BSD, motore proprio in Python.
16. WeasyPrint 70.0, «Supported Features»: https://doc.courtbouillon.org/weasyprint/stable/api_reference.html#supported-features — `@font-face`, `@page`, limiti di flexbox e griglia.
17. Registro npm, scheda `pdfkit`: https://registry.npmjs.org/pdfkit — versione 0.20.2 del 30/8/2026, licenza MIT.
18. iText, repository ufficiale `itext-java`: https://github.com/itext/itext-java — doppia licenza AGPL/commerciale, PDF/A e PDF/UA.
19. Chromium, file `LICENSE`: https://chromium.googlesource.com/chromium/src/+/main/LICENSE — BSD a tre clausole.
20. W3C, «CSS Paged Media Module Level 3», Working Draft del 14/9/2023: https://www.w3.org/TR/css-page-3/ — formato A4, bordo non stampabile, adattamento della pagina al foglio.

## Fonti non raggiunte

- **ISO**, schede di ISO 14289-1 (https://www.iso.org/standard/64599.html) e ISO 14289-2: risposta 403. I requisiti sono riportati da [6][7][11][12][5].
- **PDF Association**, pagine su PDF/UA (https://pdfa.org/resource/iso-14289-pdfua/) e sul Matterhorn Protocol (https://pdfa.org/resource/the-matterhorn-protocol/): risposta 403, anche con lo strumento web. Nessun aggiramento.
- **Chrome DevTools Protocol**, `Page.printToPDF`: la pagina è un rinvio caricato via script. Il testo del parametro `generateTaggedPDF` («predefinito: scelta del programma che incorpora Chromium») è stato letto nei tipi del protocollo inclusi in `playwright-core` 1.63.0.
- **Guida di Chrome** sulla stampa (https://support.google.com/chrome/answer/1069693) e **guida di Firefox** sulla stampa: il testo letto non descrive scala e margini. Per questo la stampa dal visore PDF resta **Da verificare** (§3).
- **Non eseguiti:** veraPDF e PAC sulla prova (non presenti nell'ambiente; installarli è escluso), lettura con uno screen reader vero.
