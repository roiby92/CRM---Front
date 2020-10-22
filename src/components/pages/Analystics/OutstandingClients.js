import React from 'react';
import { observer, inject } from 'mobx-react';

export const OutstandingClients = inject('company')(observer((props) => {
    const {company} = props
    return (
        <div>
            {company.outstandingClients} outstanding Clients
        </div>
    )
}));
