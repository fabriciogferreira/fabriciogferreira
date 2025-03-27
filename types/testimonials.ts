import { tTranslatable } from "./languages"

export type tTestimonial = {
    quote: tTranslatable<string>,
    name: string,
    position: string,
    enterprise: string,
    profile: string
    siteLink: string
    createdAt: string
    linkedinLink: string
}

export type tTestimonials = Array<tTestimonial>

export const testimonials: tTestimonials = [
    {
        quote: {
            br: "Tive a oportunidade de trabalhar com o Fabrício na Olie, e ele sempre se destacou pela habilidade de otimizar soluções, buscando as abordagens mais eficientes. Além disso, é excelente no planejamento das tarefas, o que torna seu trabalho mais organizado e produtivo. O Fabrício também demonstrou grande disposição para ajudar e esclarecer dúvidas dos colegas, contribuindo para o bom andamento e a entrega da equipe como um todo.",
            en: "I had the opportunity to work with Fabrício at Olie, and he always stood out for his ability to optimize solutions, looking for the most efficient approaches. He is also excellent at planning tasks, which makes his work more organized and productive. Fabrício has also shown great willingness to help and answer questions from colleagues, contributing to the smooth running and delivery of the team as a whole."
        },
        createdAt: "2025/03/26",
        name: "Vinicius Cruz",
        profile: "https://media.licdn.com/dms/image/v2/D4D03AQHQudJvNednGw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667403204862?e=1748476800&v=beta&t=_EUPJxYcv5XHDiyI8lD-1Aib5b2wsaGDDXA_-coTP8w",
        siteLink: "https://olie.ai/",
        enterprise: "Olie",
        position: "Trainee",
        linkedinLink: "https://www.linkedin.com/in/viniciuscruz7/"
    }
]