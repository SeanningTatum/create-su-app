import React, { useState } from 'react'

import { CheckCircleIcon } from '@heroicons/react/outline'
import type { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from '@Core/components/atoms'

import Notification, { NotificationProps } from './Notification'

export default {
  title: 'Core/Layout/Notification',
  component: Notification
} as Meta

const Template: Story<NotificationProps> = (args) => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Button onClick={() => setShow(true)}>Show Notification</Button>
      <Notification {...args} show={show} onClose={() => setShow(false)} />
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  title: 'Successfully saved!',
  description: 'Anyone with a link can now view this file.',
  icon: (
    <CheckCircleIcon className="w-6 h-6 text-green-400" aria-hidden="true" />
  ),
  show: true
}
