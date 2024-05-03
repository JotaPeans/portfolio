import { AlignJustify } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import scrollTo from "@/lib/scrollTo";

const Menu = () => {
    const [ open, setOpen ] = useState(false);

    function onSelect(id: string) {
        setOpen(false);
        setTimeout(() => {
            scrollTo(id);
        }, 300);
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="border-2 border-zinc-200 md:hidden" size="icon">
                    <AlignJustify/>
                </Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <nav className="pt-4">
                        <ul className="flex flex-col items-start gap-2 text-white font-medium text-lg">
                            <li>
                                <button onClick={() => onSelect("image-profile")}>Home</button>
                            </li>
                            <li>
                                <button onClick={() => onSelect("projects")}>Projetos</button>
                            </li>
                            <li>
                                <button onClick={() => onSelect("experience")}>Experiência</button>
                            </li>
                            <li>
                                <button onClick={() => onSelect("contact")}>Contato</button>
                            </li>
                        </ul>
                    </nav>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
 
export default Menu;