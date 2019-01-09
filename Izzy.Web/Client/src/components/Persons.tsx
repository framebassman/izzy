import React, { Component } from 'react';
import { Person } from './Person';

export class Persons extends Component<any, any> {
  render() {
    const { quantity } = this.props;
    let inputs = [];
    for (let i = 0; i < quantity; i++) {
      inputs.push(
        <Person serial={i}/>
      );
    }
    return inputs;
  }
}
