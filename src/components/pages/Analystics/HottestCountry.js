import React from 'react';
import { observer, inject } from 'mobx-react';

export const HottestCountry = inject('company')(observer((props) => {

    const { company } = props

    return (
        <div>
            hottest country is : {company.hottestCountry}
        </div>
    )
}));
