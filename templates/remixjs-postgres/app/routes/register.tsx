import React from 'react';
import {
  ActionFunction, Form, json, useActionData, useTransition,
} from 'remix';

import bcrypt from 'bcryptjs';

import { db } from '~/utils/db.server';
import { createUserSession } from '~/utils/session.server';
import { ActionData } from '~/types/ActionData';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const action: ActionFunction = async ({
  request,
}) => {
  const body = await request.formData();

  const username = body.get('username');
  const password = body.get('password');
  const confirmPassword = body.get('confirmPassword');

  // TODO:- Update validation for this probably use Yup
  if (typeof username !== 'string' || typeof password !== 'string' || typeof confirmPassword !== 'string') {
    return json({ message: 'Something is wrong with the fields' }, { status: 400 });
  }

  if (password !== confirmPassword) {
    return json({ message: 'Confirm Password and Passwords do not match!' }, { status: 400 });
  }

  const existingUser = await db.user.findUnique({ where: { username } });

  if (existingUser) {
    return json({ message: 'Username is already taken. Please choose another one' }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = await db.user.create({
    data: {
      username,
      passwordHash,
    },
  });

  if (!newUser) {
    return json({ message: 'An error in the server has occurred! Please contact the administrator' }, { status: 500 });
  }

  return createUserSession(newUser.id, '/');
};

function RegisterRoute() {
  const transition = useTransition();
  const actionData = useActionData<ActionData>();

  return (
    <div className="container max-w-lg mx-auto w-screen h-screen flex items-center justify-center">

      <Form method="post" className="w-full">
        <fieldset
          className="flex-col space-y-2"
          disabled={transition.state === 'submitting'}
        >
          {actionData?.message && <h1 className="text-red-500">{actionData.message}</h1>}

          <Input label="Username" placeholder="Username" name="username" />
          <Input label="Password" placeholder="Password" type="password" name="password" />
          <Input label="Confirm Password" placeholder="Confirm Password" type="password" name="confirmPassword" />
          <div className="text-right">
            <Button type="submit">
              {transition.state === 'submitting' ? 'Loading' : 'Register'}
            </Button>
          </div>
        </fieldset>
      </Form>

    </div>
  );
}

export default RegisterRoute;
