import React from 'react'

import { useField } from 'formik'

import Select, { SelectProps } from './Select'

export interface SelectFormikProps extends Omit<SelectProps, 'onChange'> {
  name: string
}

function SelectFormik({ name, ...props }: SelectFormikProps): JSX.Element {
  const [_, meta, helpers] = useField(name)

  return (
    <>
      <Select
        {...props}
        onChange={helpers.setValue}
        value={meta.value}
        error={props.error || meta.error}
        touched={props.touched || meta.touched}
      />
    </>
  )
}

export default SelectFormik
