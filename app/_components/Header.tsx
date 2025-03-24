"use client"

import { useState } from "react";

import SwitchTheme from "@/components/SwitchTheme";
import Nav from "@/components/Nav";
import { icons } from "@/types/icons";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Header(){

    const [state, setState] = useState<boolean>(false);

    return (
        <header>
            <Sheet open={state} onOpenChange={(state) =>  setState(state)}>
                <SheetTrigger asChild>
                    <Button className="fixed -right-3 top-1/2 rounded-full" onClick={() => setState(!state)} variant={"default"} size={"icon"}>
                        <icons.chevronLeft />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-0 flex items-center border-l border-2 border-l-neutral-500">
                    <Button className="-ml-5 rounded-full" onClick={() => setState(!state)} variant={"default"} size={"sm"}>
                        <icons.chevronRight />
                    </Button>
                    <div>
                        <SheetHeader>
                            <SheetTitle>Fabrício Ferreira</SheetTitle>
                        </SheetHeader>
                        <Nav listClass="flex-col" itemClass="text-[4.5vh]" />
                        <div className="flex justify-around items-center">
                            <SwitchTheme/>
                            <LocaleSwitcher />
                        </div>
                    </div>

                </SheetContent>
            </Sheet>
        </header>
    )
}