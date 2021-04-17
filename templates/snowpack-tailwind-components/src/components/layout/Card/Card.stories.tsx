import React from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import Card, { CardProps } from './Card';

export default {
  title: 'Layout/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
  <div className="max-w-md">
    <Card {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  // Add props here
  children: (
    <div className="h-full w-full border border-gray-200 border-dashed p-10" />
  ),
};
