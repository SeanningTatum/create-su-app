import React from 'react';

import styled from '@emotion/styled';

import theme from '@app/config/theme';

// MARK:- Props and Types
type ButtonAppearance =
  | 'default'
  | 'primary'
  | 'warning'
  | 'disabled'
  | 'danger'
  | 'subtle'
  | 'selected';

export interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  appearance: ButtonAppearance;
}

// MARK:- Render
function Button(props: ButtonProps): JSX.Element {
  return (
    <StyledButton type="button" {...props}>
      {props.children}
    </StyledButton>
  );
}

// MARK:- Styles

const BackgroundColor: Record<ButtonAppearance, string> = {
  default: theme.colors.neutral.N20A,
  primary: theme.colors.blue.B400,
  warning: theme.colors.yellow.Y300,
  disabled: theme.colors.neutral.N20A,
  danger: theme.colors.red.R400,
  selected: theme.colors.neutral.N700,
  subtle: theme.colors.others.clickable,
};

const TextColor: Record<ButtonAppearance, string> = {
  default: theme.colors.neutral.N500,
  primary: theme.colors.neutral.N0,
  warning: theme.colors.neutral.N800,
  disabled: theme.colors.neutral.N70,
  danger: theme.colors.neutral.N0,
  selected: theme.colors.neutral.N0,
  subtle: theme.colors.neutral.N500,
};

export const StyledButton = styled.button<{ appearance: ButtonAppearance }>`
  padding: 8px 16px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 14px;

  background-color: ${({ appearance }) => BackgroundColor[appearance]};
  color: ${({ appearance }) => TextColor[appearance]};
`;

export default Button;
