import * as React from 'react';
const SvgCheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 56 57"
    {...props}
  >
    <circle cx={28} cy={28.5} r={26.66} stroke="#95A621" strokeWidth={2.681} />
    <path
      fill="#95A621"
      stroke="#95A621"
      strokeWidth={1.05}
      d="M43.082 17.943a1.786 1.786 0 0 1 2.436.023 1.63 1.63 0 0 1 0 2.361l-.004.004-19.783 18.714a1.77 1.77 0 0 1-1.218.48m18.57-21.582L23.294 39.045c.327.31.766.48 1.218.48m18.57-21.582-.004.003L24.513 35.51l-8.092-7.654-.004-.004a1.787 1.787 0 0 0-2.41 0 1.63 1.63 0 0 0-.025 2.384l.004.004 9.308 8.806zm-18.57 21.582V39v.525Z"
    />
  </svg>
);
export default SvgCheckCircle;
