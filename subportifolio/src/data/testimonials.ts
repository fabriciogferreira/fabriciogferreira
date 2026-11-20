import type { LocalizedString } from "@/i18n/types"

export type Testimonial = {
  slug: string
  quote: LocalizedString
  name: string
  position: LocalizedString
  enterprise: string
  site: string
  linkedin: string
  date: string
  profileSrc?: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    slug: "davi-torelli",
    quote: {
      br: "Conheci o Fabrício na faculdade, onde além de um grande amigo, foi uma das pessoas que mais conseguia desembrulhar conceitos de programação na minha cabeça. Em 2024, surgiu uma oportunidade de trabalho como freelancer, na qual convidei o Fabrício para atuar comigo. Foi uma experiência muito positiva, e com certeza considero a possibilidade de colaborarmos novamente em futuros projetos. Destaco sua resiliência, vontade de aprender, atenção aos detalhes, altruísmo e inúmeras capacidades técnicas. Considero que o Fabrício tenha todas as condições para evoluir rapidamente em sua carreira, agregando valores técnicos e pessoais para qualquer organização.",
      en: "I met Fabrício at university, where — besides being a great friend — he was one of the people who best unpacked programming concepts for me. In 2024 a freelance opportunity came up and I invited him to work with me. It was a very positive experience and I would gladly collaborate again. I highlight his resilience, willingness to learn, attention to detail, altruism and technical skills. I believe he can grow quickly and add technical and personal value to any organization.",
    },
    name: "Davi Torelli",
    position: { br: "Pleno", en: "Mid-level" },
    enterprise: "Enterscience",
    site: "https://enterscience.com.br/",
    linkedin: "https://www.linkedin.com/in/davitorelli/",
    date: "2025-04-05",
    profileSrc: "/testimonials/davi-torelli/profile.jpeg",
    initials: "DT",
  },
  {
    slug: "vinicius-cruz",
    quote: {
      br: "Tive a oportunidade de trabalhar com o Fabrício na Olie, e ele sempre se destacou pela habilidade de otimizar soluções, buscando as abordagens mais eficientes. Além disso, é excelente no planejamento das tarefas, o que torna seu trabalho mais organizado e produtivo. O Fabrício também demonstrou grande disposição para ajudar e esclarecer dúvidas dos colegas, contribuindo para o bom andamento e a entrega da equipe como um todo.",
      en: "I worked with Fabrício at Olie, and he always stood out for optimizing solutions and seeking efficient approaches. He is also excellent at planning tasks, which keeps his work organized and productive. He willingly helps teammates and clarifies doubts, contributing to the team’s delivery as a whole.",
    },
    name: "Vinicius Cruz",
    position: { br: "Junior", en: "Junior" },
    enterprise: "Olie",
    site: "https://olie.ai/",
    linkedin: "https://www.linkedin.com/in/viniciuscruz7/",
    date: "2025-03-26",
    profileSrc: "/testimonials/vinicius-cruz/profile.jpeg",
    initials: "VC",
  },
]

export function formatTestimonialDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-")
  return `${day}/${month}/${year}`
}
