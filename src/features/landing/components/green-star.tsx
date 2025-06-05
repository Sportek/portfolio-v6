import { cn } from "@/lib/utils";
import React from "react";

interface GreenStarProps {
  className?: string;
}

const GreenStar: React.FC<GreenStarProps> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width="auto"
      height="auto"
      viewBox="0 0 533 1210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_26_632)">
        <path
          d="M540.952 -205.354C580.671 -566.857 1106.33 -566.857 1146.05 -205.354C1161.63 -63.5728 1273.57 48.3745 1415.35 63.9521C1776.86 103.671 1776.86 629.329 1415.35 669.048C1273.57 684.625 1161.63 796.573 1146.05 938.354C1106.33 1299.86 580.671 1299.86 540.952 938.354C525.375 796.573 413.427 684.625 271.646 669.048C-89.8567 629.329 -89.8567 103.671 271.646 63.9521C413.427 48.3745 525.375 -63.5728 540.952 -205.354Z"
          fill="url(#paint0_linear_26_632)"
          fillOpacity="1"
        />
        <path
          d="M544.928 -204.917C584.125 -561.669 1102.87 -561.669 1142.07 -204.917C1157.85 -61.2727 1271.27 52.1458 1414.92 67.9282C1771.67 107.125 1771.67 625.875 1414.92 665.072C1271.27 680.854 1157.85 794.273 1142.07 937.917C1102.87 1294.67 584.125 1294.67 544.928 937.917C529.146 794.273 415.727 680.854 272.083 665.072C-84.6689 625.875 -84.6689 107.125 272.083 67.9282C415.727 52.1458 529.146 -61.2727 544.928 -204.917Z"
          stroke="url(#paint1_linear_26_632)"
          strokeOpacity="1"
          strokeWidth="8"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_26_632"
          x="-139.481"
          y="-616.481"
          width="1965.96"
          height="1965.96"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="70" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_26_632" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_26_632" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_26_632"
          x1="762.724"
          y1="-138.561"
          x2="481.5"
          y2="1227.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#CCEDBD" />
          <stop offset="0.46753" stopColor="#5BCD17" />
          <stop offset="1" stopColor="#538E0F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_26_632"
          x1="1098.18"
          y1="-436.07"
          x2="584"
          y2="1063.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GreenStar;
