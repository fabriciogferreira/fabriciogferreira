"use client"

import { useState } from "react";

import SwitchTheme from "@/components/SwitchTheme";
import Nav from "@/components/Nav";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header(){

    const [state, setState] = useState<boolean>(false);

    return (
        <header>
            {/*
            TODO: FECHAR AO AUMENTAR A TELA
            TODO: TROCAR X POR HAMBURGUER
            */}
            <Sheet open={state} onOpenChange={(state) =>  setState(state)}>
                <SheetTrigger className="sm:hidden">
                    <i className="fa-solid fa-bars  top-0 right-0"></i>
                </SheetTrigger>
                <SheetContent side="top" className="teste">
                    <SheetHeader>
                        <SheetTitle>Fabrício Ferreira</SheetTitle>
                    </SheetHeader>
                    <Nav listClass="flex-col" itemClass="text-[4.5vh]" onClickLink={() => setState(!state)}/>
                    <div className="flex justify-around items-center">
                        <SwitchTheme/>
                        <div>
                            Change Language
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}