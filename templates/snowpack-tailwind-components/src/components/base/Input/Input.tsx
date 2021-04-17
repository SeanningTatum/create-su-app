import React from 'react';
import './Input.css';

import { ExclamationCircleIcon } from '@heroicons/react/outline';

import classNames from '@app/utils/classNames';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * Needed for accessibility
   */
  label: string;
  /**
   * Svg Icon
   */
  Icon?: React.FC<React.ComponentProps<'svg'>>;
  description?: string;
  error?: string;
  showLabel?: boolean;
}

// MARK:- Render
function Search(props: InputProps): JSX.Element {
  const {
    label,
    Icon,
    description,
    error,
    showLabel = true,
    ...inputProps
  } = props;

  return (
    <div className="max-w-lg w-full lg:max-w-xs">
      {label && (
        <label
          htmlFor={inputProps.name}
          className={classNames(
            'text-sm font-medium text-gray-700 mb-1',
            showLabel ? 'block' : 'sr-only',
          )}
        >
          {label}
        </label>
      )}
      <div className="relative text-gray-400 focus-within:text-gray-600">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}

        <input
          {...inputProps}
          className={classNames(
            'input',
            Icon ? 'pl-10' : 'pl-4',
            error ? 'input-error' : 'input-base',
          )}
          onChange={props.onChange}
        />

        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default Search;
