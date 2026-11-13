export class Phone {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
    Object.freeze(this);
  }

  public static create(value: string): Phone {
    const cleanPhone = (value || "").replace(/\s+/g, "");

    if (cleanPhone.length < 10) {
      throw new Error("O número de telefone informado é inválido.");
    }
    return new Phone(cleanPhone);
  }

  public get value(): string {
    return this._value;
  }
}
