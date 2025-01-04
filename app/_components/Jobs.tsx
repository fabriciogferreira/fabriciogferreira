import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { tech } from "@/app/_components/Skills"

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

type job = {
    enterprise: string,
    position: string,
    started_at: string,
    finished_at: string,
    paragraphs: Array<string>
    technologies: Array<tech>,
}

const JOBS: Array<job> = [
    {
        enterprise: "Olie",
        position: "Trainne",
        started_at: "28/08/2023",
        finished_at: "",
        paragraphs: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid atque iure harum. Fugiat explicabo hic accusamus voluptates, ipsum illum dolor. Velit ut eius mollitia ex voluptatibus eveniet reiciendis dignissimos?",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid atque iure harum. Fugiat explicabo hic accusamus voluptates, ipsum illum dolor. Velit ut eius mollitia ex voluptatibus eveniet reiciendis dignissimos?",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid atque iure harum. Fugiat explicabo hic accusamus voluptates, ipsum illum dolor. Velit ut eius mollitia ex voluptatibus eveniet reiciendis dignissimos?",
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
                        <div>
                            <h4>{job.position}</h4>
                            <span>{job.started_at} - {job.finished_at ? job.finished_at : "Presente"}</span>
                        </div>
                        <div>
                            {job.paragraphs.map((paragraph) => {
                                return <p key={paragraph}>{paragraph}</p>
                            })}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {job.technologies.map((technologie) => {
                                return (
                                    <div key={technologie.name} className="border rounded-lg flex gap-1 px-2 py-1 text-lg font-bold">
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