# Ricerca: strumenti di lavoro per costruire con gli agenti

Type: research
Status: open
Blocked by:
Mappa: [Costruzione del percorso 1: il piano](../map.md)

## Domanda (Question)

Quali strumenti servono a chi costruisce (l'utente con gli agenti, nella sessione cloud di Claude Code o sul computer) e come si ottengono senza installazioni globali automatiche (AGENTS.md). Per ciascuno: cosa dicono le fonti primarie oggi, con data di lettura e link; licenza; cosa si può verificare direttamente nella sessione (senza account e senza cambiare impostazioni); cosa resta all'utente.

1. **OCR (open-code-review):** il programma `ocr` non è installato in questa sessione (verificato il 27/11/2026). Pacchetto, provenienza, licenza, versione; come si aggiunge come dipendenza di sviluppo del progetto e come lo usa la skill `open-code-review-delegate` già presente in `.claude/skills/`.
2. **PostgreSQL 17:** in questa sessione c'è PostgreSQL 16 (client `psql`, server in `/usr/lib/postgresql/16`) e Docker. Modi per avere un PostgreSQL 17 nella sessione cloud, sul computer dell'utente e in GitHub Actions; cosa raggiunge la rete della sessione (immagini Docker, pacchetti apt).
3. **GitHub Actions su repository pubblico:** minuti, servizi PostgreSQL 17 nei job, Playwright e axe; protezione del ramo principale con il piano gratuito; email al proprietario quando un controllo fallisce («Verifica operativa», «Da verificare all'inizio della costruzione»).
4. **Dependabot:** raggruppare gli aggiornamenti il lunedì, attesa di 7 giorni dall'uscita, unione automatica solo delle versioni piccole e medie quando tutti i controlli passano: cosa fa Dependabot da solo e cosa chiede un'azione in più.
5. **Skill di revisione:** la skill `security-review` di Sentry da copiare a un commit preciso (provenienza, licenza CC BY-SA 4.0, ultimo commit, contenuto); `supply-chain-risk-auditor` e `insecure-defaults` di Trail of Bits solo per sapere quando servono (prima del pilota) e quale strumento di Claude Code usa `insecure-defaults`.
6. **Typst e Java per le prove sul computer e nella sessione:** come si ottengono senza installazioni globali (binario nel progetto, pacchetto npm, immagine Docker).

## Risposta (Answer)
