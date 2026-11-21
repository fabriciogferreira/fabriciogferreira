# Agent guidelines — fabriciogferreira

## This repository has three public surfaces (cross-linked)

1. **Portfolio site** — https://fabriciogferreira.vercel.app/ (`src/`, Vercel + Docker/WorkVM).
2. **GitHub profile README** — root `README.md` → https://github.com/fabriciogferreira.
3. **Resume PDFs** — `resume/*.typ` → `public/files/curriculo-br.pdf` + `resume-en.pdf` (`npm run resume:build`). Max **2 pages**. Link portfolio ↔ README ↔ CVs.

Keep them **aligned**: role, tagline, stack, story, socials, CTAs. Sources: `src/lib/site.ts`, `src/data/*`, `resume/`. Project facts: **`context/*.md`** (curated packs — not full clones). Why: `DECISIONS.md`. Rule: `.cursor/rules/portfolio-and-profile.mdc`.

Do **not** replace `README.md` with create-next-app boilerplate. Do **not** confuse this with `~/git/README.md` (WorkVM). Do **not** paste proprietary code/secrets from work repos into the site — use `context/` + ask when unsure.

## Working here

- Prefer smallest change; record decisions in `DECISIONS.md` (or `IMPROVEMENTS.md` if blocked).
- UI/UX: do not strip visitor-facing proof just to “simplify” code — see `DECISIONS.md`.
- Contact form: Resend via `src/app/actions/contact.ts`; env `RESEND_*` / `CONTACT_*` (see `.env.example`). Never commit secrets.
- Icons: follow `.cursor/skills/icon/SKILL.md` (export via `@/components/icons`).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
