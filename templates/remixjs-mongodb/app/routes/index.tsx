import { User } from '@prisma/client';
import {
  Link, LoaderFunction, useLoaderData,
} from 'remix';
import Button from '~/components/Base/Button';
import { getUser } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  // if (user) {
  //   return redirect('/dashboard/reports/new-report');
  // }

  return { user };
};

function IndexRoute() {
  const { user } = useLoaderData<{ user: User }>();

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="mb-2">This is Home</h1>

      <div className="flex space-x-4">
        <Link to="/login">
          <Button>
            Go to Login
          </Button>
        </Link>

        <Link to="/register">
          <Button>
            Go to Register
          </Button>
        </Link>
      </div>

      <h3>{!user ? 'You are not logged in' : `You are logged in as ${user.email}`}</h3>

      {user && (
        <form method="post" action="/logout">
          <Button type="submit">Logout</Button>
        </form>
      )}

    </div>
  );
}

export default IndexRoute;
