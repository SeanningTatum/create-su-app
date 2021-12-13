import * as React from 'react'

import { render } from '@testing-library/react'
import { expect } from 'chai'

import Avatar, { AvatarProps } from './Avatar'

const props: AvatarProps = {
  size: 16
}

describe('<Avatar>', () => {
  it('renders the Avatar', () => {
    const { getByText } = render(<Avatar {...props} />)
    const element = getByText('', { exact: true })

    expect(document.body.contains(element))
  })
})
