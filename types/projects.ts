import { tTechnologies, technologies } from "@/types/technology"
import { tTags } from "@/types/tag"
import { tRepositories } from "@/types/repository"

export type tProject = {
    name: string,
    images: Array<string>,
    description: string,
    site: string,
    tags: tTags,
    technologies: tTechnologies,
    repositories: tRepositories,
    isPersonal: boolean
}

export type tProjects = Array<tProject>

export const projects: tProjects = [
    {
        name: "1% Melhor a Cada Dia",
        images: [],
        description: "Uma iniciativa totalmente pessoal, afim de resolver os problemas que eu tinha de organizas meu afazeres, gastos, treino, estudos e outros. Ele permite que você gerencie sua vida dentro dele, dividido em diversas partes para que você tenha independência entre as partes.",
        repositories: [],
        isPersonal: true,
        site: "https://opbed.com",
        tags: ["Fullstack", "Backend", "Frontend"],
        technologies: [
            technologies.CSS,
            technologies.Git,
            technologies.PostgreSQL,
            technologies.Laravel,
            technologies.Javascript,
            technologies.PHP,
            technologies.HTML,
            technologies.GitHub,
            technologies.Docker
        ]
    },
    {
        name: "Adriano Veículos",
        images: [],
        description: "O adriano veículos jales é um site desenvolvido por mim e um amigo, ele foi desenvolvido no começo da minha carreira na programação, 5 meses após eu entrar no mercado. nele é possível que você veja os carros cadastrados pelo dono da concessinária.",
        repositories: [],
        isPersonal: false,
        site: "https://adrianoveiculosjales.com.br/",
        tags: ["Fullstack", "Backend", "Frontend"],
        technologies: [
            technologies.Docker,
            technologies.Javascript,
            technologies.Laravel,
            technologies.PHP,
            technologies.PostgreSQL,
            technologies.HTML,
            technologies.Git,
            technologies.CSS,
            technologies.Bootstrap,
            technologies.GitHub,
        ]
    }
]

