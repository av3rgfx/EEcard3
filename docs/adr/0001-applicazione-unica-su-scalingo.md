# Applicazione unica su Scalingo, con i file nel database

Status: accepted (30/10/2026, decisione dell'utente)

Per il percorso 1 la piattaforma è **un'applicazione unica scritta da noi**, ospitata da Scalingo nella regione Parigi normale, con un database PostgreSQL gestito che contiene anche documenti e foto. Il codice via email o SMS e le passkey li dà una libreria matura dentro l'applicazione. Abbiamo scelto così perché è l'unica forma che rispetta insieme i tre vincoli dell'utente: dati nell'UE, circa 20 € al mese, passkey stabili. Il prezzo è più codice delicato per l'accesso, scritto dagli agenti e controllato con la lista di sicurezza dell'accesso, invece di un accesso pronto del fornitore.

## Opzioni considerate

- **Servizio «tutto in uno» (Supabase):** accesso e file pronti, meno codice. Scartato il 30/10/2026: passkey ancora sperimentali («experimental», annunciate il 28/5/2026) e obbligatorie per l'operatore; circa 21–23 € prima di email e SMS; i file fuori dai backup; contratto con una società di Singapore e sub-responsabili quasi tutti statunitensi. Firebase era già escluso: l'accesso gira solo negli Stati Uniti.
- **Server virtuale (Hetzner, OVHcloud):** scartato nel ticket 01, perché sistema, copie e prove di ripristino resterebbero tutte a chi mantiene la piattaforma.
- **Clever Cloud:** simile a Scalingo, ma listino e contratto sui dati non sono leggibili.
- **File in un archivio a parte (Outscale):** rimandato. Sarebbe un fornitore e un contratto in più, con copie e prove di ripristino dei file da fare a parte.

## Conseguenze

- Il linguaggio scelto deve avere una libreria di accesso matura con codice via email e passkey ([ticket 09](../../.scratch/architettura-percorso-1/issues/09-linguaggio-framework-componenti.md)).
- I permessi legati al rapporto con la casa sono codice nostro, controllato sul server a ogni richiesta.
- Le foto si riducono al caricamento. Oltre circa 5 GB di file, questi passano a un archivio a parte compatibile S3: è una migrazione da pianificare.
- Una sola prova di ripristino copre dati e documenti insieme. In più c'è una copia cifrata al mese fuori da Scalingo, su un disco di ƎE.
- L'app iPhone futura parlerà con la stessa applicazione. Per uscire basta esportare il database PostgreSQL, che è un formato standard.
