import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const TableHead1 = () => {
    const titles = ['Name', 'Surname', 'Country', 'First Contact', 'Email', 'Sold', 'Owner']
    return (
        <TableHead>
            <TableRow>
                {titles.map(t => <StyledTableCell key={t} align="left">{t}</StyledTableCell>)}
            </TableRow>
        </TableHead>
    )
}

export default TableHead1;