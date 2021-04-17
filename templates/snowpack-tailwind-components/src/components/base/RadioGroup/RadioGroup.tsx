import React from 'react';

import { RadioGroup as RadioGroupHeadless } from '@headlessui/react';

import classNames from '@app/utils/classNames';

type RadioGroupValue = {
  value: string;
  name: string;
  description: string;
};

export interface RadioGroupProps {
  /**
   * For Accessibility
   */
  label: string;
  /**
   * Should be equal to RadioGroupValue.value
   */
  value: string;
  data: RadioGroupValue[];
  onChange: (value: string) => void;
}

// MARK:- Render
function RadioGroup(props: RadioGroupProps): JSX.Element {
  return (
    <RadioGroupHeadless value={props.value} onChange={props.onChange}>
      <RadioGroupHeadless.Label className="sr-only">
        {props.label}
      </RadioGroupHeadless.Label>
      <div className="bg-white rounded-md -space-y-px">
        {props.data.map((d, ndx) => (
          <RadioGroupHeadless.Option
            key={d.name}
            value={d.value}
            className={({ checked }) =>
              classNames(
                ndx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                ndx === props.data.length - 1
                  ? 'rounded-bl-md rounded-br-md'
                  : '',
                checked
                  ? 'bg-indigo-50 border-indigo-200 z-10'
                  : 'border-gray-200',
                'relative border p-4 flex cursor-pointer focus:outline-none',
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? 'bg-indigo-600 border-transparent'
                      : 'bg-white border-gray-300',
                    active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                    'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center',
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <div className="ml-3 flex flex-col">
                  <RadioGroupHeadless.Label
                    as="span"
                    className={classNames(
                      checked ? 'text-indigo-900' : 'text-gray-900',
                      'block text-sm font-medium',
                    )}
                  >
                    {d.name}
                  </RadioGroupHeadless.Label>

                  <RadioGroupHeadless.Description
                    as="span"
                    className={classNames(
                      checked ? 'text-indigo-700' : 'text-gray-500',
                      'block text-sm',
                    )}
                  >
                    {d.description}
                  </RadioGroupHeadless.Description>
                </div>
              </>
            )}
          </RadioGroupHeadless.Option>
        ))}
      </div>
    </RadioGroupHeadless>
  );
}

export default RadioGroup;
