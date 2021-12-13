import React from 'react'

import { SearchIcon } from '@heroicons/react/outline'
import type { Story, Meta } from '@storybook/react/types-6-0'

import Input, { InputProps } from './Input'

export default {
  title: 'Core/Atoms/Input',
  component: Input
} as Meta

const Template: Story<InputProps> = (args) => (
  // <div className="bg-indigo-500 h-20 flex items-center px-5">
  <Input {...args} />
  // </div>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  placeholder: 'Placeholder',
  Icon: SearchIcon
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  placeholder: 'Placeholder',
  description: "We'll only use this for spam"
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  placeholder: 'Placeholder',
  label: 'Email'
}

export const WithError = Template.bind({})
WithError.args = {
  placeholder: 'Placeholder',
  label: 'Email',
  error: 'Something has happened!',
  touched: true
}
