import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const petrovich = require('petrovich');

export class Transfers extends Component<any, any> {
  render() {
    const { src } = this.props;
    let inputs = [];
    let i = 0;
    for (const tr of src) {
      inputs.push(
        <TableRow key={i++}>
          <TableCell>{tr.from}</TableCell>
          <TableCell>{tr.to}</TableCell>
          <TableCell>{tr.money}</TableCell>
        </TableRow>
      )
    }
    return (inputs)
  }
}
