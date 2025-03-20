import { buttonVariants } from '@/components/ui/button';

import { files } from '@/types/files';

export default function Downloads(){
    return (
        <div className='flex flex-wrap gap-2 justify-start'>
            {Object.values(files).map((file) => {
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