import SECTIONS from "@/objects/sections";
import { useTranslations } from 'next-intl';

export default function Main() {
    const t = useTranslations('Main');
    
    return (
        <main className="[&>*:nth-child(even)]:bg-slate-900 [&>*:nth-child(even)]:text-neutral-100">
            {SECTIONS.map((section) => {
                if (section.hide) return

                return (
                    <section id={section.title} key={section.title} className={`${section.class} px-4 py-10 sm:px-[10vw]`}>
                        {section.showTitle && 
                            <div className="flex items-center mb-5 gap-2">
                                <section.icon size={35}/>
                                <h1 className="text-4xl text-start">{t(section.title)}</h1>
                            </div>
                        }
                        <section.component />
                    </section>
                )
            })}
        </main>
    )
}