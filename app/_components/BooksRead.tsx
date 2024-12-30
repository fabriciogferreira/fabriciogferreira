import Image, { StaticImageData } from "next/image"

import path from "@/public/mclovin.jpeg"
import timeline from "@/public/timeline.png"

type image = {
    name: string,
    description: string,
    path: StaticImageData,
}

const IMAGES: Array<image> = [
    {
        name: "livro 1 aklddas asd asdkn aslsd ds ad",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corrupti nihil quam nostrum ab voluptatum minima accusamus, assumenda atque earum obcaecati. Atque, aut? Sequi optio nesciunt quae, sit animi quis.",
        path: path
    },
    {
        name: "livro 1 aklddas asd asdkn aslsd ds ad",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corrupti nihil quam nostrum ab voluptatum minima accusamus, assumenda atque earum obcaecati. Atque, aut? Sequi optio nesciunt quae, sit animi quis.",
        path: timeline
    },
]

export default function BooksRead(){
    return (
        <section>
            <h1>BooksRead</h1>
            <div className="flex flex-wrap gap-4 justify-around">
                {IMAGES.map((image) => {
                    return (
                        <div key={image.name} className="relative rounded-lg overflow-hidden border max-w-md bg-black aspect-[3/4] flex items-center justify-center w-[400px]">
                            <div>
                                <Image src={image.path} alt="" className=""/>
                            </div>
                            <div className="absolute bg-black h-full top-0 p-4 bg-opacity-70 opacity-0 hover:opacity-100">
                                <div className="border border-4 rounded-lg h-full text-center flex flex-col justify-center p-4 text-white text-xl">
                                    <h2 className="font-bold">{image.name}</h2>
                                    <p>{image.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}