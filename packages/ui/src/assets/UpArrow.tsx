import * as React from 'react';
const SvgUpArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 53 55"
    {...props}
  >
    <path
      fill="#000"
      stroke="#000"
      strokeWidth={0.3}
      d="M26.5 20.475a1.23 1.23 0 0 0-.889.382l-9.937 10.312-.002.002a1.327 1.327 0 0 0 0 1.797 1.226 1.226 0 0 0 1.777.031l.002-.002 9.049-9.39 9.049 9.39.002.002c.486.488 1.26.488 1.746 0 .496-.497.51-1.314.03-1.828v-.002l-9.938-10.312a1.23 1.23 0 0 0-.89-.382Zm0 0v.15-.15Z"
    />
  </svg>
);
export default SvgUpArrow;
