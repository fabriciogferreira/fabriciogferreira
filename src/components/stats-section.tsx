"use client"

import Link from "next/link"
import { ArrowUpRightIcon } from "@/components/icons"

import { buttonVariants } from "@/components/ui/button"
import { GITHUB_PROFILE, getStats } from "@/data/stats"
import { useLocale } from "@/i18n/locale-provider"
import { cn } from "@/lib/utils"

export function StatsSection() {
  const { locale, t } = useLocale()
  const stats = getStats()

  return (
    <section
      id="statistics"
      className="mx-auto w-full max-w-5xl scroll-mt-14 px-4 py-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.stats.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.stats.subtitle}</p>
      </div>

      <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((stat) => {
          const value =
            typeof stat.value === "function" ? stat.value(locale) : stat.value
          const isExperience = stat.id === "years"
          return (
            <div
              key={stat.id}
              className="flex flex-col gap-1 border-t border-border pt-4"
            >
              <dt className="order-2 text-sm text-muted-foreground">
                {t.stats[stat.id]}
              </dt>
              <dd
                className={
                  isExperience
                    ? "order-1 font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
                    : "order-1 font-heading text-4xl font-semibold tracking-tight sm:text-5xl"
                }
              >
                {value}
              </dd>
            </div>
          )
        })}
      </dl>

      <div className="mt-10">
        <Link
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
        >
          {t.stats.github}
          <ArrowUpRightIcon />
        </Link>
      </div>
    </section>
  )
}
