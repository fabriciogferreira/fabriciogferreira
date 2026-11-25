import type { TechName } from "@/data/technologies"
import type { LocalizedString, LocalizedStrings } from "@/i18n/types"

export type JobType = "personal" | "enterprise" | "freelancer"

export type Job = {
  slug: string
  enterprise: string
  position: LocalizedString
  type: JobType
  link: string
  startedAt: string
  finishedAt: string | null
  paragraphs: LocalizedStrings
  technologies: TechName[]
}

/** Reverse chronological — most recent first. */
export const JOBS: Job[] = [
  {
    slug: "enterscience",
    enterprise: "Enterscience",
    position: { br: "Junior", en: "Junior" },
    type: "freelancer",
    link: "https://www.enterscience.com.br/",
    startedAt: "2025-03",
    finishedAt: "2026-11",
    paragraphs: {
      br: [
        "Segundo emprego, via parceria com a Olie — fui requisitado para uma oportunidade que surgiu na Enterscience.",
        "Trabalho nas duas empresas ao mesmo tempo, o que exige organização: responsabilidades parecidas, ritmos e stacks diferentes.",
        "Aprendi React, Next.js e Tailwind, ampliando o leque de tecnologias e as conexões com o time.",
      ],
      en: [
        "Second role, through a partnership with Olie — I was asked to join an opportunity at Enterscience.",
        "I work at both companies at once, which takes organization: similar responsibilities, different pace and stacks.",
        "I picked up React, Next.js and Tailwind, widening the toolkit and connections with the team.",
      ],
    },
    technologies: [
      "Laravel",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Docker",
      "MySQL",
      "PHP",
    ] satisfies TechName[],
  },
  {
    slug: "olie",
    enterprise: "Olie",
    position: { br: "Junior", en: "Junior" },
    type: "freelancer",
    link: "https://olie.ai/",
    startedAt: "2023-08",
    finishedAt: "2026-11",
    paragraphs: {
      br: [
        "Primeiro emprego — aí ficou clara a diferença entre programar para o mercado e programar só para estudo.",
        "Compartilhei o que sabia e, principalmente, aprendi com o time: práticas e abordagens que levo para outros projetos.",
        "Recebi novas responsabilidades ao longo do programa e as assumi com dedicação.",
        "Reuniões com o tech leader para alinhar desafios do trainee e encontrar soluções em conjunto.",
      ],
      en: [
        "First job — where the gap between coding for production and coding for study became clear.",
        "I shared what I knew and, more importantly, learned from the team: practices I still carry.",
        "I took on new responsibilities through the trainee program and owned them.",
        "Meetings with the tech lead to surface trainee challenges and solve them together.",
      ],
    },
    technologies: [
      "Laravel",
      "Vue.js",
      "Bootstrap",
      "Docker",
      "MySQL",
      "PHP",
    ] satisfies TechName[],
  },
]

export function formatJobPeriod(
  job: Job,
  presentLabel: string
): string {
  const start = formatYearMonth(job.startedAt)
  const end = job.finishedAt ? formatYearMonth(job.finishedAt) : presentLabel
  return `${start} — ${end}`
}

function formatYearMonth(value: string): string {
  const [year, month] = value.split("-")
  if (!month) return year
  return `${month}/${year}`
}
