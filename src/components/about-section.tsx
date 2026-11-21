"use client"

import Image from "next/image"

import { ABOUT_PARAGRAPHS, ABOUT_PHOTOS } from "@/data/about"
import { useLocale } from "@/i18n/locale-provider"
import { pickString, pickStrings } from "@/i18n/pick"

export function AboutSection() {
  const { locale, t } = useLocale()

  return (
    <section
      id="about_me"
      className="mx-auto w-full max-w-5xl scroll-mt-14 px-4 py-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.about.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.about.subtitle}</p>
      </div>

      <div className="mt-10 max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
        {pickStrings(ABOUT_PARAGRAPHS, locale).map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {ABOUT_PHOTOS.map((photo) => (
          <li
            key={photo.src}
            className="relative aspect-[3/4] overflow-hidden rounded-md bg-muted ring-1 ring-foreground/10"
          >
            <Image
              src={photo.src}
              alt={pickString(photo.alt, locale)}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
