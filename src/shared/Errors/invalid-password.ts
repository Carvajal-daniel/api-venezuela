import { AppError } from "./app-errors.js";


export class InvalidPasswordError extends AppError {
  constructor(message: string) {
    super(message)
  }
}