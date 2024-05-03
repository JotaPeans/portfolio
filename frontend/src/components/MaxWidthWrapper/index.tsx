import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
        <div className={cn("w-full mx-auto max-w-4xl px-4", className)}>
            {children}
        </div>
    );
}
 
export default MaxWidthWrapper;