import { AppError } from "./app-errors.js";


export class InvalidNameError extends AppError {
   constructor(message: string) {
    super(message)
  }
}