import React from 'react';

import styled from '@emotion/styled';

import theme from '@app/config/theme';

type BadgeAppearance =
  | 'primary'
  | 'primaryInverted'
  | 'removed'
  | 'added'
  | 'important'
  | 'default';

export interface BadgeProps {
  appearance: BadgeAppearance;
  children: React.ReactNode;
}

// MARK:- Render
function Badge(props: BadgeProps): JSX.Element {
  return <Container appearance={props.appearance}>{props.children}</Container>;
}

// MARK:- Styles
const BackgroundColor: Record<BadgeAppearance, string> = {
  primary: theme.colors.blue.B400,
  primaryInverted: theme.colors.neutral.N0,
  removed: theme.colors.red.R50,
  added: theme.colors.green.G50,
  important: theme.colors.red.R400,
  default: theme.colors.neutral.N40,
};

const TextColor: Record<BadgeAppearance, string> = {
  primary: theme.colors.neutral.N0,
  primaryInverted: theme.colors.blue.B400,
  removed: theme.colors.red.R500,
  added: theme.colors.green.G500,
  important: theme.colors.neutral.N0,
  default: theme.colors.neutral.N800,
};

export const Container = styled.div<{ appearance: BadgeAppearance }>`
  padding: 0 6px;
  display: inline-flex;
  border-radius: 20px;
  height: 16px;

  font-size: 12px;
  line-height: 16px;

  background-color: ${({ appearance }) => BackgroundColor[appearance]};
  color: ${({ appearance }) => TextColor[appearance]};
`;

export default Badge;
