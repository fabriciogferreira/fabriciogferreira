export const LOCALES = ["br", "en"] as const

export type Locale = (typeof LOCALES)[number]

export type LocalizedString = Record<Locale, string>

export type LocalizedStrings = Record<Locale, string[]>
