import React from 'react'

import type { SVGProps } from './Svg.types'

const CheckboxSvg = (props: SVGProps): JSX.Element => {
  const { width, height, fill } = props

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H24V24H0V0Z" fill="white" fillOpacity="0.01" />
      <rect
        x="6"
        y="6"
        width={width || '12'}
        height={height || '12'}
        rx="2"
        fill={fill || '#FAFBFC'}
        stroke="#DFE1E6"
        strokeWidth="2"
      />
    </svg>
  )
}

export default CheckboxSvg
