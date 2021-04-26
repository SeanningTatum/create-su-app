import React from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import Badge, { BadgeProps } from './Badge';

export default {
  title: 'base/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => (
  <div className="flex items-center space-x-2">
    <Badge {...args} color="gray" />
    <Badge {...args} color="red" />
    <Badge {...args} color="yellow" />
    <Badge {...args} color="green" />
    <Badge {...args} color="blue" />
    <Badge {...args} color="indigo" />
    <Badge {...args} color="purple" />
    <Badge {...args} color="pink" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: 'sm',
  children: 'Badge',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Badge',
};

export const WithDot = Template.bind({});
WithDot.args = {
  size: 'sm',
  children: 'Badge',
  showDot: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  size: 'sm',
  children: 'Badge',
  rounded: true,
};

export const RoundedLarge = Template.bind({});
RoundedLarge.args = {
  size: 'lg',
  children: 'Badge',
  rounded: true,
};

export const RoundedWithDot = Template.bind({});
RoundedWithDot.args = {
  size: 'sm',
  children: 'Badge',
  rounded: true,
  showDot: true,
};

export const WithRemove = Template.bind({});
WithRemove.args = {
  size: 'lg',
  children: 'Badge',
  showRemove: true,
  onClick: () => {
    console.log('Hello');
  },
};
