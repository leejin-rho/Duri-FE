import * as React from 'react';
const SvgSpeechBalloon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 161 46"
    {...props}
  >
    <rect width={161} height={38} fill="#fff" rx={19} />
    <path fill="#fff" d="m82.5 46-5.63-9.75h11.26z" />
  </svg>
);
export default SvgSpeechBalloon;
