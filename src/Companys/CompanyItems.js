import React from 'react'
import Company from './Company'
import { Box } from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material'

const CompanysContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#bac8ff',
    boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, .2);',
})

const CompanyItems = (props) => {
    const { companys } = props
    const [reservations, setReservations] = useState({})

    const onReserve = (val, comp) => {
        setReservations({ ...reservations, [comp]: val })
    }

    return (
        <CompanysContainer>
            {companys.map((company) => {
                return (
                    <Company
                        key={company.name}
                        company={company}
                        onReservation={onReserve}
                        reservations={reservations}
                    />
                )
            })}
        </CompanysContainer>
    )
}

export default CompanyItems
