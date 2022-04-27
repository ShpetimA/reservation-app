import React from 'react'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/material'
import { timeFunctions } from '../Utility/timeFunctions'
import { ReservationsType, ReservationType } from './CompanyItems'

const BootstrapButton = styled(Button)<{selected?: boolean}>(p => ({
    boxShadow: p.selected ? '0 0 0 0.2rem rgba(0,123,255,.5)' : '',
    textTransform: 'none',
    width: '10rem',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffff',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        color: '#fff',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        color: '#fff',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
}))
const ButtonsContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
})

type TimeSlotsProps = {
    time_slots: Array<ReservationType>
    company: string
    onReservation: (val: ReservationType, company: string, index: number, day: string) => void
    reservations: ReservationsType
    day: string
    selected: {
        index: number
        day: string
    }
}

const TimeSlots = (props : TimeSlotsProps) => {
    const {time_slots, selected, reservations, company, day, onReservation} = props

    const checkReservations = (time_slot : ReservationType, reservations : ReservationsType) => {
        if (Object.keys(reservations).length === 0) {
            return false
        }
        for (const reservation in reservations) {
            if (reservation && props.day === new Date(reservations[reservation].start_time).toLocaleDateString('en-US', {weekday: 'long', })) {
                if (checkTimeSlotAvailability(time_slot, reservations[reservation])) {
                    return true
                }
            }
        }
        return false
    }
    
    const checkTimeSlotAvailability = (time_slot : ReservationType, reservation: ReservationType) => {
        const reservationEnd = new Date(reservation.end_time).getHours()
        const reservationStart = new Date(reservation.start_time).getHours()
        const timeEnd = new Date(time_slot.end_time).getHours()
        const timeStart = new Date(time_slot.start_time).getHours()

        return ((timeStart >= reservationStart && timeStart < reservationEnd)
            ||
            (timeEnd <= reservationEnd && timeEnd > reservationStart))
    }

    const handleClick = (value : ReservationType, index: number) => () => {
        onReservation(value, company, index, day)
    }

    return (
        <ButtonsContainer>
            {time_slots.map((time_slot, index) => {
                const isSelected = selected.index === index && selected.day === day
                const isDisabled = checkReservations(time_slot, reservations) && (selected.index !== index || selected.day !== day)
                return (
                    <BootstrapButton
                        selected={isSelected}
                        disabled = {isDisabled}
                        key={index}
                        onClick={handleClick(time_slot, index)}
                    >
                        {timeFunctions.formatTime(time_slot.start_time)}
                        {' -'} {timeFunctions.formatTime(time_slot.end_time)}
                    </BootstrapButton>
                )
            })}
        </ButtonsContainer>
    )
}

export default TimeSlots
