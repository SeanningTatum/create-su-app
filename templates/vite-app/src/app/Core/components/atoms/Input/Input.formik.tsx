import React from 'react'

import { useField } from 'formik'

import Input, { InputProps } from './Input'

export type FormikInputProps = InputProps & {
  name: string
}

function InputFormik({ name, ...props }: FormikInputProps): JSX.Element {
  const [field, meta] = useField(name)

  return (
    <Input {...props} {...field} error={meta.error} touched={meta.touched} />
  )
}

export default InputFormik
