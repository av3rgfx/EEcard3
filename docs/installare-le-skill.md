# Installare le skill di EECard3 in un altro progetto

Documento da inoltrare a una nuova sessione o a un nuovo progetto. Elenca le 20 skill del kit di EECard3 con il link
GitHub alla versione esatta usata qui, e spiega come installarle.

Verificato l'8/11/2026: tutti i link rispondono; lo script qui sotto, eseguito in una cartella vuota, produce le stesse
20 skill di EECard3, con lo stesso contenuto. Le copie di EECard3 hanno in più solo una riga vuota alla fine dei file.
Provenienza e impronte: [THIRD_PARTY.md](../THIRD_PARTY.md) e [skills.lock.json](../skills.lock.json) (snapshot del 18/10/2026).

## Le skill e da dove vengono

Ogni link apre la cartella della skill al commit usato in EECard3.

### Progettazione e pianificazione
| Skill | Repository | Link alla versione usata |
|---|---|---|
| wayfinder | mattpocock/skills | [skills/engineering/wayfinder](https://github.com/mattpocock/skills/tree/49dd158d1076134a641b33efb035946536778336/skills/engineering/wayfinder) |
| setup-matt-pocock-skills | mattpocock/skills | [skills/engineering/setup-matt-pocock-skills](https://github.com/mattpocock/skills/tree/49dd158d1076134a641b33efb035946536778336/skills/engineering/setup-matt-pocock-skills) |
| domain-modeling | mattpocock/skills | [skills/engineering/domain-modeling](https://github.com/mattpocock/skills/tree/49dd158d1076134a641b33efb035946536778336/skills/engineering/domain-modeling) |
| research | mattpocock/skills | [skills/engineering/research](https://github.com/mattpocock/skills/tree/49dd158d1076134a641b33efb035946536778336/skills/engineering/research) |
| prototype | mattpocock/skills | [skills/engineering/prototype](https://github.com/mattpocock/skills/tree/49dd158d1076134a641b33efb035946536778336/skills/engineering/prototype) |
| grilling | mattpocock/skills | [skills/productivity/grilling](https://github.com/mattpocock/skills/tree/49dd158d1076134a641b33efb035946536778336/skills/productivity/grilling) |

### User experience
| Skill | Repository | Link alla versione usata |
|---|---|---|
| ux-research | cuellarfr/design-skills | [skills/ux-research](https://github.com/cuellarfr/design-skills/tree/7e25e66e87f64f9d3dea22198f9e29937e7c48f5/skills/ux-research) |
| ux-strategy | cuellarfr/design-skills | [skills/ux-strategy](https://github.com/cuellarfr/design-skills/tree/7e25e66e87f64f9d3dea22198f9e29937e7c48f5/skills/ux-strategy) |
| ux-writing | cuellarfr/design-skills | [skills/ux-writing](https://github.com/cuellarfr/design-skills/tree/7e25e66e87f64f9d3dea22198f9e29937e7c48f5/skills/ux-writing) |
| accessibility-audit | cuellarfr/design-skills | [skills/accessibility-audit](https://github.com/cuellarfr/design-skills/tree/7e25e66e87f64f9d3dea22198f9e29937e7c48f5/skills/accessibility-audit) |

### Design e interazioni
| Skill | Repository | Link alla versione usata |
|---|---|---|
| emil-design-eng | emilkowalski/skills | [skills/emil-design-eng](https://github.com/emilkowalski/skills/tree/2d228630ba1446365f614a108cb8252f1feda202/skills/emil-design-eng) |
| apple-design | emilkowalski/skills | [skills/apple-design](https://github.com/emilkowalski/skills/tree/2d228630ba1446365f614a108cb8252f1feda202/skills/apple-design) |
| review-animations | emilkowalski/skills | [skills/review-animations](https://github.com/emilkowalski/skills/tree/2d228630ba1446365f614a108cb8252f1feda202/skills/review-animations) |
| mobile-native | emilkowalski/skills | [skills/mobile-native](https://github.com/emilkowalski/skills/tree/2d228630ba1446365f614a108cb8252f1feda202/skills/mobile-native) |
| break-ui | emilkowalski/skills | [skills/break-ui](https://github.com/emilkowalski/skills/tree/2d228630ba1446365f614a108cb8252f1feda202/skills/break-ui) |
| animate-ui | imskyleen/animate-ui | [skills/animate-ui](https://github.com/imskyleen/animate-ui/tree/0d68eb0f59e6e15f872bc21ea4bdd5b195ea7bb9/skills/animate-ui) |

### Sviluppo e verifica
| Skill | Repository | Link alla versione usata |
|---|---|---|
| ponytail | nessun repository pubblico verificato | [copia di EECard3](https://github.com/av3rgfx/EEcard3/tree/main/.agents/skills/ponytail) (fornita dall'utente, licenza MIT) |
| open-code-review-delegate | alibaba/open-code-review | [skills/open-code-review-delegate](https://github.com/alibaba/open-code-review/tree/8eb83340a487b1150af00701b94f01af97e4b4d6/skills/open-code-review-delegate) |
| playwright-cli | microsoft/playwright-cli | [skills/playwright-cli](https://github.com/microsoft/playwright-cli/tree/b85c7a736bb473bf55b584e54a09ffa698d6d871/skills/playwright-cli) |
| write-swift | emilkowalski/skills | [skills/write-swift](https://github.com/emilkowalski/skills/tree/2d228630ba1446365f614a108cb8252f1feda202/skills/write-swift) |

### Decisa per EECard3 ma non ancora installata
| Skill | Repository | Link alla versione letta |
|---|---|---|
| security-review (Sentry) | getsentry/skills | [skills/security-review](https://github.com/getsentry/skills/tree/d12f250460ffd961f549dbebf7eeb0cf4afd4c2e/skills/security-review) |

In EECard3 si copia all'inizio della costruzione, **rinominata**, perché ha lo stesso nome del comando `/security-review`
di Claude Code (ARCHITECTURE.md, «Verifica operativa»). Licenza CC BY-SA 4.0. Lo script non la installa.

## Cosa serve sapere prima
- **Dove vanno.** Claude Code legge `.claude/skills/<nome>/`, Codex legge `.agents/skills/<nome>/`. Lo script mette
  una copia uguale in entrambe le cartelle del progetto. Non installa niente a livello globale.
- **Sovrascrive.** Se nel progetto c'è già una skill con lo stesso nome, la sostituisce.
- **Tre skill partono solo a mano** (`disable-model-invocation`): `wayfinder`, `setup-matt-pocock-skills` e `review-animations`.
- **Due richiedono un programma.** `playwright-cli` vuole il suo programma (un browser già presente può bastare);
  `open-code-review-delegate` vuole il programma `ocr`. Lo script non installa programmi.
- **Licenze.** Lo script copia la licenza di ogni repository in `third_party/licenses/`. Vanno tenute.
- **Nome doppio.** Se l'ambiente ha già una skill globale `prototype`, verificare quale viene caricata.
- **Le regole di EECard3 non sono incluse.** AGENTS.md e `docs/rules/` dicono quando usare ogni skill in EECard3; un altro
  progetto scrive le sue regole, eventualmente partendo da quelle.
- **Prima di aggiornarle** a un commit più recente, leggere cosa è cambiato nel repository di origine.

## Script di installazione
Va eseguito dalla cartella principale del nuovo progetto (servono `git` e l'accesso a github.com). Accetta come
argomento una cartella diversa.

```bash
#!/usr/bin/env bash
# Installa le 20 skill del kit EECard3, agli stessi commit, in .claude/skills e .agents/skills
# del progetto in cui viene eseguito. Non installa niente a livello globale.
set -euo pipefail

DEST="${1:-.}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# repository | commit | percorsi delle skill nel repository
SOURCES=(
  "emilkowalski/skills|2d228630ba1446365f614a108cb8252f1feda202|skills/emil-design-eng skills/apple-design skills/mobile-native skills/break-ui skills/review-animations skills/write-swift"
  "cuellarfr/design-skills|7e25e66e87f64f9d3dea22198f9e29937e7c48f5|skills/ux-research skills/ux-strategy skills/ux-writing skills/accessibility-audit"
  "mattpocock/skills|49dd158d1076134a641b33efb035946536778336|skills/engineering/wayfinder skills/engineering/research skills/engineering/domain-modeling skills/engineering/prototype skills/engineering/setup-matt-pocock-skills skills/productivity/grilling"
  "alibaba/open-code-review|8eb83340a487b1150af00701b94f01af97e4b4d6|skills/open-code-review-delegate"
  "imskyleen/animate-ui|0d68eb0f59e6e15f872bc21ea4bdd5b195ea7bb9|skills/animate-ui"
  "microsoft/playwright-cli|b85c7a736bb473bf55b584e54a09ffa698d6d871|skills/playwright-cli"
  # Ponytail non ha un repository pubblico verificato: si prende la copia di EECard3.
  "av3rgfx/EEcard3|main|.agents/skills/ponytail"
)

mkdir -p "$DEST/.claude/skills" "$DEST/.agents/skills" "$DEST/third_party/licenses"

for entry in "${SOURCES[@]}"; do
  IFS='|' read -r repo commit paths <<<"$entry"
  dir="$TMP/${repo//\//__}"
  git init -q "$dir"
  git -C "$dir" remote add origin "https://github.com/$repo.git"
  git -C "$dir" fetch -q --depth 1 origin "$commit"
  git -C "$dir" checkout -q FETCH_HEAD
  for p in $paths; do
    name="$(basename "$p")"
    for target in "$DEST/.claude/skills/$name" "$DEST/.agents/skills/$name"; do
      rm -rf "$target"
      cp -R "$dir/$p" "$target"
    done
    echo "ok  $name  ($repo@${commit:0:7})"
  done
  # Licenza del repository di provenienza
  lic="$DEST/third_party/licenses/${repo//\//__}"
  mkdir -p "$lic"
  if [ "$repo" = "av3rgfx/EEcard3" ]; then
    cp "$dir/third_party/licenses/ponytail/LICENSE.txt" "$lic/LICENSE.txt"
  else
    cp "$dir"/LICENSE* "$lic/" 2>/dev/null || echo "attenzione: licenza non trovata in $repo"
  fi
done

echo "Fatto: $(ls "$DEST/.claude/skills" | wc -l) skill in .claude/skills e .agents/skills."
```

## Messaggio da incollare nella nuova sessione

> Installa nel progetto le skill descritte in
> https://github.com/av3rgfx/EEcard3/blob/main/docs/installare-le-skill.md
> Leggi tutto il documento, poi esegui lo script della sezione «Script di installazione» dalla cartella principale del
> progetto. Non installare niente a livello globale e non installare programmi. Alla fine dimmi quali skill sono state
> installate, se qualcuna ha sostituito una skill già presente e quali richiedono un programma che manca.
> Non installare `security-review` di Sentry se non te lo chiedo.

Il link del messaggio funziona quando questo documento è nel ramo principale di EECard3. Fino ad allora, incollare il
documento intero al posto del link.
