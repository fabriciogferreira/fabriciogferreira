import { GithubOriginal } from 'devicons-react';
import { LinkedinOriginal } from 'devicons-react';
import InstagramOriginal from '@/components/icons/InstagramOriginal';

export type file = {
    name: string
    link: string
    icon: React.FC,
}

export const SOCIAL_MEDIAS: Array<file> = [
    {name: "GitHub", link: "https://www.github.com/fabriciogferreira", icon: GithubOriginal},
    {name: "Linkedin", link: "https://www.linkedin.com/in/fabriciogferreira/", icon: LinkedinOriginal },
    {name: "Instagram", link: "https://www.instagram.com/fabricio1103/", icon: InstagramOriginal},
]