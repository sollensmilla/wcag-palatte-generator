import ApplicationError from "./ApplicationError.js";

export default class DataBaseError extends ApplicationError {
  constructor(message = 'Database operation failed') {
    super(message, 500);
  }
}
