#!/usr/bin/env python3
"""Check skill integrity, Claude/Codex copies, references and optional CLI presence."""
import hashlib
import json
from pathlib import Path
import re
import shutil
import sys


def main():
    root = Path(__file__).resolve().parents[1]
    errors = []
    lock = json.loads((root / "skills.lock.json").read_text(encoding="utf-8"))
    for item in lock["files"]:
        path = root / item["path"]
        if not path.is_file():
            errors.append("Missing: " + item["path"])
        elif hashlib.sha256(path.read_bytes()).hexdigest() != item["sha256"]:
            errors.append("Changed snapshot: " + item["path"])
    canonical = root / ".agents/skills"
    names = []
    for folder in sorted(canonical.iterdir()):
        if not folder.is_dir():
            continue
        manifest = folder / "SKILL.md"
        if not manifest.is_file():
            errors.append("Missing SKILL.md: " + folder.name)
            continue
        text = manifest.read_text(encoding="utf-8")
        match = re.match(r"^---\s*\n(.*?)\n---", text, re.S)
        name = re.search(r"(?m)^name:\s*([a-z0-9-]+)\s*$", match[1]) if match else None
        if not name or name[1] != folder.name:
            errors.append("Invalid name/frontmatter: " + folder.name)
        if not match or not re.search(r"(?m)^description:", match[1]):
            errors.append("Missing skill description: " + folder.name)
        names.append(folder.name)
        for path in folder.rglob("*"):
            if path.is_file():
                other = root / ".claude/skills" / path.relative_to(canonical)
                if not other.is_file() or path.read_bytes() != other.read_bytes():
                    errors.append("Claude/Codex differ: " + str(path.relative_to(canonical)))
    copies = root / ".claude/skills"
    if copies.is_dir():
        left = {p.relative_to(canonical).as_posix() for p in canonical.rglob("*") if p.is_file()}
        right = {p.relative_to(copies).as_posix() for p in copies.rglob("*") if p.is_file()}
        if left != right:
            errors.append("Claude and Codex contain different file sets.")
    else:
        errors.append("Missing .claude/skills.")
    for relative in ("AGENTS.md", "CLAUDE.md", "PRODUCT.md", "DESIGN.md", "ARCHITECTURE.md",
                     "STATUS.md", "START_HERE.md", "docs/rules/APPLE_DESIGN.md",
                     ".agents/skills/setup-matt-pocock-skills/issue-tracker-local.md"):
        if not (root / relative).is_file():
            errors.append("Missing project context: " + relative)
    optional = {name: bool(shutil.which(name)) for name in ("git", "node", "npm", "ocr", "playwright-cli")}
    result = {"skill_count": len(names), "skills": names, "integrity": "FAIL" if errors else "OK",
              "errors": errors, "optional_cli_found": optional,
              "note": "CLI presence only: no browser, LLM, build or application test was run."}
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
