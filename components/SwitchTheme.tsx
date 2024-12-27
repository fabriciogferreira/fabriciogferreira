'use client'

import { useTheme } from 'next-themes'

type props = {
    labelClass?: string
}

export default function SwitchTheme({labelClass = 'w-24'}: props){
    const { theme, setTheme } = useTheme()

    return (
        <div id="switch-theme" className="w-min">
            <label
                id="switch-theme-label"
                className={"switch-theme-label " + labelClass}
                onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
            >
            </label>
        </div>
    )
}

//CREDITS
//https://www.youtube.com/@hellocodelab/shorts
//https://github.com/hellocodelab/dark-mode-toggle-button/blob/main/style.css

//IMPROVEMENTS:
/*
using ids to affect only switch elements
rounded edges regardless of size
"sun and moon" goes to the ends regardless of size
the switch is proportionally resized
sun and moon in relative positions
*/