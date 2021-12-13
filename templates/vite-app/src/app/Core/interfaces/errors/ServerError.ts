export class ServerError extends Error {
  constructor() {
    super('Server Error, please contact the BE guys for this')
    this.name = 'ServerError'
  }
}
