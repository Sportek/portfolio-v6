import { cn } from "@/lib/utils";
import React from "react";

interface BlueSphereWhiterProps {
  className?: string;
}

const BlueSphereWhiter: React.FC<BlueSphereWhiterProps> = ({ className }) => {
  return (
    <svg
      className={cn(className, "overflow-visible")}
      xmlns="http://www.w3.org/2000/svg"
      width="401"
      height="401"
      viewBox="0 0 401 401"
      fill="none"
    >
      <g filter="url(#filter0_f_260_380)">
        <circle cx="200.5" cy="200.5" r="100.5" fill="#008DFF" fillOpacity="0.2" />
      </g>
      <defs>
        <filter
          id="filter0_f_260_380"
          x="0"
          y="0"
          width="401"
          height="401"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_260_380" />
        </filter>
      </defs>
    </svg>
  );
};

export default BlueSphereWhiter;
