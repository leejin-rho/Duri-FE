import * as React from 'react';
const SvgLocationShop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      fill="#95A621"
      fillRule="evenodd"
      d="M25.944 5.056a11.48 11.48 0 0 0-11.725-.097c-3.511 2.04-5.726 5.78-5.878 9.873l-.008.456a15.47 15.47 0 0 0 3.02 8.666c2.219 3 4.95 5.568 8.065 7.58.197.119.421.187.65.197.24-.037.47-.119.68-.24a31.2 31.2 0 0 0 5.598-4.7c2.91-3.077 5.237-7.057 5.32-11.291.02-4.262-2.15-8.224-5.722-10.444"
      clipRule="evenodd"
    />
    <ellipse cx={20} cy={18.462} fill="#fff" rx={4.615} ry={5.385} />
    <ellipse cx={19.872} cy={9.679} fill="#fff" rx={1.538} ry={1.923} />
    <ellipse
      cx={14.486}
      cy={11.987}
      fill="#fff"
      rx={1.538}
      ry={1.923}
      transform="rotate(-30 14.486 11.987)"
    />
    <ellipse
      cx={25.256}
      cy={11.987}
      fill="#fff"
      rx={1.538}
      ry={1.923}
      transform="rotate(30 25.256 11.987)"
    />
    <path
      fill="#95A621"
      d="M20 36.603c4.603 0 8.334-.747 8.334-1.667S24.603 33.269 20 33.269s-8.333.746-8.333 1.667c0 .92 3.731 1.667 8.333 1.667"
      opacity={0.4}
    />
  </svg>
);
export default SvgLocationShop;
