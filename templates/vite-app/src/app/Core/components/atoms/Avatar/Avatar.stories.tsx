import React from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import Avatar, { AvatarProps } from './Avatar'

export default {
  title: 'Core/Atoms/Avatar',
  component: Avatar
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 12,
  variant: 'circular',
  imgUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

export const Rounded = Template.bind({})
Rounded.args = {
  size: 12,
  variant: 'rounded',
  imgUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

export const CircularWithNotificationTop = Template.bind({})
CircularWithNotificationTop.args = {
  size: 12,
  variant: 'circular',
  notificationSide: 'top',
  imgUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  statusClassName: 'bg-red-400'
}

export const CircularWithNotificationBottom = Template.bind({})
CircularWithNotificationBottom.args = {
  size: 12,
  notificationSide: 'bottom',
  variant: 'circular',
  imgUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  statusClassName: 'bg-red-400'
}

export const RoundedWithNotificationBottom = Template.bind({})
RoundedWithNotificationBottom.args = {
  size: 12,
  notificationSide: 'bottom',
  variant: 'rounded',
  imgUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  statusClassName: 'bg-red-400'
}

export const RoundedWithNotificationTop = Template.bind({})
RoundedWithNotificationTop.args = {
  size: 12,
  notificationSide: 'top',
  variant: 'rounded',
  imgUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  statusClassName: 'bg-red-400'
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  size: 12,
  placeholderIcon: true
}

export const Initials = Template.bind({})
Initials.args = {
  name: 'Sean Urgel',
  size: 12
}
