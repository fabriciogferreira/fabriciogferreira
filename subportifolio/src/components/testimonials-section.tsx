"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "@/components/icons"

import {
  TESTIMONIALS,
  formatTestimonialDate,
  type Testimonial,
} from "@/data/testimonials"
import { useLocale } from "@/i18n/locale-provider"
import { pickString } from "@/i18n/pick"

function TestimonialCard({ item }: { item: Testimonial }) {
  const { locale } = useLocale()

  return (
    <blockquote className="flex flex-col gap-6 rounded-md border border-border p-6">
      <p className="text-muted-foreground leading-relaxed">
        <span className="text-foreground">“</span>
        {pickString(item.quote, locale)}
        <span className="text-foreground">”</span>
      </p>

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href={item.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative size-11 shrink-0 overflow-hidden rounded-full bg-muted ring-1 ring-foreground/10"
            aria-label={`LinkedIn — ${item.name}`}
          >
            {item.profileSrc ? (
              <Image
                src={item.profileSrc}
                alt=""
                fill
                sizes="44px"
                className="object-cover"
              />
            ) : (
              <span className="flex size-full items-center justify-center text-xs font-medium text-muted-foreground">
                {item.initials}
              </span>
            )}
          </Link>
          <div className="min-w-0">
            <cite className="not-italic font-medium text-foreground">
              {item.name}
            </cite>
            <p className="text-sm text-muted-foreground">
              {pickString(item.position, locale)}
              <span aria-hidden> · </span>
              <Link
                href={item.site}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 underline-offset-4 hover:underline"
              >
                {item.enterprise}
                <ArrowUpRightIcon className="size-3 opacity-60" />
              </Link>
            </p>
          </div>
        </div>
        <time
          dateTime={item.date}
          className="text-xs text-muted-foreground tabular-nums"
        >
          {formatTestimonialDate(item.date)}
        </time>
      </footer>
    </blockquote>
  )
}

export function TestimonialsSection() {
  const { t } = useLocale()

  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-5xl scroll-mt-14 px-4 py-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.testimonials.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.testimonials.subtitle}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((item) => (
          <TestimonialCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  )
}
