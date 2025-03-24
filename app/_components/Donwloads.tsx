import { buttonVariants } from '@/components/ui/button';

import { files } from '@/types/files';
import Link from 'next/link';

import { icons } from '@/types/icons';

export default function Downloads(){
    return (
        <div className='flex flex-wrap gap-2 justify-start'>
            {Object.values(files).map((file) =>
                <Link key={file.name} className={buttonVariants({ variant: "secondary" })} download href={file.path} target="_blank" rel="noopener noreferrer">
                    <icons.downloads /> | <file.icon />{file.name}
                </Link>
            )}
        </div>
    )
}