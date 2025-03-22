import { buttonVariants } from "@/components/ui/button"
import { projects } from "@/types/projects"
import { files } from "@/types/files"

export default function HeroSection(){
    return (
        <>
            <div className="flex gap-5 items-center justify-around flex-col lg:flex-row lg:gap-20">
                <div className="w-full max-w-sm">
                    <div className="blob before-blob after-blob"/>
                    {/* https://github.com/hosseinnabi-ir/Image-Blob-Animation-using-CSS/tree/AngularProject */}
                </div>
                <div className='grow text-nowrap text-center lg:text-start'>
                    <h1 className="text-[7vw] lg:text-[5vw]">Fabrício Ferreira</h1>
                    <h2 className="text-[6vw] lg:text-[4vw]">Desenvolvedor Java</h2>
                </div>
            </div>
            <div className="flex flex-col items-stretch md:flex-row md:items-center md:justify-around gap-5">
                <div className="flex justify-around w-full flex-wrap md:flex-nowrap md:max-w-sm">
                    <a className={buttonVariants({ variant: "outline" })} href="mailto:fabriciof481@gmail.com?subject=Assunto do email&body=Conteúdo do email que será preenchido automaticamente" >
                        <i className="fa-solid fa-envelope"></i>
                        fabriciof481@mail.com
                    </a>
                    <a className={buttonVariants({ variant: "outline" })} download href={files.resume.path} target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-download"></i>
                        Baixar currículo
                    </a>
                </div>
                <div className="flex grow justify-around text-center">
                    <p className="text-[3vw] leading-[0.75]">
                        <span className="block text-[5vw]">
                            +26   
                        </span>
                        Anos
                    </p>
                    <p className="text-[3vw] leading-[0.75]">
                        <span className="block text-[5vw]">
                            +26   
                        </span>
                        Clientes
                    </p>
                    <p className="text-[3vw] leading-[0.75]">
                        <span className="block text-[5vw]">
                            +{projects.length}
                        </span>
                        projects
                    </p>
                </div>
            </div>
        </>
    )
}