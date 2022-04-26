import { Box } from '@mui/material'
import { React, useState } from 'react'
import TimeSlots from './TimeSlots'
import { timeFunctions } from '../Utility/timeFunctions'
import { styled } from '@mui/material'

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

const Company = (props) => {
    const [reservation, setReservation] = useState({})
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
    const [selected, setSelected] = useState({})

    const filterTimeSlotsByDay = (time_slots, day) => {
        return time_slots.filter((time_slot) => {
            const [weekDay] = [
                new Date(time_slot.start_time).toLocaleDateString('en-US', {
                    weekday: 'long',
                }),
            ]
            return weekDay === day
        })
    }

    const onReservation = (val, company, index, day) => {
        if (Object.keys(selected).length === 0) {
            setReservation(val)
            setSelected({ index: index, day: day })
            props.onReservation(val, company)
        } else {
            setSelected({})
            setReservation({})
            props.onReservation({}, company)
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
