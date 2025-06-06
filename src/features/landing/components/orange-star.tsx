interface OrangeStarProps {
  className?: string;
}

const OrangeStar = ({ className }: OrangeStarProps) => {
  return (
    <svg
      width="345"
      height="757"
      viewBox="0 0 345 757"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <foreignObject x="-139.441" y="-139.441" width="1036.32" height="1036.32">
        <div
          style={{
            backdropFilter: "blur(70px)",
            clipPath: "url(#bgblur_0_413_2075_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="140">
        <path
          d="M346.745 76.8582C427.131 -73.6583 656.074 18.0753 610.287 182.455C592.329 246.924 621.55 315.218 680.583 346.745C831.099 427.13 739.366 656.074 574.986 610.287C510.517 592.329 442.224 621.55 410.696 680.583C330.311 831.099 101.367 739.366 147.154 574.986C165.112 510.517 135.891 442.223 76.8584 410.696C-73.6581 330.31 18.0755 101.367 182.455 147.154C246.925 165.112 315.218 135.891 346.745 76.8582Z"
          fill="url(#paint0_linear_413_2075)"
          fillOpacity="0.9"
        />
        <path
          d="M350.273 78.7424C428.102 -66.9867 649.202 20.9132 606.942 179.512L606.434 181.381C588.117 247.139 617.546 316.766 677.281 349.506L678.698 350.273C824.428 428.102 736.528 649.201 577.929 606.943L576.06 606.433C510.302 588.117 440.675 617.546 407.934 677.281L407.168 678.698C329.339 824.427 108.239 736.528 150.498 577.929L151.007 576.06C169.324 510.302 139.895 440.675 80.1597 407.934L78.7426 407.168C-66.9864 329.339 20.9135 108.239 179.513 150.498L181.381 151.007C247.139 169.324 316.766 139.895 349.507 80.1595L350.273 78.7424Z"
          stroke="url(#paint1_linear_413_2075)"
          strokeOpacity="0.6"
          strokeWidth="8"
        />
      </g>
      <defs>
        <clipPath id="bgblur_0_413_2075_clip_path" transform="translate(139.441 139.441)">
          <path d="M346.745 76.8582C427.131 -73.6583 656.074 18.0753 610.287 182.455C592.329 246.924 621.55 315.218 680.583 346.745C831.099 427.13 739.366 656.074 574.986 610.287C510.517 592.329 442.224 621.55 410.696 680.583C330.311 831.099 101.367 739.366 147.154 574.986C165.112 510.517 135.891 442.223 76.8584 410.696C-73.6581 330.31 18.0755 101.367 182.455 147.154C246.925 165.112 315.218 135.891 346.745 76.8582Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_413_2075"
          x1="306"
          y1="-263"
          x2="-191.677"
          y2="664.988"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.388975" stopColor="#FECC42" />
          <stop offset="0.994177" stopColor="#E85D1F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_413_2075"
          x1="629.702"
          y1="73.6157"
          x2="144.064"
          y2="637.005"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OrangeStar;
