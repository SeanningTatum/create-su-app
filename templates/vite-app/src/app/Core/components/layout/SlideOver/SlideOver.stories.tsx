import React, { useState } from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from '@Core/components/atoms'

import SlideOver, { SlideOverProps } from './SlideOver'

export default {
  title: 'Core/Layout/SlideOver',
  component: SlideOver
} as Meta

const Template: Story<SlideOverProps> = (args) => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Button onClick={() => setShow(true)}>Show SlideOver</Button>
      <SlideOver {...args} open={show} onClose={() => setShow(false)} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  open: true,
  children: (
    <div className="absolute inset-0 px-4 sm:px-6">
      <div
        className="h-full border-2 border-gray-200 border-dashed"
        aria-hidden="true"
      />
    </div>
  )
}
