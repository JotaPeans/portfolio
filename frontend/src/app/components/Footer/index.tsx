import { Mail } from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer id="contact" className="w-full mt-12 bg-zinc-800 p-8 px-4 lg:py-20">
            <MaxWidthWrapper className="flex flex-col gap-8 p-0">
                <h3 className="text-zinc-200 font-bold text-2xl">Contact</h3>

                <p className=" text-zinc-400 text-justify">
                    Engenheiro de Software Full Stack com mais de 2 anos de experiência prática em projetar e implementar soluções web robustas e inovadoras. Hábil em utilizar um conjunto abrangente de habilidades que englobam tecnologias de front-end e back-end.
                </p>

                <div className="flex items-center gap-2 text-zinc-300">
                    <Mail className="mt-0.5"/>
                    <Link href="mailto:jpfontesferreira1@gmail.com" className="hover:underline">jpfontesferreira1@gmail.com</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="https://github.com/JotaPeans" target="_blank">
                        <div className="size-6 relative">
                            <Image
                                className="bg-white rounded-sm p-0.5"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
                                alt="github"
                                fill
                            />
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/jo%C3%A3o-pedro-5559221a5" target="_blank">
                        <div className="size-6 relative">
                            <Image
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" 
                                alt="linkedin"
                                fill
                            />
                        </div>
                    </Link>
                    <Link href="https://www.99freelas.com.br/user/joaopedro0202" target="_blank">
                        <div className="size-6 relative">
                            <Image
                                className="rounded-sm"
                                src="https://play-lh.googleusercontent.com/yNBbWLb1_Te7UELDjx4OjKpkYcW79nklxeB-xJThgaN0hiXpIDs2hHt3P9XISi4fEjwH=w240-h480" 
                                alt="99 freelas"
                                fill
                            />
                        </div>
                    </Link>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
}
 
export default Footer;