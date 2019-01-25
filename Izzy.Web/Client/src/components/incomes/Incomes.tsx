import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { Persons } from './Persons';

export class Incomes extends Component<any, any> {
  render() {
    const {increment, people, calculate} = this.props;
    return (
      <div>
        <FormControl>
          <h1>Замиокулькас</h1>
          <Button id="add" onClick={increment}>Добавить</Button>
          <Persons people={people}/>
        </FormControl>
        <Button id="calc" color="primary" onClick={calculate}>Рассчитать</Button>
      </div>
    )
  }
}
