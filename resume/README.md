# Currículo (fonte versionável)

Fontes Typst → PDFs em `public/files/`. Histórico = `git log` nesta pasta (+ tags se quiser marcar releases).

| Arquivo | Idioma | PDF |
| --- | --- | --- |
| `br.typ` | PT-BR | `/files/curriculo-br.pdf` (+ cópia `curriculo.pdf`) |
| `en.typ` | EN-US | `/files/resume-en.pdf` |
| `lib.typ` | layout compartilhado + URLs cruzadas | — |

## Regras

- **Estilo americano (cronológico):** contato → resumo → experiência → skills → formação → projetos opcionais. Sem foto, idade, estado civil, endereço completo ou documentos sensíveis.
- **EN:** U.S. Letter, American English, sem pronomes em 1ª pessoa no resumo, verbos de ação, telefone com DDI.
- **PT-BR:** mesma estrutura; papel A4; texto em português.
- **Máx. 2 páginas** (o build falha se `pdfinfo` achar mais).
- Links cruzados: **portfólio**, **perfil GitHub**, **contato**.
- Conteúdo alinhado a `src/lib/site.ts` e `src/data/*`.

## Gerar

```bash
npm run resume:build
# ou: ./scripts/build-resume.sh
```

Requer `typst` no `PATH` (ou `~/.local/bin/typst`) e `pdfinfo` (poppler) para a checagem de páginas.
