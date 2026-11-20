"use client"

import { TechBadgeList } from "@/components/tech-badge"
import { SKILL_GROUPS } from "@/data/skills"
import { useLocale } from "@/i18n/locale-provider"

export function SkillsSection() {
  const { t } = useLocale()

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-5xl scroll-mt-14 px-4 py-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.skills.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.skills.subtitle}</p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div key={group.id} className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
              {t.skills[group.id]}
            </h3>
            <TechBadgeList
              technologies={group.items}
              className="gap-2"
              aria-label={t.skills[group.id]}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
