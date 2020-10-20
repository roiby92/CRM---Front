import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const TableBody1 = inject('company')(observer((props) => {

    return (
        <TableBody>
            {props.company.clients.map(c => 
                <StyledTableRow key={c.id}>
                    <StyledTableCell align="left">{c.name}</StyledTableCell>
                    <StyledTableCell align="left">{c.country}</StyledTableCell>
                    <StyledTableCell align="left">{c.firstContact}</StyledTableCell>
                    <StyledTableCell align="left">{c.emailType}</StyledTableCell>
                    <StyledTableCell align="left">{c.sold}</StyledTableCell>
                    <StyledTableCell align="left">{c.owner}</StyledTableCell>
                </StyledTableRow>
            )}
        </TableBody>
    )
}));
export default TableBody1;