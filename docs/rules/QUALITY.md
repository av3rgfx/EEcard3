# Verifica e completamento

Prima di dichiarare concluso il lavoro:
- Eseguire build, lint, type check e test disponibili pertinenti alla modifica.
- Per logica non banale aggiungere una verifica che possa rilevare un errore reale.
- Rivedere i file modificati, i chiamanti e i possibili effetti collaterali.
- Usare OCR delegate se installato; registrare cosa è stato rivisto e cosa è rimasto escluso.
- Confermare i problemi segnalati prima di applicare correzioni.
- Controllare nel browser il percorso realmente implementato, non soltanto il codice.

Per UI:
- Azione principale funzionante e conferma comprensibile.
- Caricamento, vuoto, errore, successo e recupero.
- Testi realistici, contenuti lunghi e dati mancanti.
- Tastiera, focus, nomi accessibili, contrasto e ingrandimento del testo.
- Dimensioni rappresentative, per esempio 360, 390, 768 e 1440 CSS px se pertinenti.
- Movimento ridotto e comportamento touch; dichiarare cosa richiede un dispositivo reale.
- Non eseguire pagamenti o azioni reali irreversibili durante prove autonome.

Per backend:
- Percorso autorizzato e tentativo non autorizzato.
- Validazione, errori, duplicati e coerenza dei dati dove pertinenti.
- Nessuna perdita di dati o segreti in risposta o log.

Una revisione AI non è un test eseguito e uno scanner automatico non dimostra conformità completa.
Riportare controlli eseguiti, esito, limiti e problemi residui.
