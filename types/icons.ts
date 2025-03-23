import { 
    BR, US
} from 'country-flag-icons/react/3x2'

interface IconProps extends React.SVGProps<SVGElement> {
    size?: number | string;
    color?: string;
}

export type tIcon = React.ComponentType<IconProps>

export type tIcons = {
    [key: string]: tIcon
}

export const icons = {
    br: BR,
    us: US
} as const satisfies tIcons