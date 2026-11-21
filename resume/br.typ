#import "lib.typ": resume

// Mesma estrutura estilo US (cronológico); idioma PT-BR; papel A4.
// Sem 1ª pessoa no resumo; verbos de ação; sem foto/dados sensíveis.

#resume(
  paper: "a4",
  name: "Fabrício Gonçalves Ferreira",
  role: "Desenvolvedor Fullstack",
  location: "Santa Fé do Sul, SP, Brasil",
  summary: [
    Desenvolvedor fullstack com experiência prática em produtos web com Laravel
    e Next.js — de APIs e modelos de dados à interface em produção. Trainee em
    times de produto, com organização entre frentes paralelas, entrega com
    Docker e evolução via code review e dailies. Em busca de papéis fullstack
    com foco em qualidade, manutenibilidade e entrega clara.
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
      title: "Trainee — Desenvolvedor Fullstack",
      company: "Enterscience",
      place: "Brasil (remoto / híbrido)",
      period: "Mar 2025 – Presente",
      bullets: (
        [Desenvolver e manter features fullstack com Laravel, React e Next.js em time de produto.],
        [Organizar responsabilidades compartilhadas entre Enterscience e Olie, com stacks e ritmos distintos.],
        [Adotar React, Next.js e Tailwind CSS em produção, ampliando a atuação no frontend.],
      ),
    ),
    (
      title: "Trainee — Desenvolvedor Fullstack",
      company: "Olie",
      place: "Brasil (remoto / híbrido)",
      period: "Ago 2023 – Presente",
      bullets: (
        [Entregar features em Laravel e Vue.js para sistemas em produção com clientes reais.],
        [Assumir novas responsabilidades no programa trainee com alinhamento ao tech lead e padrões do time.],
        [Participar de dailies para antecipar bloqueios e resolver problemas com a engenharia.],
      ),
    ),
  ),
  skills: (
    (name: "Backend", items: "Laravel, PHP, PostgreSQL, MySQL, APIs REST"),
    (name: "Frontend", items: "Next.js, React, Vue.js, Tailwind CSS, Bootstrap, JavaScript"),
    (name: "Ferramentas", items: "Docker, Git, GitHub, Linux"),
    (name: "Práticas", items: "Code review, dailies ágeis, colaboração entre times"),
  ),
  education: (
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
      name: "1% Melhor a Cada Dia (Opbed)",
      status: "Em andamento",
      bullets: (
        [Criar um planejador pessoal de treinos com controle segmentado da rotina.],
        [Implementar com Laravel, PostgreSQL e fluxo Docker para paridade local/produção.],
      ),
      url: "https://opbed.com/pt",
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
  ),
)
