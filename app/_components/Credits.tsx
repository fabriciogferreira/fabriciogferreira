import { buttonVariants } from '@/components/ui/button';

import { icons } from '@/types/icons';
import { credits } from '@/types/credits';
import Link from 'next/link';
import Translable from '@/components/translable';

export default function Credits(){
    return (
        <ul className='flex flex-col gap-2'>
            {credits.map((credit) =>
                <li key={credit.product}>
                    <span className='font-bold'><Translable value={credit.object} /></span>:
                    <Link className={buttonVariants({ variant: "link" })} download href={credit.link} target="_blank" rel="noopener noreferrer">
                        {credit.product} <icons.externalLink />
                    </Link>
                    <p><Translable value={credit.description} /></p>
                </li>
            )}
        </ul>
    )
}