import React from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import Button from './Button';
import type { ButtonProps } from './Button';

export default {
  title: 'base/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button Text',
  size: 'base',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button Text',
  size: 'base',
  variant: 'secondary',
};

export const White = Template.bind({});
White.args = {
  children: 'Button Text',
  size: 'base',
  variant: 'white',
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Button Text',
  size: 'base',
  variant: 'round',
};
