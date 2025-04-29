import { tTechnologies, technologies } from "@/types/technologies"
import { tTags, rTags } from "@/types/tags"
import { tRepositories } from "@/types/repositories"
import { images, tImages } from "@/types/images"

export type tProject = {
    name: string,
    images: tImages,
    description: tTranslatable<string>,
    site: string,
    tags: tTags,
    testable?: {
        email: string,
        password: string
    }
    technologies: tTechnologies,
    repositories: tRepositories,
    isPersonal: boolean
}

export type tProjects = Array<tProject>

import { tTranslatable } from "@/types/languages"

export const projects: tProjects = [
    {
        name: "1% Melhor a Cada Dia",
        images: [
            images.projects.opbed.mobile,
            images.projects.opbed.admin,
            images.projects.opbed.forgotPassword,
            images.projects.opbed.program,
            images.projects.opbed.signin
        ],
        description: {
            br: "Uma iniciativa totalmente pessoal, afim de resolver os problemas que eu tinha para organizar meus afazeres, gastos, treinos, estudos e outros. Ele permite que você gerencie sua vida dentro dele, dividida em diversas partes para que você tenha independência entre elas.",
            en: "It's a totally personal initiative, aimed at solving the problems I had in organizing my affairs, expenses, training, studies and so on. It allows you to manage your life within it, divided into several parts so that you have independence between them."
        },
        repositories: [],
        isPersonal: true,
        site: "https://opbed.com",
        tags: [rTags.fullstack, rTags.frontend, rTags.backend],
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
        images: [
            images.projects.adrianoveiculosjales.brands,
            images.projects.adrianoveiculosjales.home,
            images.projects.adrianoveiculosjales.localization,
            images.projects.adrianoveiculosjales.login,
            images.projects.adrianoveiculosjales.stock,
        ],
        description: {
            br: "O adriano veículos jales é um site desenvolvido por mim e um amigo, ele foi desenvolvido no começo da minha carreira na programação, 5 meses após eu entrar no mercado. nele é possível que você veja os carros cadastrados pelo dono da concessinária.",
            en: "Adriano Veículos Jales is a website developed by me and a friend. It was created at the beginning of my programming career, five months after I entered the market. On it, you can see the cars registered by the owner of the dealership."
        },
        repositories: [],
        isPersonal: false,
        site: "https://adrianoveiculosjales.com.br/",
        tags: [rTags.backend, rTags.frontend, rTags.fullstack],
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

