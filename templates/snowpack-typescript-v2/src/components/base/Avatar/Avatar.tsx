import React from 'react';

import styled from '@emotion/styled';

import { StatusApproved } from '@app/components/svg';

type AvatarSize = 'large' | 'default' | 'small' | 'xsmall';
type AvatarAppearance = 'square' | 'circular';
type AvatarStatus = 'approved' | 'default';
type AvatarPresence = 'online' | 'default';
export interface AvatarProps {
  appearance: AvatarAppearance;
  size: AvatarSize;
  status?: AvatarStatus;
  presence?: AvatarPresence;
  imgUrl?: string;
  name: string;
}

// MARK:- Render
function Avatar(props: AvatarProps): JSX.Element {
  const {
    size = 'default',
    appearance = 'circular',
    status = 'default',
    presence = 'default',
    imgUrl,
    name,
  } = props;

  function getInitials(): string {
    const nameArray = name.split(' ');

    const firstName = nameArray[0];
    const lastName = nameArray[nameArray.length - 1];

    return firstName[0].toUpperCase() + lastName[0].toUpperCase();
  }

  function svgSize(): number {
    if (size === 'large') {
      return 15;
    }

    if (size === 'small') {
      return 12;
    }

    return 14;
  }

  return (
    <Container
      size={size}
      appearance={appearance}
      className="flex items-center justify-center relative"
    >
      {status === 'approved' && (
        <StatusApproved
          height={svgSize()}
          width={svgSize()}
          className="absolute -right-1 rounded-full -top-0.5"
        />
      )}

      {!imgUrl ? (
        <h1 className="font-medium">{getInitials()}</h1>
      ) : (
        <img
          src={imgUrl}
          alt="avatar"
          className={`h-full w-full ${
            appearance === 'circular' && 'rounded-full'
          }`}
        />
      )}
    </Container>
  );
}

// MARK:- Styles

const AvatarSizeMap: Record<AvatarSize, string> = {
  large: '40px',
  default: '32px',
  small: '24px',
  xsmall: '16px',
};

export const Container = styled.div<{
  size: AvatarSize;
  appearance: AvatarAppearance;
}>`
  height: ${({ size }) => AvatarSizeMap[size]};
  width: ${({ size }) => AvatarSizeMap[size]};
  border-radius: ${({ appearance }) =>
    appearance === 'circular' ? '64px' : '3px'};
  background: ${({ theme }) => theme.colors.blue.B400};
  color: ${({ theme }) => theme.colors.neutral.N0};
  font-size: 14px;
`;

export default Avatar;
