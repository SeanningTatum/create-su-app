import * as React from 'react';

import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import theme from '@app/config/theme';

import Button from './Button';
import type { ButtonProps } from './Button';

const mockProps: ButtonProps = {
  onClick: () => {},
  children: 'Hello',
  size: 'base',
  type: 'primary',
};

describe('Button', () => {
  it('renders the button with the label: Hello', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button {...mockProps} />
      </ThemeProvider>,
    );
    const button = getByText('Hello', { exact: true });

    expect(document.body.contains(button));
  });
});
