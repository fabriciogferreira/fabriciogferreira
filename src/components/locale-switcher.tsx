"use client"

import { BrazilFlagIcon, UsFlagIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLocale } from "@/i18n/locale-provider"
import type { Locale } from "@/i18n/types"

function LocaleFlag({ locale, className }: { locale: Locale; className?: string }) {
  const Flag = locale === "br" ? BrazilFlagIcon : UsFlagIcon
  return (
    <Flag
      className={className}
      title={locale === "br" ? "Brasil" : "United States"}
      aria-hidden
    />
  )
}

export function LocaleSwitcher() {
  const { locale, setLocale, t } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="sm" className="gap-1.5" />}
      >
        <LocaleFlag locale={locale} className="size-4 rounded-sm" />
        <span>{locale === "br" ? "PT" : "EN"}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => setLocale(value as Locale)}
        >
          <DropdownMenuRadioItem value="br" className="gap-2">
            <LocaleFlag locale="br" className="size-4 rounded-sm" />
            {t.localePt}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en" className="gap-2">
            <LocaleFlag locale="en" className="size-4 rounded-sm" />
            {t.localeEn}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
