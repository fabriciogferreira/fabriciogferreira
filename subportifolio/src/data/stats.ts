import { JOBS } from "@/data/jobs"
import { PROJECTS } from "@/data/projects"

/** Snapshot date for “years of experience” — avoids Date.now() in prerender. */
export const STATS_AS_OF = "2026-11"

function monthsBetween(start: string, end: string): number {
  const [sy, sm] = start.split("-").map(Number)
  const [ey, em] = end.split("-").map(Number)
  return (ey - sy) * 12 + (em - sm)
}

function earliestJobStart(): string {
  return JOBS.map((job) => job.startedAt).sort()[0] ?? "2023-08"
}

export type StatId = "years" | "clients" | "projects"

export type StatItem = {
  id: StatId
  value: string
}

export function getStats(): StatItem[] {
  const start = earliestJobStart()
  const months = monthsBetween(start, STATS_AS_OF)
  const years = Math.max(1, Math.ceil(months / 12))
  const clients = PROJECTS.filter((project) => !project.isPersonal).length
  const projects = PROJECTS.length

  return [
    { id: "years", value: `+${years}` },
    { id: "clients", value: `+${clients}` },
    { id: "projects", value: `+${projects}` },
  ]
}

export const GITHUB_PROFILE = "https://github.com/fabriciogferreira"
