import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const petrovich = require('petrovich');

export class Transfers extends Component<any, any> {
  destInPropriateCase(dest: string): string {
    const first = dest.trim().split(' ')[0];
    const person = { gender: 'male', first };
    const result = petrovich(person, 'dative').first;
    const withoutFirst = dest.replace(first, '');
    return result + withoutFirst;
  }

  render() {
    const { src } = this.props;
    let inputs = [];
    let i = 0;
    for (const tr of src) {
      inputs.push(
        <TableRow key={i++}>
          <TableCell>{tr.from}</TableCell>
          <TableCell>{this.destInPropriateCase(tr.to)}</TableCell>
          <TableCell>{tr.roubles}</TableCell>
        </TableRow>
      )
    }
    return (inputs)
  }
}
