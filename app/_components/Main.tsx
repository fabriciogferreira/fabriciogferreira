import SECTIONS from "@/objects/sections";

export default function Main() {
    return (
        <main className="mx-14 flex flex-col gap-20">
            {SECTIONS.map((section, index) => {
                return (
                    <section id={section.title} key={section.title} className={SECTIONS[index].class}>
                        {section.showTitle && <h1 className="text-4xl">{section.title}</h1>}
                        <section.component />
                    </section>
                )
            })}
        </main>
    )
}