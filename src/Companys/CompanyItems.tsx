import React from 'react'
import Company from './Company'
import { Box } from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material'
import { timeSlotData } from './Companys'

type CompanyItemsProps = {
    companys: Array<timeSlotData>
}

export type ReservationType = {
    start_time: string
    end_time: string
}

export type ReservationsType = {
    [key: string]: ReservationType
}

const CompanysContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#bac8ff',
    boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, .2);',
})

const CompanyItems = ({companys} : CompanyItemsProps) => {
    const [reservations, setReservations] = useState<ReservationsType>({})

    const onReserve = (val : ReservationType, comp : string) : void => {
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
