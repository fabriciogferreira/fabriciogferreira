import { icons } from '@/types/icons';
interface IconProps extends React.SVGProps<SVGElement> {
    size?: number | string;
    color?: string;
}

export type tFile = {
    name: string
    link: string
    icon: React.ComponentType<IconProps>,
}

export type tFiles = Array<tFile>

export const socialMedias: tFiles = [
    { name: "Gmail", link: "mailto:fabriciof481@gmail.com", icon: icons.gmail },
    { name: "GitHub", link: "https://www.github.com/fabriciogferreira", icon: icons.github },
    { name: "Linkedin", link: "https://www.linkedin.com/in/fabriciogferreira/", icon: icons.linkedin },
    { name: "Instagram", link: "https://www.instagram.com/fabricio1103/", icon: icons.instagram },
]