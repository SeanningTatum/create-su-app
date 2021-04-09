import * as React from 'react';

import { render } from '@testing-library/react';
import { expect } from 'chai';

import Button from './Button';

describe('<Button>', () => {
  it('renders the button with the label: Hello', () => {
    const { getByText } = render(<Button label="Hello" />);
    const button = getByText('Hello', { exact: true });

    expect(document.body.contains(button));
  });
});
