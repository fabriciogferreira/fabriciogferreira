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
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { icons } from "@/types/icons"
import { projects } from "@/types/projects"

import Link from "next/link"
import Image from "next/image"

import { useTranslations } from 'next-intl';
import Translable from "@/components/translable"

export default function Projects(){
    const t = useTranslations('Projects');

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
                                <CarouselContent className="ml-0 h-40">
                                    {project.images.map((image, index) => 
                                        <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex flex-col border border-neutral-500 rounded-lg gap-4 mx-4 pl-0 p-1 relative">
                                            <Image
                                                className="object-contain"
                                                src={image}
                                                alt={""}
                                                fill
                                            />
                                        </CarouselItem>
                                    )}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        }
                        <CardTitle className="flex items-center gap-2">
                            {project.name}
                            <Badge variant={"secondary"}>
                                {t('status.' + project.status)}
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <p>
                            <Translable value={project.description} />
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            {project
                                .technologies
                                .sort((a, b) => a.order - b.order)
                                .map(tech => 
                                    <Badge key={tech.name} className="p-1.5 rounded">
                                        <tech.icon size={18} className="me-1"/>
                                        {tech.name}
                                    </Badge>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 ">
                            {project
                                .tags
                                .sort((a, b) => a.order - b.order)
                                .map(tag => 
                                <Badge key={tag.name}>{tag.name}</Badge>)
                            }
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <div className="flex flex-col items-start w-full gap-4">
													<div className="flex gap-2">
                            <Link href={project.site} target="_blank" className={buttonVariants({variant: "secondary"}) + " shrink"}>
                                {t('visit')}
                            </Link>
														{project.siteTest &&
															<Link href={project.siteTest} target="_blank" className={buttonVariants({variant: "secondary"}) + " shrink"}>
                            	    {t('visit_test')}
                            	</Link>
														}
													</div>
                            {project.testable?.length && 
                                <div className="text-start">
                                    {t('testable.test_as')}:
                                    <div className="flex flex-wrap gap-2">
                                        {project.testable.map((item) => 
                                            <div
                                                key={item.role}
                                                className="bg-yellow-500 rounded p-2 flex flex-col text-start"
                                            >
                                                <span className="font-bold">
                                                    {t('testable.' + item.role)}
                                                </span>
                                                <span>
                                                    {item.email}
                                                </span>
                                                <span>
                                                    {item.password}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }
                        </div>
                        {project.repositories.map(repository => 
                            <div key={repository.link} className="flex justify-between">
                                <Link href={repository.link} className="flex items-center gap-1">
                                    <icons.externalLink size={15}/>
                                    {repository.name}
                                </Link>
                                <div className="flex gap-2">
                                    <span className="flex items-center gap-1">
                                        <icons.star size={15}/>
                                        {repository.stars}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <icons.gitFork size={15}/>
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