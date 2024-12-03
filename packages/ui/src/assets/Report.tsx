import * as React from 'react';
const SvgReport = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 52 52"
    {...props}
  >
    <path
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m15.698 32.026 6.484-8.429 7.397 5.811 6.346-8.19M43.323 13.264a4.164 4.164 0 1 0 0-8.328 4.164 4.164 0 0 0 0 8.328"
    />
    <path
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M32.336 6.76H16.59c-6.525 0-10.571 4.621-10.571 11.146v17.512c0 6.525 3.966 11.126 10.57 11.126h18.643c6.525 0 10.57-4.601 10.57-11.126V20.167"
    />
  </svg>
);
export default SvgReport;
