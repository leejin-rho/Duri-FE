import * as React from 'react';
const SvgPaymentSuccess = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <circle cx={28} cy={28} r={26.66} stroke="#95A621" strokeWidth={2.681} />
    <path
      fill="#95A621"
      stroke="#95A621"
      strokeWidth={1.05}
      d="M43.082 17.443a1.786 1.786 0 0 1 2.436.023m-2.436-.023 2.072.401m-2.072-.401-.003.003L24.513 35.01zm2.436.023-.364.378m.364-.378-.364.378m.364-.378a1.63 1.63 0 0 1 0 2.361l-.004.004-19.783 18.714-.361-.381m19.784-20.32c.461.446.461 1.16 0 1.605L25.37 38.164m0 0 .36.381h.001l-2.075-.381c.227.215.535.336.857.336m.857-.336a1.25 1.25 0 0 1-.857.336m0 0v.525z"
    />
  </svg>
);
export default SvgPaymentSuccess;
