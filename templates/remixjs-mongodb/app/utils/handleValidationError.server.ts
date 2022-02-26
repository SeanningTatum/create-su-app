import { json } from 'remix';
import { ValidationError } from 'yup';
import { ActionData } from '~/types/ActionData';

async function handleValidationError<T>(error: ValidationError) {
  const fieldErrors = {} as Partial<Record<keyof T, string>>;

  error.inner.forEach((validationError) => {
    const key = validationError.path as keyof T;
    fieldErrors[key] = validationError.message;
  });

  return json({ code: 400, message: 'Validation Error', fieldErrors } as ActionData<T>);
}

export default handleValidationError;
