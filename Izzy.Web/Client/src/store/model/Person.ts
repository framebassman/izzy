import { Rouble } from './Rouble';

export class Person {
  protected _name: string;
  protected _roubles: Rouble;

  constructor(name: string, roubles: Rouble) {
    this._name = name;
    this._roubles = roubles;
  }

  public name(): string {
    return this._name;
  }

  public money(): number {
    return this._roubles.value();
  }
}
