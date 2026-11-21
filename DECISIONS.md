# Decisões do portfólio

Registro do *porquê* — o diff mostra o *quê*. Atualizar quando uma escolha de produto/UX mudar. **Sempre** gravar decisão + motivo aqui (ou no `IMPROVEMENTS.md` se estiver só bloqueada).

## Layout do repositório

**Decisão:** o app Next vive na **raiz** do repo (`src/`, `public/`, `package.json`). A pasta `subportifolio/` foi promovida e apagada; o portfólio antigo (`app/`, next-intl, Tailwind 3) saiu.

**Por quê:** Vercel/Docker/WorkVM já apontam para a raiz (`COMPOSE_DIR`, Root Directory). Manter um app aninhado forçava `turbopack.root`, porta 3001 e risco de deployar o site velho. Um único app na raiz = um `npm ci`, um `.env`, um wait URL `:3000`.

**Env:** `.env.example` junta vars do Docker/WorkVM + Resend (`RESEND_*` / `CONTACT_*`).

## Três superfícies públicas (cruzadas)

**Decisão:** este repo entrega (1) o **portfólio** https://fabriciogferreira.vercel.app/, (2) o **`README.md` de perfil** GitHub (`username/username`), (3) o **currículo** em PDF (PT-BR + EN-US) gerado de `resume/*.typ`. As três se **ligam por links** (portfólio ↔ README ↔ PDFs). Marca alinhada: `src/lib/site.ts`, `src/data/*`, `resume/br.typ` / `en.typ`. Regra: `.cursor/rules/portfolio-and-profile.mdc` + `AGENTS.md`.

**Por quê:** o mesmo recrutador chega por GitHub, site ou anexo de vaga. Sem links cruzados, cada canal vira silo; PDF binário sozinho não versiona. Fonte Typst + `npm run resume:build` → `public/files/curriculo-br.pdf` e `resume-en.pdf` (máx. **2 páginas**; build falha se passar). Site baixa o PDF do locale ativo. `README.md` **não** é boilerplate create-next-app nem o README do meta-repo `~/git`.

**Formato do currículo:** estilo **US chronological** (referência MyPerfectResume / padrão americano) — resumo sem 1ª pessoa, experiência em ordem inversa com verbos de ação, skills, formação, projetos opcionais; sem foto nem dados pessoais sensíveis. EN em **U.S. Letter** + American English; PT-BR na mesma estrutura com **A4**.

**Context packs (`context/`):** em vez de abrir todos os clones no workspace do portfólio, manter Markdown curado por projeto (Olie, Televisão, Locav, Opbed, da-o-play, vid2agent, use-url-query, boillerplates). Motivo: contexto útil sem vazamento de rules/IP multi-root; trabalho vs pessoal vs comunidade marcado; “Não publicar” explícito.

**Estrutura do README (perfil):** scan primeiro — quem / tagline / badges (portfólio + CVs + contato) / âncoras → stack → stats → história curta + links CV/portfólio. Sem espelhar projetos em Markdown.

**UI/UX em toda decisão:** custo técnico (lib, token, drawer, bundle) **não** manda sozinho. Antes de remover ou simplificar, perguntar o que o visitante perde no scan, na prova (habilidades, credenciais, stack) e no caminho até a ação. Se o trade-off for só “menos código” e a experiência piora (ex. só download para ver certificado), preferir o caminho leve que preserve UX (ex. abrir na aba) ou documentar no `IMPROVEMENTS.md` até achar a forma boa.

**Agente não endossa por padrão:** cada pedido passa por questionamento UI/UX. Se concordar → implementar + gravar decisão/motivo. Se discordar → dizer o porquê (o que o visitante ganha/perde) e **não** implementar até alinhamento — não “concordar e fazer” só porque foi pedido.

Melhorias boas mas ainda bloqueadas por abordagem: ver `IMPROVEMENTS.md`.

## Ordem das seções

**Decisão:** Hero → Projetos → Experiência → Formação → Skills → Números → Relatos → Contato → Sobre → Créditos.

**Por quê:** depois do header, a primeira dobra precisa responder “quem é” (Hero). Em seguida o visitante (recrutador/cliente) quer prova: projetos e experiência. Formação reforça credencial. Skills é apoio. Números resumem (métricas que saíram do Hero). Relatos antes do Contato. Sobre fecha a narrativa pessoal. Créditos no fim sinalizam atribuição sem competir com a prova técnica.

**Vs. antigo:** o `objects/sections.tsx` antigo ia Hero → Skills → Statistics → Jobs → … Migrar conteúdo sem copiar essa ordem.

## Hero — o que entra na primeira dobra

**Decisão:** brand (nome) + cargo + linha quieta (local · disponibilidade) + tagline + **4 techs principais** (badges) + CTAs (contato → `#contact`, currículo, ver projetos → `#projects`, **depois** GitHub externo) + imagem. Sem faixa de stats (anos / clientes / projetos) no primeiro viewport.

**CTA GitHub no Hero:** ghost, após “Ver projetos”, `target="_blank"` + `rel="noopener noreferrer"`, ícone com fundo branco. Prova de código sem empurrar o visitante para fora *antes* da prova curada do site.

**Por quê:** o Hero antigo misturava blob, métricas e ruído. Só nome + frase + 2 CTAs ficou **magro demais** para o recrutador (falta onde / se está aberto / stack de um olhar). Enriquecer sem voltar ao excesso: local + disponibilidade + stack curta respondem o scan; stats/% de skills continuam fora (já há Números / Skills).

**Imagem:** foto real (`hero/serio.jpg`) em plano full-bleed com overlay — em vez do blob animado com `profile.jpeg`.

**Crop / telas grandes:** focal `center_40%`; altura `min(100svh-3.5rem, 52rem)` — evita só a testa em ultrawide.

**CTA contato:** ancora `#contact` (form real), não só `mailto` — menos atrito, alinhado às bases (contato in-page).

## Tipografia / radius / style shadcn

Já definidos no setup: Space Grotesk (heading) + Figtree (corpo), radius Small, style Vega (`base-vega`). Ver chat de setup se precisar do raciocínio completo.

## Header

Sticky no topo (nav desktop + Sheet no mobile + tema + locale), no lugar do botão flutuante + Sheet do antigo. Discoverability e padrão de portfólio profissional.

**Overflow horizontal:** nunca. Nav inline só a partir de `xl` (em `md`/`lg` os labels PT + marca + controles estouravam a viewport). Sheet até lá. Honeypot do contato sem `-left-[9999px]` (clássico de scroll-x). `html`/`body` com `overflow-x-clip` como rede de segurança — a causa ainda deve ser corrigida na origem.

**Hash na URL:** ao rolar, `history.replaceState` atualiza `#seção` (ex. `#contact`) conforme a seção visível — deep link e orientação sem empilhar entradas no histórico. Inclui `credits` (fora da nav).

## Ícones nos títulos das seções

**Decisão:** `h2` só tipografia — sem Lucide ao lado do título (como no antigo `Main.tsx` com `section.icon size={35}`).

**Por quê:** o ícone só ecoava a palavra (“Projetos” + pasta, “Contato” + envelope). Não acrescentava fato e competia com a hierarquia do heading. Lucide fica onde há *ação* ou destino (mailto, download, link externo), não como ornamento do título.

## Lucide / marcas via skill `icon`

**Decisão:** ícones de UI passam por `src/components/icons.tsx` — export com nome de domínio; componentes importam só `@/components/icons`. Skill: `.cursor/skills/icon/SKILL.md`. Marca Gmail: `GmailIcon` = `GoogleGmail` de `@dev.icons/react` (não Lucide, não SVG local).

**Por quê:** um ponto de entrada evita libs espalhadas. Lucide cobre ação genérica; Gmail volta como marca no mailto (Hero + Contato + linha da lista), como no antigo. LinkedIn/Instagram **não** estão em `@dev.icons/react` — tipografia + seta até haver SVG local.

## Projetos

**Decisão:** lista em blocos imagem + texto (alternando lado no desktop), uma capa por projeto — sem Card shadcn e sem carrossel por item.

**Por quê:** o antigo empilhava Card + Carousel vertical + badges + credenciais de teste em caixas amarelas. Pesado de escanear e “card demais” para um portfólio de uma composição. Uma capa forte + descrição + techs + CTAs prova o trabalho sem competir com o Hero.

**Credenciais de staging:** não exibir e-mail/senha na página. Link “Ambiente de teste” basta; senhas públicas no HTML são ruído e risco desnecessário.

**Dados:** cópia enxuta em `src/data/projects.ts`. Imagens em `public/projects/…`. Stack via `TechBadge` (ver **Logos de stack nos badges**). Tags/repos do antigo ficam para depois, se ainda agregarem.

**Capa escolhida:** Opbed → `signin.png`; Adriano → `home.png` (primeira impressão do produto, não galeria completa).

## Experiência (jobs)

**Decisão:** timeline vertical (lista ordenada), não Tabs. Ordem cronológica inversa. Nome da empresa como link — sem logo remoto.

**Por quê:** com só duas experiências, abas escondem o contexto e pedem clique extra. Timeline deixa escanear cargo, período e stack de uma vez (padrão de currículo). Logos externos (`olie.ai`, `enterscience`) quebram ou pedem `remotePatterns`; o nome + link já identifica o empregador.

**Texto:** levemente editado (typos / “Trainee”) — sentido do antigo preservado. Dados em `src/data/jobs.ts`.

## Skills

**Decisão:** chips com logo + nome em três grupos (Backend / Frontend / Ferramentas) — sem grid de ícones Devicons em caixas 90px.

**Por quê:** o grid antigo repetia a mesma informação que já aparece em Projetos e Jobs, com muito ruído visual. Depois da prova (projetos/jobs), Skills só precisa confirmar o leque de forma escaneável. Agrupar por papel no produto ajuda recrutador. Logo pequena no chip (mesmo padrão de Jobs/Projetos) melhora o scan sem voltar ao grid.

**O que entra no scan:** só techs que diferenciam no recrutamento e que batem com deps reais dos repos (Olie / Opbed / Televisão / boilerplates / use-url-query). Incluídos além do núcleo: Redis, MongoDB, Nuxt, TypeScript, Pest, PHPStan, Playwright, WebSockets. HTML/CSS ficam só em chips de projeto — implícitos demais para Skills. Libs de produto (TipTap, PrimeVue, Scribe, Boost/MCP…) e formatters (Pint/CS Fixer) ficam de fora; Horizon/Passport/Octane/S3/Sentry vão em bullets de job se precisarem de prova.

**Idiomas / certificados:** o bloco de English no antigo estava comentado — não migrar até haver conteúdo real.

## Logos de stack nos badges

**Decisão:** `TechBadge` / `TechBadgeList` + registry `src/data/technologies.ts` — imports nomeados de `@dev.icons/react` (não o pacote antigo `devicons-react`). Dados tipados como `TechName[]`. `_React` / `_Vue` por colisão com nomes de framework.

**Por quê:** chip só texto piorava o scan. `@dev.icons/react` é tipado, tree-shakeable, RSC-friendly e inclui marcas (ex. `GoogleGmail`). Named imports só das techs usadas. Grid 90px de Skills continua fora.

**MCP Devicons:** `.cursor/mcp.json` no repo aponta `https://devicons.io/api/mcp` — o agente busca slug/import certo via `search_icons` / `get_icon` em vez de inventar paths. Skill `icon` manda preferir esse MCP para marcas.

## Contato

**Decisão:** formulário **real** (nome opcional + e-mail + mensagem) via Server Action + **Resend** — o recrutador não precisa abrir cliente de e-mail. Mailto + currículo + redes ficam como alternativa (“Ou, se preferir”).

**Por quê (UX):** menos atrito = mais conversão. O form antigo era fake/`mailto` quebrado; sumir com ele foi certo. Voltar um form sem backend seria pior. Resend guarda a chave no servidor (`RESEND_API_KEY`); honeypot `website` contra bot. Campos mínimos de propósito.

**Env:** ver `.env.example` (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`). Sem chave → erro `config` traduzido (não silent fail).

**E-mail autocomplete:** `autoComplete="email"` (autofill do browser) + `datalist` com e-mails já enviados neste form (`localStorage`, máx. 8) — menos retrabalho se a pessoa voltar a escrever.

**Redes:** Gmail, GitHub, LinkedIn, Instagram (`SITE.socials`). Gmail com `GmailIcon`; demais tipografia + seta.

## Bandeiras no seletor de idioma

**Decisão:** bandeira BR/US (`country-flag-icons`) + label (PT/EN no trigger; Português/English no menu). Sem ícone genérico `Languages`.

**Por quê (UX):** reconhecimento visual mais rápido que só texto. Idioma ≠ país, mas com o nome ao lado o atalho é claro e era o padrão do site antigo. Só bandeira sem texto seria ambíguo — por isso os dois juntos.

## Feedback em downloads

**Decisão:** `DownloadLink` — ao clicar, ~500ms com spinner + “Baixando…”; **só então** dispara o download; depois volta ao label.

**Por quê (UX):** feedback e transferência juntos mentiam a ordem (arquivo já vinha enquanto ainda dizia “baixando”). Mostrar o estado e baixar em seguida alinha percepção e ação. Delay curto para não atrasar de verdade. Usado no currículo (Hero/Contato) e nos baixar de Formação.

## Sobre

**Decisão:** narrativa em parágrafos + grade curada de 4 fotos (não masonry com todas as imagens). Footer mínimo no fim da página.

**Por quê:** o antigo jogava *todas* as fotos de `about-me` em colunas CSS com `alt` numérico — difícil de ler e pesado. Quatro fotos com intenção (formatura, turma, TCC, pessoal) bastam para humanizar sem virar álbum. Texto do `types/users.ts` / README, levemente editado.

**Footer:** “CodeTree” do antigo some; assinatura com o próprio nome — o portfólio é pessoal, não uma marca inventada.

## Formação (education)

**Decisão:** timeline aberta (como Experiência), sem Accordion nem Drawer. Cada credencial tem **Ver** (abre na aba — imagem/PDF no browser) + **Baixar**. Sem logos remotos da UNIFUNEC.

**Por quê:** o antigo escondia escolas em accordion e usava Drawer frágil para preview. Lista aberta escaneia melhor. Só download obrigava baixar para ver — UX ruim quando a formação é prova de habilidade no portfólio. “Ver” em nova aba cobre preview sem `drawer`/vaul; download fica opcional. Endereço completo virou cidade — suficiente.

**Fora do escopo (por agora):** certificado do ensino médio existe em `public/education/high-school/` no antigo, mas não estava em `educations.ts` — não inventar entrada.

## Relatos (testimonials)

**Decisão:** grade de 2 citações (sempre visíveis), sem Carousel vertical. Foto local ou iniciais — sem URL do LinkedIn CDN.

**Por quê:** com dois relatos, carrossel esconde conteúdo e pede interação inútil. Cards leves com aspas bastam. Avatares **locais** em `public/testimonials/…` (Davi e Vinicius) — nunca hotlink `media.licdn.com` (expira / 403). Iniciais só se faltar arquivo.

**Proof-of-order:** PNGs de comprovante no antigo não entram na UI — ruído; o quote + LinkedIn já autenticam a fonte.

## Números (statistics)

**Decisão:** três métricas derivadas dos dados locais (anos / clientes / projetos) + link para o GitHub. Sem heatmap ao vivo (`react-activity-calendar` + GraphQL).

**Por quê:** o calendário antigo pedia `NEXT_PUBLIC_CONTRIBUTIONS_TOKEN` no browser (token exposto), mais duas libs e fetch client-side. As métricas do Hero antigo (anos/clientes/projetos) cabem melhor aqui, sem poluir a primeira dobra. Atividade real continua no perfil GitHub.

**Experiência:** desde a Olie (`2023-08` / `CAREER_START`) até `STATS_AS_OF`, em **anos + meses** (`floor`, sem `ceil` que inflava “+4 anos”). Label deixa claro “desde a Olie”. Senioridade de marca: **Junior** (Hero, jobs, currículo, README) — coerente com o início em ago/2023.

## Downloads (não vira seção)

**Downloads:** currículo já está no Hero e Contato; diploma/TCC/certificados em Formação. Seção dedicada seria duplicata.

## Créditos

**Decisão (conteúdo):** lista Lucide / shadcn / Devicons / Resend no fim da página.

**Por quê:** atribuição é bom sinal — recrutador vê preocupação com trabalho de terceiros. Conteúdo vale.

**Nav:** `credits` **fora** de `NAV_ITEMS` — seção no fim da página permanece. Menu fica no funil de contratação; atribuição quem rola encontra.

## i18n (PT / EN)

**Decisão:** `LocaleProvider` + catálogo `messages` + campos `{ br, en }` nos dados — sem `next-intl` e sem rotas `/[locale]`.

**Por quê:** o portfólio é one-page com âncoras; locale no client + `localStorage` troca UI e conteúdo sem remount de router. `next-intl` no App Router pede plugin, `request.ts` e pasta por locale — overhead alto nesta fase. Dá para migrar depois se SEO multi-URL for requisito.

**Cargos nos relatos:** Davi = Pleno / Mid-level; Vinicius = Junior (atualizado sob pedido).
