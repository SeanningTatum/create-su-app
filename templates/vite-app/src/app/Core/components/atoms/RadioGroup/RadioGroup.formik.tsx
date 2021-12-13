import React from 'react'

import { useField } from 'formik'

import RadioGroup, { RadioGroupProps } from './RadioGroup'

export type FormikRadioGroupProps = Omit<
  RadioGroupProps,
  'value' | 'onChange'
> & {
  name: string
}

function RadioGroupFormik({
  name,
  ...props
}: FormikRadioGroupProps): JSX.Element {
  const [field, meta, helpers] = useField(name)

  return (
    <RadioGroup
      {...props}
      {...field}
      onChange={helpers.setValue}
      error={meta.error}
      touched={meta.touched}
    />
  )
}

export default RadioGroupFormik
