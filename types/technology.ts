import BootstrapIcon from "@/components/icons/BootstrapIcon"
import CSSIcon from "@/components/icons/CSSIcon"
import DockerIcon from "@/components/icons/DockerIcon"
import GitHubIcon from "@/components/icons/GitHubIcon"
import GitIcon from "@/components/icons/GitIcon"
import HTMLIcon from "@/components/icons/HTMLIcon"
import JavaScriptIcon from "@/components/icons/JavaScriptIcon"
import LaravelIcon from "@/components/icons/LaravelIcon"
import MySQLIcon from "@/components/icons/MySQLIcon"
import PHPIcon from "@/components/icons/PHPIcon"
import PostgreSQLIcon from "@/components/icons/PostgreSQLIcon"
import VueIcon from "@/components/icons/VueIcon"

export type tTechnology = {
    name: string,
    icon: React.FC<{ rootClass?: string }>,
    progress: number
}

export type tTechnologies = Array<tTechnology>

export type tOTechnologies = { 
    [key: string]: tTechnology
}

export type tUnionTechnologies = keyof typeof technologies;

export const technologies = {
    Bootstrap: { name: "HTML", icon: BootstrapIcon, progress: 100 },
    CSS: { name: "CSS", icon: CSSIcon, progress: 54 },
    Docker: { name: "Docker", icon: DockerIcon, progress: 50 },
    GitHub: { name: "GitHub", icon: GitHubIcon, progress: 25 },
    Git: { name: "Git", icon: GitIcon, progress: 60 },
    HTML: { name: "HTML", icon: HTMLIcon, progress: 100 },
    Javascript: { name: "Javascript", icon: JavaScriptIcon, progress: 34 },
    Laravel: { name: "Laravel", icon: LaravelIcon, progress: 17 },
    MySQL: { name: "HTML", icon: MySQLIcon, progress: 100 },
    PHP: { name: "PHP", icon: PHPIcon, progress: 78 },
    PostgreSQL: { name: "PostgreSQL", icon: PostgreSQLIcon, progress: 30 },
    VueJs: { name: "VueJs", icon: VueIcon, progress: 100 },
} as const satisfies Record<string, tTechnology>;