export class NotAuthorizedError extends Error {
  constructor() {
    super('User is not authorized to view this file!');
    this.name = 'NotAuthorizedError';
  }
}

export default NotAuthorizedError;
