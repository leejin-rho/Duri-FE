import * as React from 'react';
const SvgDiaryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.65 14.781 2.992-3.89 3.414 2.682 2.93-3.78M20.4 6.122a1.922 1.922 0 1 0 0-3.844 1.922 1.922 0 0 0 0 3.844"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.33 3.12H8.06c-3.011 0-4.878 2.133-4.878 5.144v8.083c0 3.011 1.83 5.135 4.878 5.135h8.605c3.01 0 4.878-2.124 4.878-5.135v-7.04"
    />
  </svg>
);
export default SvgDiaryIcon;
