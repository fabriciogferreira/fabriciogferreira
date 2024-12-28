import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"

import Image from "next/image"
import macbookIphone from '@/public/timeline.png';

import { Button } from "@/components/ui/button"

export default function Education(){
    return (
        <section className="">
            <h1>Education</h1>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        icone instituicao ou curso - instituicao 
                        <Button>
                            icone certificate

                            download
                        </Button>
                        <Button>
                            icone certificate
                            open
                        </Button>
                        {/* PROVAVEL ERRO DE NESTED TAG AQUI */}
                        <Drawer>
                            <DrawerTrigger>Open</DrawerTrigger>
                            <DrawerContent>
                                <Image src={macbookIphone} alt="adasd" className="w-full"/>
                                <DrawerClose className="absolute top-0 right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>ads
                                </DrawerClose>
                            </DrawerContent>
                        </Drawer>



                    </AccordionTrigger>
                    <AccordionContent>
                        <div>
                            <div>
                                logo (link site)
                            </div>
                            <div>
                                <div>
                                    instituicao (link site), endereco,
                                </div>
                                <div>
                                    curso
                                </div>
                                
                            </div>
                        </div>
                        <p>
                            inicio - fim: descricao
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}