import React from 'react';

function UserDetails(): JSX.Element {
  return (
    <>
      <div className="flex-shrink-0">
        <img
          className="rounded-full h-10 w-10"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium text-white">Tom Cook</div>
        <div className="text-sm font-medium text-indigo-300">
          tom@example.com
        </div>
      </div>
    </>
  );
}

export default UserDetails;
