import ApplicationError from "./ApplicationError";

export default class ValidationError extends ApplicationError {
  constructor(message = 'Invalid input') {
    super(message, 400);
  }
}
