import { 
    BootstrapOriginal,
    Css3Original,
    DockerOriginal,
    GithubOriginal,
    GitOriginal,
    Html5Original,
    JavascriptOriginal,
    LaravelOriginal,
    MysqlOriginal,
    PhpOriginal,
    PostgresqlOriginal,
    VuejsOriginal
} from 'devicons-react';


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
    VueJs: { name: "VueJs", icon: VuejsOriginal, order: 2 },
    Docker: { name: "Docker", icon: DockerOriginal, order: 3 },
    GitHub: { name: "GitHub", icon: GithubOriginal, order: 4 },
    PostgreSQL: { name: "PostgreSQL", icon: PostgresqlOriginal, order: 5 },
    Bootstrap: { name: "Bootstrap", icon: BootstrapOriginal, order: 6 },
    Javascript: { name: "Javascript", icon: JavascriptOriginal, order: 7 },
    PHP: { name: "PHP", icon: PhpOriginal, order: 8 },
    MySQL: { name: "MySQL", icon: MysqlOriginal, order: 9 },
    Git: { name: "Git", icon: GitOriginal, order: 10 },
    CSS: { name: "CSS", icon: Css3Original, order: 11 },
    HTML: { name: "HTML", icon: Html5Original, order: 12 },
    Laravel: { name: "Laravel", icon: LaravelOriginal, order: 1 },
} as const satisfies Record<string, tTechnology>;