import { User } from '@prisma/client';
import { Link, LoaderFunction, useLoaderData } from 'remix';
import Button from '~/components/Button';
import { getUser } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  return { user };
};

function IndexRoute() {
  const { user } = useLoaderData<{user?: User}>();

  return (
    <div>
      <h1>This is Home</h1>

      <Link to="/login">
        <Button>
          Go to Login
        </Button>
      </Link>

      <h3>{!user ? 'You are not logged in' : `You are logged in as ${user.username}` }</h3>

      {user && (
        <form method="post" action="/logout">
          <Button type="submit">Logout</Button>
        </form>
      )}
    </div>
  );
}

export default IndexRoute;
