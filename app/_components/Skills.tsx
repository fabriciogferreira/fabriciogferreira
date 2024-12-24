import { Progress } from "@/components/ui/progress"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Skills(){
    return (
        <section>
            <h2>Skills</h2>
            <div>
                <h3>Tecnologias</h3>
                <div className="flex flex-wrap justify-around">
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Nome da tecnologia</h4>
                        <Progress />
                    </div>
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Nome da tecnologia</h4>
                        <Progress />
                    </div>
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Nome da tecnologia</h4>
                        <Progress />
                    </div>
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>Nome da tecnologia</h4>
                        <Progress />
                    </div>
                </div>
            </div>
            <div>
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
                            <TableCell className="font-medium">English</TableCell>
                            <TableCell>A1</TableCell>
                            <TableCell>Link</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}