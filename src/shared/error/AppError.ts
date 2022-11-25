export class AppError {
  public readonly message: string
  public readonly statusCode: number

  // eslint-disable-next-line space-before-function-paren
  constructor(message: string, status = 400) {
    this.message = message
    this.statusCode = status
  }
}
