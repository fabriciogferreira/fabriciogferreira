import type { TechName } from "@/data/technologies"
import type { LocalizedString } from "@/i18n/types"

export type ProjectStatus = "developing" | "finished"

export type Project = {
  slug: string
  name: string
  status: ProjectStatus
  description: LocalizedString
  /** Product screenshot — omit for OSS/tooling without a product UI. */
  cover?: {
    src: string
    alt: LocalizedString
  }
  /** Public product / docs URL. */
  site?: string
  siteTest?: string
  /** Public GitHub (or npm) — required for closed-UI OSS. */
  repo?: string
  technologies: TechName[]
  /** false = client work (counts toward “clientes”). */
  isPersonal: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: "opbed",
    name: "LaraDoc",
    status: "developing",
    description: {
      br: "Um Doc, Um Prompt, Uma Feature — espaço para descrever a feature como documento, transformá-la em prompt e entregar a mudança, mantendo documentação e produto na mesma história.",
      en: "One Doc, One Prompt, One Feature — a place to write the feature as a document, turn it into a build prompt, and ship the change while docs and product stay the same story.",
    },
    cover: {
      src: "/projects/opbed/signin.png",
      alt: {
        br: "Tela de login do LaraDoc",
        en: "Sign-in screen of LaraDoc",
      },
    },
    site: "https://lara-doc.opbed.com",
    siteTest: "https://staging.opbed.com/pt/signin",
    technologies: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "JavaScript",
      "Docker",
      "HTML",
      "CSS",
    ] satisfies TechName[],
    isPersonal: true,
  },
  {
    slug: "adriano-veiculos",
    name: "Adriano Veículos",
    status: "finished",
    description: {
      br: "Site de concessionária desenvolvido com um amigo no começo da carreira — cerca de cinco meses após entrar no mercado. Permite visualizar os carros cadastrados pelo dono da loja.",
      en: "Dealership website built with a friend early in my career — about five months after entering the market. Visitors can browse cars listed by the shop owner.",
    },
    cover: {
      src: "/projects/adrianoveiculosjales/home.png",
      alt: {
        br: "Página inicial do Adriano Veículos Jales",
        en: "Home page of Adriano Veículos Jales",
      },
    },
    site: "https://adrianoveiculosjales.com.br/",
    technologies: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Bootstrap",
      "JavaScript",
      "Docker",
      "HTML",
      "CSS",
    ] satisfies TechName[],
    isPersonal: false,
  },
  {
    slug: "use-url-query",
    name: "use-url-query",
    status: "developing",
    description: {
      br: "Hook TypeScript/React (npm) que sincroniza search params da URL com o Spatie Laravel Query Builder — demo ao vivo para o recrutador testar filtros, sort e includes.",
      en: "TypeScript/React npm hook that syncs URL search params with Spatie Laravel Query Builder — live demo so recruiters can try filters, sort, and includes.",
    },
    site: "https://use-url-query.opbed.com/#introduction",
    repo: "https://github.com/fabriciogferreira/use-url-query",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Laravel",
      "GitHub",
    ] satisfies TechName[],
    isPersonal: true,
  },
  {
    slug: "boilerplate-laravel",
    name: "boilerplate-laravel",
    status: "developing",
    description: {
      br: "Template Laravel open source com Docker, prompts de agente e sandbox de mutation/coverage — base reutilizável para apps novos no fluxo WorkVM.",
      en: "Open-source Laravel template with Docker, agent prompts, and mutation/coverage sandbox — a reusable base for new apps in the WorkVM flow.",
    },
    repo: "https://github.com/fabriciogferreira/boilerplate-laravel",
    technologies: [
      "Laravel",
      "PHP",
      "Docker",
      "PostgreSQL",
      "GitHub",
    ] satisfies TechName[],
    isPersonal: true,
  },
  {
    slug: "boilerplate-next",
    name: "boilerplate-next",
    status: "developing",
    description: {
      br: "Template Next.js open source com Compose (dev + profile de produção standalone) — DX de front alinhada ao mesmo ecossistema de VMs dos apps Laravel.",
      en: "Open-source Next.js template with Compose (dev + standalone prod profile) — frontend DX aligned with the same VM ecosystem as the Laravel apps.",
    },
    repo: "https://github.com/fabriciogferreira/boilerplate-next",
    technologies: [
      "Next.js",
      "React",
      "Docker",
      "GitHub",
    ] satisfies TechName[],
    isPersonal: true,
  },
]
