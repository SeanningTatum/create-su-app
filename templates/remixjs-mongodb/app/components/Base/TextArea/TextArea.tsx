import React, { HTMLAttributes } from 'react';
import classNames from '~/utils/classNames';

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string;
  description?: string;
  label: string;
  name: string;
  error?: string;
  touched?: boolean;
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
}: TextAreaProps) {
  return (
    <div className={classNames(containerClassName)}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-2"
      >
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <textarea
          name={name}
          rows={3}
          className={classNames(
            'p-2 border',
            error && touched ? 'textarea-error' : 'textarea-base',
          )}
          {...textAreaProps}
        />
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        {touched && error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
}

export default TextArea;
