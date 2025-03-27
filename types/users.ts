import { tTranslatable } from "./languages"
type me = {
    name: string,
    birthdate: string
    about: tTranslatable<Array<string>>
    email: string
    currentPosition: string,
    expertise: string
}


export const me: me = {
    name: "Fabrício Ferreira",
    birthdate: "2002/04/25",
    about: {
        br: [
            "Olá, Fabrício aqui! Se você chegou até este ponto, provavelmente está considerando a possibilidade de me contratar (obrigado, Deus!). Quero aproveitar para compartilhar um pouco da minha história até o meu primeiro contato com a programação.",
            "Minha relação com a tecnologia começou com um PlayStation 2 que minha mãe comprou. Fiquei fascinado com a ideia de como um aparelho podia conter tantos jogos incríveis. Esse foi o início da minha paixão por tecnologia e jogos, mesmo que eu jogasse apenas alguns deles.",
            "Essa adoração pela tecnologia cresceu ainda mais com os filmes de super-heróis, especialmente por causa do Homem de Ferro, cujo uso criativo e inovador da tecnologia me inspirou profundamente.",
            "Certo dia, enquanto ia para a igreja, encontrei um futuro professor distribuindo panfletos sobre as Escolas Técnicas Estaduais (ETEC). Por coincidência, eu já havia me inscrito para o processo seletivo, graças à indicação do meu irmão.",
            "No curso de Informática para Internet (INFONET) da ETEC, tive meu primeiro contato com a programação. Foi lá que aprendi sobre linguagens de programação, frameworks, e como os computadores realmente funcionam. Essa experiência abriu um novo mundo de possibilidades para mim.",
            "Desde então, venho trilhando uma carreira na área de tecnologia. Meu próximo passo educacional foi cursar Análise e Desenvolvimento de Sistemas na UNIFUNEC, onde me graduei. Agora, estou considerando ingressar em uma pós-graduação em Ciência da Computação para continuar expandindo meus conhecimentos e habilidades."
        ],
        en: [
            "Hello, Fabrício here! If you've made it this far, you're probably considering hiring me (thank you, God!). I'd like to take this opportunity to share a little of my story up until my first contact with programming.",
            "My relationship with technology began with a PlayStation 2 that my mother bought me. I was fascinated by the idea of how one device could contain so many incredible games. That was the beginning of my passion for technology and games, even if I only played a few of them.",
            "This adoration for technology grew even more with superhero movies, especially Iron Man, whose creative and innovative use of technology inspired me deeply.",
            "One day, on my way to church, I came across a future teacher handing out leaflets about the State Technical Schools (ETEC). By coincidence, I had already signed up for the selection process, thanks to my brother's recommendation.",
            "At ETEC's Internet Computing course (INFONET), I had my first contact with programming. It was there that I learned about programming languages, frameworks and how computers really work. This experience opened up a whole new world of possibilities for me.",
            "Since then, I've been pursuing a career in technology. My next educational step was to study Systems Analysis and Development at UNIFUNEC, where I graduated. I'm now considering a postgraduate degree in Computer Science to continue expanding my knowledge and skills."
        ]
    },
    email: "fabriciof481@gmail.com",
    currentPosition: "Trainne",
    expertise: "Backend Developer"
}
