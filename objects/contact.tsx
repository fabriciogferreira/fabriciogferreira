import { ReactNode } from 'react';

import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';

export type file = {
    name: string
    link: string
    icon: ReactNode,
}

export const SOCIAL_MEDIAS: Array<file> = [
    {name: "GitHub", link: "https://www.github.com/fabriciogferreira", icon: <GitHubIcon rootClass="h-full"/>},
    {name: "Linkedin", link: "https://www.linkedin.com/in/fabriciogferreira/", icon: <LinkedinIcon /> },
    {name: "Instagram", link: "https://www.instagram.com/fabricio1103/", icon: <InstagramIcon />},
]