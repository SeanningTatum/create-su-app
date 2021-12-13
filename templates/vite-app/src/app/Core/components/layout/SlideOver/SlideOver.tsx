import React, { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export interface SlideOverProps {
  open?: boolean
  onClose: () => void
  children: React.ReactNode
}

function SlideOver(props: SlideOverProps): JSX.Element {
  return (
    <Transition.Root show={!!props.open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="overflow-hidden fixed inset-0"
        open={!!props.open}
        onClose={() => props.onClose()}
      >
        <div className="overflow-hidden absolute inset-0">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="flex fixed inset-y-0 right-0 pl-10 max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="flex overflow-y-scroll flex-col py-6 h-full bg-white shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex justify-between items-start">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Panel title
                      </Dialog.Title>
                      <div className="flex items-center ml-3 h-7">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500 bg-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                          onClick={props.onClose}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 px-4 sm:px-6 mt-6">
                    {props.children}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideOver
