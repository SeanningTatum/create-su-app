import React from 'react'
import './Input.css'

import { ExclamationCircleIcon } from '@heroicons/react/outline'

import classNames from '@Core/lib/classNames'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * Needed for accessibility
   */
  label: string
  /**
   * Svg Icon
   */
  Icon?: React.FC<React.ComponentProps<'svg'>>
  description?: string
  error?: string
  showLabel?: boolean
  containerClassName?: string
  touched?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// MARK:- Render
function Input(props: InputProps): JSX.Element {
  const {
    label,
    Icon,
    description,
    error,
    showLabel = true,
    containerClassName = '',
    touched,
    ...inputProps
  } = props

  return (
    <div className={classNames(containerClassName || '')}>
      <label
        htmlFor={inputProps.name}
        className={classNames(
          'text-sm font-medium text-gray-700 mb-1',
          showLabel ? 'block' : 'sr-only'
        )}
      >
        {label}
      </label>

      <div className="relative text-gray-400 focus-within:text-gray-600">
        {Icon && (
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
        )}

        <input
          {...inputProps}
          className={classNames(
            'input',
            Icon ? 'pl-10' : 'pl-4',
            touched && error ? 'input-error' : 'input-base'
          )}
          onChange={props.onChange}
        />

        {touched && error && (
          <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <ExclamationCircleIcon
              className="w-5 h-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
      {touched && error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default Input
