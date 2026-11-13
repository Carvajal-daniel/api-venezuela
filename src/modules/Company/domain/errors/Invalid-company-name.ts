import { AppError } from "../../../../shared/Errors/app-errors.js";


export class InvalidCompanyNameError extends AppError {
  constructor() {
    super("O nome da empresa é inválido. Deve conter entre 3 e 100 caracteres.");
    this.name = "InvalidCompanyNameError";
  }
}
