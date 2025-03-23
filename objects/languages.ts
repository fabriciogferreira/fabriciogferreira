
import { icons, tIcon } from '@/types/icons'
import { uLanguages } from '@/types/languages'


export type tLanguage = {
    icon: tIcon,
    label: string
}

export type tLanguages = Array<tLanguage>

export type rLanguage = Record<uLanguages, tLanguage>

export const rLanguages = {
    br: {icon: icons.br, label: "Português"},
    en: {icon: icons.us, label: "English"}
} as const satisfies rLanguage

export const languages = Object.values(rLanguages)