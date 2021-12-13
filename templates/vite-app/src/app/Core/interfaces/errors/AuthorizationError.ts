export class AuthorizationError extends Error {
  constructor() {
    super('Authentication Error, please check if your token is valid')
    this.name = 'Authorization'
  }
}
