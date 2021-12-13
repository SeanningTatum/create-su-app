import React from 'react'

import classNames from '@Core/lib/classNames'

export interface CardProps {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
  onClick?: () => void
}

function Card(props: CardProps): JSX.Element {
  if (props.onClick) {
    return (
      <button
        onClick={props.onClick}
        className={classNames(
          'bg-white overflow-hidden shadow rounded-lg w-full focus:ring-indigo-500 focus:ring-2 focus:outline-none ',
          props.className || '',
          !props.noPadding && 'px-4 py-5 sm:p-6'
        )}
      >
        {props.children}
      </button>
    )
  }

  return (
    <div
      className={classNames(
        'bg-white overflow-hidden shadow rounded-lg w-full',
        props.className || '',
        !props.noPadding && 'px-4 py-5 sm:p-6'
      )}
    >
      {props.children}
    </div>
  )
}

export default Card
