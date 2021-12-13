export class NotFoundError extends Error {
  constructor() {
    super('Not Found Error, Entity does not exist.')
    this.name = 'NotFoundError'
  }
}
