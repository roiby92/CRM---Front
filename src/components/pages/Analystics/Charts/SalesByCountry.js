import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';

export const SalesByCountry = inject('company')(observer((props) => {
    const {company} = props
    const [topCountries, setCountries] = useState([])

    useEffect(() => {
        const showTop = async () => {
            const top = await company.salesByCountry()
            setCountries(top)
        }
        showTop()
    }, [])

    return (
        <div>
            ______
            top :{topCountries.map(c=><div> {c.countyName} : {c.clientsPerCountry} </div>)}
            ______
        </div>
    )
}));

