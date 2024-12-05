import * as React from 'react';
const SvgMagnifier = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 53 55"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.3}
      d="m48.383 48.373-.002-.002-9.096-9.44a21.14 21.14 0 0 0 5.032-13.722c0-11.47-8.96-20.776-20.025-20.776S4.267 13.74 4.267 25.208c0 11.469 8.96 20.775 20.025 20.775 5.076-.005 9.695-1.985 13.223-5.216l9.089 9.432.002.002c.486.488 1.26.488 1.746 0 .496-.497.51-1.314.03-1.828Zm-24.091-4.981c-9.67 0-17.517-8.136-17.517-18.184 0-10.047 7.848-18.183 17.517-18.183 9.664.012 17.505 8.14 17.516 18.184 0 10.047-7.847 18.183-17.516 18.183Z"
    />
  </svg>
);
export default SvgMagnifier;
