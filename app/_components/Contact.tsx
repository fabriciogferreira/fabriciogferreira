'use client'

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Textarea } from '@/components/ui/textarea';
import { buttonVariants } from '@/components/ui/button';

import { SOCIAL_MEDIAS } from '@/objects/contact';

import { cn } from '@/lib/utils';

export default function Contact(){
    const [email, setEmail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    return (
        <>
            <h4>Contact me</h4>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 flex-col sm:flex-row'>
                    <Input type='email' placeholder='Email' onChange={(value) => setEmail(value.target.value)}/>
                    <Input placeholder='Subject' onChange={(value) => setSubject(value.target.value)}/>
                </div>
                <Textarea placeholder="Digite sua mensagem aqui." onChange={(value) => setMessage(value.target.value)}/>
                <Button type="submit" variant="secondary" onClick={() => window.location.href = `mailto:${email}?subject=${subject}&body=${message}`}>
                    <i className="fa-solid fa-envelope"></i>
                    Submit
                </Button>
            </div>
            <h4>Social medias</h4>
            <div className='flex flex-wrap justify-start gap-4 border p-3 rounded-lg'>
                {SOCIAL_MEDIAS.map((socialMedia) => {
                    return (
                        <a key={socialMedia.name} className={cn(buttonVariants({ variant: "outline" }), "text-base font-bold")} href={socialMedia.link} target="_blank" rel="noopener noreferrer">
                            {socialMedia.icon} {socialMedia.name}
                        </a>
                    )
                })}
            </div>
        </>
    )
}