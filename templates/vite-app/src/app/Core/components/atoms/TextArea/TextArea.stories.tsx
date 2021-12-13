import React from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import TextArea, { TextAreaProps } from './TextArea'

export default {
  title: 'Core/Atoms/TextArea',
  component: TextArea
} as Meta

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Description',
  name: 'Storybook'
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'With Error',
  name: 'Storybook',
  touched: true,
  error: 'Something wrong has happened!'
}
