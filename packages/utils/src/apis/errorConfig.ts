export class BaseError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'BaseError';
    this.status = status;
  }
}
