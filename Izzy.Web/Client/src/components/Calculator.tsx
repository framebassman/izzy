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
        <form>
          <h1>Замиокулькас</h1>
          <Button id="add" onClick={increment}>Добавить</Button>
          <Persons quantity={quantity}/>
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
