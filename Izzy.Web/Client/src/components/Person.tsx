import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import './Person.css';

const firstNames = [
  "Стас", "Вася", "Маша", "Катя", "Аня",
  "Яна", "Лида", "Вера", "Коля", "Витя",
  "Лёня"
];

const secondNames = [
  "А", "Б", "В", "Г", "Д",
  "Е", "Ё", "Ж", "З", "И",
  "К", "Л", "М", "Н", "О",
  "П", "Р", "С", "Т", "У",
  "Ф", "Х", "Ц", "Ч", "Ш",
  "Щ", "Э", "Ю", "Я"
];

export class Person extends Component<any, any> {
  randomPlaceholder(): string {
    return `${this.randomFirstName()} ${this.randomSecondName()}.`;
  }

  randomFirstName(): string {
    return firstNames[this.randomNumber(0, firstNames.length - 1)];
  }
  
  randomSecondName(): string {
    return secondNames[this.randomNumber(0, secondNames.length - 1)];
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const {serial} = this.props;
    const placeholder = this.randomPlaceholder();
    const id = `person_${serial + 1}`
    return (
      <div className="person" id={id}>
        <Input className="person__input" placeholder={placeholder}/>
        <Input className="person__input" placeholder="рублей"/>
      </div>
    )
  }
}
