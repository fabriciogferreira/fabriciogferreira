import { cn, cnType } from "@/lib/utils";
import { ReactNode } from "react";

type props = {
    width?: number;
    height?: number;
    size?: number;
    fill?: string;
    rootClass?: cnType;
    children: ReactNode;
    viewBox?: string;
};

/**
 * @component Base component for icons.
 * @param {number} width svg width.
 * @param {number} height svg height.
 * @param {number} size size of the width and height of the svg, if size is passed, there is no point in passing height and width.
 * @param {string} fill svg color.
 * @param {cnType} rootClass svg class.
 * @param {ReactNode} children svg children.
 * @param {string} viewBox svg viewbox.
 * @returns {JSX.Element} - naturally returns a jsx element.
 */
export default function BaseIcon({ width, height, size, fill, rootClass, children, viewBox = "0 0 512 512" }: props): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            height={size ? size : height ? height : "100%"}
            width={size ? size : width ? width : "100%"}
            className={cn(`aspect-square`, fill, rootClass)}
        >
            {children}
        </svg>
    );
}