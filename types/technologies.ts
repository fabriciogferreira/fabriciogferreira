import { icons } from '@/types/icons';

interface IconProps extends React.SVGProps<SVGElement> {
    size?: number | string;
    color?: string;
}

export type tTechnology = {
    name: string,
    icon: React.ComponentType<IconProps>
    order: number
}

export type tTechnologies = Array<tTechnology>

export type tOTechnologies = { 
    [key: string]: tTechnology
}

export type tUnionTechnologies = keyof typeof technologies;

export const technologies = {
    Laravel: { name: "Laravel", icon: icons.laravel, order: 1 },
    NextJS: { name: "NextJs", icon: icons.nextJS, order: 2 },
    TailwindCSS: { name: "Tailwind CSS", icon: icons.tailwindCSS, order: 3 },
    React: { name: "React", icon: icons.react, order: 4 },
    VueJs: { name: "VueJs", icon: icons.vuejs, order: 5 },
    Docker: { name: "Docker", icon: icons.docker, order: 6 },
    GitHub: { name: "GitHub", icon: icons.github, order: 7 },
    PostgreSQL: { name: "PostgreSQL", icon: icons.postgresql, order: 8 },
    Bootstrap: { name: "Bootstrap", icon: icons.bootstrap, order: 9 },
    Javascript: { name: "Javascript", icon: icons.javascript, order: 10 },
    PHP: { name: "PHP", icon: icons.php, order: 11 },
    MySQL: { name: "MySQL", icon: icons.mysql, order: 12 },
    Git: { name: "Git", icon: icons.git, order: 13 },
    CSS: { name: "CSS", icon: icons.css3, order: 14 },
    HTML: { name: "HTML", icon: icons.html5, order: 15 },
} as const satisfies Record<string, tTechnology>;