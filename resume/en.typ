#import "lib.typ": resume

// U.S. resume — American English, U.S. Letter, chronological.
// No first-person pronouns; action verbs; city/state (+ country).

#resume(
  paper: "us-letter",
  name: "Fabrício Gonçalves Ferreira",
  role: "Junior Fullstack Developer",
  location: "Santa Fé do Sul, SP, Brazil",
  summary: [
    Junior fullstack developer with professional experience since August 2023
    (Olie), building web products in Laravel and Next.js/Vue — from APIs and
    data models to production UI. Works on product teams, balances parallel
    workstreams, ships with Docker-based workflows, and grows through code
    review and team meetings. Seeking junior fullstack roles focused on
    quality, maintainability, and clear delivery.
  ],
  labels: (
    lang: "en",
    portfolio: "Portfolio",
    contact: "Contact",
    summary: "Professional Summary",
    experience: "Work Experience",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    see-more: "More:",
    github-profile: "GitHub profile",
  ),
  experience: (
    (
      title: "Junior Fullstack Developer",
      company: "Enterscience",
      place: "Brazil (remote / hybrid)",
      period: "Mar 2025 – Present",
      bullets: (
        [Build and maintain fullstack features with Laravel, React, and Next.js in a product team.],
        [Coordinate shared responsibilities across Enterscience and Olie with different stacks and delivery rhythms.],
        [Adopt React, Next.js, and Tailwind CSS through pairing and production work, expanding frontend ownership.],
      ),
    ),
    (
      title: "Junior Fullstack Developer",
      company: "Olie",
      place: "Brazil (remote / hybrid)",
      period: "Aug 2023 – Present",
      bullets: (
        [Deliver Laravel and Vue.js features for production systems used by real customers.],
        [Take on expanding responsibilities with accountability to tech-lead guidance and team standards.],
        [Join team meetings to surface blockers early and resolve issues with the engineering team.],
      ),
    ),
  ),
  skills: (
    (name: "Backend", items: "Laravel, PHP, PostgreSQL, MySQL, Redis, MongoDB, REST APIs"),
    (name: "Frontend", items: "Next.js, React, Vue.js, Nuxt, TypeScript, Tailwind CSS, Bootstrap, JavaScript"),
    (name: "Tools", items: "Docker, Git, GitHub, Linux, Pest, PHPStan, Playwright, WebSockets"),
    (name: "Practices", items: "Code review, team meetings, cross-team collaboration"),
  ),
  education: (
    (
      course: "Web Software Development — Postgraduate specialization (in progress)",
      school: "UNIFUNEC",
      place: "Santa Fé do Sul, SP, Brazil",
      period: "2026 – Present",
    ),
    (
      course: "Bachelor’s equivalent — Systems Analysis and Development",
      school: "UNIFUNEC",
      place: "Santa Fé do Sul, SP, Brazil",
      period: "2021 – 2023",
    ),
    (
      course: "Technical Diploma — Internet Computing (INFONET)",
      school: "ETEC",
      place: "Santa Fé do Sul, SP, Brazil",
      period: "2018 – 2019",
    ),
  ),
  projects: (
    (
      name: "1% Melhor a Cada Dia (Opbed)",
      status: "In progress",
      bullets: (
        [Designed a personal training planner to structure workout routines with segmented control.],
        [Implemented with Laravel, PostgreSQL, and a Dockerized workflow for consistent local/prod parity.],
      ),
      url: "https://opbed.com/",
    ),
    (
      name: "Adriano Veículos",
      status: "Completed",
      bullets: (
        [Shipped a dealership catalog site so shop owners can publish vehicles for customers to browse.],
        [Collaborated with a peer engineer early in career using Laravel, Bootstrap, and PostgreSQL.],
      ),
      url: "https://adrianoveiculosjales.com.br/",
    ),
    (
      name: "use-url-query (OSS)",
      status: "In progress",
      bullets: (
        [TypeScript/React npm hook syncing URL search params with Spatie Laravel Query Builder.],
      ),
      url: "https://github.com/fabriciogferreira/use-url-query",
    ),
    (
      name: "boilerplate-laravel (OSS)",
      status: "In progress",
      bullets: (
        [Open-source Laravel template with Docker, agent prompts, and mutation sandbox.],
      ),
      url: "https://github.com/fabriciogferreira/boilerplate-laravel",
    ),
    (
      name: "boilerplate-next (OSS)",
      status: "In progress",
      bullets: (
        [Open-source Next.js template with Compose (dev + standalone production).],
      ),
      url: "https://github.com/fabriciogferreira/boilerplate-next",
    ),
  ),
)
