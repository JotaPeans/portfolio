import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const MaxWidthWrapper = ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
        <div className={twMerge("w-full mx-auto max-w-4xl", className)}>
            {children}
        </div>
    );
}
 
export default MaxWidthWrapper;