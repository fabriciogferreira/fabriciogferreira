"use client"

import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { cn, cnType } from "@/lib/utils"
import { useState } from 'react';
import SECTIONS from "@/objects/sections"

type props = {
    menuClass?: cnType,
    listClass?: cnType,
    itemClass?: cnType
}

export default function Nav({menuClass, listClass, itemClass}: props){

    const [currentPath, setPath] = useState("hero-section");

    return (
        <NavigationMenu className={cn("grow-0", menuClass)}>
            <NavigationMenuList className={cn("items-start space-x-0 gap-2", listClass)}>
                {SECTIONS.map((section, index) =>{
                    return (
                        <NavigationMenuItem key={index} className={cn({'backdrop-blur-3xl bg-white/30 w-full rounded': currentPath == section.title}, itemClass)}>
                            <Link 
                                className={cn("p-2 gap-3")}
                                href={"#" + section.title}
                                onClick={() => setPath(section.title)}
                            >
                                <i className={`fa-solid fa-${section.icon} fa-fw mr-2`}></i>
                                <span>
                                    {section.title}
                                </span>
                            </Link>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}