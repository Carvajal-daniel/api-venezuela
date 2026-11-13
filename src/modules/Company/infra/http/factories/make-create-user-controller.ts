import { RegisterCompanyUseCase } from "../../../application/register-company.usecase.js";
import { CompanyRepositoryDB } from "../../database/repositories/companies-repository.impl.js";
import { BcryptPasswordHasher } from "../../cryptography/bcrypt-password-hasher.js";
import { RegisterCompanyController } from "../controllers/register-company.controller.js";

export function MakeCreateController(){
  const repo = new CompanyRepositoryDB()
  const passwordHasher = new BcryptPasswordHasher()
  const useCase = new RegisterCompanyUseCase(repo, passwordHasher)

  return new RegisterCompanyController(useCase)
}