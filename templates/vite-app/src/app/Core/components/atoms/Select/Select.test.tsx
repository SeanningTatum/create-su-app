import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import Select from './Select'

describe('<Select>', () => {
  it('renders the Select', () => {
    const { getByText } = render(
      <Select label="Label" onChange={() => {}} values={[]} />
    )
    const element = getByText('', { exact: true })

    expect(document.body.contains(element))
  })

  it('opens the dropdown menu onClick', () => {
    expect.fail('fail')
  })

  it('closes the dropdown menu and changes the value onSelect', () => {
    expect.fail('fail')
  })

  it('does not select if value has isDisabled', () => {
    expect.fail('fail')
  })
})
