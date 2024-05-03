import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full flex p-2 bg-zinc-800">
            <MaxWidthWrapper className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/sign-icon-white.webp" alt="Joao Pedro" width={80} height={80}/>
                </Link>
                <nav>
                    <ul className="flex items-center gap-16 text-white font-medium text-lg">
                        <li>Home</li>
                        <li>Projetos</li>
                        <li>Experiência</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </MaxWidthWrapper>
        </header>
    );
}
 
export default Header;