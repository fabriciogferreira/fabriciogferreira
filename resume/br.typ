#import "lib.typ": resume

// Mesma estrutura estilo US (cronológico); idioma PT-BR; papel A4.
// Sem 1ª pessoa no resumo; verbos de ação; sem foto/dados sensíveis.

#resume(
  paper: "a4",
  name: "Fabrício Gonçalves Ferreira",
  role: "Desenvolvedor Fullstack Junior",
  location: "Santa Fé do Sul, SP, Brasil",
  summary: [
    Desenvolvedor fullstack junior com experiência profissional desde agosto
    de 2023 (Olie), em produtos web com Laravel e Next.js/Vue — de APIs e
    modelos de dados à interface em produção. Atua em times de produto,
    organiza frentes paralelas, entrega com Docker e evolui via code review e
    reuniões. Em busca de papéis junior fullstack com foco em qualidade,
    manutenibilidade e entrega clara.
  ],
  labels: (
    lang: "pt",
    portfolio: "Portfólio",
    contact: "Contato",
    summary: "Resumo profissional",
    experience: "Experiência profissional",
    projects: "Projetos",
    education: "Formação",
    skills: "Competências",
    see-more: "Mais:",
    github-profile: "Perfil no GitHub",
  ),
  experience: (
    (
      title: "Desenvolvedor Fullstack Junior",
      company: "Enterscience",
      place: "Brasil (remoto / híbrido)",
      period: "Mar 2025 – Nov 2026",
      bullets: (
        [Desenvolver e manter features fullstack com Laravel, React e Next.js em time de produto.],
        [Organizar responsabilidades compartilhadas entre Enterscience e Olie, com stacks e ritmos distintos.],
        [Adotar React, Next.js e Tailwind CSS em produção, ampliando a atuação no frontend.],
      ),
    ),
    (
      title: "Desenvolvedor Fullstack Junior",
      company: "Olie",
      place: "Brasil (remoto / híbrido)",
      period: "Ago 2023 – Nov 2026",
      bullets: (
        [Entregar features em Laravel e Vue.js para sistemas em produção com clientes reais.],
        [Assumir novas responsabilidades com alinhamento ao tech lead e padrões do time.],
        [Participar de reuniões para antecipar bloqueios e resolver problemas com a engenharia.],
      ),
    ),
  ),
  skills: (
    (name: "Backend", items: "Laravel, PHP, PostgreSQL, MySQL, Redis, MongoDB, APIs REST"),
    (name: "Frontend", items: "Next.js, React, Vue.js, Nuxt, TypeScript, Tailwind CSS, Bootstrap, JavaScript"),
    (name: "Ferramentas", items: "Docker, Git, GitHub, Linux, Pest, PHPStan, Playwright, WebSockets"),
    (name: "Práticas", items: "Code review, reuniões, colaboração entre times"),
  ),
  education: (
    (
      course: "Desenvolvimento de Software para Web — Pós-graduação (em andamento)",
      school: "UNIFUNEC",
      place: "Santa Fé do Sul, SP, Brasil",
      period: "2026 – Presente",
    ),
    (
      course: "Análise e Desenvolvimento de Sistemas",
      school: "UNIFUNEC",
      place: "Santa Fé do Sul, SP, Brasil",
      period: "2021 – 2023",
    ),
    (
      course: "Informática para Internet (INFONET) — Técnico",
      school: "ETEC",
      place: "Santa Fé do Sul, SP, Brasil",
      period: "2018 – 2019",
    ),
  ),
  projects: (
    (
      name: "LaraDoc",
      status: "Em andamento",
      bullets: (
        [Criar um espaço para descrever uma feature como documento, prompt e mudança pronta.],
        [Implementar com Laravel, PostgreSQL e fluxo Docker para paridade local/produção.],
      ),
      url: "https://lara-doc.opbed.com",
    ),
    (
      name: "Adriano Veículos",
      status: "Concluído",
      bullets: (
        [Entregar site de concessionária para o lojista publicar veículos e o cliente navegar o catálogo.],
        [Colaborar com um colega no início da carreira usando Laravel, Bootstrap e PostgreSQL.],
      ),
      url: "https://adrianoveiculosjales.com.br/",
    ),
    (
      name: "use-url-query (OSS)",
      status: "Em andamento",
      bullets: (
        [Hook npm TypeScript/React que sincroniza URL search params com Spatie Laravel Query Builder.],
        [Demo pública (em evolução) para testar filtros, sort e includes contra API Laravel.],
      ),
      url: "https://use-url-query.opbed.com/#introduction",
    ),
    (
      name: "boilerplate-laravel (OSS)",
      status: "Em andamento",
      bullets: (
        [Template Laravel open source com Docker, prompts de agente e sandbox de mutation.],
      ),
      url: "https://github.com/fabriciogferreira/boilerplate-laravel",
    ),
    (
      name: "boilerplate-next (OSS)",
      status: "Em andamento",
      bullets: (
        [Template Next.js open source com Compose (dev + produção standalone).],
      ),
      url: "https://github.com/fabriciogferreira/boilerplate-next",
    ),
  ),
)
