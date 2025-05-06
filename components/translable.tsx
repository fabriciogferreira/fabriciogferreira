import {useLocale} from 'next-intl';
import { tTranslatable, uLanguages } from "@/types/languages"
import { ReactNode } from 'react';

type TranslableProps = {
    value: tTranslatable
    callback?: (value: string) => ReactNode
}

export default function Translable(props: TranslableProps){
    const language = useLocale() as uLanguages
    
    if (typeof props.value === "string") {
        return props.value
    }

    if (Array.isArray(props.value[language]) && props.callback) {
        return props.value[language].map(props.callback)
    }

    return (
        props.value[language]
    )
}