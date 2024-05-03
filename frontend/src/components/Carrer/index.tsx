import CarrerProps from "@/types/Carrer";
import Image from "next/image";

const Carrer = ({ attributes: { company, position, from, to, description, content, imageLink } }: CarrerProps) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex items-center flex-col md:flex-row justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-10 min-w-10 relative">
                        <Image
                            className="rounded-full"
                            src={imageLink}
                            alt={company}
                            fill
                        />
                    </div>

                    <h3 className="font-extrabold text-white text-xl">{position} at {company}</h3>
                </div>

                <div className="flex items-center gap-1 text-zinc-500 text-sm font-medium mt-3 md:m-0">
                    <p>
                        {new Date(from).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric"
                        })}
                    </p>
                    {"•"}
                    <p>
                        {to ? (
                            new Date(to).toLocaleDateString("en-US", {
                                month: "short",
                                year: "numeric"
                            })
                        ) : (
                            "now"
                        )}
                    </p>
                </div>
            </div>

            <p className="font-medium text-zinc-400 text-justify">{description}</p>
        </div>
    );
}
 
export default Carrer;