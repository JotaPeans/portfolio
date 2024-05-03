import axios from "axios";

import Project from "@/components/Project";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import ProjectProps from "@/types/Project";

const API_URL = process.env.API_URL!;

const Projects = async () => {
    const { data: { data } } = await axios.get(API_URL.concat("/projetos?populate=image&sort=id:asc"));

    return (
        <MaxWidthWrapper className="my-12">
            <h1 id="projects" className="font-extrabold text-4xl text-center mb-8 bg-gradient-to-b text-transparent bg-clip-text from-orange-300 to-60% to-orange-600">
                PROJETOS
            </h1>
            <div className="flex items-center justify-center flex-wrap gap-8 w-full">
                {data.map((data: ProjectProps, key: number) => (
                    <Project key={key} id={data.id} attributes={{...data.attributes}} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}
 
export default Projects;