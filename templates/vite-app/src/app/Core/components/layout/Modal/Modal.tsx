import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import classNames from '@Core/lib/classNames'

export interface ModalProps {
  title: string
  description?: string
  /**
   * There needs to be a focusable element inside the modal
   * or else it will throw an error e.g. Button
   */
  children?: React.ReactNode
  isOpen?: boolean
  className?: string
  closeModal: () => void
}

function Modal(props: Props): JSX.Element {
  return (
    <Transition appear show={props.isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className={classNames(
          'fixed inset-0 z-10 overflow-auto',
          props.className
        )}
        onClose={props.closeModal}
        open={props.isOpen}
      >
        <div className="px-4 min-h-screen text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block overflow-scroll p-6 my-8 w-full max-w-md text-left align-middle bg-white rounded-lg shadow-xl transition-all transform">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {props.title}
              </Dialog.Title>

              {props.description && (
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{props.description}</p>
                </div>
              )}

              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
