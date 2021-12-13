import React from 'react'

import type { SVGProps } from './Svg.types'

const CheckboxCheckedDisabled = (props: SVGProps): JSX.Element => {
  const { width, height, fill } = props

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" fillOpacity="0.01" />
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="2"
        fill={fill || '#F4F5F7'}
        stroke={fill || '#F4F5F7'}
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.71929 11.3053C9.62704 11.2098 9.5167 11.1336 9.39469 11.0812C9.27269 11.0288 9.14147 11.0012 9.00869 11C8.87591 10.9989 8.74423 11.0242 8.62133 11.0745C8.49844 11.1247 8.38679 11.199 8.29289 11.2929C8.199 11.3868 8.12475 11.4984 8.07447 11.6213C8.02419 11.7442 7.99888 11.8759 8.00004 12.0087C8.00119 12.1415 8.02878 12.2727 8.08119 12.3947C8.1336 12.5167 8.20978 12.627 8.30529 12.7193L10.3053 14.7193C10.4928 14.9068 10.7471 15.0121 11.0123 15.0121C11.2775 15.0121 11.5318 14.9068 11.7193 14.7193L15.7193 10.7193C15.8148 10.627 15.891 10.5167 15.9434 10.3947C15.9958 10.2727 16.0234 10.1415 16.0245 10.0087C16.0257 9.87591 16.0004 9.74423 15.9501 9.62133C15.8998 9.49844 15.8256 9.38679 15.7317 9.29289C15.6378 9.199 15.5261 9.12475 15.4032 9.07447C15.2803 9.02419 15.1487 8.99888 15.0159 9.00004C14.8831 9.00119 14.7519 9.02878 14.6299 9.08119C14.5079 9.1336 14.3975 9.20978 14.3053 9.30529L11.0123 12.5983L9.71929 11.3053Z"
        fill="#A5ADBA"
      />
    </svg>
  )
}

export default CheckboxCheckedDisabled
