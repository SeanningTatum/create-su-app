export class MultipleChoicesError extends Error {
  constructor() {
    super('Some multiple choice errors have occurred');
    this.name = 'MultipleChoicesError';
  }
}
