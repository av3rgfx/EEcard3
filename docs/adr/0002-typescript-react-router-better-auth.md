# TypeScript con React Router e Better Auth

Status: accepted (30/10/2026, decisione dell'utente)

La piattaforma del percorso 1 si scrive in **TypeScript**, server e schermate, con **React Router** in modalità framework e **Better Auth** per il codice via email o SMS e le passkey, dentro l'applicazione unica dell'[ADR 0001](0001-applicazione-unica-su-scalingo.md). L'interfaccia parte dai componenti di **shadcn/ui**, copiati nel progetto. Abbiamo scelto così perché il codice lo scrivono gli agenti e l'utente non lo legge: un solo linguaggio, il più diffuso, con il controllo dei tipi su tutto il codice. Il prezzo è una libreria d'accesso giovane, da aggiornare spesso e da stringere sulle nostre regole, invece della più stabile django-allauth.

## Opzioni considerate

- **Python con Django e django-allauth:** libreria d'accesso stabile da anni, con limiti ai tentativi già pronti, e Django con correzioni di sicurezza fino al 2028. Scartata: le schermate chiedono comunque codice nel telefono, quindi i linguaggi diventerebbero due; il controllo degli errori è più debole; i componenti React pronti non si usano.
- **Ruby con Rodauth:** il codice di 6 cifre via email non c'è, solo il link; andrebbe scritto da noi.
- **Next.js al posto di React Router:** il più diffuso, ma con più pezzi sul server (componenti server, cache, azioni da proteggere una per una) e un difetto critico in quei pezzi il 3/12/2025.

## Conseguenze

- Better Auth corregge solo l'ultima versione: gli aggiornamenti frequenti vanno nella verifica operativa, con i test a fermare le regressioni. Si usano solo i plugin del codice e delle passkey.
- Le impostazioni predefinite dei codici (5 minuti, 3 tentativi per codice, codice in chiaro) vanno portate alle nostre regole nel ticket dell'accesso.
- Cambiare linguaggio dopo vorrebbe dire riscrivere tutto; cambiare framework, riscrivere le pagine; cambiare libreria d'accesso, spostare i dati dell'accesso (account, sessioni, passkey salvate) nelle tabelle della nuova.
- L'app iPhone futura parlerà con la stessa applicazione e potrà usare le stesse passkey, se il dominio è dichiarato nell'app.
