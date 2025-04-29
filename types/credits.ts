import { tTranslatable } from "./languages"

export type credit = {
    object: tTranslatable<string>,
    product: string,
    link: string,
    description: tTranslatable<string>,
}

export type credits = Array<credit>
export const credits: credits  = [
    {
        object: {
            br: "Ícones",
            en: "Icons"
        },
        product: "Lucide Icons",
        link: "https://lucide.dev/",
        description: {
            br: "Uma coleção de ícones.",
            en: "A collection of icons."
        },
    },
    {
        object: {
            br: "Componentes",
            en: "Components"
        },
        product: "Shadcn",
        link: "https://ui.shadcn.com/",
        description: {
            br: "Uma coleção de componentes UI para React.",
            en: "A collection of UI components for React."
        },
    },
    {
        object: {
            br: "SVGs",
            en: "SVGs"
        },
        product: "DevIcons",
        link: "https://devicons.github.io/devicon/",
        description: {
            br: "Uma coleção de ícones SVG para desenvolvedores.",
            en: "A collection of SVG icons for developers."
        }
    },
    // {
    //     object: {
    //         br: "Componentes",
    //         en: "Components"
    //     },
    //     product: "React Github Calendar",
    //     link: "https://grubersjoe.github.io/react-github-calendar/",
    //     description: {
    //         br: "Um componente React para exibir um calendário de atividades do GitHub.",
    //         en: "A React component to display a GitHub activity calendar."
    //     },
    // }
]