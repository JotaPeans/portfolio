import axios from "axios";

import Carrer from "@/components/Carrer";
import CarrerProps from "@/types/Carrer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const API_URL = process.env.API_URL!;

const Experience = async () => {
    const { data: { data } } = await axios.get(API_URL.concat("/carrers?populate=image&sort=from:desc"));

    return (
        <MaxWidthWrapper className="my-12">
            <h1 id="experience" className="font-extrabold text-4xl text-center mb-8 bg-gradient-to-b text-transparent bg-clip-text from-blue-300 to-60% to-blue-600">
                EXPERIÊNCIA
            </h1>
            <div className="flex items-center justify-center flex-wrap gap-12 w-full">
                {data.map((data: CarrerProps, key: number) => (
                    <Carrer key={key} id={data.id} attributes={{...data.attributes}} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}
 
export default Experience;