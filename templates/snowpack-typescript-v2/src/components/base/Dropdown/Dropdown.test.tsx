import * as React from 'react';

import { render } from '@testing-library/react';
import { expect } from 'chai';

import Dropdown from './Dropdown';

describe('<Dropdown>', () => {
  it('renders the Dropdown', () => {
    const { getByText } = render(<Dropdown />);
    const element = getByText('', { exact: true });

    expect(document.body.contains(element));
  });
});
