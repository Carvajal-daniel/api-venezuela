// src/modules/Company/domain/value-objects/password.vo.ts
import { InvalidPasswordError } from "../errors/invalid-password.js";

export class Password {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
    Object.freeze(this); // Garante a imutabilidade real do valor no domínio
  }

  static create(password: string): Password {
    // 1. Defesa inicial: se a senha for nula, indefinida ou vazia
    if (!password) {
      throw new InvalidPasswordError(
        "A senha não pode ser nula, indefinida ou vazia."
      );
    }

    const passwordClean = password.trim();

    // 2. Validação baseada estritamente nos limites da UI do AppBarber (6 a 15 caracteres)
    if (passwordClean.length < 6 || passwordClean.length > 15) {
      throw new InvalidPasswordError(
         "A senha debe tener entre 6 y 15 caracteres."
      );
    }

    // 3. 🌟 NOVA VALIDAÇÃO: Exige pelo menos um caractere especial
    if (!this.hasSpecialCharacter(passwordClean)) {
      throw new InvalidPasswordError(
        "La contraseña debe contener al menos un carácter especial (ej: @, #, $, !, %, *, ?, &)."
      );
    }

    // 4. Retorna a instância protegida com o valor higienizado
    return new Password(passwordClean);
  }

  // Método estático privado para isolar a regra do Regex
  private static hasSpecialCharacter(password: string): boolean {
    const regex = /[!@#$%^&*(),.?":{}|<>_+\-=\[\]\\\/`~]/;
    return regex.test(password);
  }

  get value(): string {
    return this._value;
  }
}
