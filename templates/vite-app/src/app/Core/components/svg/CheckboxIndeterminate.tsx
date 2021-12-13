import React from 'react'

import type { SVGProps } from './Svg.types'

const CheckboxIndeterminate = (props: SVGProps): JSX.Element => {
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
        fill={fill || '#0052CC'}
        stroke={fill || '#0052CC'}
        strokeWidth="2"
      />
      <path
        d="M15 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11Z"
        fill="#FAFBFC"
      />
    </svg>
  )
}

export default CheckboxIndeterminate
