import React from 'react'

import classNames from '@Core/lib/classNames'
import { AlertVariant } from '@Core/interfaces/atoms/Alert'
import { Colors } from './constants'
export interface AlertProps {
  title: string
  children?: React.ReactNode
  variant?: AlertVariant
}

// MARK:- Render
function Alert({ variant = 'info', ...props }: AlertProps): JSX.Element {
  const { Icon } = Colors[variant]

  return (
    <div className={classNames('rounded-md p-4', Colors[variant].bg)}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon
            className={classNames('h-5 w-5', Colors[variant].iconColor)}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3
            className={classNames('text-sm font-medium', Colors[variant].title)}
          >
            {props.title}
          </h3>
          <div
            className={classNames(
              'mt-2 text-sm text-red-700',
              Colors[variant].desc
            )}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
