import React, { MouseEvent } from 'react'

import {
  Checkbox as CheckboxSvg,
  CheckboxChecked,
  CheckboxCheckedDisabled,
  CheckboxDisabled,
  CheckboxIndeterminate,
  CheckboxIndeterminateDisabled,
  CheckboxInvalid
} from '@Core/components/svg'

export interface CheckboxProps {
  isChecked?: boolean
  isIndeterminate?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

// MARK:- Render
function Checkbox(props: CheckboxProps): JSX.Element {
  let svg = <CheckboxSvg />

  if (props.isChecked) {
    svg = <CheckboxChecked />
  }

  if (props.isIndeterminate) {
    svg = <CheckboxIndeterminate />
  }

  if (props.isDisabled) {
    svg = <CheckboxDisabled />
  }

  if (props.isChecked && props.isDisabled) {
    svg = <CheckboxCheckedDisabled />
  }

  if (props.isIndeterminate && props.isDisabled) {
    svg = <CheckboxIndeterminateDisabled />
  }

  if (props.isInvalid) {
    svg = <CheckboxInvalid />
  }

  return (
    <button
      role="checkbox"
      type="button"
      {...props}
      onClick={(e) => {
        if (props.isDisabled) return

        props.onClick(e)
      }}
    >
      {svg}
    </button>
  )
}
// MARK:- Styles

export default Checkbox
