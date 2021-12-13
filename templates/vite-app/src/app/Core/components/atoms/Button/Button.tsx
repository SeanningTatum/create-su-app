import React, { ButtonHTMLAttributes } from 'react'

import './Button.css'

import { Spinner } from '@Core/components/svg'
import classNames from '@Core/lib/classNames'
import { ButtonSize, ButtonVariant } from '@Core/interfaces/atoms/Button'
import { Background, FontSize, Padding, Text } from './constants'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

// MARK:- Render
function Button({
  variant = 'primary',
  size = 'base',
  children,
  type = 'button',
  loading,
  ...buttonProps
}: ButtonProps): JSX.Element {
  return (
    <button
      {...buttonProps}
      disabled={buttonProps.disabled || loading}
      type={type}
      className={classNames(
        'button',

        Padding[size],
        Background[variant],
        Text[variant],
        Padding[size],
        FontSize[size],
        buttonProps.className || ''
      )}
    >
      {children}

      {loading && (
        <div className="-mr-2 ml-4">
          <Spinner className="text-white" />
        </div>
      )}
    </button>
  )
}

// MARK:- Styles

export default Button
