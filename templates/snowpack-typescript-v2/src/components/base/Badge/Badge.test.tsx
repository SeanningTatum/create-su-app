import * as React from 'react';

import { render } from '@testing-library/react';
import { expect } from 'chai';

import Badge, { BadgeProps } from './Badge';

const props: BadgeProps = {
  children: 'Hello',
  appearance: 'default',
};

describe('<Badge>', () => {
  it('renders the Badge with the text Hello', () => {
    const { getByText } = render(<Badge {...props} />);
    const element = getByText('Hello', { exact: true });

    expect(document.body.contains(element));
  });
});
