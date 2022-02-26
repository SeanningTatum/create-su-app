import React from 'react';
import {
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationIcon,
} from '@heroicons/react/solid';
import classNames from '~/utils/classNames';

export interface AlertProps {
  title: string;
  children?: React.ReactNode;
  variant?: AlertVariant;
}

// MARK:- Render
function Alert({ variant = 'info', ...props }: AlertProps) {
  const { Icon } = Colors[variant];

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
              Colors[variant].desc,
            )}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

type AlertVariant = 'success' | 'error' | 'warning' | 'info';

// MARK:- Variant Styles
const Colors: Record<
  AlertVariant,
  {
    iconColor: string;
    title: string;
    desc: string;
    bg: string;
    Icon: React.FC<React.ComponentProps<'svg'>>;
  }
> = {
  error: {
    bg: 'bg-red-50',
    iconColor: 'text-red-400',
    title: 'text-red-800',
    desc: 'text-red-700',
    Icon: XCircleIcon,
  },
  warning: {
    bg: 'bg-yellow-50',
    iconColor: 'text-yellow-400',
    title: 'text-yellow-800',
    desc: 'text-yellow-700',
    Icon: ExclamationIcon,
  },
  info: {
    bg: 'bg-blue-50',
    iconColor: 'text-blue-400',
    title: 'text-blue-800',
    desc: 'text-blue-700',
    Icon: InformationCircleIcon,
  },
  success: {
    bg: 'bg-green-50',
    iconColor: 'text-green-400',
    title: 'text-green-800',
    desc: 'text-green-700',
    Icon: CheckCircleIcon,
  },
};

export default Alert;
