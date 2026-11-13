import { InvalidCompanyNameError } from "../errors/Invalid-company-name.js";


export class CompanyName {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
    Object.freeze(this);
  }

  static create(name: string): CompanyName {
    if (!name) {
      throw new InvalidCompanyNameError();
    }

    const nameClean = name.trim();

    // Regra de Negócio: Nome comercial não pode ser muito curto (mínimo 3) nem gigante (máximo 100)
    if (nameClean.length < 3 || nameClean.length > 100) {
      throw new InvalidCompanyNameError();
    }

    return new CompanyName(nameClean);
  }

  get value(): string {
    return this._value;
  }
}
