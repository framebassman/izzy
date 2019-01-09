import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Calculator';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const placeholders = [
  "Никифор", "Руслан", "Артём", "Натан", "Варфоломей",
  "Евсей", "Мечислав", "Бронислав", "Владимир", "Федор"
]

class Calculator extends Component<any, any> {
  renderInputs() {
    const person = this.props.person;
    let inputs = [];
    for (let i = 0; i < person; i++) {
      const placeholder = this.randomPlaceholder();
      const key = `${i}_${placeholder}`;
      inputs.push(
        <div key={key}>
          <Input placeholder={placeholder}/>
          <Input placeholder="рублей"/>
        </div>
      );
    }
    return inputs;
  }

  randomPlaceholder() {
    const min = 0;
    const max = placeholders.length;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    return placeholders[index];
  }
  
  render() {
    const {increment} = this.props;
    return (
      <div>
        <form>
          <h1>Калькулятор</h1>
          <Button onClick={increment}>Добавить</Button>
          {this.renderInputs()}
        </form>
        <Button color="primary">Рассчитать</Button>
      </div>
    );
  }
}

export default connect(
  (state: any) => state.calculator,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Calculator);
