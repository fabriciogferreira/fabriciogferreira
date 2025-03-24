import { tIcon, icons } from "./icons"

export type tFile = {
    name: string
    icon: tIcon
    path: string
}

export type tFiles = Array<tFile>

export const files = {
    resume: {name: "Currículo", icon: icons.idCard, path: "about-me/curriculo.pdf"},
    garduationTCC: {name: "TCC da Graduação", icon: icons.articles, path: "education/unifunec/tcc.pdf"},
} as const satisfies Record<string, tFile>;
