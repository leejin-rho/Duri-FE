import * as React from 'react';
const SvgNotification = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 25"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.786 10.714a8.929 8.929 0 0 1 17.857 0v4.883a4.046 4.046 0 0 1-4.046 4.046H5.833a4.046 4.046 0 0 1-4.046-4.046zM7.144 21.429h7.142a3.571 3.571 0 1 1-7.143 0"
    />
    <rect width={1.786} height={2.679} x={9.822} fill="currentColor" rx={0.893} />
    <rect width={21.429} height={4.464} y={15.178} fill="currentColor" rx={2.232} />
  </svg>
);
export default SvgNotification;
