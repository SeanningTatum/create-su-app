import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import Alert from './Alert'

describe('<Alert>', () => {
  it('renders the Alert', () => {
    const { getByText } = render(<Alert title="Alert Title" />)
    const element = getByText('Alert Title', { exact: true })

    expect(document.body.contains(element))
  })
})
