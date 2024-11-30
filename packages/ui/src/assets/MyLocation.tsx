import * as React from 'react';
const SvgMyLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 52 52"
    {...props}
  >
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M26 16.387V8m0 36v-8.387M8 26.246h8.387m19.226 0H44m-3.643 0c0 7.93-6.428 14.357-14.357 14.357-7.93 0-14.357-6.428-14.357-14.357 0-7.93 6.428-14.358 14.357-14.358 7.93 0 14.357 6.428 14.357 14.358ZM26 22.669a3.576 3.576 0 1 0 0 7.153 3.576 3.576 0 0 0 0-7.153Z"
    />
  </svg>
);
export default SvgMyLocation;
