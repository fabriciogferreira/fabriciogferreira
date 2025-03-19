import { technologies, tTechnologies } from "@/types/technology"

export type tJob = {
    logo: string,
    link: string,
    enterprise: string,
    position: string,
    started_at: string,
    finished_at: string,
    paragraphs: Array<string>
    technologies: tTechnologies
}

export type tJobs = Array<tJob>

export const jobs: tJobs = [
    {
        logo: "https://olie.ai/assets/logo-olie-landing-light-symbol-0e5bf777.png",
        link: "https://olie.ai/",
        enterprise: "Olie",
        position: "Trainne",
        started_at: "28/08/2023",
        finished_at: "",
        paragraphs: [
            "A empresa Olie foi o meu primeiro emprego, e com ela pude compreender a grande diferença entre programar para o mercado e programar para estudos." ,
            "Durante essa experiência, tive a oportunidade de compartilhar conhecimentos, mas, principalmente, de aprender com meus colegas de equipe. Eles me ensinaram diversos conceitos, práticas e abordagens que poderei aplicar em projetos futuros.",
            "Ao longo da minha trajetória na Olie, recebi novas responsabilidades, que aceitei com entusiasmo e assumi com dedicação.",
            "Realizávamos reuniões diárias com o objetivo de compartilhar os desafios encontrados durante o programa de trainee. Nessas reuniões, nosso tech leader nos orientava, ajudando-nos a encontrar soluções para os problemas enfrentados."
        ],
        technologies: [
            technologies.Laravel,
            technologies.VueJs,
            technologies.Bootstrap,
            technologies.Docker,
            technologies.MySQL,
            technologies.GitHub,
            technologies.PHP,
            technologies.Git,
            technologies.CSS,
            technologies.HTML,
        ]
    },
]