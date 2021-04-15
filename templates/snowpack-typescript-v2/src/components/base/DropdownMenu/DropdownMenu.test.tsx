import * as React from 'react';

import { render } from '@testing-library/react';
import { expect } from 'chai';

import DropdownMenu from './DropdownMenu';

describe('<DropdownMenu>', () => {
  it('renders the DropdownMenu', () => {
    const { getByText } = render(<DropdownMenu />);
    const element = getByText('', { exact: true });

    expect(document.body.contains(element));
  });

  it('opens the dropdown menu onClick', () => {
    expect.fail('fail');
  });

  it('closes the dropdown menu and changes the value onSelect', () => {
    expect.fail('fail');
  });

  it('does not select if value has isDisabled', () => {
    expect.fail('fail');
  });
});
