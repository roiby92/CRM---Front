import React, { Fragment, useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';


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

const ClientRow = inject('company')(observer((props) => {

    const { company, client } = props
    const [first, surName] = client.name.split(" ")


    const changeSold = (id) => {
        company.changeSold(id)
    }

    const handleClickOpen = () => {
        props.handleClickOpen(client.name)
    }

    return (
        <StyledTableRow onClick={handleClickOpen}>
            <StyledTableCell align="left">{first}</StyledTableCell>
            <StyledTableCell align="left">{surName}</StyledTableCell>
            <StyledTableCell align="left">{client.country}</StyledTableCell>
            <StyledTableCell align="left">{client.firstContact}</StyledTableCell>
            <StyledTableCell align="left">{client.emailType}</StyledTableCell>
            <StyledTableCell align="left">
                <Checkbox
                    checked={client.sold}
                    onChange={() => changeSold(client.id)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </StyledTableCell>
            <StyledTableCell align="left">{client.owner}</StyledTableCell>
        </StyledTableRow >
    )
}))
export default ClientRow;