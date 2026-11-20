import type { Locale, LocalizedString, LocalizedStrings } from "@/i18n/types"

export function pickString(value: LocalizedString, locale: Locale): string {
  return value[locale]
}

export function pickStrings(value: LocalizedStrings, locale: Locale): string[] {
  return value[locale]
}
