import React from 'react'
import { observer, inject } from 'mobx-react';
import { NewClients } from './NewClients';
import { EmailsSent } from './EmailsSent';
import { HottestCountry } from './HottestCountry';
import { OutstandingClients } from './OutstandingClients';
import { TopEmployees } from './Charts/TopEmployees';
import { SalesByCountry } from './Charts/SalesByCountry';
import { SalesByDate } from './Charts/SalesByDate';

const Analytics = inject('company')(observer((props) => {
    return (
        <div>
            <NewClients />
            <EmailsSent />
            <OutstandingClients />
            <HottestCountry />

            <TopEmployees />
            <SalesByCountry />
            <SalesByDate />
        </div>
    )
}));

export default Analytics;