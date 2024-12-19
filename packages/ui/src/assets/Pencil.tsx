import * as React from 'react';
const SvgPencil = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.658 12.68c-.13.066-.196.262-.196.458v2.746c0 .393.261.654.653.654H6.86a.6.6 0 0 0 .457-.196l6.207-6.211L9.8 6.404zm12.676-6.276-2.745-2.746a.63.63 0 0 0-.914 0l-1.83 1.83 3.725 3.727 1.83-1.83c.195-.262.195-.72-.066-.981"
    />
  </svg>
);
export default SvgPencil;
