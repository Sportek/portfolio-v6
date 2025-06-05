import { cn } from "@/lib/utils";
import React from "react";

interface MagentaSphereProps {
  className?: string;
}

const MagentaSphere: React.FC<MagentaSphereProps> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height="auto"
      viewBox="0 0 166 166"
      fill="none"
    >
      <ellipse cx="83" cy="83" rx="83" ry="83" fill="url(#paint0_linear_26_633)" />
      <defs>
        <linearGradient
          id="paint0_linear_26_633"
          x1="54.2575"
          y1="166"
          x2="111.742"
          y2="-1.46256e-05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#8916FB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MagentaSphere;
