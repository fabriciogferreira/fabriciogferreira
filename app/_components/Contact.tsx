'use client'

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Textarea } from '@/components/ui/textarea';
import { buttonVariants } from '@/components/ui/button';
import { ReactNode } from 'react';

import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';

import { cn } from '@/lib/utils';

type file = {
    name: string
    link: string
    icon: ReactNode,
}

const FILES: Array<file> = [
    {name: "GitHub", link: "https://www.github.com/fabriciogferreira", icon: <GitHubIcon rootClass="h-full"/>},
    {name: "Linkedin", link: "https://www.linkedin.com/in/fabriciogferreira/", icon: <LinkedinIcon /> },
    {name: "Instagram", link: "https://www.instagram.com/fabricio1103/", icon: <InstagramIcon />},
]

export default function Contact(){
    const [email, setEmail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    return (
        <section className='text-center'>
            <h1 className='text-start'>Lets work together</h1>
            <h4>Contact me</h4>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 flex-col sm:flex-row'>
                    <Input type='email' placeholder='Email' onChange={(value) => setEmail(value.target.value)}/>
                    <Input placeholder='Subject' onChange={(value) => setSubject(value.target.value)}/>
                </div>
                <Textarea placeholder="Digite sua mensagem aqui." onChange={(value) => setMessage(value.target.value)}/>
                <Button type="submit" onClick={() => window.location.href = `mailto:${email}?subject=${subject}&body=${message}`}>
                    <i className="fa-solid fa-envelope"></i>
                    Submit
                </Button>
            </div>
            <h4>Social medias</h4>
            <div className='flex flex-wrap justify-start border border-2 p-3 gap-4 rounded-xl'>
                {FILES.map((file) => {
                    return (
                        <a key={file.name} className={cn(buttonVariants({ variant: "outline" }), "text-base font-bold")} href={file.link} target="_blank" rel="noopener noreferrer">
                            {file.icon} {file.name}
                        </a>
                    )
                })}
            </div>
        </section>
    )
}