import React from 'react';

import tw from 'tailwind-styled-components';

import { navigation } from '../SidebarLayout.constants';

function SidebarItems(): JSX.Element {
  return (
    <nav className="mt-5 px-2 space-y-1">
      {navigation.map((item) => (
        <NavigationItem key={item.name} href={item.href} current={item.current}>
          <item.icon
            className="mr-4 h-6 w-6 text-indigo-300"
            aria-hidden="true"
          />
          {item.name}
        </NavigationItem>
      ))}
    </nav>
  );
}

const NavigationItem = tw.a`
  group flex items-center px-2 py-2 text-base font-medium rounded-md
  
  ${(p: { current: boolean }) =>
    p.current
      ? 'bg-indigo-800 text-white'
      : 'text-white hover:bg-indigo-600 hover:bg-opacity-75'};
`;

export default SidebarItems;
