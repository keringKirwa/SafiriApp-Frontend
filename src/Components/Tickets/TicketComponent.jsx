import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black,
        fontSize: 17,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

 const tableData = [
        { phone: "07636454646", from: "nairobi", to: "kitale", date: "10/2/2020", ticketId: '0001', dayBooked:"22/2/2020"},
        { phone: "076364544546", from: "Kitale", to: "Nakuru", date: "18/6/2020", ticketId: '34526',dayBooked:"22/2/2020" }
    ]

export const TableComponent =({ticketsArray})=> {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead id='tableHead'>
          <TableRow>
            <StyledTableCell>Ticket_Id</StyledTableCell>
            <StyledTableCell align="left">Paid_Via</StyledTableCell>
            <StyledTableCell align="left">From</StyledTableCell>
            <StyledTableCell align="left">Destination</StyledTableCell>
            <StyledTableCell align="left">Date Of Travel</StyledTableCell>
            <StyledTableCell align="left">Day Booked</StyledTableCell>
            <StyledTableCell align="left">Cancel</StyledTableCell>
          </TableRow>
              </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.ticketId}>
              <StyledTableCell component="th" scope="row">
                {row.ticketId}
                  </StyledTableCell>
                <StyledTableCell align="left">{row.phone}</StyledTableCell>
              <StyledTableCell align="left">{row.from}</StyledTableCell>
              <StyledTableCell align="left">{row.to}</StyledTableCell>

                  <StyledTableCell align="left">{row.date}</StyledTableCell>
                  <StyledTableCell align="left">{row.dayBooked}</StyledTableCell>
                  <StyledTableCell align="left"><Button color='error'variant='outlined'>Cancel</Button></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}