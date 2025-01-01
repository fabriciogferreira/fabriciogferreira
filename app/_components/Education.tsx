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

import Link from "next/link";
import Image from "next/image"
import macbookIphone from '@/public/timeline.png';

import { Button } from "@/components/ui/button"

type education = {
    isCourse: boolean
    name: string
    logoPath: string
    siteLink: string
    address: string
    course: string
    started_at: string
    finished_at: string
}

const EDUCATIONS: Array<education> = [
    {
        isCourse: false,
        name: 'UNIFUNEC - Centro Universitário de Santa Fé do Sul',
        logoPath: 'education/logo/logo-etec-sfs.png',
        siteLink: 'https://unifunec.edu.br/',
        address: 'Av. Mangara, 477 - Jd. Mangará, Santa Fé do Sul - SP, 15775-000',
        course: 'ADS - Análise e Desenvolvimento de Sistemas',
        started_at: '??/02/2021',
        finished_at: '??/12/2023',
    },
    {
        isCourse: false,
        name: 'ETEC - Escolas Técnicas Estaduais',
        logoPath: 'education/logo/logo-etec-sfs.png',
        siteLink: 'https://etecsantafedosul.cps.sp.gov.br/',
        address: 'Av. Conselheiro Antônio Prado, s/n - São Francisco, Santa Fé do Sul - SP, 15775-000',
        course: 'INFONET - Informática para internet',
        started_at: '18/02/2018',
        finished_at: '03/07/2019',
    },
]

export default function Education(){
    return (
        <Accordion type="single" collapsible>
            {EDUCATIONS.map((education, index) => {
                return (
                    <AccordionItem key={index} value={`index-${index}`}>
                        <AccordionTrigger>
                            <div>
                                <i className="fa-solid  fa-graduation-cap"></i> - {education.name} 
                            </div>
                            <div className="flex gap-2">
                                <Button>
                                    <i className="fa-solid fa-certificate"></i>
                                    download
                                </Button>
                                {/* PROVAVEL ERRO DE NESTED TAG AQUI */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <Button>
                                            <i className="fa-solid fa-certificate"></i>
                                            open
                                        </Button>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <Image src={macbookIphone} alt="adasd" className="w-full"/>

                                        <DrawerClose className="absolute top-0 right-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                        </DrawerClose>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div>
                                <Link href={education.siteLink}>
                                    logo
                                </Link>
                                <div>
                                    <div>
                                        {education.name} (link site), {education.address},
                                    </div>
                                    <div>
                                        {education.course}
                                    </div>
                                </div>
                            </div>
                            <p>
                                {education.started_at} - {education.finished_at}: descricao
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}