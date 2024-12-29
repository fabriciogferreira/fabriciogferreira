import { buttonVariants } from "@/components/ui/button"

export default function HeroSection(){
    return (
        <section className="h-dvh p-10 flex flex-col justify-evenly">
            <div className="flex gap-5 items-center justify-around flex-col md:flex-row md:gap-20">
                <div className="w-full max-w-sm">
                    <div className="blob before-blob after-blob"/>
                    {/* https://github.com/hosseinnabi-ir/Image-Blob-Animation-using-CSS/tree/AngularProject */}
                </div>
                <div className='grow'>
                    <h1 className="text-[8vw]">Fabrício Ferreira</h1>
                    <h2 className="text-[6vw]">Desenvolvedor Java</h2>
                </div>
            </div>
            <div className="flex flex-col items-stretch md:flex-row md:items-center md:justify-around gap-5">
                <div className="flex justify-around w-full flex-wrap md:flex-nowrap md:max-w-sm">
                    <a className={buttonVariants({ variant: "outline" })} href="mailto:fabriciof481@gmail.com?subject=Assunto do email&body=Conteúdo do email que será preenchido automaticamente" >
                        <i className="fa-solid fa-envelope"></i>
                        fabriciof481@mail.com
                    </a>
                    <a className={buttonVariants({ variant: "outline" })} download href="curriculo.pdf" target="_blank" rel="noopener noreferrer">
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
                            +26   
                        </span>
                        projects
                    </p>
                </div>
            </div>
        </section>
    )
}