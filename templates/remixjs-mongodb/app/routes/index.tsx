import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import {
  Link, LoaderFunction, useLoaderData,
} from 'remix';
// import { getUser } from '~/utils/session.server';
import Button from '~/components/Base/Button';
import { db } from '~/utils/db.server';

// export const loader: LoaderFunction = async ({ request }) => {
//   try {
//     const user = await db.user.create({
//       data: {
//         email: 'seantheurgel@gmail.com',
//         username: 'SeanningTatum',
//       },
//     });

//     if (!user) {
//       // we know we can't render the component
//       // so throw immediately to stop executing code
//       // and show the not found page
//       throw new Response('Not Found', { status: 404 });
//     }

//     return { user };
//   } catch (error) {
//     if (error instanceof PrismaClientKnownRequestError) {
//       if (error.code === 'P2002') {
//         return { error: { message: 'Email already exists!', code: 409 } };
//       }
//     }

//     return { error };
//   }
// };

function IndexRoute() {
  // const { user, error } = useLoaderData();

  return (
    <div>
      <h1>This is Home</h1>
      <Link to="/login">
        <Button>
          Go to Login
        </Button>
      </Link>

    </div>
  );
}

export default IndexRoute;
