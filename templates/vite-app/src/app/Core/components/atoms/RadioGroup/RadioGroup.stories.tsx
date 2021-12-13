import React from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import RadioGroup, { RadioGroupProps } from './RadioGroup'

export default {
  title: 'Core/Atoms/RadioGroup',
  component: RadioGroup
} as Meta

const settings = [
  {
    value: '1',
    name: 'Public access',
    description: 'This project would be available to anyone who has the link'
  },
  {
    value: '2',
    name: 'Private to Project Members',
    description: 'Only members of this project would be able to access'
  },
  {
    value: '3',
    name: 'Private to you',
    description: 'You are the only one able to access this project'
  }
]

const Template: Story<RadioGroupProps> = (args) => <RadioGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Settings',
  data: settings
}

export const PreSelected = Template.bind({})
PreSelected.args = {
  label: 'Settings',
  data: settings,
  value: '3'
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Settings',
  data: settings,
  value: '3',
  error: 'Something has happened?!',
  touched: true
}
