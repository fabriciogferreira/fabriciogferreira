import { tech } from "@/app/_components/Skills"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LaravelIcon from "@/components/icons/LaravelIcon"
import VueIcon from "@/components/icons/VueIcon"
import BootstrapIcon from "@/components/icons/BootstrapIcon"
import DockerIcon from "@/components/icons/DockerIcon"
import MySQLIcon from "@/components/icons/MySQLIcon"
import GitHubIcon from "@/components/icons/GitHubIcon"
import PHPIcon from "@/components/icons/PHPIcon"
import GitIcon from "@/components/icons/GitIcon"
import CSSIcon from "@/components/icons/CSSIcon"
import HTMLIcon from "@/components/icons/HTMLIcon"

import Link from "next/link"
import Image from "next/image"

type job = {
    logo: string,
    link: string,
    enterprise: string,
    position: string,
    started_at: string,
    finished_at: string,
    paragraphs: Array<string>
    technologies: Array<tech>,
}

const JOBS: Array<job> = [
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
            {name: "Laravel", icon: <LaravelIcon/>, progress: 0},
            {name: "Vue", icon: <VueIcon/>, progress: 0},
            {name: "Bootstrap", icon: <BootstrapIcon/>, progress: 0},
            {name: "Docker", icon: <DockerIcon/>, progress: 0},
            {name: "MySQL", icon: <MySQLIcon/>, progress: 0},
            {name: "GitHub", icon: <GitHubIcon/>, progress: 0},
            {name: "PHP", icon: <PHPIcon/>, progress: 0},
            {name: "Git", icon: <GitIcon/>, progress: 0},
            {name: "CSS", icon: <CSSIcon/>, progress: 0},
            {name: "HTML", icon: <HTMLIcon/>, progress: 0},
        ]
    },
]

export default function Jobs(){

    const lastJob = JOBS[0]

    const buildId = (job: job): string => {
        return `${job?.enterprise} - ${job?.position} - ${job.started_at}`
    }

    return (
        <Tabs defaultValue={buildId(lastJob)} className="flex flex-col md:flex-row">
            <TabsList className="flex flex-col h-fit md:mr-4">
                {JOBS.map((job) => {
                    return (
                        <TabsTrigger key={buildId(job)} value={buildId(job)} className="w-full justify-start">{buildId(job)}</TabsTrigger>
                    )
                })}
            </TabsList>
            {JOBS.map((job) => {
                return (
                    <TabsContent key={buildId(job)} value={buildId(job)} className="flex flex-col gap-3 mt-0">
                        <h4>
                            {job.position} | {job.started_at} - {job.finished_at ? job.finished_at : "Presente"}
                        </h4>

                        <div>
                            <Link href={job.link} target="_blank" className="float-left m-4">
                                <Image src={job.logo} alt="Logo da olie" width={200} height={100}/>
                            </Link>
                            {job.paragraphs.map((paragraph) => {
                                return <p key={paragraph} className="pb-3">{paragraph}</p>
                            })}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {job.technologies.map((technologie) => {
                                return (
                                    <div key={technologie.name} className="border rounded-lg flex gap-2 px-2 py-1 text-lg font-bold">
                                        <div className="w-6">
                                            {technologie.icon}
                                        </div>
                                        {technologie.name}
                                    </div>
                                )
                            })}
                        </div>
                    </TabsContent>
                )
            })}
        </Tabs>
    )
}