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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Projects(){
    return (
        <section>
            <h1>Projects</h1>
            TODO: FILTRO
            <div className="flex flex-wrap gap-2">
                <Card>
                    <CardHeader>
                        <Carousel 
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent className="-ml-4">
                                <CarouselItem className="basis-1/2">
                                    imagens
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <CardTitle>Nome</CardTitle>
                        <CardDescription>publicado em</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>description</p>
                        <p>tecnologias</p>
                        <p>tags: backend, frontend, fullstack, ia e etc</p>
                    </CardContent>
                    <CardFooter>
                        <span>visit: caso esteja online</span>
                        <span>source: caso seja público</span>
                        <span>stars</span>
                        <span>Last update</span>
                        <span>forks</span>
                        <span>likes, comentários</span>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Carousel 
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent className="-ml-4">
                                <CarouselItem className="basis-1/2">
                                    imagens
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <CardTitle>Nome</CardTitle>
                        <CardDescription>publicado em</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>description</p>
                        <p>tecnologias</p>
                        <p>tags: backend, frontend, fullstack, ia e etc</p>
                    </CardContent>
                    <CardFooter>
                        <span>visit: caso esteja online</span>
                        <span>source: caso seja público</span>
                        <span>stars</span>
                        <span>Last update</span>
                        <span>forks</span>
                        <span>likes, comentários</span>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Carousel 
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                        >
                            <CarouselContent className="-ml-4">
                                <CarouselItem className="basis-1/2">
                                    imagens
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <CardTitle>Nome</CardTitle>
                        <CardDescription>publicado em</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>description</p>
                        <p>tecnologias</p>
                        <p>tags: backend, frontend, fullstack, ia e etc</p>
                    </CardContent>
                    <CardFooter>
                        <span>visit: caso esteja online</span>
                        <span>source: caso seja público</span>
                        <span>stars</span>
                        <span>Last update</span>
                        <span>forks</span>
                        <span>likes, comentários</span>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}