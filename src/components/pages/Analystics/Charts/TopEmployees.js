import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';

export const TopEmployees = inject('company')(observer((props) => {
    const { company } = props
    const [topOwners, setOwners] = useState([])

    useEffect(() => {
        const showTop = async () => {
            const top = await company.topOwners()
            setOwners(top)
        }
        showTop()
    }, [])

    return (
        <div>
            ______
            top :{topOwners.map(t=><div> {t.name} : {t.clientNumber} </div>)}
            ______
        </div>
    )
}))