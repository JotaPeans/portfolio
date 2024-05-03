import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AboutMeProps from "@/types/AboutMe";

const API_URL = process.env.API_URL!;

const Profile = async () => {
    const { data: { data: { attributes: profile } } } = await axios.get(API_URL.concat("/profiles/1?populate=image"));

    const renderHighlightedText = (text: string, highLight?: string) => {
        if (highLight) {
            const parts = text.split(new RegExp(`(${highLight})`, "gi"));
            return parts.map((part, index) =>
                part.toLowerCase() === highLight.toLowerCase() ? (
                    <span
                        key={index}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-600 font-semibold"
                    >
                        {part}
                    </span>
                ) : (
                    part
                )
            );
        }
        return text;
    };

    return (
        <MaxWidthWrapper className="mt-24 mb-12">
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-3">
                    <Image
                        id="image-profile"
                        src={profile.image.data.attributes.url}
                        alt="Joao Pedro"
                        width={213}
                        height={213}
                        className="rounded-full hover:scale-105 transition-all"
                    />
                    <p className="font-semibold text-white">{profile.currentPosition}</p>
                </div>

                <h1 className="font-extrabold text-5xl lg:text-6xl text-center text-white">
                    I do code that Transforms
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600"> Ideas into Reality!</span>
                </h1>

                <div className="flex flex-col items-center gap-4 font-light text-zinc-400 text-justify md:gap-2 md:text-center">
                    {profile.aboutMe.map((item: AboutMeProps, index: number) => (
                        <p key={index}>
                            {renderHighlightedText(item.text, item.highLight)}
                        </p>
                    ))}
                </div>

                <div className="flex items-center gap-5">
                    <Link
                        href="mailto:jpfontesferreira1@gmail.com"
                        target="_blank"
                        className="px-7 py-4 bg-white rounded-full font-semibold text-sm text-center lg:text-lg hover:scale-[102%] transition-all text-zinc-800"
                    >
                        Entrar em Contato
                    </Link>
                    
                    <Link
                        href="https://drive.google.com/file/d/16r2F3I1rr8O-MxSvF4JqHNwsNR-iLPGh/view?usp=sharing"
                        target="_blank"
                        className="px-7 py-4 border-2 border-white rounded-full font-semibold text-sm text-center lg:text-lg text-white hover:scale-[102%] transition-all"
                    >
                        Downdload CV
                    </Link>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}
 
export default Profile;