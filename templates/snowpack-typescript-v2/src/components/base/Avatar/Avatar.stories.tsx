import React from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Base/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Sean Urgel',
  size: 'default',
  appearance: 'circular',
  status: 'default',
};

export const Square = Template.bind({});
Square.args = {
  name: 'Sean Urgel',
  size: 'default',
  appearance: 'square',
  status: 'default',
};

export const WithImage = Template.bind({});
WithImage.args = {
  name: 'Sean Urgel',
  size: 'default',
  appearance: 'circular',
  status: 'default',
  imgUrl:
    'https://www.netliteracy.org/wp-content/uploads/2020/07/Capture-3-768x758.png',
};

export const Approved = Template.bind({});
Approved.args = {
  name: 'Sean Urgel',
  size: 'default',
  appearance: 'circular',
  status: 'approved',
};

export const ApprovedWithImage = Template.bind({});
ApprovedWithImage.args = {
  name: 'Sean Urgel',
  size: 'default',
  appearance: 'circular',
  status: 'approved',
  imgUrl:
    'https://www.netliteracy.org/wp-content/uploads/2020/07/Capture-3-768x758.png',
};
