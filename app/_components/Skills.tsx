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
// import US from 'country-flag-icons/react/3x2/US'

import { technologies } from "@/types/technologies"

export default function Skills(){
    return (
        <>
            <article>
                {/* <h3>Tecnologias</h3> */}
                <div className="flex flex-wrap justify-around p-2 text-center gap-5">
                    {Object
                        .values(technologies)
                        .sort((a, b) => a.order - b.order)
                        .map((tech) => 
                            <div key={tech.name}  className="w-32 py-4 border rounded-lg flex flex-col items-center">
                                <tech.icon size={90}/>
                                <h4>{tech.name}</h4>
                            </div>
                    )}
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
                                <US/>
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