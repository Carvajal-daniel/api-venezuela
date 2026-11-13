import { AppError } from "./app-errors.js";


export class InvalidEmailError extends AppError{
  constructor(message: string) {
    super(message)
  }
}