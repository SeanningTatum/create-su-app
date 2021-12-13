import React from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import Alert, { AlertProps } from './Alert'

export default {
  title: 'Core/Atoms/Alert',
  component: Alert
} as Meta

const Template: Story<AlertProps> = (args) => <Alert {...args} />

const description = (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur,
    ipsum similique veniam quo totam eius aperiam dolorum.
  </p>
)

const list = (
  <ul className="pl-5 space-y-1 list-disc">
    <li>Your password must be at least 8 characters</li>
    <li>
      Your password must include at least one pro wrestling finishing move
    </li>
  </ul>
)

export const Info = Template.bind({})
Info.args = {
  title: 'Info',
  children: description
}

export const Success = Template.bind({})
Success.args = {
  title: 'Success',
  children: description,
  variant: 'success'
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Warning',
  children: description,
  variant: 'warning'
}

export const Error = Template.bind({})
Error.args = {
  title: 'Error',
  children: description,
  variant: 'error'
}

export const ListDescription = Template.bind({})
ListDescription.args = {
  title: 'Error',
  children: list,
  variant: 'error'
}
