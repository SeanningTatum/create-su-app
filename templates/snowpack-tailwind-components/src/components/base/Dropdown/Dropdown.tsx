import React, { Fragment } from 'react';

import './Dropdown.css';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import classNames from '@app/utils/classNames';

export interface DropdownProps {
  name: string;
  items: {
    name: string;
    onClick: () => void;
  }[];
}

// MARK:- Render
function Dropdown(props: DropdownProps): JSX.Element {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className={classNames('dropdown-btn')}>
              {props.name}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items static className={classNames('dropdown-item')}>
              <div className="py-1">
                {props.items.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={item.onClick}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm h-full w-full text-left',
                        )}
                      >
                        {item.name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default Dropdown;
