import React, { MouseEvent } from 'react';

import './Badge.css';

import classNames from '@app/utils/classNames';

type BadgeColor =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';
export interface BadgeProps {
  size?: 'sm' | 'lg';
  color?: BadgeColor;
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
      className={classNames(
        BgColor[color],
        TextColor[color],
        props.rounded ? 'rounded-md' : 'rounded-full',
        size === 'lg' ? 'px-3 py-0.5' : 'px-2.5 py-0.5',
        size === 'lg' ? 'text-sm' : 'text-xs',
        'inline-flex items-center font-medium',
      )}
    >
      {props.showDot && (
        <svg
          className={classNames(
            DotColor[color],
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
          className={classNames('badge', RemoveButton[color])}
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

// This is needed because purge css can't recognize what to purge if we use string concatination.
const BgColor: Record<BadgeColor, string> = {
  gray: 'bg-gray-100',
  red: 'bg-red-100',
  yellow: 'bg-yellow-100',
  green: 'bg-green-100',
  blue: 'bg-blue-100',
  indigo: 'bg-indigo-100',
  purple: 'bg-purple-100',
  pink: 'bg-pink-100',
};

const TextColor: Record<BadgeColor, string> = {
  gray: 'text-gray-800',
  red: 'text-red-800',
  yellow: 'text-yellow-800',
  green: 'text-green-800',
  blue: 'text-blue-800',
  indigo: 'text-indigo-800',
  purple: 'text-purple-800',
  pink: 'text-pink-800',
};

const DotColor: Record<BadgeColor, string> = {
  gray: 'text-gray-400',
  red: 'text-red-400',
  yellow: 'text-yellow-400',
  green: 'text-green-400',
  blue: 'text-blue-400',
  indigo: 'text-indigo-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
};

const RemoveButton: Record<BadgeColor, string> = {
  gray: 'text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500',
  red: 'text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500',
  yellow:
    'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500',
  green:
    'text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500',
  blue: 'text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-500',
  indigo:
    'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500',
  purple:
    'text-purple-400 hover:bg-purple-200 hover:text-purple-500 focus:bg-purple-500',
  pink: 'text-pink-400 hover:bg-pink-200 hover:text-pink-500 focus:bg-pink-500',
};

export default Badge;
