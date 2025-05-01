import { technologies, tTechnologies } from "@/types/technologies"

export type tJob = {
    logo: string,
    link: string,
    enterprise: string,
    position: string,
    started_at: string,
    type: "personal" | "enterprise" | "freelancer",
    finished_at: string,
    paragraphs: Array<string>
    technologies: tTechnologies
}

export type tJobs = Array<tJob>

export const jobs: tJobs = [
    {
        type: "freelancer",
        logo: "https://enterscience.com.br/static/media/main_white.5845bdf67c4895284e98.png",
        link: "https://enterscience.com.br/",
        enterprise: "Enterscience",
        position: "Trainne",
        started_at: "2025/3/17",
        
        finished_at: "",
        paragraphs: [
            "A Enterscience é o meu segundo emprego, advindo de uma parceria entre a mesma e a Olie, isso foi devido a uma oportunidade que surgiu na Enterscience em que fui requisitado." ,
            "Como trabalho nas duas empresas ao mesmo tempo, tive que ter destreza de me organizar entre as duas empresas. Pois, apesar da responsabilidade ser a mesma, elas trablhavam de forma diferente e com algumas tecnolgias diferenets.",
            "Na empresa, pude aprender algumas tecnologias novas, como React, Nexts, Tailwind e outros. Isso aprimorou meu leque de tecnologias conhecidas e permitiu fazer novas conexões"
        ],
        technologies: [
            technologies.Laravel,
            technologies.React,
            technologies.NextJS,
            technologies.TailwindCSS,
            technologies.Docker,
            technologies.MySQL,
            technologies.GitHub,
            technologies.PHP,
            technologies.Git,
            technologies.CSS,
            technologies.HTML,
        ]
    },
    {
        type: "freelancer",
        logo: "https://olie.ai/assets/logo-olie-landing-light-symbol-0e5bf777.png",
        link: "https://olieflow.com",
        enterprise: "Olie",
        position: "Trainne",
        started_at: "2023/08/28",
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