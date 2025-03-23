export type tTag = {
    name: string,
    order: number,
}

export type tTags = Array<tTag>

export type rTags = Record<string, tTag>

export const rTags = {
    fullstack: {name: 'Fullstack', order: 1},
    frontend: {name: 'Frontend', order: 2},
    backend: {name: 'Backend', order: 2},
} as const satisfies rTags

export const tags = Object.values(rTags)