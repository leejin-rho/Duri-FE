import * as React from 'react';
const SvgCall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 52 52"
    {...props}
  >
    <g clipPath="url(#Call_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M51.064 45.053c-1.605 4.877-7.894 7.311-12.387 6.905-6.136-.554-12.812-3.81-17.88-7.394-7.45-5.27-14.429-13.42-18.495-22.069-2.874-6.111-3.519-13.627.755-19.198C4.638 1.237 6.351.139 8.917.01c3.563-.173 4.062 1.865 5.286 5.04.912 2.376 2.128 4.799 2.808 7.26 1.272 4.594-3.176 4.784-3.737 8.539-.347 2.367 2.52 5.543 3.816 7.231a35 35 0 0 0 9.042 8.33c1.976 1.245 5.158 3.488 7.418 2.25 3.48-1.906 3.155-7.775 8.019-5.79 2.52 1.027 4.96 2.507 7.366 3.804 3.72 2 3.547 4.073 2.129 8.379 1.06-3.217-1.061 3.217 0 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="Call_svg__a">
        <path fill="#fff" d="M0 0h52v52H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCall;
