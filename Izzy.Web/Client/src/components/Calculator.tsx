import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Calculator/actions';
import { Incomes } from './incomes/Incomes';
import { Outcomes } from './outcomes/Outcomes';
import './Calculator.css';

function Display(props: any) {
  const {increment, people, transfers, calculate} = props;
  if ( transfers.length === 0 ) {
    return <Incomes increment={increment} people={people} calculate={calculate}/>
  } else {
    return <Outcomes transfers={transfers}/>
  }
}

class Calculator extends Component<any, any> {
  handleCalculate = (people: any) => {
    const {calculate} = this.props;
    calculate(people);
  };

  render() {
    const {increment, people, transfers} = this.props;
    return (
      <div className="calculator">
        <Display
          increment={increment}
          people={people}
          transfers={transfers}
          calculate={this.handleCalculate}
        />
      </div>
    );
  }
}

export default connect(
  (state: any) => state.calculator,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Calculator);
