import LaravelIcon from "@/components/icons/LaravelIcon"
import VueIcon from "@/components/icons/VueIcon"
import PostgreSQLIcon from "@/components/icons/PostgreSQLIcon"
import DockerIcon from "@/components/icons/DockerIcon"
import GitHubIcon from "@/components/icons/GitHubIcon"
import PHPIcon from "@/components/icons/PHPIcon"
import JavaScriptIcon from "@/components/icons/JavaScriptIcon"
import GitIcon from "@/components/icons/GitIcon"
import CSSIcon from "@/components/icons/CSSIcon"
import HTMLIcon from "@/components/icons/HTMLIcon"

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

export const technologies: tOTechnologies = {
    Laravel: { name: "Laravel", icon: LaravelIcon, progress: 17 },
    VueJs: { name: "VueJs", icon: VueIcon, progress: 100 },
    PostgreSQL: { name: "PostgreSQL", icon: PostgreSQLIcon, progress: 30 },
    Docker: { name: "Docker", icon: DockerIcon, progress: 50 },
    GitHub: { name: "GitHub", icon: GitHubIcon, progress: 25 },
    PHP: { name: "PHP", icon: PHPIcon, progress: 78 },
    Javascript: { name: "Javascript", icon: JavaScriptIcon, progress: 34 },
    Git: { name: "Git", icon: GitIcon, progress: 60 },
    CSS: { name: "CSS", icon: CSSIcon, progress: 54 },
    HTML: { name: "HTML", icon: HTMLIcon, progress: 100 },
} as const;