import React from 'react'
import { observer, inject } from 'mobx-react';
import { UpdateClient } from './UpdateClient';
import { AddClient } from './AddClient';


const Actions = inject('company')(observer(() => {
    return (
        <div>
            <UpdateClient />
            <AddClient/>
        </div>
    )
}));

export default Actions;