import React from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import Badge, { BadgeProps } from './Badge';

export default {
  title: 'base/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  appearance: 'default',
  children: '25',
};

export const Primary = Template.bind({});
Primary.args = {
  appearance: 'primary',
  children: '25',
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  appearance: 'primaryInverted',
  children: '25',
};

export const Removed = Template.bind({});
Removed.args = {
  appearance: 'removed',
  children: '-25',
};

export const Added = Template.bind({});
Added.args = {
  appearance: 'added',
  children: '+25',
};

export const Important = Template.bind({});
Important.args = {
  appearance: 'important',
  children: '25',
};
