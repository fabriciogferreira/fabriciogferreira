"use client"

import Link from "next/link"

import { DownloadLink } from "@/components/download-link"
import { ArrowUpRightIcon, EyeIcon } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import {
  EDUCATIONS,
  formatEducationPeriod,
  type Education,
} from "@/data/education"
import { useLocale } from "@/i18n/locale-provider"
import { pickString } from "@/i18n/pick"
import { cn } from "@/lib/utils"

function CredentialActions({
  href,
  label,
}: {
  href: string
  label: string
}) {
  const { t } = useLocale()

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
      >
        <EyeIcon />
        {t.education.view} {label}
      </Link>
      <DownloadLink
        href={href}
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          "gap-1.5"
        )}
      >
        {t.education.download}
      </DownloadLink>
    </div>
  )
}

function EducationItem({ item }: { item: Education }) {
  const { locale, t } = useLocale()

  return (
    <li className="relative">
      <span
        className="absolute top-1.5 -left-[calc(2rem+0.3125rem)] size-2.5 rounded-full bg-primary ring-4 ring-background"
        aria-hidden
      />

      <div className="flex flex-col gap-3">
        <div>
          <h3 className="font-heading text-xl font-semibold tracking-tight">
            {pickString(item.course, locale)}
          </h3>
          <p className="mt-1">
            <Link
              href={item.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
            >
              {item.school}
              <ArrowUpRightIcon className="size-3.5 opacity-60" />
            </Link>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={item.startedAt}>{formatEducationPeriod(item)}</time>
          <span aria-hidden>·</span>
          <span>{pickString(item.city, locale)}</span>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <CredentialActions
            href={item.certificate.href}
            label={t.education[item.certificate.labelKey]}
          />
          {item.extra && (
            <CredentialActions
              href={item.extra.href}
              label={t.education[item.extra.labelKey]}
            />
          )}
        </div>
      </div>
    </li>
  )
}

export function EducationSection() {
  const { t } = useLocale()

  return (
    <section
      id="education"
      className="mx-auto w-full max-w-5xl scroll-mt-14 px-4 py-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.education.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.education.subtitle}</p>
      </div>

      <ol className="mt-12 ml-1.5 flex flex-col gap-12 border-l border-border pl-8">
        {EDUCATIONS.map((item) => (
          <EducationItem key={item.slug} item={item} />
        ))}
      </ol>
    </section>
  )
}
