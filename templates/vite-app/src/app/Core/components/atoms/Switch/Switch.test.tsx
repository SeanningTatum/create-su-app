/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import Switch from './Switch'

describe('<Switch>', () => {
  it('renders the Switch', () => {
    const { getByText } = render(<Switch enabled setEnabled={() => {}} />)
    const element = getByText('', { exact: true })

    expect(document.body.contains(element))
  })
})
