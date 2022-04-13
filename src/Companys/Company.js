import { Box } from '@mui/material'
import React from 'react'
import TimeSlots from './TimeSlots'

const container = {
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   alignItems: 'center',
   justifyContent: 'center'
}

const timeSlots = {
  width: '15rem',
  height: '40rem',
  overflow: 'scroll',
  display: 'flex',
  justifyContent: 'center'
}

const companyName = {
  padding: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'red',
  height: '5rem',
  width: '100%'
}


const Company = (props) => {
  const {name,time_slots} = props.company;
  const weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

  const filterTimeSlots = (time_slots,day) => {
    return time_slots.filter((time_slot)=>{
      const [weekDay] = [new Date(time_slot.start_time).toLocaleDateString('en-US',{weekday: 'long'})]
      return weekDay === day 
    })
  }

  console.log(filterTimeSlots(time_slots,'Monday'));

  return (
    <Box sx={container}>
      <Box sx={companyName}>
          <h3>{name}</h3>
      </Box>
      <Box>
        Reservation
      </Box>
      <Box sx={timeSlots}>
        <ul>
        {weekDays.map((day)=>{
          return <><h4>
            {day}
          </h4>
          <TimeSlots time_slots={filterTimeSlots(time_slots,day)}></TimeSlots> 
          </>
        })}  
        </ul>
      </Box>
    </Box>
  )
}

export default Company