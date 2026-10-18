# Apple: principi e adattamento al progetto

Revisione del riferimento: 18 ottobre 2026.
Documento operativo del template; non documento ufficiale Apple e non certificazione di conformità.

## Fonti
- https://developer.apple.com/design/
- https://developer.apple.com/design/human-interface-guidelines/design-principles
- https://developer.apple.com/design/human-interface-guidelines/materials
- https://developer.apple.com/design/human-interface-guidelines/color
- https://developer.apple.com/design/human-interface-guidelines/buttons
- https://developer.apple.com/design/human-interface-guidelines/accessibility
- https://developer.apple.com/design/human-interface-guidelines/managing-accounts
- https://developer.apple.com/design/human-interface-guidelines/entering-data
- https://developer.apple.com/design/human-interface-guidelines/apple-pay
- https://developer.apple.com/design/human-interface-guidelines/wallet
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

Verificare la pagina ufficiale pertinente quando una decisione dipende da un dettaglio della piattaforma.
La pagina Design è un indice: non sostituisce la lettura delle sezioni HIG pertinenti.

## Principi ufficiali, riassunti
Purpose: servire un bisogno concreto.
Agency: lasciare controllo e recupero dagli errori.
Responsibility: proteggere dati e fiducia, rendendo comprensibili le azioni.
Familiarity: usare concetti e comportamenti riconoscibili.
Flexibility: rispettare differenze tra persone, dispositivi e metodi di input.
Simplicity: rendere chiaro il necessario; semplicità non equivale a nascondere tutto.
Craft: curare il risultato e verificarlo in contesti reali.
Delight: scegliere l'emozione adatta al servizio e sostenerla con l'esperienza complessiva.

## Gerarchia e controlli
Le HIG suggeriscono in generale uno o due pulsanti prominenti per vista.
Un solo pulsante principale è una buona preferenza iniziale, non un obbligo universale Apple.
Distinguere le azioni con stile e contesto, mantenendo le etichette esplicite.
Navigazione e azioni hanno ruoli diversi. Modali e sheet devono avere uno scopo e un'uscita chiara.
Le etichette operative devono spiegare l'esito; OK può essere adatto ad avvisi puramente informativi.

## Materiali
Liquid Glass riguarda soprattutto controlli e navigazione, distinto dal contenuto.
Non applicare vetro decorativo a tutte le schede, liste o sezioni.
Esistono eccezioni e materiali standard: leggere la guida specifica.
Apple ammette colore su simboli ed etichette sul vetro; per dare prominenza a un'azione consiglia lo sfondo.
Sul web un effetto CSS è un adattamento, non l'implementazione nativa di Liquid Glass.
Prevedere una superficie leggibile anche senza blur, con contrasto aumentato o trasparenza ridotta.

## Tipografia e accessibilità
I valori iOS di 17 pt predefiniti e 11 pt minimi non sono una conversione automatica in pixel CSS.
Sul web scegliere misure leggibili, preferibilmente relative, e verificare zoom e reflow.
Per il contrasto web usare i criteri WCAG: normalmente 4.5:1, 3:1 per testo grande secondo la definizione WCAG.
La tabella Apple riporta 44x44 pt predefiniti e 28x28 pt minimi per iOS/iPadOS.
Come obiettivo di questo template usare aree touch generose, in genere almeno 44x44 CSS px sul web mobile,
senza confondere tale obiettivo progettuale con il minimo WCAG o con le unità native.
Verificare anche distanze, focus, etichette e ordine di lettura.
I componenti di sistema aiutano l'accessibilità; la composizione finale richiede comunque test.

## Inserimento dati e accesso
Minimizzare i dati richiesti; fornire etichette e aiuti comprensibili.
Apple descrive validazione dinamica e disponibilità di Continua dopo i dati necessari.
Nel prodotto concreto chiarire perché non si può procedere ed evitare errori mostrati prematuramente.
Scegliere il metodo di accesso in base alla piattaforma e alle necessità reali.
Riferirsi a Face ID solo se disponibile nel contesto; passkey non significa sempre Face ID.

## Wallet e Apple Pay, solo se nel perimetro
Una card Wallet è una possibilità da valutare, non una decisione commerciale già presa.
Mantenere aggiornati i pass; usare messaggi di modifica per informazioni sensibili al tempo.
Dopo il rifiuto non insistere con suggerimenti ripetuti; il pulsante per aggiungere il pass può restare disponibile.
Le HIG citano bollette e fatture tra gli usi del pulsante Pay with Apple Pay.
Non introdurre un divieto generale sul pagamento di bollette di terzi.
Verificare fattibilità tecnica e modello del servizio con il fornitore di pagamento scelto.
Usare i pulsanti ufficiali quando si integra il servizio.

## Applicabilità
Per web, iOS, Android e desktop adattare le convenzioni alla piattaforma effettiva.
Non imporre Liquid Glass, SwiftUI, un font o una palette a tutti i progetti.
Registrare in DESIGN.md le scelte del progetto separandole dalle indicazioni ufficiali e dalle ipotesi.
