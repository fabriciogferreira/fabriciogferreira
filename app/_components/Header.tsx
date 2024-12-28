import SwitchTheme from "@/components/SwitchTheme";
import Nav from "@/components/Nav";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header(){
    return (
        <header className="sm:hidden fixed w-full h-screen justify-between">
            {/*
            TODO: FECHAR AO CLICAR EM UM LINK
            TODO: FECHAR AO AUMENTAR A TELA
            TODO: TROCAR X POR HAMBURGUER
            */}
            <Sheet>
                <SheetTrigger>
                    <i className="fa-solid fa-bars absolute top-0 right-0"></i>
                </SheetTrigger>
                <SheetContent side="top">
                    <SheetHeader>
                        <SheetTitle>Fabrício Ferreira</SheetTitle>
                    </SheetHeader>
                    <Nav listClass="flex-col" itemClass="text-[4.5vh]"/>
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