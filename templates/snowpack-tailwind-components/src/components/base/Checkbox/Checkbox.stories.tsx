import React from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Base/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add props here
};

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  isIndeterminate: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  isChecked: true,
  isDisabled: true,
};

export const InderminateDisabled = Template.bind({});
InderminateDisabled.args = {
  isIndeterminate: true,
  isDisabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  isInvalid: true,
};
