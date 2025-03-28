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
import { Button } from "@/components/ui/button"

import Link from "next/link";
import Image from "next/image"

import { educations } from "@/types/educations";
import { useTranslations } from 'next-intl';

import { icons } from "@/types/icons";

export default function Education(){
    const t = useTranslations('Education');
    
    return (
        <Accordion type="single" collapsible>
            {educations.map((education, index) => {
                return (
                    <AccordionItem key={index} value={`index-${index}`}>
                        <AccordionTrigger>
                            <div className="flex gap-2">
                                <icons.graduationCap/>{education.name} 
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div>
                                <Link href={education.siteLink} className="w-2xs">
                                    <Image
                                        src={education.logoSrc}
                                        alt=""
                                        objectFit="contain"
                                        fill
                                    />
                                </Link>
                                <div>
                                    <div className="flex gap-1 items-center">
                                        <icons.map size={15}/>
                                        {education.address},
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <icons.course size={15}/>
                                        {education.course}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <icons.calendarCheck size={15} />
                                {education.started_at} - {education.finished_at}
                            </div>
                            <div className="flex gap-2">
                                <Button>
                                    <icons.downloads />{t('resume')}
                                </Button>
                                {/* PROVAVEL ERRO DE NESTED TAG AQUI */}
                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button>
                                            <icons.eye />{t('resume')}
                                        </Button>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <Image src={education.certificateSrc} alt="adasd" className="w-full"/>

                                        <DrawerClose className="absolute top-0 right-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                        </DrawerClose>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}