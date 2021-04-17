import React from 'react';

import classNames from '@app/utils/classNames';

type AvatarVariant = 'rounded' | 'circular';
type NotificationSide = 'top' | 'bottom';
type AvatarSize = 6 | 8 | 12 | 14 | 16;

export interface AvatarProps {
  variant?: AvatarVariant;
  size: AvatarSize;
  notificationSide?: NotificationSide;
  statusClassName?: string;
  placeholderIcon?: boolean;
  imgUrl?: string;
  name?: string;
}

// MARK:- Render
function Avatar(props: AvatarProps): JSX.Element {
  const {
    size = 8,
    variant = 'circular',
    imgUrl,
    notificationSide,
    name,
    statusClassName = '',
    placeholderIcon,
  } = props;

  function getInitials(): string {
    if (!name) return '';

    const nameArray = name.split(' ');

    const firstName = nameArray[0];
    const lastName = nameArray[nameArray.length - 1];

    return firstName[0].toUpperCase() + lastName[0].toUpperCase();
  }

  // Placeholder
  if (placeholderIcon) {
    return (
      <span
        className={classNames(
          'inline-block rounded-full overflow-hidden bg-gray-100',
          `h-${size}`,
          `w-${size}`,
        )}
      >
        <svg
          className="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
    );
  }

  // Initials
  if (name && !imgUrl) {
    return (
      <span
        className={classNames(
          'inline-flex items-center justify-center rounded-full bg-gray-500',
          `h-${size}`,
          `w-${size}`,
        )}
      >
        <span
          className={classNames(
            'font-medium leading-none text-white',
            FontSize[size],
          )}
        >
          {getInitials()}
        </span>
      </span>
    );
  }

  // Default with Image
  return (
    <div>
      <span className="inline-block relative">
        <img
          className={classNames(
            variant === 'rounded' ? 'rounded-md' : 'rounded-full',
            `h-${size}`,
            `w-${size}`,
          )}
          src={imgUrl}
          alt=""
        />
        {notificationSide && (
          <span
            className={classNames(
              `h-${size / 4}`,
              `w-${size / 4}`,
              'absolute right-0 block rounded-full ring-2 ring-white',
              variant === 'rounded' ? 'transform translate-x-1/2' : '',
              notificationSide === 'top' ? '-translate-y-1/2 top-0' : '',
              notificationSide === 'bottom' ? 'translate-x-1/2 bottom-0' : '',
              statusClassName,
            )}
          />
        )}
      </span>
    </div>
  );
}

// MARK:- Styles
const FontSize: Record<AvatarSize, string> = {
  '6': 'text-xs',
  '8': 'text-sm',
  '12': 'text-medium',
  '14': 'text-lg',
  '16': 'text-xl',
};

export default Avatar;
