import { cn } from "@/lib/utils";

interface ReviewsArrowProps {
  className?: string;
}

const ReviewsArrow = ({ className }: ReviewsArrowProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 367 313"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M61.6578 11.8306C35.2367 66.4686 28.4983 177.967 212.914 186.855C443.433 197.966 349.798 23.504 216.377 70.7294C82.9569 117.955 74.8727 293.129 280.816 283.061"
        stroke="url(#paint0_linear_260_379)"
        strokeWidth="5"
      />
      <g clipPath="url(#clip0_260_379)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M285.481 280.894C286.171 281.586 286.559 282.523 286.559 283.5C286.559 284.477 286.171 285.414 285.481 286.106L271.577 300.015C270.885 300.707 269.947 301.095 268.969 301.095C267.991 301.094 267.053 300.706 266.361 300.014C265.67 299.322 265.282 298.384 265.282 297.406C265.282 296.428 265.671 295.49 266.362 294.799L277.661 283.5L266.362 272.202C265.69 271.506 265.318 270.575 265.326 269.608C265.334 268.641 265.722 267.716 266.405 267.032C267.088 266.348 268.013 265.96 268.98 265.951C269.947 265.942 270.878 266.314 271.574 266.985L285.483 280.892L285.481 280.894Z"
          fill="#DFDFDF"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_260_379"
          x1="291"
          y1="273.5"
          x2="159.722"
          y2="39.4228"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DFDFDF" />
          <stop offset="0.978617" stopColor="#080913" />
        </linearGradient>
        <clipPath id="clip0_260_379">
          <rect width="59" height="59" fill="white" transform="translate(246 254)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ReviewsArrow;
