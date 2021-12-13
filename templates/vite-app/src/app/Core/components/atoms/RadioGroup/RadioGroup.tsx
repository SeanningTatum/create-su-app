import React from 'react'

import { RadioGroup as RadioGroupHeadless } from '@headlessui/react'

import './RadioGroup.css'
import classNames from '@Core/lib/classNames'
import { RadioGroupValue } from '@Core/interfaces/atoms/RadioGroup'

export interface RadioGroupProps {
  /**
   * For Accessibility
   */
  label: string
  /**
   * Should be equal to RadioGroupValue.value
   */
  value: string
  data: RadioGroupValue[]
  onChange: (value: string) => void
  className?: string
  showLabel?: boolean
  error?: string
  touched?: boolean
}

// MARK:- Render
function RadioGroup({
  showLabel = true,
  ...props
}: RadioGroupProps): JSX.Element {
  return (
    <RadioGroupHeadless
      value={props.value}
      onChange={props.onChange}
      className={classNames(props.className)}
    >
      <RadioGroupHeadless.Label
        className={classNames(
          'text-sm font-medium text-gray-700 mb-1',
          showLabel ? 'block' : 'sr-only'
        )}
      >
        {props.label}
      </RadioGroupHeadless.Label>
      <div
        className={classNames(
          'bg-white rounded-md -space-y-px',
          props.error && props.touched ? 'radiogroup-error' : ''
        )}
      >
        {props.data.map((d, ndx) => (
          <RadioGroupHeadless.Option
            key={d.name}
            value={d.value}
            className={({ checked }) =>
              classNames(
                ndx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                ndx === props.data.length - 1
                  ? 'rounded-bl-md rounded-br-md'
                  : '',
                checked
                  ? 'bg-indigo-50 border-indigo-200 z-10'
                  : 'border-gray-200',
                'relative border p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? 'bg-indigo-600 border-transparent'
                      : 'bg-white border-gray-300',
                    active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                    'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                </span>
                <div className="flex flex-col ml-3">
                  <RadioGroupHeadless.Label
                    as="span"
                    className={classNames(
                      checked ? 'text-indigo-900' : 'text-gray-900',
                      'block text-sm font-medium'
                    )}
                  >
                    {d.name}
                  </RadioGroupHeadless.Label>

                  <RadioGroupHeadless.Description
                    as="span"
                    className={classNames(
                      checked ? 'text-indigo-700' : 'text-gray-500',
                      'block text-sm'
                    )}
                  >
                    {d.description}
                  </RadioGroupHeadless.Description>
                </div>
              </>
            )}
          </RadioGroupHeadless.Option>
        ))}
      </div>

      {props.touched && props.error && (
        <p className="mt-2 text-sm text-red-600">{props.error}</p>
      )}
    </RadioGroupHeadless>
  )
}

export default RadioGroup
