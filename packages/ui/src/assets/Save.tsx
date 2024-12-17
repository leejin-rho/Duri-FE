import * as React from 'react';
const SvgSave = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  >
    <g clipPath="url(#save_svg__a)">
      <path
        fill="#111"
        d="M15.042 10.292v3.958a.794.794 0 0 1-.792.792h-9.5a.794.794 0 0 1-.792-.792v-3.958a.794.794 0 0 0-.791-.792.794.794 0 0 0-.792.792v4.75c0 .87.712 1.583 1.583 1.583h11.084c.87 0 1.583-.713 1.583-1.583v-4.75a.794.794 0 0 0-.792-.792.794.794 0 0 0-.791.792m-4.75-.262 1.488-1.488a.788.788 0 1 1 1.116 1.116L10.054 12.5a.79.79 0 0 1-1.116 0L6.096 9.658a.788.788 0 1 1 1.116-1.116l1.496 1.488V3.167c0-.436.357-.792.792-.792s.792.356.792.792z"
      />
    </g>
    <defs>
      <clipPath id="save_svg__a">
        <path fill="#fff" d="M0 0h19v19H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSave;
