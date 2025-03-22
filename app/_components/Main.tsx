import SECTIONS from "@/objects/sections";

export default function Main() {
    return (
        <main className="[&>*:nth-child(even)]:bg-slate-900 [&>*:nth-child(even)]:text-neutral-100">
            {SECTIONS.map((section) => {
                if (section.hide) return

                return (
                    <section id={section.title} key={section.title} className={`${section.class} px-[10vw] py-10`}>
                        {section.showTitle && 
                            <div className="flex items-center mb-5">
                                <i className={`fa-solid fa-${section.icon} fa-fw mr-2 fa-xl`}></i>
                                <h1 className="text-4xl text-start">{section.title.charAt(0).toUpperCase() + section.title.slice(1)}</h1>
                            </div>
                        }
                        <section.component />
                    </section>
                )
            })}
        </main>
    )
}