import React from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import Switch, { SwitchProps } from './Switch'

export default {
  title: 'Core/Atoms/Switch',
  component: Switch
} as Meta

const Template: Story<SwitchProps> = (args) => <Switch {...args} />

export const Basic = Template.bind({})
Basic.args = {
  // Add props here
}
