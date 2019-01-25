const petrovich = require('petrovich');

export class Transfer {
    protected from: string;
    protected to: string;
    protected money: number;

    constructor(from: string, to: string, money: number) {
        this.from = from;
        this.to = to;
        this.money = money;
    }

    public toString(): string {
        const src = this.nameToRightCase(this.from, 'nominative');
        const dest = this.nameToRightCase(this.to, 'dative');
        return `${src} => ${dest} ${this.money} рублей`;
    }

    private nameToRightCase(origin: string, gcase: string): string {
        const firstName = origin.split(' ')[0];
        const person = { first: firstName, gender: 'male' };
        const withoutFirstName = origin.replace(firstName, '');
        return `${petrovich(person, gcase).first} ${withoutFirstName}`;
    }
}
