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
import { Button, buttonVariants } from "@/components/ui/button"

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
                                <Link href={education.siteLink}>
                                    <Image
                                        src={education.logoSrc}
                                        alt="Logo"
                                        width={200}
                                        height={300}
                                        objectFit="contain"
                                        unoptimized
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
                                <Link
                                    href={typeof education.certificateSrc == "string" ? education.certificateSrc : education.certificateSrc.src}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={buttonVariants()}
                                >
                                    <icons.downloads />{t('certificate')}
                                </Link>
                                {/* PROVAVEL ERRO DE NESTED TAG AQUI */}
                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button>
                                            <icons.eye />{t('certificate')}
                                        </Button>
                                    </DrawerTrigger>
                                    <DrawerContent className="items-center">
                                        <Image src={education.certificateSrc} alt="adasd" className="max-w-md"/>

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