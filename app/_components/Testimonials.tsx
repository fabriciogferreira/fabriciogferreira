import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function Testimonials(){
    return (
        <section>
            <h1>Testimonials</h1>
            <Carousel 
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent className="-ml-4">
                    <CarouselItem className="basis-1/2">
                        <q>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laborum vel eius quam possimus iure! Adipisci voluptate alias corporis omnis, blanditiis unde nulla est molestiae ea neque perferendis autem. Fugiat?
                        </q>
                        <div className="flex">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4>Nome</h4>
                                <h4>Cargo</h4>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                        <q>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laborum vel eius quam possimus iure! Adipisci voluptate alias corporis omnis, blanditiis unde nulla est molestiae ea neque perferendis autem. Fugiat?
                        </q>
                        <div className="flex">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4>Nome</h4>
                                <h4>Cargo</h4>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2">
                        <q>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laborum vel eius quam possimus iure! Adipisci voluptate alias corporis omnis, blanditiis unde nulla est molestiae ea neque perferendis autem. Fugiat?
                        </q>
                        <div className="flex">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4>Nome</h4>
                                <h4>Cargo, Data</h4>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* Imagem (pedir permissao) */}
        </section>
    )
}