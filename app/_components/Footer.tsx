import { socialMedias } from "@/types/social-medias"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Footer() {
    return (
        <footer className="flex justify-around p-4 gap-4 flex-wrap bg-slate-800">
            <p className="flex items-center text-center">
                ©{new Date().getFullYear()} CodeTree. Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-2 flex-col sm:flex-row items-center">
                <h1>
                    Develop by <span className="font-bold">Fabrício Ferreira</span>
                </h1>
                <div className="flex gap-1">
                    {socialMedias.map((socialMedia) => {
                        return (
                            <Link key={socialMedia.name} href={socialMedia.link} className={cn(buttonVariants({variant: "link"}), "p-0")} target="_blank">
                                <socialMedia.icon size={30} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}