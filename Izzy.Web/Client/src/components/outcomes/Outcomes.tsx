import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import {Transfers} from './Transfers';

export class Outcomes extends Component<any, any> {
  render() {
    const { transfers } = this.props;
    return (
      <FormControl>
        <h1>Замиокулькас</h1>
        {/* <Button id="more" color="primary" onClick={cancel}>Ещё</Button> */}
        <Table id="transfers">
          <TableHead>
            <TableRow>
              <TableCell>Кто</TableCell>
              <TableCell>Кому</TableCell>
              <TableCell>₽</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Transfers src={transfers}/>
          </TableBody>
        </Table>
      </FormControl>
    )
  }
}
