import React from 'react';

import { ThemeProvider } from '@emotion/react';
import type { Story, Meta } from '@storybook/react/types-6-0';

import theme from '@app/config/theme';

import DropdownMenu, { DropdownMenuProps } from './DropdownMenu';

export default {
  title: 'Base/DropdownMenu',
  component: DropdownMenu,
} as Meta;

const people = [
  { id: 1, name: 'Durward Reynolds', disabled: false },
  { id: 2, name: 'Kenton Towne', disabled: false },
  { id: 3, name: 'Therese Wunsch', disabled: false },
  { id: 4, name: 'Benedict Kessler', disabled: true },
  { id: 5, name: 'Katelyn Rohan', disabled: false },
];

// Need to manually add theme provider here again. Not sure why.
const Template: Story<DropdownMenuProps> = (args) => (
  <ThemeProvider theme={theme}>
    <div style={{ width: '300px' }}>
      <DropdownMenu {...args} />
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  values: people,
  value: 2,
};

export const Disabled = Template.bind({});
Disabled.args = {
  values: people,
  value: 2,
  isDisabled: true,
};
