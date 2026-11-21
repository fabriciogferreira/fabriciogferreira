"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "@/components/icons"
import { TechBadgeList } from "@/components/tech-badge"
import { buttonVariants } from "@/components/ui/button"
import { PROJECTS, type Project } from "@/data/projects"
import { useLocale } from "@/i18n/locale-provider"
import { pickString } from "@/i18n/pick"
import { cn } from "@/lib/utils"

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const { locale, t } = useLocale()
  const reverse = index % 2 === 1
  const statusLabel =
    project.status === "developing"
      ? t.projects.statusDeveloping
      : t.projects.statusFinished

  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden rounded-md bg-muted ring-1 ring-foreground/10",
          reverse && "md:order-2"
        )}
      >
        <Image
          src={project.cover.src}
          alt={pickString(project.cover.alt, locale)}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.03]"
        />
      </div>

      <div className={cn("flex flex-col gap-4", reverse && "md:order-1")}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-heading text-2xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {statusLabel}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {pickString(project.description, locale)}
        </p>

        <TechBadgeList technologies={project.technologies} />

        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
          >
            {t.projects.visit}
            <ArrowUpRightIcon />
          </Link>
          {project.siteTest && (
            <Link
              href={project.siteTest}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "gap-1.5"
              )}
            >
              {t.projects.visitTest}
              <ArrowUpRightIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const { t } = useLocale()

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl scroll-mt-14 px-4 py-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.projects.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.projects.subtitle}</p>
      </div>

      <div className="mt-12 flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((project, index) => (
          <ProjectBlock key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
