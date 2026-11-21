import type { LocalizedString } from "@/i18n/types"

export type Education = {
  slug: string
  school: string
  course: LocalizedString
  /** Optional level line under the course (e.g. pós-graduação). */
  level?: LocalizedString
  site: string
  city: LocalizedString
  startedAt: string
  /** `null` = still in progress. */
  finishedAt: string | null
  certificate?: {
    href: string
    labelKey: "diploma" | "certificate"
  }
  extra?: {
    href: string
    labelKey: "tcc"
  }
}

/** Reverse chronological — most recent first. */
export const EDUCATIONS: Education[] = [
  {
    slug: "unifunec-pos-web",
    school: "UNIFUNEC",
    course: {
      br: "Desenvolvimento de Software para Web",
      en: "Web Software Development",
    },
    level: {
      br: "Pós-graduação",
      en: "Postgraduate specialization",
    },
    site: "https://unifunec.edu.br/",
    city: {
      br: "Santa Fé do Sul — SP",
      en: "Santa Fé do Sul — SP, Brazil",
    },
    startedAt: "2026-01",
    finishedAt: null,
  },
  {
    slug: "unifunec-ads",
    school: "UNIFUNEC",
    course: {
      br: "Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis and Development",
    },
    site: "https://unifunec.edu.br/",
    city: {
      br: "Santa Fé do Sul — SP",
      en: "Santa Fé do Sul — SP, Brazil",
    },
    startedAt: "2021-02",
    finishedAt: "2023-12",
    certificate: {
      href: "/education/unifunec/diploma.jpeg",
      labelKey: "diploma",
    },
    extra: {
      href: "/education/unifunec/tcc.pdf",
      labelKey: "tcc",
    },
  },
  {
    slug: "etec",
    school: "ETEC",
    course: {
      br: "Informática para Internet (INFONET)",
      en: "Internet Computing (INFONET)",
    },
    site: "https://etecsantafedosul.cps.sp.gov.br/",
    city: {
      br: "Santa Fé do Sul — SP",
      en: "Santa Fé do Sul — SP, Brazil",
    },
    startedAt: "2018-02",
    finishedAt: "2019-07",
    certificate: {
      href: "/education/etec/certificate.jpg",
      labelKey: "certificate",
    },
  },
]

export function formatEducationPeriod(
  item: Education,
  presentLabel: string
): string {
  const start = formatYearMonth(item.startedAt)
  const end = item.finishedAt
    ? formatYearMonth(item.finishedAt)
    : presentLabel
  return `${start} — ${end}`
}

function formatYearMonth(value: string): string {
  const [year, month] = value.split("-")
  if (!month) return year
  return `${month}/${year}`
}
