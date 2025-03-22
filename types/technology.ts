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

export type tTechnology = {
    name: string,
    icon: React.FC,
    progress: number
}

export type tTechnologies = Array<tTechnology>

export type tOTechnologies = { 
    [key: string]: tTechnology
}

export type tUnionTechnologies = keyof typeof technologies;

export const technologies = {
    Bootstrap: { name: "HTML", icon: BootstrapOriginal, progress: 100 },
    CSS: { name: "CSS", icon: Css3Original, progress: 54 },
    Docker: { name: "Docker", icon: DockerOriginal, progress: 50 },
    GitHub: { name: "GitHub", icon: GithubOriginal, progress: 25 },
    Git: { name: "Git", icon: GitOriginal, progress: 60 },
    HTML: { name: "HTML", icon: Html5Original, progress: 100 },
    Javascript: { name: "Javascript", icon: JavascriptOriginal, progress: 34 },
    Laravel: { name: "Laravel", icon: LaravelOriginal, progress: 17 },
    MySQL: { name: "HTML", icon: MysqlOriginal, progress: 100 },
    PHP: { name: "PHP", icon: PhpOriginal, progress: 78 },
    PostgreSQL: { name: "PostgreSQL", icon: PostgresqlOriginal, progress: 30 },
    VueJs: { name: "VueJs", icon: VuejsOriginal, progress: 100 },
} as const satisfies Record<string, tTechnology>;