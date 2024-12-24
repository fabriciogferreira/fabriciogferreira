import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HeroSection(){
    return (
        <section>
            <div className="flex">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <h1>Fabrício Ferreira</h1>
                    <h2>Desenvolvedor Java</h2>
                </div>
            </div>
            <div className="flex">
                <div className="flex">
                    <button>
                        Resume
                    </button>
                    <a>email</a>
                </div>
                <div className="flex justify-between">
                    <p>
                        +26 <br/> Anos
                    </p>
                    <p>
                        +26 <br/> Clientes
                    </p>
                    <p>
                        +26 <br/> projects
                    </p>
                </div>
            </div>
        </section>
    )
}