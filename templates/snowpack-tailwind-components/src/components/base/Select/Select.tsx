import React, { Fragment, useEffect, useState } from 'react';
import './Select.css';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline';

import classNames from '@app/utils/classNames';

interface DropdownMenuItem {
  id: string | number;
  name: string;
  disabled: boolean;
}

export interface DropdownMenuProps {
  label: string;
  values: DropdownMenuItem[];
  value?: string | number;
  onChange: (id: string | number) => void;
  isDisabled?: boolean;
}

// MARK:- Render

function DropdownMenu(props: DropdownMenuProps): JSX.Element {
  const [selectedValue, setselectedValue] = useState(
    props.values.find((val) => val.id === props.value) || props.values[0],
  );

  function onChange(item: DropdownMenuItem): void {
    setselectedValue(item);
    props.onChange(item.id);
  }

  useEffect(() => {
    if (props.value) {
      setselectedValue(
        props.values.find((val) => val.id === props.value) || props.values[0],
      );
    }
  }, [props.value, props.values]);

  return (
    <Listbox
      value={selectedValue}
      onChange={onChange}
      disabled={props.isDisabled}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="listbox-label">{props.label}</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="listbox-btn">
              <span className="block truncate">{selectedValue.name}</span>
              <span className="selector-icon-container">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options static className="options-container">
                {props.values.map((value) => (
                  <Listbox.Option
                    key={value.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'option',
                      )
                    }
                    value={value}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          )}
                        >
                          {value.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'check-container',
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
  );
}

// MARK:- Styles

export default DropdownMenu;
