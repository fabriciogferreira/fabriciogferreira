export type tTag = string

export type tTags = Array<tTag>

export const tags = [
    'Backend',
    'Frontend',
    'Fullstack'
] as const satisfies tTags

export type tUnionTag = (typeof tags)[number];

export type tUnionTags = Array<tUnionTag>