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
}

export type tTechnologies = Array<tTechnology>

export type tOTechnologies = { 
    [key: string]: tTechnology
}

export type tUnionTechnologies = keyof typeof technologies;

export const technologies = {
    Bootstrap: { name: "HTML", icon: BootstrapOriginal, },
    CSS: { name: "CSS", icon: Css3Original },
    Docker: { name: "Docker", icon: DockerOriginal },
    GitHub: { name: "GitHub", icon: GithubOriginal },
    Git: { name: "Git", icon: GitOriginal },
    HTML: { name: "HTML", icon: Html5Original, },
    Javascript: { name: "Javascript", icon: JavascriptOriginal },
    Laravel: { name: "Laravel", icon: LaravelOriginal },
    MySQL: { name: "HTML", icon: MysqlOriginal, },
    PHP: { name: "PHP", icon: PhpOriginal },
    PostgreSQL: { name: "PostgreSQL", icon: PostgresqlOriginal },
    VueJs: { name: "VueJs", icon: VuejsOriginal, },
} as const satisfies Record<string, tTechnology>;