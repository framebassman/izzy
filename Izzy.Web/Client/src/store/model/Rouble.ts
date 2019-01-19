export class Rouble {
  private _coin: number;

  constructor(coin: number) {
    this._coin = coin;
  }

  public value(): number {
    return this._coin;
  }
}
