import { cn } from "@/lib/utils";
import React from "react";

interface RedSphereBlurrProps {
  className?: string;
}

const RedSphereBlurr: React.FC<RedSphereBlurrProps> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height="auto"
      viewBox="0 0 406 406"
      fill="none"
    >
      <g filter="url(#filter0_f_26_627)">
        <circle cx="203" cy="203" r="103" fill="#B45558" fillOpacity="0.2" />
      </g>
      <defs>
        <filter
          id="filter0_f_26_627"
          x="0"
          y="0"
          width="406"
          height="406"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_26_627" />
        </filter>
      </defs>
    </svg>
  );
};

export default RedSphereBlurr;
