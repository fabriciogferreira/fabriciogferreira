import { icons } from '@/types/icons';

export type file = {
    name: string
    link: string
    icon: React.FC,
}

export const SOCIAL_MEDIAS: Array<file> = [
    {name: "GitHub", link: "https://www.github.com/fabriciogferreira", icon: icons.github},
    {name: "Linkedin", link: "https://www.linkedin.com/in/fabriciogferreira/", icon: icons.linkedin },
    {name: "Instagram", link: "https://www.instagram.com/fabricio1103/", icon: icons.instagram},
]