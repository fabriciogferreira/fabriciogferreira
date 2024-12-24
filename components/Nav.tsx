"use client"

import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { EnumSectionsIds } from "@/enums/EnumSectionsId"
import { cn, cnType } from "@/lib/utils"
import { useState } from 'react';

type props = {
    menuClass?: cnType,
    listClass?: cnType,
    itemClass?: cnType
}

export default function Nav({menuClass, listClass, itemClass}: props){

    const [currentPath, setPath] = useState(EnumSectionsIds.HeroSection);

    return (
        <NavigationMenu className={cn(menuClass)}>
            <NavigationMenuList className={cn("items-start space-x-0 gap-2", listClass)}>
                {Object.values(EnumSectionsIds).map((id) =>{
                    return (
                        <NavigationMenuItem key={id} className={cn({'backdrop-blur-3xl bg-white/30 w-full rounded': currentPath == id}, itemClass)}>
                            <Link 
                                className={cn("p-2")}
                                href={"#" + id}
                                onClick={() => setPath(id)}
                            >
                                {id}
                            </Link>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}