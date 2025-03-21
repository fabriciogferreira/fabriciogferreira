import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';

export type tFile = {
    name: string
    link: string
    icon: React.FC<{ rootClass?: string }>,
}

export type tFiles = Array<tFile>

export const socialMedias: tFiles = [
    {name: "GitHub", link: "https://www.github.com/fabriciogferreira", icon: GitHubIcon},
    {name: "Linkedin", link: "https://www.linkedin.com/in/fabriciogferreira/", icon: LinkedinIcon },
    {name: "Instagram", link: "https://www.instagram.com/fabricio1103/", icon: InstagramIcon},
]