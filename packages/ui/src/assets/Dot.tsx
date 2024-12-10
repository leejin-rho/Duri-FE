import * as React from 'react';
const SvgDot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 3 3"
    {...props}
  >
    <circle cx={1.5} cy={1.5} r={1.5} fill="#63616B" />
  </svg>
);
export default SvgDot;
