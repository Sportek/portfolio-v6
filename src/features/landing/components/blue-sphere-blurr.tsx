import { cn } from "@/lib/utils";
import React from "react";

interface BlueSphereBlurrProps {
  className?: string;
}

const BlueSphereBlurr: React.FC<BlueSphereBlurrProps> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height="auto"
      viewBox="0 0 265 401"
      fill="none"
    >
      <g filter="url(#filter0_f_26_628)">
        <circle cx="64.5" cy="200.5" r="100.5" fill="#272C5F" />
      </g>
      <defs>
        <filter
          id="filter0_f_26_628"
          x="-136"
          y="0"
          width="401"
          height="401"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_26_628" />
        </filter>
      </defs>
    </svg>
  );
};

export default BlueSphereBlurr;
