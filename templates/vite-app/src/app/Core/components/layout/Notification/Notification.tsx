import React, { Fragment } from 'react'

import './Notification.css'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import { Colors } from './constants'
import { NotificationVariant } from '@Core/interfaces/layout/Notifcation'
import classNames from '@Core/lib/classNames'

export interface NotificationProps {
  icon?: React.ReactNode
  title: string
  description?: string
  variant?: NotificationVariant
  show?: boolean
  onClose: () => void
}

function Notification({
  variant = 'info',
  ...props
}: NotificationProps): JSX.Element {
  const { Icon, title, desc, iconColor } = Colors[variant]

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="flex inset-0 justify-center sm:justify-end items-end sm:items-start pointer-events-none"
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
                <div className="flex-shrink-0">
                  {props.icon || (
                    <Icon
                      className={classNames('h-5 w-5', iconColor)}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="flex-1 pt-0.5 ml-3 w-0">
                  <p
                    className={classNames(
                      'text-sm font-medium text-gray-900',
                      title
                    )}
                  >
                    {props.title}
                  </p>
                  <p className={classNames('mt-1 text-sm text-gray-500', desc)}>
                    {props.description}
                  </p>
                </div>
                <div className="flex flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="notification-close-btn"
                    onClick={props.onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </>
  )
}

export default Notification
