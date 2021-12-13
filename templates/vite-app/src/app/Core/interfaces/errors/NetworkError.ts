export class NetworkError extends Error {
  constructor() {
    super('NetworkError, Please check your internet connection')
    this.name = 'NetworkError'
  }
}
