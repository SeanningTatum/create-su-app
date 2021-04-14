import React from 'react';

import styled from '@emotion/styled';

// MARK:- Props and Types
type ButtonVariant = 'primary' | 'warning' | 'disabled' | 'danger' | 'subtle';

export interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  variant: ButtonVariant;
}

// MARK:- Render
const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton type="button" {...props}>
    {props.children}
  </StyledButton>
);

// MARK:- Styles
export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  padding: 8px 16px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export default Button;
