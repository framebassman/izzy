import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/Calculator';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { Persons } from './Persons';
import './Calculator.css';

class Calculator extends Component<any, any> {
  render() {
    const {increment, people} = this.props;
    return (
      <div className="calculator">
        <FormControl>
          <h1>Замиокулькас</h1>
          <Button id="add" onClick={increment}>Добавить</Button>
          <Persons people={people}/>
        </FormControl>
        <Button color="primary">Рассчитать</Button>
      </div>
    );
  }
}

export default connect(
  (state: any) => state.calculator,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Calculator);
