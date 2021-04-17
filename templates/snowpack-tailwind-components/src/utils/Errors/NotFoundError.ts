export class NotFoundError extends Error {
  constructor() {
    super(`Entity is not found!`);
    this.name = 'NotFoundError';
  }
}

export default NotFoundError;
