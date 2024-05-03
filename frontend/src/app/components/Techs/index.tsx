import axios from "axios";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ThecProps from "@/types/Techs";

const API_URL = process.env.API_URL!;

const Techs = async () => {
    const { data: { data } } = await axios.get(API_URL.concat("/tecnologias?populate=image&sort=id:asc"));
    console.log("🚀 ~ Techs ~ techs:", data)

    return (
        <MaxWidthWrapper className="mt-12 text-zinc-300">
            <h1 className="font-extrabold text-4xl text-center mb-8">Tecnologias</h1>
            <div className="w-full flex items-center justify-center flex-wrap gap-14">
                {
                    data.map(({attributes}: ThecProps, key: number) => (
                        <div key={key} className="flex flex-col gap-2 items-center">
                            <div className="size-14 overflow-visible relative">
                                <Image 
                                    className="w-full h-full object-cover"
                                    src={attributes.imageLink ?? attributes.image.data?.attributes.url ?? ""} 
                                    alt={attributes.name} 
                                    fill
                                />
                            </div>
                            {attributes.name}
                        </div>
                    ))
                }
            </div>
        </MaxWidthWrapper>
    );
}
 
export default Techs;