'use client'

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Textarea } from '@/components/ui/textarea';
import { buttonVariants } from '@/components/ui/button';

import { socialMedias } from '@/types/social-medias';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { icons } from '@/types/icons';

export default function Contact(){
    const t = useTranslations('Contact');
    
    const [email, setEmail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    return (
        <div className='flex flex-col justify-between gap-10 xl:flex-row xl:gap-20'>
            <article className='grow'>
                <h4>Contact me</h4>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 flex-col sm:flex-row'>
                        <Input type='email' placeholder={t('placeholder.email')} onChange={(value) => setEmail(value.target.value)}/>
                        <Input placeholder={t('placeholder.subject')} onChange={(value) => setSubject(value.target.value)}/>
                    </div>
                    <Textarea placeholder={t('placeholder.message')} onChange={(value) => setMessage(value.target.value)}/>
                    <Button type="submit" variant="secondary" onClick={() => window.location.href = `mailto:${email}?subject=${subject}&body=${message}`}>
                        <icons.mail />
                        {t('submit')}
                    </Button>
                </div>
            </article>
            <article className='grow'>
                <h4>{t('social_medias')}</h4>
                <div className='flex flex-wrap justify-start gap-4'>
                    {socialMedias.map((socialMedia) => 
                        <Link key={socialMedia.name} className={cn(buttonVariants({ variant: "link" }), "text-base font-bold")} href={socialMedia.link} target="_blank" rel="noopener noreferrer">
                            <socialMedia.icon /> {socialMedia.name}
                        </Link>
                    )}
                </div>
            </article>
        </div>
    )
}