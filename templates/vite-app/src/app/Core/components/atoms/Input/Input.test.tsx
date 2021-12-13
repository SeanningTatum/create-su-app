import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import Input from './Input'

describe('<Input>', () => {
  it('renders the Input', () => {
    const { getByText } = render(<Input label="Test label" />)
    const element = getByText('Test label', { exact: true })

    expect(document.body.contains(element))
  })
})
