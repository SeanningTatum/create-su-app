import React from 'react'

import type { SVGProps } from './Svg.types'

const StatusApproved = (props: SVGProps): JSX.Element => {
  const { width, height, fill, className } = props

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || '15'}
      height={height || '15'}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5Z"
        fill={fill || '#00875A'}
      />
      <path
        d="M5.40414 6.85086C5.04632 6.49305 4.46618 6.49305 4.10836 6.85086C3.75055 7.20868 3.75055 7.78882 4.10836 8.14664L5.94086 9.97914C6.29868 10.337 6.87882 10.337 7.23664 9.97914L10.9016 6.31414C11.2595 5.95632 11.2595 5.37618 10.9016 5.01836C10.5438 4.66055 9.96368 4.66055 9.60586 5.01836L6.58875 8.03548L5.40414 6.85086Z"
        fill="white"
      />
      <path
        d="M7.5 13C4.46243 13 2 10.5376 2 7.5H-2C-2 12.7467 2.25329 17 7.5 17V13ZM13 7.5C13 10.5376 10.5376 13 7.5 13V17C12.7467 17 17 12.7467 17 7.5H13ZM7.5 2C10.5376 2 13 4.46243 13 7.5H17C17 2.25329 12.7467 -2 7.5 -2V2ZM7.5 -2C2.25329 -2 -2 2.25329 -2 7.5H2C2 4.46243 4.46243 2 7.5 2V-2Z"
        fill="white"
      />
    </svg>
  )
}

export default StatusApproved
