import React from 'react';

import type { SVGProps } from './Svg.types';

const ChevronDown = (props: SVGProps): JSX.Element => {
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || '24'}
      height={width || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width || '24'}
        height={height || '24'}
        fill={fill || 'white'}
        fillOpacity="0.01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.292 10.293C8.10519 10.4819 8.00042 10.7368 8.00042 11.0025C8.00042 11.2682 8.10519 11.5231 8.292 11.712L11.231 14.677C11.449 14.892 11.731 14.999 12.01 14.999C12.289 14.999 12.566 14.892 12.779 14.677L15.709 11.722C15.8956 11.533 16.0002 11.2781 16.0002 11.0125C16.0002 10.7469 15.8956 10.492 15.709 10.303C15.6172 10.2098 15.5077 10.1358 15.387 10.0853C15.2664 10.0348 15.1368 10.0088 15.006 10.0088C14.8752 10.0088 14.7456 10.0348 14.625 10.0853C14.5043 10.1358 14.3948 10.2098 14.303 10.303L12.005 12.62L9.698 10.293C9.60596 10.2002 9.49646 10.1265 9.3758 10.0762C9.25514 10.0259 9.12572 10.0001 8.995 10.0001C8.86428 10.0001 8.73486 10.0259 8.6142 10.0762C8.49354 10.1265 8.38404 10.2002 8.292 10.293Z"
        fill={fill || 'white'}
      />
    </svg>
  );
};

export default ChevronDown;
