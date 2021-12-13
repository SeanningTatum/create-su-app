/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from '@Core/components/atoms'

import Modal, { ModalProps } from './Modal'

export default {
  title: 'Core/Layout/Modal',
  component: Modal
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Button onClick={() => setShow(true)}>Show Modal</Button>
      <Modal {...args} open={show} onClose={() => setShow(false)} />
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  children: (
    <div>
      <div className="mt-3 sm:mt-5 text-center">
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore.
          </p>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 text-center">
        <Button onClick={() => {}}>Go back to dashboard</Button>
      </div>
    </div>
  )
}
