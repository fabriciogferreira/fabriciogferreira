import BaseIcon from "@/components/icons/BaseIcon"
import { cnType } from "@/lib/utils";

type props = {
    rootClass?: cnType;
};

/**
 * @component PHP icon.
 * @param {cnType} rootClass svg class.
 * @returns {JSX.Element} - naturally returns a jsx element.
 */
export default function PHPIcon({ rootClass }: props): JSX.Element {
    return (
        <BaseIcon rootClass={rootClass} viewBox="0 0 256 256">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(3.2,3.2)"><path d="M40,61.5c-21.78,0 -39.5,-9.645 -39.5,-21.5c0,-11.855 17.72,-21.5 39.5,-21.5c21.78,0 39.5,9.645 39.5,21.5c0,11.855 -17.72,21.5 -39.5,21.5z" fill="#777bb3"></path><path d="M40,19c21.505,0 39,9.421 39,21c0,11.579 -17.495,21 -39,21c-21.505,0 -39,-9.421 -39,-21c0,-11.579 17.495,-21 39,-21M40,18c-22.091,0 -40,9.85 -40,22c0,12.15 17.909,22 40,22c22.091,0 40,-9.85 40,-22c0,-12.15 -17.909,-22 -40,-22z" fill="#000000"></path><path d="M25.112,34c1.725,0 3.214,0.622 4.084,1.706c0.749,0.934 0.981,2.171 0.668,3.577c-0.841,3.791 -2.469,4.717 -8.294,4.717h-4.14l1.75,-10h5.932M25.112,32h-7.612l-3.5,20h2l1.056,-6h4.515c5.863,0 9.053,-0.905 10.246,-6.284c1.025,-4.62 -2.381,-7.716 -6.705,-7.716zM61.112,34c1.725,0 3.214,0.622 4.084,1.706c0.749,0.934 0.981,2.171 0.668,3.577c-0.841,3.791 -2.469,4.717 -8.294,4.717h-4.14l1.75,-10h5.932M61.112,32h-7.612l-3.5,20h2l1.056,-6h4.515c5.863,0 9.053,-0.905 10.246,-6.284c1.025,-4.62 -2.381,-7.716 -6.705,-7.716z" fill="#ffffff"></path><g fill="#ffffff"><path d="M49.072,33.212c-0.879,-0.864 -2.428,-1.212 -4.738,-1.212h-5.538l1.204,-6h-2.1l-3.9,20h1.99l2.388,-12h0.419h5.538c2.338,0 3.094,0.4 3.335,0.637c0.343,0.338 0.424,1.226 0.217,2.363l-1.767,9h2.106l1.626,-8.63c0.347,-1.908 0.084,-3.308 -0.78,-4.158z"></path></g></g></g>
        </BaseIcon>
    )
}