import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { projects } from "@/types/projects"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react';
import { GitFork } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import Image from "next/image"

export default function Projects(){    
    return (
        <div className="flex flex-wrap gap-2">
            {/* TODO: FILTRO */}
            {projects.map((project) => 
                <Card key={project.name}>
                    <CardHeader>
                        {project.images.length > 0 && 
                            <Carousel 
                                opts={{
                                    align: "center",
                                    loop: true,
                                    axis: "y",
                                    dragFree: false,
                                }}
                                className="mx-[3rem]"
                            >
                                <CarouselContent>
                                    {project.images.map(image => 
                                        <CarouselItem key={image} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex flex-col border rounded-lg gap-4 mx-4 pl-0 p-1 h-40 relative">
                                            <Image
                                                objectFit="contain"
                                                src={image}
                                                alt={image}
                                                fill
                                            />
                                        </CarouselItem>
                                    )}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        }
                        <CardTitle>{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <p>{project.description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {project
                                .technologies
                                .sort((a, b) => a.order - b.order)
                                .map(tech => 
                                    <Badge key={tech.name} className="p-1.5 rounded">
                                        <tech.icon/>
                                        <span className="ms-1">{tech.name}</span>
                                    </Badge>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 ">
                            {project.tags.map(tag => 
                                <Badge key={tag}>{tag}</Badge>)
                            }
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-stretch">
                        <div className="flex justify-between mb-2">
                            <Link href={project.site} target="_blank" className={buttonVariants({variant: "secondary"})}>
                                Visitar
                            </Link>
                            <Link href={project.site} target="_blank" className={buttonVariants({variant: "secondary"})}>
                                Testar como admin
                            </Link>
                        </div>
                        {project.repositories.map(repository => 
                            <div key={repository.link} className="flex justify-between">
                                <Link href={repository.link} className="flex items-center gap-1">
                                    <ExternalLink size={15}/>
                                    {repository.name}
                                </Link>
                                <div className="flex gap-2">
                                    <span className="flex items-center gap-1">
                                        <Star size={15}/>
                                        {repository.stars}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GitFork size={15}/>
                                        {repository.forks}
                                    </span>
                                    <span>
                                        {repository.updateAt}
                                    </span>
                                </div>
                            </div>
                        )}
                    </CardFooter>
                </Card>
            )}
        </div>
    )
}