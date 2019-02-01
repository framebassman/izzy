import { Person } from './Person';

const firstNames = [
  "Стас", "Вася", "Маша", "Катя", "Аня",
  "Яна", "Лида", "Вера", "Коля", "Витя",
  "Лёня"
];

function randomPlaceholder(): string {
  return `${randomFirstName()} ${randomSecondName()}.`;
}

function randomFirstName(): string {
  return firstNames[randomNumber(0, firstNames.length - 1)];
}

function randomSecondName(): string {
  return secondNames[randomNumber(0, secondNames.length - 1)];
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const secondNames = [
  "А", "Б", "В", "Г", "Д",
  "Е", "Ё", "Ж", "З", "И",
  "К", "Л", "М", "Н", "О",
  "П", "Р", "С", "Т", "У",
  "Ф", "Х", "Ц", "Ч", "Ш",
  "Щ", "Э", "Ю", "Я"
];

export class RandomPerson extends Person {
  constructor() {
    super(
      randomPlaceholder(),
      0
    );
  }
}
