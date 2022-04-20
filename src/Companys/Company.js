import { Box } from '@mui/material'
import { React, useState } from 'react'
import TimeSlots from './TimeSlots'
import { timeFunctions } from '../Utility/timeFunctions'

const container = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
}

const timeSlotsContainer = {
    width: '15rem',
    height: '40rem',
    overflowY: 'scroll',
}

const timeSlots = {
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
}

const companyName = {
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bac8ff',
    height: '5rem',
}

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
        <Box sx={container}>
            <Box sx={companyName}>
                <h3>{name}</h3>
            </Box>
            <Box>
                {!reservation.start_time
                    ? 'Reservation'
                    : `${timeFunctions.formatTime(
                        reservation.start_time
                    )} - ${timeFunctions.formatTime(reservation.end_time)}`}
            </Box>
            <Box sx={timeSlotsContainer}>
                {weekDays.map((day) => {
                    return (
                        <Box sx={timeSlots} key={day}>
                            <h4>{day}</h4>
                            <TimeSlots
                                time_slots={filterTimeSlotsByDay(time_slots, day)}
                                company={name}
                                onReservation={onReservation}
                                reservations={props.reservations}
                                day={day}
                                selected={selected}
                            />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Company
