import React from 'react';
import {
  ActionFunction,
  Form,
  json,
  useActionData,
  useTransition,
} from 'remix';
import bcrypt from 'bcryptjs';

import Button from '~/components/Base/Button';
import Input from '~/components/Base/Input';
import { db } from '~/utils/db.server';
import Alert from '~/components/Base/Alert';
import { createUserSession } from '~/utils/session.server';

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const email = formData.get('email');
    const password = formData.get('password');

    if (typeof email !== 'string' || typeof password !== 'string') {
      return json({ message: 'Form not submitted correctly', code: 400 });
    }

    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return json({ error: { message: 'Email does not exist in the database!', code: 404 } }, { status: 404 });
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      user.passwordHash,
    );

    if (!isCorrectPassword) {
      return json({ message: 'Password is incorrect', code: 401 }, { status: 401 });
    }

    return createUserSession(user.id, '/');
  } catch (error) {
    return { error };
  }
};

function LoginRoute() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <div className="max-w-lg mx-auto mt-36">

      {actionData?.error && (
        <>
          {JSON.stringify(actionData.error)}
          <Alert variant="error" title={actionData.error?.message} />
        </>
      )}

      <Form method="post">
        <fieldset
          disabled={transition.state === 'submitting'}
        >
          <Input label="Email" name="email" required type="email" />
          <Input label="Password" name="password" required minLength={6} type="password" />
          <Button type="submit">{transition.state === 'submitting' ? 'Logging In...' : 'Login'}</Button>
        </fieldset>

      </Form>

    </div>
  );
}

export default LoginRoute;
