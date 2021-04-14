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
  children: 'Label',
  variant: 'primary',
};
