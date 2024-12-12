import * as React from 'react';
const SvgTime = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#111"
      fillRule="evenodd"
      d="M8.003.665C3.96.665.664 3.957.664 8s3.297 7.337 7.339 7.337 7.332-3.296 7.332-7.337S12.045.665 8.003.665m0 1.334a5.99 5.99 0 0 1 5.998 6 5.99 5.99 0 0 1-5.998 6.003A5.997 5.997 0 0 1 1.997 8c0-3.322 2.684-6 6.006-6m-.011 1.324a.667.667 0 0 0-.66.68v3.996a.67.67 0 0 0 .198.47l2.667 2.669a.667.667 0 1 0 .94-.945l-2.47-2.47v-3.72a.667.667 0 0 0-.675-.68"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTime;
