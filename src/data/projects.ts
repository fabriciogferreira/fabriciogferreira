import type { TechName } from "@/data/technologies"
import type { LocalizedString } from "@/i18n/types"

export type ProjectStatus = "developing" | "finished"

export type Project = {
  slug: string
  name: string
  status: ProjectStatus
  description: LocalizedString
  cover: {
    src: string
    alt: LocalizedString
  }
  site: string
  siteTest?: string
  technologies: TechName[]
  isPersonal: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: "opbed",
    name: "1% Melhor a Cada Dia",
    status: "developing",
    description: {
      br: "Uma iniciativa pessoal criada para resolver meus próprios desafios na organização dos treinos de musculação. A plataforma foi pensada para oferecer controle e praticidade, permitindo gerenciar a rotina de treino de forma segmentada e independente — ideal para quem busca evolução com mais foco e consistência.",
      en: "A personal project born from my own struggles organizing strength training. The platform gives structured control over workout routines — built for consistent progress.",
    },
    cover: {
      src: "/projects/opbed/signin.png",
      alt: {
        br: "Tela de login do 1% Melhor a Cada Dia",
        en: "Sign-in screen of 1% Melhor a Cada Dia",
      },
    },
    site: "https://opbed.com/pt/signin",
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
]
