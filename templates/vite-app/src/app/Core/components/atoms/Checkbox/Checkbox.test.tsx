import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import Checkbox from './Checkbox'

describe('<Checkbox>', () => {
  it('renders the Checkbox', () => {
    const { getByRole } = render(<Checkbox onClick={() => {}} />)
    const element = getByRole('checkbox')

    expect(document.body.contains(element))
  })

  it('doesnt fire a function if isDisabled is true', () => {
    // const { getByText } = render(<Checkbox onClick={() => {}} />);
    // const element = getByText('', { exact: true });

    expect.fail('fail')
  })

  it('renders the expected checkbox even if there a multiple states', () => {
    // const { getByText } = render(<Checkbox onClick={() => {}} />);
    // const element = getByText('', { exact: true });

    expect.fail('fail')
  })
})
