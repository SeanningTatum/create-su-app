/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import Button from './Button'
import type { ButtonProps } from './Button'

const mockProps: ButtonProps = {
  onClick: () => {},
  children: 'Hello',
  size: 'base',
  type: 'button',
  variant: 'primary'
}

describe('Button', () => {
  it('renders the button with the label: Hello', () => {
    const { getByText } = render(<Button {...mockProps} />)
    const button = getByText('Hello', { exact: true })

    expect(document.body.contains(button))
  })
})
