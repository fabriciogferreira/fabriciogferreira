import { buttonVariants } from "@/components/ui/button"
import { projects } from "@/types/projects"
import { files } from "@/types/files"
import { jobs } from "@/types/jobs";
import { useTranslations } from 'next-intl';
import Link from "next/link";

import { icons } from "@/types/icons";

export default function HeroSection() {
    const t = useTranslations('HeroSection');
    

    function getYearsDiffRoundedUp(startDate: Date, endDate: Date): number {
        const diffMs = endDate.getTime() - startDate.getTime();
        const years = diffMs / (1000 * 60 * 60 * 24 * 365.25); // Considera anos bissextos

        return Math.ceil(years); // Arredonda para cima
    }
    const years = getYearsDiffRoundedUp(new Date(jobs[jobs.length - 1].started_at), new Date)

    return (
        <>
            <div className="flex gap-5 items-center justify-around flex-col lg:flex-row lg:gap-20">
                <div className="w-full max-w-sm">
                    <div className="blob before-blob after-blob" />
                    {/* https://github.com/hosseinnabi-ir/Image-Blob-Animation-using-CSS/tree/AngularProject */}
                </div>
                <div className='grow text-nowrap text-center lg:text-start'>
                    <h1 className="text-[7vw] lg:text-[5vw]">Fabrício Ferreira</h1>
                    <h2 className="text-[6vw] lg:text-[4vw]">{ t('subtitle') }</h2>
                </div>
            </div>
            <div className="flex flex-col items-stretch md:flex-row md:items-center md:justify-around gap-5">
                <div className="flex justify-around w-full flex-wrap md:flex-nowrap md:max-w-sm gap-2">
                    <Link className={buttonVariants({ variant: "outline" })} href="mailto:fabriciof481@gmail.com?subject=Assunto do email&body=Conteúdo do email que será preenchido automaticamente" >
                        <icons.gmail />
                        fabriciof481@mail.com
                    </Link>
                    <Link className={buttonVariants({ variant: "outline" })} download href={files.resume.path} target="_blank" rel="noopener noreferrer">
                        <icons.downloads />
                        { t('download_resume') }
                    </Link>
                </div>
                <div className="flex grow justify-around text-center">
                    <p className="text-[3vw] leading-[0.9]">
                        {t.rich('years.experience', {
                            span: (chunks) => <span className="text-[5vw]">{chunks}</span>,
                            br: () => <br/>,
                            years: years
                        })}
                    </p>
                    <p className="text-[3vw] leading-[0.9]">
                        <span className="block text-[5vw]">
                            +{projects.filter(project => project.isPersonal == false).length}
                        </span>
                        { t('years.clients') }
                    </p>
                    <p className="text-[3vw] leading-[0.9]">
                        <span className="block text-[5vw]">
                            +{projects.length}
                        </span>
                        { t('years.projects') }
                    </p>
                </div>
            </div>
        </>
    )
}