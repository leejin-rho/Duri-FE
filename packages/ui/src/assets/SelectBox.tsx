import * as React from 'react';
const SvgSelectBox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 39"
    {...props}
  >
    <rect width={19} height={19} x={8.5} y={10} fill="#707D19" rx={4} />
    <path
      fill="#E0F931"
      stroke="#E0F931"
      strokeWidth={0.3}
      d="m21.808 16.985.001-.001a.51.51 0 0 1 .696.006.465.465 0 0 1 0 .675l-5.653 5.348-.104-.109a.36.36 0 0 1-.244.096zm0 0-5.304 5.018m5.304-5.018-5.304 5.018m0 0-2.312-2.187-.001-.001a.51.51 0 0 0-.69 0z"
    />
  </svg>
);
export default SvgSelectBox;
