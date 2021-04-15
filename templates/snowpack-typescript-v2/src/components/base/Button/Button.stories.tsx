import React from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import Button from './Button';
import type { ButtonProps } from './Button';

export default {
  title: 'base/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  appearance: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Label',
  appearance: 'primary',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Label',
  appearance: 'warning',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Label',
  appearance: 'disabled',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Label',
  appearance: 'danger',
};

export const Subtle = Template.bind({});
Subtle.args = {
  children: 'Label',
  appearance: 'subtle',
};

export const Selected = Template.bind({});
Selected.args = {
  children: 'Label',
  appearance: 'selected',
};
