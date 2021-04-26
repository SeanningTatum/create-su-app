/* This example requires Tailwind CSS v2.0+ */
import React from 'react';

import Sidebar from './components/Sidebar';
import SidebarMobile from './components/SidebarMobile';

export interface SidebarLayoutProps {
  children: React.ReactNode;
}

function SidebarLayout(props: SidebarLayoutProps): JSX.Element {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="hidden bg-indigo-700 md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <Sidebar />
        </div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <SidebarMobile />
        </div>

        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {props.children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SidebarLayout;
