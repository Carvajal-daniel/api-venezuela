import { InvalidNameError } from "../Errors/invalid-name.js";


export class NameVO {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
    Object.freeze(this);
  }

  public static create(value: string): NameVO {
    if (!value || value.trim().length < 2) {
      throw new InvalidNameError("Nombre inválido. Debe contener al menos 2 caracteres.");
    }
    return new NameVO(value.trim());
  }

  public get value(): string {
    return this._value;
  }
}
