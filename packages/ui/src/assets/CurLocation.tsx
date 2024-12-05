import * as React from 'react';
const SvgCurLocation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 43 43"
    {...props}
  >
    <rect width="43" height="43" fill="#F5F5F5" />
    <circle opacity="0.7" cx="21.5" cy="21.5" r="21.5" fill="#E0F931" />
    <circle cx="21.5" cy="21.5" r="11.5" fill="white" />
    <circle cx="21.5" cy="21.5" r="7.5" fill="#BBD029" />
  </svg>
);
export default SvgCurLocation;
