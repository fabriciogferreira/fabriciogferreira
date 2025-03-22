// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip"
import Image from "next/image"

import React from "react"

import { images } from "@/types/images"
// import { events } from "@/types/events"

export default function AboutMe(){
    return (
        <>
            <article>
                <div className="flex flex-col gap-4">
                    <p>
                        Olá, Fabrício aqui! Se você chegou até este ponto, provavelmente está considerando a possibilidade de me contratar (obrigado, Deus!). Quero aproveitar para compartilhar um pouco da minha história até o meu primeiro contato com a programação.
                    </p>
                    <p>
                        Minha relação com a tecnologia começou com um PlayStation 2 que minha mãe comprou. Fiquei fascinado com a ideia de como um aparelho podia conter tantos jogos incríveis. Esse foi o início da minha paixão por tecnologia e jogos, mesmo que eu jogasse apenas alguns deles.
                    </p>
                    <p>
                        Essa adoração pela tecnologia cresceu ainda mais com os filmes de super-heróis, especialmente por causa do Homem de Ferro, cujo uso criativo e inovador da tecnologia me inspirou profundamente.
                    </p>
                    <p>
                        Certo dia, enquanto ia para a igreja, encontrei um futuro professor distribuindo panfletos sobre as Escolas Técnicas Estaduais (ETEC). Por coincidência, eu já havia me inscrito para o processo seletivo, graças à indicação do meu irmão.
                    </p>
                    <p>
                        No curso de Informática para Internet (INFONET) da ETEC, tive meu primeiro contato com a programação. Foi lá que aprendi sobre linguagens de programação, frameworks, e como os computadores realmente funcionam. Essa experiência abriu um novo mundo de possibilidades para mim.
                    </p>
                    <p>
                        Desde então, venho trilhando uma carreira na área de tecnologia. Meu próximo passo educacional foi cursar Análise e Desenvolvimento de Sistemas na UNIFUNEC, onde me graduei. Agora, estou considerando ingressar em uma pós-graduação em Ciência da Computação para continuar expandindo meus conhecimentos e habilidades.
                    </p>
                </div>
            </article>
            <article>
                <div className="space-y-4 columns-2 sm:columns-3 md:columns-4 lg:columns-5 2xl:columns-7">
                    {Object
                        .values(images.aboutMe)
                        .map((image, index) => 
                            <Image
                                key={index}
                                src={image}
                                alt={`${index}`}
                                className="w-full rounded-xl shadow"
                            />
                    )}
                </div>
            </article>
            <article>
                {/* <h2>timeline</h2> */}
                {/* <div className='flex overflow-x-auto h-32 items-center *:px-4 pl-5'> */}
                    {/* <TooltipProvider>
                        {EVENTS.map((event) => {
                            return (
                                    <Tooltip key={event.text}>
                                        <TooltipTrigger className='flex flex-col items-center hover:text-blue-500 relative '>
                                            <div className="absolute -top-5">{event.year}</div>
                                            <div>|</div>
                                            <div className="absolute -bottom-10">
                                                <i className={`fa-solid fa-2xl fa-${event.icon}`}></i>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{event.text}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <div key={`fogo1${event.text}`}>|</div>
                                    <div key={`fogo2${event.text}`} className="hidden lg:flex">|</div>
                                    <div key={`fogo3${event.text}`} className="hidden xl:flex">|</div>
                                    <div key={`fogo4${event.text}`} className="hidden 2xl:flex">|</div>
                            )
                        })}
                    </TooltipProvider> */}
                {/* </div> */}
            </article>
        </>
    )
}