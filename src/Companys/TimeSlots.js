import React from 'react'
import { Box,Button } from '@mui/material';
import { styled } from '@mui/material';

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
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});


const TimeSlots = (props) => {
  const time_slots = props.time_slots;
  
  const formatTime = (time) =>{
    const [weekDay] = [new Date(time).toLocaleString('en-US', { hour: 'numeric', hour12: true })]
    return weekDay;
  }

  return (
    <Box>
      <Box>
        {time_slots.map((time_slot)=>{
            return <BootstrapButton>{formatTime(time_slot.start_time)} - {formatTime(time_slot.end_time)}</BootstrapButton>
        })}
      </Box>
    </Box>
  )
}

export default TimeSlots