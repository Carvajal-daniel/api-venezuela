import { AppError } from "../../../../shared/Errors/app-errors.js";

export class CompanyEmailAlreadyInError extends AppError {
  constructor() {
    super('Este e-mail ya esta registrados.');
  }
}