import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import  TableHead from './TableHead1';
import TableBody  from './TableBody1';

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const ClientTable = () => {
    const classes = useStyles();


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead />
                <TableBody />
            </Table>
        </TableContainer>

    )
}
export default ClientTable;