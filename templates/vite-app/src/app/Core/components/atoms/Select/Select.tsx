import React, { Fragment, useEffect, useState } from 'react'
import './Select.css'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'

import { Spinner } from '@Core/components/svg'
import classNames from '@Core/lib/classNames'
import { SelectDropdownMenuItem } from '@Core/interfaces/atoms/Select'

export interface SelectProps<T = any> {
  label: string
  values: SelectDropdownMenuItem[]
  value?: string | number
  onChange: (id: string | number) => void
  isDisabled?: boolean
  className?: string
  error?: string
  touched?: boolean
  loading?: boolean
}

// MARK:- Render

function Select(props: SelectProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState(
    props.values.find((val) => val.id === props.value) || props.values[0]
  )

  function onChange(item: SelectDropdownMenuItem): void {
    setSelectedValue(item)
    props.onChange(item.id)
  }

  useEffect(() => {
    if (props.value) {
      setSelectedValue(
        props.values.find((val) => val.id === props.value) || props.values[0]
      )
    }
  }, [props.value, props.values])

  return (
    <div className={classNames(props.className || '')}>
      <Listbox
        value={selectedValue}
        onChange={onChange}
        disabled={props.isDisabled}
      >
        {({ open }) => (
          <>
            <Listbox.Label className="listbox-label">
              {props.label}
            </Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button
                className={classNames(
                  props.touched && props.error ? 'options-error' : '',
                  'listbox-btn'
                )}
              >
                <span className="block truncate">
                  {selectedValue?.name || 'Select a value'}
                </span>
                <span className="selector-icon-container">
                  {props.loading ? (
                    <Spinner />
                  ) : (
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className={classNames('z-50', 'options-container')}
                >
                  {props.values.map((value) => (
                    <Listbox.Option
                      key={value.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'option'
                        )
                      }
                      value={value}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {value.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'check-container'
                              )}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      {props.touched && props.error && (
        <p className="mt-2 text-sm text-red-600">{props.error}</p>
      )}
    </div>
  )
}

export default Select
