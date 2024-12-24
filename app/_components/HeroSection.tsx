export default function HeroSection(){
    return (
        <section>
            <div className="flex">
                <figure>
                    <img src="imagem.jpg" alt="Foto de perfil" />
                    <figcaption>Foto de perfil</figcaption>
                </figure>
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