import {
    GithubOriginal,
    LinkedinOriginal
} from 'devicons-react';
import InstagramOriginal from '@/components/icons/InstagramOriginal';

export type tFile = {
    name: string
    link: string
    icon: React.FC,
}

export type tFiles = Array<tFile>

export const socialMedias: tFiles = [
    { name: "GitHub", link: "https://www.github.com/fabriciogferreira", icon: GithubOriginal },
    { name: "Linkedin", link: "https://www.linkedin.com/in/fabriciogferreira/", icon: LinkedinOriginal },
    { name: "Instagram", link: "https://www.instagram.com/fabricio1103/", icon: InstagramOriginal },
]