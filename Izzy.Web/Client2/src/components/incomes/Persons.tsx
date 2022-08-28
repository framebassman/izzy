import React, { Component } from 'react';
import { Person } from './Person';

export class Persons extends Component<any, any> {
  render() {
    const { people } = this.props;
    let inputs = [];
    let i = 0;
    for (const man of people) {
      inputs.push(
        <Person key={i++} man={man}/>
      );
    }
    return inputs;
  }
}
