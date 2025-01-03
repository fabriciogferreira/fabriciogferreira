import SECTIONS from "@/objects/sections";

export default function Main() {
    return (
        <main className="mx-14 flex flex-col gap-20 pb-20">
            {SECTIONS.map((section, index) => {
                if (section.hide) return

                return (
                    <section id={section.title} key={section.title} className={SECTIONS[index].class}>
                        {section.showTitle && 
                            <div className="flex items-center mb-5">
                                <i className={`fa-solid fa-${section.icon} fa-fw mr-2 fa-xl`}></i>
                                <h1 className="text-4xl text-start">{section.title}</h1>
                            </div>
                        }
                        <section.component />
                    </section>
                )
            })}
        </main>
    )
}