import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import RadioGroup from './RadioGroup'

describe('<RadioGroup>', () => {
  it('renders the RadioGroup', () => {
    const { getByText } = render(
      <RadioGroup label="Awesome" onChange={() => {}} data={[]} value="id" />
    )
    const element = getByText('Awesome', { exact: true })

    expect(document.body.contains(element))
  })
})
