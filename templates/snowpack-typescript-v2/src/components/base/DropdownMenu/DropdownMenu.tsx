import React, { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Listbox } from '@headlessui/react';

import { ChevronDown } from '@app/components/svg';

interface DropdownMenuItem {
  id: string | number;
  name: string;
  disabled: boolean;
}

export interface DropdownMenuProps {
  values: DropdownMenuItem[];
  value?: string | number;
  onChange: (id: string | number) => void;
  isDisabled?: boolean;
}

// MARK:- Render

function DropdownMenu(props: DropdownMenuProps): JSX.Element {
  const theme = useTheme();

  const [selectedValue, setselectedValue] = useState(
    props.values.find((val) => val.id === props.value) || props.values[0],
  );

  function onChange(item: DropdownMenuItem): void {
    setselectedValue(item);
    props.onChange(item.id);
  }

  function chevronColor(open: boolean, disabled: boolean): string {
    if (disabled) {
      return theme.colors.neutral.N70;
    }

    return !open ? theme.colors.neutral.N500 : theme.colors.neutral.N0;
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
      {({ open, disabled }) => (
        <>
          <SelectButton open={open} disabled={disabled}>
            <div className="flex">
              {selectedValue.name}
              <div className="ml-1">
                <ChevronDown fill={chevronColor(open, disabled)} />
              </div>
            </div>
          </SelectButton>

          <OptionsContainer>
            {props.values.map((value) => (
              <Option key={value.id} value={value} disabled={value.disabled}>
                {value.name}
              </Option>
            ))}
          </OptionsContainer>
        </>
      )}
    </Listbox>
  );
}

// MARK:- Styles

export const SelectButton = styled(Listbox.Button)<{
  open: boolean;
  disabled: boolean;
}>`
  padding: 6px 12px;
  border-radius: 3px;
  background: ${({ theme, open }) =>
    open ? theme.colors.neutral.N700 : theme.colors.neutral.N20A};
  font-size: 14px;
  align-items: center;
  display: flex;

  color: ${({ theme, open }) =>
    open ? theme.colors.neutral.N0 : theme.colors.neutral.N500};

  color: ${({ disabled, theme }) => (disabled ? theme.colors.neutral.N70 : '')};
`;

export const Option = styled(Listbox.Option)`
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.N40};
  }

  &:first-child {
    margin-top: 8px;
  }
`;

export const OptionsContainer = styled(Listbox.Options)`
  background-color: ${({ theme }) => theme.colors.neutral.N0};

  box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2),
    0px 0px 1px rgba(9, 30, 66, 0.31);
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;

export default DropdownMenu;
