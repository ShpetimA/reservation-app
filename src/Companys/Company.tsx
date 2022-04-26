import { Box } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import TimeSlots from './TimeSlots'
import { timeFunctions } from '../Utility/timeFunctions'
import { styled } from '@mui/material'
import { ReservationType, ReservationsType } from './CompanyItems'

import { timeSlotData } from './Companys'

const TimeSlotsContainer = styled(Box)({
    width: '15rem',
    height: '40rem',
    overflowY: 'scroll',
})

const TimeSlotsReservation = styled(Box)({
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
})

const CompanyName = styled(Box)({
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bac8ff',
    height: '5rem',
})

const CompanyContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
})

type CompanyProps = {
    key: string
    company: timeSlotData
    onReservation: (val : ReservationType, company: string) => void,
    reservations: ReservationsType
}

const Company = (props : CompanyProps) => {
    const [reservation, setReservation] = useState({start_time:'', end_time: ''})
    const { name, time_slots } = props.company
    const weekDays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]
    const [selected, setSelected] = useState({index: -1, day: ''})

    const filterTimeSlotsByDay = (time_slots : Array<ReservationType>, day:string) => {
        return time_slots.filter((time_slot) => {
            const [weekDay] = [
                new Date(time_slot.start_time).toLocaleDateString('en-US', {
                    weekday: 'long',
                }),
            ]
            return weekDay === day
        })
    }

    const onReservation = (val : ReservationType, company: string, index: number, day: string) => {
        if (selected.index === -1) {
            setReservation(val)
            setSelected({ index: index, day: day })
            props.onReservation(val, company)
        } else {
            setSelected({index: -1, day: ''})
            setReservation({start_time: '', end_time:''})
            props.onReservation({start_time: '', end_time:''}, company)
        }
    }

    return (
        <CompanyContainer>
            <CompanyName>
                <h3>{name}</h3>
            </CompanyName>
            {!reservation.start_time ? 'Reservation' : `${timeFunctions.formatTime(reservation.start_time)} - ${timeFunctions.formatTime(reservation.end_time)}`}
            <TimeSlotsContainer>
                {weekDays.map((day) => {
                    return (
                        <TimeSlotsReservation key={day}>
                            <h4>{day}</h4>
                            <TimeSlots
                                time_slots={filterTimeSlotsByDay(time_slots, day)}
                                company={name}
                                onReservation={onReservation}
                                reservations={props.reservations}
                                day={day}
                                selected={selected}
                            />
                        </TimeSlotsReservation>
                    )
                })}
            </TimeSlotsContainer>
        </CompanyContainer>
    )
}

export default Company
