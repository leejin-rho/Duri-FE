import * as React from 'react';
const SvgMax = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 43 32"
    {...props}
  >
    <g filter="url(#Max_svg__a)">
      <path
        fill="#F0FC98"
        fillRule="evenodd"
        d="M12 4a8 8 0 0 0-8 8v4a8 8 0 0 0 8 8h7.434L22 28l2.566-4H31a8 8 0 0 0 8-8v-4a8 8 0 0 0-8-8z"
        clipRule="evenodd"
      />
      <path
        fill="#BBD029"
        d="M15.523 14.121v1.711c.92-.047 1.846-.129 2.72-.258l.105.961c-2.38.434-4.922.457-6.785.457l-.165-1.055c.827-.005 1.8-.011 2.825-.046v-1.77zM17.81 9.75v1.055h-2.262c.058 1.13.955 2.15 2.555 2.554l-.598 1.02c-1.254-.34-2.15-1.072-2.625-2.016-.469.996-1.354 1.758-2.613 2.098l-.621-.984c1.6-.44 2.478-1.483 2.554-2.672h-2.238V9.75h2.262V8.543h1.3V9.75zm2.367-1.3v10.605h-1.301V8.449zm10.664 0v10.593h-1.242v-5.402h-1.196v4.863h-1.195V8.648h1.195v3.95h1.196V8.449zm-4.828 1.253v1.055h-2.649v4.71c1.155-.011 2.104-.07 3.176-.269l.094 1.067c-1.277.257-2.39.293-3.867.304h-.715V9.703z"
      />
    </g>
    <defs>
      <filter
        id="Max_svg__a"
        width={43}
        height={32}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3254_6761"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3254_6761"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgMax;
