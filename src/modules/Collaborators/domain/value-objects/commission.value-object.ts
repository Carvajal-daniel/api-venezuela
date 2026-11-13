export class Comission {
  private readonly _value: number;

  private constructor(value: number){
    this._value = value;
    Object.freeze(this);
  }

  static create(value: number): Comission{
    if(value < 0 || value > 100){
      throw new Error("Porcentaje de comissão inválida. Deve estar entre 0 e 100.");
    }
    return new Comission(value);
  }

  get value(): number {
    return this._value;
  }

}