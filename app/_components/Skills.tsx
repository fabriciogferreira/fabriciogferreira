import { Progress } from "@/components/ui/progress"
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import { Button } from "@/components/ui/button"

// import LanguageLevel from "@/components/LanguageLevel"

import { technologies } from "@/types/technology"

export default function Skills(){
    return (
        <>
            <article>
                <h3>Tecnologias</h3>
                <div className="flex flex-wrap justify-around p-5 text-center gap-5">
                    {Object.values(technologies).map((tech) => {
                        return (
                            <div key={tech.name}  className="w-32 p-4 border border rounded-lg">
                                <div className="flex flex-col items-center">
                                    <tech.icon size={90} />
                                    <h4>{tech.name}</h4>
                                </div>
                                <div className="flex gap-2 items-center relative">
                                    <Progress indicatorClass="bg-green-500" value={tech.progress}/>
                                    <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-bold">
                                        {tech.progress}%
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </article>
            {/* <article>
                <h3>languages</h3>
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
            </article> */}
        </>
    )
}