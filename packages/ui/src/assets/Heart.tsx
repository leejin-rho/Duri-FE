import * as React from 'react';
const SvgHeart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 52 52"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M25.482 45.183a75.5 75.5 0 0 1-13.047-10.158 26 26 0 0 1-6.21-9.902c-2.331-7.247.392-15.545 8.013-18a12.95 12.95 0 0 1 11.754 1.98 12.97 12.97 0 0 1 11.754-1.98c7.62 2.455 10.363 10.753 8.032 18a26 26 0 0 1-6.21 9.902A75.5 75.5 0 0 1 26.52 45.183l-.51.317z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeart;
