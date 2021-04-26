import React from 'react';

import type { Story, Meta } from '@storybook/react/types-6-0';

import SidebarLayout, { SidebarLayoutProps } from './SidebarLayout';

export default {
  title: 'Layout/SidebarLayout',
  component: SidebarLayout,
} as Meta;

const Template: Story<SidebarLayoutProps> = (args) => (
  <SidebarLayout {...args}>
    <div className="py-4">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
    </div>
  </SidebarLayout>
);

export const Basic = Template.bind({});
Basic.args = {
  // Add props here
};
