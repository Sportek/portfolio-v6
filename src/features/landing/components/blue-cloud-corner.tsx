interface BlueCloudCornerProps {
  className?: string;
}

const BlueCloudCorner = ({ className }: BlueCloudCornerProps) => {
  return (
    <svg
      width="977"
      height="537"
      viewBox="0 0 977 537"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <foreignObject x="-124.5" y="-489.5" width="1221" height="1146">
        <div
          style={{
            backdropFilter: "blur(60px)",
            clipPath: "url(#bgblur_0_413_2074_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="120"
        d="M0 532H0L0 0C0 0 0 0 0 0C0 0 0 0 0 0L0 -210.777C0 -295.952 224.368 -365 309.543 -365L563.66 -365H810.257C899.585 -365 972 -292.585 972 -203.257C972 -113.928 899.585 -41.5132 810.257 -41.5132H538.778C462.468 -41.5132 400.607 20.3479 400.607 96.6577V113.316C400.607 177.814 349.907 230.92 285.479 233.908C221.05 236.897 170.351 290.003 170.351 354.501V382.231C170.351 464.946 103.297 532 0 532Z"
        fill="url(#paint0_linear_413_2074)"
        fillOpacity="0.9"
        stroke="url(#paint1_linear_413_2074)"
        strokeOpacity="0.6"
        strokeWidth="9"
      />
      <defs>
        <clipPath id="bgblur_0_413_2074_clip_path" transform="translate(124.5 489.5)">
          <path d="M0 532H0L0 0C0 0 0 0 0 0C0 0 0 0 0 0L0 -210.777C0 -295.952 224.368 -365 309.543 -365L563.66 -365H810.257C899.585 -365 972 -292.585 972 -203.257C972 -113.928 899.585 -41.5132 810.257 -41.5132H538.778C462.468 -41.5132 400.607 20.3479 400.607 96.6577V113.316C400.607 177.814 349.907 230.92 285.479 233.908C221.05 236.897 170.351 290.003 170.351 354.501V382.231C170.351 464.946 103.297 532 0 532Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_413_2074"
          x1="34"
          y1="567"
          x2="408.358"
          y2="11.7414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.388975" stopColor="#008DFF" />
          <stop offset="0.994177" stopColor="#001970" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_413_2074"
          x1="209.779"
          y1="-567.724"
          x2="33.1175"
          y2="-0.598455"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.193793" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BlueCloudCorner;
