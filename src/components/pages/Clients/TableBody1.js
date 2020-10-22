import React, { useState } from 'react'
import { observer, inject } from 'mobx-react';
import TableBody from '@material-ui/core/TableBody';
import ClientRow from './ClientRow';
import UpdateClientPop from './UpdateClientPop';
import company from '../../../stores/Company';

const TableBody1 = inject('company')(observer((props) => {

    const { company } = props;
    const [client, setClient] = useState('')

    const [open, setOpen] = useState(false);

    const handleClickOpen = (clientName) => {
        const clientfound = company.clients.find(c => c.name === clientName)
        setClient(clientfound)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    
    return (
        <TableBody>
            {company.clients.map(c => <ClientRow key={c.id} client={c} handleClickOpen={handleClickOpen} />)}
            <UpdateClientPop open={open} handleClose={handleClose} client={client} />
        </TableBody>
    )
}));
export default TableBody1;