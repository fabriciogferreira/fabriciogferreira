"use client"

import Image from "next/image"
import Link from "next/link"

import { DownloadLink } from "@/components/download-link"
import { GithubIcon, GmailIcon } from "@/components/icons"
import { TechBadgeList } from "@/components/tech-badge"
import { buttonVariants } from "@/components/ui/button"
import { useLocale } from "@/i18n/locale-provider"
import { pickString } from "@/i18n/pick"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { locale, t } = useLocale()

  return (
    <section
      id="hero_section"
      className="relative flex h-[min(100svh-3.5rem,52rem)] min-h-[28rem] scroll-mt-14 items-end overflow-hidden"
    >
      <Image
        src={SITE.heroImage.src}
        alt={SITE.heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%] animate-hero-image"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/25 dark:via-background/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-16 pt-24 sm:px-6 sm:pb-20">
        <div className="max-w-2xl animate-hero-copy">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-3 font-heading text-xl font-medium tracking-tight text-foreground/90 sm:text-2xl">
            {pickString(SITE.role, locale)}
          </p>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {pickString(SITE.location, locale)}
            <span aria-hidden className="mx-2 text-border">
              ·
            </span>
            {pickString(SITE.availability, locale)}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {pickString(SITE.tagline, locale)}
          </p>
          <TechBadgeList
            technologies={SITE.heroStack}
            className="mt-5"
            aria-label={t.skills.title}
          />
        </div>

        <div className="flex flex-col gap-3 animate-hero-cta sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="#contact"
            className={cn(buttonVariants({ size: "lg" }), "justify-center")}
          >
            <GmailIcon size={18} aria-hidden="true" />
            {t.hero.contact}
          </Link>
          <DownloadLink
            href={SITE.resumePath}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "justify-center gap-1.5 bg-background/60 backdrop-blur-sm"
            )}
          >
            {t.hero.resume}
          </DownloadLink>
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "justify-center bg-background/40 backdrop-blur-sm"
            )}
          >
            {t.hero.projects}
          </Link>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "justify-center gap-1.5 bg-background/40 backdrop-blur-sm"
            )}
          >
            <GithubIcon size={18} />
            {t.hero.github}
          </a>
        </div>
      </div>
    </section>
  )
}
