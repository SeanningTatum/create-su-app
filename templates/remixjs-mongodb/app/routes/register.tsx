import React from 'react';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import {
  ActionFunction,
  Form,
  json,
  useActionData,
  useTransition,
} from 'remix';
import bcrypt from 'bcryptjs';

// import { getUser } from '~/utils/session.server';
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
    console.log(email, password);

    if (typeof email !== 'string' || typeof password !== 'string') {
      return json({ message: 'Form not submitted correctly', code: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        passwordHash,
      },
    });

    if (!newUser) {
      // //   throw new Response('Not Found', { status: 404 });
      return json({ message: 'An error in the server has occurred! Please contact the administrator' }, { status: 500 });
    }

    return createUserSession(newUser.id, '/');
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return { error: { message: 'Email already exists!', code: 409 } };
      }
    }

    return { error };
  }
};

function RegisterRoute() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <div className="max-w-lg mx-auto mt-36">

      {actionData?.error && <Alert variant="error" title={actionData.error.message} />}

      <Form method="post">
        <fieldset
          disabled={transition.state === 'submitting'}
        >
          <Input label="Email" name="email" required type="email" />
          <Input label="Password" name="password" required minLength={6} type="password" />
          <Button type="submit">Register</Button>
        </fieldset>

      </Form>

    </div>
  );
}

export default RegisterRoute;
