export class ServerError extends Error {
  constructor() {
    super('A server error has occurred');
    this.name = 'ServerError';
  }
}

export class NotAuthorizedError extends Error {
  constructor() {
    super('User is not authorized to view this file!');
    this.name = 'NotAuthorizedError';
  }
}
export class NotFoundError extends Error {
  constructor() {
    super(`Entity is not found!`);
    this.name = 'NotFoundError';
  }
}

export type AllErrors = ServerError | NotAuthorizedError | NotFoundError;
