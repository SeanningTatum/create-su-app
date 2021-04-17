import * as React from 'react';

import { render } from '@testing-library/react';
import { expect } from 'chai';

import Avatar from './Avatar';

describe('<Avatar>', () => {
  it('renders the Avatar', () => {
    const { getByText } = render(<Avatar />);
    const element = getByText('', { exact: true });

    expect(document.body.contains(element));
  });
});
