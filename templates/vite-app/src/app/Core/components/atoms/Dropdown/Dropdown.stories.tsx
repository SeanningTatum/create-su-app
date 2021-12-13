/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import Dropdown, { DropdownProps } from './Dropdown'

export default {
  title: 'Core/Atoms/Dropdown',
  component: Dropdown
} as Meta

const Template: Story<DropdownProps> = (args) => (
  <div className="ml-44">
    <Dropdown {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  name: 'Options',
  items: [
    { name: 'Account Settings', onClick: () => {} },
    { name: 'Support', onClick: () => {} },
    { name: 'License', onClick: () => {} },
    { name: 'Sign out', onClick: () => {} }
  ]
}
