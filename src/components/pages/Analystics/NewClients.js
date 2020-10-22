import React from 'react';
import { observer, inject } from 'mobx-react';

export const NewClients = inject('company')(observer((props) => {
    const {company} = props
    return (
        <div>
            Clients : 
        {company.newClients}    
        </div>
    )
}));
