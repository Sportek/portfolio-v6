import { cn } from "@/lib/utils";
import React from "react";

interface OrangeCloudProps {
  className?: string;
}

const OrangeCloud: React.FC<OrangeCloudProps> = ({ className }) => {
  return (
    <svg
      className={cn(className, "overflow-visible")}
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height="auto"
      viewBox="0 0 532 374"
      fill="none"
    >
      <g filter="url(#filter0_b_26_630)">
        <path
          d="M532 240.845L532 11.3191L532 -158L-32.3418 -158L-281 -13.874C-281 99.2026 -189.333 190.869 -76.2566 190.869L-13.283 190.869L191.566 190.869C232.503 190.869 265.69 224.056 265.69 264.994C265.69 325.196 314.494 374 374.697 374L398.845 374C472.384 374 532 314.384 532 240.845Z"
          fill="url(#paint0_linear_26_630)"
          fillOpacity="0.9"
        />
        <path
          d="M527.5 11.3191L527.5 240.845C527.5 311.899 469.899 369.5 398.845 369.5L374.697 369.5C316.979 369.5 270.19 322.711 270.19 264.994C270.19 221.571 234.989 186.369 191.566 186.369L-13.283 186.369L-76.2566 186.369C-185.985 186.369 -275.1 98.1102 -276.484 -11.2905L-31.1319 -153.5L527.5 -153.5L527.5 11.3191Z"
          stroke="url(#paint1_linear_26_630)"
          strokeOpacity="0.6"
          strokeWidth="9"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_26_630"
          x="-364"
          y="-241"
          width="979"
          height="698"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="41.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_26_630" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_26_630" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_26_630"
          x1="-112.414"
          y1="14.9"
          x2="488.45"
          y2="358.759"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECECEC" />
          <stop offset="0.5" stopColor="#FECC42" />
          <stop offset="1" stopColor="#E85D1F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_26_630"
          x1="121.515"
          y1="-158"
          x2="129.485"
          y2="374"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OrangeCloud;
