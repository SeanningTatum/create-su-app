import * as React from 'react';

import { render } from '@testing-library/react';
import { expect } from 'chai';

import type { HomeGeneratedProps } from './Home.types';
import HomeView from './Home.view';

const mockProps: HomeGeneratedProps = {
  count: 1,
};

describe('[HomeView]', () => {
  it('Renders Home with 1', () => {
    const { getByText } = render(<HomeView {...mockProps} />);
    const count = getByText('1', { exact: true });

    expect(document.body.contains(count));
  });
});
