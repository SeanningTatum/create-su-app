import React from 'react';

import SidebarFooter from './SidebarFooter';
import SidebarItems from './SidebarItems';

function Sidebar(): JSX.Element {
  return (
    <div className="flex flex-col h-0 flex-1">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
            alt="Workflow"
          />
        </div>

        <SidebarItems />
      </div>
      <SidebarFooter />
    </div>
  );
}

export default Sidebar;
