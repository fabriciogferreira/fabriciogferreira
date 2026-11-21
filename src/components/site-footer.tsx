"use client"

import { useLocale } from "@/i18n/locale-provider"
import { SITE } from "@/lib/site"

export function SiteFooter() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© 2026 {SITE.name}</p>
        <p>{t.footer.role}</p>
      </div>
    </footer>
  )
}
