"use client"

import Link from "next/link"

import { ArrowUpRightIcon } from "@/components/icons"
import { CREDITS } from "@/data/credits"
import { useLocale } from "@/i18n/locale-provider"
import { pickString } from "@/i18n/pick"

export function CreditsSection() {
  const { locale, t } = useLocale()

  return (
    <section
      id="credits"
      className="mx-auto w-full max-w-5xl scroll-mt-14 px-4 py-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.credits.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.credits.subtitle}</p>
      </div>

      <ul className="mt-12 divide-y divide-border border-y border-border">
        {CREDITS.map((credit) => (
          <li key={credit.slug} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
            <span className="w-36 shrink-0 text-sm font-medium text-foreground sm:w-40">
              {pickString(credit.kind, locale)}
            </span>
            <div className="min-w-0 flex-1">
              <Link
                href={credit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
              >
                {credit.product}
                <ArrowUpRightIcon className="size-3.5 opacity-60" />
              </Link>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {pickString(credit.description, locale)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
