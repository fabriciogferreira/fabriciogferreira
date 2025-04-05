import { buttonVariants } from '@/components/ui/button';

import { icons } from '@/types/icons';
import { credits } from '@/types/credits';
import Link from 'next/link';
import {useLocale} from 'next-intl';
import { uLanguages } from "@/types/languages"

export default function Credits(){
    const language = useLocale()

    return (
        <ul className='flex flex-col gap-2'>
            {credits.map((credit) =>
                <li key={credit.product} className=''>
                    <span className='font-bold'>{credit.object[language as uLanguages]}</span>:
                    <Link className={buttonVariants({ variant: "link" })} download href={credit.link} target="_blank" rel="noopener noreferrer">
                        {credit.product} <icons.externalLink />
                    </Link>
                    <p>{credit.description[language as uLanguages]}</p>
                </li>
            )}
        </ul>
    )
}