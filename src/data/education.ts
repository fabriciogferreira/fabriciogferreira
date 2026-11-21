import type { LocalizedString } from "@/i18n/types"

export type Education = {
  slug: string
  school: string
  course: LocalizedString
  site: string
  city: LocalizedString
  startedAt: string
  finishedAt: string
  certificate: {
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
    slug: "unifunec",
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

export function formatEducationPeriod(item: Education): string {
  return `${formatYearMonth(item.startedAt)} — ${formatYearMonth(item.finishedAt)}`
}

function formatYearMonth(value: string): string {
  const [year, month] = value.split("-")
  if (!month) return year
  return `${month}/${year}`
}
