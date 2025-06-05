import { cn } from "@/lib/utils";
import React from "react";

interface BlueCloudProps {
  className?: string;
}

const BlueCloud: React.FC<BlueCloudProps> = ({ className }) => {
  return (
    <svg
      className={cn(className, "overflow-visible")}
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height="auto"
      viewBox="0 0 427 324"
      fill="none"
    >
      <g filter="url(#filter0_b_26_631)">
        <path
          d="M-68 81.0722V220.881V324H275.603L320.614 324C379.369 324 427 276.369 427 217.614C427 159.026 379.505 111.531 320.917 111.531H263.999H139.288C114.356 111.531 94.1444 91.3194 94.1444 66.3874C94.1444 29.7226 64.4218 0 27.7571 0H13.0722C-31.7027 0 -68 36.2972 -68 81.0722Z"
          fill="url(#paint0_linear_26_631)"
          fillOpacity="0.7"
        />
        <path
          d="M-63 220.881V81.0722C-63 39.0587 -28.9413 5 13.0722 5H27.7571C61.6604 5 89.1444 32.484 89.1444 66.3874C89.1444 94.0808 111.594 116.531 139.288 116.531H263.999H320.917C376.743 116.531 422 161.787 422 217.614C422 273.608 376.608 319 320.614 319L275.603 319H-63V220.881Z"
          stroke="url(#paint1_linear_26_631)"
          strokeOpacity="0.6"
          strokeWidth="10"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_26_631"
          x="-93"
          y="-25"
          width="545"
          height="374"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_26_631" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_26_631" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_26_631"
          x1="379.805"
          y1="222.438"
          x2="-49.1551"
          y2="146.122"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7ECFF" />
          <stop offset="0.408231" stopColor="#008DFF" />
          <stop offset="1" stopColor="#001970" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_26_631"
          x1="495.689"
          y1="339.577"
          x2="99.5783"
          y2="69.0315"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B45558" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BlueCloud;
