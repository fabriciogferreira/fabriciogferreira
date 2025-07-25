import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { icons } from "@/types/icons"
import Link from "next/link"

import { testimonials } from "@/types/testimonials"
import Translable from "@/components/translable"

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
                {testimonials.map((testimonial, index) => {
                    const date = new Date(testimonial.createdAt);
                    const [year, month, day] = date.toISOString().split("T")[0].split("-");

                    return (
                        <CarouselItem key={index} className={`basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex flex-col border rounded-lg gap-4 mx-4 pl-0 p-4 justify-between`}>
                            <q>
                                <Translable value={testimonial.quote} />
                            </q>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Link
                                        href={testimonial.linkedinLink}
                                        target="_blank"
																				className="relative"
                                    >
                                        <Avatar>
                                            <AvatarImage src={testimonial.profile as string} className="object-cover"/>
                                            <AvatarFallback>CN</AvatarFallback>
																						
                                        </Avatar>
                                        <icons.externalLink className="absolute bottom-0 right-0" size={15}/>
                                    </Link>
                                    <div>
                                        <h4>{testimonial.name}</h4>
                                        <Link 
                                            href={testimonial.siteLink}
                                            target="_blank"
                                            className="flex items-center gap-1"
                                        >
                                            {testimonial.enterprise}
                                            <icons.externalLink size={15}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div>
                                        {year}
                                    </div>
                                    <div>
                                        {day}/{month}
                                    </div>
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