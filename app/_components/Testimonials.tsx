import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link"

type testimonial = {
    quote: string,
    name: string,
    position: string,
    enterprise: string,
    siteLink: string
}

const TESTIMONIALS: Array<testimonial> = [
    {
        quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quasi quis vitae unde neque omnis incidunt harum quas a, assumenda pariatur voluptate est itaque qui sint. Veniam vitae libero vero.",
        name: "Guilherme",
        position: "Dev Pleno",
        enterprise: "Olie",
        siteLink: "https://olie.ai/"
    },
]

export default function Testimonials(){
    return (
        <Carousel 
            opts={{
                align: "center",
                loop: true,
                axis: "y",
                dragFree: false,
            }}
            className="mx-[3rem]"
        >
            <CarouselContent className="ml-0">
                {TESTIMONIALS.map((testimonial, index) => {
                    return (
                        <CarouselItem key={index} className={`basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex flex-col border rounded-lg gap-4 mx-4 pl-0 p-4`}>
                            <q>{index} - {testimonial.quote}</q>
                            <div className="flex gap-2 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                    {/* Imagem (pedir permissao) */}
                                </Avatar>
                                <div className="">
                                    <h4>{testimonial.name}</h4>
                                    <Link href={testimonial.siteLink} target="_blank">
                                        <h4>
                                            {testimonial.enterprise}
                                        </h4>
                                    </Link>
                                </div>
                            </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}