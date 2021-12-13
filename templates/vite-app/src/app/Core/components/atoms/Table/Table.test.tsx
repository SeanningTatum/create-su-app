import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import Table from './Table'

describe('<Table>', () => {
  it('renders the Table', () => {
    const { getByText } = render(<Table headers={[]}>something</Table>)
    const element = getByText('', { exact: true })

    expect(document.body.contains(element))
  })
})
