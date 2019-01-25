import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Calculator/actions';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { Persons } from './Expenditures/Persons';
import './Calculator.css';

class Calculator extends Component<any, any> {
  handleCalculate = () => {
    const {calculate, people} = this.props;
    calculate(people);
  };

  render() {
    const {increment, people, transfers} = this.props;
    return (
      <div className="calculator">
        <FormControl>
          <h1>Замиокулькас</h1>
          <Button id="add" onClick={increment}>Добавить</Button>
          <Persons people={people}/>
        </FormControl>
        <Button color="primary" onClick={this.handleCalculate}>Рассчитать</Button>
      </div>
    );
  }
}

export default connect(
  (state: any) => state.calculator,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Calculator);
