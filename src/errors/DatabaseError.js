import ApplicationError from "./ApplicationError";

export default class DataBaseError extends ApplicationError {
  constructor(message = 'Database operation failed') {
    super(message, 500);
  }
}
