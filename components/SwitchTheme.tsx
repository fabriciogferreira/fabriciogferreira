'use client'

import { useTheme } from 'next-themes'
import { cn, cnType } from '@/lib/utils'

type props = {
    rootClass?: cnType
    labelClass?: cnType
}

export default function SwitchTheme({rootClass, labelClass}: props){
    const { theme, setTheme } = useTheme()

    return (
        <div id="switch-theme" className={cn("w-24", rootClass)}>
            <label
                id="switch-theme-label"
                className={cn("switch-theme-label", labelClass)}
                onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
            >
            </label>
        </div>
    )
}

//CREDITS
//https://www.youtube.com/@hellocodelab/shorts
//https://github.com/hellocodelab/dark-mode-toggle-button/blob/main/style.css

//OPCAO PARA CRESCER DE ACORDO A ALTURA OU LARGURA

//IMPROVEMENTS:
/*
using ids to affect only switch elements
rounded edges regardless of size
"sun and moon" goes to the ends regardless of size
the switch is proportionally resized
sun and moon in relative positions
*/