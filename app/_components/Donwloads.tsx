import { buttonVariants } from '@/components/ui/button';

type file = {
    name: string
    icon: string
    path: string
}

const FILES: Array<file> = [
    {name: "Currículo", icon: "address-card", path: "curriculo.pdf"},
    {name: "TCC da Graduação", icon: "newspaper", path: "tcc-graduation.pdf"},
]

export default function Downloads(){
    return (
        <div className='flex flex-wrap gap-2 justify-start'>
            {FILES.map((file) => {
                return (
                    <a key={file.name} className={buttonVariants({ variant: "secondary" })} download href={file.path} target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-download"></i> |
                        <i className={`fa-solid fa-${file.icon}`}></i> 
                        {file.name}
                    </a>
                )
            })}
        </div>
    )
}