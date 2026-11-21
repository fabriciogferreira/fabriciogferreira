import { JOBS } from "@/data/jobs"
import { PROJECTS } from "@/data/projects"
import type { Locale } from "@/i18n/types"

/**
 * Career start for “experience” metrics — first day at Olie (Aug 2023).
 * Seniority framing: Junior from that date (not inflated whole years).
 */
export const CAREER_START = "2023-08"

/** Snapshot month for experience — avoids Date.now() in prerender. */
export const STATS_AS_OF = "2026-11"

function monthsBetween(start: string, end: string): number {
  const [sy, sm] = start.split("-").map(Number)
  const [ey, em] = end.split("-").map(Number)
  return Math.max(0, (ey - sy) * 12 + (em - sm))
}

export function experienceDuration(
  start: string = CAREER_START,
  asOf: string = STATS_AS_OF
): { years: number; months: number; totalMonths: number } {
  const totalMonths = monthsBetween(start, asOf)
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    totalMonths,
  }
}

/** “3 anos e 3 meses” / “3 years 3 months” — no ceil inflation. */
export function formatExperienceDuration(
  locale: Locale,
  start: string = CAREER_START,
  asOf: string = STATS_AS_OF
): string {
  const { years, months } = experienceDuration(start, asOf)

  if (locale === "br") {
    const parts: string[] = []
    if (years > 0) {
      parts.push(years === 1 ? "1 ano" : `${years} anos`)
    }
    if (months > 0 || years === 0) {
      parts.push(months === 1 ? "1 mês" : `${months} meses`)
    }
    return parts.join(" e ")
  }

  const parts: string[] = []
  if (years > 0) {
    parts.push(years === 1 ? "1 year" : `${years} years`)
  }
  if (months > 0 || years === 0) {
    parts.push(months === 1 ? "1 month" : `${months} months`)
  }
  return parts.join(" ")
}

export type StatId = "years" | "clients" | "projects"

export type StatItem = {
  id: StatId
  /** Localized display for `years`; plain count string for the others. */
  value: string | ((locale: Locale) => string)
}

export function getStats(): StatItem[] {
  // Prefer Olie start; fall back to earliest job if data ever changes.
  const olie = JOBS.find((job) => job.slug === "olie")
  const start = olie?.startedAt ?? CAREER_START
  const clients = PROJECTS.filter((project) => !project.isPersonal).length
  const projects = PROJECTS.length

  return [
    {
      id: "years",
      value: (locale) => formatExperienceDuration(locale, start, STATS_AS_OF),
    },
    { id: "clients", value: `+${clients}` },
    { id: "projects", value: `+${projects}` },
  ]
}

export const GITHUB_PROFILE = "https://github.com/fabriciogferreira"
