import * as React from 'react';
const SvgMyLocation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 36"
    {...props}
  >
    <path
      stroke="#9B99A3"
      strokeMiterlimit={10}
      strokeWidth={1.385}
      d="M18 11.345V5.538m0 24.924v-5.807M5.538 18.17h5.806m13.31 0h5.807m-2.522 0c0 5.49-4.45 9.94-9.94 9.94s-9.94-4.45-9.94-9.94S12.51 8.23 18 8.23c5.49 0 9.94 4.45 9.94 9.94ZM18 15.694a2.476 2.476 0 1 0 0 4.952 2.476 2.476 0 0 0 0-4.952Z"
    />
  </svg>
);
export default SvgMyLocation;
