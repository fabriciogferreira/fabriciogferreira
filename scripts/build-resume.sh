#!/usr/bin/env bash
# Gera os PDFs do currículo (PT-BR + EN-US) a partir de resume/*.typ.
# Problema: PDF binário sozinho não versiona bem nem garante ≤2 páginas / links cruzados.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RESUME="$ROOT/resume"
OUT="$ROOT/public/files"
TYPST="${TYPST:-typst}"

if ! command -v "$TYPST" >/dev/null 2>&1; then
  if [[ -x "$HOME/.local/bin/typst" ]]; then
    TYPST="$HOME/.local/bin/typst"
  else
    echo "typst não encontrado. Instale (pacman -S typst) ou em ~/.local/bin/typst" >&2
    exit 1
  fi
fi

mkdir -p "$OUT"

echo "Compilando currículo PT-BR…"
"$TYPST" compile --root "$RESUME" "$RESUME/br.typ" "$OUT/curriculo-br.pdf"

echo "Compilando resume EN-US…"
"$TYPST" compile --root "$RESUME" "$RESUME/en.typ" "$OUT/resume-en.pdf"

# Compat: links antigos /files/curriculo.pdf → BR
cp -f "$OUT/curriculo-br.pdf" "$OUT/curriculo.pdf"

check_pages() {
  local pdf="$1"
  local max="$2"
  local pages
  pages="$(pdfinfo "$pdf" 2>/dev/null | awk '/^Pages:/ {print $2}')"
  if [[ -z "${pages:-}" ]]; then
    echo "aviso: pdfinfo indisponível — não conferi páginas de $pdf" >&2
    return 0
  fi
  if (( pages > max )); then
    echo "erro: $pdf tem $pages páginas (máx. $max)" >&2
    exit 1
  fi
  echo "ok: $(basename "$pdf") — $pages página(s)"
}

check_pages "$OUT/curriculo-br.pdf" 2
check_pages "$OUT/resume-en.pdf" 2

echo "PDFs em $OUT"
