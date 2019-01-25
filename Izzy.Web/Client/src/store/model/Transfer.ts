export class Transfer {
    protected from: string;
    protected to: string;
    protected money: number;

    constructor(from: string, to: string, money: number) {
        this.from = from;
        this.to = to;
        this.money = money;
    }
}
