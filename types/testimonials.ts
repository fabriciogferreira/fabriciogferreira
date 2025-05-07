import { tTranslatable } from "./languages"
import { tImage, images } from "./images"
export type tTestimonial = {
    quote: tTranslatable,
    name: string,
    position: string,
    enterprise: string,
    profile: tImage
    siteLink: string
    createdAt: string
    linkedinLink: string
}

export type tTestimonials = Array<tTestimonial>

export const testimonials: tTestimonials = [
    {
        quote: {
            br: "Conheci o Fabrício na faculdade, onde além de um grande amigo, foi uma das pessoas que mais conseguia desembrulhar conceitos de programação na minha cabeça. Em 2024, surgiu uma oportunidade de trabalho como freelancer, na qual convidei o Fabrício para atuar comigo. Foi uma experiência muito positiva, e com certeza considero a possibilidade de colaborarmos novamente em futuros projetos. Destaco sua resiliência, vontade de aprender, atenção aos detalhes, altruísmo e inúmeras capacidades técnicas. Considero que o Fabrício tenha todas as condições para evoluir rapidamente em sua carreira, agregando valores técnicos e pessoais para qualquer organização.",
            en: "I met Fabrício when I was at university, where, as well as being a great friend, he was one of the people who was most able to unpack programming concepts in my head. In 2024, a freelance opportunity came up, in which I invited Fabrício to work with me. It was a very positive experience and I would definitely consider collaborating again on future projects. I would highlight his resilience, willingness to learn, attention to detail, altruism and numerous technical skills. I believe that Fabrício has all the conditions to evolve rapidly in his career, adding technical and personal value to any organization."
        },
        createdAt: "2025/04/05",
        name: "Davi Torelli",
        profile: images.testimonials.daviTorelli.profile,
        siteLink: "https://enterscience.com.br/",
        enterprise: "Enterscience",
        position: "Junior",
        linkedinLink: "https://www.linkedin.com/in/davitorelli/"
    },
    {
        quote: {
            br: "Tive a oportunidade de trabalhar com o Fabrício na Olie, e ele sempre se destacou pela habilidade de otimizar soluções, buscando as abordagens mais eficientes. Além disso, é excelente no planejamento das tarefas, o que torna seu trabalho mais organizado e produtivo. O Fabrício também demonstrou grande disposição para ajudar e esclarecer dúvidas dos colegas, contribuindo para o bom andamento e a entrega da equipe como um todo.",
            en: "I had the opportunity to work with Fabrício at Olie, and he always stood out for his ability to optimize solutions, looking for the most efficient approaches. He is also excellent at planning tasks, which makes his work more organized and productive. Fabrício has also shown great willingness to help and answer questions from colleagues, contributing to the smooth running and delivery of the team as a whole."
        },
        createdAt: "2025/03/26",
        name: "Vinicius Cruz",
        profile: images.testimonials.viniciusCruz.profile,
        siteLink: "https://olie.ai/",
        enterprise: "Olie",
        position: "Trainee",
        linkedinLink: "https://www.linkedin.com/in/viniciuscruz7/"
    }
]