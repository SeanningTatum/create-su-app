import NotAuthorizedError from './NotAuthorizedError';
import NotFoundError from './NotFoundError';
import ServerError from './ServerError';

export type AllErrors = ServerError | NotAuthorizedError | NotFoundError;

export default {
  NotAuthorizedError,
  NotFoundError,
  ServerError,
};
