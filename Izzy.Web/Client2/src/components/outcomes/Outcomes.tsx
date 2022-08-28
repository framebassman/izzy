import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FormControl from '@mui/material/FormControl';
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
