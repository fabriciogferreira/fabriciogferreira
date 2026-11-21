"use client"

import Link from "next/link"

import { ContactForm } from "@/components/contact-form"
import { DownloadLink } from "@/components/download-link"
import { ArrowUpRightIcon, GithubIcon, GmailIcon } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { useLocale } from "@/i18n/locale-provider"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const { t } = useLocale()

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-14 px-4 py-20 sm:px-6"
    >
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.contact.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
        <ContactForm />

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-muted-foreground">{t.contact.orElse}</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href={SITE.mailto}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "justify-center gap-1.5"
                )}
              >
                <GmailIcon size={16} aria-hidden="true" />
                {t.contact.emailCta}
              </Link>
              <DownloadLink
                href={SITE.resumePath}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "justify-center gap-1.5"
                )}
              >
                {t.contact.resumeCta}
              </DownloadLink>
              <Link
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "justify-center gap-1.5"
                )}
              >
                <GithubIcon size={16} aria-hidden="true" />
                {t.contact.githubCta}
              </Link>
            </div>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {SITE.socials.map((social) => {
              const isMail = social.href.startsWith("mailto:")
              const isGithub = social.name === "GitHub"

              return (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    className="group flex items-center justify-between gap-4 py-3 transition-colors hover:text-foreground"
                  >
                    <span className="flex min-w-0 flex-col sm:flex-row sm:items-baseline sm:gap-3">
                      <span className="font-medium text-foreground">
                        {social.name}
                      </span>
                      <span className="truncate text-sm text-muted-foreground">
                        {social.label}
                      </span>
                    </span>
                    {isMail ? (
                      <GmailIcon
                        size={16}
                        aria-hidden="true"
                        className="size-4 shrink-0"
                      />
                    ) : isGithub ? (
                      <GithubIcon
                        size={16}
                        aria-hidden="true"
                        className="size-4 shrink-0"
                      />
                    ) : (
                      <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
