import React, { MouseEvent } from 'react';

import './Badge.css';

import classNames from '@app/utils/classNames';

export interface BadgeProps {
  size?: 'sm' | 'lg';
  color?:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';
  showDot?: boolean;
  showRemove?: boolean;
  rounded?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

// MARK:- Render
function Badge({
  size = 'sm',
  color = 'gray',
  ...props
}: BadgeProps): JSX.Element {
  return (
    <span
      className={`
        bg-${color}-100 
        text-${color}-800
        ${props.rounded ? 'rounded-md' : 'rounded-full'}
        ${size === 'lg' ? 'px-3 py-0.5' : 'px-2.5 py-0.5'}
        ${size === 'lg' ? 'text-sm' : 'text-xs'}
        inline-flex 
        items-center 
        font-medium 
      `}
    >
      {props.showDot && (
        <svg
          className={classNames(
            `text-${color}-400`,
            'h-2 w-2',
            size === 'lg' ? '-ml-1 mr-1.5' : '-ml-0.5 mr-1.5',
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
          className={classNames(
            'badge',
            `text-${color}-400`,
            `hover:bg-${color}-200 `,
            `hover:text-${color}-500 `,
            `focus:bg-${color}-500 `,
          )}
        >
          <span className="sr-only">Remove large option</span>
          <svg
            className="h-2 w-2"
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
  );
}

export default Badge;
