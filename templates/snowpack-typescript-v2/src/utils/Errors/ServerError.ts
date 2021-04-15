export class ServerError extends Error {
  constructor() {
    super('A server error has occurred');
    this.name = 'ServerError';
  }
}

export default ServerError;
