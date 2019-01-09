import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

const placeholders = [
  "Никифор", "Руслан", "Артём", "Натан", "Варфоломей",
  "Евсей", "Мечислав", "Бронислав", "Владимир", "Федор"
]

export class Person extends Component<any, any> {
  randomPlaceholder() {
    const min = 0;
    const max = placeholders.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    return placeholders[index];
  }

  render() {
    const {serial} = this.props;
    const placeholder = this.randomPlaceholder();
    const key = `${serial}_${placeholder}`;
    return (
      <div key={key}>
        <Input placeholder={placeholder}/>
        <Input placeholder="рублей"/>
      </div>
    )
  }
}
