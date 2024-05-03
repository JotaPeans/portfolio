"use client";

import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Menu from "@/components/Menu";
import scrollTo from "@/lib/scrollTo";

const Header = () => {
    return (
        <header className="w-full flex p-2 bg-zinc-800">
            <MaxWidthWrapper className="flex items-center justify-between">
                <Link href="/" className="size-20 min-w-20 relative">
                    <Image src="/sign-icon-white.webp" alt="Joao Pedro" fill/>
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-16 text-white font-medium text-lg">
                        <li>
                            <button onClick={() => scrollTo("image-profile")}>Home</button>
                        </li>
                        <li>
                            <button onClick={() => scrollTo("projects")}>Projetos</button>
                        </li>
                        <li>
                            <button onClick={() => scrollTo("experience")}>Experiência</button>
                        </li>
                        <li>
                            <button onClick={() => scrollTo("contact")}>Contato</button>
                        </li>
                    </ul>
                </nav>

                <Menu/>
            </MaxWidthWrapper>
        </header>
    );
}
 
export default Header;