import React from 'react'

import type { Story, Meta } from '@storybook/react/types-6-0'

import ChevronDown from './ChevronDown'
import {
  Checkbox,
  CheckboxCheckedDisabled,
  CheckboxChecked,
  CheckboxDisabled,
  CheckboxIndeterminateDisabled,
  CheckboxIndeterminate,
  CheckboxInvalid
} from './index'
import StatusApproved from './StatusApproved'
import type { SVGProps } from './Svg.types'

export default {
  title: 'Assets/Svg',
  component: Checkbox // anything
} as Meta

const Template: Story<SVGProps> = (args) => (
  <div className="flex flex-row gap-2">
    <div>
      <Checkbox {...args} />
      <p className="text-sm">Checkbox</p>
    </div>

    <div>
      <CheckboxChecked {...args} />
      <p className="text-sm">CheckboxChecked</p>
    </div>

    <div>
      <CheckboxIndeterminate {...args} />
      <p className="text-sm">CheckboxIndeterminate</p>
    </div>

    <div>
      <CheckboxDisabled {...args} />
      <p className="text-sm">CheckboxDisabled</p>
    </div>

    <div>
      <CheckboxCheckedDisabled {...args} />
      <p className="text-sm">CheckboxCheckedDisabled</p>
    </div>

    <div>
      <CheckboxIndeterminateDisabled {...args} />
      <p className="text-sm">CheckboxIndeterminateDisabled</p>
    </div>

    <div>
      <CheckboxInvalid {...args} />
      <p className="text-sm">CheckboxInvalid</p>
    </div>

    <div>
      <ChevronDown {...args} fill="black" />
      <p className="text-sm">ChevronDown</p>
    </div>

    <div>
      <StatusApproved {...args} height={24} width={24} />
      <p className="text-sm">StatusApproved</p>
    </div>
  </div>
)

export const List = Template.bind({})
List.args = {}

// MARK:- Styles
