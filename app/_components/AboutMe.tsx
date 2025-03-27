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

import { me } from "@/types/users"
import { uLanguages } from "@/types/languages"
import {useLocale} from 'next-intl';

export default function AboutMe(){
    const language = useLocale()
    
    return (
        <>
            <article>
                <div className="flex flex-col gap-4">
                    {me.
                        about[language as uLanguages]
                        .map(p => 
                            <p key={p}>{p}</p>
                    )}
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