import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import ProjectProps from "@/types/Project";
import Link from "next/link";

const Project = ({ attributes: { date, image, link, name, type } }: ProjectProps) => {
    return (
        <div className="flex items-center flex-col rounded-2xl w-[390px] overflow-hidden text-zinc-300 font-semibold border border-zinc-600">
            <Link href={link} target="_blank" className="relative w-full h-60 overflow-hidden">
                <Image
                    src={image.data?.attributes.url}
                    alt={name}
                    fill
                    className="object-cover w-full h-full hover:scale-105 transition-all"
                />
            </Link>
            <div className="flex items-center justify-between w-full py-3 px-6 bg-zinc-800">
                <div className="flex flex-col">
                    <p className="font-medium text-zinc-400 text-sm">{type}</p>
                    <Link href={link} target="_blank" className="text-xl hover:underline">{name}</Link>
                </div>

                <Link href={link} target="_blank" className="group">
                    <ArrowUpRight className="group-hover:scale-105 transition-all"/>
                </Link>
            </div>
        </div>
    );
}
 
export default Project;