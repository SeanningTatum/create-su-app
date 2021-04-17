import React from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import TopbarLayout, { TopbarLayoutProps } from './TopbarLayout';

export default {
  title: 'Layout/TopbarLayout',
  component: TopbarLayout,
} as Meta;

const Template: Story<TopbarLayoutProps> = (args) => (
  <TopbarLayout {...args}>
    <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg" />
  </TopbarLayout>
);

export const Basic = Template.bind({});
Basic.args = {
  // Add props here
};
