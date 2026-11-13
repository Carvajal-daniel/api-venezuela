import { InvalidPasswordError } from "../Errors/invalid-password.js";


export class Password {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
    Object.freeze(this); 
  }

  static create(password: string): Password {
   
    if (!password) {
      throw new InvalidPasswordError(
        "A senha não pode ser nula, indefinida ou vazia."
      );
    }

    const passwordClean = password.trim();

 
    if (passwordClean.length < 6 || passwordClean.length > 15) {
      throw new InvalidPasswordError(
         "A senha debe tener entre 6 y 15 caracteres."
      );
    }


    if (!this.hasSpecialCharacter(passwordClean)) {
      throw new InvalidPasswordError(
        "La contraseña debe contener al menos un carácter especial (ej: @, #, $, !, %, *, ?, &)."
      );
    }


    return new Password(passwordClean);
  }


  private static hasSpecialCharacter(password: string): boolean {
    const regex = /[!@#$%^&*(),.?":{}|<>_+\-=\[\]\\\/`~]/;
    return regex.test(password);
  }

  get value(): string {
    return this._value;
  }
}
