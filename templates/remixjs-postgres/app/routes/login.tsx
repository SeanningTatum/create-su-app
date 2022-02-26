import {
  ActionFunction, Form, json, useActionData, useTransition,
} from 'remix';
import bcrypt from 'bcryptjs';
import { createUserSession } from '~/utils/session.server';
import { db } from '~/utils/db.server';
import { ActionData } from '~/types/ActionData';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const action: ActionFunction = async ({
  request,
}) => {
  const body = await request.formData();

  const username = body.get('username');
  const password = body.get('password');

  const returnValue: ActionData = {
    message: '',
  };

  // Validation
  if (typeof username !== 'string' || typeof password !== 'string') {
    returnValue.message = 'Something is wrong with the field';
    return json(returnValue, { status: 400 });
  }

  const user = await db.user.findUnique({
    where: { username },
  });

  if (!user) {
    returnValue.message = 'User does not exist';
    return json(returnValue, { status: 404 });
  }

  const isCorrectPassword = await bcrypt.compare(
    password,
    user.passwordHash,
  );

  if (!isCorrectPassword) {
    returnValue.message = 'Password is incorrect';
    return json(returnValue, { status: 401 });
  }

  return createUserSession(user.id, '/dashboard');
};

function LoginRoute() {
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

          <Input label="Username" placeholder="kody" name="username" />
          <Input label="Password" placeholder="Password" type="password" name="password" />
          <div className="text-right">
            <Button type="submit">
              Login
            </Button>
          </div>
        </fieldset>
      </Form>

    </div>
  );
}

export default LoginRoute;
