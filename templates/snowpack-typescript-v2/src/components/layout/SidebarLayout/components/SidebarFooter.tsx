import React from 'react';

function SidebarFooter(): JSX.Element {
  return (
    <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
      <a href="#remove" className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Tom Cook</p>
            <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
              View profile
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default SidebarFooter;
