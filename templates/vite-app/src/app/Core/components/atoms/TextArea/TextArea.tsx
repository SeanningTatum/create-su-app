import React, { HTMLAttributes } from 'react'

import classNames from '@Core/lib/classNames'
import './TextArea.css'

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string
  description?: string
  label: string
  name: string
  error?: string
  touched?: boolean
}

// MARK:- Render
function TextArea({
  containerClassName,
  description,
  label,
  name,
  touched,
  error,
  ...textAreaProps
}: TextAreaProps): JSX.Element {
  return (
    <div className={classNames(containerClassName)}>
      <label
        htmlFor={name}
        className="block sm:pt-2 sm:mt-px mb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="sm:col-span-2 mt-1 sm:mt-0">
        <textarea
          name={name}
          rows={3}
          className={classNames(
            error && touched ? 'textarea-error' : 'textarea-base'
          )}
          {...textAreaProps}
        />
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        {touched && error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  )
}

export default TextArea
