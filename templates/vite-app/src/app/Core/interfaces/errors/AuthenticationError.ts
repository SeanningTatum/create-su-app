export class AuthenticationError extends Error {
  constructor() {
    super('Authentication Error, please check if your token is valid')
    this.name = 'AuthenticationError'
  }
}
