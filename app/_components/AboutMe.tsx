import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const IMAGES: Array<string> = [
    "1.png",
    "2.png",
    "3.png",
    "4.jpg",
    "5.jpg",
    "6.png",
    "7.jpg",
    "8.jpg",
    "9.png",
    "10.png",
    "11.jpg",
    "12.png",
]

type event = {
    icon: string,
    text: string,
    year: number,
}

const EVENTS: Array<event> = [
    {icon: "baby", text: "nascimento", year: 2002},
    {icon: "gamepad", text: "Primeiro contato com tecnologia: ps2", year: 2010},
    {icon: "computer", text: "primeiro computador", year: 2012},
    {icon: "mobile", text: "Primeiro contato com tecnologia movel: ps2", year: 2013},
    {icon: "burger", text: "primeiro emprego", year: 2017},
    {icon: "laptop", text: "primeiro notebook", year: 2017},
    {icon: "school", text: "ensino médio", year: 2021},
    {icon: "school", text: "ensino técnico", year: 2021},
    {icon: "graduation-cap", text: "Faculdade", year: 2021},
    {icon: "computer", text: "Segundo computador", year: 2022},
    {icon: "code", text: "First JOb Dev", year: 2023},
]

export default function AboutMe(){
    return (
        <>
            <article>
                <h2>history</h2>
                <div className="flex flex-col gap-4">
                    <p>
                        Olá, Fabrício aqui! Se você chegou até este ponto, provavelmente está considerando a possibilidade de me contratar (obrigado, Deus!). Quero aproveitar para compartilhar um pouco da minha história até o meu primeiro contato com a programação.
                    </p>
                    <p>
                        Minha relação com a tecnologia começou com um PlayStation 2 que minha mãe comprou. Fiquei fascinado com a ideia de como um aparelho podia conter tantos jogos incríveis. Esse foi o início da minha paixão por tecnologia e jogos, mesmo que eu jogasse apenas alguns deles.
                    </p>
                    <p>
                        Essa adoração pela tecnologia cresceu ainda mais com os filmes de super-heróis, especialmente por causa do Homem de Ferro, cujo uso criativo e inovador da tecnologia me inspirou profundamente.
                    </p>
                    <p>
                        Certo dia, enquanto ia para a igreja, encontrei um futuro professor distribuindo panfletos sobre as Escolas Técnicas Estaduais (ETEC). Por coincidência, eu já havia me inscrito para o processo seletivo, graças à indicação do meu irmão.
                    </p>
                    <p>
                        No curso de Informática para Internet (INFONET) da ETEC, tive meu primeiro contato com a programação. Foi lá que aprendi sobre linguagens de programação, frameworks, e como os computadores realmente funcionam. Essa experiência abriu um novo mundo de possibilidades para mim.
                    </p>
                    <p>
                        Desde então, venho trilhando uma carreira na área de tecnologia. Meu próximo passo educacional foi cursar Análise e Desenvolvimento de Sistemas na UNIFUNEC, onde me graduei. Agora, estou considerando ingressar em uma pós-graduação em Ciência da Computação para continuar expandindo meus conhecimentos e habilidades.
                    </p>
                </div>
            </article>
            <article>
                <h2>Galeria</h2>
                <div className="space-y-4 columns-2 sm:columns-3 md:columns-4 lg:columns-5 2xl:columns-7">
                    {IMAGES.map((image) => <img key={image} className="w-full rounded-xl shadow" src={`/about-me/${image}`} />)}          
                </div>
            </article>
            <article>
                <h2>timeline</h2>
                <div className='flex overflow-x-auto h-32 items-center *:px-4 pl-5'>
                    <TooltipProvider>
                        {EVENTS.map((event) => {
                            return (
                                <>
                                    <Tooltip key={event.text}>
                                        <TooltipTrigger className='flex flex-col items-center hover:text-blue-500 relative '>
                                            <div className="absolute -top-5">{event.year}</div>
                                            <div>|</div>
                                            <div className="absolute -bottom-10">
                                                <i className={`fa-solid fa-2xl fa-${event.icon}`}></i>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{event.text}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <div>|</div>
                                    <div className="hidden lg:flex">|</div>
                                    <div className="hidden xl:flex">|</div>
                                    <div className="hidden 2xl:flex">|</div>
                                </>
                            )
                        })}
                    </TooltipProvider>
                </div>
            </article>
        </>
    )
}