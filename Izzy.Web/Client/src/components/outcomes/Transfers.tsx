import React, { Component } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const petrovich = require('petrovich');

function destInPropriateCase(dest: string): string {
  const first = dest.trim().split(' ')[0];
  const result = conjugateToDativeCase(first);
  const withoutFirst = dest.replace(first, '');
  return result + withoutFirst;
}

function conjugateToDativeCase(origin: string): string {
  if (origin === 'Я') {
    return 'Мне';
  }
  if (origin === 'я') {
    return 'мне';
  }
  const person = { gender: 'male', first: origin };
  return petrovich(person, 'dative').first;
}

export class Transfers extends Component<any, any> {
  render() {
    const { src } = this.props;
    let inputs = [];
    let i = 0;
    for (const tr of src) {
      inputs.push(
        <TableRow key={i++}>
          <TableCell data-testid={`from${i}`}>{tr.from}</TableCell>
          <TableCell data-testid={`to${i}`}>{destInPropriateCase(tr.to)}</TableCell>
          <TableCell data-testid={`roubles${i}`}>{tr.roubles}</TableCell>
        </TableRow>
      )
    }
    return (inputs)
  }
}
