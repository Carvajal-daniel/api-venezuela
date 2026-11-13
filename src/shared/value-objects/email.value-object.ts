import { InvalidEmailError } from "../Errors/invalid-email.js";

export class Email {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
    Object.freeze(this);
  }

  public static create(value: string): Email {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalized = (value || "").trim().toLowerCase();

    if (!emailRegex.test(normalized)) {
      throw new InvalidEmailError("Invalid email format");
    }
    return new Email(normalized);
  }

  public get value(): string {
    return this._value;
  }
}
