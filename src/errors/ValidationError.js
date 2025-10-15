import ApplicationError from "./ApplicationError.js";

export default class ValidationError extends ApplicationError {
  constructor(message = 'Invalid input') {
    super(message, 400);
  }
}
