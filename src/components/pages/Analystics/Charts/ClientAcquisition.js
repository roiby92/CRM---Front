import React from 'react';
import { observer, inject } from 'mobx-react';

export const ClientAcquisition = inject('company')(observer((props) => {
    const {company} = props
    return (
        <div>
            {company.emailsSent} emails that is sent
        </div>
    )
}));




