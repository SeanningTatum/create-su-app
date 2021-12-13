import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import TextArea from './TextArea'

describe('<TextArea>', () => {
  it('renders the TextArea', () => {
    const { getByText } = render(<TextArea label="Test TextArea" name="name" />)
    const element = getByText('Test TextArea', { exact: true })

    expect(document.body.contains(element))
  })
})
