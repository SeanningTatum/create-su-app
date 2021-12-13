import React, { memo, MouseEvent, useMemo } from 'react'

import './Badge.css'

import classNames from '@Core/lib/classNames'
import { BadgeColor, BadgeSize } from '@Core/interfaces/atoms/Badge'
import { BgColor, DotColor, RemoveButton, TextColor } from './constants'

export interface BadgeProps {
  size?: BadgeSize
  color?: BadgeColor
  showDot?: boolean
  showRemove?: boolean
  rounded?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

function Badge({ size = 'sm', ...props }: BadgeProps): JSX.Element {
  // MARK:- Functions

  function randomColorKey(): BadgeColor {
    const keysArr: BadgeColor[] = Object.keys(BgColor) as BadgeColor[]
    const randomNdx = Math.floor(Math.random() * keysArr.length)

    return keysArr[randomNdx]
  }

  const color = useMemo(
    () => (props.color ? props.color : randomColorKey()),
    [props.color]
  )

  // MARK:- Render
  return (
    <span
      className={classNames(
        BgColor[color],
        TextColor[color],
        props.rounded ? 'rounded-md' : 'rounded-full',
        size === 'lg' ? 'px-3 py-0.5' : 'px-2.5 py-0.5',
        size === 'lg' ? 'text-sm' : 'text-xs',
        'inline-flex items-center font-medium'
      )}
    >
      {props.showDot && (
        <svg
          className={classNames(
            DotColor[color],
            'h-2 w-2',
            size === 'lg' ? '-ml-1 mr-1.5' : '-ml-0.5 mr-1.5'
          )}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
      )}

      {props.children}

      {props.showRemove && (
        <button
          onClick={props.onClick}
          type="button"
          className={classNames('badge', RemoveButton[color])}
        >
          <span className="sr-only">Remove large option</span>
          <svg
            className="w-2 h-2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M1 1l6 6m0-6L1 7"
            />
          </svg>
        </button>
      )}
    </span>
  )
}

export default memo(Badge)
