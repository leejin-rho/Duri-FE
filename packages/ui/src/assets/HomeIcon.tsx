import * as React from 'react';
const SvgHomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.583}
      d="M8.406 21.722v-3.4c0-.864.716-1.566 1.602-1.572h3.247c.89 0 1.612.704 1.612 1.573v3.41c0 .733.6 1.333 1.353 1.35h2.165c2.157 0 3.907-1.706 3.907-3.81v-9.67a2.69 2.69 0 0 0-1.083-2.11l-7.402-5.817a3.62 3.62 0 0 0-4.438 0L2 7.503A2.67 2.67 0 0 0 .917 9.614v9.659c0 2.104 1.749 3.81 3.907 3.81h2.164c.771 0 1.396-.61 1.396-1.361"
    />
  </svg>
);
export default SvgHomeIcon;
