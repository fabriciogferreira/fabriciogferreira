import { socialMedias } from "@/types/social-medias"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    
    return (
        <footer className="flex justify-around p-4 gap-4 flex-wrap bg-slate-800">
            <p className="flex items-center text-center">
                ©{new Date().getFullYear()} CodeTree. {t('all_rights_reserved')}
            </p>
            <div className="flex justify-center gap-2 flex-col sm:flex-row items-center">
                <h1>
                    {t.rich('developed_by', {
                        strong: (chunks) => <strong>{chunks}</strong>,
                        name: "Fabrício Ferreira"
                    })}
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