import { tTechnologies, technologies } from "@/types/technologies"
import { tTags, rTags } from "@/types/tags"
import { tRepositories } from "@/types/repositories"
import { images, tImages } from "@/types/images"

export type tProject = {
    name: string,
    images: tImages,
    description: tTranslatable,
    site: string,
    siteTest?: string,
    tags: tTags,
    testable?: Array<{
        role: string,
        email: string,
        password: string
    }>
    technologies: tTechnologies,
    repositories: tRepositories,
    isPersonal: boolean
    status: "developing" | "finished"
}

export type tProjects = Array<tProject>

import { tTranslatable } from "@/types/languages"

export const projects: tProjects = [
    {
        status: "developing",
        name: "1% Melhor a Cada Dia",
        images: [
            images.projects.opbed.mobile,
            images.projects.opbed.admin,
            images.projects.opbed.forgotPassword,
            images.projects.opbed.program,
            images.projects.opbed.signin
        ],
        description: {
            br: "Uma iniciativa pessoal criada para resolver meus próprios desafios na organização dos treinos de musculação. A plataforma foi pensada para oferecer controle e praticidade, permitindo que você gerencie sua rotina de treino de forma segmentada e independente — ideal para quem busca evolução com mais foco e consistência.",
            en: "A personal project born from my own struggles in organizing strength training routines. This platform is designed to give you full control and convenience, allowing you to manage your workout schedule in a structured and independent way — perfect for those aiming to stay consistent and focused on progress."
        },
        repositories: [],
        isPersonal: true,
        site: "https://opbed.com/pt/signin",
        siteTest: "https://staging.opbed.com/pt/signin",
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
        ],
        testable: [
            {
                role: "admin",
                email: "adm@adm.com",
                password: "123123123"
            },
            {
                role: "user",
                email: "user@user.com",
                password: "123123123"
            }
        ]
    },
    {
        status: "finished",
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

