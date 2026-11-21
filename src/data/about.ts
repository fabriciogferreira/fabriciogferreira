import type { LocalizedString, LocalizedStrings } from "@/i18n/types"

export const ABOUT_PARAGRAPHS: LocalizedStrings = {
  br: [
    "Olá, Fabrício aqui. Se você chegou até aqui, provavelmente está considerando me contratar — obrigado pela atenção. Quero compartilhar um pouco da história até o primeiro contato com a programação.",
    "Minha relação com a tecnologia começou com um PlayStation 2 que minha mãe comprou. Fiquei fascinado com a ideia de como um aparelho podia conter tantos jogos. Foi o início da paixão por tecnologia e jogos — mesmo jogando só alguns deles.",
    "Essa curiosidade cresceu com os filmes de super-heróis, especialmente o Homem de Ferro e o uso criativo da tecnologia.",
    "Indo para a igreja, encontrei um professor distribuindo panfletos da ETEC. Por coincidência, eu já tinha me inscrito no processo seletivo, por indicação do meu irmão.",
    "No curso de Informática para Internet (INFONET) da ETEC tive o primeiro contato com programação: linguagens, frameworks e como os computadores realmente funcionam.",
    "Desde então sigo na área. Graduei-me em Análise e Desenvolvimento de Sistemas na UNIFUNEC e estou considerando uma pós em Ciência da Computação para continuar expandindo o que sei.",
  ],
  en: [
    "Hi, Fabrício here. If you made it this far, you are probably considering hiring me — thank you. Here is a bit of the story up to my first contact with programming.",
    "My relationship with technology started with a PlayStation 2 my mother bought. I was fascinated that one device could hold so many games. That sparked the passion for tech and games — even if I only played a few of them.",
    "That curiosity grew with superhero films, especially Iron Man and his creative use of technology.",
    "On the way to church I met a teacher handing out ETEC leaflets. By chance I had already applied, thanks to my brother.",
    "At ETEC’s Internet Computing course (INFONET) I first touched programming: languages, frameworks, and how computers really work.",
    "I have stayed in tech since. I graduated in Systems Analysis and Development at UNIFUNEC and I am considering a Computer Science postgraduate degree to keep growing.",
  ],
}

export const ABOUT_PHOTOS = [
  {
    src: "/about/formado.jpg",
    alt: {
      br: "Fabrício na formatura",
      en: "Fabrício at graduation",
    } satisfies LocalizedString,
  },
  {
    src: "/about/unifunec-turma.jpg",
    alt: {
      br: "Turma da UNIFUNEC",
      en: "UNIFUNEC class",
    } satisfies LocalizedString,
  },
  {
    src: "/about/tcc-unifunec.jpg",
    alt: {
      br: "Apresentação do TCC na UNIFUNEC",
      en: "Thesis presentation at UNIFUNEC",
    } satisfies LocalizedString,
  },
  {
    src: "/about/moto.jpg",
    alt: {
      br: "Fabrício com a moto",
      en: "Fabrício with his motorcycle",
    } satisfies LocalizedString,
  },
] as const
