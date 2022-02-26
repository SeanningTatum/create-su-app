import React, { ButtonHTMLAttributes } from 'react';

import classNames from '~/utils/classNames';

export type ButtonVariant = 'primary' | 'secondary' | 'white' | 'round';
export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

// MARK:- Render
function Button({
  variant = 'primary',
  size = 'base',
  children,
  type = 'button',
  loading,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      {...buttonProps}
      disabled={buttonProps.disabled || loading}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames(
        'btn',
        ButtonPadding[size],
        ButtonBackground[variant],
        ButtonText[variant],
        ButtonPadding[size],
        ButtonFontSize[size],
        buttonProps.className || '',
      )}
    >
      {children}

      {/* {loading && (
        <div className="ml-4 -mr-2">
          <Spinner className="text-white" />
        </div>
      )} */}
    </button>
  );
}

export const ButtonPadding: Record<ButtonSize, string> = {
  xs: 'px-2.5 py-1.5',
  sm: 'px-3 py-2',
  base: 'px-4 py-2',
  lg: 'px-4 py-2',
  xl: 'px-6 py-3',
};

export const ButtonFontSize: Record<ButtonSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-sm',
  lg: 'text-base',
  xl: 'text-base',
};

export const ButtonText: Record<ButtonVariant, string> = {
  primary: 'text-white bg-indigo-600 hover:bg-indigo-700',
  secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
  white: 'text-gray-700 bg-white border-gray-300',
  round: 'text-white bg-indigo-600 hover:bg-indigo-700 rounded-full',
};

export const ButtonBackground: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 hover:bg-indigo-700',
  secondary: 'bg-indigo-100 hover:bg-indigo-200',
  white: ' bg-white border-gray-300',
  round: 'bg-indigo-600 hover:bg-indigo-700 rounded-full',
};

export default Button;
