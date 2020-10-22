import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';

export const SalesByDate = inject('company')(observer((props) => {
    const {company} = props

    const [salesByDate, setsalesByDate] = useState([])

    useEffect(() => {
        const showSalesByDate = async () => {
            const sales = await company.salesByDate()
            setsalesByDate(sales)
        }
        showSalesByDate()
    }, [])
    
    return (
        <div>
            ______
            top :{salesByDate.map(s=><div> {s.day} : {s.numOfSales} </div>)}
            ______
        </div>
    )
}));


