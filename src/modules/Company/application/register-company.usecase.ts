import { NameVO } from '../../../shared/value-objects/name.value-object.js';
import { CompanyEntity, type CompanyProps } from '../domain/entities/company.entity.js';
import type { CompaniesRepository } from '../domain/repository/companies.repository.interface.js';
import { CompanyEmail } from '../domain/value-objects/email.vo.js';
import { Password } from '../../../shared/value-objects/password.vo.js';
import { CompanyEmailAlreadyInError } from '../domain/errors/email-already-exyst.js';
import type { RegisterCompanyInputDTO, RegisterCompanyOutputDTO } from './company-dto.js';
import type { PasswordHasher } from './ports/password-hasher.js';
import * as crypto from 'crypto';

export class RegisterCompanyUseCase {
  constructor(
    private readonly companiesRepository: CompaniesRepository,
    private readonly passwordHasher: PasswordHasher,
  ) {}

  async execute(data: RegisterCompanyInputDTO): Promise<RegisterCompanyOutputDTO> {
    
    const companyNameVO = NameVO.create(data.companyName);
    const nomeVO = NameVO.create(data.name);
    const emailVO = CompanyEmail.create(data.email);
    const passwordVO = Password.create(data.password);

   
    const companyProps: CompanyProps = {
      id: crypto.randomUUID(),
      companyName: companyNameVO,
      name: nomeVO,
      phone: data.phone,
      email: emailVO,
      password: passwordVO,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const company = CompanyEntity.create(companyProps);

    // 3. Regra de negócio: Checa se o e-mail já existe
    const emailExists = await this.companiesRepository.existsByEmail(emailVO);
    if (emailExists) {
      throw new CompanyEmailAlreadyInError();
    }

    const passwordHash = await this.passwordHasher.hash(passwordVO.value);

    await this.companiesRepository.save(company, passwordHash);

    
    return {
      id: company.id,
      companyName: company.companyName,
      email: company.email
    };
  }
}
