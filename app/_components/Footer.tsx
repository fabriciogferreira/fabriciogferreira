import { SOCIAL_MEDIAS } from "@/objects/contact"

export default function Footer() {
    return (
        <footer className="flex justify-around p-4 gap-4 flex-wrap">
            <p className="flex items-center text-center">
                ©{new Date().getFullYear()} CodeTree. Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-2 flex-col sm:flex-row items-center">
                <h1>
                    Develop by <span className="font-bold">Fabrício Ferreira</span>
                </h1>
                <div className="flex">
                    {SOCIAL_MEDIAS.map((socialMedia) => {
                        return (
                            <div className="w-14" key={socialMedia.link}>
                                {socialMedia.icon}
                            </div>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}