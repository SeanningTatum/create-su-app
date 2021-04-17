import React, { Fragment } from 'react';

import './Notification.css';
import { Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';

export interface NotificationProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  show?: boolean;
  onClose: () => void;
}

function Notification(props: NotificationProps): JSX.Element {
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
      >
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition
          show={!!props.show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="notification-container">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">{props.icon}</div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">
                    {props.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {props.description}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    type="button"
                    className="notification-close-btn"
                    onClick={props.onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}

export default Notification;
