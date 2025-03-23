export type tLanguage = string

export type tLanguages = Array<tLanguage>

export const languages = ["en", "br"] as const satisfies tLanguages

export type uLanguages = (typeof languages)[number];

export const defaultLanguage: uLanguages = "en"