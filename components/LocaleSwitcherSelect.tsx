'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select"

import { useTransition, useState } from 'react';
import { uLanguages } from '@/types/languages';
import { setUserLocale } from '@/services/locale';
import { rLanguages } from '@/objects/languages';
import { tLanguage } from '@/objects/languages';

type Props = {
    defaultValue: uLanguages;
};

export default function LocaleSwitcherSelect({
    defaultValue,
}: Props) {
    const [, startTransition] = useTransition();
    const [language, setLanguage] = useState<tLanguage>(rLanguages[defaultValue])

    function onChange(value: uLanguages) {
        setLanguage(rLanguages[value])
        const locale = value as uLanguages;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    return (
        <Select defaultValue={defaultValue} onValueChange={onChange}>
            <SelectTrigger className="w-fit flex gap-1">
                <div className="w-5">
                    <language.icon/>
                </div>
                {language.label}
            </SelectTrigger>
            <SelectContent>
                {Object
                    .entries(rLanguages)
                    .map(([key, item]) => (
                    <SelectItem key={key} value={key} className="flex">
                        <div className="flex items-center gap-2">
                            <div className="w-5">
                                <item.icon />
                            </div>
                            {item.label}
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}