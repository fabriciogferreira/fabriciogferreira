import { Progress } from "@/components/ui/progress"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import LanguageLevel from "@/components/LanguageLevel"

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

import USAIcon from "@/components/icons/USAIcon"

import { ReactNode } from "react"
export type tech = {
    name: string
    icon: ReactNode
    progress: number
}

const TECHS: Array<tech> = [
    {name: "Laravel", icon: <LaravelIcon />, progress: 17},
    {name: "VueJs", icon: <VueIcon />, progress: 100},
    {name: "PostgreSQL", icon: <PostgreSQLIcon />, progress: 30},
    {name: "Docker", icon: <DockerIcon />, progress: 50},
    {name: "GitHub", icon: <GitHubIcon />, progress: 25},
    {name: "PHP", icon: <PHPIcon />, progress: 78},
    {name: "Javascript", icon: <JavaScriptIcon />, progress: 34},
    {name: "Git", icon: <GitIcon />, progress: 60},
    {name: "CSS", icon: <CSSIcon />, progress: 54},
    {name: "HTML", icon: <HTMLIcon />, progress: 100},
]

export default function Skills(){
    return (
        <section className="flex flex-col">
            <h1>Skills</h1>
            <h3 className="text-center">Tecnologias</h3>
            <div className="flex flex-wrap justify-around p-5 text-center gap-5">
                {TECHS.map((tech) => {
                    return (
                        <div key={tech.name}  className="w-36 p-4 border border-4 rounded">
                            <div>
                                {tech.icon}
                                <h4>{tech.name}</h4>
                            </div>
                            <Progress value={tech.progress} />
                        </div>
                    )
                })}
            </div>
            <h3 className="text-center">languages</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Language</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead>Certificate</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-2xl">
                            <USAIcon rootClass=""/>
                            English
                        </TableCell>
                        <TableCell>
                            <LanguageLevel />
                        </TableCell>
                        <TableCell>
                            <Button>
                                Ver certificado
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )
}