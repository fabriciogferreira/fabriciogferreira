import Nav from "@/components/Nav";
import SwitchTheme from "@/components/SwitchTheme";

export default function Aside() {
    return (
        <aside className="hidden sm:flex fixed top-0 right-0 h-full flex-col justify-center">
            <Nav listClass="flex-col" />
            <SwitchTheme />
        </aside>
    )
}