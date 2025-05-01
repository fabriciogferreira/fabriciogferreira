"use client"

import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { cn, cnType } from "@/lib/utils"
import { useState } from 'react';
import SECTIONS from "@/objects/sections"
import { useTranslations } from "next-intl";

type props = {
    menuClass?: cnType,
    listClass?: cnType,
    itemClass?: cnType
}

export default function Nav({menuClass, listClass, itemClass}: props){

    const [currentPath, setPath] = useState("hero-section");

    const t = useTranslations('Main');

    return (
        <NavigationMenu className={cn("grow-0", menuClass)}>
            <NavigationMenuList className={cn("items-start space-x-0 gap-2", listClass)}>
                {SECTIONS.map((section, index) =>{
                    if (section.hide) return
                    
                    return (
                        <NavigationMenuItem key={index} className={cn({'backdrop-blur-3xl bg-white/30 w-full rounded': currentPath == section.title}, itemClass)}>
                            <Link 
                                className={cn("p-2 gap-3 flex items-center")}
                                href={"#" + section.title}
                                onClick={() => setPath(section.title)}
                            >
                                <section.icon size={30}/>
                                {t(section.title)}
                            </Link>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}