import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Calculator';
import Button from '@material-ui/core/Button';
import { Persons } from './Persons';
import './Calculator.css';

class Calculator extends Component<any, any> {
  render() {
    const {increment, quantity} = this.props;
    return (
      <div className="calculator">
        <h1>Замиокулькас</h1>
        <form>
          <Button id="add" onClick={increment}>Добавить</Button>
          <Persons quantity={quantity}/>
          <Button id="calculate" color="primary">Рассчитать</Button>
        </form>
      </div>
    );
  }
}

export default connect(
  (state: any) => state.calculator,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Calculator);
