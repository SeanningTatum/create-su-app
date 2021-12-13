import React from 'react'

import { useField } from 'formik'

import TextArea, { TextAreaProps } from './TextArea'

export type FormikTextAreaProps = TextAreaProps & {
  name: string
}

function TextAreaFormik({ name, ...props }: FormikTextAreaProps): JSX.Element {
  const [field, meta] = useField(name)

  return (
    <TextArea {...props} {...field} error={meta.error} touched={meta.touched} />
  )
}

export default TextAreaFormik
