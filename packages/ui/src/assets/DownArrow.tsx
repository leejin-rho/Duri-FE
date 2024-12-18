import * as React from 'react';
const SvgDownArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 56 55"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M16.69 21.69a1.5 1.5 0 0 1 2.12 0l9.44 9.439 9.44-9.44a1.5 1.5 0 0 1 2.12 2.122l-10.5 10.5a1.5 1.5 0 0 1-2.12 0l-10.5-10.5a1.5 1.5 0 0 1 0-2.122"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownArrow;
