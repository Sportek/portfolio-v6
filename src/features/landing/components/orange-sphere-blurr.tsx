import { cn } from "@/lib/utils";
import React from "react";

interface OrangeSphereBlurrProps {
  className?: string;
}

const OrangeSphereBlurr: React.FC<OrangeSphereBlurrProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "rounded-full w-full h-full opacity-50 blur-lg bg-gradient-to-r from-orange-400 to-yellow-200",
        className
      )}
    ></div>
  );
};

export default OrangeSphereBlurr;
