export type tFile = {
    name: string
    icon: string
    path: string
}

export type tFiles = Array<tFile>

export const files = {
    resume: {name: "Currículo", icon: "address-card", path: "about-me/curriculo.pdf"},
    garduationTCC: {name: "TCC da Graduação", icon: "newspaper", path: "education/unifunec/tcc.pdf"},
} as const satisfies Record<string, tFile>;
