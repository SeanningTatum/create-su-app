export class ValidationError extends Error {
  constructor() {
    super('Validation Error, please check if the form you submitted is valid')
    this.name = 'ValidationError'
  }
}
