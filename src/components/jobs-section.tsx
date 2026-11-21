"use client"

import Link from "next/link"
import { ArrowUpRightIcon } from "@/components/icons"
import { TechBadgeList } from "@/components/tech-badge"
import {
  JOBS,
  formatJobPeriod,
  type Job,
} from "@/data/jobs"
import { useLocale } from "@/i18n/locale-provider"
import { pickString, pickStrings } from "@/i18n/pick"

function JobItem({ job }: { job: Job }) {
  const { locale, t } = useLocale()
  const typeLabel = t.jobs[job.type]

  return (
    <li className="relative">
      <span
        className="absolute top-1.5 -left-[calc(2rem+0.3125rem)] size-2.5 rounded-full bg-primary ring-4 ring-background"
        aria-hidden
      />

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-heading text-xl font-semibold tracking-tight">
            {pickString(job.position, locale)}
            <span className="font-normal text-muted-foreground"> · </span>
            <Link
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
            >
              {job.enterprise}
              <ArrowUpRightIcon className="size-3.5 opacity-60" />
            </Link>
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={job.startedAt}>
            {formatJobPeriod(job, t.jobs.present)}
          </time>
          <span aria-hidden>·</span>
          <span>{typeLabel}</span>
        </div>

        <div className="flex flex-col gap-3 text-muted-foreground leading-relaxed">
          {pickStrings(job.paragraphs, locale).map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <TechBadgeList technologies={job.technologies} />
      </div>
    </li>
  )
}

export function JobsSection() {
  const { t } = useLocale()

  return (
    <section
      id="jobs"
      className="mx-auto w-full max-w-5xl scroll-mt-14 px-4 py-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.jobs.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.jobs.subtitle}</p>
      </div>

      <ol className="mt-12 ml-1.5 flex flex-col gap-12 border-l border-border pl-8">
        {JOBS.map((job) => (
          <JobItem key={job.slug} job={job} />
        ))}
      </ol>
    </section>
  )
}
