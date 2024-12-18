import * as React from 'react';
const SvgFilledNotification = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 52 52"
    {...props}
  >
    <path
      fill="#200E32"
      d="M7.583 30.144V29.7a8.1 8.1 0 0 1 1.299-3.988 11.07 11.07 0 0 0 2.578-5.104c.097-1.444 0-2.928.097-4.391.698-7.03 7.657-11.885 14.326-11.885h.194c6.785 0 13.57 4.854 14.306 11.885.136 1.444 0 2.947.117 4.391a10.86 10.86 0 0 0 2.578 5.104 7.67 7.67 0 0 1 1.338 3.988v.442a7.93 7.93 0 0 1-1.94 5.24 9.72 9.72 0 0 1-6.183 3.024 81.7 81.7 0 0 1-20.8 0 9.72 9.72 0 0 1-6.107-3.024 7.8 7.8 0 0 1-1.803-5.24"
    />
    <path
      fill="#200E32"
      d="M28.52 41.373c-1.377-.096-2.501 0-3.626 0a13.8 13.8 0 0 0-3.315.347c-.93.212-1.938.712-1.938 1.772a3.43 3.43 0 0 0 1.512 2.523 8.06 8.06 0 0 0 5.816 1.599 6.76 6.76 0 0 0 5.02-2.832 1.92 1.92 0 0 0-.33-2.677 7.2 7.2 0 0 0-3.14-.732"
      opacity={0.4}
    />
  </svg>
);
export default SvgFilledNotification;
