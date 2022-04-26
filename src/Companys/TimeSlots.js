import React from 'react'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/material'
import { timeFunctions } from '../Utility/timeFunctions'

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
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
})
const selectedStyle = {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
}

const ButtonsContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
})

const TimeSlots = (props) => {
    const time_slots = props.time_slots
    const selected = props.selected

    const checkReservations = (time_slot, reservation) => {
        if (
            reservation &&
      props.day ===
        new Date(reservation.start_time).toLocaleDateString('en-US', {
            weekday: 'long',
        })
        ) {
            return (
                (new Date(time_slot.start_time).getHours() >=
          new Date(reservation.start_time).getHours() &&
          new Date(time_slot.start_time).getHours() <
            new Date(reservation.end_time).getHours()) ||
        (new Date(time_slot.end_time).getHours() <=
          new Date(reservation.end_time).getHours() &&
          new Date(time_slot.end_time).getHours() >
            new Date(reservation.start_time).getHours())
            )
        }
    }

    const handleClick = (value, index) => () => {
        props.onReservation(value, props.company, index, props.day)
    }

    return (
        <ButtonsContainer>
            {time_slots.map((time_slot, index) => {
                if (
                    (checkReservations(
                        time_slot,
                        props.reservations['Company 1'],
                        index
                    ) ||
              checkReservations(
                  time_slot,
                  props.reservations['Company 2'],
                  index
              ) ||
              checkReservations(
                  time_slot,
                  props.reservations['Company 3'],
                  index
              )) &&
            (selected.index !== index || selected.day !== props.day)
                ) {
                    return (
                        <BootstrapButton
                            disabled
                            key={index}
                            onClick={handleClick(time_slot, index)}
                        >
                            {timeFunctions.formatTime(time_slot.start_time)}
                            {' -'} {timeFunctions.formatTime(time_slot.end_time)}
                        </BootstrapButton>
                    )
                } else {
                    return (
                        <BootstrapButton
                            sx={
                                selected.index === index && selected.day === props.day
                                    ? selectedStyle
                                    : ''
                            }
                            key={index}
                            onClick={handleClick(time_slot, index)}
                        >
                            {timeFunctions.formatTime(time_slot.start_time)}
                            {' -'} {timeFunctions.formatTime(time_slot.end_time)}
                        </BootstrapButton>
                    )
                }
            })}
        </ButtonsContainer>
    )
}

export default TimeSlots
